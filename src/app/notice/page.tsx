import PostCard from '@/components/PostCard';
import { Metadata } from 'next';
import { getPostsByCategory } from '@/data/posts';

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.snacademy.co.kr'),
  title: '공지사항 | SN독학기숙학원 소식과 안내',
  description:
    'SN독학기숙학원의 공지사항과 주요 소식을 확인하세요. 수능 안내, 학원 일정, 중요 공지사항을 빠르게 확인할 수 있습니다.',
  alternates: {
    canonical: '/notice',
  },
  openGraph: {
    title: '공지사항 | SN독학기숙학원 소식과 안내',
    description: 'SN독학기숙학원의 공지사항과 주요 소식을 확인하세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.snacademy.co.kr/notice',
    images: [
      {
        url: '/og/notice.jpg',
        width: 1200,
        height: 630,
        alt: 'SN독학기숙학원 공지사항',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '공지사항 | SN독학기숙학원 소식과 안내',
    description: 'SN독학기숙학원의 공지사항과 주요 소식을 확인하세요.',
    images: ['/og/notice.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NoticePage() {
  const notices = getPostsByCategory('notice');

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          공지사항
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          SN독학기숙학원의 소식과 안내
        </p>
      </header>

      {/* 공지사항 목록 */}
      <section aria-labelledby="notices-heading">
        <h2 id="notices-heading" className="sr-only">
          공지사항
        </h2>
        {notices.length > 0 ? (
          <div className="space-y-6" role="list" aria-label="공지사항 목록">
            {notices.map(post => (
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
              아직 공지사항이 없습니다
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              곧 중요한 공지사항을 공유할 예정입니다.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
