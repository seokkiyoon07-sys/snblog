import { BASE_URL } from '@/lib/config';
import { odysseyEpisodes } from '@/data/odyssey';

export const dynamic = 'force-static';

function xml(value: string) {
  return value.replace(
    /[<>&"']/g,
    char =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
      })[char]!
  );
}

export function GET() {
  const entries = odysseyEpisodes
    .map(
      episode => `
  <url>
    <loc>${xml(`${BASE_URL}${episode.url}`)}</loc>
    <video:video>
      <video:thumbnail_loc>${xml(`${BASE_URL}${episode.thumbnail}`)}</video:thumbnail_loc>
      <video:title>${xml(episode.videoTitle)}</video:title>
      <video:description>${xml(episode.summary)}</video:description>
      <video:player_loc>${xml(`https://www.youtube-nocookie.com/embed/${episode.videoId}`)}</video:player_loc>
      <video:duration>${episode.durationSeconds}</video:duration>
      <video:publication_date>${episode.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>`
    )
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${entries}
</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
