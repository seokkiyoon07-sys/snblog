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

function readRecords(source, resolveImport) {
  if (!source) return [];
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const context = { exports: {}, require: resolveImport };
  vm.runInNewContext(outputText, context);
  return JSON.parse(JSON.stringify(context.exports.allPosts));
}

function readRevisionRecords(git, revision) {
  const path = require('node:path').posix;
  const cache = new Map();
  function load(file) {
    if (cache.has(file)) return cache.get(file);
    const source = git(['show', `${revision}:${file}`]);
    if (file.endsWith('.json')) {
      const value = JSON.parse(source);
      cache.set(file, value);
      return value;
    }
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
    });
    const context = { exports: {}, require: name => {
      if (!name.startsWith('./') && !name.startsWith('../')) throw new Error('Only relative data imports are supported');
      const target = path.normalize(path.join(path.dirname(file), name + (path.extname(name) ? '' : '.ts')));
      if (!target.startsWith('src/data/')) throw new Error('Data import must stay within src/data');
      return load(target);
    } };
    cache.set(file, context.exports);
    vm.runInNewContext(outputText, context);
    return context.exports;
  }
  return JSON.parse(JSON.stringify(load(RECORDS).allPosts));
}

function changedPosts(before, after) {
  const previous = new Map(before.map(post => [post.id, post]));
  return after.filter(
    post => post.published && !previous.get(post.id)?.published &&
      !(post.category === 'SN History' && (
        post.id.startsWith('korean-history-') ||
        post.tags?.some(tag => tag === '한국사' || tag === '한국사 외전')
      ))
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

function createSlackPayload(payload) {
  return {
    text: [payload.body, ...payload.connectInfo.map(info => info.description)].join('\n\n'),
    mrkdwn: false,
    unfurl_links: false,
    unfurl_media: false,
  };
}

function notificationTargets(env, channel = 'all') {
  if (!['all', 'jandi', 'slack'].includes(channel)) throw new Error('Use --channel=all, --channel=jandi or --channel=slack');
  return [
    { name: 'jandi', url: env.JANDI_WEBHOOK_URL },
    { name: 'slack', url: env.SLACK_WEBHOOK_URL },
  ].filter(target => target.url && (channel === 'all' || channel === target.name));
}

async function main() {
  require('dotenv').config({ path: '.env.local', quiet: true });
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
  const records = readRevisionRecords(git, after);
  const posts = changedPosts(readRevisionRecords(git, before), records);
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
  const channel = process.argv.find(arg => arg.startsWith('--channel='))?.split('=')[1] || 'all';
  const targets = notificationTargets(process.env, channel);
  if (send && notifications.length && !targets.length)
    throw new Error(`No webhook configured for ${channel}; set JANDI_WEBHOOK_URL or SLACK_WEBHOOK_URL`);
  const failures = [];
  for (const { id, payload } of notifications) {
    if (!send) {
      console.log(`Dry run: ${id}`);
      console.log(JSON.stringify(channel === 'slack' ? createSlackPayload(payload) : payload, null, 2));
      continue;
    }
    for (const target of targets) {
      try {
        const response = await fetch(target.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(target.name === 'slack' ? createSlackPayload(payload) : payload),
          signal: AbortSignal.timeout(15000),
        });
        if (!response.ok) throw new Error();
        if (target.name === 'slack' && (await response.text()).trim() !== 'ok') throw new Error();
        console.log(`Sent (${target.name}): ${id}`);
      } catch {
        failures.push(`${target.name}: ${id}`);
      }
    }
  }
  if (failures.length) throw new Error(`Notification failed (${failures.join(', ')}). Retry only the failed channel with --channel=...`);
  console.log(`${notifications.length} notifications`);
}

module.exports = { readRecords, readRevisionRecords, changedPosts, createPayload, addedTimelineEntries, createUpdatePayload, createSlackPayload, notificationTargets };
if (require.main === module)
  main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
