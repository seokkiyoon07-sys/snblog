'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  beginAnalyticsPage,
  recordAction,
} from '@/lib/analytics/client-events';

export default function ContentActivityTracker() {
  const pathname = usePathname();
  useEffect(() => {
    beginAnalyticsPage(pathname);
    if (pathname.startsWith('/admin')) return;
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const url = new URL(link.href, window.location.origin);
      // Record only the source path, never query strings or arbitrary link text.
      if (
        link.hasAttribute('download') ||
        (url.origin === window.location.origin &&
          /\.(pdf|zip|hwp|hwpx)$/i.test(url.pathname))
      ) {
        recordAction('download', { path: pathname.slice(0, 255) });
      }
      if (
        url.hostname === 'snargen.com' ||
        url.hostname.endsWith('.snargen.com')
      )
        recordAction('snargen', { path: pathname.slice(0, 255) });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [pathname]);
  return null;
}
