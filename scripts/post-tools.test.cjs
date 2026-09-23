const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  readRecords,
  readRevisionRecords,
  changedPosts,
  createPayload,
  addedTimelineEntries,
  createUpdatePayload,
} = require('./notify-posts.cjs');
const {
  createBackup,
  listBackups,
  restoreBackup,
} = require('./post-backup.cjs');

const post = {
  id: 'sample',
  title: 'Title',
  excerpt: 'Summary',
  category: 'SN Originals',
  published: true,
  url: '/originals/sample',
};

test('loads imported post data from the matching git revision', () => {
  const sources = {
    'old:src/data/post-records.ts': "import { items } from './items'; export const allPosts = [...items];",
    'old:src/data/items.ts': `export const items = ${JSON.stringify([post])};`,
    'new:src/data/post-records.ts': "import { items } from './items'; export const allPosts = [...items];",
    'new:src/data/items.ts': "import data from './items.json'; export const items = data;",
    'new:src/data/items.json': JSON.stringify([{ ...post, title: 'Changed' }]),
  };
  const git = args => { assert.equal(args[0], 'show'); return sources[args[1]]; };
  assert.equal(readRevisionRecords(git, 'old')[0].title, 'Title');
  assert.equal(readRevisionRecords(git, 'new')[0].title, 'Changed');
});

test('timeline notifications include only new dates and ignore edits or removals', () => {
  const entry = (date, title = '제목', summary = '요약') =>
    `<time datetime="${date}">${date}</time><div class="sn-update-card"><h3>${title}</h3><p class="sn-update-brief">${summary}</p>`;
  const before = entry('2026-09-18') + entry('2026-09-07');
  const after = entry('2026-09-23', '모델 교체', '최신 모드 비용 주의') + entry('2026-09-21') + entry('2026-09-18', '수정');
  const entries = addedTimelineEntries(before, after);
  assert.deepEqual(entries.map(entry => entry.date), ['2026-09-23', '2026-09-21']);
  assert.deepEqual(addedTimelineEntries(after, after), []);
  assert.deepEqual(addedTimelineEntries(before, entry('2026-09-18', '수정')), []);
  const payload = createUpdatePayload(post, entries);
  assert.match(payload.body, /업데이트/);
  assert.match(payload.connectInfo[0].description, /최신 모드 비용 주의/);
  assert.doesNotMatch(payload.connectInfo[0].description, /2026-09-18/);
  assert.match(payload.connectInfo[0].description, /https:\/\/blog.snacademy.co.kr\/originals\/sample/);
});

test('detects additions and publication transitions, ignoring edits, drafts and removals', () => {
  const before = [
    post,
    { ...post, id: 'draft', published: false },
    { ...post, id: 'deleted' },
  ];
  const after = [
    { ...post, title: 'Edited' },
    { ...post, id: 'draft' },
    { ...post, id: 'added' },
    { ...post, id: 'hidden', published: false },
  ];
  assert.deepEqual(
    changedPosts(before, after, []).map(p => p.id),
    ['draft', 'added']
  );
  assert.deepEqual(changedPosts([post], [{ ...post }], []), []);
});

test('ignores body-only changes using storage category aliases', () => {
  for (const [category, folder] of [
    ['SN Originals', 'originals'],
    ['SN History', 'history'],
    ['korean-problem', 'problem-download'],
    ['notice', 'notice'],
  ]) {
    const record = { ...post, category };
    assert.equal(
      changedPosts([record], [record], [`content/${folder}/sample.html`])
        .length,
      0
    );
    assert.equal(
      changedPosts([record], [record], ['content/posts/unrelated.html']).length,
      0
    );
  }
});

test('recommendations, ordering and metadata edits do not announce existing posts', () => {
  const other = { ...post, id: 'other', featured: false };
  assert.deepEqual(
    changedPosts(
      [post, other],
      [
        { ...other, featured: true },
        {
          ...post,
          featured: true,
          title: 'Revised',
          date: '2026-09-13',
          thumbnail: '/new.svg',
        },
      ]
    ),
    []
  );
  assert.deepEqual(changedPosts([post], [{ ...post, published: false }]), []);
});

test('first push skips the archive even in send mode', () => {
  const { execFileSync } = require('node:child_process');
  const output = execFileSync(
    process.execPath,
    [path.join(__dirname, 'notify-posts.cjs'), '--send'],
    {
      encoding: 'utf8',
      env: {
        ...process.env,
        BEFORE_SHA: '0'.repeat(40),
        JANDI_WEBHOOK_URL: '',
      },
    }
  );
  assert.match(output, /skipping notifications/);
});

test('reads typed records and produces JSON with quotes, newlines and absolute image URLs', () => {
  const record = {
    ...post,
    title: 'A "quoted"\n제목',
    thumbnail: 'https://example.com/image.png',
  };
  const records = readRecords(
    `import type { Post } from './posts'; export const allPosts: Post[] = ${JSON.stringify([record])};`
  );
  assert.deepEqual(records, [record]);
  const payload = JSON.parse(JSON.stringify(createPayload(records[0])));
  assert.equal(payload.connectInfo[0].title, record.title);
  assert.equal(payload.connectInfo[0].imageUrl, record.thumbnail);
  assert.equal(
    payload.connectButtons[0].url,
    'https://blog.snacademy.co.kr/originals/sample'
  );
});

test('restores metadata and nested content, preserves new files and snapshots the previous state', () => {
  const temp = path.resolve(__dirname, '../tmp');
  fs.mkdirSync(temp, { recursive: true });
  const root = fs.mkdtempSync(path.join(temp, 'post-tools-'));
  try {
    for (const [file, value] of Object.entries({
      'src/data/posts.ts': 'helpers',
      'src/data/post-records.ts': 'records',
      'content/originals/sample.html': 'body',
    })) {
      fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
      fs.writeFileSync(path.join(root, file), value);
    }
    const backup = createBackup(root);
    fs.writeFileSync(
      path.join(root, 'src/data/post-records.ts'),
      'changed records'
    );
    fs.writeFileSync(
      path.join(root, 'content/originals/sample.html'),
      'changed body'
    );
    fs.writeFileSync(path.join(root, 'content/new.html'), 'new');
    const previous = restoreBackup(root, backup);
    assert.notEqual(previous, backup);
    assert.equal(
      fs.readFileSync(path.join(root, 'src/data/post-records.ts'), 'utf8'),
      'records'
    );
    assert.equal(
      fs.readFileSync(path.join(root, 'content/originals/sample.html'), 'utf8'),
      'body'
    );
    assert.equal(
      fs.readFileSync(path.join(root, 'content/new.html'), 'utf8'),
      'new'
    );
    assert.equal(
      fs.readFileSync(
        path.join(root, 'backups', previous, 'src/data/post-records.ts'),
        'utf8'
      ),
      'changed records'
    );
    assert.equal(listBackups(root).length, 2);
    assert.throws(() => restoreBackup(root, '../outside'), /Unknown backup/);
  } finally {
    assert.equal(path.dirname(root), temp);
    fs.rmSync(root, { recursive: true, force: true });
  }
});
