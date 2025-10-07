export const metadata = {
  title: '문제 다운로드 | SN Academy 수학 문제집',
  description:
    'SN Academy에서 제공하는 수학 문제집과 기출문제를 다운로드하세요. 수능, 모의고사, 기출문제 등 다양한 수학 문제를 무료로 제공합니다.',
  keywords:
    '문제 다운로드, 수학 문제집, 수능 기출, 모의고사, 수학 문제, SN Academy',
  openGraph: {
    title: '문제 다운로드 | SN Academy 수학 문제집',
    description:
      'SN Academy에서 제공하는 수학 문제집과 기출문제를 다운로드하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function ProblemsPage() {
  const announcements: any[] = []; // 전체 공지사항
  const mathContents: any[] = []; // 수학 컨텐츠

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          문제 다운로드
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          수학 문제집과 기출문제를 무료로 다운로드하세요
        </p>
      </div>

      {/* 전체 공지사항 */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          📢 전체 공지사항
        </h2>
        {announcements.length > 0 ? (
          <div className="space-y-3">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700"
              >
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  {announcement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {announcement.content}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {announcement.date}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              공지사항이 없습니다.
            </p>
          </div>
        )}
      </div>

      {/* 수학 컨텐츠 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          📚 수학 컨텐츠
        </h2>
        {mathContents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mathContents.map((content, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  {content.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {content.date}
                  </span>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {content.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              수학 컨텐츠가 없습니다.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              곧 업로드될 예정입니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
