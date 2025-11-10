import PostCard from '@/components/PostCard';
import { Metadata } from 'next';
import { getPostsByCategory } from '@/data/posts';
import Link from 'next/link';

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

      {/* 수능 학생정보 검색 카드 (최상단 고정) */}
      <Link href="/notice/suneung-2025" className="block">
        <article className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-200 cursor-pointer">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                  🔥 필독
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  2025-11-10
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                2025.11.13 수능 당일 학생정보 검색
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                수능 당일 학생 이름과 전화번호 뒷자리를 입력하여 고사장, 숙소,
                독서실 위치를 빠르게 확인하세요.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  고사장
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  숙소
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  독서실
                </div>
              </div>
            </div>
            <svg
              className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </article>
      </Link>

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
