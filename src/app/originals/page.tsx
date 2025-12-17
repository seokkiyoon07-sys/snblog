import { getPostById, getPostsByCategory } from '@/data/posts';
import FeaturedPost from '@/components/FeaturedPost';
import OriginalsTabs from '@/components/OriginalsTabs';
import { Metadata } from 'next';
import { BASE_URL } from '@/lib/config';

// 스테디 작품 (수능 출제 빈도 높은 작품)
const STEADY_WORK_IDS = [
  'gwandong-byeolgok', // 관동별곡
  'samieungok', // 사미인곡
  'sokmieungok', // 속미인곡
  'gasiri', // 가시리
  'changiparangga', // 찬기파랑가
  'sangchungok', // 상춘곡
  'cheongsanbyeolgok', // 청산별곡
];

// 내신대비 작품 (업로드 최신순, 10작품)
const SCHOOL_EXAM_WORK_IDS = [
  'seogyeongbyeolgok', // 서경별곡 (최신)
  'cheongsanbyeolgok', // 청산별곡 (최신)
  'classic-literature-marathon-2', // SN고전문학 몰아보기 2탄 (내신대비)
  'dosansipigok', // 도산십이곡
  'ganghosasiga', // 강호사시가
  'jemangmaega', // 제망매가
  'changiparangga', // 찬기파랑가
  'maehwasa', // 매화사
  'sangchungok', // 상춘곡
  'gasiri', // 가시리
  'myeonangjungga', // 면앙정가
];

// 2026 수능대비 작품 (업로드 순서)
const SUNEUNG_2026_WORK_IDS = [
  'classic-literature-marathon-2026', // SN고전문학 몰아보기 (맨 앞 배치)
  'imgyetan', // 임계탄
  'sochunhyangga', // 소춘향가
  'biga', // 비가
  'bukcheonga', // 북천가
  'hwangokga', // 화왕가
  'sunsangtan', // 선상탄
  'yongbuga', // 용부가
  'chulsaegok', // 출새곡
  'mongcheonyo', // 몽천요
  'dokrakdang', // 독락당
  'oryun-ga', // 오륜가
  'chohanga', // 초한가
  'buksaegok', // 북새곡 (2025 수능 출제)
];

// 고전문학 시리즈 작품 목록 (SEO 및 AI 학습용)
const CLASSICS_LIST = [
  '면앙정가',
  '가시리',
  '상춘곡',
  '매화사',
  '강호사시가',
  '찬기파랑가',
  '관동별곡',
  '사미인곡',
  '속미인곡',
  '규원가',
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'SN Originals | 고전문학 AI 해설 시리즈 - 수능 국어 대비',
  description: `수능 국어 고전문학을 AI 그림과 친절한 해설로 배우세요. ${CLASSICS_LIST.slice(0, 6).join(', ')} 등 주요 작품을 영상으로 쉽게 이해할 수 있습니다. 고려가요, 조선 가사, 향가까지 체계적으로 학습하세요.`,
  keywords: [
    'SN Originals',
    '고전문학',
    '수능 국어',
    '고전시가',
    ...CLASSICS_LIST,
    '고려가요',
    '조선 가사',
    '향가',
    'AI 해설',
    '국어 공부',
  ],
  alternates: {
    canonical: '/originals',
  },
  openGraph: {
    title: 'SN Originals | 고전문학 AI 해설 시리즈',
    description: `면앙정가, 가시리, 상춘곡, 매화사, 강호사시가, 찬기파랑가 등 수능 필수 고전문학을 AI 그림과 해설로 쉽게 배우세요.`,
    type: 'website',
    locale: 'ko_KR',
    url: `${BASE_URL}/originals`,
    siteName: 'SN Academy Blog',
    images: [
      {
        url: `${BASE_URL}/images/thumbnail/Thumbnail_originals.png`,
        width: 1280,
        height: 720,
        alt: 'SN Originals - 고전문학 AI 해설 시리즈: 면앙정가, 가시리, 상춘곡, 매화사, 강호사시가, 찬기파랑가',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN Originals | 고전문학 AI 해설 시리즈',
    description: `면앙정가, 가시리, 상춘곡, 매화사, 강호사시가, 찬기파랑가 등 수능 필수 고전문학을 AI 그림과 해설로 쉽게 배우세요.`,
    images: [`${BASE_URL}/images/thumbnail/Thumbnail_originals.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD 구조화 데이터 (AI 및 검색엔진 학습용)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'SN Originals - 고전문학 AI 해설 시리즈',
  description:
    '수능 국어 고전문학을 AI 그림과 친절한 해설로 배우는 교육 콘텐츠 시리즈',
  url: `${BASE_URL}/originals`,
  publisher: {
    '@type': 'Organization',
    name: 'SN Academy',
    url: BASE_URL,
  },
  mainEntity: {
    '@type': 'ItemList',
    name: '고전문학 작품 목록',
    description: '수능 국어 대비 고전문학 해설 영상 시리즈',
    itemListElement: CLASSICS_LIST.map((title, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: title,
      description: `${title} - 고전문학 AI 해설 영상`,
    })),
  },
  about: [
    { '@type': 'Thing', name: '고전문학' },
    { '@type': 'Thing', name: '수능 국어' },
    { '@type': 'Thing', name: '고려가요' },
    { '@type': 'Thing', name: '조선 가사' },
    { '@type': 'Thing', name: '향가' },
  ],
};

export default async function OriginalsPage() {
  // SN Originals 소개글 (고정)
  const introPost = getPostById('sn-originals-intro');

  // 탭별 작품 목록 가져오기 (전체 Post 데이터)
  const getWorksByIds = (ids: string[]) =>
    ids
      .map(id => getPostById(id))
      .filter(
        (post): post is NonNullable<typeof post> => post !== undefined
      );

  // 전체보기: 모든 SN Originals 작품 (소개글 제외)
  const allOriginalsWorks = getPostsByCategory('SN Originals').filter(
    post => post.id !== 'sn-originals-intro'
  );

  const steadyWorks = getWorksByIds(STEADY_WORK_IDS);
  const schoolExamWorks = getWorksByIds(SCHOOL_EXAM_WORK_IDS);
  const suneung2026Works = getWorksByIds(SUNEUNG_2026_WORK_IDS);

  return (
    <>
      {/* JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-6 lg:space-y-8">
        {/* SN Originals 소개글 (고정) */}
        {introPost && (
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="sr-only">
              SN Originals 소개
            </h2>
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-2 h-2 bg-sn-primary rounded-full"
                    aria-hidden="true"
                  ></div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    SN Originals 소개
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.youtube.com/@SN_gisuk_original"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-full transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="hidden sm:inline">채널 바로가기</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@SN_gisuk_original?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                    <span className="hidden sm:inline">구독하기</span>
                  </a>
                </div>
              </div>
              <FeaturedPost post={introPost} />
            </div>
          </section>
        )}

        {/* 작품 분류 탭 */}
        <section aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="sr-only">
            작품 분류
          </h2>
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="w-2 h-2 bg-amber-500 rounded-full"
                aria-hidden="true"
              ></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                작품 분류
              </h3>
            </div>
            <OriginalsTabs
              allWorks={allOriginalsWorks}
              steadyWorks={steadyWorks}
              schoolExamWorks={schoolExamWorks}
              suneung2026Works={suneung2026Works}
            />
          </div>
        </section>
      </div>
    </>
  );
}
