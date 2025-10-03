import BlogEditor from '@/components/BlogEditor';

export const metadata = {
  title: '블로그 에디터 - SN Academy Blog',
  description: '블로그 글을 작성하고 미리보기할 수 있는 에디터입니다.',
};

export default function BlogEditorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            📝 블로그 에디터
          </h1>
          <BlogEditor />
        </div>
      </div>
    </div>
  );
}
