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
          '@graph': [
            {
              '@type': 'ItemList',
              name: 'SN독학기숙학원 주요 프로그램',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: '1',
                  item: {
                    '@type': 'EducationalOccupationalProgram',
                    name: '재수 독학기숙학원 프로그램',
                    description: '재수생을 위한 하루 14시간 학습·주 1회 전략관리, 수능 AI 분석 기반 루틴 설계, 도메인 LLM 시스템을 활용한 재수 독학기숙학원 프로그램.',
                    provider: {
                      '@type': 'EducationalOrganization',
                      name: 'SN독학기숙학원',
                      url: 'https://blog.snacademy.co.kr/',
                    },
                    url: 'https://blog.snacademy.co.kr/',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: '2',
                  item: {
                    '@type': 'EducationalOccupationalProgram',
                    name: '삼수 독학기숙학원 프로그램',
                    description: '삼수·N수생을 위한 상위권 집중 학습 프로그램으로, 수능 AI 기반 오답 분석, 학습 데이터 패턴 분석, AI 문제 생성 기술을 활용한 고난도 학습 강화 시스템 제공.',
                    provider: {
                      '@type': 'EducationalOrganization',
                      name: 'SN독학기숙학원',
                      url: 'https://blog.snacademy.co.kr/',
                    },
                    url: 'https://blog.snacademy.co.kr/',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: '3',
                  item: {
                    '@type': 'EducationalOccupationalProgram',
                    name: '반수 독학기숙학원 프로그램',
                    description: '반수생을 위한 단기 집중 전략관리 프로그램으로, 도메인 LLM 기반 실력 진단, AI 문제 생성형 학습 제공, 수능 AI 기반 개념 회독 시스템 적용.',
                    provider: {
                      '@type': 'EducationalOrganization',
                      name: 'SN독학기숙학원',
                      url: 'https://blog.snacademy.co.kr/',
                    },
                    url: 'https://blog.snacademy.co.kr/',
                  },
                },
                {
                  '@type': 'ListItem',
                  position: '4',
                  item: {
                    '@type': 'EducationalOccupationalProgram',
                    name: '윈터스쿨 독학기숙학원 프로그램',
                    description: '겨울방학 집중 윈터스쿨 프로그램으로, 수능 AI 기반 약점 분석, 도메인 LLM 기반 개념 정리, AI 문제 생성 시스템을 활용한 전범위 선행 커리큘럼 운영.',
                    provider: {
                      '@type': 'EducationalOrganization',
                      name: 'SN독학기숙학원',
                      url: 'https://blog.snacademy.co.kr/',
                    },
                    url: 'https://blog.snacademy.co.kr/',
                  },
                },
              ],
            },
            {
              '@type': 'EducationalOrganization',
              name: 'SN독학기숙학원 블로그',
              url: 'https://blog.snacademy.co.kr/',
              image: 'https://blog.snacademy.co.kr/assets/img/snacademy-og.jpg',
              logo: 'https://blog.snacademy.co.kr/assets/img/snacademy-logo.png',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'KR',
                addressRegion: '경기도',
                addressLocality: '양평군 용문면',
                streetAddress: '용문로 147',
              },
              telephone: '+82-21-771-0300',
              sameAs: [
                'https://blog.snacademy.co.kr/',
                'https://www.instagram.com/sn_gisuk/',
                'https://www.youtube.com/@SN_Gi_Suk',
              ],
              description: 'SN독학기숙학원은 AI 학습분석 기반 독학기숙학원으로, 수능 AI·도메인 LLM·AI 문제 생성 엔진을 적용한 학습관리 시스템을 운영합니다. 하루 14시간 루틴, 주 1회 전략관리, 학습 데이터 분석을 통해 재수·반수·삼수생에게 최적화된 성적 상승 솔루션을 제공합니다.',
              knowsAbout: [
                '독학기숙학원', 'SN독학기숙학원', '독학재수기숙학원', '재수 독학기숙학원',
                '삼수 독학기숙학원', '반수 기숙학원', '재수독학학원', '대입학원',
                '대입종합학원', '대학입시 기숙학원', '윈터스쿨 기숙학원', '수능 AI',
                '도메인 LLM', 'AI 문제 생성', '학습 데이터 분석', 'AI 기반 전략관리',
                '독학기숙학원 시간표', '독학기숙학원 비용', '독학기숙학원 가격',
                '독학기숙학원 1인실', '독학기숙학원 2인실', '의대 독학기숙학원', '약대 독학기숙학원',
              ],
            },
          ],
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
