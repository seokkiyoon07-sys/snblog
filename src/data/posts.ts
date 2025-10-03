// ⚠️ 중요: 이 파일은 수동으로 관리됩니다. Notion 동기화로 덮어쓰지 마세요!
// 📝 포스트 추가/수정 시 이 파일을 직접 편집하세요.
// 🔒 Notion 동기화는 비활성화되어 있습니다.

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  published: boolean;
  thumbnail?: string;
  youtubeUrl?: string;
  url: string;
}

export const allPosts: Post[] = [
  {
    id: 'SNarlink',
    title: 'SN독학기숙학원 방화벽의 모든 것! (Feat. SNarlink)',
    excerpt: 'SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다.',
    content: `# SN독학기숙학원 방화벽의 모든 것!

> **SN의 인터넷 방화벽은 국내 최고 수준의 보안을 자랑합니다.**

이 글은 SN독학기숙학원이 11년간 축적한 방화벽 기술력과 2025년 새롭게 선보인 **SNarlink** 시스템에 대해 다룹니다. 단순한 차단을 넘어서 AI 기반의 지능형 방어 시스템으로 진화한 우리의 이야기를 들어보세요.

## 🔥 방화벽이란 무엇일까요?

방화벽(Firewall)은 네트워크의 보안을 담당하는 시스템입니다. 마치 건물의 화재를 막는 방화벽처럼, 인터넷에서 유입되는 위험한 트래픽을 차단하는 역할을 합니다.

저희 SN 독학기숙학원이 국내 최초로 기숙학원 내에서 인터넷 방화벽을 도입한 지 어느덧 11년이 되었습니다. 

2014년부터 방화벽 장비를 도입했고, 2018년에는 미국 Cisco사의 최신 방화벽을 도입하여 학생들에게 큰 호평을 받았습니다. 타 기숙학원에서는 어떻게 방화벽을 설계했는지 컨설팅 문의도 몇 차례 온 바 있습니다.

## ❓ 왜 다른 학원들은 제대로 못할까요?

많은 학원들이 방화벽을 갖추고 있다고 홍보하지만, 실제로는 제대로 작동하지 않는 경우가 대부분입니다. 

방화벽은 단순히 장비만 설치하면 되는 것이 아닙니다. **높은 수준의 기술력, 물적&인적 투자, 그리고 오랜 노하우**가 필요하기 때문입니다.

SN도 처음 도입 후 불완전한 방화벽으로 시행착오를 겪었기에 타 기숙학원들의 상황이 잘 이해됩니다.

## 📈 SN의 방화벽 발전사

### 2014년: 첫 도전
- SN 방화벽 장비 최초 도입
- 기숙학원 방화벽의 시초

### 2016년: 노하우 정립
- 장비 교체
- 전문적인 컨설팅 및 정비를 통해 방화벽 운용 노하우 정립

### 2018년: 혁신의 도약
- 미국 CISCO 장비 도입
- 당시 최상위 사양의 방화벽

![2018년 도입된 Cisco 방화벽 장비](/image/SNarlink/cisco firewall.png)

2018년 Cisco 장비 도입 이후 방화벽이 혁신 수준으로 한층 더 업그레이드되었습니다. 도입 이후부터 2025년 올해 업그레이드 전까지도 기숙학원 내에서는 가장 선두주자였습니다.

## 🚀 2025년, 다시 한 번 혁신을 선택하다

이미 선두주자의 자리에 있었지만, **2025년 SN은 다시 한 번 혁신을 선택했습니다.**

중소기업 수준에서는 사실상 불가능하다고 여겨지던, **입시 수험생에 특화된 차세대 방화벽을 순수 자체 기술로 개발**한 것입니다. 

현재는 단순한 기숙학원 방화벽 수준을 넘어, **국내 대기업 수준의 보안 체계에도 뒤처지지 않는 수준**까지 발전하였습니다.

## ⚠️ 기존 시스템의 한계점

### 단순한 '차단'만으로는 부족했다

기존 Cisco 장비도 훌륭했습니다. 수천만원을 들여 장비를 도입하고, 7년간 라이선스를 갱신하며 안정적으로 학원을 운영해 왔죠.

하지만 이 시스템은 교육용으로 특화되어 있지 않았습니다. 모든 기능이 **'차단'에만 집중**되어 있었습니다. 

프록시, VPN, 우회 DNS는 물론 차단되지만, 그 이상의 **섬세한 정책이나 유연한 제어는 기대하기 어려웠습니다.**

### 오르비 문제: 커뮤니티 vs 클래스

구체적인 예시를 들어보겠습니다. 수험생 커뮤니티 사이트인 **오르비**가 있습니다. 

오르비는 커뮤니티뿐 아니라 **'오르비 클래스'라는 인터넷 강의 플랫폼**도 함께 운영 중입니다. 문제는 이 두 사이트가 **같은 기반 시스템을 공유하고 있다**는 점입니다.

학생들에게는 커뮤니티는 불필요하지만, 클래스는 꼭 필요합니다. 하지만 **구조상 커뮤니티만 차단하고 클래스만 허용하는 것이 기술적으로 불가능**했죠.

결국 **커뮤니티와 클래스 모두를 차단**할 수밖에 없었고, **강의를 들어야 하는 학생들은 별도로 핫스팟을 켜서 이용**해야만 했습니다. 여기에서 관리의 공백이 생기죠.

![오르비 커뮤니티와 클래스의 차이점](/image/SNarlink/orbi1.png)

![오르비 클래스 접근 화면](/image/SNarlink/orbi2.png)

### 외부 의존의 한계

오르비를 비롯한 비슷한 케이스들을 Cisco사의 기술지원 서비스를 통해 문제를 해결해보려 했습니다. 

그러나 이 간단한 문제도 Cisco 사와 파트너사를 통해 개발하면 비용상 합리적이지 않았고, 그 돈이면 우리가 개발하는게 낫다는 생각을 하게 되었습니다.

**결국, 우리는 교육 현장에 꼭 필요한 방향성을 기준으로, 새로운 방화벽 시스템을 오픈소스 기반으로 직접 설계하기로 했습니다.**

## 🤖 AI 시대, 보안의 기준이 달라졌다

AI 시대가 오며 패러다임이 바뀌었고, 보안의 판도를 근본적으로 바꿔놓았습니다. 

예전처럼 **단순히 '차단'만으로는 충분하지 않다는 위기의식**이 생겼습니다.

### 최상위권 학생들의 도전

SN독학기숙학원에 다니는 대부분의 학생들, 특히 약 90%는 학습 외 활동에 큰 관심이 없습니다. 

그러나 서울대 공대, 의대 등을 준비하는 일부 최상위권 학생들 중에는 AI 기술과 자신의 지식을 활용해 방화벽을 우회하려는 시도를 하기도 합니다. (방화벽에 대한 도전 욕구가 생긴답니다...)

일반적인 고등학생 수준에서는 사실상 불가능한 일이지만, 전국 상위 0.1% 학생이라면 가능성을 완전히 배제할 수 없습니다. 

그리고 저희는 그런 학생들도 필요하다고 생각합니다. 왜냐고요? 그 이유는 아래에서 자세히 설명드리겠습니다 :)

### 완벽한 방화벽은 존재하지 않는다

참고로, 100% 뚫리지 않는 방화벽은 존재하지 않습니다. 연간 수백억씩 보안에 투자하는 국내 통신사들도 악성코드에 뚫리는 경우가 있잖아요. 

혹여 그런 업체가 있다면 과장광고입니다. 그래서 저희는 항상 **'완벽에 가까운 방화벽'**이라는 표현을 사용합니다.

## 🌟 SNarlink_Study: 오직 공부만을 위한 네트워크

이러한 고민 끝에, 우리는 보안의 방향을 바꿨습니다. 

단순한 **'차단'이 아니라, 학생의 '시도'와 '의도'를 읽는 지능형 방어 시스템**으로 말입니다.

![SNarlink 로고](/image/SNarlink/SNarlink Logo.png)

우리는 이 방화벽 시스템을 **SNarlink_study**라고 명명했습니다. SN + Starlink. 공부에만 집중할 수 있도록 설계된 전용 네트워크입니다.

## 🚀 SNarlink의 핵심 기능

SNarlink는 단순한 차단 시스템을 넘어서 **AI가 학습하고 진화하는 지능형 방어 시스템**입니다.

### 🛡️ 강화된 보안 능력
- **차세대 방화벽 엔진**: 기존 Cisco 장비 대비 3배 향상된 차단 성능
- **실시간 위협 탐지**: 0.1초 이내 우회 시도 감지 및 차단
- **다층 보안 구조**: DNS, IP, URL, 패킷 레벨 다중 검증

### ⚡ 속도 최적화
- **스마트 필터링**: 학습에 불필요한 트래픽 자동 제거
- **대역폭 최적화**: 교육 콘텐츠 우선 처리로 속도 2배 향상
- **지연 시간 최소화**: 평균 응답 시간 50% 단축

### 🧠 AI 기반 학습 시스템
- **실시간 DNS 분석**: 우회 시도 패턴 즉시 감지 → 운영팀 알림
- **자동 학습 메커니즘**: 시도된 경로 즉시 학습 및 기록 → 자동 차단 정책 생성
- **진화하는 방어**: 반복 시도 시 방화벽이 스스로 진화하여 더 강력해짐

### 📊 실시간 모니터링
- **24/7 자동 감시**: 인력 개입 없이 24시간 자동 모니터링
- **즉시 알림 시스템**: 우회 시도 발생 시 3초 이내 관리자 알림
- **학생별 추적**: 어떤 학생이 언제 어떤 시도를 했는지 정확한 특정 가능

### 실제 성과: 250명 중 2명만 시도, 모두 실패

방화벽이 업그레이드 이후 실제로 250명의 학생 중 시도한 인원은 단 2명, **모두 실패했습니다.**

**VPN, 프록시, 우회 DNS 시도 등 모두 막아내는 경이로운 능력**을 보여주었습니다. 

그 전 Cisco 장비도 막아내긴 했지만, 이 정도 능력까지는 아니였습니다. 허용된 사이트 내에서 홈페이지 변화가 있으면, 대응이 즉각적이지 않았습니다. 또한 홈페이지 구조 변화가 생기면 우회루트가 생기기도 했죠.

### 학습에 불필요한 요소 자동 필터링

우리가 어떤 사이트에 접속할 때 화면에 보이는 정보 외에도 백그라운드에서는 다양한 데이터 수집 활동 등이 이루어집니다. 

이러한 숨겨진 요소들은 속도를 저하시킬 뿐만 아니라, 악성 코드나 추적 프로그램의 경로가 되기도 합니다. 

**SNarLink는 이 과정에서 학습에 불필요한 요소들을 자동으로 걸러내고, 정말 필요한 정보만 선별적으로 허용함으로써 인터넷 속도를 향상시키는 동시에 악성 프로그램까지 효과적으로 차단**합니다.

## 🔍 시도와 의도를 읽는 탐지 능력

하지만 앞서 말씀드린 것처럼, 세상에 완벽한 방화벽은 없습니다. 

그래서 SNarlink는 단순 차단에 그치지 않고 **시도와 의도를 읽는 탐지 능력**을 갖추었습니다. 

학생이 **방화벽을 우회하는 시도**나 만에 하나 뚫리더라도 **즉시 탐지**하여 **운영자에게 알람**을 띄우고, **즉각 대응**이 가능하도록 설계한 것이죠. 

그리고 **어떤 학생이 시도했는지까지 특정**이 가능합니다. 

이전 방화벽은 학생의 제보 혹은 사람의 눈으로 점검하면서 우회를 알 수 있었고, 누군지 특정도 어려웠습니다. 그러나 지금은 우회 시도 알림과 동시에 특정까지 가능합니다!!

### AI가 학습하는 방화벽

방화벽은 **우회 기술들을 AI 로그 분석**을 통해 학습하며, 앞으로 유사한 시도는 모두 차단해버립니다. 

**단순한 설정된 차단 시스템이 아닌 학습하는 방화벽**이죠. 그래서 학원에서 방화벽 뚫는 시도를 하는 학생들도 필요한 겁니다. SNarlink의 학습 양분이 되니까요.

(이번 5월에 방화벽을 교체하면서 불완전한 시기가 있었습니다... 당시 방화벽 안정화 및 AI가 학습 과정이어서 그랬습니다. 학생들에게는 정말 미안했네요 ㅠㅠ)

![학생들이 공부하는 모습](/image/SNarlink/study room.png)

## 🍎 애플 기기는 왜 까다로웠나?

가장 까다로웠던 건 Apple이었습니다. Apple 기기의 경우, 우회 트래픽 구조가 매우 정교합니다. 

우리는 애플 트래픽만 별도로 분석했고, 관련 코드만 2,000줄 이상 구현했습니다. 

애플 기기 기능 중 학습에 필요한 부분(인증, 로그인, 캘린더, 저장된 음악 듣기 기능)은 허용하고, 이외 우회 및 Private Relay, 음악검색, 뉴스, 음악 다운로드 및 스트리밍, game 같은 기능은 모두 차단합니다. 

그 결과, **iMessage까지 거의 완벽하게 차단**할 수 있었습니다.

### 실시간 모니터링과 자동 대응

이전에는 iMessage 차단이 일시적으로 가능하더라도, Apple 측의 업데이트나 통신 구조 변경이 있을 경우 다시 뚫리는 현상이 반복되곤 했습니다. 

뚫렸는지 인지하는 데에도 시간이 걸렸고, 대응까지도 수동적일 수밖에 없었습니다. 

그러나 현재는 시스템이 실시간으로 트래픽 이상 징후를 감지하고, 혹여나 iMessage가 뚫리더라도 즉시 알림이 발생하며, 대응도 자동화되어 빠르게 이루어집니다.

## 🔗 URL 단위 예외 처리: 오르비 문제 해결

**URL 단위 예외 처리도 가능합니다.** 현재는 베타 버전이지만, URL 단위로 세밀하게 접근을 허용하는 기능도 갖추고 있습니다. 

위에 말씀드린 **오르비가 가장 대표적인 사례**입니다. 

오르비는 같은 기반 시스템을 공유하고 있어, 기존에는 오르비 커뮤니티만 차단이 불가능했습니다. 커뮤니티와 클래스를 같이 차단해야 했죠. 

**하지만 URL 단위 예외 처리를 통해 지금의 방화벽에서는 커뮤니티만 차단이 가능합니다!!**

### 더 나아간 기술: 개별 콘텐츠 접근 제어

거기서 더 나아간 기술은 학생이 유튜브에서 특정 교육 영상만 보거나, 학습 카페의 특정 게시글만 보려는 경우, 해당 주소만 열어주는 기능입니다. 

기술적으로는 구현되어 있으나, 실효성과 실무 효율성을 고려해 현재는 배포하지 않았습니다.

## ⚖️ SNarlink_Frespon: 자유와 책임의 균형

방화벽의 본질은 '차단'이 아닙니다. 학생이 학습에 몰입할 수 있는 환경을 만들어주는 도구입니다.

학습자료 결제, 강의 수강, 정보 탐색 등 필요에 따라 인터넷이 꼭 필요한 경우도 있죠. 

이때 학생은 학생실 선생님께 요청하면, **15분 / 30분 / 60분 단위로 일회용 인터넷 비밀번호를 부여**받게 됩니다. 부여받은 시간이 끝나면 모두 종료됩니다.

*기본은 15분이며, 30분 이후는 필요시에만 부여됩니다.

![모니터링 시스템 화면](/image/SNarlink/monitor.png)

### 핫스팟 방식의 한계를 극복하다

과거에는 핫스팟으로 개별 허용하는 방식이었습니다만, 핫스팟을 허락된 학생 외 사용하는 등 관리 부담이 크고 딴짓의 가능성도 많았기에 전면 개편했습니다. 

이번 업데이트에서 유용한 기능 중 하나입니다! 허락된 학생에게만 제공되는 것뿐만 아니라 시간이 정해져있어 학생도 필요한 업무에만 사용합니다.

이 시스템의 이름은 **SNarlink_Frespon**입니다. Free + Responsibility. 자유를 줄 테니, 그 자유는 공부에만 써야 한다는 책임을 함께 묻는 구조입니다.

대부분의 학생들도 이 원칙을 잘 지켜주고 있습니다.

## 📊 학습 데이터 분석: 학생 개개인의 성장을 돕는 기술

우리가 개발한 방화벽의 가장 강력한 무기는, 차단 데이터뿐만 아니라

**학생들의 학습 데이터를 측정하고 분석할 수 있는 구조**

라는 점입니다. 

등록된 기기만 접속이 가능하며, 기기별로 접속 로그, 집중 시간대, 강의 시청 기록 등이 자동으로 기록됩니다. 

학습 사이트 이용과 스트리밍 시간을 분단위로 정밀 측정하여 분석하는 것이지요. 

또한 기기만 방화벽 시스템에 등록할 뿐, 학생들 기기에 인증서나 기타 프로그램 등을 별도로 깔지 않습니다.

![학습 데이터 리포트 화면](/image/SNarlink/report.png)

### 초개인화된 피드백 제공

이를 통해 학생 개개인의 학습 행동을 정량화하고, **초개인화된 피드백을 제공**할 수 있습니다. 

현재 데이터의 정합성 확보는 완료되었으며, 이를 통한 시각화, 리포팅 기술은 **금년 내 개발 완료 예정**입니다. 기대하셔도 좋습니다.

물론 모든 데이터는 익명화 처리되어 저장되며, 디지털 윤리 기준을 철저히 준수하고 있습니다. 개인정보에 대한 우려는 하지 않으셔도 됩니다.

## 🎯 기술로 교육을 바꾸고, 교육이 기술을 발전시킨다

우리는 기술로 교육을 바꾸고 있습니다. 그리고 교육이 기술을 발전시킬 것입니다.

우리의 방화벽은 단순히 '막는 장비'가 아닙니다. **차세대 교육 보조 시스템이자, 학생의 몰입과 성장을 돕기 위한 AI 기반 플랫폼**입니다. 

이 모든 것을 외부 솔루션 없이, 핵심 고급 인력이신 연구소장 Ryun, Ph.D.을 모셔와 자체 연구소와 인력만으로 만들어냈습니다. 

**우리는 마케팅보다 기술에 투자하는 기업**입니다. 화려한 포장이 아닌, 실질적인 성과로 이야기하려 합니다.

![SN Academy 건물 외관](/image/SNarlink/SN academy.png)

그래서 자신 있게 말씀드립니다. **SN독학기숙학원은 기술적, 윤리적으로 대한민국 최상위 수준의 보안 교육 환경을 갖춘 교육 기관입니다.** 

우리는 교육 플랫폼으로 진화 중입니다. **그리고 학생들의 성공의 경험을 만들겠습니다.**

## 💬 마무리

이 글을 당사 학생, 학부모뿐 아니라 동종업계 분들께도 바칩니다.

SN독학기숙학원의 방화벽은 개발이 모두 완료되었으며, 본원에서 안정적으로 운용하고 있습니다. 

혹시 당사의 차세대 교육 방화벽 도입을 원하시거나 흥미가 있으신 대형학원들은 본원으로 연락 주시면, 라이선스 혹은 시공 협의 가능합니다.

**기술 문의**: snacademy@naver.com

**입학 문의**
- 📞 전화 상담: 031-771-0300 (내선번호 1번)
- 💬 카카오톡 채널: [SN독학기숙학원] 검색 후 문의`,
    category: 'columns',
    tags: ['방화벽', '보안', 'AI', '교육기술'],
    author: 'SN Academy',
    date: '2025-10-03',
    readTime: '12',
    featured: false,
    published: true,
    thumbnail: '/image/SNarlink/thumbnail.png',
    youtubeUrl: undefined,
    url: '/columns/SNarlink'
  },
  {
    id: 'ai-startup',
    title: 'SN에서 교육 AI 스타트업을 창업했습니다.',
    excerpt: '교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 초개인화 학습 혁신을 실현하는 SN Academy AI 스타트업을 소개합니다.',
    content: `# SN에서 교육 AI 스타트업을 창업했습니다

교육과 AI의 융합으로 학생 개개인의 잠재력을 극대화하는 초개인화 학습 혁신을 실현하는 SN Academy AI 스타트업을 소개합니다.

## 🚀 혁신적인 교육 AI 솔루션

SN Academy는 교육 분야의 혁신을 위해 AI 스타트업을 창업했습니다. 우리의 목표는 모든 학습자가 자신만의 맞춤형 학습 경험을 할 수 있도록 하는 것입니다.

## 🎯 핵심 가치

### 초개인화 학습
- 각 학습자의 학습 패턴과 속도를 분석
- 개인별 최적화된 학습 경로 제공
- 실시간 학습 진도 추적 및 피드백

### AI 기반 교육 기술
- 자연어 처리 기술을 활용한 질문-답변 시스템
- 학습 내용 이해도 자동 평가
- 개인별 학습 약점 분석 및 보완 방안 제시

## 🌟 우리의 비전

**"AI로 학생의 미래를 더 깊고, 더 정확하게, 더 빠르게 열어주는 것."**

## 🎯 우리의 미션

- 교육의 **불균형·비효율·정보 격차**를 해소합니다
- 학생에게는 **맞춤형 학습 경험**을 제공합니다
- 교사·학부모에게는 **투명한 학습 데이터 분석**을 제공합니다
- 교육 시장에는 **혁신적인 AI 도구**를 제공합니다

## 👥 Our Team

작지만 강력한 팀이 교육의 미래를 다시 씁니다.

### 🏢 팀 구성
- **대표 (CEO)**: 교육 현장 20년 경험, 전략과 비전을 이끄는 리더
- **AI 개발자 2명**: 대규모 언어모델과 AI 솔루션 연구
- **백엔드 개발자 1명**: 안정적인 데이터 처리와 서버 아키텍처
- **마케팅/데이터 분석 1명**: 학습 데이터 기반 전략 수립
- **디자이너 1명**: 직관적이고 감각적인 UX/UI 구현
- **프론트엔드 개발자 1명**: 웹/앱 인터페이스 개발
- **라벨링 전문가 1명**: AI 학습 데이터셋 구축 및 정제
- **운영 인력 1명**: 현장 운영 및 사용자 피드백

## 🛠️ Our Products

SN 생태계를 구성하는 핵심 AI 제품들입니다.

### 🔗 SNarlink
**초정밀 학습 분석 방화벽 시스템**
- 온라인 학습 활동을 데이터화하여 집중도 측정
- 학부모/교사에게 투명한 리포트 제공

### 🤖 SNarGPT
**수능 수학 문제를 99%+ 정확도로 풀이**
- 정확한 개념 설명과 단계별 풀이
- 실제 수험생에게 필요한 피드백 제공

### 🎯 SNarGO
**수능문제 풀이 전문 AI**
- 평가원 기출부터 최신 모의고사까지 정밀 해설
- 원하는 방식으로 빠르고 정확한 풀이

### ⚡ SNarGEN
**기존 교육 업체의 1% 비용으로 고퀄 문제 생성**
- 평가원 수준의 문항 자동 생성
- 콘텐츠 제작의 패러다임 전환

### 📱 SNarOCR
**촬영만 하면 자동 인식·분석하는 시험지 OCR**
- 문제 영역 자동 인식 및 정규화
- 문제은행 연동으로 즉시 학습 관리

## 🌟 교육의 새로운 패러다임을 설계합니다

우리는 작은 팀이지만 변화의 파급력은 결코 작지 않습니다. 우리의 목표는 단 하나, **모든 학생이 자신만의 맞춤형 학습 여정**을 걷도록 돕는 것입니다.

---

**SN Academy AI · 초개인화 학습 혁신**`,
    category: 'startup',
    tags: ['AI교육', '스타트업', '에듀테크'],
    author: 'SN Academy',
    date: '2025-09-29',
    readTime: '15',
    featured: true,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: undefined,
    url: '/startup/ai-startup'
  },
  {
    id: 'sn-originals-intro',
    title: 'SN Originals 고전문학 시리즈를 소개합니다',
    excerpt: '최재천 선생님의 "알면 사랑한다"는 지혜로 시작하는 SN Originals 고전문학 시리즈. 만화영화처럼 익숙하게, AI 기술과 함께하는 새로운 고전문학 학습법을 소개합니다.',
    content: `# SN Originals 고전문학 시리즈를 소개합니다

## 💭 "알면 사랑한다" - 최재천 선생님의 지혜

이 시대의 석학 최재천 선생님께서 자주 하시는 말씀 중에서, '알면 사랑한다'는 말이 있습니다. 꽤 직관적으로 이해할 수 있는 말인 저 말은, 무언가에 대해 더 많이 알게 될수록 그것을 더 아끼고 좋아하게 될 수밖에 없다는 뜻입니다. 그만큼 무엇이든 충분히 알아가는 과정이 필요하다는 뜻이 되기도 하구요.

## 🤔 수능에서 가장 어려운 것, 고전문학

여러분들께서는 수능시험을 준비함에 있어서 '알기 어려운 것'을 꼽아보라면 어떤 것들을 꼽으실 건가요? 미적분? 유전자 발현과 조절? 맞습니다. 이런 개념들은 단어부터 생소하고, 저 단어에 숨은 뜻을 충분히 배우고 익히느라 한 달 이상의 시간을 쏟기도 하죠.

고전문학은 어떤가요? 분명 우리 말 같은 글이 써있기는 하는데, 일상 생활에서는 잘 쓰이지도 않는 한자어에 아래아 등 고어도 섞여있고, 각종 비유가 잔뜩 섞여있지만 그럼에도 열심히 한 번 겨우 읽어서 '아, 사랑 얘기구나'라고 이해했는데 해설을 읽어보니 임금이니 독립에 대한 염원이니 상징적인 의미를 담고 있다고 하여, 안 그래도 수면 부족에 시달리는 우리에게는 더할 나위 없는 마취제로 다가오는 것이 고전문학입니다.

## 🎬 만화영화처럼 익숙하게

그렇지만, 그 외계어 같은 고전문학을 마치 우리 어렸을 때 TV에서 보았던 만화영화처럼 전체적인 이야기의 줄기를 얼추 알고 있다면 어떨까요? 

예를 들어 「화왕가」에서는 할미꽃이 충신이라 왕이 중용해야 할 인재라는 걸 알고 있다거나, 「관동별곡」은 임금의 명을 받은 정철이 한양에서 강원도로, 다시 강원도 내에서 금강산과 동해를 관찰(이라고 쓰고 유람이라고 읽겠습니다)하는 여정을 담고 있다는 큰 맥락이라도 파악하고 있고, 혹시라도 그 안에서 정철이 놀라워했던 금강산에 담긴 조물주의 손길, 망양정에서 나눴던 신선과의 대화 등까지 기억하고 있다면, 여기에 이어서 각종 비유나 대구를 파고들어 공부해야 하는 상황이 오더라도 거부감이 훨씬 줄어들지 않을까요?

![SN오리지날 고전문학 시리즈 - 북천가 예시](https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center)

## 🏰 머릿속 성을 쌓는 과정

아쉽게도 공부는 대신 해드릴 수가 없죠. 공부는 여러분들께서 여러분들 머리에 누구도 빼앗을 수 없게 성을 직접 축조하는 과정과도 같으니까요. 그럼 저희 SN아카데미가 여러분들이 머릿속 성을 쌓는데 있어서 어떤 도움을 드릴 수 있을까? 하는 것이 고민의 시작점이었습니다.

그래서 저희가 내린 결론은, **'우리가 좋아해서 흥미롭게 보았던 콘텐츠는 기억하려 하지 않아도 기억이 날 수밖에 없다'**였습니다.

SN오리지날 고전문학 시리즈는 딱 그 생각에서 시작했습니다. 여러분들께서 쉽게 고전문학의 내용을 익숙하게 자주 접하고 많이 알고 있을수록, 억지로 공부해야 하더라도 좋아할 수 있다. 또 그렇게 하기에 세상은 어느새 많이 발전해서, 고전문학을 읽고 이해하는 단계에서부터 필요하면 이를 그림으로 즐기고 목소리를 듣는 것에 이르기까지 AI가 수많은 도움을 줄 수 있는 시대가 되었습니다.

![챗GPT를 활용해 AI 그림을 그리는 과정 - 사미인곡 예시](https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center)

## 🚀 AI 기술과 함께하는 고전문학

이렇게, 전통적인 방식의 전문 콘텐츠 제작 과정을 거치지 않더라도, 상대적으로 적은 비용과 노력, 또 매우 중요하게는 짧은 콘텐츠 제작 시간으로 우리의 공부를 다채롭게 만들어줄 수 있는 기술들을 저희 SN아카데미는 다수 보유하고 있고 계속 개발해 나가고 있습니다.

## 📅 업로드 계획

현재의 계획은 **주2회(화/금) 베이스**로 고전문학 시리즈를 업로드하여 비단 금번 2026 수능만을 위해서가 아니더라도, 「관동별곡」, 「사미인곡」, 「속미인곡」 등 수능을 준비하는 수험생이라면 필수적으로 알아야 하는 고전 명문부터 차곡차곡 콘텐츠를 쌓아 나가고자 하고, 향후 SN아카데미에서 출시 준비 중인 SNarGPT, SNarPortal 등 타 서비스 출시에 따라 SNarGPT를 활용한 공부 방법, SN 단편선 등도 선보이고자 하는 원대한 계획을 가슴 속에 품고 있습니다.

## 🎥 YouTube 채널 계획

유튜브에 한정한 계획을 조금 더 구체적으로 밝히자면 유튜브 채널을 막 시작한 지금(2025년 9월말) 기준으로는 롱폼 형태의 동영상만 올라가고 있지만, 조만간 숏폼과 모든 영상에 한/영 자막이 추가될 예정입니다. 

그렇지만 한편으로는 고전문학을 공부하는 것은 시대를 적게 탄다고도 생각하기 때문에, 특별히 당장의 관심만을 얻기 위한 자극적 콘텐츠 제작보다는 시간이 오래 지난 시점에 보더라도 재미있게 볼 수 있는, 잔잔하지만 미소 짓게 되는 콘텐츠를 만들고자 하는 마음이 있습니다.

## 🏫 SN아카데미의 약속

SN아카데미는 2014년부터 경기도 양평에서 꾸준히 독학기숙학원을 운영하며 여러분들의 수능 준비가 수월할 수 있도록 일 24시간, 주 7일 내내 고민하고 있습니다. 

시대의 트렌드를 따라가는 것도 중요하지만, 시대가 빠르게 변하더라도 수험생 여러분들이 원칙에 기반하여 급하지 않은 마음으로 차분하게 공부에만 전념할 수 있는 환경을 제공하는데 최선의 가치를 두고 정진하도록 하겠습니다. 

수험생 여러분들뿐만 아니라 학부모님, 일반 시청자분들 등 다양한 관련자분들께서 많은 관심 보여주시고 문의와 피드백 등으로 참여해 주신다면 저희 SN아카데미가 성실함으로 보답하도록 하겠습니다.

## 🙏 마무리

모든 수험생 여러분의 건승을 바라며, 또 다른 재미있는 읽을거리를 들고 찾아뵙겠습니다. 감사합니다.`,
    category: 'SN Originals',
    tags: ['SN Originals', '고전문학', '수능국어'],
    author: 'SN Academy',
    date: '2025-10-02',
    readTime: '12',
    featured: false,
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/sn-originals-intro'
  },
  {
    id: 'sokmieungok',
    title: '조선시대 정철의 "기다리는 나를~ 왜 모르시나요~~"\n(고전문학 「속미인곡」)',
    excerpt: '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 6탄으로 「속미인곡」을 준비했습니다.
「속미인곡」은 1588~1589년 경 정철이 고향인 전남 창평에 우거하며 「사미인곡」에 이어 지은 가사입니다.

「사미인곡」과 마찬가지로 연군의 정을 임을 이별한 여인의 애달픈 심정에 비하여 표현한 작품으로,
갑녀와 을녀의 대화 형식으로 이야기를 풀어내어 자신(을녀)의 사연과 사모의 정을 구슬프게 표현한 특별한 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「속미인곡」- 사랑의 절정과 문학의 완성

### 💔 사랑의 절정을 담은 문학
「속미인곡」은 정철이 1588~1589년 경 고향인 전남 창평에서 「사미인곡」에 이어 지은 가사입니다. 이 작품은 단순한 정치적 충성을 넘어서, 진정한 사랑의 절정과 그리움의 깊이를 보여주는 조선 가사 문학의 최고봉입니다.

### 🎭 문학적 완성도
- **감정의 절정**: "기다리는 나를 왜 모르시나요"라는 절절한 호소
- **정치적 배경**: 정철의 정치적 좌절과 고향으로의 귀향
- **문학적 완성도**: 조선 가사 문학의 백미로 평가받는 작품
- **감정의 깊이**: 단순한 충성심을 넘어선 진정한 사랑의 표현

### 🌍 세계 문학사적 의의
이 작품은 동아시아 정치시의 전통을 계승하면서도, 조선만의 독특한 정치적 상황을 반영합니다. 정치적 충성을 진정한 사랑으로 승화시키는 방식은 세계 정치 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해
1. **사랑의 문학적 표현**: 정치적 충성을 사랑으로 승화시키는 방법
2. **시대적 배경**: 임진왜란 이후의 복잡한 정치적 상황
3. **작가의 심경**: 정치적 좌절과 고향에 대한 그리움
4. **문학적 가치**: 조선 가사 문학의 완성도

### 🎭 문학 감상의 진정한 즐거움
「속미인곡」을 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 감정 표현의 힘과 진정한 사랑의 의미를 일깨워줍니다. 진정한 문학은 개인의 감정을 넘어서 시대의 아픔과 기쁨을 담아낼 수 있다는 것을 보여줍니다.

---

## English Description

### "Sokmiin-gok" - The Culmination of Love and Literature

**Sokmiin-gok** (속미인곡) is a masterpiece of classical Korean literature written by Jeong Cheol (정철) around 1588-1589 during his exile in Changpyeong, Jeollanam-do. This work, which follows "Samiin-gok" (사미인곡), represents the pinnacle of classical Korean poetry and showcases the deepest expression of love and longing in Korean literature.

**Literary Excellence:**
- **Emotional Climax**: Expresses the deepest yearning with "Why don't you know the one who waits for you?"
- **Political Context**: Reflects Jeong Cheol's political struggles and exile
- **Literary Achievement**: Considered the masterpiece of classical Korean poetry
- **Emotional Depth**: Transcends mere political loyalty to express genuine love

**Global Literary Significance:**
This work inherits the East Asian tradition of political poetry while reflecting the unique political conditions of Joseon. The way it transforms political loyalty into genuine love represents a valuable contribution to world literature, demonstrating how literature can sublimate political emotions into the highest form of human expression.

**Contemporary Relevance:**
"Sokmiin-gok" shows us that true literature has the power to express not only personal emotions but also the deepest human longings. It demonstrates how literature can serve as a medium for understanding the complex relationship between love, loyalty, and political commitment.`,
    category: 'SN Originals',
    tags: ['고전문학', '속미인곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-10-01',
    readTime: '8',
    featured: false,
    published: true,
    thumbnail: '/image/thumbnail/sokmieungok_thumbnail.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=TQEkvJsu5UY',
    url: '/originals/sokmieungok'
  },
  {
    id: 'samieungok',
    title: '선조를 향한 정철의 중독된 사랑\n(고전문학 「사미인곡」)',
    excerpt: '안녕하세요 SN독학기숙학원입니다😊 보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 5탄으로 「사미인곡」을 준비했습니다.
「사미인곡」은 1588년(선조 21) 정철이 고향인 전남 창평에 우거하며 지은 가사입니다.

임금과 이별한 본인이 처지를 남편과 이별한 한 여인의 상황으로 그려내면서,
계절의 변화에 따라 매화, 옷, 달, 별, 눈 등 다양한 비유와 대구 등을 사용하여 감각적으로 그려낸 작품입니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「사미인곡」- 정치적 사랑의 문학적 승화

### 💕 사랑과 충성의 문학적 표현
「사미인곡」은 정철이 선조에 대한 충성과 사랑을 미인에 비유하여 표현한 문학적 걸작입니다. 이 작품은 단순한 정치적 충성을 넘어서, 복잡한 인간의 감정을 아름다운 문학적 비유로 승화시킨 조선 가사 문학의 대표작입니다.

### 🎭 문학적 완성도
- **정교한 비유 기법**: 미인에 비유한 독창적이고 정교한 표현
- **감정의 깊이**: 정치적 좌절과 그리움의 복합적 감정 표현
- **시대적 의미**: 임진왜란 이후의 복잡한 정치적 상황 반영
- **문학적 가치**: 조선 가사 문학의 발전과 완성

### 🌍 세계 문학사적 의의
이 작품은 동아시아 정치시의 전통을 계승하면서도, 조선만의 독특한 정치적 상황을 반영합니다. 정치적 충성을 문학적으로 승화시키는 방식은 세계 정치 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해
1. **비유와 상징**: 미인 비유의 의미와 문학적 효과
2. **시대적 배경**: 임진왜란과 정유재란의 정치적 영향
3. **작가의 심경**: 정치적 좌절과 충성심의 복잡한 갈등
4. **문학적 가치**: 가사 문학의 발전과 완성도

### 🎭 문학 감상의 진정한 즐거움
「사미인곡」을 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 감정 표현의 힘과 정치적 상황을 문학적으로 승화시키는 방법을 보여줍니다. 진정한 문학은 개인의 감정을 넘어서 시대의 아픔과 기쁨을 담아낼 수 있다는 것을 보여줍니다.

---

## English Description

### "Samiin-gok" - The Literary Sublimation of Political Love

**Samiin-gok** (사미인곡) is a masterpiece of classical Korean literature that expresses Jeong Cheol's loyalty and love for King Seonjo through the metaphor of a beautiful woman. This work transcends mere political loyalty to become a profound literary expression of complex human emotions.

**Literary Excellence:**
- **Sophisticated Metaphor**: Uses the metaphor of a beautiful woman with literary finesse
- **Emotional Depth**: Expresses the complex feelings of political frustration and longing
- **Historical Context**: Reflects the complex political situation after the Imjin War
- **Literary Achievement**: Represents the pinnacle of classical Korean poetry

**Global Literary Significance:**
This work inherits the East Asian tradition of political poetry while reflecting the unique political conditions of Joseon. The way it transforms political loyalty into literary expression represents a valuable contribution to world literature, demonstrating how literature can sublimate political emotions into art.

**Contemporary Relevance:**
"Samiin-gok" shows us that true literature has the power to express not only personal emotions but also the pain and joy of an entire era. It demonstrates how literature can serve as a medium for understanding complex political and emotional relationships.`,
    category: 'SN Originals',
    tags: ['고전문학', '사미인곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-09-30',
    readTime: '7',
    featured: false,
    published: true,
    thumbnail: '/image/thumbnail/22_thumbnail2.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=50nJegN2YSQ',
    url: '/originals/samieungok'
  },
    {
      id: 'gapminga',
      title: '내 속도 모르면서 가라 마라 막말하지 마라\n(수능 고전문학 「갑민가」)',
      excerpt: '조선 후기 백성의 아픔과 저항을 담은 「갑민가」로 진정한 민중 문학을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 4탄으로 「갑민가」를 준비했습니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「갑민가」- 민중의 절규와 저항

### 💔 시대의 아픔을 담은 문학
「갑민가」는 조선 후기 백성들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.

### 🎭 문학적 가치와 의미
- **민중의 진실한 목소리**: 지배층이 아닌 백성의 시각에서 바라본 사회
- **날카로운 사회 비판**: 당시 사회의 모순을 직설적으로 폭로
- **문학사적 의의**: 조선 후기 민중 문학의 대표작
- **감정적 공감**: 현대 독자들도 공감할 수 있는 보편적 메시지

### 🌍 세계 문학사적 관점
이 작품은 동아시아 민중 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 민중의 고통과 저항을 문학적으로 승화시킨 방식은 세계 민중 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 문학적 이해
1. **민중 문학의 전통**: 동아시아 민중 문학의 흐름과 특징
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등
3. **문학과 사회**: 문학이 사회 변화에 미치는 영향
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움
「갑민가」를 읽는 것은 과거의 아픔을 되새기는 것만이 아닙니다. 이 작품은 우리에게 문학이 가진 사회적 힘과 민중의 목소리가 얼마나 소중한지를 일깨워줍니다. 진정한 문학은 아름다움만이 아니라, 진실과 정의를 추구하는 힘을 가지고 있다는 것을 보여줍니다.

---

## English Description

### "Gapmin-ga" - The Cry of the People: A Masterpiece of K-Classic Literature

**Gapmin-ga** (갑민가) stands as one of the most powerful works in Korean classical literature, representing the authentic voice of the oppressed during the late Joseon Dynasty (1392-1910). This masterpiece transcends mere literary expression to become a profound social document that exposes the contradictions and corruption of the ruling class while giving voice to the voiceless masses.

**Literary and Social Significance:**
- **Authentic Voice**: Represents the perspective of the common people, not the ruling elite
- **Sharp Social Criticism**: Directly exposes the social contradictions of the time
- **Literary Historical Value**: A masterpiece of late Joseon popular literature
- **Emotional Resonance**: Contains universal messages that modern readers can relate to

**K-Classic Literature Context:**
This work represents the pinnacle of Korean classical literature's engagement with social issues. Unlike court literature that often idealized the ruling class, "Gapmin-ga" provides an unfiltered view of the common people's suffering and resistance. It demonstrates how Korean literature has historically served as a vehicle for social critique and human dignity.

**Global Literary Context:**
This work inherits the East Asian tradition of popular literature while reflecting the unique social conditions of Joseon Korea. The way it transforms the suffering and resistance of the people into literary expression represents a valuable contribution to world literature, demonstrating the power of literature to give voice to the voiceless and challenge social injustice.

**Contemporary Relevance:**
"Gapmin-ga" reminds us that true literature has the power not only to create beauty but also to pursue truth and justice. It shows how literature can serve as a medium for social change and the expression of human dignity, making it relevant for contemporary readers interested in social justice and human rights.

**For International Readers:**
This work is particularly valuable for those studying Korean culture and literature, as it provides insight into the historical struggles of the Korean people and the role of literature in Korean society. It demonstrates how Korean classical literature addresses universal themes of oppression, resistance, and human dignity that resonate across cultures and time periods.`,
    category: 'SN Originals',
    tags: ['고전문학', '갑민가', '민중문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-22',
    readTime: '6',
    featured: false,
    published: true,
    thumbnail: '/image/thumbnail/GABMINGA_2_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=3ZGE-RvBinQ',
    url: '/originals/gapminga'
  },
  {
    id: 'hwangokga',
    title: '너 그렇게 여자만 좋아하다 피똥싼다\n(수능 고전문학 「화왕가」)',
    excerpt: '조선 후기 풍자 문학의 백미 「화왕가」로 문학의 유머와 비판정신을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 2탄으로 「화왕가」를 준비했습니다.

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「화왕가」- 풍자 문학의 진수

### 😂 유머로 승화된 사회 비판
「화왕가」는 조선 후기 사회의 모순과 인간의 욕망을 풍자적으로 표현한 문학적 걸작입니다. 이 작품은 단순한 비판을 넘어서, 유머와 해학을 통해 사회의 부조리를 날카롭게 지적하는 문학의 힘을 보여줍니다.

### 🎭 문학적 완성도
- **정교한 풍자 기법**: 사회 모순을 유머러스하게 비판하는 문학적 기교
- **현실적 통찰력**: 인간의 욕망과 사회적 모순을 정확히 포착
- **문학적 완성도**: 조선 후기 풍자 문학의 최고 수준
- **시대를 초월한 메시지**: 오늘날에도 유효한 보편적 가치

### 🌍 세계 문학사적 의의
이 작품은 동아시아 풍자 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 유머와 해학을 통한 사회 비판의 방식은 세계 풍자 문학사에서도 높이 평가받을 만한 문학적 성취입니다.

### 📚 깊이 있는 문학적 이해
1. **풍자 문학의 전통**: 동아시아 풍자 문학의 흐름과 특징
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등
3. **문학적 기법**: 풍자와 해학의 효과적 활용
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움
「화왕가」를 읽는 것은 단순한 학습이 아닙니다. 이 작품은 우리에게 문학이 가진 유머의 힘과 사회 비판의 정신을 일깨워줍니다. 진정한 문학은 아름다움뿐만 아니라, 사회의 부조리를 지적하고 개선하려는 의지를 담고 있다는 것을 보여줍니다.

---

## English Description

### "Hwangok-ga" - The Art of Satirical Literature

**Hwangok-ga** (화왕가) is a masterpiece of classical Korean literature that uses humor and satire to expose the contradictions of late Joseon society and human desires. This work transcends mere criticism to demonstrate the power of literature to address social injustice through wit and humor.

**Literary Excellence:**
- **Sophisticated Satire**: Uses humor to criticize social contradictions with literary finesse
- **Realistic Insight**: Accurately captures human desires and social contradictions
- **Literary Achievement**: Represents the highest level of satirical literature in late Joseon
- **Timeless Message**: Contains universal values that remain relevant today

**Global Literary Significance:**
This work inherits the East Asian tradition of satirical literature while reflecting the unique social conditions of Joseon. The way it uses humor and wit for social criticism represents a valuable contribution to world literature, demonstrating how literature can address social issues through entertainment.

**Contemporary Relevance:**
"Hwangok-ga" reminds us that true literature has the power not only to create beauty but also to critique society and inspire change. It shows how humor can be a powerful tool for social commentary and how literature can serve as a mirror to society.`,
    category: 'SN Originals',
    tags: ['고전문학', '화왕가', '풍자문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-26',
    readTime: '5',
    featured: false,
    published: true,
    thumbnail: '/image/thumbnail/hwawangga_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=6tsl5IIMy_o',
    url: '/originals/hwangokga'
  },
  {
    id: 'bukcheonga',
    title: '좋긴 한데 유배 생활 이래도 됨?\n고전문학 「북천가」',
    excerpt: '조선 후기 민중의 아픔과 저항을 담은 「북천가」로 진정한 문학의 힘을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 3탄으로 「북천가」를 준비했습니다.

북천가는 이번 수능에 출제될 확률이 높은 작품인데요.
이동하실 때, 머리를 잠시 식히실 때 보시면 도움이 되실 겁니다!

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「북천가」- 민중 문학의 진수

### 💔 시대의 아픔을 담은 문학
「북천가」는 조선 후기 북한 지역 민중들의 고통과 절망을 생생하게 담아낸 작품입니다. 이 작품은 단순한 문학 작품을 넘어서, 당시 사회의 모순과 지배층의 부패를 날카롭게 비판하는 사회적 메시지를 담고 있습니다.

### 🎭 문학적 가치와 의미
- **민중의 진실한 목소리**: 지배층이 아닌 민중의 시각에서 바라본 사회
- **날카로운 사회 비판**: 당시 사회의 모순을 직설적으로 폭로
- **지역적 특수성**: 북한 지역의 고유한 상황과 고통을 생생하게 표현
- **문학사적 의의**: 조선 후기 민중 문학의 대표작

### 🌍 세계 문학사적 관점
이 작품은 동아시아 민중 문학의 전통을 계승하면서도, 조선만의 독특한 사회적 상황을 반영합니다. 민중의 고통과 저항을 문학적으로 승화시킨 방식은 세계 민중 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 문학적 이해
1. **민중 문학의 전통**: 동아시아 민중 문학의 흐름과 특징
2. **사회적 배경**: 조선 후기 사회의 모순과 갈등
3. **문학과 사회**: 문학이 사회 변화에 미치는 영향
4. **현대적 의미**: 과거와 현재의 연결점과 교훈

### 🎭 문학 감상의 진정한 즐거움
「북천가」를 읽는 것은 과거의 아픔을 되새기는 것만이 아닙니다. 이 작품은 우리에게 문학이 가진 사회적 힘과 민중의 목소리가 얼마나 소중한지를 일깨워줍니다. 진정한 문학은 아름다움만이 아니라, 진실과 정의를 추구하는 힘을 가지고 있다는 것을 보여줍니다.

---

## English Description

### "Bukcheon-ga" - The Voice of the Oppressed

**Bukcheon-ga** (북천가) is a powerful work of classical Korean literature that gives voice to the suffering and resistance of the common people in the northern regions during the late Joseon Dynasty. This work transcends mere literary expression to become a social document that exposes the contradictions and corruption of the ruling class.

**Literary and Social Significance:**
- **Authentic Voice**: Represents the perspective of the common people, not the ruling elite
- **Sharp Social Criticism**: Directly exposes the social contradictions of the time
- **Regional Specificity**: Vividly expresses the unique suffering of the northern regions
- **Literary Historical Value**: A masterpiece of late Joseon popular literature

**Global Literary Context:**
This work inherits the East Asian tradition of popular literature while reflecting the unique social conditions of Joseon. The way it transforms the suffering and resistance of the people into literary expression represents a valuable contribution to world literature, demonstrating the power of literature to give voice to the voiceless.

**Contemporary Relevance:**
"Bukcheon-ga" reminds us that true literature has the power not only to create beauty but also to pursue truth and justice. It shows how literature can serve as a medium for social change and the expression of human dignity.`,
    category: 'SN Originals',
    tags: ['고전문학', '북천가', '민중문학', '사회비판'],
    author: 'SN Academy',
    date: '2025-09-24',
    readTime: '9',
    featured: false,
    published: true,
    thumbnail: '/image/thumbnail/bukcheonga_thumbnail_02.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=xhyppBm3_o4',
    url: '/originals/bukcheonga'
  },
  {
    id: 'gwandong-byeolgok',
    title: '정철의 강원도 브이로그\n(고전문학 「관동별곡」)',
    excerpt: '정철의 대표작 「관동별곡」으로 조선 가사 문학의 아름다움을 만나보세요.',
    content: `안녕하세요 SN독학기숙학원입니다😊

보기만 해도 수능 점수가 오르는 국어 고전문학 시리즈 4탄으로 「관동별곡」을 준비했습니다.

[타임스탬프]
00:00 인트로, 작품 배경
00:52 서사 - 죽림
01:06 서사 - 연추문, 이동(평구~치악산)
01:24 서사 - 소양강
01:38 서사 - 철원, 태봉국 궁궐터
01:56 서사 - 회양
02:08 본사1(금강산) - 회양
02:23 본사1(금강산) - 만폭동
02:38 본사1(금강산) - 금강대
02:55 본사1(금강산) - 진헐대
03:44 본사1(금강산) - 개심대
04:04 본사1(금강산) - 비로봉
04:43 본사1(금강산) - 화룡소
05:08 본사1(금강산) - 불정대
05:40 본사2(동해) - 산영루
06:18 본사2(동해) - 총석정
06:35 본사2(동해) - 삼일포
06:59 본사2(동해) - 의상대
07:42 본사2(동해) - 경포대
08:20 본사2(동해) - 강릉
08:40 본사2(동해) - 죽서루
09:07 본사2(동해)/결사 - 망양정

**"AI 그림과 친절한 해설로 즐기는 고전문학!
보기만 해도 국어 감각이 살아납니다.
수능 대비는 물론, 고전문학을 친숙하게 이해하고 싶다면 지금 바로 시작하세요!"**

## 「관동별곡」- 조선 가사 문학의 백미

### 🌄 작품의 진정한 아름다움
「관동별곡」은 단순한 풍경 묘사를 넘어서, 정철이 관동 지역(강원도)의 자연을 통해 인간의 내면세계를 표현한 문학적 걸작입니다. 이 작품은 조선 가사 문학의 최고봉으로 평가받으며, 자연과 인간의 조화를 통해 문학의 본질을 보여줍니다.

### 🎨 문학적 완성도
- **시각적 묘사**: 관동의 산천을 생생하게 그려내는 회화적 표현
- **음악적 리듬**: 가사의 운율과 리듬이 자연의 흐름과 일치
- **감정의 깊이**: 단순한 감탄을 넘어선 철학적 사유
- **상징적 의미**: 자연을 통한 인간 존재의 의미 탐구

### 🌍 세계 문학사적 의의
이 작품은 동아시아 자연시의 전통을 계승하면서도, 조선만의 독특한 문학적 성취를 보여줍니다. 자연에 대한 사랑과 경외심, 그리고 인간의 감정을 자연과 조화롭게 표현하는 방식은 세계 문학사에서도 높이 평가받을 만한 가치를 지닙니다.

### 📚 깊이 있는 이해
1. **자연과 문학**: 자연을 통한 문학적 표현의 전통
2. **조선 문학의 특성**: 중국 문학과 구별되는 조선 문학의 독창성
3. **가사 문학의 발전**: 조선 가사 문학의 완성도
4. **현대적 의미**: 자연과 인간의 관계에 대한 현대적 해석

### 🎭 작품 감상의 즐거움
「관동별곡」을 읽는 것은 단순한 학습이 아닙니다. 정철이 바라본 관동의 아름다운 풍경을 마음속으로 그려보며, 자연과 인간의 조화로운 관계를 느껴보는 문학적 여행입니다. 이 작품은 우리에게 자연의 소중함과 문학의 아름다움을 동시에 일깨워줍니다.

---

## English Description

### "Gwandong-byeolgok" - A Masterpiece of Korean Classical Literature

**Gwandong-byeolgok** (관동별곡) is not merely a description of beautiful landscapes, but a profound literary work that explores the relationship between nature and human consciousness. Written by Jeong Cheol (정철), this piece represents the pinnacle of classical Korean poetry and showcases the unique beauty of Joseon Dynasty literature.

**Literary Excellence:**
- **Visual Poetry**: Paints the landscapes of Gwandong with vivid, pictorial language
- **Musical Rhythm**: The rhythm and meter of the verse mirror the flow of nature
- **Emotional Depth**: Transcends simple admiration to explore philosophical contemplation
- **Symbolic Meaning**: Uses nature as a medium to explore the meaning of human existence

**Global Literary Significance:**
This work inherits the East Asian tradition of nature poetry while achieving a uniquely Korean literary accomplishment. The way it harmoniously expresses human emotions through nature represents a valuable contribution to world literature, demonstrating the sophisticated relationship between humanity and the natural world.

**Contemporary Relevance:**
"Gwandong-byeolgok" offers timeless insights into the human-nature relationship, making it relevant for modern readers who seek to understand our connection with the environment and the role of literature in expressing this relationship.`,
    category: 'SN Originals',
    tags: ['고전문학', '관동별곡', '정철', '가사문학'],
    author: 'SN Academy',
    date: '2025-09-28',
    readTime: '12',
    featured: false,
    published: true,
    thumbnail: '/image/thumbnail/gwandongbealgok_sn_series.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=9T06DoJaMHs',
    url: '/originals/gwandong-byeolgok'
  },
];

// 헬퍼 함수들
export function getLatestPosts(limit: number = 5): Post[] {
  return allPosts
    .filter(post => post.published) // published 된 글만 가져오기
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getFeaturedPosts(): Post[] {
  return allPosts.filter(post => post.featured && post.published); // featured 이고 published 된 글만 가져오기
}

export function getPostById(id: string): Post | undefined {
  return allPosts.find(post => post.id === id && post.published); // published 된 글만 찾기
}

export function getPostsByCategory(category: string): Post[] {
  return allPosts
    .filter(post => post.category === category && post.published) // published 된 글만 가져오기
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
}

export function searchPosts(query: string): Post[] {
  const lowercaseQuery = query.toLowerCase();
  return allPosts
    .filter(post => 
      post.published && // published 된 글만 검색
      (post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
}

export function getPaginatedPosts(page: number = 1, limit: number = 6): { posts: Post[], totalPages: number, currentPage: number } {
  const publishedPosts = allPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // 날짜 내림차순 정렬 추가
  const totalPosts = publishedPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const posts = publishedPosts.slice(startIndex, endIndex);
  
  return {
    posts,
    totalPages,
    currentPage: page
  };
}