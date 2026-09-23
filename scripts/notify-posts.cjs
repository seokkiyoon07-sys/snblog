const { execFileSync } = require('node:child_process');
const vm = require('node:vm');
const ts = require('typescript');

const RECORDS = 'src/data/post-records.ts';
const TIMELINE = 'content/startup/snargpt-development-2026.html';
const TIMELINE_ID = 'snargpt-development-2026';

function addedTimelineEntries(before, after) {
  const parse = source => Array.from(source.matchAll(
    /<time datetime="([^"]+)">[^<]*<\/time><div class="sn-update-card"><h3>([^<]+)<\/h3><p class="sn-update-brief">([^<]+)<\/p>/g
  ), match => ({ date: match[1], title: match[2], summary: match[3] }));
  const oldDates = new Set(parse(before).map(entry => entry.date));
  return parse(after).filter(entry => !oldDates.has(entry.date));
}

function createUpdatePayload(post, entries) {
  const payload = createPayload(post);
  payload.body = `📝 ${post.title} 업데이트`;
  payload.connectInfo[0].description = entries.map(entry =>
    `${entry.date} · ${entry.title}\n${entry.summary}`
  ).join('\n\n') + `\n\n${payload.connectButtons[0].url}`;
  return payload;
}

function readRecords(source) {
  if (!source) return [];
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const context = { exports: {} };
  vm.runInNewContext(outputText, context);
  return JSON.parse(JSON.stringify(context.exports.allPosts));
}

function changedPosts(before, after) {
  const previous = new Map(before.map(post => [post.id, post]));
  return after.filter(
    post => post.published && !previous.get(post.id)?.published
  );
}

function createPayload(post, baseUrl = 'https://blog.snacademy.co.kr') {
  const url = new URL(post.url, baseUrl).href;
  return {
    body: `새 블로그 글 발행 - ${post.title}`,
    connectColor: '#FAC11B',
    connectInfo: [
      {
        title: post.title,
        description: `${post.excerpt}\n\n${url}`,
        ...(post.thumbnail
          ? { imageUrl: new URL(post.thumbnail, baseUrl).href }
          : {}),
      },
    ],
    connectButtons: [{ name: '포스트 보기', type: 'link', url }],
  };
}

async function main() {
  const before = process.env.BEFORE_SHA;
  const after = process.env.AFTER_SHA || 'HEAD';
  if (!before) throw new Error('BEFORE_SHA is required');
  const git = args => execFileSync('git', args, { encoding: 'utf8' });
  const firstPush = /^0+$/.test(before);
  // A new branch has no publication baseline: never announce its entire archive.
  if (firstPush) {
    console.log('No previous revision; skipping notifications');
    return;
  }
  const oldSource = git(['show', `${before}:${RECORDS}`]);
  const newSource = git(['show', `${after}:${RECORDS}`]);
  const records = readRecords(newSource);
  const posts = changedPosts(readRecords(oldSource), records);
  const notifications = posts.map(post => ({ id: post.id, payload: createPayload(post) }));
  const timelinePost = records.find(post => post.id === TIMELINE_ID && post.published);
  if (timelinePost && !posts.some(post => post.id === TIMELINE_ID)) {
    const changedFiles = git(['diff', '--name-only', before, after, '--', TIMELINE]).trim();
    if (changedFiles) {
      // Only announce newly added dates, never wording fixes to historical entries.
      // A newly introduced timeline has no baseline: do not announce the archive.
      const existed = git(['ls-tree', '--name-only', before, '--', TIMELINE]).trim();
      const exists = git(['ls-tree', '--name-only', after, '--', TIMELINE]).trim();
      if (existed && exists) {
        const entries = addedTimelineEntries(
          git(['show', `${before}:${TIMELINE}`]),
          git(['show', `${after}:${TIMELINE}`])
        );
        if (entries.length) notifications.push({
          id: TIMELINE_ID,
          payload: createUpdatePayload(timelinePost, entries),
        });
      }
    }
  }
  const send = process.argv.includes('--send');
  if (send && notifications.length && !process.env.JANDI_WEBHOOK_URL)
    throw new Error('JANDI_WEBHOOK_URL is required');
  for (const { id, payload } of notifications) {
    if (send) {
      const response = await fetch(process.env.JANDI_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Jandi returned ${response.status}`);
    }
    console.log(`${send ? 'Sent' : 'Dry run'}: ${id}`);
    if (!send) console.log(JSON.stringify(payload, null, 2));
  }
  console.log(`${notifications.length} notifications`);
}

module.exports = { readRecords, changedPosts, createPayload, addedTimelineEntries, createUpdatePayload };
if (require.main === module)
  main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
