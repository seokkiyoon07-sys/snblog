import type { Post } from '@/data/posts';
import { loadPostContent } from '@/lib/post-content';

// Read on the server so editing the timeline also updates cards during development.
export function withLatestUpdate(post: Post): Post {
  if (post.id !== 'snargpt-development-2026') return post;
  const content = loadPostContent(post.id, post.category);
  const entries = Array.from(
    content.matchAll(
      /<time datetime="(\d{4}-\d{2}-\d{2})">[^<]*<\/time><div class="sn-update-card"><h3>[^<]+<\/h3><p class="sn-update-brief">([^<]+)<\/p>/g
    ),
    match => ({ date: match[1], summary: match[2] })
  ).sort((a, b) => b.date.localeCompare(a.date));
  return entries[0] ? { ...post, latestUpdate: entries[0] } : post;
}
