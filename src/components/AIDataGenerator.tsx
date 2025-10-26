import Script from 'next/script';

interface AIDataProps {
  content: {
    title: string;
    description: string;
    author: string;
    category: string;
    tags: string[];
    content: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    subject: string;
    learningObjectives: string[];
    keyConcepts?: string[];
    practicalApplications?: string[];
    targetAudience?: string;
    estimatedReadingTime?: string;
    prerequisites?: string;
    relatedTopics?: string[];
  };
}

export default function AIDataGenerator({ content }: AIDataProps) {
  const generateAIData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'EducationalContent',
      name: content.title,
      description: content.description,
      author: {
        '@type': 'Person',
        name: content.author,
      },
      about: {
        '@type': 'Thing',
        name: content.subject,
      },
      educationalLevel: content.difficulty,
      learningResourceType: 'Article',
      educationalUse: 'instruction',
      teaches: content.learningObjectives,
      keywords: content.tags.join(', '),
      inLanguage: 'ko',
      isPartOf: {
        '@type': 'Course',
        name: 'SN Academy 교육 콘텐츠',
      },
      provider: {
        '@type': 'Organization',
        name: 'SN Academy',
        url: 'https://blog.snacademy.co.kr',
      },
      dateCreated: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      text: content.content,
      mentions: content.tags.map(tag => ({
        '@type': 'Thing',
        name: tag,
      })),
      // 추가된 AI 학습 데이터
      ...(content.keyConcepts && {
        keyConcepts: content.keyConcepts.map(concept => ({
          '@type': 'Thing',
          name: concept,
        })),
      }),
      ...(content.practicalApplications && {
        practicalApplications: content.practicalApplications,
      }),
      ...(content.targetAudience && {
        audience: {
          '@type': 'EducationalAudience',
          educationalRole: content.targetAudience,
        },
      }),
      ...(content.estimatedReadingTime && {
        timeRequired: `PT${content.estimatedReadingTime}M`,
      }),
      ...(content.prerequisites && {
        prerequisites: content.prerequisites,
      }),
      ...(content.relatedTopics && {
        relatedTopics: content.relatedTopics.map(topic => ({
          '@type': 'Thing',
          name: topic,
        })),
      }),
    };
  };

  return (
    <Script
      id="ai-learning-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateAIData(), null, 2),
      }}
    />
  );
}
