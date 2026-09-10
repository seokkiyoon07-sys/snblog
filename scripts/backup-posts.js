#!/usr/bin/env node
const path = require('node:path');
const { createBackup } = require('./post-backup.cjs');
try {
  const name = createBackup(path.join(__dirname, '..'));
  console.log(`글 정보와 본문 백업 완료: backups/${name}`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
