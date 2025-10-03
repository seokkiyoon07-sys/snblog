import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  // Check for secret to confirm this is a valid request
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    // Revalidate specific paths
    revalidatePath('/columns/SNarlink')
    revalidatePath('/startup/ai-startup')
    revalidatePath('/originals/sn-originals-intro')
    
    // Revalidate tags for more granular cache control
    revalidateTag('snarlink')
    revalidateTag('columns')
    revalidateTag('pages')
    revalidateTag('startup')
    revalidateTag('originals')
    revalidateTag('cache-bust-v2') // 새로운 캐시 버스팅 태그
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      paths: ['/columns/SNarlink', '/startup/ai-startup', '/originals/sn-originals-intro'],
      tags: ['snarlink', 'columns', 'pages', 'startup', 'originals']
    })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}