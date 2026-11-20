'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// 날짜가 지나면 틀려지는 글(시험 일정, 준비물, 가격 등) 위에 붙는 안내.
// - asOf: 글이 기준으로 삼은 날짜. 있으면 '○월 ○일 기준' 한 줄을 늘 보여 준다
// - validUntil: 이 날짜가 지나면 '지난 정보' 안내로 바뀐다
// - successor: 새 글이 있으면 그 주소로 안내한다
// 페이지는 빌드 때 만들어지므로, 날짜 비교는 방문한 순간 브라우저에서 한다
export interface Freshness {
  asOf?: string;
  validUntil?: string;
  successor?: { title: string; url: string };
}

// '2026-11-20' → 2026년 11월 20일, '2026-01' → 2026년 1월
function formatDate(value: string): string {
  const [year, month, day] = value.split('-').map(Number);
  return day ? `${year}년 ${month}월 ${day}일` : `${year}년 ${month}월`;
}

function isPast(validUntil: string): boolean {
  // validUntil 당일까지는 유효, 다음 날 0시(한국 시간)부터 지난 정보로 본다
  return (
    Date.now() >= new Date(`${validUntil}T00:00:00+09:00`).getTime() + 864e5
  );
}

export default function FreshnessNotice({
  asOf,
  validUntil,
  successor,
}: Freshness) {
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    if (validUntil) setExpired(isPast(validUntil));
  }, [validUntil]);

  if (!asOf && !validUntil) return null;

  if (!expired) {
    return asOf ? (
      <p className="not-prose mb-8 text-sm text-slate-500 dark:text-slate-400">
        {formatDate(asOf)} 기준 정보입니다. 이후 바뀌었을 수 있으니 최신 공지를
        함께 확인하세요.
      </p>
    ) : null;
  }

  return (
    <div
      role="note"
      className="not-prose mb-10 border-y border-slate-300 py-4 text-[15px] leading-relaxed text-slate-700 dark:border-slate-600 dark:text-slate-300"
    >
      <p className="m-0 font-semibold text-slate-900 dark:text-white">
        이미 지난 일정이 담긴 글입니다.
      </p>
      <p className="m-0 mt-1">
        {asOf ? `${formatDate(asOf)} 기준으로 쓴 글이라 ` : ''}지금과 다른
        내용이 있을 수 있습니다.
        {successor && (
          <>
            {' '}
            최신 정보는{' '}
            <Link
              href={successor.url}
              className="font-semibold text-sn-primary underline dark:text-emerald-400"
            >
              {successor.title}
            </Link>
            에서 확인하세요.
          </>
        )}
      </p>
    </div>
  );
}
