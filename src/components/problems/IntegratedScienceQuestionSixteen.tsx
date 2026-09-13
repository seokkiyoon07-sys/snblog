import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionSixteenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ① · ㄱ</h3>
        <p>
          이 실험은 자석을 묶는 개수를 달리하고, 극의 방향·놓는 높이·코일 등은
          같게 하여 측정된 유도 전류의 세기를 비교합니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">변인 정리</h4>
          <ul className="space-y-2">
            <li>
              조작 변인: 자석의 개수(A 1개, B 2개, C 3개)를 통해 달리하는
              자기장의 세기
            </li>
            <li>
              통제 조건: N극을 아래로 향하게 함, 같은 높이 h에서 가만히 놓음,
              같은 코일·전류 센서와 중심축 경로 사용
            </li>
            <li>종속 변인: 전류 센서로 측정하여 비교하는 유도 전류의 세기</li>
          </ul>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄱ · 맞음: 자기장의 세기를 달리함</h4>
          <p>
            동일한 자석을 같은 극 방향으로 1개·2개·3개씩 묶어 사용하는 것은
            자기장의 세기를 달리하기 위한 조작입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄴ · 틀림: 극의 방향은 통제 조건</h4>
          <p>
            N극을 모두 아래로 고정했으므로 자기장의 방향을 변화시키며 그 영향을
            비교하는 실험이 아닙니다. 방향을 같게 유지하여 다른 조건의 영향을
            줄이는 것입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">
            ㄷ · 틀림: 같은 높이가 같은 전환 에너지를 보장하지 않음
          </h4>
          <p>
            높이를 같게 하는 것은 낙하 조건을 맞춰 속력 차이의 영향을 줄이기
            위한 것입니다. 공기 저항과 전자기적 감속을 무시한 자유 낙하에서는
            같은 높이에서 놓은 물체의 속력이 질량과 무관합니다. 그러나 이것이
            전기 에너지로 전환되는 운동 에너지의 양까지 같게 한다는 뜻은
            아닙니다.
          </p>
          <p>
            자석 개수에 따라 질량과 자기장이 달라지며, 실제 코일 통과 중에는
            유도 전류에 따른 자기력도 운동에 영향을 줄 수 있습니다. 이
            자료만으로 통과 내내 속력이 정확히 같거나 C의 총 전환 에너지가
            반드시 가장 크다고 단정하지 않습니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionSixteenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 바꾼 조건과 고정한 조건의 목적 구분
      </h3>
      <section className={card}>
        <h4 className="font-bold">
          1. 고정한 변인으로 관계를 조사한다고 읽지 않기
        </h4>
        <p>
          극의 방향은 자기장과 관련되지만, 이 실험에서는 방향을 바꾸지
          않았습니다. 관련된 물리 개념을 떠올리는 데서 멈추지 않고 ‘무엇을
          달리했는가’를 확인해야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 통제 조건과 측정 결과 구분</h4>
        <p>
          같은 높이는 비교 조건이고 유도 전류의 세기는 측정 결과입니다. 에너지
          전환이 일어난다는 사실과 전환량을 같게 통제한다는 주장은 다릅니다.
          실험에서 직접 측정한 것은 전류이며 에너지 총량이 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 자기장의 존재보다 변화에 주목</h4>
        <p>
          자석이 낙하하면 코일을 지나는 자기 선속이 변하여 유도 전류가 생깁니다.
          강한 자석이 있다는 사실만으로 항상 전류가 흐르는 것은 아닙니다. 전류의
          크기는 자기 선속이 시간에 따라 얼마나 빠르게 변하는지와 회로 조건에
          관련됩니다.
        </p>
      </section>
      <p>
        위 내용은 원문에 대한 SN의 해석입니다. 변형문제는 SNargen에서
        제작합니다.
      </p>
    </div>
  );
}
const relatedIntro =
  '바꾼 조건·고정한 조건·측정 결과를 구별하는 탐구 설계 기출 4개입니다. 콩 꼬투리와 올챙이 문항은 통제 변인을 직접 묻고, 밀웜과 산성 비교 문항은 조작·종속 변인의 구분을 묻습니다. 16번의 변인 판단에 직접 연결되지만 낙하 높이와 속력의 물리적 관계는 본문 해설에서 별도로 확인해야 합니다. 시험 정보는 제공 원고 기준입니다.';
const related = [
  {
    id: '160232-1',
    width: 2011,
    height: 3049,
    source: '2014학년도 6월 고2 학력평가 · 생명과학Ⅰ · 2번 (제공 원고 기준)',
    title: '콩 꼬투리의 털과 곤충의 피해 정도',
    status: '직접 연결 · 통제 과정과 조작·종속 변인',
    connection:
      '기출 ㄴ은 곤충의 조건을 같게 맞추는 과정이 변인 통제인지 묻습니다. 16번의 극 방향·낙하 높이를 같게 하는 목적과 연결됩니다. 털의 개수는 달리하는 조건이고 피해 정도는 측정 결과라는 구분도 공유합니다.',
    answer: '① · ㄴ',
    solution:
      '(가)는 관찰에서 의문을 떠올린 단계이며 가설은 (나)에 있으므로 ㄱ은 틀립니다. (다)에서 동일한 조건의 곤충을 같은 시간 동안 굶기는 것은 먹이 행동에 영향을 주는 다른 조건을 맞추는 변인 통제이므로 ㄴ은 옳습니다. 털의 개수는 조작 변인이고 24시간 후 콩 꼬투리의 피해 정도가 종속 변인이므로 ㄷ은 틀립니다. 이 PNG의 ①은 ㄴ입니다.',
  },
  {
    id: '168759-1',
    width: 2814,
    height: 3543,
    source: '2018학년도 9월 고2 학력평가 · 생명과학Ⅰ · 4번 (제공 원고 기준)',
    title: '포식자 유무와 올챙이의 생장',
    status: '직접 연결 · 고정한 조건의 역할',
    connection:
      '기출 ㄴ의 수조 크기처럼 16번의 높이·극 방향은 같게 유지하는 조건입니다. 포식자의 유무를 종속 변인으로 제시하는 기출 ㄷ은 바꾼 조건과 관찰 결과를 뒤섞는 오류를 직접 묻습니다.',
    answer: '④ · ㄱ, ㄴ',
    solution:
      '가설을 세우고 실험 결과로 검증하므로 연역적 탐구이며 ㄱ은 옳습니다. 수조 크기는 같게 유지했으므로 통제 변인으로 ㄴ도 옳습니다. 포식자 유무는 조작 변인이고 먹이 활동 시간과 생장률이 종속 변인이므로 ㄷ은 틀립니다. 포식자는 그물망 안에 있어 직접 잡아먹는 효과와도 구분됩니다.',
  },
  {
    id: '178715-1',
    width: 2820,
    height: 2302,
    source: '2024학년도 3월 고3 학력평가 · 생명과학Ⅰ · 10번 (제공 원고 기준)',
    title: '밀웜 대조 실험과 측정 결과',
    status: '직접 연결 · 조작 변인과 종속 변인 구분',
    connection:
      '측정한 스티로폼 질량을 조작 변인으로 오인하는 선지가 16번의 조건과 결과 구분에 연결됩니다. 밀웜이 없는 대조군을 사용한다는 차이가 있으며, 16번은 자석 개수를 달리한 비교 실험입니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      '밀웜이 스티로폼을 먹을 것이라는 가설을 세워 검증했으므로 ㄱ은 옳습니다. 밀웜 100마리가 있는 A와 없는 B를 비교한 대조 실험이므로 ㄴ도 옳습니다. 밀웜의 유무(100마리와 0마리)가 조작 변인이고 측정한 스티로폼 질량은 종속 변인이므로 ㄷ은 틀립니다. 초기 스티로폼 질량은 두 상자 모두 50.00 g으로 맞췄습니다.',
  },
  {
    id: '145907-1',
    width: 2835,
    height: 2204,
    source: '2006학년도 6월 고2 학력평가 · 화학Ⅰ · 2번 (제공 원고 기준)',
    title: '산성 비교 실험의 변인 짝짓기',
    status: '직접 연결 · 가설에 맞는 변인 선정',
    connection:
      '무엇을 달리하고 무엇을 측정해야 가설을 검증할 수 있는지 묻습니다. 16번에서 자기장 세기는 조작하고 유도 전류는 측정한다는 관계와 연결됩니다. 실제 측정량은 전류가 아닌 pH입니다.',
    answer: '③ · 조작 변인 ㄴ, 종속 변인 ㄷ',
    solution:
      '염산과 아세트산의 산성을 비교하려면 수용액의 종류(ㄴ)를 달리하고 pH(ㄷ)를 측정합니다. 농도와 온도는 같게 통제하여 다른 조건이 pH 비교에 영향을 주지 않도록 합니다. 따라서 조작 변인 ㄴ과 종속 변인 ㄷ을 짝지은 ③이 옳습니다.',
  },
];
export function ScienceQuestionSixteenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>{relatedIntro}</p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/16/' +
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
