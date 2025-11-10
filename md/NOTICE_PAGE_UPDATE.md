# Notice 페이지 업데이트 가이드

`src/app/notice/page.tsx` 파일을 아래와 같이 수정하여 수능 검색 카드를 추가해주세요.

## 1. import 추가

파일 상단 (3번 줄 다음)에 추가:

```typescript
import Link from 'next/link';
```

## 2. 수능 검색 카드 추가

53번 줄 `</header>` 다음에 아래 코드 추가:

```tsx
{
  /* 수능 학생정보 검색 카드 (최상단 고정) */
}
<Link href="/notice/suneung-2025" className="block">
  <article className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-200 cursor-pointer">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
            🔥 필독
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            2025-11-10
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          2025.11.13 수능 당일 학생정보 검색
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          수능 당일 학생 이름과 전화번호 뒷자리를 입력하여 고사장, 숙소, 독서실
          위치를 빠르게 확인하세요.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            고사장
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            숙소
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            독서실
          </div>
        </div>
      </div>
      <svg
        className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </article>
</Link>;
```

완료!
