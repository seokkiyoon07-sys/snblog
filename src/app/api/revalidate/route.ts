import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  // Check for secret to confirm this is a valid request
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { type, data } = body;

    // Get current build SHA
    const BUILD = process.env.VERCEL_GIT_COMMIT_SHA || 'local-dev';

    let revalidatedPaths: string[] = [];
    let revalidatedTags: string[] = [];

    switch (type) {
      case 'post':
        // 특정 포스트 업데이트
        const postId = data.id;
        const category = data.category;

        revalidatePath(`/${category}/${postId}`);
        revalidatePath(`/posts/${postId}`);
        revalidatePath('/'); // 홈페이지도 재검증
        revalidatePath(`/${category}`); // 카테고리 페이지도 재검증

        revalidatedPaths = [
          `/${category}/${postId}`,
          `/posts/${postId}`,
          '/',
          `/${category}`,
        ];
        revalidatedTags = [
          'posts',
          `post:${postId}`,
          `category:${category}`,
          'homepage',
        ];
        break;

      case 'category':
        // 카테고리 전체 업데이트
        const categoryName = data.category;
        revalidatePath(`/${categoryName}`);
        revalidatePath('/');

        revalidatedPaths = [`/${categoryName}`, '/'];
        revalidatedTags = ['posts', `category:${categoryName}`, 'homepage'];
        break;

      case 'all':
        // 전체 재검증
        revalidatePath('/', 'layout');
        revalidatedPaths = ['/'];
        revalidatedTags = ['posts', 'homepage', 'all'];
        break;

      default:
        // 기본: 주요 페이지들만 재검증
        revalidatePath('/');
        revalidatePath('/columns');
        revalidatePath('/startup');
        revalidatePath('/originals');

        revalidatedPaths = ['/', '/columns', '/startup', '/originals'];
        revalidatedTags = [
          'posts',
          'homepage',
          'columns',
          'startup',
          'originals',
        ];
    }

    // 공통 태그들 재검증
    revalidatedTags.push(`build:${BUILD}`);
    // @ts-expect-error - Next.js 16 type definition mismatch
    revalidatedTags.forEach(tag => revalidateTag(tag));

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      buildSha: BUILD,
      type,
      paths: revalidatedPaths,
      tags: revalidatedTags,
    });
  } catch (err) {
    console.error('Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    );
  }
}
