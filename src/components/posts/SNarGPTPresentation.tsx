'use client';

import { useState, useEffect, useRef } from 'react';

export default function SNarGPTPresentation() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // 화면 방향 잠금 (가로 모드)
  useEffect(() => {
    if (isFullscreen) {
      if (screen.orientation && 'lock' in screen.orientation) {
        (screen.orientation as ScreenOrientation & { lock: (orientation: string) => Promise<void> })
          .lock('landscape')
          .catch(() => {});
      }
    } else {
      if (screen.orientation && 'unlock' in screen.orientation) {
        (screen.orientation as ScreenOrientation & { unlock: () => void }).unlock();
      }
    }
  }, [isFullscreen]);

  // 스케일 계산
  useEffect(() => {
    const calculateScale = () => {
      const baseWidth = 1920;
      const baseHeight = 1080;

      if (isFullscreen) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const scaleX = screenWidth / baseWidth;
        const scaleY = screenHeight / baseHeight;
        setScale(Math.min(scaleX, scaleY));
      } else if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setScale(containerWidth / baseWidth);
      }
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    window.addEventListener('orientationchange', calculateScale);
    return () => {
      window.removeEventListener('resize', calculateScale);
      window.removeEventListener('orientationchange', calculateScale);
    };
  }, [isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <>
      {/* 모바일: 전체화면 버튼만 표시 */}
      <div className="md:hidden bg-gradient-to-br from-[#e8f5f0] to-white rounded-xl border border-[#d4ddd8] p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-[#a8d5c2] to-[#7bc4a8] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#2d5a47] mb-2">프레젠테이션 보기</h3>
        <p className="text-[#5a6b62] mb-4 text-sm">
          총 22개의 슬라이드가 있습니다.
        </p>
        <div className="flex items-center justify-center gap-2 text-[#4a9d7c] mb-6">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 4h16v12H4z" />
            <path d="M12 16v4M8 20h8" />
          </svg>
          <span className="text-sm font-medium">가로 모드로 보시면 최적의 화면을 경험할 수 있습니다</span>
        </div>
        <button
          onClick={toggleFullscreen}
          className="px-6 py-3 bg-gradient-to-r from-[#7bc4a8] to-[#2d5a47] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          전체화면으로 보기
        </button>
      </div>

      {/* 데스크톱: 프레젠테이션 표시 / 전체화면 */}
      <div
        ref={containerRef}
        className={`relative bg-[#1a2f23] overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${
          isFullscreen ? 'rounded-none fixed inset-0 z-[9999] flex items-center justify-center' : 'hidden md:block rounded-xl aspect-[16/9]'
        }`}
      >
        {/* iframe 컨테이너 - 1920x1080 기준으로 scale 적용 */}
        <div
          style={{
            width: '1920px',
            height: '1080px',
            transform: `scale(${scale})`,
            transformOrigin: isFullscreen ? 'center center' : 'top left',
          }}
        >
          <iframe
            src="/ppt/index.html"
            title="SNarGPT Presentation"
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>

        {/* 전체화면 토글 버튼 */}
        <button
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 w-10 h-10 bg-white border border-[#d4ddd8] rounded-full flex items-center justify-center cursor-pointer transition-all text-[#2d5a47] shadow-sm hover:bg-[#e8f5f0] hover:border-[#a8d5c2] hover:-translate-y-0.5 hover:shadow-md z-50"
          title="전체화면"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isFullscreen ? (
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
            ) : (
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            )}
          </svg>
        </button>
      </div>
    </>
  );
}
