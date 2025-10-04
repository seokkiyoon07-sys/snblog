import { 
  BlogLayout, 
  BlogImage, 
  Quote, 
  Highlight, 
  InfoBox, 
  SuccessBox, 
  Section, 
  FeatureList,
  Callout,
  CodeBlock
} from '@/components/BlogComponents';
import Image from 'next/image';

export const metadata = {
  title: "SN독학기숙학원 방화벽의 모든 것! (Feat. SNarlink)",
  description:
    "SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다. 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 SNarlink 시스템에 대해 다룹니다.",
  openGraph: {
    title: "SN독학기숙학원 방화벽의 모든 것! (Feat. SNarlink)",
    description:
      "SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다. 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 SNarlink 시스템에 대해 다룹니다.",
    type: "article",
  },
};

// 강력한 캐시 방지 헤더 설정
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';

// 캐시 완전 비활성화 - 정적 데이터 사용
const pageData = {
  title: "SN독학기숙학원 방화벽의 모든 것! (Feat. SNarlink)",
  lastUpdated: new Date().toISOString(),
  buildSha: process.env.VERCEL_GIT_COMMIT_SHA || 'local-dev',
  cacheVersion: 'v4.0.0' // 캐시 없는 버전
};

export default function Page() {
  return (
    <BlogLayout title="SN독학기숙학원 방화벽의 모든 것! (Feat. SNarlink)">
          
          {/* 인트로 */}
          <Quote>
            <strong>SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다.</strong>
          </Quote>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            이 글은 SN독학기숙학원이 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 <strong>SNarlink</strong> 시스템에 대해 다룹니다. 
            단순한 차단을 넘어서 AI 기반의 지능형 방어 시스템으로 진화한 우리의 이야기를 들어보세요.
          </p>

          {/* 방화벽이란 섹션 */}
          <Section title="🔥 방화벽이란 무엇일까요?">
            <p className="text-gray-700 mb-4">
              방화벽(Firewall)은 네트워크의 보안을 담당하는 시스템입니다. 마치 건물의 화재를 막는 방화벽처럼, 
              인터넷에서 유입되는 위험한 트래픽을 차단하는 역할을 합니다.
            </p>

            <p className="text-gray-700 mb-6">
              저희 SN 독학기숙학원이 국내 최초로 기숙학원 내에서 인터넷 방화벽을 도입한 지 어느덧 11년이 되었습니다.
            </p>

            <p className="text-gray-700 mb-6">
              2014년부터 방화벽 장비를 도입했고, 2018년에는 미국 Cisco사의 최신 방화벽을 도입하여 학생들에게 큰 호평을 받았습니다. 
              타 기숙학원에서는 어떻게 방화벽을 설계했는지 컨설팅 문의도 몇 차례 온 바 있습니다.
            </p>
          </Section>

          {/* 왜 다른 학원들은 제대로 못할까 섹션 */}
          <Section title="❓ 왜 다른 학원들은 제대로 못할까요?">
            <p className="text-gray-700 mb-4">
              많은 학원들이 방화벽을 갖추고 있다고 홍보하지만, 실제로는 제대로 작동하지 않는 경우가 대부분입니다.
            </p>

            <Highlight>
              <p className="font-medium">
                방화벽은 단순히 장비만 설치하면 되는 것이 아닙니다. <strong>높은 수준의 기술력, 물적&인적 투자, 그리고 오랜 노하우</strong>가 필요하기 때문입니다.
              </p>
            </Highlight>

            <p className="text-gray-700">
              SN도 처음 도입 후 불완전한 방화벽으로 시행착오를 겪었기에 타 기숙학원들의 상황이 잘 이해됩니다.
            </p>
          </Section>

          {/* SN의 방화벽 발전사 섹션 */}
          <Section title="📈 SN의 방화벽 발전사">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">2014년: 첫 도전</h3>
                <FeatureList 
                  features={[
                    "SN 방화벽 장비 최초 도입",
                    "기숙학원 방화벽의 시초"
                  ]} 
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">2016년: 노하우 정립</h3>
                <FeatureList 
                  features={[
                    "장비 교체",
                    "전문적인 컨설팅 및 정비를 통해 방화벽 운용 노하우 정립"
                  ]} 
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">2018년: 혁신의 도약</h3>
                <FeatureList 
                  features={[
                    "미국 CISCO 장비 도입",
                    "당시 최상위 사양의 방화벽"
                  ]} 
                />

                <BlogImage 
                  src="/image/SNarlink/cisco firewall.png"
                  alt="2018년 도입된 Cisco 방화벽 장비"
                  caption="2018년 도입된 Cisco 방화벽 장비"
                  priority={true}
                />

                <p className="text-gray-700 mt-4">
                  2018년 Cisco 장비 도입 이후 방화벽이 혁신 수준으로 한층 더 업그레이드되었습니다. 
                  도입 이후부터 2025년 올해 업그레이드 전까지도 기숙학원 내에서는 가장 선두주자였습니다.
                </p>
              </div>
            </div>
          </Section>

          {/* 2025년 혁신 섹션 */}
          <Section title="🚀 2025년, 다시 한 번 혁신을 선택하다">
            <Highlight>
              <p className="font-medium">
                이미 선두주자의 자리에 있었지만, <strong>2025년 SN은 다시 한 번 혁신을 선택했습니다.</strong>
              </p>
            </Highlight>

            <p className="text-gray-700 mb-4">
              중소기업 수준에서는 사실상 불가능하다고 여겨지던, <strong>입시 수험생에 특화된 차세대 방화벽을 순수 자체 기술로 개발</strong>한 것입니다.
            </p>

            <p className="text-gray-700">
              현재는 단순한 기숙학원 방화벽 수준을 넘어, <strong>국내 대기업 수준의 보안 체계에도 뒤처지지 않는 수준</strong>까지 발전하였습니다.
            </p>
          </Section>

          {/* 기존 시스템의 한계점 섹션 */}
          <Section title="⚠️ 기존 시스템의 한계점">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">단순한 '차단'만으로는 부족했다</h3>
                
                <p className="text-gray-700 mb-4">
                  기존 Cisco 장비도 훌륭했습니다. 수천만원을 들여 장비를 도입하고, 7년간 라이선스를 갱신하며 안정적으로 학원을 운영해 왔죠.
                </p>

                <p className="text-gray-700 mb-4">
                  하지만 이 시스템은 교육용으로 특화되어 있지 않았습니다. 모든 기능이 <strong>'차단'에만 집중</strong>되어 있었습니다.
                </p>

                <p className="text-gray-700 mb-6">
                  프록시, VPN, 우회 DNS는 물론 차단되지만, 그 이상의 <strong>섬세한 정책이나 유연한 제어는 기대하기 어려웠습니다.</strong>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">오르비 문제: 커뮤니티 vs 클래스</h3>
                
                <p className="text-gray-700 mb-4">
                  구체적인 예시를 들어보겠습니다. 수험생 커뮤니티 사이트인 <strong>오르비</strong>가 있습니다.
                </p>

                <p className="text-gray-700 mb-4">
                  오르비는 커뮤니티뿐 아니라 <strong>'오르비 클래스'라는 인터넷 강의 플랫폼</strong>도 함께 운영 중입니다. 
                  문제는 이 두 사이트가 <strong>같은 기반 시스템을 공유하고 있다</strong>는 점입니다.
                </p>

                <p className="text-gray-700 mb-4">
                  학생들에게는 커뮤니티는 불필요하지만, 클래스는 꼭 필요합니다. 하지만 <strong>구조상 커뮤니티만 차단하고 클래스만 허용하는 것이 기술적으로 불가능</strong>했죠.
                </p>

                <p className="text-gray-700 mb-6">
                  결국 <strong>커뮤니티와 클래스 모두를 차단</strong>할 수밖에 없었고, <strong>강의를 들어야 하는 학생들은 별도로 핫스팟을 켜서 이용</strong>해야만 했습니다. 여기에서 관리의 공백이 생기죠.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative w-full h-auto">
                    <Image
                      src="/image/SNarlink/orbi1.png"
                      alt="오르비 커뮤니티와 클래스의 차이점"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-xl shadow-md w-full h-auto object-contain"
                      quality={95}
                    />
                  </div>
                  <div className="relative w-full h-auto">
                    <Image
                      src="/image/SNarlink/orbi2.png"
                      alt="오르비 클래스 접근 화면"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="rounded-xl shadow-md w-full h-auto object-contain"
                      quality={95}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">외부 의존의 한계</h3>
                
                <p className="text-gray-700 mb-4">
                  오르비를 비롯한 비슷한 케이스들을 Cisco사의 기술지원 서비스를 통해 문제를 해결해보려 했습니다.
                </p>

                <p className="text-gray-700 mb-6">
                  그러나 이 간단한 문제도 Cisco 사와 파트너사를 통해 개발하면 비용상 합리적이지 않았고, 그 돈이면 우리가 개발하는게 낫다는 생각을 하게 되었습니다.
                </p>

                <Callout variant="info" title="결론">
                  <p>
                    <strong>결국, 우리는 교육 현장에 꼭 필요한 방향성을 기준으로, 새로운 방화벽 시스템을 오픈소스 기반으로 직접 설계하기로 했습니다.</strong>
                  </p>
                </Callout>
              </div>
            </div>
          </Section>

          {/* AI 시대 섹션 */}
          <Section title="🤖 AI 시대, 보안의 기준이 달라졌다">
            <p className="text-gray-700 mb-4">
              AI 시대가 오며 패러다임이 바뀌었고, 보안의 판도를 근본적으로 바꿔놓았습니다.
            </p>

            <Highlight>
              <p className="font-medium">
                예전처럼 <strong>단순히 '차단'만으로는 충분하지 않다는 위기의식</strong>이 생겼습니다.
              </p>
            </Highlight>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">최상위권 학생들의 도전</h3>
                
                <p className="text-gray-700 mb-4">
                  SN독학기숙학원에 다니는 대부분의 학생들, 특히 약 90%는 학습 외 활동에 큰 관심이 없습니다.
                </p>

                <p className="text-gray-700 mb-4">
                  그러나 서울대 공대, 의대 등을 준비하는 일부 최상위권 학생들 중에는 AI 기술과 자신의 지식을 활용해 방화벽을 우회하려는 시도를 하기도 합니다. (방화벽에 대한 도전 욕구가 생긴답니다...)
                </p>

                <p className="text-gray-700 mb-4">
                  일반적인 고등학생 수준에서는 사실상 불가능한 일이지만, 전국 상위 0.1% 학생이라면 가능성을 완전히 배제할 수 없습니다.
                </p>

                <p className="text-gray-700 mb-6">
                  그리고 저희는 그런 학생들도 필요하다고 생각합니다. 왜냐고요? 그 이유는 아래에서 자세히 설명드리겠습니다 :)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">완벽한 방화벽은 존재하지 않는다</h3>
                
                <p className="text-gray-700 mb-4">
                  참고로, 100% 뚫리지 않는 방화벽은 존재하지 않습니다. 연간 수백억씩 보안에 투자하는 국내 통신사들도 악성코드에 뚫리는 경우가 있잖아요.
                </p>

                <p className="text-gray-700 mb-6">
                  혹여 그런 업체가 있다면 과장광고입니다. 그래서 저희는 항상 <strong>'완벽에 가까운 방화벽'</strong>이라는 표현을 사용합니다.
                </p>
              </div>
            </div>
          </Section>

          {/* SNarlink_Study 섹션 */}
          <Section title="🌟 SNarlink_Study: 오직 공부만을 위한 네트워크">
            <p className="text-gray-700 mb-6">
              이러한 고민 끝에, 우리는 보안의 방향을 바꿨습니다.
            </p>

            <Highlight>
              <p className="font-medium">
                단순한 <strong>'차단'이 아니라, 학생의 '시도'와 '의도'를 읽는 지능형 방어 시스템</strong>으로 말입니다.
              </p>
            </Highlight>

            <BlogImage 
              src="/image/SNarlink/SNarlink Logo.png"
              alt="SNarlink 로고"
              caption="SNarlink 로고"
              priority={true}
            />

            <p className="text-gray-700 mb-6">
              우리는 이 방화벽 시스템을 <strong>SNarlink_study</strong>라고 명명했습니다. SN + Starlink. 공부에만 집중할 수 있도록 설계된 전용 네트워크입니다.
            </p>
          </Section>

          {/* SNarlink의 핵심 기능 섹션 */}
          <Section title="🚀 SNarlink의 핵심 기능">
            <p className="text-gray-700 mb-6">
              SNarlink는 단순한 차단 시스템을 넘어서 <strong>AI가 학습하고 진화하는 지능형 방어 시스템</strong>입니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">🛡️ 강화된 보안 능력</h3>
                <FeatureList 
                  features={[
                    "차세대 방화벽 엔진: 기존 Cisco 장비 대비 3배 향상된 차단 성능",
                    "실시간 위협 탐지: 0.1초 이내 우회 시도 감지 및 차단",
                    "다층 보안 구조: DNS, IP, URL, 패킷 레벨 다중 검증"
                  ]} 
                />
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-green-800">⚡ 속도 최적화</h3>
                <FeatureList 
                  features={[
                    "스마트 필터링: 학습에 불필요한 트래픽 자동 제거",
                    "대역폭 최적화: 교육 콘텐츠 우선 처리로 속도 2배 향상",
                    "지연 시간 최소화: 평균 응답 시간 50% 단축"
                  ]} 
                />
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-purple-800">🧠 AI 기반 학습 시스템</h3>
                <FeatureList 
                  features={[
                    "실시간 DNS 분석: 우회 시도 패턴 즉시 감지 → 운영팀 알림",
                    "자동 학습 메커니즘: 시도된 경로 즉시 학습 및 기록 → 자동 차단 정책 생성",
                    "진화하는 방어: 반복 시도 시 방화벽이 스스로 진화하여 더 강력해짐"
                  ]} 
                />
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-orange-800">📊 실시간 모니터링</h3>
                <FeatureList 
                  features={[
                    "24/7 자동 감시: 인력 개입 없이 24시간 자동 모니터링",
                    "즉시 알림 시스템: 우회 시도 발생 시 3초 이내 관리자 알림",
                    "학생별 추적: 어떤 학생이 언제 어떤 시도를 했는지 정확한 특정 가능"
                  ]} 
                />
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-yellow-800">실제 성과: 250명 중 2명만 시도, 모두 실패</h3>
              <p className="text-gray-700 mb-4">
                방화벽이 업그레이드 이후 실제로 250명의 학생 중 시도한 인원은 단 2명, <strong>모두 실패했습니다.</strong>
              </p>
              <p className="text-gray-700">
                <strong>VPN, 프록시, 우회 DNS 시도 등 모두 막아내는 경이로운 능력</strong>을 보여주었습니다.
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              그 전 Cisco 장비도 막아내긴 했지만, 이 정도 능력까지는 아니였습니다. 허용된 사이트 내에서 홈페이지 변화가 있으면, 대응이 즉각적이지 않았습니다. 또한 홈페이지 구조 변화가 생기면 우회루트가 생기기도 했죠.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">학습에 불필요한 요소 자동 필터링</h3>
              
              <p className="text-gray-700 mb-4">
                우리가 어떤 사이트에 접속할 때 화면에 보이는 정보 외에도 백그라운드에서는 다양한 데이터 수집 활동 등이 이루어집니다.
              </p>

              <p className="text-gray-700 mb-6">
                이러한 숨겨진 요소들은 속도를 저하시킬 뿐만 아니라, 악성 코드나 추적 프로그램의 경로가 되기도 합니다.
              </p>

              <Highlight>
                <p className="font-medium">
                  <strong>SNarLink는 이 과정에서 학습에 불필요한 요소들을 자동으로 걸러내고, 정말 필요한 정보만 선별적으로 허용함으로써 인터넷 속도를 향상시키는 동시에 악성 프로그램까지 효과적으로 차단</strong>합니다.
                </p>
              </Highlight>
            </div>
          </Section>

          {/* 시도와 의도를 읽는 탐지 능력 섹션 */}
          <Section title="🔍 시도와 의도를 읽는 탐지 능력">
            <p className="text-gray-700 mb-6">
              하지만 앞서 말씀드린 것처럼, 세상에 완벽한 방화벽은 없습니다.
            </p>

            <p className="text-gray-700 mb-6">
              그래서 SNarlink는 단순 차단에 그치지 않고 <strong>시도와 의도를 읽는 탐지 능력</strong>을 갖추었습니다.
            </p>

            <p className="text-gray-700 mb-6">
              학생이 <strong>방화벽을 우회하는 시도</strong>나 만에 하나 뚫리더라도 <strong>즉시 탐지</strong>하여 <strong>운영자에게 알람</strong>을 띄우고, <strong>즉각 대응</strong>이 가능하도록 설계한 것이죠.
            </p>

            <p className="text-gray-700 mb-6">
              그리고 <strong>어떤 학생이 시도했는지까지 특정</strong>이 가능합니다.
            </p>

            <p className="text-gray-700 mb-6">
              이전 방화벽은 학생의 제보 혹은 사람의 눈으로 점검하면서 우회를 알 수 있었고, 누군지 특정도 어려웠습니다. 그러나 지금은 우회 시도 알림과 동시에 특정까지 가능합니다!!
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">AI가 학습하는 방화벽</h3>
              
              <p className="text-gray-700 mb-4">
                방화벽은 <strong>우회 기술들을 AI 로그 분석</strong>을 통해 학습하며, 앞으로 유사한 시도는 모두 차단해버립니다.
              </p>

              <p className="text-gray-700 mb-6">
                <strong>단순한 설정된 차단 시스템이 아닌 학습하는 방화벽</strong>이죠. 그래서 학원에서 방화벽 뚫는 시도를 하는 학생들도 필요한 겁니다. SNarlink의 학습 양분이 되니까요.
              </p>

              <Callout variant="warning" title="참고사항">
                <p>
                  (이번 5월에 방화벽을 교체하면서 불완전한 시기가 있었습니다... 당시 방화벽 안정화 및 AI가 학습 과정이어서 그랬습니다. 학생들에게는 정말 미안했네요 ㅠㅠ)
                </p>
              </Callout>

              <BlogImage 
                src="/image/SNarlink/study room.png"
                alt="학생들이 공부하는 모습"
                caption="학생들이 공부하는 모습"
              />
            </div>
          </Section>

          {/* 애플 기기 섹션 */}
          <Section title="🍎 애플 기기는 왜 까다로웠나?">
            <p className="text-gray-700 mb-6">
              가장 까다로웠던 건 Apple이었습니다. Apple 기기의 경우, 우회 트래픽 구조가 매우 정교합니다.
            </p>

            <p className="text-gray-700 mb-6">
              우리는 애플 트래픽만 별도로 분석했고, 관련 코드만 2,000줄 이상 구현했습니다.
            </p>

            <p className="text-gray-700 mb-6">
              애플 기기 기능 중 학습에 필요한 부분(인증, 로그인, 캘린더, 저장된 음악 듣기 기능)은 허용하고, 이외 우회 및 Private Relay, 음악검색, 뉴스, 음악 다운로드 및 스트리밍, game 같은 기능은 모두 차단합니다.
            </p>

            <p className="text-gray-700 mb-6">
              그 결과, <strong>iMessage까지 거의 완벽하게 차단</strong>할 수 있었습니다.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">실시간 모니터링과 자동 대응</h3>
              
              <p className="text-gray-700 mb-4">
                이전에는 iMessage 차단이 일시적으로 가능하더라도, Apple 측의 업데이트나 통신 구조 변경이 있을 경우 다시 뚫리는 현상이 반복되곤 했습니다.
              </p>

              <p className="text-gray-700 mb-6">
                뚫렸는지 인지하는 데에도 시간이 걸렸고, 대응까지도 수동적일 수밖에 없었습니다.
              </p>

              <p className="text-gray-700">
                그러나 현재는 시스템이 실시간으로 트래픽 이상 징후를 감지하고, 혹여나 iMessage가 뚫리더라도 즉시 알림이 발생하며, 대응도 자동화되어 빠르게 이루어집니다.
              </p>
            </div>
          </Section>

          {/* URL 단위 예외 처리 섹션 */}
          <Section title="🔗 URL 단위 예외 처리: 오르비 문제 해결">
            <p className="text-gray-700 mb-6">
              <strong>URL 단위 예외 처리도 가능합니다.</strong> 현재는 베타 버전이지만, URL 단위로 세밀하게 접근을 허용하는 기능도 갖추고 있습니다.
            </p>

            <p className="text-gray-700 mb-6">
              위에 말씀드린 <strong>오르비가 가장 대표적인 사례</strong>입니다.
            </p>

            <p className="text-gray-700 mb-6">
              오르비는 같은 기반 시스템을 공유하고 있어, 기존에는 오르비 커뮤니티만 차단이 불가능했습니다. 커뮤니티와 클래스를 같이 차단해야 했죠.
            </p>

            <SuccessBox>
              <p className="font-medium text-green-800">
                <strong>하지만 URL 단위 예외 처리를 통해 지금의 방화벽에서는 커뮤니티만 차단이 가능합니다!!</strong>
              </p>
            </SuccessBox>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">더 나아간 기술: 개별 콘텐츠 접근 제어</h3>
              
              <p className="text-gray-700 mb-4">
                거기서 더 나아간 기술은 학생이 유튜브에서 특정 교육 영상만 보거나, 학습 카페의 특정 게시글만 보려는 경우, 해당 주소만 열어주는 기능입니다.
              </p>

              <p className="text-gray-700">
                기술적으로는 구현되어 있으나, 실효성과 실무 효율성을 고려해 현재는 배포하지 않았습니다.
              </p>
            </div>
          </Section>

          {/* SNarlink_Frespon 섹션 */}
          <Section title="⚖️ SNarlink_Frespon: 자유와 책임의 균형">
            <Quote>
              방화벽의 본질은 '차단'이 아닙니다. 학생이 학습에 몰입할 수 있는 환경을 만들어주는 도구입니다.
            </Quote>

            <p className="text-gray-700 mb-6">
              학습자료 결제, 강의 수강, 정보 탐색 등 필요에 따라 인터넷이 꼭 필요한 경우도 있죠.
            </p>

            <p className="text-gray-700 mb-6">
              이때 학생은 학생실 선생님께 요청하면, <strong>15분 / 30분 / 60분 단위로 일회용 인터넷 비밀번호를 부여</strong>받게 됩니다. 부여받은 시간이 끝나면 모두 종료됩니다.
            </p>

            <p className="text-sm text-gray-500 mb-6">
              *기본은 15분이며, 30분 이후는 필요시에만 부여됩니다.
            </p>

            <BlogImage 
              src="/image/SNarlink/monitor.png"
              alt="모니터링 시스템 화면"
              caption="모니터링 시스템 화면"
            />

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">핫스팟 방식의 한계를 극복하다</h3>
              
              <p className="text-gray-700 mb-4">
                과거에는 핫스팟으로 개별 허용하는 방식이었습니다만, 핫스팟을 허락된 학생 외 사용하는 등 관리 부담이 크고 딴짓의 가능성도 많았기에 전면 개편했습니다.
              </p>

              <p className="text-gray-700 mb-6">
                이번 업데이트에서 유용한 기능 중 하나입니다! 허락된 학생에게만 제공되는 것뿐만 아니라 시간이 정해져있어 학생도 필요한 업무에만 사용합니다.
              </p>

              <p className="text-gray-700 mb-6">
                이 시스템의 이름은 <strong>SNarlink_Frespon</strong>입니다. Free + Responsibility. 자유를 줄 테니, 그 자유는 공부에만 써야 한다는 책임을 함께 묻는 구조입니다.
              </p>

              <p className="text-gray-700">
                대부분의 학생들도 이 원칙을 잘 지켜주고 있습니다.
              </p>
            </div>
          </Section>

          {/* 학습 데이터 분석 섹션 */}
          <Section title="📊 학습 데이터 분석: 학생 개개인의 성장을 돕는 기술">
            <p className="text-gray-700 mb-6">
              우리가 개발한 방화벽의 가장 강력한 무기는, 차단 데이터뿐만 아니라
            </p>

            <Highlight>
              <p className="font-medium">
                <strong>학생들의 학습 데이터를 측정하고 분석할 수 있는 구조</strong>
              </p>
            </Highlight>

            <p className="text-gray-700 mb-6">
              라는 점입니다.
            </p>

            <p className="text-gray-700 mb-6">
              등록된 기기만 접속이 가능하며, 기기별로 접속 로그, 집중 시간대, 강의 시청 기록 등이 자동으로 기록됩니다.
            </p>

            <p className="text-gray-700 mb-6">
              학습 사이트 이용과 스트리밍 시간을 분단위로 정밀 측정하여 분석하는 것이지요.
            </p>

            <p className="text-gray-700 mb-6">
              또한 기기만 방화벽 시스템에 등록할 뿐, 학생들 기기에 인증서나 기타 프로그램 등을 별도로 깔지 않습니다.
            </p>

            <BlogImage 
              src="/image/SNarlink/report.png"
              alt="학습 데이터 리포트 화면"
              caption="학습 데이터 리포트 화면"
            />

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">초개인화된 피드백 제공</h3>
              
              <p className="text-gray-700 mb-4">
                이를 통해 학생 개개인의 학습 행동을 정량화하고, <strong>초개인화된 피드백을 제공</strong>할 수 있습니다.
              </p>

              <p className="text-gray-700 mb-6">
                현재 데이터의 정합성 확보는 완료되었으며, 이를 통한 시각화, 리포팅 기술은 <strong>금년 내 개발 완료 예정</strong>입니다. 기대하셔도 좋습니다.
              </p>

              <InfoBox>
                <p className="text-blue-800">
                  물론 모든 데이터는 익명화 처리되어 저장되며, 디지털 윤리 기준을 철저히 준수하고 있습니다. 개인정보에 대한 우려는 하지 않으셔도 됩니다.
                </p>
              </InfoBox>
            </div>
          </Section>

          {/* 기술로 교육을 바꾸고 섹션 */}
          <Section title="🎯 기술로 교육을 바꾸고, 교육이 기술을 발전시킨다">
            <p className="text-gray-700 mb-6">
              우리는 기술로 교육을 바꾸고 있습니다. 그리고 교육이 기술을 발전시킬 것입니다.
            </p>

            <p className="text-gray-700 mb-6">
              우리의 방화벽은 단순히 '막는 장비'가 아닙니다. <strong>차세대 교육 보조 시스템이자, 학생의 몰입과 성장을 돕기 위한 AI 기반 플랫폼</strong>입니다.
            </p>

            <p className="text-gray-700 mb-6">
              이 모든 것을 외부 솔루션 없이, 핵심 고급 인력이신 연구소장 Ryun, Ph.D.을 모셔와 자체 연구소와 인력만으로 만들어냈습니다.
            </p>

            <Highlight>
              <p className="font-medium">
                <strong>우리는 마케팅보다 기술에 투자하는 기업</strong>입니다. 화려한 포장이 아닌, 실질적인 성과로 이야기하려 합니다.
              </p>
            </Highlight>

            <BlogImage 
              src="/image/SNarlink/SN academy.png"
              alt="SN Academy 건물 외관"
              caption="SN Academy 건물 외관"
            />

            <p className="text-gray-700 mb-6">
              그래서 자신 있게 말씀드립니다. <strong>SN독학기숙학원은 기술적, 윤리적으로 대한민국 최상위 수준의 보안 교육 환경을 갖춘 교육 기관입니다.</strong>
            </p>

            <p className="text-gray-700">
              우리는 교육 플랫폼으로 진화 중입니다. <strong>그리고 학생들의 성공의 경험을 만들겠습니다.</strong>
            </p>
          </Section>

          {/* 마무리 섹션 */}
          <Section title="💬 마무리">
            <p className="text-gray-700 mb-6">
              이 글을 당사 학생, 학부모뿐 아니라 동종업계 분들께도 바칩니다.
            </p>

            <p className="text-gray-700 mb-6">
              SN독학기숙학원의 방화벽은 개발이 모두 완료되었으며, 본원에서 안정적으로 운용하고 있습니다.
            </p>

            <p className="text-gray-700 mb-8">
              혹시 당사의 차세대 교육 방화벽 도입을 원하시거나 흥미가 있으신 대형학원들은 본원으로 연락 주시면, 라이선스 혹은 시공 협의 가능합니다.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">문의처</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>기술 문의</strong>: <a href="mailto:snacademy@naver.com" className="text-blue-600 hover:underline">snacademy@naver.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>입학 문의</strong>
                </p>
                <ul className="ml-4 space-y-1">
                  <li className="text-gray-700">
                    📞 전화 상담: <a href="tel:0317710300" className="text-blue-600 hover:underline">031-771-0300</a> (내선번호 1번)
                  </li>
                  <li className="text-gray-700">
                    💬 카카오톡 채널: <em className="text-gray-600">[SN독학기숙학원]</em> 검색 후 문의
                  </li>
                </ul>
              </div>
            </div>
          </Section>

    </BlogLayout>
  );
}