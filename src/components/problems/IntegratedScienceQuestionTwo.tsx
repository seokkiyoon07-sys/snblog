import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';

const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';
const link = 'font-medium text-emerald-700 underline dark:text-emerald-300';

export function ScienceQuestionTwoSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ⑤ · ㄱ, ㄴ, ㄷ</h3>
        <p>
          세 정의가 무엇을 기준으로 삼는지 먼저 구분합니다. A는 금속으로 만든
          미터원기, B는 진공에서의 빛의 속력과 시간, C는 지구 자오선입니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className={card}>
            <h4 className="font-bold">A · 미터원기</h4>
            <p className="mt-2">
              0 ℃에서 백금·이리듐 합금 원기에 표시된 두 선 사이의 거리입니다.
              온도 조건을 함께 고정해야 같은 기준을 재현할 수 있습니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">B · 빛의 속력</h4>
            <p className="mt-2">
              진공에서 빛이 1/299,792,458초 동안 진행하는 거리입니다. 거리 =
              속력 × 시간이므로 시간의 표준과 연결됩니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">C · 지구 자오선</h4>
            <p className="mt-2">
              자오선을 따라 북극에서 적도까지의 거리를 구한 뒤 그 1/10,000,000을
              기준으로 삼습니다.
            </p>
          </div>
        </div>
        <section className={card}>
          <h4 className={heading}>선지별 판단</h4>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>ㄱ · 맞음.</strong> 금속으로 만든 미터원기는 열팽창 때문에
              온도가 달라지면 길이가 변합니다. ‘0 ℃일 때’는 부가 정보가 아니라
              기준 길이를 정하는 데 필요한 조건입니다.
            </li>
            <li>
              <strong>ㄴ · 맞음.</strong> B의 정의에는 초 단위의 시간 간격이
              포함됩니다. 길이의 표준을 정확하게 구현하려면 시간·주파수를 정확히
              측정하는 기술이 필요합니다. 원자시계가 제공하는 시간 표준과 연결해
              이해할 수 있습니다.
            </li>
            <li>
              <strong>ㄷ · 맞음.</strong> 제시된 세 기준의 등장 순서는 지구
              자오선 C → 미터원기 A → 빛의 속력 B입니다. 따라서 세 선지가 모두
              옳습니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          A의 온도 조건은 열팽창으로, B의 시간 조건은 거리 = 속력 × 시간으로
          설명합니다.
        </p>
        <details className={card}>
          <summary className="cursor-pointer font-semibold">
            더 알아보기 · 정의와 측정 방법의 구분
          </summary>
          <div className="mt-3 space-y-3">
            <p>
              매번 빛이 1 m를 가는 짧은 시간을 직접 재야 한다는 뜻은 아닙니다.
              실제 길이 표준은 주파수와 파장 등을 이용해서도 구현할 수 있습니다.
              표준의 정의와 이를 실험실에서 구현하는 방법을 구분하세요.
            </p>
            <p>
              C → A → B는 이 문항에 제시된 기준끼리의 순서입니다. 실제 역사에는
              1960년 크립톤 원자의 빛 파장을 이용한 정의도 있었습니다. B의
              표현은 1983년에 채택되었으며, 2019년부터 시행된 SI에서는
              진공에서의 빛의 속력의 수치를 고정하는 방식으로 정의합니다. 1 m에
              대한 의미는 이어집니다.
            </p>
            <p className="text-xs">
              근거:{' '}
              <a
                className={link}
                href="https://www.bipm.org/en/committees/cg/cgpm/17-1983/resolution-1"
                target="_blank"
                rel="noreferrer"
              >
                BIPM 1983년 미터 정의 결의
              </a>{' '}
              ·{' '}
              <a
                className={link}
                href="https://www.bipm.org/en/si-base-units/metre"
                target="_blank"
                rel="noreferrer"
              >
                현재 미터의 정의
              </a>
            </p>
          </div>
        </details>
      </div>
    </details>
  );
}

export function ScienceQuestionTwoAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>
          길이를 정하는데 왜 온도와 시간이 필요할까?
        </h3>
        <p className="mt-3">
          표준의 이름과 순서만 외우기보다 정의에 붙은 조건의 이유를 설명하는
          것이 핵심입니다. 제시문 속 ‘0 ℃’, ‘진공’, ‘초’가 각각 어떤 역할을
          하는지 읽습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 조건의 필요성 · ㄱ</h4>
        <p className="mt-3">
          미터원기는 물질로 만든 기준입니다. 온도가 바뀌면 길이도 달라질 수
          있으므로 비교할 때 온도를 맞춰야 합니다. ‘왜 이 조건을 제시했는가?’를
          열팽창과 연결하는 것이 이 선지의 풀이 과정입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>2. 서로 연결된 표준 · ㄴ</h4>
        <p className="mt-3">
          길이의 정의에 시간이 들어 있다는 점을 발견해야 합니다. 진공에서의 빛의
          속력이 정해져 있어도 이동한 거리를 정하려면 시간 간격이 필요합니다.
        </p>
        <p className="mt-3 rounded-xl bg-gray-50 p-4 font-semibold dark:bg-gray-900">
          거리 = 속력 × 시간
          <br />1 m = (299,792,458 m/s) × (1/299,792,458 s)
        </p>
        <p className="mt-3">
          ‘빛의 속력이 일정하니 시간 측정은 필요 없다’는 말은 일정한 속력과
          정확한 시간 간격의 역할을 혼동한 오답이 됩니다. 반대로 ‘원자시계가
          완벽해야 한다’고 표현하면 측정에는 불확도가 있다는 점을 놓치게 됩니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>3. 더 잘 재현할 수 있는 기준 · ㄷ</h4>
        <p className="mt-3">
          제시된 기준은 지구 규모의 거리에서 특정 금속 원기를 거쳐 물리 상수를
          활용하는 방식으로 이어집니다. 핵심은 같은 단위를 더 안정적으로
          재현하고 공유하는 것입니다. 빛의 속력이라는 상수를 이용해도 측정
          장치의 오차까지 없어지는 것은 아닙니다.
        </p>
      </section>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        위 역분해는 SN의 해석이며 평가원의 공식 출제 의도나 실제 정답률 분석을
        뜻하지 않습니다. 변형문제는 SNargen에서 제작합니다.
      </p>
    </div>
  );
}

const related = [
  {
    id: '166531-1',
    width: 2940,
    height: 2842,
    source: '2017학년도 6월 고2 교육청 · 물리학Ⅰ · 1번 (제공 원고 기준)',
    title: '시간의 표준과 길이의 표준은 어떻게 연결될까?',
    status: '직접 유사 · 길이 표준과 시간 표준',
    connection:
      '기출의 민수 진술은 1 m의 정의에 시간 표준이 필요함을 묻고 있어 예시문항 ㄴ의 판단과 직접 대응합니다. 미터원기의 온도 조건이나 세 길이 표준의 역사적 순서까지 묻지는 않습니다.',
    answer: '⑤ · 철수, 영희, 민수',
    solution:
      '철수: 시간의 표준에는 원자시를 이용합니다. 영희: 길이의 SI 기본 단위는 미터(m)입니다. 민수: 빛이 정해진 시간 동안 이동한 거리로 1 m를 정하므로 시간의 표준이 필요합니다. 세 사람 모두 옳습니다.',
  },
  {
    id: '165131-1',
    width: 2885,
    height: 2363,
    source: '2016학년도 9월 고2 교육청 · 물리학Ⅰ · 1번 (제공 원고 기준)',
    title: '태양일에서 원자시로 시간의 기준이 바뀐 이유',
    status: '보충 학습 · 시간 표준의 재현성',
    connection:
      '더 안정적으로 재현할 수 있는 표준을 택하는 이유를 복습합니다. 예시문항 ㄷ은 길이 표준의 변화 순서, 기출은 태양일과 원자시의 비교이므로 대상과 판단 자료가 다릅니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      'ㄱ: 태양일과 원자의 진동은 반복되는 자연 현상을 이용한 기준입니다. ㄴ: 제시문의 실제 태양일은 연중 일정하지 않으므로 그 하루를 86,400등분한 시간도 일정하지 않습니다. ㄷ: 세슘 원자의 특정한 빛의 진동을 이용한 (나)는 원자시입니다. 고정된 86,400초인 시간 단위로서의 하루와 실제 태양일을 구분하세요.',
  },
];

export function ScienceQuestionTwoRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <section className={card}>
        <h3 className={heading}>시간·길이 표준을 연결하는 유사문제 2개</h3>
        <p className="mt-3">
          제공된 PNG의 문항 내용을 확인해 연결했습니다. 시험명·시기는 제공 원고
          기준이며, 이미지에는 해당 정보가 표시되어 있지 않습니다. 아래 해설은
          문항을 바탕으로 작성한 SN 풀이입니다.
        </p>
      </section>
      {related.map(item => {
        const src = `/problems/Integrated_science_Studies/SImilar_questions/2/${item.id}.png`;
        return (
          <section key={item.id} className={card}>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.source}
            </p>
            <h4 className={`mt-2 ${heading}`}>{item.title}</h4>
            <ScienceSimilarityComment
              status={item.status}
              connection={item.connection}
            />
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.title} 원문 크게 보기`}
              className="block rounded-xl bg-white p-3"
            >
              <Image
                src={src}
                width={item.width}
                height={item.height}
                alt={`유사문제 ${item.id}: ${item.title}`}
                sizes="(max-width: 768px) 100vw, 800px"
                className="h-auto w-full"
              />
            </a>
            <a
              href={src}
              download={`${item.id}.png`}
              className={`mt-3 inline-block ${link}`}
            >
              문제 PNG 다운로드
            </a>
            <details className="mt-5 rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
              <summary className="cursor-pointer font-bold">
                SN 풀이 보기
              </summary>
              <p className="mt-3 font-bold">정답 {item.answer}</p>
              <p className="mt-2">{item.solution}</p>
            </details>
          </section>
        );
      })}
    </div>
  );
}
