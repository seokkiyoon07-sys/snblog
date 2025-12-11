# SN Originals 고전문학 원문+현대어 형식 업데이트

**업데이트 날짜**: 2025-12-06

---

## 팀 공유용 요약

> 고전문학 작품들의 원문+현대어 해설 UI를 개선했습니다.
>
> **주요 변경사항:**
> 1. 원문을 클릭하면 현대어 해석이 보이는 **Click-to-Reveal (blur) 방식** 적용
> 2. **원문 전체 보기 / 현대어 해석 전체 보기** 섹션 추가 (PDF 인쇄 기능 포함)
> 3. 옛한글 폰트(`NanumBarunGothic YetHangul`) 자동 적용
>
> 새로운 형식 가이드는 `docs/classic-literature-format.md` 참고해주세요.

---

## 업데이트된 작품 목록

| 작품명 | URL | 섹션 구성 |
|--------|-----|-----------|
| 사미인곡 | `/originals/samieungok` | 6연 (서사~결사) |
| 강호사시가 | `/originals/ganghosasiga` | 4수 (춘사/하사/추사/동사) |
| 면앙정가 | `/originals/myeonangjungga` | 8연 (서사, 본사1~6, 결사) |
| 가시리 | `/originals/gasiri` | 4연 (제1연~제4연) |
| 상춘곡 | `/originals/sangchungok` | 6연 (서사, 본사1~4, 결사) |
| 매화사 | `/originals/maehwasa` | 8수 (제1수~제8수) |

---

## 새로운 UI 구조

### 1. Click-to-Reveal 섹션 (blur 효과)
- 원문이 보이고, 현대어 해석은 blur 처리
- 클릭하면 현대어 해석이 드러남
- `details.group` 클래스 사용

### 2. 원문 전체 보기 (PDF 인쇄 가능)
- blur 효과 없음 (일반 `details`)
- PDF 인쇄 버튼 포함
- `font-yethangul` 클래스로 옛한글 폰트 적용

### 3. 현대어 해석 전체 보기 (PDF 인쇄 가능)
- blur 효과 없음
- PDF 인쇄 버튼 포함

---

## 기타 변경사항

### SN Originals 페이지
- **구독하기 버튼**: 빨간색 → 회색 계열로 변경

### OriginalsTabs 카드뷰/리스트뷰 스타일 개선

#### 특별 배지 시스템 추가
| 배지 | 대상 작품 | 색상 |
|------|-----------|------|
| 👑 정철 트릴로지 | 관동별곡, 사미인곡, 속미인곡 | Blue → Indigo 그라데이션 |
| 🎯 2024 수능 출제 | 갑민가 | Violet → Purple 그라데이션 |
| 🎯 2025 수능 출제 | 북새곡 | Rose → Pink 그라데이션 |
| 🔥 3만뷰 | SN고전문학 몰아보기 | Emerald → Teal 그라데이션 |

#### 카드뷰 스타일
- 특별 작품에 **컬러 테두리(border)** 및 **ring 효과** 적용
  - 정철 트릴로지: `border-blue-400` + `ring-blue-200`
  - 2025 수능 출제: `border-rose-400` + `ring-rose-200`
  - 2024 수능 출제: `border-violet-400` + `ring-violet-200`
  - 3만뷰: `border-emerald-400` + `ring-emerald-200`
- 썸네일 위에 배지 오버레이 표시
- 제목 호버 시 해당 색상으로 변경

#### 리스트뷰(게시판뷰) 스타일
- 특별 작품에 **왼쪽 컬러 보더(`border-l-4`)** 적용
  - 정철 트릴로지: `border-l-blue-400`
  - 2025 수능 출제: `border-l-rose-400`
  - 2024 수능 출제: `border-l-violet-400`
  - 3만뷰: `border-l-emerald-400`
- 제목 위에 배지 표시
- 제목 호버 시 그라데이션 효과 + 언더라인 애니메이션

### CSS 추가 (globals.css)
- `details.group` 토글 화살표 숨김
- `details.group summary` bold 제거
- `.font-yethangul` 클래스 추가

---

## 관련 파일

- `docs/classic-literature-format.md` - 형식 가이드 문서
- `src/data/posts.ts` - 포스트 콘텐츠
- `src/app/globals.css` - 스타일
- `src/components/ArticleContent.tsx` - blur 효과 로직
- `src/components/OriginalsTabs.tsx` - 카드뷰/리스트뷰 스타일 및 배지

---

## 향후 작업

아직 업데이트가 필요한 작품들:
- 관동별곡 (`gwandong-byeolgok`)
- 속미인곡 (`sokmieungok`)
- 찬기파랑가 (`changiparangga`)
- 제망매가 (`jemangmaega`)
- 청산별곡 (`cheongsanbyeolgok`)
- 기타 2026 수능대비 작품들

새 작품 추가 시 `docs/classic-literature-format.md` 가이드를 참고해주세요.
