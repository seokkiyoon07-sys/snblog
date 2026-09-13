import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionTwentyFourSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ④ · t₂, 중성</h3>
        <section className={card}>
          <h4 className="font-bold">1. 구경꾼 이온으로 농도비 구하기</h4>
          <p>
            (가)의 네 이온은 Cl⁻, Na⁺, K⁺와 반응 후 남은 H⁺ 또는 OH⁻입니다.
            원그래프의 네 비율이 같으므로 반응하지 않는 Cl⁻·Na⁺·K⁺의 수도
            같습니다.
          </p>
          <p>
            각 농도를 a, b, c라 하면 10a=15b=30c입니다. 따라서 HCl:NaOH:KOH의
            농도비는 3:2:1입니다. 아래에서는 공통 단위를 생략한 상대량으로
            계산합니다. 30·55 등은 실제 이온이나 분자 30개·55개라는 뜻이
            아닙니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">2. 중화로 생성된 물과 남은 이온</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th>용액</th>
                  <th>H⁺ 공급량</th>
                  <th>OH⁻ 공급량</th>
                  <th>생성된 물</th>
                  <th>남은 이온</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>(가)</td>
                  <td>10×3=30</td>
                  <td>15×2+30=60</td>
                  <td>30</td>
                  <td>OH⁻ 30</td>
                </tr>
                <tr>
                  <td>(나)</td>
                  <td>20×3=60</td>
                  <td>20×2+15=55</td>
                  <td>55</td>
                  <td>H⁺ 5</td>
                </tr>
                <tr>
                  <td>(다)</td>
                  <td>25×3=75</td>
                  <td>15×2+15=45</td>
                  <td>45</td>
                  <td>H⁺ 30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            H⁺와 OH⁻는 1:1로 반응하므로 공급량 중 적은 쪽만큼 물이 생성됩니다.
            (가)에는 Cl⁻·Na⁺·K⁺·OH⁻가 각각 상대량 30씩 남아 원그래프와
            일치합니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">3. 최고 온도와 재혼합 액성</h4>
          <p>
            초기 온도는 같고 전체 부피는 모두 55 mL입니다. 이 문항의 중화열
            모형에서 같은 부피의 용액은 생성된 물의 양이 많을수록 온도 상승이
            크므로 t₂&gt;t₃&gt;t₁입니다. 엄밀히 비례하는 것은 초기 온도에서의
            상승량이며 최고 온도 자체가 아닙니다.
          </p>
          <p>
            (가)의 OH⁻ 30과 (다)의 H⁺ 30이 추가로 반응하므로 두 용액 전체를
            섞으면 중성입니다. 따라서 ㉠=t₂, ㉡=중성입니다.
          </p>
          <p>
            세 표본 중 온도가 가장 높은 (나)도 H⁺가 5 남아 산성입니다. ‘관측값
            중 최고 온도’만으로 중성이라고 판단하면 안 됩니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionTwentyFourAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 보존되는 이온에서 잉여량까지
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 원그래프를 식으로 바꾸기</h4>
        <p>
          중화에 직접 참여하지 않는 세 이온의 양은 원래 용액의 농도×부피로
          정해집니다. 네 등분에서 10a=15b=30c를 끌어내면 농도를 각각 구하지 않고
          비만으로 풀이가 가능합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 물 생성량과 온도 상승 구별</h4>
        <p>
          물 생성량은 H⁺와 OH⁻ 중 적은 양으로 결정됩니다. 온도 상승을 비교할
          때는 전체 용액의 양도 고려해야 합니다. 여기서는 초기 온도와 총부피가
          같아 생성량 30:55:45만 비교할 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 액성의 이름보다 잉여 이온의 양</h4>
        <p>
          산성과 염기성을 섞는다고 반드시 중성이 되지는 않습니다. (가)와 (다)에
          남은 OH⁻와 H⁺의 양이 같은지 확인해야 합니다. 생성된 물의 양과 남은
          이온의 양을 별도로 기록하면 재혼합까지 추적할 수 있습니다.
        </p>
      </section>
      <p>변형문제는 SNargen에서 제작합니다.</p>
    </div>
  );
}
const related = [
  {
    id: '169148-1',
    width: 2775,
    height: 2155,
    source: '2018학년도 10월 고3 학력평가 · 화학Ⅰ · 18번 (제공 원고 기준)',
    title: '세 수용액 혼합과 잉여 이온 농도',
    status: '직접 연결 · 3종 혼합 / 정량 추론 심화',
    connection:
      'HCl·NaOH·KOH의 세 용액과 남은 H⁺·OH⁻ 계산이 직접 연결됩니다. 원그래프 대신 단위 부피당 잉여 이온 수로 농도를 역산하며, 온도는 묻지 않습니다.',
    answer: '① · 0.4',
    solution:
      'HCl 1 mL가 공급하는 H⁺ 수를 aN, NaOH 1 mL와 KOH 1 mL가 공급하는 OH⁻ 수를 각각 bN, cN으로 둡니다. N은 표에 제시된 이온 수의 기준량이며 a, b, c는 그 배수입니다. 이후 이온 수는 N의 배수로 계산합니다. (가)와 (나)의 단위 부피당 잉여 이온 수에서 |a−b|=4, |a−3b|=4를 얻으며, 양의 농도를 만족하는 해는 a=8, b=4입니다. (다)는 H⁺ 80N, NaOH의 OH⁻ 120N, KOH의 OH⁻ 10cN을 공급합니다. 남은 OH⁻를 총부피 50 mL로 나누면 (−80+120+10c)/50=1이므로 c=1입니다. (라)의 잉여 OH⁻는 (−160+160+40)N=40N이고 총부피는 100 mL이므로 단위 부피당 0.4N, 즉 x=0.4입니다.',
  },
  {
    id: '178749-1',
    width: 2761,
    height: 2803,
    source: '2024학년도 3월 고2 학력평가 · 화학Ⅰ · 19번 (제공 원고 기준)',
    title: '온도·이온 수로 혼합 용액 추론',
    status: '직접 연결 · 일정 총부피와 중화량',
    connection:
      '총부피를 고정하여 물 생성량과 온도를 연결합니다. 다만 산·염기 두 종류이며, 세 액성이 각각 한 번씩 나타난다는 추가 조건이 있습니다. 예시문항 (나)는 최고 온도여도 산성이므로 기출의 중성 결론을 그대로 옮기지 않습니다.',
    answer: '① · ㄱ',
    solution:
      '세 용액이 각각 산성·중성·염기성이고 모두 12 mL이므로 가장 높은 온도의 (나)가 중성입니다. 산·염기 농도는 같고 (나)의 전체 이온 수 12N으로부터 각 원액 1 mL당 이온 종류별 N입니다. 물 생성량은 (가) 4N, (다) 2N으로 2배이므로 ㄴ은 틀립니다. 전체 이온 수는 (가) 16N, (다) 20N이므로 x+y=36으로 ㄷ도 틀립니다.',
  },
  {
    id: '171370-1',
    width: 2853,
    height: 2449,
    source: '2019학년도 11월 고1 학력평가 · 통합과학 · 15번 (제공 원고 기준)',
    title: '이온 종류와 중화 후 온도',
    status: '직접 연결 · 온도 비교의 부피 조건',
    connection:
      '물 생성량·액성을 비교하는 원리는 같습니다. 그러나 총부피가 15·20·30 mL로 달라 원문처럼 생성된 물의 양만 비교해서는 안 됩니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      '같은 농도에서 물 생성량은 5:10:10, 총부피는 15:20:30이므로 온도 상승은 1/3:1/2:1/3입니다. t₂>t₁=t₃이므로 ㄱ은 옳습니다. (가)는 H⁺가 남아 Mg를 넣으면 수소가 발생하므로 ㄴ은 옳습니다. (다)는 OH⁻가 남은 염기성이므로 ㄷ은 틀립니다.',
  },
  {
    id: '146982-1',
    width: 2737,
    height: 2278,
    source: '2007학년도 3월 고3 학력평가 · 화학Ⅰ · 2번 (제공 원고 기준)',
    title: '부피비와 온도 상승으로 중화점 찾기',
    status: '직접 연결 · 중화열과 잉여 이온',
    connection:
      '총부피 60 mL를 고정하고 온도 상승으로 반응량을 비교하는 구조가 같습니다. 원문에 없는 전기 전도도와 Mg 반응 판단이 추가됩니다.',
    answer: '③',
    solution:
      '초기 18℃에서 A·B의 상승량은 3·6℃, D·E는 3·1.5℃입니다. 이로부터 NaOH:HCl 농도비는 2:1이며 B가 중성입니다. C는 염기성이고 온도는 22.5℃이므로 ①·②는 틀립니다. B는 전기 전도도가 최소이므로 ③이 옳습니다. D는 염기성이므로 ④는 틀립니다. 생성된 물은 A가 E의 2배이므로 ⑤도 틀립니다.',
  },
];

export function ScienceQuestionTwentyFourRelated() {
  const intro =
    '기출 PNG 4개를 모두 연결했습니다. 세 용액 혼합, 중화열, 남은 이온의 양이라는 풀이 원리에 직접 연결됩니다. 다만 원그래프와 재혼합까지 모두 동일한 문항은 아니며, 총부피·중성 조건·추가 개념의 차이를 각각 표시했습니다. 시험 정보는 제공 원고 기준입니다.';
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>{intro}</p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/24/' +
          item.id +
          '.png';
        return (
          <section key={item.id} className={card}>
            <p className="text-xs">{item.source}</p>
            <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
            <ScienceSimilarityComment
              status={item.status}
              connection={item.connection}
            />
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={item.title + ' 원문 크게 보기'}
            >
              <Image
                src={src}
                width={item.width}
                height={item.height}
                alt={item.title}
                sizes="(max-width: 768px) 100vw, 800px"
                className="h-auto w-full rounded-xl bg-white"
              />
            </a>
            <a
              href={src}
              download={item.id + '.png'}
              className="mt-3 inline-block underline"
            >
              문제 PNG 다운로드
            </a>
            <details className="mt-4">
              <summary className="cursor-pointer font-bold">
                SN 풀이 보기
              </summary>
              <p className="mt-3 font-bold">정답 {item.answer}</p>
              <p>{item.solution}</p>
            </details>
          </section>
        );
      })}
    </div>
  );
}
