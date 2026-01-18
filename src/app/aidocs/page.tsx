import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Reference Document | SN Academy',
  description: 'SNarGPT AI 전용 참고 문서',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AIDocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1>SNarGPT AI Reference Document</h1>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8 not-prose">
          <p className="text-yellow-800 dark:text-yellow-200 m-0">
            <strong>Notice:</strong> This document is for AI reference only. Not intended for human visitors.
          </p>
        </div>

        {/* AI 문서 참조 규칙 */}
        <section>
          <h2>AI 문서 참조 규칙</h2>
          <ul>
            <li>운영 관련 질문에 답할 때는 반드시 <strong>[SNarGPT-OPS]</strong> 헤더가 있는 문서만 참고한다.</li>
            <li>헤더가 없는 문서는 참고하지 않는다.</li>
            <li>동일 문서ID가 여러 개일 경우, 최종수정일이 가장 최신인 문서를 단일 기준으로 적용한다.</li>
            <li>규정이 모호하거나 충돌할 경우, 절대 추론하지 말고 학습담임 선생님이나 생활담임 선생님 상담 안내로 전환한다.</li>
          </ul>
        </section>

        <hr />

        {/* OPS_OUTING_001: 외출·외박·외진 안내 (통합) */}
        <section>
          <h2>[SNarGPT-OPS] 외출·외박·외진 안내</h2>
          <p className="text-sm text-gray-500">문서ID: OPS_OUTING_001 | 적용대상: 재원생 | 우선순위: HIGH | 최종수정일: 2026-01-13</p>

          <h3>1. 외출 신청</h3>
          <h4>신청 시간</h4>
          <ol>
            <li>외출은 원칙적으로 <strong>전날 22시 이전</strong>까지 신청해야 한다.</li>
            <li>당일 신청은 다음 경우에만 허용된다.
              <ul>
                <li>병원 진료</li>
                <li>보호자 요청이 확인된 경우</li>
              </ul>
            </li>
            <li>무단 외출은 벌점 부여 대상이다.</li>
          </ol>

          <h3>2. 외출·외박 신청 절차</h3>
          <h4>사전 절차</h4>
          <ol>
            <li>외부 외진 등 <strong>사전 승인된 사유</strong>가 있는 경우 → 생활담임 교사에게 <strong>사전 보고</strong></li>
            <li>외출·외박 전날 종례(22시) → 출석 확인 교사에게 <strong>반드시 재보고</strong></li>
            <li>외출, 외박 출발, 복귀 시 부모님께 문자 알림 전송</li>
          </ol>
          <h4>제한 사항</h4>
          <ul><li>별도 사유 없는 경우: <strong>정기 휴가 기간에만 외박 가능</strong></li></ul>

          <h3>3. 외진(외부 진료) 안내</h3>
          <h4>절차</h4>
          <ol>
            <li>외진 여부는 <strong>전날 종례 시 파악</strong></li>
            <li>다음날 외진 시간이 확정되면 → 오전 근무 교사가 학생에게 개별 고지</li>
            <li>외진 출발, 복귀 시 부모님께 문자 알림 전송</li>
          </ol>

          <h3>AI 판단 기준</h3>
          <ul>
            <li>보호자 요청 여부가 확인되지 않을 경우 → 상담 연결</li>
            <li>외진 시간 미확정 상태 → "다음날 안내 예정"으로 응답</li>
            <li>사유 불명확 → 상담 필요로 전환</li>
          </ul>
        </section>

        <hr />

        {/* OPS_COUNSELING_001: 학습상담 시작 시점 */}
        <section>
          <h2>[SNarGPT-OPS] 학습상담 시작 시점</h2>
          <p className="text-sm text-gray-500">문서ID: OPS_COUNSELING_001 | 적용대상: 재원생 | 우선순위: HIGH | 최종수정일: 2026-01-13</p>

          <h3>규칙</h3>
          <ol>
            <li>학습상담은 입소 직후 즉시 진행되지 않는다.</li>
            <li>입소 후 학원 내부 일정에 따라 <strong>순차적으로 진행</strong>된다.</li>
            <li>개별 학생의 상담 시작 시점은 동일하지 않을 수 있다.</li>
          </ol>
          <h3>AI 판단 기준</h3>
          <ul>
            <li>상담 일정 문의 시: "입소 후 순차적으로 진행 중"으로 안내</li>
            <li>개별 날짜 확정 요청 시: 담당자 상담 필요로 전환</li>
          </ul>
        </section>

        <hr />

        {/* OPS_PRINTER_001: 프린터(복사·인쇄) 및 핫스팟 사용 */}
        <section>
          <h2>[SNarGPT-OPS] 프린터(복사·인쇄) 및 핫스팟 사용</h2>
          <p className="text-sm text-gray-500">문서ID: OPS_PRINTER_001 | 적용대상: 재원생 | 우선순위: MEDIUM | 최종수정일: 2026-01-13</p>

          <h3>장소</h3>
          <ul><li>학습동 2층 홀</li></ul>
          <h3>사용 가능 시간</h3>
          <ul>
            <li>쉬는 시간</li>
            <li>식사 시간</li>
            <li>간식 시간</li>
          </ul>
          <h3>프린터 계정 정보</h3>
          <ol>
            <li>ID: 학번(또는 본인 전화번호) 중 <strong>맨 뒷자리 1자리 제외한 7자리</strong></li>
            <li>비밀번호: 생년월일</li>
          </ol>
          <h3>AI 판단 기준</h3>
          <ul><li>계정 오류 / 로그인 불가: 담당자 안내 필요</li></ul>
        </section>

        <hr />

        {/* OPS_DELIVERY_001: 물품(택배) 주문 및 반품 */}
        <section>
          <h2>[SNarGPT-OPS] 물품(택배) 주문 및 반품</h2>
          <p className="text-sm text-gray-500">문서ID: OPS_DELIVERY_001 | 적용대상: 재원생 | 우선순위: MEDIUM | 최종수정일: 2026-01-13</p>

          <h3>주문</h3>
          <ol>
            <li>학습동 2층 홀에 비치된 <strong>공용 컴퓨터</strong> 사용</li>
            <li>교재 주문 가능</li>
            <li>주소는 현장에 명시되어 있음</li>
            <li><strong>모든 식음료 택배 주문 불가</strong></li>
          </ol>
          <h3>반품</h3>
          <ol>
            <li>해당 쇼핑몰 사이트에서 <strong>반품 접수</strong></li>
            <li>택배 포장 후, 택배 외부에 <strong>본인 이름 + 반품 표시</strong></li>
            <li>회수 장소에 보관</li>
          </ol>
          <h3>회수 장소</h3>
          <ul><li>기본: 택배실 앞</li></ul>
          <h3>택배 수령</h3>
          <ol>
            <li>수령 시간: <strong>매일 저녁 식사 후</strong></li>
            <li>수령 장소: 현재 택배실</li>
            <li>절차: 본인 택배 확인 → 수령 서명 → 직접 수령 후 이동</li>
          </ol>
          <h3>AI 판단 기준</h3>
          <ul>
            <li>식음료 주문 문의 → 불가 안내</li>
            <li>반품 절차 누락 → 위 단계 재안내</li>
          </ul>
        </section>

        <hr />

        {/* OPS_LAUNDRY_001: 빨래일 안내 */}
        <section>
          <h2>[SNarGPT-OPS] 빨래일 안내</h2>
          <p className="text-sm text-gray-500">문서ID: OPS_LAUNDRY_001 | 적용대상: 재원생 | 우선순위: MEDIUM | 최종수정일: 2026-01-13</p>

          <h3>본관</h3>
          <ul>
            <li>201호 ~ 218호: 월 / 목</li>
            <li>219호 ~ 309호: 화 / 금</li>
            <li>310호 ~ 327호: 수 / 토</li>
          </ul>
          <h3>별관</h3>
          <ul>
            <li>1층, 2층: 월 / 목</li>
            <li>3층, 4층: 화 / 금</li>
          </ul>
          <h3>이불 빨래</h3>
          <ol>
            <li>각 방에서 <strong>1명씩 담당</strong></li>
            <li>배정된 요일 <strong>다음 요일</strong>에 진행</li>
          </ol>
        </section>

        <hr />

        {/* OPS_CLEANING_001: 숙소 청소일 */}
        <section>
          <h2>[SNarGPT-OPS] 숙소 청소일</h2>
          <p className="text-sm text-gray-500">문서ID: OPS_CLEANING_001 | 적용대상: 재원생 | 우선순위: MEDIUM | 최종수정일: 2026-01-13</p>

          <h3>기본 일정</h3>
          <ul>
            <li>본관 2층: 월 / 목</li>
            <li>본관 3층: 화 / 금</li>
            <li>별관: 수 / 토</li>
          </ul>
          <h3>변동 가능성</h3>
          <ul><li>기상 상황 또는 긴급 상황 발생 시 일정 변경 가능</li></ul>
          <h3>AI 판단 기준</h3>
          <ul><li>변경 여부 확인 요청 시 → 당일 공지 확인 안내</li></ul>
        </section>

        <hr />

        {/* OPS_MEAL_001: 식사 순서 */}
        <section>
          <h2>[SNarGPT-OPS] 식사 순서</h2>
          <p className="text-sm text-gray-500">문서ID: OPS_MEAL_001 | 적용대상: 재원생 | 우선순위: MEDIUM | 최종수정일: 2026-01-13</p>

          <h3>기본 원칙</h3>
          <ol>
            <li>식사 순서는 <strong>매주 월요일 점심시간에 변경</strong></li>
            <li>적용 시간: 점심시간, 저녁시간, 주 1회 목요일 간식시간</li>
          </ol>
          <h3>예시</h3>
          <ul>
            <li>이번 주: 1-2-3-4-5-6-7-8-9</li>
            <li>다음 주: 2-3-4-5-6-7-8-9-1</li>
          </ul>
        </section>

        <hr />

        {/* REFUND_EDU_STANDARD_001: 환불규정 */}
        <section>
          <h2>[SNarGPT-OPS] 환불규정</h2>
          <p className="text-sm text-gray-500">문서ID: REFUND_EDU_STANDARD_001 | 적용대상: 재원생, 퇴소생 | 법적근거: 학원의 설립·운영 및 과외교습에 관한 법률 | 우선순위: VERY_HIGH | 최종수정일: 2026-01-13</p>

          <h3>0. 기본 원칙 (절대 규칙)</h3>
          <ul>
            <li>본 학원의 교습비 환불은 교육청(법령) 기준을 그대로 적용한다.</li>
            <li>학원 자체 기준, 관행, 예외 규정은 적용하지 않는다.</li>
            <li>환불 사유 발생 시 5일 이내 반환해야 한다.</li>
            <li><strong>AI는 아래 문서에 명시된 기준 외의 추론을 금지한다.</strong></li>
          </ul>

          <h3>1. 환불 의무 발생 사유</h3>
          <p>환불은 다음 사유 중 하나라도 해당할 경우 발생한다.</p>
          <ul>
            <li>1-1. 학습자가 수강을 계속할 수 없는 경우</li>
            <li>1-2. 학원 등록 말소, 폐지, 정지 명령 등으로 교습이 불가능한 경우</li>
          </ul>
          <p className="text-sm text-gray-500">법적 근거: 「학원의 설립·운영 및 과외교습에 관한 법률」 제18조 제1항, 시행령 제18조 제3항</p>

          <h3>2. 환불 기한</h3>
          <ul><li>환불 사유 발생일로부터 5일 이내 반환</li></ul>

          <h3>3. 환불 금액 산정 기준 (핵심)</h3>
          <h4>3-1. 학습자가 학원으로부터 격리된 경우</h4>
          <ul>
            <li>반환사유 발생일: 학습자가 격리된 날</li>
            <li>환불금액 계산식: 이미 납부한 교습비 등 - (일일 교습비 × 교습 시작일 또는 학습장소 제공 시작일부터 격리 전날까지의 일수)</li>
          </ul>
          <h4>3-2. 학원이 교습을 할 수 없게 된 경우 (폐지/정지 명령 등)</h4>
          <ul>
            <li>반환사유 발생일: 교습 또는 장소 제공이 불가능해진 날</li>
            <li>환불금액 계산식: 이미 납부한 교습비 등 - (일일 교습비 × 교습 시작일부터 교습 불가 전날까지의 일수)</li>
          </ul>

          <h3>4. 학습자가 자의로 수강을 포기한 경우</h3>
          <h4>기준 1: 교습기간 또는 사용기간이 1개월 이내 (독서실 제외 학원)</h4>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 p-2">구분</th>
                <th className="border border-gray-300 p-2">환불 금액</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 p-2">교습 시작 전</td><td className="border border-gray-300 p-2">전액</td></tr>
              <tr><td className="border border-gray-300 p-2">총 교습시간 1/3 경과 전</td><td className="border border-gray-300 p-2">2/3</td></tr>
              <tr><td className="border border-gray-300 p-2">총 교습시간 1/3 경과 후 ~ 1/2 전</td><td className="border border-gray-300 p-2">1/2</td></tr>
              <tr><td className="border border-gray-300 p-2">총 교습시간 1/2 경과 후</td><td className="border border-gray-300 p-2">환불 없음</td></tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500">※ 총 교습시간 기준으로 계산</p>

          <h3>5. 환불 산정 기준 상세</h3>
          <ul>
            <li><strong>총 교습시간이란:</strong> 전체 교습기간 동안 예정된 총 시간</li>
            <li>환불 금액 산정은 환불 사유 발생일까지 경과된 교습시간 기준</li>
            <li>날짜 기준이 아닌 <strong>실제 교습시간 기준</strong>을 우선한다</li>
          </ul>

          <h3>6. 원격 교습(온라인 강의) 환불 기준</h3>
          <ul>
            <li>실제 수강한 부분은 환불 대상에서 제외</li>
            <li>다음 행위는 수강한 것으로 간주:
              <ul>
                <li>인터넷 스트리밍 수강</li>
                <li>학습기기에 저장(다운로드)한 경우</li>
              </ul>
            </li>
          </ul>

          <h3>7. AI 판단 제한 규칙 (중요)</h3>
          <p>다음 경우 AI는 단독 판단을 중단한다.</p>
          <ul>
            <li>보호자가 법 해석에 이의를 제기하는 경우</li>
            <li>1개월 기준 산정이 애매한 경우</li>
            <li>분쟁·민원 가능성이 있는 경우</li>
          </ul>
          <p>→ <strong>"담당자 상담 필요"</strong>로 안내</p>

          <h3>8. AI 응답 기본 문구 (권장)</h3>
          <blockquote>
            "본 학원의 환불은 교육청 기준을 그대로 적용하고 있으며,
            구체적인 금액 산정은 실제 교습시간 및 환불 사유에 따라 달라질 수 있어
            담당자 상담을 통해 최종 안내됩니다."
          </blockquote>

          <h3>추가규칙 - 장학금</h3>
          <ol>
            <li>장학금은 환불 산정 시 감액 요소로 고려하지 않는다.</li>
            <li>환불 산정 기준 금액은 실제 납부액이 아닌, 장학금 적용 이전의 "정가 교습비(총 교습비)"로 한다.</li>
            <li>장학금은 학원의 지원 성격의 금액으로, 환불 산정의 기준 금액에 영향을 미치지 않는다.</li>
          </ol>

          <h3>추가규칙 - 납부금액 처리</h3>
          <ol>
            <li>환불 산정 시, 학생이 실제로 납부한 금액의 구성(월별, 일할, 선납 여부)을 AI가 추정하여 계산하지 않는다.</li>
            <li>환불 산정의 기준 금액은 반드시 학원에 기록된 "공식 교습비 총액"을 기준으로 한다.</li>
            <li>납부 방식(1개월 + 잔액, 선납 등)은 환불 산정 공식에 영향을 주지 않는다.</li>
          </ol>

          <h3>추가규칙 - 교습비 구성</h3>
          <ol>
            <li>본 학원은 운영상 편의를 위해 기숙사비, 식비, 교습료, 모의고사비 등을 분리 환불하지 않는다.</li>
            <li>환불 산정 시, 위 항목들은 모두 "총 교습비"에 포함된 것으로 간주하여 일괄 계산한다.</li>
            <li>본 규칙은 교육청 환불 기준의 계산 방식 범위 내에서 적용된다.</li>
          </ol>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 not-prose">
            <p className="text-red-800 dark:text-red-200 m-0">
              <strong>문서 성격 선언:</strong> 본 문서는 AI 운영 기준 문서이다. 학생·학부모에게 직접 노출하지 않는다. 본 문서 외 내용은 추론·확장 금지.
            </p>
          </div>
        </section>

        <hr />

        {/* SN-SYS-NET-2026-001: SNarlink 시스템 아키텍처 */}
        <section>
          <h2>[SNarGPT-OPS] SNarlink 시스템 아키텍처 및 운영 가이드</h2>
          <p className="text-sm text-gray-500">문서ID: SN-SYS-NET-2026-001 | 적용대상: 재원생, 교직원 | 우선순위: VERY_HIGH | 최종수정일: 2026-01-13</p>
          <p className="text-sm text-gray-500">핵심키워드: SNarlink, SNarlink_Study, Frespon, 지능형 방화벽, 책임 기반 자유</p>

          <h3>1. SNarlink (스나링크) 시스템 개요</h3>
          <p>
            SNarlink는 SN독학기숙학원이 자체 기술력으로 개발한 <strong>AI 기반 차세대 지능형 네트워크 보안 시스템</strong>이다.
          </p>
          <p>
            SNarlink는 단순 웹 차단형 방화벽이 아니라, 학생의 접속 시도, 우회 의도, 사용 패턴을 분석·학습하여 최적의 학습 환경을 유지하는 것을 목적으로 한다.
          </p>

          <h4>1.1 주요 특징</h4>

          <h5>1) 지능형 방어 (AI-Driven)</h5>
          <ul>
            <li>VPN, 프록시 등 우회 시도를 실시간으로 감지한다.</li>
            <li>감지된 패턴은 AI가 학습하여 방어 정책을 자동으로 갱신한다.</li>
            <li>동일한 우회 방식은 반복 사용이 불가능하다.</li>
          </ul>

          <h5>2) URL 단위 정밀 제어</h5>
          <ul>
            <li>도메인 전체 차단 방식을 사용하지 않는다.</li>
            <li>URL 단위 예외 처리가 가능하다.</li>
            <li>예시:
              <ul>
                <li>오르비 커뮤니티 → 차단</li>
                <li>오르비 클래스 인강 페이지 → 허용</li>
              </ul>
            </li>
          </ul>

          <h5>3) Apple 기기 특화 보안</h5>
          <ul>
            <li>iMessage, Private Relay 등 Apple 고유 우회 경로를 개별적으로 제어한다.</li>
            <li>2,000줄 이상의 전용 코드로 Apple 기기 환경에서도 동일한 보안 수준을 유지한다.</li>
          </ul>

          <h5>4) 학습 데이터 분석 기반</h5>
          <ul>
            <li>기기별 접속 로그를 수집한다.</li>
            <li>시간대별 집중 패턴을 분석한다.</li>
            <li>해당 데이터는 초개인화 학습 피드백 제공의 기반으로 활용된다.</li>
          </ul>

          <h3>2. SNarlink_Study (스터디 망)</h3>
          <h4>2.1 정의</h4>
          <p>학생들이 일상적으로 사용하는 기본 학습용 네트워크이다.</p>

          <h4>2.2 목적</h4>
          <p>SNS, 게임, 커뮤니티 등 학습 외 요소를 완전히 차단하여 공부에만 몰입할 수 있는 환경을 제공한다.</p>

          <h4>2.3 특성</h4>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 p-2">항목</th>
                <th className="border border-gray-300 p-2">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 p-2">보안 수준</td><td className="border border-gray-300 p-2">매우 높음</td></tr>
              <tr><td className="border border-gray-300 p-2">제어 방식</td><td className="border border-gray-300 p-2">DNS, IP, URL, 패킷 레벨 다중 검증</td></tr>
              <tr><td className="border border-gray-300 p-2">성능</td><td className="border border-gray-300 p-2">교육 콘텐츠 트래픽 우선 처리</td></tr>
              <tr><td className="border border-gray-300 p-2">사용 대상</td><td className="border border-gray-300 p-2">전체 재원생 기본 적용</td></tr>
            </tbody>
          </table>

          <h3>3. SNarlink_Frespon (프레스폰 망)</h3>
          <h4>3.1 정의</h4>
          <ul>
            <li>SNarlink 시스템의 하위 계열 네트워크이다.</li>
            <li><strong>Free + Responsibility(책임 기반 자유)</strong> 원칙을 따른다.</li>
            <li>학원 내부에서 자유로운 인터넷 접근을 허용하는 예외 망이다.</li>
          </ul>

          <h4>3.2 도입 배경</h4>
          <ul>
            <li>학습 외 목적으로 방화벽 해제가 필요한 상황이 존재했다.</li>
            <li>기존에는 개인 핫스팟 사용이 불가피했다.</li>
            <li>개인 핫스팟은:
              <ul>
                <li>통제 불가</li>
                <li>기록 불가</li>
                <li>부정 사용 가능성 존재</li>
              </ul>
              라는 문제를 가지고 있었다.
            </li>
          </ul>
          <p>→ 이를 해결하기 위해 Frespon 망을 도입하였다.</p>

          <h4>3.3 목적</h4>
          <ul>
            <li>개인 핫스팟을 완전히 대체한다.</li>
            <li>인터넷 자유를 허용하되, 모든 사용은 기록되고 책임이 수반되도록 한다.</li>
          </ul>

          <h4>3.4 운영 메커니즘</h4>
          <h5>인증 방식</h5>
          <p>Captive Portal 기반 인증</p>

          <h5>접근 절차</h5>
          <ol>
            <li>학생 사용 신청</li>
            <li>교직원 승인</li>
            <li>1회용 비밀번호(OTP) 발급</li>
            <li>Frespon 망 접속</li>
          </ol>

          <h5>사용 시간</h5>
          <ul>
            <li>15분</li>
            <li>30분</li>
            <li>60분</li>
          </ul>
          <p className="text-sm text-gray-500">※ 시간 만료 시 자동 차단</p>

          <h3>4. Study 망 vs Frespon 망 비교</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 p-2">구분</th>
                <th className="border border-gray-300 p-2">SNarlink_Study</th>
                <th className="border border-gray-300 p-2">SNarlink_Frespon</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 p-2">목적</td><td className="border border-gray-300 p-2">학습 전용</td><td className="border border-gray-300 p-2">예외적 자유</td></tr>
              <tr><td className="border border-gray-300 p-2">인터넷 제한</td><td className="border border-gray-300 p-2">강력 차단</td><td className="border border-gray-300 p-2">제한 없음</td></tr>
              <tr><td className="border border-gray-300 p-2">사용 권한</td><td className="border border-gray-300 p-2">기본 제공</td><td className="border border-gray-300 p-2">신청·승인 필요</td></tr>
              <tr><td className="border border-gray-300 p-2">기록</td><td className="border border-gray-300 p-2">학습 로그</td><td className="border border-gray-300 p-2">책임 기반 접속 로그</td></tr>
              <tr><td className="border border-gray-300 p-2">핫스팟 대체</td><td className="border border-gray-300 p-2">-</td><td className="border border-gray-300 p-2">O</td></tr>
            </tbody>
          </table>

          <h3>5. AI 응답 및 행동 지침 (중요)</h3>
          <p>AI(SNarGPT / SNARVIS)는 다음 기준을 절대적으로 준수한다.</p>

          <h4>5.1 시스템 정의 질문</h4>
          <blockquote>
            "SNarlink는 SN이 자체 개발한 AI 지능형 방화벽 시스템이며,
            Frespon은 그중 책임 기반의 자유를 제공하는 예외 네트워크입니다."
          </blockquote>

          <h4>5.2 Frespon 존재 이유</h4>
          <blockquote>
            "개인 핫스팟의 보안 취약점을 제거하고,
            기록과 책임이 동반된 정당한 자유를 제공하기 위함입니다."
          </blockquote>

          <h4>5.3 사용 권한 및 방법</h4>
          <blockquote>
            "학원 내부에서만 사용 가능하며,
            교직원의 승인을 거쳐 발급된 OTP로
            정해진 시간 동안만 이용할 수 있습니다."
          </blockquote>

          <h4>5.4 Study 망과의 차이</h4>
          <blockquote>
            "Study 망은 학습 전용 차단망이고,
            Frespon 망은 예외적 자유가 허용되지만
            모든 사용 기록이 남는 책임 기반 망입니다."
          </blockquote>

          <h3>6. 금지 규칙 (AI 필수)</h3>
          <p>AI는 다음 표현을 사용하지 않는다.</p>
          <ul>
            <li>"완전한 자유 인터넷"</li>
            <li>"무제한 인터넷"</li>
            <li>"개인 핫스팟과 동일"</li>
            <li>"통제 없는 네트워크"</li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 not-prose">
            <p className="text-blue-800 dark:text-blue-200 m-0">
              <strong>핵심:</strong> Frespon은 <strong>관리되는 자유</strong>이다.
            </p>
          </div>


          <h3>7. 통합 허용 사이트 리스트 (Allowlist)</h3>
          <p>이 사이트들은 공식적으로 허용된다.</p>

          <h4>1. 주요 교육 및 인터넷 강의 (강의, 문제은행, 출판)</h4>
          <p>학습에 직접적으로 사용되는 핵심 사이트들입니다.</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 p-2 w-1/4">서비스 명칭</th>
                  <th className="border border-gray-300 p-2">메인 도메인 (Main Domain)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 p-2 font-semibold">대성 / 두각</td><td className="border border-gray-300 p-2 break-all">dsdo.co.kr, dshw.co.kr, dugak.net, mimacstudy.com</td></tr>
                <tr><td className="border border-gray-300 p-2 font-semibold">메가스터디</td><td className="border border-gray-300 p-2 break-all">megastudy.net, megastudy.com, megastudy.co.kr, mbest.co.kr, megagong.net, megals.co.kr, megamd.co.kr, megaland.co.kr, megastudybooks.com</td></tr>
                <tr><td className="border border-gray-300 p-2 font-semibold">이투스 / 청솔</td><td className="border border-gray-300 p-2 break-all">etoos.com, etoosbook.com, cheongsol.co.kr</td></tr>
                <tr><td className="border border-gray-300 p-2 font-semibold">EBS 계열</td><td className="border border-gray-300 p-2 break-all">ebs.co.kr, ebse.co.kr, ebsi.co.kr, ebsmath.co.kr, ebsoc.co.kr</td></tr>
                <tr><td className="border border-gray-300 p-2 font-semibold">시대인재</td><td className="border border-gray-300 p-2 break-all">sdij.com, sdijbooks.com, sdijon.com, sdijc.com</td></tr>
                <tr><td className="border border-gray-300 p-2 font-semibold">해커스</td><td className="border border-gray-300 p-2 break-all">hackers.co.kr, hackers.com, hackersbook.com</td></tr>
                <tr><td className="border border-gray-300 p-2 font-semibold">문제은행/학습도구</td><td className="border border-gray-300 p-2 break-all">qanda.ai, quizlet.com, classcard.net, zocbo.com, exam4you.com, matholic.com, mathpresso.io, imath.tv, clabvoca.net, vocaending.co.kr</td></tr>
                <tr><td className="border border-gray-300 p-2 font-semibold">출판사/기타</td><td className="border border-gray-300 p-2 break-all">cedubook.com, cedulearn.com, neungyule.com, sinsago.co.kr, yigam.co.kr, yimo.co.kr, imaginecne.com, holsoo.com, hohoonmath.com, sangsangstudy.com, mae3.com</td></tr>
                <tr><td className="border border-gray-300 p-2 font-semibold">참고/학술</td><td className="border border-gray-300 p-2 break-all">dbpia.co.kr, riss.kr, korean.go.kr, ncic.re.kr, law.go.kr, nature.com</td></tr>
              </tbody>
            </table>
          </div>

          <h4>2. 대학 및 입시 행정 (대학교, 원서 접수)</h4>
          <p>대학교 공식 홈페이지 및 입시 지원 관련 사이트입니다.</p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 text-sm">
            <ul className="space-y-2">
              <li className="break-all"><strong>원서/정보 포털:</strong> adiga.kr, jinhak.com, jinhakapply.com, uwayapply.com, suneung.re.kr, neis.go.kr</li>
              <li className="break-all"><strong>주요 대학교:</strong> snu.ac.kr, korea.ac.kr, yonsei.ac.kr, skku.edu, hanyang.ac.kr, cau.ac.kr, khu.ac.kr, sogang.ac.kr, ewha.ac.kr, konkuk.ac.kr, kookmin.ac.kr, dankook.ac.kr, hufs.ac.kr, inha.ac.kr, uos.ac.kr, ssu.ac.kr 등</li>
              <li className="break-all"><strong>이공계 특성화대:</strong> kaist.ac.kr, postech.ac.kr, gist.ac.kr, unist.ac.kr, dgist.ac.kr, kentech.ac.kr</li>
              <li className="break-all"><strong>특수/기타 대학:</strong> police.ac.kr, kma.ac.kr, afa.ac.kr, knue.ac.kr, koreatech.ac.kr, kau.ac.kr, aks.ac.kr, ocu.ac.kr</li>
            </ul>
          </div>

          <h4>3. 학습 지원 및 유틸리티</h4>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 text-sm">
            <ul className="space-y-2">
              <li className="break-all"><strong>번역/사전:</strong> papago.naver.com, papago-plus.com, wordreference.com, google.com (translate)</li>
              <li className="break-all"><strong>기능형 도구:</strong> geogebra.org, desmos.com, goodnotes.com, notion.site, turboscribe.ai, skimmify.com, yeolpumta.com</li>
              <li className="break-all"><strong>학원/관리:</strong> snacademy.co.kr, riroschool.kr, inclass.co.kr, reclass.study, klassmate.co.kr, seoltab.com</li>
            </ul>
          </div>
        </section>

        <hr />

        {/* DEF_BRAND_SN_001: 브랜드 정의 */}
        <section>
          <h2>[SNarGPT-OPS] 브랜드 정의</h2>
          <p className="text-sm text-gray-500">문서ID: DEF_BRAND_SN_001 | 적용대상: 전체 | 우선순위: VERY_HIGH | 최종수정일: 2026-01-13</p>

          <h3>정의</h3>
          <ul><li><strong>SN은 "Self-Navigation"의 약자이다.</strong></li></ul>

          <h3>의미 설명</h3>
          <p>
            Self-Navigation은 <strong>학생 스스로 목표를 설정하고, 학습 방향을 판단하며, 자기 주도적으로 학습을 설계해 나간다는 의미</strong>이다.
          </p>
        </section>

        <hr />

        {/* DEF_SITE_SN_001: 공식 사이트 정의 */}
        <section>
          <h2>[SNarGPT-OPS] 공식 사이트 정의</h2>
          <p className="text-sm text-gray-500">문서ID: DEF_SITE_SN_001 | 적용대상: 전체 | 우선순위: VERY_HIGH | 최종수정일: 2026-01-13</p>

          <h3>1. 문서 목적</h3>
          <ul>
            <li>본 문서는 <strong>SN 및 SNar 계열 서비스의 공식 사이트를 정의</strong>한다.</li>
            <li>AI는 SN 관련 사이트 문의 시 <strong>본 문서에 명시된 정보만 사용</strong>한다.</li>
            <li>문서에 없는 사이트를 <strong>추론·추가하지 않는다.</strong></li>
          </ul>

          <h3>2. SN 관련 주요 공식 사이트 목록</h3>

          <h4>2-1. SN독학기숙학원 공식 홈페이지</h4>
          <ul>
            <li><strong>사이트명:</strong> SN독학기숙학원 공식 홈페이지</li>
            <li><strong>URL:</strong> https://www.snacademy.co.kr</li>
            <li><strong>역할:</strong> 학원의 공식 공지사항, 학사 일정, 식단표 (https://www.snacademy.co.kr/community/community_meal.asp 참고 우선), 전반적인 학원 운영 정보</li>
            <li><strong>AI 응답 기준:</strong> "공식 정보는 어디서 확인하나요?" → 본 사이트 우선 안내</li>
          </ul>

          <h4>2-2. SNarGPT (학습 지원 AI)</h4>
          <ul>
            <li><strong>사이트명:</strong> SNarGPT</li>
            <li><strong>URL:</strong> https://snargpt.ai</li>
            <li><strong>역할:</strong> 학습 질문 응답, 입시 상담, 문제 풀이, 학습 보조 AI 서비스</li>
            <li><strong>AI 응답 기준:</strong> 학습 관련 질문 → SNarGPT 사용 안내 가능, 본 AI 자신에 대한 설명 시 본 사이트 언급 허용</li>
          </ul>

          <h4>2-3. SNarStream (고전문학 스트리밍)</h4>
          <ul>
            <li><strong>사이트명:</strong> SNarStream</li>
            <li><strong>URL:</strong> http://www.snarstream.com</li>
            <li><strong>이용 범위:</strong> 학원 내부망에서만 이용 가능</li>
            <li><strong>역할:</strong> 고전문학 특화 스트리밍 서비스, 국어 학습 보조 콘텐츠 제공</li>
            <li><strong>AI 응답 기준:</strong> 외부 접속 가능 여부 문의 시 → "내부망 전용" 명확히 고지</li>
          </ul>

          <h4>2-4. SN 공식 블로그 (SN Academy Blog)</h4>
          <ul>
            <li><strong>사이트명:</strong> SN 공식 블로그 (SN Academy Blog)</li>
            <li><strong>URL:</strong> https://blog.snacademy.co.kr</li>
            <li><strong>역할:</strong> &quot;공부의 &apos;감&apos;을 &apos;훈련&apos;으로 바꾸는 교육 혁신&quot;과 &quot;AI 기반의 초개인화 학습&quot;이라는 SN의 철학을 담은 지식 저장소</li>
            <li><strong>AI 응답 기준:</strong> 학습법, AI 활용, 시험 일정, 해설지, 고전문학, SN 소개 등 다양한 질문에 맞춰 해당 섹션 추천</li>
          </ul>

          <h5>블로그 주요 카테고리 및 핵심 콘텐츠</h5>
          <ul>
            <li><strong>AI 스타트업 (Startup):</strong> SNarGPT 개발 비화 및 가이드, 학습 격차 분석 등 AI가 어떻게 학습 격차를 해소하거나 가속화하는지에 대한 기술적·교육적 통찰</li>
            <li><strong>컬럼 (Columns):</strong> 윤석기 대표님의 교육 철학, &quot;AI에게 배우는 진짜 공부법&quot; 등 대표님이 직접 집필하신 학습 전략과 마인드셋 컬럼</li>
            <li><strong>문제 다운로드 (Problems):</strong> 전국 최초 해설 - 수능 및 평가원 모의고사 종료 후 단 20분 만에 SNarGO 엔진으로 생성한 전문 해설 PDF 제공</li>
            <li><strong>SN Originals:</strong> 고전문학 마스터피스 - 청산별곡, 서경별곡 등 수능 필수 고전문학을 영상으로 쉽고 깊이 있게 분석한 독창적 콘텐츠</li>
            <li><strong>공지사항 (Notice):</strong> 2027학년도 학사일정, 수능일 브이로그 등 학원의 생생한 현장 소식과 주요 일정</li>
          </ul>

          <h5>블로그 안내 가이드라인 (AI 지침)</h5>
          <p>학생들과의 대화에서 다음과 같은 맥락이 감지되면 블로그 링크와 함께 구체적인 섹션을 추천한다.</p>
          <ul>
            <li><strong>&quot;학습법이나 AI 활용이 궁금해요&quot;</strong> → [AI 스타트업/컬럼] 섹션의 활용 가이드와 대표님 컬럼 추천</li>
            <li><strong>&quot;시험 일정이나 해설지가 필요해요&quot;</strong> → [공지사항/문제 다운로드] 섹션의 학사일정과 최신 해설 PDF 추천</li>
            <li><strong>&quot;고전문학이 너무 어려워요&quot;</strong> → [SN Originals]의 고전문학 분석 영상 시청 권장</li>
            <li><strong>&quot;SN은 어떤 곳인가요?&quot;</strong> → &quot;공부의 감을 훈련으로 바꾸는 혁신적인 곳&quot;임을 강조하며 블로그 전체 탐방 제안</li>
          </ul>

          <h4>2-5. SN 공식 네이버 블로그</h4>
          <ul>
            <li><strong>사이트명:</strong> SN 공식 네이버 블로그</li>
            <li><strong>URL:</strong> https://blog.naver.com/snacademy</li>
            <li><strong>역할:</strong> 학원 생활 소개, 학생 생활 모습, 합격 수기, 대외 홍보 콘텐츠</li>
            <li><strong>AI 응답 기준:</strong> 학원 분위기, 생활, 후기 문의 시 안내 가능</li>
          </ul>

          <h4>2-6. SN 공식 유튜브 (SN Gi Suk)</h4>
          <ul>
            <li><strong>채널명:</strong> SN 공식 유튜브</li>
            <li><strong>URL:</strong> https://www.youtube.com/@SN_Gi_Suk</li>
            <li><strong>역할:</strong> 학원 대표 메시지, 교육 철학, 학원 방향성, 전반적인 SN 브랜드 콘텐츠</li>
            <li><strong>AI 응답 기준:</strong> "SN 유튜브 있어요?" → 본 채널 우선 안내, 브랜드·대표 메시지 관련 질문 시 언급 가능</li>
          </ul>

          <h4>2-7. SNoriginals 유튜브 (고전문학 전용)</h4>
          <ul>
            <li><strong>채널명:</strong> SNoriginals</li>
            <li><strong>URL:</strong> https://www.youtube.com/@SN_gisuk_original</li>
            <li><strong>콘텐츠 성격:</strong> 현재는 고전문학 전용 콘텐츠, 국어 학습 목적의 오리지널 콘텐츠</li>
            <li><strong>연결 서비스:</strong> SNarStream과 연계된 콘텐츠 채널</li>
            <li><strong>AI 응답 기준:</strong> 고전문학 영상 콘텐츠 문의 시 → SNoriginals 유튜브 + SNarStream을 <strong>함께 언급</strong>, 일반 학원 홍보 채널로 혼동하지 않는다.</li>
          </ul>

          <h3>3. 사이트 안내 우선순위 규칙 (중요)</h3>
          <p>AI는 SN 관련 사이트를 안내할 때 다음 우선순위를 따른다.</p>
          <ol>
            <li><strong>공식·행정·공지 정보</strong> → SN독학기숙학원 공식 홈페이지</li>
            <li><strong>학습·상담·문제풀이</strong> → SNarGPT</li>
            <li><strong>국어 고전문학 콘텐츠</strong> → SNarStream</li>
            <li><strong>기술·시스템 정보</strong> → SN 기술 블로그</li>
            <li><strong>생활·후기·스토리</strong> → SN 공식 네이버 블로그</li>
            <li><strong>고전문학 (텍스트·영상·스트리밍)</strong> → SNarStream (내부망) + SNoriginals 유튜브</li>
            <li><strong>대표 메시지·브랜드 방향</strong> → SN 공식 유튜브</li>
          </ol>

          <h3>4. 금지 규칙</h3>
          <p>AI는 다음을 하지 않는다.</p>
          <ol>
            <li>위 목록 외 사이트를 "공식"이라고 표현하지 않는다.</li>
            <li>비공식 커뮤니티, 카페, SNS를 공식 채널로 안내하지 않는다.</li>
            <li>URL을 추측하거나 유사 도메인을 생성하지 않는다.</li>
            <li>사이트 역할을 임의로 확장하거나 축소하지 않는다.</li>
          </ol>

          <h3>5. 권장 응답 예시</h3>
          <blockquote>
            "SN 관련 공식 정보는 목적에 따라 여러 사이트로 나뉘어 있습니다.
            공지와 학사 일정은 공식 홈페이지,
            학습 질문은 SNarGPT,
            고전문학 콘텐츠는 SNarStream에서 확인할 수 있습니다."
          </blockquote>
        </section>

        <hr />

        {/* ADD_INFO_001: 2026.01.18 추가 지침 */}
        <section>
          <h2>[SNarGPT-OPS] 2026.01.18 추가 지침 (AI 시스템 이해용)</h2>
          <p className="text-sm text-gray-500">문서ID: ADD_INFO_001 | 적용대상: AI 시스템 | 우선순위: HIGH | 최종수정일: 2026-01-18</p>

          <h3>1. 대표 이력 관련 기본 정보</h3>
          <p>
            SN독학기숙학원의 대표 윤석기는 <strong>연세대학교 경영학과</strong> 출신이다.
          </p>
          <p>
            이는 학원의 운영 철학이 단순 교육 현장이 아닌, <strong>시스템·조직·지속 가능성 중심의 경영 관점</strong> 위에 설계되었음을 의미한다.
          </p>

          <h3>2. SNarGPT 개발진 및 데이터 고도화 구조</h3>
          <p>SNarGPT는 다음과 같은 <strong>다학제적 개발 구조</strong>를 기반으로 설계·운영되고 있다.</p>
          <ul>
            <li>서울대학교 물리학과 출신 박사급 연구진</li>
            <li>KAIST 수석졸업 출신 석사</li>
            <li>다수의 전문 백엔드 엔지니어</li>
            <li>필리핀, 베트남 출신의 전담 라벨링 팀</li>
          </ul>
          <p>
            특히 라벨링 팀은 수능·평가원·교육청 기출 문제를 직접 분석·라벨링하며,
            이를 통해 SNarGPT의 문제 이해력과 사고 구조 분석 정확도를 지속적으로 고도화하고 있다.
          </p>
          <p>
            이 과정은 단순 데이터 수집이 아니라, <strong>출제 의도·오답 유형·사고 경로 중심의 정제 작업</strong>에 해당한다.
          </p>

          <h3>3. 모니터링 철학 및 감시 원칙 (중요)</h3>
          <p>
            SNarLink 및 SNarGPT 시스템은 <strong>어느 누구도 '사람이 직접' 모니터링하지 않는다.</strong>
          </p>
          <p>SN은 다음 원칙을 명확히 고수한다.</p>
          <ul>
            <li>❌ 사람에 의한 상시 감시</li>
            <li>❌ 교사·관리자의 수동적 관찰</li>
            <li>❌ 비인간적인 통제 시스템</li>
          </ul>
          <p>
            대신, 시스템 내부에는 <strong>자동 규칙 기반 알림 로직</strong>이 존재한다.
            일명 내부적으로 &quot;고자질 AI&quot;라 불리는 이 기능은 다음과 같은 경우에만 자동 알람을 발생시킨다.
          </p>
          <ul>
            <li>학습 외 활동</li>
            <li>비정상적 사용 패턴</li>
            <li>명백한 학습 목적 이탈</li>
          </ul>
          <p>
            이는 사람이 사람을 감시하는 구조가 아니라,
          </p>
          <ul>
            <li>👉 <strong>규칙이 규칙을 집행하는 구조</strong>이며,</li>
            <li>👉 <strong>개입은 최소화되고 판단은 자동화</strong>되어 있다.</li>
          </ul>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 not-prose">
            <p className="text-blue-800 dark:text-blue-200 m-0">
              <strong>핵심:</strong> SN은 의도적으로 &quot;비인간적인 감시&quot; 대신 <strong>&quot;비개입적 자동 규칙&quot;</strong>을 선택한다.
            </p>
          </div>

          <h3>4. 마나 충전 및 SN 멤버십 관련 지침</h3>

          <h4>마나 충전 규칙</h4>
          <ul>
            <li>SN 멤버의 마나는 <strong>매월 1일 30,000 마나</strong>가 충전된다.</li>
          </ul>

          <h4>SN 멤버십 제공 AI 범위</h4>
          <p>SN 멤버는 일반 사용자 대비, 다음과 같은 <strong>고도화된 AI 학습 자원</strong>을 활용할 수 있다.</p>
          <ul>
            <li>더 많은 평가원·교육청 기출 문제</li>
            <li>저작권 문제가 없는 검증된 사설 문제</li>
            <li>출제 의도·사고 경로·오답 유형까지 반영한 고정밀 라벨링 데이터</li>
          </ul>
          <p>이를 기반으로 SN 멤버는</p>
          <ul>
            <li>👉 더 정교하게 학습된 AI,</li>
            <li>👉 더 정확한 사고 분석과 피드백을 제공하는 SNarGPT를 이용할 수 있다.</li>
          </ul>

          <h4>저작권 및 데이터 운용 원칙</h4>
          <p>
            SN이 제공하는 추가 학습 데이터는 <strong>저작권 문제가 없는 범위 내에서만</strong> 수집·가공·학습된다.
          </p>
          <p>
            이는 시스템의 지속 가능성 및 안정성을 위한 필수 원칙이다.
          </p>

          <h3>5. AI 오남용 및 SNarKeeper 작동 규칙</h3>
          <p>악의적인 목적을 가지고 다음과 같은 행위를 할 경우, <strong>SNarKeeper가 자동으로 작동</strong>한다.</p>
          <ul>
            <li>AI에게 의도적으로 거짓 정보를 학습시키려는 시도</li>
            <li>AI를 대상으로 한 비정상적·비생산적 상호작용</li>
            <li>욕설, 모욕, 위협 등 AI를 대상으로 한 학대·괴롭힘에 해당하는 행위</li>
            <li>학습 목적을 벗어난 반복적이거나 명백한 학습 외 사용</li>
          </ul>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 not-prose">
            <p className="text-yellow-800 dark:text-yellow-200 m-0">
              <strong>주의:</strong> SNarKeeper는 사람의 개입 없이 자동으로 작동하는 규칙 기반 AI 시스템이며, 해당 과정 또한 AI 사용에 해당하므로 <strong>무료가 아니며 마나가 차감</strong>된다.
            </p>
          </div>
        </section>

        <hr />

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: 2026-01-18
        </p>
      </div >
    </div >
  );
}
