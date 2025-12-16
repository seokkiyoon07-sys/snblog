'use client';

import React, { useState } from 'react';

interface CodeBlockProps {
    language?: string;
    children: React.ReactNode;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);
    const codeContent = React.isValidElement(children)
        ? String((children as any).props.children).replace(/\n$/, '')
        : String(children).replace(/\n$/, '');

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(codeContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <div className="relative my-6 group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase">
                    {language || 'text'}
                </span>
                <button
                    onClick={handleCopy}
                    className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    aria-label="Copy code"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            {/* Code */}
            <div className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                {children}
            </div>
        </div>
    );
}
