// app/originals/snarlink-firewall/page.tsx
import Image from "next/image";

export const metadata = {
  title: "SNarlink: 공부만을 위한 방화벽, 11년의 진화",
  description:
    "SN독학기숙학원의 차세대 학습 특화 방화벽 이야기. 2014년 첫 도입부터 2025년 자체 개발 시스템까지, '차단'을 넘어 학습 몰입을 돕는 SNarlink의 철학과 기술.",
  openGraph: {
    title: "SNarlink: 공부만을 위한 방화벽, 11년의 진화",
    description:
      "SN독학기숙학원의 차세대 학습 특화 방화벽 이야기. 2014년 첫 도입부터 2025년 자체 개발 시스템까지.",
    type: "article",
  },
};

export default function Page() {
  return (
    <main>
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "28px 20px", lineHeight: 1.75 }}>
        {/* 헤더 섹션 */}
        <header>
          <h1 style={{ fontSize: "2rem", margin: "0 0 8px" }}>
            SNarlink: 공부만을 위한 방화벽, 11년의 진화
          </h1>
          <p style={{ color: "#555", margin: 0 }}>SN독학기숙학원 · 2025-10-03</p>
        </header>

        {/* 썸네일 */}
        <figure style={{ margin: "24px 0" }}>
          {/* 예: /public/images/snarlink/thumbnail.jpg 로 두세요 */}
          <Image
            src="/image/SNarlink/thumbnail.png"
            alt="SN독학기숙학원 방화벽 운영 현장 썸네일"
            width={1280}
            height={720}
            priority
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <figcaption style={{ color: "#666", fontSize: 14, marginTop: 8 }}>
            2014년부터 이어온 방화벽 운영의 기록
          </figcaption>
        </figure>

        {/* 인트로 */}
        <p>
          SN독학기숙학원은 2014년 국내 기숙학원 최초로 인터넷 방화벽을 도입했습니다.
          2018년에는 Cisco 장비로 한 차례 큰 도약을 했고, 2025년에는 교육 현장에 꼭 맞는
          차세대 방화벽을 자체 기술로 개발해 운영하고 있습니다. 이 글은 지난 11년의 흐름과,
          &quot;단순 차단&quot;을 넘어 학습 몰입을 돕는 시스템으로서 방화벽이 어떻게 진화했는지
          담담히 기록해 둔 이야기입니다.
        </p>

        <hr style={{ margin: "28px 0", border: 0, borderTop: "1px solid #eee" }} />

        {/* 연혁 */}
        <h2>SN의 방화벽, 짧은 역사</h2>
        <ul>
          <li>2014 — 방화벽 장비 최초 도입</li>
          <li>2016 — 장비 교체 및 전문 컨설팅, 운용 노하우 정립</li>
          <li>2018 — Cisco 상위 사양 장비 도입, 안정적 운영</li>
          <li>2025 — 교육 특화 차세대 방화벽 <strong>SNarlink</strong> 자체 개발</li>
        </ul>

        <figure style={{ margin: "16px 0 24px" }}>
          <Image
            src="/image/SNarlink/cisco firewall.png"
            alt="2018년에 도입했던 Cisco 방화벽 장비"
            width={1200}
            height={720}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <figcaption style={{ color: "#666", fontSize: 14, marginTop: 8 }}>
            2018년 도입 당시 Cisco 방화벽
          </figcaption>
        </figure>

        <p>
          Cisco 장비는 훌륭했습니다. 다만 교육 현장에서 자주 마주치는 &quot;섬세한 허용&quot;에는
          한계가 있었죠. 예를 들어 커뮤니티와 강의 서비스가 같은 기반을 공유하는 경우, 커뮤니티만
          막고 강의만 허용하기가 구조적으로 어려웠습니다. 그래서 우리는 방향을 바꾸었습니다.
        </p>

        {/* 전환의 이유 */}
        <h2>왜 '차단'만으로는 부족했을까</h2>
        <p>
          AI 시대가 오며 보안의 기준도 달라졌습니다. 이제는 단순 차단을 넘어, 학생의{" "}
          <em>시도</em>와 <em>의도</em>를 읽어내는 지능형 방어가 필요합니다.
          극소수 상위권 학생들의 기술적 시도까지 감안하면, 방화벽은 학습을 방해하지 않으면서도
          언제든 정교하게 대응할 수 있어야 합니다.
        </p>

        {/* SNarlink 소개 */}
        <h2>SNarlink_study — 오직 공부만을 위한 네트워크</h2>
        <figure style={{ margin: "16px 0 24px" }}>
          <Image
            src="/image/SNarlink/SNarlik Logo.png"
            alt="SNarlink_study 로고"
            width={560}
            height={200}
            style={{ width: "100%", height: "auto", borderRadius: 8, background: "#fafafa" }}
          />
          <figcaption style={{ color: "#666", fontSize: 14, marginTop: 8 }}>
            공부에만 집중하도록 설계된 전용 네트워크
          </figcaption>
        </figure>

        <p>
          SNarlink_study는 기존의 &quot;차단 중심&quot;을 넘어 실시간 DNS 분석과 로그 학습을 통해
          우회 시도를 감지하고 자동으로 정책을 생성합니다. 필요 없는 백그라운드 수집과 추적 요소는
          거르고, 정말 필요한 학습 정보만 남겨 속도와 안전을 함께 챙깁니다.
        </p>

        <ul>
          <li>실시간 우회 시도 감지 → 운영팀 알림</li>
          <li>시도 경로 학습 → 자동 차단 정책 생성</li>
          <li>허용 사이트 구조 변화에도 민첩 대응</li>
          <li>250명 중 소수 시도 전부 차단 (최근 사례)</li>
        </ul>

        <figure style={{ margin: "16px 0 24px" }}>
          <Image
            src="/image/SNarlink/orbi1.png"
            alt="오르비 커뮤니티/클래스 예외 처리 사례 1"
            width={1200}
            height={720}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </figure>
        <figure style={{ margin: "0 0 24px" }}>
          <Image
            src="/image/SNarlink/orbi2.png"
            alt="오르비 커뮤니티/클래스 예외 처리 사례 2"
            width={1200}
            height={720}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <figcaption style={{ color: "#666", fontSize: 14, marginTop: 8 }}>
            URL 단위 예외 처리(베타): 커뮤니티는 막고, 강의는 허용
          </figcaption>
        </figure>

        {/* 애플 트래픽 이슈 */}
        <h3>가장 까다로운 상대, Apple 트래픽</h3>
        <p>
          애플의 트래픽 구조는 정교합니다. 우리는 애플 관련 트래픽만 별도 분석하고 2,000줄이 넘는
          정책과 코드를 만들어, 학습에 필요한 인증·로그인·캘린더 등만 허용하고 Private Relay,
          음악 다운로드/스트리밍, 게임, iMessage 등을 거의 완벽에 가깝게 차단했습니다.
          시스템은 업데이트로 구조가 바뀌어도 이상 징후를 실시간 감지해 자동 대응합니다.
        </p>

        <figure style={{ margin: "16px 0 24px" }}>
          <Image
            src="/image/SNarlink/study room.png"
            alt="집중이 유지되는 독서실 전경"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </figure>

        {/* 자유와 책임 */}
        <h2>SNarlink_Frespon — 자유와 책임의 균형</h2>
        <p>
          방화벽의 목적은 &quot;막는 것&quot;이 아닙니다. 학생이 몰입할 환경을 만드는 것입니다.
          수강신청·결제·정보 탐색 등 필요할 때는 학생실에 요청해{" "}
          <strong>15/30/60분 단위 일회용 비밀번호</strong>로 인터넷을 사용할 수 있습니다.
          허용된 시간만 열리고 자동으로 닫히므로, 집중은 흐트러뜨리지 않고 필요는 채워줍니다.
        </p>

        <figure style={{ margin: "16px 0 24px" }}>
          <Image
            src="/image/SNarlink/monitor.png"
            alt="일회용 비밀번호 기반 인터넷 접근 모니터링"
            width={1200}
            height={720}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <figcaption style={{ color: "#666", fontSize: 14, marginTop: 8 }}>
            허용 시간만 열리고, 끝나면 자동 종료
          </figcaption>
        </figure>

        {/* 데이터와 윤리 */}
        <h2>데이터로 완성되는 초개인화</h2>
        <p>
          등록된 기기만 접속하도록 해 기기별 접속 로그, 집중 시간대, 강의 시청 기록 등을 자동으로
          수집합니다. 학습 사이트 이용과 스트리밍 시간을 분 단위로 정밀 측정해{" "}
          <strong>초개인화 리포팅</strong>을 준비 중이며, 시각화와 리포트는 올해 내로 선보일
          예정입니다. 모든 데이터는 익명화되어 저장되고, 디지털 윤리 기준을 철저히 준수합니다.
        </p>

        <figure style={{ margin: "16px 0 24px" }}>
          <Image
            src="/image/SNarlink/report.png"
            alt="학습 행동 데이터 리포트 샘플"
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </figure>

        {/* 맺음말 */}
        <h2>우리는 기술로 교육을 바꿉니다</h2>
        <p>
          우리의 방화벽은 더 이상 &quot;막는 장비&quot;가 아닙니다. 학생의 몰입과 성장을 돕는
          <strong> AI 기반 교육 보조 시스템</strong>입니다. 외부 솔루션 없이, 내부 연구소와
          핵심 인력으로 만들어낸 이 변화는 오늘도 학원 현장에서 조용히 작동하고 있습니다.
        </p>

        <figure style={{ margin: "16px 0 24px" }}>
          <Image
            src="/image/SNarlink/SN academy.png"
            alt="SN독학기숙학원 캠퍼스"
            width={1200}
            height={720}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          <figcaption style={{ color: "#666", fontSize: 14, marginTop: 8 }}>
            기술적·윤리적으로 최상위 수준의 보안 학습 환경을 목표로
          </figcaption>
        </figure>

        {/* 문의 섹션 */}
        <section
          aria-label="입학 및 기술 문의"
          style={{ padding: "16px 18px", background: "#fafafa", borderRadius: 10, border: "1px solid #eee" }}
        >
          <h3 style={{ marginTop: 0 }}>입학 &amp; 기술 문의</h3>
          <p style={{ margin: "8px 0" }}>
            기술 문의: <a href="mailto:snacademy@naver.com">snacademy@naver.com</a>
          </p>
          <p style={{ margin: "8px 0" }}>
            전화 상담: <a href="tel:0317710300">031-771-0300</a> (내선 1번)
          </p>
          <p style={{ margin: "8px 0" }}>
            카카오톡 채널: <em>SN독학기숙학원</em> 검색
          </p>
        </section>

        {/* 주의/참고 */}
        <p style={{ color: "#666", fontSize: 14, marginTop: 20 }}>
          ※ 본 글은 재학생·학부모님은 물론, 교육업계 관계자분들께도 공개합니다. 차세대 교육
          방화벽 도입이 필요하신 대형 학원은 본원으로 연락 주시면 라이선스/시공 협의가 가능합니다.
        </p>
      </article>
    </main>
  );
}
