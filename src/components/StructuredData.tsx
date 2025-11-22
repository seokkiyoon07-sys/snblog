import Script from 'next/script';
import { BASE_URL, ORGANIZATION_INFO } from '@/lib/config';

interface StructuredDataProps {
  type: 'article' | 'organization' | 'website' | 'video';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.description,
          author: {
            '@type': 'Organization',
            name: ORGANIZATION_INFO.name,
          },
          publisher: {
            '@type': 'Organization',
            name: ORGANIZATION_INFO.name,
            logo: {
              '@type': 'ImageObject',
              url: ORGANIZATION_INFO.logo,
            },
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
          },
          image: data.image,
          keywords: data.keywords,
        };

      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: ORGANIZATION_INFO.name,
          description: '독학기숙학원의 명가 SN Academy',
          url: BASE_URL,
          logo: ORGANIZATION_INFO.logo,
          sameAs: [BASE_URL],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'KR',
          },
        };

      case 'video':
        return {
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: data.title,
          description: data.description,
          thumbnailUrl: data.thumbnailUrl,
          uploadDate: data.uploadDate,
          duration: data.duration,
          embedUrl: data.embedUrl,
          publisher: {
            '@type': 'Organization',
            name: ORGANIZATION_INFO.name,
          },
        };

      default:
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SN Academy Blog',
          description:
            'SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다.',
          url: BASE_URL,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${BASE_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        };
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
}
