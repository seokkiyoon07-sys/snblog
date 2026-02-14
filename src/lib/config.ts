// Site configuration
export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.snacademy.co.kr';

// External URLs
export const EXTERNAL_URLS = {
  ACADEMY: 'https://www.snacademy.co.kr',
  ACADEMY_DAECHI: 'https://daechi.snacademy.kr',
  SNAR_GPT: 'https://snarGPT.ai',
  YOUTUBE_EMBED: (id: string) => `https://www.youtube.com/embed/${id}`,
  YOUTUBE_THUMBNAIL: (id: string) =>
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  KAKAO_CHANNEL: 'http://pf.kakao.com/_exjtgj/chat',
} as const;

// CDN URLs
export const CDN_URLS = {
  KATEX_VERSION: '0.16.9',
  KATEX_CSS: `https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css`,
  KATEX_JS: `https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js`,
  KATEX_AUTO_RENDER: `https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js`,
} as const;

// Navigation menu items
export const NAVIGATION_MENU = [
  { name: '홈', href: '/' },
  { name: 'AI 스타트업', href: '/startup' },
  { name: '컬럼', href: '/columns' },
  { name: 'SN DataLAB', href: '/datalab' },
  { name: '문제 다운로드', href: '/problems' },
  { name: 'SN Originals', href: '/originals' },
  { name: '공지사항', href: '/notice' },
] as const;

// Academy info options for header
export const ACADEMY_INFO_OPTIONS = [
  {
    id: 'dokhak',
    name: '독학기숙',
    url: EXTERNAL_URLS.ACADEMY,
    color: '#29472b',
  },
  {
    id: 'daechi',
    name: '대치점',
    url: EXTERNAL_URLS.ACADEMY_DAECHI,
    color: '#1a365d',
  },
  {
    id: 'snargpt',
    name: 'SNarGPT',
    url: EXTERNAL_URLS.SNAR_GPT,
    color: '#7c3aed',
  },
] as const;

// Category configuration
export const CATEGORY_CONFIG = {
  columns: {
    route: '/columns',
    emoji: '📚',
    label: '컬럼',
  },
  'SN Originals': {
    route: '/originals',
    emoji: '🎥',
    label: 'SN Originals',
  },
  startup: {
    route: '/startup',
    emoji: '🤖',
    label: 'AI 스타트업',
  },
  notice: {
    route: '/notice',
    emoji: '📢',
    label: '공지사항',
  },
  problems: {
    route: '/problems',
    emoji: '📝',
    label: '문제 다운로드',
  },
  datalab: {
    route: '/datalab',
    emoji: '📊',
    label: 'SN DataLAB',
  },
} as const;

// Startup subcategory configuration
export const STARTUP_SUBCATEGORY_CONFIG = {
  all: {
    label: '전체',
    description: '모든 AI 스타트업 글',
  },
  update: {
    label: '업데이트 노트',
    description: 'SNarGPT 버전별 변경사항 및 가이드',
  },
  'tech-blog': {
    label: '기술 블로그',
    description: 'AI 교육 인사이트 및 기술 컬럼',
  },
} as const;

export type StartupSubcategory = keyof typeof STARTUP_SUBCATEGORY_CONFIG;

// Problem subject configuration
export const PROBLEM_SUBJECT_CONFIG = {
  korean: {
    label: '국어',
    emoji: '📖',
    categories: ['korean-problem'] as string[],
    subcategories: {
      all: '전체',
      reading: '독서',
      literature: '문학',
      'language-media': '언어와매체',
      'speech-writing': '화법과작문',
      'column-korean': '컬럼',
    },
  },
  math: {
    label: '수학',
    emoji: '📐',
    categories: ['problem-download'] as string[],
    subcategories: {
      all: '전체',
      math1: '수학Ⅰ',
      math2: '수학Ⅱ',
      'probability-stats': '확률과통계',
      calculus: '미분과적분',
      geometry: '기하',
      'column-math': '컬럼',
    },
  },
  english: {
    label: '영어',
    emoji: '🔤',
    categories: ['english-problem'] as string[],
    subcategories: {
      all: '전체',
    },
  },
  social: {
    label: '사회탐구',
    emoji: '🌏',
    categories: ['social-problem'] as string[],
    subcategories: {
      all: '전체',
      'life-ethics': '생활과윤리',
      'ethics-thought': '윤리와사상',
      'korea-geo': '한국지리',
      'world-geo': '세계지리',
      'east-asia-history': '동아시아사',
      'world-history': '세계사',
      economics: '경제',
      'politics-law': '정치와법',
      'society-culture': '사회·문화',
    },
  },
  science: {
    label: '과학탐구',
    emoji: '🔬',
    categories: ['science-problem'] as string[],
    subcategories: {
      all: '전체',
      physics1: '물리학Ⅰ',
      physics2: '물리학Ⅱ',
      chemistry1: '화학Ⅰ',
      chemistry2: '화학Ⅱ',
      'life-science1': '생명과학Ⅰ',
      'life-science2': '생명과학Ⅱ',
      'earth-science1': '지구과학Ⅰ',
      'earth-science2': '지구과학Ⅱ',
    },
  },
} as const;

export type ProblemSubject = keyof typeof PROBLEM_SUBJECT_CONFIG;

// Helper functions
export function getCategoryRoute(category: string): string {
  return (
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]?.route || '/'
  );
}

export function getCategoryEmoji(category: string): string {
  return (
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]?.emoji || '📚'
  );
}

export function getCategoryLabel(category: string): string {
  return (
    CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG]?.label || category
  );
}

// Organization info for schema markup
export const ORGANIZATION_INFO = {
  name: 'SN독학기숙학원',
  url: BASE_URL,
  logo: `${BASE_URL}/images/sn-logo.png`,
} as const;

// Contact info
export const CONTACT_INFO = {
  phone: '031-771-0300',
  email: 'snacademy@naver.com',
  address: '경기도 양평군 용문면 용문로 147 SN독학기숙학원',
} as const;
