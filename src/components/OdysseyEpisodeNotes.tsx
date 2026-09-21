import Link from 'next/link';
import {
  ODYSSEY_PATH,
  ODYSSEY_TEXT_URL,
  ODYSSEY_TRANSMISSION_URL,
  odysseyEpisodes,
  type OdysseyEpisode,
} from '@/data/odyssey';

export default function OdysseyEpisodeNotes({
  episode,
}: {
  episode: OdysseyEpisode;
}) {
  const previous = odysseyEpisodes[episode.episode - 2];
  const next = odysseyEpisodes[episode.episode];
  return (
    <div className="space-y-8">
      <section
        aria-labelledby="episode-reading"
        className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 sm:p-7 dark:border-amber-900 dark:bg-slate-900"
      >
        <h2
          id="episode-reading"
          className="text-xl font-bold text-slate-900 dark:text-white"
        >
          이 장면을 읽는 관점
        </h2>
        <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
          {episode.point}
        </p>
        <dl className="mt-5 space-y-3 text-sm leading-6">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">
              등장인물·핵심어
            </dt>
            <dd className="text-slate-600 dark:text-slate-300">
              {episode.people.join(' · ')}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">
              함께 읽는 원전
            </dt>
            <dd className="text-slate-600 dark:text-slate-300">
              {episode.books.length
                ? `《오디세이아》 제${episode.books.join('·')}권. 영상의 부 번호와 원작의 권 번호는 다릅니다.`
                : '이 편은 원작의 특정 장면이 아니라 작품이 전해진 역사를 다룹니다.'}
            </dd>
          </div>
        </dl>
      </section>
      <section
        aria-labelledby="episode-sources"
        className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
      >
        <h2
          id="episode-sources"
          className="text-lg font-bold text-slate-900 dark:text-white"
        >
          출처와 더 읽기
        </h2>
        <p>
          영상 제작: SN History. 이 페이지의 줄거리와 읽기 관점은 영상 설명과
          아래 참고 자료를 바탕으로 정리한 해설이며, 영상 자막 전문이나 원전의
          직역이 아닙니다.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <a
              className="underline underline-offset-4"
              href={episode.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              SN History 원본 영상 · {episode.videoTitle}
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4"
              href={ODYSSEY_TEXT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              호메로스, 《The Odyssey》 · Samuel Butler 영문 번역, Project
              Gutenberg
            </a>
            {episode.books.length > 0 &&
              ` — 제${episode.books.join('·')}권 참고`}
          </li>
          {episode.episode === 24 && (
            <li>
              <a
                className="underline underline-offset-4"
                href={ODYSSEY_TRANSMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Harvard Center for Hellenic Studies · Homer Multitext: 구전과
                본문 전승
              </a>
            </li>
          )}
        </ul>
      </section>
      <nav
        aria-label="오디세이아 이전 편과 다음 편"
        className="grid gap-3 sm:grid-cols-2"
      >
        {previous ? (
          <Link
            rel="prev"
            href={previous.url}
            className="rounded-xl border border-slate-200 p-4 hover:border-amber-600 dark:border-slate-700"
          >
            <span className="text-xs text-slate-500">
              ← 이전 편 · {previous.episode}부
            </span>
            <span className="mt-2 block font-semibold">{previous.topic}</span>
          </Link>
        ) : (
          <Link
            href={ODYSSEY_PATH}
            className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
          >
            시작하기 전에 · 오디세이아 전체 줄거리와 인물
          </Link>
        )}
        {next ? (
          <Link
            rel="next"
            href={next.url}
            className="rounded-xl border border-slate-200 p-4 hover:border-amber-600 dark:border-slate-700"
          >
            <span className="text-xs text-slate-500">
              다음 편 · {next.episode}부 →
            </span>
            <span className="mt-2 block font-semibold">{next.topic}</span>
          </Link>
        ) : (
          <Link
            href={ODYSSEY_PATH}
            className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
          >
            24부 완결 · 전체 이야기 다시 보기 →
          </Link>
        )}
      </nav>
      <details className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
        <summary className="cursor-pointer font-semibold">
          오디세이아 24편 목차
        </summary>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {odysseyEpisodes.map(item => (
            <li key={item.id}>
              <Link
                href={item.url}
                aria-current={item.id === episode.id ? 'page' : undefined}
                className={`block rounded-lg px-3 py-2 text-sm leading-6 hover:bg-amber-50 dark:hover:bg-slate-800 ${item.id === episode.id ? 'bg-amber-50 font-bold text-amber-900 dark:bg-slate-800 dark:text-amber-300' : ''}`}
              >
                {item.episode}부 · {item.topic}
              </Link>
            </li>
          ))}
        </ol>
      </details>
    </div>
  );
}
