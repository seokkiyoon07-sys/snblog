'use client';

// Re-export atomic components
export { default as Callout } from './ui/Callout';
export { default as CodeBlock } from './ui/CodeBlock';
export { default as TOC } from './ui/TOC';
export { default as YouTubeEmbed } from './ui/YouTubeEmbed';

import React from 'react';
import Image from 'next/image';

// Legacy components kept for backward compatibility if needed, 
// but recommended to migrate to atomic components or standard HTML/Tailwind.

// BlogImage 컴포넌트
interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

export function BlogImage({
  src,
  alt,
  caption,
  priority = false,
}: BlogImageProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full h-auto">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
          className="rounded-xl shadow-md mx-auto w-full h-auto object-contain"
          priority={priority}
          quality={85}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-gray-500 mt-2 text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Quote 컴포넌트
export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 my-6">
      {children}
    </blockquote>
  );
}

// Highlight 컴포넌트
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
      {children}
    </div>
  );
}

// Section 컴포넌트 (섹션 구분)
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
      {children}
    </section>
  );
}

// FeatureList 컴포넌트 (기능 리스트)
export function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-2 my-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

// Deprecated Box components - use Callout instead
// InfoBox 컴포넌트 (정보 박스)
export function InfoBox({ children }: { children: React.ReactNode }) {
  // Re-mapped to Callout for consistency
  const Callout = require('./ui/Callout').default;
  return <Callout type="info">{children}</Callout>;
}

// WarningBox 컴포넌트 (경고 박스)
export function WarningBox({ children }: { children: React.ReactNode }) {
  const Callout = require('./ui/Callout').default;
  return <Callout type="warning">{children}</Callout>;
}

// SuccessBox 컴포넌트 (성공 박스)
export function SuccessBox({ children }: { children: React.ReactNode }) {
  const Callout = require('./ui/Callout').default;
  return <Callout type="success">{children}</Callout>;
}
