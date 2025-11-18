import Link from 'next/link';
import Image from 'next/image';
import { allPosts } from '@/data/posts';

export const metadata = {
  title: '문제 다운로드 | SN Academy 수학 문제집',
  description:
    'SN Academy에서 제공하는 수학 문제집과 기출문제를 다운로드하세요. 수능, 모의고사, 기출문제 등 다양한 수학 문제를 무료로 제공합니다.',
  keywords:
    '문제 다운로드, 수학 문제집, 수능 기출, 모의고사, 수학 문제, SN Academy',
  openGraph: {
    title: '문제 다운로드 | SN Academy 수학 문제집',
    description:
      'SN Academy에서 제공하는 수학 문제집과 기출문제를 다운로드하세요.',
    type: 'website',
    locale: 'ko_KR',
  },
};

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function ProblemsPage() {
  // problem-download 카테고리의 게시글 가져오기
  const problemDownloadPosts = allPosts
    .filter(post => post.category === 'problem-download' && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-8">
      {/* 페이지 헤더 */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          문제 다운로드
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          수학 문제집과 기출문제를 무료로 다운로드하세요
        </p>
      </div>

      {/* 수학 컨텐츠 */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          📚 수학 컨텐츠
        </h2>
        {problemDownloadPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemDownloadPosts.map(post => (
              <Link
                key={post.id}
                href={post.url}
                className="group bg-white dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {post.thumbnail && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}분 읽기</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              수학 컨텐츠가 없습니다.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
              곧 업로드될 예정입니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
