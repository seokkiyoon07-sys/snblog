import { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { getPostById } from '@/data/posts';

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    return {
      title: 'Post Not Found | SN Academy Blog',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: post.url,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return [];
}

export default async function LegacyPostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  permanentRedirect(post.url);
}
