'use client';

import { usePathname } from 'next/navigation';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';
import type { RelatedIndex } from '@/lib/related-posts';

// 지금 보고 있는 글과 태그·연재·분류가 겹치는 글. 글 페이지가 아니면 아무것도 그리지 않는다
export default function SidebarRelated({ index }: { index: RelatedIndex }) {
  const pathname = usePathname();
  const related = index.byUrl[decodeURI(pathname ?? '')];
  if (!related?.length) return null;

  // 모바일에서는 사이드바가 글 아래로 내려가 글 끝 '함께 읽을 글'과 겹치므로 넓은 화면에서만 보인다
  return (
    <div className="hidden lg:block">
      <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-3 lg:mb-4">
        함께 읽을 글
      </h3>
      <div className="space-y-2 lg:space-y-3">
        {related.map(position => {
          const post = index.items[position];
          return (
            <div key={post.id} className="space-y-1">
              <TrackedPostLink
                href={post.url}
                postId={post.id}
                placement="sidebar_related"
                className="block text-xs lg:text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
              >
                {post.title}
              </TrackedPostLink>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {post.date}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
