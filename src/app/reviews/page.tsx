import PostCard from '@/components/PostCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.snacademy.co.kr"),
  title: '합격 후기 | SN Academy 학생들의 성공 스토리',
  description: 'SN Academy에서 목표 대학에 합격한 학생들의 생생한 후기를 확인하세요. 서울대, 연세대, 고려대 등 명문대 합격생들의 학습 방법과 경험담을 공유합니다.',
  alternates: { 
    canonical: "/reviews" 
  },
  openGraph: {
    title: '합격 후기 | SN Academy 학생들의 성공 스토리',
    description: 'SN Academy에서 목표 대학에 합격한 학생들의 생생한 후기를 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/reviews',
    images: [
      {
        url: '/og/reviews.jpg',
        width: 1200,
        height: 630,
        alt: 'SN Academy 합격 후기 - 학생들의 성공 스토리',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '합격 후기 | SN Academy 학생들의 성공 스토리',
    description: 'SN Academy에서 목표 대학에 합격한 학생들의 생생한 후기를 확인하세요.',
    images: ['/og/reviews.jpg'],
  },
  robots: { 
    index: true, 
    follow: true 
  },
};

export default function ReviewsPage() {
  const reviews: any[] = [];

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          후기
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          학생들의 생생한 경험담
        </p>
      </header>

      {/* 포스트 목록 */}
      <section aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className="sr-only">학생 후기</h2>
        {reviews.length > 0 ? (
          <div className="space-y-6" role="list" aria-label="학생 후기 목록">
            {reviews.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12" role="status" aria-live="polite">
            <div className="w-16 h-16 mx-auto mb-4 text-gray-400" aria-hidden="true">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              아직 후기가 없습니다
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              곧 학생들의 생생한 후기를 공유할 예정입니다.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}