import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/lib/query-client';
import { Post } from '@/types';

// API 함수들
const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('/api/posts', {
    next: { revalidate: 60, tags: ['posts'] },
  });
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

const fetchPostById = async (id: string): Promise<Post> => {
  const response = await fetch(`/api/posts/${id}`, {
    next: { revalidate: 60, tags: ['posts', `post:${id}`] },
  });
  if (!response.ok) throw new Error('Failed to fetch post');
  return response.json();
};

const fetchPostsByCategory = async (category: string): Promise<Post[]> => {
  const response = await fetch(`/api/posts/category/${category}`, {
    next: { revalidate: 60, tags: ['posts', `category:${category}`] },
  });
  if (!response.ok) throw new Error('Failed to fetch posts by category');
  return response.json();
};

const fetchFeaturedPosts = async (): Promise<Post[]> => {
  const response = await fetch('/api/posts/featured', {
    next: { revalidate: 60, tags: ['posts', 'featured'] },
  });
  if (!response.ok) throw new Error('Failed to fetch featured posts');
  return response.json();
};

const searchPosts = async (query: string): Promise<Post[]> => {
  const response = await fetch(
    `/api/posts/search?q=${encodeURIComponent(query)}`,
    {
      next: { revalidate: 60, tags: ['posts', 'search'] },
    }
  );
  if (!response.ok) throw new Error('Failed to search posts');
  return response.json();
};

// Custom Hooks
export const usePosts = () => {
  return useQuery({
    queryKey: queryKeys.posts.lists(),
    queryFn: fetchPosts,
  });
};

export const usePost = (id: string) => {
  return useQuery({
    queryKey: queryKeys.posts.detail(id),
    queryFn: () => fetchPostById(id),
    enabled: !!id,
  });
};

export const usePostsByCategory = (category: string) => {
  return useQuery({
    queryKey: queryKeys.posts.byCategory(category),
    queryFn: () => fetchPostsByCategory(category),
    enabled: !!category,
  });
};

export const useFeaturedPosts = () => {
  return useQuery({
    queryKey: queryKeys.posts.featured(),
    queryFn: fetchFeaturedPosts,
  });
};

export const useSearchPosts = (query: string) => {
  return useQuery({
    queryKey: queryKeys.posts.search(query),
    queryFn: () => searchPosts(query),
    enabled: !!query && query.length > 0,
  });
};
