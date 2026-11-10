# 수능 기출 해설 업로드 가이드

평가원·교육청 기출 지문/문항 해설 글을 올리는 규칙. 예시: `possible-worlds` (2019 수능 국어 독서 39~42번).

## 1. 슬러그

`{학년도}-{시험}-{지문·주제 영문}` 형식, 소문자·하이픈.

| 시험 | 시험 값 | 예시 |
|---|---|---|
| 수능 | `suneung` | `2019-suneung-possible-worlds` |
| 6월 모의평가 | `june` | `2027-june-korean-...` |
| 9월 모의평가 | `september` | `2027-september-...` |
| 교육청 학력평가 | `education-office` | `2026-education-office-...` |

- 이미 발행된 `possible-worlds`는 URL 유지(검색 노출 보호). 새 글부터 이 규칙 적용.
- 기존 `/problem-download/...` 글도 옮기지 않는다.

## 2. 파일 위치

| 항목 | 경로 |
|---|---|
| 본문 | `content/korean-exam-analysis/{slug}.html` |
| 이미지 | `public/images/problems/{slug}/` (`thumbnail.jpg`, `exam-p{쪽}.png`, `cards/01.png`…) |
| 카드뉴스 원본 HTML | `content/drafts/cards/{slug}.html` (1080×1350 `section.card#c1…`) |
| 카드뉴스 PNG | `public/images/problems/{slug}/cards/01.png…` — 원본에서 `#cN`으로 한 장씩 캡처 |
| 카드뉴스 등록 | `src/data/card-news.ts`에 `{slug}` 키로 추가 (글 상단 캐러셀) |
| 메타데이터 | `src/data/post-records.ts` |
| URL | `/problems/{slug}` (자동 생성) |

## 3. 메타데이터

```ts
{
  id: '{slug}',
  title: '2019 수능 국어 「가능세계」 쉽게 읽기: ...',
  excerpt: '...',
  category: 'korean-exam-analysis',
  problemContentType: 'solution',   // 기출 해설은 항상 solution
  problemSubject: 'korean',         // korean | math | english | ...
  exam: {
    year: 2019,                     // 학년도 (시행 연도 아님)
    type: 'suneung',                // suneung | june | september | education-office
    area: '독서',                   // 독서 · 문학 · 언어와 매체 · 수학Ⅰ …
    questions: '39~42',
    passage: '가능세계',            // 지문·작품 제목 (선택)
  },
  tags: [...],
  author: 'SN독학기숙학원',
  date: 'YYYY-MM-DD',
  readTime: '8',
  featured: false,
  published: true,
  thumbnail: '/images/problems/{slug}/thumbnail.jpg',
  url: '/problems/{slug}',
}
```

## 4. 유형 구분

- `solution`: 특정 기출 지문·문항을 푸는 글 (`exam` 필수)
- `reading`: 특정 문항에 묶이지 않는 개념 읽기·연재
- `column`: 의견·방법론 글

## 5. 제목 규칙

`{학년도} {시험} {과목} 「{지문}」 {핵심 문구}: {키워드}` — 검색어(지문명, "수능 국어", 개념어)를 앞쪽에 둔다.
