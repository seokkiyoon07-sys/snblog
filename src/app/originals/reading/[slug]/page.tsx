import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleRelated from '@/components/ArticleRelated';
import BlogLayout from '@/components/BlogLayout';
import ReadingLeadMedia from '@/components/problems/ReadingLeadMedia';
import { CARD_NEWS } from '@/data/card-news';
import { getReadingShortsByPostId } from '@/data/reading-shorts';
import { BASE_URL, EXAM_TYPE_CONFIG } from '@/lib/config';
import { buildExamJsonLd } from '@/lib/exam-jsonld';
import { loadPostContent } from '@/lib/post-content';
import { getReadingPosts } from '@/lib/problems';

interface ReadingPostPageProps {
  params: Promise<{ slug: string }>;
}

function findReadingPost(slug: string) {
  return getReadingPosts().find(post => post.id === slug);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getReadingPosts().map(post => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: ReadingPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findReadingPost(slug);

  if (!post) {
    return { title: '글을 찾을 수 없습니다 | SN독학기숙학원' };
  }

  const title = post.title;
  const image = post.thumbnail ? `${BASE_URL}${post.thumbnail}` : undefined;

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description: post.excerpt,
    alternates: { canonical: post.url },
    openGraph: {
      title,
      description: post.excerpt,
      type: 'article',
      locale: 'ko_KR',
      url: `${BASE_URL}${post.url}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
      images: image ? [image] : undefined,
    },
    keywords: post.tags,
    robots: { index: post.published, follow: true },
  };
}

export default async function ReadingPostPage({
  params,
}: ReadingPostPageProps) {
  const { slug } = await params;
  const post = findReadingPost(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'SN Originals',
        item: `${BASE_URL}/originals`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '독서 · 기출 읽을거리',
        item: `${BASE_URL}/originals/reading`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${BASE_URL}${post.url}`,
      },
    ],
  };

  const cardNews = CARD_NEWS[post.id];
  const readingShorts = getReadingShortsByPostId(post.id);
  const content = loadPostContent(post.id, post.category);
  const examJsonLd = buildExamJsonLd(post, content);
  const shortsVideoJsonLd = readingShorts
    ? readingShorts.episodes.map(ep => ({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: ep.videoTitle,
        description: ep.summary,
        thumbnailUrl: `${BASE_URL}${ep.thumbnail}`,
        uploadDate: ep.uploadDate,
        duration: `PT${ep.durationSeconds}S`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${ep.videoId}`,
        contentUrl: ep.youtubeUrl,
        inLanguage: 'ko',
      }))
    : [];

  const relatedExamPosts = getReadingPosts()
    .filter(other => other.exam && other.id !== post.id)
    .sort((a, b) => b.exam!.year - a.exam!.year);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {examJsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, '\\u003c'),
          }}
        />
      ))}
      {shortsVideoJsonLd.map((data, i) => (
        <script
          key={`video-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data).replace(/</g, '\\u003c'),
          }}
        />
      ))}
      {!post.published && (
        <div className="mx-auto mt-6 max-w-3xl rounded border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 dark:border-amber-700 dark:bg-amber-900/30 dark:text-amber-200">
          초안 · 개발 서버에서만 보이는 미공개 글입니다.
        </div>
      )}
      <BlogLayout
        post={{
          ...post,
          content,
        }}
        lead={
          (cardNews || readingShorts) && (
            <ReadingLeadMedia cardNews={cardNews} shorts={readingShorts} />
          )
        }
        footer={<ArticleRelated postId={post.id} />}
      />
      {relatedExamPosts.length > 0 && (
        <nav
          aria-label="다른 기출 읽을거리"
          className="mx-auto max-w-3xl px-6 pb-8"
        >
          <h2 className="mb-3 text-base font-bold text-gray-900 dark:text-white">
            다른 기출 읽을거리
          </h2>
          <ul className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-700 dark:border-gray-700">
            {relatedExamPosts.map(other => (
              <li key={other.id}>
                <Link
                  href={other.url}
                  className="flex items-baseline gap-3 py-3 text-sm hover:text-sn-primary dark:hover:text-emerald-400"
                >
                  <span className="flex-none text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {other.exam!.year}{' '}
                    {EXAM_TYPE_CONFIG[other.exam!.type].label}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {other.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="mx-auto max-w-3xl px-6 pb-12">
        <Link
          href="/originals/reading"
          className="inline-block text-sm font-medium text-sn-primary hover:underline dark:text-emerald-400"
        >
          ← 기출 읽을거리 목록으로
        </Link>
      </div>
    </>
  );
}
