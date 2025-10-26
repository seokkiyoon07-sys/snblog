# SN Blog 개발 가이드라인

## 목차

1. [프로젝트 구조](#프로젝트-구조)
2. [포스트 작성 가이드](#포스트-작성-가이드)
3. [라우팅 구조](#라우팅-구조)
4. [커스텀 템플릿 가이드](#커스텀-템플릿-가이드)
5. [스타일링 가이드](#스타일링-가이드)
6. [이미지 관리](#이미지-관리)

---

## 프로젝트 구조

```
snblog/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [category]/[id]/      # 일반 포스트 템플릿
│   │   ├── columns/               # Columns 카테고리
│   │   │   ├── [id]/             # Columns 포스트 (dokhak 특수 처리)
│   │   │   └── page.tsx          # Columns 목록
│   │   ├── startup/              # Startup 카테고리
│   │   └── originals/            # Originals 카테고리
│   ├── components/               # React 컴포넌트
│   │   └── special-posts/        # 특수 포스트 컴포넌트
│   │       └── SNarGOClient.tsx  # SNarGO 전용 페이지
│   ├── data/
│   │   └── posts.ts              # 모든 포스트 데이터
│   └── lib/
│       └── markdown-renderer.ts  # 마크다운 렌더링
└── public/
    └── images/                   # 정적 이미지 파일
```

---

## 포스트 작성 가이드

### 1. 기본 포스트 구조

포스트는 `src/data/posts.ts` 파일에서 관리됩니다.

```typescript
{
  id: 'post-id',                    // 고유 ID (URL에 사용)
  title: '포스트 제목',
  excerpt: '포스트 요약 (150자 이내)',
  thumbnail: '/images/path/to/thumbnail.png',
  content: `마크다운 또는 HTML 콘텐츠`,
  category: 'startup',              // 'startup' | 'columns' | 'originals'
  tags: ['태그1', '태그2'],
  author: 'SN Academy',
  date: '2025-10-20',              // YYYY-MM-DD 형식
  readTime: '5',                   // 읽는 시간 (분)
  featured: true,                  // 메인에 노출 여부
  published: true,                 // 공개 여부
  url: '/startup/post-id',         // 전체 URL
  type: undefined,                 // 'special'인 경우 커스텀 컴포넌트 사용
}
```

### 2. 콘텐츠 작성 방법

#### 마크다운 사용

```typescript
content: `
## 제목

일반 텍스트입니다.

- 리스트 항목 1
- 리스트 항목 2

**강조 텍스트**
`;
```

#### HTML 사용

```typescript
content: `
<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-blue-800">
    <strong>강조할 내용</strong>
  </p>
</div>

<h2>제목</h2>
<p>일반 텍스트</p>
`;
```

### 3. 포스트 타입

#### 일반 포스트

- `type: undefined`
- `posts.ts`의 content가 동적으로 렌더링됨
- 자동으로 표준 템플릿 적용

#### 특수 포스트 (Special)

- `type: 'special'`
- 전용 React 컴포넌트 필요
- `src/components/special-posts/` 에 컴포넌트 생성
- 예시: SNarGOClient.tsx

---

## 라우팅 구조

### URL 패턴

```
/                           # 홈
/startup                    # Startup 카테고리 목록
/startup/[id]               # Startup 포스트
/columns                    # Columns 카테고리 목록
/columns/[id]               # Columns 포스트
/originals                  # Originals 카테고리 목록
/originals/[id]             # Originals 포스트
/tags/[tag]                 # 태그별 포스트
/search                     # 검색
```

### 라우팅 우선순위

1. **정적 라우트** (가장 높음)
   - `/columns/page.tsx`

2. **동적 라우트 (구체적)**
   - `/columns/[id]/page.tsx` (columns 전용)

3. **동적 라우트 (일반)**
   - `/[category]/[id]/page.tsx` (모든 카테고리)

### 특수 처리: dokhak 포스트

`/columns/dokhak`은 특별한 하드코딩 템플릿을 사용합니다.

**이유:**

- 커스텀 React 컴포넌트 (`<Callout>`, 목차 네비게이션 등)
- 복잡한 인터랙티브 UI
- 일반 마크다운으로 표현 불가능한 레이아웃

**구현:**

```typescript
// src/app/columns/[id]/page.tsx
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post || post.category !== 'columns') {
    notFound();
  }

  // dokhak가 아닌 경우 일반 템플릿 사용
  if (id !== 'dokhak') {
    return <일반 템플릿 />;
  }

  // dokhak 전용 하드코딩 템플릿
  return <dokhak 전용 템플릿 />;
}
```

---

## 커스텀 템플릿 가이드

### 1. 특수 포스트 생성

1. `posts.ts`에 포스트 추가

```typescript
{
  id: 'custom-post',
  type: 'special',
  content: `이 포스트는 전용 페이지에서 렌더링됩니다.`,
  // ... 기타 필드
}
```

2. 전용 컴포넌트 생성

```typescript
// src/components/special-posts/CustomPostClient.tsx
'use client';

export default function CustomPostClient() {
  return (
    <main className="...">
      {/* 커스텀 UI */}
    </main>
  );
}
```

3. 라우트에서 처리

```typescript
// src/app/[category]/[id]/page.tsx
if (post.type === 'special') {
  if (id === 'custom-post') {
    const CustomPostClient = (
      await import('@/components/special-posts/CustomPostClient')
    ).default;
    return <CustomPostClient />;
  }
}
```

### 2. 카테고리별 커스텀 템플릿

특정 카테고리만의 템플릿이 필요한 경우:

1. 해당 카테고리 폴더에 `[id]/page.tsx` 생성
2. 조건부 렌더링 구현

```typescript
// src/app/columns/[id]/page.tsx
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const post = getPostById(id);

  // 특수 케이스 처리
  if (id === 'special-case') {
    return <특수 템플릿 />;
  }

  // 일반 템플릿
  return <일반 템플릿 />;
}
```

---

## 스타일링 가이드

### Tailwind CSS 클래스

#### 카드 컴포넌트

```html
<div class="border border-gray-200 rounded-lg p-6">
  <!-- 카드 내용 -->
</div>
```

#### 호버 효과 (클릭 가능한 카드)

```html
<div
  class="border border-gray-200 rounded-lg p-6 
            transition-all duration-300 
            hover:scale-105 hover:shadow-xl hover:bg-blue-50 
            cursor-pointer group"
>
  <a href="/link" class="block">
    <!-- 카드 내용 -->
  </a>
</div>
```

#### Prose 스타일 (마크다운 콘텐츠)

```html
<article
  class="prose prose-lg prose-slate dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:leading-relaxed prose-p:text-gray-700
                prose-a:text-sn-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-img:rounded-xl prose-img:shadow-md"
>
  {/* 마크다운 콘텐츠 */}
</article>
```

### 반응형 디자인

```html
<!-- 모바일 우선 접근 -->
<div class="text-sm md:text-base lg:text-lg">
  <!-- 모바일: text-sm, 태블릿: text-base, 데스크톱: text-lg -->
</div>

<!-- 그리드 레이아웃 -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- 모바일: 1열, 태블릿 이상: 2열 -->
</div>
```

---

## 이미지 관리

### 이미지 저장 위치

```
public/images/
├── startup/              # Startup 카테고리 이미지
│   ├── SNarGo/
│   │   ├── SNargo-thumbnail.PNG
│   │   ├── Snargo1.png
│   │   └── SNargo2.png
│   └── Why_we_invest_in_AI/
├── SNarlink/            # SNarlink 관련 이미지
├── thumbnail/           # 일반 썸네일
└── notion/              # Notion 연동 이미지
```

### 이미지 사용

#### Next.js Image 컴포넌트

```typescript
import Image from 'next/image';

<Image
  src="/images/startup/SNarGo/SNargo-thumbnail.PNG"
  alt="SNarGO 썸네일"
  width={1200}
  height={600}
  className="rounded-2xl shadow-2xl"
  priority
/>
```

#### HTML img 태그 (마크다운)

```html
<img src="/images/path/to/image.png" alt="설명" />
```

### 이미지 파일명 규칙

- ✅ **권장:** 공백 없이 하이픈(-) 또는 언더스코어(\_) 사용
  - `SNargo-thumbnail.PNG`
  - `why_we_invest_in_ai.png`

- ❌ **비권장:** 공백 포함
  - `SNargo thumbnail.PNG` → 웹에서 로드 실패 가능

---

## 카드 링크 패턴

### 내부 링크 (같은 사이트)

```html
<div
  class="... hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer"
>
  <a href="/startup/SNargopost_1" class="block">
    <!-- 카드 내용 -->
  </a>
</div>
```

### 외부 링크 (새 탭)

```html
<div
  class="... hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer"
>
  <a
    href="https://snargpt.ai"
    target="_blank"
    rel="noopener noreferrer"
    class="block"
  >
    <!-- 카드 내용 -->
  </a>
</div>
```

---

## 개발 서버

### 로컬 개발

```bash
npm run dev
```

- URL: http://localhost:3000
- Network: http://192.168.0.73:3000

### 캐시 초기화 후 재시작

```bash
rm -rf .next && npm run dev
```

### 빌드 테스트

```bash
npm run build
npm start
```

---

## 트러블슈팅

### 1. 404 에러 발생

- `generateStaticParams` 함수 확인
- 포스트의 `published: true` 확인
- `.next` 폴더 삭제 후 재시작

### 2. 썸네일 안 보임

- 파일명 공백 확인 (공백 제거)
- 파일 경로 대소문자 확인 (`.PNG` vs `.png`)
- public 폴더 내 실제 파일 존재 확인

### 3. 스타일 깨짐

- Tailwind 클래스 오타 확인
- 다크모드 클래스 (`dark:`) 확인
- 반응형 breakpoint 확인

### 4. generateStaticParams 중복 선언 에러

- 파일 내 `export async function generateStaticParams()` 중복 확인
- 하나만 남기고 제거

---

## 베스트 프랙티스

### 1. 포스트 작성

- ✅ excerpt는 150자 이내로 명확하게
- ✅ 태그는 3-5개 정도로 제한
- ✅ readTime은 실제 읽는 시간 기준
- ✅ 이미지는 적절한 크기로 최적화

### 2. 코드 구조

- ✅ 일반 포스트는 `posts.ts`에서 관리
- ✅ 특수 포스트만 커스텀 컴포넌트 사용
- ✅ 재사용 가능한 컴포넌트 분리
- ✅ TypeScript 타입 정의 활용

### 3. 성능 최적화

- ✅ 이미지는 Next.js Image 컴포넌트 사용
- ✅ 중요한 이미지는 `priority` 속성 추가
- ✅ 불필요한 re-render 방지

### 4. SEO

- ✅ title, description 명확하게 작성
- ✅ 썸네일 필수 포함
- ✅ 구조화된 데이터 (StructuredData) 활용
- ✅ 적절한 태그 사용

---

## 참고 문서

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
