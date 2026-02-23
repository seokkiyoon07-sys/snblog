'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import SuneungNotice from './SuneungNotice';
import AdmissionGuide2026 from './posts/2026AdmissionGuide';
import AcademicCalendar2026 from './posts/2026AcademicCalendar';
import ProblemViewerModal from './ProblemViewerModal';
import { BASE_URL, ORGANIZATION_INFO } from '@/lib/config';

interface BlogLayoutProps {
  post: {
    id: string;
    title: string;
    content: string;
    type?: 'standard' | 'special';
    problemFileUrl?: string;
    problemDataId?: string;
    thumbnail?: string;
  };
}

export default function BlogLayout({ post }: BlogLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [showProblemModal, setShowProblemModal] = useState(false);
  const [katexLoaded, setKatexLoaded] = useState(
    () => typeof window !== 'undefined' && !!(window as any).katex
  );

  // 이미지 클릭 + 문제 바로보기 클릭 이벤트 핸들러
  useEffect(() => {
    const handleContentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // 문제 바로보기 버튼 (data-problem-viewer)
      const problemBtn = target.closest('[data-problem-viewer]');
      if (problemBtn) {
        e.preventDefault();
        setShowProblemModal(true);
        return;
      }

      // 이미지 클릭
      if (target.tagName === 'IMG' && contentRef.current?.contains(target)) {
        const imgSrc = (target as HTMLImageElement).src;
        setModalImage(imgSrc);
      }
    };

    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('click', handleContentClick);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('click', handleContentClick);
      }
    };
  }, [post.content]);

  useEffect(() => {
    // 탭 전환 함수들을 전역으로 등록 (즉시 실행)
    const initFunctions = () => {
      if (typeof window !== 'undefined') {
        // AI 분석표 탭 전환 함수
        (window as any).showTab = function (
          tabName: string,
          event: MouseEvent
        ) {
          const tabs = document.querySelectorAll('.tab-content');
          const buttons = document.querySelectorAll('.tab-button');

          tabs.forEach(tab => ((tab as HTMLElement).style.display = 'none'));
          buttons.forEach(btn => btn.classList.remove('active-tab'));

          const targetTab = document.getElementById(tabName);
          if (targetTab) {
            targetTab.style.display = 'block';
          }
          (event.target as HTMLElement).classList.add('active-tab');
        };

        // 유사 문제 과목별 탭 전환 함수
        (window as any).showSubject = function (
          subjectId: string,
          event: MouseEvent
        ) {
          const contents = document.querySelectorAll('.subject-content');
          const buttons = document.querySelectorAll('.subject-tab');

          contents.forEach(content => content.classList.remove('active'));
          buttons.forEach(btn => btn.classList.remove('active'));

          const targetContent = document.getElementById(subjectId);
          if (targetContent) {
            targetContent.classList.add('active');
          }
          (event.target as HTMLElement).classList.add('active');
        };

        // 툴팁 토글 함수
        (window as any).toggleTooltip = function (
          tooltipId: string,
          event: Event
        ) {
          event.stopPropagation();
          const tooltip = document.getElementById(tooltipId);
          if (tooltip) {
            const isVisible = tooltip.style.display === 'block';
            // 모든 툴팁 숨기기
            document.querySelectorAll('.info-tooltip').forEach(t => {
              (t as HTMLElement).style.display = 'none';
            });
            // 클릭한 툴팁만 토글
            tooltip.style.display = isVisible ? 'none' : 'block';
          }
        };

        // 문서 클릭 시 모든 툴팁 닫기
        document.addEventListener('click', () => {
          document.querySelectorAll('.info-tooltip').forEach(t => {
            (t as HTMLElement).style.display = 'none';
          });
        });
      }
    };

    // 즉시 실행
    initFunctions();

    // DOM이 완전히 로드된 후에도 한 번 더 실행
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initFunctions);
      return () =>
        document.removeEventListener('DOMContentLoaded', initFunctions);
    }
  }, [post.id]);

  // KaTeX 렌더링
  useEffect(() => {
    const renderKaTeX = () => {
      if (
        typeof window !== 'undefined' &&
        (window as any).renderMathInElement &&
        contentRef.current
      ) {
        (window as any).renderMathInElement(contentRef.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
          ],
          throwOnError: false,
        });
      }
    };

    // KaTeX가 로드된 후 렌더링
    if ((window as any).renderMathInElement) {
      renderKaTeX();
    } else {
      // KaTeX가 로드될 때까지 대기
      const checkKaTeX = setInterval(() => {
        if ((window as any).renderMathInElement) {
          clearInterval(checkKaTeX);
          renderKaTeX();
        }
      }, 100);

      return () => clearInterval(checkKaTeX);
    }
  }, [post.content]);

  // 특별한 컴포넌트가 필요한 경우
  if (post.type === 'special' && post.content === 'special-component') {
    if (post.id === '251113suneungnotice') {
      return <SuneungNotice />;
    }
    if (post.id === '2026-admission-guide') {
      return <AdmissionGuide2026 />;
    }
    if (post.id === '2026-academic-calendar') {
      return <AcademicCalendar2026 />;
    }
  }

  const shouldRenderThumbnail = (() => {
    if (!post.thumbnail) {
      return false;
    }

    const thumbnailCandidates = [
      post.thumbnail,
      `https://blog.snacademy.co.kr${post.thumbnail}`,
    ];

    return !thumbnailCandidates.some(
      src =>
        post.content.includes(`src="${src}"`) ||
        post.content.includes(`src='${src}'`)
    );
  })();

  // Article Schema JSON-LD 생성
  const generateArticleSchema = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      author: {
        '@type': 'Organization',
        name: ORGANIZATION_INFO.name,
        url: BASE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: ORGANIZATION_INFO.name,
        logo: {
          '@type': 'ImageObject',
          url: ORGANIZATION_INFO.logo,
        },
      },
      datePublished: new Date().toISOString().split('T')[0],
      dateModified: new Date().toISOString().split('T')[0],
      description: post.title,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/problem-download/${post.id}`,
      },
    };
    return schema;
  };

  // 기본 마크다운 렌더링
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"
        strategy="afterInteractive"
        onReady={() => setKatexLoaded(true)}
      />
      {katexLoaded && (
        <Script
          src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
          strategy="afterInteractive"
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema()),
        }}
      />
      <article className="prose lg:prose-xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          {post.title.includes('\n') ? (
            <>
              {post.title.split('\n')[0]}
              <span className="block text-lg font-normal text-gray-500 dark:text-gray-400 mt-2">
                {post.title.split('\n')[1]}
              </span>
            </>
          ) : (
            post.title
          )}
        </h1>
        {shouldRenderThumbnail && (
          <div className="not-prose mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full rounded-lg"
            />
          </div>
        )}
        <div
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="[&_img]:cursor-pointer [&_img]:transition-transform [&_img]:hover:scale-[1.02]"
        />
      </article>

      {/* 문제 바로보기 모달 */}
      {showProblemModal && post.problemFileUrl && (
        <ProblemViewerModal
          url={post.problemFileUrl}
          problemDataId={post.problemDataId}
          onClose={() => setShowProblemModal(false)}
        />
      )}

      {/* 이미지 모달 */}
      {modalImage && (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
          onKeyDown={e => e.key === 'Escape' && setModalImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 모달"
          tabIndex={-1}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-3xl font-bold"
              aria-label="닫기"
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={modalImage}
              alt="확대 이미지"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
