import { getPaginatedOriginalsPosts, getPostById } from '@/data/posts';
import PostCard from '@/components/PostCard';
import FeaturedPost from '@/components/FeaturedPost';
import Pagination from '@/components/Pagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title: 'SN Originals | 보기만 해도 수능 점수가 오르는 컨텐츠',
  description:
    'SN Originals에서 수능 고전문학을 재미있게 배우세요. 갑민가, 화왕가, 북천가, 관동별곡 등 고전문학을 AI 그림과 친절한 해설로 즐기며 수능 국어 감각을 기를 수 있습니다.',
  alternates: {
    canonical: '/originals',
  },
  openGraph: {
    title: 'SN Originals | 보기만 해도 수능 점수가 오르는 컨텐츠',
    description:
      'SN Originals에서 수능 고전문학을 재미있게 배우세요. AI 그림과 친절한 해설로 수능 국어 감각을 기를 수 있습니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/originals',
    images: [
      {
        url: 'https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'SN Originals - 고전문학 시리즈',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN Originals | 보기만 해도 수능 점수가 오르는 컨텐츠',
    description:
      'SN Originals에서 수능 고전문학을 재미있게 배우세요. AI 그림과 친절한 해설로 수능 국어 감각을 기를 수 있습니다.',
    images: ['https://img.youtube.com/vi/TQEkvJsu5UY/maxresdefault.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
  );
}
