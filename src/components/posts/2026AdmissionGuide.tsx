'use client';

import React, { useState } from 'react';

const sections = [
  { id: 'schedule', label: '입소 일정' },
  { id: 'required-items', label: '필수 준비물' },
  { id: 'tuition', label: '교습비·입금 안내' },
  { id: 'life', label: '생활 안내' },
  { id: 'faq', label: '자주 묻는 질문' },
  { id: 'contact', label: '문의' },
];

type TabType = 'winterschool' | 'retry';

export default function AdmissionGuide2026() {
  const [activeTab, setActiveTab] = useState<TabType>('retry');

  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900">
      {/* 상단 헤더 */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#29472b]">
              SN독학기숙학원
            </span>
            <span className="text-slate-300">|</span>
            <h1 className="text-sm font-semibold text-slate-900">
              2026 입소 안내
            </h1>
          </div>
          <nav className="hidden gap-2 text-xs md:flex">
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-slate-600 transition-all duration-200 hover:text-[#29472b] hover:bg-[#29472b]/10 px-2 py-1 rounded-md"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 탭 선택 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('retry')}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'retry'
                  ? 'border-[#29472b] text-[#29472b]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              대입재도전반
            </button>
            <button
              onClick={() => setActiveTab('winterschool')}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === 'winterschool'
                  ? 'border-[#29472b] text-[#29472b]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              윈터스쿨
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-[#f3f0e9]">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:py-14">
          <div className="flex-1">
            <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-[#29472b]">
              NOTICE · 2026 ADMISSION
            </p>
            <h2 className="mb-4 text-xl font-bold leading-tight text-slate-900 md:text-2xl whitespace-nowrap">
              2026학년도 SN독학기숙학원
              <br />
              <span className="whitespace-normal">
                입소 전 꼭 확인해 주세요
              </span>
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 md:text-base">
              입소 일정, 필수 준비물, 교습비 및 생활 안내까지
              <br className="hidden md:block" />한 페이지에서 모두 확인하실 수
              있습니다.
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
            {/* 썸네일 영역 */}
            <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:h-64">
              <img
                src="/images/notice/2026-admission-guide/SN-photo.JPG"
                alt="SN독학기숙학원 준비물 안내"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 대입재도전반 콘텐츠 */}
      {activeTab === 'retry' && (
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
                  <div className="text-xs text-slate-500">
                    2월 이후 입소자는 3합 12등급 이내, 6월 이후 입소자는 3과목
                    합 7등급 이내
                  </div>
                </InfoRow>
                <InfoRow label="입소 기간">
                  <span className="font-medium text-[#29472b]">
                    2025년 12월 20일 부터 매주 토요일 입소 가능(선착순 마감)
                  </span>
                </InfoRow>
                <InfoRow label="입소 시간">
                  <span className="font-medium text-[#29472b]">
                    14시 이전 입소 권장
                  </span>
                  <div className="text-xs text-slate-500">
                    부모님 일정상 14시 이전 입소가 불가할 경우, 학원으로 사전
                    연락 부탁드립니다.
                  </div>
                </InfoRow>
                <InfoRow label="입소 장소">
                  SN독학기숙학원 본원 (경기도 양평군 용문면 용문로 147
                  SN독학기숙학원)
                </InfoRow>
              </div>
              <div className="space-y-3 rounded-xl bg-[#f6f3ec] p-4 text-sm">
                <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-[#29472b]">
                  CHECKLIST
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#29472b]" />
                    <span>
                      입소일 하루 전, 준비물 체크리스트를 다시 한 번 점검해
                      주세요.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#29472b]" />
                    <span>
                      입소 당일, 교습비 입금 완료 여부를 꼭 확인해 주세요.
                    </span>
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

            {/* 제출서류 */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="mb-4 text-base font-semibold text-slate-900">
                제출서류
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#29472b]" />
                  <span>25학년도 수능 성적표</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#29472b]" />
                  <span>
                    결핵검사증명서(일반 X-Ray 검사, 보건소/내과에서 가능, 6개월
                    이내)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#29472b]" />
                  <span>독감접종 확인서(권장)</span>
                </li>
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ChecklistCard
                category="개인용품"
                description="기숙 생활에 필요한 기본 생활 용품입니다."
                items={[
                  '유/무선 이어폰(유선 이어폰은 고장 시 예비용)',
                  '방석, 운동화, 귀마개, 개인 세탁망',
                  '슬리퍼, 화장실 슬리퍼, 텀블러',
                  '예비안경(필요시), 위생용품, 우산',
                  '상비약(진통제, 비염약, 알러지약 해당시 필수)',
                  '체크카드(인터넷 주문용 혹은 네이버페이 등)',
                  '자가진단키트 (낱개로 5개)',
                ]}
              />
              <ChecklistCard
                category="학습용품"
                description="집중 학습을 위한 기본 학습 도구입니다."
                items={[
                  '연습장, 필기도구, 독서대(필요시)',
                  '학습 서적, 참고서 등',
                  '개인기기(노트북, 태블릿)<선택사항>',
                ]}
                note="본원의 방화벽으로 학습 사이트 외 모두 차단됩니다. 학습에 불필요한 파일(영화, 만화, 소설, 게임)들은 입소전 삭제."
              />
              <ChecklistCard
                category="세면도구 · 침구류 · 의류"
                description="기숙 생활에 필요한 기본 생활 용품입니다."
                items={[
                  '세면도구: 칫솔, 치약, 샴푸, 면도기(남), 수건 7매 이상, 양말, 개인용 화장지(학원 제공X) 등',
                  '침구류: 1인 침구세트 기준 (배개, 이불, 침대패드) - 침대는 슈퍼싱글 사이즈',
                  '의류: 속옷, 잠옷, 방한용 점퍼, 트레이닝복 등',
                ]}
                note={[
                  '화장품은 스킨 로션만 가능',
                  '의류는 학원복 안에 입는 용도로 얇은 옷들을 겹쳐 입을 수 있는 옷들로 준비해주시는게 좋습니다.',
                  '본원에서 주 2회 세탁 서비스를 제공해드리고 있으며, 건조기를 이용하므로 옷의 변형이 생길 수 있습니다.',
                  '변형이 되어도 아깝지 않은 옷으로 준비 바랍니다. 변형으로 인한 변상은 불가합니다.',
                ]}
              />
              <ChecklistCard
                category="금지물품(X)"
                description="학습 분위기와 안전을 위해 아래 물품은 반입이 제한됩니다."
                highlight
                items={[
                  '유통기한이 있는 음식물',
                  '(화재 위험성 있는) 전자/전열 기구',
                  '색조화장품, 향수, 왁스, 헤어 젤 및 스트레이',
                  '각종 잡지/만화/소설책, 악기일체, 카메라',
                  '셀룰러, 와이파이에그 등',
                  '그 외 학습과 관련이 없는 일체 물품',
                ]}
              />
            </div>
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
                  교습비 구성
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
                        <th className="border-b border-slate-200 px-4 py-3 text-center">
                          비고
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border-b border-slate-100 px-4 py-3">
                          월 수강료
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-right">
                          ￦ 2,450,000
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-xs">
                          3~4인실 기준
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan={3}
                          className="border-b border-slate-100 px-4 py-2 text-xs font-semibold text-slate-500 bg-slate-50"
                        >
                          신청시 추가 비용
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-slate-100 px-4 py-3">
                          2인실 변경
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-right">
                          ￦ 200,000
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-xs">
                          본관, 별관 비용 동일
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-slate-100 px-4 py-3">
                          논술
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-right">
                          ￦ 250,000
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-xs">
                          3월부터 개강, 첨삭 비용 포함
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan={3}
                          className="border-b border-slate-100 px-4 py-2 text-xs font-semibold text-slate-500 bg-slate-50"
                        >
                          그 외 별도 비용
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-slate-100 px-4 py-3">
                          단체활동복 1벌
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-right">
                          ￦ 100,000
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-xs">
                          필수 구매
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-slate-100 px-4 py-3">
                          더프리미엄모의고사
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-right text-xs text-slate-500">
                          추후공지
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3"></td>
                      </tr>
                      <tr>
                        <td className="border-b border-slate-100 px-4 py-3">
                          서바이벌프로모의고사
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-right text-xs text-slate-500">
                          추후공지
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3"></td>
                      </tr>
                      <tr>
                        <td className="border-b border-slate-100 px-4 py-3">
                          이감
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-right text-xs text-slate-500">
                          추후공지
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3"></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">시대인재 서바이벌</td>
                        <td className="px-4 py-3 text-right text-xs text-slate-500">
                          추후공지
                        </td>
                        <td className="px-4 py-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <p className="font-medium text-[#29472b]">
                    이 외 추가 비용은 없습니다.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl bg-[#f6f3ec] p-5 text-sm md:p-6">
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  입금 안내
                </h3>
                <div className="space-y-2">
                  <InfoRow label="입금 계좌">
                    우리은행 1005-302-613792
                    <br />
                    예금주 : 에스엔아카데미
                  </InfoRow>
                  <InfoRow label="입금 기한">
                    입소일 3일 전까지
                    <br />
                    <span className="text-xs text-slate-500">
                      입소당일 카드결제는 카카오톡 채널로 문의(SN독학기숙학원)
                    </span>
                  </InfoRow>
                  <InfoRow label="입금자명">
                    <span className="font-medium text-[#29472b]">
                      반드시 &quot;학생이름+생년월일&quot;로 입금해 주세요.
                    </span>
                  </InfoRow>
                </div>

                <a
                  href="https://www.snacademy.co.kr/admission/admission_scholarship.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block rounded-xl bg-white/70 p-3 text-xs text-slate-600 hover:bg-white/90 transition-colors"
                >
                  <span className="font-semibold text-[#29472b]">
                    장학 규정 안내 →
                  </span>
                </a>

                <details className="mt-3 rounded-xl bg-white/70 p-3 text-xs text-slate-600">
                  <summary className="cursor-pointer font-semibold text-[#29472b] hover:text-[#3a5e3d]">
                    환불 규정 안내
                  </summary>
                  <div className="mt-3 space-y-3">
                    <p>
                      교육청 환불 규정은 <strong>학원법</strong>에 따라
                      적용되며, 교습 시작 전에 해지할 경우 전액 환불됩니다. 교습
                      시작 후에는 진행 정도에 따라 환불액이 달라지는데, 총
                      교습시간의 1/3 경과 전에는 수강료의 2/3, 1/2 경과 전에는
                      1/2이 환불됩니다. 단, 총 교습시간의 1/2을 이미 초과한
                      경우에는 환불이 불가합니다.
                    </p>
                    <div>
                      <p className="mb-1 font-semibold">환불 기준</p>
                      <ul className="list-inside list-disc space-y-1">
                        <li>교습 시작 전: 전액 환불</li>
                        <li>총 교습시간의 1/3 경과 전: 수강료의 2/3 환불</li>
                        <li>총 교습시간의 1/2 경과 전: 수강료의 1/2 환불</li>
                        <li>총 교습시간의 1/2 경과 후: 환불 불가</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* 생활 안내 */}
          <section id="life" className="scroll-mt-24">
            <SectionTitle
              title="생활 안내"
              subtitle="SN독학기숙학원에서의 하루와 생활 규정을 간단히 소개합니다."
            />
            <div className="space-y-4">
              <a
                href="https://www.snacademy.co.kr/learning/learning_timetable.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-slate-200 bg-white p-4 text-center text-sm hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-[#29472b]">
                  하루 일과표 보기 →
                </span>
              </a>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    기본 생활 패턴 및 관리
                  </h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>
                      하루 14시간 이상 규칙적으로 공부하는 시스템이 기본입니다.
                    </li>
                    <li>
                      생활관리 교사가 상주하며, 정해진 시간에 기상·식사·학습 등
                      규칙적인 일상 패턴을 지속적으로 관리합니다.
                    </li>
                    <li>
                      집중력 유지를 위해 생활관리 선생님이 15분 단위로 순찰하며,
                      소음·졸음·집중 저해 사항을 관리합니다.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    규칙 위반 및 상벌 제도
                  </h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>
                      면학 분위기 확립을 위해 생활규칙 위반 시 벌점이 부과되고,
                      누적 벌점에 따라 상벌위원회가 소집될 수 있습니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#29472b]">
                        주요 규정 위반 예시
                      </span>{' '}
                      : 무단이탈, 타인에게 민폐 등은 중대한 생활 규칙 위반으로
                      간주되며 제재 대상이 됩니다.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    안전, 보안 및 건강관리
                  </h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>
                      24시간 안전 관리 시스템과 CCTV로 외부 위험 요소로부터
                      보호하며, 규칙적인 건강 검진이 이루어집니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#29472b]">
                        건강 관리 지침
                      </span>{' '}
                      : 정기적인 운동 추천, 정기 건강 체크, 필요시 의료 지원
                      가능.
                    </li>
                    <li>
                      <span className="font-medium text-[#29472b]">외진</span> :
                      외진은 전날 신청시 오전에 진료가 이루어집니다.(응급환자
                      제외)
                    </li>
                    <li>
                      본원 학생들의 인터넷 접속 로그는 학습량 산출을 위해 당사
                      서버에 저장됩니다.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    생활 규정 안내
                  </h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>
                      <span className="font-medium text-[#29472b]">
                        출타 규정
                      </span>{' '}
                      : 외출, 외박, 병원 진료 등은{' '}
                      <span className="font-medium">
                        사전 신청 및 보호자 동의
                      </span>
                      가 필요합니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#29472b]">휴대폰</span>{' '}
                      : 입소시 필수로 제출하셔야 하며, 종강, 외박 시에만
                      지급합니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#29472b]">상담</span> :
                      학습 담당 담임선생님과 주 1회 이상 정기 상담을 진행합니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#29472b]">
                        세탁/빨래
                      </span>{' '}
                      : 주 2회 학원에서 시행합니다.
                    </li>
                  </ul>
                </div>
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
                  031-771-0300 (평일 09:00 ~ 18:00)
                </InfoRow>
                <InfoRow label="카카오 채널">
                  &apos;SN독학기숙학원&apos; 검색 후 1:1 채팅 문의
                </InfoRow>
                <InfoRow label="이메일">snacademy@naver.com</InfoRow>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-600">
                  입소 준비물, 건강 상태, 식단, 진로·진학 상담 등
                  <br className="hidden md:block" />
                  어떤 내용이든 편하게 문의해 주세요.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:031-771-0300"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-[#29472b] px-4 py-2 text-sm font-medium text-white hover:bg-[#213822]"
                  >
                    전화 걸기
                  </a>
                  <a
                    href="http://pf.kakao.com/_exjtgj/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:border-[#29472b]"
                  >
                    카카오 채널 열기
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 윈터스쿨 콘텐츠 */}
      {activeTab === 'winterschool' && (
        <div className="mx-auto max-w-5xl space-y-12 px-4 py-10 md:py-14">
          {/* 입소 일정 */}
          <section id="schedule" className="scroll-mt-24">
            <SectionTitle
              title="입소 일정 및 장소"
              subtitle="윈터스쿨 입소 가능한 날짜와 시간, 위치 정보를 안내드립니다."
            />
            <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[1.3fr,1fr] md:p-6">
              <div className="space-y-4 text-sm md:text-base">
                <InfoRow label="입소 대상">
                  2026년도 SN독학기숙학원 등록 재학생
                  <div className="text-xs text-slate-500">
                    3과목 합 10등급 이내
                  </div>
                </InfoRow>
                <InfoRow label="입소 기간">
                  <span className="font-medium text-[#1e3a5f]">
                    2025년 12월 27일부터 입소 가능
                  </span>
                  <div className="text-xs text-slate-500">
                    사전 설문지로 입소일 조율
                  </div>
                </InfoRow>
                <InfoRow label="입소 시간">
                  <span className="font-medium text-[#1e3a5f]">
                    14시 이전 입소 권장
                  </span>
                  <div className="text-xs text-slate-500">
                    부모님 일정상 14시 이전 입소가 불가할 경우, 학원으로 사전
                    연락 부탁드립니다.
                  </div>
                </InfoRow>
                <InfoRow label="입소 장소">
                  SN독학기숙학원 본원 (경기도 양평군 용문면 용문로 147
                  SN독학기숙학원)
                </InfoRow>
              </div>
              <div className="space-y-3 rounded-xl bg-[#e8f4fc] p-4 text-sm">
                <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-[#1e3a5f]">
                  CHECKLIST
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#1e3a5f]" />
                    <span>
                      입소일 하루 전, 준비물 체크리스트를 다시 한 번 점검해
                      주세요.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#1e3a5f]" />
                    <span>
                      입소 당일, 교습비 입금 완료 여부를 꼭 확인해 주세요.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#1e3a5f]" />
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

            {/* 제출서류 */}
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="mb-4 text-base font-semibold text-slate-900">
                제출서류
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1e3a5f]" />
                  <span>
                    결핵검사증명서(일반 X-Ray 검사, 보건소/내과에서 가능, 6개월
                    이내)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#1e3a5f]" />
                  <span>독감접종 확인서(권장)</span>
                </li>
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ChecklistCard
                category="개인용품"
                description="기숙 생활에 필요한 기본 생활 용품입니다."
                items={[
                  '유/무선 이어폰(유선 이어폰은 고장 시 예비용)',
                  '방석, 운동화, 귀마개, 개인 세탁망',
                  '슬리퍼, 화장실 슬리퍼, 텀블러',
                  '예비안경(필요시), 위생용품, 우산',
                  '상비약(진통제, 비염약, 알러지약 해당시 필수)',
                  '체크카드(인터넷 주문용 혹은 네이버페이 등)',
                  '자가진단키트 (낱개로 5개)',
                ]}
              />
              <ChecklistCard
                category="학습용품"
                description="집중 학습을 위한 기본 학습 도구입니다."
                items={[
                  '연습장, 필기도구, 독서대(필요시)',
                  '학습 서적, 참고서 등',
                  '개인기기(노트북, 태블릿)<선택사항>',
                ]}
                note="본원의 방화벽으로 학습 사이트 외 모두 차단됩니다. 학습에 불필요한 파일(영화, 만화, 소설, 게임)들은 입소전 삭제."
              />
              <ChecklistCard
                category="세면도구 · 침구류 · 의류"
                description="기숙 생활에 필요한 기본 생활 용품입니다."
                items={[
                  '세면도구: 칫솔, 치약, 샴푸, 면도기(남), 수건 7매 이상, 양말, 개인용 화장지(학원 제공X) 등',
                  '침구류: 1인 침구세트 기준 (배개, 이불, 침대패드) - 침대는 슈퍼싱글 사이즈',
                  '의류: 속옷, 잠옷, 방한용 점퍼, 트레이닝복 등',
                ]}
                note={[
                  '화장품은 스킨 로션만 가능',
                  '의류는 학원복 안에 입는 용도로 얇은 옷들을 겹쳐 입을 수 있는 옷들로 준비해주시는게 좋습니다.',
                  '본원에서 주 2회 세탁 서비스를 제공해드리고 있으며, 건조기를 이용하므로 옷의 변형이 생길 수 있습니다.',
                  '변형이 되어도 아깝지 않은 옷으로 준비 바랍니다. 변형으로 인한 변상은 불가합니다.',
                ]}
              />
              <ChecklistCard
                category="금지물품(X)"
                description="학습 분위기와 안전을 위해 아래 물품은 반입이 제한됩니다."
                highlight
                items={[
                  '유통기한이 있는 음식물',
                  '(화재 위험성 있는) 전자/전열 기구',
                  '색조화장품, 향수, 왁스, 헤어 젤 및 스트레이',
                  '각종 잡지/만화/소설책, 악기일체, 카메라',
                  '셀룰러, 와이파이에그 등',
                  '그 외 학습과 관련이 없는 일체 물품',
                ]}
              />
            </div>
          </section>

          {/* 교습비 안내 */}
          <section id="tuition" className="scroll-mt-24">
            <SectionTitle
              title="교습비 및 입금 안내"
              subtitle="윈터스쿨 교습비 항목과 입금 방법을 안내드립니다."
            />

            <div className="grid gap-6 md:grid-cols-[1.3fr,1fr]">
              <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  교습비 구성
                </h3>
                <div className="overflow-hidden rounded-xl border border-slate-200 text-sm">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                      <tr>
                        <th className="border-b border-slate-200 px-4 py-3 text-left">
                          프로그램
                        </th>
                        <th className="border-b border-slate-200 px-4 py-3 text-right">
                          금액
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="border-b border-slate-100 px-4 py-3">
                          5주 프로그램
                        </td>
                        <td className="border-b border-slate-100 px-4 py-3 text-right">
                          ￦ 3,200,000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">8주 프로그램</td>
                        <td className="px-4 py-3 text-right">￦ 4,900,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <p className="font-medium text-[#1e3a5f]">
                    이 외 추가 비용은 없습니다.
                  </p>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl bg-[#e8f4fc] p-5 text-sm md:p-6">
                <h3 className="mb-2 text-base font-semibold text-slate-900">
                  입금 안내
                </h3>
                <div className="space-y-2">
                  <InfoRow label="입금 계좌">
                    우리은행 1005-302-613792
                    <br />
                    예금주 : 에스엔아카데미
                  </InfoRow>
                  <InfoRow label="입금 기한">
                    입소일 3일 전까지
                    <br />
                    <span className="text-xs text-slate-500">
                      입소당일 카드결제는 카카오톡 채널로 문의(SN독학기숙학원)
                    </span>
                  </InfoRow>
                  <InfoRow label="입금자명">
                    <span className="font-medium text-[#1e3a5f]">
                      반드시 &quot;학생이름+생년월일&quot;로 입금해 주세요.
                    </span>
                  </InfoRow>
                </div>

                <details className="mt-3 rounded-xl bg-white/70 p-3 text-xs text-slate-600">
                  <summary className="cursor-pointer font-semibold text-[#1e3a5f] hover:text-[#2a4a6f]">
                    환불 규정 안내
                  </summary>
                  <div className="mt-3 space-y-3">
                    <p>
                      교육청 환불 규정은 <strong>학원법</strong>에 따라
                      적용되며, 교습 시작 전에 해지할 경우 전액 환불됩니다. 교습
                      시작 후에는 진행 정도에 따라 환불액이 달라지는데, 총
                      교습시간의 1/3 경과 전에는 수강료의 2/3, 1/2 경과 전에는
                      1/2이 환불됩니다. 단, 총 교습시간의 1/2을 이미 초과한
                      경우에는 환불이 불가합니다.
                    </p>
                    <div>
                      <p className="mb-1 font-semibold">환불 기준</p>
                      <ul className="list-inside list-disc space-y-1">
                        <li>교습 시작 전: 전액 환불</li>
                        <li>총 교습시간의 1/3 경과 전: 수강료의 2/3 환불</li>
                        <li>총 교습시간의 1/2 경과 전: 수강료의 1/2 환불</li>
                        <li>총 교습시간의 1/2 경과 후: 환불 불가</li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* 생활 안내 */}
          <section id="life" className="scroll-mt-24">
            <SectionTitle
              title="생활 안내"
              subtitle="SN독학기숙학원에서의 하루와 생활 규정을 간단히 소개합니다."
            />
            <div className="space-y-4">
              <a
                href="https://www.snacademy.co.kr/learning/learning_timetable.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-slate-200 bg-white p-4 text-center text-sm hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-[#1e3a5f]">
                  하루 일과표 보기 →
                </span>
              </a>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    기본 생활 패턴 및 관리
                  </h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>
                      하루 14시간 이상 규칙적으로 공부하는 시스템이 기본입니다.
                    </li>
                    <li>
                      생활관리 교사가 상주하며, 정해진 시간에 기상·식사·학습 등
                      규칙적인 일상 패턴을 지속적으로 관리합니다.
                    </li>
                    <li>
                      집중력 유지를 위해 생활관리 선생님이 15분 단위로 순찰하며,
                      소음·졸음·집중 저해 사항을 관리합니다.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    규칙 위반 및 상벌 제도
                  </h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>
                      면학 분위기 확립을 위해 생활규칙 위반 시 벌점이 부과되고,
                      누적 벌점에 따라 상벌위원회가 소집될 수 있습니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#1e3a5f]">
                        주요 규정 위반 예시
                      </span>{' '}
                      : 무단이탈, 타인에게 민폐 등은 중대한 생활 규칙 위반으로
                      간주되며 제재 대상이 됩니다.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    안전, 보안 및 건강관리
                  </h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>
                      24시간 안전 관리 시스템과 CCTV로 외부 위험 요소로부터
                      보호하며, 규칙적인 건강 검진이 이루어집니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#1e3a5f]">
                        건강 관리 지침
                      </span>{' '}
                      : 정기적인 운동 추천, 정기 건강 체크, 필요시 의료 지원
                      가능.
                    </li>
                    <li>
                      <span className="font-medium text-[#1e3a5f]">외진</span> :
                      외진은 전날 신청시 오전에 진료가 이루어집니다.(응급환자
                      제외)
                    </li>
                    <li>
                      본원 학생들의 인터넷 접속 로그는 학습량 산출을 위해 당사
                      서버에 저장됩니다.
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    생활 규정 안내
                  </h3>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>
                      <span className="font-medium text-[#1e3a5f]">
                        출타 규정
                      </span>{' '}
                      : 외출, 외박, 병원 진료 등은{' '}
                      <span className="font-medium">
                        사전 신청 및 보호자 동의
                      </span>
                      가 필요합니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#1e3a5f]">휴대폰</span>{' '}
                      : 입소시 필수로 제출하셔야 하며, 종강, 외박 시에만
                      지급합니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#1e3a5f]">상담</span> :
                      학습 담당 담임선생님과 주 1회 이상 정기 상담을 진행합니다.
                    </li>
                    <li>
                      <span className="font-medium text-[#1e3a5f]">
                        세탁/빨래
                      </span>{' '}
                      : 주 2회 학원에서 시행합니다.
                    </li>
                  </ul>
                </div>
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
                  031-771-0300 (평일 09:00 ~ 18:00)
                </InfoRow>
                <InfoRow label="카카오 채널">
                  &apos;SN독학기숙학원&apos; 검색 후 1:1 채팅 문의
                </InfoRow>
                <InfoRow label="이메일">snacademy@naver.com</InfoRow>
              </div>
              <div className="space-y-3 text-sm">
                <p className="text-slate-600">
                  입소 준비물, 건강 상태, 식단, 진로·진학 상담 등
                  <br className="hidden md:block" />
                  어떤 내용이든 편하게 문의해 주세요.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:031-771-0300"
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white hover:bg-[#162d4a]"
                  >
                    전화 걸기
                  </a>
                  <a
                    href="http://pf.kakao.com/_exjtgj/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:border-[#1e3a5f]"
                  >
                    카카오 채널 열기
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
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
  note,
}: {
  category: string;
  description?: string;
  items: string[];
  highlight?: boolean;
  note?: string | string[];
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-5 text-sm md:p-6 ${
        highlight ? 'border-red-200 bg-red-50/60' : 'border-slate-200 bg-white'
      }`}
    >
      <h3
        className={`mb-1 text-base font-semibold ${
          highlight ? 'text-red-700' : 'text-slate-900'
        }`}
      >
        {category}
      </h3>
      {description && (
        <p className="mb-3 text-xs text-slate-600">{description}</p>
      )}
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="flex items-start gap-2">
            <span
              className={`mt-1 h-2 w-2 rounded-full ${
                highlight ? 'bg-red-500' : 'bg-[#29472b]'
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {note &&
        (Array.isArray(note) ? (
          <div className="mt-3 text-xs text-slate-500 space-y-1">
            {note.map((line, idx) => (
              <p key={idx}>* {line}</p>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-xs text-slate-500">* {note}</p>
        ))}
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
