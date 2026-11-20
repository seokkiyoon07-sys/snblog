#!/usr/bin/env node
// 글 파일 맨 위의 정보(--- 사이 YAML)를 모아 src/data/post-records.ts 를 만든다.
//
//   content/columns/2027-nonsul-checklist.html
//   ---
//   id: 2027-nonsul-checklist
//   title: ...
//   ---
//   (본문)
//
// 글 하나를 추가하거나 고칠 때는 그 글 파일만 고치고 `npm run posts:build` 를 실행한다.
// dev·build 전에는 자동으로 실행된다 (package.json 의 predev·prebuild).
//
//   --check   만들 결과가 지금 파일과 다르면 실패한다 (커밋 전 확인용)
//   --allow-removal  전에 있던 글이 사라져도 멈추지 않는다
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import prettier from 'prettier';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = path.join(ROOT, 'content');
const OUTPUT = path.join(ROOT, 'src/data/post-records.ts');
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;

// 카테고리 → 폴더 (src/lib/post-content.ts 와 같아야 한다)
const CATEGORY_FOLDER = {
  'SN Originals': 'originals',
  'SN History': 'history',
  'korean-problem': 'problem-download',
};
const REQUIRED = ['id', 'title', 'excerpt', 'category', 'author', 'date', 'readTime', 'featured', 'published', 'url'];

const args = new Set(process.argv.slice(2));

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith('.html') ? [full] : [];
  });
}

function readRecords() {
  const records = [];
  const errors = [];
  for (const file of walk(CONTENT)) {
    const source = fs.readFileSync(file, 'utf8');
    const match = source.match(FRONTMATTER);
    if (!match) continue;
    const relative = path.relative(ROOT, file);
    let record;
    try {
      record = parse(match[1]);
    } catch (error) {
      errors.push(`${relative}: YAML 형식 오류 - ${error.message}`);
      continue;
    }
    const missing = REQUIRED.filter(key => record?.[key] === undefined);
    if (missing.length) errors.push(`${relative}: 빠진 항목 ${missing.join(', ')}`);
    if (record.id !== path.basename(file, '.html'))
      errors.push(`${relative}: id(${record.id})가 파일 이름과 다릅니다`);
    const folder = CATEGORY_FOLDER[record.category] ?? record.category;
    if (path.relative(CONTENT, path.dirname(file)) !== folder)
      errors.push(`${relative}: category(${record.category})의 폴더는 content/${folder} 입니다`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(record.date)))
      errors.push(`${relative}: date 는 '2026-11-20' 형식이어야 합니다`);
    records.push(record);
  }
  const ids = new Map();
  for (const record of records) {
    if (ids.has(record.id)) errors.push(`id 중복: ${record.id}`);
    ids.set(record.id, true);
  }
  if (errors.length) {
    console.error(`글 정보 오류 ${errors.length}건:\n- ${errors.join('\n- ')}`);
    process.exit(1);
  }
  return records;
}

// 같은 날짜의 글끼리는 지금 파일의 순서를 지키고, 새 글은 맨 앞에 둔다
function previousOrder() {
  if (!fs.existsSync(OUTPUT)) return [];
  return Array.from(
    fs.readFileSync(OUTPUT, 'utf8').matchAll(/^ {4}id: '([^']+)'/gm),
    match => match[1]
  );
}

async function main() {
  const records = readRecords();
  const before = previousOrder();
  const position = new Map(before.map((id, index) => [id, index]));
  const removed = before.filter(id => !records.some(record => record.id === id));
  if (removed.length && !args.has('--allow-removal')) {
    console.error(
      `전에 있던 글 ${removed.length}개의 정보를 찾지 못했습니다: ${removed.join(', ')}\n` +
        '글 파일 맨 위의 --- 정보가 지워지지 않았는지 확인하세요. 일부러 지운 글이면 --allow-removal 을 붙이세요.'
    );
    process.exit(1);
  }

  const time = record => new Date(record.date).getTime();
  records.sort(
    (a, b) =>
      time(b) - time(a) ||
      (position.get(a.id) ?? -1) - (position.get(b.id) ?? -1)
  );

  const source = `// ⚠️ 자동으로 만들어지는 파일입니다. 직접 고치지 마세요.
// 글 정보는 각 글 파일(content/{폴더}/{id}.html) 맨 위 --- 사이에 있습니다.
// 고친 뒤 \`npm run posts:build\` 로 다시 만듭니다 (scripts/build-post-records.mjs).
import type { Post } from './posts';
import { odysseyPosts } from './odyssey';
import { koreanHistoryPosts } from './korean-history';
import { historySupplementPosts } from './history-supplements';

export const allPosts: Post[] = [
${records.map(record => `${JSON.stringify(record)},`).join('\n')}
  ...historySupplementPosts,
  ...odysseyPosts,
  ...koreanHistoryPosts,
];
`;
  const options = (await prettier.resolveConfig(OUTPUT)) ?? {};
  const formatted = await prettier.format(source, {
    ...options,
    filepath: OUTPUT,
  });

  const current = fs.existsSync(OUTPUT) ? fs.readFileSync(OUTPUT, 'utf8') : '';
  if (args.has('--check')) {
    if (current !== formatted) {
      console.error('src/data/post-records.ts 가 글 파일과 다릅니다. npm run posts:build 를 실행하세요.');
      process.exit(1);
    }
    return;
  }
  if (current !== formatted) fs.writeFileSync(OUTPUT, formatted);
  console.log(`글 정보 ${records.length}개 → src/data/post-records.ts`);
}

main();
