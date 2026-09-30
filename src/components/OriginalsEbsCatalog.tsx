'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import TrackedPostLink from '@/components/analytics/TrackedPostLink';
import { getOriginalsGenre } from '@/lib/originals-genre';
import type { Post } from '@/types';

const genres = [
  {
    id: 'modern-poetry',
    name: '현대시',
    description: '화자의 시선과 정서, 한 편의 시에 담긴 세계',
  },
  {
    id: 'modern-fiction',
    name: '현대소설',
    description: '인물의 선택과 갈등을 따라 읽는 이야기',
  },
  {
    id: 'classical-poetry',
    name: '고전시가',
    description: '옛 노래의 말과 마음을 오늘의 언어로',
  },
  {
    id: 'classical-fiction',
    name: '고전소설',
    description: '사건의 흐름과 인물 관계로 만나는 고전',
  },
] as const;

function compactTitle(work: Post) {
  const match = work.title.match(/(작자\s*미상|[가-힣A-Za-z]+)\s*「([^」]+)」/);
  if (!match) return work.title.split('|')[0].trim();
  const isGenre = [
    '현대시',
    '현대소설',
    '고전시가',
    '고전소설',
    '고전산문',
    '문학',
  ].includes(match[1]);
  const author = isGenre
    ? work.tags?.includes('작자미상')
      ? '작자 미상'
      : ''
    : match[1];
  return author ? `${author} · ${match[2]}` : match[2];
}

function textbookLabels(work: Post) {
  return ['수능특강', '수능완성'].filter(
    label =>
      work.tags?.some(tag => tag.includes(label)) || work.title.includes(label)
  );
}

function GenreRail({
  id,
  title,
  description,
  works,
}: {
  id: string;
  title: string;
  description: string;
  works: Post[];
}) {
  const rail = useRef<HTMLOListElement>(null);
  const [edges, setEdges] = useState({ previous: false, next: false });

  function updateEdges() {
    const element = rail.current;
    if (!element) return;
    const previous = element.scrollLeft > 2;
    const next =
      element.scrollLeft + element.clientWidth < element.scrollWidth - 2;
    setEdges(current =>
      current.previous === previous && current.next === next
        ? current
        : { previous, next }
    );
  }

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const observer = new ResizeObserver(updateEdges);
    observer.observe(element);
    updateEdges();
    return () => observer.disconnect();
  }, [works.length]);

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
    <section
      id={`ebs-${id}`}
      aria-labelledby={`ebs-${id}-heading`}
      data-ebs-genre={title}
      className="min-w-0 scroll-mt-24 space-y-4"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <h4
              id={`ebs-${id}-heading`}
              className="text-xl font-bold text-white"
            >
              {title}
            </h4>
            <span className="text-xs text-emerald-300">{works.length}편</span>
          </div>
          <p className="mt-1.5 text-xs leading-6 text-slate-400 sm:text-sm">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            disabled={!edges.previous}
            aria-label={`${title} 이전 작품 목록`}
            aria-controls={`ebs-${id}-works`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 disabled:cursor-default disabled:opacity-25"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            disabled={!edges.next}
            aria-label={`${title} 다음 작품 목록`}
            aria-controls={`ebs-${id}-works`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 disabled:cursor-default disabled:opacity-25"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      {works.length ? (
        <ol
          ref={rail}
          id={`ebs-${id}-works`}
          aria-labelledby={`ebs-${id}-heading`}
          onScroll={updateEdges}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain rounded-lg pb-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300 [scrollbar-color:#526068_transparent] [scrollbar-width:thin]"
        >
          {works.map(work => (
            <li
              key={work.id}
              className="w-[224px] flex-none snap-start sm:w-[256px]"
            >
              <TrackedPostLink
                href={work.url}
                postId={work.id}
                placement="originals_ebs_genre"
                className="group block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-800 ring-1 ring-inset ring-white/10">
                  {work.thumbnail && (
                    <Image
                      src={work.thumbnail}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 224px, 256px"
                      className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
                    />
                  )}
                  <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white">
                    <Play
                      className="h-3.5 w-3.5 fill-current"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {textbookLabels(work).map(label => (
                    <span
                      key={label}
                      className={`rounded px-2 py-1 text-[10px] font-semibold ${label === '수능완성' ? 'bg-amber-300/15 text-amber-200' : 'bg-emerald-300/15 text-emerald-200'}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <h5 className="mt-2 text-sm font-semibold leading-6 text-slate-100 group-hover:text-emerald-200">
                  {compactTitle(work)}
                </h5>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">
                  {work.excerpt}
                </p>
              </TrackedPostLink>
            </li>
          ))}
        </ol>
      ) : (
        <p className="py-4 text-sm text-slate-400">작품을 준비하고 있습니다.</p>
      )}
    </section>
  );
}

export default function OriginalsEbsCatalog({ works }: { works: Post[] }) {
  const collections = works.filter(work => work.tags?.includes('몰아보기'));
  const individualWorks = works
    .filter(work => !work.tags?.includes('몰아보기'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const sections = genres.map(genre => ({
    ...genre,
    works: individualWorks.filter(
      work => getOriginalsGenre(work) === genre.name
    ),
  }));
  const otherWorks = individualWorks.filter(work => !getOriginalsGenre(work));

  return (
    <div
      data-ebs-catalog
      className="min-w-0 overflow-hidden rounded-2xl bg-[#111b23] text-white shadow-sm"
    >
      <header className="space-y-5 border-b border-white/10 bg-gradient-to-br from-[#203e40] to-[#111b23] p-5 sm:p-7">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-300">
            SN ORIGINALS · 2027 EBS
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            수능 문학, 갈래별로 이어 보기
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            수능특강부터 수능완성까지, 지금 복습할 작품을 골라보세요.
          </p>
        </div>
        {collections.map(work => (
          <TrackedPostLink
            key={work.id}
            href={work.url}
            postId={work.id}
            placement="originals_ebs_collection"
            className="group grid gap-4 overflow-hidden rounded-xl border border-emerald-200/20 bg-white/5 p-4 transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300 sm:grid-cols-[200px_1fr] sm:items-center"
          >
            {work.thumbnail && (
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                <Image
                  src={work.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover"
                />
              </div>
            )}
            <div className="min-w-0">
              <p className="text-xs font-semibold text-emerald-300">
                한 번에 복습하는 몰아보기
              </p>
              <h4 className="mt-2 text-lg font-bold leading-7 text-white">
                {work.title.split('|').pop()?.trim() || work.title}
              </h4>
              <p className="mt-2 line-clamp-2 text-xs leading-6 text-slate-300">
                {work.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">
                몰아보기 시작
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </TrackedPostLink>
        ))}
        <nav
          aria-label="2027 EBS 장르 바로가기"
          className="flex flex-wrap gap-2"
        >
          {sections.map(section => (
            <a
              key={section.id}
              href={`#ebs-${section.id}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-slate-100 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300"
            >
              {section.name}
              <span className="text-xs text-slate-400">
                {section.works.length}
              </span>
            </a>
          ))}
          {otherWorks.length > 0 && (
            <a
              href="#ebs-other"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-slate-100 hover:bg-white/15"
            >
              그 밖의 산문
              <span className="text-xs text-slate-400">
                {otherWorks.length}
              </span>
            </a>
          )}
        </nav>
      </header>
      <div className="min-w-0 space-y-9 p-5 sm:p-7">
        <p className="text-xs text-slate-400">
          개별 작품 {individualWorks.length}편 · 각 갈래 안에서는 최신 등록순
        </p>
        {sections.map(section => (
          <GenreRail
            key={section.id}
            id={section.id}
            title={section.name}
            description={section.description}
            works={section.works}
          />
        ))}
        {otherWorks.length > 0 && (
          <GenreRail
            id="other"
            title="그 밖의 산문"
            description="소설 밖에서 만나는 생각과 문장"
            works={otherWorks}
          />
        )}
      </div>
    </div>
  );
}
