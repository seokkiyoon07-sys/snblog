'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import {
  getScienceSubjectQuestions,
  scienceSubjects,
  type ScienceSubject,
} from '@/data/integrated-science-subjects';

export default function ScienceSubjectModal({
  container,
}: {
  container: RefObject<HTMLDivElement | null>;
}) {
  const [selected, setSelected] = useState<ScienceSubject | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = selected !== null;
  const subject = scienceSubjects.find(item => item.id === selected);
  const questions = selected ? getScienceSubjectQuestions(selected) : [];

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const handleClick = (event: MouseEvent) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const trigger = target.closest<HTMLElement>('[data-science-subject]');
      const match = scienceSubjects.find(
        item => item.id === trigger?.dataset.scienceSubject
      );
      if (!match) return;
      event.preventDefault();
      setSelected(match.id);
    };
    element.addEventListener('click', handleClick);
    return () => element.removeEventListener('click', handleClick);
  }, [container]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="science-subject-dialog-title"
      aria-describedby="science-subject-dialog-description"
      onClose={() => setSelected(null)}
      onCancel={() => setSelected(null)}
      className="m-auto max-h-[92dvh] w-[95vw] max-w-5xl overflow-hidden rounded-2xl border-0 bg-white p-0 text-gray-900 shadow-2xl backdrop:bg-black/60 dark:bg-gray-950 dark:text-gray-100"
    >
      {subject && (
        <div className="flex max-h-[92dvh] flex-col">
          <header className="shrink-0 border-b border-gray-200 p-4 sm:p-6 dark:border-gray-700">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="science-subject-dialog-title"
                  className="text-xl font-bold"
                >
                  {subject.name} 개념이 쓰인 {questions.length}문항
                </h2>
                <p
                  id="science-subject-dialog-description"
                  className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300"
                >
                  전체 25문항 중 {questions.length * 4}%. 주·부 과목을 구분하지
                  않은 중복 집계입니다. 각 행에 사용 개념과 풀이에서의 역할,
                  함께 연결된 과목을 표시했습니다.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="shrink-0 rounded-lg border px-3 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-green-700"
                aria-label="과목별 분석 닫기"
              >
                닫기 ×
              </button>
            </div>
            <div
              className="mt-4 flex flex-wrap gap-2"
              aria-label="분석 과목 선택"
            >
              {scienceSubjects.map(item => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={item.id === selected}
                  onClick={() => setSelected(item.id)}
                  className={`rounded-full border px-3 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-green-700 ${item.id === selected ? 'border-green-800 bg-green-800 text-white' : 'border-gray-300 dark:border-gray-600'}`}
                >
                  {item.name} · {getScienceSubjectQuestions(item.id).length}
                </button>
              ))}
            </div>
          </header>
          <div className="min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6">
            <table className="w-full text-left text-sm leading-6 max-sm:block">
              <caption className="sr-only">
                {subject.name}의 문항별 사용 개념과 연계 과목
              </caption>
              <thead className="max-sm:sr-only">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th scope="col" className="w-20 pb-3 pr-3">
                    문항
                  </th>
                  <th scope="col" className="w-[27%] pb-3 pr-4">
                    사용 개념
                  </th>
                  <th scope="col" className="pb-3 pr-4">
                    풀이에서 쓰인 부분
                  </th>
                  <th scope="col" className="w-32 pb-3">
                    함께 연결된 과목
                  </th>
                </tr>
              </thead>
              <tbody className="max-sm:block">
                {questions.map(question => (
                  <tr
                    key={question.number}
                    className="border-b border-gray-200 align-top max-sm:mb-4 max-sm:block max-sm:rounded-xl max-sm:border max-sm:p-4 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 pr-3 max-sm:block max-sm:p-0"
                    >
                      <a
                        href={`/problem-download/2028-integrated-science-examples?question=${question.number}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-green-800 underline dark:text-green-300"
                        aria-label={`${question.number}번 풀이·역분해 새 탭에서 보기`}
                      >
                        {question.number}번 ↗
                      </a>
                    </th>
                    <td className="py-4 pr-4 font-semibold max-sm:block max-sm:py-2">
                      {question.concepts}
                    </td>
                    <td className="py-4 pr-4 max-sm:block max-sm:py-2">
                      {question.usage}
                      <a
                        className="mt-2 block text-xs text-green-800 underline dark:text-green-300"
                        href={`/problems/Integrated_science_Studies/28_examples/${question.number}.png`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        문제 원문 보기 ↗
                      </a>
                    </td>
                    <td className="py-4 max-sm:block max-sm:py-2">
                      <span className="mr-2 text-xs text-gray-500 sm:hidden">
                        연계 과목
                      </span>
                      {question.subjects
                        .filter(id => id !== selected)
                        .map(
                          id =>
                            scienceSubjects.find(item => item.id === id)?.name
                        )
                        .join(' · ') || '이 과목만 집계'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </dialog>
  );
}
