'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatReadTime } from '@/lib/utils';
import { getCategoryEmoji, getCategoryRoute } from '@/lib/config';
import { Post } from '@/types';

interface OriginalsTabsProps {
  allWorks: Post[];
  steadyWorks: Post[];
  schoolExamWorks: Post[];
  suneung2026Works: Post[];
}

type TabKey = 'all' | 'steady' | 'school' | 'suneung2026';
type ViewMode = 'card' | 'list';

const ITEMS_PER_PAGE = 6;

// 정철 트릴로지 작품 ID
const JEONGCHEOL_TRILOGY_IDS = [
  'gwandong-byeolgok',
  'samieungok',
  'sokmieungok',
];

// 2024 수능 출제 작품 ID
const SUNEUNG_2024_WORK_ID = 'gapminga';

// 2025 수능 출제 작품 ID
const SUNEUNG_2025_WORK_ID = 'buksaegok';

// SN고전문학 몰아보기 IDs
const MARATHON_WORK_IDS = [
  'classic-literature-marathon-2026',
  'classic-literature-marathon-2',
];

const TABS: { key: TabKey; label: string }[] = [
  { key: 'all', label: '전체보기' },
  { key: 'steady', label: '스테디 작품' },
  { key: 'school', label: '내신대비' },
  { key: 'suneung2026', label: '2026 수능대비' },
];

export default function OriginalsTabs({
  allWorks,
  steadyWorks,
  schoolExamWorks,
  suneung2026Works,
}: OriginalsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [currentPage, setCurrentPage] = useState(1);

  const getWorksForTab = (tab: TabKey): Post[] => {
    switch (tab) {
      case 'all':
        return allWorks;
      case 'steady':
        return steadyWorks;
      case 'school':
        return schoolExamWorks;
      case 'suneung2026':
        return suneung2026Works;
      default:
        return allWorks;
    }
  };

  const currentWorks = getWorksForTab(activeTab);

  // 리스트 보기에서 페이지네이션 적용
  const totalPages = Math.ceil(currentWorks.length / ITEMS_PER_PAGE);
  const paginatedWorks =
    viewMode === 'list'
      ? currentWorks.slice(
          (currentPage - 1) * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        )
      : currentWorks;

  // 탭 변경 시 페이지 초기화
  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // 보기 모드 변경 시 페이지 초기화
  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-4">
      {/* 탭 버튼들 + 보기 모드 토글 */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === tab.key
                  ? 'bg-sn-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 보기 모드 토글 */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => handleViewModeChange('card')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'card'
                ? 'bg-white dark:bg-gray-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            aria-label="카드 보기"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
          <button
            onClick={() => handleViewModeChange('list')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'list'
                ? 'bg-white dark:bg-gray-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            aria-label="리스트 보기"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 작품 목록 */}
      {currentWorks.length > 0 ? (
        viewMode === 'card' ? (
          // 카드 보기
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {currentWorks.map(work => {
              const isTrilogy = JEONGCHEOL_TRILOGY_IDS.includes(work.id);
              const is2024Work = work.id === SUNEUNG_2024_WORK_ID;
              const is2025Work = work.id === SUNEUNG_2025_WORK_ID;
              const isMarathon = MARATHON_WORK_IDS.includes(work.id);
              return (
                <Link
                  key={work.id}
                  href={`/originals/${work.id}`}
                  className={`group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden border hover:shadow-md transition-all ${
                    isMarathon
                      ? 'border-emerald-400 dark:border-emerald-500 ring-1 ring-emerald-200 dark:ring-emerald-500/30'
                      : isTrilogy
                        ? 'border-blue-400 dark:border-blue-500 ring-1 ring-blue-200 dark:ring-blue-500/30'
                        : is2025Work
                          ? 'border-rose-400 dark:border-rose-500 ring-1 ring-rose-200 dark:ring-rose-500/30'
                          : is2024Work
                            ? 'border-violet-400 dark:border-violet-500 ring-1 ring-violet-200 dark:ring-violet-500/30'
                            : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {work.thumbnail && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={work.thumbnail}
                        alt={work.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                      {/* 정철 트릴로지 배지 */}
                      {isTrilogy && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-bold rounded-full shadow-lg flex items-center gap-1">
                          <span>👑</span>
                          <span>정철 트릴로지</span>
                        </div>
                      )}
                      {/* 2024 수능 출제 배지 */}
                      {is2024Work && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-[10px] font-bold rounded-full shadow-lg flex items-center gap-1">
                          <span>🎯</span>
                          <span>2024 수능 출제</span>
                        </div>
                      )}
                      {/* 2025 수능 출제 배지 */}
                      {is2025Work && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-bold rounded-full shadow-lg flex items-center gap-1">
                          <span>🎯</span>
                          <span>2025 수능 출제</span>
                        </div>
                      )}
                      {/* 몰아보기 배지 (posts.ts의 badge 필드 사용) */}
                      {isMarathon && work.badge && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-bold rounded-full shadow-lg flex items-center gap-1">
                          <span>🔥</span>
                          <span>{work.badge}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-3">
                    <h4
                      className={`text-sm font-medium line-clamp-2 transition-colors ${
                        isMarathon
                          ? 'text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300'
                          : isTrilogy
                            ? 'text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300'
                            : is2025Work
                              ? 'text-rose-700 dark:text-rose-400 group-hover:text-rose-600 dark:group-hover:text-rose-300'
                              : is2024Work
                                ? 'text-violet-700 dark:text-violet-400 group-hover:text-violet-600 dark:group-hover:text-violet-300'
                                : 'text-gray-900 dark:text-white group-hover:text-sn-primary dark:group-hover:text-emerald-400'
                      }`}
                    >
                      {work.title}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          // 리스트 보기 (PostCard 스타일 + 페이지네이션)
          <div className="space-y-4 lg:space-y-6">
            {paginatedWorks.map(work => {
              const emoji = getCategoryEmoji(work.category);
              const isoDate = work.date.replace(/\//g, '-');
              const isTrilogy = JEONGCHEOL_TRILOGY_IDS.includes(work.id);
              const is2024Work = work.id === SUNEUNG_2024_WORK_ID;
              const is2025Work = work.id === SUNEUNG_2025_WORK_ID;
              const isMarathon = MARATHON_WORK_IDS.includes(work.id);

              return (
                <article
                  key={work.id}
                  className={`pb-4 lg:pb-6 last:border-b-0 ${
                    isMarathon
                      ? 'border-l-4 border-l-emerald-400 pl-4 border-b border-b-gray-200 dark:border-b-gray-700'
                      : isTrilogy
                        ? 'border-l-4 border-l-blue-400 pl-4 border-b border-b-gray-200 dark:border-b-gray-700'
                        : is2025Work
                          ? 'border-l-4 border-l-rose-400 pl-4 border-b border-b-gray-200 dark:border-b-gray-700'
                          : is2024Work
                            ? 'border-l-4 border-l-violet-400 pl-4 border-b border-b-gray-200 dark:border-b-gray-700'
                            : 'border-b border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 lg:gap-6">
                    {/* 썸네일 */}
                    {work.thumbnail && (
                      <div className="relative w-full sm:w-40 lg:w-48 h-48 sm:h-28 lg:h-32 overflow-hidden rounded-lg order-1 sm:order-1">
                        <Image
                          src={work.thumbnail}
                          alt={work.title}
                          fill
                          sizes="(max-width:640px) 100vw, (max-width:1024px) 10rem, 12rem"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}

                    {/* 콘텐츠 */}
                    <div className="space-y-3 order-2 sm:order-2">
                      {/* 태그 (데스크톱에서만 상단 표시) */}
                      {work.tags && work.tags.length > 0 && (
                        <ul
                          className="hidden sm:flex flex-wrap gap-2"
                          aria-label="포스트 태그"
                        >
                          {work.tags.map(tag => (
                            <li key={tag}>
                              <Link
                                href={`/tags/${encodeURIComponent(tag)}`}
                                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded hover:bg-sn-primary/10 dark:hover:bg-sn-primary/20 hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors"
                              >
                                #{tag}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* 제목 */}
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white">
                        <Link
                          href={work.url}
                          className="inline-flex items-start"
                        >
                          <span className="mr-2">{emoji}</span>
                          <span className="flex flex-col gap-2">
                            {/* 특별 배지 */}
                            {isTrilogy && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full w-fit">
                                <span>👑</span>
                                <span>정철 트릴로지</span>
                              </span>
                            )}
                            {is2024Work && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full w-fit">
                                <span>🎯</span>
                                <span>2024 수능 출제</span>
                              </span>
                            )}
                            {is2025Work && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full w-fit">
                                <span>🎯</span>
                                <span>2025 수능 출제</span>
                              </span>
                            )}
                            {isMarathon && work.badge && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full w-fit">
                                <span>🔥</span>
                                <span>{work.badge}</span>
                              </span>
                            )}
                            <span className="whitespace-pre-line relative inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-400 dark:hover:to-purple-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 dark:after:from-blue-400 dark:after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full">
                              {work.title}
                            </span>
                          </span>
                        </Link>
                      </h2>

                      {/* 요약 */}
                      <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                        {work.excerpt}
                      </p>

                      {/* 메타 정보 */}
                      <div className="flex items-center space-x-3 sm:space-x-4 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                        <time dateTime={isoDate} className="font-medium">
                          {work.date}
                        </time>
                        <span aria-hidden="true">•</span>
                        <span>{formatReadTime(work.readTime)}</span>
                        <span aria-hidden="true">•</span>
                        <Link
                          href={getCategoryRoute(work.category)}
                          className="text-sn-primary dark:text-sn-primary-light font-medium hover:underline"
                        >
                          {work.category}
                        </Link>
                      </div>

                      {/* 태그 (모바일에서만 하단 표시) */}
                      {work.tags && work.tags.length > 0 && (
                        <ul
                          className="flex sm:hidden flex-wrap gap-1.5"
                          aria-label="포스트 태그"
                        >
                          {work.tags.map(tag => (
                            <li key={tag}>
                              <Link
                                href={`/tags/${encodeURIComponent(tag)}`}
                                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded hover:bg-sn-primary/10 dark:hover:bg-sn-primary/20 hover:text-sn-primary dark:hover:text-sn-primary-light transition-colors"
                              >
                                #{tag}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}

            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <nav
                aria-label="페이지네이션"
                className="flex justify-center mt-8"
              >
                <div className="flex items-center space-x-2">
                  {/* 이전 버튼 */}
                  <button
                    onClick={() =>
                      setCurrentPage(prev => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      currentPage === 1
                        ? 'text-gray-300 bg-gray-100 border border-gray-200 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-500'
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    }`}
                    aria-label="이전 페이지"
                  >
                    이전
                  </button>

                  {/* 페이지 번호들 */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 text-sm font-medium rounded-md ${
                          currentPage === page
                            ? 'bg-sn-primary text-white'
                            : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                        }`}
                        aria-label={`${page}페이지`}
                        aria-current={currentPage === page ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    )
                  )}

                  {/* 다음 버튼 */}
                  <button
                    onClick={() =>
                      setCurrentPage(prev => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      currentPage === totalPages
                        ? 'text-gray-300 bg-gray-100 border border-gray-200 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-500'
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    }`}
                    aria-label="다음 페이지"
                  >
                    다음
                  </button>
                </div>
              </nav>
            )}
          </div>
        )
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          해당 카테고리에 작품이 없습니다.
        </p>
      )}
    </div>
  );
}
