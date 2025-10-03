# 📝 노션 → 블로그 자동 동기화 설정 가이드

## 🚀 개요

노션에서 글을 작성하면 자동으로 블로그에 푸시되는 시스템입니다.

## 📋 설정 단계

### 1. 노션 데이터베이스 생성

1. **새 페이지 생성**: 노션에서 "새 페이지" 생성
2. **데이터베이스 추가**: `/database` 입력하여 데이터베이스 생성
3. **속성 설정**:
   ```
   - Title (제목): Title
   - Excerpt (요약): Text
   - Category (카테고리): Select (originals, startup, columns, problems, reviews, admissions)
   - Tags (태그): Multi-select
   - Author (작성자): Text
   - ReadTime (읽기시간): Number
   - Featured (추천글): Checkbox
   - Thumbnail (썸네일): URL
   - Status (상태): Select (Draft, Published)
   - Created (생성일): Created time
   ```

### 2. 노션 API 설정

1. **Integration 생성**:
   - [notion.so/my-integrations](https://notion.so/my-integrations) 접속
   - "New integration" 클릭
   - 이름: "SN Academy Blog Sync"
   - 워크스페이스 선택

2. **API 토큰 복사**: 생성된 Internal Integration Token 복사

3. **데이터베이스 권한 부여**:
   - 노션 데이터베이스 페이지에서 "Share" 클릭
   - "Add people, emails, groups, or integrations" 클릭
   - 생성한 Integration 선택

4. **데이터베이스 ID 복사**:
   - 데이터베이스 URL에서 ID 부분 복사
   - `https://notion.so/workspace/데이터베이스ID?v=...`

### 3. GitHub Secrets 설정

GitHub 저장소 → Settings → Secrets and variables → Actions에서 추가:

```
NOTION_TOKEN: 노션_Integration_Token
NOTION_DATABASE_ID: 노션_데이터베이스_ID
```

### 4. 워크플로우 활성화

- `.github/workflows/notion-sync.yml` 파일이 자동으로 실행됩니다
- 매 30분마다 노션을 확인하여 새 글을 동기화합니다
- 수동 실행도 가능합니다 (Actions 탭에서 "Run workflow" 클릭)

## 📝 사용 방법

### 1. 노션에서 글 작성

1. **새 페이지 생성**: 데이터베이스에 새 페이지 추가
2. **속성 입력**:
   - Title: 블로그 제목
   - Category: 카테고리 선택
   - Tags: 태그 추가
   - Status: "Published"로 설정
   - 기타 속성들 입력

3. **내용 작성**: 마크다운 형식으로 내용 작성

### 2. 자동 동기화

- Status가 "Published"인 글만 동기화됩니다
- 30분 이내에 자동으로 블로그에 반영됩니다
- 잔디/슬랙으로 알림이 전송됩니다

## 🔧 고급 설정

### 수동 동기화

```bash
# 로컬에서 수동 실행
NOTION_TOKEN=your_token NOTION_DATABASE_ID=your_db_id node scripts/notion-sync.js
```

### 동기화 주기 변경

`.github/workflows/notion-sync.yml`에서 cron 설정 수정:

```yaml
schedule:
  - cron: '*/10 * * * *'  # 10분마다
  - cron: '0 */1 * * *'   # 1시간마다
  - cron: '0 0 * * *'     # 매일 자정
```

### 필터링 설정

`scripts/notion-sync.js`에서 필터 조건 수정:

```javascript
filter: {
  and: [
    {
      property: 'Status',
      select: { equals: 'Published' }
    },
    {
      property: 'Category',
      select: { equals: 'SN Originals' }
    }
  ]
}
```

## 🎯 지원되는 노션 블록

- **텍스트**: Paragraph, Heading 1-3
- **목록**: Bulleted list, Numbered list
- **코드**: Code blocks
- **인용문**: Quote
- **이미지**: External images
- **구분선**: Divider

## ⚠️ 주의사항

1. **마크다운 변환**: 노션의 일부 기능은 마크다운으로 완벽 변환되지 않을 수 있습니다
2. **이미지**: 외부 이미지만 지원됩니다 (노션 내부 이미지는 변환되지 않음)
3. **권한**: Integration에 데이터베이스 읽기 권한이 필요합니다
4. **API 제한**: 노션 API는 분당 3회 요청 제한이 있습니다

## 🚨 문제 해결

### 동기화가 안 될 때

1. **토큰 확인**: NOTION_TOKEN이 올바른지 확인
2. **데이터베이스 ID 확인**: NOTION_DATABASE_ID가 올바른지 확인
3. **권한 확인**: Integration에 데이터베이스 접근 권한이 있는지 확인
4. **Status 확인**: 글의 Status가 "Published"인지 확인

### 로그 확인

GitHub Actions 탭에서 워크플로우 실행 로그를 확인할 수 있습니다.

## 📞 지원

문제가 발생하면 GitHub Issues에 문의해주세요.
