import PostCard from '@/components/PostCard';
import { getPostsByCategory } from '@/data/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title: 'SN 컬럼 | 교육 전문가의 학습법과 입시 조언',
  description:
    'SN Academy의 교육 전문가들이 제공하는 학습법, 입시 전략, 자기주도학습 방법 등을 확인하세요. 검증된 교육 노하우로 학습 효과를 극대화할 수 있습니다.',
  alternates: {
    canonical: '/columns',
  },
  openGraph: {
    title: 'SN 컬럼 | 교육 전문가의 학습법과 입시 조언',
    description:
      'SN Academy의 교육 전문가들이 제공하는 학습법과 입시 조언을 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/columns',
    images: [
      {
        url: '/og/columns.jpg',
        width: 1200,
        height: 630,
        alt: 'SN 컬럼 - 교육 전문가의 학습법과 입시 조언',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN 컬럼 | 교육 전문가의 학습법과 입시 조언',
    description:
      'SN Academy의 교육 전문가들이 제공하는 학습법과 입시 조언을 확인하세요.',
    images: ['/og/columns.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ColumnsPage() {
  const columns = getPostsByCategory('columns');

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          컬럼
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          교육 전문가의 학습법과 입시 조언
        </p>
      </header>

      {/* 포스트 목록 */}
      <section aria-labelledby="columns-heading">
        <h2 id="columns-heading" className="sr-only">
          교육 컬럼
        </h2>
        {columns.length > 0 ? (
          <div className="space-y-6" role="list" aria-label="교육 컬럼 목록">
            {columns.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12" role="status" aria-live="polite">
            <div
              className="w-16 h-16 mx-auto mb-4 text-gray-400"
              aria-hidden="true"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              아직 컬럼이 없습니다
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              곧 교육 전문가들의 유익한 컬럼을 공유할 예정입니다.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
