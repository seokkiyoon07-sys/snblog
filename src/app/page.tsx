import { getLatestPosts, getFeaturedPosts } from '@/data/posts'

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
  // 동적으로 최신 글과 고정 글 가져오기
  const latestPosts = getLatestPosts(6)
  const featuredPosts = getFeaturedPosts()

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 고정 글 섹션 */}
      {featuredPosts.length > 0 && (
        <div className="space-y-4 lg:space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-sn-primary rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              추천 글
            </h2>
          </div>
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="border border-sn-primary/20 dark:border-sn-primary/30 rounded-lg p-4 bg-sn-primary/5 dark:bg-sn-primary/10"
            >
              {/* 모바일 레이아웃 */}
              <div className="block sm:hidden">
                {/* 1. 썸네일 */}
                {post.thumbnail && (
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                
                {/* 콘텐츠 */}
                <div className="space-y-3">
                  {/* 2. 제목 */}
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors">
                    <a href={post.url}>
                      🎥 {post.title}
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
                {post.thumbnail && (
                  <div className="flex-shrink-0 w-40 sm:w-48 h-28 sm:h-32 overflow-hidden rounded-lg">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                
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
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors">
                    <a href={post.url}>
                      🎥 {post.title}
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

      {/* 최신 글 섹션 */}
      <div className="space-y-4 lg:space-y-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            최신 글
          </h2>
        </div>
        <div className="space-y-4 lg:space-y-6">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 lg:pb-6 last:border-b-0"
            >
              {/* 모바일 레이아웃 */}
              <div className="block sm:hidden">
                {/* 1. 썸네일 */}
                {post.thumbnail && (
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                
                {/* 콘텐츠 */}
                <div className="space-y-3">
                  {/* 2. 제목 */}
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors">
                    <a href={post.url}>
                      🎥 {post.title}
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
                {post.thumbnail && (
                  <div className="flex-shrink-0 w-40 sm:w-48 h-28 sm:h-32 overflow-hidden rounded-lg">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                
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
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors">
                    <a href={post.url}>
                      🎥 {post.title}
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
      </div>
    </div>
  );
}