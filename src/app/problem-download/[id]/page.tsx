import { Metadata } from 'next';
import { getPostById, getPostsByCategory } from '@/data/posts';
import { notFound } from 'next/navigation';
import BlogLayout from '@/components/BlogLayout';

interface ProblemDownloadDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProblemDownloadDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostById(resolvedParams.id);

  if (!post) {
    return {
      title: '문제를 찾을 수 없습니다 | SN독학기숙학원',
    };
  }

  return {
    metadataBase: new URL('https://blog.snacademy.co.kr'),
    title: `${post.title} | SN독학기숙학원 문제 다운로드`,
    description: post.excerpt,
    alternates: {
      canonical: post.url,
    },
    openGraph: {
      title: `${post.title} | SN독학기숙학원 문제 다운로드`,
      description: post.excerpt,
      type: 'article',
      locale: 'ko_KR',
      url: `https://blog.snacademy.co.kr${post.url}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.thumbnail
        ? [
            {
              url: `https://blog.snacademy.co.kr${post.thumbnail}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | SN독학기숙학원 문제 다운로드`,
      description: post.excerpt,
      images: post.thumbnail
        ? [`https://blog.snacademy.co.kr${post.thumbnail}`]
        : undefined,
    },
    keywords: post.tags,
    robots: {
      index: true,
      follow: true,
    },
  };
}

function generateJsonLd(post: NonNullable<ReturnType<typeof getPostById>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author,
      alternateName: ['SN독학기숙학원', 'SN고요의숲', 'SN고요의숲 독학재수'],
      url: 'https://blog.snacademy.co.kr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SN독학기숙학원',
      alternateName: ['SN고요의숲', 'SN Academy', 'SN고요의숲 독학재수'],
      url: 'https://blog.snacademy.co.kr',
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blog.snacademy.co.kr${post.url}`,
    },
    keywords: post.tags?.join(', '),
    ...(post.thumbnail
      ? {
          image: {
            '@type': 'ImageObject',
            url: `https://blog.snacademy.co.kr${post.thumbnail}`,
          },
        }
      : {}),
  };
}

export async function generateStaticParams() {
  const mathProblems = getPostsByCategory('problem-download');
  const koreanProblems = getPostsByCategory('korean-problem');

  return [...mathProblems, ...koreanProblems].map(post => ({
    id: post.id,
  }));
}

export default async function ProblemDownloadDetailPage({
  params,
}: ProblemDownloadDetailPageProps) {
  const resolvedParams = await params;
  const post = getPostById(resolvedParams.id);

  if (!post) {
    notFound();
  }

  const jsonLd = generateJsonLd(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogLayout post={post} />
    </>
  );
}
