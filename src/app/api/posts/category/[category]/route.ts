import { NextRequest, NextResponse } from 'next/server';
import { getPostsByCategory } from '@/lib/data/posts';

export async function GET(
    request: NextRequest,
    { params }: { params: { category: string } }
) {
    try {
        const posts = await getPostsByCategory(params.category);
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts by category:', error);
        return NextResponse.json(
            { error: 'Failed to fetch posts by category' },
            { status: 500 }
        );
    }
}
