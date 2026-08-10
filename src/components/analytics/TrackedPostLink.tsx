'use client';

import Link, { type LinkProps } from 'next/link';
import { track } from '@vercel/analytics';
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
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    track('Post Click', {
      postId: postId.slice(0, 255),
      placement: placement.slice(0, 255),
    });
    onClick?.(event);
  };

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
