export default function AnalyticsLoading() {
  return (
    <div
      className="space-y-5 py-6"
      aria-busy="true"
      aria-label="방문 통계 불러오는 중"
    >
      <div className="h-32 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800" />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="h-28 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800"
          />
        ))}
      </div>
      <div className="h-72 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800" />
    </div>
  );
}
