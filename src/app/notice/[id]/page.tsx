import { Metadata } from 'next';
import { getPostById, getPostsByCategory } from '@/data/posts';
import { notFound } from 'next/navigation';
import BlogLayout from '@/components/BlogLayout';

interface NoticeDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: NoticeDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostById(resolvedParams.id);

  if (!post) {
    return {
      title: '공지사항을 찾을 수 없습니다 | SN독학기숙학원',
    };
  }

  return {
    metadataBase: new URL('https://blog.snacademy.co.kr'),
    title: `${post.title} | SN독학기숙학원 공지사항`,
    description: post.excerpt,
    alternates: {
      canonical: post.url,
    },
    openGraph: {
      title: `${post.title} | SN독학기숙학원 공지사항`,
      description: post.excerpt,
      type: 'article',
      locale: 'ko_KR',
      url: `https://blog.snacademy.co.kr${post.url}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | SN독학기숙학원 공지사항`,
      description: post.excerpt,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  const notices = getPostsByCategory('notice');

  return notices.map(post => ({
    id: post.id,
  }));
}

export default async function NoticeDetailPage({
  params,
}: NoticeDetailPageProps) {
  const resolvedParams = await params;
  const post = getPostById(resolvedParams.id);

  if (!post) {
    notFound();
  }

  return <BlogLayout post={post} />;
}
