'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Grid2X2, List } from 'lucide-react';
import type { Post } from '@/data/posts';
import PostCard from '@/components/PostCard';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';

export default function HistoryTabs({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState('all');
  const [view, setView] = useState<'card' | 'list'>('card');
  const filters = [
    { key: 'all', label: '전체보기' },
    ...(posts.some(post => post.tags?.includes('무오사화'))
      ? [{ key: '무오사화', label: '무오사화' }]
      : []),
  ];
  const visiblePosts =
    filter === 'all'
      ? posts
      : posts.filter(post => post.tags?.includes(filter));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="이야기 분류"
        >
          {filters.map(item => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              aria-pressed={filter === item.key}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === item.key ? 'bg-sn-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div
          className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800"
          role="group"
          aria-label="보기 방식"
        >
          {(
            [
              { key: 'card', label: '카드 보기', Icon: Grid2X2 },
              { key: 'list', label: '리스트 보기', Icon: List },
            ] as const
          ).map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setView(key)}
              aria-label={label}
              aria-pressed={view === key}
              className={`rounded p-2 transition-colors ${view === key ? 'bg-white shadow-sm dark:bg-gray-700' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      {visiblePosts.length === 0 ? (
        <p className="py-8 text-center text-gray-500 dark:text-gray-400">
          등록된 이야기가 없습니다.
        </p>
      ) : view === 'card' ? (
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          data-history-view="card"
        >
          {visiblePosts.map(post => (
            <TrackedPostLink
              key={post.id}
              href={post.url}
              postId={post.id}
              placement="history_card"
              className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-950">
                {post.thumbnail && (
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                {post.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-sn-primary px-2 py-1 text-[10px] font-bold text-white shadow-lg">
                    {post.badge}
                  </span>
                )}
              </div>
              <div className="p-3">
                <h3 className="line-clamp-2 text-sm font-medium text-gray-900 transition-colors group-hover:text-sn-primary dark:text-white dark:group-hover:text-emerald-400">
                  {post.title}
                </h3>
              </div>
            </TrackedPostLink>
          ))}
        </div>
      ) : (
        <div className="space-y-4 lg:space-y-6" data-history-view="list">
          {visiblePosts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              analyticsPlacement="history_list"
            />
          ))}
        </div>
      )}
    </div>
  );
}
