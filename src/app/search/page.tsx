'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '검색 | SN Academy Blog',
  description: 'SN Academy Blog에서 원하는 정보를 검색하세요. 입시정보, 학습법, 고전문학, 합격후기 등 모든 콘텐츠를 쉽게 찾을 수 있습니다.',
  keywords: '검색, SN Academy, 입시정보, 학습법, 고전문학, 합격후기, 블로그 검색',
  openGraph: {
    title: '검색 | SN Academy Blog',
    description: 'SN Academy Blog에서 원하는 정보를 검색하세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/search',
  },
  twitter: {
    card: 'summary',
    title: '검색 | SN Academy Blog',
    description: 'SN Academy Blog에서 원하는 정보를 검색하세요.',
  },
};

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 모든 블로그 데이터 (실제로는 API에서 가져올 데이터)
  const allPosts = [
    {
      id: 1,
      title: 'SN에서 교육 AI 스타트업을 창업했습니다.',
      excerpt: '독학기숙학원의 명가 SN에서 이번에 새롭게 에듀테크 AI를 만들었습니다. 우리의 비전, 앞으로의 미션, 팀 구성원, AI 제품들을 소개합니다. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
      date: 'Sep 25, 2025',
      readTime: '10 min read',
      tags: ['SN AI 스타트업', '에듀테크', 'AI교육', '비전'],
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
      category: 'SN AI 스타트업',
      url: '/startup/vision'
    },
    {
      id: 2,
      title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
      excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다. 「사미인곡」은 1588년(선조 21) 정철이 고향인 전남 창평에 우거하며 지은 가사입니다. 임금과 이별한 본인이 처지를 남편과 이별한 한 여인의 상황으로 그려내면서, 계절의 변화에 따라 매화, 옷, 달, 별, 눈 등 다양한 비유와 대구 등을 사용하여 감각적으로 그려낸 작품입니다.',
      date: 'Sep 23, 2025',
      readTime: '8 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '사미인곡'],
      thumbnail: 'https://img.youtube.com/vi/50nJegN2YSQ/maxresdefault.jpg',
      category: 'SN Originals',
      url: '/originals/samieungok'
    },
    {
      id: 3,
      title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
      excerpt: '정철의 관동별곡을 현대적 브이로그 형식으로 재해석! 강원도의 아름다운 자연과 정철의 감정을 생생하게 느껴보세요. 수능 고전문학의 대표작을 재미있게 배우는 특별한 시간입니다.',
      date: 'Sep 19, 2025',
      readTime: '9 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '관동별곡'],
      thumbnail: 'https://img.youtube.com/vi/9T06DoJaMHs/maxresdefault.jpg',
      category: 'SN Originals',
      url: '/originals/gwandong-byeolgok'
    },
    {
      id: 4,
      title: '좋긴 한데 유배 생활 이래도 됨? 고전문학 「북천가」',
      excerpt: '북천가는 조선 후기 문인들의 유배 생활을 그린 작품으로, 자연에 대한 사랑과 정치적 현실에 대한 아쉬움을 담고 있습니다. 수능 고전문학의 핵심 작품을 쉽고 재미있게 이해해보세요!',
      date: 'Sep 20, 2025',
      readTime: '6 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '북천가'],
      thumbnail: 'https://img.youtube.com/vi/xhyppBm3_o4/maxresdefault.jpg',
      category: 'SN Originals',
      url: '/originals/bukcheonga'
    },
    {
      id: 5,
      title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
      excerpt: '화왕가는 조선 후기 작가 김만중의 작품으로, 당시 사회의 모순과 부조리를 풍자한 고전문학입니다. 현대적 해석과 함께 수능에 자주 출제되는 핵심 내용을 재미있게 배워보세요!',
      date: 'Sep 21, 2025',
      readTime: '7 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '화왕가'],
      thumbnail: 'https://img.youtube.com/vi/6tsl5IIMy_o/maxresdefault.jpg',
      category: 'SN Originals',
      url: '/originals/hwangokga'
    },
    {
      id: 6,
      title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
      excerpt: 'AI 그림과 친절한 해설로 즐기는 고전문학! 보기만 해도 국어 감각이 살아납니다. 수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!',
      date: 'Sep 22, 2025',
      readTime: '8 min read',
      tags: ['SN Originals', '고전문학', '수능국어', '갑민가'],
      thumbnail: 'https://img.youtube.com/vi/3ZGE-RvBinQ/maxresdefault.jpg',
      category: 'SN Originals',
      url: '/originals/gapminga'
    }
  ];

  // 검색 함수
  const searchPosts = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // 제목, 요약, 태그에서 검색
    const results = allPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
    setIsLoading(false);
  };

  useEffect(() => {
    if (query) {
      searchPosts(query);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 검색 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            검색 결과
          </h1>
          {query && (
            <p className="text-gray-600 dark:text-gray-400">
              "<span className="font-semibold text-blue-600 dark:text-blue-400">{query}</span>"에 대한 검색 결과
            </p>
          )}
        </div>

        {/* 검색 결과 */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">검색 중...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="space-y-6">
            {searchResults.map((post) => (
              <article
                key={post.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-24 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      {post.category === 'SN Originals' && <span>🎥</span>}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      <a href={post.url} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              "<span className="font-semibold">{query}</span>"에 대한 검색 결과가 없습니다.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              다른 검색어를 시도해보세요.
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              검색어를 입력해주세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">로딩 중...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
