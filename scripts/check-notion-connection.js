// 노션 연결 상태 확인 스크립트
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function checkConnection() {
  try {
    console.log(
      '노션 토큰 확인:',
      process.env.NOTION_TOKEN ? '설정됨' : '없음'
    );
    console.log('데이터베이스 ID:', process.env.NOTION_DATABASE_ID);

    // 1. 사용자 정보 확인
    console.log('\n1. 사용자 정보 확인 중...');
    const user = await notion.users.me();
    console.log('사용자:', user.name, '(' + user.id + ')');

    // 2. 접근 가능한 데이터베이스 목록 확인
    console.log('\n2. 접근 가능한 데이터베이스 검색 중...');
    const searchResponse = await notion.search({
      filter: {
        property: 'object',
        value: 'database',
      },
    });

    console.log('찾은 데이터베이스 수:', searchResponse.results.length);

    searchResponse.results.forEach((db, index) => {
      console.log(`\n데이터베이스 ${index + 1}:`);
      console.log('- 제목:', db.title?.[0]?.plain_text || '제목 없음');
      console.log('- ID:', db.id);
      console.log('- URL:', db.url);
    });

    // 3. 특정 데이터베이스 접근 시도
    if (process.env.NOTION_DATABASE_ID) {
      console.log('\n3. 지정된 데이터베이스 접근 시도 중...');
      try {
        const db = await notion.databases.retrieve({
          database_id: process.env.NOTION_DATABASE_ID,
        });
        console.log('✅ 데이터베이스 접근 성공!');
        console.log('- 제목:', db.title?.[0]?.plain_text || '제목 없음');
        console.log('- ID:', db.id);
      } catch (error) {
        console.log('❌ 데이터베이스 접근 실패:', error.message);
        console.log('해결 방법:');
        console.log('1. 노션에서 통합(Integration) 설정 확인');
        console.log('2. 데이터베이스가 통합에 공유되었는지 확인');
        console.log('3. 데이터베이스 ID가 올바른지 확인');
      }
    }
  } catch (error) {
    console.error('연결 확인 중 오류:', error.message);
    if (error.code === 'unauthorized') {
      console.log('해결 방법: NOTION_TOKEN이 올바른지 확인하세요.');
    }
  }
}

if (require.main === module) {
  checkConnection();
}

module.exports = { checkConnection };
