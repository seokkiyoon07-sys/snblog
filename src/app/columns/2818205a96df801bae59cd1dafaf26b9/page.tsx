import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import AIDataGenerator from '@/components/AIDataGenerator'
import { getPostById } from '@/data/posts'

export async function generateMetadata(): Promise<Metadata> {
  const post = getPostById('2818205a96df801bae59cd1dafaf26b9')
  
  if (!post) {
    return {
      title: 'Post Not Found | SN Academy Blog',
    }
  }

  return {
    title: `${post.title} | SN Academy Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'ko_KR',
      url: `https://blog.snacademy.co.kr${post.url}`,
      images: post.thumbnail ? [
        {
          url: post.thumbnail,
          width: 800,
          height: 400,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  }
}

export default function PostPage() {
  const post = getPostById('2818205a96df801bae59cd1dafaf26b9')

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* 뒤로가기 버튼 */}
      <div className="px-6 md:px-10 lg:px-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <Link 
            href="/columns" 
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors"
          >
            ← 컬럼으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {post.date}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {post.readTime} min read
              </span>
            </div>
          </div>

          {/* 썸네일 */}
          {post.thumbnail && (
            <div className="mb-12">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          )}

          {/* YouTube 영상 */}
          {post.youtubeUrl && (
            <div className="mb-12">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={post.youtubeUrl.replace('watch?v=', 'embed/')}
                  title={post.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* 태그 */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-sn-primary/10 text-sn-primary rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 콘텐츠 */}
      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>
        </div>
      </section>

      {/* 구조화된 데이터 */}
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          author: {
            '@type': 'Person',
            name: post.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'SN Academy',
            logo: {
              '@type': 'ImageObject',
              url: 'https://blog.snacademy.co.kr/logo.png',
            },
          },
          datePublished: post.date,
          dateModified: post.date,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://blog.snacademy.co.kr${post.url}`,
          },
          image: post.thumbnail,
          articleSection: post.category,
          keywords: post.tags.join(', '),
        }}
      />

      {/* AI 학습 데이터 */}
      <AIDataGenerator
        data={{
          learningObjectives: ['방화벽의 개념과 중요성 이해', 'SN Academy의 AI 방화벽 시스템 이해', '교육 환경에서의 보안 솔루션 이해'],
          difficulty: 'intermediate',
          subject: '정보보안',
          keywords: ['방화벽', 'AI', '보안', '교육', '기숙학원'],
          estimatedTime: post.readTime,
        }}
      />
    </main>
  )
}
