#!/usr/bin/env tsx

/**
 * 노션 데이터베이스와 블로그 동기화 스크립트
 *
 * 사용법:
 *   npm run sync:notion
 *
 * 기능:
 *   - 노션 데이터베이스에서 발행된 글 가져오기
 *   - 이미지 자동 다운로드 및 로컬 저장
 *   - 마크다운 변환
 *   - notion-posts.ts 파일 생성 (기존 posts.ts는 보호)
 */

import { fetchNotionDatabase } from '../src/lib/notion-converter';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// 환경변수 로드
dotenv.config({ path: path.join(__dirname, '../.env.local') });

async function syncNotion() {
  console.log('🚀 노션 동기화 시작...\n');

  // 환경변수 확인
  if (!process.env.NOTION_TOKEN) {
    console.error('❌ NOTION_TOKEN 환경변수가 설정되지 않았습니다.');
    console.error('   .env.local 파일에 NOTION_TOKEN을 추가하세요.');
    process.exit(1);
  }

  if (!process.env.NOTION_DATABASE_ID) {
    console.error('❌ NOTION_DATABASE_ID 환경변수가 설정되지 않았습니다.');
    console.error('   .env.local 파일에 NOTION_DATABASE_ID를 추가하세요.');
    process.exit(1);
  }

  try {
    // 노션에서 포스트 가져오기
    console.log('📡 노션 데이터베이스에서 포스트를 가져오는 중...');
    const posts = await fetchNotionDatabase();
    console.log(`✅ ${posts.length}개의 포스트를 가져왔습니다.\n`);

    if (posts.length === 0) {
      console.log('ℹ️  발행된 포스트가 없습니다.');
      console.log('\n💡 확인사항:');
      console.log('   1. 노션 데이터베이스에 "발행" 체크박스 속성이 있나요?');
      console.log('   2. 발행 체크박스가 체크된 페이지가 있나요?');
      console.log('   3. Integration이 데이터베이스에 연결되어 있나요?');
      return;
    }

    // 포스트 정보 출력
    console.log('📝 가져온 포스트 목록:');
    posts.forEach((post, index) => {
      console.log(`   ${index + 1}. ${post.title}`);
      console.log(`      카테고리: ${post.category}`);
      console.log(`      날짜: ${post.date}`);
      console.log(`      태그: ${post.tags?.join(', ') || '없음'}`);
      console.log();
    });

    // notion-posts.ts 파일 생성
    const outputPath = path.join(__dirname, '../src/data/notion-posts.ts');

    // 백업 생성 (기존 파일이 있다면)
    if (fs.existsSync(outputPath)) {
      const backupPath = path.join(
        __dirname,
        `../backups/notion-posts.backup.${Date.now()}.ts`
      );
      fs.mkdirSync(path.dirname(backupPath), { recursive: true });
      fs.copyFileSync(outputPath, backupPath);
      console.log(`💾 기존 파일 백업: ${backupPath}\n`);
    }

    // TypeScript 파일 생성
    const fileContent = `// 🤖 자동 생성된 파일 - 수동으로 편집하지 마세요!
// 마지막 동기화: ${new Date().toISOString()}
// 포스트 개수: ${posts.length}

import { Post } from './posts'

export const notionPosts: Post[] = ${JSON.stringify(posts, null, 2)}
`;

    fs.writeFileSync(outputPath, fileContent, 'utf-8');
    console.log(`✅ 파일 생성 완료: ${outputPath}\n`);

    // 통계 출력
    console.log('📊 동기화 통계:');
    console.log(`   총 포스트: ${posts.length}개`);
    console.log(`   추천 포스트: ${posts.filter(p => p.featured).length}개`);

    const categories = [...new Set(posts.map(p => p.category))];
    console.log(`   카테고리: ${categories.join(', ')}`);

    const totalImages = posts.reduce((acc, post) => {
      const imageCount = (post.content.match(/!\[.*?\]\(.*?\)/g) || []).length;
      return acc + imageCount;
    }, 0);
    console.log(`   다운로드된 이미지: ${totalImages}개`);

    console.log('\n✅ 동기화 완료!\n');
    console.log('📌 다음 단계:');
    console.log('   1. npm run dev 로 개발 서버 실행');
    console.log('   2. 브라우저에서 확인');
    console.log('   3. 문제없으면 git commit & push');
  } catch (error: any) {
    console.error('\n❌ 동기화 실패:', error.message);
    console.error('\n🔍 디버깅 정보:');
    console.error(
      '   - NOTION_TOKEN:',
      process.env.NOTION_TOKEN ? '설정됨' : '없음'
    );
    console.error(
      '   - NOTION_DATABASE_ID:',
      process.env.NOTION_DATABASE_ID ? '설정됨' : '없음'
    );

    if (error.code === 'unauthorized') {
      console.error('\n💡 해결 방법:');
      console.error(
        '   1. 노션 Integration이 데이터베이스에 연결되어 있는지 확인'
      );
      console.error('   2. NOTION_TOKEN이 올바른지 확인');
    } else if (error.code === 'object_not_found') {
      console.error('\n💡 해결 방법:');
      console.error('   1. NOTION_DATABASE_ID가 올바른지 확인');
      console.error('   2. 데이터베이스가 삭제되지 않았는지 확인');
    }

    console.error('\n전체 에러:', error);

    process.exit(1);
  }
}

// 스크립트 실행
syncNotion();
