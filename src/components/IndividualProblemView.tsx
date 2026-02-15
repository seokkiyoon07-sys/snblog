'use client';

import { useState, useEffect, useCallback } from 'react';
import { loadProblemSet } from '@/data/problems';
import type { ProblemSet, ProblemVariant } from '@/types/problems';
import ProblemCard from './ProblemCard';

interface IndividualProblemViewProps {
  problemDataId: string;
}

const VARIANT_TABS: { key: ProblemVariant; label: string }[] = [
  { key: 'original', label: '원문' },
  { key: 'variant', label: '변형' },
  { key: 'creative', label: '창작' },
];

export default function IndividualProblemView({
  problemDataId,
}: IndividualProblemViewProps) {
  const [problemSet, setProblemSet] = useState<ProblemSet | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVariant, setActiveVariant] =
    useState<ProblemVariant>('original');

  useEffect(() => {
    setLoading(true);
    loadProblemSet(problemDataId).then(data => {
      setProblemSet(data);
      setLoading(false);
    });
  }, [problemDataId]);

  const goNext = useCallback(() => {
    if (problemSet && currentIndex < problemSet.triplets.length - 1) {
      setCurrentIndex(i => i + 1);
      setActiveVariant('original');
    }
  }, [problemSet, currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setActiveVariant('original');
    }
  }, [currentIndex]);

  // 키보드 좌/우 화살표
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto" />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            문제 로딩 중...
          </p>
        </div>
      </div>
    );
  }

  if (!problemSet || problemSet.triplets.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500 dark:text-gray-400">
          문제 데이터를 불러올 수 없습니다.
        </p>
      </div>
    );
  }

  const triplet = problemSet.triplets[currentIndex];
  const total = problemSet.triplets.length;
  const currentProblem = triplet[activeVariant];

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800">
      {/* 네비게이션 바 */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="px-3 py-1.5 text-sm font-medium rounded-lg disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          ← 이전
        </button>

        <div className="text-center">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {triplet.number}번
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1.5">
            {triplet.topic}
          </span>
          <span className="text-[11px] text-gray-400 dark:text-gray-500 ml-2">
            ({currentIndex + 1}/{total})
          </span>
        </div>

        <button
          onClick={goNext}
          disabled={currentIndex === total - 1}
          className="px-3 py-1.5 text-sm font-medium rounded-lg disabled:opacity-30 disabled:cursor-not-allowed text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          다음 →
        </button>
      </div>

      {/* 원문/변형/창작 탭 */}
      <div className="flex items-center gap-1 px-4 py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        {VARIANT_TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveVariant(tab.key)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-colors ${
              activeVariant === tab.key
                ? tab.key === 'original'
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-green-600 text-white'
                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
        <span className="ml-auto text-[10px] text-gray-400 dark:text-gray-500 hidden md:block">
          {triplet.source}
        </span>
      </div>

      {/* 문제 카드 (1개) */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <ProblemCard
          problem={currentProblem}
          label={`${triplet.number}. ${activeVariant === 'original' ? '' : activeVariant === 'variant' ? '[변형] ' : '[창작] '}`}
        />
      </div>
    </div>
  );
}
