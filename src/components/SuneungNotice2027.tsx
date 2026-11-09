'use client';

import Image from 'next/image';
import CollapsibleSection from '@/components/CollapsibleSection';
import NoticeTable from '@/components/NoticeTable';
import InfoBox from '@/components/InfoBox';
import CalloutBox from '@/components/CalloutBox';

const PAGE_URL = 'https://blog.snacademy.co.kr/notice/261119suneungnotice';
const THUMBNAIL = '/images/thumbnail/notice/2027_k-sat_notice.png';

export default function SuneungNotice2027() {
  // 구조화된 데이터 (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '2027 수능 안내 | 전날·당일부터 정시 상담까지 (11.19 목)',
    description:
      '2027학년도 대학수학능력시험 전일, 당일 및 향후 일정을 안내드립니다. 수험표 배부, 고사장 배정, 당일 일정, 학원 지원 사항과 무료 정시 상담 일정을 확인하세요.',
    image: {
      '@type': 'ImageObject',
      url: `https://blog.snacademy.co.kr${THUMBNAIL}`,
      width: 900,
      height: 500,
      alt: '2027 수능 안내 썸네일',
    },
    author: {
      '@type': 'Organization',
      name: 'SN독학기숙학원',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SN독학기숙학원',
      url: 'https://snacademy.co.kr',
    },
    datePublished: '2026-11-09',
    dateModified: '2026-11-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': PAGE_URL,
    },
    articleSection: '공지사항',
    keywords: ['수능', '안내', '일정', '2027학년도', '대학수학능력시험'],
    inLanguage: 'ko-KR',
    isAccessibleForFree: true,
    educationalLevel: '고등학교',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: '학생, 학부모',
    },
  };

  // 학교 시험장 데이터
  const schoolData = [
    {
      name: '양평고등학교',
      address: '경기도 양평군 양평읍 양근로 42',
      time: '20분',
      mapUrl:
        'https://map.naver.com/p/directions/-/14131823.4252904,4517573.5950749,양평고등학교/-/car?c=16.00,0,0,0,dh',
    },
    {
      name: '양일고등학교',
      address: '경기도 양평군 양평읍 양근로 260',
      time: '20분',
      mapUrl:
        'https://map.naver.com/p/directions/-/14133449.328125,4517632.5,양일고등학교/-/car?c=16.00,0,0,0,dh',
    },
    {
      name: '용문고등학교',
      address: '경기도 양평군 용문면 용문로 152',
      time: '5분',
      mapUrl:
        'https://map.naver.com/p/directions/-/14138953.515625,4534104.0,용문고등학교/-/car?c=16.00,0,0,0,dh',
    },
    {
      name: '양서고등학교',
      address: '경기도 양평군 양서면 양수로 159',
      time: '40분',
      mapUrl:
        'https://map.naver.com/p/directions/-/14102829.65625,4517823.5,양서고등학교/-/car?c=16.00,0,0,0,dh',
    },
  ];

  // 수능 당일 일정 데이터
  const scheduleData = [
    {
      time: '06:00',
      content: '기상',
      details: '• 인원 파악\n• 기상과 동시에 세면 또는 식사 지도',
      highlight: false,
    },
    {
      time: '06:00~06:40',
      content: '세면 및 식사',
      details: '• 전원 식사를 마칠 수 있도록 지도\n• 숙소 퇴실 지도',
      highlight: false,
    },
    {
      time: '06:40~06:50',
      content: '준비물 배부',
      details: '• 도시락 내용물 확인\n• 학습·생활담임 식당 대기 후 준비물 배부',
      highlight: false,
    },
    {
      time: '06:50~07:00',
      content: '도시락 수령 및\n수송차량 탑승',
      details:
        '• 식당에서 도시락 수령\n• 수송차량 확인 및 탑승\n• 탑승 후 인원 확인\n⚠️ 양서고 06:50 / 양평·양일고 07:00 / 용문고 07:20 출발',
      highlight: false,
    },
    {
      time: '07:00~07:30',
      content: '시험장 이동',
      details: '• 시험 종료 후 픽업 장소 안내\n• 차량 인솔자 복귀',
      highlight: false,
    },
    {
      time: '07:30~08:00',
      content: '시험장 도착 및 입실',
      details: '• 시험장 입구까지 인솔',
      highlight: false,
    },
    {
      time: '16:37',
      content: '탐구 영역까지 시험 종료',
      details: '• 제2외국어/한문 미응시 학생',
      highlight: true,
    },
    {
      time: '17:45',
      content: '제2외국어/한문 시험 종료',
      details: '• 제2외국어/한문 응시 학생',
      highlight: true,
    },
    {
      time: '18:00',
      content: '학원 도착 — 1차',
      details: '• 탐구 영역까지 응시한 학생들 학원 도착',
      highlight: false,
    },
    {
      time: '19:00',
      content: '학원 도착 — 2차',
      details: '• 제2외국어/한문 응시 학생들 학원 도착',
      highlight: false,
    },
    {
      time: '20:00',
      content: '종강',
      details: '• 전원 종강',
      highlight: false,
    },
  ];

  // 학교별 차량 출발 시각
  const departureData = [
    { school: '양서고등학교', time: '06:50' },
    { school: '양평고등학교·양일고등학교', time: '07:00' },
    { school: '용문고등학교', time: '07:20' },
  ];

  // 학원 제공 지원 사항 데이터
  const supportData = [
    { item: '아침식사', content: '수능 당일 아침 학원에서 제공' },
    { item: '점심 도시락', content: '학원에서 제공 — 외부 반입 불필요' },
    {
      item: '시험 직전 지원',
      content: '컨디션 체크, 준비물 점검, 심리 안정 지원 등',
    },
  ];

  // 도시락 메뉴 데이터
  const menuData = [
    { category: '국물', menu: '쇠고기무국' },
    { category: '주식', menu: '쌀밥\n(희망자에 한해 죽 제공)' },
    { category: '메인', menu: '한우불고기' },
    {
      category: '반찬',
      menu: '스팸구이 / 계란말이 / 케찹\n볶음김치 / 진미채 / 구이김 / 무말랭이',
    },
    { category: '음료·간식', menu: '다과 / 물' },
  ];

  // 수능 후 향후 일정 데이터
  const afterScheduleData: {
    date: string;
    content: React.ReactNode;
  }[] = [
    {
      date: '2026년 11월 20일(금)~22일(일)',
      content: (
        <>
          가채점 결과 학원 설문지 입력 <strong>예정</strong>
        </>
      ),
    },
    { date: '2026년 12월 11일(금)', content: '수능 성적 통지일' },
    {
      date: '2026년 12월 13일(일)~14일(월)',
      content: (
        <>
          정시 상담 사전예약 안내 <strong>예정</strong>
        </>
      ),
    },
    {
      date: '2026년 12월 18일(금)까지',
      content: '수시모집 최초 합격자 발표 마감',
    },
    {
      date: '2026년 12월 29일(화)~2027년 1월 3일(일)',
      content: (
        <strong className="text-green-700 dark:text-green-400">
          무료 정시 상담 예정
        </strong>
      ),
    },
    {
      date: '2027년 1월 4일(월)~7일(목)',
      content: '정시모집 원서접수 — 기간 내 대학별 3일 이상',
    },
    {
      date: '2027년 2월 5일(금)까지',
      content: '정시모집 최초 합격자 발표 마감',
    },
  ];

  const h2Class =
    'text-lg sm:text-xl font-semibold mt-6 sm:mt-7 mb-3 pl-3 border-l-4 border-green-700';
  const h4Class =
    'text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2';
  const listH4Class =
    'text-base sm:text-lg font-semibold mt-3 mb-2 text-green-700 dark:text-green-400';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans leading-relaxed">
      {/* 구조화된 데이터 (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-5 py-6 sm:py-7 pb-12 sm:pb-16">
        {/* 헤더 */}
        <header
          className="border-b-3 border-green-700 pb-4 mb-6 text-center"
          role="banner"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            2027 수능 안내
            <span className="block text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mt-1">
              전날·당일부터 정시 상담까지
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-1">
            2026년 11월 19일(목) 시행
          </p>
          <p className="text-green-700 dark:text-green-400 font-bold text-sm sm:text-base">
            SN독학기숙학원
          </p>
        </header>

        {/* 썸네일 이미지 */}
        <div className="mb-6 sm:mb-8">
          <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={THUMBNAIL}
              alt="2027 수능 안내 썸네일"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 인트로 섹션 */}
        <section className="mb-6 sm:mb-8" aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="sr-only">
            수능 안내 개요
          </h2>
          <InfoBox variant="accent">
            <p className="text-sm sm:text-base mb-0">
              안녕하세요. SN독학기숙학원입니다.
              <br />
              2027학년도 대학수학능력시험이 다가오고 있습니다. 그동안 학생들이
              쌓아온 노력이 좋은 결과로 이어질 수 있도록 학원에서도 마지막까지
              최선을 다해 지원하겠습니다.
              <br />
              아래와 같이 수능 전일, 당일 및 향후 일정을 안내드립니다.
            </p>
          </InfoBox>
        </section>

        {/* 1. 수능 전 일정 안내 */}
        <section
          className="my-6 sm:my-8"
          aria-labelledby="pre-schedule-heading"
        >
          <h2 id="pre-schedule-heading" className={h2Class}>
            1. 수능 전 일정 안내
          </h2>
          <ul className="pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
            <li>
              <strong>11월 18일(수)</strong> 교육청 장학사님이 본원을 방문하여
              수험생 유의사항 안내 및 <strong>수험표 배부</strong>가 진행될
              예정입니다.
            </li>
            <li>
              고사장 배정 결과는 <strong>11월 18일(수)</strong> 공개되며, 확인
              즉시 학부모님께 별도 안내드릴 예정입니다.
            </li>
            <li>
              학생들은 전날까지 <strong>컨디션 관리</strong> 및{' '}
              <strong>개인 준비물 점검</strong>을 철저히 하도록 지도합니다.
            </li>
          </ul>

          {/* 스마트안경 경고 (항상 노출) */}
          <div className="border-2 border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 rounded-lg p-3 sm:p-4 mt-4 text-sm sm:text-base">
            <p className="font-bold text-red-700 dark:text-red-300 mb-2">
              🕶️ 올해부터 스마트안경 반입 금지 — 적발 시 불이익
            </p>
            <p className="mb-2 text-gray-800 dark:text-gray-200">
              2027학년도 수능부터 <strong>스마트안경</strong>이 시험장 반입 금지
              물품으로 명시되었습니다. 겉보기에 일반 안경과 비슷해 무심코
              가져가기 쉬우니 특히 주의해 주세요.
            </p>
            <ul className="pl-4 sm:pl-5 space-y-1.5 list-disc text-gray-800 dark:text-gray-200">
              <li>
                <strong>가방에 넣어 두기만 해도</strong>(단순 소지) 부정행위
                9호에 해당하여{' '}
                <strong className="text-red-600 dark:text-red-400">
                  해당 시험이 무효
                </strong>
                처리됩니다. 가져왔다면 반드시{' '}
                <strong>1교시 시작 전 감독관에게 제출</strong>해야 합니다.
              </li>
              <li>
                제출하지 않고 <strong>시험 중 착용</strong>하면 기능을 쓰지
                않았더라도 사용한 것으로 간주되어 부정행위 3호가 적용됩니다.{' '}
                <strong className="text-red-600 dark:text-red-400">
                  시험 무효 + 다음 연도 수능 응시자격 1년 정지
                </strong>
                입니다.
              </li>
              <li>
                감독관의 스마트안경 확인 요구에 응하지 않아도 심의를 거쳐{' '}
                <strong>부정행위 3호에 준하는 조치</strong>를 받을 수 있습니다.
              </li>
              <li>
                교육부는 계획적·고의적 부정행위에 대해 시험 무효와 함께{' '}
                <strong>고발·수사의뢰 등 법적 대응</strong>도 추진할 계획입니다.
              </li>
            </ul>
            <p className="mt-3 mb-0 text-gray-800 dark:text-gray-200">
              👓 평소 도수가 있는 스마트안경을 쓰는 학생은 수능 당일 쓸{' '}
              <strong>일반 안경을 미리 준비</strong>해 주세요. 학원에서도 수능
              전 개인 물품을 함께 점검하겠습니다.
            </p>
            <p className="mt-2 mb-0 text-xs text-gray-500 dark:text-gray-400">
              출처: 한국교육과정평가원 2027학년도 수험생 유의사항 관련 보도(
              <a
                href="https://view.asiae.co.kr/article/2026101515252109608"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                아시아경제
              </a>
              ,{' '}
              <a
                href="https://www.eduplusnews.com/news/articleView.html?idxno=20586"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                에듀플러스
              </a>
              )
            </p>
          </div>

          {/* 수능 준비물 상세 안내 */}
          <CollapsibleSection title="📋 수능 준비물 상세 안내">
            <div>
              <h4 className={listH4Class}>✅ 필수 준비물</h4>
              <ul className="pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
                <li>
                  <strong>수험표</strong>
                </li>
                <li>
                  <strong>신분증</strong>: 본인임을 증명할 수 있는 주민등록증,
                  운전면허증, 청소년증 등
                </li>
                <li>
                  <strong>흑색 연필</strong>
                </li>
                <li>
                  <strong>지우개</strong>
                </li>
                <li>
                  <strong>샤프심</strong>: 흑색, 0.5mm
                </li>
                <li>
                  <strong>흰색 수정테이프</strong>
                </li>
                <li>
                  <strong>컴퓨터용 검은색 사인펜</strong>
                </li>
                <li>
                  <strong>수험용 아날로그 시계</strong>: 통신·결제 기능 및
                  전자식 화면이 없는 시계
                </li>
                <li>
                  <strong>물과 간식</strong>: 시험장에서는 점심과 음용수가
                  제공되지 않음
                </li>
                <li>
                  필요한 경우 <strong>귀마개, 상비약</strong>
                </li>
              </ul>

              <h4 className={listH4Class}>🚫 시험장 반입금지 물품</h4>
              <ul className="pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
                <li>
                  휴대전화, 스마트워치, <strong>스마트안경</strong>, 블루투스
                  이어폰 등 전자기기
                </li>
              </ul>

              <h4 className={listH4Class}>⚠️ 시험 중 휴대금지 물품</h4>
              <ul className="pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
                <li>개인 샤프, 볼펜, 교과서, 참고서, 기출문제지 등</li>
                <li>
                  위 물품은 쉬는 시간에 사용할 수 있으나,{' '}
                  <strong>매 교시 시작 전 가방에 넣어 시험실 앞에 제출</strong>
                  해야 합니다.
                </li>
              </ul>
            </div>
          </CollapsibleSection>

          {/* 수능 전 참고 영상 */}
          <div className="my-6">
            <h3 className="text-base sm:text-lg font-semibold">
              🎥 수능 전 참고 영상
            </h3>
            <div>
              <p className="mt-2 text-sm sm:text-base">
                수능을 앞둔 학생과 학부모님께서는 아래 영상도 함께 확인해 주시기
                바랍니다.
              </p>
              <div className="relative w-full aspect-video mt-3 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/8gUWtBFzYuU"
                  title="수능 전 참고 영상"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm">
                <a
                  href="https://www.youtube.com/watch?v=8gUWtBFzYuU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 hover:underline font-semibold"
                >
                  ▶ 유튜브에서 영상 보기
                </a>
              </p>
            </div>
          </div>

          {/* 학교 시험장 미리보기 */}
          <CollapsibleSection title="🏫 학교 시험장 미리보기">
            <div>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                수험생은 다음 4개 학교 중 한 곳에 배정됩니다. 주소를 클릭하면
                네이버 지도로 이동합니다.
              </p>

              <NoticeTable
                columns={[
                  { header: '학교명', align: 'center' },
                  { header: '주소', align: 'center' },
                  { header: '소요시간', align: 'center', width: '100px' },
                ]}
                rows={schoolData.map(school => ({
                  cells: [
                    school.name,
                    <a
                      key={`${school.name}-address`}
                      href={school.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 hover:underline"
                    >
                      {school.address}
                    </a>,
                    school.time,
                  ],
                }))}
                aria-label="학교 시험장 정보"
              />

              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                ※ 양서고는 본원 학생의 배정이 최소화될 것으로 예상되나, 최종
                결과는 <strong>11월 18일(수)</strong> 발표됩니다.
              </p>

              <InfoBox variant="accent" className="mt-3">
                <p className="text-sm mb-0">
                  💚 본원에서는 수능 당일 학생들의 이동을 위해{' '}
                  <strong>버스 6대를 대절</strong>하였습니다.
                </p>
              </InfoBox>
            </div>
          </CollapsibleSection>
        </section>

        {/* 2. 수능 당일 안내 */}
        <section
          className="my-6 sm:my-8"
          aria-labelledby="day-schedule-heading"
        >
          <h2 id="day-schedule-heading" className={h2Class}>
            2. 수능 당일 안내
          </h2>
          <p className="text-sm sm:text-base mb-2">
            <strong>수능일: 2026년 11월 19일(목)</strong>
          </p>
          <p className="text-sm sm:text-base mb-4">
            수능 당일에는 학원 및 주변 도로가 <strong>매우 혼잡</strong>할
            것으로 예상됩니다. 원내 안전과 학생 이동 동선 확보를 위해 아래
            사항을 반드시 참고해 주시기 바랍니다.
          </p>

          <InfoBox>
            <div className="space-y-6">
              <div>
                <h4 className={h4Class}>학부모님 출입 가능 시간</h4>
                <p className="mb-1">
                  <strong>13:00(오후 1시) 이후</strong> 학원 출입이 가능합니다.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  오전 시간대에는 학생 이동 동선 확보를 위해 출입이 제한됩니다.
                </p>
              </div>

              <div>
                <h4 className={h4Class}>주차 안내</h4>
                <p className="mb-1">
                  원내 <strong>주차가 가능</strong>하나, 혼잡 시 현장 직원
                  안내에 따라 <strong>임시 주차구역</strong> 이용을 요청할 수
                  있습니다.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  도로변 이중주차 및 장기 대기는 통제됩니다.
                </p>
              </div>

              <div>
                <h4 className={h4Class}>고사장 퇴소 권장</h4>
                <p className="mb-1">
                  당일 혼잡을 줄이기 위해{' '}
                  <strong>고사장에서 바로 퇴소하시는 것을 권장</strong>합니다.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  고사장 퇴소 후 학원을 방문하시면 사전에 분류된 학생 짐을
                  정리하여 반출하실 수 있습니다.
                </p>
              </div>

              <div>
                <h4 className={h4Class}>📱 핸드폰 관련 안내</h4>
                <p className="mb-1">
                  개인 스마트폰은{' '}
                  <strong className="text-red-600 dark:text-red-400">
                    수험장 반입이 불가
                  </strong>
                  합니다.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  고사장에서 퇴소하는 학생의 스마트폰은{' '}
                  <strong>픽업 담당 선생님이 일괄 보관</strong>합니다.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  퇴소 학생 및 학부모님께서는 고사장 픽업 담당 선생님께
                  스마트폰을 수령해 주세요.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                  본원에서 퇴소하는 경우에도 고사장 픽업 담당 선생님이 귀원한 후
                  스마트폰 수령이 가능합니다.
                </p>
              </div>
            </div>
          </InfoBox>

          <h3 className="mt-5 text-base sm:text-lg font-semibold">
            📦 짐 정리 관련 안내
          </h3>
          <ul className="pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
            <li>
              기숙사 짐이 다량인 관계로,{' '}
              <strong>학생이 미리 분류해 놓은 짐만 반출</strong> 가능합니다.
            </li>
            <li>
              룸메이트 짐 혼동 방지를 위해 학생 정리 완료 전 임의 반출은 제한될
              수 있습니다.
            </li>
            <li>
              학생들의 짐이 많습니다.{' '}
              <strong>튼튼한 박스·캐리어·타포린백 등을 넉넉히 지참</strong>
              하시면 정리에 큰 도움이 됩니다.
            </li>
            <li>
              미지참 시 학원에서도 구매 가능하나, <u>수량이 한정</u>되어 있고{' '}
              <u>시중가보다 다소 비쌀 수</u> 있습니다.
            </li>
            <li>
              <span className="text-red-600 dark:text-red-400 font-semibold">
                당일에는 학원 내 카트 수량이 부족합니다. 캠핑카트 등이 집에
                있다면 꼭 지참해 주시기 바랍니다.
              </span>
            </li>
          </ul>

          <CalloutBox variant="warning">
            ※ 수능 당일 응원은 학원 내가 아닌 <strong>고사장에서</strong>{' '}
            부탁드립니다. 당일 본원은 학생들에게 더욱 집중하도록 하겠습니다.
          </CalloutBox>

          <h3 className="mt-6 text-base sm:text-lg font-semibold">
            📅 수능 당일 일정
          </h3>
          <NoticeTable
            columns={[
              { header: '시간대', align: 'center', width: '130px' },
              { header: '내용', align: 'center', width: '200px' },
              { header: '세부 내용', align: 'center' },
            ]}
            rows={scheduleData.map(item => ({
              cells: [
                item.highlight ? (
                  <strong key="t">{item.time}</strong>
                ) : (
                  item.time
                ),
                <div
                  key={`${item.time}-content`}
                  className={
                    item.highlight
                      ? 'whitespace-nowrap font-bold'
                      : 'whitespace-pre-line'
                  }
                >
                  {item.content}
                </div>,
                <div
                  key={`${item.time}-details`}
                  className="whitespace-pre-line text-left"
                >
                  {item.details}
                </div>,
              ],
            }))}
            aria-label="수능 당일 상세 일정"
          />

          <h4 className="mt-5 mb-2 text-sm sm:text-base font-semibold">
            🚌 학교별 차량 출발 시각
          </h4>
          <ul className="pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
            {departureData.map(d => (
              <li key={d.school}>
                {d.school}: <strong>{d.time}</strong>
              </li>
            ))}
          </ul>

          <CalloutBox variant="info">
            ※ 수험생은{' '}
            <strong>08:10까지 지정된 시험실 또는 대기 장소에 입실</strong>해야
            합니다.
          </CalloutBox>
        </section>

        {/* 3. 학원 제공 지원 사항 */}
        <section className="my-6 sm:my-8">
          <h2 className={h2Class}>3. 학원 제공 지원 사항</h2>
          <NoticeTable
            columns={[
              { header: '항목', align: 'center', width: '140px' },
              { header: '내용', align: 'center' },
            ]}
            rows={supportData.map(item => ({
              cells: [item.item, item.content],
            }))}
            aria-label="수능 당일 학원 제공 지원 사항"
          />

          <CollapsibleSection title="🍱 수능 당일 도시락 메뉴">
            <NoticeTable
              columns={[
                { header: '구분', align: 'center', width: '120px' },
                { header: '메뉴', align: 'center' },
              ]}
              rows={menuData.map(menu => ({
                cells: [
                  menu.category,
                  <div
                    key={`${menu.category}-menu`}
                    className="whitespace-pre-line"
                  >
                    {menu.category === '주식' ? (
                      menu.menu
                    ) : (
                      <strong>{menu.menu}</strong>
                    )}
                  </div>,
                ],
              }))}
              aria-label="수능 당일 도시락 메뉴"
            />
          </CollapsibleSection>
        </section>

        {/* 4. 수능 후 향후 일정 및 무료 정시 상담 안내 */}
        <section className="my-6 sm:my-8">
          <h2 className={h2Class}>
            4. 수능 후 향후 일정 및 무료 정시 상담 안내
          </h2>
          <InfoBox variant="accent">
            <p className="text-sm sm:text-base mb-1">
              <strong>
                본원의 정시 상담은 별도 비용 없이 무료로 진행됩니다.
              </strong>
            </p>
            <p className="text-sm sm:text-base mb-0">
              수능 이후에도 학생별 성적과 목표에 맞는 지원 전략을 함께 점검하며,{' '}
              <strong>학생 한 명 한 명의 합격까지 최선을 다하겠습니다.</strong>
            </p>
          </InfoBox>
          <NoticeTable
            columns={[
              { header: '일정', align: 'center', width: '220px' },
              { header: '내용', align: 'center' },
            ]}
            rows={afterScheduleData.map(item => ({
              cells: [
                <strong key={item.date}>{item.date}</strong>,
                item.content,
              ],
            }))}
            aria-label="수능 이후 일정"
          />
          <p className="mt-1 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            ※ 가채점 입력 및 정시 상담 관련 학원 내부 일정은 예정이며, 확정
            일정과 상담 신청 방법은 추후 별도 안내드립니다.
          </p>
          <p className="mt-1 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            ※ 정시모집 원서접수 시작일과 마감일·마감 시각은 대학별로 다르므로,
            지원 대학의 모집요강을 반드시 확인해 주시기 바랍니다.
          </p>
        </section>

        {/* 5. 문의 안내 */}
        <section className="my-6 sm:my-8">
          <h2 className={h2Class}>5. 문의 안내</h2>
          <p className="text-sm sm:text-base mb-4">
            수능 전후 문의는 전화보다{' '}
            <strong>카카오톡 채널 ‘SN독학기숙학원’</strong>을 이용해 주시면 보다
            신속하고 정확하게 안내드릴 수 있습니다.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            또한 고사장 또는 본원에서 퇴소한 뒤에는 인원 파악을 위해{' '}
            <strong>
              본원 카카오톡 채널로 퇴소 여부를 꼭 알려주시기 바랍니다.
            </strong>
          </p>
        </section>

        {/* 푸터 */}
        <footer className="border-t border-dashed border-gray-300 dark:border-gray-600 mt-9 pt-4 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          본원은 마지막 순간까지 학생들의 컨디션을 최우선으로 관리하며, 모든
          학생이 원하는 결과를 얻을 수 있도록 끝까지 함께하겠습니다.
          <br />
          올 한 해 보내주신 신뢰와 협조에 깊이 감사드립니다.
          <br />
          <br />
          감사합니다.
          <br />
          <strong className="text-green-700 dark:text-green-400">
            SN독학기숙학원 드림
          </strong>
        </footer>
      </div>
    </div>
  );
}
