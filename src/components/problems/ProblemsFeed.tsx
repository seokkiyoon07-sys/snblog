'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import {
  PROBLEM_CONTENT_TYPE_CONFIG,
  PROBLEM_SUBJECT_CONFIG,
  type ProblemContentType,
  type ProblemSubject,
} from '@/lib/config';
import type { Post } from '@/data/posts';
import ProblemViewerModal from '@/components/ProblemViewerModal';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';

export interface FeedItem {
  post: Post;
  contentType: ProblemContentType;
  subject?: ProblemSubject;
}

interface ProblemsFeedProps {
  items: FeedItem[];
  subjects: ProblemSubject[];
}

// 출제 로그는 허브 아래 '출제 로그' 섹션에서 따로 보여주므로 피드에서 제외
// 칼럼 → 해설 → 자료실 순. 이슈·개발기는 글이 생기면 뒤에 붙는다
const FEED_TYPES: ProblemContentType[] = [
  'column',
  'reading',
  'solution',
  'resource',
  'issue',
  'devlog',
];

const chipClass = (active: boolean) =>
  `flex-shrink-0 rounded-full transition-colors ${
    active
      ? 'bg-sn-primary text-white'
      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
  }`;

export default function ProblemsFeed({ items, subjects }: ProblemsFeedProps) {
  const [activeType, setActiveType] = useState<'all' | ProblemContentType>(
    'all'
  );
  const [activeSubject, setActiveSubject] = useState<'all' | ProblemSubject>(
    'all'
  );
  const [modalPost, setModalPost] = useState<Post | null>(null);
  const closeModal = useCallback(() => setModalPost(null), []);

  const typeItems =
    activeType === 'all'
      ? items
      : items.filter(item => item.contentType === activeType);
  const visibleItems =
    activeSubject === 'all'
      ? typeItems
      : typeItems.filter(item => item.subject === activeSubject);

  const typeCount = (type: ProblemContentType) =>
    items.filter(item => item.contentType === type).length;

  return (
    <div className="space-y-5">
      {/* 콘텐츠 유형 탭 */}
      <div className="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-2 md:flex-wrap w-max md:w-auto">
          <button
            onClick={() => setActiveType('all')}
            aria-pressed={activeType === 'all'}
            className={`px-5 py-2.5 text-sm font-semibold ${chipClass(activeType === 'all')}`}
          >
            전체
            <span className="ml-1.5 text-xs opacity-75">({items.length})</span>
          </button>
          {FEED_TYPES.filter(
            type => type === 'reading' || typeCount(type) > 0
          ).map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              aria-pressed={activeType === type}
              className={`px-5 py-2.5 text-sm font-semibold ${chipClass(activeType === type)}`}
            >
              <span className="hidden md:inline mr-1.5">
                {PROBLEM_CONTENT_TYPE_CONFIG[type].emoji}
              </span>
              {PROBLEM_CONTENT_TYPE_CONFIG[type].label}
              <span className="ml-1.5 text-xs opacity-75">
                ({typeCount(type)})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 과목 필터 */}
      <div className="overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-1.5 md:flex-wrap w-max md:w-auto">
          {(['all', ...subjects] as const).map(key => {
            const count =
              key === 'all'
                ? typeItems.length
                : typeItems.filter(item => item.subject === key).length;
            return (
              <button
                key={key}
                onClick={() => setActiveSubject(key)}
                aria-pressed={activeSubject === key}
                disabled={count === 0 && key !== 'all' && key !== 'korean'}
                className={`px-3 py-1.5 text-xs font-medium disabled:opacity-40 disabled:cursor-default ${chipClass(activeSubject === key)}`}
              >
                {key === 'all'
                  ? '전체 과목'
                  : PROBLEM_SUBJECT_CONFIG[key].label}
                <span className="ml-1 opacity-75">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 카드 그리드 */}
      {visibleItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map(({ post, contentType, subject }) => (
            <div
              key={post.id}
              className="group bg-white dark:bg-gray-700 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600 hover:border-sn-primary hover:shadow-2xl transition-all duration-300"
            >
              <TrackedPostLink
                href={post.url}
                postId={post.id}
                placement="problems_card"
              >
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
                  <div className="mb-2 flex flex-wrap gap-1.5 text-xs font-medium">
                    <span className="rounded bg-sn-primary/10 px-2 py-0.5 text-sn-primary">
                      {PROBLEM_CONTENT_TYPE_CONFIG[contentType].label}
                    </span>
                    {subject && (
                      <span className="rounded bg-gray-100 px-2 py-0.5 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        {PROBLEM_SUBJECT_CONFIG[subject].label}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-sn-primary transition-colors">
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
              </TrackedPostLink>
              {post.problemFileUrl && (
                <div className="px-4 pb-4">
                  <button
                    onClick={() => setModalPost(post)}
                    className="w-full py-2.5 text-sm font-semibold text-white rounded-lg bg-sn-primary hover:bg-sn-primary/90 transition-colors"
                  >
                    문제 바로보기
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-gray-300 px-6 py-12 text-center dark:border-gray-600">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {activeType === 'reading'
              ? '과목별 개념을 더 깊이 이해하는 읽기 자료'
              : '아직 등록된 글이 없습니다'}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {activeType === 'reading'
              ? '국어·수학 등 여러 과목의 배경 개념과 탐구 주제를 예시와 함께 소개할 예정입니다.'
              : '자료가 등록되면 이곳에서 확인할 수 있습니다.'}
          </p>
        </div>
      )}

      {modalPost?.problemFileUrl && (
        <ProblemViewerModal
          url={modalPost.problemFileUrl}
          problemDataId={modalPost.problemDataId}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
