const { execFileSync } = require('node:child_process');
const { isDeepStrictEqual } = require('node:util');
const vm = require('node:vm');
const ts = require('typescript');

const RECORDS = 'src/data/post-records.ts';
const FOLDERS = {
  'SN Originals': 'originals',
  'SN History': 'history',
  'korean-problem': 'problem-download',
};

function readRecords(source) {
  if (!source) return [];
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  });
  const context = { exports: {} };
  vm.runInNewContext(outputText, context);
  return JSON.parse(JSON.stringify(context.exports.allPosts));
}

function changedPosts(before, after, changedFiles) {
  const previous = new Map(before.map(post => [post.id, post]));
  const files = new Set(changedFiles);
  return after.filter(
    post =>
      post.published &&
      (!isDeepStrictEqual(previous.get(post.id), post) ||
        files.has(
          `content/${FOLDERS[post.category] || post.category}/${post.id}.html`
        ))
  );
}

function createPayload(post, baseUrl = 'https://blog.snacademy.co.kr') {
  const url = new URL(post.url, baseUrl).href;
  return {
    body: `블로그 글 업데이트 - ${post.title}`,
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
  const oldSource = firstPush ? '' : git(['show', `${before}:${RECORDS}`]);
  const newSource = git(['show', `${after}:${RECORDS}`]);
  const files = firstPush
    ? []
    : git(['diff', '--name-only', '-z', before, after, '--', 'content']).split(
        '\0'
      );
  const posts = changedPosts(
    readRecords(oldSource),
    readRecords(newSource),
    files
  );
  const send = process.argv.includes('--send');
  if (send && !process.env.JANDI_WEBHOOK_URL)
    throw new Error('JANDI_WEBHOOK_URL is required');
  for (const post of posts) {
    const payload = createPayload(post);
    if (send) {
      const response = await fetch(process.env.JANDI_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Jandi returned ${response.status}`);
    }
    console.log(`${send ? 'Sent' : 'Dry run'}: ${post.id}`);
  }
  console.log(`${posts.length} changed published posts`);
}

module.exports = { readRecords, changedPosts, createPayload };
if (require.main === module)
  main().catch(error => {
    console.error(error.message);
    process.exitCode = 1;
  });
