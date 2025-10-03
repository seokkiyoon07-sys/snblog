This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# SN Academy Blog - Development Environment Setup Complete

## 🚀 통합 웹훅 알림 시스템 (잔디 + 슬랙)

이 블로그는 GitHub Actions를 통해 자동으로 잔디와 슬랙에 동시에 알림을 보내는 시스템이 구축되어 있습니다.

### 📋 기능
- **자동 감지**: `src/data/posts.ts` 파일이나 새로운 블로그 페이지가 추가/수정될 때 자동 감지
- **이중 알림**: 변경사항이 감지되면 잔디와 슬랙에 동시에 알림 전송
- **상세 정보**: 커밋 메시지, 작성자, 링크 등 포함
- **플랫폼별 최적화**: 잔디와 슬랙 각각에 맞는 메시지 포맷 제공
- **카테고리별 색상**: 변경 유형에 따라 다른 색상으로 표시

### 🔧 워크플로우 파일
- `.github/workflows/blog-notification-dual.yml`: 통합 알림 워크플로우 (잔디 + 슬랙)
- `.github/workflows/blog-notification.yml`: 상세 감지 워크플로우  
- `.github/workflows/smart-blog-notification.yml`: 스마트 감지 워크플로우

### 🧪 테스트
```bash
# 잔디만 테스트
npm run test:jandi

# 슬랙만 테스트 (환경변수 필요)
SLACK_WEBHOOK_URL=your_webhook_url npm run test:slack

# 모든 웹훅 통합 테스트
npm run test:webhooks
```

### 📱 알림 예시
- 📝 새로운 블로그 글이 추가되었습니다!
- 📊 블로그 데이터가 업데이트되었습니다!
- 🔄 블로그 콘텐츠가 업데이트되었습니다!

### 🎯 트리거 조건
- `src/data/posts.ts` 파일 수정
- `src/app/originals/**/page.tsx` 새 페이지 추가
- `src/app/startup/**/page.tsx` 새 페이지 추가
- `src/app/columns/**/page.tsx` 새 페이지 추가
- `src/app/problems/**/page.tsx` 새 페이지 추가
- `src/app/reviews/**/page.tsx` 새 페이지 추가
- `src/app/admissions/**/page.tsx` 새 페이지 추가

### 🔗 웹훅 설정
```
잔디: https://wh.jandi.com/connect-api/webhook/13116580/408c7be61ec340cc632a4816f56a4442
슬랙: GitHub Secrets에 SLACK_WEBHOOK_URL로 설정 필요
```

### 🔐 GitHub Secrets 설정
GitHub 저장소의 Settings > Secrets and variables > Actions에서 다음 시크릿을 추가하세요:
- `SLACK_WEBHOOK_URL`: 슬랙 웹훅 URL
- `NOTION_TOKEN`: 노션 Integration 토큰
- `NOTION_DATABASE_ID`: 노션 데이터베이스 ID

## 📝 노션 자동 동기화

노션에서 글을 작성하면 자동으로 블로그에 푸시되는 시스템이 구축되어 있습니다.

### 🚀 기능
- **자동 동기화**: 30분마다 노션 데이터베이스 확인
- **마크다운 변환**: 노션 블록을 마크다운으로 자동 변환
- **실시간 알림**: 동기화 시 잔디/슬랙 알림
- **수동 동기화**: `npm run sync:notion` 명령어로 즉시 동기화

### 📋 설정 방법
자세한 설정 방법은 [NOTION_SETUP.md](./NOTION_SETUP.md)를 참고하세요.

### 🧪 테스트
```bash
# 노션 동기화 테스트 (환경변수 필요)
NOTION_TOKEN=your_token NOTION_DATABASE_ID=your_db_id npm run sync:notion
```