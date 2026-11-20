import { getLatestPosts, getPosts, allPosts } from '@/data/posts';
import SidebarRelated from '@/components/SidebarRelated';
import { buildRelatedIndex } from '@/lib/related-posts';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';

export default function Sidebar() {
  // 동적으로 태그 데이터 생성
  const tagCounts = allPosts
    .filter(post => post.published && post.tags)
    .flatMap(post => post.tags!)
    .reduce(
      (acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

  const tags = Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // 최근 포스트 데이터 (동적)
  const recentPosts = getLatestPosts(6);

  // 지금 보는 글과 이어지는 글 (글 페이지에서만 보인다)
  const relatedIndex = buildRelatedIndex(getPosts());

  return (
    <aside className="space-y-6 lg:space-y-8">
      <SidebarRelated index={relatedIndex} />

      {/* 태그 섹션 */}
      <div>
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-3 lg:mb-4">
          태그
        </h3>
        <div className="flex flex-wrap gap-1.5 lg:gap-2">
          {tags.map(tag => (
            <a
              key={tag.name}
              href={`/tags/${encodeURIComponent(tag.name)}`}
              className="inline-flex items-center px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {tag.name}
              <span className="ml-1 text-gray-500 dark:text-gray-400">
                ({tag.count})
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 최근 글 */}
      <div>
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-3 lg:mb-4">
          최근 글
        </h3>
        <div className="space-y-2 lg:space-y-3">
          {recentPosts.slice(0, 3).map((post, index) => (
            <div key={index} className="space-y-1">
              <TrackedPostLink
                href={post.url}
                postId={post.id}
                placement="sidebar_recent"
                className="block text-xs lg:text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
              >
                {post.title}
              </TrackedPostLink>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {post.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
