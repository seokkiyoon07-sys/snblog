const fs = require('node:fs');
const path = require('node:path');

const SOURCES = ['src/data/posts.ts', 'src/data/post-records.ts', 'content'];

function createBackup(root) {
  const directory = path.join(root, 'backups');
  fs.mkdirSync(directory, { recursive: true });
  const prefix = `posts-backup-${new Date().toISOString().replace(/[:.]/g, '-')}-`;
  const destination = fs.mkdtempSync(path.join(directory, prefix));
  for (const source of SOURCES) {
    fs.cpSync(path.join(root, source), path.join(destination, source), {
      recursive: true,
    });
  }
  return path.basename(destination);
}

function listBackups(root) {
  const directory = path.join(root, 'backups');
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter(
      entry => entry.isDirectory() && entry.name.startsWith('posts-backup-')
    )
    .map(entry => entry.name)
    .sort()
    .reverse();
}

function restoreBackup(root, name) {
  if (!listBackups(root).includes(name)) throw new Error('Unknown backup');
  const source = path.join(root, 'backups', name);
  for (const file of SOURCES) fs.accessSync(path.join(source, file));
  const previous = createBackup(root);
  for (const file of SOURCES) {
    fs.cpSync(path.join(source, file), path.join(root, file), {
      recursive: true,
    });
  }
  return previous;
}

module.exports = { createBackup, listBackups, restoreBackup };
