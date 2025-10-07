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

## 🚀 잔디 웹훅 알림 시스템

이 블로그는 GitHub Actions를 통해 자동으로 잔디에 알림을 보내는 시스템이 구축되어 있습니다.

### 📋 기능

- **자동 감지**: `src/data/posts.ts` 파일이나 새로운 블로그 페이지가 추가/수정될 때 자동 감지
- **실시간 알림**: 변경사항이 감지되면 즉시 잔디로 알림 전송
- **상세 정보**: 커밋 메시지, 작성자, 링크 등 포함
- **카테고리별 색상**: 변경 유형에 따라 다른 색상으로 표시

### 🔧 워크플로우 파일

- `.github/workflows/jandi-notification.yml`: 메인 알림 워크플로우
- `.github/workflows/blog-notification.yml`: 상세 감지 워크플로우
- `.github/workflows/smart-blog-notification.yml`: 스마트 감지 워크플로우

### 🧪 테스트

```bash
npm run test:jandi
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

### 🔗 잔디 웹훅 설정

웹훅 URL은 환경 변수로 관리됩니다:

- GitHub Secrets: `JANDI_WEBHOOK_URL`
- 로컬 환경: `.env.local` 파일에 설정

**보안 주의**: 웹훅 URL을 코드에 직접 포함하지 마세요!
