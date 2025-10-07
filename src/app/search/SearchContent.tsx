'use client';

import { useSearchParams } from 'next/navigation';
import { searchPosts } from '@/data/posts';
import { useState, useEffect, Suspense } from 'react';
import PostCard from '@/components/PostCard';

function SearchContentInner() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [isSearching, setIsSearching] = useState(false);

  // 검색 결과 데이터 (동적)
  const searchResults = searchPosts(query);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* 검색 입력 */}
      <section aria-labelledby="search-heading">
        <h2 id="search-heading" className="sr-only">
          검색
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <form
            onSubmit={handleSearch}
            className="space-y-4"
            role="search"
            aria-label="블로그 검색"
          >
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <label htmlFor="search-input" className="sr-only">
                  검색어 입력
                </label>
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="검색어를 입력하세요..."
                  className="w-full px-4 py-3 pl-10 pr-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sn-primary focus:border-transparent transition-colors"
                  aria-describedby="search-description"
                />
                <div
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div id="search-description" className="sr-only">
                  블로그 포스트를 검색할 수 있습니다. 제목, 내용, 태그로 검색
                  가능합니다.
                </div>
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 bg-sn-primary hover:bg-sn-primary-dark text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-describedby={isSearching ? 'searching-status' : undefined}
              >
                {isSearching ? '검색 중...' : '검색'}
                {isSearching && (
                  <span id="searching-status" className="sr-only">
                    검색 중입니다. 잠시만 기다려주세요.
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 검색 결과 */}
      {query && (
        <section aria-labelledby="results-heading">
          <h2 id="results-heading" className="sr-only">
            검색 결과
          </h2>
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                검색 결과
              </h3>
              <div
                className="text-sm text-gray-500 dark:text-gray-400"
                aria-live="polite"
              >
                "{query}"에 대한 {searchResults.length}개의 결과
              </div>
            </div>

            {searchResults.length > 0 ? (
              <div
                className="space-y-4 lg:space-y-6"
                role="list"
                aria-label="검색 결과 목록"
              >
                {searchResults.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div
                className="text-center py-12"
                role="status"
                aria-live="polite"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 text-gray-400"
                  aria-hidden="true"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  검색 결과가 없습니다
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  다른 검색어로 시도해보세요.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 검색어가 없을 때 */}
      {!query && (
        <section aria-labelledby="empty-state-heading">
          <h2 id="empty-state-heading" className="sr-only">
            검색 안내
          </h2>
          <div className="text-center py-12">
            <div
              className="w-16 h-16 mx-auto mb-4 text-gray-400"
              aria-hidden="true"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              검색어를 입력해주세요
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              위의 검색창에 찾고자 하는 내용을 입력해보세요.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default function SearchContent() {
  return (
    <Suspense fallback={<div>검색 중...</div>}>
      <SearchContentInner />
    </Suspense>
  );
}
