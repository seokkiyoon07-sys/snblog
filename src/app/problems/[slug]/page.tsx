import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogLayout from '@/components/BlogLayout';
import ProblemLogSummary from '@/components/problems/ProblemLogSummary';
import { loadPostContent } from '@/lib/post-content';
import { BASE_URL } from '@/lib/config';
import { AI_PROBLEM_CATEGORY, getAiProblemPosts } from '@/lib/problems';

interface ProblemPostPageProps {
  params: Promise<{ slug: string }>;
}

// 'ai-problem' 카테고리 글만 이 경로로 서빙한다
function findPost(slug: string) {
  return getAiProblemPosts().find(post => post.id === slug);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getAiProblemPosts().map(post => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: ProblemPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return { title: '글을 찾을 수 없습니다 | SN독학기숙학원' };
  }

  const title = `${post.title} | SN AI 수능 출제`;
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
    robots: { index: true, follow: true },
  };
}

export default async function ProblemPostPage({
  params,
}: ProblemPostPageProps) {
  const { slug } = await params;
  const post = findPost(slug);

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
        name: 'AI 수능 출제',
        item: `${BASE_URL}/problems`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.title,
        item: `${BASE_URL}${post.url}`,
      },
    ],
  };

  const siblings = post.problemLog
    ? getAiProblemPosts().filter(
        other =>
          other.id !== post.id && other.problemLog && other.date === post.date
      )
    : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogLayout
        post={{
          ...post,
          content: loadPostContent(post.id, AI_PROBLEM_CATEGORY),
        }}
      />
      {post.problemLog ? (
        <ProblemLogSummary
          log={post.problemLog}
          date={post.date}
          siblings={siblings}
        />
      ) : (
        <div className="mx-auto max-w-3xl px-6 pb-12">
          <Link
            href="/problems"
            className="inline-block text-sm font-medium text-sn-primary hover:underline dark:text-emerald-400"
          >
            ← AI 수능 출제로 돌아가기
          </Link>
        </div>
      )}
    </>
  );
}
