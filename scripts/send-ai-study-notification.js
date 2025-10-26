// AI 공부법 포스트 잔디 알림 스크립트
const https = require('https');

const webhookUrl =
  'https://wh.jandi.com/connect-api/webhook/13116580/2eb500fa1618a7c8b4d5ee7e29b46523';

const aiStudyMessage = {
  body: '새 포스트가 게시되었어요 - AI에게 배우는 진짜 공부법',
  connectColor: '#FAC11B',
  connectInfo: [
    {
      title: 'AI에게 배우는 진짜 공부법',
      description:
        'AI가 똑똑해진 비밀은 설계가 아니라 노출량이었습니다. 인간의 공부도 마찬가지입니다. SN독학기숙학원 대표 윤석기가 AI 학습 원리를 통해 발견한 진짜 공부법을 소개합니다.\n\n포스트 URL: https://blog.snacademy.co.kr/columns/ai-study-method\n블로그 홈: https://blog.snacademy.co.kr',
      imageUrl:
        'https://blog.snacademy.co.kr/images/thumbnail/howtostudythumbnail.gif',
    },
  ],
  connectButtons: [
    {
      name: '포스트 보기',
      type: 'link',
      url: 'https://blog.snacademy.co.kr/columns/ai-study-method',
    },
    {
      name: '블로그 홈',
      type: 'link',
      url: 'https://blog.snacademy.co.kr',
    },
  ],
};

const postData = JSON.stringify(aiStudyMessage);

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
  },
};

const req = https.request(webhookUrl, options, res => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);

  res.setEncoding('utf8');
  res.on('data', chunk => {
    console.log(`Body: ${chunk}`);
  });
});

req.on('error', e => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();

console.log('✅ AI 공부법 포스트 알림을 잔디로 전송했습니다!');
