'use client';

import { useEffect, useRef, useState } from 'react';

interface ArticleContentProps {
  content: string;
  className?: string;
}

export default function ArticleContent({
  content,
  className = '',
}: ArticleContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));
  const handleResetZoom = () => setZoom(1);

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
  }, [content]);

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
        dangerouslySetInnerHTML={{ __html: content }}
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
              <img
                src={modalImage}
                alt="확대 이미지"
                className="object-contain rounded-lg transition-transform duration-200"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: 'center center',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
