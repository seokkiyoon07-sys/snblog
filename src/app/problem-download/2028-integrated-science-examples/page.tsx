import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import IntegratedScienceExplorer from '@/components/problems/IntegratedScienceExplorer';

export const metadata: Metadata = {
  title: '2028 수능 통합과학 예시문항 25제 분석',
  description:
    '통합과학 예시문항 25개의 원문과 정답·배점을 확인하세요. 1~25번 풀이·문항 역분해와 연계 기출 자료 72개(원본 확인 필요 1개 포함)를 제공합니다. SNargen 생성 변형문제는 준비 중입니다.',
  openGraph: {
    title: '2028 수능 통합과학 예시문항 25제 분석',
    images: ['/images/thumbnail/problem-download/2028-integrated-science.svg'],
  },
  alternates: {
    canonical: '/problem-download/2028-integrated-science-examples',
  },
};

export default function IntegratedScienceExamplesPage() {
  return (
    <article className="min-w-0 space-y-8">
      <header className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-[#eff5ef] p-6 sm:p-9 dark:border-emerald-800 dark:bg-emerald-950/40">
        <Link
          href="/problems"
          className="text-sm font-medium text-emerald-800 hover:underline dark:text-emerald-300"
        >
          ← 문제 다운로드 · 통합과학
        </Link>
        <div className="mt-8 flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 dark:text-emerald-300">
          <span className="rounded-full bg-emerald-800 px-3 py-1 text-white">
            2028 수능
          </span>
          <span>SN 문항 분석 노트</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl dark:text-white">
          통합과학 예시문항
          <br />
          25개를 역분해합니다.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          핵심 개념과 실험·자료, 정답과 오답의 구조에서 통합과학 공부의 방향을
          찾습니다.
          <br />
          문제 원문을 바탕으로 풀이부터 SN 역분해, 유사 기출, SNargen 생성
          변형문제까지 차례로 정리합니다.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-emerald-900/10 pt-4 text-xs text-emerald-900 dark:border-emerald-800 dark:text-emerald-200">
          <span>1~25번 원문·정답 등록</span>
          <span>1~25번 풀이·분석 공개</span>
          <span>SNargen 생성 변형문제 준비 중</span>
          <span>SN Academy</span>
        </div>
      </header>
      <Suspense
        fallback={
          <p className="p-8 text-gray-500">
            문항 선택 화면을 불러오는 중입니다.
          </p>
        }
      >
        <IntegratedScienceExplorer />
      </Suspense>
    </article>
  );
}
