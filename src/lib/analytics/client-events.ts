'use client';
import { track } from '@vercel/analytics';

export function recordAction(
  action: string,
  properties: Record<string, string | number> = {}
) {
  try {
    track('Content Action', { action, ...properties });
  } catch {
    /* Analytics must never interrupt navigation. */
  }
}

let activePath = '';
const sent = new Set<string>();
export function beginAnalyticsPage(path: string) {
  if (activePath !== path) {
    sent.clear();
    activePath = path;
  }
}
export function recommendationEvent(
  path: string,
  postId: string,
  placement: string,
  clicked = false
) {
  beginAnalyticsPage(path);
  const key = `${postId}:${placement}`;
  const emit = (event: string, suffix: string) => {
    if (sent.has(key + suffix)) return;
    sent.add(key + suffix);
    try {
      track(event, {
        postId: postId.slice(0, 255),
        placement: placement.slice(0, 255),
      });
    } catch {
      /* Non-blocking. */
    }
  };
  // A user click also proves exposure, even before the observer callback runs.
  emit('Recommendation Impression', ':view');
  if (clicked) emit('Recommendation Click', ':click');
}
