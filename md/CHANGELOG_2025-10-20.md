# 변경 사항 - 2025년 10월 20일

## 요약

블로그 포스트 링크 및 호버 효과 추가, 썸네일 문제 해결, 라우팅 구조 개선

---

## 1. GitHub Pull 및 최신 버전 동기화

### 변경 내용

- GitHub 원격 저장소에서 최신 버전 pull
- 9개 파일 업데이트 (555줄 추가, 566줄 삭제)

### 주요 업데이트 파일

- `.github/workflows/jandi-notification.yml` - Jandi 알림 워크플로우 수정
- `.github/workflows/test-notification.yml` - 신규 추가
- `src/data/posts.ts` - 포스트 데이터 대폭 추가 (220줄)
- `src/lib/markdown-renderer.ts` - 마크다운 렌더러 개선
- 이미지 파일 2개 추가

---

## 2. AI Startup 페이지 문구 수정

### 위치

`http://localhost:3000/startup/ai-startup`

### 변경 내용

**수정 전:**

```
• AI 기반 시도와 의도 탐지 능력
```

**수정 후:**

```
• AI 기반 인터넷 우회 시도와 의도 탐지 가능
```

### 파일

- `src/data/posts.ts` (line 952)

---

## 3. SNargopost_1 썸네일 문제 해결

### 문제

- SNargopost_1 페이지에서 썸네일이 표시되지 않음
- 파일명에 공백 포함으로 웹 브라우저 로드 실패

### 해결

1. 파일명 변경
   - 변경 전: `SNargo thumbnail.PNG`
   - 변경 후: `SNargo-thumbnail.PNG`

2. posts.ts 경로 업데이트

```typescript
thumbnail: '/images/startup/SNarGo/SNargo-thumbnail.PNG',
```

3. SNarGOClient 컴포넌트에 썸네일 섹션 추가

```typescript
<section className="mt-12">
  <div className="flex justify-center">
    <Image
      src="/images/startup/SNarGo/SNargo-thumbnail.PNG"
      alt="SNarGO 썸네일"
      width={1200}
      height={600}
      className="rounded-2xl shadow-2xl w-full max-w-4xl object-cover"
      priority
    />
  </div>
</section>
```

### 파일

- `public/images/startup/SNarGo/SNargo thumbnail.PNG` → `SNargo-thumbnail.PNG`
- `src/data/posts.ts`
- `src/components/special-posts/SNarGOClient.tsx`

---

## 4. AI Startup 페이지 카드 링크 및 호버 효과

### 4.1 SNarGO 카드

#### 기능 추가

- ✅ 호버 시 클로즈업 (105% 확대)
- ✅ 호버 시 파란색 배경
- ✅ 호버 시 큰 그림자
- ✅ 클릭 시 `/startup/SNargopost_1` 이동

#### 구현

```html
<div
  class="... transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group"
>
  <a href="/startup/SNargopost_1" class="block">
    <!-- 카드 내용 -->
  </a>
</div>
```

### 4.2 SNarGPT 카드

#### 기능 추가

- ✅ 동일한 호버 효과
- ✅ 클릭 시 `https://snargpt.ai` 새 탭 열기

#### 구현

```html
<div
  class="... transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group"
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

### 4.3 SNarlink 카드

#### 기능 추가

- ✅ 동일한 호버 효과
- ✅ 클릭 시 `/columns/SNarlink` 이동

#### 구현

```html
<div
  class="... transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group"
>
  <a href="/columns/SNarlink" class="block">
    <!-- 카드 내용 -->
  </a>
</div>
```

### 파일

- `src/data/posts.ts` (lines 939-991)

---

## 5. Columns 라우팅 구조 개선

### 문제

- `/columns/SNarlink` 페이지 404 에러
- `/columns/[id]/page.tsx`가 dokhak 전용으로만 작동

### 원인

1. `generateStaticParams`가 'dokhak'만 반환
2. 페이지 컴포넌트에서 `id !== 'dokhak'` 조건으로 차단

### 해결 방법

#### 5.1 동적 라우트로 변경

- `/columns/dokhak` (정적) → `/columns/[id]` (동적)

#### 5.2 조건부 렌더링 구현

**dokhak 전용 템플릿:**

```typescript
if (id === 'dokhak') {
  // 하드코딩된 JSX 템플릿
  return <dokhak 전용 UI />;
}
```

**일반 템플릿:**

```typescript
if (id !== 'dokhak') {
  // post.content를 동적으로 렌더링
  return (
    <main>
      <section>{/* Hero */}</section>
      <section>
        <article dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
      </section>
    </main>
  );
}
```

#### 5.3 generateStaticParams 수정

```typescript
export async function generateStaticParams() {
  const posts = getPostsByCategory('columns');
  return posts.map(post => ({ id: post.id }));
}
```

### 이유

- **dokhak:** 커스텀 React 컴포넌트 (`<Callout>`, 목차 등) 사용, 일반 마크다운으로 불가능
- **SNarlink:** 일반 HTML/마크다운 콘텐츠, 동적 렌더링 가능

### 파일

- `src/app/columns/[id]/page.tsx`

---

## 6. 추가 import 및 의존성

### 추가된 import

```typescript
import Image from 'next/image';
import { getPostsByCategory } from '@/data/posts';
import { renderMarkdown } from '@/lib/markdown-renderer';
```

### 파일

- `src/app/columns/[id]/page.tsx`

---

## 7. 개발 서버 재시작

### 실행 명령

```bash
# 캐시 초기화 및 재시작
rm -rf .next && npm run dev
```

### 이유

- 라우팅 구조 변경
- generateStaticParams 수정
- 정적 페이지 재생성 필요

---

## 테스트 완료

### ✅ 정상 작동 확인

1. `http://localhost:3000/startup/ai-startup`
   - SNarlink 카드 호버 및 클릭 → `/columns/SNarlink` 이동
   - SNarGO 카드 호버 및 클릭 → `/startup/SNargopost_1` 이동
   - SNarGPT 카드 호버 및 클릭 → `https://snargpt.ai` 새 탭 열기

2. `http://localhost:3000/startup/SNargopost_1`
   - 썸네일 정상 표시
   - "왜 스나고인가" 섹션 정상 표시

3. `http://localhost:3000/columns/SNarlink`
   - SNarlink 콘텐츠 정상 표시
   - 일반 템플릿 사용

4. `http://localhost:3000/columns/dokhak`
   - dokhak 전용 템플릿 정상 작동

---

## 파일 변경 요약

| 파일                                                | 변경 유형 | 설명                                     |
| --------------------------------------------------- | --------- | ---------------------------------------- |
| `src/data/posts.ts`                                 | 수정      | 문구 수정, 카드 링크 및 호버 효과 추가   |
| `src/components/special-posts/SNarGOClient.tsx`     | 수정      | 썸네일 섹션 추가                         |
| `src/app/columns/[id]/page.tsx`                     | 수정      | 조건부 렌더링, generateStaticParams 수정 |
| `public/images/startup/SNarGo/SNargo thumbnail.PNG` | 이름 변경 | → `SNargo-thumbnail.PNG`                 |

---

## 주요 개선 사항

### 사용자 경험

- ✅ 직관적인 카드 클릭 인터랙션
- ✅ 부드러운 호버 애니메이션
- ✅ 썸네일 표시로 시각적 개선

### 코드 구조

- ✅ 일관된 라우팅 구조
- ✅ 조건부 렌더링으로 유연성 향상
- ✅ dokhak 특수 케이스 명확히 분리

### 유지보수성

- ✅ 새로운 columns 포스트 추가 시 자동 처리
- ✅ 특수 템플릿과 일반 템플릿 명확히 구분
- ✅ 파일명 규칙 개선 (공백 제거)

---

## 향후 개선 사항

1. **이미지 최적화**
   - 썸네일 크기 최적화
   - WebP 포맷 전환 고려

2. **타입 안전성**
   - Post 타입에 `type: 'special'` 명시적 타입 추가
   - 카테고리 enum 타입 정의

3. **성능 개선**
   - 이미지 lazy loading
   - 카드 컴포넌트 재사용

4. **접근성**
   - 키보드 네비게이션 개선
   - ARIA 레이블 추가

---

## 문서 추가

1. **BLOG_DEVELOPMENT_GUIDE.md**
   - 프로젝트 구조
   - 포스트 작성 가이드
   - 라우팅 구조 설명
   - 커스텀 템플릿 가이드
   - 스타일링 가이드
   - 트러블슈팅

2. **CHANGELOG_2025-10-20.md** (이 문서)
   - 오늘의 모든 변경 사항 기록
