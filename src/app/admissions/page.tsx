export const metadata = {
  title: '입시정보 | SN Academy 입시 가이드와 대학별 전략',
  description: 'SN Academy의 입시 전문가들이 제공하는 최신 입시 정보와 대학별 전략을 확인하세요. 수능 분석, 의대 입시, 학생부종합전형 등 다양한 입시 정보를 제공합니다.',
  keywords: '입시정보, 수능 분석, 의대 입시, 학생부종합전형, 대학 입시, 입시 전략',
  openGraph: {
    title: '입시정보 | SN Academy 입시 가이드와 대학별 전략',
    description: 'SN Academy의 입시 전문가들이 제공하는 최신 입시 정보와 대학별 전략을 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
};

export default function AdmissionsPage() {
  const admissions = [
    {
      id: 1,
      title: '2024 수능 완전 분석: 주요 변화점과 대비 전략',
      excerpt: '2024년 수능의 주요 변화점을 분석하고 효과적인 대비 전략을 제시합니다. 특히 국어 영역의 독서 지문 길이 증가와 수학 영역의 문제 유형 변화에 대해 자세히 다룹니다.',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      tags: ['수능', '분석', '대비전략'],
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop&crop=center',
    },
    {
      id: 2,
      title: '의대 입시 가이드: 2024년 최신 트렌드',
      excerpt: '의대 입시의 최신 동향과 변화를 분석합니다. 학생부종합전형의 비중 증가, 면접 형태의 변화, 그리고 각 대학별 특징을 종합적으로 정리했습니다.',
      date: 'Dec 5, 2024',
      readTime: '12 min read',
      tags: ['의대', '학종', '면접'],
      thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center',
    },
    {
      id: 3,
      title: '학생부종합전형 완벽 가이드',
      excerpt: '학종의 모든 것을 한 번에 정리한 완벽 가이드입니다. 자기소개서 작성법부터 면접 준비까지 체계적으로 설명합니다.',
      date: 'Dec 2, 2024',
      readTime: '10 min read',
      tags: ['학종', '자기소개서', '면접'],
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop&crop=center',
    },
  ];

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          입시정보
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          최신 입시 동향과 분석 자료
        </p>
      </div>

      {/* 포스트 목록 */}
      <div className="space-y-6">
        {admissions.map((post) => (
          <article
            key={post.id}
            className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0"
          >
            <div className="flex gap-6">
              {/* 썸네일 */}
              <div className="flex-shrink-0 w-48 h-32 overflow-hidden rounded-lg">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* 콘텐츠 */}
              <div className="flex-1 space-y-3">
                {/* 태그 */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 제목 */}
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href={`/posts/${post.id}`}>
                    {post.title}
                  </a>
                </h2>

                {/* 요약 */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 text-base">
                  {post.excerpt}
                </p>

                {/* 메타 정보 */}
                <div className="flex items-center space-x-4 text-base text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
