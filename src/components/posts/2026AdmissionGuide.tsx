'use client';

import React from 'react';

const sections = [
  { id: "schedule", label: "입소 일정" },
  { id: "required-items", label: "필수 준비물" },
  { id: "tuition", label: "교습비·입금 안내" },
  { id: "life", label: "생활 안내" },
  { id: "faq", label: "자주 묻는 질문" },
  { id: "contact", label: "문의" },
];

export default function AdmissionGuide2026() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900">
      {/* 상단 헤더 */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#29472b]">
              SN독학기숙학원
            </span>
            <h1 className="text-lg font-semibold text-slate-900">
              2026학년도 입소 안내
            </h1>
          </div>
          <nav className="hidden gap-4 text-sm md:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-slate-600 transition hover:text-[#29472b]"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-[#f3f0e9]">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:py-14">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-[#29472b]">
              NOTICE · 2026 ADMISSION
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              2026학년도 SN독학기숙학원
              <br />
              입소 전 꼭 확인해 주세요
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
              입소 일정, 필수 준비물, 교습비 및 생활 안내까지
              <br className="hidden md:block" />
              한 페이지에서 모두 확인하실 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="#required-items"
                className="rounded-full bg-[#29472b] px-4 py-2 font-medium text-white shadow-sm hover:bg-[#213822]"
              >
                필수 준비물 먼저 보기
              </a>
              <a
                href="#tuition"
                className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:border-[#29472b]"
              >
                교습비·입금 안내
              </a>
            </div>
          </div>
          <div className="flex-1">
            {/* 썸네일 영역 – 나중에 실제 이미지로 교체 가능 */}
            <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-slate-200 bg-[#fefbf4] shadow-sm md:h-64">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-slate-500">
                <span className="text-sm font-medium text-[#29472b]">
                  SN독학기숙학원 준비물 안내
                </span>
                <span className="text-xs">썸네일/사진을 여기에 배치하세요.</span>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              * 실제 홈페이지에서는 학원 전경 사진 또는 안내 썸네일로 교체하세요.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-4 py-10 md:py-14">
        {/* 입소 일정 */}
        <section id="schedule" className="scroll-mt-24">
          <SectionTitle
            title="입소 일정 및 장소"
            subtitle="입소 가능한 날짜와 시간, 위치 정보를 안내드립니다."
          />
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[1.3fr,1fr] md:p-6">
            <div className="space-y-4 text-sm md:text-base">
              <InfoRow label="입소 대상">
                2026학년도 수능 대비 SN독학기숙학원 등록 학생
              </InfoRow>
              <InfoRow label="입소 기간">
                <span className="font-medium text-[#29472b]">
                  (예시) 2026년 1월 5일(월) ~ 1월 7일(수)
                </span>
                <div className="text-xs text-slate-500">
                  정확한 날짜는 추후 공지 또는 안내 문자를 통해 다시 안내드립니다.
                </div>
              </InfoRow>
              <InfoRow label="입소 시간">
                오후 1시 ~ 오후 5시 (시간 내 자유 입소)
              </InfoRow>
              <InfoRow label="입소 장소">
                SN독학기숙학원 본원 (경기도 양평군 ○○로 00 SN독학기숙학원)
              </InfoRow>
              <InfoRow label="동행 안내">
                학부모 1인까지 동행 가능하며, 주차 공간이 협소하오니 가능한 카풀을
                권장드립니다.
              </InfoRow>
            </div>
            <div className="space-y-3 rounded-xl bg-[#f6f3ec] p-4 text-sm">
              <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-[#29472b]">
                CHECKLIST
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#29472b]" />
                  <span>입소일 하루 전, 준비물 체크리스트를 다시 한 번 점검해 주세요.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#29472b]" />
                  <span>입소 당일, 교습비 입금 완료 여부를 꼭 확인해 주세요.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#29472b]" />
                  <span>학생 주민등록증(또는 학생증)을 지참해 주세요.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 필수 준비물 */}
        <section id="required-items" className="scroll-mt-24">
          <SectionTitle
            title="필수 준비물 안내"
            subtitle="학습과 생활에 꼭 필요한 준비물입니다. 체크리스트로 입소 전 확인해 주세요."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <ChecklistCard
              category="학습 준비물"
              description="집중 학습을 위한 기본 학습 도구입니다."
              items={[
                "필기구(검정/파란 볼펜, 형광펜, 샤프 및 리필 심)",
                "자주 사용하는 참고서 및 문제집",
                "개인 노트 · 오답노트",
                "전자기기 사용이 허용된 경우 노트북/태블릿 및 충전기",
              ]}
            />
            <ChecklistCard
              category="생활 · 세면 용품"
              description="기숙 생활에 필요한 기본 생활 용품입니다."
              items={[
                "세면도구(칫솔, 치약, 샴푸, 바디워시, 수건 등)",
                "개인 스킨케어, 위생용품",
                "실내복, 잠옷, 여벌 옷, 속옷, 양말",
                "개인 물통, 작은 가방(학원 내 이동용)",
              ]}
            />
            <ChecklistCard
              category="의약품 및 개인 용품"
              description="필요한 경우를 대비해 개인 맞춤 의약품을 지참해 주세요."
              items={[
                "평소 복용하는 약(복용법이 적힌 약 봉투 또는 메모 포함)",
                "안경, 콘택트렌즈 및 세척 용품",
                "개인 알레르기/질환 관련 메모",
                "비상용 소액 현금",
              ]}
            />
            <ChecklistCard
              category="반입 금지 및 유의사항"
              description="학습 분위기와 안전을 위해 아래 물품은 반입이 제한됩니다."
              highlight
              items={[
                "게임기, 대형 스피커 등 학습에 방해되는 전자기기",
                "전열기구(전기장판, 전기난로, 전기포트 등) – 학원 비품 사용",
                "위험 물품(라이터, 칼 등)",
                "과도한 간식, 고기류 · 냉동식품 등 조리가 필요한 식품",
              ]}
            />
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * 세부 준비물 목록과 변경 사항은 추후 안내문 및 문자 공지를 통해 다시
            전달드립니다.
          </p>
        </section>

        {/* 교습비 안내 */}
        <section id="tuition" className="scroll-mt-24">
          <SectionTitle
            title="교습비 및 입금 안내"
            subtitle="교습비 항목과 입금 방법, 환불 기준을 안내드립니다."
          />

          <div className="grid gap-6 md:grid-cols-[1.3fr,1fr]">
            <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                교습비 구성 (예시)
              </h3>
              <div className="overflow-hidden rounded-xl border border-slate-200 text-sm">
                <table className="min-w-full border-collapse">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        항목
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-right">
                        금액
                      </th>
                      <th className="border-b border-slate-200 px-4 py-3 text-left">
                        비고
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="border-b border-slate-100 px-4 py-3">
                        기본 교습비
                      </td>
                      <td className="border-b border-slate-100 px-4 py-3 text-right">
                        (예) ￦ ○○○,○○○
                      </td>
                      <td className="border-b border-slate-100 px-4 py-3">
                        자습관리, 생활관리 포함
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 px-4 py-3">식비</td>
                      <td className="border-b border-slate-100 px-4 py-3 text-right">
                        (예) ￦ ○○○,○○○
                      </td>
                      <td className="border-b border-slate-100 px-4 py-3">
                        1일 3식 + 간식
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate-100 px-4 py-3">기숙사비</td>
                      <td className="border-b border-slate-100 px-4 py-3 text-right">
                        (예) ￦ ○○○,○○○
                      </td>
                      <td className="border-b border-slate-100 px-4 py-3">
                        숙소 · 공용시설 이용
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">기타</td>
                      <td className="px-4 py-3 text-right">별도 안내</td>
                      <td className="px-4 py-3">모의고사 응시료 등</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <p>
                  정확한 교습비는 개별 안내문 및 등록 페이지에서 확인해 주세요.
                </p>
                <p className="text-xs text-slate-500">
                  * 학원 등록 법규에 따른 환불 기준은 약관 및 별도 안내문을
                  참고해 주세요.
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl bg-[#f6f3ec] p-5 text-sm md:p-6">
              <h3 className="mb-2 text-base font-semibold text-slate-900">
                입금 안내
              </h3>
              <div className="space-y-2">
                <InfoRow label="입금 계좌">
                  (예) 국민은행 000-0000-000000
                  <br />
                  예금주 : SN독학기숙학원
                </InfoRow>
                <InfoRow label="입금 기한">
                  (예) 입소일 3일 전까지
                </InfoRow>
                <InfoRow label="입금자명">
                  <span className="font-medium text-[#29472b]">
                    반드시 &quot;학생이름+생년월일&quot;로 입금해 주세요.
                  </span>
                </InfoRow>
              </div>

              <div className="mt-3 rounded-xl bg-white/70 p-3 text-xs text-slate-600">
                <p className="mb-1 font-semibold text-[#29472b]">환불 규정 요약</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>입소 전 취소 시, 관련 법규에 따른 환불 기준 적용</li>
                  <li>입소 후 중도 퇴소 시, 잔여 기간에 따라 부분 환불 가능</li>
                  <li>자세한 내용은 학원 환불 약관을 참고해 주세요.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 생활 안내 */}
        <section id="life" className="scroll-mt-24">
          <SectionTitle
            title="생활 안내"
            subtitle="SN독학기숙학원에서의 하루와 생활 규정을 간단히 소개합니다."
          />
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-2 md:p-6">
            <div className="space-y-3 text-sm md:text-base">
              <h3 className="mb-1 text-base font-semibold text-slate-900">
                하루 일과 (예시)
              </h3>
              <ul className="space-y-1">
                <li>06:30 ~ 07:30 기상 · 세면 · 아침 식사</li>
                <li>08:00 ~ 12:00 오전 자습 / 수업</li>
                <li>12:00 ~ 13:00 점심 식사 및 휴식</li>
                <li>13:00 ~ 18:00 오후 자습 / 수업</li>
                <li>18:00 ~ 19:00 저녁 식사</li>
                <li>19:00 ~ 23:30 야간 자습</li>
                <li>23:30 ~ 취침 준비 및 점호</li>
              </ul>
            </div>
            <div className="space-y-3 text-sm">
              <h3 className="mb-1 text-base font-semibold text-slate-900">
                생활 및 규정 안내
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium text-[#29472b]">출타 규정</span> : 외출,
                  외박, 병원 진료 등은{" "}
                  <span className="font-medium">사전 신청 및 보호자 동의</span>가
                  필요합니다.
                </li>
                <li>
                  <span className="font-medium text-[#29472b]">휴대폰 · 전자기기</span>{" "}
                  : 학습에 방해되지 않도록 지정 시간에만 사용 가능합니다.
                </li>
                <li>
                  <span className="font-medium text-[#29472b]">상담</span> : 담당
                  담임선생님과 주 1회 이상 정기 상담을 진행합니다.
                </li>
                <li>
                  <span className="font-medium text-[#29472b]">세탁</span> : 주 ○회
                  공동 세탁실 이용(세탁 방법은 입소 후 안내).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24">
          <SectionTitle
            title="자주 묻는 질문 (FAQ)"
            subtitle="학부모님이 자주 문의하시는 내용을 모았습니다."
          />
          <div className="space-y-3">
            <FaqItem
              question="입소 전에 꼭 전화로 확인해야 하나요?"
              answer="온라인 등록 및 교습비 입금이 완료되면 별도의 통화 없이도 안내문과 문자로 입소가 가능합니다. 다만, 건강 상태나 특별히 필요한 사항이 있는 경우에는 사전에 학원으로 연락해 주시면 더 안전하게 대비할 수 있습니다."
            />
            <FaqItem
              question="좌석 배정은 어떻게 이루어지나요?"
              answer="대체로 등록 순과 학년, 선택 과목 등을 종합적으로 고려하여 배정합니다. 특정 친구와의 동일 반 배정 등은 원칙적으로 보장되지 않으나, 가능한 범위 내에서 최대한 반영해 드립니다."
            />
            <FaqItem
              question="입소 후 휴대폰은 어떻게 관리되나요?"
              answer="기본적으로 학습에 방해되지 않도록 휴대폰을 맡겨두는 시간을 운영하며, 정해진 시간에만 사용이 허용됩니다. 구체적인 시간과 방법은 입소 오리엔테이션에서 안내드립니다."
            />
          </div>
        </section>

        {/* 문의 */}
        <section id="contact" className="scroll-mt-24">
          <SectionTitle
            title="문의 및 상담"
            subtitle="입소와 관련하여 궁금한 점이 있으시면 언제든지 연락 주세요."
          />
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-2 md:p-6">
            <div className="space-y-2 text-sm md:text-base">
              <InfoRow label="대표 번호">
                000-0000-0000 (평일 09:00 ~ 18:00)
              </InfoRow>
              <InfoRow label="카카오 채널">
                &apos;SN독학기숙학원&apos; 검색 후 1:1 채팅 문의
              </InfoRow>
              <InfoRow label="이메일">
                contact@snacademy.co.kr
              </InfoRow>
            </div>
            <div className="space-y-3 text-sm">
              <p className="text-slate-600">
                입소 준비물, 건강 상태, 식단, 진로·진학 상담 등
                <br className="hidden md:block" />
                어떤 내용이든 편하게 문의해 주세요.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0000000000"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#29472b] px-4 py-2 text-sm font-medium text-white hover:bg-[#213822]"
                >
                  전화 걸기
                </a>
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:border-[#29472b]"
                >
                  카카오 채널 열기
                </a>
              </div>
              <p className="text-xs text-slate-400">
                * 실제 연락처, 채널 주소 등은 운영 중인 정보로 교체해 주세요.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------- 재사용 컴포넌트 ---------- */

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

function ChecklistCard({
  category,
  description,
  items,
  highlight,
}: {
  category: string;
  description?: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-5 text-sm md:p-6 ${
        highlight
          ? "border-red-200 bg-red-50/60"
          : "border-slate-200 bg-white"
      }`}
    >
      <h3
        className={`mb-1 text-base font-semibold ${
          highlight ? "text-red-700" : "text-slate-900"
        }`}
      >
        {category}
      </h3>
      {description && (
        <p className="mb-3 text-xs text-slate-600">{description}</p>
      )}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span
              className={`mt-1 h-2 w-2 rounded-full ${
                highlight ? "bg-red-500" : "bg-[#29472b]"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-4 text-sm md:p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="font-medium text-slate-900">{question}</span>
        <span className="text-xs text-slate-500 group-open:hidden">열기</span>
        <span className="hidden text-xs text-slate-500 group-open:inline">
          닫기
        </span>
      </summary>
      <div className="mt-3 text-slate-700">{answer}</div>
    </details>
  );
}
