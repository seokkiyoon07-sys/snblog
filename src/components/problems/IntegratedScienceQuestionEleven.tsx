import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionElevenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ③ · ㄱ, ㄴ</h3>
        <p>
          그림의 각 영역에서 가장 큰 질량비를 차지하는 원소는 바깥쪽부터 수소 →
          헬륨 → 탄소(X) → 산소 → 규소(Y) → 철(Z)입니다. 이 순서는 제시된 층상
          구조이며 단일 핵반응식을 뜻하지 않습니다.
        </p>
        <p>
          <strong>ㄱ · 맞음.</strong> 원문은 ‘중심부의 온도는 이 별이 태양보다
          높다’를 묻습니다. 철 중심핵을 형성한 무거운 별은 태양의 수소
          핵융합보다 훨씬 높은 온도가 필요한 핵융합 단계를 거쳤습니다. 제시된
          별의 중심부 온도는 현재 태양보다 높습니다.
        </p>
        <p>
          <strong>ㄴ · 맞음.</strong> X는 탄소, Y는 규소입니다. 둘 다 원자가
          전자가 4개인 14족 원소입니다. 탄소는 2주기, 규소는 3주기이므로 같은
          족이지만 같은 주기는 아닙니다.
        </p>
        <p>
          <strong>ㄷ · 틀림.</strong> 지구 전체의 원소 질량비는 철(Z)이
          규소(Y)보다 큽니다. 지각에서는 규소가 철보다 많지만, 이 문항의 대상은
          핵을 포함한 지구 전체입니다.
        </p>
      </div>
    </details>
  );
}
export function ScienceQuestionElevenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 별의 원소를 주기율표와 지구 구성에 연결하기
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 철 중심핵에서 높은 중심부 온도 추론</h4>
        <p>
          질량이 큰 별이라는 지식은 ㄱ을 판단하는 근거이며 실제 비교 대상은
          중심부 온도입니다. 초기 우주의 수소·헬륨 생성과 별 내부의 무거운 원소
          생성을 구분합니다. 그림만으로 별 전체의 모든 핵융합이 끝났다고
          단정하지 않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 원소 이름을 찾은 뒤 같은 족 판단</h4>
        <p>
          층의 위치로 탄소와 규소를 판별하고, 주기율표의 14족이라는 공통점을
          연결해야 합니다. 별의 이웃 층인지와 같은 족인지는 서로 다른
          기준입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 지구와 지각의 범위 구분</h4>
        <p>
          철이 풍부한 핵까지 포함하는지에 따라 원소 질량비가 달라집니다. 지각의
          구성 비율로 지구 전체를 판단하거나, 별 그림의 층 두께를 지구의
          질량비로 읽으면 안 됩니다.
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
    id: '175662-1',
    width: 2819,
    height: 2862,
    source: '2022학년도 6월 고1 학력평가 · 통합과학 · 7번 (제공 원고 기준)',
    title: '별의 층상 구조와 지구 구성 원소',
    status: '직접 유사 · 원소 판별과 지구 구성',
    connection:
      '규소·철의 위치와 지구 전체의 원소 질량비를 연결하므로 예시문항 ㄷ과 가깝습니다. 다만 기출은 질량비 원그래프를 제공하고, 실제 선지는 생성 순서와 지구 형성 재료를 묻습니다. 같은 족 여부는 묻지 않습니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      '㉠은 산소, ㉡은 규소, ㉢은 철입니다. ㄱ은 산소를 규소라고 했으므로 틀립니다. 규소는 철보다 먼저 만들어지고, 별에서 생성된 물질의 일부는 지구 형성의 재료가 되었으므로 ㄴ과 ㄷ은 옳습니다. 그래프에서도 철 35%가 규소 15%보다 큽니다.',
  },
  {
    id: '173345-1',
    width: 2875,
    height: 1862,
    source: '2021학년도 3월 고2 학력평가 · 지구과학Ⅰ · 15번 (제공 원고 기준)',
    title: '철 중심핵을 가진 별의 온도와 진화',
    status: '직접 유사 · 중심부 온도',
    connection:
      '철 중심핵과 높은 중심부 온도를 연결합니다. 기출은 별 내부의 위치별 온도, 원문은 태양과의 중심부 온도를 비교한다는 차이가 있습니다. 초신성 폭발은 추가 개념입니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      '철 중심핵을 형성한 이 별은 태양보다 질량이 크고, 중심부로 갈수록 온도가 높습니다. 이후 진화 과정에서 초신성 폭발을 거치므로 세 보기 모두 옳습니다.',
  },
  {
    id: '169721-1',
    width: 2801,
    height: 1888,
    source: '추가 제공 PNG · 시험 정보 미확인 · 이미지 문항 번호 16',
    title: '원소 층의 순서와 철의 생성',
    status: '직접 유사 · 층상 구조',
    connection:
      '원문과 같은 원소 층을 제시해 무거운 원소의 분포와 철 생성을 점검합니다. 주기율표와 지구 구성 비율은 다루지 않습니다.',
    answer: '③ · ㄱ, ㄷ',
    solution:
      '이 별은 태양보다 질량이 크므로 ㄱ은 옳습니다. 중심 쪽에 더 무거운 원소가 분포하므로 ㄴ은 틀립니다. 철은 별 내부의 핵융합 과정으로 생성되므로 ㄷ은 옳습니다.',
  },
];
export function ScienceQuestionElevenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        기출별 연결 범위를 구분했습니다. 시험 정보는 제공 원고 기준이며 미확인
        자료는 따로 표시합니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/11/' +
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
