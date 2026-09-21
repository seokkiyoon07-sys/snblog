'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';

export interface HistoryEpisode {
  id: string;
  url: string;
  title: string;
  excerpt: string;
  thumbnail?: string;
  number: number;
  duration?: string;
}

export default function HistoryEpisodeRail({
  id,
  title,
  episodes,
}: {
  id: string;
  title: string;
  episodes: HistoryEpisode[];
}) {
  const rail = useRef<HTMLOListElement>(null);
  const [edges, setEdges] = useState({ previous: false, next: false });

  function updateEdges() {
    const element = rail.current;
    if (element)
      setEdges({
        previous: element.scrollLeft > 2,
        next:
          element.scrollLeft + element.clientWidth < element.scrollWidth - 2,
      });
  }

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const observer = new ResizeObserver(updateEdges);
    observer.observe(element);
    updateEdges();
    return () => observer.disconnect();
  }, []);

  function move(direction: number) {
    const element = rail.current;
    if (!element) return;
    element.scrollBy({
      left: direction * element.clientWidth * 0.85,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  }

  return (
    <div className="min-w-0 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <h3 id={`${id}-episodes-heading`} className="font-bold text-white">
            에피소드
          </h3>
          <span className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">
            시즌 1
          </span>
          <span className="text-xs text-slate-400">
            1–{episodes.length}화 · 전체 공개
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={`${title} 이전 에피소드 목록`}
            aria-controls={`${id}-episodes`}
            disabled={!edges.previous}
            onClick={() => move(-1)}
            className="rounded-full border border-white/20 p-2.5 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 disabled:cursor-default disabled:opacity-25"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`${title} 다음 에피소드 목록`}
            aria-controls={`${id}-episodes`}
            disabled={!edges.next}
            onClick={() => move(1)}
            className="rounded-full border border-white/20 p-2.5 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 disabled:cursor-default disabled:opacity-25"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
      <ol
        ref={rail}
        id={`${id}-episodes`}
        aria-labelledby={`${id}-episodes-heading`}
        onScroll={updateEdges}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-color:#526068_transparent] [scrollbar-width:thin] sm:gap-4"
      >
        {episodes.map(episode => (
          <li
            key={episode.id}
            className="w-[144px] flex-none snap-start sm:w-[168px]"
          >
            <TrackedPostLink
              href={episode.url}
              postId={episode.id}
              placement="history_series_episode"
              className="group relative block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">
                {episode.thumbnail && (
                  <Image
                    src={episode.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 144px, 168px"
                    className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/90 to-transparent px-3 pb-3 pt-12">
                  <span className="text-2xl font-bold tabular-nums text-white">
                    {String(episode.number).padStart(2, '0')}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-white">
                    <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                    {episode.duration ?? '쇼츠'}
                  </span>
                </div>
              </div>
              <h4 className="mt-3 text-sm font-semibold leading-6 text-slate-100 group-hover:text-amber-200">
                <span className="sr-only">
                  {title} {episode.number}화 ·{' '}
                </span>
                {episode.title}
              </h4>
              <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-400">
                {episode.excerpt}
              </p>
            </TrackedPostLink>
          </li>
        ))}
      </ol>
    </div>
  );
}
