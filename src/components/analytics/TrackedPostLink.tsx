'use client';

import Link, { type LinkProps } from 'next/link';
import { track } from '@vercel/analytics';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { recommendationEvent } from '@/lib/analytics/client-events';
import type {
  AnchorHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from 'react';

type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'onClick'
>;

interface TrackedPostLinkProps extends LinkProps, AnchorProps {
  children: ReactNode;
  postId: string;
  placement: string;
  onClick?: (event: ReactMouseEvent<HTMLAnchorElement>) => void;
}

export default function TrackedPostLink({
  children,
  postId,
  placement,
  onClick,
  ...props
}: TrackedPostLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const recommended = [
    'home_featured',
    'featured_post',
    'sidebar_popular',
  ].includes(placement);
  useEffect(() => {
    if (
      !recommended ||
      !ref.current ||
      typeof IntersectionObserver === 'undefined'
    )
      return;
    const observer = new IntersectionObserver(
      entries => {
        if (
          entries.some(
            entry => entry.isIntersecting && entry.intersectionRatio >= 0.5
          ) &&
          document.visibilityState === 'visible'
        ) {
          recommendationEvent(pathname, postId, placement);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    const resume = () => {
      if (document.visibilityState === 'visible' && ref.current) {
        observer.unobserve(ref.current);
        observer.observe(ref.current);
      }
    };
    document.addEventListener('visibilitychange', resume);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', resume);
    };
  }, [pathname, postId, placement, recommended]);
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (recommended) recommendationEvent(pathname, postId, placement, true);
    try {
      track('Post Click', {
        postId: postId.slice(0, 255),
        placement: placement.slice(0, 255),
      });
    } catch {
      /* Keep links usable if analytics is unavailable. */
    }
  };

  return (
    <Link {...props} ref={ref} onClick={handleClick}>
      {children}
    </Link>
  );
}
