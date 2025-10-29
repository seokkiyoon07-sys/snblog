# 변경사항 - 2025년 10월 29일

## 새로운 포스트 추가

### 고전문학 「초한가」 포스트 추가

- **ID**: `chohanga`
- **제목**: 이제 그만 끝내자 항우야 너네 애들 다 넘어왔단다 (고전문학 「초한가」)
- **카테고리**: SN Originals
- **날짜**: 2025-10-29
- **readTime**: 7분
- **썸네일**: `/images/thumbnail/thumbnail_a4_chohanga.png`
- **YouTube**: https://www.youtube.com/watch?v=Wv6KFsP_V94
- **Featured**: true (featuredOrder: 3)

#### 주요 내용

- 작자 미상의 판소리 「초한가」 소개
- 초(楚)나라와 한(漢)나라의 역사적 대결
- 사면초가(四面楚歌) 사자성어 설명
- 항우의 유명한 시구 4구절 (콜아웃 박스로 강조)
- 오추마(烏騅馬) 용어 설명
- 영상 하이라이트: 장량의 심리전 전략
- 영어 설명 섹션 포함

## 포스트 설정 변경

### 독락당 포스트 추천에서 제거

- **ID**: `dokrakdang`
- **변경**: `featured: true` → `featured: false`
- `featuredOrder: 3` 제거

## UI/UX 개선

### readTime 표시 형식 개선

**문제**: 숫자만 표시되어 조회수로 오해될 수 있음 (예: "15", "12")

**해결**: 명확한 형식으로 변경 ("15분 읽기")

**수정된 파일**:

1. `src/components/PostCard.tsx` (Line 158)
2. `src/components/FeaturedPost.tsx` (Line 144)
3. `src/app/columns/[id]/page.tsx` (Line 312)
4. `src/app/[category]/[id]/page.tsx` (Line 164)
5. `src/app/posts/[id]/page.tsx` (Line 87)

**변경 내용**:

```tsx
// Before
<span>{post.readTime}</span>
<span>{post.readTime} min read</span>

// After
<span>{post.readTime}분 읽기</span>
```

### 모든 포스트의 readTime 70% 축소

독자들의 실제 읽기 시간을 반영하여 모든 readTime 값을 70%로 축소

**변환 규칙**:

- 15분 → 11분
- 13분 → 9분
- 12분 → 8분
- 10분 → 7분
- 9분 → 6분
- 8분 → 6분
- 7분 → 5분
- 6분 → 4분
- 5분 → 4분

**영향받은 포스트**: 전체 21개 포스트

## 콘텐츠 업데이트

### SNarGO 페이지 업데이트

**파일**: `src/components/special-posts/SNarGOClient.tsx` (Line 255-257)

**변경 내용**:

```tsx
// Before
현재 처리 속도와 그래프/도형 생성 기능은 개발 중이며,
순차적으로 업데이트될 예정입니다.

// After
25.10.29 현재 그래프 및 도형 생성 기능이 개발 완료되어,
그래프로도 풀이를 받아볼 수 있습니다.
```

## 현재 추천 포스트 순서

1. **featuredOrder: 1** - AI에게 배우는 진짜 공부법 (columns)
2. **featuredOrder: 2** - 왜 우리는 AI에 투자하는가 (startup)
3. **featuredOrder: 3** - 초한가 (SN Originals) ⭐ NEW
4. **featuredOrder: 4** - 오륜가 (SN Originals)

## 파일 변경 요약

### 수정된 파일 (7개)

- `src/data/posts.ts` - 초한가 포스트 추가, 독락당 featured 제거, readTime 전체 축소
- `src/components/PostCard.tsx` - readTime 표시 형식 개선
- `src/components/FeaturedPost.tsx` - readTime 표시 형식 개선
- `src/app/columns/[id]/page.tsx` - readTime 표시 형식 개선
- `src/app/[category]/[id]/page.tsx` - readTime 표시 형식 개선
- `src/app/posts/[id]/page.tsx` - readTime 표시 형식 개선
- `src/components/special-posts/SNarGOClient.tsx` - 그래프 생성 기능 개발 완료 안내

### 추가된 파일 (1개)

- `public/images/thumbnail/thumbnail_a4_chohanga.png` - 초한가 썸네일 이미지

## 기술적 세부사항

### 초한가 포스트 특징

- **type**: 'special' (전용 컴포넌트 사용)
- **콜아웃 박스**: 그라데이션 배경 + 왼쪽 테두리 강조
- **다크모드**: 완벽 지원
- **오추마 설명**: 콜아웃 외부 배치로 가독성 개선
- **영상 하이라이트 섹션**: 장량의 심리전 전략 설명
- **다국어 지원**: 한국어 + 영어 설명 섹션

### 스타일링

```css
/* 시구 콜아웃 박스 */
- 배경: slate-50 to gray-50 (라이트) / gray-800 to gray-900 (다크)
- 테두리: 왼쪽 4px, slate-600 (라이트) / slate-400 (다크)
- 패딩: p-8
- 폰트: text-base, font-semibold
- 줄 간격: space-y-3
```

## 테스트 완료 항목

✅ 개발 서버 정상 작동 (http://localhost:3000)
✅ 초한가 포스트 렌더링 확인 (/originals/chohanga)
✅ 추천 포스트 목록 업데이트 확인
✅ readTime 표시 형식 전체 페이지 적용 확인
✅ SNarGO 페이지 업데이트 확인 (/startup/SNargopost_1)
✅ 다크모드 정상 작동 확인

## 향후 개선 사항

- [ ] 초한가 영상 조회수 모니터링
- [ ] 사용자 피드백 수집
- [ ] readTime 정확도 추가 조정 검토
- [ ] 추천 포스트 순서 최적화
