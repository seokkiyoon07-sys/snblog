# Changelog - 2025-11-22

## 코드 리팩토링: 하드코딩 제거 및 중앙 설정 파일 도입

### 1. 중앙 설정 파일 생성

**파일:** `src/lib/config.ts`

새로 생성된 설정 파일로 모든 하드코딩된 URL과 설정값을 중앙 관리합니다.

**포함 내용:**

- `BASE_URL`: 사이트 기본 URL
- `EXTERNAL_URLS`: 외부 링크 (학원, SNarGPT 등)
- `CDN_URLS`: KaTeX 등 CDN 리소스
- `NAVIGATION_MENU`: 네비게이션 메뉴 항목
- `ACADEMY_INFO_OPTIONS`: 헤더 학원 정보 옵션
- `CATEGORY_CONFIG`: 카테고리별 라우트, 이모지, 라벨
- `ORGANIZATION_INFO`: 스키마 마크업용 조직 정보
- `CONTACT_INFO`: 연락처 정보

**헬퍼 함수:**

```typescript
getCategoryRoute(category: string): string
getCategoryEmoji(category: string): string
getCategoryLabel(category: string): string
```

---

### 2. BASE_URL 적용 파일 목록

#### 레이아웃 및 설정

- **`src/app/layout.tsx`**
  - `metadataBase` URL 교체
  - `openGraph.url` 교체

- **`src/app/sitemap.ts`**
  - `baseUrl` 변수를 `BASE_URL`로 교체

- **`src/app/robots.ts`**
  - sitemap URL을 템플릿 리터럴로 교체

#### 페이지

- **`src/app/page.tsx`**
  - `metadataBase`, `openGraph.url` 교체
  - 스키마 마크업 내 모든 URL 교체

- **`src/app/columns/page.tsx`**
  - `metadataBase` URL 교체

#### 컴포넌트

- **`src/components/Header.tsx`**
  - `NAVIGATION_MENU` 상수로 네비게이션 메뉴 교체 (데스크톱/모바일)
  - `EXTERNAL_URLS`로 외부 링크 교체

- **`src/components/PostCard.tsx`**
  - `getCategoryEmoji()` 함수 사용
  - `getCategoryRoute()` 함수 사용
  - `BASE_URL` 적용

- **`src/components/FeaturedPost.tsx`**
  - `getCategoryEmoji()` 함수 사용
  - `getCategoryRoute()` 함수 사용
  - `BASE_URL` 적용

- **`src/components/BlogLayout.tsx`**
  - `ORGANIZATION_INFO` 사용
  - `BASE_URL` 적용

- **`src/components/StructuredData.tsx`**
  - `ORGANIZATION_INFO` 사용
  - `BASE_URL` 적용

- **`src/lib/utils.ts`**
  - `generateMetadata` 함수에서 `BASE_URL` 사용

---

### 3. 썸네일 경로 수정

**파일:** `src/data/posts.ts`

**변경 내용:**

- `economi-son` 포스트의 썸네일 경로 수정
  - 변경 전: `/images/notice/2026-admission-guide/2026-admission-guide.png`
  - 변경 후: `/economi_son/economyson.jfif`

---

## 기술적 개선 사항

### 중복 코드 제거

1. **카테고리 이모지 매핑**
   - 각 컴포넌트에서 중복 정의되던 `getEmoji()` 함수 제거
   - `getCategoryEmoji()` 헬퍼 함수로 통합

2. **카테고리 라우팅**
   - switch/case 문으로 작성되던 라우팅 로직 제거
   - `getCategoryRoute()` 헬퍼 함수로 통합

3. **네비게이션 메뉴**
   - Header.tsx에서 2번 중복 정의되던 메뉴 배열 제거
   - `NAVIGATION_MENU` 상수로 단일화

### 유지보수성 향상

- URL 변경 시 `config.ts` 한 곳만 수정하면 됨
- 카테고리 추가 시 `CATEGORY_CONFIG`에만 추가
- 네비게이션 메뉴 변경 시 `NAVIGATION_MENU`만 수정

---

## 파일 변경 요약

| 파일                                | 변경 유형                           |
| ----------------------------------- | ----------------------------------- |
| `src/lib/config.ts`                 | 신규 생성                           |
| `src/lib/utils.ts`                  | BASE_URL import 추가                |
| `src/app/layout.tsx`                | BASE_URL 적용                       |
| `src/app/page.tsx`                  | BASE_URL 적용                       |
| `src/app/sitemap.ts`                | BASE_URL 적용                       |
| `src/app/robots.ts`                 | BASE_URL 적용                       |
| `src/app/columns/page.tsx`          | BASE_URL 적용                       |
| `src/components/Header.tsx`         | NAVIGATION_MENU, EXTERNAL_URLS 적용 |
| `src/components/PostCard.tsx`       | 헬퍼 함수 적용                      |
| `src/components/FeaturedPost.tsx`   | 헬퍼 함수 적용                      |
| `src/components/BlogLayout.tsx`     | ORGANIZATION_INFO, BASE_URL 적용    |
| `src/components/StructuredData.tsx` | ORGANIZATION_INFO, BASE_URL 적용    |
| `src/data/posts.ts`                 | economi-son 썸네일 경로 수정        |

---

## 남은 작업

아직 하드코딩된 URL이 남아있는 파일들:

- `src/app/columns/[id]/page.tsx`
- `src/app/[category]/[id]/page.tsx`
- `src/app/problem-download/[id]/page.tsx`
- `src/app/notice/page.tsx`, `src/app/notice/[id]/page.tsx`
- `src/app/originals/` 하위 페이지들
- `src/app/admissions/page.tsx`
- `src/app/startup/page.tsx`
- `src/app/reviews/page.tsx`
- `src/app/tags/[tag]/page.tsx`
- 기타 컴포넌트들

향후 이 파일들도 동일한 패턴으로 리팩토링 예정입니다.
