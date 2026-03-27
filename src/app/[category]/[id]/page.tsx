import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import StructuredData from '@/components/StructuredData';
import AIDataGenerator from '@/components/AIDataGenerator';
import { getPostById, getPostsByCategory } from '@/data/posts';
import { loadPostContent } from '@/lib/post-content';
import { renderMarkdown } from '@/lib/markdown-renderer';
import { formatReadableOriginalsContent } from '@/lib/originals-content';
import { getCategoryConfig, formatReadTime } from '@/lib/utils';
import ArticleContent from '@/components/ArticleContent';
import SNarGPTGuidePost from '@/components/special-posts/SNarGPTGuidePost';
import { PROSE_CLASSES } from '@/lib/constants';

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
  const categories = ['columns', 'startup', 'originals', 'school-exam'];
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

/** 특수 포스트 ID → 컴포넌트 매핑 */
const SPECIAL_POST_COMPONENTS: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  SNargopost_1: () => import('@/components/special-posts/SNarGOClient'),
};

export default async function PostPage({ params }: PostPageProps) {
  const { category, id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  // 특수 포스트: 전용 컴포넌트가 등록된 경우
  const specialLoader = SPECIAL_POST_COMPONENTS[id];
  if (post.type === 'special' && specialLoader) {
    const Component = (await specialLoader()).default;
    return <Component />;
  }

  // 콘텐츠를 파일에서 로딩
  const rawContent = loadPostContent(post.id, post.category);
  const content =
    category === 'originals'
      ? formatReadableOriginalsContent(rawContent)
      : rawContent;
  const config = getCategoryConfig(category);

  // snargpt-guide-1: 콘텐츠를 마커 기준으로 분할하여 인터페이스 삽입
  const isSnargptGuide = id === 'snargpt-guide-1';
  const snargptParts = isSnargptGuide
    ? (() => {
        const [before2, after2 = ''] = content.split(
          '<!-- SNARGPT_INTERFACE_2 -->'
        );
        const marker = '## 🧠 SNarGPT로 할 수 있는 일들';
        const [beforeMain, afterMain = ''] = before2.split(marker);
        return {
          beforeInterface: renderMarkdown(beforeMain),
          afterInterface: renderMarkdown(marker + afterMain),
          afterGraph: renderMarkdown(after2),
        };
      })()
    : null;

  const renderedContent = isSnargptGuide ? '' : renderMarkdown(content);

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
            {post.badge && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                  {post.badge}
                </span>
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title.includes('\n') ? (
                <>
                  {post.title.split('\n')[0]}
                  <span className="block text-xl md:text-2xl font-normal text-slate-500 dark:text-gray-400 mt-3">
                    {post.title.split('\n')[1]}
                  </span>
                </>
              ) : (
                post.title
              )}
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
                {formatReadTime(post.readTime)}
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
            {snargptParts ? (
              <SNarGPTGuidePost renderedParts={snargptParts} />
            ) : (
              <ArticleContent
                content={renderedContent}
                className={PROSE_CLASSES}
              />
            )}
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
          content: content,
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
