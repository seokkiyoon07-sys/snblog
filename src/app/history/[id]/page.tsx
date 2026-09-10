import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostById, getPostsByCategory } from '@/data/posts';
import { loadPostContent } from '@/lib/post-content';
import { renderMarkdown } from '@/lib/markdown-renderer';
import { BASE_URL } from '@/lib/config';

interface HistoryPostProps {
  params: Promise<{ id: string }>;
}

function getVideoId(value?: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol)) return null;
    const host = url.hostname.replace(/^www\./, '');
    const parts = url.pathname.split('/').filter(Boolean);
    const id =
      host === 'youtu.be'
        ? parts[0]
        : ['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(
              host
            )
          ? ['shorts', 'embed'].includes(parts[0])
            ? parts[1]
            : url.searchParams.get('v')
          : null;
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  return getPostsByCategory('SN History').map(post => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: HistoryPostProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);
  if (!post || !post.published || post.category !== 'SN History') notFound();
  return {
    title: `${post.title} | SN History`,
    description: post.excerpt,
    alternates: { canonical: `/history/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${BASE_URL}/history/${post.id}`,
      ...(post.thumbnail ? { images: [post.thumbnail] } : {}),
    },
  };
}

export default async function HistoryPostPage({ params }: HistoryPostProps) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post || !post.published || post.category !== 'SN History') notFound();
  const videoId = getVideoId(post.youtubeUrl);
  const content = loadPostContent(post.id, post.category);
  return (
    <article className="space-y-7 pb-8">
      <Link
        href="/history"
        className="inline-flex min-h-11 items-center text-sm font-semibold text-amber-700 dark:text-amber-300"
      >
        ← SN History로 돌아가기
      </Link>
      <header>
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 dark:text-amber-300">
          SN HISTORY
        </p>
        <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl dark:text-white">
          {post.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
          {post.excerpt}
        </p>
        <p className="mt-4 text-sm text-slate-500">
          {post.author} · <time dateTime={post.date}>{post.date}</time>
        </p>
      </header>
      {videoId && (
        <div className="mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={post.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        </div>
      )}
      {content && (
        <div
          className="prose prose-slate max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
        />
      )}
      {videoId && (
        <a
          href={`https://www.youtube.com/shorts/${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:border-amber-600 dark:border-slate-600 dark:text-slate-200"
        >
          YouTube에서 보기 ↗
        </a>
      )}
    </article>
  );
}
