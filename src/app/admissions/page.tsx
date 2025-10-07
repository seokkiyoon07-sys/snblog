import PostCard from '@/components/PostCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title: '입시정보 | SN Academy 입시 가이드와 대학별 전략',
  description:
    'SN Academy의 입시 전문가들이 제공하는 최신 입시 정보와 대학별 전략을 확인하세요. 수능 분석, 의대 입시, 학생부종합전형 등 다양한 입시 정보를 제공합니다.',
  alternates: {
    canonical: '/admissions',
  },
  openGraph: {
    title: '입시정보 | SN Academy 입시 가이드와 대학별 전략',
    description:
      'SN Academy의 입시 전문가들이 제공하는 최신 입시 정보와 대학별 전략을 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/admissions',
    images: [
      {
        url: '/og/admissions.jpg',
        width: 1200,
        height: 630,
        alt: 'SN Academy 입시정보 - 입시 가이드와 대학별 전략',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '입시정보 | SN Academy 입시 가이드와 대학별 전략',
    description:
      'SN Academy의 입시 전문가들이 제공하는 최신 입시 정보와 대학별 전략을 확인하세요.',
    images: ['/og/admissions.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AdmissionsPage() {
  const admissions: any[] = [];

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          입시정보
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          최신 입시 정보와 대학별 전략
        </p>
      </header>

      {/* 포스트 목록 */}
      <section aria-labelledby="admissions-heading">
        <h2 id="admissions-heading" className="sr-only">
          입시 정보
        </h2>
        {admissions.length > 0 ? (
          <div className="space-y-6" role="list" aria-label="입시 정보 목록">
            {admissions.map(post => (
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
              아직 입시정보가 없습니다
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              곧 최신 입시 정보와 전략을 공유할 예정입니다.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
