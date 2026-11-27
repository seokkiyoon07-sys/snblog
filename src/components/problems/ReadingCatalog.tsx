'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Film,
  Play,
  Youtube,
} from 'lucide-react';
import type { Post } from '@/data/posts';
import {
  READING_DOMAINS,
  READING_SHORTS_YOUTUBE_URL,
  formatShortDuration,
  type ReadingDomain,
  type ReadingShortSeries,
} from '@/data/reading-shorts';

export interface UnifiedReadingItem {
  id: string;
  title: string;
  summary: string;
  examLabel?: string;
  domain: ReadingDomain;
  date: string;
  post?: Post;
  shorts?: ReadingShortSeries;
}

export default function ReadingCatalog({
  items,
}: {
  items: UnifiedReadingItem[];
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const [activeDomain, setActiveDomain] = useState<'all' | ReadingDomain>(
    'all'
  );
  const [selectedId, setSelectedId] = useState(
    items.find(item => Boolean(item.shorts))?.id ?? items[0]?.id ?? ''
  );
  const [partIndex, setPartIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const totalShorts = items.reduce(
    (sum, item) => sum + (item.shorts?.episodes.length ?? 0),
    0
  );
  const availableDomains = READING_DOMAINS.filter(domain =>
    items.some(item => item.domain === domain)
  );
  const visibleItems =
    activeDomain === 'all'
      ? items
      : items.filter(item => item.domain === activeDomain);
  const visibleShortsItems = visibleItems.filter(item => Boolean(item.shorts));

  const activeItem =
    visibleShortsItems.find(item => item.id === selectedId) ??
    visibleShortsItems[0];
  const activeSeries = activeItem?.shorts;
  const activeEpisode =
    activeSeries?.episodes[partIndex] ?? activeSeries?.episodes[0];

  const updateTabScroll = useCallback(() => {
    const el = tabsRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateTabScroll();
    window.addEventListener('resize', updateTabScroll);
    return () => window.removeEventListener('resize', updateTabScroll);
  }, [updateTabScroll, visibleShortsItems.length]);

  const scrollTabs = (direction: -1 | 1) => {
    const el = tabsRef.current;
    if (!el) return;
    const distance = Math.max(220, Math.round(el.clientWidth * 0.65));
    el.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  const selectDomain = (domain: 'all' | ReadingDomain) => {
    setActiveDomain(domain);
    const nextList =
      domain === 'all' ? items : items.filter(item => item.domain === domain);
    const firstShort = nextList.find(item => Boolean(item.shorts));
    if (firstShort) {
      setSelectedId(firstShort.id);
      setPartIndex(0);
      setIsPlaying(false);
    }
  };

  const selectTopic = (
    itemId: string,
    autoPlay = false,
    scrollToStage = false
  ) => {
    setSelectedId(itemId);
    setPartIndex(0);
    setIsPlaying(autoPlay);
    if (scrollToStage) {
      stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const selectPart = (index: number, autoPlay = true) => {
    setPartIndex(index);
    if (autoPlay) setIsPlaying(true);
  };

  return (
    <div id="reading-shorts" className="scroll-mt-28 space-y-6">
      {/* 1. 상단 영역별 필터 바 + 유튜브 채널 링크 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          role="tablist"
          aria-label="기출 지문 영역별 필터"
          className="flex flex-wrap items-center gap-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeDomain === 'all'}
            onClick={() => selectDomain('all')}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              activeDomain === 'all'
                ? 'bg-sn-primary text-white dark:bg-emerald-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            전체 ({items.length})
          </button>
          {availableDomains.map(domain => {
            const count = items.filter(item => item.domain === domain).length;
            const selected = activeDomain === domain;
            return (
              <button
                key={domain}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => selectDomain(domain)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  selected
                    ? 'bg-sn-primary text-white dark:bg-emerald-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {domain} ({count})
              </button>
            );
          })}
        </div>

        <a
          href={READING_SHORTS_YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <Youtube className="h-4 w-4 text-red-600" aria-hidden="true" />
          유튜브 숏츠 전체 ({totalShorts}편)
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>

      {/* 2. 상단 2단 숏츠 스테이지 (좌우 <> 주제 전환 + 좌 9:16 플레이어 | 우 설명·회차·해설 글) */}
      {activeItem && activeSeries && activeEpisode && (
        <div
          ref={stageRef}
          className="scroll-mt-28 rounded-2xl border border-gray-200 bg-gray-50/70 p-5 sm:p-6 dark:border-gray-700 dark:bg-gray-900/60"
        >
          {/* 주제 선택 칩 + 좌우 <> 화살표 */}
          {visibleShortsItems.length > 1 && (
            <div className="mb-5 flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTabs(-1)}
                disabled={!canScrollLeft}
                aria-label="이전 주제 보기"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-30 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <div
                ref={tabsRef}
                onScroll={updateTabScroll}
                role="tablist"
                aria-label="숏츠 주제 선택"
                className="flex min-w-0 flex-1 gap-2 overflow-x-auto py-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {visibleShortsItems.map(item => {
                  const isSelected = item.id === activeItem.id;
                  const s = item.shorts!;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={e => {
                        selectTopic(item.id, false, false);
                        e.currentTarget.scrollIntoView({
                          behavior: 'smooth',
                          block: 'nearest',
                          inline: 'center',
                        });
                      }}
                      className={`shrink-0 rounded-full border px-3.5 py-1.5 text-left text-xs font-semibold transition-colors ${
                        isSelected
                          ? 'border-sn-primary bg-sn-primary text-white dark:border-emerald-500 dark:bg-emerald-600'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span>{s.title}</span>
                      <span
                        className={`ml-1.5 tabular-nums ${
                          isSelected
                            ? 'text-white/80'
                            : 'text-gray-400 dark:text-gray-400'
                        }`}
                      >
                        {s.episodes.length}편
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => scrollTabs(1)}
                disabled={!canScrollRight}
                aria-label="다음 주제 보기"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-30 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] md:items-start">
            {/* 좌측: 9:16 세로 플레이어 */}
            <div className="mx-auto w-full max-w-[260px]">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-slate-950 shadow-md ring-1 ring-black/10 dark:ring-white/10">
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
                      sizes="260px"
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

              {/* 이전/다음 부 컨트롤 */}
              <div className="mt-3 flex items-center justify-between gap-2">
                <button
                  type="button"
                  disabled={partIndex === 0}
                  onClick={() => selectPart(partIndex - 1)}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  <ChevronLeft className="h-4 w-4" />
                  이전
                </button>
                <span className="text-xs font-semibold tabular-nums text-gray-500 dark:text-gray-400">
                  {activeEpisode.part} / {activeEpisode.totalParts}부
                </span>
                <button
                  type="button"
                  disabled={partIndex === activeSeries.episodes.length - 1}
                  onClick={() => selectPart(partIndex + 1)}
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-40 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  다음
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* 우측: 지문 설명 + 1~4부 목록 + 해설 글 링크 */}
            <div className="min-w-0 space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  {activeItem.examLabel && (
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {activeItem.examLabel}
                    </span>
                  )}
                  <span className="rounded-full bg-gray-200/80 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {activeItem.domain}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    총 {Math.floor(activeSeries.totalDurationSeconds / 60)}분{' '}
                    {activeSeries.totalDurationSeconds % 60}초
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
                  {activeSeries.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {activeSeries.summary}
                </p>
              </div>

              <ol className="space-y-2">
                {activeSeries.episodes.map((ep, idx) => {
                  const isCurrent = idx === partIndex;
                  return (
                    <li key={ep.id}>
                      <button
                        type="button"
                        onClick={() => selectPart(idx, true)}
                        className={`flex w-full items-center gap-3 rounded-xl border p-2.5 text-left transition-colors ${
                          isCurrent
                            ? 'border-sn-primary bg-emerald-50/70 dark:border-emerald-500 dark:bg-emerald-950/30'
                            : 'border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800/70 dark:hover:border-gray-600'
                        }`}
                      >
                        <div className="relative aspect-[9/16] w-10 shrink-0 overflow-hidden rounded-md bg-slate-900">
                          <Image
                            src={ep.thumbnail}
                            alt=""
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-sn-primary dark:text-emerald-400">
                            {ep.part}부 / {ep.totalParts}부
                          </p>
                          <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                            {ep.subtitle}
                          </p>
                        </div>
                        <span className="shrink-0 text-xs tabular-nums text-gray-500 dark:text-gray-400">
                          {formatShortDuration(ep.durationSeconds)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {activeItem.post ? (
                  <Link
                    href={activeItem.post.url}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-sn-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sn-primary-dark dark:bg-emerald-600 dark:hover:bg-emerald-500"
                  >
                    해설 글 · 카드뉴스 깊게 읽기
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="inline-flex min-h-10 items-center rounded-lg border border-dashed border-gray-300 px-3.5 py-2 text-xs font-medium text-gray-500 dark:border-gray-600 dark:text-gray-400">
                    해설 글 준비 중 · 숏츠로 먼저 볼 수 있어요
                  </span>
                )}
                <a
                  href={activeEpisode.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-1 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  유튜브에서 보기
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. 하단 전체 지문 목록 (선택된 영역과 동기화) */}
      <ul className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:divide-gray-800 dark:border-gray-700 dark:bg-gray-900/70">
        {visibleItems.map(item => {
          const isActiveOnStage = activeItem?.id === item.id;
          const shortsCount = item.shorts?.episodes.length ?? 0;

          return (
            <li
              key={item.id}
              className={`flex flex-col gap-3 p-4 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 ${
                isActiveOnStage
                  ? 'bg-emerald-50/50 dark:bg-emerald-950/20'
                  : 'hover:bg-gray-50/80 dark:hover:bg-gray-800/40'
              }`}
            >
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {item.examLabel && (
                    <span className="font-semibold text-sn-primary dark:text-emerald-400">
                      {item.examLabel}
                    </span>
                  )}
                  <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {item.domain}
                  </span>
                  <time
                    dateTime={item.date}
                    className="text-gray-400 dark:text-gray-500"
                  >
                    {item.date}
                  </time>
                </div>

                {item.post ? (
                  <h4 className="text-base font-bold leading-snug text-gray-900 dark:text-white">
                    <Link
                      href={item.post.url}
                      className="hover:text-sn-primary dark:hover:text-emerald-400"
                    >
                      {item.title}
                    </Link>
                  </h4>
                ) : (
                  <h4 className="text-base font-bold leading-snug text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                )}

                <p className="line-clamp-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.summary}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-2">
                {shortsCount > 0 && (
                  <button
                    type="button"
                    onClick={() => selectTopic(item.id, true, true)}
                    className={`inline-flex min-h-9 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      isActiveOnStage
                        ? 'border-sn-primary bg-sn-primary text-white dark:border-emerald-500 dark:bg-emerald-600'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Film className="h-3.5 w-3.5" aria-hidden="true" />
                    {isActiveOnStage
                      ? '상단에서 선택됨'
                      : `숏츠 ${shortsCount}편`}
                  </button>
                )}

                {item.post ? (
                  <Link
                    href={item.post.url}
                    className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 dark:hover:bg-emerald-900/50"
                  >
                    <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                    해설 글
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                ) : (
                  <span className="inline-flex min-h-9 items-center rounded-lg px-2.5 py-1.5 text-xs text-gray-400 dark:text-gray-500">
                    글 준비 중
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
