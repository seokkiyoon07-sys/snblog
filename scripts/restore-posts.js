#!/usr/bin/env node

/**
 * 포스트 복구 스크립트
 * 백업된 posts.ts 파일을 복구합니다.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const POSTS_FILE = path.join(__dirname, '..', 'src', 'data', 'posts.ts');
const BACKUP_DIR = path.join(__dirname, '..', 'backups');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 사용 가능한 백업 파일 목록 표시
function listBackups() {
  if (!fs.existsSync(BACKUP_DIR)) {
    console.log('❌ 백업 디렉토리가 존재하지 않습니다.');
    return [];
  }
  
  const backupFiles = fs.readdirSync(BACKUP_DIR)
    .filter(file => file.startsWith('posts-backup-') && file.endsWith('.ts'))
    .sort()
    .reverse();
  
  if (backupFiles.length === 0) {
    console.log('❌ 사용 가능한 백업 파일이 없습니다.');
    return [];
  }
  
  console.log('\n📁 사용 가능한 백업 파일:');
  backupFiles.forEach((file, index) => {
    const filePath = path.join(BACKUP_DIR, file);
    const stats = fs.statSync(filePath);
    const date = stats.mtime.toLocaleString('ko-KR');
    console.log(`${index + 1}. ${file} (${date})`);
  });
  
  return backupFiles;
}

// 백업 파일 복구
function restoreBackup(backupFile) {
  const backupPath = path.join(BACKUP_DIR, backupFile);
  
  try {
    const backupContent = fs.readFileSync(backupPath, 'utf8');
    fs.writeFileSync(POSTS_FILE, backupContent);
    
    console.log('✅ 포스트 복구 완료!');
    console.log(`📁 복구된 파일: ${backupFile}`);
    
  } catch (error) {
    console.error('❌ 복구 실패:', error.message);
  }
}

// 메인 실행
async function main() {
  console.log('🔄 포스트 복구 도구');
  console.log('==================');
  
  const backupFiles = listBackups();
  
  if (backupFiles.length === 0) {
    rl.close();
    return;
  }
  
  rl.question('\n복구할 백업 파일 번호를 입력하세요 (1-' + backupFiles.length + '): ', (answer) => {
    const index = parseInt(answer) - 1;
    
    if (index >= 0 && index < backupFiles.length) {
      restoreBackup(backupFiles[index]);
    } else {
      console.log('❌ 잘못된 번호입니다.');
    }
    
    rl.close();
  });
}

main();

