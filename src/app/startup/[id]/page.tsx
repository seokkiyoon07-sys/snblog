import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StructuredData from '@/components/StructuredData'
import AIDataGenerator from '@/components/AIDataGenerator'
import { getPostById } from '@/data/posts'
import { BlogLayout, BlogImage, Quote, Highlight, InfoBox, SuccessBox, Section, FeatureList, Callout, CodeBlock } from '@/components/BlogComponents'

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: 'Post Not Found | SN Academy Blog',
    }
  }

  return {
    title: `${post.title} | SN Academy Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || '',
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

export async function generateStaticParams() {
  const { getPostsByCategory } = await import('@/data/posts');
  const startupPosts = getPostsByCategory('startup');

  return startupPosts.map((post) => ({
    id: post.id,
  }))
}

export default async function StartupPostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* 뒤로가기 버튼 */}
      <div className="px-6 md:px-10 lg:px-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/startup"
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors"
          >
            ← AI 스타트업으로 돌아가기
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

          {/* 썸네일 (YouTube 영상이 없을 때만) */}
          {post.thumbnail && !post.youtubeUrl && (
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
          {post.tags && post.tags.length > 0 && (
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
          <BlogLayout title={post.title}>
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{
                __html: post.content
                  // 링크 변환
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-sn-primary hover:text-sn-primary-dark underline font-semibold" target="_blank" rel="noopener noreferrer">$1</a>')
                  // 제목 변환
                  .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6 text-gray-900">$1</h1>')
                  .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mb-4 text-gray-800">$1</h2>')
                  .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-3 text-gray-700">$1</h3>')
                  .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mb-2 text-gray-700">$1</h4>')
                  // 강조 텍스트 변환
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                  // 이미지 변환
                  .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="my-8"><div class="relative w-full h-auto"><img src="$2" alt="$1" class="rounded-xl shadow-md mx-auto w-full h-auto object-contain" /></div><figcaption class="text-center text-gray-500 mt-2 text-sm">$1</figcaption></figure>')
                  // 문단 처리
                  .split('\n\n')
                  .map(paragraph => {
                    if (paragraph.trim() === '') return '';
                    if (paragraph.startsWith('#')) return paragraph;
                    if (paragraph.startsWith('![')) return paragraph;
                    if (paragraph.startsWith('- ')) {
                      return `<ul class="list-disc list-inside mb-4 space-y-2">${paragraph.split('\n').map(item =>
                        item.trim().startsWith('- ') ? `<li class="text-gray-700">${item.replace(/^- /, '')}</li>` : ''
                      ).join('')}</ul>`;
                    }
                    return `<p class="mb-4 text-gray-700 leading-relaxed">${paragraph}</p>`;
                  })
                  .join('')
              }}
            />
          </BlogLayout>
        </div>
      </section>

      {/* 구조화된 데이터 */}
      <StructuredData
        type="article"
        data={{
          title: post.title,
          description: post.excerpt,
          author: post.author,
          datePublished: post.date,
          dateModified: post.date,
          image: post.thumbnail,
          url: `https://blog.snacademy.co.kr${post.url}`,
          category: post.category,
          keywords: post.tags?.join(', ') || '',
        }}
      />

      {/* AI 학습 데이터 */}
      <AIDataGenerator
        content={{
          title: post.title,
          description: post.excerpt,
          author: post.author,
          category: post.category,
          tags: post.tags || [],
          content: post.content,
          difficulty: 'intermediate',
          subject: '기술',
          learningObjectives: ['AI 교육 기술 이해', '스타트업 창업 과정 학습', '혁신적인 교육 솔루션 탐구'],
        }}
      />
    </main>
  )
}