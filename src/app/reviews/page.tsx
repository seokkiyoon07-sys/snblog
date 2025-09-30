export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      title: '서울대 합격생 후기: 3년간의 시대인재 생활',
      excerpt: '서울대에 합격한 김○○ 학생의 시대인재 3년 생활 후기를 공유합니다. 입학부터 졸업까지의 과정에서 겪었던 어려움과 극복 방법, 그리고 시대인재에서 얻은 것들에 대해 솔직하게 이야기합니다.',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      tags: ['서울대', '합격', '후기'],
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&crop=center',
    },
    {
      id: 2,
      title: '연세대 의예과 합격생의 특별한 이야기',
      excerpt: '연세대 의예과에 합격한 박○○ 학생의 특별한 입시 경험담을 들어보세요. 의대 입시의 모든 과정을 생생하게 전달합니다.',
      date: 'Dec 7, 2024',
      readTime: '8 min read',
      tags: ['연세대', '의예과', '합격'],
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center',
    },
    {
      id: 3,
      title: '고려대 경영학과 합격 후기',
      excerpt: '고려대 경영학과에 합격한 이○○ 학생의 입시 준비 과정과 시대인재에서의 학습 경험을 공유합니다.',
      date: 'Dec 4, 2024',
      readTime: '6 min read',
      tags: ['고려대', '경영학과', '합격'],
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center',
    },
  ];

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
