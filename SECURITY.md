# 🔒 보안 가이드

## ⚠️ 중요 보안 사항

### 1. 웹훅 URL 보안

- **절대 코드에 하드코딩하지 마세요!**
- 웹훅 URL은 환경 변수로만 관리하세요
- GitHub Secrets에 저장하세요

### 2. 환경 변수 관리

#### 로컬 개발

```bash
# .env.local 파일 생성 (Git에 커밋되지 않음)
JANDI_WEBHOOK_URL=your_actual_webhook_url_here
```

#### GitHub Actions

Repository Settings > Secrets and variables > Actions에서 설정:

- `JANDI_WEBHOOK_URL`: 잔디 웹훅 URL

### 3. 보안 체크리스트

- [ ] 웹훅 URL이 코드에 하드코딩되지 않았는가?
- [ ] .env 파일들이 .gitignore에 포함되어 있는가?
- [ ] GitHub Secrets에 민감한 정보가 저장되어 있는가?
- [ ] README에 실제 URL이 노출되지 않았는가?

### 4. 웹훅 URL 노출 시 대응

만약 웹훅 URL이 노출되었다면:

1. **즉시 새 웹훅 생성**
   - 잔디에서 기존 웹훅 삭제
   - 새로운 웹훅 URL 생성

2. **환경 변수 업데이트**
   - GitHub Secrets 업데이트
   - 로컬 .env.local 파일 업데이트

3. **코드 검토**
   - 모든 파일에서 하드코딩된 URL 제거
   - 환경 변수 사용으로 변경

### 5. 안전한 웹훅 사용법

```javascript
// ❌ 잘못된 방법 (하드코딩)
const webhookUrl = 'https://wh.jandi.com/connect-api/webhook/...';

// ✅ 올바른 방법 (환경 변수)
const webhookUrl = process.env.JANDI_WEBHOOK_URL;
```

### 6. 추가 보안 권장사항

- 정기적으로 웹훅 URL 교체
- 웹훅 사용량 모니터링
- 의심스러운 활동 감지 시 즉시 URL 교체
- 팀원들에게 보안 가이드 공유

---

**보안은 모든 개발자의 책임입니다! 🛡️**
