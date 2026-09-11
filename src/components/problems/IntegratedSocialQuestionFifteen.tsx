import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    'ㄱ · A에 적절',
    '갑은 롤스입니다. 자신의 재능·계층·사회적 지위 등에 관한 정보가 가려진 원초적 입장에서 공정한 원칙에 합의한다고 봅니다. 여기서 우연성의 배제는 현실의 개인차를 없애는 것이 아니라, 우연적 여건을 협상에 유리하게 이용하지 못하도록 하는 조건입니다.',
  ],
  [
    'ㄴ · A에 부적절 → B에 해당',
    '분배 과정의 정당성을 중시하는 것은 두 사상가의 공통점입니다. 롤스는 정의로운 제도와 공정한 절차를, 노직은 정당한 취득·이전·교정의 과정을 중시합니다. 진술 자체는 공통 입장에 해당하지만 갑만의 입장인 A에 넣었으므로 틀립니다.',
  ],
  [
    'ㄷ · B에 적절',
    '두 사상가 모두 다수의 복지 증진만을 이유로 소수자의 자유를 희생시키는 것에 반대합니다. 롤스의 기본적 자유 보장과 노직의 개인 권리 존중을 공리주의적 총합 극대화와 대조합니다.',
  ],
  [
    'ㄹ · C에 부적절',
    '노직은 정당한 이전으로 얻은 소유권도 인정합니다. 자신이 직접 노동해 생산하지 않았어도 정당한 교환·증여·상속을 통해 소유 권리를 지닐 수 있습니다. ‘자기 노동의 산물에 대해서만’이라는 한정이 틀립니다.',
  ],
];
export function QuestionFifteenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ② · ㄱ, ㄷ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          진술의 내용과 벤다이어그램의 위치를 함께 판단
        </h3>
        <p>
          갑은 원초적 입장과 합의를 강조하는 롤스, 을은 취득·이전·교정의 원리를
          강조하는 노직입니다. A는 롤스만의 입장, B는 공통 입장, C는 노직만의
          입장입니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">
            ㄴ의 함정: 옳은 내용도 위치가 틀릴 수 있음
          </h4>
          <p className="mt-2">
            ‘분배 과정의 정당성’은 노직만의 특징도, 롤스만의 특징도 아닙니다. 두
            사상가에게 각각 적용되는지 확인한 뒤 B에 배치해야 합니다.
          </p>
        </section>
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
export function QuestionFifteenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        분배 정의의 차이점과 공통점 구별하기
      </h3>
      <p>
        공식 배점은 2.5점입니다. 사상가를 식별하는 데서 나아가, 진술이 두 사상가
        중 누구에게 해당하는지와 도식상의 위치가 일치하는지 판단합니다. 아래는
        원문과 선지에 근거한 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">
          1. ‘롤스는 결과, 노직은 과정’이라는 이분법 점검
        </h4>
        <p className="mt-3">
          두 사상가 모두 과정의 정당성을 중요하게 보지만, 정당한 과정의 기준은
          다릅니다. 롤스의 공정한 분배 절차는 정의로운 사회 기본 구조와 제도적
          배경을 전제로 합니다. 단지 당사자들이 자발적으로 거래했다는 사실만으로
          모든 결과를 정당화하는 것은 아닙니다.
        </p>
        <p className="mt-3">
          노직은 소유가 어떤 역사를 거쳐 형성되었는지 묻습니다. 취득과 이전에
          부정의가 있었다면 교정의 문제가 생깁니다. ‘현재 가지고 있으므로
          정당하다’거나 ‘국가는 어떤 경우에도 개입할 수 없다’고 읽지 않습니다.
        </p>
        <a
          className={link}
          href="https://liberalarts.tamu.edu/pols/wp-content/uploads/sites/20/2020/09/Rawls-A-Theory-of-Justice-60-91.pdf"
          target="_blank"
          rel="noreferrer"
        >
          롤스 · 정의의 원칙과 절차적 정의 원문 발췌 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 다수의 이익과 개인의 권리</h4>
        <p className="mt-3">
          ㄷ은 두 사상가가 공유하는 공리주의 비판을 묻습니다. 다수의 복지가
          커진다는 이유만으로 소수자의 자유 침해를 정당화할 수 없다는 점이
          공통됩니다. 이것이 두 사상가의 모든 자유·재산권 개념이 같다는 뜻은
          아닙니다.
        </p>
        <p className="mt-3">
          롤스의 기본적 자유 보장과 노직의 소유 권리론을 구별하면서 공통점을
          찾습니다. 롤스를 단순히 결과의 균등 분배론자로, 노직을 모든 현존
          소유의 무조건적 옹호자로 정리하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. ‘만’이라는 한정에 구체적 반례 대입
        </h4>
        <p className="mt-3">
          ㄹ은 직접 생산한 물건만 소유할 수 있다고 범위를 제한합니다. 정당한
          소유자로부터 선물받은 물건을 떠올리면, 직접 노동하지 않아도 이전을
          통해 소유 권리가 성립할 수 있음을 알 수 있습니다.
        </p>
        <p className="mt-3">
          ‘상속이면 무조건 정당하다’는 반대 방향의 일반화도 피합니다. 이전하는
          사람의 권원과 이전 과정의 정당성이 전제되어야 합니다. 제시문의 ‘정당한
          소유물’이라는 조건을 끝까지 유지합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 도식형 문항의 풀이 순서</h4>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>갑·을을 각각 식별하고 범례를 확인합니다.</li>
          <li>
            각 진술에 대해 갑의 찬성 여부와 을의 찬성 여부를 따로 판단합니다.
          </li>
          <li>
            갑만 긍정하면 A, 모두 긍정하면 B, 을만 긍정하면 C에 배치합니다.
          </li>
          <li>진술 옆에 지정된 위치가 실제 판정과 같은지 대조합니다.</li>
        </ol>
        <p className="mt-3">
          A·B·C의 의미는 문제마다 다릅니다. 아래 유사 기출의 A·B·C는 질문을
          따라가는 흐름도이므로 이 문항의 벤다이어그램 범례를 그대로 적용하면 안
          됩니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 사회정의와 불평등 · [10통사2-02-02]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          개인과 공동체의 관계를 기준으로 다양한 정의관을 비교하고, 이를
          구체적인 사례에 적용하여 설명한다.
        </blockquote>
        <p className="mt-3">
          공식 성취기준에 맞춰 정의관의 차이와 공통점을 구체적 진술에
          적용합니다. 출처가 확인되지 않은 논문을 출제의 직접 근거로 단정하거나
          배점만으로 최고난도라고 확정하지 않습니다.
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
    </div>
  );
}
export function QuestionFifteenRelated() {
  const items = [
    {
      file: '214900-1.png',
      width: 2830,
      height: 4180,
      title: '2019년 9월 전국연합학력평가 · 생활과 윤리 6번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '③ · ㄴ, ㄷ',
      text: '갑은 롤스, 을은 노직입니다. A는 갑이 예, 을이 아니요로 답해야 하므로 경제적 불평등이 모두에게 이익이 되어야 하는지 묻는 ㄴ이 적절합니다. B의 원초적 입장 당사자들은 상호 무관심하므로 ㄷ도 적절합니다. 복지 증진을 위한 기본적 자유 제한에는 갑도 부정하므로 ㄱ은 A에 맞지 않습니다. 노직은 교정 원리에 따른 개입을 부정의하다고 보지 않으므로 ㄹ도 틀립니다.',
    },
    {
      file: '196663-1.png',
      width: 1974,
      height: 1841,
      title: '2013년 3월 전국연합학력평가 · 생활과 윤리 19번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '②',
      text: '옳지 않은 설명을 고릅니다. 무지의 베일은 자신의 능력과 사회적 지위를 알고 유리한 원칙을 선택하도록 하는 장치가 아니라 그 정보를 가리는 장치입니다. 따라서 ②가 틀립니다. 원초적 입장의 공정성, 평등한 기본적 자유, 차등의 원칙, 공정한 기회균등의 우선성을 함께 정리합니다.',
    },
    {
      file: '197388-1.png',
      width: 2840,
      height: 2724,
      title: '2014학년도 6월 모의평가 · 윤리와 사상 19번',
      date: '고3 · 평가원 · 2013년 시행 · 제공된 출처 기준',
      answer: '①',
      text: '갑은 최소 수혜자의 이익을 중시하는 롤스, 을은 이익의 총합을 중시하는 공리주의 입장입니다. A=(5, 5), B=(7, 6), C=(10, 3)이므로 최솟값은 각각 5·6·3, 합계는 10·13·13입니다. B는 A보다 최솟값과 합계가 모두 커 두 입장 모두 ①에 긍정합니다. B와 C는 총합이 같아도 최소 수혜자의 이익은 달라 두 입장의 판단이 갈립니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        분배 정의를 비교하는 유사 기출 3문항
      </h3>
      <p>
        정의관의 비교, 무지의 베일, 최소 수혜자의 이익과 총합의 차이를
        연습합니다.
      </p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/15/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
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
        원문 이미지에 근거한 SN 풀이입니다. 공통 개념에 따른 연결이며 직접적인
        출제 계보를 뜻하지 않습니다.
      </p>
    </div>
  );
}
