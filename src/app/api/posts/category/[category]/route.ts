import { NextRequest, NextResponse } from 'next/server';
import { getPostsByCategory } from '@/data/posts';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  try {
    const { category } = await params;
    const posts = await getPostsByCategory(category);
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts by category' },
      { status: 500 }
    );
  }
}
