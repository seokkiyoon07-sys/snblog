const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const sharp = require('sharp');

// Keep existing URLs and formats. Originals remain recoverable from Git.
async function main() {
  const write = process.argv.includes('--write');
  const files = execFileSync(
    'git',
    ['ls-files', '-z', 'public/images/thumbnail'],
    {
      encoding: 'utf8',
    }
  )
    .split('\0')
    .filter(file => /\.(png|jpe?g|webp)$/i.test(file));
  let before = 0;
  let after = 0;
  let changed = 0;
  for (const file of files) {
    const original = fs.readFileSync(file);
    before += original.length;
    if (original.length < 300 * 1024) {
      after += original.length;
      continue;
    }
    const ext = path.extname(file).toLowerCase();
    let pipeline = sharp(original).rotate().resize({
      width: 1280,
      height: 1280,
      fit: 'inside',
      withoutEnlargement: true,
    });
    if (ext === '.png') {
      const { isOpaque } = await sharp(original).stats();
      pipeline = isOpaque
        ? pipeline.png({ palette: true, quality: 95, effort: 7 })
        : pipeline.png({ compressionLevel: 9 });
    } else if (ext === '.webp') pipeline = pipeline.webp({ quality: 85 });
    else pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
    const optimized = await pipeline.toBuffer();
    if (optimized.length < original.length) {
      if (write) fs.writeFileSync(file, optimized);
      changed++;
      after += optimized.length;
    } else after += original.length;
  }
  console.log(
    JSON.stringify(
      {
        write,
        files: files.length,
        changed,
        before,
        after,
        savedPercent: Number(((1 - after / before) * 100).toFixed(1)),
      },
      null,
      2
    )
  );
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
