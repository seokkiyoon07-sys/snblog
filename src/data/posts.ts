// ⚠️ 중요: 이 파일은 수동으로 관리됩니다. Notion 동기화로 덮어쓰지 마세요!
// 📝 포스트 추가/수정 시 이 파일을 직접 편집하세요.
// 🔒 Notion 포스트는 notion-posts.ts에서 자동으로 가져옵니다.

import { notionPosts } from './notion-posts';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  featuredOrder?: number; // 추천 포스트 순서 (낮을수록 먼저)
  published: boolean;
  thumbnail?: string;
  youtubeUrl?: string;
  url: string;
  type?: 'standard' | 'special'; // 'standard'는 기본값, 'special'은 전용 컴포넌트 사용
}

export const allPosts: Post[] = [
  {
    id: 'why-we-invest-in-ai',
    title: '왜 우리는 AI에 투자하는가',
    excerpt:
      'SN독학기숙학원의 AI 투자 철학과 방향성. 20년 전과 달라진 교육 환경, 감이 아닌 데이터 기반 개입, 그리고 성장을 넘어 입시 결과로 완결하는 우리의 이야기.',
    thumbnail: '/images/startup/Why_we_invest_in_AI/Why_we_invest_in_AI.png',
    content: `안녕하세요. SN독학기숙학원 대표 윤석기입니다. 한국의 입시는 빠르게 변하고 있고, AI는 교육 산업의 기준을 다시 쓰고 있습니다. 우리는 학생 한 명 한 명의 데이터를 바탕으로 성장에서 멈추지 않고, <strong>결과(입시 실적)</strong>까지 완결하려 합니다.

## 20년 전과 달라진 것은 무엇인가?

스포츠는 훈련과 장비의 과학화, 데이터의 축적으로 비약적으로 발전했습니다. 반면 교육은 여전히 개별 학생의 맥락보다 '평균적인 방식'에 의존하는 경우가 많습니다. 데이터가 쌓이지 않으면 '관리'는 존재해도 '개입의 정밀도'는 나오지 않습니다. SN의 문제의식은 여기서 출발했습니다.

---

## 1. 사람의 감(感)만으로는 부족한 시대

한 학생이 하루 동안 무엇을 듣고 어디서 멈췄는지, 어떤 유형에서 반복 오류가 나는지 — 이를 실시간으로 파악하는 것은 사람의 기억만으로는 불가능합니다. 그래서 상담은 종종 '겉으로 드러난 현상'에 머물죠.

- "왜 집중이 안 되지?"
- "국어가 어려운 거야?"
- "왜 점수가 떨어졌을까?"

그러나 진짜 원인은 더 깊은 곳에 있습니다. 시간대별 집중 리듬, 디바이스 사용 습관, 반복 오류 지점… <strong>감(感)</strong>으로 추정은 가능하지만 <strong>근거</strong> 없이 확정할 수 없습니다. AI는 이 공백을 메워 경험이 보는 바깥과 데이터가 보여주는 안쪽을 연결합니다.

---

## 2. AI는 교사를 대체하지 않는다 — 역량을 확장한다

SN의 AI는 '보조 프로그램'이 아니라 <strong>교사의 시야를 확장</strong>하는 도구입니다.

### 기존 vs AI 결합 후

<div class="my-6 grid gap-4 sm:grid-cols-2">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
    <div class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">기존</div>
    <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
      <li>• 관찰: 제한적</li>
      <li>• 판단: 경험 중심</li>
      <li>• 지도: 사후 대처</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm">
    <div class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">AI 결합 후</div>
    <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
      <li>• 관찰: 전면 기록·분석</li>
      <li>• 판단: 데이터 기반 정밀 판단</li>
      <li>• 지도: 최적 개입 타이밍 제공</li>
    </ul>
  </div>
</div>

---

## 3. 교육은 사람, 입시는 정확한 방향

입시는 감성으로 해결되지 않습니다. <strong>정확한 시점에 정확한 개입</strong>을 해야 성과가 납니다. 왜 정체되는지, 왜 특정 과목에서 반복 오류가 이어지는지 등 핵심 질문의 답은 데이터에서 출발합니다. 그래서 우리는 감이 아니라 <strong>근거</strong>로 코칭합니다.

<div class="my-8 rounded-2xl bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 border border-amber-100 dark:border-amber-900">
  <div class="mb-2 font-semibold text-amber-800 dark:text-amber-300">핵심 원칙</div>
  <div class="text-gray-700 dark:text-gray-300">성장에서 멈추지 않고, <strong>성과(입시 실적)</strong>로 완결한다 — 이것이 학원의 책임입니다.</div>
</div>

---

## 4. SN의 AI는 '외부'가 아니다 — 학원 안에 내재화한다

일반형 AI는 우리 학생을 모릅니다. 데이터는 외부 DB로 사라지고, 입시의 승패를 가르는 <em>정확한 개입 시점</em>은 맥락 없이 포착되지 않습니다. 그래서 SN은 핵심 AI 시스템을 <strong>직접 개발</strong>해 학원 안에 내재화합니다.

### SN AI 시스템

<div class="my-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
  <table class="w-full text-left text-sm">
    <thead class="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <tr>
        <th class="px-4 py-3 font-semibold">시스템</th>
        <th class="px-4 py-3 font-semibold">역할</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SNarLINK</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">학습 시간·디지털 행동·집중 패턴 수집</td>
      </tr>
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SNarVIS</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">데이터를 해석해 <strong>"어디에 개입해야 승산이 있는가"</strong>를 판단하는 교육 의사결정형 에이전트 (리포트 도구가 아니라 <strong>개입 시점을 찾아주는 AI</strong>)</td>
      </tr>
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SNarGPT</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">풀이·개념 즉시 질의응답, 학습 병목의 즉각 보완</td>
      </tr>
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SNarGEN</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">평가원급 문항 생성/변형으로 정밀한 훈련 세트 제공</td>
      </tr>
      <tr class="bg-white dark:bg-gray-900">
        <td class="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">SN Portal</td>
        <td class="px-4 py-3 text-gray-600 dark:text-gray-300">모든 AI와 운영 시스템의 통합 인프라</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 5. 우리는 성장에서 멈추지 않는다 — 학원은 결과를 만든다

학교는 성장을 목표로 할 수 있지만, 학원은 거기서 멈출 수 없습니다. 성장은 과정이고, <strong>결과는 입시 실적</strong>입니다. SN이 AI에 투자하는 목적은 학생의 가능성을 찾아내는 데서 끝내지 않고 그것을 <strong>'합격'이라는 결과</strong>로 증명하기 위해서입니다.

---

## 결론 — AI 시대 입시 실적을 구조화하는 학원

곧 모든 학원에 AI가 들어올 것입니다. 진짜 차이는 <em>유무</em>가 아니라, <strong>얼마나 깊이 내재화했는가</strong>에서 갈립니다. SN독학기숙학원은 감 중심 관리에서 <strong>근거 기반 개입</strong>으로, 경험 중심 관찰에서 <strong>데이터 기반 판단</strong>으로, 성장 중심 관리에서 <strong>합격 중심 구조</strong>로 전환하고 있습니다.

우리는 '감으로 지도하는 학원'이 아니라, <strong>데이터 위에 경험을 더해 성과를 완성하는 학원</strong>입니다. 이 방향이 AI 시대 새로운 입시 표준이 될 것이라 확신합니다.

---

<div class="mt-8 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 text-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
  <p class="mb-2 font-medium text-gray-900 dark:text-gray-100">작성자</p>
  <p>SN독학기숙학원 대표 윤석기</p>
</div>`,
    category: 'startup',
    tags: ['AI', '교육혁신', '데이터', '입시전략', '에듀테크'],
    author: 'SN독학기숙학원 대표 윤석기',
    date: '2025-10-18',
    readTime: '11',
    featured: true,
    featuredOrder: 2,
    published: true,
    url: '/startup/why-we-invest-in-ai',
  },
  {
    id: 'SNargopost_1',
    title: 'SNarGO — 수능 특화 Vertical AI',
    excerpt:
      'SNarGO는 수능에 최적화된 Vertical AI입니다. 2,000문제 중 1문제 수준 오답, SNarVIS 해설, 그리고 차세대 문제 생성 AI SNarGEN 로드맵까지.',
    thumbnail: '/images/startup/SNarGo/SNargo-thumbnail.PNG',
    content: `SNarGO는 수능에 최적화된 Vertical AI입니다. 2,000문제 중 1문제 수준 오답, SNarVIS 해설, 그리고 차세대 문제 생성 AI SNarGEN 로드맵을 소개합니다.

## SNarGO란?

SNarGO는 **수능 수학 문제 전용** Vertical AI로, 학생들의 수학 실력 향상을 위해 특별히 설계된 AI 시스템입니다.

### 핵심 기능

1. **2,000문제 중 1문제 수준의 정확도**
2. **SNarVIS 시각적 해설 시스템**
3. **차세대 문제 생성 AI SNarGEN**

## 주요 특징

- 수능 출제 패턴 완벽 분석
- 개인별 맞춤 문제 추천
- 실시간 오답 분석 및 피드백
- 체계적인 학습 진도 관리

자세한 내용은 SNarGO 페이지에서 확인하실 수 있습니다.`,
    category: 'startup',
    tags: ['AI', '수능', '수학', '교육기술'],
    author: 'SN Academy',
    date: '2025-10-07',
    readTime: '4',
    featured: false,
    published: true,
    youtubeUrl: undefined,
    url: '/startup/SNargopost_1',
    type: 'special', // 전용 컴포넌트 사용
  },
  {
    id: 'design-guide-demo',
    title: '디자인 시스템 가이드 - 미니멀 블로그 디자인',
    excerpt:
      'SN Academy 블로그의 새로운 디자인 시스템을 소개합니다. Stripe, Notion, Medium에서 영감을 받은 심플하고 깔끔한 디자인 철학을 확인해보세요.',
    thumbnail:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop&crop=center',
    content: `SN Academy 블로그의 새로운 디자인 시스템을 소개합니다. 이 포스트는 디자인 가이드에 정의된 모든 컴포넌트와 스타일을 시연하는 더미 포스트입니다.

## 디자인 철학

<callout type="info">
**미니멀리즘, 일관성, 가독성, 전문성**

우리의 디자인은 Stripe, Notion, Medium에서 영감을 받았습니다.
</callout>

블로그 디자인의 핵심은 **콘텐츠**입니다. 화려한 장식이 아닌, 독자가 글을 편안하게 읽을 수 있도록 하는 것이 최우선 목표입니다.

## 색상 시스템

우리는 3-4가지 색상만 사용하여 시각적 일관성을 유지합니다.

<toggle title="주요 색상 팔레트">
- **Navy (#0f2942)**: 전문성과 신뢰감을 전달하는 메인 색상
- **Slate (#475569)**: 가독성이 뛰어난 본문 텍스트 색상
- **Sage Green (#5f7a61)**: SN 브랜드와 연결되는 부드러운 악센트

이 색상들은 충분한 대비를 제공하여 접근성 기준(WCAG AA)을 충족합니다.
</toggle>

### 배경 색상의 중요성

배경색은 아주 미묘하게 사용됩니다:
- 순백 (#ffffff): 기본 배경
- 연한 그레이 (#f8fafc): 섹션 구분
- 중간 그레이 (#f1f5f9): 카드와 패널

## 타이포그래피

<callout type="success">
**타이포그래피는 디자인의 95%입니다.**

명확한 폰트 크기 위계와 적절한 줄 간격(line-height 1.75)으로 최적의 가독성을 제공합니다.
</callout>

### 폰트 크기 스케일

우리는 1.25 비율의 모듈러 스케일을 사용합니다:

<table>
| 크기 | 용도 | 픽셀 |
|------|------|------|
| text-6xl | 히어로 제목 | 60px |
| text-5xl | 메인 제목 | 48px |
| text-4xl | 서브 제목 | 36px |
| text-3xl | H2 제목 | 30px |
| text-2xl | H3 제목 | 24px |
| text-xl | H4 제목 | 20px |
| text-base | 본문 | 16px |
</table>

## 컴포넌트 가이드

### Callout 박스

다양한 타입의 Callout 박스를 제공합니다:

<callout type="info">
**정보 전달**

이것은 정보성 callout입니다. 중요한 정보를 강조할 때 사용합니다.
</callout>

<callout type="success">
**성공 메시지**

긍정적인 내용이나 성공 사례를 전달할 때 사용합니다.
</callout>

<callout type="warning">
**주의사항**

독자의 주의를 환기시켜야 할 때 사용합니다.
</callout>

### Toggle (Accordion)

긴 내용을 접었다 펼 수 있습니다:

<toggle title="토글 내용 보기">
이것은 토글 안의 내용입니다. 부가적인 정보나 선택적으로 읽을 수 있는 내용을 넣을 때 유용합니다.

- 리스트 항목 1
- 리스트 항목 2
- 리스트 항목 3
</toggle>

<toggle title="고급 기능">
토글은 중첩도 가능합니다. FAQ, 상세 설명, 보충 자료 등에 활용하세요.
</toggle>

### 코드 블록

코드는 중성적인 회색 배경에 모노스페이스 폰트로 표시됩니다:

<code>
const greeting = "Hello, World!";
console.log(greeting);
</code>

### 하이라이트 (강조)

텍스트 중 <mark className="bg-yellow-100 px-1 rounded">중요한 부분을 강조</mark>할 때 사용합니다.

예를 들어, "디자인의 핵심은 <mark className="bg-yellow-100 px-1 rounded">콘텐츠</mark>입니다"처럼 핵심 단어를 부각시킬 수 있습니다.

### 줄바꿈

주소나 연락처를 표시할 때 유용합니다:

**SN Academy**<br />
경기도 양평군 양평읍<br />
전화: 031-771-0300<br />
이메일: ai@snacademy.co.kr

## 레이아웃 원칙

### 여백의 힘

<callout type="info">
**충분한 여백은 디자인의 숨결입니다.**

섹션 간 최소 4rem(64px), 요소 간 1.5rem(24px)의 여백을 유지합니다.
</callout>

여백은 단순히 빈 공간이 아닙니다. 콘텐츠에 숨을 불어넣고, 독자의 시선을 자연스럽게 안내하는 중요한 디자인 요소입니다.

### 최대 텍스트 너비

본문 텍스트는 최대 **65자(65ch)** 너비로 제한됩니다. 이는 가독성 연구에서 권장하는 최적의 줄 길이입니다.

<columns>
<column>

### 왼쪽 컬럼

컬럼 레이아웃을 사용하면 내용을 나란히 배치할 수 있습니다.

이는 비교, 대조, 또는 관련 정보를 함께 보여줄 때 유용합니다.

</column>
<column>

### 오른쪽 컬럼

같은 높이로 정렬되는 두 컬럼은 시각적 균형을 제공합니다.

모바일에서는 자동으로 세로로 쌓입니다.

</column>
</columns>

## 실전 적용 예시

### 블로그 포스트 구조

<toggle title="권장 구조 보기">
1. **제목**: 명확하고 간결하게 (H1)
2. **요약**: 핵심 내용을 2-3문장으로
3. **본문**: 섹션별로 H2, H3 제목 사용
4. **시각 자료**: 이미지, 표, 코드 블록 적절히 활용
5. **Callout**: 중요 정보 강조
6. **결론**: 핵심 메시지 재확인
</toggle>

### 색상 사용 가이드

<table>
| 용도 | 색상 | 언제 사용하나요? |
|------|------|------------------|
| 제목 | Navy | 모든 제목과 중요 텍스트 |
| 본문 | Slate | 일반 문단과 설명 |
| 악센트 | Sage Green | 링크, 버튼, 강조 |
| 배경 | White/Gray | 섹션 구분과 카드 |
</table>

## 하지 말아야 할 것

<callout type="warning">
**피해야 할 디자인 실수**

1. ❌ 너무 많은 색상 (최대 3-4가지로 제한)
2. ❌ 형광색이나 원색 사용
3. ❌ 불필요한 애니메이션
4. ❌ 작은 폰트 크기 (14px 미만)
5. ❌ 불충분한 여백
6. ❌ 일관성 없는 스타일
</callout>

## 해야 할 것

<callout type="success">
**좋은 디자인의 핵심**

1. ✅ 충분한 여백 사용
2. ✅ 명확한 타이포그래피 위계
3. ✅ 일관된 색상 팔레트
4. ✅ 모바일 우선 디자인
5. ✅ 접근성 고려
6. ✅ 빠른 로딩 속도
</callout>

## 디자인 체크리스트

<toggle title="포스트 작성 전 체크리스트">
- [ ] 제목이 명확하고 간결한가?
- [ ] 색상 사용이 3-4가지로 제한되어 있는가?
- [ ] 여백이 충분한가?
- [ ] 본문 텍스트가 65ch를 넘지 않는가?
- [ ] 이미지에 적절한 alt 텍스트가 있는가?
- [ ] 모바일에서도 읽기 편한가?
- [ ] Callout과 Toggle을 적절히 활용했는가?
</toggle>

## 마치며

<callout type="success">
**미니멀 디자인의 힘**

좋은 디자인은 눈에 띄지 않습니다. 독자가 콘텐츠에만 집중할 수 있도록 조용히 뒷받침하는 것이 진정한 디자인입니다.
</callout>

이 디자인 가이드는 지속적으로 발전합니다. 피드백과 제안은 언제나 환영합니다.

**참고 자료:**
- [Stripe Design System](https://stripe.com/blog)
- [Notion Design](https://notion.so)
- [Medium Typography](https://medium.design)

---

**디자인 가이드 버전**: 1.0.0
**마지막 업데이트**: 2025-10-05`,
    category: 'columns',
    tags: ['디자인', '가이드', '블로그'],
    author: 'SN Academy',
    date: '2025-10-05',
    readTime: '4',
    featured: false,
    published: false,
    url: '/columns/design-guide-demo',
  },
  {
    id: 'dokhak',
    title: 'SN독학(獨學)기숙학원 – 왜 우리는 독학을 강조하는가',
    excerpt:
      '안녕하세요. SN독학기숙학원 대표 윤석기 입니다. SN독학기숙학원은 수업보다 독학을 항상 강조해 왔습니다. SN의 탄생철학이죠. 저희 SN독학기숙학원이 런칭이 2014년 11월 입니다. 1기는 2015년부터 시작했죠.',
    thumbnail:
      '/images/notion/2868205a-96df-80aa-8000-cc5a3f31d660/image-0.png',
    content: `이 포스트는 전용 페이지에서 렌더링됩니다. /columns/dokhak을 방문하세요.`,
    category: 'columns',
    tags: ['독학', '독학기숙학원', 'AI', '학습전략담임'],
    author: 'SN Academy',
    date: '2025-10-08',
    readTime: '4',
    featured: false,
    published: true,
    url: '/columns/dokhak',
  },
  {
    id: 'SNarlink',
    title: 'SN독학기숙학원 방화벽의 모든 것! (Feat. SNarlink)',
    excerpt:
      'SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다. 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 SNarlink 시스템에 대해 다룹니다.',
    thumbnail: '/images/SNarlink/thumbnail.png',
    content: `<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-blue-800">
    <strong>SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다.</strong>
  </p>
</div>

이 글은 SN독학기숙학원이 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 **SNarlink** 시스템에 대해 다룹니다. 단순한 차단을 넘어서 AI 기반의 지능형 방어 시스템으로 진화한 우리의 이야기를 들어보세요.

## 🔥 방화벽이란 무엇일까요?

방화벽(Firewall)은 네트워크의 보안을 담당하는 시스템입니다. 마치 건물의 화재를 막는 방화벽처럼, 인터넷에서 유입되는 위험한 트래픽을 차단하는 역할을 합니다.

저희 SN 독학기숙학원이 국내 최초로 기숙학원 내에서 인터넷 방화벽을 도입한 지 어느덧 11년이 되었습니다. 

2014년부터 방화벽 장비를 도입했고, 2018년에는 미국 Cisco사의 최신 방화벽을 도입하여 학생들에게 큰 호평을 받았습니다. 타 기숙학원에서는 어떻게 방화벽을 설계했는지 컨설팅 문의도 몇 차례 온 바 있습니다.

## ❓ 왜 다른 학원들은 제대로 못할까요?

많은 학원들이 방화벽을 갖추고 있다고 홍보하지만, 실제로는 제대로 작동하지 않는 경우가 대부분입니다. 

방화벽은 단순히 장비만 설치하면 되는 것이 아닙니다. **높은 수준의 기술력, 물적&인적 투자, 그리고 오랜 노하우**가 필요하기 때문입니다.

SN도 처음 도입 후 불완전한 방화벽으로 시행착오를 겪었기에 타 기숙학원들의 상황이 잘 이해됩니다.

## 📈 SN의 방화벽 발전사

### 2014년: 첫 도전
- SN 방화벽 장비 최초 도입
- 기숙학원 방화벽의 시초

### 2016년: 노하우 정립
- 장비 교체
- 전문적인 컨설팅 및 정비를 통해 방화벽 운용 노하우 정립

### 2018년: 혁신의 도약
- 미국 CISCO 장비 도입
- 당시 최상위 사양의 방화벽

![2018년 도입된 Cisco 방화벽 장비](/images/SNarlink/cisco firewall.png)

2018년 Cisco 장비 도입 이후 방화벽이 혁신 수준으로 한층 더 업그레이드되었습니다. 도입 이후부터 2025년 올해 업그레이드 전까지도 기숙학원 내에서는 가장 선두주자였습니다.

## 🚀 2025년, 다시 한 번 혁신을 선택하다

이미 선두주자의 자리에 있었지만, **2025년 SN은 다시 한 번 혁신을 선택했습니다.**

중소기업 수준에서는 사실상 불가능하다고 여겨지던, **입시 수험생에 특화된 차세대 방화벽을 순수 자체 기술로 개발**한 것입니다. 

현재는 단순한 기숙학원 방화벽 수준을 넘어, **국내 대기업 수준의 보안 체계에도 뒤처지지 않는 수준**까지 발전하였습니다.

## ⚠️ 기존 시스템의 한계점

### 단순한 '차단'만으로는 부족했다

기존 Cisco 장비도 훌륭했습니다. 수천만원을 들여 장비를 도입하고, 7년간 라이선스를 갱신하며 안정적으로 학원을 운영해 왔죠.

하지만 이 시스템은 교육용으로 특화되어 있지 않았습니다. 모든 기능이 **'차단'에만 집중**되어 있었습니다. 

프록시, VPN, 우회 DNS는 물론 차단되지만, 그 이상의 **섬세한 정책이나 유연한 제어는 기대하기 어려웠습니다.**

### 오르비 문제: 커뮤니티 vs 클래스

구체적인 예시를 들어보겠습니다. 수험생 커뮤니티 사이트인 **오르비**가 있습니다. 

오르비는 커뮤니티뿐 아니라 **'오르비 클래스'라는 인터넷 강의 플랫폼**도 함께 운영 중입니다. 문제는 이 두 사이트가 **같은 기반 시스템을 공유하고 있다**는 점입니다.

학생들에게는 커뮤니티는 불필요하지만, 클래스는 꼭 필요합니다. 하지만 **구조상 커뮤니티만 차단하고 클래스만 허용하는 것이 기술적으로 불가능**했죠.

결국 **커뮤니티와 클래스 모두를 차단**할 수밖에 없었고, **강의를 들어야 하는 학생들은 별도로 핫스팟을 켜서 이용**해야만 했습니다. 여기에서 관리의 공백이 생기죠.

<div style="display: flex; gap: 20px; margin: 20px 0;">
  <div style="flex: 1;">
    <img src="/images/SNarlink/orbi1.png" alt="오르비 커뮤니티와 클래스의 차이점" style="width: 100%; height: auto; border-radius: 8px;" />
    <p style="text-align: center; font-size: 14px; color: #666; margin-top: 8px;">오르비 커뮤니티와 클래스의 차이점</p>
  </div>
  <div style="flex: 1;">
    <img src="/images/SNarlink/orbi2.png" alt="오르비 클래스 접근 화면" style="width: 100%; height: auto; border-radius: 8px;" />
    <p style="text-align: center; font-size: 14px; color: #666; margin-top: 8px;">오르비 클래스 접근 화면</p>
  </div>
</div>

### 외부 의존의 한계

오르비를 비롯한 비슷한 케이스들을 Cisco사의 기술지원 서비스를 통해 문제를 해결해보려 했습니다. 

그러나 이 간단한 문제도 Cisco 사와 파트너사를 통해 개발하면 비용상 합리적이지 않았고, 그 돈이면 우리가 개발하는게 낫다는 생각을 하게 되었습니다.

**결국, 우리는 교육 현장에 꼭 필요한 방향성을 기준으로, 새로운 방화벽 시스템을 오픈소스 기반으로 직접 설계하기로 했습니다.**

## 🤖 AI 시대, 보안의 기준이 달라졌다

AI 시대가 오며 패러다임이 바뀌었고, 보안의 판도를 근본적으로 바꿔놓았습니다. 

예전처럼 **단순히 '차단'만으로는 충분하지 않다는 위기의식**이 생겼습니다.

### 최상위권 학생들의 도전

SN독학기숙학원에 다니는 대부분의 학생들, 특히 약 90%는 학습 외 활동에 큰 관심이 없습니다. 

그러나 서울대 공대, 의대 등을 준비하는 일부 최상위권 학생들 중에는 AI 기술과 자신의 지식을 활용해 방화벽을 우회하려는 시도를 하기도 합니다. (방화벽에 대한 도전 욕구가 생긴답니다...)

일반적인 고등학생 수준에서는 사실상 불가능한 일이지만, 전국 상위 0.1% 학생이라면 가능성을 완전히 배제할 수 없습니다. 

그리고 저희는 그런 학생들도 필요하다고 생각합니다. 왜냐고요? 그 이유는 아래에서 자세히 설명드리겠습니다 :)

### 완벽한 방화벽은 존재하지 않는다

참고로, 100% 뚫리지 않는 방화벽은 존재하지 않습니다. 연간 수백억씩 보안에 투자하는 국내 통신사들도 악성코드에 뚫리는 경우가 있잖아요. 

혹여 그런 업체가 있다면 과장광고입니다. 그래서 저희는 항상 **'완벽에 가까운 방화벽'**이라는 표현을 사용합니다.

## 🌟 SNarlink_Study: 오직 공부만을 위한 네트워크

이러한 고민 끝에, 우리는 보안의 방향을 바꿨습니다. 

단순한 **'차단'이 아니라, 학생의 '시도'와 '의도'를 읽는 지능형 방어 시스템**으로 말입니다.

![SNarlink 로고](/images/SNarlink/SNarlink_Logo.png)

우리는 이 방화벽 시스템을 **SNarlink_study**라고 명명했습니다. SN + Starlink. 공부에만 집중할 수 있도록 설계된 전용 네트워크입니다.

## 🚀 SNarlink의 핵심 기능

SNarlink는 단순한 차단 시스템을 넘어서 **AI가 학습하고 진화하는 지능형 방어 시스템**입니다.

### 🛡️ 강화된 보안 능력
- **차세대 방화벽 엔진**: 기존 Cisco 장비 대비 3배 향상된 차단 성능
- **실시간 위협 탐지**: 0.1초 이내 우회 시도 감지 및 차단
- **다층 보안 구조**: DNS, IP, URL, 패킷 레벨 다중 검증

### ⚡ 속도 최적화
- **스마트 필터링**: 학습에 불필요한 트래픽 자동 제거
- **대역폭 최적화**: 교육 콘텐츠 우선 처리로 속도 2배 향상
- **지연 시간 최소화**: 평균 응답 시간 50% 단축

### 🧠 AI 기반 학습 시스템
- **실시간 DNS 분석**: 우회 시도 패턴 즉시 감지 → 운영팀 알림
- **자동 학습 메커니즘**: 시도된 경로 즉시 학습 및 기록 → 자동 차단 정책 생성
- **진화하는 방어**: 반복 시도 시 방화벽이 스스로 진화하여 더 강력해짐

### 📊 실시간 모니터링
- **24/7 자동 감시**: 인력 개입 없이 24시간 자동 모니터링
- **즉시 알림 시스템**: 우회 시도 발생 시 3초 이내 관리자 알림
- **학생별 추적**: 어떤 학생이 언제 어떤 시도를 했는지 정확한 특정 가능

### 실제 성과: 250명 중 2명만 시도, 모두 실패

방화벽이 업그레이드 이후 실제로 250명의 학생 중 시도한 인원은 단 2명, **모두 실패했습니다.**

**VPN, 프록시, 우회 DNS 시도 등 모두 막아내는 경이로운 능력**을 보여주었습니다. 

그 전 Cisco 장비도 막아내긴 했지만, 이 정도 능력까지는 아니였습니다. 허용된 사이트 내에서 홈페이지 변화가 있으면, 대응이 즉각적이지 않았습니다. 또한 홈페이지 구조 변화가 생기면 우회루트가 생기기도 했죠.

### 학습에 불필요한 요소 자동 필터링

우리가 어떤 사이트에 접속할 때 화면에 보이는 정보 외에도 백그라운드에서는 다양한 데이터 수집 활동 등이 이루어집니다. 

이러한 숨겨진 요소들은 속도를 저하시킬 뿐만 아니라, 악성 코드나 추적 프로그램의 경로가 되기도 합니다. 

**SNarLink는 이 과정에서 학습에 불필요한 요소들을 자동으로 걸러내고, 정말 필요한 정보만 선별적으로 허용함으로써 인터넷 속도를 향상시키는 동시에 악성 프로그램까지 효과적으로 차단**합니다.

## 🔍 시도와 의도를 읽는 탐지 능력

하지만 앞서 말씀드린 것처럼, 세상에 완벽한 방화벽은 없습니다. 

그래서 SNarlink는 단순 차단에 그치지 않고 **시도와 의도를 읽는 탐지 능력**을 갖추었습니다. 

학생이 **방화벽을 우회하는 시도**나 만에 하나 뚫리더라도 **즉시 탐지**하여 **운영자에게 알람**을 띄우고, **즉각 대응**이 가능하도록 설계한 것이죠. 

그리고 **어떤 학생이 시도했는지까지 특정**이 가능합니다. 

이전 방화벽은 학생의 제보 혹은 사람의 눈으로 점검하면서 우회를 알 수 있었고, 누군지 특정도 어려웠습니다. 그러나 지금은 우회 시도 알림과 동시에 특정까지 가능합니다!!

### AI가 학습하는 방화벽

방화벽은 **우회 기술들을 AI 로그 분석**을 통해 학습하며, 앞으로 유사한 시도는 모두 차단해버립니다. 

**단순한 설정된 차단 시스템이 아닌 학습하는 방화벽**이죠. 그래서 학원에서 방화벽 뚫는 시도를 하는 학생들도 필요한 겁니다. SNarlink의 학습 양분이 되니까요.

(이번 5월에 방화벽을 교체하면서 불완전한 시기가 있었습니다... 당시 방화벽 안정화 및 AI가 학습 과정이어서 그랬습니다. 학생들에게는 정말 미안했네요 ㅠㅠ)

![학생들이 공부하는 모습](/images/SNarlink/study room.png)

## 🍎 애플 기기는 왜 까다로웠나?

가장 까다로웠던 건 Apple이었습니다. Apple 기기의 경우, 우회 트래픽 구조가 매우 정교합니다. 

우리는 애플 트래픽만 별도로 분석했고, 관련 코드만 2,000줄 이상 구현했습니다. 

애플 기기 기능 중 학습에 필요한 부분(인증, 로그인, 캘린더, 저장된 음악 듣기 기능)은 허용하고, 이외 우회 및 Private Relay, 음악검색, 뉴스, 음악 다운로드 및 스트리밍, game 같은 기능은 모두 차단합니다. 

그 결과, **iMessage까지 거의 완벽하게 차단**할 수 있었습니다.

### 실시간 모니터링과 자동 대응

이전에는 iMessage 차단이 일시적으로 가능하더라도, Apple 측의 업데이트나 통신 구조 변경이 있을 경우 다시 뚫리는 현상이 반복되곤 했습니다. 

뚫렸는지 인지하는 데에도 시간이 걸렸고, 대응까지도 수동적일 수밖에 없었습니다. 

그러나 현재는 시스템이 실시간으로 트래픽 이상 징후를 감지하고, 혹여나 iMessage가 뚫리더라도 즉시 알림이 발생하며, 대응도 자동화되어 빠르게 이루어집니다.

## 🔗 URL 단위 예외 처리: 오르비 문제 해결

**URL 단위 예외 처리도 가능합니다.** 현재는 베타 버전이지만, URL 단위로 세밀하게 접근을 허용하는 기능도 갖추고 있습니다. 

위에 말씀드린 **오르비가 가장 대표적인 사례**입니다. 

오르비는 같은 기반 시스템을 공유하고 있어, 기존에는 오르비 커뮤니티만 차단이 불가능했습니다. 커뮤니티와 클래스를 같이 차단해야 했죠. 

**하지만 URL 단위 예외 처리를 통해 지금의 방화벽에서는 커뮤니티만 차단이 가능합니다!!**

### 더 나아간 기술: 개별 콘텐츠 접근 제어

거기서 더 나아간 기술은 학생이 유튜브에서 특정 교육 영상만 보거나, 학습 카페의 특정 게시글만 보려는 경우, 해당 주소만 열어주는 기능입니다. 

기술적으로는 구현되어 있으나, 실효성과 실무 효율성을 고려해 현재는 배포하지 않았습니다.

## ⚖️ SNarlink_Frespon: 자유와 책임의 균형

방화벽의 본질은 '차단'이 아닙니다. 학생이 학습에 몰입할 수 있는 환경을 만들어주는 도구입니다.

학습자료 결제, 강의 수강, 정보 탐색 등 필요에 따라 인터넷이 꼭 필요한 경우도 있죠. 

이때 학생은 학생실 선생님께 요청하면, **15분 / 30분 / 60분 단위로 일회용 인터넷 비밀번호를 부여**받게 됩니다. 부여받은 시간이 끝나면 모두 종료됩니다.

*기본은 15분이며, 30분 이후는 필요시에만 부여됩니다.

![모니터링 시스템 화면](/images/SNarlink/monitor.png)

### 핫스팟 방식의 한계를 극복하다

과거에는 핫스팟으로 개별 허용하는 방식이었습니다만, 핫스팟을 허락된 학생 외 사용하는 등 관리 부담이 크고 딴짓의 가능성도 많았기에 전면 개편했습니다. 

이번 업데이트에서 유용한 기능 중 하나입니다! 허락된 학생에게만 제공되는 것뿐만 아니라 시간이 정해져있어 학생도 필요한 업무에만 사용합니다.

이 시스템의 이름은 **SNarlink_Frespon**입니다. Free + Responsibility. 자유를 줄 테니, 그 자유는 공부에만 써야 한다는 책임을 함께 묻는 구조입니다.

대부분의 학생들도 이 원칙을 잘 지켜주고 있습니다.

## 📊 학습 데이터 분석: 학생 개개인의 성장을 돕는 기술

우리가 개발한 방화벽의 가장 강력한 무기는, 차단 데이터뿐만 아니라

**학생들의 학습 데이터를 측정하고 분석할 수 있는 구조**

라는 점입니다. 

등록된 기기만 접속이 가능하며, 기기별로 접속 로그, 집중 시간대, 강의 시청 기록 등이 자동으로 기록됩니다. 

학습 사이트 이용과 스트리밍 시간을 분단위로 정밀 측정하여 분석하는 것이지요. 

또한 기기만 방화벽 시스템에 등록할 뿐, 학생들 기기에 인증서나 기타 프로그램 등을 별도로 깔지 않습니다.

![학습 데이터 리포트 화면](/images/SNarlink/report.png)

### 초개인화된 피드백 제공

이를 통해 학생 개개인의 학습 행동을 정량화하고, **초개인화된 피드백을 제공**할 수 있습니다. 

현재 데이터의 정합성 확보는 완료되었으며, 이를 통한 시각화, 리포팅 기술은 **금년 내 개발 완료 예정**입니다. 기대하셔도 좋습니다.

물론 모든 데이터는 익명화 처리되어 저장되며, 디지털 윤리 기준을 철저히 준수하고 있습니다. 개인정보에 대한 우려는 하지 않으셔도 됩니다.

## 🎯 기술로 교육을 바꾸고, 교육이 기술을 발전시킨다

우리는 기술로 교육을 바꾸고 있습니다. 그리고 교육이 기술을 발전시킬 것입니다.

우리의 방화벽은 단순히 '막는 장비'가 아닙니다. **차세대 교육 보조 시스템이자, 학생의 몰입과 성장을 돕기 위한 AI 기반 플랫폼**입니다. 

이 모든 것을 외부 솔루션 없이, 핵심 고급 인력이신 연구소장 Ryun, Ph.D.을 모셔와 자체 연구소와 인력만으로 만들어냈습니다. 

**우리는 마케팅보다 기술에 투자하는 기업**입니다. 화려한 포장이 아닌, 실질적인 성과로 이야기하려 합니다.

![SN Academy 건물 외관](/images/SNarlink/SN academy.png)

그래서 자신 있게 말씀드립니다. **SN독학기숙학원은 기술적, 윤리적으로 대한민국 최상위 수준의 보안 교육 환경을 갖춘 교육 기관입니다.** 

우리는 교육 플랫폼으로 진화 중입니다. **그리고 학생들의 성공의 경험을 만들겠습니다.**

## 💬 마무리

이 글을 당사 학생, 학부모뿐 아니라 동종업계 분들께도 바칩니다.

SN독학기숙학원의 방화벽은 개발이 모두 완료되었으며, 본원에서 안정적으로 운용하고 있습니다. 

혹시 당사의 차세대 교육 방화벽 도입을 원하시거나 흥미가 있으신 대형학원들은 본원으로 연락 주시면, 라이선스 혹은 시공 협의 가능합니다.

**기술 문의**: snacademy@naver.com

**입학 문의**
- 📞 전화 상담: 031-771-0300 (내선번호 1번)
- 💬 카카오톡 채널: [SN독학기숙학원] 검색 후 문의`,
    category: 'columns',
    tags: ['방화벽', '보안', 'AI', '교육기술'],
    author: 'SN Academy',
    date: '2025-10-03',
    readTime: '4',
    featured: false,
    published: true,
    youtubeUrl: undefined,
    url: '/columns/SNarlink',
  },
  {
    id: 'ai-startup',
    title: 'SN에서 교육 AI 스타트업을 창업했습니다',
    excerpt:
      '교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 초개인화 학습 혁신을 실현하는 SN Academy AI 스타트업을 소개합니다.',
    content: `<div class="bg-gray-50 border-l-4 border-gray-400 p-6 my-8 rounded-r-lg">
  <p class="text-gray-800 text-lg leading-relaxed">
    교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 <strong>초개인화 학습 혁신</strong>을 실현합니다.
  </p>
</div>

## 우리의 미션

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-8">
  <div class="mb-6">
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-800 text-lg font-medium">더 낮은 가격에 교육서비스를 제공하면서도 입시에 성공시키겠습니다.</span>
    </div>
  </div>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-700">교육의 <strong>불균형·비효율·정보 격차</strong>를 해소합니다</span>
    </div>
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-700">학생에게는 <strong>맞춤형 학습 경험</strong>을 제공합니다</span>
    </div>
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-700">교사·학부모에게는 <strong>투명한 학습 데이터 분석</strong>을 제공합니다</span>
    </div>
    <div class="flex items-start">
      <div class="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span class="text-gray-700">교육 시장에는 <strong>혁신적인 AI 도구</strong>를 제공합니다</span>
    </div>
  </div>
</div>

## 핵심 가치

<div class="grid grid-cols-1 gap-8 mb-12">
  <div class="bg-white border border-gray-200 rounded-lg p-8">
    <h3 class="text-xl font-semibold text-gray-800 mb-4">초개인화 학습</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        각 학습자의 학습 패턴과 속도를 분석
      </li>
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        개인별 최적화된 학습 경로 제공
      </li>
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        실시간 학습 진도 추적 및 피드백
      </li>
    </ul>
  </div>

  <div class="bg-white border border-gray-200 rounded-lg p-8">
    <h3 class="text-xl font-semibold text-gray-800 mb-4">AI 기반 교육 기술</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        자연어 처리 기술을 활용한 질문-답변 시스템
      </li>
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        학습 내용 이해도 자동 평가
      </li>
      <li class="flex items-start">
        <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        개인별 학습 약점 분석 및 보완 방안 제시
      </li>
    </ul>
  </div>
</div>

## 우리의 비전

<div class="bg-gray-50 border-l-4 border-gray-400 p-8 my-12 rounded-r-lg">
  <p class="text-gray-800 text-xl font-medium leading-relaxed">
    AI의 기술과 인간의 자기주도학습 능력을 결합하여 학생의 지적 성장을 로켓처럼 가속합니다.
  </p>
</div>

## Our Team

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">작지만 강력한 팀이 교육의 미래를 다시 씁니다</h3>
  
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">👑</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">대표 (CEO)</h4>
      <p class="text-sm text-gray-600">교육 현장 12년 경험, 전략과 비전을 이끄는 리더</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">🤖</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">AI 개발자 2명</h4>
      <p class="text-sm text-gray-600">대규모 언어모델과 AI 솔루션 연구</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">⚙️</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">백엔드 개발자 1명</h4>
      <p class="text-sm text-gray-600">안정적인 데이터 처리와 서버 아키텍처</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">📊</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">마케팅/데이터 분석 1명</h4>
      <p class="text-sm text-gray-600">학습 데이터 기반 전략 수립</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">🎨</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">디자이너 1명</h4>
      <p class="text-sm text-gray-600">직관적이고 감각적인 UX/UI 구현</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">💻</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">프론트엔드 개발자 1명</h4>
      <p class="text-sm text-gray-600">웹/앱 인터페이스 개발</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">🏷️</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">라벨링 전문가 1명</h4>
      <p class="text-sm text-gray-600">AI 학습 데이터셋 구축 및 정제</p>
    </div>
    
    <div class="text-center">
      <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="text-gray-600 text-2xl">⚡</span>
      </div>
      <h4 class="font-semibold text-gray-800 mb-2">운영 인력 1명</h4>
      <p class="text-sm text-gray-600">현장 운영 및 사용자 피드백</p>
    </div>
  </div>
</div>

## Our Products

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">SN 생태계를 구성하는 핵심 AI 제품들입니다</h3>
  
  <div class="grid md:grid-cols-2 gap-6">
    <div class="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group">
      <a href="/columns/SNarlink" class="block">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <span class="text-gray-600 text-xl">🔗</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 text-lg">SNarlink</h4>
            <p class="text-sm text-gray-600">초정밀 학습 분석 방화벽 시스템</p>
          </div>
        </div>
        <ul class="text-sm text-gray-600 space-y-2">
          <li>• 온라인 학습 활동을 데이터화하여 집중도 측정</li>
          <li>• 학부모/교사에게 투명한 리포트 제공</li>
          <li>• AI 기반 인터넷 우회 시도와 의도 탐지 가능</li>
        </ul>
      </a>
    </div>

    <div class="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group">
      <a href="/startup/SNargopost_1" class="block">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <span class="text-gray-600 text-xl">🎯</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 text-lg">SNarGO</h4>
            <p class="text-sm text-gray-600">수학문제풀이 AI</p>
          </div>
        </div>
        <ul class="text-sm text-gray-600 space-y-2">
          <li>• 수능 수학문제를 99%+ 확률로 풀이</li>
          <li>• 정확한 개념 설명과 단계별 풀이</li>
          <li>• 오답 분석 및 학습 방향 제시</li>
        </ul>
      </a>
    </div>

    <div class="border border-gray-200 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 cursor-pointer group">
      <a href="https://snargpt.ai" target="_blank" rel="noopener noreferrer" class="block">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <span class="text-gray-600 text-xl">🤖</span>
          </div>
          <div>
            <h4 class="font-semibold text-gray-800 text-lg">SNarGPT</h4>
            <p class="text-sm text-gray-600">질문 받아주는 AI</p>
          </div>
        </div>
        <ul class="text-sm text-gray-600 space-y-2">
          <li>• 다양한 학습 관련 질문에 답변</li>
          <li>• 학습자 개인별 맞춤형 조언 제공</li>
          <li>• 24/7 학습 코칭</li>
        </ul>
      </a>
    </div>

    <div class="border border-gray-200 rounded-lg p-6">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          <span class="text-gray-600 text-xl">⚡</span>
        </div>
        <div>
          <h4 class="font-semibold text-gray-800 text-lg">SNarGEN</h4>
          <p class="text-sm text-gray-600">문제 생성 AI</p>
        </div>
      </div>
      <ul class="text-sm text-gray-600 space-y-2">
        <li>• 기존 교육 업체의 1% 비용으로 고퀄 문제 생성</li>
        <li>• 평가원 수준의 문항 자동 생성</li>
        <li>• 난이도별 맞춤 문제 제작</li>
      </ul>
    </div>

    <div class="border border-gray-200 rounded-lg p-6">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
          <span class="text-gray-600 text-xl">📱</span>
        </div>
        <div>
          <h4 class="font-semibold text-gray-800 text-lg">SNarOCR</h4>
          <p class="text-sm text-gray-600">시험지 인식 AI</p>
        </div>
      </div>
      <ul class="text-sm text-gray-600 space-y-2">
        <li>• 촬영만 하면 자동 인식·분석하는 시험지 OCR</li>
        <li>• 문제 영역 자동 인식 및 정규화</li>
        <li>• 채점 및 분석 자동화</li>
      </ul>
    </div>
  </div>
</div>

## 주요 성과

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">주요 성과</h3>
  <div class="grid md:grid-cols-3 gap-6">
    <div class="text-center">
      <div class="text-3xl font-bold text-gray-800 mb-2">8명</div>
      <div class="text-gray-600">전문 AI 개발팀</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-gray-800 mb-2">5개</div>
      <div class="text-gray-600">핵심 AI 제품</div>
    </div>
    <div class="text-center">
      <div class="text-3xl font-bold text-gray-800 mb-2">12년</div>
      <div class="text-gray-600">현장 노하우</div>
    </div>
  </div>
</div>

## 사업 영역

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <div class="grid md:grid-cols-2 gap-8">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">SN독학기숙학원 (양평점)</h3>
        <p class="text-gray-600">기존 교육 서비스 운영, AI 기술 적용 및 검증, 실시간 피드백 수집</p>
      </div>
    </div>
    
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">SN독학재수학원 (대치점 예정)</h3>
        <p class="text-gray-600 mb-2">2026년 1월 오픈 예정, AI 기반 교육 혁신 실현, 프리미엄 교육 서비스 제공</p>
        <p class="text-gray-800 font-medium">🚀 SNarGPT 런칭 (26.1.1)</p>
      </div>
    </div>
  </div>
</div>

## AI 기술 스택

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <div class="grid md:grid-cols-3 gap-8">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-3">자연어 처리 (NLP)</h4>
        <p class="text-gray-600">학습자 질문 이해 및 답변 생성, 학습 내용 자동 요약 및 정리, 대화형 AI 인터페이스</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-3">머신러닝 (ML)</h4>
        <p class="text-gray-600">학습 패턴 분석 및 예측, 개인별 학습 최적화 알고리즘, 성적 향상 예측 모델</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-3">데이터 분석</h4>
        <p class="text-gray-600">학습 진도 및 성과 추적, 학습 효과성 측정 및 개선, 실시간 대시보드 제공</p>
      </div>
    </div>
  </div>
</div>

## 향후 계획

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">향후 계획</h3>
  <div class="space-y-6">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">단기 (2025년)</h4>
        <p class="text-gray-600">AI 기반 학습 관리 시스템 완성, 개인별 학습 계획 자동 생성 기능</p>
      </div>
    </div>
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">중기 (2026년)</h4>
        <p class="text-gray-600">대치점 오픈 및 AI 교육 혁신 실현, 교육 AI 플랫폼 상용화</p>
      </div>
    </div>
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">장기 (2027년+)</h4>
        <p class="text-gray-600">전국 교육 기관 대상 AI 솔루션 제공, 교육 분야 AI 기술 선도 기업으로 성장</p>
      </div>
    </div>
  </div>
</div>

## 혁신 포인트

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <div class="space-y-6">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">교육 현장 중심의 AI 개발</h4>
        <p class="text-gray-600">실제 교육 현장에서 검증된 기술과 교육 전문가와 AI 개발자의 협업</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">개인별 맞춤형 학습</h4>
        <p class="text-gray-600">기존 일괄 교육 방식의 한계를 극복하고 각 학습자의 특성에 맞는 최적화</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h4 class="text-lg font-semibold text-gray-800 mb-2">지속적인 학습 효과 측정</h4>
        <p class="text-gray-600">AI를 통한 실시간 학습 진도 추적과 데이터 기반 교육 방법론 개선</p>
      </div>
    </div>
  </div>
</div>

## 파트너십

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <div class="grid grid-cols-1 gap-8">
    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">기술 파트너</h3>
        <p class="text-gray-600">AI 기술 연구 기관과의 협력, 최신 AI 기술 도입 및 적용, 공동 연구 개발</p>
      </div>
    </div>

    <div class="flex items-start">
      <div class="w-3 h-3 bg-gray-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-3">교육 파트너</h3>
        <p class="text-gray-600">교육 전문가 네트워크 구축, 교육 현장 피드백 수집 및 반영, 커리큘럼 공동 개발</p>
      </div>
    </div>
  </div>
</div>

## 문의 및 연락

<div class="bg-white border border-gray-200 rounded-lg p-8 mb-12">
  <h3 class="text-2xl font-semibold text-gray-800 mb-6">문의 및 연락</h3>
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <h4 class="text-lg font-semibold text-gray-800 mb-3">AI 스타트업 문의</h4>
      <ul class="text-gray-600 space-y-2">
        <li>• 이메일: SNACADEMY@naver.com</li>
        <li>• 전화: 031-771-0300</li>
      </ul>
    </div>
    <div>
      <h4 class="text-lg font-semibold text-gray-800 mb-3">입학 문의</h4>
      <ul class="text-gray-600 space-y-2">
        <li>• SN독학기숙학원: https://www.snacademy.co.kr</li>
        <li>• 대치점 오픈 정보: 2026년 1월 예정</li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-gray-50 border-l-4 border-gray-400 p-8 rounded-r-lg text-center">
  <h3 class="text-2xl font-bold text-gray-800 mb-2">SN Academy AI</h3>
  <p class="text-gray-700 text-lg">초개인화 학습 혁신</p>
</div>`,
    category: 'startup',
    tags: ['AI교육', '스타트업', '에듀테크'],
    author: 'SN Academy',
    date: '2025-09-29',
    readTime: '11',
    featured: false,
    published: true,
    thumbnail:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/startup/ai-startup',
  },
  {
    id: 'sn-originals-intro',
    title: 'SN Originals 고전문학 시리즈를 소개합니다',
    excerpt:
      '최재천 선생님의 "알면 사랑한다"는 지혜로 시작하는 SN Originals 고전문학 시리즈. 만화영화처럼 익숙하게, AI 기술과 함께하는 새로운 고전문학 학습법을 소개합니다.',
    content: `알면 사랑한다는 최재천 선생님의 지혜로 시작하는 SN Originals 고전문학 시리즈. AI 기술과 함께하는 새로운 고전문학 학습법을 만나보세요.

![SN Originals 고전문학 시리즈의 시작](/images/originalintro1.png)

## 💭 "알면 사랑한다" - 최재천 선생님의 지혜

이 시대의 석학 최재천 선생님께서 자주 하시는 말씀 중에서, '알면 사랑한다'는 말이 있습니다. 
꽤 직관적으로 이해할 수 있는 말인 저 말은, 무언가에 대해 더 많이 알게 될수록 그것을 더 아끼고 
좋아하게 될 수밖에 없다는 뜻입니다. 그만큼 무엇이든 충분히 알아가는 과정이 필요하다는 뜻이 되기도 하구요.

## 🤔 수능에서 가장 어려운 것, 고전문학

여러분들께서는 수능시험을 준비함에 있어서 '알기 어려운 것'을 꼽아보라면 어떤 것들을 꼽으실 건가요? 
미적분? 유전자 발현과 조절? 맞습니다. 이런 개념들은 단어부터 생소하고, 저 단어에 숨은 뜻을 충분히 
배우고 익히느라 한 달 이상의 시간을 쏟기도 하죠.

고전문학은 어떤가요? 분명 우리 말 같은 글이 써있기는 하는데, 일상 생활에서는 잘 쓰이지도 않는 
한자어에 아래아 등 고어도 섞여있고, 각종 비유가 잔뜩 섞여있지만 그럼에도 열심히 한 번 겨우 읽어서 
'아, 사랑 얘기구나'라고 이해했는데 해설을 읽어보니 임금이니 독립에 대한 염원이니 상징적인 의미를 
담고 있다고 하여, 안 그래도 수면 부족에 시달리는 우리에게는 더할 나위 없는 마취제로 다가오는 것이 고전문학입니다.

## 🎬 만화영화처럼 익숙하게

그렇지만, 그 외계어 같은 고전문학을 마치 우리 어렸을 때 TV에서 보았던 만화영화처럼 전체적인 
이야기의 줄기를 얼추 알고 있다면 어떨까요? 예를 들어 「화왕가」에서는 할미꽃이 충신이라 왕이 중용해야 
할 인재라는 걸 알고 있다거나, 「관동별곡」은 임금의 명을 받은 정철이 한양에서 강원도로, 다시 강원도 
내에서 금강산과 동해를 관찰(이라고 쓰고 유람이라고 읽겠습니다)하는 여정을 담고 있다는 큰 맥락이라도 
파악하고 있고, 혹시라도 그 안에서 정철이 놀라워했던 금강산에 담긴 조물주의 손길, 망양정에서 나눴던 
신선과의 대화 등까지 기억하고 있다면, 여기에 이어서 각종 비유나 대구를 파고들어 공부해야 하는 상황이 
오더라도 거부감이 훨씬 줄어들지 않을까요?

![SN오리지날 고전문학 시리즈 - 북천가 예시](/images/originalintro2.png)

## 🏰 머릿속 성을 쌓는 과정

아쉽게도 공부는 대신 해드릴 수가 없죠. 공부는 여러분들께서 여러분들 머리에 누구도 빼앗을 수 없게 
성을 직접 축조하는 과정과도 같으니까요. 그럼 저희 SN아카데미가 여러분들이 머릿속 성을 쌓는데 있어서 
어떤 도움을 드릴 수 있을까? 하는 것이 고민의 시작점이었습니다.

**핵심 철학**: "우리가 좋아해서 흥미롭게 보았던 콘텐츠는 기억하려 하지 않아도 기억이 날 수밖에 없다"

SN오리지날 고전문학 시리즈는 딱 그 생각에서 시작했습니다. 
여러분들께서 쉽게 고전문학의 내용을 익숙하게 자주 접하고 많이 알고 있을수록, 억지로 공부해야 하더라도 
좋아할 수 있다. 또 그렇게 하기에 세상은 어느새 많이 발전해서, 고전문학을 읽고 이해하는 단계에서부터 
필요하면 이를 그림으로 즐기고 목소리를 듣는 것에 이르기까지 AI가 수많은 도움을 줄 수 있는 시대가 되었습니다.

## 🚀 AI 기술과 함께하는 고전문학

이렇게, 전통적인 방식의 전문 콘텐츠 제작 과정을 거치지 않더라도, 상대적으로 적은 비용과 노력, 
또 매우 중요하게는 짧은 콘텐츠 제작 시간으로 우리의 공부를 다채롭게 만들어줄 수 있는 기술들을 
저희 SN아카데미는 다수 보유하고 있고 계속 개발해 나가고 있습니다.

## 📅 업로드 계획

현재의 계획은 **주2회(화/금) 베이스**로 고전문학 시리즈를 업로드하여 비단 금번 2026 수능만을 
위해서가 아니더라도, 「관동별곡」, 「사미인곡」, 「속미인곡」 등 수능을 준비하는 수험생이라면 필수적으로 
알아야 하는 고전 명문부터 차곡차곡 콘텐츠를 쌓아 나가고자 하고, 향후 SN아카데미에서 출시 준비 중인 
SNarGPT, SNarPortal 등 타 서비스 출시에 따라 SNarGPT를 활용한 공부 방법, SN 단편선 등도 선보이고자 
하는 원대한 계획을 가슴 속에 품고 있습니다.

- 주2회(화/금) 정기 업로드
- 수능 필수 고전 명문 완주
- SNarGPT, SNarPortal 연동 예정
- SN 단편선 등 확장 콘텐츠

## 🎥 YouTube 채널 계획

유튜브에 한정한 계획을 조금 더 구체적으로 밝히자면 유튜브 채널을 막 시작한 지금(2025년 9월말)
기준으로는 롱폼 형태의 동영상만 올라가고 있지만, 조만간 **숏폼**과 모든 영상에 **한/영 자막**이 추가될 예정입니다.

그렇지만 한편으로는 고전문학을 공부하는 것은 시대를 적게 탄다고도 생각하기 때문에, 특별히 당장의 관심만을
얻기 위한 자극적 콘텐츠 제작보다는 시간이 오래 지난 시점에 보더라도 재미있게 볼 수 있는, **잔잔하지만
미소 짓게 되는 콘텐츠**를 만들고자 하는 마음이 있습니다.

**채널 특징**:
- 롱폼 고전문학 해설 (현재 운영 중)
- 숏폼 콘텐츠 추가 예정
- 한글/영어 자막 지원 예정
- 시간이 지나도 가치 있는 콘텐츠 지향

<callout type="info">
**SN 유튜브 채널 바로가기**

[SN독학기숙학원 Originals](https://www.youtube.com/@SN_gisuk_original)
</callout>

## 🏫 SN아카데미의 약속

SN아카데미는 2014년부터 경기도 양평에서 꾸준히 독학기숙학원을 운영하며 여러분들의 수능 준비가 
수월할 수 있도록 일 24시간, 주 7일 내내 고민하고 있습니다. 시대의 트렌드를 따라가는 것도 중요하지만, 
시대가 빠르게 변하더라도 수험생 여러분들이 원칙에 기반하여 급하지 않은 마음으로 차분하게 공부에만 
전념할 수 있는 환경을 제공하는데 최선의 가치를 두고 정진하도록 하겠습니다.

수험생 여러분들뿐만 아니라 학부모님, 일반 시청자분들 등 다양한 관련자분들께서 많은 관심 보여주시고 
문의와 피드백 등으로 참여해 주신다면 저희 SN아카데미가 성실함으로 보답하도록 하겠습니다.

## 🙏 마무리

모든 수험생 여러분의 건승을 바라며, 또 다른 재미있는 읽을거리를 들고 찾아뵙겠습니다. 감사합니다.`,
    category: 'SN Originals',
    tags: [],
    author: 'SN Academy',
    date: '2025-10-02',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/originals/sn-originals-intro',
  },
  {
    id: 'sokmieungok',
    title:
      '조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~"\n(고전문학 「속미인곡」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다.
「속미인곡」은 1588~1589년 경 정철이 고향인 전남 창평에 우거하며 「사미인곡」에 이어 지은 가사입니다.

「사미인곡」과 마찬가지로 연군의 정을 임을 이별한 여인의 애달픈 심정에 비하여 표현한 작품으로,
갑녀와 을녀의 대화 형식으로 이야기를 풀어내어 자신(을녀)의 사연과 사모의 정을 구슬프게 표현한 특별한 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「속미인곡」- 사랑의 절정과 문학의 완성

### 💔 사랑의 절정을 담은 문학

「속미인곡」은 정철이 1588~1589년 경 고향인 전남 창평에서 「사미인곡」에 이어 지은 가사입니다. 이 작품은 단순한 정치적 충성을 넘어서, 진정한 사랑의 절정과 그리움의 깊이를 보여주는 조선 가사 문학의 최고봉입니다.

### 🎭 문학적 완성도

- **감정의 절정**: "기다리는 나를 왜 모르시나요"라는 절절한 호소<br>
- **정치적 배경**: 정철의 정치적 좌절과 고향으로의 귀향<br>
- **문학적 완성도**: 조선 가사 문학의 백미로 평가받는 작품<br>
- **감정의 깊이**: 단순한 충성심을 넘어선 진정한 사랑의 표현

### 🌍 세계 문학사적 의의

이 작품은 동아시아 정치시의 전통을 계승하면서도, 조선만의 독특한 정치적 상황을 반영합니다. 정치적 충성을 진정한 사랑으로 승화시키는 방식은 세계 정치 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해

1. **사랑의 문학적 표현**: 정치적 충성을 사랑으로 승화시키는 방법<br>
2. **시대적 배경**: 임진왜란 이후의 복잡한 정치적 상황<br>
3. **작가의 심경**: 정치적 좌절과 고향에 대한 그리움<br>
4. **문학적 가치**: 조선 가사 문학의 완성도

### 🎭 문학 감상의 진정한 즐거움

「속미인곡」을 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 감정 표현의 힘과 진정한 사랑의 의미를 일깨워줍니다. 진정한 문학은 개인의 감정을 넘어서 시대의 아픔과 기쁨을 담아낼 수 있다는 것을 보여줍니다.

---

## English Description

### "Sokmiin-gok" - The Culmination of Love and Literature

**Sokmiin-gok** (속미인곡) is a masterpiece of classical Korean literature written by Jeong Cheol (정철) around 1588-1589 during his exile in Changpyeong, Jeollanam-do. This work, which follows "Samiin-gok" (사미인곡), represents the pinnacle of classical Korean poetry and showcases the deepest expression of love and longing in Korean literature.

**Literary Excellence:**
- **Emotional Climax**: Expresses the deepest yearning with "Why don't you know the one who waits for you?"
- **Political Context**: Reflects Jeong Cheol's political struggles and exile
- **Literary Achievement**: Considered the masterpiece of classical Korean poetry
- **Emotional Depth**: Transcends mere political loyalty to express genuine love

**Global Literary Significance:**
This work inherits the East Asian tradition of political poetry while reflecting the unique political conditions of Joseon. The way it transforms political loyalty into genuine love represents a valuable contribution to world literature, demonstrating how literature can sublimate political emotions into the highest form of human expression.

**Contemporary Relevance:**
"Sokmiin-gok" shows us that true literature has the power to express not only personal emotions but also the deepest human longings. It demonstrates how literature can serve as a medium for understanding the complex relationship between love, loyalty, and political commitment.`,
    category: 'SN Originals',
    tags: ['고전문학', '속미인곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-10-01',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/sokmieungok_thumbnail.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/sokmieungok',
  },
  {
    id: 'samieungok',
    title: '선조를 향한 정철의 중독된 사랑\n(고전문학 「사미인곡」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다.
「사미인곡」은 1588년(선조 21) 정철이 고향인 전남 창평에 우거하며 지은 가사입니다.

임금과 이별한 본인이 처지를 남편과 이별한 한 여인의 상황으로 그려내면서,
계절의 변화에 따라 매화, 옷, 달, 별, 눈 등 다양한 비유와 대구 등을 사용하여 감각적으로 그려낸 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「사미인곡」- 정치적 사랑의 문학적 승화

### 💕 사랑과 충성의 문학적 표현

「사미인곡」은 정철이 선조에 대한 충성과 사랑을 미인에 비유하여 표현한 문학적 걸작입니다. 이 작품은 단순한 정치적 충성을 넘어서, 복잡한 인간의 감정을 아름다운 문학적 비유로 승화시킨 조선 가사 문학의 대표작입니다.

### 🎭 문학적 완성도

- **정교한 비유 기법**: 미인에 비유한 독창적이고 정교한 표현<br>
- **감정의 깊이**: 정치적 좌절과 그리움의 복합적 감정 표현<br>
- **시대적 의미**: 임진왜란 이후의 복잡한 정치적 상황 반영<br>
- **문학적 가치**: 조선 가사 문학의 발전과 완성

### 🌍 세계 문학사적 의의

이 작품은 동아시아 정치시의 전통을 계승하면서도, 조선만의 독특한 정치적 상황을 반영합니다. 정치적 충성을 문학적으로 승화시키는 방식은 세계 정치 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해

1. **비유와 상징**: 미인 비유의 의미와 문학적 효과<br>
2. **시대적 배경**: 임진왜란과 정유재란의 정치적 영향<br>
3. **작가의 심경**: 정치적 좌절과 충성심의 복잡한 갈등<br>
4. **문학적 가치**: 가사 문학의 발전과 완성도

### 🎭 문학 감상의 진정한 즐거움

「사미인곡」을 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 감정 표현의 힘과 정치적 상황을 문학적으로 승화시키는 방법을 보여줍니다. 진정한 문학은 개인의 감정을 넘어서 시대의 아픔과 기쁨을 담아낼 수 있다는 것을 보여줍니다.

---

## English Description

### "Samiin-gok" - The Literary Sublimation of Political Love

**Samiin-gok** (사미인곡) is a masterpiece of classical Korean literature that expresses Jeong Cheol's loyalty and love for King Seonjo through the metaphor of a beautiful woman. This work transcends mere political loyalty to become a profound literary expression of complex human emotions.

**Literary Excellence:**
- **Sophisticated Metaphor**: Uses the metaphor of a beautiful woman with literary finesse
- **Emotional Depth**: Expresses the complex feelings of political frustration and longing
- **Historical Context**: Reflects the complex political situation after the Imjin War
- **Literary Achievement**: Represents the pinnacle of classical Korean poetry

**Global Literary Significance:**
This work inherits the East Asian tradition of political poetry while reflecting the unique political conditions of Joseon. The way it transforms political loyalty into literary expression represents a valuable contribution to world literature, demonstrating how literature can sublimate political emotions into art.

**Contemporary Relevance:**
"Samiin-gok" shows us that true literature has the power to express not only personal emotions but also the pain and joy of an entire era. It demonstrates how literature can serve as a medium for understanding complex political and emotional relationships.`,
    category: 'SN Originals',
    tags: ['고전문학', '사미인곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-09-30',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/22_thumbnail2.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=50nJegN2YSQ',
    url: '/originals/samieungok',
  },
  {
    id: 'gapminga',
    title:
      '내 속도 모르면서 가라 마라 막말하지 마라\n(수능 고전문학 「갑민가」)',
    excerpt:
      '조선 후기 백성의 아픔과 저항을 담은 「갑민가」로 진정한 민중 문학을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 4탄으로 「갑민가」를 준비했습니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「갑민가」- 민중의 절규와 저항

### 💔 시대의 아픔을 담은 문학

「갑민가」는 조선 후기 백성들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.

### 🎭 문학적 가치와 의미

- **민중의 진실한 목소리**: 지배층이 아닌 백성의 시각에서 바라본 사회<br>
- **날카로운 사회 비판**: 당시 사회의 모순을 직설적으로 폭로<br>
- **문학사적 의의**: 조선 후기 민중 문학의 대표작<br>
- **감정적 공감**: 현대 독자들도 공감할 수 있는 보편적 메시지

### 🌍 세계 문학사적 관점

이 작품은 동아시아 민중 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 민중의 고통과 저항을 문학적으로 승화시킨 방식은 세계 민중 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 문학적 이해

1. **민중 문학의 전통**: 동아시아 민중 문학의 흐름과 특징<br>
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등<br>
3. **문학과 사회**: 문학이 사회 변화에 미치는 영향<br>
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움

「갑민가」를 읽는 것은 과거의 아픔을 되새기는 것만이 아닙니다. 이 작품은 우리에게 문학이 가진 사회적 힘과 민중의 목소리가 얼마나 소중한지를 일깨워줍니다. 진정한 문학은 아름다움만이 아니라, 진실과 정의를 추구하는 힘을 가지고 있다는 것을 보여줍니다.

---

## English Description

### "Gapmin-ga" - The Cry of the People: A Masterpiece of K-Classic Literature

**Gapmin-ga** (갑민가) stands as one of the most powerful works in Korean classical literature, representing the authentic voice of the oppressed during the late Joseon Dynasty (1392-1910). This masterpiece transcends mere literary expression to become a profound social document that exposes the contradictions and corruption of the ruling class while giving voice to the voiceless masses.

**Literary and Social Significance:**
- **Authentic Voice**: Represents the perspective of the common people, not the ruling elite
- **Sharp Social Criticism**: Directly exposes the social contradictions of the time
- **Literary Historical Value**: A masterpiece of late Joseon popular literature
- **Emotional Resonance**: Contains universal messages that modern readers can relate to

**K-Classic Literature Context:**
This work represents the pinnacle of Korean classical literature's engagement with social issues. Unlike court literature that often idealized the ruling class, "Gapmin-ga" provides an unfiltered view of the common people's suffering and resistance. It demonstrates how Korean literature has historically served as a vehicle for social critique and human dignity.

**Global Literary Context:**
This work inherits the East Asian tradition of popular literature while reflecting the unique social conditions of Joseon Korea. The way it transforms the suffering and resistance of the people into literary expression represents a valuable contribution to world literature, demonstrating the power of literature to give voice to the voiceless and challenge social injustice.

**Contemporary Relevance:**
"Gapmin-ga" reminds us that true literature has the power not only to create beauty but also to pursue truth and justice. It shows how literature can serve as a medium for social change and the expression of human dignity, making it relevant for contemporary readers interested in social justice and human rights.

**For International Readers:**
This work is particularly valuable for those studying Korean culture and literature, as it provides insight into the historical struggles of the Korean people and the role of literature in Korean society. It demonstrates how Korean classical literature addresses universal themes of oppression, resistance, and human dignity that resonate across cultures and time periods.`,
    category: 'SN Originals',
    tags: ['고전문학', '갑민가', '민중문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-22',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/GABMINGA_2_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=3ZGE-RvBinQ',
    url: '/originals/gapminga',
  },
  {
    id: 'hwangokga',
    title: '너 그렇게 여자만 좋아하다 피똥싼다\n(수능 고전문학 「화왕가」)',
    excerpt:
      '조선 후기 풍자 문학의 백미 「화왕가」로 문학의 유머와 비판정신을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 2탄으로 「화왕가」를 준비했습니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「화왕가」- 풍자 문학의 진수

### 😂 유머로 승화된 사회 비판

「화왕가」는 조선 후기 사회의 모순과 인간의 욕망을 풍자적으로 표현한 문학적 걸작입니다. 이 작품은 단순한 비판을 넘어서, 유머와 해학을 통해 사회의 부조리를 날카롭게 지적하는 문학의 힘을 보여줍니다.

### 🎭 문학적 완성도

- **정교한 풍자 기법**: 사회 모순을 유머러스하게 비판하는 문학적 기교<br>
- **현실적 통찰력**: 인간의 욕망과 사회적 모순을 정확히 포착<br>
- **문학적 완성도**: 조선 후기 풍자 문학의 최고 수준<br>
- **시대를 초월한 메시지**: 오늘날에도 유효한 보편적 가치

### 🌍 세계 문학사적 의의

이 작품은 동아시아 풍자 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 유머와 해학을 통한 사회 비판의 방식은 세계 풍자 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해

1. **풍자 문학의 전통**: 동아시아 풍자 문학의 흐름과 특징<br>
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등<br>
3. **문학적 기법**: 풍자와 해학의 효과적 활용<br>
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움

「화왕가」를 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 유머의 힘과 사회 비판의 정신을 일깨워줍니다. 진정한 문학은 아름다움뿐만 아니라, 사회의 부조리를 지적하고 개선하려는 의지를 담고 있다는 것을 보여줍니다.

---

## English Description

### "Hwangok-ga" - The Art of Satirical Literature

**Hwangok-ga** (화왕가) is a masterpiece of classical Korean literature that uses humor and satire to expose the contradictions of late Joseon society and human desires. This work transcends mere criticism to demonstrate the power of literature to address social injustice through wit and humor.

**Literary Excellence:**
- **Sophisticated Satire**: Uses humor to criticize social contradictions with literary finesse
- **Realistic Insight**: Accurately captures human desires and social contradictions
- **Literary Achievement**: Represents the highest level of satirical literature in late Joseon
- **Timeless Message**: Contains universal values that remain relevant today

**Global Literary Significance:**
This work inherits the East Asian tradition of satirical literature while reflecting the unique social conditions of Joseon. The way it uses humor and wit for social criticism represents a valuable contribution to world literature, demonstrating how literature can address social issues through entertainment.

**Contemporary Relevance:**
"Hwangok-ga" reminds us that true literature has the power not only to create beauty but also to critique society and inspire change. It shows how humor can be a powerful tool for social commentary and how literature can serve as a mirror to society.`,
    category: 'SN Originals',
    tags: ['고전문학', '화왕가', '풍자문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-26',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/hwawangga_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=6tsl5IIMy_o',
    url: '/originals/hwangokga',
  },
  {
    id: 'bukcheonga',
    title: '좋긴 한데 유배 생활 이래도 됨?\n고전문학 「북천가」',
    excerpt:
      '조선 후기 민중의 아픔과 저항을 담은 「북천가」로 진정한 문학의 힘을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 3탄으로 「북천가」를 준비했습니다.

북천가는 이번 수능에 출제될 확률이 높은 작품인데요.
이동하실 때, 머리를 잠시 식히실 때 보시면 도움이 되실 겁니다!

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「북천가」- 민중 문학의 진수

### 💔 시대의 아픔을 담은 문학

「북천가」는 조선 후기 북한 지역 민중들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.

### 🎭 문학적 가치와 의미

- **민중의 진실한 목소리**: 지배층이 아닌 민중의 시각에서 바라본 사회<br>
- **날카로운 사회 비판**: 당시 사회의 모순을 직설적으로 폭로<br>
- **지역적 특수성**: 북한 지역의 고유한 상황과 고통을 생생하게 표현<br>
- **문학사적 의의**: 조선 후기 민중 문학의 대표작

### 🌍 세계 문학사적 관점

이 작품은 동아시아 민중 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 민중의 고통과 저항을 문학적으로 승화시킨 방식은 세계 민중 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 문학적 이해

1. **민중 문학의 전통**: 동아시아 민중 문학의 흐름과 특징<br>
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등<br>
3. **문학과 사회**: 문학이 사회 변화에 미치는 영향<br>
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움

「북천가」를 읽는 것은 과거의 아픔을 되새기는 것만이 아닙니다. 이 작품은 우리에게 문학이 가진 사회적 힘과 민중의 목소리가 얼마나 소중한지를 일깨워줍니다. 진정한 문학은 아름다움만이 아니라, 진실과 정의를 추구하는 힘을 가지고 있다는 것을 보여줍니다.

---

## English Description

### "Bukcheon-ga" - The Voice of the Oppressed

**Bukcheon-ga** (북천가) is a powerful work of classical Korean literature that gives voice to the suffering and resistance of the common people in the northern regions during the late Joseon Dynasty. This work transcends mere literary expression to become a social document that exposes the contradictions and corruption of the ruling class.

**Literary and Social Significance:**
- **Authentic Voice**: Represents the perspective of the common people, not the ruling elite
- **Sharp Social Criticism**: Directly exposes the social contradictions of the time
- **Regional Specificity**: Vividly expresses the unique suffering of the northern regions
- **Literary Historical Value**: A masterpiece of late Joseon popular literature

**Global Literary Context:**
This work inherits the East Asian tradition of popular literature while reflecting the unique social conditions of Joseon. The way it transforms the suffering and resistance of the people into literary expression represents a valuable contribution to world literature, demonstrating the power of literature to give voice to the voiceless.

**Contemporary Relevance:**
"Bukcheon-ga" reminds us that true literature has the power not only to create beauty but also to pursue truth and justice. It shows how literature can serve as a medium for social change and the expression of human dignity.`,
    category: 'SN Originals',
    tags: ['고전문학', '북천가', '민중문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-24',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/bukcheonga_thumbnail_02.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=xhyppBm3_o4',
    url: '/originals/bukcheonga',
  },
  {
    id: 'gwandong-byeolgok',
    title: '정철의 강원도 브이로그\n(고전문학 「관동별곡」)',
    excerpt:
      '정철의 대표작 「관동별곡」으로 조선 가사 문학의 아름다움을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 4탄으로 「관동별곡」을 준비했습니다.

[타임스탬프]
00:00 인트로, 작품 배경
00:52 서사 - 죽림
01:06 서사 - 연추문, 이동(평구~치악산)
01:24 서사 - 소양강
01:38 서사 - 철원, 태봉국 궁궐터
01:56 서사 - 회양
02:08 본사1(금강산) - 회양
02:23 본사1(금강산) - 만폭동
02:38 본사1(금강산) - 금강대
02:55 본사1(금강산) - 진헐대
03:44 본사1(금강산) - 개심대
04:04 본사1(금강산) - 비로봉
04:43 본사1(금강산) - 화룡소
05:08 본사1(금강산) - 불정대
05:40 본사2(동해) - 산영루
06:18 본사2(동해) - 총석정
06:35 본사2(동해) - 삼일포
06:59 본사2(동해) - 의상대
07:42 본사2(동해) - 경포대
08:20 본사2(동해) - 강릉
08:40 본사2(동해) - 죽서루
09:07 본사2(동해)/결사 - 망양정

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「관동별곡」- 조선 가사 문학의 백미

### 🌄 작품의 진정한 아름다움

「관동별곡」은 단순한 풍경 묘사를 넘어서, 정철이 관동 지역(강원도)의 자연을 통해 인간의 내면세계를 표현한 문학적 걸작입니다. 이 작품은 조선 가사 문학의 최고봉으로 평가받으며, 자연과 인간의 조화를 통해 문학의 본질을 보여줍니다.

### 🎨 문학적 완성도

- **시각적 묘사**: 관동의 산천을 생생하게 그려내는 회화적 표현<br>
- **음악적 리듬**: 가사의 운율과 리듬이 자연의 흐름과 일치<br>
- **감정의 깊이**: 단순한 감탄을 넘어선 철학적 사유<br>
- **상징적 의미**: 자연을 통한 인간 존재의 의미 탐구

### 🌍 세계 문학사적 의의

이 작품은 동아시아 자연시의 전통을 계승하면서도, 조선만의 독특한 문학적 성취를 보여줍니다. 자연에 대한 사랑과 경외심, 그리고 인간의 감정을 자연과 조화롭게 표현하는 방식은 세계 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 이해

1. **자연과 문학**: 자연을 통한 문학적 표현의 전통<br>
2. **조선 문학의 특성**: 중국 문학과 구별되는 조선 문학의 독창성<br>
3. **가사 문학의 발전**: 조선 가사 문학의 완성도<br>
4. **현대적 의미**: 자연과 인간의 관계에 대한 현대적 해석

### 🎭 작품 감상의 즐거움

「관동별곡」을 읽는 것은 단순한 학습이 아닙니다. 정철이 바라본 관동의 아름다운 풍경을 마음속으로 그려보며, 자연과 인간의 조화로운 관계를 느껴보는 문학적 여행입니다. 이 작품은 우리에게 자연의 소중함과 문학의 아름다움을 동시에 일깨워줍니다.

---

## English Description

### "Gwandong-byeolgok" - A Masterpiece of Korean Classical Literature

**Gwandong-byeolgok** (관동별곡) is not merely a description of beautiful landscapes, but a profound literary work that explores the relationship between nature and human consciousness. Written by Jeong Cheol (정철), this piece represents the pinnacle of classical Korean poetry and showcases the unique beauty of Joseon Dynasty literature.

**Literary Excellence:**
- **Visual Poetry**: Paints the landscapes of Gwandong with vivid, pictorial language
- **Musical Rhythm**: The rhythm and meter of the verse mirror the flow of nature
- **Emotional Depth**: Transcends simple admiration to explore philosophical contemplation
- **Symbolic Meaning**: Uses nature as a medium to explore the meaning of human existence

**Global Literary Significance:**
This work inherits the East Asian tradition of nature poetry while achieving a uniquely Korean literary accomplishment. The way it harmoniously expresses human emotions through nature represents a valuable contribution to world literature, demonstrating the sophisticated relationship between humanity and the natural world.

**Contemporary Relevance:**
"Gwandong-byeolgok" offers timeless insights into the human-nature relationship, making it relevant for modern readers who seek to understand our connection with the environment and the role of literature in expressing this relationship.`,
    category: 'SN Originals',
    tags: ['고전문학', '관동별곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-09-28',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/gwandongbealgok_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=9T06DoJaMHs',
    url: '/originals/gwandong-byeolgok',
  },
  {
    id: 'sunsangtan',
    title:
      '45세면 지금은 한창인데 자꾸 자기가 노장이라고 하네...\n(고전문학 「선상탄」)',
    excerpt:
      '박인로의 「선상탄」으로 배 위에서의 탄식과 나라 걱정, 무관의 절개를 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈. 제7탄으로 박인로의 「선상탄」을 준비했습니다.

'배 위에서 하는 탄식'이라는 의미의 「선상탄」은 1605년(선조 38) 무관 박인로가 부산 진동영에 통주사로서 머무를 때 배 위에서 지은 가사입니다.

대마도를 바라보며 왜적과 마주한 상황에서, 배의 유래와 왜적의 유래, 배의 쓸모 등에 대한 다양한 설화가 등장하고 나라에 대한 걱정과 무관으로서의 절개 또한 드러내는 재미있는 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「선상탄」- 배 위에서 부르는 나라 걱정

### 🌊 작품의 배경과 의미

「선상탄」은 단순한 탄식이 아닙니다. 45세의 무관 박인로가 배 위에서 대마도를 바라보며 느낀 나라에 대한 걱정과 충정을 담은 애국적 가사 문학입니다. 임진왜란의 상처가 채 아물지 않은 시기, 해안 방어의 최전선에서 지은 이 작품은 무관의 시선으로 본 시대상을 생생하게 전달합니다.

### 🎨 문학적 특징

- **다양한 설화**: 배의 유래, 왜적의 유래, 배의 쓸모에 대한 흥미로운 이야기<br>
- **역사적 배경**: 임진왜란 이후 긴장감 넘치는 시대상 반영<br>
- **충정의 표현**: 나라를 걱정하는 무관의 진솔한 마음<br>
- **서사적 구성**: 설화와 감정이 어우러진 독특한 전개

### 🌍 문학사적 의의

이 작품은 무관 출신 작가가 남긴 귀한 가사 문학으로, 당대 사대부 문학과는 다른 실용적이고 직설적인 표현이 특징입니다. 문학이 단순히 풍류를 즐기는 것이 아니라, 나라의 안위를 걱정하고 백성을 생각하는 도구가 될 수 있음을 보여줍니다.

### 📚 작품 감상 포인트

1. **45세 노장?**: 작가가 자신을 노장이라 칭하는 겸손함과 시대적 배경<br>
2. **배의 의미**: 단순한 교통수단을 넘어선 방어와 생존의 상징<br>
3. **왜적에 대한 경계**: 임진왜란의 트라우마와 경각심<br>
4. **무관의 절개**: 나이 들어도 나라를 지키겠다는 충성심

### 🎭 현대적 의미

「선상탄」을 읽는 것은 과거 무관의 마음을 이해하는 것을 넘어, 자신의 위치에서 나라와 사회를 걱정하는 태도가 무엇인지 생각해보는 기회입니다. 45세를 노장이라 부르던 시대, 그럼에도 끝까지 나라를 지키려는 한 무관의 진심 어린 탄식이 오늘날 우리에게 전하는 메시지를 느껴보세요.

---

## English Description

### "Seonsan-tan" - A Warrior's Lament on the Sea

**Seonsan-tan** (선상탄) is a classical Korean gasa (가사) poem written in 1605 by military officer Park In-ro (박인로) while stationed at Jindong Naval Command in Busan. The title means "Lament on a Ship," and the work reflects the author's deep concerns for the nation while stationed at the coastal defense line, facing Tsushima Island and the Japanese threat.

**Literary Significance:**
- **Unique Perspective**: Written by a military officer, offering a practical and direct voice unlike typical scholarly literature
- **Historical Context**: Reflects the tense atmosphere following the Imjin War (Japanese invasions of 1592-1598)
- **Narrative Elements**: Incorporates various tales about ships, Japanese invaders, and maritime history
- **Patriotic Spirit**: Expresses unwavering loyalty and concern for the nation

**Cultural Value:**
This work demonstrates that literature can serve not merely as entertainment but as a medium for expressing patriotic duty and social responsibility. Park In-ro's perspective as a 45-year-old warrior (whom he calls an "old soldier") provides valuable insights into the mindset of those who defended the nation during turbulent times.

**Contemporary Relevance:**
"Seonsan-tan" reminds us of the importance of dedication to one's duty and concern for society, regardless of age or position. The warrior's heartfelt lament continues to resonate with modern readers who seek to understand the value of loyalty and service.`,
    category: 'SN Originals',
    tags: ['고전문학', '선상탄', '박인로', '가사문학', '수능국어'],
    author: 'SN Academy',
    date: '2025-10-07',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/sunsangtan_thumbnail.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=9ogmj2rSwLY',
    url: '/originals/sunsangtan',
  },
  {
    id: 'yongbuga',
    title: '조선 부녀자 악행 모음집 (고전문학 「용부가」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈. 여덟 번째 작품으로 조선시대 후기 작자 미상의 가사인 「용부가」를 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈. 여덟 번째 작품으로 조선시대 후기 작자 미상의 가사인 「용부가」를 준비했습니다.

'마음이 변변치 못하고 졸렬하다'는 의미의 '용렬(庸劣)하다'라는 말이 있는데요, 용부가는 용렬스러운 아녀자, 즉 '용부(庸婦)'의 행실을 다룬 가사입니다. 당시 유교적 가치관에 입각하여 부녀자의 악행을 나열하고 비판함으로써 유교적 질서와 규범이 준수되고 회복될 수 있도록 교훈하고 있는 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「용부가」- 조선시대 부녀자 악행 모음집

### 🏛️ 작품의 배경과 의미

「용부가」는 조선시대 후기 작자 미상의 가사로, '용렬한 부녀자'의 행실을 다룬 교훈적 작품입니다. 당시 유교적 가치관에 입각하여 부녀자의 악행을 나열하고 비판함으로써 유교적 질서와 규범이 준수되고 회복될 수 있도록 교훈하고 있습니다.

### 🎭 문학적 특징

- **교훈적 성격**: 유교적 가치관에 따른 부녀자 교육서 역할<br>
- **비판적 시각**: 당시 사회의 부녀자 문제점을 직설적으로 지적<br>
- **열거적 구성**: 다양한 악행 사례를 체계적으로 나열<br>
- **사회적 목적**: 유교적 질서 회복을 위한 교화 의도

### 🌍 문학사적 의의

이 작품은 조선시대 후기 가사 문학의 한 특징을 보여주는 작품으로, 단순한 개인적 감정 표현을 넘어서 사회적 교화 목적을 가진 실용적 문학의 성격을 띱니다. 당시 유교 사회에서 부녀자의 역할과 행실에 대한 기대와 우려를 생생하게 반영하고 있습니다.

### 📚 작품 감상 포인트

1. **용부의 정의**: '용렬한 부녀자'가 의미하는 바와 당시 사회적 맥락<br>
2. **악행의 유형**: 나열된 부녀자들의 구체적인 악행 사례들<br>
3. **교훈적 메시지**: 유교적 가치관에 입각한 올바른 부녀자상 제시<br>
4. **사회적 비판**: 당시 사회의 부녀자 문제에 대한 인식과 대응

### 🎨 현대적 의미

「용부가」를 읽는 것은 과거 유교 사회의 가치관을 이해하는 것을 넘어, 당시 사회가 부녀자에게 기대했던 역할과 행실이 무엇이었는지, 그리고 그런 기대가 어떤 사회적 맥락에서 나온 것인지 생각해보는 기회입니다. 물론 현대적 관점에서는 성차별적 요소가 있지만, 역사적 문헌으로서 당시 사회상을 이해하는 데 중요한 자료가 됩니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 교훈적 가사, 사회적 목적의 문학<br>
- **구성 방식**: 열거적 구성, 비판적 서술<br>
- **주제 의식**: 유교적 질서 회복, 사회 교화<br>
- **시대적 배경**: 조선 후기 유교 사회의 가치관

---

## English Description

### "Yongbuga" - A Collection of Women's Misdeeds in Joseon Dynasty

**Yongbuga** (용부가) is a classical Korean gasa (가사) poem from the late Joseon Dynasty, written by an unknown author. The title means "Song of the Vulgar Woman," and the work serves as a didactic piece that lists and criticizes various misdeeds of women from a Confucian perspective.

**Literary Significance:**
- **Didactic Nature**: Functions as an educational text for women's conduct according to Confucian values
- **Critical Perspective**: Directly points out social problems related to women's behavior
- **Enumerative Structure**: Systematically lists various examples of misconduct
- **Social Purpose**: Aims to restore Confucian order through moral instruction

**Cultural Context:**
This work reflects the Confucian society's expectations and concerns about women's roles and conduct during the late Joseon period. It represents a shift from purely personal emotional expression to practical literature with social educational purposes.

**Contemporary Relevance:**
While "Yongbuga" contains elements that would be considered sexist by modern standards, it serves as an important historical document for understanding the social values and gender expectations of the Joseon Dynasty. It provides insight into how the society of that time viewed women's roles and the mechanisms used to maintain social order.

**Educational Value:**
For students preparing for the Korean SAT, this work is significant for understanding:
- The didactic nature of late Joseon literature
- Confucian social values and their literary expression
- The relationship between literature and social education
- Historical perspectives on gender roles in Korean society`,
    category: 'SN Originals',
    tags: ['고전문학', '용부가', '가사문학', '수능국어', '교훈문학'],
    author: 'SN Academy',
    date: '2025-10-08',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_work_v2_F.png',
    youtubeUrl: 'https://www.youtube.com/embed/kEWPbC_-ehc',
    url: '/originals/yongbuga',
  },
  {
    id: 'chulsaegok',
    title:
      '나 경성 발령났어. 어디, 서울 경성? 아니 함경북도 경성.\n(고전문학 「출새곡」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 그 아홉 번째 시간. 오늘은 조선시대 후기 조우인이 지은 가사인 「출새곡」 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 그 아홉 번째 시간. 오늘은 조선시대 후기 조우인이 지은 가사인 「출새곡」 준비했습니다.

'출새곡(出塞曲)'은 '변방으로 나아가는 노래'라는 뜻으로, 왕명을 받아 평화로운 조정이 아닌 변방으로 부임하게 된 상황에서 느끼는 화자(조우인)의 심정을 담은 노래입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「출새곡」- 나 경성 발령났어. 어디, 서울 경성? 아니 함경북도 경성.

### 🏰 작품의 배경과 의미

「출새곡」은 조선시대 후기 조우인(曺友仁)이 지은 기행가사로, '변방으로 나아가는 노래'라는 뜻입니다. 1616년(광해군 8) 가을, 56세의 나이에 함경도 경성판관으로 부임하면서 서울에서 경성까지의 여정과 변방 생활에서 느낀 복잡한 심정을 솔직하게 담아낸 작품입니다.

### 🎭 문학적 특징

- **기행가사**: 서울에서 함경도 경성까지 2,000여 리의 여정을 생생하게 묘사<br>
- **개인적 감정 표현**: 문신 개인의 진솔한 내면을 드러냄<br>
- **현실적 묘사**: 변방 생활의 어려움과 고충을 구체적으로 서술<br>
- **충정과 갈등**: 충성심과 개인적 어려움 사이의 내적 갈등<br>
- **서사적 구성**: 시간의 흐름에 따른 감정 변화를 보여줌

### 🌍 문학사적 의의

이 작품은 조선시대 문신이 지방관으로 부임하며 겪은 경험을 담은 귀한 자료로, 당시 변방 근무의 실상과 문신들의 생활상을 생생하게 전해줍니다. 단순한 충정 표현을 넘어서 인간적인 고뇌와 현실적 어려움을 솔직하게 드러낸 점에서 문학사적 가치가 높습니다. 조우인은 시·서예·음악에 뛰어나 삼절(三絶)이라는 평을 받은 문인으로, 그의 문학적 역량이 잘 드러난 작품입니다.

### 📚 작품 감상 포인트

1. **출새의 의미**: '변방으로 나감'이 담고 있는 시대적 무게감<br>
2. **문신의 현실**: 서울과 험난한 변방 사이의 대비<br>
3. **내적 갈등**: 충성심과 개인적 고충 사이의 복잡한 감정<br>
4. **시대적 배경**: 조선 후기 국방 체제와 지방관의 역할

### 🎨 현대적 의미

「출새곡」을 읽는 것은 과거 문신의 마음을 이해하는 것을 넘어, 자신의 위치에서 맡은 바 임무를 다하면서도 느끼는 인간적 고뇌가 무엇인지 생각해보는 기회입니다. 공적 의무와 사적 감정 사이에서 균형을 잡으려는 한 사람의 진솔한 마음이 오늘날 우리에게도 깊은 공감을 불러일으킵니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 기행가사, 개인적 감정 표현<br>
- **주요 갈등**: 충성심과 개인적 어려움의 대립<br>
- **표현 기법**: 대조법, 점층법, 영탄법<br>
- **시대적 의미**: 조선 후기 변방 근무의 현실

---

## English Description

### "Chulsaegok" - A Scholar-Official's Heart Heading to the Frontier

**Chulsaegok** (출새곡) is a classical Korean gasa (가사) travel narrative poem written by Jo U-in (曺友仁) during the late Joseon Dynasty. The title means "Song of Heading to the Frontier," and the work honestly captures the complex emotions of a civil official who must leave Seoul to serve as a magistrate at a remote frontier post in Gyeongsong, Hamgyong Province, by royal command in 1616.

**Literary Significance:**
- **Travel Narrative**: Vividly describes the journey of over 2,000 li from Seoul to Gyeongsong
- **Personal Expression**: Reveals the honest inner feelings of an individual scholar-official
- **Realistic Description**: Specifically describes the difficulties and hardships of frontier life
- **Loyalty and Conflict**: Shows the internal struggle between loyalty and personal difficulties
- **Narrative Structure**: Demonstrates emotional changes over time

**Cultural Value:**
This work serves as valuable material for understanding the experiences of Joseon Dynasty civil officials serving in remote posts, vividly conveying the realities of frontier service and the lives of scholar-officials of that time. It has high literary historical value for honestly revealing human anguish and realistic difficulties beyond simple expressions of loyalty. Jo U-in was renowned for his excellence in poetry, calligraphy, and music, earning him the title of "Three Perfections" (삼절), and this work showcases his literary prowess.

**Contemporary Relevance:**
Reading "Chulsaegok" offers an opportunity to understand not only the hearts of past scholar-officials but also to reflect on the human struggles we face when fulfilling our duties while dealing with personal hardships. The honest heart of one person trying to balance public duty and private emotions deeply resonates with us today.`,
    category: 'SN Originals',
    tags: ['고전문학', '출새곡', '조우인', '기행가사', '수능국어'],
    author: 'SN Academy',
    date: '2025-10-14',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_F.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=ThaMhDbZuNc',
    url: '/originals/chulsaegok',
  },
  {
    id: 'mongcheonyo',
    title:
      '이럴거면 잘 쉬고 있던 사람 복직은 뭣하러 시키셨어요 (고전문학 「몽천요」)',
    excerpt:
      '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 어느새 그 열 번째 시간. 오늘은 조선시대 후기(1652년, 효종 3년)에 제작된 윤선도의 연시조 「몽천요」를 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 어느새 그 열 번째 시간. 오늘은 조선시대 후기(1652년, 효종 3년)에 제작된 윤선도의 연시조 「몽천요」를 준비했습니다.

「몽천요」(夢天謠)는 '꿈속에서 본 하늘을 노래한다'는 뜻으로, 정계를 은퇴했던 윤선도가 17년만에 왕명을 받아 부름을 받았을 때 신하들로터 받은 시기와 헐뜯음에서 비롯된 허탈한 심정을 담은 노래입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「몽천요」- 이럴거면 잘 쉬고 있던 사람 복직은 뭣하러 시키셨어요

### 🏰 작품의 배경과 의미

「몽천요」는 조선시대 후기 윤선도(尹善道, 1587-1671)가 지은 연시조로, '꿈속에서 본 하늘을 노래한다'는 뜻입니다. 1652년(효종 3년) 66세의 나이에 17년간의 은퇴 생활을 끝내고 왕명을 받아 복직했을 때, 조정의 신하들로부터 받은 시기와 헐뜯음에 대한 허탈한 심정을 담은 작품입니다.

### 🎭 문학적 특징

- **연시조**: 3연으로 구성된 시조의 연작 형태<br>
- **개인적 감정 표현**: 문신 개인의 진솔한 내면을 드러냄<br>
- **현실적 묘사**: 조정의 시기와 헐뜯음에 대한 구체적 서술<br>
- **허탈과 좌절**: 복직에 대한 기대와 현실의 괴리감<br>
- **꿈의 상징**: 꿈속 하늘을 통한 이상과 현실의 대비

### 🌍 문학사적 의의

이 작품은 조선시대 문신이 정치적 복귀 과정에서 겪은 경험을 담은 귀한 자료로, 당시 조정의 권력 구조와 문신들의 현실적 어려움을 생생하게 전해줍니다. 단순한 충정 표현을 넘어서 인간적인 고뇌와 정치적 현실을 솔직하게 드러낸 점에서 문학사적 가치가 높습니다. 윤선도는 시조문학의 대가로, 그의 문학적 역량이 잘 드러난 작품입니다.

### 📚 작품 감상 포인트

1. **몽천의 의미**: '꿈속 하늘'이 담고 있는 이상과 현실의 대비<br>
2. **복직의 현실**: 은퇴와 복직 사이의 괴리감<br>
3. **내적 갈등**: 충성심과 개인적 좌절 사이의 복잡한 감정<br>
4. **시대적 배경**: 조선 후기 정치적 상황과 문신의 역할

### 🎨 현대적 의미

「몽천요」를 읽는 것은 과거 문신의 마음을 이해하는 것을 넘어, 자신의 위치에서 맡은 바 임무를 다하면서도 느끼는 인간적 고뇌가 무엇인지 생각해보는 기회입니다. 공적 의무와 사적 감정 사이에서 균형을 잡으려는 한 사람의 진솔한 마음이 오늘날 우리에게도 깊은 공감을 불러일으킵니다.

### 🔍 수능 출제 포인트

- **작품의 성격**: 연시조, 개인적 감정 표현<br>
- **주요 갈등**: 이상과 현실의 대립<br>
- **표현 기법**: 상징법, 대조법, 영탄법<br>
- **시대적 의미**: 조선 후기 정치적 상황과 문신의 역할

---

## English Description

### "Mongcheonyo" - A Retired Scholar-Official's Frustration with Reinstatement

**Mongcheonyo** (몽천요) is a classical Korean yeonsijo (연시조) poem written by Yun Seon-do (尹善道, 1587-1671) during the late Joseon Dynasty. The title means "Song of Dreaming of Heaven," and the work honestly captures the frustrated emotions of a civil official who, after 17 years of retirement, was called back to service by royal command in 1652 at the age of 66, only to face jealousy and criticism from other court officials.

**Literary Significance:**
- **Yeonsijo**: A series of three sijo poems forming a connected narrative<br>
- **Personal Expression**: Reveals the honest inner feelings of an individual scholar-official<br>
- **Realistic Description**: Specifically describes the difficulties and hardships of political life<br>
- **Frustration and Disappointment**: Shows the gap between expectations and reality of reinstatement<br>
- **Dream Symbolism**: Uses the symbolism of dreaming of heaven to contrast ideals with reality

**Cultural Value:**
This work serves as valuable material for understanding the experiences of Joseon Dynasty civil officials in the political arena, vividly conveying the realities of court politics and the lives of scholar-officials of that time. It has high literary historical value for honestly revealing human anguish and political realities beyond simple expressions of loyalty. Yun Seon-do was a master of sijo literature, and this work showcases his literary prowess.

**Contemporary Relevance:**
Reading "Mongcheonyo" offers an opportunity to understand not only the hearts of past scholar-officials but also to reflect on the human struggles we face when fulfilling our duties while dealing with personal hardships. The honest heart of one person trying to balance public duty and private emotions deeply resonates with us today.`,
    category: 'SN Originals',
    tags: ['고전문학', '몽천요', '윤선도', '연시조', '수능국어'],
    author: 'SN Academy',
    date: '2025-10-19',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_F_mongcheonyo.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=HmzoVsJUBFE',
    url: '/originals/mongcheonyo',
  },
  {
    id: 'dokrakdang',
    title: '산 좋고 물 좋은 자연에서 공부할 맛 났겠어 (고전문학 「독락당」)',
    excerpt:
      '박인로의 「독락당」으로 조선 성리학의 정통을 세운 회재 이언적의 학문 공간을 만나보세요. 1619년 박인로가 59세의 나이에 지은 가사로, 홀로 누리는 즐거움과 학문의 진수를 담은 작품입니다.',
    content: `안녕하세요, SN독학기숙학원입니다 😊

보기만 해도 국어 감각이 살아나는 고전문학 시리즈 제11탄,
오늘 소개할 작품은 조선 중기에서 후기로 넘어가던 1619년에 박인로가 지은 가사 「독락당(獨樂堂)」입니다.

'독락당'은 조선 성리학의 정통을 세운 회재 이언적 선생이 학문을 닦고 거처했던 공간으로,
그 품격과 고요함 속에서 선비가 추구하던 **'홀로 누리는 즐거움, 학문 그 자체'**가 고스란히 담겨 있습니다.
후대에는 그 학덕을 기리기 위해 건너편에 옥산서원이 세워졌고, 지금도 수많은 방문객이 찾는 학문의 성소로 남아 있습니다.

박인로는 59세의 나이에 독락당 주변을 거닐며 회재의 발자취를 체험하고,
선배 지성인에 대한 깊은 존경과 사모의 마음을 가사 문학의 정갈한 언어로 풀어내었습니다.
이 작품은 단순한 감상문이 아니라, 학문과 인격이 어떻게 삶으로 이어지는지 보여주는 기록이기도 합니다.`,
    category: 'SN Originals',
    tags: [
      '고전문학',
      '독락당',
      '박인로',
      '회재 이언적',
      '가사문학',
      '수능국어',
    ],
    author: 'SN Academy',
    date: '2025-10-26',
    readTime: '4',
    featured: false,
    published: true,
    thumbnail: '/images/thumbnail/DokRakDang_thumbnail_F_v3.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=NlLizA-5u1M',
    url: '/originals/dokrakdang',
    type: 'special',
  },
  {
    id: 'oryun-ga',
    title: '내 요즘 것들 버르장머리를 그냥 (고전문학 「오륜가」)',
    excerpt:
      '박선장의 「오륜가」로 조선 중기 유교 윤리의 핵심인 다섯 가지 인간관계를 만나보세요. 1612년 광해군 시대에 지어진 교훈 가사로, 사회 혼란 속에서도 지켜야 할 삶의 기준을 담은 작품입니다.',
    content: `안녕하세요, SN독학기숙학원입니다 😊

보기만 해도 수능 점수가 오르는 고전문학 시리즈 제12탄.
오늘은 조선 중기 문인 박선장이 지은 교훈 가사, 「오륜가(五倫歌)」를 소개합니다.

'오륜(五倫)'이란 유교 윤리의 핵심인 다섯 가지 인간관계를 말합니다.

부자유친(父子有親) – 부모와 자식 사이에는 인(仁)과 친애가 있어야 하며
군신유의(君臣有義) – 임금과 신하의 관계에는 의(義)가 있어야 하고
부부유별(夫婦有別) – 부부는 서로의 역할과 예를 지키며
장유유서(長幼有序) – 어른과 아이 사이에는 질서가 있으며
붕우유신(朋友有信) – 친구 간에는 믿음이 있어야 한다

박선장은 1612년(광해군 4년), 혼탁해지는 세태 속에서
올바른 질서와 인간관계의 회복이 필요하다고 느껴,
마을의 젊은 선비들에게 삶의 기준을 세워주기 위해 이 작품을 지었다고 전해집니다.

즉 「오륜가」는 단순한 '윤리 암송문'이 아니라,
사회가 혼란할수록 개인이 지켜야 할 삶의 기준을 되돌아보게 하는 작품입니다.
지금 시대에도 여전히 유효한, '품격 있는 관계의 조건'이 담겨 있습니다.`,
    category: 'SN Originals',
    tags: ['고전문학', '오륜가', '박선장', '교훈가사', '수능국어', '유교윤리'],
    author: 'SN Academy',
    date: '2025-10-27',
    readTime: '4',
    featured: true,
    featuredOrder: 4,
    published: true,
    thumbnail: '/images/thumbnail/Oryun-ga_thumbnail_a2_v2.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=G3ojQuQXMxE',
    url: '/originals/oryun-ga',
    type: 'special',
  },
  {
    id: 'chohanga',
    title:
      '이제 그만 끝내자 항우야 너네 애들 다 넘어왔단다 (고전문학 「초한가」)',
    excerpt:
      '우희(虞姬)와의 이별을 노래한 항우의 「초한가(楚漢歌)」. 초한전쟁의 마지막 밤, 사면초가에 갇힌 영웅 항우가 자신의 운명과 사랑하는 여인과의 이별을 노래한 비장미 넘치는 고전 시가입니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 제13탄. 오늘은 작자 미상의 판소리 「초한가」를 준비했습니다.

「초한가」는 고대 중국 초(楚)나라와 한(漢)나라가 천하를 두고 벌인 역사적 대결을 그린 작품으로, 특히 항우와 유방의 마지막 결전인 해하(垓下) 전투를 중심으로 한 이야기입니다. '사면초가(四面楚歌)'라는 사자성어로도 잘 알려져 있습니다.

<div class="my-8 rounded-2xl bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 border-l-4 border-slate-600 dark:border-slate-400">
  <div class="space-y-3 text-base leading-relaxed text-gray-800 dark:text-gray-200">
    <p class="font-semibold">"힘은 산을 뽑을 만하고, 기개는 세상을 덮을 만한데(力拔山兮氣蓋世)"</p>
    <p class="font-semibold">"때가 불리하니 오추마도 나아가지 못하는구나(時不利兮騅不逝)"</p>
    <p class="font-semibold">"오추마가 나아가지 못하니 어찌할 것인가(騅不逝兮可奈何)"</p>
    <p class="font-semibold">"우희여 우희여, 그대를 어찌할 것인가(虞兮虞兮奈若何)"</p>
  </div>
</div>

<p class="text-sm text-gray-600 dark:text-gray-400 italic -mt-4 mb-6">
  * 오추마(烏騅馬): 항우가 평생 타고 다닌 명마. 검은색 몸에 흰 갈기를 가진 말로, 항우와 함께 수많은 전투를 승리로 이끈 동반자였습니다.
</p>

항우는 천하를 호령하던 영웅이었습니다. 하지만 사면초가의 밤, 그는 자신의 힘으로도 바꿀 수 없는 '시운(時運)'의 무게를 절감합니다. 그리고 가장 사랑하는 여인 우희마저 지킬 수 없는 자신의 처지를 한탄합니다.

이 서사시를 판소리로 낸 것이 이번의 고전문학 초한가지요.

## 💡 영상 하이라이트

SN독학기숙학원이 제작한 이번 영상에서는 장량의 옥퉁소로 시작된 '초가(楚歌)'의 심리전 전략을 깊이 있게 다룹니다. 한나라가 초나라 병사들의 가장 약한 고리인 **가족과 고향**을 공략한 방법—백발의 부모님, 홀로 빈방 지키는 아내, 배고픈 어린 자식들의 모습을 생생하게 노래로 전하며 초나라 병사들의 마음을 무너뜨린 과정을 생생하게 보여줍니다.

작품의 핵심 주제는 **'개인의 용맹을 넘어선 천하 백성의 마음을 얻는 것'**이 진정한 리더십임을 강조합니다.

---

## About Chohanga (English)

**Chohanga (楚漢歌)** is a traditional Chinese epic poem about the historical conflict between the Chu (楚) and Han (漢) dynasties, particularly focusing on the final battle of Gaixia (垓下). This Chinese classic was later adapted into Korean pansori (traditional narrative musical performance), making it one of the few pansori works based on Chinese historical material.

This work centers on **Xiang Yu (項羽)**, the mighty warrior-king of Chu, who finds himself surrounded by enemy forces in a situation known as "**Simyeonchoga (四面楚歌)**" — literally "songs of Chu from all sides," meaning being surrounded by enemies with no escape.

### The Famous Verse

The most iconic part of this work is Xiang Yu's lament:

- **"My strength could uproot mountains, my spirit covered the world" (力拔山兮氣蓋世)**
- **"But fortune turned against me, even my beloved horse Zhui refuses to advance" (時不利兮騅不逝)**
- **"What can I do when my horse won't go forward?" (騅不逝兮可奈何)**
- **"Oh Yu Ji, Yu Ji, what shall I do with you?" (虞兮虞兮奈若何)**

### Themes

This pansori adaptation explores:

- **The weight of destiny (時運)** that even the mightiest hero cannot overcome

- **The tragedy of love** as Xiang Yu faces the reality that he cannot protect his beloved concubine Yu Ji (虞姬)

- **The humanization of a legendary hero** through his vulnerability and emotional depth

The Korean pansori version transforms this Chinese historical epic into a uniquely Korean musical narrative tradition, preserving the emotional core while adding the distinctive vocal techniques and dramatic expressions characteristic of pansori performance art.`,
    category: 'SN Originals',
    tags: ['고전문학', '초한가', '항우', '우희', '수능국어', '중국고전'],
    author: 'SN Academy',
    date: '2025-10-29',
    readTime: '4',
    featured: true,
    featuredOrder: 3,
    published: true,
    thumbnail: '/images/thumbnail/thumbnail_a4_chohanga.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=Wv6KFsP_V94',
    url: '/originals/chohanga',
    type: 'special',
  },
  {
    id: 'ai-study-method',
    title: 'AI에게 배우는 진짜 공부법',
    excerpt:
      'AI가 똑똑해진 비밀은 설계가 아니라 노출량이었습니다. 인간의 공부도 마찬가지입니다. SN독학기숙학원 대표 윤석기가 AI 학습 원리를 통해 발견한 진짜 공부법을 소개합니다.',
    content: `안녕하세요. SN독학기숙학원 대표 윤석기입니다.

오늘은 조금 조심스럽지만, 꼭 한번 글로 남겨보고 싶었던 주제 — **"공부하는 법"**에 대해 이야기해 보려 합니다.

공부법은 사람마다 다릅니다. 똑같은 책을 보고 똑같은 문제를 풀어도, 어떤 학생은 성장이 빠르고, 어떤 학생은 느립니다. 저 역시 오랫동안 수많은 학생을 지도하며 '정답 같은 공부법'은 없다는 사실을 잘 알고 있습니다.

하지만, 아이러니하게도 AI(인공지능) 덕분에 저는 오히려 '공부란 무엇인가'라는 질문에 조금 더 확실한 답을 얻게 되었습니다.

## AI는 어떻게 학습하는가?

잠시 공부 이야기로 가기 전에, AI 이야기를 해 보겠습니다. AI는 어떻게 이렇게 똑똑해졌을까요?

우리는 흔히 AI가 '천재 알고리즘' 때문에 뛰어나다고 생각합니다. 하지만 실제 발전 역사를 보면, AI가 똑똑해진 핵심 비밀은 **구조(설계)보다 노출량(학습량)**이었습니다.

쉽게 말해,
**"두뇌가 뛰어나서"가 아니라 "많이 보고 많이 배웠기 때문에"** 잘하게 된 것입니다.

예를 들어

- 단어 500개만 아는 사람과
- 단어 5만 개를 아는 사람은

대화 능력이 완전히 다르죠?

AI도 비슷합니다. 제가 AI 전문가는 아니지만, 제가 이해한 바로는 모델 안의 "파라미터(parameter)"라는 것은 일종의 '더 큰 그릇'과 같습니다. 더 많은 패턴과 경험을 담을 수 있는 용량이라고 볼 수 있습니다.

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-blue-800">
    <strong>파라미터가 많다</strong> = 더 복잡하고 많은 패턴을 학습해 저장할 수 있다<br>
    <strong>파라미터가 적다</strong> = 담을 수 있는 패턴이 제한적이다
  </p>
</div>

그래서 요즘 AI는 정교한 알고리즘을 더 다듬는 것보다, 그저 **"훨씬 더 많은 데이터"**를 집어넣는 방식으로 발전했습니다. 그래서 ChatGPT도 몇 천억, 몇 조 개의 파라미터를 가진 '초거대' 모델이 된 것이죠.

즉, **AI의 지능을 키운 것은 '설계'가 아니라 '노출량(학습량)'**이었습니다.

## 인간의 공부도 다르지 않습니다

AI는 설계도보다 **반복 노출(학습량)**이 실력을 키웁니다. 사람의 공부도 똑같습니다.

많은 학생이 "저는 공부 머리가 안 좋아서요" "방법을 몰라서 성적이 안 나옵니다"라고 말하지만, 실제로는 **'방법의 문제'가 아니라 '노출량의 부족'**인 경우가 훨씬 많습니다.

특히 수능은 이 특징이 더 강하게 나타납니다.

수능은 '깊은 이해'와 '패턴 숙련'이 결합되어야 하는 시험입니다. 물론 기본 개념과 원리를 모르면 문제를 풀 수 없습니다. 하지만 많은 학생이 "개념은 어느 정도 이해했는데 문제는 못 풀겠어요"라고 말하는 이유는, 바로 패턴 노출이 부족하기 때문입니다.

같은 개념과 유형에 10번 노출된 학생과 30번 노출된 학생은 이해력과 정확도, 그리고 '자동화된 풀이 속도'가 전혀 다릅니다.

<div class="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-green-800">
    <strong>실제 사례:</strong> 한 학생이 수학 킬러 문제를 처음 봤을 때 20분이 걸렸지만, 같은 유형을 15번 반복한 후에는 3분 만에 풀었습니다. 머리가 좋아진 게 아니라, 패턴이 몸에 각인된 것이죠.
  </p>
</div>

즉, 수능은 머리가 좋은 사람이 이기는 시험이 아니라, **같은 유형을 질릴 만큼 많이 본 사람이 체계적으로 이기는 시험**입니다.

이게 바로 상위권 학생들이 마지막 2~3개월에 '급상승'하는 이유이기도 합니다. 지능이 올라서가 아니라, 패턴이 임계점을 넘어서면서 뇌에 내재화되기 때문입니다.

<div class="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-amber-800">
    <strong>핵심 원리:</strong> 최소한 수능 공부는 똑똑해야 하는 게 아니라 충분히 많이 접하는 사람이 이기는 게임에 가깝습니다.
  </p>
</div>

## 그렇다면, 실전에서는 어떻게 적용할까?

결국 좋은 수능 공부법의 본질은 간단합니다.

**"생각보다 더 많이 반복하고, 잊을 때마다 다시 보고, 패턴이 체화될 때까지 풀어 보는 것."**

AI가 벡터를 통해 '패턴'을 내재화하듯, 우리 역시 지식을 몸에 각인시키는 과정이 필요합니다.

바꿔 말하면,

- 지금 당장 1차 이해는 완벽하지 않아도 괜찮습니다.
- 반복 노출이 쌓이면 어느 순간 '전이(transfer)'가 일어납니다.
- 그때 비로소 실력이 '튀어오르는 구간'이 나옵니다.

다만, 여기서 중요한 점이 있습니다. 무작정 반복하는 것이 아니라, **'능동적 회상(active recall)'과 '간격 반복'**이 동반되어야 진짜 내재화가 일어납니다. 그저 교재를 계속 읽기만 하는 것과, 스스로 문제를 풀며 기억을 꺼내 보는 것은 전혀 다른 학습입니다.

실제로 공부 잘하는 학생들의 공통점은 머리가 좋은 게 아니라, **반복 구간을 끝까지 버티는 사람들**입니다.

## 그렇다면 이 원리를 어떻게 실현할 것인가?

문제는 '알고 있다'와 '실행한다'는 완전히 다른 이야기라는 점입니다.

저는 SN에서 이 원리를 시스템으로 구현하려고 노력하고 있습니다. 반복이 '의지'가 아니라 '환경'으로 작동하도록 말이죠.

<div class="bg-gray-50 border-l-4 border-gray-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-gray-800">
    <strong>SN의 시스템적 접근:</strong><br>
    • 하루 14시간 이상의 순수 학습량<br>
    • 일정이 흐트러지지 않는 몰입형 구조<br>
    • 반복과 회독이 자동으로 누적되는 루틴 설계
  </p>
</div>

즉, "공부 시간이 많다"가 아니라 **"패턴 노출량이 압도적으로 빠르게 쌓인다"**는 점에서 수능 구조와 가장 잘 맞아떨어지는 환경을 만들려고 합니다.

## 마무리

AI가 보여준 학습의 원리처럼, 우리도 설계가 아니라 노출량, 지능이 아니라 반복과 내재화로 성장하고 성공할 수 있습니다.

다음 글에서는 이 원리를 실제 공부 루틴으로 어떻게 옮기는지, SN의 14시간 환경 속에서 반복이 '의지'가 아니라 '시스템'으로 작동하는 방법을 구체적으로 풀어보겠습니다.

그 외에도 "반복을 어떻게 설계할 것인가", "양을 늘리되 질도 떨어지지 않게 하는 법", "지겨움·슬럼프를 관리하는 법" 같은 현실적인 방법을 하나씩 풀어 보려고 합니다.

<div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
  <p class="font-medium text-blue-800">
    <strong>다음 글 예고:</strong><br>
    • 반복이 시스템으로 작동하는 구체적 방법<br>
    • 양과 질의 균형을 맞추는 전략<br>
    • 학습 슬럼프 극복법
  </p>
</div>

읽어 주셔서 감사합니다.

---

<div class="mt-8 rounded-2xl bg-gray-50 dark:bg-gray-800 p-6 text-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
  <p class="mb-2 font-medium text-gray-900 dark:text-gray-100">작성자</p>
  <p>SN독학기숙학원 대표 윤석기</p>
</div>`,
    category: 'columns',
    tags: ['공부법', 'AI', '학습법', '반복학습', '수능전략'],
    author: 'SN독학기숙학원 대표 윤석기',
    date: '2025-10-27',
    readTime: '4',
    featured: true,
    featuredOrder: 1,
    published: true,
    thumbnail: '/images/thumbnail/howtostudythumbnail.gif',
    url: '/columns/ai-study-method',
  },
];

// 🔗 개발 환경에서 노션 포스트 자동 병합 (임시 비활성화)
function getMergedPosts(): Post[] {
  // 노션 포스트 비활성화 - 디버깅 중
  return allPosts;

  // if (process.env.NODE_ENV !== 'development') {
  //   return allPosts;
  // }

  // try {
  //   const manualPostIds = new Set(allPosts.map(p => p.id));
  //   const uniqueNotionPosts = notionPosts.filter(
  //     (p: Post) => !manualPostIds.has(p.id)
  //   );
  //   const merged = [...allPosts, ...uniqueNotionPosts]
  //     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  //   return merged;
  // } catch (error) {
  //   return allPosts;
  // }
}

// getAllPosts: 개발 환경에서는 노션 포스트 포함, 프로덕션에서는 수동 포스트만
export function getAllPosts(): Post[] {
  return getMergedPosts();
}

// 헬퍼 함수들
export function getLatestPosts(limit: number = 5): Post[] {
  const mergedPosts = getMergedPosts();
  return mergedPosts
    .filter(post => post.published) // published 된 글만 가져오기
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPosts(): Post[] {
  const mergedPosts = getMergedPosts();
  return mergedPosts.filter(post => post.published);
}

export function getFeaturedPosts(): Post[] {
  const mergedPosts = getMergedPosts();
  const featuredPosts = mergedPosts.filter(
    post => post.featured && post.published
  );

  // featuredOrder 기준으로 정렬 (낮을수록 먼저, 없으면 날짜 기준)
  return featuredPosts.sort((a, b) => {
    // featuredOrder가 있는 경우 우선 정렬
    if (a.featuredOrder !== undefined && b.featuredOrder !== undefined) {
      return a.featuredOrder - b.featuredOrder;
    }
    if (a.featuredOrder !== undefined) return -1;
    if (b.featuredOrder !== undefined) return 1;

    // featuredOrder가 없으면 날짜 기준 정렬 (최신순)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostById(id: string): Post | undefined {
  const mergedPosts = getMergedPosts();
  // URL slug 또는 ID로 검색 (URL 우선)
  return mergedPosts.find(post => {
    if (!post.published) return false;
    // URL의 마지막 부분과 매칭
    const urlSlug = post.url.split('/').pop();
    return urlSlug === id || post.id === id;
  });
}

export function getPostsByCategory(category: string): Post[] {
  const mergedPosts = getMergedPosts();
  return mergedPosts
    .filter(post => post.category === category && post.published) // published 된 글만 가져오기
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
}

export function searchPosts(query: string): Post[] {
  const mergedPosts = getMergedPosts();
  const lowercaseQuery = query.toLowerCase();
  return mergedPosts
    .filter(
      post =>
        post.published && // published 된 글만 검색
        (post.title.toLowerCase().includes(lowercaseQuery) ||
          post.excerpt.toLowerCase().includes(lowercaseQuery) ||
          post.content.toLowerCase().includes(lowercaseQuery) ||
          post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
}

export function getPaginatedPosts(
  page: number = 1,
  limit: number = 6
): { posts: Post[]; totalPages: number; currentPage: number } {
  const mergedPosts = getMergedPosts();
  const publishedPosts = mergedPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
  const totalPosts = publishedPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const posts = publishedPosts.slice(startIndex, endIndex);

  return {
    posts,
    totalPages,
    currentPage: page,
  };
}

// 🔗 노션 포스트와 수동 포스트 통합
// 노션에서 가져온 포스트를 기존 포스트와 합칩니다
// 개발 환경에서만 노션 포스트를 보여줍니다
export function getAllPostsWithNotion(): Post[] {
  // 개발 환경이 아니면 기존 포스트만 반환
  if (process.env.NODE_ENV !== 'development') {
    return allPosts;
  }

  try {
    // 중복 제거 (ID 기준)
    const manualPostIds = new Set(allPosts.map(p => p.id));
    const uniqueNotionPosts = notionPosts.filter(
      (p: Post) => !manualPostIds.has(p.id)
    );

    console.log(`[DEV] 노션 포스트 ${uniqueNotionPosts.length}개 로드됨`);

    // 합치고 날짜순 정렬
    return [...allPosts, ...uniqueNotionPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    // notion-posts.ts가 없거나 에러가 발생하면 기존 포스트만 반환
    console.warn('[DEV] 노션 포스트를 불러올 수 없습니다:', error);
    return allPosts;
  }
}
