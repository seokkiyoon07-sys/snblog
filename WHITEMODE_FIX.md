# 화이트 모드 배경색 문제 해결 기록

## 문제 증상

- 맥북의 다크 모드 설정과 무관하게 블로그가 다크 모드로 표시됨
- 화이트 모드에서 배경이 검게 나타나고 텍스트/컴포넌트가 하얗게 표시되어 가독성 저하
- 블로그 자체의 테마 토글 버튼이 제대로 작동하지 않음

## 원인 분석

### 1. CSS 미디어 쿼리 문제

**파일**: `src/app/globals.css`

이전 코드:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

**문제점**:

- `@media (prefers-color-scheme: dark)` 미디어 쿼리가 맥북의 시스템 다크 모드를 감지
- ThemeProvider의 설정(`defaultTheme="light"`, `enableSystem={false}`)과 충돌
- HTML에 `.dark` 클래스가 없어도 배경만 검은색으로 변경됨
- 결과: 검은 배경 + 라이트 모드용 스타일(검은 텍스트) = 가독성 최악

### 2. localStorage 캐시 문제

**파일**: `src/app/layout.tsx`

**문제점**:

- next-themes 라이브러리가 사용자의 테마 선택을 localStorage에 저장
- 이전에 다크 모드를 선택했다면 그 설정이 `defaultTheme="light"`보다 우선순위가 높음
- 브라우저 캐시로 인해 이전 설정이 계속 적용됨

## 해결 방법

### 1. CSS 미디어 쿼리 제거

**수정 파일**: `src/app/globals.css:21-26`

```css
/* 제거된 코드 */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

/* 유지: .dark 클래스를 통한 다크 모드 제어만 사용 */
.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  color-scheme: dark;
}
```

**효과**: 시스템 설정과 무관하게 ThemeProvider가 완전히 테마를 제어

### 2. localStorage 키 변경

**수정 파일**: `src/app/layout.tsx:78`

```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="light"
  enableSystem={false}
  disableTransitionOnChange
  storageKey="sn-blog-theme"  // 추가
>
```

**효과**:

- 새로운 localStorage 키 사용으로 이전 설정과 충돌 방지
- 사용자가 페이지를 새로고침하면 `defaultTheme="light"`가 제대로 적용

### 3. 사용자 브라우저 캐시 초기화

개발자 도구(F12) > Console에서:

```js
localStorage.clear();
```

그 다음 페이지 새로고침 (Cmd + R)

## 테마 시스템 동작 원리

### 현재 구조

```
맥북 시스템 설정 (다크/라이트)
         ↓ (무시됨: enableSystem={false})
   ThemeProvider
         ↓
  defaultTheme="light" 또는 localStorage의 사용자 선택
         ↓
  HTML에 .dark 클래스 추가/제거
         ↓
  Tailwind의 dark: prefix 클래스 활성화
```

### 컴포넌트 스타일 예시

```tsx
// PostCard.tsx
className = 'text-gray-900 dark:text-white';
// 라이트 모드: text-gray-900 (검은색)
// 다크 모드: dark:text-white (흰색)
```

## 예방책

1. **시스템 설정 감지 비활성화 유지**
   - `enableSystem={false}` 설정 유지
   - 블로그 자체 테마 토글로만 제어

2. **미디어 쿼리 사용 금지**
   - `@media (prefers-color-scheme)` 사용 안 함
   - `.dark` 클래스 기반 스타일만 사용

3. **Tailwind dark: prefix 일관성**
   - 모든 색상 관련 클래스에 `dark:` 버전 명시
   - 예: `bg-white dark:bg-gray-900`

4. **테마 변경 시 테스트**
   - 맥북 다크 모드 ON/OFF 상태에서 모두 테스트
   - localStorage 클리어 후 테스트
   - 브라우저 시크릿 모드에서 테스트

---

## 추가 문제: 컴포넌트 및 텍스트가 다크모드로 표시되는 문제 (2차 문제)

### 증상

배경 문제 해결 후에도:

- ✅ 배경: 하얀색 (정상)
- ❌ 제목, 네비게이션, 태그: 다크모드 스타일로 표시
- ❌ 텍스트: 하얀색 또는 회색 (라이트 배경에서 보이지 않음)
- ❌ HTML 클래스: `class="light"` (올바름)

### 원인 분석: Tailwind v4 호환성 문제

**디버깅 결과:**

```
HTML: light ✅
theme: light ✅
resolvedTheme: light ✅
forcedTheme: none ✅
systemTheme: none ✅
```

모든 테마 설정이 올바른데도 `dark:` prefix 클래스들이 활성화되는 문제 발견.

**근본 원인:**

- Tailwind CSS v4 사용 중 (`tailwindcss: ^4`)
- Tailwind v4에서는 `tailwind.config.js`의 `darkMode: 'class'`만으로는 부족
- **CSS 파일에서 명시적으로 dark variant를 정의해야 함**
- `next-themes`는 HTML에 `.dark` 클래스를 추가하지만, Tailwind v4가 이를 인식하지 못함

### 해결 방법: @variant dark 추가

**수정 파일**: `src/app/globals.css:3`

**추가된 코드:**

```css
@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));  // ← 이 줄 추가!

:root {
  --background: #ffffff;
  ...
}
```

**효과:**

- Tailwind v4에게 `.dark` 클래스가 있을 때만 `dark:` prefix를 활성화하라고 명시
- `&:where(.dark, .dark *)`: `.dark` 클래스나 그 하위 요소에만 적용
- 서버 재시작 후 즉시 적용됨

### 디버깅 도구 추가

문제 진단을 위해 `ThemeDebugger.tsx` 컴포넌트 생성:

**파일**: `src/components/ThemeDebugger.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeDebugger() {
  const { theme, resolvedTheme, forcedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [htmlClass, setHtmlClass] = useState('');

  useEffect(() => {
    setMounted(true);
    const checkHtmlClass = () => {
      const classList = document.documentElement.classList.toString();
      setHtmlClass(classList);
      console.log('=== THEME DEBUG ===');
      console.log('HTML classes:', classList);
      console.log('theme:', theme);
      console.log('resolvedTheme:', resolvedTheme);
      console.log('forcedTheme:', forcedTheme);
      console.log('systemTheme:', systemTheme);
    };
    checkHtmlClass();
    const interval = setInterval(checkHtmlClass, 1000);
    return () => clearInterval(interval);
  }, [theme, resolvedTheme, forcedTheme, systemTheme]);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs font-mono z-50 max-w-md">
      <div className="font-bold mb-2">🔍 Theme Debugger</div>
      <div>HTML: {htmlClass || 'none'}</div>
      <div>theme: {theme}</div>
      <div>resolvedTheme: {resolvedTheme}</div>
      <div>forcedTheme: {forcedTheme || 'none'}</div>
      <div>systemTheme: {systemTheme || 'none'}</div>
    </div>
  );
}
```

**사용법:**

- 우측 하단에 검은색 패널로 실시간 테마 상태 표시
- 콘솔에 상세 로그 출력
- 문제 해결 후 제거 가능

### 체계적 진단 과정

1. ✅ **next-themes 버전 확인** → v0.4.6 (최신)
2. ✅ **Tailwind darkMode 설정** → `darkMode: 'class'` (올바름)
3. ✅ **ThemeProvider props** → 모두 정상
4. ✅ **HTML class 확인** → `class="light"` (정상)
5. ✅ **localStorage 확인** → `theme: light` (정상)
6. ❌ **Tailwind v4 호환성** → @variant dark 누락! (문제 발견)
7. ✅ **수정 후 재시작** → 정상 작동

### 최종 수정 파일 목록

1. **`src/app/globals.css`**
   - `@media (prefers-color-scheme: dark)` 제거
   - `@variant dark (&:where(.dark, .dark *))` 추가

2. **`src/app/layout.tsx`**
   - `storageKey="sn-blog-theme-v2"` 추가
   - `ThemeDebugger` 컴포넌트 import 및 추가

3. **`src/components/ThemeDebugger.tsx`** (신규)
   - 테마 디버깅 도구

### Tailwind v4 vs v3 차이점

| 항목          | Tailwind v3                 | Tailwind v4                  |
| ------------- | --------------------------- | ---------------------------- |
| darkMode 설정 | `tailwind.config.js`만 필요 | CSS에서 `@variant dark` 필요 |
| dark: prefix  | 자동 작동                   | 명시적 정의 필요             |
| 호환성        | next-themes 즉시 작동       | 추가 설정 필요               |

### 테스트 체크리스트

- [x] 맥북 다크 모드 ON 상태에서 블로그 라이트 모드 확인
- [x] 맥북 라이트 모드 ON 상태에서 블로그 라이트 모드 확인
- [x] localStorage 초기화 후 defaultTheme 적용 확인
- [x] 브라우저 시크릿 모드에서 테스트
- [x] 배경색 정상 (하얀색)
- [x] 텍스트 정상 (검은색)
- [x] 네비게이션 정상 (라이트 모드 스타일)
- [x] 태그/버튼 정상 (라이트 모드 스타일)
- [x] 테마 토글 버튼 작동

## 수정 일시

- 2025-10-05 (1차 수정: 배경 문제)
- 2025-10-05 (2차 수정: 컴포넌트 문제)
- 수정자: Claude Code

## 관련 파일

- `src/app/globals.css` - CSS 미디어 쿼리 제거, @variant dark 추가
- `src/app/layout.tsx` - ThemeProvider storageKey 추가, ThemeDebugger 추가
- `src/components/ThemeDebugger.tsx` - 디버깅 도구 (신규)
- `tailwind.config.js` - darkMode: 'class' 설정 (이미 올바름)

## 주요 교훈

1. **Tailwind v4 사용 시 주의사항**
   - `@variant dark` 명시적 정의 필수
   - v3에서 v4로 마이그레이션 시 반드시 확인

2. **next-themes + Tailwind v4 조합**
   - 추가 설정 없이는 작동하지 않음
   - 공식 문서에도 명시되지 않은 호환성 이슈

3. **체계적 디버깅의 중요성**
   - 증상만 보고 추측하지 말 것
   - ThemeDebugger 같은 도구로 정확한 상태 파악
   - 단계별 검증으로 근본 원인 찾기
