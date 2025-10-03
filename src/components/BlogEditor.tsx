'use client';

import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Tag, Eye, Save, Download } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  thumbnail?: string;
}

const defaultPost: BlogPost = {
  id: '',
  title: '',
  excerpt: '',
  content: `# 새 블로그 글

여기에 내용을 작성하세요...

## 소제목

- 목록 항목 1
- 목록 항목 2

\`\`\`javascript
// 코드 예시
console.log('Hello, World!');
\`\`\`

> 인용문 예시

**굵은 글씨**와 *기울임 글씨*를 사용할 수 있습니다.`,
  category: 'originals',
  tags: [],
  author: 'SN Academy',
  date: new Date().toISOString().split('T')[0],
  readTime: '5',
  featured: false,
  thumbnail: ''
};

const categories = [
  { value: 'originals', label: 'SN Originals' },
  { value: 'startup', label: 'AI 스타트업' },
  { value: 'columns', label: '컬럼' },
  { value: 'problems', label: '문제 다운로드' },
  { value: 'reviews', label: '후기' },
  { value: 'admissions', label: '입시정보' }
];

export default function BlogEditor() {
  const [post, setPost] = useState<BlogPost>(defaultPost);
  const [tagInput, setTagInput] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // 단어 수 계산
  useEffect(() => {
    const words = post.content.replace(/[#*`\s\n]/g, ' ').split(' ').filter(word => word.length > 0);
    setWordCount(words.length);
  }, [post.content]);

  // 태그 추가
  const addTag = () => {
    if (tagInput.trim() && !post.tags.includes(tagInput.trim())) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  // 태그 제거
  const removeTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  // 포스트 저장 (로컬 스토리지)
  const savePost = () => {
    const posts = JSON.parse(localStorage.getItem('draftPosts') || '[]');
    const existingIndex = posts.findIndex((p: BlogPost) => p.id === post.id);
    
    if (existingIndex >= 0) {
      posts[existingIndex] = post;
    } else {
      posts.push({ ...post, id: post.id || `draft-${Date.now()}` });
    }
    
    localStorage.setItem('draftPosts', JSON.stringify(posts));
    alert('임시 저장되었습니다!');
  };

  // 포스트 로드
  const loadPost = (draftPost: BlogPost) => {
    setPost(draftPost);
  };

  // 임시 저장된 포스트들 가져오기
  const getDraftPosts = () => {
    return JSON.parse(localStorage.getItem('draftPosts') || '[]');
  };

  // 포스트 내보내기 (JSON)
  const exportPost = () => {
    const dataStr = JSON.stringify(post, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${post.title || 'untitled'}-${post.id}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 에디터 패널 */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              포스트 정보
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">제목</Label>
              <Input
                id="title"
                value={post.title}
                onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
                placeholder="블로그 제목을 입력하세요"
              />
            </div>
            
            <div>
              <Label htmlFor="excerpt">요약</Label>
              <Textarea
                id="excerpt"
                value={post.excerpt}
                onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="글의 요약을 입력하세요"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">카테고리</Label>
                <Select value={post.category} onValueChange={(value) => setPost(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="readTime">읽기 시간 (분)</Label>
                <Input
                  id="readTime"
                  type="number"
                  value={post.readTime}
                  onChange={(e) => setPost(prev => ({ ...prev, readTime: e.target.value }))}
                  min="1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="thumbnail">썸네일 URL</Label>
              <Input
                id="thumbnail"
                value={post.thumbnail || ''}
                onChange={(e) => setPost(prev => ({ ...prev, thumbnail: e.target.value }))}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <Label>태그</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="태그 입력"
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                />
                <Button onClick={addTag} size="sm">추가</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                    {tag} ×
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={post.featured}
                  onChange={(e) => setPost(prev => ({ ...prev, featured: e.target.checked }))}
                />
                추천 글
              </label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                마크다운 에디터
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant={isPreviewMode ? "outline" : "default"}
                  size="sm"
                  onClick={() => setIsPreviewMode(!isPreviewMode)}
                >
                  <Eye className="h-4 w-4 mr-1" />
                  {isPreviewMode ? '편집' : '미리보기'}
                </Button>
                <Button onClick={savePost} size="sm" variant="outline">
                  <Save className="h-4 w-4 mr-1" />
                  저장
                </Button>
                <Button onClick={exportPost} size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-1" />
                  내보내기
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
              <span>단어 수: {wordCount}</span>
              <span>예상 읽기 시간: {Math.ceil(wordCount / 200)}분</span>
            </div>
            
            <div className="min-h-[500px]">
              <MDEditor
                value={post.content}
                onChange={(value) => setPost(prev => ({ ...prev, content: value || '' }))}
                data-color-mode="light"
                height={500}
                visibleDragBar={false}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 미리보기 패널 */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              실시간 미리보기
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <article className="bg-white rounded-lg shadow-sm border p-6">
                <header className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title || '제목을 입력하세요'}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span>{post.readTime} min read</span>
                  </div>

                  {post.excerpt && (
                    <p className="text-lg text-gray-700 mb-4">{post.excerpt}</p>
                  )}

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {post.thumbnail && (
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                </header>

                <div className="prose prose-lg max-w-none">
                  <MDEditor.Markdown source={post.content} />
                </div>
              </article>
            </div>
          </CardContent>
        </Card>

        {/* 임시 저장된 포스트들 */}
        <Card>
          <CardHeader>
            <CardTitle>임시 저장된 포스트</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {getDraftPosts().map((draft: BlogPost) => (
                <div key={draft.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{draft.title || '제목 없음'}</h4>
                    <p className="text-sm text-gray-600">{draft.date}</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => loadPost(draft)}
                  >
                    불러오기
                  </Button>
                </div>
              ))}
              {getDraftPosts().length === 0 && (
                <p className="text-gray-500 text-center py-4">임시 저장된 포스트가 없습니다.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
