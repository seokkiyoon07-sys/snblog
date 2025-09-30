export const metadata = {
  title: '입시정보 | SN Academy 입시 가이드와 대학별 전략',
  description: 'SN Academy의 입시 전문가들이 제공하는 최신 입시 정보와 대학별 전략을 확인하세요. 수능 분석, 의대 입시, 학생부종합전형 등 다양한 입시 정보를 제공합니다.',
  keywords: '입시정보, 수능 분석, 의대 입시, 학생부종합전형, 대학 입시, 입시 전략',
  openGraph: {
    title: '입시정보 | SN Academy 입시 가이드와 대학별 전략',
    description: 'SN Academy의 입시 전문가들이 제공하는 최신 입시 정보와 대학별 전략을 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function AdmissionsPage() {
  const admissions: any[] = [];

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          입시정보
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          최신 입시 동향과 분석 자료
        </p>
      </div>

      {/* 포스트 목록 */}
      {admissions.length > 0 ? (
        <div className="space-y-6">
          {admissions.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
          >
            <div className="flex gap-6">
              {/* 썸네일 */}
              <div className="flex-shrink-0 w-48 h-32 overflow-hidden rounded-lg">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* 콘텐츠 */}
              <div className="flex-1 space-y-3">
                {/* 태그 */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* 제목 */}
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href={`/posts/${post.id}`}>
                    {post.title}
                  </a>
                </h2>

                {/* 요약 */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 text-base">
                  {post.excerpt}
                </p>

                {/* 메타 정보 */}
                <div className="flex items-center space-x-4 text-base text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">아직 게시된 글이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
