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
