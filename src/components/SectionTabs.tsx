'use client';

import { Fragment, useEffect, useState, type ReactNode } from 'react';

// 목록 페이지 상단 탭: '전체' + 구역 탭들. 전체는 모든 구역을 순서대로 보여 준다.
// /path#key 로 들어오면 그 탭을 연다 (상세 글의 이동 경로·목록으로 링크가 이 주소를 쓴다)
export interface SectionTab {
  key: string;
  label: string;
  emoji?: string;
  count: number;
  content: ReactNode;
}

interface SectionTabsProps {
  ariaLabel: string;
  tabs: SectionTab[];
  // '전체' 탭에서 구역을 보여 줄 순서. 생략하면 탭 순서
  allOrder?: string[];
}

const ALL = 'all';

export default function SectionTabs({
  ariaLabel,
  tabs,
  allOrder,
}: SectionTabsProps) {
  const [active, setActive] = useState<string>(ALL);
  const keys = tabs.map(tab => tab.key).join(',');

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (keys.split(',').includes(hash)) setActive(hash);
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [keys]);

  const select = (key: string) => {
    setActive(key);
    const url = key === ALL ? window.location.pathname : `#${key}`;
    window.history.replaceState(null, '', url);
  };

  const buttons = [
    {
      key: ALL,
      label: '전체',
      emoji: undefined,
      count: tabs.reduce((sum, tab) => sum + tab.count, 0),
    },
    ...tabs,
  ];

  return (
    <div className="space-y-10">
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex justify-center gap-2 border-b border-gray-200 dark:border-gray-700"
      >
        {buttons.map(tab => {
          const selected = active === tab.key;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={selected}
              onClick={() => select(tab.key)}
              className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors md:text-base ${
                selected
                  ? 'border-sn-primary text-sn-primary dark:border-emerald-400 dark:text-emerald-400'
                  : 'border-transparent text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {tab.emoji && <span className="mr-1.5">{tab.emoji}</span>}
              {tab.label}
              <span className="ml-1.5 text-xs opacity-75">({tab.count})</span>
            </button>
          );
        })}
      </div>

      {(active === ALL && allOrder
        ? allOrder
            .map(key => tabs.find(tab => tab.key === key))
            .filter((tab): tab is SectionTab => Boolean(tab))
        : tabs.filter(tab => active === ALL || active === tab.key)
      ).map(tab => (
        <Fragment key={tab.key}>{tab.content}</Fragment>
      ))}
    </div>
  );
}
