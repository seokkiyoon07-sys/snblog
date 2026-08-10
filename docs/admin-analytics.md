# 관리자 방문 통계 설정

블로그의 `/admin/analytics` 페이지는 Vercel Web Analytics의 익명 집계 데이터를 서버에서 조회합니다. API 토큰과 관리자 이메일은 브라우저로 전달되지 않습니다.

## 1. Vercel Web Analytics 활성화

1. Vercel Dashboard에서 `snblog` 프로젝트를 엽니다.
2. **Analytics** 메뉴에서 **Enable**을 선택합니다.
3. 이 변경이 포함된 버전을 다시 배포합니다.

방문·페이지뷰 데이터는 활성화 후 배포된 시점부터 쌓입니다. `Post Click` 사용자 정의 이벤트는 Pro 이상 요금제에서 수집됩니다.

## 2. Vercel API 토큰

Vercel 계정 설정에서 Access Token을 생성하고 다음 환경변수로 등록합니다.

```dotenv
VERCEL_ANALYTICS_TOKEN=...
VERCEL_ANALYTICS_PROJECT_ID=prj_RZ2Da2p5MIh1eSUoTfA5m5rGiAK4
VERCEL_ANALYTICS_TEAM_ID=team_azWZQdpq0IXyFJSOr0se7Wpx
```

토큰에는 `NEXT_PUBLIC_` 접두사를 붙이지 않습니다. 프로젝트와 팀 ID는 이 저장소에 기본값이 있으므로 다른 프로젝트로 옮길 때만 덮어쓰면 됩니다.

## 3. Google OAuth 관리자 로그인

Google Cloud Console에서 OAuth 2.0 웹 애플리케이션을 만들고 다음 리디렉션 URI를 등록합니다.

```text
http://localhost:3000/api/auth/callback/google
https://blog.snacademy.co.kr/api/auth/callback/google
```

로컬 `.env.local`과 Vercel Production 환경에 다음 값을 설정합니다.

```dotenv
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://blog.snacademy.co.kr
ADMIN_EMAILS=first-admin@example.com,second-admin@example.com
```

`ADMIN_EMAILS`에 정확히 일치하는 이메일만 로그인할 수 있습니다. `NEXTAUTH_SECRET`은 충분히 긴 무작위 값으로 생성합니다.

## 4. 확인

1. 허용되지 않은 Google 계정이 거부되는지 확인합니다.
2. 허용된 계정으로 `/admin/analytics`에 로그인합니다.
3. 브라우저 개발자 도구에서 Vercel 토큰이 노출되지 않는지 확인합니다.
4. 공개 게시물 링크를 클릭하고 Vercel의 `Post Click` 이벤트가 집계되는지 확인합니다.
5. 관리자 화면의 기간별 방문자·페이지뷰가 Vercel Dashboard와 일치하는지 확인합니다.

통계 응답은 Vercel API 호출량을 줄이기 위해 5분 동안 캐시됩니다.
