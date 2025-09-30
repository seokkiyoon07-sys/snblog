'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';

export const metadata = {
  title: '관동별곡 | SN Originals 고전문학',
  description: '정철의 관동별곡을 현대적 브이로그 형식으로 재해석! 강원도의 아름다운 자연과 정철의 감정을 생생하게 느껴보세요. 수능 고전문학의 대표작을 재미있게 배우는 특별한 시간입니다.',
  keywords: '관동별곡, 정철, 고전문학, 수능국어, SN Originals, 가사, 강원도, 금강산',
  openGraph: {
    title: '관동별곡 | SN Originals 고전문학',
    description: '정철의 관동별곡을 현대적 브이로그 형식으로 재해석! 강원도의 아름다운 자연과 정철의 감정을 생생하게 느껴보세요.',
    type: 'video.other',
    locale: 'ko_KR',
  },
};

export default function GwandongByeolgokPage() {
  const post = {
    id: 2,
    title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
    excerpt: '정철의 관동별곡을 현대적 브이로그 형식으로 재해석! 강원도의 아름다운 자연과 정철의 감정을 생생하게 느껴보세요. 수능 고전문학의 대표작을 재미있게 배우는 특별한 시간입니다.',
    date: 'Sep 19, 2025',
    readTime: '9 min read',
    tags: ['SN Originals', '고전문학', '수능국어', '관동별곡'],
    thumbnail: 'https://img.youtube.com/vi/9T06DoJaMHs/maxresdefault.jpg',
    category: 'SN Originals',
    youtubeUrl: 'https://www.youtube.com/watch?v=9T06DoJaMHs'
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
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          {/* 관동별곡 상세 내용 */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-6">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p className="text-lg font-medium">안녕하세요 SN독학기숙학원입니다 :)</p>
              <p>보기만해도 수능 점수가 오르는 국어 고전문학 시리즈 4탄 관동별곡을 준비했습니다.</p>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 mt-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">[타임스탬프]</h3>
                <div className="space-y-1 text-sm">
                  <p>00:00 인트로, 작품 배경</p>
                  <p>00:52 서사 - 죽림</p>
                  <p>01:06 서사 - 연추문, 이동(평구~치악산)</p>
                  <p>01:24 서사 - 소양강</p>
                  <p>01:38 서사 - 철원, 태봉국 궁궐터</p>
                  <p>01:56 서사 - 회양</p>
                  <p>02:08 본사1(금강산) - 회양</p>
                  <p>02:23 본사1(금강산) - 만폭동</p>
                  <p>02:38 본사1(금강산) - 금강대</p>
                  <p>02:55 본사1(금강산) - 진헐대</p>
                  <p>03:44 본사1(금강산) - 개심대</p>
                  <p>04:04 본사1(금강산) - 비로봉</p>
                  <p>04:43 본사1(금강산) - 화룡소</p>
                  <p>05:08 본사1(금강산) - 불정대</p>
                  <p>05:40 본사2(동해) - 산영루</p>
                  <p>06:18 본사2(동해) - 총석정</p>
                  <p>06:35 본사2(동해) - 삼일포</p>
                  <p>06:59 본사2(동해) - 의상대</p>
                  <p>07:42 본사2(동해) - 경포대</p>
                  <p>08:20 본사2(동해) - 강릉</p>
                  <p>08:40 본사2(동해) - 죽서루</p>
                  <p>09:07 본사2(동해)/결사 - 망양정</p>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mt-4">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  "AI 그림과 친절한 해설로 즐기는 고전문학!<br/>
                  보기만 해도 국어 감각이 살아납니다.<br/>
                  수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"
                </p>
              </div>
            </div>
          </div>
        </div>

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
