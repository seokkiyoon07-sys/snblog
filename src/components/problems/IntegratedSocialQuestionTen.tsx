import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';
const documents = [
  [
    '② · 권리 장전',
    '1689년 · 영국',
    '명예혁명 이후 윌리엄과 메리가 승인한 문서입니다. 왕권을 제한하고 의회의 권한과 권리 보장을 강화했습니다. 정답입니다.',
  ],
  [
    '⑤ · 인간과 시민의 권리 선언',
    '1789년 · 프랑스',
    '프랑스 혁명 과정에서 자유·평등·주권 등의 원리를 선언했습니다. 영국의 명예혁명과 구별합니다.',
  ],
  [
    '① · 인민헌장',
    '1838년 · 영국',
    '차티스트 운동의 요구를 담은 문서입니다. 성인 남성의 보통 선거권, 비밀 투표 등 참정권 확대와 연결됩니다. 명예혁명보다 뒤의 사건입니다.',
  ],
  [
    '③ · 바이마르 헌법',
    '1919년 · 독일',
    '제1차 세계대전 이후 제정되어 사회권 보장의 중요한 사례로 다룹니다. 17세기 영국의 사건과 국가·시기가 모두 다릅니다.',
  ],
  [
    '④ · 세계 인권 선언',
    '1948년 · 국제연합',
    '유엔 총회가 채택한 보편적 인권 기준입니다. 시민적·정치적 권리와 경제적·사회적·문화적 권리를 함께 담습니다.',
  ],
];
export function QuestionTenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ② · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          제임스 2세 → 윌리엄·메리 → 권리 장전
        </h3>
        <p>
          국왕의 가톨릭 우대와 의회를 무시한 정책, 제임스 2세의 도주, 윌리엄과
          메리의 공동 즉위는 명예혁명을 가리킵니다. 의회의 요구에 따라 이들이
          승인한 문서는 1689년의 권리 장전입니다.
        </p>
        <p>
          단서 하나만으로 판단하기보다 인물과 사건의 전개를 함께 확인합니다.
          모든 선지는 인권 발전과 관련 있지만, 빈칸은 이 사건 직후의 결과를
          요구합니다.
        </p>
        {documents.map(([name, date, text]) => (
          <section key={name} className={card}>
            <h4 className="font-bold">{name}</h4>
            <p className="text-emerald-800 dark:text-emerald-200">{date}</p>
            <p className="mt-2">{text}</p>
          </section>
        ))}
        <a
          className={link}
          href="https://www.parliament.uk/about/living-heritage/evolutionofparliament/parliamentaryauthority/revolution/overview/billofrights/"
          target="_blank"
          rel="noreferrer"
        >
          영국 의회 · 1689년 권리 장전 ↗
        </a>
      </div>
    </details>
  );
}
export function QuestionTenAnalysis() {
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        사료의 인물·시기와 권리 문서 연결하기
      </h3>
      <p>
        공식 배점은 1.5점입니다. 사료와 해설의 단서로 명예혁명을 식별하고,
        사건의 결과를 다른 시대의 문서와 구별하는 문항입니다. 아래는 원문에
        근거한 SN의 분석입니다.
      </p>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 명예혁명과 입헌주의의 발전</h4>
        <p className="mt-3">
          왕이 의회의 동의 없이 정책을 추진하려 한다는 불만과 의회의 요구를
          수용하는 새 군주의 모습을 연결합니다. 권리 장전은 왕권의 자의적 행사를
          제한하고 의회의 권한을 강화한 중요한 계기입니다.
        </p>
        <p className="mt-3">
          이 사건 하나로 오늘날의 민주주의와 의원내각제가 모두 완성되었다고
          설명하지 않습니다. 또한 ‘피 한 방울도 흘리지 않았다’는 표현은 당시의
          지역별 충돌을 지우는 과도한 일반화이므로 사용하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          2. 문서의 시기·국가·핵심 요구 비교
        </h4>
        <p className="mt-3">
          권리 장전 → 프랑스 인권 선언 → 인민헌장 → 바이마르 헌법 → 세계 인권
          선언 순으로 정리합니다. 같은 영국 문서라도 권리 장전은 왕권 제한,
          인민헌장은 참정권 확대라는 맥락이 다릅니다.
        </p>
        <p className="mt-3">
          정답을 찾는 데 모든 문서의 세부 조문이 필요한 것은 아닙니다. 오답까지
          복습할 때는 각 문서의 배경과 권리 보장의 변화를 함께 설명하는 연습이
          유용합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">
          3. 인권의 발전을 지나치게 단순화하지 않기
        </h4>
        <p className="mt-3">
          바이마르 헌법은 사회권 보장의 대표 사례이지만 ‘세계 최초’라고 단정하면
          앞선 1917년 멕시코 헌법의 노동·사회적 권리 규정을 놓치게 됩니다.
        </p>
        <a
          className={link}
          href="https://www.constitucion1917.gob.mx/en/Constitucion1917/Congreso_Constituyente_y_Constitucion_de_1917"
          target="_blank"
          rel="noreferrer"
        >
          멕시코 정부 · 1917년 헌법의 역사 ↗
        </a>
        <p className="mt-3">
          세계 인권 선언은 자유권·참정권뿐 아니라 사회보장·노동·교육 등의 권리를
          함께 담은 문서입니다. 이를 ‘3세대 연대권 문서’ 하나로 분류하지
          않습니다. 새로운 권리의 강조가 앞선 권리를 대체하는 것도 아닙니다.
        </p>
        <a
          className={link}
          href="https://www.un.org/en/about-us/universal-declaration-of-human-rights/"
          target="_blank"
          rel="noreferrer"
        >
          유엔 · 세계 인권 선언 원문 ↗
        </a>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 통합사회 교육과정의 위치</h4>
        <p className="mt-3 font-bold">
          통합사회2 · 인권 보장과 헌법 · [10통사2-01-01]
        </p>
        <blockquote className="mt-3 border-l-2 border-emerald-500 pl-4">
          근대 시민 혁명 등을 통해 확립되어 온 인권의 의미와 변화 양상을
          이해하고, 현대 사회에서 주거, 안전, 환경, 문화 등 다양한 영역으로
          인권이 확장되고 있는 사례를 조사한다.
        </blockquote>
        <p className="mt-3">
          이 문항은 인권의 역사적 형성 부분과 연결됩니다. 사료 속 정치적 갈등을
          권리 보장과 권력 제한의 문제로 이해하는 것이 핵심입니다.
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
          <li>사료에서 인물·국가·정치적 요구 표시하기</li>
          <li>사건의 배경과 결과를 시간 순서로 구별하기</li>
          <li>권리 청원·권리 장전·인민헌장의 차이 설명하기</li>
          <li>
            자유 보장·참정권 확대·사회권 보장·인권의 국제적 기준을 문서와
            연결하기
          </li>
        </ol>
        <p className="mt-3">
          유사 기출은 공통 단서와 개념을 연습하는 연결입니다. 직접 차용이나 특정
          연구의 영향, 정해진 초 단위 풀이 시간은 확인된 출제 사실로 제시하지
          않습니다.
        </p>
      </section>
    </div>
  );
}
export function QuestionTenRelated() {
  const items = [
    {
      file: '223651-1.png',
      connection:
        '공식 10번과 같이 제임스 2세의 정책, 윌리엄·메리의 즉위라는 사료 단서로 명예혁명을 식별하고 권리 장전 승인으로 연결합니다. 역사적 사건과 인권 보장 문서를 짝짓는 판단 방식이 같습니다.',
      width: 2793,
      height: 3217,
      title: '2022년 10월 전국연합학력평가 · 세계사 7번',
      date: '고3 · 교육청',
      answer: '②',
      text: '윌리엄과 메리의 공동 즉위, 제임스 2세의 프랑스 망명으로 명예혁명을 식별합니다. 결과는 권리 장전 승인입니다. 대헌장, 스튜어트 왕조 개창, 크롬웰의 항해법, 심사법·인신 보호법은 해당 혁명의 결과가 아닙니다.',
    },
    {
      file: '227682-1.png',
      connection:
        '공식 10번의 인민헌장 오답 선지를 점검하는 기출입니다. 노동자의 선거권 확대 요구를 참정권의 발전과 연결하여, 명예혁명·권리 장전과 시기 및 권리의 성격을 구별합니다.',
      width: 2798,
      height: 2458,
      title: '2024년 6월 전국연합학력평가 · 통합사회 13번',
      date: '고1 · 교육청',
      answer: '②',
      text: '인민헌장은 1838년 노동자들의 선거권 확대 요구와 연결되어 참정권 확장의 계기가 되었습니다. 명예혁명과 미국 독립 선언보다 뒤의 문서이며, 국제적 인권 기준을 제시한 세계 인권 선언과도 구별합니다. 당시 요구를 모든 사회적 차별의 철폐로 확대하지 않습니다.',
    },
    {
      file: '232897-1.png',
      connection:
        '추가 연계 자료입니다. 공식 10번과 마찬가지로 국왕과 의회의 갈등을 사료로 읽지만, 찰스 1세·권리 청원을 다룹니다. 제임스 2세·권리 장전과 혼동하지 않는 연습이 됩니다.',
      width: 2683,
      height: 1900,
      title: '세계사 13번 · 찰스 1세와 의회의 갈등',
      date: '시행 연월·기관 확인 전',
      answer: '③',
      text: '자의적 과세, 왕당파와 의회파의 내전, 국왕에 대한 고발은 찰스 1세 시기와 연결됩니다. 재위 중인 1628년에 권리 청원이 제출되어 ③이 옳습니다. 명예혁명의 제임스 2세와 구별하고, 인민헌장·대륙 봉쇄령·심사법·인신 보호법도 시기가 다름을 확인합니다.',
    },
    {
      file: '309610-1.png',
      connection:
        '공식 10번의 바이마르 헌법 선지와 연결됩니다. 자유권·사회권·청구권의 성격을 구별하여, 사회권의 발전을 근대 자유권의 확립과 바꾸어 읽는 오류를 점검합니다.',
      width: 2890,
      height: 2678,
      title: '2021년 3월 전국연합학력평가 · 정치와 법 10번',
      date: '고2 · 교육청 · 제공된 출처 기준',
      answer: '⑤',
      text: '실질적 평등을 추구하는 A는 사회권, 다른 기본권을 위한 수단적·절차적 권리인 C는 청구권, 남은 B는 자유권입니다. 따라서 B의 소극적·방어적 성격을 설명한 ⑤가 옳습니다. 교육을 받을 권리는 사회권이며, 바이마르 헌법을 자유권의 최초 규정으로 보는 ②는 틀립니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        사료와 인권 문서를 연결하는 유사 기출 4문항
      </h3>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/10/${item.file}`;
        return (
          <section key={item.file} className={card}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 10번과의 연결
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
        확인되지 않은 시행 정보는 임의로 보충하지 않았습니다. 유사 기출 해설은
        원문 이미지에 근거한 SN 풀이입니다.
      </p>
    </div>
  );
}
