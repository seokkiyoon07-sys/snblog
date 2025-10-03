import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SN Originals 고전문학 시리즈를 소개합니다 | SN Academy Blog',
  description: '최재천 선생님의 "알면 사랑한다"는 말처럼, 고전문학도 충분히 알아가는 과정이 필요합니다. SN Originals는 AI 기술을 활용해 고전문학을 만화영화처럼 재미있게 접할 수 있도록 도와드립니다.',
  keywords: 'SN Originals, 고전문학, AI교육, 수능국어, 고전문학학습, SN Academy',
  openGraph: {
    title: 'SN Originals 고전문학 시리즈를 소개합니다',
    description: '최재천 선생님의 "알면 사랑한다"는 말처럼, 고전문학도 충분히 알아가는 과정이 필요합니다. SN Originals는 AI 기술을 활용해 고전문학을 만화영화처럼 재미있게 접할 수 있도록 도와드립니다.',
    type: 'article',
    url: 'https://blog.snacademy.co.kr/originals/intro',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center',
        width: 800,
        height: 400,
        alt: 'SN Originals 고전문학 시리즈 소개',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SN Originals 고전문학 시리즈를 소개합니다',
    description: '최재천 선생님의 "알면 사랑한다"는 말처럼, 고전문학도 충분히 알아가는 과정이 필요합니다.',
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center'],
  },
}

export default function SNOriginalsIntroPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            SN Originals 고전문학 시리즈를 소개합니다
          </h1>
          <div className="flex items-center text-gray-600 space-x-2">
            <span className="text-sm font-medium">SN Originals</span>
            <span className="text-sm">•</span>
            <span className="text-sm">2024년 10월 3일</span>
            <span className="text-sm">•</span>
            <span className="text-sm">8 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            이 시대의 석학 최재천 선생님께서 자주 하시는 말씀 중에서, <strong>'알면 사랑한다'</strong>는 말이 있습니다.
            꽤 직관적으로 이해할 수 있는 말인 저 말은, 무언가에 대해 더 많이 알게 될수록 그것을 더 아끼고 좋아하게 될 수밖에 없다는 뜻입니다. 
            그만큼 무엇이든 충분히 알아가는 과정이 필요하다는 뜻이 되기도 하구요.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            여러분들께서는 수능시험을 준비함에 있어서 '알기 어려운 것'을 꼽아보라면 어떤 것들을 꼽으실 건가요? 
            미적분? 유전자 발현과 조절? 맞습니다. 이런 개념들은 단어부터 생소하고, 저 단어에 숨은 뜻을 충분히 배우고 익히느라 한 달 이상의 시간을 쏟기도 하죠.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            고전문학은 어떤가요? 분명 우리 말 같은 글이 써있기는 하는데, 일상 생활에서는 잘 쓰이지도 않는 한자어에 아래아 등 고어도 섞여있고, 
            각종 비유가 잔뜩 섞여있지만 그럼에도 열심히 한 번 겨우 읽어서 '아, 사랑 얘기구나'라고 이해했는데 해설을 읽어보니 임금이니 독립에 대한 염원이니 
            상징적인 의미를 담고 있다고 하여, 안 그래도 수면 부족에 시달리는 우리에게는 더할 나위 없는 마취제로 다가오는 것이 고전문학입니다.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            그렇지만, 그 외계어 같은 고전문학을 마치 우리 어렸을 때 TV에서 보았던 만화영화처럼 전체적인 이야기의 줄기를 얼추 알고 있다면 어떨까요? 
            예를 들어 「화왕가」에서는 할미꽃이 충신이라 왕이 중용해야 할 인재라는 걸 알고 있다거나, 「관동별곡」은 임금의 명을 받은 정철이 한양에서 강원도로, 
            다시 강원도 내에서 금강산과 동해를 관찰(이라고 쓰고 유람이라고 읽겠습니다)하는 여정을 담고 있다는 큰 맥락이라도 파악하고 있고, 
            혹시라도 그 안에서 정철이 놀라워했던 금강산에 담긴 조물주의 손길, 망양정에서 나눴던 신선과의 대화 등까지 기억하고 있다면, 
            여기에 이어서 각종 비유나 대구를 파고들어 공부해야 하는 상황이 오더라도 거부감이 훨씬 줄어들지 않을까요?
          </p>

          {/* 이미지 섹션 */}
          <div className="my-8 text-center">
            <img
              src="/image/originalintro1.png"
              alt="고전문학 학습 이미지"
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
            <p className="text-sm text-gray-500 mt-2">AI로 만든 그림과 목소리입니다</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            아쉽게도 공부는 대신 해드릴 수가 없죠. 공부는 여러분들께서 여러분들 머리에 누구도 빼앗을 수 없게 성을 직접 축조하는 과정과도 같으니까요. 
            그럼 저희 SN아카데미가 여러분들이 머릿속 성을 쌓는데 있어서 어떤 도움을 드릴 수 있을까? 하는 것이 고민의 시작점이었습니다. 
            그래서 저희가 내린 결론은, <strong>'우리가 좋아해서 흥미롭게 보았던 콘텐츠는 기억하려 하지 않아도 기억이 날 수밖에 없다'</strong>였습니다.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            SN오리지날 고전문학 시리즈는 딱 그 생각에서 시작했습니다. 여러분들께서 쉽게 고전문학의 내용을 익숙하게 자주 접하고 많이 알고 있을수록, 
            억지로 공부해야 하더라도 좋아할 수 있다. 또 그렇게 하기에 세상은 어느새 많이 발전해서, 고전문학을 읽고 이해하는 단계에서부터 
            필요하면 이를 그림으로 즐기고 목소리를 듣는 것에 이르기까지 AI가 수많은 도움을 줄 수 있는 시대가 되었습니다.
          </p>

          {/* 두 번째 이미지 섹션 */}
          <div className="my-8 text-center">
            <img
              src="/image/originalintro2.png"
              alt="SN Academy AI 기술"
              className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            />
            <p className="text-sm text-gray-500 mt-2">SN Academy의 AI 기술 활용</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            이렇게, 전통적인 방식의 전문 콘텐츠 제작 과정을 거치지 않더라도, 상대적으로 적은 비용과 노력, 또 매우 중요하게는 짧은 콘텐츠 제작 시간으로 
            우리의 공부를 다채롭게 만들어줄 수 있는 기술들을 저희 SN아카데미는 다수 보유하고 있고 계속 개발해 나가고 있습니다.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            현재의 계획은 주2회(화/금) 베이스로 고전문학 시리즈를 업로드하여 비단 금번 2026 수능만을 위해서가 아니더라도, 
            「관동별곡」, 「사미인곡」, 「속미인곡」 등 수능을 준비하는 수험생이라면 필수적으로 알아야 하는 고전 명문부터 차곡차곡 콘텐츠를 쌓아 나가고자 하고, 
            향후 SN아카데미에서 출시 준비 중인 SNarGPT, SNarPortal 등 타 서비스 출시에 따라 SNarGPT를 활용한 공부 방법, SN 단편선 등도 선보이고자 하는 원대한 계획을 가슴 속에 품고 있습니다.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            유튜브에 한정한 계획을 조금 더 구체적으로 밝히자면 유튜브 채널을 막 시작한 지금(2025년 9월말) 기준으로는 롱폼 형태의 동영상만 올라가고 있지만, 
            조만간 숏폼과 모든 영상에 한/영 자막이 추가될 예정입니다. 그렇지만 한편으로는 고전문학을 공부하는 것은 시대를 적게 탄다고도 생각하기 때문에, 
            특별히 당장의 관심만을 얻기 위한 자극적 콘텐츠 제작보다는 시간이 오래 지난 시점에 보더라도 재미있게 볼 수 있는, 
            잔잔하지만 미소 짓게 되는 콘텐츠를 만들고자 하는 마음이 있습니다.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <p className="text-lg text-blue-900 font-medium mb-2">
              📚 SN Academy의 약속
            </p>
            <p className="text-blue-800">
              SN아카데미는 2014년부터 경기도 양평에서 꾸준히 독학기숙학원을 운영하며 여러분들의 수능 준비가 수월할 수 있도록 일 24시간, 주 7일 내내 고민하고 있습니다. 
              시대의 트렌드를 따라가는 것도 중요하지만, 시대가 빠르게 변하더라도 수험생 여러분들이 원칙에 기반하여 급하지 않은 마음으로 차분하게 공부에만 전념할 수 있는 환경을 제공하는데 최선의 가치를 두고 정진하도록 하겠습니다.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            수험생 여러분들뿐만 아니라 학부모님, 일반 시청자분들 등 다양한 관련자분들께서 많은 관심 보여주시고 문의와 피드백 등으로 참여해 주신다면 
            저희 SN아카데미가 성실함으로 보답하도록 하겠습니다.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            모든 수험생 여러분의 건승을 바라며, 또 다른 재미있는 읽을거리를 들고 찾아뵙겠습니다. 감사합니다.
          </p>
        </div>

        {/* 관련 고전문학 시리즈 */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">SN Originals 고전문학 시리즈</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/originals/sokmieungok" className="group">
              <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">속미인곡</h3>
                <p className="text-sm text-gray-600 mt-1">정철의 연군가사</p>
              </div>
            </Link>
            <Link href="/originals/samieungok" className="group">
              <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">사미인곡</h3>
                <p className="text-sm text-gray-600 mt-1">정철의 연군가사</p>
              </div>
            </Link>
            <Link href="/originals/gwandong-byeolgok" className="group">
              <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">관동별곡</h3>
                <p className="text-sm text-gray-600 mt-1">정철의 기행 가사</p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
