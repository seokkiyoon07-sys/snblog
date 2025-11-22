'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import SuneungNotice from './SuneungNotice';
import AdmissionGuide2026 from './posts/2026AdmissionGuide';

interface BlogLayoutProps {
  post: {
    id: string;
    title: string;
    content: string;
    type?: 'standard' | 'special';
  };
}

export default function BlogLayout({ post }: BlogLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);

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
  }

  // Article Schema JSON-LD 생성
  const generateArticleSchema = () => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      author: {
        '@type': 'Organization',
        name: 'SN독학기숙학원',
        url: 'https://blog.snacademy.co.kr',
      },
      publisher: {
        '@type': 'Organization',
        name: 'SN독학기숙학원',
        logo: {
          '@type': 'ImageObject',
          url: 'https://blog.snacademy.co.kr/images/sn-logo.png',
        },
      },
      datePublished: new Date().toISOString().split('T')[0],
      dateModified: new Date().toISOString().split('T')[0],
      description: post.title,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://blog.snacademy.co.kr/problem-download/${post.id}`,
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
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
        strategy="afterInteractive"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema()),
        }}
      />
      <article className="prose lg:prose-xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
        <div
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
}
