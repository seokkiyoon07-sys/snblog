import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const choices = [
  [
    '① · 옳음',
    '제시문은 어느 정도의 부정의가 있더라도 보통 법과 정책을 따라야 한다고 설명합니다. 따라서 부정의한 법이 모두 시민 불복종의 대상이 되는 것은 아닙니다.',
  ],
  [
    '② · 옳음',
    '롤스의 시민 불복종은 다수가 공유하는 정의감에 호소하는 비폭력적 행위입니다. 이 문항에서 묻는 학자의 관점에 따르면 폭력 행위에 가담하는 것은 시민 불복종으로 간주되지 않습니다.',
  ],
  [
    '③ · 옳지 않음 → 정답',
    '공유된 정의관에 근거한다는 앞부분은 맞지만, 헌법 체계에 저항한다는 뒷부분이 틀립니다. 롤스는 거의 정의로운 입헌 체계의 정당성을 인정하면서 심각하게 부정의한 법이나 정책의 시정을 요구하는 시민 불복종을 설명합니다.',
  ],
  [
    '④ · 옳음',
    '공개성과 위법성은 시민 불복종의 특징입니다. 법적 처벌을 감수하는 태도는 법에 대한 충실성을 드러냅니다. 도덕적으로 정당화될 수 있다는 것과 현행법상 합법이라는 것은 다릅니다.',
  ],
  [
    '⑤ · 옳음',
    '제시문은 법을 따라야 할 의무를 인정하면서도 기본적 자유의 부정을 묵인해야 하는 것은 아니라고 말합니다. 준법 의무와 기본적 자유의 보호 요구가 충돌할 때 시민 불복종이 발생할 수 있습니다.',
  ],
];
export function QuestionFourteenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ③ · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          법에 불복종하면서 법에 대한 충실성을 유지할 수 있을까?
        </h3>
        <p>
          ‘거의 정의로운 국가’, ‘다수가 공유하는 정의관’, ‘법에 대한 충실성’은
          롤스의 시민 불복종론을 가리킵니다. 발문은 학생의 답변 중 옳지 않은
          것을 요구합니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">③을 두 부분으로 나누어 확인</h4>
          <p className="mt-2">공유된 정의관에 근거한다 → 옳음</p>
          <p>헌법 체계에 저항한다 → 옳지 않음</p>
          <p className="mt-2">
            헌법 체계의 정당성을 인정하는 태도와 개별 법·정책에 대한 불복종은
            양립할 수 있습니다. 이 둘을 같은 대상으로 읽지 않는 것이 핵심입니다.
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
export function QuestionFourteenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        시민 참여와 법에 대한 충실성의 관계
      </h3>
      <p>
        공식 배점은 2.5점입니다. 롤스의 입장에서 시민 불복종의 전제·근거·방식을
        적용하는 문항입니다. 아래는 제시문과 선지를 바탕으로 한 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 헌법 체계와 개별 법·정책 구별</h4>
        <p className="mt-3">
          ③의 앞부분은 제시문의 표현과 일치하지만, 그것만으로 전체 문장을 옳다고
          판단할 수 없습니다. 공유된 정의관에 호소하는 목적은 심각한 부정의의
          시정입니다. 헌법 체계 자체의 정당성을 부정하는 저항과 구별합니다.
        </p>
        <p className="mt-3">
          법이나 정책을 비판하는 모든 행위를 반체제적 행동으로 간주해서도 안
          됩니다. 이 문항은 입헌 질서를 존중하면서 그 안의 부정의를 고치는 시민
          참여를 설명합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 합법성과 도덕적 정당성 구별</h4>
        <p className="mt-3">
          시민 불복종은 위법 행위이지만 일정한 조건에서 도덕적으로 정당화될 수
          있습니다. ‘법에 대한 충실성’을 ‘모든 개별 법을 언제나 준수함’으로
          해석하면 ④를 잘못 판단하게 됩니다. 공개적·비폭력적 방식과 법적 결과를
          감수하는 태도가 중요합니다.
        </p>
        <p className="mt-3">
          이것은 철학적 정당화에 대한 설명입니다. 시민 불복종이라는 이유만으로
          법적 처벌이 면제되는 합법적 권리라고 설명하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 개인의 신념과 공적인 정당화 근거 구별
        </h4>
        <p className="mt-3">
          롤스는 다수가 공유하는 정치적 정의관에 호소할 것을 강조합니다. 개인적
          양심이나 종교적 신념이 행동의 동기가 될 수 없다는 뜻은 아닙니다.
          그것만으로 다른 시민에게 불복종을 정당화하는 근거가 충분하다고 보지
          않는다는 뜻입니다.
        </p>
        <p className="mt-3">
          또한 항의하는 법과 실제로 위반하는 법이 반드시 같을 필요는 없습니다.
          간접적 시민 불복종도 고려하므로 ‘항의 대상인 법만 위반해야 한다’는
          단정은 피해야 합니다.
        </p>
        <a
          className={link}
          href="https://philosophy.hku.hk/courses/law/Rawls%20Civil%20Disobedience.htm"
          target="_blank"
          rel="noreferrer"
        >
          홍콩대학교 강의 자료 · 롤스의 시민 불복종 원문 발췌 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 이 문항의 범위와 심화 학습</h4>
        <p className="mt-3">
          핵심은 심각한 부정의, 공유된 정의관, 비폭력·공개성, 법에 대한
          충실성입니다. 모든 부정의가 곧 불복종의 충분한 이유가 되는 것은
          아닙니다. 다만 ‘차등의 원칙을 위반한 법은 어떤 경우에도 관련될 수
          없다’처럼 법의 다른 내용과 직접·간접 불복종의 구별을 지우는 암기도
          피합니다.
        </p>
        <p className="mt-3">
          다른 시민 불복종 이론까지 롤스와 동일하다고 일반화하지 않습니다.
          배점만으로 최고난도나 정해진 풀이 시간을 확정하기보다, 각 조건을
          사례에 적용할 수 있는지 확인합니다.
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
          공식 정답표의 교육과정 근거는 이 성취기준입니다. 기본적 자유의 보장,
          헌법 질서, 시민 참여를 연결해 이해합니다.
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
          <li>‘옳지 않은 것’이라는 발문 조건 먼저 표시하기</li>
          <li>시민 불복종의 전제·근거·목적·방식을 나누어 정리하기</li>
          <li>헌법 체계의 정당성과 개별 법의 정당성 구별하기</li>
          <li>위법성과 도덕적 정당성이 양립할 수 있음을 설명하기</li>
          <li>선지의 앞부분과 뒷부분을 각각 검증하기</li>
        </ol>
        <p className="mt-3">
          관련 기출은 공통 논점을 연습하는 연결입니다. 확인되지 않은 연구의
          영향이나 직접적인 출제 계보로 단정하지 않습니다.
        </p>
      </section>
    </div>
  );
}
export function QuestionFourteenRelated() {
  const items = [
    {
      file: '232343-1.png',
      connection:
        '공식 14번과 같이 롤스의 거의 정의로운 사회를 전제로 시민 불복종을 판단합니다. 비폭력적 위법 행위가 헌법 질서를 부정하는 혁명과 어떻게 다른지 확인합니다.',
      width: 2856,
      height: 2409,
      title: '2026학년도 대학수학능력시험 · 생활과 윤리 9번',
      date: '고3 · 평가원 · 제공된 출처 기준',
      answer: '⑤',
      text: '롤스는 시민 불복종이 가져올 무질서의 가능성도 고려합니다. 정당한 요구를 가진 집단들이 동시에 행동할 때 생길 혼란을 고려하여 불복종의 범위와 실행을 조정할 필요가 있으므로 ⑤가 옳습니다. 공유된 정치적 원칙에 근거할 수 있고 법에 대한 충실성도 유지합니다. 거의 정의로운 사회에서도 헌법 원칙의 위반은 존재할 수 있습니다.',
    },
    {
      file: '216231-1.png',
      connection:
        '공식 14번의 헌법 체계에 대한 저항 여부를 묻는 선지와 연결됩니다. 시민 불복종이 위법 행위이면서도 입헌 체제의 정의를 지키려는 행위라는 두 층위를 구별합니다.',
      width: 2801,
      height: 3212,
      title: '2020년 4월 전국연합학력평가 · 생활과 윤리 12번',
      date: '고3 · 교육청 · 제공된 출처 기준',
      answer: '① · ㄱ, ㄷ',
      text: '거의 정의로운 사회에서 정당화될 수 있는 행위라는 ㄱ과 공공의 정의관에 근거한다는 ㄷ에 긍정합니다. 제시문은 공정한 기회균등의 침해도 언급하므로 평등한 자유의 원칙 위반만으로 한정한 ㄴ은 틀립니다. 시민 불복종은 위법 행위이므로 합법적이라고 한 ㄹ도 틀립니다.',
    },
    {
      file: '210352-1.png',
      connection:
        '공식 14번에 적용되는 시민 불복종의 정당화 조건을 개별 항목으로 점검합니다. 공유된 정의관·공개성·처벌 감수·최후 수단·비폭력성을 구별하는 연습입니다.',
      width: 1989,
      height: 1656,
      title: '생활과 윤리 8번 · 시민 불복종의 정당화 조건',
      date: '2017년 11월 · 제공된 시행 정보 기준 · 학년 확인 전',
      answer: '⑤ · ㉤',
      text: '목적 달성을 위해 폭력 사용을 허용해야 한다는 ㉤이 롤스의 비폭력적 시민 불복종에 어긋납니다. 공유된 정의관, 공공성과 공개성, 처벌 감수, 합법적 방법이 소용없을 때의 최후 수단이라는 나머지 항목과 대조합니다.',
    },
    {
      file: '126102-1.png',
      connection:
        '추가 심화 자료입니다. 공식 14번의 불복종 대상과 정당화 범위를 더 세밀하게 검토하며, 직접·간접 불복종에서 항의 대상 법과 실제 위반하는 법이 반드시 같지는 않음을 확인합니다.',
      width: 2791,
      height: 2127,
      title: '생활과 윤리 3번 · 직접·간접 시민 불복종',
      date: '시행 연월·기관 확인 전',
      answer: '⑤',
      text: '제시문은 직접적 불복종뿐 아니라 간접적 불복종도 인정합니다. 차등의 원칙을 위반한 법이라도 다른 기본적 자유의 침해가 함께 있거나 간접적 불복종에서 위반하는 법으로 관련될 수 있으므로, 그 법이라는 이유만으로 항상 제외할 수는 없습니다. ⑤를 차등의 원칙 위반만으로 곧바로 정당화된다는 뜻으로 읽지 않습니다. 항의 대상 법만 위반해야 한다는 ③, 준법 의무가 절대적이라는 ④는 틀립니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        롤스의 시민 불복종을 비교하는 유사 기출 4문항
      </h3>
      <p>
        법에 대한 충실성, 위법성, 정당화 조건, 직접·간접 불복종의 차이를
        연습합니다.
      </p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/14/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 14번과의 연결
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
        해설은 원문 이미지에 근거한 SN 풀이입니다. 확인되지 않은 시행 정보는
        임의로 보충하지 않았습니다.
      </p>
    </div>
  );
}
