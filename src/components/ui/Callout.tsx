
import React from 'react';

interface CalloutProps {
    type?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    children: React.ReactNode;
}

export default function Callout({
    type = 'info',
    title,
    children,
}: CalloutProps) {
    const palette: Record<string, string> = {
        info: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
        success:
            'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
        warning:
            'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
        error: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
    };
    const icon: Record<string, string> = {
        info: 'ℹ️',
        success: '✅',
        warning: '⚠️',
        error: '⛔',
    };

    return (
        <div className={`my-6 rounded-2xl border p-4 sm:p-5 ${palette[type]}`}>
            <div className="flex gap-3">
                <div className="text-xl leading-none pt-0.5" aria-hidden>
                    {icon[type]}
                </div>
                <div className="min-w-0">
                    {title ? (
                        <div className="mb-1 font-semibold text-gray-900 dark:text-white">
                            {title}
                        </div>
                    ) : null}
                    <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
