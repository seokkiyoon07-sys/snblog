'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CardNews } from '@/data/card-news';

// 한 번에 한 장씩 넘기는 카드뉴스. 밀어서 넘기거나 화살표·키보드로 넘긴다
export default function CardNewsCarousel({ cards }: { cards: CardNews }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = cards.slides.length;

  const goTo = useCallback(
    (next: number, smooth = true) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(next, total - 1));
      setIndex(clamped);
      track.scrollTo({
        left: clamped * track.clientWidth,
        behavior: smooth ? 'smooth' : 'auto',
      });
    },
    [total]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setIndex(Math.round(track.scrollLeft / track.clientWidth));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  const navButton =
    'absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#161616] shadow-md transition-opacity hover:bg-white disabled:pointer-events-none disabled:opacity-0 md:flex';

  return (
    <section
      aria-roledescription="carousel"
      aria-label={cards.title}
      className="mx-auto w-full max-w-[480px]"
    >
      <div className="relative">
        {/* 가로 스크롤 영역은 키보드로도 넘길 수 있어야 해서 포커스를 받는다 */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          ref={trackRef}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label="카드 넘겨 보기 (좌우 방향키)"
          className="flex snap-x snap-mandatory overflow-x-auto rounded-md bg-[#EEEAE3] outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-[#C2412B] [&::-webkit-scrollbar]:hidden"
        >
          {cards.slides.map((slide, i) => (
            <div
              key={slide.src}
              className="w-full shrink-0 snap-start [scroll-snap-stop:always]"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${total} ${slide.label}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.src}
                alt={`${cards.title} ${i + 1}장: ${slide.label}`}
                width={1080}
                height={1350}
                loading={i < 2 ? 'eager' : 'lazy'}
                draggable={false}
                className="block aspect-[4/5] h-auto w-full select-none"
              />
            </div>
          ))}
        </div>

        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-semibold tabular-nums text-white">
          {index + 1} / {total}
        </span>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="이전 카드"
          className={`${navButton} left-3`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          disabled={index === total - 1}
          aria-label="다음 카드"
          className={`${navButton} right-3`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700"
        aria-hidden
      >
        <div
          className="h-full bg-[#C2412B] transition-[width] duration-300"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <div className="mt-2 flex items-center justify-between gap-3 text-sm">
        <button
          type="button"
          onClick={() => goTo(0, false)}
          disabled={index === 0}
          aria-label="첫 카드로"
          className="text-gray-500 hover:text-gray-900 disabled:opacity-30 dark:text-gray-400 dark:hover:text-white"
        >
          처음으로
        </button>
        <p className="m-0 truncate text-center font-medium text-gray-600 dark:text-gray-300">
          {cards.slides[index].label}
        </p>
        <button
          type="button"
          onClick={() => goTo(total - 1, false)}
          disabled={index === total - 1}
          aria-label="마지막 카드로"
          className="text-gray-500 hover:text-gray-900 disabled:opacity-30 dark:text-gray-400 dark:hover:text-white"
        >
          끝으로
        </button>
      </div>
    </section>
  );
}
