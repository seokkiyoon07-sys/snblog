// 테스트용 슬랙 웹훅 스크립트
const https = require('https');

const webhookUrl = process.env.SLACK_WEBHOOK_URL;

if (!webhookUrl) {
  console.log('❌ SLACK_WEBHOOK_URL 환경변수가 설정되지 않았습니다.');
  console.log('환경변수를 설정하거나 다음 명령어로 실행하세요:');
  console.log('SLACK_WEBHOOK_URL=your_webhook_url npm run test:slack');
  process.exit(1);
}

const testMessage = {
  text: "🧪 테스트 메시지입니다!",
  attachments: [
    {
      color: "#FAC11B",
      title: "📝 SN Academy Blog 테스트",
      text: "GitHub Actions 워크플로우가 정상적으로 작동하는지 테스트합니다.",
      thumb_url: "https://blog.snacademy.co.kr/logo.png",
      actions: [
        {
          type: "button",
          text: "블로그 보기",
          url: "https://blog.snacademy.co.kr"
        }
      ]
    }
  ]
};

const postData = JSON.stringify(testMessage);

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(webhookUrl, options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();

console.log('테스트 메시지를 슬랙으로 전송했습니다!');