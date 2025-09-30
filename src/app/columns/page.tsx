export default function ColumnsPage() {
  const columns = [
    {
      id: 1,
      title: 'SN 학습법: 효과적인 자기주도학습 방법',
      excerpt: 'SN에서 검증된 자기주도학습 방법을 소개합니다. 계획 세우기부터 실행, 피드백까지의 전체 과정을 단계별로 설명하고, 실제 학생들의 성공 사례를 통해 구체적인 적용 방법을 제시합니다.',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      tags: ['학습법', '자기주도학습'],
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center',
    },
    {
      id: 2,
      title: '수능 국어 독서 영역 완전 정복 가이드',
      excerpt: '수능 국어 독서 영역의 모든 유형을 분석하고 효과적인 풀이 전략을 제시합니다. 지문 분석 방법부터 문제 해결 기법까지 체계적으로 정리했습니다.',
      date: 'Dec 8, 2024',
      readTime: '9 min read',
      tags: ['국어', '독서', '수능'],
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center',
    },
    {
      id: 3,
      title: '수학 공식 암기보다 이해가 중요한 이유',
      excerpt: '수학을 공식 암기로 접근하는 것의 한계를 지적하고, 개념 이해를 통한 진정한 수학 실력 향상 방법을 제시합니다.',
      date: 'Dec 5, 2024',
      readTime: '7 min read',
      tags: ['수학', '개념이해', '학습법'],
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop&crop=center',
    },
  ];

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
