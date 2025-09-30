'use client';

export default function Sidebar() {
  // 태그 데이터 (실제로는 API에서 가져올 데이터)
  const tags = [
    { name: '입시정보', count: 15 },
    { name: '수능', count: 8 },
    { name: '컬럼', count: 12 },
    { name: '학습법', count: 6 },
    { name: '후기', count: 10 },
    { name: '서울대', count: 3 },
    { name: 'SN AI 스타트업', count: 8 },
    { name: '의대', count: 4 },
  ];

  // 최근 포스트 데이터
  const recentPosts = [
    {
      title: '2024 수능 완전 분석: 주요 변화점과 대비 전략',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      tags: ['입시정보', '수능', '분석'],
    },
    {
      title: 'SN 학습법: 효과적인 자기주도학습 방법',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      tags: ['컬럼', '학습법', '자기주도학습'],
    },
    {
      title: '서울대 합격생 후기: 3년간의 SN 생활',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      tags: ['후기', '서울대', '합격'],
    },
    {
      title: 'SN 특별 프로그램: 겨울방학 집중 캠프',
      date: 'Dec 8, 2024',
      readTime: '5 min read',
      tags: ['SN AI 스타트업', '특별프로그램', '겨울방학'],
    },
    {
      title: '의대 입시 가이드: 2024년 최신 트렌드',
      date: 'Dec 5, 2024',
      readTime: '12 min read',
      tags: ['입시정보', '의대', '학종'],
    },
  ];

  // 인기 블로그 데이터
  const popularPosts = [
    {
      title: '2024 수능 완전 분석: 주요 변화점과 대비 전략',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      views: 1250,
      tags: ['입시정보', '수능', '분석'],
    },
    {
      title: '서울대 합격생 후기: 3년간의 SN 생활',
      date: 'Dec 10, 2024',
      readTime: '10 min read',
      views: 2100,
      tags: ['후기', '서울대', '합격'],
    },
    {
      title: 'SN 학습법: 효과적인 자기주도학습 방법',
      date: 'Dec 12, 2024',
      readTime: '6 min read',
      views: 980,
      tags: ['컬럼', '학습법', '자기주도학습'],
    },
    {
      title: '의대 입시 가이드: 2024년 최신 트렌드',
      date: 'Dec 5, 2024',
      readTime: '12 min read',
      views: 1560,
      tags: ['입시정보', '의대', '학종'],
    },
  ];

  return (
    <aside className="space-y-8">
      {/* 태그 섹션 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <a
              key={tag.name}
              href={`/tags/${tag.name}`}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {tag.name}
              <span className="ml-1 text-gray-500 dark:text-gray-400">
                ({tag.count})
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 인기 블로그 섹션 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          인기 블로그
        </h3>
        <div className="space-y-3">
          {popularPosts.map((post, index) => (
            <div key={index} className="space-y-1">
              <a
                href={`/posts/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
              >
                {post.title}
              </a>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {post.date}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 최근 포스트 섹션 (3개만) */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Posts
        </h3>
        <div className="space-y-3">
          {recentPosts.slice(0, 3).map((post, index) => (
            <div key={index} className="space-y-1">
              <a
                href={`/posts/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
              >
                {post.title}
              </a>
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
