import { Metadata } from 'next';
import { getPostsByCategory } from '@/data/posts';
import PostCard from '@/components/PostCard';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title: 'SN DataLAB | 데이터로 보는 교육 인사이트',
  description:
    'SN DataLAB에서 데이터 기반의 교육 분석과 인사이트를 제공합니다. 전국 기숙학원 비교, 입시 통계, 학습 트렌드 등 다양한 데이터 시각화 콘텐츠를 확인하세요.',
  alternates: {
    canonical: '/datalab',
  },
  openGraph: {
    title: 'SN DataLAB | 데이터로 보는 교육 인사이트',
    description:
      'SN DataLAB에서 데이터 기반의 교육 분석과 인사이트를 제공합니다.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/datalab',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataLabPage() {
  const posts = getPostsByCategory('datalab');

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-6 lg:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
          SN DataLAB
        </h1>
        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 px-4">
          데이터로 보는 교육 인사이트
        </p>
      </header>

      {/* 포스트 목록 */}
      <section aria-labelledby="datalab-posts-heading">
        <h2 id="datalab-posts-heading" className="sr-only">
          SN DataLAB 포스트
        </h2>
        {posts.length > 0 ? (
          <div className="space-y-6" role="list" aria-label="SN DataLAB 포스트 목록">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            아직 등록된 포스트가 없습니다.
          </div>
        )}
      </section>
    </div>
  );
}
