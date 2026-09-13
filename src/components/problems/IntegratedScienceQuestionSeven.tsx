import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';

const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';

export function ScienceQuestionSevenSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ③ · 세포 호흡</h3>
        <p>
          첫 질문은 염화 암모늄의 용해로 온도가 낮아지는 이유를 묻고, 두 번째
          질문은 열 이동 방향이 그 반대인 사례를 요구합니다. 따라서 (가)에는
          흡열에 대한 설명, (나)에는 발열 사례가 들어갑니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={card}>
            <h4 className="font-bold">(가) 주위에서 열을 흡수</h4>
            <p className="mt-2">
              염화 암모늄이 물에 용해되는 과정에서 주위의 열을 흡수하므로 관찰한
              수용액의 온도가 낮아집니다.
            </p>
            <p className="mt-3 font-semibold">주위 → 용해 과정 · 흡열</p>
          </div>
          <div className={card}>
            <h4 className="font-bold">(나) 주위로 열을 방출</h4>
            <p className="mt-2">
              반대 방향의 열 이동이므로 발열 사례를 골라야 합니다. 세포 호흡은
              전체적으로 에너지를 방출하며, 일부는 ATP 등에 저장되고 일부는 열로
              방출됩니다.
            </p>
            <p className="mt-3 font-semibold">반응 → 주위 · 발열</p>
          </div>
        </div>
        <section className={card}>
          <h4 className={heading}>선택지별 판단</h4>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>① · 틀림.</strong> (가)는 흡열을 설명해야 합니다. ‘주위로
              에너지를 방출한다’는 설명은 발열에 해당합니다.
            </li>
            <li>
              <strong>② · 틀림.</strong> 흡열에서는 생성물의 에너지가 반응물보다
              높습니다. 반응물의 에너지가 더 높다는 선택지는 에너지 크기 관계를
              반대로 제시했습니다.
            </li>
            <li>
              <strong>③ · 맞음.</strong> 세포 호흡은 전체적으로 에너지를
              방출하는 발열 반응이므로 (나)에 적절합니다.
            </li>
            <li>
              <strong>④ · 틀림.</strong> 물이 액체에서 기체로 증발하려면
              주위에서 열을 흡수해야 합니다. 흡열 과정이므로 (나)의 조건과 맞지
              않습니다.
            </li>
            <li>
              <strong>⑤ · 틀림.</strong> 고체 이산화 탄소인 드라이아이스가
              기체로 승화할 때도 주위에서 열을 흡수합니다. 역시 (나)에 넣을 수
              없습니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          온도 하강 → 흡열 판단 → ‘반대 방향’ 확인 → 발열 사례인 세포 호흡 선택
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          물의 증발과 드라이아이스의 승화는 물질의 종류가 바뀌는 화학 반응이
          아니라 상태 변화입니다. 여기서는 열을 흡수하는 ‘흡열 과정’으로
          표현합니다.
        </p>
      </div>
    </details>
  );
}

export function ScienceQuestionSevenAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>
          열을 받는 쪽과 내보내는 쪽을 구분하기
        </h3>
        <p className="mt-3">
          대화의 앞뒤에서 요구하는 답이 달라집니다. (가)의 열 출입을 먼저 판단한
          뒤, (나)에서는 같은 사례가 아니라 반대 방향의 사례를 찾아야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 질문이 바뀌는 지점 읽기</h4>
        <p className="mt-3">
          염화 암모늄의 용해가 흡열이라는 사실만 확인하고 바로 선택지를 고르면
          증발이나 승화에 끌릴 수 있습니다. 교사의 두 번째 질문에 있는 ‘반대
          방향’이 (나)의 조건을 발열로 바꿉니다.
        </p>
        <p className="mt-3">
          ①·②는 (가)의 설명이고, ③·④·⑤는 (나)의 사례입니다. 먼저 어느 빈칸을
          설명하는 선택지인지 구분하면 서로 다른 조건을 섞지 않을 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>2. 에너지 크기 관계를 열 이동과 연결 · ②</h4>
        <p className="mt-3 rounded-xl bg-gray-50 p-4 font-semibold dark:bg-gray-900">
          흡열: 생성물의 에너지 &gt; 반응물의 에너지
          <br />
          발열: 생성물의 에너지 &lt; 반응물의 에너지
        </p>
        <p className="mt-3">
          ②는 비교할 대상은 적절하게 제시하지만 크기 관계를 뒤집습니다.
          ‘에너지’라는 단어가 있는지만 보는 대신, 주위에서 받은 에너지가 반응
          전후의 차이와 어떻게 연결되는지 확인해야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>
          3. 시원해지는 주위와 열을 흡수하는 과정 · ④, ⑤
        </h4>
        <p className="mt-3">
          증발이나 승화 때문에 주위가 차가워지는 것은 해당 과정이 주위의 열을
          가져가기 때문입니다. ‘주위 온도가 낮아진다’는 관찰과 ‘과정에서 열을
          흡수한다’는 설명은 서로 모순되지 않습니다.
        </p>
        <p className="mt-3">
          열을 방출하는지 흡수하는지 판단할 때는 기준을 반응 또는 상태 변화에
          두고, 주위와의 이동 방향을 화살표로 정리하세요.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>4. 기출에서 이어지는 개념</h4>
        <p className="mt-3">
          제공된 유사 기출에는 염화 암모늄 용해에 따른 온도 하강, 냉각 팩,
          드라이아이스 승화, 발열 도시락이 등장합니다. 소재는 달라도 온도 변화 →
          열 이동 방향 → 활용 사례를 연결하는 판단을 공유합니다.
        </p>
        <p className="mt-3">
          예시문항은 여기에 ‘반대 방향’이라는 조건을 더해 두 단계로 판단하게
          합니다. 같은 소재가 등장한다는 이유만으로 문장이 완전히 같거나 특정
          기출을 그대로 재조립했다고 단정하지는 않습니다.
        </p>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          위 역분해는 원문과 제공 기출의 비교에 근거한 SN의 해석이며 평가원의
          공식 출제 의도는 아닙니다.
        </p>
      </section>
    </div>
  );
}

const related = [
  {
    id: '174406-1',
    width: 2793,
    height: 2604,
    source: '2021학년도 9월 고3 평가원 · 화학Ⅰ · 1번 (제공 원고 기준)',
    title: '염화 암모늄의 용해와 뷰테인의 연소',
    status: '직접 유사 · 염화 암모늄 용해',
    connection:
      '염화 암모늄 용해 때 수용액 온도가 낮아지는 현상에서 흡열임을 판단하는 과정이 예시문항 (가)와 직접 대응합니다. 기출은 연소와 함께 분류하며, 예시문항은 이어서 반대 열 이동 방향의 사례를 찾습니다.',
    answer: '② · C',
    solution:
      'A: 염화 암모늄의 용해는 주위의 열을 흡수하므로 발열이라는 설명이 틀립니다. B: 뷰테인의 연소는 열을 방출하는 발열 반응이므로 흡열이라는 설명이 틀립니다. C: 흡열 반응은 반응이 일어날 때 열을 흡수하는 반응이라는 설명이 옳습니다.',
  },
  {
    id: '174607-1',
    width: 2796,
    height: 2565,
    source: '2021학년도 10월 고3 교육청 · 화학Ⅰ · 2번 (제공 원고 기준)',
    title: '냉각 팩·염화 칼슘·드라이아이스의 열 출입',
    status: '직접 유사 · 용해와 승화의 열 출입',
    connection:
      '드라이아이스 승화의 열 흡수 판단이 예시문항 ⑤와 직접 대응합니다. 용해하는 물질에 따라 열 출입 방향이 다름도 점검하지만 세포 호흡의 발열 여부는 다루지 않습니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      'ㄱ: 질산 암모늄이 녹으면서 팩이 차가워지는 것은 흡열 과정입니다. ㄴ: 제시된 염화 칼슘의 용해는 열을 방출합니다. ㄷ: 드라이아이스는 승화하면서 열을 흡수하므로 발열이라고 한 설명은 틀립니다.',
  },
  {
    id: '176986-1',
    width: 2800,
    height: 2159,
    source: '2023학년도 3월 고1 교육청 · 통합과학 · 6번 (제공 원고 기준)',
    title: '반응의 열 출입과 발열 도시락',
    status: '직접 유사 · 발열의 생활 속 활용',
    connection:
      '온도 변화에서 열 출입을 판단하고 발열 사례를 고르는 과정이 예시문항 (나)와 대응합니다. 사용한 반응과 활용 사례가 다르므로 사례 이름을 외우기보다 열의 이동 방향을 비교합니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      'ㄱ: 수산화 바륨과 염화 암모늄의 반응은 열을 흡수하므로 온도가 낮아집니다. ㄴ: 산화 칼슘과 물의 반응에서는 열을 방출하므로 빈칸에는 방출이 들어갑니다. ㄷ: 이 발열 반응을 이용하면 음식을 데우는 즉석 발열 도시락을 만들 수 있습니다.',
  },
];

export function ScienceQuestionSevenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <section className={card}>
        <h3 className={heading}>흡열·발열의 사례를 비교하는 유사 기출 3개</h3>
        <p className="mt-3">
          제공된 PNG의 상황과 선지를 직접 확인해 연결했습니다. 시험명·시기는
          제공 원고 기준이며 이미지에는 표시되어 있지 않습니다. 아래 해설은
          이미지 내용을 바탕으로 작성한 SN 풀이입니다.
        </p>
      </section>
      {related.map(item => {
        const src = `/problems/Integrated_science_Studies/SImilar_questions/7/${item.id}.png`;
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
              className="mt-3 inline-block font-semibold text-emerald-700 underline dark:text-emerald-300"
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
