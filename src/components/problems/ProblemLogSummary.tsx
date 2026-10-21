import Link from 'next/link';
import type { Post, ProblemLog } from '@/data/posts';
import {
  PROBLEM_ERROR_TYPE_CONFIG,
  PROBLEM_SUBJECT_CONFIG,
} from '@/lib/config';
import { getProblemSubject } from '@/lib/problems';
import { formatLogDate } from './ProblemLogBoard';

interface ProblemLogSummaryProps {
  log: ProblemLog;
  date: string;
  siblings: Post[]; // 같은 날 다른 과목 출제 로그
}

export default function ProblemLogSummary({
  log,
  date,
  siblings,
}: ProblemLogSummaryProps) {
  const rows = [
    { label: '사용 모델', value: log.model },
    { label: '프롬프트 요약', value: log.promptSummary },
    { label: 'AI 초안 생성', value: `${log.draftCount}회` },
    {
      label: '사람이 수정한 곳',
      value:
        log.revisionCount === 0
          ? '없음 (초안 그대로 채택)'
          : `${log.revisionCount}곳`,
    },
    ...(log.errorTypes.length > 0
      ? [
          {
            label: '바로잡은 오류',
            value: log.errorTypes
              .map(type => PROBLEM_ERROR_TYPE_CONFIG[type])
              .join(', '),
          },
        ]
      : []),
  ];

  return (
    <aside className="mx-auto max-w-3xl space-y-6 px-6 pb-12">
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
          🧪 출제 기록
        </h2>
        <dl className="grid gap-3 text-sm sm:grid-cols-[8rem_1fr]">
          {rows.map(row => (
            <div key={row.label} className="contents">
              <dt className="font-medium text-gray-500 dark:text-gray-400">
                {row.label}
              </dt>
              <dd className="text-gray-900 dark:text-gray-100">{row.value}</dd>
            </div>
          ))}
        </dl>
        {(log.pdfUrl || log.answerUrl) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {log.pdfUrl && (
              <a
                href={log.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-sn-primary px-4 py-2 text-sm font-semibold text-white hover:bg-sn-primary/90"
              >
                문제 PDF
              </a>
            )}
            {log.answerUrl && (
              <a
                href={log.answerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600"
              >
                정답·해설 PDF
              </a>
            )}
          </div>
        )}
      </div>

      {siblings.length > 0 && (
        <div>
          <p className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
            {formatLogDate(date)} 다른 과목 출제 로그
          </p>
          <div className="flex flex-wrap gap-2">
            {siblings.map(post => {
              const subject = getProblemSubject(post);
              return (
                <Link
                  key={post.id}
                  href={post.url}
                  title={post.title}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {subject ? PROBLEM_SUBJECT_CONFIG[subject].label : post.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <Link
        href="/problems"
        className="inline-block text-sm font-medium text-sn-primary hover:underline"
      >
        ← AI 수능 출제로 돌아가기
      </Link>
    </aside>
  );
}
