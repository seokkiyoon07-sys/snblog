'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Film,
  Layers,
  Play,
} from 'lucide-react';
import CardNewsCarousel from '@/components/posts/CardNewsCarousel';
import type { CardNews } from '@/data/card-news';
import {
  formatShortDuration,
  type ReadingShortSeries,
} from '@/data/reading-shorts';

export default function ReadingLeadMedia({
  cardNews,
  shorts,
}: {
  cardNews?: CardNews;
  shorts?: ReadingShortSeries;
}) {
  const [mode, setMode] = useState<'card' | 'shorts'>(
    cardNews ? 'card' : 'shorts'
  );
  const [partIndex, setPartIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!cardNews && !shorts) return null;
  if (cardNews && !shorts) return <CardNewsCarousel cards={cardNews} />;

  const activeEpisode = shorts!.episodes[partIndex] ?? shorts!.episodes[0];

  const selectPart = (index: number, autoPlay = true) => {
    setPartIndex(index);
    if (autoPlay) setIsPlaying(true);
  };

  return (
    <div className="space-y-4">
      {/* 카드뉴스 / 숏츠 전환 바 */}
      {cardNews && shorts && (
        <div
          role="tablist"
          aria-label="보기 형식 선택"
          className="mx-auto flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-gray-100 p-1 dark:border-gray-700 dark:bg-gray-800"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'card'}
            onClick={() => setMode('card')}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              mode === 'card'
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-900 dark:text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }`}
          >
            <Layers className="h-4 w-4" aria-hidden="true" />
            카드뉴스 {cardNews.slides.length}장
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'shorts'}
            onClick={() => setMode('shorts')}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              mode === 'shorts'
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-900 dark:text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }`}
          >
            <Film className="h-4 w-4" aria-hidden="true" />
            숏츠 {shorts.episodes.length}편
          </button>
        </div>
      )}

      {mode === 'card' && cardNews ? (
        <CardNewsCarousel cards={cardNews} />
      ) : (
        <section
          aria-label={`${shorts!.title} 숏츠 ${shorts!.episodes.length}편`}
          className="mx-auto w-full max-w-[420px] space-y-4"
        >
          {/* 파트 선택 탭 */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {shorts!.episodes.map((ep, idx) => {
              const active = idx === partIndex;
              return (
                <button
                  key={ep.id}
                  type="button"
                  onClick={() => selectPart(idx, true)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? 'border-sn-primary bg-sn-primary text-white dark:border-emerald-500 dark:bg-emerald-600'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'
                  }`}
                >
                  {ep.part}부 · {ep.subtitle}
                </button>
              );
            })}
          </div>

          {/* 9:16 세로 플레이어 */}
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-2xl bg-slate-950 shadow-md ring-1 ring-black/10 dark:ring-white/10">
            {isPlaying ? (
              <iframe
                key={activeEpisode.videoId}
                src={`https://www.youtube-nocookie.com/embed/${activeEpisode.videoId}?autoplay=1&rel=0`}
                title={activeEpisode.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`${activeEpisode.videoTitle} 재생`}
                className="group relative block h-full w-full text-left"
              >
                <Image
                  src={activeEpisode.thumbnail}
                  alt={activeEpisode.videoTitle}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold tabular-nums text-white">
                  {activeEpisode.part} / {activeEpisode.totalParts}부
                </span>
                <span className="absolute bottom-3 right-3 rounded bg-black/80 px-2 py-0.5 text-xs font-semibold tabular-nums text-white">
                  {formatShortDuration(activeEpisode.durationSeconds)}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 h-6 w-6 fill-current" />
                  </span>
                </div>
              </button>
            )}
          </div>

          {/* 하단 컨트롤 & 유튜브 링크 */}
          <div className="mx-auto flex max-w-[320px] items-center justify-between gap-2 text-xs">
            <button
              type="button"
              disabled={partIndex === 0}
              onClick={() => selectPart(partIndex - 1)}
              className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
            >
              <ChevronLeft className="h-4 w-4" />
              이전 부
            </button>
            <a
              href={activeEpisode.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              YouTube
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <button
              type="button"
              disabled={partIndex === shorts!.episodes.length - 1}
              onClick={() => selectPart(partIndex + 1)}
              className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
            >
              다음 부
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
