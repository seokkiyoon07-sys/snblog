export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-3xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
      <p className="mb-6 text-muted-foreground">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <a
        href="/"
        className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/80"
      >
        홈으로 이동
      </a>
    </main>
  );
}
