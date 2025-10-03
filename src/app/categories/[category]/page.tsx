import { getPostsByCategory, allPosts } from '@/data/posts'
import PostCard from '@/components/PostCard'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const decodedCategory = decodeURIComponent(category)
  const posts = getPostsByCategory(decodedCategory)
  
  if (posts.length === 0) {
    return {
      title: '카테고리를 찾을 수 없습니다',
    }
  }

  // 카테고리 표시명 매핑
  const categoryDisplayNames: Record<string, string> = {
    'SN Originals': 'SN Originals',
    'columns': '컬럼',
    'startup': 'AI 스타트업',
    'problems': '문제 다운로드',
    'reviews': '후기',
    'admissions': '입시정보'
  }

  const displayName = categoryDisplayNames[decodedCategory] || decodedCategory

  return {
    metadataBase: new URL("https://blog.snacademy.co.kr"),
    title: `${displayName} | SN Academy Blog`,
    description: `${displayName} 관련 포스트들을 확인하세요. SN Academy의 교육 콘텐츠를 카테고리별로 정리했습니다.`,
    alternates: { 
      canonical: `/categories/${encodeURIComponent(decodedCategory)}` 
    },
    openGraph: {
      title: `${displayName} | SN Academy Blog`,
      description: `${displayName} 관련 포스트들을 확인하세요. SN Academy의 교육 콘텐츠를 카테고리별로 정리했습니다.`,
      type: 'website',
      locale: 'ko_KR',
      url: `https://blog.snacademy.co.kr/categories/${encodeURIComponent(decodedCategory)}`,
      images: [
        {
          url: `/og/categories/${encodeURIComponent(decodedCategory)}.jpg`,
          width: 1200,
          height: 630,
          alt: `${displayName} - SN Academy Blog`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${displayName} | SN Academy Blog`,
      description: `${displayName} 관련 포스트들을 확인하세요.`,
      images: [`/og/categories/${encodeURIComponent(decodedCategory)}.jpg`],
    },
    robots: { 
      index: true, 
      follow: true 
    },
  }
}

export async function generateStaticParams() {
  // 모든 카테고리 목록 생성
  const categories = [...new Set(allPosts.map(post => post.category))]
  
  return categories.map((category) => ({
    category: encodeURIComponent(category),
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const decodedCategory = decodeURIComponent(category)
  const posts = getPostsByCategory(decodedCategory)

  if (posts.length === 0) {
    notFound()
  }

  // 카테고리 표시명 매핑
  const categoryDisplayNames: Record<string, string> = {
    'SN Originals': 'SN Originals',
    'columns': '컬럼',
    'startup': 'AI 스타트업',
    'problems': '문제 다운로드',
    'reviews': '후기',
    'admissions': '입시정보'
  }

  const displayName = categoryDisplayNames[decodedCategory] || decodedCategory

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-6 lg:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
          {displayName}
        </h1>
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 px-4">
          {displayName} 관련 포스트 {posts.length}개
        </p>
      </header>

      {/* 포스트 목록 */}
      <section aria-labelledby="category-posts-heading">
        <h2 id="category-posts-heading" className="sr-only">{decodedCategory} 포스트</h2>
        <div className="space-y-4 lg:space-y-6" role="list" aria-label={`${decodedCategory} 포스트 목록`}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}