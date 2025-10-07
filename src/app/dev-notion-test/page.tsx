'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  tags?: string[];
}

export default function NotionTestPage() {
  const [notionPosts, setNotionPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 개발 환경인지 확인
    if (process.env.NODE_ENV !== 'development') {
      setError('이 페이지는 개발 환경에서만 접근 가능합니다.');
      setLoading(false);
      return;
    }

    // notion-posts.ts 로드 시도
    try {
      import('@/data/notion-posts')
        .then(module => {
          setNotionPosts(module.notionPosts || []);
          setLoading(false);
        })
        .catch(err => {
          setError(`노션 포스트를 불러올 수 없습니다: ${err.message}`);
          setLoading(false);
        });
    } catch (err: any) {
      setError(`에러 발생: ${err.message}`);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">노션 동기화 테스트</h1>
          <p className="text-gray-600 dark:text-gray-400">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-red-600">에러</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">해결 방법:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>노션 데이터베이스 ID가 올바른지 확인</li>
              <li>
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  npm run sync:notion
                </code>{' '}
                실행
              </li>
              <li>동기화 성공 후 페이지 새로고침</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">🧪 노션 동기화 테스트</h1>
          <p className="text-gray-600 dark:text-gray-400">
            개발 환경 전용 - 프로덕션에서는 보이지 않습니다
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">📊 통계</h3>
          <p className="text-sm">
            노션에서 가져온 포스트: <strong>{notionPosts.length}개</strong>
          </p>
        </div>

        {notionPosts.length === 0 ? (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="font-semibold mb-2">노션 포스트가 없습니다</h3>
            <p className="text-sm mb-4">다음 단계를 따라하세요:</p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>
                노션에서 데이터베이스 생성 (가이드: NOTION_SETUP_GUIDE.md)
              </li>
              <li>데이터베이스 ID를 .env.local에 설정</li>
              <li>
                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  npm run sync:notion
                </code>{' '}
                실행
              </li>
              <li>이 페이지 새로고침</li>
            </ol>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">가져온 포스트 목록</h2>
            {notionPosts.map(post => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex gap-2">
                    {post.tags?.map(tag => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Notion ID:{' '}
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {post.id}
                    </code>
                  </p>
                  <Link
                    href={`/${post.category}/${post.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    → 포스트 보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">🔧 개발자 도구</h3>
          <div className="space-y-2 text-sm">
            <div>
              <strong>동기화 명령어:</strong>
              <code className="ml-2 bg-white dark:bg-gray-900 px-2 py-1 rounded">
                npm run sync:notion
              </code>
            </div>
            <div>
              <strong>파일 위치:</strong>
              <code className="ml-2 bg-white dark:bg-gray-900 px-2 py-1 rounded">
                src/data/notion-posts.ts
              </code>
            </div>
            <div>
              <strong>이미지 저장:</strong>
              <code className="ml-2 bg-white dark:bg-gray-900 px-2 py-1 rounded">
                public/images/notion/[post-id]/
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
