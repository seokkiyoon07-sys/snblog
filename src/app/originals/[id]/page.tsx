'use client';

import { useParams } from 'next/navigation';

export default function OriginalsDetailPage() {
  const params = useParams();
  const id = params.id;

  // SN Originals 데이터 (실제로는 API에서 가져올 데이터)
  const originals = [
    {
      id: 1,
      title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
      excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다. 「사미인곡」은 1588년(선조 21) 정철이 고향인 전남 창평에 우거하며 지은 가사입니다. 임금과 이별한 본인이 처지를 남편과 이별한 한 여인의 상황으로 그려내면서, 계절의 변화에 따라 매화, 옷, 달, 별, 눈 등 다양한 비유와 대구 등을 사용하여 감각적으로 그려낸 작품입니다.',
      date: 'Sep 23, 2025',
      readTime: '8 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '사미인곡'],
      thumbnail: 'https://img.youtube.com/vi/50nJegN2YSQ/maxresdefault.jpg',
      category: 'SN Originals',
      youtubeUrl: 'https://www.youtube.com/watch?v=50nJegN2YSQ'
    },
    {
      id: 2,
      title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
      excerpt: '정철의 관동별곡을 현대적 브이로그 형식으로 재해석! 강원도의 아름다운 자연과 정철의 감정을 생생하게 느껴보세요. 수능 고전문학의 대표작을 재미있게 배우는 특별한 시간입니다.',
      date: 'Sep 19, 2025',
      readTime: '9 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '관동별곡'],
      thumbnail: 'https://img.youtube.com/vi/9T06DoJaMHs/maxresdefault.jpg',
      category: 'SN Originals',
      youtubeUrl: 'https://www.youtube.com/watch?v=9T06DoJaMHs'
    },
    {
      id: 3,
      title: '좋긴 한데 유배 생활 이래도 됨? 고전문학 「북천가」',
      excerpt: '북천가는 조선 후기 문인들의 유배 생활을 그린 작품으로, 자연에 대한 사랑과 정치적 현실에 대한 아쉬움을 담고 있습니다. 수능 고전문학의 핵심 작품을 쉽고 재미있게 이해해보세요!',
      date: 'Sep 20, 2025',
      readTime: '6 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '북천가'],
      thumbnail: 'https://img.youtube.com/vi/xhyppBm3_o4/maxresdefault.jpg',
      category: 'SN Originals',
      youtubeUrl: 'https://www.youtube.com/watch?v=xhyppBm3_o4'
    },
    {
      id: 4,
      title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
      excerpt: '화왕가는 조선 후기 작가 김만중의 작품으로, 당시 사회의 모순과 부조리를 풍자한 고전문학입니다. 현대적 해석과 함께 수능에 자주 출제되는 핵심 내용을 재미있게 배워보세요!',
      date: 'Sep 21, 2025',
      readTime: '7 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '화왕가'],
      thumbnail: 'https://img.youtube.com/vi/6tsl5IIMy_o/maxresdefault.jpg',
      category: 'SN Originals',
      youtubeUrl: 'https://www.youtube.com/watch?v=6tsl5IIMy_o&t=2s'
    },
    {
      id: 5,
      title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
      excerpt: 'AI 그림과 친절한 해설로 즐기는 고전문학! 보기만 해도 국어 감각이 살아납니다. 수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!',
      date: 'Sep 22, 2025',
      readTime: '8 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '갑민가'],
      thumbnail: 'https://img.youtube.com/vi/3ZGE-RvBinQ/maxresdefault.jpg',
      category: 'SN Originals',
      youtubeUrl: 'https://www.youtube.com/watch?v=3ZGE-RvBinQ'
    }
  ];

  // URL에서 비디오 ID 추출
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  // 현재 포스트 찾기
  const currentPost = originals.find(post => post.id === parseInt(id as string));

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">포스트를 찾을 수 없습니다</h1>
          <a href="/originals" className="text-blue-600 hover:text-blue-800">← SN Originals로 돌아가기</a>
        </div>
      </div>
    );
  }

  const videoId = getVideoId(currentPost.youtubeUrl);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 뒤로가기 버튼 */}
      <div className="px-4 py-6 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <a
            href="/originals"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            ← SN Originals로 돌아가기
          </a>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 제목 */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {currentPost.title}
        </h1>

        {/* 메타 정보 */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span>{currentPost.date}</span>
          <span>•</span>
          <span>{currentPost.readTime}</span>
          <span>•</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">{currentPost.category}</span>
        </div>

        {/* 유튜브 영상 */}
        {videoId && (
          <div className="mb-8">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={currentPost.title}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* 설명 */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {currentPost.excerpt}
          </p>
          
          {/* 관동별곡 상세 내용 */}
          {currentPost.id === 2 && (
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
          )}
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mt-8">
          {currentPost.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 관련 콘텐츠 */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">다른 SN Originals</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {originals
              .filter(post => post.id !== currentPost.id)
              .slice(0, 4)
              .map((post) => (
                <a
                  key={post.id}
                  href={`/originals/${post.id}`}
                  className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {post.date} • {post.readTime}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
