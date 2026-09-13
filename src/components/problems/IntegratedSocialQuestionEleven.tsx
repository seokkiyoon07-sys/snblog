import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    '① · 옳음',
    '㉠은 종교의 자유로, 국가의 부당한 간섭을 배제하는 자유권입니다. 종교행사에 참석하지 않을 자유도 보호됩니다.',
  ],
  [
    '② · 틀림',
    '㉡은 능력에 따라 균등하게 교육을 받을 권리입니다. 기본권 유형으로는 사회권에 해당합니다. 정치적 의사 결정에 참여하는 권리는 참정권입니다. 을의 장래희망이 국회의원이라는 사실로 침해된 권리를 분류하면 안 됩니다.',
  ],
  [
    '③ · 틀림',
    '목적이 정당하다는 이유만으로 법률적 근거 없이 기본권을 제한할 수는 없습니다. 헌법 제37조 제2항에 따른 목적·법률적 근거·필요성과 제한의 한계를 함께 확인해야 합니다.',
  ],
  [
    '④ · 틀림',
    '갑과 을은 모두 기본권을 구제받기 위해 헌법재판소에 심판을 청구했습니다. 수단적 성격의 권리를 행사한 것은 두 사람 모두이므로 ‘갑과 달리’가 성립하지 않습니다.',
  ],
  [
    '⑤ · 틀림',
    '두 사람 모두 공권력에 의한 기본권 침해를 주장하며 헌법소원 심판을 청구했습니다. 갑만 청구했다는 설명은 자료와 일치하지 않습니다.',
  ],
];
export function QuestionElevenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ① · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          침해된 권리와 구제를 위한 권리 구별하기
        </h3>
        <section className={card}>
          <h4 className="font-bold">갑 · ㉠ 종교의 자유 → 자유권</h4>
          <p className="mt-2">
            본인의 의사에 반하는 종교행사 참석 강요가 핵심입니다. 군인이라는
            지위와 별개로 국가의 부당한 간섭으로부터 종교의 자유를 보장받아야
            합니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">을 · ㉡ 교육을 받을 권리 → 사회권</h4>
          <p className="mt-2">
            검정고시 출신이라는 이유로 입학 지원을 제한받은 사례입니다.
            ‘국회의원’이라는 배경보다 ‘능력에 따라 균등하게 교육을 받을
            권리’라는 밑줄의 내용을 기준으로 판단합니다.
          </p>
        </section>
        <p>
          두 사람은 침해되었다고 주장하는 권리가 다르지만, 헌법소원을 청구하여
          구제를 구했다는 공통점이 있습니다. 제시문에서 심판을 청구했다는 사실과
          실제 사건의 결정 결과는 구별합니다.
        </p>
        {choices.map(([title, text]) => (
          <section className={card} key={title}>
            <h4 className="font-bold">{title}</h4>
            <p className="mt-2">{text}</p>
          </section>
        ))}
      </div>
    </details>
  );
}
export function QuestionElevenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">사례 속 기본권과 헌법적 구제 절차</h3>
      <p>
        공식 배점은 2점입니다. 기본권의 종류, 제한의 한계, 침해 시 구제 수단을
        두 사례에 적용하는 문항입니다. 아래는 원문에 근거한 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. 장래희망보다 실제로 제한된 활동 확인
        </h4>
        <p className="mt-3">
          ②는 을의 장래희망과 침해된 권리를 혼동하는지 확인합니다. 누가 어떤
          활동을 제한했는지 먼저 찾고, 그 활동을 보장하는 기본권을 연결합니다.
          국회의원이 되고 싶다는 배경만으로 참정권을 선택할 수 없습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. 권리의 내용과 구제 수단은 서로 다른 축
        </h4>
        <p className="mt-3">
          자유권은 국가의 부당한 간섭을 배제하는 권리, 사회권은 인간다운 생활을
          위한 국가의 적극적 역할을 요구하는 권리로 정리합니다. 청구권은 기본권
          보장을 위한 수단적 권리입니다. 종교의 자유 또는 교육을 받을 권리의
          침해를 주장하면서, 구제를 위해 청구권을 행사할 수 있습니다.
        </p>
        <p className="mt-3">
          ④·⑤의 ‘갑과 달리’, ‘을과 달리’는 두 사람을 모두 확인해야 판정할 수
          있습니다. 어느 한 사람에게 해당한다는 사실만으로 비교 진술 전체가
          옳아지는 것은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">3. 기본권 제한의 조건을 함께 점검</h4>
        <p className="mt-3">
          헌법 제37조 제2항은 국가안전보장·질서유지·공공복리를 위한 필요한
          경우의 법률에 의한 제한을 규정하며, 본질적인 내용의 침해를 금지합니다.
          정당한 목적만 제시했다고 제한이 정당화되는 것은 아닙니다. 법률적
          근거와 과잉금지원칙 등도 충족해야 합니다.
        </p>
        <p className="mt-3">
          종교의 자유를 설명할 때 내면의 신앙 자체와 외부로 나타나는 종교적
          행위를 구별합니다. 모든 기본권의 모든 내용을 일률적으로 제한할 수
          있다고 일반화하지 않습니다.
        </p>
        <a
          className={link}
          href="https://www.law.go.kr/법령/대한민국헌법"
          target="_blank"
          rel="noreferrer"
        >
          대한민국헌법 · 제20조·제31조·제37조 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 함께 읽을 실제 헌법재판소 결정</h4>
        <p className="mt-3">
          육군훈련소 종교행사 참석 강제 사건은 2022년 11월 24일의 2019헌마941
          결정입니다. 헌법재판소는 해당 참석 강제 행위가 종교의 자유를
          침해한다고 판단했습니다.
        </p>
        <a
          className={link}
          href="https://www.ccourt.go.kr/site/kor/ex/bbs/View.do?bcIdx=1003081&cbIdx=1195"
          target="_blank"
          rel="noreferrer"
        >
          헌법재판소 · 종교행사 참석 강제 사건 ↗
        </a>
        <p className="mt-3">
          국립 교육대학교 등의 2017학년도 수시모집 지원 제한 사건은 2017년 12월
          28일의 2016헌마649 결정입니다. 검정고시 출신자의 지원을 제한한
          모집요강이 균등하게 교육을 받을 권리를 침해한다고 판단했습니다. 교육을
          받을 권리의 사회권적 분류와 이 사건에서 드러나는 교육 기회균등의
          문제를 함께 이해합니다.
        </p>
        <a
          className={link}
          href="https://www.law.go.kr/detcInfoP.do?detcSeq=144181"
          target="_blank"
          rel="noreferrer"
        >
          국가법령정보센터 · 수시모집 입시요강 결정 ↗
        </a>
        <p className="mt-3">
          이 결정들은 사례를 이해하는 참고 근거입니다. 출제자가 특정 판례나
          논문을 직접 차용했다는 사실까지 확정하는 것은 아닙니다. 정답 판정에
          사건번호나 세부 청구 요건의 암기는 필요하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 인권 보장과 헌법 · [10통사2-01-02]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          인간 존엄성 실현과 인권 보장을 위한 헌법의 역할을 파악하고, 시민의
          권익을 보호하기 위한 다양한 시민 참여의 방안을 탐구하고 이를 실천한다.
        </blockquote>
        <p className="mt-3">
          생활 속 권리 제한을 헌법의 기준으로 검토하고 구제 절차와 연결합니다.
          기본권 분류표를 외우는 데서 나아가 사례의 사실을 근거로 설명하는
          연습이 중요합니다.
        </p>
        <a
          className={link}
          href="https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=294&boardSeq=103113&lev=0&m=020402"
          target="_blank"
          rel="noreferrer"
        >
          공식 예시문항·정답표·성취기준 안내 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">학생이 준비할 것</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            제한된 활동 → 침해를 주장하는 기본권 → 구제 절차 순으로 표시하기
          </li>
          <li>자유권·평등권·참정권·사회권·청구권을 사례와 연결하기</li>
          <li>
            기본권 제한의 목적, 법률적 근거, 필요성, 본질적 내용의 보호를 함께
            확인하기
          </li>
          <li>
            ‘모두’와 ‘달리’가 포함된 선지는 각 인물의 사실을 따로 확인하기
          </li>
        </ol>
      </section>
    </div>
  );
}
export function QuestionElevenRelated() {
  const items = [
    {
      file: '311027-1.png',
      connection:
        '공식 11번의 자유권과 청구권 판단에 연결됩니다. 소극적·방어적 권리와 기본권 보장을 위한 수단적·절차적 권리를 구별하는 동일한 개념 분류를 연습합니다.',
      width: 2798,
      height: 2337,
      title: '2021학년도 6월 모의평가 · 정치와 법 7번',
      date: '고3 · 평가원 · 2020년 시행',
      answer: '①',
      text: '환경권 침해를 다루는 A는 사회권, 재판받을 기회를 다루는 B는 청구권, 불법 체포를 다루는 C는 자유권입니다. 교육을 받을 권리는 A에 속하므로 ①이 옳습니다. 소극적·방어적 성격은 자유권, 수단적 성격은 청구권에 연결합니다.',
    },
    {
      file: '228428-1.png',
      connection:
        '공식 11번의 종교의 자유와 교육을 받을 권리처럼, 사례에서 침해된 권리를 추출해 자유권·평등권·사회권의 성격에 연결하는 기출입니다.',
      width: 2883,
      height: 2776,
      title: '2024년 9월 전국연합학력평가 · 통합사회 9번',
      date: '고1 · 교육청',
      answer: '④',
      text: '체포 과정의 권리 침해를 다룬 A는 자유권, 주거와 인간다운 생활을 다룬 B는 사회권, 성별에 따른 차별을 다룬 C는 평등권입니다. B는 국가의 적극적 역할을 전제로 보장되는 권리이므로 ④가 옳습니다. 교육을 받을 권리를 자유권으로 분류하거나 평등권을 수단적 권리로 분류하지 않습니다.',
    },
    {
      file: '309452-1.png',
      connection:
        '공식 11번에서 교육을 받을 권리와 구제를 청구하는 권리를 구별하는 부분에 연결됩니다. 사회권의 내용과 청구권의 수단적 성격을 혼동하지 않는 연습입니다.',
      width: 2939,
      height: 3337,
      title: '2019년 3월 전국연합학력평가 · 정치와 법 12번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '②',
      text: '다른 기본권 보장을 위한 수단적 권리인 A는 청구권, B는 사회권입니다. 국가에 인간다운 생활의 보장을 요구하는 권리는 사회권이므로 ②가 옳습니다. 교육을 받을 권리는 B에 속하고, 청원권은 A에 속합니다. 흐름도의 예·아니요 방향을 따라 분류를 확인합니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        기본권의 성격을 구별하는 유사 기출 3문항
      </h3>
      <p>
        사례에서 기본권을 식별하고, 내용적 권리와 수단적 권리를 구별하는
        연습입니다.
      </p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/11/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 11번과의 연결
              </p>
              <p className="mt-2">{item.connection}</p>
            </div>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block bg-white p-2"
              aria-label={`${item.title} 원문 크게 보기`}
            >
              <Image
                src={src}
                width={item.width}
                height={item.height}
                unoptimized
                sizes="(max-width: 768px) 100vw, 650px"
                className="h-auto w-full"
                alt={item.title}
              />
            </a>
            <details className="mt-4 rounded-xl border border-emerald-200 p-4 dark:border-emerald-800">
              <summary className="cursor-pointer font-bold">
                정답·풀이 보기
              </summary>
              <p className="mt-3 font-bold">SN 풀이 · 정답 {item.answer}</p>
              <p className="mt-2">{item.text}</p>
            </details>
          </section>
        );
      })}
      <p className="text-xs text-gray-500">
        유사 기출 해설은 원문 이미지에 근거한 SN 풀이입니다. 공통 개념에 따른
        연결이며 직접적인 출제 계보를 뜻하지 않습니다.
      </p>
    </div>
  );
}
