export default function OriginalsPage() {
  const originals = [
    {
      id: 1,
      title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
      excerpt: 'AI 그림과 친절한 해설로 즐기는 고전문학! 보기만 해도 국어 감각이 살아납니다. 수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!',
      date: 'Dec 22, 2024',
      readTime: '8 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '갑민가'],
      thumbnail: 'https://img.youtube.com/vi/3ZGE-RvBinQ/maxresdefault.jpg',
      category: 'SN Originals',
      youtubeUrl: 'https://www.youtube.com/watch?v=3ZGE-RvBinQ'
    },
    {
      id: 2,
      title: 'SN Originals: 특별한 교육 콘텐츠',
      excerpt: 'SN만의 독창적인 교육 콘텐츠와 특별 프로그램을 소개합니다. 학생들의 성장을 위한 맞춤형 교육 솔루션을 제공합니다.',
      date: 'Dec 20, 2024',
      readTime: '6 min read',
      tags: ['SN Originals', '특별프로그램', '교육콘텐츠'],
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center',
      category: 'SN Originals'
    },
    {
      id: 3,
      title: 'SN만의 독특한 학습법: 창의적 사고력 향상',
      excerpt: 'SN에서 개발한 독창적인 학습법을 소개합니다. 단순 암기가 아닌 창의적 사고력을 기르는 혁신적인 교육 방법을 제시합니다.',
      date: 'Dec 18, 2024',
      readTime: '8 min read',
      tags: ['SN Originals', '학습법', '창의적사고'],
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center',
      category: 'SN Originals'
    },
    {
      id: 4,
      title: 'SN 특별 프로젝트: 미래 교육 실험',
      excerpt: 'SN에서 진행하는 미래 교육 실험 프로젝트를 소개합니다. AI와 교육의 융합, 새로운 학습 패러다임을 탐구합니다.',
      date: 'Dec 15, 2024',
      readTime: '10 min read',
      tags: ['SN Originals', '미래교육', 'AI교육'],
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center',
      category: 'SN Originals'
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-6 lg:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
          SN Originals
        </h1>
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 px-4">
          보기만 해도 수능 점수가 오르는 컨텐츠
        </p>
      </div>

      {/* 포스트 목록 */}
      <div className="space-y-4 lg:space-y-6">
        {originals.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-200 dark:border-gray-700 pb-4 lg:pb-6 last:border-b-0"
          >
            {/* 모바일 레이아웃 */}
            <div className="block sm:hidden">
              {/* 1. 썸네일 */}
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* 콘텐츠 */}
              <div className="space-y-3">
                {/* 2. 제목 */}
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href={post.youtubeUrl || `/posts/${post.id}`} target={post.youtubeUrl ? "_blank" : "_self"}>
                    {post.youtubeUrl && "🎥 "}{post.title}
                  </a>
                </h2>

                {/* 3. 요약 */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* 4. 메타 정보 (날짜, read) */}
                <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
                </div>

                {/* 5. 태그 */}
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 데스크톱 레이아웃 */}
            <div className="hidden sm:flex gap-4 lg:gap-6">
              {/* 썸네일 */}
              <div className="flex-shrink-0 w-40 sm:w-48 h-28 sm:h-32 overflow-hidden rounded-lg">
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
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href={post.youtubeUrl || `/posts/${post.id}`} target={post.youtubeUrl ? "_blank" : "_self"}>
                    {post.youtubeUrl && "🎥 "}{post.title}
                  </a>
                </h2>

                {/* 요약 */}
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* 메타 정보 */}
                <div className="flex items-center space-x-4 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
