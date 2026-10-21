// AI 수능 출제(/problems) 허브용 헬퍼.
// 새 글은 category 'ai-problem' + url '/problems/{id}', 기존 글은 /problem-download/* 주소를 유지한다.

import { allPosts, type Post } from '@/data/posts';
import {
  PROBLEM_SUBJECT_CONFIG,
  type ProblemContentType,
  type ProblemErrorType,
  type ProblemSubject,
} from '@/lib/config';

export const AI_PROBLEM_CATEGORY = 'ai-problem';

export const HUB_SUBJECTS: ProblemSubject[] = [
  'korean',
  'math',
  'english',
  'integrated-social',
  'integrated-science',
];

const LEGACY_CATEGORIES = HUB_SUBJECTS.flatMap(
  key => PROBLEM_SUBJECT_CONFIG[key].categories
);

export function getProblemSubject(post: Post): ProblemSubject | undefined {
  if (post.problemSubject) return post.problemSubject;
  return HUB_SUBJECTS.find(key =>
    PROBLEM_SUBJECT_CONFIG[key].categories.includes(post.category)
  );
}

export function getProblemContentType(post: Post): ProblemContentType {
  if (post.problemContentType) return post.problemContentType;
  if (post.problemLog) return 'log';
  return post.subcategory?.startsWith('column-') ? 'column' : 'resource';
}

export function getProblemHubPosts(): Post[] {
  return allPosts
    .filter(
      post =>
        post.published &&
        (post.category === AI_PROBLEM_CATEGORY ||
          LEGACY_CATEGORIES.includes(post.category))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAiProblemPosts(): Post[] {
  return allPosts.filter(
    post => post.published && post.category === AI_PROBLEM_CATEGORY
  );
}

// 출제 로그를 날짜 내림차순으로 묶는다
export function groupLogsByDate(
  logs: Post[]
): { date: string; logs: Post[] }[] {
  const byDate = new Map<string, Post[]>();
  for (const log of logs) {
    byDate.set(log.date, [...(byDate.get(log.date) ?? []), log]);
  }
  return [...byDate.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([date, group]) => ({ date, logs: group }));
}

export interface ProblemMetrics {
  totalProblems: number;
  streakDays: number;
  asIsRate: number; // 초안 그대로 채택한 비율 (%)
  avgRevisions: number;
  topErrorTypes: { type: ProblemErrorType; count: number }[];
}

function addDays(date: string, days: number): string {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function computeProblemMetrics(logs: Post[]): ProblemMetrics {
  const records = logs.flatMap(post =>
    post.problemLog ? [post.problemLog] : []
  );
  const total = records.length;

  // 가장 최근 출제일부터 하루씩 거슬러 올라가며 연속 출제 일수 계산
  const dates = new Set(logs.map(post => post.date));
  let streakDays = 0;
  let cursor = [...dates].sort().at(-1);
  while (cursor && dates.has(cursor)) {
    streakDays++;
    cursor = addDays(cursor, -1);
  }

  const errorCounts = new Map<ProblemErrorType, number>();
  for (const record of records) {
    for (const type of record.errorTypes) {
      errorCounts.set(type, (errorCounts.get(type) ?? 0) + 1);
    }
  }

  return {
    totalProblems: total,
    streakDays,
    asIsRate: total
      ? Math.round(
          (records.filter(r => r.revisionCount === 0).length / total) * 100
        )
      : 0,
    avgRevisions: total
      ? Math.round(
          (records.reduce((sum, r) => sum + r.revisionCount, 0) / total) * 10
        ) / 10
      : 0,
    topErrorTypes: [...errorCounts.entries()]
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .map(([type, count]) => ({ type, count })),
  };
}
