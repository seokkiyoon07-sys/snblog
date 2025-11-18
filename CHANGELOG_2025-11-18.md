# 변경사항 (2025-11-18)

## 📝 요약

오늘 SN Originals 고전문학 포스트 추가 및 페이지네이션 기능을 구현했습니다.

## ✨ 새로운 기능

### 1. SN Originals 페이지네이션 추가

**파일:** `src/app/originals/page.tsx`

- 블로그 홈과 동일한 페이지네이션 기능 추가
- 한 페이지당 6개 포스트 표시
- `getPaginatedOriginalsPosts` 함수 사용
- `Pagination` 컴포넌트로 페이지 네비게이션 제공

**변경 내용:**

- `getPostsByCategory` → `getPaginatedOriginalsPosts`로 변경
- `searchParams` prop 추가하여 현재 페이지 관리
- 컴포넌트를 async 함수로 변경

## 📄 새로운 포스트

### 1. 「비가」(悲歌) - 이정환

**파일:** `src/data/posts.ts`

**게시 정보:**

- ID: `biga`
- 제목: "누가 우리 왕자님 좀 구해와주라 (고전문학 「비가」)"
- 날짜: 2025-11-04
- 시리즈: 제15탄
- YouTube: https://www.youtube.com/watch?v=aIy9pO6qaMQ

**내용:**

- 병자호란(1636-1637)의 치욕과 분노를 담은 10수 연시조
- 소현 세자와 봉림 대군이 청나라에 끌려간 상황
- 조정 신하들의 무능함에 대한 비판
- 이정환의 수치심과 비통함을 표현한 현실비판 시조

**구성:**

- 상세 설명 토글 섹션 (6개 하위 섹션)
  - 🏰 작품의 배경과 의미
  - 🎭 문학적 특징
  - 🌍 문학사적 의의
  - 📚 작품 감상 포인트
  - 🎨 현대적 의미
  - 🔍 수능 출제 포인트
- 💡 영상 하이라이트
- English Description 토글

**태그:**
고전문학, 비가, 이정환, 시조, 연시조, 병자호란, 수능국어, 조선문학, 현실비판, 소현세자, 봉림대군

**썸네일:** `/images/thumbnail/thumbnail_biga.png`

## 🏷️ 뱃지 추가

### 1. classic-literature-marathon-2026

**파일:** `src/data/posts.ts`

**뱃지 내용:** `'2026학년도 수능 출제 (북새곡) · 유튜브 2.6만뷰'`

- 2026학년도 수능 출제 작품(북새곡) 표시
- 유튜브 조회수 2.6만뷰 정보 추가

## 🔧 기술적 변경사항

### 페이지네이션 구현

1. **Props 타입 정의**

```typescript
interface OriginalsPageProps {
  searchParams: Promise<{ page?: string }>;
}
```

2. **데이터 페칭**

```typescript
const resolvedSearchParams = await searchParams;
const currentPage = parseInt(resolvedSearchParams.page || '1', 10);

const { posts: originalsPosts, totalPages } = await getPaginatedOriginalsPosts(
  currentPage,
  6
);
```

3. **Pagination 컴포넌트 추가**

```typescript
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  baseUrl="/originals"
/>
```

## 📊 데이터 구조

### 포스트 데이터 필드

```typescript
{
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'SN Originals';
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  thumbnail: string;
  youtubeUrl: string;
  url: string;
  type: 'special';
  badge?: string; // 선택적 필드
}
```

## 📁 수정된 파일 목록

1. `src/app/originals/page.tsx` - 페이지네이션 추가
2. `src/data/posts.ts` - 「비가」 포스트 추가, 뱃지 추가

## 🎯 다음 단계 제안

- [ ] 다른 SN Originals 포스트에도 조회수 정보 추가 고려
- [ ] 썸네일 이미지 파일 추가 (`thumbnail_biga.png`)
- [ ] 페이지네이션 스타일 커스터마이징 검토
- [ ] SEO 메타데이터 최적화

## 📝 참고사항

- 모든 포스트는 SN Originals 가이드라인(`SN_ORIGINALS_WRITING_GUIDE.md`)을 따름
- 페이지네이션은 블로그 홈 페이지와 동일한 형식 사용
- 뱃지 시스템은 PostCard 컴포넌트에서 지원
