import type { ProblemSet } from '@/types/problems';

const PROBLEM_SET_LOADERS: Record<
  string,
  () => Promise<{ default: ProblemSet }>
> = {
  'sntk-math1-level3': () => import('./sntk-math1-level3'),
};

export async function loadProblemSet(id: string): Promise<ProblemSet | null> {
  const loader = PROBLEM_SET_LOADERS[id];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
