'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface ToggleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Toggle({
  title,
  children,
  defaultOpen = false,
}: ToggleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
      >
        <ChevronRight
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
        />
        <span className="font-medium text-gray-900 dark:text-white">
          {title}
        </span>
      </button>
      {isOpen && (
        <div className="p-4 text-sm lg:text-base text-gray-700 dark:text-gray-300">
          {children}
        </div>
      )}
    </div>
  );
}
