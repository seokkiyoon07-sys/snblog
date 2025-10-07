import Script from 'next/script';

interface StructuredDataProps {
  type: 'article' | 'organization' | 'website' | 'video';
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
            name: 'SN Academy',
          },
          publisher: {
            '@type': 'Organization',
            name: 'SN Academy',
            logo: {
              '@type': 'ImageObject',
              url: 'https://blog.snacademy.co.kr/images/sn-logo.png',
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
          name: 'SN Academy',
          description: '독학기숙학원의 명가 SN Academy',
          url: 'https://blog.snacademy.co.kr',
          logo: 'https://blog.snacademy.co.kr/images/sn-logo.png',
          sameAs: ['https://blog.snacademy.co.kr'],
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
            name: 'SN Academy',
          },
        };

      default:
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SN Academy Blog',
          description:
            'SN Academy의 교육 혁신, AI 스타트업, 독학기숙학원 정보를 제공합니다.',
          url: 'https://blog.snacademy.co.kr',
          potentialAction: {
            '@type': 'SearchAction',
            target:
              'https://blog.snacademy.co.kr/search?q={search_term_string}',
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
