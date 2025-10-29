import { ReactNode } from 'react';
import SuneungNotice from './SuneungNotice';

interface BlogLayoutProps {
  post: {
    id: string;
    title: string;
    content: string;
    type?: 'standard' | 'special';
  };
}

export default function BlogLayout({ post }: BlogLayoutProps) {
  // 특별한 컴포넌트가 필요한 경우
  if (post.type === 'special' && post.content === 'special-component') {
    if (post.id === '251113suneungnotice') {
      return <SuneungNotice />;
    }
  }

  // 기본 마크다운 렌더링
  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
