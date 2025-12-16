'use client';

import React from 'react';

interface TOCItem {
    id: string;
    label: string;
    level: number; // 2 for h2, 3 for h3
}

interface TOCProps {
    items: TOCItem[];
}

export default function TOC({ items }: TOCProps) {
    if (!items || items.length === 0) return null;

    return (
        <nav className="my-8 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 bg-gray-50/50 dark:bg-gray-800/50">
            <div className="mb-3 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                In this article
            </div>
            <ul className="space-y-2 text-sm">
                {items.map((item) => (
                    <li
                        key={item.id}
                        style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}
                    >
                        <a
                            href={`#${item.id}`}
                            className="block text-gray-600 dark:text-gray-400 hover:text-sn-primary dark:hover:text-sn-primary hover:underline underline-offset-4 transition-colors truncate"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
