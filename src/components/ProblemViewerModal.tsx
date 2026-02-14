'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import IndividualProblemView from './IndividualProblemView';

interface ProblemViewerModalProps {
  url: string;
  problemDataId?: string;
  onClose: () => void;
}

type ViewMode = 'examPaper' | 'individual';

export default function ProblemViewerModal({
  url,
  problemDataId,
  onClose,
}: ProblemViewerModalProps) {
  const [viewMode, setViewMode] = useState<ViewMode>(
    problemDataId ? 'individual' : 'examPaper'
  );
  const [activeView, setActiveView] = useState<'problems' | 'solutions'>(
    'problems'
  );
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleClose = useCallback(() => onClose(), [onClose]);

  // ESC 키 + body 스크롤 잠금
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleClose]);

  // 문제/해설 전환 시 iframe 내 스크롤
  const scrollToSection = useCallback((view: 'problems' | 'solutions') => {
    setActiveView(view);
    try {
      const iframe = iframeRef.current;
      if (!iframe?.contentWindow?.document) return;
      const doc = iframe.contentWindow.document;
      if (view === 'solutions') {
        const solPage = doc.querySelector('.paper-sol');
        if (solPage) solPage.scrollIntoView({ behavior: 'smooth' });
      } else {
        iframe.contentWindow.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch {
      // cross-origin 등 에러 시 무시
    }
  }, []);

  const handlePrint = useCallback(() => {
    try {
      const iframe = iframeRef.current;
      if (iframe?.contentWindow) {
        iframe.contentWindow.print();
      }
    } catch {
      // cross-origin fallback: 새 탭에서 열어 인쇄
      window.open(url, '_blank');
    }
  }, [url]);

  const hasDualMode = !!problemDataId;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={handleClose}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className="relative w-[95vw] h-[92vh] max-w-7xl bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* 헤더 바 */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900 text-white flex-shrink-0">
          {/* 좌측: 모드 토글 + 시험지 내 탭 */}
          <div className="flex items-center gap-2">
            {/* 모드 토글 (problemDataId 있을 때만) */}
            {hasDualMode && (
              <div className="flex items-center gap-1 bg-gray-800 rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode('individual')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    viewMode === 'individual'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  문제별 보기
                </button>
                <button
                  onClick={() => setViewMode('examPaper')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    viewMode === 'examPaper'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  시험지 보기
                </button>
              </div>
            )}

            {/* 시험지 모드에서만: 문제/해설 전환 */}
            {viewMode === 'examPaper' && (
              <div className="flex items-center gap-1 bg-gray-800 rounded-lg p-0.5">
                <button
                  onClick={() => scrollToSection('problems')}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    activeView === 'problems'
                      ? 'bg-white text-gray-900'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  문제
                </button>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    activeView === 'solutions'
                      ? 'bg-white text-gray-900'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  정답·해설
                </button>
              </div>
            )}
          </div>

          {/* 우측: 인쇄 + 새탭 + 닫기 */}
          <div className="flex items-center gap-3">
            {viewMode === 'examPaper' && (
              <>
                <button
                  onClick={handlePrint}
                  className="text-xs text-gray-300 hover:text-white transition-colors"
                >
                  PDF 인쇄
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-300 hover:text-white transition-colors"
                >
                  새 탭에서 열기
                </a>
              </>
            )}
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
              aria-label="닫기"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 본문 */}
        <div className="flex-1 min-h-0">
          {viewMode === 'examPaper' ? (
            <iframe
              ref={iframeRef}
              src={url}
              className="w-full h-full"
              title="문제 미리보기"
            />
          ) : (
            problemDataId && (
              <IndividualProblemView problemDataId={problemDataId} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
