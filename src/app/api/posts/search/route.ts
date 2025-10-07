import { NextRequest, NextResponse } from 'next/server';
import { searchPosts } from '@/data/posts';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      );
    }

    const posts = await searchPosts(query);
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error searching posts:', error);
    return NextResponse.json(
      { error: 'Failed to search posts' },
      { status: 500 }
    );
  }
}
