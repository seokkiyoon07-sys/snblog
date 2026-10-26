import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  KOREAN_HISTORY_PATH,
  KOREAN_HISTORY_TITLE,
  KOREAN_HISTORY_UPDATED,
  koreanHistoryEpisodes,
  type KoreanHistoryEpisode,
} from '@/data/korean-history';
import { formatVideoDuration } from '@/data/odyssey';
import {
  koreanHistoryBreadcrumbs,
  koreanHistoryVideoSchema,
} from '@/lib/korean-history-schema';
import { BASE_URL } from '@/lib/config';

export default function KoreanHistoryEpisodePage({
  episode,
}: {
  episode: KoreanHistoryEpisode;
}) {
  const index = koreanHistoryEpisodes.findIndex(item => item.id === episode.id);
  const previous = koreanHistoryEpisodes[index - 1];
  const next = koreanHistoryEpisodes[index + 1];
  return (
    <article className="min-w-0 space-y-8 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              koreanHistoryBreadcrumbs(episode),
              koreanHistoryVideoSchema(episode),
              {
                '@type': 'WebPage',
                '@id': `${BASE_URL}${episode.url}`,
                url: `${BASE_URL}${episode.url}`,
                name: episode.title,
                description: episode.summary,
                inLanguage: 'ko',
                datePublished: KOREAN_HISTORY_UPDATED,
                mainEntity: { '@id': `${BASE_URL}${episode.url}#video` },
                isPartOf: { '@id': `${BASE_URL}${KOREAN_HISTORY_PATH}#series` },
              },
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />
      <nav
        aria-label="현재 위치"
        className="flex flex-wrap items-center gap-x-3 text-sm text-amber-800 dark:text-amber-300"
      >
        <Link href="/history" className="py-3 hover:underline">
          SN History
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={KOREAN_HISTORY_PATH} className="py-3 hover:underline">
          {KOREAN_HISTORY_TITLE}
        </Link>
        <span aria-hidden="true">/</span>
        <span>{episode.episode}화</span>
      </nav>
      <header className="space-y-4">
        <p className="text-xs font-bold tracking-widest text-amber-800 dark:text-amber-300">
          교과서로 읽는 한국사 · {String(episode.episode).padStart(2, '0')}
        </p>
        <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl dark:text-white">
          {episode.topic}
        </h1>
        <p className="text-sm text-slate-500">
          SN History · 글 게시{' '}
          <time dateTime={KOREAN_HISTORY_UPDATED}>
            {KOREAN_HISTORY_UPDATED}
          </time>
        </p>
      </header>
      <section
        id="episode-video"
        aria-label={`한국사 ${episode.episode}화 영상`}
        className="scroll-mt-6 space-y-4"
      >
        <div className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-2xl bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${episode.videoId}`}
            title={episode.videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="h-full w-full"
          />
          {previous && (
            <Link
              href={`${previous.url}#episode-video`}
              aria-label={`이전 화 보기: 한국사 ${previous.episode}화 · ${previous.topic}`}
              title={`이전 화 · ${previous.episode}화`}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-lg transition-colors hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </Link>
          )}
          {next && (
            <Link
              href={`${next.url}#episode-video`}
              aria-label={`다음 화 보기: 한국사 ${next.episode}화 · ${next.topic}`}
              title={`다음 화 · ${next.episode}화`}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/70 text-white shadow-lg transition-colors hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </Link>
          )}
        </div>
        <p className="text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
          {episode.videoTitle}
          <br />
          영상 {formatVideoDuration(episode.durationSeconds)} · YouTube 공개{' '}
          <time dateTime={episode.uploadDate}>
            {new Date(episode.uploadDate).toLocaleDateString('ko-KR', {
              timeZone: 'Asia/Seoul',
            })}
          </time>
        </p>
        <div className="text-center">
          <a
            href={episode.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-5 text-sm font-semibold dark:border-slate-600"
          >
            YouTube에서 보기 ↗
          </a>
        </div>
      </section>
      <section aria-labelledby="episode-summary" className="space-y-3">
        <h2 id="episode-summary" className="text-xl font-bold">
          이 편의 핵심
        </h2>
        <p className="leading-8 text-slate-600 dark:text-slate-300">
          {episode.summary}
        </p>
      </section>
      <section aria-labelledby="episode-concepts" className="space-y-4">
        <h2 id="episode-concepts" className="text-xl font-bold">
          교과서와 연결하기
        </h2>
        <dl className="grid gap-3 sm:grid-cols-3">
          {episode.concepts.map(concept => (
            <div
              key={concept.term}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900"
            >
              <dt className="font-bold text-amber-800 dark:text-amber-300">
                {concept.term}
              </dt>
              <dd className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {concept.text}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section aria-labelledby="episode-flow" className="space-y-4">
        <h2 id="episode-flow" className="text-xl font-bold">
          한눈에 정리하기
        </h2>
        <dl className="divide-y divide-slate-200 rounded-xl border border-slate-200 px-5 dark:divide-slate-700 dark:border-slate-700">
          {episode.flow.map(item => (
            <div
              key={item.label}
              className="grid gap-2 py-4 sm:grid-cols-[130px_1fr]"
            >
              <dt className="font-semibold">{item.label}</dt>
              <dd className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.text}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section
        aria-labelledby="episode-question"
        className="rounded-2xl bg-amber-50 p-5 sm:p-7 dark:bg-amber-950/30"
      >
        <h2
          id="episode-question"
          className="text-sm font-bold text-amber-800 dark:text-amber-300"
        >
          기억할 질문 하나
        </h2>
        <p className="mt-3 text-lg font-semibold leading-8">
          {episode.question}
        </p>
        <details className="mt-4">
          <summary className="cursor-pointer py-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
            생각 정리 펼치기
          </summary>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {episode.answer}
          </p>
        </details>
      </section>
      <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
        참고:{' '}
        <a
          href={episode.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          SN History 한국사 {episode.episode}부와 공개 설명
        </a>
        . 위 글은 영상의 주제를 바탕으로 작성한 학습용 요약입니다.
      </p>
      <nav
        aria-label="한국사 이전 화와 다음 화"
        className="grid gap-3 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={previous.url}
            className="rounded-xl border border-slate-200 p-5 hover:border-amber-600 dark:border-slate-700"
          >
            <span className="text-xs text-slate-500">
              ← 이전 이야기 · {previous.episode}화
            </span>
            <p className="mt-2 font-semibold leading-7">{previous.topic}</p>
          </Link>
        ) : (
          <Link
            href={KOREAN_HISTORY_PATH}
            className="rounded-xl border border-slate-200 p-5 dark:border-slate-700"
          >
            <span className="text-xs text-slate-500">처음부터 차근차근</span>
            <p className="mt-2 font-semibold">한국사 전체 목차 보기</p>
          </Link>
        )}
        {next ? (
          <Link
            href={next.url}
            className="rounded-xl border border-slate-200 p-5 hover:border-amber-600 dark:border-slate-700"
          >
            <span className="text-xs text-slate-500">
              다음 이야기 · {next.episode}화 →
            </span>
            <p className="mt-2 font-semibold leading-7">{next.topic}</p>
          </Link>
        ) : (
          <div className="rounded-xl bg-slate-100 p-5 dark:bg-slate-800">
            <span className="text-xs text-slate-500">
              여기까지 공개되었어요 · 연재 중
            </span>
            <p className="mt-2 font-semibold">
              {episode.episode === 30
                ? '다음 이야기: 임진왜란'
                : episode.episode === 8
                  ? '다음 이야기: 삼국의 통일'
                  : '다음 이야기를 준비하고 있습니다.'}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              새 회차가 등록되면 이어서 볼 수 있습니다.
            </p>
          </div>
        )}
      </nav>
      {episode.episode === 25 && (
        <Link
          href="/history/korean-history-25-extra"
          className="block rounded-xl border border-amber-200 bg-amber-50 p-5 font-semibold text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200"
        >
          25화 외전 · 왕자의 난과 태종의 왕권 강화 →
        </Link>
      )}
      <section aria-labelledby="episode-contents" className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="episode-contents" className="text-xl font-bold">
            한국사 전체 목차
          </h2>
          <Link
            href={KOREAN_HISTORY_PATH}
            className="py-3 text-sm text-amber-800 dark:text-amber-300"
          >
            시리즈 소개 →
          </Link>
        </div>
        <ol className="grid gap-2 sm:grid-cols-2">
          {koreanHistoryEpisodes.map(item => (
            <li key={item.id}>
              <Link
                href={item.url}
                aria-current={item.id === episode.id ? 'page' : undefined}
                className={`flex min-h-12 items-start gap-3 rounded-lg px-4 py-3 text-sm leading-6 ${item.id === episode.id ? 'bg-amber-100 font-semibold text-amber-950 dark:bg-amber-950 dark:text-amber-200' : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800'}`}
              >
                <span className="shrink-0 tabular-nums">
                  {String(item.episode).padStart(2, '0')}
                </span>
                {item.topic}
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
