const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
  readRecords,
  changedPosts,
  createPayload,
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

test('detects multiple additions, edits and newly published posts, but ignores drafts and removals', () => {
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
    ['sample', 'draft', 'added']
  );
  assert.deepEqual(changedPosts([post], [{ ...post }], []), []);
});

test('detects body-only changes using storage category aliases', () => {
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
      1
    );
    assert.equal(
      changedPosts([record], [record], ['content/posts/unrelated.html']).length,
      0
    );
  }
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
