import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogLayout from '@/components/BlogLayout';
import ProblemLogSummary from '@/components/problems/ProblemLogSummary';
import CardNewsCarousel from '@/components/posts/CardNewsCarousel';
import { CARD_NEWS } from '@/data/card-news';
import { loadPostContent } from '@/lib/post-content';
import { BASE_URL, EXAM_TYPE_CONFIG } from '@/lib/config';
import { buildExamJsonLd } from '@/lib/exam-jsonld';
import { getAiProblemPosts, getProblemRoutePosts } from '@/lib/problems';

interface ProblemPostPageProps {
  params: Promise<{ slug: string }>;
}

// 'ai-problem', 'korean-exam-analysis' 카테고리 글만 이 경로로 서빙한다
function findPost(slug: string) {
  return getProblemRoutePosts().find(post => post.id === slug);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getProblemRoutePosts().map(post => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: ProblemPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return { title: '글을 찾을 수 없습니다 | SN독학기숙학원' };
  }

  // 블로그 이름은 루트 레이아웃의 title.template 이 붙인다
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

export default async function ProblemPostPage({
  params,
}: ProblemPostPageProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  // 허브(수능 문제 연구) 안의 구역: 기출 읽을거리 / AI 출제 노트
  const section = post.exam
    ? { name: '기출 읽을거리', href: '/problems#readings' }
    : { name: 'AI 출제 노트', href: '/problems#ai-notes' };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '수능 문제 연구',
        item: `${BASE_URL}/problems`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: section.name,
        item: `${BASE_URL}${section.href}`,
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
  const content = loadPostContent(post.id, post.category);
  const examJsonLd = buildExamJsonLd(post, content);

  // 기출 읽을거리끼리 서로 잇는다 (최신 학년도 먼저)
  const relatedExamPosts = post.exam
    ? getProblemRoutePosts()
        .filter(other => other.exam && other.id !== post.id)
        .sort((a, b) => b.exam!.year - a.exam!.year)
    : [];

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
      {examJsonLd.map((data, i) => (
        <script
          key={i}
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
        lead={cardNews && <CardNewsCarousel cards={cardNews} />}
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
      {post.problemLog ? (
        <ProblemLogSummary
          log={post.problemLog}
          date={post.date}
          siblings={siblings}
        />
      ) : (
        <div className="mx-auto max-w-3xl px-6 pb-12">
          <Link
            href={section.href}
            className="inline-block text-sm font-medium text-sn-primary hover:underline dark:text-emerald-400"
          >
            ← {section.name} 목록으로
          </Link>
        </div>
      )}
    </>
  );
}
