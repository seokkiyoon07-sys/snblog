import { allPosts } from '@/data/posts';
import { BASE_URL } from '@/lib/config';

export async function GET() {
    const posts = allPosts
        .filter((post) => post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SN독학기숙학원 공식 블로그</title>
    <link>${BASE_URL}</link>
    <description>SN독학기숙학원의 입시, 학습, 생활 정보를 전해드립니다.</description>
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
            .map((post) => {
                return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}${post.url}</link>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${BASE_URL}${post.url}</guid>
    </item>`;
            })
            .join('')}
  </channel>
</rss>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'text/xml; charset=utf-8',
            'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
        },
    });
}
