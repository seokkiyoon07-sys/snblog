'use client';

import { useState } from 'react';
import PostCard from '@/components/PostCard';
import { STARTUP_SUBCATEGORY_CONFIG, type StartupSubcategory } from '@/lib/config';
import { Post } from '@/data/posts';

interface StartupTabsProps {
  posts: Post[];
}

const TABS: { key: StartupSubcategory; label: string }[] = [
  { key: 'all', label: STARTUP_SUBCATEGORY_CONFIG.all.label },
  { key: 'update', label: STARTUP_SUBCATEGORY_CONFIG.update.label },
  { key: 'tech-blog', label: STARTUP_SUBCATEGORY_CONFIG['tech-blog'].label },
];

export default function StartupTabs({ posts }: StartupTabsProps) {
  const [activeTab, setActiveTab] = useState<StartupSubcategory>('all');

  const filteredPosts = activeTab === 'all'
    ? posts
    : posts.filter(post => post.subcategory === activeTab);

  return (
    <div className="space-y-6">
      {/* 탭 버튼들 */}
      <div className="flex flex-wrap gap-2">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeTab === tab.key
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tab.label}
            <span className="ml-1.5 text-xs opacity-75">
              ({tab.key === 'all'
                ? posts.length
                : posts.filter(p => p.subcategory === tab.key).length})
            </span>
          </button>
        ))}
      </div>

      {/* 탭 설명 */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {STARTUP_SUBCATEGORY_CONFIG[activeTab].description}
      </p>

      {/* 포스트 목록 */}
      {filteredPosts.length > 0 ? (
        <div
          className="space-y-4 lg:space-y-6"
          role="list"
          aria-label="AI 스타트업 포스트 목록"
        >
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          해당 카테고리에 글이 없습니다.
        </p>
      )}
    </div>
  );
}
