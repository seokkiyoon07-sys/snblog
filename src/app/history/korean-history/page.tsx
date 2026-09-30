import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import {
  KOREAN_HISTORY_PATH,
  KOREAN_HISTORY_TITLE,
  KOREAN_HISTORY_TAGLINE,
  KOREAN_HISTORY_DESCRIPTION,
  koreanHistoryChapters,
  koreanHistoryEpisodes,
} from '@/data/korean-history';
import { formatVideoDuration } from '@/data/odyssey';
import { BASE_URL, EXTERNAL_URLS } from '@/lib/config';
import { koreanHistoryBreadcrumbs } from '@/lib/korean-history-schema';

export const metadata: Metadata = {
  title: {
    absolute: `${KOREAN_HISTORY_TITLE} | 한국사 숏츠 전체 보기 — SN History`,
  },
  description: KOREAN_HISTORY_DESCRIPTION,
  alternates: { canonical: KOREAN_HISTORY_PATH },
  openGraph: {
    title: KOREAN_HISTORY_TITLE,
    description: KOREAN_HISTORY_DESCRIPTION,
    url: `${BASE_URL}${KOREAN_HISTORY_PATH}`,
    type: 'website',
    locale: 'ko_KR',
    images: [
      { url: koreanHistoryEpisodes[0].thumbnail, alt: KOREAN_HISTORY_TITLE },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: KOREAN_HISTORY_TITLE,
    description: KOREAN_HISTORY_DESCRIPTION,
    images: [koreanHistoryEpisodes[0].thumbnail],
  },
};

export default function KoreanHistoryPage() {
  const first = koreanHistoryEpisodes[0];
  const latest = koreanHistoryEpisodes[koreanHistoryEpisodes.length - 1];
  const total = koreanHistoryEpisodes.reduce(
    (sum, episode) => sum + episode.durationSeconds,
    0
  );
  return (
    <div className="min-w-0 space-y-9 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              koreanHistoryBreadcrumbs(),
              {
                '@type': 'CreativeWorkSeries',
                '@id': `${BASE_URL}${KOREAN_HISTORY_PATH}#series`,
                name: KOREAN_HISTORY_TITLE,
                description: KOREAN_HISTORY_DESCRIPTION,
                url: `${BASE_URL}${KOREAN_HISTORY_PATH}`,
                inLanguage: 'ko',
              },
              {
                '@type': 'CollectionPage',
                name: KOREAN_HISTORY_TITLE,
                url: `${BASE_URL}${KOREAN_HISTORY_PATH}`,
                mainEntity: {
                  '@type': 'ItemList',
                  numberOfItems: koreanHistoryEpisodes.length,
                  itemListElement: koreanHistoryEpisodes.map(episode => ({
                    '@type': 'ListItem',
                    position: episode.episode,
                    name: episode.title,
                    url: `${BASE_URL}${episode.url}`,
                  })),
                },
              },
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />
      <Link
        href="/history"
        className="inline-flex min-h-11 items-center text-sm font-semibold text-amber-800 dark:text-amber-300"
      >
        ← SN History
      </Link>
      <header className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#4b3a24] via-[#302b24] to-[#141e24] text-white">
        <div className="grid gap-7 p-6 sm:grid-cols-[1fr_150px] sm:p-9">
          <div className="space-y-5">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-200">
              SN HISTORY · KOREAN HISTORY
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              숏츠로 준비하는
              <br />
              수능 한국사
            </h1>
            <p className="text-lg font-medium text-amber-100">
              {KOREAN_HISTORY_TAGLINE}
            </p>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              {KOREAN_HISTORY_DESCRIPTION}
            </p>
            <p className="flex flex-wrap gap-3 text-xs">
              <span className="font-bold text-emerald-300">
                연재 중 · {koreanHistoryEpisodes.length}화 공개
              </span>
              <span className="text-slate-300">
                공개 영상 총 {Math.floor(total / 60)}분 {total % 60}초
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={first.url}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-slate-950 hover:bg-amber-100"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                1화부터 가볍게 시작하기
              </Link>
              <Link
                href={latest.url}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/20"
              >
                최신 {latest.episode}화 보기
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="relative hidden aspect-[9/16] self-center overflow-hidden rounded-lg ring-1 ring-white/20 sm:block">
            <Image
              src={first.thumbnail}
              alt="한국사 1화: 구석기에서 신석기로"
              fill
              priority
              sizes="150px"
              className="object-cover"
            />
          </div>
        </div>
      </header>
      <nav aria-label="한국사 시대별 목차" className="flex flex-wrap gap-2">
        {koreanHistoryChapters.map((chapter, index) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="rounded-full bg-slate-100 px-4 py-3 text-sm font-medium hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            <span className="mr-2 text-amber-800 dark:text-amber-300">
              {String(index + 1).padStart(2, '0')}
            </span>
            {chapter.title}
          </a>
        ))}
      </nav>
      {koreanHistoryChapters.map(chapter => (
        <section
          key={chapter.id}
          id={chapter.id}
          aria-labelledby={`${chapter.id}-heading`}
          className="scroll-mt-24 space-y-5"
        >
          <div>
            <h2 id={`${chapter.id}-heading`} className="text-2xl font-bold">
              {chapter.title}
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {chapter.description}
            </p>
          </div>
          <ol className="grid gap-4 lg:grid-cols-2">
            {koreanHistoryEpisodes
              .filter(episode => episode.chapter === chapter.id)
              .map(episode => (
                <li key={episode.id}>
                  <Link
                    href={episode.url}
                    className="group flex h-full gap-4 rounded-xl border border-slate-200 p-3 transition-colors hover:border-amber-600 sm:gap-5 sm:p-4 dark:border-slate-700 dark:hover:border-amber-400"
                  >
                    <div className="relative aspect-[9/16] w-24 shrink-0 self-start overflow-hidden rounded-lg bg-slate-950 sm:w-28">
                      <Image
                        src={episode.thumbnail}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 96px, 112px"
                        className="object-cover"
                      />
                      <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-1 text-xs text-white">
                        {formatVideoDuration(episode.durationSeconds)}
                      </span>
                    </div>
                    <div className="min-w-0 py-1">
                      <p className="text-xs font-bold text-amber-800 dark:text-amber-300">
                        한국사 {episode.episode}화
                      </p>
                      <h3 className="mt-2 font-bold leading-7 group-hover:text-amber-800 dark:group-hover:text-amber-300">
                        {episode.topic}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {episode.summary}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold">
                        영상과 핵심 정리
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
          </ol>
        </section>
      ))}
      <footer className="rounded-xl bg-slate-50 p-6 text-sm leading-7 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
        <p className="font-semibold">한국사는 계속 이어집니다.</p>
        <p>
          새 회차가 공개되면 시대의 흐름에 맞춰 이 목차에 추가합니다. 각 편에서
          영상과 핵심 개념을 살펴보고, 질문 하나로 기억을 정리해 보세요.
        </p>
        <a
          href={EXTERNAL_URLS.HISTORY_YOUTUBE}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center font-semibold text-amber-800 dark:text-amber-300"
        >
          SN History 유튜브 채널 ↗
        </a>
      </footer>
    </div>
  );
}
