'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import RevealText from './RevealText';
import PrintButton from './PrintButton';
import { createRoot } from 'react-dom/client';

interface ArticleContentProps {
  content: string;
  className?: string;
}

interface RevealItem {
  id: string;
  original: string;
  translation: string;
  index?: number;
}

interface PrintButtonItem {
  id: string;
  contentId: string;
  title: string;
  buttonText?: string;
}

// HTML content에서 reveal-text 데이터 추출
function extractRevealItems(htmlContent: string): {
  items: RevealItem[];
  processedContent: string;
} {
  const items: RevealItem[] = [];
  let processedContent = htmlContent;

  // data-reveal-text 속성을 가진 div 찾기
  const regex =
    /<div\s+data-reveal-text\s+data-original="([^"]*)"\s+data-translation="([^"]*)"(?:\s+data-index="([^"]*)")?\s*><\/div>/g;

  let match;
  let index = 0;

  while ((match = regex.exec(htmlContent)) !== null) {
    const id = `reveal-${index}`;
    const original = match[1]
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"');
    const translation = match[2]
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"');
    const itemIndex = match[3] ? parseInt(match[3], 10) : undefined;

    items.push({ id, original, translation, index: itemIndex });

    // placeholder div로 교체
    processedContent = processedContent.replace(
      match[0],
      `<div id="${id}" class="reveal-placeholder"></div>`
    );
    index++;
  }

  return { items, processedContent };
}

// HTML content에서 print-button 데이터 추출
function extractPrintButtons(htmlContent: string): {
  items: PrintButtonItem[];
  processedContent: string;
} {
  const items: PrintButtonItem[] = [];
  let processedContent = htmlContent;

  // data-print-button 속성을 가진 div 찾기
  const regex =
    /<div\s+data-print-button\s+data-content-id="([^"]*)"\s+data-title="([^"]*)"(?:\s+data-button-text="([^"]*)")?\s*><\/div>/g;

  let match;
  let index = 0;

  while ((match = regex.exec(htmlContent)) !== null) {
    const id = `print-btn-${index}`;
    const contentId = match[1];
    const title = match[2]
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"');
    const buttonText = match[3]
      ? match[3]
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
      : undefined;

    items.push({ id, contentId, title, buttonText });

    // placeholder div로 교체
    processedContent = processedContent.replace(
      match[0],
      `<div id="${id}" class="print-button-placeholder"></div>`
    );
    index++;
  }

  return { items, processedContent };
}

export default function ArticleContent({
  content,
  className = '',
}: ArticleContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const { items: revealItems, processedContent: revealProcessed } = useMemo(
    () => extractRevealItems(content),
    [content]
  );

  const { items: printButtonItems, processedContent } = useMemo(
    () => extractPrintButtons(revealProcessed),
    [revealProcessed]
  );

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));
  const handleResetZoom = () => setZoom(1);

  // RevealText 컴포넌트들을 placeholder에 렌더링
  useEffect(() => {
    if (!contentRef.current || revealItems.length === 0) return;

    const roots: ReturnType<typeof createRoot>[] = [];

    revealItems.forEach(item => {
      const placeholder = contentRef.current?.querySelector(`#${item.id}`);
      if (placeholder) {
        const root = createRoot(placeholder);
        root.render(
          <RevealText
            original={item.original}
            translation={item.translation}
            index={item.index}
          />
        );
        roots.push(root);
      }
    });

    return () => {
      // 비동기로 unmount하여 race condition 방지
      setTimeout(() => {
        roots.forEach(root => {
          try {
            root.unmount();
          } catch {
            // unmount 실패 무시
          }
        });
      }, 0);
    };
  }, [revealItems, processedContent]);

  // PrintButton 컴포넌트들을 placeholder에 렌더링
  useEffect(() => {
    if (!contentRef.current || printButtonItems.length === 0) return;

    const roots: ReturnType<typeof createRoot>[] = [];

    printButtonItems.forEach(item => {
      const placeholder = contentRef.current?.querySelector(`#${item.id}`);
      if (placeholder) {
        const root = createRoot(placeholder);
        root.render(
          <PrintButton
            contentId={item.contentId}
            title={item.title}
            buttonText={item.buttonText}
          />
        );
        roots.push(root);
      }
    });

    return () => {
      // 비동기로 unmount하여 race condition 방지
      setTimeout(() => {
        roots.forEach(root => {
          try {
            root.unmount();
          } catch {
            // unmount 실패 무시
          }
        });
      }, 0);
    };
  }, [printButtonItems, processedContent]);

  // 기존 details.group 요소들을 Click-to-Reveal 형태로 변환
  useEffect(() => {
    if (!contentRef.current) return;

    // 원문+현대어 동시보기용 details 요소들 찾기 (group 클래스를 가진 모든 details)
    const detailsElements = contentRef.current.querySelectorAll('details.group');

    const cleanupFunctions: (() => void)[] = [];

    detailsElements.forEach(details => {
      // details를 항상 열린 상태로 유지 (내용이 보이도록)
      details.setAttribute('open', 'true');

      // summary 클릭 시 details 토글 방지
      const summary = details.querySelector('summary');
      if (summary) {
        const preventToggle = (e: Event) => {
          e.preventDefault();
        };
        summary.addEventListener('click', preventToggle);
        cleanupFunctions.push(() => {
          summary.removeEventListener('click', preventToggle);
        });
      }

      // summary의 형제 요소인 div를 찾기 (현대어 해석 영역)
      // 구조: <details><summary>원문</summary><div>현대어</div></details>
      const contentDiv = details.querySelector(':scope > div');

      if (!contentDiv) return;

      // contentDiv에 blur 효과 및 클릭 핸들러 추가
      const contentElement = contentDiv as HTMLElement;

      // 초기 blur 상태 설정
      contentElement.style.filter = 'blur(8px)';
      contentElement.style.opacity = '0.6';
      contentElement.style.cursor = 'pointer';
      contentElement.style.transition = 'all 0.3s ease';
      contentElement.style.userSelect = 'none';

      let revealed = false;

      const handleClick = (e: Event) => {
        e.stopPropagation();
        revealed = !revealed;
        if (revealed) {
          contentElement.style.filter = 'blur(0)';
          contentElement.style.opacity = '1';
          contentElement.style.userSelect = 'auto';
        } else {
          contentElement.style.filter = 'blur(8px)';
          contentElement.style.opacity = '0.6';
          contentElement.style.userSelect = 'none';
        }
      };

      contentElement.addEventListener('click', handleClick);

      // cleanup 함수 저장
      cleanupFunctions.push(() => {
        contentElement.removeEventListener('click', handleClick);
      });
    });

    // cleanup
    return () => {
      cleanupFunctions.forEach(fn => fn());
    };
  }, [processedContent]);

  // 이미지 클릭 이벤트 핸들러
  useEffect(() => {
    const handleImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        const imgSrc = (target as HTMLImageElement).src;
        setModalImage(imgSrc);
      }
    };

    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('click', handleImageClick);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('click', handleImageClick);
      }
    };
  }, [processedContent]);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalImage(null);
        setZoom(1);
      }
    };

    if (modalImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalImage]);

  // 모달 닫을 때 줌 리셋
  const closeModal = () => {
    setModalImage(null);
    setZoom(1);
  };

  return (
    <>
      <article
        ref={contentRef}
        className={`${className} [&_img]:cursor-pointer [&_img]:transition-transform [&_img]:hover:scale-[1.02]`}
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />

      {/* 이미지 모달 */}
      {modalImage && (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={e => e.key === 'Escape' && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 모달"
          tabIndex={-1}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]">
            {/* 닫기 버튼 */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-3xl font-bold"
              aria-label="닫기"
            >
              ×
            </button>

            {/* 줌 컨트롤 */}
            <div className="absolute -top-10 left-0 flex items-center gap-2">
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                className="text-white hover:text-gray-300 text-2xl font-bold px-2"
                aria-label="축소"
              >
                −
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleResetZoom();
                }}
                className="text-white hover:text-gray-300 text-sm px-2"
                aria-label="원본 크기"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                className="text-white hover:text-gray-300 text-2xl font-bold px-2"
                aria-label="확대"
              >
                +
              </button>
            </div>

            <div className="overflow-auto max-w-[95vw] max-h-[90vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {modalImage.includes('kwandohun') || modalImage.includes('leeyoon') ? (
                <div
                  className="overflow-hidden rounded-lg"
                  style={{
                    maxHeight: '90vh',
                  }}
                >
                  <img
                    src={modalImage}
                    alt="확대 이미지"
                    className="h-auto rounded-lg transition-transform duration-200"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: 'center center',
                      marginLeft: '-15%',
                      marginRight: '-15%',
                      width: '130%',
                      maxWidth: 'none',
                    }}
                  />
                </div>
              ) : (
                <img
                  src={modalImage}
                  alt="확대 이미지"
                  className="object-contain rounded-lg transition-transform duration-200"
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'center center',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
