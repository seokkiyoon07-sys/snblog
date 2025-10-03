import { getPostsByCategory, getPostById } from '@/data/posts'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SN Originals | 보기만 해도 수능 점수가 오르는 컨텐츠',
  description: 'SN Originals에서 수능 고전문학을 재미있게 배우세요. 갑민가, 화왕가, 북천가, 관동별곡 등 고전문학을 AI 그림과 친절한 해설로 즐기며 수능 국어 감각을 기를 수 있습니다.',
  keywords: 'SN Originals, 수능 고전문학, 갑민가, 화왕가, 북천가, 관동별곡, 수능 국어, 고전문학, 수능 대비',
  openGraph: {
    title: 'SN Originals | 보기만 해도 수능 점수가 오르는 컨텐츠',
    description: 'SN Originals에서 수능 고전문학을 재미있게 배우세요. AI 그림과 친절한 해설로 수능 국어 감각을 기를 수 있습니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/originals',
    images: [
      {
        url: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'SN Originals - 고전문학 시리즈',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN Originals | 보기만 해도 수능 점수가 오르는 컨텐츠',
    description: 'SN Originals에서 수능 고전문학을 재미있게 배우세요. AI 그림과 친절한 해설로 수능 국어 감각을 기를 수 있습니다.',
    images: ['https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg'],
  },
};

export default function OriginalsPage() {
  // SN Originals 소개글 (고정)
  const introPost = getPostById('sn-originals-intro')
  
  // SN Originals 카테고리 글들 (소개글 제외)
  const originalsPosts = getPostsByCategory('SN Originals')
    .filter(post => post.id !== 'sn-originals-intro')

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* SN Originals 소개글 (고정) */}
      {introPost && (
        <div className="space-y-4 lg:space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-sn-primary rounded-full"></div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              SN Originals 소개
            </h2>
          </div>
          <article className="border border-sn-primary/20 dark:border-sn-primary/30 rounded-lg p-4 bg-sn-primary/5 dark:bg-sn-primary/10">
            {/* 모바일 레이아웃 */}
            <div className="block sm:hidden">
              {/* 썸네일 */}
              {introPost.thumbnail && (
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={introPost.thumbnail}
                    alt={introPost.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              
              {/* 콘텐츠 */}
              <div className="space-y-3">
                {/* 제목 */}
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors">
                  <Link href={introPost.url}>
                    📚 {introPost.title}
                  </Link>
                </h2>

                {/* 요약 */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {introPost.excerpt}
                </p>

                {/* 메타 정보 */}
                <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                  <span>{introPost.date}</span>
                  <span>•</span>
                  <span>{introPost.readTime}</span>
                  <span>•</span>
                  <span className="text-sn-primary dark:text-sn-primary-light font-medium">{introPost.category}</span>
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-1.5">
                  {introPost.tags.map((tag) => (
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
              {introPost.thumbnail && (
                <div className="flex-shrink-0 w-40 sm:w-48 h-28 sm:h-32 overflow-hidden rounded-lg">
                  <img
                    src={introPost.thumbnail}
                    alt={introPost.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              
              {/* 콘텐츠 */}
              <div className="flex-1 space-y-3">
                {/* 태그 */}
                <div className="flex flex-wrap gap-2">
                  {introPost.tags.map((tag) => (
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
                  <Link href={introPost.url}>
                    📚 {introPost.title}
                  </Link>
                </h2>

                {/* 요약 */}
                <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {introPost.excerpt}
                </p>

                {/* 메타 정보 */}
                <div className="flex items-center space-x-4 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                  <span>{introPost.date}</span>
                  <span>•</span>
                  <span>{introPost.readTime}</span>
                  <span>•</span>
                  <span className="text-sn-primary dark:text-sn-primary-light font-medium">{introPost.category}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* 고전문학 시리즈 글들 */}
      <div className="space-y-4 lg:space-y-6">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            고전문학 시리즈
          </h2>
        </div>
        <div className="space-y-4 lg:space-y-6">
          {originalsPosts.map((post) => (
            <article
              key={post.id}
              className="border-b border-gray-200 dark:border-gray-700 pb-4 lg:pb-6 last:border-b-0"
            >
              {/* 모바일 레이아웃 */}
              <div className="block sm:hidden">
                {/* 썸네일 */}
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
                  {/* 제목 */}
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors">
                    <Link href={post.url}>
                      🎥 {post.title}
                    </Link>
                  </h2>

                  {/* 요약 */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* 메타 정보 */}
                  <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category}</span>
                  </div>

                  {/* 태그 */}
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
                    <Link href={post.url}>
                      🎥 {post.title}
                    </Link>
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