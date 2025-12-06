'use client';

import { useState } from 'react';

interface RevealTextProps {
  original: string;
  translation: string;
  index?: number;
}

export default function RevealText({
  original,
  translation,
  index,
}: RevealTextProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="border-l-4 border-emerald-600 bg-stone-50 dark:bg-stone-900 rounded-r-lg overflow-hidden mb-3">
      {/* 원문 - 항상 표시 */}
      <div className="p-4">
        {index !== undefined && (
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-2 block">
            {index}
          </span>
        )}
        <p
          className="text-lg font-medium text-gray-900 dark:text-white leading-relaxed"
          dangerouslySetInnerHTML={{ __html: original }}
        />
      </div>

      {/* 현대어 해석 - Click to Reveal */}
      <div
        className={`
          p-4 bg-emerald-50 dark:bg-emerald-900/20
          border-t border-emerald-200 dark:border-emerald-800
          cursor-pointer transition-all duration-300 select-none
          ${revealed ? '' : 'hover:bg-emerald-100 dark:hover:bg-emerald-900/30'}
        `}
        onClick={() => setRevealed(!revealed)}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setRevealed(!revealed);
          }
        }}
        aria-expanded={revealed}
        aria-label={revealed ? '현대어 해석 숨기기' : '현대어 해석 보기'}
      >
        {!revealed && (
          <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm py-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>클릭하여 현대어 해석 보기</span>
          </div>
        )}
        <div
          className={`
            text-gray-700 dark:text-gray-300 leading-relaxed
            transition-all duration-300
            ${revealed ? 'blur-none opacity-100' : 'blur-md opacity-50 pointer-events-none'}
          `}
          dangerouslySetInnerHTML={{ __html: translation }}
        />
        {revealed && (
          <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs mt-3 pt-2 border-t border-emerald-200/50 dark:border-emerald-800/50">
            <span>클릭하여 숨기기</span>
          </div>
        )}
      </div>
    </div>
  );
}
