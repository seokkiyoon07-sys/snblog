import { getPaginatedOriginalsPosts, getPostById } from '@/data/posts';
import PostCard from '@/components/PostCard';
import FeaturedPost from '@/components/FeaturedPost';
import Pagination from '@/components/Pagination';
import { Metadata } from 'next';
import { BASE_URL } from '@/lib/config';

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

interface OriginalsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function OriginalsPage({
  searchParams,
}: OriginalsPageProps) {
  // 페이지네이션을 위한 현재 페이지
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || '1', 10);

  // SN Originals 소개글 (고정)
  const introPost = getPostById('sn-originals-intro');

  // SN Originals 카테고리 글들 (페이지네이션 적용, 소개글 제외)
  const { posts: originalsPosts, totalPages } =
    await getPaginatedOriginalsPosts(currentPage, 6);

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
              <div className="flex items-center space-x-2 mb-4">
                <div
                  className="w-2 h-2 bg-sn-primary rounded-full"
                  aria-hidden="true"
                ></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  SN Originals 소개
                </h3>
              </div>
              <FeaturedPost post={introPost} />
            </div>
          </section>
        )}

        {/* 고전문학 시리즈 글들 */}
        <section aria-labelledby="series-heading">
          <h2 id="series-heading" className="sr-only">
            고전문학 시리즈
          </h2>
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="w-2 h-2 bg-blue-500 rounded-full"
                aria-hidden="true"
              ></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                고전문학 시리즈
              </h3>
            </div>
            <div
              className="space-y-4 lg:space-y-6"
              role="list"
              aria-label="고전문학 시리즈 목록"
            >
              {originalsPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* 페이지네이션 */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              baseUrl="/originals"
            />
          </div>
        </section>
      </div>
    </>
  );
}
