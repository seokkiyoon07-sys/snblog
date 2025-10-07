'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-3xl font-bold mb-4">문제가 발생했습니다</h1>
      <p className="mb-6 text-muted-foreground">
        {error?.message || '알 수 없는 오류가 발생했습니다.'}
      </p>
      <button
        className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/80"
        onClick={() => reset()}
      >
        새로고침
      </button>
    </main>
  );
}
