#!/usr/bin/env node
// public/ 안의 큰 PNG·JPG를 같은 파일 이름 그대로 줄인다 (글 속 경로를 바꾸지 않기 위해).
// - 긴 변이 MAX_SIDE 보다 크면 줄이고, JPG는 mozjpeg, PNG는 팔레트 압축으로 다시 저장한다.
// - 결과가 원본의 KEEP_RATIO 보다 크면 원본을 둔다.
// - 기본은 git에 커밋돼 있고 수정되지 않은 파일만 고친다. 원본은 git으로 되돌릴 수 있다.
//
// 사용: node scripts/optimize-images.cjs [--dry] [--min-kb 500] [경로...]
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const MAX_SIDE = 2000;
const KEEP_RATIO = 0.8;
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const minIndex = args.indexOf('--min-kb');
const minBytes = (minIndex >= 0 ? Number(args[minIndex + 1]) : 500) * 1024;
const roots = args.filter(
  (arg, i) => !arg.startsWith('--') && args[i - 1] !== '--min-kb'
);

function git(...gitArgs) {
  return execFileSync('git', gitArgs, { encoding: 'utf8', maxBuffer: 1 << 26 });
}

const tracked = git('ls-files', '-z', ...(roots.length ? roots : ['public']))
  .split('\0')
  .filter(file => /\.(png|jpe?g)$/i.test(file));
const dirty = new Set(
  git('status', '--porcelain', '-z', 'public')
    .split('\0')
    .map(line => line.slice(3))
);

async function shrink(file) {
  const input = fs.readFileSync(file);
  const image = sharp(input, { failOn: 'none' }).rotate();
  const { width = 0, height = 0 } = await image.metadata();
  if (Math.max(width, height) > MAX_SIDE)
    image.resize({
      width: MAX_SIDE,
      height: MAX_SIDE,
      fit: 'inside',
      withoutEnlargement: true,
    });
  const output = /\.png$/i.test(file)
    ? await image
        .png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 })
        .toBuffer()
    : await image.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  return { before: input.length, after: output.length, output };
}

(async () => {
  let saved = 0;
  let changed = 0;
  for (const file of tracked) {
    if (dirty.has(file) || fs.statSync(file).size < minBytes) continue;
    try {
      const { before, after, output } = await shrink(file);
      if (after > before * KEEP_RATIO) continue;
      if (!dry) fs.writeFileSync(file, output);
      saved += before - after;
      changed += 1;
      console.log(
        `${(before / 1024).toFixed(0).padStart(6)}KB → ${(after / 1024)
          .toFixed(0)
          .padStart(5)}KB  ${path.relative('.', file)}`
      );
    } catch (error) {
      console.warn(`건너뜀 ${file}: ${error.message}`);
    }
  }
  console.log(
    `\n${dry ? '(미리보기) ' : ''}${changed}개 파일, ${(saved / 1024 / 1024).toFixed(1)}MB 줄임`
  );
})();
