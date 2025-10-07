# 노션 동기화 시스템 점검 보고서

생성일: 2025-10-05

## 📊 현재 상태 요약

### ✅ 정상 작동 부분

1. **파일 구조**
   - `posts.ts`: 수동 관리 포스트 (11개)
   - `notion-posts.ts`: 노션 자동 동기화 (현재 비어있음)
   - 명확한 분리 구조 ✅

2. **실행 명령어**

   ```bash
   npm run sync:notion  # tsx scripts/sync-notion.ts
   ```

3. **타입 시스템**
   - TypeScript 타입 정의 완벽
   - `readTime: string` 타입 일관성 유지

4. **개발/프로덕션 분리**
   - 개발 환경에서만 노션 포스트 로드
   - 프로덕션에서는 수동 포스트만 사용

### ⚠️ 문제점 및 개선 사항

#### 1. 중복 스크립트 정리 필요 🔴

**현재 상태:**

```
scripts/
├── sync-notion.ts          ✅ 실제 사용 중
├── notion-sync-real.js     ❌ 사용하지 않음 (삭제 권장)
└── notion-sync-v2.js       ❌ 사용하지 않음 (삭제 권장)
```

**권장 조치:**

- `notion-sync-real.js` 삭제
- `notion-sync-v2.js` 삭제
- `sync-notion.ts`만 유지

#### 2. 노션 속성명 불일치 🟡

**`notion-converter.ts` (실제 사용):**

```typescript
제목(title);
카테고리(select);
태그(multi_select);
요약(rich_text);
published / 발행(checkbox);
추천(checkbox);
날짜(date);
```

**`notion-sync-real.js` / `v2.js` (미사용):**

```javascript
Title (title)
Category (select)
Tags (multi_select)
Excerpt (rich_text)
Status (select) = 'Published'
Featured (checkbox)
Created (created_time)
```

**권장 조치:**

1. 실제 노션 데이터베이스의 속성명 확인
2. 한글/영어 중 하나로 통일
3. `NOTION_SETUP_GUIDE.md`에 명시된 속성명과 일치시키기

#### 3. 환경변수 예제 파일 업데이트 필요 🟡

**현재 `env.example`:**

```env
JANDI_WEBHOOK_URL=your_webhook_url_here
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=https://blog.snacademy.co.kr
```

**추가 필요:**

```env
# 노션 통합 설정
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### 4. 에러 처리 개선 🟢

**현재 코드 (notion-converter.ts):**

```typescript
export async function fetchNotionDatabase() {
  try {
    // ... 로직
    return posts;
  } catch (error) {
    console.error('Failed to fetch Notion database:', error);
    return []; // ❌ 빈 배열 반환으로 에러가 숨겨짐
  }
}
```

**개선안:**

```typescript
export async function fetchNotionDatabase() {
  try {
    // ... 로직
    return posts;
  } catch (error) {
    console.error('Failed to fetch Notion database:', error);
    // 에러를 상위로 전파하여 sync-notion.ts에서 처리
    throw error;
  }
}
```

#### 5. 이미지 다운로드 경로 확인 필요 🟢

**현재 코드:**

```typescript
const dir = path.join(process.cwd(), 'public', 'images', 'notion', postId);
```

**확인 필요:**

- `/public/images/notion/` 디렉토리가 `.gitignore`에 포함되어 있는지
- 이미지가 실제로 다운로드되고 있는지
- 프로덕션 배포 시 이미지가 포함되는지

## 🔧 즉시 적용 가능한 개선사항

### 1단계: 불필요한 파일 삭제

```bash
cd ~/code/snblog
rm scripts/notion-sync-real.js
rm scripts/notion-sync-v2.js
```

### 2단계: 환경변수 예제 업데이트

`env.example` 파일에 노션 관련 환경변수 추가

### 3단계: 노션 속성명 확인

실제 노션 데이터베이스에서 사용 중인 속성명 확인:

```bash
npm run sync:notion
```

실행 후 에러 메시지 확인하여 속성명 불일치 여부 파악

## 📝 테스트 체크리스트

- [ ] 노션 데이터베이스 ID 확인
- [ ] 노션 Integration 연결 상태 확인
- [ ] 환경변수 설정 확인 (`.env.local`)
- [ ] `npm run sync:notion` 실행 테스트
- [ ] 생성된 `notion-posts.ts` 파일 확인
- [ ] 개발 서버에서 노션 포스트 표시 확인
- [ ] 이미지 다운로드 확인

## 🎯 우선순위

1. **높음 🔴**: 중복 스크립트 정리
2. **중간 🟡**: 환경변수 예제 업데이트
3. **중간 🟡**: 속성명 확인 및 통일
4. **낮음 🟢**: 에러 처리 개선
5. **낮음 🟢**: 이미지 경로 확인

## 📚 관련 문서

- `NOTION_SETUP_GUIDE.md`: 노션 설정 가이드
- `NOTION_COMPONENTS.md`: 노션 컴포넌트 매핑
- `NOTION_DEVELOPMENT_TEST.md`: 개발/테스트 가이드

## 💡 추가 제안

### 노션 동기화 자동화

**옵션 1: GitHub Actions**

```yaml
# .github/workflows/sync-notion.yml
name: Sync Notion
on:
  schedule:
    - cron: '0 0 * * *'  # 매일 자정
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run sync:notion
      - run: git add src/data/notion-posts.ts
      - run: git commit -m "chore: sync notion posts"
      - run: git push
```

**옵션 2: Vercel Cron Job**

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/sync-notion",
      "schedule": "0 0 * * *"
    }
  ]
}
```

### 백업 자동화 개선

현재 백업 기능이 있지만, 주기적 백업 자동화 추가:

```bash
npm run backup:posts  # 수동 백업
```

## ✅ 결론

전반적으로 노션 동기화 시스템은 **잘 구성**되어 있습니다.
다만 몇 가지 개선사항을 적용하면 **더욱 안정적**이고 **유지보수하기 쉬운** 시스템이 될 것입니다.

특히 중복 스크립트 정리와 환경변수 문서화는 즉시 진행하는 것을 권장합니다.
