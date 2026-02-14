'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROBLEM_SUBJECT_CONFIG, type ProblemSubject } from '@/lib/config';
import { Post } from '@/data/posts';
import ProblemViewerModal from './ProblemViewerModal';

interface ProblemsTabsProps {
  posts: Post[];
}

const SUBJECTS = Object.entries(PROBLEM_SUBJECT_CONFIG) as [
  ProblemSubject,
  (typeof PROBLEM_SUBJECT_CONFIG)[ProblemSubject],
][];

export default function ProblemsTabs({ posts }: ProblemsTabsProps) {
  const [activeSubject, setActiveSubject] = useState<ProblemSubject>('korean');
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  const [modalProblemDataId, setModalProblemDataId] = useState<string | null>(
    null
  );

  const handleSubjectChange = (subject: ProblemSubject) => {
    setActiveSubject(subject);
    setActiveSubFilter('all');
  };

  const closeModal = useCallback(() => {
    setModalUrl(null);
    setModalProblemDataId(null);
  }, []);

  const config = PROBLEM_SUBJECT_CONFIG[activeSubject];

  // 현재 과목에 해당하는 포스트 필터
  const subjectPosts = posts.filter(post =>
    config.categories.includes(post.category)
  );

  // 서브필터 적용
  const filteredPosts =
    activeSubFilter === 'all'
      ? subjectPosts
      : subjectPosts.filter(post => post.subcategory === activeSubFilter);

  // 서브카테고리별 개수 계산
  const getSubCount = (subKey: string) => {
    if (subKey === 'all') return subjectPosts.length;
    return subjectPosts.filter(post => post.subcategory === subKey).length;
  };

  const subcategories = Object.entries(config.subcategories) as [
    string,
    string,
  ][];
  const hasSubFilters = subcategories.length > 1;

  // 과목별 accent 색상
  const accentColors: Record<
    ProblemSubject,
    { border: string; hover: string; text: string; bg: string }
  > = {
    korean: {
      border: 'hover:border-emerald-500 dark:hover:border-emerald-400',
      hover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
      text: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-500 hover:bg-emerald-600',
    },
    math: {
      border: 'hover:border-blue-500 dark:hover:border-blue-400',
      hover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      text: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-500 hover:bg-blue-600',
    },
    english: {
      border: 'hover:border-violet-500 dark:hover:border-violet-400',
      hover: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
      text: 'text-violet-600 dark:text-violet-400',
      bg: 'bg-violet-500 hover:bg-violet-600',
    },
    social: {
      border: 'hover:border-amber-500 dark:hover:border-amber-400',
      hover: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
      text: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-500 hover:bg-amber-600',
    },
    science: {
      border: 'hover:border-rose-500 dark:hover:border-rose-400',
      hover: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
      text: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-500 hover:bg-rose-600',
    },
  };

  const accent = accentColors[activeSubject];

  return (
    <div className="space-y-6">
      {/* Level 1: 과목 탭 */}
      <div className="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-2 md:flex-wrap w-max md:w-auto">
          {SUBJECTS.map(([key, subject]) => {
            const count = posts.filter(p =>
              subject.categories.includes(p.category)
            ).length;
            return (
              <button
                key={key}
                onClick={() => handleSubjectChange(key)}
                className={`flex-shrink-0 px-5 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                  activeSubject === key
                    ? 'bg-sn-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="hidden md:inline mr-1.5">{subject.emoji}</span>
                {subject.label}
                <span className="ml-1.5 text-xs opacity-75">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Level 2: 선택과목 서브필터 */}
      {hasSubFilters && (
        <div className="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-1.5 md:flex-wrap w-max md:w-auto">
            {subcategories.map(([key, label]) => {
              const count = getSubCount(key);
              const isEmpty = count === 0 && key !== 'all';
              return (
                <button
                  key={key}
                  onClick={() => !isEmpty && setActiveSubFilter(key)}
                  className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    isEmpty
                      ? 'bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 cursor-default opacity-50'
                      : activeSubFilter === key
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {label}
                  <span className="ml-1 opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 포스트 그리드 */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              className={`group bg-white dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600 ${accent.border} hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              <Link href={post.url}>
                {post.thumbnail && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3
                    className={`font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 ${accent.hover} transition-colors`}
                  >
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
              {/* 문제 바로보기 버튼 */}
              {post.problemFileUrl && (
                <div className="px-4 pb-4">
                  <button
                    onClick={() => {
                      setModalUrl(post.problemFileUrl!);
                      setModalProblemDataId(post.problemDataId ?? null);
                    }}
                    className={`w-full py-2.5 text-sm font-semibold text-white rounded-lg transition-colors ${accent.bg}`}
                  >
                    문제 바로보기
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-4xl mb-4">{config.emoji}</div>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            {activeSubFilter === 'all'
              ? `${config.label} 컨텐츠가 아직 없습니다.`
              : `${(config.subcategories as Record<string, string>)[activeSubFilter]} 관련 문제가 아직 없습니다.`}
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            곧 업로드될 예정입니다.
          </p>
          {activeSubFilter !== 'all' && subjectPosts.length > 0 && (
            <button
              onClick={() => setActiveSubFilter('all')}
              className={`mt-4 text-sm font-medium ${accent.text} hover:underline`}
            >
              {config.label} 전체 보기
            </button>
          )}
        </div>
      )}

      {/* 문제 바로보기 모달 */}
      {modalUrl && (
        <ProblemViewerModal
          url={modalUrl}
          problemDataId={modalProblemDataId ?? undefined}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
