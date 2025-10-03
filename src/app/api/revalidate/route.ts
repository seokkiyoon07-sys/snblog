import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  // 보안을 위해 시크릿 키 확인
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    // SNarlink 페이지 캐시 무효화
    revalidatePath('/columns/SNarlink')
    
    // 전체 originals 페이지들도 무효화
    revalidatePath('/originals')
    revalidatePath('/originals/gapminga')
    revalidatePath('/originals/hwangokga')
    revalidatePath('/originals/bukcheonga')
    revalidatePath('/originals/gwandong-byeolgok')
    revalidatePath('/originals/samieungok')
    revalidatePath('/originals/sokmieungok')
    
    // 메인 페이지도 무효화
    revalidatePath('/')
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      paths: [
        '/columns/SNarlink',
        '/originals',
        '/originals/gapminga',
        '/originals/hwangokga', 
        '/originals/bukcheonga',
        '/originals/gwandong-byeolgok',
        '/originals/samieungok',
        '/originals/sokmieungok',
        '/'
      ]
    })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
