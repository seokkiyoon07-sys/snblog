'use client';

import { QuestionFourPractice } from './IntegratedSocialQuestionFourPractice';
import { QuestionFivePractice } from './IntegratedSocialQuestionFivePractice';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { integratedSocialExamples } from '@/data/integrated-social-examples';
import {
  QuestionOneAnalysis,
  QuestionOneRelated,
  QuestionOneSolution,
} from './IntegratedSocialAnalysis';

import { QuestionOnePractice } from './IntegratedSocialPractice';
import { QuestionThreePractice } from './IntegratedSocialQuestionThreePractice';
import { QuestionTwoPractice } from './IntegratedSocialQuestionTwoPractice';
import {
  QuestionTwoAnalysis,
  QuestionTwoRelated,
  QuestionTwoSolution,
} from './IntegratedSocialQuestionTwo';

import {
  QuestionThreeSolution,
  QuestionThreeAnalysis,
  QuestionThreeRelated,
} from './IntegratedSocialQuestionThree';

import {
  QuestionFourSolution,
  QuestionFourAnalysis,
  QuestionFourRelated,
} from './IntegratedSocialQuestionFour';

import {
  QuestionFiveSolution,
  QuestionFiveAnalysis,
  QuestionFiveRelated,
} from './IntegratedSocialQuestionFive';

import {
  QuestionSixSolution,
  QuestionSixAnalysis,
  QuestionSixRelated,
} from './IntegratedSocialQuestionSix';

import {
  QuestionSevenSolution,
  QuestionSevenAnalysis,
  QuestionSevenRelated,
} from './IntegratedSocialQuestionSeven';

import {
  QuestionEightSolution,
  QuestionEightAnalysis,
  QuestionEightRelated,
} from './IntegratedSocialQuestionEight';

import {
  QuestionNineSolution,
  QuestionNineAnalysis,
  QuestionNineRelated,
} from './IntegratedSocialQuestionNine';

import {
  QuestionTenSolution,
  QuestionTenAnalysis,
  QuestionTenRelated,
} from './IntegratedSocialQuestionTen';

import {
  QuestionElevenSolution,
  QuestionElevenAnalysis,
  QuestionElevenRelated,
} from './IntegratedSocialQuestionEleven';

import {
  QuestionTwelveSolution,
  QuestionTwelveAnalysis,
  QuestionTwelveRelated,
} from './IntegratedSocialQuestionTwelve';

import {
  QuestionThirteenSolution,
  QuestionThirteenAnalysis,
  QuestionThirteenRelated,
} from './IntegratedSocialQuestionThirteen';

import {
  QuestionFourteenSolution,
  QuestionFourteenAnalysis,
  QuestionFourteenRelated,
} from './IntegratedSocialQuestionFourteen';

import {
  QuestionFifteenSolution,
  QuestionFifteenAnalysis,
  QuestionFifteenRelated,
} from './IntegratedSocialQuestionFifteen';

import {
  QuestionSixteenSolution,
  QuestionSixteenAnalysis,
  QuestionSixteenRelated,
} from './IntegratedSocialQuestionSixteen';

import {
  QuestionSeventeenSolution,
  QuestionSeventeenAnalysis,
  QuestionSeventeenRelated,
} from './IntegratedSocialQuestionSeventeen';

import {
  QuestionEighteenSolution,
  QuestionEighteenAnalysis,
  QuestionEighteenRelated,
} from './IntegratedSocialQuestionEighteen';

import {
  QuestionNineteenSolution,
  QuestionNineteenAnalysis,
  QuestionNineteenRelated,
} from './IntegratedSocialQuestionNineteen';

const publishedQuestions = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const sections = [
  '문제와 풀이',
  'SNargen 생성 변형문제',
  '문항 역분해',
  '유사 기출',
] as const;
const buttonStyle =
  'rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:hover:bg-gray-800';

export default function IntegratedSocialExplorer() {
  const searchParams = useSearchParams();
  const value = Number(searchParams.get('question') || 1);
  const question =
    Number.isInteger(value) && value >= 1 && value <= 25 ? value : 1;
  const [pickerOpen, setPickerOpen] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const lastQuestion = useRef(question);

  useEffect(() => {
    if (lastQuestion.current !== question) {
      lastQuestion.current = question;
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, [question]);

  function selectQuestion(number: number) {
    const url = new URL(window.location.href);
    url.searchParams.set('question', String(number));
    window.history.pushState(null, '', url.pathname + url.search + url.hash);
    setPickerOpen(false);
  }

  return (
    <div className="grid min-w-0 items-start gap-6 md:grid-cols-[156px_minmax(0,1fr)]">
      <aside
        className="sticky top-2 z-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:top-5 dark:border-gray-700 dark:bg-gray-900"
        aria-label="문항 선택"
      >
        <div className="flex items-center justify-between md:block">
          <div>
            <p className="text-sm font-bold text-gray-950 dark:text-white">
              문항 선택
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              분석 공개{' '}
              <strong className="text-emerald-700 dark:text-emerald-300">
                {publishedQuestions.length}
              </strong>{' '}
              / 25
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPickerOpen(!pickerOpen)}
            aria-expanded={pickerOpen}
            aria-controls="question-picker"
            className={`${buttonStyle} md:hidden`}
          >
            {String(question).padStart(2, '0')}번 ·{' '}
            {pickerOpen ? '접기' : '문항 바꾸기'}
          </button>
        </div>
        <div
          id="question-picker"
          className={`${pickerOpen ? 'block' : 'hidden'} mt-4 md:block`}
        >
          <div className="grid grid-cols-5 gap-2 md:grid-cols-3">
            {integratedSocialExamples.map(item => (
              <button
                key={item.number}
                type="button"
                aria-label={`${item.number}번${publishedQuestions.includes(item.number) ? ' · 분석 공개' : ' · 문제 공개, 분석 준비 중'}`}
                aria-pressed={question === item.number}
                onClick={() => selectQuestion(item.number)}
                className={`relative min-h-10 rounded-lg text-sm font-semibold tabular-nums transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${question === item.number ? 'bg-emerald-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'}`}
              >
                {String(item.number).padStart(2, '0')}
                {publishedQuestions.includes(item.number) && (
                  <span
                    aria-hidden="true"
                    className={`absolute right-1 top-1 h-1 w-1 rounded-full ${question === item.number ? 'bg-emerald-200' : 'bg-emerald-600'}`}
                  />
                )}
              </button>
            ))}
          </div>
          <p className="mt-3 text-[11px] leading-5 text-gray-500 dark:text-gray-400">
            <span className="text-emerald-600">●</span> 분석 공개
            <br />
            모든 문제를 볼 수 있어요.
          </p>
        </div>
      </aside>
      <div className="min-w-0">
        <div className="mb-5 border-b border-gray-200 pb-5 dark:border-gray-700">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            <span>QUESTION {String(question).padStart(2, '0')}</span>
            <span className="rounded-full bg-emerald-50 px-2 py-1 dark:bg-emerald-950">
              {publishedQuestions.includes(question)
                ? '분석 공개'
                : '문제 공개'}
            </span>
          </div>
          <h2
            ref={heading}
            tabIndex={-1}
            className="scroll-mt-28 text-2xl font-bold leading-snug tracking-tight text-gray-950 outline-none md:scroll-mt-6 dark:text-white"
          >
            {question === 1
              ? '행복을 어떻게 판단할 것인가?'
              : question === 2
                ? '환경 문제는 어디서, 왜 나타날까?'
                : question === 3
                  ? '문화권과 다문화 정책을 어떻게 읽을까?'
                  : question === 4
                    ? '자연의 가치와 이용을 어떻게 판단할까?'
                    : question === 5
                      ? '기후 편차로 생활 모습을 어떻게 읽을까?'
                      : question === 6
                        ? '도시 인구와 도시화율을 어떻게 구별할까?'
                        : question === 7
                          ? '문화는 어떻게 전해지고 달라질까?'
                          : question === 8
                            ? '문화 존중과 인권을 어떻게 함께 판단할까?'
                            : question === 9
                              ? '교통 발달은 지역을 어떻게 바꿀까?'
                              : question === 10
                                ? '사료로 인권의 발전을 어떻게 읽을까?'
                                : question === 11
                                  ? '침해된 기본권을 어떻게 구제할까?'
                                  : question === 12
                                    ? '난민 통계에서 인권과 협력을 어떻게 읽을까?'
                                    : question === 13
                                      ? '불평등을 줄이는 제도와 정책은 무엇일까?'
                                      : question === 14
                                        ? '시민 불복종은 무엇에 저항하는가?'
                                        : question === 15
                                          ? '롤스와 노직은 무엇에 함께 동의할까?'
                                          : question === 16
                                            ? '형벌은 무엇을 근거로 정당화될까?'
                                            : question === 17
                                              ? '교역 장려와 왕권 강화는 어떻게 연결될까?'
                                              : question === 18
                                                ? '전쟁이 없으면 평화가 완성될까?'
                                                : question === 19
                                                  ? '금융 상품을 선택할 때 무엇을 포기할까?'
                                                  : `${question}번 공식 예시문항`}
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
            {question === 1
              ? '행복 · 아리스토텔레스 · 에피쿠로스'
              : question === 2
                ? '사막화 · 열대림 파괴 · 해양 쓰레기 집적'
                : question === 3
                  ? '세계 문화권 · 동화 정책 · 다문화주의'
                  : question === 4
                    ? '베이컨 · 레오폴드 · 인간 중심주의와 생태 중심주의'
                    : question === 5
                      ? '기온·강수 편차 · 남반구의 계절 · 기후와 생활 문화'
                      : question === 6
                        ? '누적 영역 그래프 · 도시화 단계 · 교외화'
                        : question === 7
                          ? '문화 전파 · 병존·융합·동화 · 교사의 피드백'
                          : question === 8
                            ? '문화 이해 태도 · 보편 윤리 · 인권과 헌법'
                            : question === 9
                              ? '접근성 · 생활권 확대 · 빨대 효과'
                              : question === 10
                                ? '명예혁명 · 권리 장전 · 인권의 역사'
                                : question === 11
                                  ? '자유권·사회권 · 기본권 제한 · 헌법소원'
                                  : question === 12
                                    ? '난민 통계 · 사회적 소수자 · 국제 사회의 행위 주체'
                                    : question === 13
                                      ? '공공부조 · 분배 정의 · 공간 불평등'
                                      : question === 14
                                        ? '롤스 · 시민 불복종 · 법에 대한 충실성'
                                        : question === 15
                                          ? '분배 정의 · 절차적 정의 · 공통점과 차이점'
                                          : question === 16
                                            ? '칸트 · 응보주의 · 인간 존엄성'
                                            : question === 17
                                              ? '중상주의 · 상업 자본주의 · 자본주의의 전개'
                                              : question === 18
                                                ? '갈퉁 · 적극적 평화 · 폭력의 삼각형'
                                                : question === 19
                                                  ? '금융 상품 · 기회비용 · 합리적 선택'
                                                  : '문제를 먼저 풀어보세요. 분석은 순차적으로 공개합니다.'}
          </p>
        </div>
        <QuestionContent key={question} question={question} />
        <nav
          aria-label="이전 다음 문항"
          className="mt-8 flex items-center justify-between gap-2 border-t border-gray-200 pt-5 dark:border-gray-700"
        >
          <button
            type="button"
            className={buttonStyle}
            disabled={question === 1}
            onClick={() => selectQuestion(question - 1)}
          >
            ← 이전
          </button>
          <span className="text-sm tabular-nums text-gray-500 dark:text-gray-400">
            {question} / 25
          </span>
          <button
            type="button"
            className={buttonStyle}
            disabled={question === 25}
            onClick={() => selectQuestion(question + 1)}
          >
            다음 →
          </button>
        </nav>
      </div>
    </div>
  );
}

function QuestionContent({ question }: { question: number }) {
  const [section, setSection] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = integratedSocialExamples[question - 1];

  async function copyLink() {
    const url = new URL(window.location.href);
    url.searchParams.set('question', String(question));
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopyFailed(true);
    }
  }

  return (
    <>
      <div
        role="tablist"
        aria-label="문항 분석 내용"
        className="mb-5 flex overflow-x-auto border-b border-gray-200 dark:border-gray-700"
      >
        {sections.map((label, index) => (
          <button
            type="button"
            key={label}
            ref={node => {
              tabs.current[index] = node;
            }}
            id={`analysis-tab-${index}`}
            role="tab"
            aria-selected={section === index}
            aria-controls={`analysis-panel-${index}`}
            tabIndex={section === index ? 0 : -1}
            onClick={() => setSection(index)}
            onKeyDown={event => {
              let next = index;
              if (event.key === 'ArrowRight')
                next = (index + 1) % sections.length;
              else if (event.key === 'ArrowLeft')
                next = (index + sections.length - 1) % sections.length;
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = sections.length - 1;
              else return;
              event.preventDefault();
              setSection(next);
              tabs.current[next]?.focus();
            }}
            className={`flex-1 shrink-0 whitespace-nowrap border-b-2 px-3 py-3 text-xs sm:text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 ${section === index ? 'border-emerald-700 text-emerald-800 dark:border-emerald-400 dark:text-emerald-300' : 'border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`analysis-panel-${section}`}
        aria-labelledby={`analysis-tab-${section}`}
        tabIndex={0}
        className="space-y-5 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
      >
        {section === 0 ? (
          <>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              {question === 1
                ? '두 사상가가 A에게 공통으로 건넬 수 있는 조언을 생각해 보세요.'
                : question === 2
                  ? '표의 원인·삽화와 지도 범례를 연결해 A·B·C를 구별해 보세요.'
                  : '이미지를 눌러 문제를 크게 볼 수 있습니다.'}
            </p>
            <figure>
              <button
                type="button"
                onClick={() => dialog.current?.showModal()}
                aria-label={`${question}번 문제 이미지 크게 보기`}
                className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-gray-200 bg-white p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 sm:p-4"
              >
                <Image
                  key={item.image}
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt={`2028학년도 수능 통합사회 공식 예시문항 ${question}번. 원문을 확대해 확인할 수 있습니다.`}
                  sizes="(max-width: 768px) 100vw, 650px"
                  unoptimized
                  className="h-auto w-full"
                />
              </button>
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>출처: 한국교육과정평가원 · 2028학년도 수능 예시문항</span>
                <button
                  type="button"
                  onClick={() => dialog.current?.showModal()}
                  className="font-medium text-emerald-700 underline dark:text-emerald-300"
                >
                  크게 보기 ↗
                </button>
              </figcaption>
            </figure>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={item.image}
                download={`2028-통합사회-${question}번.png`}
                className={buttonStyle}
              >
                문제 이미지 저장
              </a>
              <button type="button" onClick={copyLink} className={buttonStyle}>
                {copied ? '링크 복사됨 ✓' : '이 문항 링크 복사'}
              </button>
              <span role="status" className="text-xs text-gray-500">
                {copyFailed
                  ? '주소창의 링크를 복사해 주세요.'
                  : copied
                    ? `${question}번 문항 링크를 복사했습니다.`
                    : ''}
              </span>
            </div>
            {question === 1 ? (
              <QuestionOneSolution />
            ) : question === 2 ? (
              <QuestionTwoSolution />
            ) : question === 3 ? (
              <QuestionThreeSolution />
            ) : question === 4 ? (
              <QuestionFourSolution />
            ) : question === 5 ? (
              <QuestionFiveSolution />
            ) : question === 6 ? (
              <QuestionSixSolution />
            ) : question === 7 ? (
              <QuestionSevenSolution />
            ) : question === 8 ? (
              <QuestionEightSolution />
            ) : question === 9 ? (
              <QuestionNineSolution />
            ) : question === 10 ? (
              <QuestionTenSolution />
            ) : question === 11 ? (
              <QuestionElevenSolution />
            ) : question === 12 ? (
              <QuestionTwelveSolution />
            ) : question === 13 ? (
              <QuestionThirteenSolution />
            ) : question === 14 ? (
              <QuestionFourteenSolution />
            ) : question === 15 ? (
              <QuestionFifteenSolution />
            ) : question === 16 ? (
              <QuestionSixteenSolution />
            ) : question === 17 ? (
              <QuestionSeventeenSolution />
            ) : question === 18 ? (
              <QuestionEighteenSolution />
            ) : question === 19 ? (
              <QuestionNineteenSolution />
            ) : (
              <PendingAnalysis />
            )}
          </>
        ) : question === 1 ? (
          section === 1 ? (
            <QuestionOnePractice />
          ) : section === 2 ? (
            <QuestionOneAnalysis />
          ) : (
            <QuestionOneRelated />
          )
        ) : question === 2 && section === 1 ? (
          <QuestionTwoPractice />
        ) : question === 2 && section === 2 ? (
          <QuestionTwoAnalysis />
        ) : question === 2 && section === 3 ? (
          <QuestionTwoRelated />
        ) : question === 3 && section === 1 ? (
          <QuestionThreePractice />
        ) : question === 3 && section === 2 ? (
          <QuestionThreeAnalysis />
        ) : question === 3 && section === 3 ? (
          <QuestionThreeRelated />
        ) : question === 4 && section === 1 ? (
          <QuestionFourPractice />
        ) : question === 4 && section === 2 ? (
          <QuestionFourAnalysis />
        ) : question === 4 && section === 3 ? (
          <QuestionFourRelated />
        ) : question === 5 && section === 1 ? (
          <QuestionFivePractice />
        ) : question === 5 && section === 2 ? (
          <QuestionFiveAnalysis />
        ) : question === 5 && section === 3 ? (
          <QuestionFiveRelated />
        ) : question === 6 && section === 2 ? (
          <QuestionSixAnalysis />
        ) : question === 6 && section === 3 ? (
          <QuestionSixRelated />
        ) : question === 7 && section === 2 ? (
          <QuestionSevenAnalysis />
        ) : question === 7 && section === 3 ? (
          <QuestionSevenRelated />
        ) : question === 8 && section === 2 ? (
          <QuestionEightAnalysis />
        ) : question === 8 && section === 3 ? (
          <QuestionEightRelated />
        ) : question === 9 && section === 2 ? (
          <QuestionNineAnalysis />
        ) : question === 9 && section === 3 ? (
          <QuestionNineRelated />
        ) : question === 10 && section === 2 ? (
          <QuestionTenAnalysis />
        ) : question === 10 && section === 3 ? (
          <QuestionTenRelated />
        ) : question === 11 && section === 2 ? (
          <QuestionElevenAnalysis />
        ) : question === 11 && section === 3 ? (
          <QuestionElevenRelated />
        ) : question === 12 && section === 2 ? (
          <QuestionTwelveAnalysis />
        ) : question === 12 && section === 3 ? (
          <QuestionTwelveRelated />
        ) : question === 13 && section === 2 ? (
          <QuestionThirteenAnalysis />
        ) : question === 13 && section === 3 ? (
          <QuestionThirteenRelated />
        ) : question === 14 && section === 2 ? (
          <QuestionFourteenAnalysis />
        ) : question === 14 && section === 3 ? (
          <QuestionFourteenRelated />
        ) : question === 15 && section === 2 ? (
          <QuestionFifteenAnalysis />
        ) : question === 15 && section === 3 ? (
          <QuestionFifteenRelated />
        ) : question === 16 && section === 2 ? (
          <QuestionSixteenAnalysis />
        ) : question === 16 && section === 3 ? (
          <QuestionSixteenRelated />
        ) : question === 17 && section === 2 ? (
          <QuestionSeventeenAnalysis />
        ) : question === 17 && section === 3 ? (
          <QuestionSeventeenRelated />
        ) : question === 18 && section === 2 ? (
          <QuestionEighteenAnalysis />
        ) : question === 18 && section === 3 ? (
          <QuestionEighteenRelated />
        ) : question === 19 && section === 2 ? (
          <QuestionNineteenAnalysis />
        ) : question === 19 && section === 3 ? (
          <QuestionNineteenRelated />
        ) : section === 1 ? (
          <p className="rounded-xl border border-dashed border-gray-300 p-6 text-sm leading-7 text-gray-600 dark:border-gray-700 dark:text-gray-300">
            이 문항의 SNargen 생성 변형문제는 준비 중입니다. 1번 문항에서
            변형문제를 풀어볼 수 있습니다.
          </p>
        ) : (
          <PendingAnalysis />
        )}
      </div>
      <dialog
        ref={dialog}
        aria-label={`${question}번 문제 확대 보기`}
        className="fixed inset-0 m-auto max-h-[94dvh] w-[96vw] max-w-5xl overflow-auto rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/70"
      >
        <div className="sticky top-0 flex items-center justify-between border-b bg-white p-3 text-gray-900">
          <span className="text-sm font-semibold">
            통합사회 예시문항 {question}번
          </span>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="rounded-lg border px-4 py-2 text-sm font-semibold"
          >
            닫기 ✕
          </button>
        </div>
        <Image
          src={item.image}
          width={item.width}
          height={item.height}
          unoptimized
          alt={`${question}번 공식 문제 원문 확대`}
          className="h-auto w-full p-3"
        />
      </dialog>
    </>
  );
}

function PendingAnalysis() {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-8 dark:border-gray-700 dark:bg-gray-900">
      <p className="font-bold text-gray-900 dark:text-white">분석 준비 중</p>
      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
        이 문항의 핵심 개념, 선지별 해설, 유사 기출을 정리하고 있습니다. 지금은
        공식 문제를 먼저 살펴보세요.
      </p>
      <Link
        href="?question=1"
        scroll={false}
        className="mt-4 inline-block text-sm font-semibold text-emerald-700 underline dark:text-emerald-300"
      >
        분석이 공개된 1번 보기 →
      </Link>
    </div>
  );
}
