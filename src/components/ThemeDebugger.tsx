'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeDebugger() {
  const { theme, resolvedTheme, forcedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [htmlClass, setHtmlClass] = useState('');

  useEffect(() => {
    setMounted(true);

    // HTML 클래스 확인
    const checkHtmlClass = () => {
      const classList = document.documentElement.classList.toString();
      setHtmlClass(classList);
      console.log('=== THEME DEBUG ===');
      console.log('HTML classes:', classList);
      console.log('theme:', theme);
      console.log('resolvedTheme:', resolvedTheme);
      console.log('forcedTheme:', forcedTheme);
      console.log('systemTheme:', systemTheme);
      console.log('localStorage theme:', localStorage.getItem('theme'));
      console.log(
        'localStorage sn-blog-theme-v2:',
        localStorage.getItem('sn-blog-theme-v2')
      );
    };

    checkHtmlClass();

    // 1초마다 체크
    const interval = setInterval(checkHtmlClass, 1000);

    return () => clearInterval(interval);
  }, [theme, resolvedTheme, forcedTheme, systemTheme]);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs font-mono z-50 max-w-md">
      <div className="font-bold mb-2">🔍 Theme Debugger</div>
      <div>HTML: {htmlClass || 'none'}</div>
      <div>theme: {theme}</div>
      <div>resolvedTheme: {resolvedTheme}</div>
      <div>forcedTheme: {forcedTheme || 'none'}</div>
      <div>systemTheme: {systemTheme || 'none'}</div>
    </div>
  );
}
