'use client';

import React from 'react';
import CalloutInternal from './ui/Callout';

// Re-export atomic components from ui folder
export { default as Callout } from './ui/Callout';
export { default as CodeBlock } from './ui/CodeBlock';
export { default as TOC } from './ui/TOC';
export { default as YouTubeEmbed } from './ui/YouTubeEmbed';
export { default as Quote } from './ui/Quote';
export { default as Highlight } from './ui/Highlight';
export { default as Section } from './ui/Section';
export { default as FeatureList } from './ui/FeatureList';
export { default as BlogImage } from './BlogImage';

// Deprecated Box components - re-mapped to Callout for backward compatibility
// These should be migrated to <Callout> in the consuming files.

/** @deprecated Use Callout type="info" instead */
export function InfoBox({ children }: { children: React.ReactNode }) {
  return <CalloutInternal type="info">{children}</CalloutInternal>;
}

/** @deprecated Use Callout type="warning" instead */
export function WarningBox({ children }: { children: React.ReactNode }) {
  return <CalloutInternal type="warning">{children}</CalloutInternal>;
}

/** @deprecated Use Callout type="success" instead */
export function SuccessBox({ children }: { children: React.ReactNode }) {
  return <CalloutInternal type="success">{children}</CalloutInternal>;
}
