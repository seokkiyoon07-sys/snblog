'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function GoogleSignInButton({
  callbackUrl,
  disabled = false,
}: {
  callbackUrl: string;
  disabled?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled || isLoading}
      onClick={async () => {
        setIsLoading(true);
        await signIn('google', { callbackUrl });
      }}
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M21.6 12.23c0-.71-.06-1.22-.2-1.75H12v3.4h5.52a4.8 4.8 0 0 1-2.05 3.06l-.02.11 2.98 2.31.2.02c1.82-1.68 2.97-4.16 2.97-7.15Z"
        />
        <path
          fill="currentColor"
          opacity=".8"
          d="M12 22c2.7 0 4.97-.89 6.63-2.42l-3.16-2.44c-.85.57-1.98.97-3.47.97a6.03 6.03 0 0 1-5.7-4.17l-.1.01-3.1 2.4-.03.1A10 10 0 0 0 12 22Z"
        />
        <path
          fill="currentColor"
          opacity=".65"
          d="M6.3 13.94a6.17 6.17 0 0 1-.33-1.94c0-.68.12-1.33.32-1.94v-.12l-3.14-2.43-.1.05A10 10 0 0 0 2 12c0 1.6.38 3.12 1.06 4.45l3.24-2.51Z"
        />
        <path
          fill="currentColor"
          opacity=".5"
          d="M12 5.89c1.88 0 3.15.81 3.88 1.48l2.82-2.76A9.57 9.57 0 0 0 12 2a10 10 0 0 0-8.94 5.55l3.23 2.51A6.05 6.05 0 0 1 12 5.89Z"
        />
      </svg>
      {isLoading ? '로그인 중…' : 'Google 계정으로 로그인'}
    </button>
  );
}
