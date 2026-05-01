'use client';

import React, { useState } from 'react';
import {
  CreditCard,
  MessageCircle,
  MonitorCheck,
  Smartphone,
} from 'lucide-react';

type TabType = 'intro' | 'requirements';

const eligibilityItems = [
  {
    title: '2026학년도 수능 / 평가원 모의고사\n2027학년도 6월 평가원 모의고사',
    description: '국수영 / 국수탐(1) 합 8등급 이내',
  },
  {
    title: '내신',
    description: '전 과목 2.5 이하',
  },
  {
    title: '대학교 재학생(성적요건 면제)',
    description: '메디컬 및 인서울대학 재학생',
  },
  {
    title: '본원지정 우수고교',
    description:
      '외고, 국제고 및 민사고, 상산고, 하나고, 용인외대부고, 포항제철고, 광양제철고, 북일고, 김천고, 인천하늘고, 현대청운고, 안산동산고, 공주한일고, 경신고, 해운대고, 공주사대부고 등',
  },
];

const processSteps = [
  {
    step: 'STEP 1',
    title: '문의/상담',
    lines: ['전화 / 카카오톡', '방문 상담'],
    href: 'http://pf.kakao.com/_exjtgj/chat',
    Icon: MessageCircle,
  },
  {
    step: 'STEP 2',
    title: '온라인 접수',
    lines: ['바로가기'],
    href: 'https://www.snacademy.co.kr/admission/admission_online_register.asp',
    Icon: MonitorCheck,
  },
  {
    step: 'STEP 3',
    title: '예약금 입금',
    lines: ['우리은행', '1005-302-613792', '(에스엔 아카데미)'],
    Icon: CreditCard,
  },
  {
    step: 'STEP 4',
    title: '입소안내',
    lines: ['입소 준비물 및', '안내사항 문자 전송'],
    Icon: Smartphone,
  },
];

export default function RepeaterClass2027() {
  const [activeTab, setActiveTab] = useState<TabType>('intro');

  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#29472b]">
              SN독학기숙학원
            </span>
            <span className="text-slate-300">|</span>
            <h1 className="text-sm font-semibold text-slate-900">
              2027학년도 반수반 모집
            </h1>
          </div>
        </div>
      </header>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex gap-0 overflow-x-auto">
            <TabButton
              active={activeTab === 'intro'}
              onClick={() => setActiveTab('intro')}
            >
              반수반 소개
            </TabButton>
            <TabButton
              active={activeTab === 'requirements'}
              onClick={() => setActiveTab('requirements')}
            >
              모집요강
            </TabButton>
          </div>
        </div>
      </div>

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-[#f3f0e9]">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:py-14">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-[#29472b]">
              NOTICE · 2027 ADMISSION
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              2027학년도
              <br />
              SN독학기숙학원 반수반 모집
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
              2027학년도 대입을 준비하는 수험생을 위한 반수반 모집요강입니다.
              모집 대상, 성적 조건, 수강료와 등록 절차를 한눈에 확인하세요.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:h-64">
              <img
                src="/images/notice/2026-admission-guide/SN-photo.JPG"
                alt="SN독학기숙학원 반수반 모집 안내"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-4 py-10 md:py-14">
        {activeTab === 'intro' && (
          <section id="intro" className="scroll-mt-24 space-y-8">
            <div>
              <SectionTitle
                title="반수반 소개"
                subtitle="2027학년도 대입을 다시 설계하는 수험생을 위한 SN독학기숙학원 반수반입니다."
              />
              <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[1.15fr,1fr] md:p-6">
                <div className="space-y-4 text-sm leading-relaxed text-slate-700 md:text-base">
                  <p>
                    SN독학기숙학원 반수반은 2027학년도 대입을 준비하는 수험생이
                    학습 리듬을 빠르게 회복하고, 안정적인 기숙 환경 안에서 수능
                    준비에 집중할 수 있도록 운영됩니다.
                  </p>
                  <p>
                    학습, 생활, 식사, 세탁까지 한 공간에서 관리되며 입소 이후
                    안내사항은 문자로 개별 전달됩니다.
                  </p>
                </div>
                <div className="rounded-xl bg-[#f6f3ec] p-4 text-sm">
                  <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-[#29472b]">
                    PROGRAM
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <Bullet>2027학년도 대입 수험생 대상</Bullet>
                    <Bullet>2026년 6월 말 이후 입소</Bullet>
                    <Bullet>기숙사비, 식비, 세탁비 포함</Bullet>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle
                title="특장점"
                subtitle="반수 성공을 위해 학습 시간, 담임 관리, AI 학습 서비스를 함께 제공합니다."
              />
              <div className="grid gap-4 md:grid-cols-3">
                <FeatureCard
                  number="01"
                  title="일 14시간 이상의 학습시간"
                  icon="/images/thumbnail/notice/icon/1-1_green.png"
                />
                <FeatureCard
                  number="02"
                  title="학습담임의 철저한 학습량, 학습방향 설정 관리"
                  icon="/images/thumbnail/notice/icon/2_counceling_clean.png"
                />
                <FeatureCard
                  number="03"
                  title="AI 특화관"
                  icon="/images/thumbnail/notice/icon/3_ai_clean.png"
                  description={[
                    '온라인 학습량 측정',
                    'AI 활용 질문',
                    '(공부 관련 질문만 받아줌)',
                    '성적 분석 서비스 제공',
                  ]}
                />
              </div>
            </div>
          </section>
        )}

        {activeTab === 'requirements' && (
          <div id="requirements" className="space-y-12 scroll-mt-24">
            <section>
              <SectionTitle
                title="모집 안내"
                subtitle="반수반 입소 대상과 등록 및 입소 기간을 안내드립니다."
              />
              <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[1.25fr,1fr] md:p-6">
                <div className="space-y-4">
                  <InfoRow label="모집대상">2027학년도 대입 수험생</InfoRow>
                  <InfoRow label="등록기간">
                    <span className="font-semibold text-[#29472b]">
                      선착순 마감
                    </span>
                  </InfoRow>
                  <InfoRow label="입소기간">
                    <span className="font-semibold text-[#29472b]">
                      2026년 6월 말 이후
                    </span>
                  </InfoRow>
                </div>
                <div className="rounded-xl bg-[#f6f3ec] p-4 text-sm">
                  <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-[#29472b]">
                    RESERVATION
                  </p>
                  <p className="leading-relaxed text-slate-700">
                    성적 조건 4가지 중 하나를 충족하면 예약 가능합니다. 모집은
                    선착순으로 진행되며 마감 시 접수가 조기 종료될 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <SectionTitle
                title="성적 조건"
                subtitle="아래 4가지 조건 중 하나를 충족하면 예약 가능합니다."
              />
              <div className="grid gap-4 md:grid-cols-2">
                {eligibilityItems.map(item => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="mb-2 whitespace-pre-line text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-xl bg-[#29472b] px-4 py-3 text-sm font-medium text-white">
                * 4가지 중 하나 충족 시 예약 가능
              </p>
            </section>

            <section>
              <SectionTitle
                title="수강료 안내"
                subtitle="기숙사비, 식비, 세탁비가 모두 포함된 월 수강료입니다."
              />
              <div className="grid gap-6 md:grid-cols-[1.3fr,1fr]">
                <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="text-base font-semibold text-slate-900">
                    수강료 구성
                  </h3>
                  <div className="overflow-hidden rounded-xl border border-slate-200 text-sm">
                    <table className="min-w-full border-collapse">
                      <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                        <tr>
                          <th className="border-b border-slate-200 px-4 py-3 text-left">
                            구분
                          </th>
                          <th className="border-b border-slate-200 px-4 py-3 text-right">
                            수강료
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr>
                          <td className="border-b border-slate-100 px-4 py-3">
                            3인실, 4인실
                          </td>
                          <td className="border-b border-slate-100 px-4 py-3 text-right font-semibold">
                            245만원/월
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3">2인실</td>
                          <td className="px-4 py-3 text-right font-semibold">
                            265만원/월
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-3 rounded-2xl bg-[#f6f3ec] p-5 text-sm md:p-6">
                  <h3 className="text-base font-semibold text-slate-900">
                    포함 및 환불 안내
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <Bullet>기숙사비, 식비, 세탁비 모두 포함</Bullet>
                    <Bullet>추가비용 없음</Bullet>
                    <Bullet>학원복 최초 1회 별도 구매 10만원</Bullet>
                    <Bullet>
                      학원 설립, 운영 및 과외교습에 관한 교육청 조례에 의거하여
                      환불
                    </Bullet>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <SectionTitle
                title="접수 및 등록 절차"
                subtitle="상담부터 입소 안내까지 순서대로 진행됩니다."
              />
              <div className="grid gap-4 md:grid-cols-4">
                {processSteps.map(item => (
                  <div
                    key={item.step}
                    className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center"
                  >
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#f6f3ec] text-[#29472b]">
                      <item.Icon
                        aria-hidden="true"
                        strokeWidth={1.8}
                        className="h-11 w-11"
                      />
                    </div>
                    <span className="mb-3 text-xs font-bold tracking-[0.15em] text-[#29472b]">
                      {item.step}
                    </span>
                    <h3 className="mb-3 text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <div className="space-y-1 text-sm text-slate-700">
                      {item.lines.map(line =>
                        item.href &&
                        (line === '바로가기' || line === '전화 / 카카오톡') ? (
                          <a
                            key={line}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#29472b] underline underline-offset-4"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line}>{line}</p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        <section id="contact" className="scroll-mt-24">
          <SectionTitle
            title="문의 및 상담"
            subtitle="반수반 모집과 입소 관련 문의는 전화 또는 카카오톡으로 가능합니다."
          />
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-2 md:p-6">
            <div className="space-y-3">
              <InfoRow label="전화">031-771-0300</InfoRow>
              <InfoRow label="카카오톡">
                <a
                  href="http://pf.kakao.com/_exjtgj/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#29472b] underline underline-offset-4"
                >
                  SN독학기숙학원 1:1 채팅 문의
                </a>
              </InfoRow>
              <InfoRow label="계좌">
                우리은행 1005-302-613792
                <br />
                예금주: 에스엔 아카데미
              </InfoRow>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:flex-col">
              <a
                href="tel:031-771-0300"
                className="inline-flex items-center justify-center rounded-full bg-[#29472b] px-4 py-2 text-sm font-medium text-white hover:bg-[#213822]"
              >
                전화 상담
              </a>
              <a
                href="http://pf.kakao.com/_exjtgj/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:border-[#29472b]"
              >
                카카오톡 상담
              </a>
              <a
                href="https://www.snacademy.co.kr/admission/admission_online_register.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:border-[#29472b]"
              >
                원서접수
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 border-b-2 px-6 py-3 text-sm font-semibold transition-colors ${
        active
          ? 'border-[#29472b] text-[#29472b]'
          : 'border-transparent text-slate-500 hover:text-slate-700'
      }`}
    >
      {children}
    </button>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-slate-600 md:text-[15px]">{subtitle}</p>
      )}
    </div>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 text-sm md:text-[15px]">
      <div className="w-20 shrink-0 text-xs font-semibold text-slate-500 md:w-24">
        {label}
      </div>
      <div className="flex-1 text-slate-800">{children}</div>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  icon,
  description,
}: {
  number: string;
  title: string;
  icon: string;
  description?: string | string[];
}) {
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#29472b] text-xs font-bold text-white">
          {number}
        </span>
        <div className="flex h-16 w-16 shrink-0 items-center justify-center">
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <h3 className="text-base font-semibold leading-relaxed text-slate-900">
        {title}
      </h3>
      {description &&
        (Array.isArray(description) ? (
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-slate-600">
            {description.map(line => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        ) : (
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
        ))}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#29472b]" />
      <span>{children}</span>
    </li>
  );
}
