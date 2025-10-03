'use client';

import { useSearchParams } from 'next/navigation';
import { searchPosts } from '@/data/posts';
import { useState, useEffect, Suspense } from 'react';

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
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="검색어를 입력하세요..."
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sn-primary focus:border-transparent transition-colors"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3 bg-sn-primary hover:bg-sn-primary-dark text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSearching ? '검색 중...' : '검색'}
            </button>
          </div>
        </form>
      </div>

      {/* 검색 결과 */}
      {query && (
        <div className="space-y-4 lg:space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              검색 결과
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              "{query}"에 대한 {searchResults.length}개의 결과
            </span>
          </div>

          {searchResults.length > 0 ? (
            <div className="space-y-4 lg:space-y-6">
              {searchResults.map((post) => (
                <article
                  key={post.id}
                  className="border-b border-gray-200 dark:border-gray-700 pb-4 lg:pb-6 last:border-b-0"
                >
                  {/* 모바일 레이아웃 */}
                  <div className="block sm:hidden">
                    {/* 1. 썸네일 */}
                    {post.thumbnail && (
                      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    
                    {/* 콘텐츠 */}
                    <div className="space-y-3">
                      {/* 2. 제목 */}
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors">
                        <a href={post.url}>
                          🎥 {post.title}
                        </a>
                      </h2>

                      {/* 3. 요약 */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* 4. 메타 정보 (날짜, read) */}
                      <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category}</span>
                      </div>

                      {/* 5. 태그 */}
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 데스크톱 레이아웃 */}
                  <div className="hidden sm:flex gap-4 lg:gap-6">
                    {/* 썸네일 */}
                    {post.thumbnail && (
                      <div className="flex-shrink-0 w-40 sm:w-48 h-28 sm:h-32 overflow-hidden rounded-lg">
                        <img
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    
                    {/* 콘텐츠 */}
                    <div className="flex-1 space-y-3">
                      {/* 태그 */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* 제목 */}
                      <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors">
                        <a href={post.url}>
                          🎥 {post.title}
                        </a>
                      </h2>

                      {/* 요약 */}
                      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* 메타 정보 */}
                      <div className="flex items-center space-x-4 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="text-sn-primary dark:text-sn-primary-light font-medium">{post.category}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
      )}

      {/* 검색어가 없을 때 */}
      {!query && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            검색어를 입력해주세요
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            위의 검색창에 찾고자 하는 내용을 입력해보세요.
          </p>
        </div>
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
