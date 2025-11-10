# SN Academy Blog 디자인 가이드

> 심플하고 깔끔하며 담백한 블로그를 위한 디자인 시스템

## 🎨 디자인 철학

### 핵심 원칙

1. **미니멀리즘**: 불필요한 요소 제거, 콘텐츠에 집중
2. **일관성**: 전체 사이트에서 동일한 디자인 언어 사용
3. **가독성**: 타이포그래피와 여백을 통한 최적의 읽기 경험
4. **전문성**: 교육 기관에 어울리는 신뢰감 있는 디자인

### 벤치마크 레퍼런스

- **Stripe Blog**: 전문적인 블루-그레이 팔레트, 세련된 타이포그래피
- **Notion**: 극도의 미니멀리즘, 콘텐츠 중심 디자인
- **Medium**: 타이포그래피와 가독성에 집중

## 🎨 색상 시스템

### 주요 색상 (Primary Colors)

```css
/* Navy - 전문성, 신뢰감 */
--color-primary: #0f2942 --color-primary-light: #1e3a5f
  --color-primary-dark: #0a1f33 /* Slate - 본문 텍스트 */
  --color-text-primary: #1e293b --color-text-secondary: #475569
  --color-text-tertiary: #64748b
  /* Sage Green - 브랜드 악센트 (기존 SN 녹색 계승) */ --color-accent: #5f7a61
  --color-accent-light: #7a9a7d --color-accent-dark: #4a5f4c;
```

### 배경 색상 (Background Colors)

```css
/* 순백 - 기본 배경 */
--color-bg-base: #ffffff /* 아주 연한 그레이 - 섹션 구분 */
  --color-bg-subtle: #f8fafc /* 연한 그레이 - 카드, 패널 */
  --color-bg-muted: #f1f5f9 /* 테두리 */ --color-border-light: #e2e8f0
  --color-border-default: #cbd5e1;
```

### 상태 색상 (Semantic Colors) - 최소 사용

```css
/* Success - 성공, 확인 */
--color-success: #10b981 --color-success-light: #d1fae5 /* Info - 정보, 안내 */
  --color-info: #3b82f6 --color-info-light: #dbeafe /* Warning - 주의, 경고 */
  --color-warning: #f59e0b --color-warning-light: #fef3c7 /* Error - 오류 */
  --color-error: #ef4444 --color-error-light: #fee2e2;
```

## ✍️ 타이포그래피

### 폰트 패밀리

```css
/* 시스템 폰트 스택 (최적 성능) */
--font-sans:
  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
  Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
  'Segoe UI Symbol' /* 모노스페이스 (코드용) */ --font-mono: 'SF Mono', Monaco,
  'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
```

### 폰트 크기 스케일 (1.25 비율)

```css
--text-xs: 0.75rem /* 12px */ --text-sm: 0.875rem /* 14px */ --text-base: 1rem
  /* 16px */ --text-lg: 1.125rem /* 18px */ --text-xl: 1.25rem /* 20px */
  --text-2xl: 1.5rem /* 24px */ --text-3xl: 1.875rem /* 30px */
  --text-4xl: 2.25rem /* 36px */ --text-5xl: 3rem /* 48px */ --text-6xl: 3.75rem
  /* 60px */;
```

### 제목 스타일

```css
h1 {
  font-size: var(--text-4xl);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
}

h2 {
  font-size: var(--text-3xl);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--color-text-primary);
}

h3 {
  font-size: var(--text-2xl);
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-text-primary);
}

h4 {
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: 1.5;
  color: var(--color-text-secondary);
}
```

### 본문 스타일

```css
p,
body {
  font-size: var(--text-base);
  line-height: 1.75;
  color: var(--color-text-secondary);
}

/* 최대 읽기 너비 */
.prose {
  max-width: 65ch;
}
```

## 📐 간격 시스템 (8pt Grid)

```css
--space-1: 0.25rem /* 4px */ --space-2: 0.5rem /* 8px */ --space-3: 0.75rem
  /* 12px */ --space-4: 1rem /* 16px */ --space-5: 1.25rem /* 20px */
  --space-6: 1.5rem /* 24px */ --space-8: 2rem /* 32px */ --space-10: 2.5rem
  /* 40px */ --space-12: 3rem /* 48px */ --space-16: 4rem /* 64px */
  --space-20: 5rem /* 80px */ --space-24: 6rem /* 96px */;
```

## 🎭 컴포넌트 스타일 가이드

### Callout 박스

```tsx
/* Info Callout - 정보 전달 */
<div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
  <p className="text-blue-900">정보 내용</p>
</div>

/* Success Callout - 성공, 팁 */
<div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
  <p className="text-green-900">성공 메시지</p>
</div>

/* Warning Callout - 주의사항 */
<div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
  <p className="text-amber-900">주의사항</p>
</div>
```

**원칙:**

- 배경색은 아주 연한 톤 사용 (50 단계)
- 좌측 테두리로 강조 (4px)
- 우측 모서리만 둥글게 처리
- 텍스트는 진한 색 사용 (900 단계)

### Toggle (Accordion)

```tsx
<details className="border border-gray-200 rounded-lg p-4 mb-4">
  <summary
    className="cursor-pointer font-semibold text-gray-900
                     hover:text-primary transition-colors"
  >
    제목
  </summary>
  <div className="mt-4 text-gray-700">내용</div>
</details>
```

**원칙:**

- 미니멀한 테두리 (1px)
- 부드러운 호버 효과
- 충분한 패딩으로 클릭 영역 확보

### Table

```tsx
<table className="w-full border-collapse">
  <thead>
    <tr className="border-b-2 border-gray-200">
      <th className="text-left py-3 px-4 font-semibold text-gray-900">헤더</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-gray-100">
      <td className="py-3 px-4 text-gray-700">내용</td>
    </tr>
  </tbody>
</table>
```

**원칙:**

- 줄무늬 배경 제거
- 얇은 테두리로 구분 (헤더만 2px, 나머지 1px)
- 충분한 여백 (py-3, px-4)

### Card

```tsx
<div
  className="bg-white rounded-xl border border-gray-200
                hover:shadow-lg transition-shadow p-6"
>
  {/* 카드 내용 */}
</div>
```

**원칙:**

- 흰 배경 + 얇은 테두리
- 둥근 모서리 (12px)
- 호버 시 미묘한 그림자
- 충분한 패딩 (6 = 1.5rem = 24px)

### Code Block

```tsx
<pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto border border-gray-200">
  <code className="text-sm font-mono text-gray-800">코드 내용</code>
</pre>
```

**원칙:**

- 중성적인 회색 배경
- 모노스페이스 폰트
- 작은 폰트 크기 (14px)
- 가로 스크롤 지원

### Highlight (강조 텍스트)

```tsx
<mark className="bg-yellow-100 px-1 rounded">강조할 텍스트</mark>
```

**원칙:**

- 부드러운 노란색 배경 (yellow-100)
- 최소한의 패딩 (px-1)
- 살짝 둥근 모서리
- 가독성을 해치지 않는 정도의 강조

### Line Break (줄바꿈)

```tsx
첫 번째 줄<br />두 번째 줄
```

**사용 시기:**

- 주소나 연락처 정보
- 시 또는 가사
- 짧은 목록을 한 문단에 표시할 때

**주의사항:**

- 일반 문단은 자연스러운 줄바꿈 사용
- `<br />` 남용 금지 (문단 구분은 `<p>` 태그 사용)

## 📱 반응형 디자인

### 브레이크포인트

```css
/* Mobile First */
sm:  640px   /* 작은 태블릿 */
md:  768px   /* 태블릿 */
lg:  1024px  /* 작은 데스크톱 */
xl:  1280px  /* 데스크톱 */
2xl: 1536px  /* 큰 데스크톱 */
```

### 컨테이너 최대 너비

```css
/* 일반 콘텐츠 */
max-width: 1280px (xl)

/* 본문 텍스트 */
max-width: 65ch (약 800px)

/* Full Width */
max-width: 100%
```

## 🎯 레이아웃 원칙

### 여백 (Spacing)

1. **섹션 간격**: 최소 4rem (64px) 이상
2. **요소 간격**: 1.5rem (24px) 기본
3. **컨테이너 패딩**: 좌우 1.5rem (모바일), 2.5rem (데스크톱)

### 정렬

1. **텍스트**: 좌측 정렬 (한글 가독성)
2. **제목**: 좌측 정렬 유지
3. **이미지**: 중앙 정렬 가능

### 그리드

```css
/* 12열 그리드 시스템 */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
}

/* 예시: 3열 레이아웃 */
.col-4 {
  grid-column: span 4;
}
```

## 🌓 다크 모드 (선택 사항)

현재는 라이트 모드에 집중하되, 향후 다크 모드 추가 시 고려사항:

```css
/* 다크 모드 색상 (참고용) */
--color-bg-base-dark: #0f172a --color-bg-subtle-dark: #1e293b
  --color-bg-muted-dark: #334155 --color-text-primary-dark: #f1f5f9
  --color-text-secondary-dark: #cbd5e1;
```

## 📝 사용 예시

### 블로그 포스트 레이아웃

```tsx
<article className="max-w-4xl mx-auto px-6 py-16">
  <header className="mb-12">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">제목</h1>
    <p className="text-xl text-gray-600">요약</p>
  </header>

  <div className="prose prose-lg">{/* 본문 */}</div>
</article>
```

### 카테고리 페이지

```tsx
<div className="max-w-7xl mx-auto px-6 py-16">
  <h1 className="text-5xl font-bold text-gray-900 mb-8">카테고리명</h1>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* 카드 목록 */}
  </div>
</div>
```

## 🚫 하지 말아야 할 것

1. ❌ 너무 많은 색상 사용 (최대 3-4가지)
2. ❌ 형광색, 원색 사용
3. ❌ 불필요한 애니메이션
4. ❌ 복잡한 그라디언트
5. ❌ 작은 폰트 크기 (14px 미만)
6. ❌ 불충분한 여백
7. ❌ 일관성 없는 스타일

## ✅ 해야 할 것

1. ✅ 충분한 여백 사용
2. ✅ 명확한 타이포그래피 위계
3. ✅ 일관된 색상 사용
4. ✅ 모바일 우선 디자인
5. ✅ 접근성 고려 (색 대비, 키보드 네비게이션)
6. ✅ 빠른 로딩 속도
7. ✅ 시각적 일관성 유지

## 📚 참고 자료

- [Stripe Design System](https://stripe.com/blog)
- [Notion Design](https://notion.so)
- [Medium Typography](https://medium.design)
- [Tailwind CSS](https://tailwindcss.com)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**마지막 업데이트**: 2025-10-05
**버전**: 1.0.0
