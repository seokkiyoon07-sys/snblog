# AI 수능 출제 · 출제 로그 템플릿

과목별로 하루 1글. 글 하나 = 아래 두 가지를 추가하면 끝.

1. `src/data/post-records.ts`의 `allPosts` 맨 위에 레코드 추가
2. 본문 HTML을 `content/ai-problem/{id}.html`로 저장
3. (선택) PDF를 `public/pdfs/ai-problem/{date}/{subject}.pdf`에 저장

`/problems` 허브의 "오늘의 출제", "지난 출제 로그", 누적 지표는 레코드만 추가하면 자동으로 갱신된다.

---

## 1. 레코드

```ts
{
  id: '20261022-math-cubic-tangent',        // 주소: /problems/{id}
  title: '삼차함수 접선 문제, AI는 왜 조건 하나를 빠뜨렸을까 | AI 출제 로그 수학',
  excerpt: '오늘의 수학 문항과 AI 초안에서 사람이 바로잡은 부분을 정리했습니다.',
  category: 'ai-problem',
  problemSubject: 'math',                    // korean | math | english | integrated-social | integrated-science
  // problemContentType 생략 시 problemLog가 있으면 '출제 로그'로 분류
  tags: ['AI출제', '수학', '미분', 'SNarGEN', 'SN독학기숙학원'],
  author: 'SN독학기숙학원',
  date: '2026-10-22',
  readTime: '4',
  featured: false,
  published: true,
  thumbnail: '/images/thumbnail/...',        // 선택
  url: '/problems/20261022-math-cubic-tangent',
  problemLog: {
    model: 'SNarGEN + Claude',
    promptSummary: '평가원 미분 단원 출제 원칙 + 삼차함수 접선 조건 2개 이상 결합 요청',
    draftCount: 3,                           // AI 초안 생성 횟수
    revisionCount: 2,                        // 사람이 수정한 곳 (0 = 초안 그대로 채택)
    errorTypes: ['math', 'wording'],         // fact | math | choice | difficulty | wording
    pdfUrl: '/pdfs/ai-problem/2026-10-22/math.pdf',
    answerUrl: '/pdfs/ai-problem/2026-10-22/math-answer.pdf',
  },
},
```

칼럼·이슈·개발기는 `problemLog` 없이 `problemContentType: 'column' | 'issue' | 'devlog'`를 지정한다.

## 2. 본문 HTML 뼈대

```html
<h2>오늘의 문항</h2>
<p>
  <img
    src="/images/ai-problem/2026-10-22/math.png"
    alt="2026년 10월 22일 AI 출제 수학 문항"
  />
</p>

<h2>출제 의도</h2>
<p>어떤 개념을, 어떤 함정으로 묻고 싶었는지.</p>

<h2>AI 작업 과정</h2>
<p>프롬프트 요약과 초안 생성 과정. (프롬프트 전문은 공개하지 않음)</p>

<h2>AI 초안 → 최종본</h2>
<p>사람이 바로잡은 부분과 그 이유. 가능하면 초안/최종본을 나란히.</p>

<h2>오늘 배운 점</h2>
<p>AI 출제에 대해 새로 알게 된 것, 다음에 바꿀 것.</p>
```

PDF 버튼과 출제 기록(모델·수정 횟수·오류 유형)은 본문 아래에 자동으로 붙으므로 본문에 따로 쓰지 않아도 된다.
