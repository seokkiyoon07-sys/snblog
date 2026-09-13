import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';

export function ScienceQuestionTwelveSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ① · ㄱ</h3>
        <p>
          반응 전에는 원 6개와 네모 3개, 반응 후에는 원 6개와 세모 2개가
          있습니다. 금속 이온이 반응하는 동안 그대로 남는 원은 구경꾼 이온
          Cl⁻입니다. 네모는 X의 양이온, 세모는 새로 생긴 Y의 양이온입니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">전기적 중성으로 a와 b 구하기</h4>
          <p>반응 전: 3a − 6 = 0이므로 a = 2입니다.</p>
          <p>반응 후: 2b − 6 = 0이므로 b = 3입니다.</p>
          <p>
            따라서 X²⁺ 3개가 사라지고 Y³⁺ 2개가 생깁니다. 양이온 수는 줄지만
            양전하의 합은 +6으로 같습니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">선지별 판단</h4>
          <p>
            <strong>ㄱ · 맞음.</strong> 원은 반응 전후 그대로 존재하는
            Cl⁻입니다.
          </p>
          <p>
            <strong>ㄴ · 틀림.</strong> Y는 산소를 얻는 것이 아니라 전자를 잃어
            산화됩니다. Y → Y³⁺ + 3e⁻입니다.
          </p>
          <p>
            <strong>ㄷ · 틀림.</strong> a : b = 2 : 3입니다. 3a = 2b에서 계수의
            비 3 : 2를 그대로 쓰면 안 됩니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">전자 이동으로 다시 확인</h4>
          <p>환원: X²⁺ + 2e⁻ → X</p>
          <p>산화: Y → Y³⁺ + 3e⁻</p>
          <p>전체: 3X²⁺ + 2Y → 3X + 2Y³⁺</p>
          <p>
            X 이온 3개가 얻는 전자 6개와 Y 원자 2개가 잃는 전자 6개가 같습니다.
            같은 금속이 +2에서 +3으로 바뀌는 반응이 아닙니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionTwelveAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 입자 수를 전하 관계로 바꾸기
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 변하지 않는 이온을 기준으로 모형 판별</h4>
        <p>
          첨가한 금속 Y에서 새 양이온이 생기고 기존 X 양이온은 금속으로
          석출됩니다. 염화 이온은 그대로 남습니다. 그림은 ‘수용액의 모든 이온’을
          나타내므로 석출된 중성 금속 X가 보이지 않아도 원자가 사라진 것은
          아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 이온 수와 전하의 합 구분</h4>
        <p>
          이온 개수 자체가 보존되는 것은 아닙니다. 각 상태의 전기적 중성을
          이용하면 3a = 6, 2b = 6입니다. 전하량 보존은 산화에서 잃은 전자와
          환원에서 얻은 전자가 같다는 반응식으로도 확인할 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 산화라는 결론과 이유를 함께 확인</h4>
        <p>
          Y가 산화된다는 설명은 맞아도 ‘산소를 얻어’라는 이유는 이 반응에 맞지
          않습니다. 산소가 직접 참여하지 않는 금속 반응에서는 전자를 잃고 얻는
          방향으로 산화·환원을 판단합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">4. 개수 비와 전하 비는 반대</h4>
        <p>
          같은 양전하의 합을 이루려면 개수가 적은 이온의 전하가 더 커야 합니다.
          X 이온 : Y 이온 = 3 : 2이므로 a : b = 2 : 3입니다.
        </p>
      </section>
      <p>
        위 내용은 원문에 대한 SN의 해석입니다. 변형문제는 SNargen에서
        제작합니다.
      </p>
    </div>
  );
}
const related = [
  {
    id: '178747-1',
    width: 2748,
    height: 3835,
    source: '2024학년도 3월 고2 교육청 · 화학Ⅰ · 17번 (제공 원고 기준)',
    title: '금속의 산화와 양이온 수 변화',
    status: '직접 유사 · 전자 이동과 3 : 2 반응비',
    connection:
      '실험 Ⅱ에서 B²⁺ 3개가 환원될 때 C 원자 2개가 C³⁺로 산화되는 관계가 원문과 직접 대응합니다. 다만 전하를 모형에서 구하는 원문과 달리 기출은 전하를 제공하고 양이온 수 변화를 판단하게 합니다.',
    answer: '① · ㄱ',
    solution:
      'Ⅰ에서 B는 전자를 잃어 B²⁺가 되므로 ㄱ은 옳습니다. Ⅱ에서 전자는 C에서 B²⁺로 이동하므로 ㄴ은 틀립니다. 3B²⁺ + 2C → 3B + 2C³⁺이므로 양이온 수는 3개에서 2개로 감소하여 ㄷ도 틀립니다.',
  },
  {
    id: '161870-1',
    width: 2748,
    height: 2706,
    source: '2015학년도 3월 고3 교육청 · 화학Ⅰ · 15번 (제공 원고 기준)',
    title: '전체 금속 이온 수 그래프로 전하 비 추론',
    status: '직접 유사 · 전하 보존 추론 / 그래프 확장',
    connection:
      '금속 이온 수 변화에서 전하 비를 구하는 원리는 같습니다. 다만 원문은 이온 모형과 Cl⁻ 수로 각각의 전하를 구하고, 이 기출은 남은 A 이온과 생성된 B 이온의 합을 그래프에서 분리해야 합니다. 실제 전하 비도 예시문항의 2 : 3과 다릅니다.',
    answer: '① · ㄴ',
    solution:
      '(가)에서 반응한 B가 2N개이므로 생성된 B 이온도 2N개입니다. 전체가 4N개이므로 남은 A 이온은 2N개여서 ㄴ은 옳습니다. 처음 A 이온 8N개 중 6N개가 환원되었으므로 전하를 각각 a, b라 하면 6Na = 2Nb, 즉 b = 3a입니다. 따라서 2배라는 ㄷ은 틀립니다. B가 산화되고 A 이온이 환원되므로 B가 A보다 산화되기 쉬워 ㄱ도 틀립니다.',
  },
];
export function ScienceQuestionTwelveRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        두 기출 모두 금속 반응의 전자 이동과 이온 수·전하 관계에 직접
        연결됩니다. 모형에서 전하를 구하는지, 주어진 전하로 개수 변화를
        구하는지, 그래프에서 잔존 이온을 계산하는지에 차이가 있습니다. 시험
        정보는 제공 원고 기준입니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/12/' +
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
