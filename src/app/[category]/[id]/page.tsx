import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';
import { getPostById, getPostsByCategory } from '@/data/posts';
import { BlogLayout } from '@/components/BlogComponents';
import { renderMarkdown } from '@/lib/markdown-renderer';
import { getCategoryConfig } from '@/lib/utils';

interface PostPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: 'Post Not Found | SN Academy Blog',
    };
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
      images: post.thumbnail
        ? [
            {
              url: post.thumbnail,
              width: 800,
              height: 400,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export async function generateStaticParams() {
  const categories = ['columns', 'startup', 'originals'];
  const params: { category: string; id: string }[] = [];

  for (const category of categories) {
    const posts = getPostsByCategory(category);
    posts.forEach(post => {
      params.push({
        category,
        id: post.id,
      });
    });
  }

  return params;
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  // 특별한 타입의 포스트는 전용 컴포넌트 사용
  if (post.type === 'special') {
    if (id === 'SNargopost_1') {
      const SNarGOClient = (
        await import('@/components/special-posts/SNarGOClient')
      ).default;
      return <SNarGOClient />;
    }
    // 다른 특별한 포스트들도 여기에 추가 가능
  }

  const config = getCategoryConfig(category);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 text-slate-800 dark:text-gray-100">
      {/* 뒤로가기 버튼 */}
      <div className="px-6 md:px-10 lg:px-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href={config.backLink}
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors"
          >
            {config.backText}
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500 dark:text-gray-400">
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.date}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.readTime}분 읽기
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
                  src={
                    post.youtubeUrl.includes('embed/')
                      ? post.youtubeUrl
                      : post.youtubeUrl.replace('watch?v=', 'embed/')
                  }
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
              {post.tags.map(tag => (
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <article
              className="prose prose-lg prose-slate dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-a:text-sn-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                prose-ul:my-6 prose-li:my-2
                prose-blockquote:border-l-4 prose-blockquote:border-sn-primary prose-blockquote:pl-4 prose-blockquote:italic
                prose-img:rounded-xl prose-img:shadow-md prose-img:my-8"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />
          </div>
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
          subject: config.subject || '일반',
          learningObjectives: config.learningObjectives || [
            '기본 이해',
            '지식 습득',
          ],
        }}
      />
    </main>
  );
}
