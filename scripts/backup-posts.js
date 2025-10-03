#!/usr/bin/env node

/**
 * 포스트 백업 스크립트
 * posts.ts 파일을 안전하게 백업합니다.
 */

const fs = require('fs');
const path = require('path');

const POSTS_FILE = path.join(__dirname, '..', 'src', 'data', 'posts.ts');
const BACKUP_DIR = path.join(__dirname, '..', 'backups');
const BACKUP_FILE = path.join(BACKUP_DIR, `posts-backup-${new Date().toISOString().replace(/[:.]/g, '-')}.ts`);

// 백업 디렉토리 생성
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// posts.ts 파일 백업
try {
  const postsContent = fs.readFileSync(POSTS_FILE, 'utf8');
  fs.writeFileSync(BACKUP_FILE, postsContent);
  
  console.log('✅ 포스트 백업 완료!');
  console.log(`📁 백업 위치: ${BACKUP_FILE}`);
  
  // 최근 10개 백업만 유지
  const backupFiles = fs.readdirSync(BACKUP_DIR)
    .filter(file => file.startsWith('posts-backup-') && file.endsWith('.ts'))
    .sort()
    .reverse();
  
  if (backupFiles.length > 10) {
    const filesToDelete = backupFiles.slice(10);
    filesToDelete.forEach(file => {
      fs.unlinkSync(path.join(BACKUP_DIR, file));
      console.log(`🗑️ 오래된 백업 삭제: ${file}`);
    });
  }
  
} catch (error) {
  console.error('❌ 백업 실패:', error.message);
  process.exit(1);
}
