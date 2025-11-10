# 노션 스타일 컴포넌트 사용 가이드

블로그 포스트에서 노션처럼 아름답고 기능적인 컴포넌트를 사용할 수 있습니다.

## 📦 설치된 컴포넌트

- **CalloutBox** - 강조 박스 (💡 정보, ⚠️ 경고, ✅ 성공, ❌ 에러)
- **Toggle** - 접기/펼치기 아코디언
- **CodeBlock** - 코드 블록 (복사 버튼 포함)
- **Quote** - 인용구
- **Table** - 테이블
- **Divider** - 구분선
- **Columns** - 다단 레이아웃

---

## 🎨 사용 방법

### 1. CalloutBox - 강조 박스

포스트의 `content` 필드에서 직접 JSX 컴포넌트로 사용할 수 있습니다.

\`\`\`typescript
// src/data/posts.ts
content: \`

# 제목

일반 마크다운 텍스트입니다.

<CalloutBox type="info">
💡 **팁**: 이것은 정보성 메시지입니다.
</CalloutBox>

<CalloutBox type="warning">
⚠️ **주의**: 이 작업은 신중하게 진행하세요.
</CalloutBox>

<CalloutBox type="success">
✅ **성공**: 작업이 완료되었습니다!
</CalloutBox>

<CalloutBox type="error">
❌ **에러**: 문제가 발생했습니다.
</CalloutBox>

<CalloutBox type="note" emoji="📚">
커스텀 이모지도 사용할 수 있습니다.
</CalloutBox>
\`
\`\`\`

**결과:**

- 파란색 배경: `type="info"` (💡)
- 노란색 배경: `type="warning"` (⚠️)
- 초록색 배경: `type="success"` (✅)
- 빨간색 배경: `type="error"` (❌)
- 회색 배경: `type="note"` (📝)

---

### 2. Toggle - 접기/펼치기

긴 내용을 숨기고 클릭 시 펼칠 수 있습니다.

\`\`\`typescript
content: \`
<Toggle title="자세히 보기">

여기에 숨겨진 내용을 작성합니다.

- 리스트 항목 1
- 리스트 항목 2
- 리스트 항목 3

</Toggle>

<Toggle title="FAQ: 이 기능은 어떻게 사용하나요?" defaultOpen={true}>
기본적으로 열려있는 Toggle입니다.
</Toggle>
\`
\`\`\`

---

### 3. CodeBlock - 코드 블록

복사 버튼이 있는 아름다운 코드 블록입니다.

\`\`\`typescript
content: \`
<CodeBlock
language="typescript"
filename="example.ts"
code={\\\`
const hello = (name: string) => {
console.log(\\\`Hello, \\\${name}!\\\`);
};

hello('World');
\\\`}
/>

<CodeBlock
language="python"
code={\\\`
def fibonacci(n):
if n <= 1:
return n
return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\\\`}
/>
\`
\`\`\`

**Props:**

- `code`: 코드 내용 (필수)
- `language`: 언어 표시 (기본값: 'javascript')
- `filename`: 파일명 표시 (선택)

---

### 4. Quote - 인용구

출처와 저자를 표시할 수 있는 인용구입니다.

\`\`\`typescript
content: \`
<Quote>
단순한 인용구입니다.
</Quote>

<Quote author="스티브 잡스">
Stay hungry, stay foolish.
</Quote>

<Quote author="알베르트 아인슈타인" source="1955년 인터뷰">
상상력은 지식보다 중요하다.
</Quote>
\`
\`\`\`

---

### 5. Table - 테이블

데이터를 표로 정리할 수 있습니다.

\`\`\`typescript
content: \`

<Table
  caption="2025년 1분기 실적"
  headers={["항목", "목표", "실적", "달성률"]}
  rows={[
    ["매출", "100억", "120억", "120%"],
    ["이익", "20억", "25억", "125%"],
    ["고객", "1000명", "1200명", "120%"]
  ]}
/>
\`
\`\`\`

**Props:**

- `headers`: 테이블 헤더 배열
- `rows`: 데이터 행 배열 (2차원 배열)
- `caption`: 테이블 설명 (선택)

---

### 6. Divider - 구분선

섹션을 나누는 구분선입니다.

\`\`\`typescript
content: \`
첫 번째 섹션입니다.

<Divider />

두 번째 섹션입니다.

<Divider type="dashed" spacing="lg" />

세 번째 섹션입니다.

<Divider type="dotted" spacing="sm" />
\`
\`\`\`

**Props:**

- `type`: 'solid' | 'dashed' | 'dotted' (기본값: 'solid')
- `spacing`: 'sm' | 'md' | 'lg' (기본값: 'md')

---

### 7. Columns - 다단 레이아웃

여러 개의 열로 콘텐츠를 배치할 수 있습니다.

\`\`\`typescript
content: \`
<Columns count={2} gap="md">
<Column> ### 왼쪽 칼럼

    여기에 내용을 작성합니다.

  </Column>

  <Column>
    ### 오른쪽 칼럼

    여기에 내용을 작성합니다.

  </Column>
</Columns>

<Columns count={3} gap="lg">
  <Column>첫 번째</Column>
  <Column>두 번째</Column>
  <Column>세 번째</Column>
</Columns>
\`
\`\`\`

**Props:**

- `count`: 2 | 3 (기본값: 2)
- `gap`: 'sm' | 'md' | 'lg' (기본값: 'md')

---

## 📝 실전 예시

### 블로그 포스트에서 사용하기

\`\`\`typescript
// src/data/posts.ts
{
id: 'notion-style-post',
title: '노션 스타일 포스트 예시',
excerpt: '노션 컴포넌트를 활용한 아름다운 포스트',
content: \`

# 노션 스타일 포스트

안녕하세요! 이 포스트는 노션 스타일 컴포넌트를 사용합니다.

<CalloutBox type="info">
💡 **시작하기 전에**: 이 가이드를 끝까지 읽어주세요!
</CalloutBox>

## 주요 기능

<Columns count={2}>
  <Column>
    ### 강점
    - 아름다운 디자인
    - 사용하기 쉬움
    - 반응형 지원
  </Column>

  <Column>
    ### 활용처
    - 블로그 포스팅
    - 문서 작성
    - 튜토리얼 제작
  </Column>
</Columns>

<Divider />

## 코드 예시

<CodeBlock
language="typescript"
filename="hello.ts"
code={\\\`
const greet = (name: string) => {
console.log(\\\`안녕하세요, \\\${name}님!\\\`);
};
\\\`}
/>

<Toggle title="더 많은 예시 보기">

여기에 추가적인 예시 코드를 넣을 수 있습니다.

</Toggle>

<Divider type="dashed" />

## 성능 비교

<Table
  headers={["도구", "속도", "사용성", "추천도"]}
  rows={[
    ["Notion", "보통", "우수", "⭐⭐⭐⭐⭐"],
    ["Markdown", "빠름", "보통", "⭐⭐⭐⭐"],
    ["Word", "느림", "낮음", "⭐⭐"]
  ]}
/>

<CalloutBox type="success">
✅ **결론**: 노션 스타일이 가장 균형잡혀 있습니다!
</CalloutBox>

<Quote author="개발자" source="2025">
좋은 문서는 좋은 도구에서 나온다.
</Quote>
\`,
  category: 'columns',
  tags: ['노션', '컴포넌트', '가이드'],
  author: 'SN Academy',
  date: '2025-10-05',
  readTime: '5',
  featured: false,
  published: true,
  url: '/columns/notion-style-post'
}
\`\`\`

---

## ⚠️ 주의사항

### 1. JSX 문법 사용

- 컴포넌트는 `<ComponentName>` 형식으로 사용
- 자식 요소가 없으면 `<Divider />` 처럼 self-closing

### 2. Props 전달

- 문자열: `type="info"`
- 숫자: `count={2}`
- 불린: `defaultOpen={true}`
- 배열/객체: `rows={[...]}`

### 3. 템플릿 리터럴 이스케이프

CodeBlock에서 코드를 작성할 때는 백틱을 이스케이프해야 합니다:

\`\`\`typescript
code={\\\`
const text = \\\`Hello\\\`; // ← 백틱 3개 사용
\\\`}
\`\`\`

### 4. 마크다운과 혼용

일반 마크다운 문법과 자유롭게 섞어 사용할 수 있습니다:

\`\`\`markdown

# 제목

일반 텍스트

<CalloutBox type="info">
컴포넌트 내부에서도 **마크다운** 사용 가능!
</CalloutBox>

- 리스트
- 항목들
  \`\`\`

---

## 🎯 디자인 철학

모든 컴포넌트는:

- ✅ **다크모드 지원**: 자동으로 다크모드 적용
- ✅ **반응형**: 모바일/태블릿/데스크톱 모두 대응
- ✅ **접근성**: 스크린 리더 지원
- ✅ **성능**: 최적화된 렌더링

---

## 📚 다음 단계

1. `src/data/posts.ts`에서 기존 포스트 수정
2. 노션 컴포넌트 추가
3. `npm run dev`로 미리보기
4. `npm run build`로 프로덕션 빌드
5. 배포!

<CalloutBox type="success" emoji="🚀">
이제 노션처럼 아름다운 블로그 포스트를 작성할 수 있습니다!
</CalloutBox>
