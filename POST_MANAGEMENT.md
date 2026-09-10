# 글 작성과 배포

## 글 추가·수정

1. `src/data/post-records.ts`의 `allPosts`에 메타데이터를 추가합니다.
2. 본문은 `content/{폴더}/{id}.html`에 작성합니다.
3. 썸네일은 `public/images/thumbnail/` 아래에 저장합니다.

`src/data/posts.ts`는 조회·검색 함수와 타입을 제공하는 파일입니다. 여기에 글 본문을 넣지 않습니다.

카테고리와 본문 폴더가 다른 경우:

| category       | 본문 폴더        |
| -------------- | ---------------- |
| SN Originals   | originals        |
| SN History     | history          |
| korean-problem | problem-download |

나머지는 카테고리 이름과 같습니다. 지도·문제 뷰어 등 전용 React 화면은 기존 전용 컴포넌트를 사용합니다.

## 썸네일

게시용 이미지는 가급적 가로 1,280px, 수백 KB로 준비합니다. 원본은 별도로 보관합니다.

`npm run optimize:thumbnails`는 Git에 등록된 PNG/JPEG/WebP 썸네일을 경량화합니다. 300KB 이상인 파일을 최대 1,280×1,280 경계 안에 비율 유지하여 축소하고 압축하며, 파일명·확장자·URL은 유지합니다. 새 이미지는 먼저 해당 파일만 `git add`로 등록한 뒤 실행하세요. 원본 복구에는 Git을 사용합니다.

`node scripts/optimize-thumbnails.cjs`는 파일을 쓰지 않고 예상 절감량만 출력합니다. 압축은 배포 빌드에서 실행하지 않습니다.

## 백업·복구

- `npm run backup:posts`: `post-records.ts`, `posts.ts`, `content/` 전체를 `backups/posts-backup-.../`에 복사합니다.
- `npm run restore:posts`: 번호로 백업을 선택합니다. 현재 상태를 먼저 백업하고 메타데이터·본문을 복구합니다.
- 백업 이후 새로 추가된 본문 파일은 삭제하지 않습니다. 메타데이터가 복구되므로 새 글은 목록에서 제외될 수 있습니다.
- 이미지·전용 React 컴포넌트는 이 백업에 포함되지 않습니다. Git으로 관리합니다.
- 예전 단일 `.ts` 백업은 새 복구 목록에 표시하지 않습니다. 이전 전체 글 데이터로 현재 조회 함수를 덮어쓰지 마세요.

## 배포

운영 배포는 기존 **Vercel Git 연동 → main 푸시**를 사용합니다. GitHub Actions `Validate Blog`는 Node 22에서 설치·lint·도구 테스트·프로덕션 빌드·홈 응답을 검증합니다. Actions에서 Vercel·Docker로 재배포하지 않습니다. Vercel 배포는 이 검증과 별도로 실행됩니다.

변경할 파일만 커밋한 뒤 `git push origin main`을 실행합니다. Vercel 프로젝트의 Production Branch는 `main`, Build Command는 `npm run build`를 유지합니다. `vercel.json`은 변경할 필요가 없습니다.

`npm run deploy:vercel`은 Vercel CLI로 직접 배포하는 대체 경로이며 로컬 설치·빌드를 반복하지 않습니다. 평소 Git 연동 배포와 중복 실행하지 마세요. Windows에서는 `scripts/deploy.sh`에 Git Bash가 필요하며, 일반 Git 명령으로 푸시할 수도 있습니다.

## 글 알림

`main`에 `src/data/post-records.ts` 또는 `content/**` 변경이 올라오면 기존 Jandi 채널로 알립니다. 푸시 이전/이후 전체 변경을 비교해 새 글·메타데이터 수정·본문 수정·공개 전환을 감지합니다. 비공개 글과 삭제된 글은 알리지 않습니다. 여러 글이 바뀌면 각각 알립니다.

알림은 푸시 기준이며 배포 성공 알림이 아닙니다. Vercel 성공 여부는 별도로 확인하세요. `scripts/notify-posts.cjs`는 기본적으로 전송하지 않으며 `--send`가 있어야 전송합니다.

검증: `npm run test:post-tools`, `npm run lint`, `npm run build`.
