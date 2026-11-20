'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';

// 2027 수능 안내문. 다른 공지의 공용 박스·표와 달리, 회색조와 괘선만 쓰는
// 공문형 디자인이다 (이모지·컬러 박스 없음, 강조는 굵기와 '중요' 표시로만)

const PAGE_URL = 'https://blog.snacademy.co.kr/notice/261119suneungnotice';
const THUMBNAIL = '/images/thumbnail/notice/2027_k-sat_notice.png';

// ── 공문형 기본 요소 ─────────────────────────────────────────

function Section({
  no,
  title,
  id,
  children,
}: {
  no: string;
  title: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12 sm:mt-14" aria-labelledby={id}>
      <h2
        id={id}
        className="flex items-baseline gap-3 border-b border-gray-900 pb-3 text-lg font-bold tracking-tight text-gray-900 sm:text-xl dark:border-gray-300 dark:text-white"
      >
        <span className="font-mono text-sm font-semibold text-gray-500 tabular-nums dark:text-gray-400">
          {no}
        </span>
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-[15px] leading-7 text-gray-800 sm:text-base dark:text-gray-200">
        {children}
      </div>
    </section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 text-base font-bold text-gray-900 dark:text-white">
      {children}
    </h3>
  );
}

// 항목 앞에 짧은 대시를 두는 공문식 목록
function DashList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[0.85em] h-px w-2.5 flex-none bg-gray-500"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
      ※ {children}
    </p>
  );
}

// 꼭 지켜야 할 사항: 검은 테두리 + '중요' 표시. 색은 쓰지 않는다
function Important({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-gray-900 dark:border-gray-300">
      <div className="flex items-center gap-3 border-b border-gray-900 bg-gray-900 px-4 py-2.5 text-white dark:border-gray-300 dark:bg-gray-100 dark:text-gray-900">
        <span className="text-xs font-bold tracking-widest">중요</span>
        <span className="text-[15px] font-semibold">{title}</span>
      </div>
      <div className="space-y-3 px-4 py-4 sm:px-5">{children}</div>
    </div>
  );
}

// 일반 안내 박스: 옅은 회색 바탕
function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-gray-900 bg-gray-50 px-4 py-4 sm:px-5 dark:border-gray-300 dark:bg-gray-800/60">
      {children}
    </div>
  );
}

function Table({
  head,
  rows,
  widths,
  label,
}: {
  head: string[];
  rows: ReactNode[][];
  widths?: (string | undefined)[];
  label: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table
        aria-label={label}
        className="w-full min-w-[520px] border-collapse border-t-2 border-gray-900 text-sm sm:text-[15px] dark:border-gray-300"
      >
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800/60">
            {head.map((h, i) => (
              <th
                key={h}
                scope="col"
                style={widths?.[i] ? { width: widths[i] } : undefined}
                className="border-b border-gray-300 px-3 py-2.5 text-left text-[13px] font-semibold text-gray-700 dark:border-gray-600 dark:text-gray-300"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, r) => (
            <tr key={r}>
              {cells.map((cell, c) => (
                <td
                  key={c}
                  className="border-b border-gray-200 px-3 py-3 align-top leading-6 dark:border-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 접어 두는 참고 자료
function Disclosure({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="group border-y border-gray-300 dark:border-gray-600">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-[15px] font-semibold text-gray-900 dark:text-white [&::-webkit-details-marker]:hidden">
        {title}
        <span
          aria-hidden
          className="font-mono text-lg font-normal text-gray-500 group-open:hidden"
        >
          +
        </span>
        <span
          aria-hidden
          className="hidden font-mono text-lg font-normal text-gray-500 group-open:inline"
        >
          −
        </span>
      </summary>
      <div className="space-y-4 pb-5">{children}</div>
    </details>
  );
}

// ── 데이터 ─────────────────────────────────────────────────

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
    name: '양평중학교',
    address: '경기도 양평군 양평읍 양평중학교길 29',
    time: '20분',
    mapUrl: 'https://map.naver.com/p/search/양평중학교',
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

const scheduleData = [
  {
    time: '06:00',
    content: '기상',
    details: ['인원 파악', '기상과 동시에 세면 또는 식사 지도'],
  },
  {
    time: '06:00–06:40',
    content: '세면 및 식사',
    details: ['전원 식사를 마칠 수 있도록 지도', '숙소 퇴실 지도'],
  },
  {
    time: '06:40–06:50',
    content: '준비물 배부',
    details: ['도시락 내용물 확인', '학습·생활담임 식당 대기 후 준비물 배부'],
  },
  {
    time: '06:50–07:00',
    content: '도시락 수령 및 수송차량 탑승',
    details: [
      '식당에서 도시락 수령',
      '수송차량 확인 및 탑승',
      '탑승 후 인원 확인',
      '출발: 양서고 06:50 / 양평고·양일고·양평중 07:00 / 용문고 07:10',
    ],
  },
  {
    time: '07:00–07:30',
    content: '시험장 이동',
    details: ['시험 종료 후 픽업 장소 안내', '차량 인솔자 복귀'],
  },
  {
    time: '07:30–08:00',
    content: '시험장 도착 및 입실',
    details: ['시험장 입구까지 인솔'],
  },
  {
    time: '16:37',
    content: '탐구 영역까지 시험 종료',
    details: ['제2외국어/한문 미응시 학생'],
    key: true,
  },
  {
    time: '17:45',
    content: '제2외국어/한문 시험 종료',
    details: ['제2외국어/한문 응시 학생'],
    key: true,
  },
  {
    time: '18:00',
    content: '학원 도착 (1차)',
    details: ['탐구 영역까지 응시한 학생 학원 도착'],
  },
  {
    time: '19:00',
    content: '학원 도착 (2차)',
    details: ['제2외국어/한문 응시 학생 학원 도착'],
  },
  { time: '20:00', content: '종강', details: ['전원 종강'] },
];

const departureData = [
  { school: '양서고등학교', time: '06:50' },
  { school: '양평고등학교 · 양일고등학교 · 양평중학교', time: '07:00' },
  { school: '용문고등학교', time: '07:10' },
];

const supportData = [
  { item: '아침식사', content: '수능 당일 아침 학원에서 제공' },
  { item: '점심 도시락', content: '학원에서 제공 (외부 반입 불필요)' },
  {
    item: '시험 직전 지원',
    content: '컨디션 체크, 준비물 점검, 심리 안정 지원 등',
  },
];

const menuData = [
  { category: '국물', menu: '쇠고기무국' },
  { category: '주식', menu: '쌀밥 (희망자에 한해 죽 제공)' },
  { category: '메인', menu: '한우불고기' },
  {
    category: '반찬',
    menu: '스팸구이, 계란말이, 케찹, 볶음김치, 진미채, 구이김, 무말랭이',
  },
  { category: '음료·간식', menu: '다과, 물' },
];

const afterScheduleData: { date: string; content: ReactNode; key?: boolean }[] =
  [
    {
      date: '2026. 11. 20.(금) – 22.(일)',
      content: '가채점 결과 학원 설문지 입력 (예정)',
    },
    { date: '2026. 12. 11.(금)', content: '수능 성적 통지일' },
    {
      date: '2026. 12. 13.(일) – 14.(월)',
      content: '정시 상담 사전예약 안내 (예정)',
    },
    {
      date: '2026. 12. 18.(금)까지',
      content: '수시모집 최초 합격자 발표 마감',
    },
    {
      date: '2026. 12. 29.(화) – 2027. 1. 3.(일)',
      content: '무료 정시 상담 (예정)',
      key: true,
    },
    {
      date: '2027. 1. 4.(월) – 7.(목)',
      content: '정시모집 원서접수 (기간 내 대학별 3일 이상)',
    },
    { date: '2027. 2. 5.(금)까지', content: '정시모집 최초 합격자 발표 마감' },
  ];

// ── 페이지 ─────────────────────────────────────────────────

export default function SuneungNotice2027() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '수능 전일·당일 운영 및 수능 이후 일정',
    description:
      '2027학년도 수능(2026년 11월 19일) 안내. 11/18 변경 고시: 지우개·샤프심·수정테이프·컴퓨터용 검은색 사인펜 반입 금지 및 필수 준비물 변경을 확인하세요. 수능 전·당일 운영과 무료 정시 상담 일정도 안내드립니다.',
    image: {
      '@type': 'ImageObject',
      url: `https://blog.snacademy.co.kr${THUMBNAIL}`,
      width: 900,
      height: 500,
      alt: '2027 수능 안내 썸네일',
    },
    author: { '@type': 'Organization', name: 'SN독학기숙학원' },
    publisher: {
      '@type': 'Organization',
      name: 'SN독학기숙학원',
      url: 'https://snacademy.co.kr',
    },
    datePublished: '2026-11-09',
    dateModified: '2026-11-18',
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    articleSection: '공지사항',
    keywords: [
      '긴급',
      '11/18 변경 고시',
      '수능',
      '안내',
      '일정',
      '2027학년도',
      '대학수학능력시험',
    ],
    inLanguage: 'ko-KR',
    isAccessibleForFree: true,
    educationalLevel: '고등학교',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: '학생, 학부모',
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        {/* 문서 머리 */}
        <header className="border-t-[3px] border-gray-900 pt-6 dark:border-gray-200">
          <p className="text-[13px] font-semibold tracking-wide text-gray-500 dark:text-gray-400">
            2027학년도 수능 · 공지사항 · 학부모 안내
          </p>
          <h1 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[34px] dark:text-white">
            수능 전일·당일 운영 및 수능 이후 일정
          </h1>
          <p className="mt-2 text-base text-gray-600 sm:text-lg dark:text-gray-300">
            [긴급] 준비물·반입 금지 물품 변경 안내 (11/18 변경 고시)
          </p>

          <dl className="mt-7 grid grid-cols-[88px_1fr] border-y border-gray-300 text-sm sm:grid-cols-[88px_1fr_88px_1fr] dark:border-gray-600">
            <dt className="border-b border-gray-200 bg-gray-50 px-3 py-2.5 font-semibold text-gray-600 sm:border-b-0 dark:border-gray-700 dark:bg-gray-800/60 dark:text-gray-300">
              시행일
            </dt>
            <dd className="border-b border-gray-200 px-3 py-2.5 sm:border-b-0 dark:border-gray-700">
              2026년 11월 19일(목)
            </dd>
            <dt className="bg-gray-50 px-3 py-2.5 font-semibold text-gray-600 dark:bg-gray-800/60 dark:text-gray-300">
              발신
            </dt>
            <dd className="px-3 py-2.5">SN독학기숙학원</dd>
          </dl>
        </header>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          최종 수정: <time dateTime="2026-11-18">2026년 11월 18일</time>
          {' · '}준비물·반입 금지 물품 변경 및 현장 배부 수험생 유의사항 추가
        </p>

        <div className="mt-6">
          <Important title="[긴급] 11/18 변경 고시">
            <p>
              준비물 및 반입 금지 물품 안내가 변경되었습니다. 흑색 연필은 필수
              준비물 목록에서 제외하며,{' '}
              <strong>
                지우개, 샤프심, 수정테이프, 컴퓨터용 검은색 사인펜
              </strong>
              은 시험장 반입이 금지됩니다.
            </p>
            <p>
              귀마개에 대한 반입 금지 항목은 없으나, 초소형 인이어 이어폰 단속
              등을 이유로{' '}
              <strong>시험감독관이 수시로 확인할 수 있습니다.</strong>
            </p>
            <figure className="mt-4">
              <figcaption className="mb-2 font-semibold">
                수능 준비물 및 반입 금지 물품 변경 안내 (11/18)
              </figcaption>
              <Image
                src="/images/notice/261118-suneung-products-update.png"
                alt="수능 준비물 및 반입 금지 물품 변경 안내 (11/18)"
                width={1024}
                height={559}
                className="h-auto w-full"
              />
            </figure>
          </Important>
        </div>

        {/* 인사말 */}
        <div className="mt-10 space-y-3 text-[15px] leading-7 text-gray-800 sm:text-base dark:text-gray-200">
          <p>안녕하십니까. SN독학기숙학원입니다.</p>
          <p>
            2027학년도 대학수학능력시험이 다가오고 있습니다. 그동안 학생들이
            쌓아 온 노력이 좋은 결과로 이어질 수 있도록 학원에서도 마지막까지
            최선을 다해 지원하겠습니다. 수능 전일, 당일 및 향후 일정을 아래와
            같이 안내드립니다.
          </p>
        </div>

        {/* 목차 */}
        <nav
          aria-label="안내 목차"
          className="mt-8 border-y border-gray-300 py-4 dark:border-gray-600"
        >
          <ol className="grid gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
            {[
              ['01', '수능 전 일정 안내', 'pre-schedule'],
              ['02', '수능 당일 안내', 'day-schedule'],
              ['03', '학원 제공 지원 사항', 'support'],
              ['04', '수능 이후 일정 및 무료 정시 상담', 'after'],
              ['05', '문의 안내', 'contact'],
            ].map(([no, label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex gap-3 text-gray-700 hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-white"
                >
                  <span className="font-mono text-gray-400 tabular-nums">
                    {no}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 01 */}
        <Section no="01" title="수능 전 일정 안내" id="pre-schedule">
          <DashList
            items={[
              <>
                <strong>11월 18일(수)</strong> 교육청 장학사가 본원을 방문하여
                수험생 유의사항 안내 및 <strong>수험표 배부</strong>를 진행할
                예정입니다.
              </>,
              <>
                고사장 배정 결과는 <strong>11월 18일(수)</strong> 공개되며, 확인
                즉시 학부모님께 별도 안내드리겠습니다.
              </>,
              <>
                학생들은 전날까지 <strong>컨디션 관리</strong> 및{' '}
                <strong>개인 준비물 점검</strong>을 철저히 하도록 지도합니다.
              </>,
            ]}
          />

          <div id="nov17-notice">
            <Important title="11/17 추가 안내 · 시험장 점검 및 부정행위 대응 강화">
              <SubHeading>1. 시험 당일 현장 점검 및 통제 강화</SubHeading>
              <DashList
                items={[
                  <>
                    <strong>시작 전 위급재난문자 전국 동시 발송:</strong> 1교시
                    시작 전인 <strong>오전 8시 25분~30분 사이</strong>에 수신
                    거부가 불가능한 위급재난문자를 전국에 발송해, 미제출
                    휴대전화의 진동·알림음으로 적발합니다.
                  </>,
                  <>
                    <strong>안경 및 소지품 전수 재점검:</strong> 1교시 시작 전
                    수험생이 안경을 책상에 내려놓게 하여{' '}
                    <strong>스마트안경</strong>
                    여부를 전수 점검하며, 이후 매 교시 착용 상태로 재확인합니다.
                    3교시 시작 전 본인 확인 시간에는 휴대품 전수 재점검을 추가로
                    실시합니다.
                  </>,
                  <>
                    <strong>초소형 카메라 대응 (단추 스티커 부착):</strong>{' '}
                    1교시 전 감독관 안내에 따라 수험생의{' '}
                    <strong>옷 단추마다 스티커를 부착</strong>해 가리며, 양
                    소매를 걷고 옷깃·단추를 확인합니다. 의심 정황이 발견되면
                    금속탐지기로 소지 여부를 탐색합니다.
                  </>,
                  <>
                    <strong>가방 복도 보관 및 전자기기 일절 금지:</strong>{' '}
                    수험생 가방은 교실 밖 복도에 별도 보관하며,
                    스마트반지·스마트워치·카메라 내장 필기구 등 모든 전자기기는
                    전원을 끈 상태로 1교시 전 반드시 제출해야 합니다.
                  </>,
                ]}
              />

              <SubHeading>2. 감독 인력 증원 및 통신 모니터링</SubHeading>
              <DashList
                items={[
                  <>
                    <strong>감독 인력 8,400여 명 추가 배치:</strong> 기존 7만
                    5천여 명 외에 스마트기기 전담 인력 1,800여 명, 복도 감독관
                    6,600여 명을 추가 투입합니다.
                  </>,
                  <>
                    <strong>특이 통신 신호 점검:</strong> 별도의 전파탐지기를
                    설치하지는 않으나, 지자체·통신사와 협력해 시험장 내 와이파이
                    및 LTE·5G 특이 통신 신호를 전담 인력이 집중 점검합니다.
                  </>,
                ]}
              />

              <SubHeading>3. 처벌 및 사후 추적 대폭 강화</SubHeading>
              <DashList
                items={[
                  <>
                    <strong>
                      응시자격 제한 1년 → 10년 확대 (국회 협의 예정):
                    </strong>{' '}
                    부정행위 적발 시 응시 제한 기간을 기존 1년에서{' '}
                    <strong>10년으로 확대</strong>하고, 올해(2027학년도) 수능
                    적발자부터 소급 적용되도록 국회와 즉시 협의할 예정입니다.
                  </>,
                  <>
                    <strong>입학 취소 및 형사 고발:</strong> 부정행위 입학자는
                    입학 취소(재수생은 재학 대학 퇴학) 및 10년간 입학이
                    금지되며, 첨단 기기 활용 등 중대 부정행위는 형법상 위계에
                    의한 공무집행방해(5년 이하 징역)로 수사 의뢰합니다.
                  </>,
                  <>
                    <strong>시험 종료 후 사후 추적:</strong> 교육부 누리집에
                    부정행위 신고센터를 운영하고, 의심 정황이 포착될 경우 수능
                    성적 분석과 함께 통신사로부터 AI 서비스 접속 기록 및
                    통신사실확인자료를 제출받아 사후 조사를 진행합니다.
                  </>,
                ]}
              />
            </Important>
          </div>

          <Important title="수험생 유의사항 — 현장 배부 안내문">
            <SubHeading>수능 당일 유의사항</SubHeading>
            <DashList
              items={[
                <>
                  <strong>수험표와 신분증</strong> 반드시 지참
                </>,
                <>
                  <strong>오전 8시 10분까지 입실 완료</strong>
                </>,
                <>
                  시험은 미리 정해 놓은 시험관리계획에 따라 실시하므로 수험생은
                  반드시 지정된 시험장의 시험실에서 응시하여야 합니다.{' '}
                  <strong>수험표에 명기된 장소</strong>를 확인해 주세요.
                </>,
              ]}
            />

            <SubHeading>
              시험장 수험생 스티커 부착 안내 — 교탁 안내문
            </SubHeading>
            <ol className="list-decimal space-y-2 pl-5">
              <li>시험실 입실 즉시 교탁 위에 놓인 스티커를 직접 챙겨주세요.</li>
              <li>
                본인 옷의 모든 단추에 스티커를 부착한 후 자리에 착석해주시기
                바랍니다.
              </li>
              <li>
                1교시 시작 전 스마트기기 검사 시 감독관이 부착 여부를 확인할
                예정입니다.
              </li>
            </ol>

            <SubHeading>수험생 유의사항 안내</SubHeading>
            <p>공정한 시험을 위해 아래 사항을 꼭 확인해 주세요!</p>
            <ol className="list-decimal space-y-4 pl-5">
              <li>
                <strong>본인 및 시계 확인 시 안경 확인!</strong>
                <DashList
                  items={[
                    '안경을 벗어 책상 위에 올려놓아 주세요.',
                    '매 교시 안경 착용 상태에서 확인합니다.',
                  ]}
                />
              </li>
              <li>
                <strong>초소형 카메라 점검!</strong>
                <DashList
                  items={[
                    '양쪽 소매를 걷고 대기해 주세요.',
                    '양쪽 소매, 옷깃, 시계 등을 확인합니다.',
                  ]}
                />
              </li>
              <li>
                <strong>가방은 시험실 밖 복도에 보관!</strong>
                <DashList
                  items={[
                    '반입금지 물품 외 물품은 가방에 넣어서 시험실 밖 복도에 보관합니다.',
                    '귀중품은 분실 우려가 있으니 가급적 지참하지 마세요.',
                  ]}
                />
              </li>
              <li>
                <strong>후드티·장신구·단추 있는 옷 착용 자제!</strong>
                <DashList
                  items={[
                    '원활한 시험 감독과 부정행위 예방을 위해 착용을 가급적 자제해 주세요.',
                  ]}
                />
              </li>
              <li>
                <strong>재난안내문자 발송!</strong>
                <DashList
                  items={[
                    '미제출 휴대전화 확인을 위해 재난안내문자가 발송됩니다.',
                    '재난문자 발송과 함께 점검을 실시합니다.',
                  ]}
                />
              </li>
              <li>
                <strong>시험장 통신망 점검 실시!</strong>
                <DashList
                  items={[
                    '시험장 인터넷망 차단 및 공공와이파이 목록을 조회합니다.',
                    '통신사 확인 자료 등을 통해 부정행위 여부를 확인합니다.',
                  ]}
                />
              </li>
              <li>
                <strong>반입금지 물품은 반드시 제출!</strong>
                <DashList
                  items={[
                    '반입금지 물품은 1교시 시작 전 수거 시간에 반드시 제출해 주세요.',
                    '미제출 전자기기는 사용 여부와 관계없이 부정행위로 처리됩니다.',
                    '제출 시간 이후 발견된 경우에도 부정행위로 처리됩니다.',
                  ]}
                />
              </li>
            </ol>
            <p className="font-semibold">
              모두가 공정하고 안전하게 시험에 응시할 수 있도록 수험생 여러분의
              적극적인 협조 바랍니다!
            </p>
          </Important>

          <Disclosure title="스마트안경 시험장 반입 금지 (2027학년도 신설)">
            <p>
              2027학년도 수능부터 <strong>스마트안경</strong>이 시험장 반입 금지
              물품으로 명시되었습니다. 외관이 일반 안경과 비슷하여 무심코
              지참하기 쉬우니 각별히 유의해 주시기 바랍니다.
            </p>
            <DashList
              items={[
                <>
                  <strong>가방에 넣어 두기만 해도</strong>(단순 소지) 부정행위
                  9호에 해당하여 <strong>해당 시험이 무효</strong> 처리됩니다.
                  지참한 경우 반드시{' '}
                  <strong>1교시 시작 전 감독관에게 제출</strong>
                  해야 합니다.
                </>,
                <>
                  제출하지 않고 <strong>시험 중 착용</strong>하면 기능을
                  사용하지 않았더라도 사용한 것으로 간주되어 부정행위 3호가
                  적용됩니다(
                  <strong>시험 무효 및 다음 연도 수능 응시자격 1년 정지</strong>
                  ).
                </>,
                <>
                  감독관의 확인 요구에 응하지 않는 경우에도 심의를 거쳐{' '}
                  <strong>부정행위 3호에 준하는 조치</strong>를 받을 수
                  있습니다.
                </>,
                <>
                  교육부는 계획적·고의적 부정행위에 대해 시험 무효와 함께{' '}
                  <strong>고발·수사의뢰 등 법적 대응</strong>도 추진할
                  계획입니다.
                </>,
              ]}
            />
            <p>
              평소 도수가 있는 스마트안경을 착용하는 학생은 수능 당일 사용할{' '}
              <strong>일반 안경을 미리 준비</strong>해 주십시오. 학원에서도 수능
              전 개인 물품을 함께 점검하겠습니다.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              출처: 한국교육과정평가원 2027학년도 수험생 유의사항 관련 보도 (
              <a
                href="https://view.asiae.co.kr/article/2026101515252109608"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                아시아경제
              </a>
              ,{' '}
              <a
                href="https://www.eduplusnews.com/news/articleView.html?idxno=20586"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                에듀플러스
              </a>
              )
            </p>
          </Disclosure>

          <Disclosure title="수능 준비물 상세 안내">
            <div>
              <p className="mb-2 font-semibold text-gray-900 dark:text-white">
                필수 준비물
              </p>
              <DashList
                items={[
                  <strong key="a">수험표</strong>,
                  <>
                    <strong>신분증</strong>: 주민등록증, 운전면허증, 청소년증 등
                    본인임을 증명할 수 있는 신분증
                  </>,
                  <>
                    <strong>수험용 아날로그 시계</strong>: 통신·결제 기능 및
                    전자식 화면이 없는 시계
                  </>,
                  <>
                    <strong>물과 간식</strong>: 시험장에서는 점심과 음용수가
                    제공되지 않음
                  </>,
                  <>
                    필요한 경우 <strong>귀마개, 상비약</strong>
                  </>,
                ]}
              />
            </div>
            <div>
              <p className="mb-2 font-semibold text-gray-900 dark:text-white">
                시험장 반입 금지 물품
              </p>
              <DashList
                items={[
                  <>
                    <strong>
                      지우개, 샤프심, 수정테이프, 컴퓨터용 검은색 사인펜
                    </strong>
                  </>,
                  <>
                    휴대전화, 스마트워치, <strong>스마트안경</strong>, 블루투스
                    이어폰 등 전자기기
                  </>,
                ]}
              />
            </div>
            <div>
              <p className="mb-2 font-semibold text-gray-900 dark:text-white">
                시험 중 휴대 금지 물품
              </p>
              <DashList
                items={[
                  '개인 샤프, 볼펜, 교과서, 참고서, 기출문제지 등',
                  <>
                    위 물품은 쉬는 시간에 사용할 수 있으나,{' '}
                    <strong>
                      매 교시 시작 전 가방에 넣어 시험실 밖 복도에 보관
                    </strong>
                    해야 합니다.
                  </>,
                ]}
              />
            </div>
          </Disclosure>

          <Disclosure title="시험장(학교) 안내">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              수험생은 다음 5개 학교 중 한 곳에 배정됩니다. 주소를 누르면 네이버
              지도로 이동합니다.
            </p>
            <Table
              label="학교 시험장 정보"
              head={['학교명', '주소', '소요시간']}
              widths={['150px', undefined, '140px']}
              rows={schoolData.map(school => [
                <strong key="n">{school.name}</strong>,
                <a
                  key="a"
                  href={school.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-400 underline-offset-2 hover:decoration-gray-900"
                >
                  {school.address}
                </a>,
                school.time,
              ])}
            />
            <Note>
              <strong>양평중학교</strong>는 작년에는 배정되지 않았지만, 올해
              신규로 배정된 시험장입니다.
            </Note>
            <Note>
              양서고는 본원 학생의 배정이 최소화될 것으로 예상되나, 최종 결과는{' '}
              <strong>11월 18일(수)</strong> 발표됩니다.
            </Note>
            <Note>
              본원은 수능 당일 학생 이동을 위해 <strong>버스 6대를 대절</strong>
              하였습니다.
            </Note>
          </Disclosure>

          <div>
            <SubHeading>수능 전 참고 영상</SubHeading>
            <p className="mt-2">
              수능을 앞둔 학생과 학부모님께서는 아래 영상도 함께 확인해 주시기
              바랍니다.
            </p>
            <div className="relative mt-4 aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
              <iframe
                src="https://www.youtube.com/embed/8gUWtBFzYuU"
                title="수능 전 참고 영상"
                className="absolute inset-0 h-full w-full"
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
                className="text-gray-700 underline underline-offset-2 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                유튜브에서 영상 보기
              </a>
            </p>
          </div>
        </Section>

        {/* 02 */}
        <Section no="02" title="수능 당일 안내" id="day-schedule">
          <p>
            <strong>시행일: 2026년 11월 19일(목)</strong>
            <br />
            수능 당일에는 학원 및 주변 도로가 <strong>매우 혼잡</strong>할
            것으로 예상됩니다. 원내 안전과 학생 이동 동선 확보를 위해 아래
            사항을 반드시 참고해 주시기 바랍니다.
          </p>

          <Table
            label="수능 당일 학부모 안내"
            head={['구분', '안내 사항']}
            widths={['150px', undefined]}
            rows={[
              [
                <strong key="h">학부모 출입</strong>,
                <>
                  <strong>13:00(오후 1시) 이후</strong> 학원 출입이 가능합니다.
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    오전에는 학생 이동 동선 확보를 위해 출입이 제한됩니다.
                  </span>
                </>,
              ],
              [
                <strong key="p">주차</strong>,
                <>
                  원내 주차가 가능하나, 혼잡 시 현장 직원 안내에 따라{' '}
                  <strong>임시 주차구역</strong> 이용을 요청드릴 수 있습니다.
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    도로변 이중주차 및 장기 대기는 통제됩니다.
                  </span>
                </>,
              ],
              [
                <strong key="o">퇴소</strong>,
                <>
                  당일 혼잡을 줄이기 위해{' '}
                  <strong>고사장에서 바로 퇴소하시는 것을 권장</strong>합니다.
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    고사장 퇴소 후 학원을 방문하시면 사전에 분류된 학생 짐을
                    정리하여 반출하실 수 있습니다.
                  </span>
                </>,
              ],
              [
                <strong key="m">휴대전화</strong>,
                <>
                  개인 스마트폰은 <strong>수험장 반입이 불가</strong>합니다.
                  고사장에서 퇴소하는 학생의 스마트폰은{' '}
                  <strong>픽업 담당 교사가 일괄 보관</strong>하며, 고사장에서
                  수령하실 수 있습니다.
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    본원에서 퇴소하는 경우에도 픽업 담당 교사가 귀원한 후 수령이
                    가능합니다.
                  </span>
                </>,
              ],
            ]}
          />

          <SubHeading>짐 정리 안내</SubHeading>
          <DashList
            items={[
              <>
                기숙사 짐이 많은 관계로,{' '}
                <strong>학생이 미리 분류해 놓은 짐만 반출</strong> 가능합니다.
              </>,
              '룸메이트 짐 혼동 방지를 위해 학생 정리 완료 전 임의 반출은 제한될 수 있습니다.',
              <>
                <strong>튼튼한 박스·캐리어·타포린백 등을 넉넉히 지참</strong>
                하시면 정리에 큰 도움이 됩니다. 미지참 시 학원에서도 구매
                가능하나, 수량이 한정되어 있고 시중가보다 다소 비쌀 수 있습니다.
              </>,
              <>
                <strong>
                  당일에는 학원 내 카트 수량이 부족합니다. 캠핑카트 등이 있다면
                  꼭 지참해 주시기 바랍니다.
                </strong>
              </>,
            ]}
          />
          <Panel>
            <p>
              수능 당일 응원은 학원이 아닌 <strong>고사장에서</strong>{' '}
              부탁드립니다. 당일 본원은 학생 지원에 집중하겠습니다.
            </p>
          </Panel>

          <SubHeading>수능 당일 일정</SubHeading>
          <Table
            label="수능 당일 상세 일정"
            head={['시간', '내용', '세부 내용']}
            widths={['120px', '190px', undefined]}
            rows={scheduleData.map(item => [
              <span
                key="t"
                className={`tabular-nums ${item.key ? 'font-bold' : ''}`}
              >
                {item.time}
              </span>,
              <span key="c" className={item.key ? 'font-bold' : ''}>
                {item.content}
              </span>,
              <ul key="d" className="space-y-0.5">
                {item.details.map(d => (
                  <li key={d}>{d}</li>
                ))}
              </ul>,
            ])}
          />

          <SubHeading>학교별 차량 출발 시각</SubHeading>
          <Table
            label="학교별 차량 출발 시각"
            head={['시험장', '출발 시각']}
            widths={[undefined, '140px']}
            rows={departureData.map(d => [
              d.school,
              <strong key="t" className="tabular-nums">
                {d.time}
              </strong>,
            ])}
          />

          <Important title="입실 시각">
            <p>
              수험생은{' '}
              <strong>08:10까지 지정된 시험실 또는 대기 장소에 입실</strong>
              해야 합니다.
            </p>
          </Important>
        </Section>

        {/* 03 */}
        <Section no="03" title="학원 제공 지원 사항" id="support">
          <Table
            label="수능 당일 학원 제공 지원 사항"
            head={['항목', '내용']}
            widths={['150px', undefined]}
            rows={supportData.map(item => [
              <strong key="i">{item.item}</strong>,
              item.content,
            ])}
          />
          <Disclosure title="수능 당일 도시락 메뉴">
            <Table
              label="수능 당일 도시락 메뉴"
              head={['구분', '메뉴']}
              widths={['150px', undefined]}
              rows={menuData.map(menu => [menu.category, menu.menu])}
            />
          </Disclosure>
        </Section>

        {/* 04 */}
        <Section
          no="04"
          title="수능 이후 일정 및 무료 정시 상담 안내"
          id="after"
        >
          <Panel>
            <p>
              <strong>
                본원의 정시 상담은 별도 비용 없이 무료로 진행됩니다.
              </strong>
              <br />
              수능 이후에도 학생별 성적과 목표에 맞는 지원 전략을 함께 점검하며,
              학생 한 명 한 명의 합격까지 최선을 다하겠습니다.
            </p>
          </Panel>
          <Table
            label="수능 이후 일정"
            head={['일정', '내용']}
            widths={['250px', undefined]}
            rows={afterScheduleData.map(item => [
              <span
                key="d"
                className={`tabular-nums ${item.key ? 'font-bold' : ''}`}
              >
                {item.date}
              </span>,
              <span key="c" className={item.key ? 'font-bold' : ''}>
                {item.content}
              </span>,
            ])}
          />
          <div className="space-y-1">
            <Note>
              가채점 입력 및 정시 상담 관련 학원 내부 일정은 예정이며, 확정
              일정과 상담 신청 방법은 추후 별도 안내드립니다.
            </Note>
            <Note>
              정시모집 원서접수 시작일과 마감일·마감 시각은 대학별로 다르므로,
              지원 대학의 모집요강을 반드시 확인해 주시기 바랍니다.
            </Note>
          </div>
        </Section>

        {/* 05 */}
        <Section no="05" title="문의 안내" id="contact">
          <DashList
            items={[
              <>
                수능 전후 문의는 전화보다{' '}
                <strong>카카오톡 채널 ‘SN독학기숙학원’</strong>을 이용해 주시면
                보다 신속하고 정확하게 안내드릴 수 있습니다.
              </>,
              <>
                고사장 또는 본원에서 퇴소한 뒤에는 인원 파악을 위해{' '}
                <strong>
                  본원 카카오톡 채널로 퇴소 여부를 꼭 알려 주시기 바랍니다.
                </strong>
              </>,
            ]}
          />
        </Section>

        {/* 맺음말 · 발신 */}
        <footer className="mt-14 border-t border-gray-300 pt-8 text-[15px] leading-7 text-gray-800 sm:text-base dark:border-gray-600 dark:text-gray-200">
          <p>
            본원은 마지막 순간까지 학생들의 컨디션을 최우선으로 관리하며, 모든
            학생이 원하는 결과를 얻을 수 있도록 끝까지 함께하겠습니다. 올 한 해
            보내주신 신뢰와 협조에 깊이 감사드립니다.
          </p>
          <div className="mt-10 text-right">
            <p className="text-sm text-gray-500 tabular-nums dark:text-gray-400">
              2026년 11월 9일
            </p>
            <p className="mt-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              SN독학기숙학원
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
}
