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
      images: post.thumbnail ? [
        {
          url: `https://blog.snacademy.co.kr${post.thumbnail}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | SN독학기숙학원 문제 다운로드`,
      description: post.excerpt,
      images: post.thumbnail ? [`https://blog.snacademy.co.kr${post.thumbnail}`] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const problems = getPostsByCategory('problem-download');

  return problems.map(post => ({
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

  return <BlogLayout post={post} />;
}
