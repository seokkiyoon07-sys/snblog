import { getFeaturedPosts, getPaginatedPosts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import FeaturedPost from '@/components/FeaturedPost';
import Pagination from '@/components/Pagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title: 'SN Academy Blog | 독학기숙학원의 교육 혁신과 AI 스타트업',
  description:
    'SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다. 수능 대비, 입시 정보, 학습법, 합격 후기까지 모든 교육 정보를 한 곳에서 확인하세요.',
  keywords: ['교육', 'AI', '독학기숙학원', '수능', '입시'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SN Academy Blog | 독학기숙학원의 교육 혁신과 AI 스타트업',
    description:
      'SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/',
    images: [
      { url: '/og/home.jpg', width: 1200, height: 630, alt: 'SN Academy Blog' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN Academy Blog | 독학기숙학원의 교육 혁신과 AI 스타트업',
    description:
      'SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다.',
    images: ['/og/home.jpg'],
  },
  robots: { index: true, follow: true },
};

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  // 페이지네이션을 위한 현재 페이지
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || '1', 10);

  // 서버에서 데이터 패칭 (캐시됨)
  const { posts: latestPosts, totalPages } = await getPaginatedPosts(
    currentPage,
    6
  );
  const featuredPosts = await getFeaturedPosts();

  // 스키마 마크업 데이터
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'SN Academy Blog',
    description:
      'SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다.',
    url: 'https://blog.snacademy.co.kr',
    publisher: {
      '@type': 'Organization',
      name: 'SN Academy',
      url: 'https://snacademy.co.kr',
    },
    blogPost: [
      ...featuredPosts.map(post => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: `https://blog.snacademy.co.kr${post.url}`,
        datePublished: post.date.replace(/\//g, '-'),
        author: {
          '@type': 'Organization',
          name: 'SN Academy',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SN Academy',
        },
        image: post.thumbnail
          ? {
              '@type': 'ImageObject',
              url: post.thumbnail,
            }
          : undefined,
      })),
      ...latestPosts.map(post => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: `https://blog.snacademy.co.kr${post.url}`,
        datePublished: post.date.replace(/\//g, '-'),
        author: {
          '@type': 'Organization',
          name: 'SN Academy',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SN Academy',
        },
        image: post.thumbnail
          ? {
              '@type': 'ImageObject',
              url: post.thumbnail,
            }
          : undefined,
      })),
    ].filter(Boolean),
  };

  return (
    <>
      {/* 스키마 마크업 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="space-y-6 lg:space-y-8">
        {/* 고정 글 섹션 */}
        {featuredPosts.length > 0 && (
          <section aria-labelledby="featured-heading" className="relative">
            <h2 id="featured-heading" className="sr-only">
              추천 글
            </h2>

            {/* 헤더 섹션 */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full border border-blue-200 dark:border-blue-800 mb-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Editor's Pick
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                추천 포스트
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                SN Academy가 엄선한 특별한 콘텐츠를 만나보세요
              </p>
            </div>

            {/* 추천 포스트 그리드 - 동적 레이아웃 */}
            <div
              className={`grid gap-6 ${
                featuredPosts.length === 1
                  ? 'grid-cols-1 max-w-2xl mx-auto'
                  : featuredPosts.length === 2
                    ? 'md:grid-cols-2'
                    : featuredPosts.length === 3
                      ? 'md:grid-cols-2 lg:grid-cols-3'
                      : 'md:grid-cols-2 lg:grid-cols-2'
              }`}
            >
              {featuredPosts.map((post, index) => (
                <a key={post.id} href={post.url} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* 그라데이션 오버레이 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* 순위 배지 */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-bold rounded-full shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* 썸네일 */}
                    {post.thumbnail && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    )}

                    {/* 콘텐츠 */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-xs">
                          {post.readTime}분 읽기
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              S
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {post.author}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          읽기
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* 최신 글 섹션 */}
        <section aria-labelledby="latest-heading">
          <h2 id="latest-heading" className="sr-only">
            최신 글
          </h2>
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="w-2 h-2 bg-blue-500 rounded-full"
                aria-hidden="true"
              ></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                최신 글
              </h3>
            </div>
            <div className="space-y-4 lg:space-y-6">
              {latestPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* 페이지네이션 */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl="/"
            />
          </div>
        </section>
      </div>
    </>
  );
}
