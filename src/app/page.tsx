export const metadata = {
  title: 'SN Academy Blog | 독학기숙학원의 교육 혁신과 AI 스타트업',
  description: 'SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다. 수능 대비, 입시 정보, 학습법, 합격 후기까지 모든 교육 정보를 한 곳에서 확인하세요.',
  keywords: 'SN Academy, 독학기숙학원, AI 스타트업, 수능, 입시정보, 학습법, 교육혁신',
  openGraph: {
    title: 'SN Academy Blog | 독학기숙학원의 교육 혁신과 AI 스타트업',
    description: 'SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function Home() {
  // 고정 글 설정 (1-3개 유동적)
  const pinnedPosts = [
    {
      id: 1,
      title: 'SN에서 교육 AI 스타트업을 창업했습니다.',
      excerpt: '독학기숙학원의 명가 SN에서 이번에 새롭게 에듀테크 AI를 만들었습니다. 우리의 비전, 앞으로의 미션, 팀 구성원, AI 제품들을 소개합니다. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
      date: 'Sep 25, 2025',
      readTime: '10 min read',
      tags: ['SN AI 스타트업', '에듀테크', 'AI교육', '비전'],
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
      category: 'SN AI 스타트업',
      isPinned: true
    }
  ];

  // SN Academy 블로그 포스트 데이터 (모든 카테고리 통합)
  const allPosts = [
    {
      id: 1,
      title: 'SN에서 교육 AI 스타트업을 창업했습니다.',
      excerpt: '독학기숙학원의 명가 SN에서 이번에 새롭게 에듀테크 AI를 만들었습니다. 우리의 비전, 앞으로의 미션, 팀 구성원, AI 제품들을 소개합니다. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
      date: 'Sep 25, 2025',
      readTime: '10 min read',
      tags: ['SN AI 스타트업', '에듀테크', 'AI교육', '비전'],
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
      category: 'SN AI 스타트업'
    },
    {
      id: 2,
      title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
      excerpt: '정철의 관동별곡을 현대적 브이로그 형식으로 재해석! 강원도의 아름다운 자연과 정철의 감정을 생생하게 느껴보세요. 수능 고전문학의 대표작을 재미있게 배우는 특별한 시간입니다.',
      date: 'Sep 19, 2025',
      readTime: '9 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '관동별곡'],
      thumbnail: 'https://img.youtube.com/vi/9T06DoJaMHs/maxresdefault.jpg',
      category: 'SN Originals'
    },
    {
      id: 3,
      title: '좋긴 한데 유배 생활 이래도 됨? 고전문학 「북천가」',
      excerpt: '북천가는 조선 후기 문인들의 유배 생활을 그린 작품으로, 자연에 대한 사랑과 정치적 현실에 대한 아쉬움을 담고 있습니다. 수능 고전문학의 핵심 작품을 쉽고 재미있게 이해해보세요!',
      date: 'Sep 20, 2025',
      readTime: '6 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '북천가'],
      thumbnail: 'https://img.youtube.com/vi/xhyppBm3_o4/maxresdefault.jpg',
      category: 'SN Originals'
    },
    {
      id: 4,
      title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
      excerpt: '화왕가는 조선 후기 작가 김만중의 작품으로, 당시 사회의 모순과 부조리를 풍자한 고전문학입니다. 현대적 해석과 함께 수능에 자주 출제되는 핵심 내용을 재미있게 배워보세요!',
      date: 'Sep 21, 2025',
      readTime: '7 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '화왕가'],
      thumbnail: 'https://img.youtube.com/vi/6tsl5IIMy_o/maxresdefault.jpg',
      category: 'SN Originals'
    },
    {
      id: 5,
      title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
      excerpt: 'AI 그림과 친절한 해설로 즐기는 고전문학! 보기만 해도 국어 감각이 살아납니다. 수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!',
      date: 'Sep 22, 2025',
      readTime: '8 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '갑민가'],
      thumbnail: 'https://img.youtube.com/vi/3ZGE-RvBinQ/maxresdefault.jpg',
      category: 'SN Originals'
    }
  ];

  // 모든 카테고리 글 통합 및 최신순 정렬
  const combinedPosts = [...allPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // 고정 글과 일반 글 분리
  const pinnedIds = pinnedPosts.map(post => post.id);
  const regularPosts = combinedPosts.filter(post => !pinnedIds.includes(post.id));

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 고정 글 섹션 */}
      {pinnedPosts.length > 0 && (
        <div className="space-y-4 lg:space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-sn-primary rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              추천 글
            </h2>
          </div>
          {pinnedPosts.map((post) => (
            <article
              key={post.id}
              className="border border-sn-primary/20 dark:border-sn-primary/30 rounded-lg p-4 bg-sn-primary/5 dark:bg-sn-primary/10"
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
                    <a href={`/posts/${post.id}`}>
                      📌 {post.title}
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
                    <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category}</span>
                  </div>

                  {/* 5. 태그 */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs font-medium bg-sn-primary/10 dark:bg-sn-primary/20 text-sn-primary dark:text-sn-primary-light rounded"
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
                        className="inline-block px-2 py-1 text-xs font-medium bg-sn-primary/10 dark:bg-sn-primary/20 text-sn-primary dark:text-sn-primary-light rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 제목 */}
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <a href={`/posts/${post.id}`}>
                      📌 {post.title}
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
                    <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* 일반 글 섹션 */}
      <div className="space-y-4 lg:space-y-6">
        {pinnedPosts.length > 0 && (
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              최신 글
            </h2>
          </div>
        )}
        {regularPosts.map((post) => (
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
                  <a href={`/posts/${post.id}`}>
                    {post.title}
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
                  <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category || '기타'}</span>
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
                  <a href={`/posts/${post.id}`}>
                    {post.title}
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
                  <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category || '기타'}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center pt-6 lg:pt-8">
        <nav className="flex items-center space-x-1 sm:space-x-2">
          <button className="px-3 py-2 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
            이전
          </button>
          <button className="px-3 py-2 text-sm sm:text-base font-medium text-white bg-sn-primary rounded">
            1
          </button>
          <button className="px-3 py-2 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            2
          </button>
          <button className="px-3 py-2 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            3
          </button>
          <button className="px-3 py-2 text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            다음
          </button>
        </nav>
      </div>
    </div>
  );
}
