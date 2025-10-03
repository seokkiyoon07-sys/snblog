// 통합 웹훅 테스트 스크립트 (잔디 + 슬랙)
const https = require('https');

const jandiWebhookUrl = 'https://wh.jandi.com/connect-api/webhook/13116580/408c7be61ec340cc632a4816f56a4442';
const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

// 잔디 메시지
const jandiMessage = {
  body: "🧪 통합 테스트 메시지입니다!",
  connectColor: "#FAC11B",
  connectInfo: [
    {
      title: "📝 SN Academy Blog 통합 테스트",
      description: "잔디와 슬랙 웹훅이 모두 정상적으로 작동하는지 테스트합니다.",
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

// 슬랙 메시지
const slackMessage = {
  text: "🧪 통합 테스트 메시지입니다!",
  attachments: [
    {
      color: "#FAC11B",
      title: "📝 SN Academy Blog 통합 테스트",
      text: "잔디와 슬랙 웹훅이 모두 정상적으로 작동하는지 테스트합니다.",
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

// 웹훅 전송 함수
function sendWebhook(url, message, platform) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(message);
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(url, options, (res) => {
      console.log(`${platform} Status: ${res.statusCode}`);
      
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        console.log(`${platform} Response: ${chunk}`);
      });
      
      res.on('end', () => {
        resolve(res.statusCode);
      });
    });

    req.on('error', (e) => {
      console.error(`${platform} Error: ${e.message}`);
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}

// 모든 웹훅 전송
async function testAllWebhooks() {
  console.log('🚀 모든 웹훅 테스트를 시작합니다...\n');
  
  try {
    // 잔디 웹훅 테스트
    console.log('📱 잔디 웹훅 테스트 중...');
    await sendWebhook(jandiWebhookUrl, jandiMessage, 'Jandi');
    console.log('✅ 잔디 웹훅 테스트 완료\n');
    
    // 슬랙 웹훅 테스트 (환경변수가 있는 경우에만)
    if (slackWebhookUrl) {
      console.log('💬 슬랙 웹훅 테스트 중...');
      await sendWebhook(slackWebhookUrl, slackMessage, 'Slack');
      console.log('✅ 슬랙 웹훅 테스트 완료\n');
    } else {
      console.log('⚠️ 슬랙 웹훅 URL이 설정되지 않았습니다. SLACK_WEBHOOK_URL 환경변수를 설정하세요.\n');
    }
    
    console.log('🎉 웹훅 테스트가 완료되었습니다!');
    
  } catch (error) {
    console.error('❌ 웹훅 테스트 중 오류 발생:', error);
  }
}

testAllWebhooks();