import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL, EXTERNAL_URLS } from '@/lib/config';
import {
  ODYSSEY_PATH,
  ODYSSEY_UPDATED,
  ODYSSEY_DESCRIPTION,
  ODYSSEY_TEXT_URL,
  ODYSSEY_TRANSMISSION_URL,
  odysseyEpisodes,
  odysseyChapters,
  odysseyQuestions,
  formatVideoDuration,
} from '@/data/odyssey';
import { odysseyBreadcrumbs } from '@/lib/odyssey-schema';

const title = '오디세이아 줄거리·등장인물 | 쇼츠 24부작 전체 보기 — SN History';
export const metadata: Metadata = {
  title: { absolute: title },
  description: ODYSSEY_DESCRIPTION,
  alternates: { canonical: ODYSSEY_PATH },
  keywords: [
    '오디세이아',
    '오디세이아 줄거리',
    '호메로스',
    '오디세우스',
    '오디세이아 등장인물',
    'SN History',
  ],
  openGraph: {
    title,
    description: ODYSSEY_DESCRIPTION,
    url: `${BASE_URL}${ODYSSEY_PATH}`,
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: odysseyEpisodes[0].thumbnail,
        alt: 'SN History 오디세이아 24부작',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: ODYSSEY_DESCRIPTION,
    images: [odysseyEpisodes[0].thumbnail],
  },
};

const characters = [
  [
    '오디세우스',
    '이타카의 왕. 지략으로 위기를 벗어나지만 자만과 판단의 실패도 겪는 귀향의 주인공.',
    6,
  ],
  [
    '페넬로페',
    '오디세우스의 아내. 구혼자들의 압박을 견디고, 돌아온 남편도 스스로 시험해 확인한다.',
    23,
  ],
  [
    '텔레마코스',
    '오디세우스의 아들. 부재한 아버지의 소식을 찾고, 재회 뒤에는 함께 집을 되찾는다.',
    21,
  ],
  [
    '아테나',
    '오디세우스와 텔레마코스를 돕는 여신. 변장과 계획, 마지막 분쟁의 중재에 관여한다.',
    20,
  ],
  [
    '포세이돈',
    '폴뤼페모스의 아버지인 바다의 신. 아들의 기도를 듣고 오디세우스의 귀향을 방해한다.',
    6,
  ],
  [
    '키르케',
    '아이아이에의 마법을 쓰는 여신. 동료들을 변신시키지만 이후 항해의 위험을 알려준다.',
    10,
  ],
  [
    '칼립소',
    '오기기아에서 오디세우스를 오래 붙잡아 두는 여신. 그에게 불멸의 삶을 제안한다.',
    17,
  ],
  [
    '나우시카아',
    '파이아케스의 공주. 난파한 이방인을 도와 왕궁으로 안내하며 귀향의 길을 잇는다.',
    18,
  ],
] as const;

export default function OdysseyPage() {
  const totalSeconds = odysseyEpisodes.reduce(
    (sum, episode) => sum + episode.durationSeconds,
    0
  );
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${BASE_URL}${ODYSSEY_PATH}`,
        url: `${BASE_URL}${ODYSSEY_PATH}`,
        name: title,
        description: ODYSSEY_DESCRIPTION,
        inLanguage: 'ko',
        datePublished: ODYSSEY_UPDATED,
        dateModified: ODYSSEY_UPDATED,
        about: {
          '@type': 'Book',
          name: '오디세이아',
          alternateName: 'Odyssey',
          author: {
            '@type': 'Person',
            name: '호메로스',
            alternateName: 'Homer',
          },
        },
        mainEntity: { '@id': `${BASE_URL}${ODYSSEY_PATH}#episodes` },
        publisher: {
          '@type': 'Organization',
          name: 'SN History',
          url: EXTERNAL_URLS.HISTORY_YOUTUBE,
        },
      },
      {
        '@type': 'CreativeWorkSeries',
        '@id': `${BASE_URL}${ODYSSEY_PATH}#series`,
        name: 'SN History 오디세이아 24부작',
        url: `${BASE_URL}${ODYSSEY_PATH}`,
        inLanguage: 'ko',
        creator: {
          '@type': 'Organization',
          name: 'SN History',
          url: EXTERNAL_URLS.HISTORY_YOUTUBE,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${BASE_URL}${ODYSSEY_PATH}#episodes`,
        name: '오디세이아 1~24부 시청 순서',
        numberOfItems: odysseyEpisodes.length,
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        itemListElement: odysseyEpisodes.map(episode => ({
          '@type': 'ListItem',
          position: episode.episode,
          name: episode.title,
          url: `${BASE_URL}${episode.url}`,
        })),
      },
      odysseyBreadcrumbs(),
    ],
  };
  return (
    <article className="space-y-10 pb-10 text-slate-800 dark:text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
        }}
      />
      <nav aria-label="현재 위치" className="text-sm">
        <Link
          href="/history"
          className="inline-flex min-h-11 items-center text-amber-800 hover:underline dark:text-amber-300"
        >
          ← SN History
        </Link>
        <span className="mx-3" aria-hidden="true">
          /
        </span>
        <span>오디세이아</span>
      </nav>
      <header className="overflow-hidden rounded-3xl bg-[#142e32] text-white">
        <div className="grid sm:grid-cols-[1fr_190px] lg:grid-cols-[1fr_220px]">
          <div className="space-y-5 p-6 sm:p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-amber-200">
              HOMER’S ODYSSEY · SN HISTORY
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              오디세이아
              <span className="mt-3 block text-lg font-medium leading-7 text-slate-200 sm:text-xl">
                줄거리와 등장인물, 24편의 귀향 이야기
              </span>
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-200">
              전쟁에서 이기는 것과 집으로 돌아가는 것은 달랐습니다. 열두 척의
              배로 출발해 홀로 돌아온 오디세우스. 그 여정을 짧은 영상과 읽는
              해설로 만납니다.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-amber-100">
              <span className="rounded-full border border-white/20 px-3 py-1.5">
                24부작 완결
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1.5">
                총 {Math.floor(totalSeconds / 60)}분 {totalSeconds % 60}초
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1.5">
                편당 약 1–2분
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/history/odyssey-1"
                className="inline-flex min-h-11 items-center rounded-full bg-amber-200 px-5 py-3 text-sm font-bold text-slate-900 hover:bg-amber-100"
              >
                1부부터 시작하기 →
              </Link>
              <a
                href="#episodes"
                className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              >
                24편 목차 보기
              </a>
            </div>
          </div>
          <div className="relative hidden sm:block">
            <Image
              src={odysseyEpisodes[0].thumbnail}
              alt="오디세이아 1부: 열두 척의 함선으로 시작한 귀향"
              fill
              priority
              sizes="(min-width: 1024px) 220px, 190px"
              className="object-cover"
            />
          </div>
        </div>
      </header>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        SN History · 정리{' '}
        <time dateTime={ODYSSEY_UPDATED}>{ODYSSEY_UPDATED}</time> · 아래
        줄거리에는 결말이 포함됩니다.
      </p>
      <nav
        aria-label="이 페이지 목차"
        className="flex flex-wrap gap-2 border-y border-slate-200 py-4 text-sm dark:border-slate-700"
      >
        {[
          ['summary', '작품과 줄거리'],
          ['characters', '등장인물'],
          ['episodes', '24편 전체 보기'],
          ['questions', '자주 묻는 질문'],
          ['sources', '참고 자료'],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="rounded-full bg-slate-100 px-4 py-2 hover:bg-amber-100 dark:bg-slate-800 dark:hover:bg-slate-700"
          >
            {label}
          </a>
        ))}
      </nav>
      <section
        id="summary"
        aria-labelledby="summary-heading"
        className="scroll-mt-24 space-y-5"
      >
        <h2
          id="summary-heading"
          className="text-2xl font-bold text-slate-950 dark:text-white"
        >
          오디세이아는 어떤 작품인가요?
        </h2>
        <p className="leading-8">
          <strong>
            《오디세이아》(Odyssey)는 호메로스에게 전해지는 고대 그리스
            서사시로, 오디세우스가 트로이아 전쟁 뒤 고향 이타카로 돌아오는
            이야기입니다.
          </strong>{' '}
          항해의 위험뿐 아니라 그를 기다리는 가족, 집을 차지한 구혼자들, 귀환
          뒤의 관계 회복까지 다룹니다. 신화적 서사이므로 등장 사건을 그대로
          확정된 역사적 사실로 읽지는 않습니다.
        </p>
        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 text-sm leading-7 dark:border-amber-900 dark:bg-slate-900">
          <strong>원작 24권과 영상 24부는 다릅니다.</strong> 원작은 이미 진행
          중인 사건에서 시작해 과거의 항해를 회상으로 보여줍니다. SN History는
          귀향의 흐름을 따라가기 쉽도록 사건의 시간 순서로 재구성했습니다.
          영상마다 관련 원전의 권을 따로 안내합니다.
        </div>
        <h3 className="pt-2 text-xl font-bold">
          전체 줄거리: 트로이아에서 이타카까지
        </h3>
        <ol className="space-y-5">
          <li className="border-l-2 border-amber-400 pl-5">
            <h4 className="font-bold">
              1. 전쟁이 끝나도 귀향은 시작되지 않는다
            </h4>
            <p className="mt-2 leading-8">
              트로이아를 떠난 함대는 키코네스와의 전투에서 손실을 입고, 로토스를
              먹고 목적을 잊을 위험에 놓입니다. 폴뤼페모스의 동굴에서는 지략으로
              탈출하지만 이름을 밝힌 자만이 포세이돈의 분노를 부릅니다. 바람
              자루와 라이스트뤼고네스의 항구를 지나며 함대는 한 척으로
              줄어듭니다.
            </p>
          </li>
          <li className="border-l-2 border-amber-400 pl-5">
            <h4 className="font-bold">
              2. 살아남기 위한 선택에도 대가가 따른다
            </h4>
            <p className="mt-2 leading-8">
              키르케의 섬에서 동료를 되찾은 오디세우스는 망자들을 만나 귀향의
              조건을 듣습니다. 세이렌의 노래를 견디고 스퀼라와 카뤼브디스 사이를
              지나지만, 동료들이 헬리오스의 가축을 해친 뒤 마지막 배마저
              부서집니다. 오디세우스만 남아 칼립소의 섬에 닿습니다.
            </p>
          </li>
          <li className="border-l-2 border-amber-400 pl-5">
            <h4 className="font-bold">
              3. 고향에 닿은 뒤에도 돌아갈 길이 남아 있다
            </h4>
            <p className="mt-2 leading-8">
              칼립소가 제안한 불멸보다 가족을 택한 그는 파이아케스인들의
              도움으로 이타카에 돌아옵니다. 변장한 채 집의 상황을 살피고 아들과
              함께 구혼자들을 물리칩니다. 페넬로페의 확인과 아버지와의 재회,
              아테나가 중재하는 평화를 거쳐 귀향이 완성됩니다.
            </p>
          </li>
        </ol>
        <p className="text-sm text-slate-500">
          관련 본문:{' '}
          <a
            href={ODYSSEY_TEXT_URL}
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            《The Odyssey》, Samuel Butler 번역
          </a>
          . 위 설명은 줄거리의 재서술이며 번역문 인용이 아닙니다.
        </p>
        <h3 className="pt-3 text-xl font-bold">세 가지 질문으로 읽기</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              '귀향',
              '살아남는 것과 돌아가는 것은 같을까요?',
              '오디세우스가 원하는 것은 단순한 생존이 아니라 이름과 가족, 자신의 삶을 되찾는 일입니다.',
            ],
            [
              '환대',
              '낯선 사람을 어떻게 대하나요?',
              '키클롭스, 나우시카아, 에우마이오스의 행동을 비교하면 손님맞이 규범인 크세니아가 이야기의 기준으로 작동하는 모습을 볼 수 있습니다.',
            ],
            [
              '정체성',
              '누가 그를 알아보나요?',
              '이름을 숨기는 계략부터 활과 침대의 시험까지, 돌아온 사람이 누구인지 확인하는 과정이 후반부를 이끕니다.',
            ],
          ].map(([keyword, question, answer]) => (
            <div
              key={keyword}
              className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900"
            >
              <p className="text-xs font-bold text-amber-800 dark:text-amber-300">
                {keyword}
              </p>
              <h4 className="mt-3 font-bold leading-6">{question}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        id="characters"
        aria-labelledby="characters-heading"
        className="scroll-mt-24 space-y-5"
      >
        <h2
          id="characters-heading"
          className="text-2xl font-bold text-slate-950 dark:text-white"
        >
          주요 등장인물과 관계
        </h2>
        <dl className="grid gap-3 sm:grid-cols-2">
          {characters.map(([name, description, episode]) => (
            <div
              key={name}
              className="rounded-xl border border-slate-200 p-5 dark:border-slate-700"
            >
              <dt className="font-bold">{name}</dt>
              <dd className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {description}
                <Link
                  href={`/history/odyssey-${episode}`}
                  className="mt-2 block font-semibold text-amber-800 hover:underline dark:text-amber-300"
                >
                  관련 영상 {episode}부 →
                </Link>
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-sm leading-7 text-slate-500">
          번역에 따라 폴뤼페모스/폴리페모스, 스퀼라/스킬라,
          카뤼브디스/카리브디스 등 인명과 지명의 한글 표기가 달라질 수 있습니다.
        </p>
      </section>
      <section
        id="episodes"
        aria-labelledby="episodes-heading"
        className="scroll-mt-24 space-y-8"
      >
        <div>
          <p className="text-xs font-bold tracking-widest text-amber-800 dark:text-amber-300">
            THE COMPLETE SERIES
          </p>
          <h2
            id="episodes-heading"
            className="mt-2 text-2xl font-bold text-slate-950 dark:text-white"
          >
            오디세이아 쇼츠 24편 순서대로 보기
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            한 편을 선택하면 영상과 장면 해설, 원전 참고 권을 함께 볼 수
            있습니다.
          </p>
        </div>
        {odysseyChapters.map(chapter => (
          <section
            key={chapter.start}
            aria-labelledby={`chapter-${chapter.start}`}
            className="space-y-4"
          >
            <div className="border-b border-slate-200 pb-4 dark:border-slate-700">
              <h3 id={`chapter-${chapter.start}`} className="text-xl font-bold">
                <span className="mr-3 text-sm font-medium text-amber-800 dark:text-amber-300">
                  {chapter.range}
                </span>
                {chapter.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {chapter.description}
              </p>
            </div>
            <ol start={chapter.start} className="grid gap-3 sm:grid-cols-2">
              {odysseyEpisodes
                .filter(
                  episode =>
                    episode.episode >= chapter.start &&
                    episode.episode <= chapter.end
                )
                .map(episode => (
                  <li key={episode.id}>
                    <Link
                      href={episode.url}
                      className="group flex h-full gap-4 rounded-xl border border-slate-200 p-3 transition-colors hover:border-amber-500 hover:bg-amber-50/40 dark:border-slate-700 dark:hover:bg-slate-900"
                    >
                      <div className="relative aspect-[3/4] w-20 shrink-0 self-start overflow-hidden rounded-lg bg-slate-950">
                        <Image
                          src={episode.thumbnail}
                          alt={`오디세이아 ${episode.episode}부 영상 표지`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 py-1">
                        <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">
                          {String(episode.episode).padStart(2, '0')}부 ·{' '}
                          {formatVideoDuration(episode.durationSeconds)}
                          {episode.episode === 24 ? ' · 완결' : ''}
                        </p>
                        <h4 className="mt-2 text-sm font-bold leading-6 group-hover:text-amber-800 dark:group-hover:text-amber-300">
                          {episode.topic}
                        </h4>
                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                          {episode.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
            </ol>
          </section>
        ))}
      </section>
      <section
        id="questions"
        aria-labelledby="questions-heading"
        className="scroll-mt-24 space-y-4"
      >
        <h2
          id="questions-heading"
          className="text-2xl font-bold text-slate-950 dark:text-white"
        >
          오디세이아, 자주 묻는 질문
        </h2>
        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          {odysseyQuestions.map(item => (
            <section key={item.question} className="py-5">
              <h3 className="font-bold leading-7">{item.question}</h3>
              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                {item.answer}
              </p>
            </section>
          ))}
        </div>
      </section>
      <section
        id="sources"
        aria-labelledby="sources-heading"
        className="scroll-mt-24 space-y-4 rounded-2xl bg-slate-50 p-6 text-sm leading-7 dark:bg-slate-900"
      >
        <h2 id="sources-heading" className="text-xl font-bold">
          제작과 참고 자료
        </h2>
        <p>
          영상 제작은 SN History입니다. 이 페이지는 원본 영상의 제목·설명과 아래
          자료를 바탕으로 줄거리와 읽기 관점을 정리했습니다. 원전의 권 번호는
          함께 읽을 대목을 안내하며, 영상과 한 권씩 대응한다는 뜻은 아닙니다.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <a
              href={EXTERNAL_URLS.HISTORY_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              SN History 유튜브 채널
            </a>{' '}
            — 오디세이아 1~24부, 영상 정보 확인: 2026년 9월 21일
          </li>
          <li>
            <a
              href={ODYSSEY_TEXT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Homer, The Odyssey · Samuel Butler 영문 번역, Project Gutenberg
            </a>{' '}
            — 줄거리와 원전 권 구성 참고
          </li>
          <li>
            <a
              href={ODYSSEY_TRANSMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Harvard Center for Hellenic Studies · Homer Multitext
            </a>{' '}
            — 구전시와 본문 전승 참고
          </li>
        </ul>
        <p>
          구전으로 공연되던 시가 서로 다른 사본과 독서를 거쳐 전해졌다는 점은
          작품을 이해하는 또 하나의 출발점입니다. 24부에서는 인물의 모험에서
          작품의 전승으로 시선을 옮깁니다.
        </p>
        <Link
          href="/history/odyssey-1"
          className="inline-flex min-h-11 items-center font-bold text-amber-800 hover:underline dark:text-amber-300"
        >
          이제 1부부터 만나보기 →
        </Link>
      </section>
    </article>
  );
}
