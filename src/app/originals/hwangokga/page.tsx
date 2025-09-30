import { notFound } from 'next/navigation';
import Image from 'next/image';

export const metadata = {
  title: '화왕가 | SN Originals 고전문학',
  description: '화왕가는 조선 후기 작가 김만중의 작품으로, 당시 사회의 모순과 부조리를 풍자한 고전문학입니다. 현대적 해석과 함께 수능에 자주 출제되는 핵심 내용을 재미있게 배워보세요!',
  keywords: '화왕가, 김만중, 고전문학, 수능국어, SN Originals, 풍자, 조선후기',
  openGraph: {
    title: '화왕가 | SN Originals 고전문학',
    description: '화왕가는 조선 후기 작가 김만중의 작품으로, 당시 사회의 모순과 부조리를 풍자한 고전문학입니다.',
    type: 'video.other',
    locale: 'ko_KR',
  },
};

export default function HwangokgaPage() {
  const post = {
    id: 4,
    title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
    excerpt: '화왕가는 조선 후기 작가 김만중의 작품으로, 당시 사회의 모순과 부조리를 풍자한 고전문학입니다. 현대적 해석과 함께 수능에 자주 출제되는 핵심 내용을 재미있게 배워보세요!',
    date: 'Sep 21, 2025',
    readTime: '7 min read',
    tags: ['SN Originals', '고전문학', '수능국어', '화왕가'],
    thumbnail: 'https://img.youtube.com/vi/6tsl5IIMy_o/maxresdefault.jpg',
    category: 'SN Originals',
    youtubeUrl: 'https://www.youtube.com/watch?v=6tsl5IIMy_o&t=2s'
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
      id: 1,
      title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
      thumbnail: 'https://img.youtube.com/vi/50nJegN2YSQ/maxresdefault.jpg',
      date: 'Sep 23, 2025',
      readTime: '8 min read',
      url: '/originals/samieungok'
    },
    {
      id: 2,
      title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
      thumbnail: 'https://img.youtube.com/vi/9T06DoJaMHs/maxresdefault.jpg',
      date: 'Sep 19, 2025',
      readTime: '9 min read',
      url: '/originals/gwandong-byeolgok'
    },
    {
      id: 5,
      title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
      thumbnail: 'https://img.youtube.com/vi/3ZGE-RvBinQ/maxresdefault.jpg',
      date: 'Sep 22, 2025',
      readTime: '8 min read',
      url: '/originals/gapminga'
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
                  <Image
                    src={relatedPost.thumbnail}
                    alt={relatedPost.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
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
