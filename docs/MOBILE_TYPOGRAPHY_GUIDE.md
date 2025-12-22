# 모바일 타이포그래피 가이드

## 단어 단위 줄바꿈 (word-break: keep-all)

### 현재 적용 상태

`src/app/globals.css`에 전역 스타일로 적용되어 있어 **모든 게시물에 자동 적용**됩니다.

```css
/* 단어 단위 줄바꿈 (한국어) - 모든 기기에 적용 */
.prose,
.prose-lg,
article,
p,
h1, h2, h3, h4, h5, h6,
li,
blockquote,
summary,
details div {
  word-break: keep-all;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
```

### 효과

- **한국어**: 단어가 중간에 끊기지 않고 단어 단위로 줄바꿈
- **영문/URL**: 너무 긴 경우에만 줄바꿈 (레이아웃 보호)

### 게시물 작성 시 주의사항

1. **별도 설정 불필요**: CSS가 전역으로 적용되어 있어 게시물 작성 시 별도 설정이 필요 없습니다.

2. **HTML 인라인 스타일 피하기**: 게시물 내에서 `style="word-break: break-all"` 같은 인라인 스타일을 사용하면 전역 설정이 무시될 수 있습니다.

3. **긴 영문 단어/URL**: 자동으로 처리되지만, 매우 긴 URL은 마크다운 링크 문법으로 감싸는 것이 좋습니다.
   ```markdown
   [링크 텍스트](https://very-long-url-example.com/path/to/page)
   ```

### 적용 범위

| 요소 | 적용 여부 |
|------|----------|
| 본문 텍스트 (p) | O |
| 제목 (h1-h6) | O |
| 목록 (li) | O |
| 인용문 (blockquote) | O |
| 토글/아코디언 (details) | O |
| 링크 (a) | O |
| 코드 (code) | O |

### 테스트 방법

1. 브라우저 개발자 도구 열기 (F12)
2. 모바일 뷰 시뮬레이션 (Ctrl+Shift+M 또는 디바이스 아이콘)
3. 다양한 화면 너비에서 텍스트 줄바꿈 확인

### 문제 해결

단어가 중간에 끊기는 경우:
1. 해당 요소에 인라인 스타일이 적용되어 있는지 확인
2. 특정 컴포넌트에서 `word-break` 속성을 재정의하고 있는지 확인
3. 필요시 해당 요소에 `!important` 추가
