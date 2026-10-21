import Link from 'next/link';
import type { Post } from '@/data/posts';
import {
  PROBLEM_ERROR_TYPE_CONFIG,
  PROBLEM_SUBJECT_CONFIG,
  type ProblemSubject,
} from '@/lib/config';
import { getProblemSubject, type ProblemMetrics } from '@/lib/problems';

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export function formatLogDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  const weekday = WEEKDAYS[new Date(y, m - 1, d).getDay()];
  return `${m}월 ${d}일 (${weekday})`;
}

export function ProblemMetricsBar({ metrics }: { metrics: ProblemMetrics }) {
  const stats = [
    { label: '누적 출제', value: `${metrics.totalProblems}문항` },
    { label: '연속 출제', value: `${metrics.streakDays}일` },
    { label: 'AI 초안 그대로 채택', value: `${metrics.asIsRate}%` },
    { label: '문항당 평균 수정', value: `${metrics.avgRevisions}곳` },
  ];

  return (
    <div className="space-y-3">
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800"
          >
            <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {stat.label}
            </dt>
            <dd className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      {metrics.topErrorTypes.length > 0 && (
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          사람이 가장 많이 바로잡은 AI 오류:{' '}
          {metrics.topErrorTypes
            .map(
              ({ type, count }) =>
                `${PROBLEM_ERROR_TYPE_CONFIG[type]} ${count}건`
            )
            .join(' · ')}
        </p>
      )}
    </div>
  );
}

interface ProblemLogArchiveProps {
  groups: { date: string; logs: Post[] }[];
  subjects: ProblemSubject[];
}

export function ProblemLogArchive({
  groups,
  subjects,
}: ProblemLogArchiveProps) {
  return (
    <ul className="divide-y divide-gray-200 rounded-xl border border-gray-200 dark:divide-gray-700 dark:border-gray-700">
      {groups.map(group => (
        <li
          key={group.date}
          className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center"
        >
          <span className="w-32 shrink-0 text-sm font-medium text-gray-700 dark:text-gray-300">
            {formatLogDate(group.date)}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {subjects.map(subject => {
              const log = group.logs.find(
                post => getProblemSubject(post) === subject
              );
              if (!log) return null;
              return (
                <Link
                  key={subject}
                  href={log.url}
                  title={log.title}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  {PROBLEM_SUBJECT_CONFIG[subject].label}
                </Link>
              );
            })}
          </div>
        </li>
      ))}
    </ul>
  );
}
