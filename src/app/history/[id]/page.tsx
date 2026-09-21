import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostById, getPostsByCategory } from '@/data/posts';
import { loadPostContent } from '@/lib/post-content';
import { renderMarkdown } from '@/lib/markdown-renderer';
import { BASE_URL } from '@/lib/config';
import { getOdysseyEpisode, formatVideoDuration } from '@/data/odyssey';
import { odysseyVideoSchema, odysseyBreadcrumbs } from '@/lib/odyssey-schema';
import OdysseyEpisodeNotes from '@/components/OdysseyEpisodeNotes';

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
  const episode = getOdysseyEpisode(id);
  return {
    title: episode
      ? { absolute: `${post.title} | SN History` }
      : `${post.title} | SN History`,
    description: post.excerpt,
    alternates: { canonical: `/history/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${BASE_URL}/history/${post.id}`,
      ...(post.thumbnail ? { images: [post.thumbnail] } : {}),
      ...(episode
        ? {
            publishedTime: post.date,
            authors: ['SN History'],
            tags: post.tags,
            locale: 'ko_KR',
          }
        : {}),
    },
    ...(episode
      ? {
          twitter: {
            card: 'summary_large_image' as const,
            title: post.title,
            description: post.excerpt,
            images: [episode.thumbnail],
          },
          keywords: post.tags,
        }
      : {}),
  };
}

export default async function HistoryPostPage({ params }: HistoryPostProps) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post || !post.published || post.category !== 'SN History') notFound();
  const videoId = getVideoId(post.youtubeUrl);
  const episode = getOdysseyEpisode(id);
  const content = loadPostContent(post.id, post.category);
  return (
    <article className="space-y-7 pb-8">
      {episode && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                odysseyVideoSchema(episode),
                odysseyBreadcrumbs(episode),
                {
                  '@type': 'WebPage',
                  '@id': `${BASE_URL}${episode.url}`,
                  url: `${BASE_URL}${episode.url}`,
                  name: episode.title,
                  description: episode.summary,
                  inLanguage: 'ko',
                  datePublished: post.date,
                  mainEntity: { '@id': `${BASE_URL}${episode.url}#video` },
                  isPartOf: { '@id': `${BASE_URL}/history/odyssey#series` },
                },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <nav
        aria-label="현재 위치"
        className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
      >
        <Link
          href="/history"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-amber-700 dark:text-amber-300"
        >
          ← SN History로 돌아가기
        </Link>
        {episode && (
          <>
            <span aria-hidden="true">/</span>
            <Link
              href="/history/odyssey"
              className="py-3 font-semibold text-amber-700 hover:underline dark:text-amber-300"
            >
              오디세이아 24부작
            </Link>
            <span aria-hidden="true">/</span>
            <span>{episode.episode}부</span>
          </>
        )}
      </nav>
      <header>
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 dark:text-amber-300">
          SN HISTORY
        </p>
        <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl dark:text-white">
          {post.title}
        </h1>
        {!episode && (
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            {post.excerpt}
          </p>
        )}
        <p className="mt-4 text-sm text-slate-500">
          {post.author} · 글 게시 <time dateTime={post.date}>{post.date}</time>
        </p>
      </header>
      {videoId && (
        <section
          aria-label={
            episode ? `오디세이아 ${episode.episode}부 영상` : '역사 영상'
          }
          className="space-y-3"
        >
          <div className="mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title={episode?.videoTitle ?? post.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading={episode ? 'eager' : 'lazy'}
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full"
            />
          </div>
          {episode && (
            <p className="mx-auto max-w-xl text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
              {episode.videoTitle}
              <br />
              영상 {formatVideoDuration(episode.durationSeconds)} · YouTube 공개{' '}
              <time dateTime={episode.uploadDate}>
                {new Date(episode.uploadDate).toLocaleDateString('ko-KR', {
                  timeZone: 'Asia/Seoul',
                })}
              </time>
            </p>
          )}
        </section>
      )}
      {episode && (
        <section aria-labelledby="episode-summary" className="space-y-3">
          <h2
            id="episode-summary"
            className="text-xl font-bold text-slate-900 dark:text-white"
          >
            이 편의 줄거리
          </h2>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            {episode.summary}
          </p>
        </section>
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
      {episode && <OdysseyEpisodeNotes episode={episode} />}
    </article>
  );
}
