export interface Post {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  category: string
  url: string
  thumbnail?: string
  youtubeUrl?: string
  author: string
  featured?: boolean
  published: boolean
}

// 모든 글 데이터를 중앙에서 관리
export const allPosts: Post[] = [
  // SN Originals 글들
  {
    id: 'sokmieungok',
    title: '조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~" (고전문학 「속미인곡」)',
    excerpt: '고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다. 「속미인곡」은 1588~1589년 경 정철이 고향인 전남 창평에 우거하며 「사미인곡」에 이어 지은 가사입니다. 갑녀와 을녀의 대화 형식으로 이야기를 풀어내어 자신(을녀)의 사연과 사모의 정을 구슬프게 표현한 특별한 작품입니다.',
    date: '2024-10-03',
    readTime: '7 min read',
    tags: ['SN Originals', '고전문학', '속미인곡'],
    category: 'SN Originals',
    url: '/originals/sokmieungok',
    thumbnail: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    author: 'SN Academy',
    featured: true,
    published: true
  },
  {
    id: 'samieungok',
    title: '선조를 향한 정철의 중독된 사랑 (고전문학 「사미인곡」)',
    excerpt: '보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다. 「사미인곡」은 1588년(선조 21) 정철이 고향인 전남 창평에 우거하며 지은 가사입니다.',
    date: '2025-09-23',
    readTime: '8 min read',
    tags: ['SN Originals', '고전문학', '사미인곡'],
    category: 'SN Originals',
    url: '/originals/samieungok',
    thumbnail: 'https://img.youtube.com/vi/50nJegN2YSQ/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=50nJegN2YSQ',
    author: 'SN Academy',
    featured: true,
    published: true
  },
  {
    id: 'gapminga',
    title: '내 속도 모르면서 가라 마라 막말하지 마라 (수능 고전문학 「갑민가」)',
    excerpt: 'AI 그림과 친절한 해설로 즐기는 고전문학! 보기만 해도 국어 감각이 살아납니다. 수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!',
    date: '2025-09-22',
    readTime: '8 min read',
    tags: ['SN Originals', '고전문학', '갑민가'],
    category: 'SN Originals',
    url: '/originals/gapminga',
    thumbnail: 'https://img.youtube.com/vi/3ZGE-RvBinQ/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=3ZGE-RvBinQ',
    author: 'SN Academy',
    published: true
  },
  {
    id: 'hwangokga',
    title: '너 그렇게 여자만 좋아하다 피똥싼다 (수능 고전문학 「화왕가」)',
    excerpt: '화왕가는 조선 후기 작가 김만중의 작품으로, 당시 사회의 모순과 부조리를 풍자한 고전문학입니다. 현대적 해석과 함께 수능에 자주 출제되는 핵심 내용을 재미있게 배워보세요!',
    date: '2025-09-21',
    readTime: '7 min read',
    tags: ['SN Originals', '고전문학', '화왕가'],
    category: 'SN Originals',
    url: '/originals/hwangokga',
    thumbnail: 'https://img.youtube.com/vi/6tsl5IIMy_o/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=6tsl5IIMy_o&t=2s',
    author: 'SN Academy',
    published: true
  },
  {
    id: 'bukcheonga',
    title: '좋긴 한데 유배 생활 이래도 됨? 고전문학 「북천가」',
    excerpt: '북천가는 조선 후기 문인들의 유배 생활을 그린 작품으로, 자연에 대한 사랑과 정치적 현실에 대한 아쉬움을 담고 있습니다. 수능 고전문학의 핵심 작품을 쉽고 재미있게 이해해보세요!',
    date: '2025-09-20',
    readTime: '6 min read',
    tags: ['SN Originals', '고전문학', '북천가'],
    category: 'SN Originals',
    url: '/originals/bukcheonga',
    thumbnail: 'https://img.youtube.com/vi/xhyppBm3_o4/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=xhyppBm3_o4',
    author: 'SN Academy',
    published: true
  },
  {
    id: 'gwandong-byeolgok',
    title: '정철의 강원도 브이로그 (고전문학 「관동별곡」)',
    excerpt: '정철의 관동별곡을 현대적 브이로그 형식으로 재해석! 강원도의 아름다운 자연과 정철의 감정을 생생하게 느껴보세요. 수능 고전문학의 대표작을 재미있게 배우는 특별한 시간입니다.',
    date: '2025-09-19',
    readTime: '9 min read',
    tags: ['SN Originals', '고전문학', '관동별곡'],
    category: 'SN Originals',
    url: '/originals/gwandong-byeolgok',
    thumbnail: 'https://img.youtube.com/vi/9T06DoJaMHs/maxresdefault.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=9T06DoJaMHs',
    author: 'SN Academy',
    published: true
  },
  // AI 스타트업 글
  {
    id: 'ai-startup',
    title: 'SN에서 교육 AI 스타트업을 창업했습니다.',
    excerpt: '독학기숙학원의 명가 SN에서 이번에 새롭게 에듀테크 AI를 만들었습니다. 우리의 비전, 앞으로의 미션, 팀 구성원, AI 제품들을 소개합니다. 교육과 AI의 융합으로 초개인화 학습 혁신을 실현합니다.',
    date: '2025-09-25',
    readTime: '10 min read',
    tags: ['SN AI 스타트업', '에듀테크', 'AI교육'],
    category: 'AI 스타트업',
    url: '/startup',
    author: 'SN Academy',
    featured: true,
    published: true
  },
]

// 유틸리티 함수들
export function getLatestPosts(count: number = 6): Post[] {
  return allPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

export function getFeaturedPosts(): Post[] {
  return allPosts
    .filter(post => post.published && post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByCategory(category: string): Post[] {
  return allPosts
    .filter(post => post.published && post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostById(id: string): Post | undefined {
  return allPosts.find(post => post.id === id)
}

export function searchPosts(query: string): Post[] {
  const lowercaseQuery = query.toLowerCase()
  return allPosts
    .filter(post => 
      post.published && (
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
