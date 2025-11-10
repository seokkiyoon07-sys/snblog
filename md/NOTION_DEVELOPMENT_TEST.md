# 노션 동기화 개발 테스트 가이드

## 🎯 목표

프로덕션에 영향 없이 개발 서버에서만 노션 연동 테스트하기

## ✅ 현재 설정 상태

### 안전장치

1. **개발 환경 전용**
   - 노션 포스트는 `NODE_ENV=development`에서만 로드
   - 프로덕션 빌드에는 절대 포함 안 됨

2. **파일 격리**
   - `posts.ts` (기존) - 변경 없음, Git 추적 ✅
   - `notion-posts.ts` (노션) - Git 무시됨 ❌
   - 서로 독립적으로 작동

3. **Git 보호**
   ```gitignore
   src/data/notion-posts.ts
   public/images/notion/
   test-notion.ts
   ```

## 🚀 사용 방법

### 1단계: 노션 데이터베이스 준비

`NOTION_SETUP_GUIDE.md` 참고하여:

- 데이터베이스 생성
- 필수 속성 추가 (제목, 카테고리, 발행, 날짜)
- Integration 연결
- 데이터베이스 ID 복사

### 2단계: 환경변수 설정

`.env.local` 파일에 데이터베이스 ID 입력:

```bash
NOTION_TOKEN=ntn_...
NOTION_DATABASE_ID=여기에_데이터베이스_ID_입력
```

### 3단계: 노션에서 테스트 글 작성

1. 데이터베이스에 새 페이지 추가
2. 제목, 카테고리, 요약 입력
3. **"발행" 체크박스 체크** ✅
4. 본문 작성 (텍스트, 이미지, 마크다운 등)

### 4단계: 동기화 실행

```bash
npm run sync:notion
```

**성공 시 출력:**

```
🚀 노션 동기화 시작...
📡 노션 데이터베이스에서 포스트를 가져오는 중...
✅ 2개의 포스트를 가져왔습니다.

📝 가져온 포스트 목록:
   1. 첫 번째 테스트 글
   2. 두 번째 테스트 글

✅ 동기화 완료!
```

### 5단계: 개발 서버 실행

```bash
npm run dev
```

### 6단계: 테스트 페이지 확인

브라우저에서 다음 URL 접속:

**테스트 전용 페이지:**

```
http://localhost:3000/dev-notion-test
```

이 페이지에서 확인 가능:

- ✅ 노션에서 가져온 포스트 목록
- ✅ 제목, 요약, 카테고리, 태그
- ✅ 각 포스트로 이동하는 링크
- ✅ 통계 및 디버그 정보

**실제 포스트 확인:**

```
http://localhost:3000/[category]/[notion-page-id]
```

## 🧪 테스트 체크리스트

### 기본 기능

- [ ] 노션 글이 테스트 페이지에 표시됨
- [ ] 제목, 요약, 카테고리가 올바름
- [ ] 날짜가 정확함
- [ ] 태그가 표시됨

### 콘텐츠 렌더링

- [ ] 일반 텍스트 렌더링
- [ ] 제목(H1, H2, H3) 렌더링
- [ ] **굵게**, _기울임_ 텍스트
- [ ] 이미지 자동 다운로드 및 표시
- [ ] 목록 (번호, 글머리)
- [ ] 인용구
- [ ] 코드 블록

### 노션 특수 블록

- [ ] Callout → `<CalloutBox>` 변환
- [ ] 이미지 로컬 저장 (`/public/images/notion/`)
- [ ] 다크모드 지원
- [ ] 반응형 레이아웃

### 에러 처리

- [ ] 동기화 실패 시 기존 포스트는 정상 표시
- [ ] 이미지 다운로드 실패 시에도 글은 표시
- [ ] 프로덕션에서는 노션 포스트 숨김

## 📁 파일 구조

```
snblog/
├── src/
│   ├── data/
│   │   ├── posts.ts              # 기존 포스트 (Git 추적)
│   │   └── notion-posts.ts       # 노션 포스트 (Git 무시)
│   ├── lib/
│   │   └── notion-converter.ts   # 변환 로직
│   └── app/
│       └── dev-notion-test/      # 테스트 페이지
│           └── page.tsx
├── public/
│   └── images/
│       └── notion/                # 노션 이미지 (Git 무시)
│           └── [post-id]/
│               ├── image-0.jpg
│               └── image-1.png
├── scripts/
│   └── sync-notion.ts             # 동기화 스크립트
└── backups/                       # 백업 폴더
    └── notion-posts.backup.*.ts
```

## 🔒 안전성 보장

### 프로덕션 보호

```typescript
// posts.ts에서 개발 환경 체크
if (process.env.NODE_ENV !== 'development') {
  return allPosts; // 노션 포스트 제외
}
```

### 기존 데이터 보호

- `posts.ts` 파일은 절대 수정 안 됨
- 노션 데이터는 별도 파일(`notion-posts.ts`)
- ID 중복 시 기존 포스트 우선

### 빌드 안전성

- 노션 동기화 실패 → 빌드 계속 진행
- 이미지 다운로드 실패 → 글은 표시
- Try-catch로 모든 에러 처리

## ⚠️ 프로덕션 배포 시 주의사항

### 배포 전 확인

```bash
# 1. 프로덕션 빌드 테스트
npm run build

# 2. 노션 포스트가 포함되지 않았는지 확인
# 빌드 로그에 "[DEV] 노션 포스트" 메시지가 없어야 함

# 3. 프로덕션 서버 실행
npm run start

# 4. 노션 포스트가 보이지 않는지 확인
```

### Git 커밋 전 확인

```bash
# Git에 노션 관련 파일이 포함되지 않았는지 확인
git status

# 다음 파일들은 Git에 포함되면 안 됨:
# - src/data/notion-posts.ts
# - public/images/notion/
# - test-notion.ts
```

## 🎬 프로덕션 배포 시 활성화 방법

테스트 완료 후 프로덕션에서도 노션 포스트를 보여주려면:

1. `src/data/posts.ts` 수정:

```typescript
// 이 부분 제거
if (process.env.NODE_ENV !== 'development') {
  return allPosts;
}
```

2. `.gitignore`에서 제거:

```diff
- src/data/notion-posts.ts
- public/images/notion/
```

3. Git 커밋:

```bash
git add src/data/notion-posts.ts
git add public/images/notion/
git commit -m "feat: 노션 동기화 활성화"
```

4. CI/CD에 동기화 스크립트 추가:

```yaml
# .github/workflows/deploy.yml
- name: Sync Notion
  run: npm run sync:notion
  env:
    NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
    NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
```

---

## 🆘 문제 해결

### "페이지입니다, 데이터베이스가 아닙니다" 에러

→ 데이터베이스 ID가 아닌 페이지 ID를 입력함
→ 데이터베이스 URL에서 ID 다시 확인

### "발행된 포스트가 없습니다"

→ 노션에서 "발행" 체크박스 체크
→ Integration이 연결되어 있는지 확인

### "권한 없음" 에러

→ 데이터베이스에 Integration 연결
→ NOTION_TOKEN 재확인

### 이미지가 안 보임

→ `npm run sync:notion` 다시 실행
→ `/public/images/notion/` 폴더 확인

---

**모든 준비 완료! 노션 데이터베이스 ID만 있으면 즉시 테스트 가능합니다! 🚀**
