export const metadata = {
  title: '합격 후기 | SN Academy 학생들의 성공 스토리',
  description: 'SN Academy에서 목표 대학에 합격한 학생들의 생생한 후기를 확인하세요. 서울대, 연세대, 고려대 등 명문대 합격생들의 학습 방법과 경험담을 공유합니다.',
  keywords: '합격 후기, SN Academy, 서울대 합격, 연세대 합격, 고려대 합격, 대학 합격, 학습 후기',
  openGraph: {
    title: '합격 후기 | SN Academy 학생들의 성공 스토리',
    description: 'SN Academy에서 목표 대학에 합격한 학생들의 생생한 후기를 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function ReviewsPage() {
  const reviews = [];

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          후기
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          학생들의 생생한 경험담
        </p>
      </div>

      {/* 포스트 목록 */}
      <div className="space-y-6">
        {reviews.map((post) => (
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
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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
    </div>
  );
}
