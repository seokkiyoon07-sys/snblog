import Link from 'next/link';
import Image from 'next/image';
import { formatReadTime } from '@/lib/utils';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  tags?: string[];
  date: string;
  readTime: string;
  thumbnail?: string;
  url: string;
}

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'featured';
  showThumbnail?: boolean;
  className?: string;
}

export default function PostCard({
  post,
  variant = 'default',
  showThumbnail = true,
  className = '',
}: PostCardProps) {
  const isFeatured = variant === 'featured';

  // 카테고리별 이모지 선택 함수
  const getEmoji = (category: string) => {
    if (category === 'SN Originals') return '🎥';
    if (category === 'startup') return '🤖';
    if (category === 'notice') return '📢';
    return '📚';
  };

  // 추천글도 원글의 카테고리 이모지 사용
  const emoji = getEmoji(post.category);

  // ISO 날짜 형식으로 변환 (YYYY-MM-DD)
  const isoDate = post.date.replace(/\//g, '-');

  // BlogPosting 스키마 마크업
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://blog.snacademy.co.kr${post.url}`,
    datePublished: isoDate,
    author: {
      '@type': 'Organization',
      name: 'SN Academy',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SN Academy',
      url: 'https://snacademy.co.kr',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blog.snacademy.co.kr${post.url}`,
    },
    keywords: post.tags?.join(', ') || '',
    articleSection: post.category,
    wordCount: post.readTime,
    ...(post.thumbnail && {
      image: {
        '@type': 'ImageObject',
        url: post.thumbnail,
        width: 800,
        height: 400,
      },
    }),
  };

  return (
    <article
      className={`${isFeatured ? 'border border-sn-primary/20 dark:border-sn-primary/30 rounded-lg p-4 bg-sn-primary/5 dark:bg-sn-primary/10' : 'border-b border-gray-200 dark:border-gray-700 pb-4 lg:pb-6 last:border-b-0'} ${className}`}
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* 스키마 마크업 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 lg:gap-6">
        {/* 썸네일 */}
        {showThumbnail && post.thumbnail && (
          <div className="relative w-full sm:w-40 lg:w-48 h-48 sm:h-28 lg:h-32 overflow-hidden rounded-lg order-1 sm:order-1">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 10rem, 12rem"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* 콘텐츠 */}
        <div className="space-y-3 order-2 sm:order-2">
          {/* 태그 (데스크톱에서만 상단 표시) */}
          {post.tags && post.tags.length > 0 && (
            <ul
              className="hidden sm:flex flex-wrap gap-2"
              aria-label="포스트 태그"
            >
              {post.tags.map(tag => (
                <li key={tag}>
                  <Link
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded hover:bg-sn-primary/10 dark:hover:bg-sn-primary/20 hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors"
                  >
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* 제목 */}
          <h2
            className={`${isFeatured ? 'text-lg sm:text-xl lg:text-2xl' : 'text-lg sm:text-xl lg:text-2xl'} font-semibold text-gray-900 dark:text-white`}
          >
            <Link href={post.url} itemProp="url" className="inline-flex">
              <span className="mr-2">{emoji}</span>
              <span
                itemProp="headline"
                className="whitespace-pre-line relative inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-400 dark:hover:to-purple-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 dark:after:from-blue-400 dark:after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {post.title}
              </span>
            </Link>
          </h2>

          {/* 요약 */}
          <p
            className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3"
            itemProp="description"
          >
            {post.excerpt}
          </p>

          {/* 메타 정보 */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-sm lg:text-base text-gray-500 dark:text-gray-400">
            <time
              dateTime={isoDate}
              className="font-medium"
              itemProp="datePublished"
            >
              {post.date}
            </time>
            <span aria-hidden="true">•</span>
            <span itemProp="wordCount">{formatReadTime(post.readTime)}</span>
            <span aria-hidden="true">•</span>
            <Link
              href={
                post.category === 'columns'
                  ? '/columns'
                  : post.category === 'SN Originals'
                    ? '/originals'
                    : post.category === 'startup'
                      ? '/startup'
                      : post.category === 'notice'
                        ? '/notice'
                        : '#'
              }
              className="text-sn-primary dark:text-sn-primary-light font-medium hover:underline"
              itemProp="articleSection"
            >
              {post.category}
            </Link>
          </div>

          {/* 태그 (모바일에서만 하단 표시) */}
          {post.tags && post.tags.length > 0 && (
            <ul
              className="flex sm:hidden flex-wrap gap-1.5"
              aria-label="포스트 태그"
            >
              {post.tags.map(tag => (
                <li key={tag}>
                  <Link
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded hover:bg-sn-primary/10 dark:hover:bg-sn-primary/20 hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors"
                  >
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}
