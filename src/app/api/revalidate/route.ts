import { revalidatePath } from 'next/cache'
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
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      paths: ['/columns/SNarlink', '/startup/ai-startup', '/originals/sn-originals-intro']
    })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}