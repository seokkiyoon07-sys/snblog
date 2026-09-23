# 업데이트 노트 잔디 알림

`main`에 SNarGPT 업데이트 노트를 반영하면 기존 잔디 웹훅으로 새 날짜 항목을 한 메시지에 묶어 전송합니다. 로컬 파일 저장만으로는 전송하지 않습니다. GitHub push 기준이므로 운영 배포 완료를 보장하는 알림은 아닙니다.

- 대상: `content/startup/snargpt-development-2026.html`
- 각 날짜 카드의 제목과 `sn-update-brief`를 알림 요약으로 사용합니다.
- 글 작성 시 공개 가능한 기능과 이용 주의사항을 짧게 요약하세요. 내부 서버 구성, 접속 정보, 장비 연결 방식은 요약에 포함하지 않습니다.
- 별도 AI API나 API 키는 필요하지 않습니다. 작성자가 준비한 요약을 기존 스크립트가 전달합니다.
- 기존 날짜의 문구 수정이나 삭제는 알리지 않습니다. 새 날짜를 추가할 때만 전송합니다.
- 같은 push에서 처음 발행하는 글은 신규 발행 알림만 전송합니다.
- 첫 브랜치 push나 타임라인 파일의 최초 추가는 과거 기록 전체를 알리지 않습니다.

미리보기: `BEFORE_SHA`와 `AFTER_SHA`를 지정해 `node scripts/notify-posts.cjs` 실행. 실제 전송은 `--send`가 필요합니다. GitHub Actions에서는 기존 목적지에 자동 전송합니다. 워크플로를 수동 재실행하면 같은 알림이 다시 전송될 수 있습니다.

검증: `npm run test:post-tools`

## 잔디 주소 설정

로컬에서는 `.env.local`의 `JANDI_WEBHOOK_URL`을 사용합니다. GitHub Actions는 저장소 Secret `JANDI_WEBHOOK_URL`을 사용합니다. 알림 스크립트와 워크플로에 실제 웹훅 주소를 넣지 않습니다. 기존에 커밋된 주소는 Git 기록에 남으므로 완전히 교체하려면 잔디에서 웹훅을 재발급하고 로컬 값과 GitHub Secret을 함께 갱신해야 합니다.

## Slack에도 공유하기

Slack 앱의 Incoming Webhooks를 활성화하고 Add New Webhook to Workspace에서 공유할 채널을 선택합니다. 발급받은 주소를 `.env.local`의 `SLACK_WEBHOOK_URL=` 뒤에 입력하세요. 이 파일은 Git 추적에서 제외되며 스크립트가 자동으로 읽습니다.

기본 실행은 설정된 잔디·Slack 양쪽에 같은 요약을 전달합니다. `--channel=slack` 또는 `--channel=jandi`로 한 곳만 선택할 수 있습니다. `--send`가 없으면 미리보기만 출력합니다.

이번 9월 업데이트를 Slack에만 전송하는 PowerShell 명령:

```powershell
$env:BEFORE_SHA = '7936a9c'
$env:AFTER_SHA = 'cdf7811'
node scripts/notify-posts.cjs --channel=slack --send
```

GitHub 자동 전송에는 저장소 Settings → Secrets and variables → Actions에 동일한 이름의 `SLACK_WEBHOOK_URL` secret이 별도로 필요합니다. 로컬 `.env.local`은 GitHub Actions에 전달되지 않습니다. Slack secret이 없으면 기존 잔디 전송만 유지합니다. 전송 실패 시 성공한 채널까지 재전송하지 말고 실패한 채널만 선택해 재시도하세요.

공식 안내: https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/
