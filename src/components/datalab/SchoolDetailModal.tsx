'use client';

import { useEffect, useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface ModalHeroImage {
  src: string;
  alt: string;
}

interface SchoolDetailModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  badges?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  size?: 'md' | 'lg';
  highlighted?: boolean;
  heroImage?: ModalHeroImage;
}

export default function SchoolDetailModal({
  open,
  onClose,
  title,
  badges,
  subtitle,
  children,
  size = 'lg',
  highlighted = false,
  heroImage,
}: SchoolDetailModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocusedElement =
      document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [onClose, open]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/65 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[88dvh] sm:rounded-2xl dark:bg-slate-900 ${
          size === 'md' ? 'sm:max-w-md' : 'sm:max-w-2xl'
        }`}
      >
        <header
          className={`shrink-0 border-b px-5 py-4 pr-16 sm:px-6 ${
            highlighted
              ? 'border-emerald-200 bg-gradient-to-r from-emerald-100 to-teal-50 dark:border-emerald-800 dark:from-emerald-950 dark:to-teal-950/70'
              : 'border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50 dark:border-slate-700 dark:from-slate-900 dark:to-blue-950/50'
          }`}
        >
          {badges && <div className="mb-2 flex flex-wrap gap-2">{badges}</div>}
          <h3
            id={titleId}
            className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl"
          >
            {title}
          </h3>
          {subtitle && (
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {subtitle}
            </div>
          )}
        </header>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={`${title} 상세정보 닫기`}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-slate-500 shadow-sm transition hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800/90 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {heroImage && (
          <figure className="relative h-44 shrink-0 overflow-hidden border-b border-slate-200 sm:h-56 dark:border-slate-700">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes={
                size === 'md'
                  ? '(max-width: 640px) 100vw, 448px'
                  : '(max-width: 640px) 100vw, 672px'
              }
              className="object-cover object-center"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-slate-950/65 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              SN독학기숙학원 전경
            </figcaption>
          </figure>
        )}

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-6">
          {children}
        </div>
      </section>
    </div>,
    document.body
  );
}
