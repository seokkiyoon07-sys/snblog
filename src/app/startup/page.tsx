export default function StartupPage() {
  const startups = [
    {
      id: 1,
      title: 'SN 특별 프로그램: 겨울방학 집중 캠프',
      excerpt: '2024년 겨울방학을 맞아 SN에서 진행하는 특별 프로그램을 소개합니다. 수능 대비 집중 캠프, 논술 특강, 면접 준비반 등 다양한 프로그램이 준비되어 있습니다.',
      date: 'Dec 8, 2024',
      readTime: '5 min read',
      tags: ['특별프로그램', '겨울방학', '캠프'],
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center',
    },
    {
      id: 2,
      title: 'SN 교사진 소개: 경험과 열정의 만남',
      excerpt: 'SN의 자랑스러운 교사진을 소개합니다. 각 분야의 전문가들이 모여 학생들의 꿈을 실현시키기 위해 최선을 다하고 있습니다.',
      date: 'Dec 3, 2024',
      readTime: '7 min read',
      tags: ['교사진', '교육철학', '전문가'],
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center',
    },
    {
      id: 3,
      title: '시대인재 신규 캠퍼스 오픈 소식',
      excerpt: '더 많은 학생들에게 양질의 교육을 제공하기 위해 새로운 캠퍼스를 오픈합니다. 최신 시설과 편의 기능을 자랑합니다.',
      date: 'Nov 30, 2024',
      readTime: '4 min read',
      tags: ['신규캠퍼스', '오픈', '시설'],
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=center',
    },
  ];

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          SN AI 스타트업
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          SN의 AI 기반 혁신적인 교육 프로그램과 새로운 시도들
        </p>
      </div>

      {/* 포스트 목록 */}
      <div className="space-y-6">
        {startups.map((post) => (
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
