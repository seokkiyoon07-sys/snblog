'use client';

import { useState, useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
import renderMathInElement from 'katex/contrib/auto-render';
import type { Problem } from '@/types/problems';

interface ProblemCardProps {
  problem: Problem;
  label: string;
}

export default function ProblemCard({ problem, label }: ProblemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  // 문제 변경 시 초기화
  useEffect(() => {
    setShowSolution(false);
    setSelectedChoice(null);
  }, [problem]);

  useEffect(() => {
    if (cardRef.current) {
      renderMathInElement(cardRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      });
    }
  }, [problem, showSolution, selectedChoice]);

  const cols = problem.choiceColumns ?? 5;

  /* ── 문제 영역 (공통) ── */
  const problemContent = (
    <>
      <div className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {label}
      </div>

      <div
        className="text-[15px] leading-relaxed text-gray-900 dark:text-gray-100 mb-4 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: problem.questionHtml }}
      />

      {problem.viewbox && (
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-4 space-y-2">
          {problem.viewbox.map((item, i) => (
            <div
              key={i}
              className="text-sm text-gray-800 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          ))}
        </div>
      )}

      {problem.bogi && (
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 mb-4">
          <div className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            &lt; 보 기 &gt;
          </div>
          <div className="space-y-2">
            {problem.bogi.map((item, i) => (
              <div key={i} className="text-sm text-gray-800 dark:text-gray-200">
                <span className="font-medium mr-1">{item.label}.</span>
                <span dangerouslySetInnerHTML={{ __html: item.html }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {problem.diagramHtml && (
        <div
          className="my-4 flex justify-center"
          dangerouslySetInnerHTML={{ __html: problem.diagramHtml }}
        />
      )}

      <div
        className="mt-4 grid gap-2"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {problem.choices.map((choice, i) => {
          const isSelected = selectedChoice === i;
          const isCorrect = i === problem.solution.correctIndex;
          const answered = selectedChoice !== null;

          let choiceStyle =
            'hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer';
          if (answered && isSelected && isCorrect) {
            choiceStyle =
              'bg-green-50 dark:bg-green-900/30 ring-2 ring-green-500';
          } else if (answered && isSelected && !isCorrect) {
            choiceStyle = 'bg-red-50 dark:bg-red-900/30 ring-2 ring-red-500';
          } else if (answered && isCorrect) {
            choiceStyle =
              'bg-green-50 dark:bg-green-900/30 ring-1 ring-green-400';
          } else if (answered) {
            choiceStyle = 'opacity-40';
          }

          return (
            <button
              key={i}
              onClick={() => !answered && setSelectedChoice(i)}
              disabled={answered}
              className={`flex items-start gap-1 text-sm text-gray-800 dark:text-gray-200 rounded-md px-2 py-1.5 transition-all text-left ${choiceStyle}`}
            >
              <span className="font-medium flex-shrink-0">{choice.label}</span>
              <span dangerouslySetInnerHTML={{ __html: choice.text }} />
            </button>
          );
        })}
      </div>
      {selectedChoice !== null && (
        <div
          className={`mt-3 text-sm font-semibold ${selectedChoice === problem.solution.correctIndex ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
        >
          {selectedChoice === problem.solution.correctIndex
            ? '정답입니다!'
            : '오답입니다.'}
        </div>
      )}
    </>
  );

  /* ── 해설 영역 (공통) ── */
  const solutionContent = (
    <>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 text-center mb-5">
        <span className="text-sm font-bold text-blue-800 dark:text-blue-300">
          정답:{' '}
          <span
            dangerouslySetInnerHTML={{ __html: problem.solution.answerDisplay }}
          />
        </span>
      </div>

      <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
        풀이
      </div>
      <ol className="list-decimal list-inside space-y-2">
        {problem.solution.steps.map((step, i) => (
          <li
            key={i}
            className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: step.html }}
          />
        ))}
      </ol>

      <button
        onClick={() => setShowSolution(false)}
        className="mt-4 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        해설 닫기
      </button>
    </>
  );

  return (
    <div ref={cardRef} className="h-full">
      {/* ── 데스크탑: 항상 2분할 ── */}
      <div className="hidden md:flex md:flex-row h-full">
        <div className="flex-1 overflow-y-auto p-6 border-r border-gray-200 dark:border-gray-700">
          {problemContent}
        </div>
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900/50">
          {showSolution ? (
            solutionContent
          ) : (
            <div className="h-full flex items-center justify-center">
              <button
                onClick={() => setShowSolution(true)}
                className="px-6 py-3 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                정답·해설 보기
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── 모바일: 세로 스크롤 ── */}
      <div className="md:hidden p-5">
        {problemContent}

        {showSolution ? (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            {solutionContent}
          </div>
        ) : (
          <button
            onClick={() => setShowSolution(true)}
            className="mt-6 w-full py-3 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            정답·해설 보기
          </button>
        )}
      </div>
    </div>
  );
}
