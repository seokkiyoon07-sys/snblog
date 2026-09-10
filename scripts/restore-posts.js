#!/usr/bin/env node
const path = require('node:path');
const readline = require('node:readline/promises');
const { listBackups, restoreBackup } = require('./post-backup.cjs');
async function main() {
  const root = path.join(__dirname, '..');
  const backups = listBackups(root);
  if (!backups.length) {
    console.log(
      '사용 가능한 새 형식의 백업이 없습니다. npm run backup:posts를 실행하세요.'
    );
    return;
  }
  backups.forEach((name, index) => console.log(`${index + 1}. ${name}`));
  const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    const index = Number(await prompt.question('복구할 번호: ')) - 1;
    if (!Number.isInteger(index) || !backups[index])
      throw new Error('잘못된 번호입니다.');
    const previous = restoreBackup(root, backups[index]);
    console.log(`복구 완료. 복구 전 상태: backups/${previous}`);
    console.log(
      '백업 이후 추가된 파일은 유지됩니다. 이미지는 Git에서 복구하세요.'
    );
  } finally {
    prompt.close();
  }
}
main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
