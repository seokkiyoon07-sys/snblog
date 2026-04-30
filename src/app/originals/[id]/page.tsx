import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostById, getPostsByCategory } from '@/data/posts';
import { loadPostContent } from '@/lib/post-content';
import { renderMarkdown } from '@/lib/markdown-renderer';
import { formatReadableOriginalsContent } from '@/lib/originals-content';
import { formatReadTime } from '@/lib/utils';
import { PROSE_CLASSES } from '@/lib/constants';

interface OriginalsPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return getPostsByCategory('SN Originals')
    .filter(post => post.id !== 'sn-originals-intro')
    .map(post => ({
      id: post.id,
    }));
}

export async function generateMetadata({
  params,
}: OriginalsPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);

  if (!post || post.category !== 'SN Originals') {
    return {
      title: 'Post Not Found | SN Academy Blog',
    };
  }

  return {
    title: `${post.title} | SN Originals`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || '',
    alternates: {
      canonical: post.url,
    },
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
              width: 1280,
              height: 720,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

export default async function OriginalsPostPage({
  params,
}: OriginalsPostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post || post.category !== 'SN Originals') {
    notFound();
  }

  const rawContent = loadPostContent(post.id, post.category);
  const renderedContent = renderMarkdown(formatReadableOriginalsContent(rawContent));
  const youtubeEmbedUrl = post.youtubeUrl?.replace('watch?v=', 'embed/');

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800 text-slate-800 dark:text-gray-100">
      <div className="px-6 md:px-10 lg:px-16 pt-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/originals"
            className="inline-flex items-center text-sn-primary hover:text-sn-primary-dark transition-colors"
          >
            SN Originals로 돌아가기
          </Link>
        </div>
      </div>

      <section className="px-6 md:px-10 lg:px-16 py-12 md:py-16">
        <article className="mx-auto max-w-5xl">
          <header className="text-center mb-10">
            {post.badge && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                  {post.badge}
                </span>
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-slate-500 dark:text-gray-400">
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden="true">/</span>
              <span>{formatReadTime(post.readTime)}</span>
              <span aria-hidden="true">/</span>
              <span>{post.category}</span>
            </div>
          </header>

          {youtubeEmbedUrl ? (
            <div className="aspect-video mb-10 overflow-hidden rounded-xl shadow-lg bg-black">
              <iframe
                src={youtubeEmbedUrl}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          ) : post.thumbnail ? (
            <div className="relative aspect-video mb-10 overflow-hidden rounded-xl shadow-lg">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          ) : null}

          <div
            className={PROSE_CLASSES}
            dangerouslySetInnerHTML={{ __html: renderedContent }}
          />
        </article>
      </section>
    </main>
  );
}
