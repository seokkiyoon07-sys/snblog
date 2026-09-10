# snblog 구조

Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4 기반입니다. 운영 배포는 Vercel Git 연동을 사용합니다.

```text
src/data/post-records.ts    글 메타데이터
src/data/posts.ts           글 조회·검색 함수와 Post 타입
content/{category}/{id}.html 일반 글 본문
src/lib/post-content.ts     서버에서 본문 파일 읽기
src/app/                   페이지·API·메타데이터
src/components/            공통 UI 및 인터랙션 컴포넌트
public/images/thumbnail/   게시용 썸네일
scripts/                   글 백업·알림·썸네일 압축
.github/workflows/         검증 및 글 알림
```

글 상세는 대부분 빌드 시 정적 생성합니다. 홈 페이지네이션·관리자 화면 등 일부는 요청 시 서버 렌더링합니다. 글 본문은 서버에서 읽으며 사이드바도 서버에서 최근 글·태그를 계산합니다. 클릭 추적은 `TrackedPostLink` 클라이언트 컴포넌트가 담당합니다.

새 글 작성, 카테고리 폴더 매핑, 이미지 압축, 백업·복구 및 배포 절차는 [POST_MANAGEMENT.md](POST_MANAGEMENT.md)를 참고하세요.
