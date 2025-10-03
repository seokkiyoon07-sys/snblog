import { notFound } from 'next/navigation';
import { getPostById, allPosts } from '@/data/posts';
import { Metadata } from 'next';

interface PostPageProps {
  params: {
    id: string;
  };
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPostById(params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found | SN Academy Blog',
    };
  }

  return {
    title: `${post.title} | SN Academy Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'ko_KR',
      url: `https://blog.snacademy.co.kr/posts/${post.id}`,
      images: post.thumbnail ? [
        {
          url: post.thumbnail,
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

// 정적 경로 생성 (SSG)
export async function generateStaticParams() {
  return allPosts
    .filter(post => post.published)
    .map((post) => ({
      id: post.id,
    }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 space-x-2">
            <span className="text-sm font-medium">{post.category}</span>
            <span className="text-sm">•</span>
            <span className="text-sm">{post.date}</span>
            <span className="text-sm">•</span>
            <span className="text-sm">{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* YouTube 비디오가 있는 경우 */}
        {post.youtubeUrl && (
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src={post.youtubeUrl.replace('watch?v=', 'embed/')}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}

        {/* 썸네일이 있는 경우 */}
        {post.thumbnail && !post.youtubeUrl && (
          <div className="w-full h-64 mb-8 overflow-hidden rounded-lg">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 요약 */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p className="text-lg text-blue-900 font-medium mb-2">
            📚 {post.category}
          </p>
          <p className="text-blue-800">
            {post.excerpt}
          </p>
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 콘텐츠 */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            이 글은 동적 시스템을 통해 자동으로 생성된 페이지입니다. 
            새로운 글을 추가하면 자동으로 이 페이지가 생성되고 사이트맵에도 포함됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
