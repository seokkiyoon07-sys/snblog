import { notFound } from 'next/navigation';

export const metadata = {
  title: '사미인곡 | SN Originals 고전문학',
  description: '정철의 사미인곡을 AI 그림과 친절한 해설로 즐기며 수능 국어 감각을 키우세요. 보기만 해도 수능 점수가 오르는 고전문학 시리즈 5탄.',
  keywords: '사미인곡, 정철, 고전문학, 수능국어, SN Originals, 가사, 선조',
  openGraph: {
    title: '사미인곡 | SN Originals 고전문학',
    description: '정철의 사미인곡을 AI 그림과 친절한 해설로 즐기며 수능 국어 감각을 키우세요.',
    type: 'video.other',
    locale: 'ko_KR',
  },
};

export default function SamieungokPage() {
  const post = {
    id: 1,
    title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다. 「사미인곡」은 1588년(선조 21) 정철이 고향인 전남 창평에 우거하며 지은 가사입니다. 임금과 이별한 본인이 처지를 남편과 이별한 한 여인의 상황으로 그려내면서, 계절의 변화에 따라 매화, 옷, 달, 별, 눈 등 다양한 비유와 대구 등을 사용하여 감각적으로 그려낸 작품입니다.',
    date: 'Sep 23, 2025',
    readTime: '8 min read',
    tags: ['SN Originals', '고전문학', '수능국어', '사미인곡'],
    thumbnail: 'https://img.youtube.com/vi/50nJegN2YSQ/maxresdefault.jpg',
    category: 'SN Originals',
    youtubeUrl: 'https://www.youtube.com/watch?v=50nJegN2YSQ'
  };

  // YouTube URL에서 비디오 ID 추출
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = post.youtubeUrl ? getYouTubeVideoId(post.youtubeUrl) : null;

  // 관련 콘텐츠
  const relatedPosts = [
    {
      id: 2,
      title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
      thumbnail: 'https://img.youtube.com/vi/9T06DoJaMHs/maxresdefault.jpg',
      date: 'Sep 19, 2025',
      readTime: '9 min read',
      url: '/originals/gwandong-byeolgok'
    },
    {
      id: 3,
      title: '좋긴 한데 유배 생활 이래도 됨? 고전문학 「북천가」',
      thumbnail: 'https://img.youtube.com/vi/xhyppBm3_o4/maxresdefault.jpg',
      date: 'Sep 20, 2025',
      readTime: '6 min read',
      url: '/originals/bukcheonga'
    },
    {
      id: 4,
      title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
      thumbnail: 'https://img.youtube.com/vi/6tsl5IIMy_o/maxresdefault.jpg',
      date: 'Sep 21, 2025',
      readTime: '7 min read',
      url: '/originals/hwangokga'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12">
      {/* 뒤로가기 버튼 */}
      <div className="mb-8">
        <a
          href="/originals"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
        >
          ← SN Originals로 돌아가기
        </a>
      </div>

      <article className="space-y-6">
        {/* 비디오 플레이어 */}
        {videoId && (
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={post.title}
            ></iframe>
          </div>
        )}

        {/* 제목 */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
          🎥 {post.title}
        </h1>

        {/* 메타 정보 */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category}</span>
        </div>

        {/* 요약/내용 */}
        <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {post.excerpt}
        </p>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>

      {/* 관련 콘텐츠 섹션 */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">다른 SN Originals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <a key={relatedPost.id} href={relatedPost.url} className="block group">
                <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3">
                  <img
                    src={relatedPost.thumbnail}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  🎥 {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {relatedPost.date} • {relatedPost.readTime}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
