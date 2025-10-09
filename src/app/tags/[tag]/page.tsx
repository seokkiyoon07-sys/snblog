import { getAllPosts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const allPosts = getAllPosts();
  const posts = allPosts.filter(
    post => post.published && post.tags?.some(t => t === decodedTag)
  );

  if (posts.length === 0) {
    return {
      title: '태그를 찾을 수 없습니다',
    };
  }

  return {
    metadataBase: new URL('https://blog.snacademy.co.kr'),
    title: `#${decodedTag} | SN Academy Blog`,
    description: `#${decodedTag} 태그가 포함된 포스트들을 확인하세요. SN Academy의 교육 콘텐츠를 태그별로 정리했습니다.`,
    alternates: {
      canonical: `/tags/${encodeURIComponent(decodedTag)}`,
    },
    openGraph: {
      title: `#${decodedTag} | SN Academy Blog`,
      description: `#${decodedTag} 태그가 포함된 포스트들을 확인하세요. SN Academy의 교육 콘텐츠를 태그별로 정리했습니다.`,
      type: 'website',
      locale: 'ko_KR',
      url: `https://blog.snacademy.co.kr/tags/${encodeURIComponent(decodedTag)}`,
      images: [
        {
          url: `/og/tags/${encodeURIComponent(decodedTag)}.jpg`,
          width: 1200,
          height: 630,
          alt: `#${decodedTag} - SN Academy Blog`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `#${decodedTag} | SN Academy Blog`,
      description: `#${decodedTag} 태그가 포함된 포스트들을 확인하세요.`,
      images: [`/og/tags/${encodeURIComponent(decodedTag)}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  // 모든 태그 목록 생성
  const allPosts = getAllPosts();
  const allTags = allPosts
    .filter(post => post.published && post.tags)
    .flatMap(post => post.tags!);
  const uniqueTags = [...new Set(allTags)];

  return uniqueTags.map(tag => ({
    tag: tag, // Next.js가 자동으로 인코딩하므로 여기서는 인코딩하지 않음
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const allPosts = getAllPosts();
  const posts = allPosts.filter(
    post => post.published && post.tags?.some(t => t === decodedTag)
  );

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-6 lg:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
          #{decodedTag}
        </h1>
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 px-4">
          #{decodedTag} 태그가 포함된 포스트 {posts.length}개
        </p>
      </header>

      {/* 포스트 목록 */}
      <section aria-labelledby="tag-posts-heading">
        <h2 id="tag-posts-heading" className="sr-only">
          #{decodedTag} 포스트
        </h2>
        <div
          className="space-y-4 lg:space-y-6"
          role="list"
          aria-label={`#${decodedTag} 포스트 목록`}
        >
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
