'use client';

import Image from 'next/image';
import CollapsibleSection from '@/components/CollapsibleSection';
import NoticeTable from '@/components/NoticeTable';
import InfoBox from '@/components/InfoBox';
import CalloutBox from '@/components/CalloutBox';

export default function SuneungNotice() {
  // 구조화된 데이터 (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '2026학년도 수능 전·당일 안내문(25.11.13 시행)',
    description:
      '2026학년도 대학수학능력시험 전일, 당일 및 향후 일정을 안내드립니다. 수험표 배부, 고사장 배정, 당일 일정 및 학원 지원 사항을 확인하세요.',
    image: {
      '@type': 'ImageObject',
      url: 'https://blog.snacademy.co.kr/images/thumbnail/2026_k-sat_notice.png',
      width: 1200,
      height: 630,
      alt: '2026학년도 수능 전·당일 안내문 썸네일',
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
    datePublished: '2025-10-31',
    dateModified: '2025-10-31',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://blog.snacademy.co.kr/notice/251113suneungnotice',
    },
    articleSection: '공지사항',
    keywords: ['수능', '안내', '일정', '2026학년도', '대학수학능력시험'],
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
      details: '• 인원파악\n• 기상과 동시에 세면 또는 식사 지도',
    },
    {
      time: '06:00 - 06:40',
      content: '세면 및 식사',
      details: '• 취침 인원 없이 전원 식사 마칠수 있도록 지도\n• 숙소 퇴실지도',
    },
    {
      time: '06:40 - 06:50',
      content: '준비물 불출',
      details:
        '• 도시락 내용물 확인 필수\n• 학습/생활담임 식당대기 후 준비물 불출',
    },
    {
      time: '06:50 - 07:00',
      content: '도시락 수령\n수송차량 탑승',
      details:
        '• 식당에서 도시락 수령\n• 수송차량 확인 및 탑승\n• 탑승 후 인원확인 필수\n⚠️ 양서고 06:50 출발 / 나머지 7시 출발 / 용문고 7:20 출발',
    },
    {
      time: '07:00 - 07:30',
      content: '시험장 이동',
      details: '• 차량인솔자 복귀\n• 학생들 시험종료 후 픽업장소 안내',
    },
    {
      time: '07:30 - 08:00',
      content: '시험장 도착 입실',
      details: '• 시험장 입구까지 인솔',
    },
    { time: '17:00', content: '탐구 영역까지 종료', details: '-' },
    { time: '17:45', content: '제2외국어/한문 종료', details: '-' },
    {
      time: '18:00',
      content: '학원 도착 (1차)',
      details: '• 탐구까지 응시하는 학생들 학원 도착',
    },
    {
      time: '19:00',
      content: '학원 도착 (2차)',
      details: '• 제2외국어 종료 학생들 학원 도착',
    },
    { time: '20:00', content: '종강', details: '• 전원 종강' },
  ];

  // 학원 제공 지원 사항 데이터
  const supportData = [
    { item: '아침식사', content: '수능 당일 아침 학원에서 제공' },
    { item: '점심(도시락)', content: '학원에서 제공 (외부 반입 불필요)' },
    {
      item: '시험 직전 지원',
      content: '컨디션 체크, 준비물 점검, 심리안정 지원 등',
    },
  ];

  // 2025 일정 데이터
  const schedule2025Data = [
    { date: '11/14(금) - 16(일)', content: '가채점 결과 학원 설문지 입력' },
    { date: '12/5 (금)', content: '수능 성적 발표일' },
    { date: '12/7 (토) - 8 (일)', content: '정시 상담 사전예약 안내' },
    { date: '12/12 (금)', content: '수시 합격자 발표 마감' },
    { date: '12/23(화) - 28(일)', content: '정시 상담 기간' },
    { date: '12/29 (월) - 31 (수)', content: '정시모집 원서 접수' },
    { date: '26/2/2 (월)', content: '정시모집 합격자 발표 마감' },
  ];

  // 도시락 메뉴 데이터
  const menuData = [
    { category: '국물', menu: '쇠고기무국' },
    { category: '주식', menu: '쌀밥(죽)' },
    { category: '메인', menu: '돈육바싹불고기' },
    {
      category: '반찬',
      menu: '스팸구이 / 계란말이 / 케찹\n볶음김치 / 진미채\n콩나물 / 구이김',
    },
    { category: '음료/간식', menu: '다과 / 물 / 포도주스' },
  ];

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
            2026학년도 수능 전·당일 안내문(25.11.13 시행)
          </h1>
          <p className="text-green-700 dark:text-green-400 font-bold text-sm sm:text-base">
            SN독학기숙학원
          </p>
        </header>

        {/* 썸네일 이미지 */}
        <div className="mb-6 sm:mb-8">
          <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/thumbnail/2026_k-sat_notice.png"
              alt="2026학년도 수능 전·당일 안내문 썸네일"
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
              2026학년도 대학수학능력시험이 이번 주로 다가왔습니다. 그동안
              학생들이 쌓아온 노력이 좋은 결과로 이어질 수 있도록 학원에서도
              마지막까지 최선을 다해 지원하겠습니다. 아래와 같이 수능 전일, 당일
              및 향후 일정을 안내드립니다.
            </p>
          </InfoBox>
        </section>

        {/* 1. 수능 전 일정 안내 */}
        <section
          className="my-6 sm:my-8"
          aria-labelledby="pre-schedule-heading"
        >
          <h2
            id="pre-schedule-heading"
            className="text-lg sm:text-xl font-semibold mt-6 sm:mt-7 mb-3 pl-3 border-l-4 border-green-700"
          >
            1. 수능 전 일정 안내
          </h2>
          <ul className="pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
            <li>
              <strong>11월 12일(수)</strong> 교육청 장학사님이 본원을 방문하여
              수험생 유의사항 안내 및 <strong>수험표 배부</strong>가 진행됩니다.
            </li>
            <li>
              <strong>고사장 배정 결과는 12일 공개되며</strong>, 확인 즉시
              학부모님께 별도 안내드릴 예정입니다.
            </li>
            <li>
              학생들은 전날까지 <strong>컨디션 관리</strong> 및{' '}
              <strong>개인 준비물 점검</strong>을 철저히 하도록 지도합니다.
            </li>
          </ul>

          {/* 수능 준비물 상세 안내 */}
          <CollapsibleSection title="📋 수능 준비물 상세 안내">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mt-3 mb-2 text-green-700 dark:text-green-400">
                ✅ 필수 준비물
              </h4>
              <ul className="pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
                <li>
                  <strong>수험표</strong>
                </li>
                <li>
                  <strong>신분증</strong> (본인임을 증명할 수 있는 주민등록증,
                  운전면허증, 청소년증 등)
                </li>
                <li>
                  <strong>흑색 연필</strong>
                </li>
                <li>
                  <strong>지우개</strong>
                </li>
                <li>
                  <strong>샤프심</strong> (자신이 평소 사용하는 것으로 챙기는
                  것이 좋음)
                </li>
                <li>
                  <strong>흰색 수정테이프</strong>
                </li>
                <li>
                  <strong>컴퓨터용 검은색 사인펜</strong>
                </li>
                <li>
                  <strong>수험용 아날로그 시계</strong> (전자기기, 스마트워치는
                  반입 불가)
                </li>
                <li>
                  <strong>물과 간식</strong> (시험장에서는 점심과 음용수가
                  제공되지 않음)
                </li>
                <li>
                  필요한 경우 <strong>귀마개, 상비약</strong>
                </li>
              </ul>

              <h4 className="text-base sm:text-lg font-semibold mt-3 mb-2 text-green-700 dark:text-green-400">
                🚫 반입 금지 물품
              </h4>
              <ul className="pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
                <li>
                  개인 샤프, 컴퓨터용 사인펜 외 필기구 (시험장 지급용만 허용)
                </li>
                <li>교과서, 참고서, 기출문제지 등</li>
                <li>전자기기 (스마트워치 등)</li>
              </ul>
            </div>
          </CollapsibleSection>

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
                ※ 양서고는 본원에 최대한 배정이 안될 것으로 예상되나, 결과는
                12일에 발표됩니다.
              </p>

              <InfoBox variant="accent" className="mt-3">
                <p className="text-sm mb-0">
                  💚 본원에서 수능 당일을 위해 <strong>버스 7대를 대절</strong>
                  하였습니다.
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
          <h2
            id="day-schedule-heading"
            className="text-lg sm:text-xl font-semibold mt-6 sm:mt-7 mb-3 pl-3 border-l-4 border-green-700"
          >
            2. 수능 당일 안내
          </h2>
          <p className="text-sm sm:text-base mb-4">
            수능 당일에는 학원 및 주변 도로가 <strong>매우 혼잡</strong>할
            것으로 예상됩니다. 원내 안전과 학생 이동 동선 확보를 위해 아래
            사항을 반드시 참고해 주시기 바랍니다.
          </p>

          <InfoBox>
            <div className="prose prose-sm sm:prose-base max-w-none dark:prose-invert">
              <div className="space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    학부모님 출입 가능 시간
                  </h4>
                  <p className="mb-1">
                    <strong>13:00(오후 1시) 이후</strong> 학원 출입 가능
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    (오전 시간대는 시험 종료 전까지 학생 동선 확보를 위해 출입
                    제한)
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    주차 안내
                  </h4>
                  <p className="mb-1">
                    원내 <strong>주차 가능</strong>하나, 혼잡 시 현장 직원
                    안내에 따라 <strong>임시 주차구역</strong> 이용 요청될 수
                    있음
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    (도로변 이중주차·장기대기 통제)
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    고사장 퇴소 권장
                  </h4>
                  <p className="mb-1">
                    당일 혼잡을 줄이기 위해{' '}
                    <strong>고사장에서 바로 퇴소</strong> 권장
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    고사장 퇴소 후 학원 방문 시 사전에 분류된 학생 짐 정리·반출
                    가능
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    📱 핸드폰 관련 안내
                  </h4>
                  <p className="mb-1">
                    개인 스마트폰은{' '}
                    <strong className="text-red-600 dark:text-red-400">
                      수험장 반입이 불가
                    </strong>
                    합니다
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    고사장에서 퇴소하는 학생의 스마트폰은{' '}
                    <strong>픽업 담당 선생님이 일괄 보관</strong>합니다.
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    퇴소 학생 및 학부모님께서는{' '}
                    <strong>고사장 픽업 담당 선생님께 스마트폰을 수령</strong>해
                    주세요.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                    (본원에서 퇴소하시는 경우에도 1차로는 고사장에서 스마트폰
                    수령이 가능합니다.)
                  </p>
                </div>
              </div>
            </div>
          </InfoBox>

          <h3 className="mt-5 text-base sm:text-lg font-semibold">
            ▸ 짐 정리 관련 안내
          </h3>
          <ul className="pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
            <li>
              기숙사 짐이 다량인 관계로, 학생이{' '}
              <strong>미리 분류해 놓은 짐만 반출</strong> 가능합니다.
            </li>
            <li>
              룸메이트 짐 혼동 방지를 위해{' '}
              <strong>학생 정리 완료 전 임의 반출은 제한</strong>될 수 있습니다.
            </li>
            <li>
              <strong>학생들의 짐이 많습니다.</strong>
              <br />
              <strong>튼튼한 박스·타포린백</strong> 등을 많이 지참하시면 정리에
              큰 도움이 됩니다.
              <br />
              <strong>미지참 시 학원에서도 구매 가능</strong>하나,{' '}
              <u>수량 한정</u> 및 <u>시중가보다 다소 비용</u>이 발생할 수
              있습니다.
              <br />
              <span className="text-red-600 dark:text-red-400 font-semibold">
                당일에는 학원내 카트의 수량이 절대적으로 부족합니다. 캠핑카트
                등이 집에 있으면 꼭 지참 부탁드립니다.
              </span>
            </li>
          </ul>

          <CalloutBox variant="warning">
            ※ 수능 당일 응원은 <strong>학원 내</strong>가 아닌{' '}
            <strong>고사장</strong>에서 부탁드립니다. 당일 본원은 학생 지원에
            집중하겠습니다.
          </CalloutBox>

          <h3 className="mt-6 text-base sm:text-lg font-semibold">
            📅 수능 당일 일정
          </h3>
          <NoticeTable
            columns={[
              { header: '시간대', align: 'center', width: '140px' },
              { header: '내용', align: 'center', width: '160px' },
              { header: '세부 내용', align: 'center' },
            ]}
            rows={scheduleData.map(item => ({
              cells: [
                item.time,
                item.content,
                <div
                  key={`${item.time}-details`}
                  className="whitespace-pre-line"
                >
                  {item.details}
                </div>,
              ],
            }))}
            aria-label="수능 당일 상세 일정"
          />
        </section>

        {/* 3. 학원 제공 지원 사항 */}
        <section className="my-6 sm:my-8">
          <h2 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-7 mb-3 pl-3 border-l-4 border-green-700">
            3. 학원 제공 지원 사항
          </h2>
          <NoticeTable
            columns={[
              { header: '항목', align: 'center', width: '140px' },
              { header: '내용', align: 'center' },
            ]}
            rows={supportData.map(item => ({
              cells: [
                item.item,
                item.item === '점심(도시락)' ? (
                  <div>
                    {item.content}
                    <CollapsibleSection
                      title="🍱 수능 당일 메뉴 확인하기"
                      className="mt-2"
                    >
                      <div className="text-center">
                        <h4 className="mt-3 mb-2 text-base sm:text-lg font-semibold text-green-700 dark:text-green-400">
                          📋 수능 당일 도시락 메뉴
                        </h4>
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
                                {menu.menu}
                              </div>,
                            ],
                          }))}
                        />
                      </div>
                    </CollapsibleSection>
                  </div>
                ) : (
                  item.content
                ),
              ],
            }))}
            aria-label="수능 당일 학원 제공 지원 사항"
          />
        </section>

        {/* 4. 2025 일정 */}
        <section className="my-6 sm:my-8">
          <h2 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-7 mb-3 pl-3 border-l-4 border-green-700">
            4. 2025 수능 후 향후 일정
          </h2>
          <NoticeTable
            columns={[
              { header: '일정', align: 'center', width: '140px' },
              { header: '내용', align: 'center' },
            ]}
            rows={schedule2025Data.map(item => ({
              cells: [item.date, item.content],
            }))}
            aria-label="수능 이후 일정"
          />
          <p className="mt-1 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            ※ 정시 상담 신청 방법은 추후 별도 안내 예정입니다.
          </p>
        </section>

        {/* 5. 문의 안내 */}
        <section className="my-6 sm:my-8">
          <h2 className="text-lg sm:text-xl font-semibold mt-6 sm:mt-7 mb-3 pl-3 border-l-4 border-green-700">
            5. 문의 안내
          </h2>
          <p className="text-sm sm:text-base mb-4">
            수능 전후 문의는{' '}
            <strong>전화보다 카카오톡 채널("SN독학기숙학원")</strong>을 이용해
            주시면 보다 신속하고 정확하게 안내드릴 수 있습니다.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            또한 <strong>고사장 또는 본원에서 퇴소한 뒤</strong>에는 인원 파악을
            위해
            <strong>본원 카카오톡 채널로 퇴소 여부를 꼭 알려</strong>주시기
            바랍니다.
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
