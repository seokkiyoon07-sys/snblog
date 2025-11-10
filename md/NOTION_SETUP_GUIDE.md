# 노션 데이터베이스 설정 가이드

## 🎯 목표

노션에서 블로그 글을 관리하고 자동으로 동기화하기

## 📋 1단계: 데이터베이스 생성

### 새 페이지 만들기

1. 노션에서 새 페이지 생성
2. 이름: "블로그 포스트" (또는 원하는 이름)

### 데이터베이스 추가

1. `/table` 입력 → "Table - Inline" 선택
2. 또는 `/database` 입력 → "Table view" 선택

## 📊 2단계: 속성(Properties) 설정

데이터베이스에 다음 속성들을 추가하세요:

| 속성 이름 | 타입         | 필수 | 설명                                                       |
| --------- | ------------ | ---- | ---------------------------------------------------------- |
| 제목      | Title        | ✅   | 기본 제공됨                                                |
| 카테고리  | Select       | ✅   | originals, startup, columns, problems, reviews, admissions |
| 태그      | Multi-select | ❌   | 자유롭게 태그 추가                                         |
| 요약      | Text         | ❌   | 글 요약 (미리보기에 표시)                                  |
| 발행      | Checkbox     | ✅   | 체크된 글만 블로그에 표시                                  |
| 추천      | Checkbox     | ❌   | 메인 페이지 추천글 표시                                    |
| 날짜      | Date         | ✅   | 발행 날짜                                                  |

### 카테고리 옵션 설정

"카테고리" Select에 다음 옵션 추가:

- originals (SN Originals)
- startup (창업 관련)
- columns (칼럼)
- problems (문제 풀이)
- reviews (리뷰)
- admissions (입시 정보)

## 🔗 3단계: Integration 연결

### Integration 추가

1. 데이터베이스 우측 상단 `...` 클릭
2. "Add connections" 클릭
3. "SN Blog Sync" (또는 만든 Integration 이름) 선택

### 권한 확인

- ✅ Read content
- ✅ Read comments
- ✅ No user information

## 📝 4단계: 데이터베이스 ID 가져오기

### 방법 1: URL에서 복사

1. 데이터베이스 페이지 열기
2. URL 확인:
   ```
   https://www.notion.so/workspace/abc123def456?v=...
                                   ^^^^^^^^^^^^
                                   이 부분이 ID
   ```
3. 32자리 ID 복사 (하이픈 제거)

### 방법 2: "Open as page"로 열기

1. 데이터베이스에서 `...` → "Open as page"
2. 새 URL에서 ID 복사

## ✍️ 5단계: 블로그 글 작성

### 새 행(페이지) 추가

1. 데이터베이스에서 "+ New" 클릭
2. 제목 입력
3. 속성 설정:
   - 카테고리 선택
   - 태그 추가
   - 요약 작성
   - **발행 체크박스 체크** ✅
   - 날짜 선택

### 본문 작성

페이지를 열어서 본문 작성:

- 일반 텍스트
- 제목 (H1, H2, H3)
- 이미지 (자동 다운로드됨)
- 목록 (Bulleted, Numbered)
- 인용구 (Quote)
- 코드 블록 (Code)
- Callout (💡 자동 변환)

## 🚀 6단계: 동기화 실행

### 터미널에서 실행

```bash
cd ~/code/snblog
npm run sync:notion
```

### 성공 시 출력

```
🚀 노션 동기화 시작...
📡 노션 데이터베이스에서 포스트를 가져오는 중...
✅ 3개의 포스트를 가져왔습니다.

📝 가져온 포스트 목록:
   1. 첫 번째 블로그 글
   2. 두 번째 블로그 글
   3. 세 번째 블로그 글

✅ 동기화 완료!
```

## 🔄 7단계: 블로그 확인

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 열어서 확인

## ⚠️ 문제 해결

### "페이지입니다, 데이터베이스가 아닙니다" 에러

- 개별 페이지 ID가 아닌 데이터베이스 ID를 사용하세요
- 데이터베이스 = 여러 페이지를 담은 테이블/갤러리

### "발행된 포스트가 없습니다"

1. 데이터베이스에 "발행" 체크박스 속성 추가
2. 페이지에서 "발행" 체크
3. Integration이 연결되어 있는지 확인

### "권한이 없습니다" 에러

1. 데이터베이스에서 "Add connections" 클릭
2. Integration 연결
3. NOTION_TOKEN 확인

## 📌 예시 데이터베이스 구조

```
블로그 포스트 (Database)
├─ 📄 SN Originals 소개
│  ├─ 카테고리: originals
│  ├─ 발행: ✅
│  └─ 날짜: 2025-10-05
│
├─ 📄 창업 아이디어 정리
│  ├─ 카테고리: startup
│  ├─ 발행: ✅
│  └─ 날짜: 2025-10-04
│
└─ 📄 임시 저장 (발행 안 함)
   ├─ 카테고리: columns
   ├─ 발행: ❌
   └─ 날짜: 2025-10-03
```

## ✅ 완료 체크리스트

- [ ] 노션 데이터베이스 생성
- [ ] 필수 속성 추가 (제목, 카테고리, 발행, 날짜)
- [ ] Integration 연결
- [ ] 데이터베이스 ID 복사
- [ ] .env.local에 NOTION_DATABASE_ID 설정
- [ ] 테스트 글 작성 + 발행 체크
- [ ] npm run sync:notion 실행
- [ ] npm run dev로 확인

---

이 가이드대로 설정하고 데이터베이스 ID를 알려주세요!
