interface Props {
  update?: { date: string; summary: string };
  badgeOnly?: boolean;
}

export default function PostUpdateStatus({ update, badgeOnly = false }: Props) {
  if (!update) return null;
  if (badgeOnly) {
    return (
      <span className="inline-flex w-fit items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
        <span aria-hidden="true">↻</span> 계속 업데이트
      </span>
    );
  }
  return (
    <div className="min-w-0 rounded-lg border border-emerald-100 bg-emerald-50/60 px-3 py-2.5 dark:border-emerald-900 dark:bg-emerald-950/40">
      <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
        최근 업데이트{' '}
        <time dateTime={update.date}>{update.date.replace(/-/g, '.')}</time>
      </p>
      <p className="mt-1 break-words text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {update.summary}
      </p>
    </div>
  );
}
