import Image from 'next/image';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const choices = [
  [
    '① · 옳지 않음',
    '(나) 중국의 노년층 비율은 그래프에서 약 13%로 읽힙니다. 65세 이상 비율 20% 이상을 기준으로 하는 초고령 사회에 해당하지 않습니다. 현재 수치가 아니라 제시 자료를 기준으로 판단합니다.',
  ],
  [
    '② · 옳음 — 정답',
    '생산 가능 인구 비율은 대한민국이 약 72%, (다) 필리핀이 약 64%입니다. 그러나 필리핀의 총인구는 약 1억 명 이상으로 대한민국 약 5천만 명의 두 배 이상입니다. 대략 1억 명 × 0.64는 6,400만 명, 5천만 명 × 0.72는 3,600만 명이므로 생산 가능 인구 수는 필리핀이 더 많습니다.',
  ],
  [
    '③ · 옳지 않음',
    '(가) 일본은 (나) 중국보다 중위 연령이 높습니다. 중위 연령은 인구를 나이순으로 나열했을 때 가운데에 해당하는 연령입니다. 다만 유소년층·노년층의 비율 두 개만으로 중위 연령을 정확히 산출할 수는 없으며, 국가별 인구 구조에 대한 배경 지식을 함께 적용하는 선지입니다.',
  ],
  [
    '④ · 옳지 않음',
    '총부양비는 (유소년 인구 + 노년 인구) ÷ 생산 가능 인구 × 100입니다. (가)는 대략 42/58 × 100 ≈ 72, (다)는 36/64 × 100 ≈ 56이므로 (가)가 더 높습니다. 좌표를 반올림한 비교용 계산이며 정확한 통계값은 아닙니다.',
  ],
  [
    '⑤ · 옳지 않음',
    '자료가 제시된 시기의 GDP 규모는 중국 > 일본 > 필리핀입니다. GDP는 1인당 GDP와 총인구를 함께 고려해야 하므로 색상만으로 순위를 정할 수 없습니다. 특히 일본의 색상 구간은 3만 달러 초과로 상한이 없어, 범례의 구간과 원의 크기만으로 중국·일본의 순서를 수학적으로 확정할 수는 없습니다. 국가별 경제 규모에 대한 배경 지식이 필요합니다.',
  ],
];
export function QuestionTwentyFourSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className="mt-5 space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
        <p className="text-lg font-bold text-emerald-800 dark:text-emerald-200">
          정답 ② · 2점 · 공식 정답표 대조 완료
        </p>
        <h3 className="text-xl font-bold">
          비율이 작아도 인구 수는 더 많을 수 있다
        </h3>
        <p>
          지도에 표시된 국가는 대한민국·일본·중국·필리핀입니다. 원의 중심 좌표는
          유소년층·노년층 비율, 크기는 총인구, 색상은 1인당 GDP 구간을
          나타냅니다. 원의 위쪽 끝을 노년층 비율로 읽지 않도록 주의합니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2">국가</th>
                <th className="p-2">유소년층</th>
                <th className="p-2">노년층</th>
                <th className="p-2">생산 가능 인구 비율</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['대한민국', '약 12%', '약 16%', '약 72%'],
                ['(가) 일본', '약 12%', '약 30%', '약 58%'],
                ['(나) 중국', '약 18%', '약 13%', '약 69%'],
                ['(다) 필리핀', '약 31%', '약 5%', '약 64%'],
              ].map(row => (
                <tr key={row[0]}>
                  {row.map(c => (
                    <td className="p-2" key={c}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          위 수치는 그래프 중심 좌표를 반올림한 근삿값입니다. (가)는 높은 노년층
          비율, (나)는 압도적으로 큰 총인구, (다)는 높은 유소년층 비율과 낮은
          1인당 GDP 구간을 지도와 연결하여 식별합니다.
        </p>
        {choices.map(([title, text]) => (
          <section className={card} key={title}>
            <h4 className="font-bold">{title}</h4>
            <p>{text}</p>
          </section>
        ))}
        <p className="text-xs">
          배경 통계 확인:{' '}
          <a
            className="underline"
            href="https://digitallibrary.un.org/nanna/record/4067517/files/ST_ESCAP_3041-EN.pdf?registerDownload=1&amp;version=1&amp;withMetadata=0&amp;withWatermark=0"
            target="_blank"
            rel="noreferrer"
          >
            UN 아시아·태평양 고령화 보고서(2022)
          </a>
          ,{' '}
          <a
            className="underline"
            href="https://databank.worldbank.org/embed/gdp/id/1cfe7472?review=y"
            target="_blank"
            rel="noreferrer"
          >
            세계은행 GDP 통계
          </a>
          . 제시문의 좌표를 최신 통계로 바꾸어 풀지 않습니다.
        </p>
      </div>
    </details>
  );
}
export function QuestionTwentyFourAnalysis() {
  return (
    <div className="space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        네 가지 지표를 읽고 비율을 인구 수로 환산하기
      </h3>
      <section className={card}>
        <h4 className="text-lg font-bold">1. 문항 구조 역분해</h4>
        <p>
          가로축·세로축·원의 크기·색상이 각각 다른 정보를 전달합니다. 지도에서
          국가를 확인한 뒤, 비율을 비교할 때는 좌표를, 인구 수를 비교할 때는
          총인구까지 함께 사용합니다. 정답 ②의 핵심은 생산 가능 인구 비율이 높은
          국가와 생산 가능 인구 수가 많은 국가를 구별하는 것입니다.
        </p>
        <p>
          이는 문항에 근거한 SN의 분석입니다. 배점이 2점이라는 사실만으로 난도나
          정답률을 단정할 수는 없습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">2. 분모와 단위를 확인하는 공식</h4>
        <ul className="list-disc space-y-2 pl-5">
          <li>생산 가능 인구 비율(%) = 100 − 유소년층 비율 − 노년층 비율</li>
          <li>생산 가능 인구 수 = 총인구 × 생산 가능 인구 비율 ÷ 100</li>
          <li>총부양비 = (유소년 인구 + 노년 인구) ÷ 생산 가능 인구 × 100</li>
          <li>노령화 지수 = 노년 인구 ÷ 유소년 인구 × 100</li>
        </ul>
        <p>
          생산 가능 인구는 연령 구간에 따른 분류이며 실제 취업자 수와 같지
          않습니다. ‘100에서 비율을 뺀 값’을 인구 수라고 쓰거나 부양비 계산에서
          ×100을 생략하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">3. 자료 해석의 범위</h4>
        <p>
          ②와 ④는 근사적인 좌표와 인구 규모로 비교할 수 있습니다. ③의 중위
          연령은 상세한 연령 분포가 있어야 계산할 수 있고, ⑤의 GDP는 정확한
          1인당 GDP와 총인구가 필요합니다. 국가 식별 후 적용하는 지식과 그래프
          자체에서 도출하는 결론을 구분하는 것이 엄밀한 풀이입니다.
        </p>
        <p>
          원의 크기는 범례와 비교합니다. 반지름이 두 배라고 총인구가 두 배라고
          가정하거나, 색상 구간을 임의의 정확한 금액으로 치환하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">4. 통합사회와 성취기준</h4>
        <p>
          지도의 국가 위치, 인구의 연령 구조, 경제 규모를 함께 다룹니다. 국가별
          차이를 이해하고 고령화와 부양 부담을 해석하는 데 지리적 지식과
          인구·경제 지표를 결합합니다. 네 국가의 자료만으로 경제 발전이 인구
          구조를 일방적으로 결정한다고 일반화하지 않습니다.
        </p>
        <p className="mt-3 font-bold">공식 안내 자료의 연계 성취기준</p>
        <p>
          [10통사2-05-01] 세계의 인구 분포와 구조 등에 대한 이해를 토대로 현재와
          미래의 인구 문제 양상을 파악하고, 그 해결 방안을 제안한다.
        </p>
      </section>
      <section className={card}>
        <h4 className="text-lg font-bold">5. 기출 연계와 학습 방향</h4>
        <p>
          유사 기출에서는 부양 인구를 100으로 두어 복원하는 문제, 총인구가
          변하는 문제, 국가 간 구성비를 비교하는 문제를 순서대로 연습합니다.
          폴더의 추가 인구 구조 자료까지 총 4개 원문과 SN 풀이를 수록했습니다.
          제공된 시험 출처는 별도로 표기하며 직접적인 출제 계보나 RAG 조회
          결과로 단정하지 않습니다.
        </p>
        <p>
          변형문항에서는 비율과 인구 수를 번갈아 묻되 총인구 조건을 명확히
          제시합니다. 그래프를 읽은 뒤 ‘분모가 총인구인지 생산 가능 인구인지’를
          확인하는 습관이 핵심입니다.
        </p>
      </section>
    </div>
  );
}

export function QuestionTwentyFourRelated() {
  const items = [
    {
      file: '1098-1.png',
      connection:
        '공식 24번의 총부양비와 고령화 단계 판단을 역산 형태로 확장합니다. 총부양비·노령화 지수와 일정한 부양 인구 조건을 이용해 연령층별 인구를 복원합니다.',
      width: 2845,
      height: 2947,
      title: '2021학년도 수능 · 18번',
      date: '2020년 12월 시행 · 제공된 출처 기준 · 과목명 원문 확인 필요',
      answer: '⑤',
      text: '모든 연도의 부양 인구를 100으로 두면 유소년·노인 인구는 t년 (50, 20), t+30년 (40, 24), t+60년 (28, 28)입니다. 유소년 인구의 후반 두 시점 비는 28/40=0.7, 노인 인구의 비는 28/24≈1.17이므로 ⑤가 옳습니다. 노인 인구는 첫 두 시점 사이 20% 증가합니다. 노인 비율은 약 11.8%, 14.6%, 17.9%여서 마지막 시점도 초고령 사회는 아닙니다. 유소년 비율은 마지막 시점이 가장 낮습니다.',
    },
    {
      file: '2520-1.png',
      connection:
        '공식 24번의 생산 가능 인구 비율과 인구 수를 혼동하는 함정을 심화합니다. 시점마다 총인구가 달라지므로 구성비를 인구 수로 환산한 뒤 증가량·감소량을 비교해야 합니다.',
      width: 2888,
      height: 3102,
      title: '2023년 3월 전국연합학력평가 · 사회·문화 20번',
      date: '고3 · 교육청 · 제공된 출처 기준 · 3점',
      answer: '④',
      text: 't년 총인구를 100으로 두면 각 시점 총인구는 100, 120, 80입니다. 유소년·부양·노년 인구는 차례로 (30,60,10), (24,60,36), (8,32,40)입니다. t+30년 부양 인구 비율과 t+60년 노년 인구 비율은 모두 50%이므로 ④가 옳습니다. 첫 두 시점의 부양 인구 수는 같고, 마지막 시점 노년 인구는 처음의 4배입니다. 노년 부양비는 60에서 125로 증가합니다. 증가한 노년 인구 26은 감소한 유소년 인구 16보다 큽니다.',
    },
    {
      file: '3973-1.png',
      connection:
        '공식 24번처럼 서로 다른 국가의 연령 구성비로 부양비를 비교합니다. 노년 비율이 같아도 총인구가 없으면 노년 인구 수가 같다고 할 수 없다는 비율·절댓값 구별도 같습니다.',
      width: 2878,
      height: 2829,
      title: '2022년 3월 전국연합학력평가 · 세계지리 13번',
      date: '고2 · 교육청 · 제공된 출처 기준 · 3점',
      answer: '⑤ · ㄷ, ㄹ',
      text: 'A국의 2000년 노년 부양비는 10/30×100≈33.3으로 30 미만이 아닙니다. 2020년 두 국가의 노년 비율은 25%로 같지만 총인구가 없어 인구 수가 같다고 할 수 없습니다. B국 노령화 지수는 20/35×100에서 25/35×100으로 상승합니다. 유소년 부양비는 B국이 35/45×100에서 35/40×100으로 상승하는 반면 A국은 60/30×100에서 45/30×100으로 하락합니다. 따라서 ㄷ·ㄹ이 옳습니다.',
    },
    {
      file: '182311-1.png',
      connection:
        '추가 기초 자료입니다. 공식 24번의 고령화 단계와 부양 부담 판단에 연결하여 연령 구성비의 변화로 노년 부양비를 계산합니다. 비율만으로 총인구 변화를 단정하지 않는 연습입니다.',
      width: 1969,
      height: 1722,
      title: '연령 계층별 인구 구성비 추이 · 17번',
      date: '폴더의 추가 제공 자료 · 시행 연도·과목 미확인',
      answer: '⑤',
      text: '노년 부양비는 1970년 3.1/54.4×100≈5.7에서 2020년 15.6/72×100≈21.7로 증가합니다. 따라서 생산 가능 인구의 노인 부양 부담이 커진다는 ⑤가 적절합니다. 자료의 2020년 노년 비율 15.6%는 초고령 사회 기준 20% 미만입니다. 구성비만으로 총인구 증가나 사망률 변화를 확정할 수 없으며, 유소년 비중은 감소합니다. 제시 당시 자료에 대한 해석으로 실제 현재의 통계와 구분합니다.',
    },
  ];
  return (
    <div className="space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-bold">
        인구 구조와 부양비를 묻는 유사 기출 4문항
      </h3>
      <p>인구 비율과 인구 수를 구별하고 부양비·노령화 지수를 계산합니다.</p>
      {items.map(item => {
        const src = `/problems/Integrated_Social_Studies/28examples/Similar_Questions/24/${item.file}`;
        return (
          <section className={card} key={item.file}>
            <h4 className="text-lg font-bold">{item.title}</h4>
            <p>{item.date}</p>
            <div
              data-similarity-reason
              className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 dark:border-emerald-900 dark:bg-emerald-950/30"
            >
              <p className="font-bold text-emerald-900 dark:text-emerald-200">
                유사 이유 · 공식 24번과의 연결
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
        원문 이미지에 근거한 SN 풀이입니다. 공통 개념에 따른 연결이며 직접적인
        출제 계보를 뜻하지 않습니다.
      </p>
    </div>
  );
}
