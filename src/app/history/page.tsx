import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Play, Youtube } from 'lucide-react';
import { getPostsByCategory } from '@/data/posts';
import { odysseyEpisodes, formatVideoDuration } from '@/data/odyssey';
import {
  koreanHistoryEpisodes,
  KOREAN_HISTORY_TITLE,
  KOREAN_HISTORY_TAGLINE,
  KOREAN_HISTORY_DESCRIPTION,
  KOREAN_HISTORY_PATH,
} from '@/data/korean-history';
import { BASE_URL, EXTERNAL_URLS } from '@/lib/config';
import HistoryEpisodeRail from '@/components/HistoryEpisodeRail';

const description =
  '연재 중인 숏츠로 준비하는 수능 한국사와 한국사 외전, 운영전 2부작, 오디세이아 24부작, 무오사화 4부작. SN History의 역사 시리즈를 소개와 에피소드 목록으로 만나고, 1화부터 순서대로 감상하세요.';
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'SN History | 한국사·운영전·오디세이아·무오사화 시리즈',
  description,
  alternates: { canonical: '/history' },
  openGraph: {
    title: 'SN History | 한국사·운영전·오디세이아·무오사화 시리즈',
    description,
    url: `${BASE_URL}/history`,
    type: 'website',
    locale: 'ko_KR',
  },
};

const seriesDefinitions = [
  {
    id: 'korean-history',
    tag: '한국사',
    title: KOREAN_HISTORY_TITLE,
    subtitle: KOREAN_HISTORY_TAGLINE,
    description: KOREAN_HISTORY_DESCRIPTION,
    genre: '교과서로 읽는 한국사 · 핵심 개념',
    background: 'from-[#4b3a24] via-[#302b24] to-[#141e24]',
    guideUrl: KOREAN_HISTORY_PATH,
    guideLabel: '전체 목차',
    ongoing: true,
  },
  {
    id: 'korean-history-extra',
    tag: '한국사 외전',
    title: '한국사 외전',
    subtitle: '본편 사이, 조금 더 깊이 들여다보는 이야기.',
    description:
      '왕자의 난과 태종의 왕권 강화, 세종의 통치 기반을 한국사 본편과 연결해 살펴봅니다.',
    genre: '조선 · 인물과 권력',
    background: 'from-[#42352b] via-[#2b2928] to-[#141e24]',
    guideUrl: '/history/korean-history',
    guideLabel: '한국사 본편 목차',
    ongoing: true,
  },
  {
    id: 'unyeongjeon',
    tag: '운영전',
    title: '운영전 속 역사',
    subtitle: '소설 속 사랑의 무대에서 실제 조선의 역사를 만나다.',
    description:
      '안평대군의 삶과 계유정난, 한양의 지명에 겹쳐진 세 시대를 통해 문학과 역사의 경계를 살펴봅니다.',
    genre: '조선 · 문학과 역사',
    background: 'from-[#40324b] via-[#292634] to-[#171b24]',
    guideUrl: '/originals/unyoungjeon',
    guideLabel: 'SN 오리지날 운영전',
    ongoing: false,
  },
  {
    id: 'odyssey',
    tag: '오디세이아',
    title: '오디세이아',
    subtitle: '전쟁은 끝났다. 돌아갈 집은 아직 멀었다.',
    description:
      '트로이아에서 이타카까지, 오디세우스의 기나긴 귀향. 신과 괴물, 유혹과 상실을 지나 가족에게 돌아가는 이야기를 사건의 흐름에 따라 만납니다.',
    genre: '고대 그리스 · 신화와 고전',
    background: 'from-[#203e40] via-[#172c30] to-[#111b23]',
    guideUrl: '/history/odyssey',
    guideLabel: '줄거리·등장인물',
    ongoing: false,
  },
  {
    id: 'muo-sahwa',
    tag: '무오사화',
    title: '무오사화',
    subtitle: '기록 속 한 편의 글이, 거대한 비극이 되다.',
    description:
      '조선의 사초에서 시작된 정치적 격랑. 조위를 둘러싼 이야기에서 사림의 참극까지, 인물과 사건을 따라 무오사화의 전개를 네 편으로 살펴봅니다.',
    genre: '조선 · 인물과 사건',
    background: 'from-[#44302d] via-[#2d2528] to-[#171b24]',
    guideUrl: undefined,
    guideLabel: undefined,
    ongoing: false,
  },
];

export default function HistoryPage() {
  const posts = getPostsByCategory('SN History');
  const series = seriesDefinitions.map(definition => ({
    ...definition,
    episodes: posts
      .filter(post => post.tags?.includes(definition.tag))
      .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0)),
  }));
  return (
    <div className="min-w-0 space-y-7 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'SN History',
            description,
            url: `${BASE_URL}/history`,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: series
                .flatMap(item => item.episodes)
                .map((post, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  name: post.title,
                  url: `${BASE_URL}${post.url}`,
                })),
            },
          }).replace(/</g, '\\u003c'),
        }}
      />
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-amber-800 dark:text-amber-300">
            이야기로 만나는 역사
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            SN History
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            한 편에서 시작해, 하나의 이야기 끝까지.
          </p>
        </div>
        <a
          href={EXTERNAL_URLS.HISTORY_YOUTUBE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <Youtube className="h-4 w-4 text-red-600" aria-hidden="true" />
          유튜브 채널
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </header>
      <nav aria-label="시리즈 바로가기" className="flex flex-wrap gap-2">
        {series.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            {item.title}
            <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">
              {item.ongoing
                ? `${item.episodes.length}화 공개`
                : `${item.episodes.length}부작`}
            </span>
          </a>
        ))}
      </nav>
      {series.map((item, index) => {
        const first = item.episodes[0];
        if (!first) return null;
        const videoEpisodes =
          item.id === 'odyssey'
            ? odysseyEpisodes
            : item.id === 'korean-history'
              ? koreanHistoryEpisodes
              : undefined;
        const totalSeconds = videoEpisodes
          ? videoEpisodes.reduce(
              (total, episode) => total + episode.durationSeconds,
              0
            )
          : undefined;
        return (
          <section
            key={item.id}
            id={item.id}
            aria-labelledby={`${item.id}-heading`}
            className="min-w-0 scroll-mt-24 overflow-hidden rounded-2xl bg-[#111b23] shadow-sm"
            data-history-series={item.id}
          >
            <div
              className={`relative overflow-hidden bg-gradient-to-br ${item.background}`}
            >
              <div className="relative grid gap-5 p-5 sm:grid-cols-[1fr_140px] sm:gap-7 sm:p-7 lg:p-8">
                <div className="min-w-0 space-y-4">
                  <p className="text-[10px] font-bold tracking-[0.22em] text-amber-200">
                    SN HISTORY SERIES · {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2
                    id={`${item.id}-heading`}
                    className="text-4xl font-bold tracking-tight text-white"
                  >
                    {item.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-300">
                    <span className="font-semibold text-emerald-300">
                      {item.ongoing ? '연재 시리즈' : '시즌 1'}
                    </span>
                    <span>
                      {item.ongoing
                        ? `${item.episodes.length}화 공개`
                        : `${item.episodes.length}부작`}
                    </span>
                    <span className="rounded border border-white/25 px-1.5 py-0.5 text-[10px]">
                      {item.ongoing ? '연재 중' : '완결'}
                    </span>
                    <span>{item.genre}</span>
                    {totalSeconds && (
                      <span>
                        총 {Math.floor(totalSeconds / 60)}분 {totalSeconds % 60}
                        초
                      </span>
                    )}
                  </div>
                  <p className="text-base font-medium leading-7 text-amber-100">
                    {item.subtitle}
                  </p>
                  <p className="max-w-xl text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link
                      href={first.url}
                      className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-100"
                    >
                      <Play
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                      {item.id === 'korean-history'
                        ? '1화부터 가볍게 시작하기'
                        : '1화부터 보기'}
                    </Link>
                    {item.ongoing && (
                      <Link
                        href={item.episodes[item.episodes.length - 1].url}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/20"
                      >
                        {item.id === 'korean-history-extra'
                          ? '최신 외전 보기'
                          : `최신 ${item.episodes[item.episodes.length - 1].seriesOrder}화 보기`}
                      </Link>
                    )}
                    {item.guideUrl && (
                      <Link
                        href={item.guideUrl}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/20"
                      >
                        {item.guideLabel}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
                {first.thumbnail && (
                  <div className="relative hidden aspect-[9/16] w-full self-center overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10 sm:block">
                    <Image
                      src={first.thumbnail}
                      alt={`${item.title} 표지`}
                      fill
                      priority={index === 0}
                      sizes="140px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="min-w-0 border-t border-white/5 p-5 sm:p-7 lg:p-8">
              <HistoryEpisodeRail
                id={item.id}
                title={item.title}
                ongoing={item.ongoing}
                episodes={item.episodes.map((post, episodeIndex) => ({
                  id: post.id,
                  url: post.url,
                  title:
                    post.title.split('|').slice(1).join('|').trim() ||
                    post.title,
                  excerpt: post.excerpt,
                  thumbnail: post.thumbnail,
                  number: post.seriesOrder ?? episodeIndex + 1,
                  duration: videoEpisodes?.find(
                    episode => episode.id === post.id
                  )
                    ? formatVideoDuration(
                        videoEpisodes.find(episode => episode.id === post.id)!
                          .durationSeconds
                      )
                    : undefined,
                }))}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}
