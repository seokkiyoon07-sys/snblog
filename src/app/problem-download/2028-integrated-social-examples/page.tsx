import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import IntegratedSocialExplorer from '@/components/problems/IntegratedSocialExplorer';
import { BASE_URL } from '@/lib/config';

const title = '2028 수능 통합사회 예시문항 25제 분석';
const description =
  '공식 예시문항 1~25번을 선택해 살펴보세요. SN이 핵심 개념과 선지 구조를 역분해하고, 기존 기출과 연결해 새로운 수능의 학습 방향을 정리합니다.';
const url = '/problem-download/2028-integrated-social-examples';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url: `${BASE_URL}${url}`,
    images: ['/images/thumbnail/problem-download/2028-integrated-social.svg'],
  },
};

export default function IntegratedSocialExamplesPage() {
  return (
    <article className="min-w-0 space-y-8">
      <header className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-[#eff5ef] p-6 sm:p-9 dark:border-emerald-800 dark:bg-emerald-950/40">
        <Link
          href="/problems"
          className="text-sm font-medium text-emerald-800 hover:underline dark:text-emerald-300"
        >
          ← 문제 다운로드 · 통합사회
        </Link>
        <div className="mt-8 flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 dark:text-emerald-300">
          <span className="rounded-full bg-emerald-800 px-3 py-1 text-white">
            2028 수능
          </span>
          <span>SN 문항 분석 노트</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl dark:text-white">
          통합사회 예시문항
          <br />
          25개를 역분해합니다.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          새로운 시험, 무엇을 기준으로 준비해야 할까요?
          <br /> 공식 문제의 개념과 자료, 정답과 오답의 구조에서 통합사회 공부의
          방향을 찾습니다.
          <br /> 역분해한 출제 구조를 바탕으로 만든 SNargen 생성 변형문제도
          풀어보세요.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-emerald-900/10 pt-4 text-xs text-emerald-900 dark:border-emerald-800 dark:text-emerald-200">
          <span>공식 예시문항 25개</span>
          <span>1~19번 분석 공개</span>
          <span>1~5번 연계 변형문제 공개</span>
          <span>SN Academy · 2026.09.11</span>
        </div>
      </header>
      <details className="rounded-2xl border border-gray-200 px-5 py-4 dark:border-gray-700">
        <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
          왜 예시문항을 역분해하나요?
        </summary>
        <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
          <p>
            2027년에 치르는 2028학년도 수능부터 사회탐구는 통합사회로 바뀝니다.
            통합사회는 25문항, 40분으로 구성됩니다. 새 체제의 수능 기출이 아직
            쌓이지 않은 만큼, 공식 예시문항은 학습의 기준을 세우는 중요한
            출발점입니다.
          </p>
          <p>
            SN은 정답을 찾은 다음, 문제가 만들어진 구조를 거꾸로 읽습니다. 핵심
            개념 → 자료 해석 → 선지 판단 → 유사 기출 → 학습 방향의 순서로
            25문항을 분석해 나갑니다.
          </p>
          <p>
            예시문항만으로 실제 수능의 난도나 출제 비중을 확정할 수는 없습니다.
            공개 자료에서 확인되는 사실과 SN의 해석을 구분해 정리하겠습니다.
          </p>
          <a
            href="https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=103113&lev=0&m=020402"
            target="_blank"
            rel="noreferrer"
            className="inline-block font-medium text-emerald-700 underline dark:text-emerald-300"
          >
            교육부 공식 예시문항 안내 ↗
          </a>
        </div>
      </details>
      <Suspense
        fallback={
          <div className="rounded-2xl bg-gray-50 p-8 text-gray-600 dark:bg-gray-900 dark:text-gray-300">
            문항 선택 화면을 불러오는 중입니다…
          </div>
        }
      >
        <IntegratedSocialExplorer />
      </Suspense>
    </article>
  );
}
