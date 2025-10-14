# GitHub Actions 알림 시스템 개발 문서

## 📋 개요

블로그 포스트 변경 시 Jandi와 Slack으로 자동 알림을 보내는 GitHub Actions 워크플로우 시스템입니다.

---

## 🎯 주요 기능

- `src/data/posts.ts` 파일 변경 감지
- 변경된 포스트 정보 자동 추출 (제목, excerpt, URL, 썸네일)
- Jandi와 Slack에 각각 최적화된 형식으로 알림 전송
- allPosts 배열 외부 변경(import, 주석 등)은 무시

---

## 🔧 핵심 해결 과제

### 1. 포스트 감지 알고리즘 (가장 큰 난관)

**문제:**
- Git diff로 변경된 라인을 찾았지만, 잘못된 포스트를 감지
- 파일 상단의 주석/import 변경 시에도 알림 발송
- 실제 수정한 포스트(출새곡) 대신 다른 포스트(관동별곡, SNarGO) 감지

**원인:**
- 변경 라인에서 가장 가까운 post ID를 역방향 검색
- allPosts 배열 시작 전의 변경도 포스트로 인식

**해결:**
```bash
# allPosts 배열 시작 위치 확인
ALLPOSTS_START=$(grep -n "export const allPosts" src/data/posts.ts | cut -d: -f1)

# 배열 내부 변경만 처리
if [ "$CHANGED_LINE_IN_FILE" -ge "$ALLPOSTS_START" ]; then
  # 포스트 감지 로직 실행
else
  # SKIP 처리
fi
```

### 2. 여러 줄 필드 추출 문제

**문제:**
```typescript
// posts.ts 구조
excerpt:
  '실제 내용이 다음 줄에...'
```
- `grep "excerpt:"` → `excerpt:` 줄만 가져옴 (값 없음)
- 빈 값이 추출되어 "excerpt:"라는 텍스트가 알림에 표시됨

**해결:**
```bash
# 기존 (실패)
POST_EXCERPT=$(grep -m 1 "excerpt:" | sed "s/.*excerpt: *['\"]//; s/['\"].*//")

# 개선 (성공)
POST_EXCERPT=$(grep -A 2 "excerpt:" | grep -oE "'[^']*'" | head -1 | sed "s/'//g")
# -A 2: excerpt 줄과 다음 2줄도 가져옴
# grep -oE "'[^']*'": 따옴표 안의 값만 추출
```

### 3. Jandi URL 표시 문제

**문제:**
- 포스트 URL 대신 썸네일 URL이 클릭됨
- `connectButtons`의 URL이 무시되고 `imageUrl`이 우선됨

**시도한 방법들:**
1. ❌ heredoc으로 JSON 생성 → YAML 구문 오류
2. ❌ 변수 재확인 → 변수는 정상
3. ❌ imageUrl에 포스트 URL 넣기 → 여전히 문제
4. ✅ imageUrl 완전 제거 → 해결!

**최종 해결:**
```json
{
  "connectInfo": [
    {
      "description": "내용\n\n포스트 URL: https://...\n블로그 홈: https://..."
    }
  ]
}
```
- 이미지 제거하고 URL을 텍스트로 직접 포함
- 이모지는 깨져서 제거

### 4. GitHub Actions 실행 안 됨

**문제:**
- 커밋은 성공하지만 알림이 오지 않음
- Actions 자체가 실행되지 않음

**원인:**
```yaml
# heredoc 구문이 YAML에서 오류 발생
curl -d @- <<JANDI_JSON
{
  ...
}
JANDI_JSON
```

**해결:**
```yaml
# 일반 JSON 이스케이프 방식으로 통일
curl -d "{
  \"body\": \"$BODY\",
  ...
}"
```

---

## 📝 현재 워크플로우 구조

### 트리거
```yaml
on:
  push:
    branches: [main]
    paths:
      - 'src/data/posts.ts'
      - 'src/app/**/page.tsx'
```

### 주요 단계

1. **변경 감지** (`Detect changes`)
   - posts.ts 수정 여부 확인
   - allPosts 배열 내부 변경인지 검증

2. **포스트 정보 추출**
   ```bash
   # Git diff로 변경 라인 찾기
   CHANGED_LINE=$(git diff --unified=0 ... | grep "^@@" | sed 's/.*+\([0-9]*\).*/\1/')
   
   # 변경된 포스트 ID 찾기
   POST_BLOCK=$(sed -n "${POST_BLOCK_START},$((POST_BLOCK_START + 100))p" ...)
   
   # 필드 추출 (여러 줄 처리)
   POST_TITLE=$(echo "$POST_BLOCK" | grep -A 2 "title:" | grep -oE "'[^']*'" | head -1 | sed "s/'//g")
   ```

3. **알림 전송**
   - **Slack**: 완벽하게 작동 (썸네일, 버튼, 링크 모두 정상)
   - **Jandi**: 텍스트로 URL 표시 (이미지 없음)

---

## 🎨 알림 포맷

### Slack (완벽 작동 ✅)
```
새 포스트가 게시되었어요

[포스트 제목]
포스트 내용...
[썸네일 이미지]

[📖 지금 읽기] [🏠 블로그 홈]
```

### Jandi (단순 버전 ✅)
```
새 포스트가 게시되었어요 - 포스트 제목

포스트 내용...

포스트 URL: https://blog.snacademy.co.kr/originals/...
블로그 홈: https://blog.snacademy.co.kr
```

---

## ⚠️ 주의사항

### 1. YAML에서 heredoc 사용 금지
```bash
# ❌ 작동 안 함
curl -d @- <<EOF
...
EOF

# ✅ 이렇게 사용
curl -d "{\"key\": \"$value\"}"
```

### 2. 여러 줄 필드 추출 시 -A 옵션 필수
```bash
# 여러 줄로 나뉜 필드
grep -A 2 "fieldName:" | grep -oE "'[^']*'" | head -1
```

### 3. allPosts 배열 외부 변경 체크 필수
```bash
if [ "$CHANGED_LINE_IN_FILE" -ge "$ALLPOSTS_START" ]; then
  # 포스트 처리
else
  echo "⚠️ Change outside allPosts array - skipping"
  exit 0
fi
```

### 4. Jandi는 이모지 깨짐
- UTF-8 이모지는 Jandi에서 깨져서 표시됨
- 텍스트만 사용 권장

### 5. Slack과 Jandi는 API 구조가 다름
- **Slack**: `title_link`로 제목 클릭 시 이동
- **Jandi**: `imageUrl`이 클릭 가능하여 혼동 발생 → 제거함

---

## 🔍 디버깅 방법

### GitHub Actions 로그 확인
```bash
echo "📄 Extracted post info:"
echo "  Title: $POST_TITLE"
echo "  URL: $POST_URL"
echo "  Thumbnail: $POST_THUMBNAIL"
echo "  Excerpt: ${POST_EXCERPT:0:50}..."
```

### 로컬 테스트
```bash
# 포스트 블록 추출 테스트
POST_BLOCK_START=$(grep -n "id: *['\"]POST_ID['\"]" src/data/posts.ts | cut -d: -f1)
POST_BLOCK=$(sed -n "${POST_BLOCK_START},$((POST_BLOCK_START + 100))p" src/data/posts.ts | sed '/^  },$/q')

# 필드 추출 테스트
echo "$POST_BLOCK" | grep -A 2 "excerpt:" | grep -oE "'[^']*'" | head -1 | sed "s/'//g"
```

---

## 📊 주요 변수

```bash
# Git diff 분석
CHANGED_LINE_IN_FILE    # 변경된 라인 번호
ALLPOSTS_START          # allPosts 배열 시작 라인
CHANGED_POST_ID         # 감지된 포스트 ID

# 포스트 정보
POST_TITLE              # 포스트 제목
POST_EXCERPT            # 포스트 요약
POST_URL                # 포스트 경로 (/originals/...)
POST_THUMBNAIL          # 썸네일 경로 (/images/...)

# 최종 URL
FULL_POST_URL          # https://blog.snacademy.co.kr + POST_URL
THUMBNAIL_URL          # https://blog.snacademy.co.kr + POST_THUMBNAIL

# 알림 메시지
BODY                   # 메인 메시지
JANDI_TITLE           # Jandi 제목 (= POST_TITLE)
COLOR                 # 색상 코드
```

---

## 🚀 테스트 방법

1. **posts.ts 수정**
   ```typescript
   readTime: '8' → '9'  // allPosts 배열 내부 변경
   ```

2. **커밋 & 푸시**
   ```bash
   git add src/data/posts.ts
   git commit -m "test: 알림 테스트"
   git push origin main
   ```

3. **확인**
   - GitHub Actions 페이지에서 워크플로우 실행 확인
   - 로그에서 "Extracted post info" 확인
   - Jandi/Slack에서 알림 수신 확인

---

## 📈 개선 이력

### v1: 초기 버전
- 기본 Git diff 기반 포스트 감지
- 문제: 잘못된 포스트 감지

### v2: allPosts 배열 체크 추가
- 배열 외부 변경 무시
- 문제: 여러 줄 필드 추출 실패

### v3: 여러 줄 필드 추출 개선
- grep -A 옵션 사용
- 문제: Jandi URL 오류

### v4: Jandi imageUrl 제거 (현재)
- URL을 텍스트로 직접 표시
- ✅ 모든 문제 해결

---

## 💡 향후 개선 가능 사항

1. **Jandi에 썸네일 추가**
   - 현재는 URL 충돌 문제로 제거
   - Jandi API에서 카드 클릭 시 URL 지정 방법 조사 필요

2. **포스트 감지 알고리즘 정확도 향상**
   - 현재: 가장 가까운 post ID 검색
   - 개선: Git diff에서 실제 변경된 post ID 직접 추출

3. **알림 내용 커스터마이징**
   - 카테고리별 다른 색상
   - featured 포스트 강조 표시

4. **에러 핸들링 강화**
   - Webhook 실패 시 재시도
   - 포스트 정보 추출 실패 시 기본값 사용

---

## 📚 참고 자료

- [Jandi Incoming Webhook API](https://support.jandi.com/hc/ko/articles/360034799992)
- [Slack Incoming Webhooks](https://api.slack.com/messaging/webhooks)
- [GitHub Actions 문법](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

## 🎉 결론

- **Slack**: 완벽하게 작동 ✅
- **Jandi**: 단순하지만 작동 ✅
- **포스트 감지**: 정확하게 작동 ✅
- **GitHub Actions**: 안정적으로 실행 ✅

**핵심 교훈**: 복잡한 heredoc이나 고급 기능보다 **단순하고 확실한 방법**이 최선!
