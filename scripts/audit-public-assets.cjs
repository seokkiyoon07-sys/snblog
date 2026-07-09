const fs = require('node:fs');
const path = require('node:path');

const PUBLIC_DIR = 'public';
const SEARCH_DIRS = ['src', 'content', 'data', 'docs', 'md', 'scripts'];
const REPORT_PATH = 'docs/asset-cleanup-report.md';
const SOURCE_EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.md',
  '.html',
  '.json',
  '.css',
]);
const PUBLIC_REFERENCE_EXTENSIONS = new Set([
  '.html',
  '.js',
  '.css',
  '.json',
  '.txt',
  '.xml',
  '.webmanifest',
]);
const TRACKED_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
  '.pdf',
  '.html',
  '.torrent',
]);

function walk(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (['.git', 'node_modules', '.next'].includes(entry.name)) {
        return [];
      }
      return walk(fullPath);
    }

    return [fullPath];
  });
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isReferenced(publicRelativePath, haystack) {
  const normalized = publicRelativePath.replace(/\\/g, '/');
  const slashPath = `/${normalized}`;
  const encoded = encodeURI(normalized).replace(/'/g, '%27');
  const encodedSlashPath = `/${encoded}`;

  if (
    haystack.includes(normalized) ||
    haystack.includes(slashPath) ||
    haystack.includes(encoded) ||
    haystack.includes(encodedSlashPath)
  ) {
    return true;
  }

  const basename = path.basename(normalized);
  if (basename.length > 14) {
    return new RegExp(`['"/]${escapeRegExp(basename)}['"\\)]`).test(haystack);
  }

  return false;
}

const appSourceFiles = SEARCH_DIRS.flatMap(walk).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return file !== REPORT_PATH && SOURCE_EXTENSIONS.has(ext);
});

const publicReferenceFiles = walk(PUBLIC_DIR).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return PUBLIC_REFERENCE_EXTENSIONS.has(ext);
});

const sourceFiles = [...appSourceFiles, ...publicReferenceFiles];

const haystack = sourceFiles
  .map(file => fs.readFileSync(file, 'utf8'))
  .join('\n');

const publicFiles = walk(PUBLIC_DIR)
  .filter(file => TRACKED_EXTENSIONS.has(path.extname(file).toLowerCase()))
  .map(file => {
    const relative = path.relative(PUBLIC_DIR, file).replace(/\\/g, '/');
    const stat = fs.statSync(file);
    return {
      file,
      relative,
      size: stat.size,
      ext: path.extname(file).toLowerCase(),
      referenced: isReferenced(relative, haystack),
    };
  });

const bySizeDesc = [...publicFiles].sort((a, b) => b.size - a.size);
const unreferenced = publicFiles.filter(file => !file.referenced);
const unreferencedBySize = [...unreferenced].sort((a, b) => b.size - a.size);
const totalBytes = publicFiles.reduce((sum, file) => sum + file.size, 0);
const unreferencedBytes = unreferenced.reduce((sum, file) => sum + file.size, 0);

const directoryStats = new Map();
for (const file of publicFiles) {
  const topDir = file.relative.split('/')[0] || '(root)';
  const stats = directoryStats.get(topDir) || {
    files: 0,
    bytes: 0,
    unreferencedFiles: 0,
    unreferencedBytes: 0,
  };

  stats.files += 1;
  stats.bytes += file.size;
  if (!file.referenced) {
    stats.unreferencedFiles += 1;
    stats.unreferencedBytes += file.size;
  }
  directoryStats.set(topDir, stats);
}

const directoryRows = [...directoryStats.entries()]
  .sort((a, b) => b[1].bytes - a[1].bytes)
  .map(([dir, stats]) => {
    return `| \`${dir}\` | ${stats.files} | ${formatBytes(
      stats.bytes
    )} | ${stats.unreferencedFiles} | ${formatBytes(
      stats.unreferencedBytes
    )} |`;
  });

const report = [
  '# Public Asset Cleanup Report',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  '## Summary',
  '',
  `- Scanned public assets: ${publicFiles.length}`,
  `- Total public asset size: ${formatBytes(totalBytes)}`,
  `- Potentially unreferenced assets: ${unreferenced.length}`,
  `- Potentially unreferenced size: ${formatBytes(unreferencedBytes)}`,
  '',
  '> This is a static reference audit. Treat results as cleanup candidates, not automatic deletion instructions. Some files may be referenced externally, by deployed URLs, or by runtime-generated content.',
  '',
  '## Directory Breakdown',
  '',
  '| Directory | Files | Size | Potentially Unreferenced | Potentially Unreferenced Size |',
  '| --- | ---: | ---: | ---: | ---: |',
  ...directoryRows,
  '',
  '## Largest Public Assets',
  '',
  '| File | Size | Referenced In Repo |',
  '| --- | ---: | :---: |',
  ...bySizeDesc.slice(0, 40).map(file => {
    return `| \`${file.relative}\` | ${formatBytes(file.size)} | ${
      file.referenced ? 'yes' : 'no'
    } |`;
  }),
  '',
  '## Largest Potential Cleanup Candidates',
  '',
  '| File | Size |',
  '| --- | ---: |',
  ...unreferencedBySize.slice(0, 80).map(file => {
    return `| \`${file.relative}\` | ${formatBytes(file.size)} |`;
  }),
  '',
  '## Safer First Pass',
  '',
  '- Review large unreferenced PDFs and presentation folders first.',
  '- Keep favicon, site verification, sitemap-adjacent, and known externally linked files unless manually confirmed.',
  '- Move questionable assets to an archive folder outside the repo before deleting from git history.',
  '',
].join('\n');

fs.writeFileSync(REPORT_PATH, report);

console.log(
  JSON.stringify(
    {
      publicFiles: publicFiles.length,
      totalSize: formatBytes(totalBytes),
      unreferenced: unreferenced.length,
      unreferencedSize: formatBytes(unreferencedBytes),
      report: REPORT_PATH,
    },
    null,
    2
  )
);
