// 테스트용 잔디 웹훅 스크립트
const https = require('https');

const webhookUrl = 'https://wh.jandi.com/connect-api/webhook/13116580/408c7be61ec340cc632a4816f56a4442';

const testMessage = {
  body: "🧪 테스트 메시지입니다!",
  connectColor: "#FAC11B",
  connectInfo: [
    {
      title: "📝 SN Academy Blog 테스트",
      description: "GitHub Actions 워크플로우가 정상적으로 작동하는지 테스트합니다.",
      imageUrl: "https://blog.snacademy.co.kr/logo.png"
    }
  ],
  connectButtons: [
    {
      name: "블로그 보기",
      type: "link",
      url: "https://blog.snacademy.co.kr"
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

console.log('테스트 메시지를 잔디로 전송했습니다!');

