'use client';
import {
  ScienceQuestionTwentyFiveSolution,
  ScienceQuestionTwentyFiveAnalysis,
  ScienceQuestionTwentyFiveRelated,
} from './IntegratedScienceQuestionTwentyFive';
import {
  ScienceQuestionTwentyFourSolution,
  ScienceQuestionTwentyFourAnalysis,
  ScienceQuestionTwentyFourRelated,
} from './IntegratedScienceQuestionTwentyFour';
import {
  ScienceQuestionTwentyThreeSolution,
  ScienceQuestionTwentyThreeAnalysis,
  ScienceQuestionTwentyThreeRelated,
} from './IntegratedScienceQuestionTwentyThree';
import {
  ScienceQuestionTwentyTwoSolution,
  ScienceQuestionTwentyTwoAnalysis,
  ScienceQuestionTwentyTwoRelated,
} from './IntegratedScienceQuestionTwentyTwo';
import {
  ScienceQuestionTwentyOneSolution,
  ScienceQuestionTwentyOneAnalysis,
  ScienceQuestionTwentyOneRelated,
} from './IntegratedScienceQuestionTwentyOne';
import {
  ScienceQuestionTwentySolution,
  ScienceQuestionTwentyAnalysis,
  ScienceQuestionTwentyRelated,
} from './IntegratedScienceQuestionTwenty';
import {
  ScienceQuestionNineteenSolution,
  ScienceQuestionNineteenAnalysis,
  ScienceQuestionNineteenRelated,
} from './IntegratedScienceQuestionNineteen';
import {
  ScienceQuestionEighteenSolution,
  ScienceQuestionEighteenAnalysis,
  ScienceQuestionEighteenRelated,
} from './IntegratedScienceQuestionEighteen';
import {
  ScienceQuestionSeventeenSolution,
  ScienceQuestionSeventeenAnalysis,
  ScienceQuestionSeventeenRelated,
} from './IntegratedScienceQuestionSeventeen';
import {
  ScienceQuestionSixteenSolution,
  ScienceQuestionSixteenAnalysis,
  ScienceQuestionSixteenRelated,
} from './IntegratedScienceQuestionSixteen';
import {
  ScienceQuestionFifteenSolution,
  ScienceQuestionFifteenAnalysis,
  ScienceQuestionFifteenRelated,
} from './IntegratedScienceQuestionFifteen';
import {
  ScienceQuestionFourteenSolution,
  ScienceQuestionFourteenAnalysis,
  ScienceQuestionFourteenRelated,
} from './IntegratedScienceQuestionFourteen';
import {
  ScienceQuestionThirteenSolution,
  ScienceQuestionThirteenAnalysis,
  ScienceQuestionThirteenRelated,
} from './IntegratedScienceQuestionThirteen';
import {
  ScienceQuestionTwelveSolution,
  ScienceQuestionTwelveAnalysis,
  ScienceQuestionTwelveRelated,
} from './IntegratedScienceQuestionTwelve';
import {
  ScienceQuestionElevenSolution,
  ScienceQuestionElevenAnalysis,
  ScienceQuestionElevenRelated,
} from './IntegratedScienceQuestionEleven';
import {
  ScienceQuestionTenSolution,
  ScienceQuestionTenAnalysis,
  ScienceQuestionTenRelated,
} from './IntegratedScienceQuestionTen';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
  ScienceQuestionOneSolution,
  ScienceQuestionOneAnalysis,
  ScienceQuestionOneRelated,
} from './IntegratedScienceQuestionOne';
import {
  ScienceQuestionTwoSolution,
  ScienceQuestionTwoAnalysis,
  ScienceQuestionTwoRelated,
} from './IntegratedScienceQuestionTwo';
import {
  ScienceQuestionThreeSolution,
  ScienceQuestionThreeAnalysis,
  ScienceQuestionThreeRelated,
} from './IntegratedScienceQuestionThree';
import {
  ScienceQuestionFourSolution,
  ScienceQuestionFourAnalysis,
  ScienceQuestionFourRelated,
} from './IntegratedScienceQuestionFour';
import {
  ScienceQuestionFiveSolution,
  ScienceQuestionFiveAnalysis,
  ScienceQuestionFiveRelated,
} from './IntegratedScienceQuestionFive';
import {
  ScienceQuestionSixSolution,
  ScienceQuestionSixAnalysis,
  ScienceQuestionSixRelated,
} from './IntegratedScienceQuestionSix';
import {
  ScienceQuestionSevenSolution,
  ScienceQuestionSevenAnalysis,
  ScienceQuestionSevenRelated,
} from './IntegratedScienceQuestionSeven';
import {
  ScienceQuestionEightSolution,
  ScienceQuestionEightAnalysis,
  ScienceQuestionEightRelated,
} from './IntegratedScienceQuestionEight';
import {
  ScienceQuestionNineSolution,
  ScienceQuestionNineAnalysis,
  ScienceQuestionNineRelated,
} from './IntegratedScienceQuestionNine';
import {
  integratedScienceExamples,
  type IntegratedScienceExample,
} from '@/data/integrated-science-examples';

const sections = [
  '문제와 풀이',
  'SNargen 생성 변형문제',
  '문항 역분해',
  '유사 기출',
];
const descriptions = [
  '단계별 풀이와 선지별 판단 근거를 준비 중입니다.',
  '원문 분석을 바탕으로 조건과 자료를 바꾼 변형문제와 해설을 준비합니다.',
  '핵심 개념, 실험 조건과 변인, 표·그래프 해석, 출제 구조와 오답의 원인을 정리합니다.',
  '같은 개념이나 자료 해석 방식을 묻는 기출을 찾아 출처와 연결 지점을 정리합니다.',
];
const buttonStyle =
  'rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800';

export default function IntegratedScienceExplorer() {
  const searchParams = useSearchParams();
  const requested = Number(searchParams.get('question'));
  const question =
    Number.isInteger(requested) && requested >= 1 && requested <= 25
      ? requested
      : 1;
  const item = integratedScienceExamples[question - 1];
  const [pickerOpen, setPickerOpen] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const previous = useRef(question);

  useEffect(() => {
    if (previous.current !== question) {
      previous.current = question;
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  }, [question]);

  function selectQuestion(number: number) {
    if (number < 1 || number > 25) return;
    const url = new URL(window.location.href);
    url.searchParams.set('question', String(number));
    window.history.pushState(null, '', url.pathname + url.search + url.hash);
    setPickerOpen(false);
  }

  return (
    <div className="grid min-w-0 items-start gap-6 md:grid-cols-[156px_minmax(0,1fr)]">
      <aside
        aria-label="문항 선택"
        className="sticky top-2 z-10 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:top-5 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="flex items-center justify-between md:block">
          <div>
            <p className="text-sm font-bold text-gray-950 dark:text-white">
              문항 선택
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              원문 등록{' '}
              {integratedScienceExamples.filter(entry => entry.image).length} /
              25
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPickerOpen(!pickerOpen)}
            aria-expanded={pickerOpen}
            aria-controls="science-question-picker"
            className={`${buttonStyle} md:hidden`}
          >
            {question}번 · {pickerOpen ? '접기' : '문항 바꾸기'}
          </button>
        </div>
        <div
          id="science-question-picker"
          className={`${pickerOpen ? 'block' : 'hidden'} mt-4 md:block`}
        >
          <div className="grid grid-cols-5 gap-2 md:grid-cols-3">
            {integratedScienceExamples.map(entry => (
              <button
                key={entry.number}
                type="button"
                aria-label={`${entry.number}번 · ${entry.number <= 25 ? '분석 공개' : entry.image ? '원문 등록' : '준비 중'}`}
                aria-pressed={question === entry.number}
                onClick={() => selectQuestion(entry.number)}
                className={`min-h-10 rounded-lg text-sm font-semibold tabular-nums focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${question === entry.number ? 'bg-emerald-800 text-white' : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'}`}
              >
                {String(entry.number).padStart(2, '0')}
              </button>
            ))}
          </div>
          <p className="mt-3 text-[11px] leading-5 text-gray-500 dark:text-gray-400">
            문제를 먼저 풀어보세요. 풀이와 분석은 순차적으로 등록합니다.
          </p>
        </div>
      </aside>
      <div className="min-w-0">
        <div className="mb-5 border-b border-gray-200 pb-5 dark:border-gray-700">
          <p className="mb-2 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            QUESTION {String(question).padStart(2, '0')} ·{' '}
            {item.number <= 25
              ? '분석 공개'
              : item.image
                ? '원문 등록'
                : '원문 준비 중'}
          </p>
          <h2
            ref={heading}
            tabIndex={-1}
            className="scroll-mt-28 text-2xl font-bold text-gray-950 outline-none md:scroll-mt-6 dark:text-white"
          >
            {item.title ?? `통합과학 ${question}번 예시문항`}
          </h2>
          {item.points !== null && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              배점 {item.points}점
            </p>
          )}
        </div>
        <QuestionContent key={question} item={item} />
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
            ← 이전 문항
          </button>
          <span className="text-sm text-gray-500">{question} / 25</span>
          <button
            type="button"
            className={buttonStyle}
            disabled={question === 25}
            onClick={() => selectQuestion(question + 1)}
          >
            다음 문항 →
          </button>
        </nav>
      </div>
    </div>
  );
}

function QuestionContent({ item }: { item: IntegratedScienceExample }) {
  const [section, setSection] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <>
      <div
        role="tablist"
        aria-label="문항 분석 내용"
        className="mb-5 flex overflow-x-auto border-b border-gray-200 dark:border-gray-700"
      >
        {sections.map((label, index) => (
          <button
            key={label}
            type="button"
            ref={node => {
              tabs.current[index] = node;
            }}
            id={`science-tab-${index}`}
            role="tab"
            aria-selected={section === index}
            aria-controls={`science-panel-${index}`}
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
            className={`flex-1 shrink-0 whitespace-nowrap border-b-2 px-3 py-3 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 sm:text-sm ${section === index ? 'border-emerald-700 text-emerald-800 dark:border-emerald-400 dark:text-emerald-300' : 'border-transparent text-gray-500 dark:text-gray-400'}`}
          >
            {label}
          </button>
        ))}
      </div>
      {sections.map((label, index) => (
        <div
          key={label}
          role="tabpanel"
          hidden={section !== index}
          id={`science-panel-${index}`}
          aria-labelledby={`science-tab-${index}`}
          tabIndex={0}
          className="space-y-5 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
        >
          {index === 0 && item.image && (
            <figure className="rounded-xl border border-gray-200 bg-white p-4">
              <a
                href={item.image.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.number}번 문제 원문 크게 보기`}
              >
                <Image
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt={`통합과학 ${item.number}번 문제 원문`}
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="h-auto w-full"
                />
              </a>
            </figure>
          )}
          {index === 0 && item.answer !== null && item.number > 25 && (
            <details className="rounded-xl border border-emerald-200 p-5 dark:border-emerald-800">
              <summary className="cursor-pointer font-semibold text-emerald-800 dark:text-emerald-300">
                정답 확인
              </summary>
              <p className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                정답 {['①', '②', '③', '④', '⑤'][item.answer - 1]}
              </p>
              <a
                href="/problems/Integrated_science_Studies/28_examples/정답표.png"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-emerald-700 underline dark:text-emerald-300"
              >
                전체 정답·배점표 보기 ↗
              </a>
            </details>
          )}
          {index === 1 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                {item.number}번 연계
              </p>
              <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                SNargen 생성 변형문제 준비 중
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                SNargen에서 제작한 변형문제와 해설을 추후 등록할 예정입니다.
              </p>
            </div>
          ) : item.number === 1 ? (
            index === 0 ? (
              <ScienceQuestionOneSolution />
            ) : index === 2 ? (
              <ScienceQuestionOneAnalysis />
            ) : (
              <ScienceQuestionOneRelated />
            )
          ) : item.number === 2 ? (
            index === 0 ? (
              <ScienceQuestionTwoSolution />
            ) : index === 2 ? (
              <ScienceQuestionTwoAnalysis />
            ) : (
              <ScienceQuestionTwoRelated />
            )
          ) : item.number === 3 ? (
            index === 0 ? (
              <ScienceQuestionThreeSolution />
            ) : index === 2 ? (
              <ScienceQuestionThreeAnalysis />
            ) : (
              <ScienceQuestionThreeRelated />
            )
          ) : item.number === 4 ? (
            index === 0 ? (
              <ScienceQuestionFourSolution />
            ) : index === 2 ? (
              <ScienceQuestionFourAnalysis />
            ) : (
              <ScienceQuestionFourRelated />
            )
          ) : item.number === 5 ? (
            index === 0 ? (
              <ScienceQuestionFiveSolution />
            ) : index === 2 ? (
              <ScienceQuestionFiveAnalysis />
            ) : (
              <ScienceQuestionFiveRelated />
            )
          ) : item.number === 6 ? (
            index === 0 ? (
              <ScienceQuestionSixSolution />
            ) : index === 2 ? (
              <ScienceQuestionSixAnalysis />
            ) : (
              <ScienceQuestionSixRelated />
            )
          ) : item.number === 7 ? (
            index === 0 ? (
              <ScienceQuestionSevenSolution />
            ) : index === 2 ? (
              <ScienceQuestionSevenAnalysis />
            ) : (
              <ScienceQuestionSevenRelated />
            )
          ) : item.number === 8 ? (
            index === 0 ? (
              <ScienceQuestionEightSolution />
            ) : index === 2 ? (
              <ScienceQuestionEightAnalysis />
            ) : (
              <ScienceQuestionEightRelated />
            )
          ) : item.number === 9 ? (
            index === 0 ? (
              <ScienceQuestionNineSolution />
            ) : index === 2 ? (
              <ScienceQuestionNineAnalysis />
            ) : (
              <ScienceQuestionNineRelated />
            )
          ) : item.number === 10 ? (
            index === 0 ? (
              <ScienceQuestionTenSolution />
            ) : index === 2 ? (
              <ScienceQuestionTenAnalysis />
            ) : (
              <ScienceQuestionTenRelated />
            )
          ) : item.number === 11 ? (
            index === 0 ? (
              <ScienceQuestionElevenSolution />
            ) : index === 2 ? (
              <ScienceQuestionElevenAnalysis />
            ) : (
              <ScienceQuestionElevenRelated />
            )
          ) : item.number === 12 ? (
            index === 0 ? (
              <ScienceQuestionTwelveSolution />
            ) : index === 2 ? (
              <ScienceQuestionTwelveAnalysis />
            ) : (
              <ScienceQuestionTwelveRelated />
            )
          ) : item.number === 13 ? (
            index === 0 ? (
              <ScienceQuestionThirteenSolution />
            ) : index === 2 ? (
              <ScienceQuestionThirteenAnalysis />
            ) : (
              <ScienceQuestionThirteenRelated />
            )
          ) : item.number === 14 ? (
            index === 0 ? (
              <ScienceQuestionFourteenSolution />
            ) : index === 2 ? (
              <ScienceQuestionFourteenAnalysis />
            ) : (
              <ScienceQuestionFourteenRelated />
            )
          ) : item.number === 15 ? (
            index === 0 ? (
              <ScienceQuestionFifteenSolution />
            ) : index === 2 ? (
              <ScienceQuestionFifteenAnalysis />
            ) : (
              <ScienceQuestionFifteenRelated />
            )
          ) : item.number === 16 ? (
            index === 0 ? (
              <ScienceQuestionSixteenSolution />
            ) : index === 2 ? (
              <ScienceQuestionSixteenAnalysis />
            ) : (
              <ScienceQuestionSixteenRelated />
            )
          ) : item.number === 17 ? (
            index === 0 ? (
              <ScienceQuestionSeventeenSolution />
            ) : index === 2 ? (
              <ScienceQuestionSeventeenAnalysis />
            ) : (
              <ScienceQuestionSeventeenRelated />
            )
          ) : item.number === 18 ? (
            index === 0 ? (
              <ScienceQuestionEighteenSolution />
            ) : index === 2 ? (
              <ScienceQuestionEighteenAnalysis />
            ) : (
              <ScienceQuestionEighteenRelated />
            )
          ) : item.number === 19 ? (
            index === 0 ? (
              <ScienceQuestionNineteenSolution />
            ) : index === 2 ? (
              <ScienceQuestionNineteenAnalysis />
            ) : (
              <ScienceQuestionNineteenRelated />
            )
          ) : item.number === 20 ? (
            index === 0 ? (
              <ScienceQuestionTwentySolution />
            ) : index === 2 ? (
              <ScienceQuestionTwentyAnalysis />
            ) : (
              <ScienceQuestionTwentyRelated />
            )
          ) : item.number === 21 ? (
            index === 0 ? (
              <ScienceQuestionTwentyOneSolution />
            ) : index === 2 ? (
              <ScienceQuestionTwentyOneAnalysis />
            ) : (
              <ScienceQuestionTwentyOneRelated />
            )
          ) : item.number === 22 ? (
            index === 0 ? (
              <ScienceQuestionTwentyTwoSolution />
            ) : index === 2 ? (
              <ScienceQuestionTwentyTwoAnalysis />
            ) : (
              <ScienceQuestionTwentyTwoRelated />
            )
          ) : item.number === 23 ? (
            index === 0 ? (
              <ScienceQuestionTwentyThreeSolution />
            ) : index === 2 ? (
              <ScienceQuestionTwentyThreeAnalysis />
            ) : (
              <ScienceQuestionTwentyThreeRelated />
            )
          ) : item.number === 24 ? (
            index === 0 ? (
              <ScienceQuestionTwentyFourSolution />
            ) : index === 2 ? (
              <ScienceQuestionTwentyFourAnalysis />
            ) : (
              <ScienceQuestionTwentyFourRelated />
            )
          ) : item.number === 25 ? (
            index === 0 ? (
              <ScienceQuestionTwentyFiveSolution />
            ) : index === 2 ? (
              <ScienceQuestionTwentyFiveAnalysis />
            ) : (
              <ScienceQuestionTwentyFiveRelated />
            )
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 dark:border-gray-700 dark:bg-gray-900">
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                {item.number}번 · 준비 중
              </p>
              <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                {index === 0 && item.image ? '풀이 준비 중' : label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {descriptions[index]}
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
