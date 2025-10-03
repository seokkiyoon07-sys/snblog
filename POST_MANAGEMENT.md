# 📝 포스트 관리 가이드

## 🚨 중요 안전 수칙

### ❌ 절대 하지 말 것
- **Notion 동기화 자동 실행** (현재 비활성화됨)
- **posts.ts 파일을 외부 도구로 덮어쓰기**
- **백업 없이 대량 수정**

### ✅ 안전한 포스트 관리 방법

## 1. 포스트 추가/수정

### 📝 새 포스트 추가
```typescript
// src/data/posts.ts 파일에서 직접 추가
{
  id: 'unique-post-id',
  title: '포스트 제목',
  excerpt: '포스트 요약',
  content: `# 포스트 내용
  
  상세한 마크다운 내용을 여기에 작성하세요.
  `,
  category: 'originals', // originals, startup, columns, problems, reviews, admissions
  tags: ['태그1', '태그2'],
  author: 'SN Academy',
  date: '2025-10-XX',
  readTime: '5',
  featured: false,
  published: true,
  thumbnail: 'https://example.com/image.jpg',
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID', // 선택사항
  url: '/category/post-id'
}
```

### ✏️ 기존 포스트 수정
1. `src/data/posts.ts` 파일에서 해당 포스트 찾기
2. 필요한 필드 수정
3. 변경사항 저장 및 커밋

## 2. 백업 및 복구

### 💾 백업 생성
```bash
npm run backup:posts
```

### 🔄 백업에서 복구
```bash
npm run restore:posts
```

## 3. 안전한 작업 순서

### 📋 포스트 작업 전
1. **백업 생성**: `npm run backup:posts`
2. **현재 상태 확인**: Git 상태 확인
3. **작업 시작**: 포스트 수정/추가

### 📋 포스트 작업 후
1. **로컬 테스트**: `npm run dev`로 확인
2. **변경사항 커밋**: `git add . && git commit -m "Add/Update post"`
3. **푸시**: `git push origin main`
4. **배포 확인**: 웹사이트에서 확인

## 4. 카테고리별 포스트 관리

### 🎭 SN Originals (originals)
- 고전문학 시리즈 포스트
- YouTube 영상 연계 필수
- 글로벌 관점의 설명 포함

### 🚀 AI Startup (startup)
- AI 스타트업 관련 포스트
- 기술적 내용과 비전 포함

### 📰 Columns (columns)
- 일반적인 칼럼 포스트
- 학원 관련 소식

### ❓ Problems (problems)
- 문제 해결 관련 포스트

### ⭐ Reviews (reviews)
- 사용 후기 포스트

### 📚 Admissions (admissions)
- 입시 정보 포스트

## 5. 긴급 상황 대응

### 🚨 포스트가 날아갔을 때
1. **백업 확인**: `backups/` 폴더에서 최신 백업 찾기
2. **복구 실행**: `npm run restore:posts`
3. **Git 히스토리 확인**: `git log --oneline -10`
4. **이전 커밋에서 복구**: `git checkout COMMIT_HASH -- src/data/posts.ts`

### 🚨 Notion 동기화가 다시 활성화되었을 때
1. **즉시 비활성화**: `.github/workflows/notion-sync.yml` 수정
2. **백업에서 복구**: `npm run restore:posts`
3. **변경사항 커밋**: `git add . && git commit -m "Emergency restore"`

## 6. 포스트 품질 체크리스트

### ✅ 필수 요소
- [ ] 고유한 ID
- [ ] 명확한 제목
- [ ] 적절한 요약 (excerpt)
- [ ] 상세한 내용 (content)
- [ ] 올바른 카테고리
- [ ] 관련 태그
- [ ] 작성자 정보
- [ ] 작성 날짜
- [ ] 예상 읽기 시간
- [ ] 발행 상태 (published: true)
- [ ] 올바른 URL

### ✅ 선택 요소
- [ ] 썸네일 이미지
- [ ] YouTube 영상 링크
- [ ] Featured 포스트 여부

## 7. 자주 사용하는 명령어

```bash
# 개발 서버 실행
npm run dev

# 빌드 테스트
npm run build

# 포스트 백업
npm run backup:posts

# 포스트 복구
npm run restore:posts

# Git 상태 확인
git status

# 변경사항 커밋
git add .
git commit -m "포스트 수정/추가"
git push origin main
```

## 8. 문제 해결

### 🔧 빌드 오류 시
1. TypeScript 오류 확인: `npm run build`
2. 문법 오류 수정
3. 다시 빌드 테스트

### 🔧 포스트가 안 보일 때
1. `published: true` 확인
2. 올바른 카테고리 확인
3. URL 경로 확인
4. 브라우저 캐시 새로고침

### 🔧 이미지가 안 보일 때
1. 이미지 URL 확인
2. `public/` 폴더에 이미지 있는지 확인
3. 외부 이미지 URL 접근 가능한지 확인

---

**⚠️ 중요**: 이 가이드를 따라하면 포스트 손실을 방지할 수 있습니다!

