import { getFeaturedPosts, getPaginatedPosts } from '@/data/posts'
import PostCard from '@/components/PostCard'
import FeaturedPost from '@/components/FeaturedPost'
import Pagination from '@/components/Pagination'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.snacademy.co.kr"),
  title: "SN Academy Blog | 독학기숙학원의 교육 혁신과 AI 스타트업",
  description: "SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다. 수능 대비, 입시 정보, 학습법, 합격 후기까지 모든 교육 정보를 한 곳에서 확인하세요.",
  alternates: { 
    canonical: "/" 
  },
  openGraph: {
    title: "SN Academy Blog | 독학기숙학원의 교육 혁신과 AI 스타트업",
    description: "SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다. 수능 대비, 입시 정보, 학습법, 합격 후기까지 모든 교육 정보를 한 곳에서 확인하세요.",
    type: "website",
    locale: "ko_KR",
    url: "https://blog.snacademy.co.kr/",
    images: [
      { 
        url: "/og/home.jpg", 
        width: 1200, 
        height: 630, 
        alt: "SN Academy Blog - 독학기숙학원의 교육 혁신과 AI 스타트업" 
      }
    ],
  },
  twitter: { 
    card: "summary_large_image",
    title: "SN Academy Blog | 독학기숙학원의 교육 혁신과 AI 스타트업",
    description: "SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다.",
    images: ["/og/home.jpg"]
  },
  robots: { 
    index: true, 
    follow: true 
  },
};

interface HomeProps {
  searchParams: Promise<{ page?: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  // 페이지네이션을 위한 현재 페이지
  const resolvedSearchParams = await searchParams
  const currentPage = parseInt(resolvedSearchParams.page || '1', 10)
  
  // 동적으로 최신 글과 고정 글 가져오기
  const { posts: latestPosts, totalPages } = getPaginatedPosts(currentPage, 6)
  const featuredPosts = getFeaturedPosts()

  // 스키마 마크업 데이터
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SN Academy Blog",
    "description": "SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다.",
    "url": "https://blog.snacademy.co.kr",
    "publisher": {
      "@type": "Organization",
      "name": "SN Academy",
      "url": "https://snacademy.co.kr"
    },
    "blogPost": [
      ...featuredPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://blog.snacademy.co.kr${post.url}`,
        "datePublished": post.date.replace(/\//g, '-'),
        "author": {
          "@type": "Organization",
          "name": "SN Academy"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SN Academy"
        },
        "image": post.thumbnail ? {
          "@type": "ImageObject",
          "url": post.thumbnail
        } : undefined
      })),
      ...latestPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://blog.snacademy.co.kr${post.url}`,
        "datePublished": post.date.replace(/\//g, '-'),
        "author": {
          "@type": "Organization",
          "name": "SN Academy"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SN Academy"
        },
        "image": post.thumbnail ? {
          "@type": "ImageObject",
          "url": post.thumbnail
        } : undefined
      }))
    ].filter(Boolean)
  }

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
          <section aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="sr-only">추천 글</h2>
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-sn-primary rounded-full" aria-hidden="true"></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  추천 글
                </h3>
              </div>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* 최신 글 섹션 */}
        <section aria-labelledby="latest-heading">
          <h2 id="latest-heading" className="sr-only">최신 글</h2>
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                최신 글
              </h3>
            </div>
            <div className="space-y-4 lg:space-y-6">
              {latestPosts.map((post) => (
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