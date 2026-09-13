import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionFourteenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ④ · ㄴ, ㄷ</h3>
        <p>
          산소의 전자 배치는 2, 6입니다. 원자가 전자 수는 6, 전자가 들어 있는
          전자껍질 수는 2이므로 표의 값은 6/2 = 3입니다. 따라서 9a = 3에서 a =
          1/3입니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">원자 번호 7~17에서 원소 찾기</h4>
          <ul className="space-y-2">
            <li>X: 6a = 2 → 전자 배치 2, 8, 6 → 6/3 = 2인 황(S, 16번)</li>
            <li>
              Y: 3a = 1 → 전자 배치 2, 8, 3 → 3/3 = 1인 알루미늄(Al, 13번)
            </li>
            <li>Z: a = 1/3 → 전자 배치 2, 8, 1 → 1/3인 나트륨(Na, 11번)</li>
          </ul>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄱ · 틀림: 잃는 전자는 1개</h4>
          <p>
            나트륨 원자는 전자가 11개입니다. 전자 1개를 잃어 Na⁺가 되면 전자
            10개인 네온과 같은 전자 배치를 갖습니다. 2개를 잃으면 전자는
            9개입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄴ · 맞음: SO₂의 공유 결합</h4>
          <p>
            X는 황이므로 XO₂는 SO₂입니다. 황과 산소는 비금속 원소이며, 전자를
            공유해 결합하는 공유 결합 화합물입니다.
          </p>
        </section>
        <section className={card}>
          <h4 className="font-bold">ㄷ · 맞음: 용융 상태의 이온 이동</h4>
          <p>
            알루미늄과 산소의 안정한 화합물은 Al₂O₃입니다. 이 문항의 이온 결합
            모형에서 고체 상태의 이온은 제자리에 묶여 있지만, 녹아 액체가 되면
            이온이 이동할 수 있어 전기 전도성이 있습니다. 여기서 액체 상태는
            물에 녹인 수용액이 아니라 용융 상태입니다.
          </p>
        </section>
      </div>
    </details>
  );
}
export function ScienceQuestionFourteenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 기준값에서 원소와 물질의 성질까지
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 산소를 기준으로 미지수 결정</h4>
        <p>
          알려진 산소의 전자 배치로 a를 먼저 구하면 X·Y·Z의 비율이 정해집니다.
          분자는 전체 전자 수가 아니라 원자가 전자 수, 분모는 전자가 실제로 들어
          있는 껍질 수라는 점을 확인합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 원자 번호 범위로 후보 제한</h4>
        <p>
          원자 번호 7~17이라는 조건이 중요합니다. 범위 밖의 탄소는 4/2 = 2,
          베릴륨은 2/2 = 1로 각각 X와 Y의 값에 맞지만 제외됩니다. 범위 안의
          2주기 후보 N·O·F는 비율이 2보다 크며, Ne의 원자가 전자 수는 교과
          분류상 0입니다. 따라서 제시된 양의 비율을 만족하는 X·Y·Z는 3주기에서
          찾습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 원자·이온·화합물의 성질 구분</h4>
        <p>
          ㄱ은 중성 원자가 잃는 전자 수, ㄴ은 원소 사이의 결합 방식, ㄷ은
          화합물의 상태별 전도성을 묻습니다. 알루미늄이 금속이라는 이유만으로
          Al₂O₃의 전도성을 설명하지 않고, 액체에서 이동 가능한 이온을 근거로
          판단합니다.
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
    id: '177961-1',
    width: 2774,
    height: 2253,
    source: '2023학년도 9월 고3 모의평가 · 화학Ⅰ · 6번 (제공 원고 기준)',
    title: '이온 수 비와 전자 배치로 원소 추론',
    status: '보충 학습 · 다른 비례식의 원소 추론',
    connection:
      '미지수와 전자 배치로 원소를 특정한다는 사고 과정은 공유합니다. 그러나 원문은 원자가 전자 수/껍질 수를, 기출은 이온 수 비와 전기적 중성을 이용합니다. 같은 비례식 유형은 아니며 결합 물질의 전도성도 묻지 않습니다.',
    answer: '⑤ · ㄴ, ㄷ',
    solution:
      '전기적 중성에서 2a = 3c, 2b = c입니다. a·b·c가 3 이하 자연수이므로 a = 3, b = 1, c = 2입니다. 각 이온은 전자가 10개여서 X는 Al, Y는 Na, Z는 O입니다. ㄱ은 틀리고 ㄴ은 옳습니다. 원자가 전자 수는 Al이 3, Na가 1이므로 ㄷ도 옳습니다.',
  },
  {
    id: '174991-1',
    width: 2794,
    height: 2316,
    source: '2021학년도 11월 고1 학력평가 · 통합과학 · 11번 (제공 원고 기준)',
    title: '전자 배치와 공유 결합·전기 전도성',
    status: '직접 유사 · 결합과 이동 가능한 이온',
    connection:
      '전자 배치에서 원소를 찾고 공유 결합과 이온 결합 물질의 전도성으로 연결하는 구조가 가깝습니다. 다만 기출의 B₂는 홑원소 물질이고 예시문항의 SO₂는 화합물입니다. 전도성 조건도 기출은 수용액, 원문은 용융 액체이므로 구분합니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      'A는 전자 배치 2, 8, 1인 Na, B는 2, 7인 F입니다. 중성 A의 양성자 수는 11이므로 ㄱ은 옳습니다. B₂인 F₂는 전자를 공유하므로 ㄴ은 옳습니다. AB인 NaF는 수용액에서 이온이 이동할 수 있어 전기 전도성이 있으므로 ㄷ도 옳습니다.',
  },
];
export function ScienceQuestionFourteenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        원소 추론 기출은 비례식의 근거가 달라 보충 학습으로, 결합·전도성 기출은
        직접 유사로 구분했습니다. 수용액과 용융 액체는 모두 이온이 이동할 수
        있지만 서로 다른 상태 조건입니다. 시험 정보는 제공 원고 기준입니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/14/' +
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
