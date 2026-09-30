import { BASE_URL, EXTERNAL_URLS } from '@/lib/config';
import {
  KOREAN_HISTORY_PATH,
  KOREAN_HISTORY_TITLE,
  type KoreanHistoryEpisode,
} from '@/data/korean-history';

export function koreanHistoryBreadcrumbs(episode?: KoreanHistoryEpisode) {
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
        name: KOREAN_HISTORY_TITLE,
        item: `${BASE_URL}${KOREAN_HISTORY_PATH}`,
      },
      ...(episode
        ? [
            {
              '@type': 'ListItem',
              position: 3,
              name: episode.title,
              item: `${BASE_URL}${episode.url}`,
            },
          ]
        : []),
    ],
  };
}

export function koreanHistoryVideoSchema(episode: KoreanHistoryEpisode) {
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
      '@id': `${BASE_URL}${KOREAN_HISTORY_PATH}#series`,
      name: KOREAN_HISTORY_TITLE,
      url: `${BASE_URL}${KOREAN_HISTORY_PATH}`,
    },
  };
}
