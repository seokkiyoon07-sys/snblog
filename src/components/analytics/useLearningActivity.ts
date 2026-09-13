'use client';
import { useEffect, useRef } from 'react';
import { recordAction } from '@/lib/analytics/client-events';

export function useLearningActivity(
  subject: 'science' | 'social',
  question: number,
  section: number
) {
  const seen = useRef(new Set<string>());
  useEffect(() => {
    const key = `${subject}:${question}:${section}`;
    if (seen.current.has(key)) return;
    seen.current.add(key);
    recordAction(`${subject}:${section}`, { question });
  }, [subject, question, section]);
}
