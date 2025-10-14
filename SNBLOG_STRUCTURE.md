# snblog 프로젝트 구조 및 운영 가이드

## 🏗️ 프로젝트 개요

**snblog**는 Next.js 14 App Router 기반의 정적 블로그 사이트입니다.
- **목적**: SN Academy의 교육 콘텐츠, AI 스타트업 소식, 고전문학 해설 제공
- **기술 스택**: Next.js 14, TypeScript, Tailwind CSS, Vercel 배포
- **특징**: 정적 생성(SSG), SEO 최적화, 반응형 디자인

## 📁 주요 디렉토리 구조

```
snblog/
├── src/
│   ├── app/                          # Next.js App Router 페이지들
│   │   ├── page.tsx                 # 홈페이지
│   │   ├── layout.tsx               # 전체 레이아웃
│   │   ├── [category]/[id]/page.tsx # 동적 포스트 페이지 ⭐
│   │   ├── posts/[id]/page.tsx      # 레거시 포스트 페이지
│   │   ├── columns/                 # 칼럼 카테고리 페이지
│   │   ├── startup/                 # 스타트업 카테고리 페이지
│   │   ├── originals/               # SN Originals 카테고리 페이지
│   │   ├── search/                  # 검색 페이지
│   │   ├── tags/[tag]/             # 태그별 포스트 페이지
│   │   └── api/                     # API 라우트들
│   ├── components/                   # React 컴포넌트들
│   │   ├── BlogComponents.tsx       # 마크다운 렌더링 컴포넌트
│   │   ├── PostCard.tsx             # 포스트 카드 컴포넌트
│   │   ├── Header.tsx               # 헤더 컴포넌트
│   │   ├── Sidebar.tsx              # 사이드바 컴포넌트
│   │   └── special-posts/           # 특별한 포스트 전용 컴포넌트
│   ├── data/
│   │   └── posts.ts                 # 📝 포스트 데이터 파일 ⭐⭐⭐
│   ├── lib/
│   │   ├── utils.ts                 # 유틸리티 함수들
│   │   ├── markdown-renderer.ts     # 마크다운 렌더링
│   │   └── constants.ts             # 상수 정의
│   └── types/
│       └── index.ts                 # TypeScript 타입 정의
├── public/                          # 정적 파일들
│   ├── images/                      # 이미지 파일들 ⭐
│   │   ├── thumbnail/               # 썸네일 이미지
│   │   ├── notion/                  # Notion 연동 이미지
│   │   └── SNarlink/               # SNarlink 관련 이미지
│   └── favicon.ico                  # 파비콘
├── ADD_NEW_POST.md                  # 포스팅 추가 가이드
└── SNBLOG_STRUCTURE.md              # 이 문서 📖
```

## 🎯 주요 카테고리

### 1. **columns** (칼럼)
- 교육 관련 글, 학습법, 입시 정보 등
- URL: `/columns/[id]`
- 대표 글: 독학 방법론, 교육 철학 등

### 2. **startup** (스타트업)
- AI 스타트업 소식, 기술 개발 현황
- URL: `/startup/[id]`
- 대표 글: SNarGO, AI 교육 기술 등

### 3. **SN Originals** (고전문학)
- 고전문학 해설 시리즈, 유튜브 연동
- URL: `/originals/[id]`
- 대표 글: 관동별곡, 사미인곡, 속미인곡 등

## 📝 새로운 포스팅 추가하기

### 1️⃣ 포스트 데이터 추가 (필수)

`src/data/posts.ts` 파일의 `allPosts` 배열에 새로운 객체를 추가:

```typescript
{
  id: 'unique-post-id',              // ⭐ 고유한 ID (URL에 사용됨)
  title: '포스트 제목',
  excerpt: '포스트 요약 (2-3줄로 작성)', 
  content: `포스트 전체 내용 (마크다운 형식)`,
  category: 'columns',               // 'columns', 'startup', 'SN Originals' 중 선택
  tags: ['태그1', '태그2'],         // 선택사항
  author: 'SN Academy',
  date: '2025-10-14',               // YYYY-MM-DD 형식
  readTime: '5',                    // 읽는 시간 (분)
  featured: false,                  // true = 홈페이지 추천글에 표시
  published: true,                  // false = 숨김 처리
  thumbnail: '/images/image.jpg',   // 선택사항 (썸네일 이미지)
  youtubeUrl: 'https://youtube.com/watch?v=xxx', // 선택사항
  url: '/columns/unique-post-id',   // ⭐ URL 경로 (카테고리와 ID 일치 필수)
  type: 'standard'                  // 'standard' 또는 'special'
}
```

### 2️⃣ 이미지 추가 (필요시)

- **위치**: `public/images/` 폴더
- **참조**: `/images/filename.jpg` 형식으로 사용
- **권장**: 썸네일은 800x400 비율

### 3️⃣ 자동으로 처리되는 기능들

새 포스트 추가 시 자동으로:
- ✅ 홈페이지 최신글에 반영
- ✅ 해당 카테고리 페이지에 반영
- ✅ 사이드바 최근 글에 반영
- ✅ 검색 기능에 포함
- ✅ 태그 시스템에 자동 등록
- ✅ 사이트맵에 추가 (`sitemap.ts`)
- ✅ SEO 메타데이터 자동 생성
- ✅ 동적 라우팅으로 페이지 생성
- ✅ RSS 피드에 포함
- ✅ 소셜 공유 메타데이터 생성

## 🎨 마크다운 지원 기능

### 기본 마크다운
```markdown
# 제목
## 부제목
**굵게** *기울임*
[링크](https://example.com)
![이미지](/images/example.jpg)
```

### 커스텀 컴포넌트
```html
<!-- 알림창 -->
<callout type="info|success|warning|error">
내용
</callout>

<!-- 접기/펼치기 -->
<toggle title="제목">
내용
</toggle>

<!-- 2단 컬럼 -->
<columns>
<column>
왼쪽 내용
</column>
<column>
오른쪽 내용
</column>
</columns>

<!-- 테이블 -->
<table>
| 헤더1 | 헤더2 |
|-------|-------|
| 내용1 | 내용2 |
</table>

<!-- 코드 블록 -->
<code>
const example = "Hello World";
</code>

<!-- 하이라이트 -->
<mark className="bg-yellow-100 px-1 rounded">강조할 텍스트</mark>

<!-- 줄바꿈 -->
텍스트<br />새 줄
```

## 🔧 개발 및 배포

### 로컬 개발
```bash
npm run dev          # 개발 서버 시작
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 시작
```

### 자동 배포
- **플랫폼**: Vercel
- **트리거**: `main` 브랜치 push 시 자동 배포
- **URL**: https://blog.snacademy.co.kr

## 📊 SEO 및 성능

### 자동 SEO 처리
- 메타 태그 자동 생성
- Open Graph 메타데이터
- Twitter Card 메타데이터
- JSON-LD 구조화된 데이터
- 사이트맵 자동 생성

### 성능 최적화
- 정적 사이트 생성 (SSG)
- 이미지 최적화 (Next.js Image)
- 코드 스플리팅
- 캐싱 최적화

## 🎯 주요 파일별 역할

| 파일 | 역할 | 편집 빈도 |
|------|------|-----------|
| `src/data/posts.ts` | 모든 포스트 데이터 | ⭐ 매우 높음 |
| `src/app/page.tsx` | 홈페이지 레이아웃 | 낮음 |
| `src/app/[category]/[id]/page.tsx` | 동적 포스트 페이지 | 낮음 |
| `src/components/PostCard.tsx` | 포스트 카드 디자인 | 낮음 |
| `public/images/` | 이미지 저장소 | 높음 |

## 🚨 주의사항

### 필수 체크리스트
- [ ] `id`는 고유해야 함 (중복 시 오류)
- [ ] `url` 경로는 `/카테고리/id` 형식 준수
- [ ] `date`는 'YYYY-MM-DD' 형식 사용
- [ ] 이미지는 `public/images/`에 저장 후 `/images/` 경로로 참조
- [ ] `published: true`로 설정해야 실제 표시됨

### 카테고리별 URL 패턴
- **columns**: `/columns/post-id`
- **startup**: `/startup/post-id`  
- **SN Originals**: `/originals/post-id`

## 🔄 업데이트 프로세스

1. **포스트 추가**: `src/data/posts.ts` 편집
2. **이미지 추가**: `public/images/` 폴더에 업로드
3. **Git 커밋**: 변경사항 커밋
4. **자동 배포**: Vercel에서 자동으로 배포됨
5. **확인**: https://blog.snacademy.co.kr에서 확인

## 📞 문의 및 지원

- **개발 관련**: 이 문서 참조 또는 코드 주석 확인
- **콘텐츠 관련**: SN Academy 팀 내부 협의
- **기술 지원**: GitHub Issues 또는 개발팀 문의

---

**마지막 업데이트**: 2025년 10월 14일  
**문서 버전**: 1.0.0