# 새로운 글 추가 가이드

이제 새로운 글을 추가하는 것이 매우 간단해졌습니다!

## 1. 글 데이터 추가

`src/data/posts.ts` 파일을 열고 `allPosts` 배열에 새로운 글을 추가하세요:

```typescript
{
  id: 'unique-post-id', // 고유한 ID (URL에 사용됨)
  title: '글 제목',
  excerpt: '글 요약 (검색 결과와 소셜 공유에 표시됨)',
  date: '2025-10-03', // YYYY-MM-DD 형식
  readTime: '5 min read',
  tags: ['태그1', '태그2', '태그3'],
  category: '카테고리명',
  url: '/posts/unique-post-id', // 실제 페이지 URL
  thumbnail: 'https://example.com/image.jpg', // 선택사항
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID', // 선택사항
  author: 'SN Academy',
  featured: false, // 추천 글에 표시하려면 true
  published: true // false로 설정하면 숨김
}
```

## 2. 자동으로 처리되는 것들

새로운 글을 추가하면 다음이 자동으로 처리됩니다:

- ✅ 홈페이지 최신글에 자동 반영
- ✅ 사이드바의 최근 글에 자동 반영
- ✅ 태그 자동 업데이트
- ✅ 검색 기능에 자동 포함
- ✅ 사이트맵에 자동 추가
- ✅ SEO 메타데이터 자동 생성
- ✅ 소셜 공유 메타데이터 자동 생성

## 3. 실제 페이지 생성

만약 특별한 페이지가 필요하다면 `src/app/posts/[id]/page.tsx`를 참고하여
`src/app/your-category/your-post/page.tsx`를 만들어주세요.

## 4. 예시

```typescript
// src/data/posts.ts에 추가할 예시
{
  id: 'new-classical-literature',
  title: '새로운 고전문학 작품 분석',
  excerpt: '이번에는 새로운 고전문학 작품을 분석해보겠습니다.',
  date: '2025-10-04',
  readTime: '8 min read',
  tags: ['SN Originals', '고전문학', '새작품'],
  category: 'SN Originals',
  url: '/posts/new-classical-literature',
  thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
  author: 'SN Academy',
  featured: true,
  published: true
}
```

이렇게 하면 새로운 글이 자동으로 모든 곳에 반영됩니다!
