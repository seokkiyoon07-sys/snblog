export const metadata = {
  title: 'SN 컬럼 | 교육 전문가의 학습법과 입시 조언',
  description: 'SN Academy의 교육 전문가들이 제공하는 학습법, 입시 전략, 자기주도학습 방법 등을 확인하세요. 검증된 교육 노하우로 학습 효과를 극대화할 수 있습니다.',
  keywords: 'SN 컬럼, 학습법, 자기주도학습, 입시 전략, 교육 노하우, 학습 효과',
  openGraph: {
    title: 'SN 컬럼 | 교육 전문가의 학습법과 입시 조언',
    description: 'SN Academy의 교육 전문가들이 제공하는 학습법과 입시 전략을 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function ColumnsPage() {
  const columns = [];

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          컬럼
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          교육 전문가의 인사이트와 조언
        </p>
      </div>

      {/* 포스트 목록 */}
      <div className="space-y-6">
        {columns.map((post) => (
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
