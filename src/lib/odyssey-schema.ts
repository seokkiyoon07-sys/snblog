import { BASE_URL, EXTERNAL_URLS } from '@/lib/config';
import { ODYSSEY_PATH, type OdysseyEpisode } from '@/data/odyssey';

export function odysseyVideoSchema(episode: OdysseyEpisode) {
  return {
    '@type': 'VideoObject',
    '@id': `${BASE_URL}${episode.url}#video`,
    name: episode.videoTitle,
    description: episode.summary,
    thumbnailUrl: [`${BASE_URL}${episode.thumbnail}`],
    uploadDate: episode.uploadDate,
    duration: `PT${episode.durationSeconds}S`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${episode.videoId}`,
    url: `${BASE_URL}${episode.url}`,
    inLanguage: 'ko',
    creator: {
      '@type': 'Organization',
      name: 'SN History',
      url: EXTERNAL_URLS.HISTORY_YOUTUBE,
    },
    isPartOf: {
      '@type': 'CreativeWorkSeries',
      '@id': `${BASE_URL}${ODYSSEY_PATH}#series`,
      name: 'SN History 오디세이아 24부작',
      url: `${BASE_URL}${ODYSSEY_PATH}`,
    },
  };
}

export function odysseyBreadcrumbs(episode?: OdysseyEpisode) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'SN History',
        item: `${BASE_URL}/history`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '오디세이아',
        item: `${BASE_URL}${ODYSSEY_PATH}`,
      },
      ...(episode
        ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: `${episode.episode}부 · ${episode.topic}`,
              item: `${BASE_URL}${episode.url}`,
            },
          ]
        : []),
    ],
  };
}
