export default function Home() {
  // 고정 글 설정 (1-3개 유동적)
  const pinnedPosts = [
    {
      id: 1,
      title: '2024 수능 완전 분석: 주요 변화점과 대비 전략',
      excerpt: '2024년 수능의 주요 변화점을 분석하고 효과적인 대비 전략을 제시합니다. 특히 국어 영역의 독서 지문 길이 증가와 수학 영역의 문제 유형 변화에 대해 자세히 다룹니다. SN에서 3년간 축적된 데이터를 바탕으로 한 실질적인 조언을 제공합니다.',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      tags: ['입시정보', '수능', '분석'],
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center',
      category: '입시정보',
      isPinned: true
    }
  ];

  // SN Academy 블로그 포스트 데이터 (모든 카테고리 통합)
  const allPosts = [
    {
      id: 1,
      title: '2024 수능 완전 분석: 주요 변화점과 대비 전략',
      excerpt: '2024년 수능의 주요 변화점을 분석하고 효과적인 대비 전략을 제시합니다. 특히 국어 영역의 독서 지문 길이 증가와 수학 영역의 문제 유형 변화에 대해 자세히 다룹니다. SN에서 3년간 축적된 데이터를 바탕으로 한 실질적인 조언을 제공합니다.',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      tags: ['입시정보', '수능', '분석'],
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center',
      category: '입시정보'
    },
    {
      id: 2,
      title: 'SN 학습법: 효과적인 자기주도학습 방법',
      excerpt: 'SN에서 검증된 자기주도학습 방법을 소개합니다. 계획 세우기부터 실행, 피드백까지의 전체 과정을 단계별로 설명하고, 실제 학생들의 성공 사례를 통해 구체적인 적용 방법을 제시합니다. 특히 고3 수험생들에게 도움이 되는 실용적인 내용을 담았습니다.',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      tags: ['컬럼', '학습법', '자기주도학습'],
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center',
      category: '컬럼'
    },
    {
      id: 3,
      title: '서울대 합격생 후기: 3년간의 SN 생활',
      excerpt: '서울대에 합격한 김○○ 학생의 SN 3년 생활 후기를 공유합니다. 입학부터 졸업까지의 과정에서 겪었던 어려움과 극복 방법, 그리고 SN에서 얻은 것들에 대해 솔직하게 이야기합니다. 후배들에게 전하는 조언도 함께 들어보세요.',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      tags: ['후기', '서울대', '합격'],
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&crop=center',
      category: '후기'
    },
    {
      id: 4,
      title: 'SN 특별 프로그램: 겨울방학 집중 캠프',
      excerpt: '2024년 겨울방학을 맞아 SN에서 진행하는 특별 프로그램을 소개합니다. 수능 대비 집중 캠프, 논술 특강, 면접 준비반 등 다양한 프로그램이 준비되어 있습니다. 각 프로그램의 특징과 참가 방법, 그리고 기대 효과에 대해 자세히 알아보세요.',
      date: 'Dec 8, 2024',
      readTime: '5 min read',
      tags: ['SN AI 스타트업', '특별프로그램', '겨울방학'],
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center',
      category: 'SN AI 스타트업'
    },
    {
      id: 5,
      title: '의대 입시 가이드: 2024년 최신 트렌드',
      excerpt: '의대 입시의 최신 동향과 변화를 분석합니다. 학생부종합전형의 비중 증가, 면접 형태의 변화, 그리고 각 대학별 특징을 종합적으로 정리했습니다. 의대를 목표로 하는 학생들과 학부모님께 도움이 되는 실질적인 정보를 제공합니다.',
      date: 'Dec 5, 2024',
      readTime: '12 min read',
      tags: ['입시정보', '의대', '학종'],
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center',
      category: '입시정보'
    },
    {
      id: 6,
      title: 'SN 교사진 소개: 경험과 열정의 만남',
      excerpt: 'SN의 자랑스러운 교사진을 소개합니다. 각 분야의 전문가들이 모여 학생들의 꿈을 실현시키기 위해 최선을 다하고 있습니다. 교사들의 경력과 교육 철학, 그리고 학생들과의 특별한 에피소드를 통해 SN만의 교육 문화를 엿볼 수 있습니다.',
      date: 'Dec 3, 2024',
      readTime: '7 min read',
      tags: ['SN AI 스타트업', '교사진', '교육철학'],
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center',
      category: 'SN AI 스타트업'
    },
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
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              추천 글
            </h2>
          </div>
          {pinnedPosts.map((post) => (
            <article
              key={post.id}
              className="border border-blue-200 dark:border-blue-800 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20"
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
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
                  </div>

                  {/* 5. 태그 */}
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded"
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
                        className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 rounded"
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
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
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
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category || '기타'}</span>
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
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category || '기타'}</span>
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
          <button className="px-3 py-2 text-sm sm:text-base font-medium text-white bg-blue-600 rounded">
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
