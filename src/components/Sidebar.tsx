'use client';

export default function Sidebar() {
  // 태그 데이터 (실제로는 API에서 가져올 데이터)
  const tags = [
    { name: 'SN AI 스타트업', count: 1 },
    { name: 'SN Originals', count: 4 },
    { name: '고전문학', count: 4 },
    { name: '수능국어', count: 4 },
    { name: '에듀테크', count: 1 },
    { name: 'AI교육', count: 1 },
  ];

  // 최근 포스트 데이터
  const recentPosts = [
    {
      title: '조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~" (고전문학 「속미인곡」)',
      date: 'Oct 3, 2025',
      readTime: '7 min read',
      tags: ['SN Originals', '고전문학', '속미인곡'],
      url: '/originals/sokmieungok'
    },
    {
      title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
      date: 'Sep 23, 2025',
      readTime: '8 min read',
      tags: ['SN Originals', '고전문학', '사미인곡'],
      url: '/originals/samieungok'
    },
    {
      title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
      date: 'Sep 22, 2025',
      readTime: '8 min read',
      tags: ['SN Originals', '고전문학', '갑민가'],
      url: '/originals/gapminga'
    },
    {
      title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
      date: 'Sep 21, 2025',
      readTime: '7 min read',
      tags: ['SN Originals', '고전문학', '화왕가'],
      url: '/originals/hwangokga'
    },
    {
      title: '좋긴 한데 유배 생활 이래도 됨? 고전문학 「북천가」',
      date: 'Sep 20, 2025',
      readTime: '6 min read',
      tags: ['SN Originals', '고전문학', '북천가'],
      url: '/originals/bukcheonga'
    },
    {
      title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
      date: 'Sep 19, 2025',
      readTime: '9 min read',
      tags: ['SN Originals', '고전문학', '관동별곡'],
      url: '/originals/gwandong-byeolgok'
    },
  ];

  // 인기 블로그 데이터
  const popularPosts = [
    {
      title: '조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~" (고전문학 「속미인곡」)',
      date: 'Oct 3, 2025',
      readTime: '7 min read',
      views: 2500,
      tags: ['SN Originals', '고전문학', '속미인곡'],
      url: '/originals/sokmieungok'
    },
    {
      title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
      date: 'Sep 23, 2025',
      readTime: '8 min read',
      views: 1900,
      tags: ['SN Originals', '고전문학', '사미인곡'],
      url: '/originals/samieungok'
    },
    {
      title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
      date: 'Sep 22, 2025',
      readTime: '8 min read',
      views: 1800,
      tags: ['SN Originals', '고전문학', '갑민가'],
      url: '/originals/gapminga'
    },
    {
      title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
      date: 'Sep 19, 2025',
      readTime: '9 min read',
      views: 1200,
      tags: ['SN Originals', '고전문학', '관동별곡'],
      url: '/originals/gwandong-byeolgok'
    },
    {
      title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
      date: 'Sep 21, 2025',
      readTime: '7 min read',
      views: 1100,
      tags: ['SN Originals', '고전문학', '화왕가'],
      url: '/originals/hwangokga'
    },
  ];

  return (
    <aside className="space-y-6 lg:space-y-8">
      {/* 태그 섹션 */}
      <div>
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-3 lg:mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-1.5 lg:gap-2">
          {tags.map((tag) => (
            <a
              key={tag.name}
              href="/originals"
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

      {/* 인기 블로그 섹션 */}
      <div>
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-3 lg:mb-4">
          인기 블로그
        </h3>
        <div className="space-y-2 lg:space-y-3">
          {popularPosts.map((post, index) => (
            <div key={index} className="space-y-1">
              <a
                href={post.url}
                className="block text-xs lg:text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
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
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-3 lg:mb-4">
          Recent Posts
        </h3>
        <div className="space-y-2 lg:space-y-3">
          {recentPosts.slice(0, 3).map((post, index) => (
            <div key={index} className="space-y-1">
              <a
                href={post.url}
                className="block text-xs lg:text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
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
