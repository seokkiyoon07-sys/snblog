import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';

const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';

export function ScienceQuestionNineSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ① · ㄱ</h3>
        <p>
          과거 두 해의 자료로 ㉠에 들어갈 기온의 종류를 찾고, 같은 기준을 Y+2년
          예측 자료에 적용합니다. ㉠은 최저 기온, ㉡은 5월입니다.
        </p>
        <section className={card}>
          <h4 className={heading}>1. 선의 종류와 축부터 구분</h4>
          <ul className="mt-3 space-y-2">
            <li>파선: 주별 최고 기온 · 왼쪽 기온 축</li>
            <li>일점쇄선: 주별 최저 기온 · 왼쪽 기온 축</li>
            <li>실선: 채집된 A의 개체 수 · 오른쪽 개체 수 축</li>
          </ul>
          <p className="mt-3">
            15 ℃의 수평선은 기온을 비교하는 기준입니다. 개체 수와 기온은 단위가
            다르므로 두 선의 교차 자체에 의미를 부여하지 않습니다.
          </p>
        </section>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={card}>
            <h4 className="font-bold">㉠ · 최저 기온</h4>
            <p className="mt-2">
              Y년과 Y+1년 모두 최고 기온은 모기가 채집되기 전부터 15 ℃보다
              높습니다. 따라서 채집 시작을 설명하는 기준으로 맞지 않습니다. 최저
              기온이 15 ℃에 도달해 그 이상이 되는 무렵부터 개체 수 실선이 0에서
              증가하는 양상에 주목합니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">㉡ · 5월</h4>
            <p className="mt-2">
              Y+2년의 최저 기온 일점쇄선을 따라가면 5월 4주차에는 15 ℃
              이상입니다. (다)의 결론을 적용하면 채집 시작 시기는 6월이 아닌
              5월로 예상됩니다.
            </p>
          </div>
        </div>
        <section className={card}>
          <h4 className={heading}>선지별 판단</h4>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>ㄱ · 맞음.</strong> 말라리아는 병원체가 모기를 매개로
              전파되어 발생하는 감염병입니다. 모기는 병원체 자체가 아니라 매개
              생물입니다.
            </li>
            <li>
              <strong>ㄴ · 틀림.</strong> ㉠은 최고 기온이 아니라 최저
              기온입니다. 최고 기온은 채집 전부터 이미 기준값을 넘으므로 두 해의
              관측 결과와 맞지 않습니다.
            </li>
            <li>
              <strong>ㄷ · 틀림.</strong> 선지는 ㉡을 6월이라고 했지만, Y+2년
              예측 그래프에 최저 기온 15 ℃ 이상이라는 기준을 적용하면 채집이
              시작될 것으로 예상하는 달은 5월입니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          과거 자료에서 기준 변수 찾기 → 동일한 기준을 예측 자료에 적용 → 주차를
          월로 읽기
        </p>
      </div>
    </details>
  );
}

export function ScienceQuestionNineAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>
          기온의 종류를 고르고, 새해의 채집 시작 시기를 예측하기
        </h3>
        <p className="mt-3">
          감염병 분류는 ㄱ의 기초 지식입니다. 자료 해석의 중심은 최고·최저 기온
          중 관측 결과와 맞는 변수를 고르고, 그 규칙을 새로운 연도에 적용하는
          ㄴ·ㄷ입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 맞는 변수뿐 아니라 틀린 후보도 확인 · ㄴ</h4>
        <p className="mt-3">
          단순히 모기 개체 수와 기온이 함께 증가한다는 인상만으로 답을 고르지
          않습니다. 최고 기온이 15 ℃를 넘었는데도 채집 개체 수가 0인 기간이
          있으므로 최고 기온이라는 후보를 배제할 수 있습니다.
        </p>
        <p className="mt-3">
          두 해를 함께 비교하면 특정 연도의 우연한 모양에 의존하는 해석을 줄일
          수 있습니다. 다만 이것만으로 최저 기온이 모기 발생의 유일한 원인이라고
          증명되는 것은 아닙니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>
          2. 과거의 달을 복사하지 않고 조건을 옮기기 · ㄷ
        </h4>
        <p className="mt-3">
          과거 자료에서 6월 무렵 채집되었다고 Y+2년도 6월로 정하면 안 됩니다.
          적용할 것은 ‘6월’이라는 달이 아니라 ‘최저 기온이 15 ℃ 이상’이라는
          조건입니다. 예측 그래프에서는 이 조건을 5월에 충족합니다.
        </p>
        <p className="mt-3">
          ‘이상’에는 15 ℃도 포함됩니다. 가로축의 주차를 확인한 다음, 선택지가
          요구하는 월 단위로 답을 옮깁니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>3. 관측·결론·예측을 구분하기</h4>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>관측:</strong> Y년과 Y+1년의 채집 개체 수와 기온입니다.
          </li>
          <li>
            <strong>결론:</strong> 이 자료에서 채집 시작과 대응하는 기온 조건을
            정리합니다.
          </li>
          <li>
            <strong>예측:</strong> 그 조건이 이어진다고 보고 Y+2년의 채집 시작
            시기를 예상합니다.
          </li>
        </ul>
        <p className="mt-3">
          Y+2년 그래프는 예측된 기온이며 실제 채집 결과가 아닙니다. 따라서 이
          단계는 규칙의 적용에 따른 예측이지, 실제 관측으로 예측이 맞았음을
          검증한 단계는 아닙니다. 또한 ‘채집 개체 수 0’과 ‘지역에 모기가 전혀
          없음’도 구분합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>4. 감염병·병원체·매개 생물의 구분 · ㄱ</h4>
        <p className="mt-3">
          말라리아는 질병의 이름, 말라리아 원충은 병원체, 모기 A는 전파를
          매개하는 생물입니다. 감염병이라는 분류와 병원체가 바이러스인지
          원충인지의 분류는 별개의 판단입니다.
        </p>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          위 내용은 원문을 바탕으로 한 SN의 해석입니다. 제시 자료의 관계를 모든
          지역·모기에 적용되는 보편 법칙으로 일반화하지 않습니다.
        </p>
      </section>
    </div>
  );
}

const related = [
  {
    id: '174760-1',
    width: 2763,
    height: 1801,
    source: '2021학년도 수능 · 생명과학Ⅰ · 5번 (제공 원고 기준)',
    title: '말라리아의 매개와 감염성 질병의 구분',
    status: '부분 직접 연결 · 질병 개념',
    connection:
      '표의 ‘모기를 매개로 전염된다’는 말라리아 설명이 예시문항의 도입부 및 ㄱ과 연결됩니다. 기출의 실제 선지는 병원체 종류·결핵·비감염성 질병을 비교하므로, 예시문항의 기온 그래프와 채집 시기 예측을 연습하는 자료는 아닙니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      'ㄱ: 말라리아의 병원체는 원충이며 바이러스가 아니므로 틀립니다. ㄴ: 결핵은 세균에 의한 질병으로 치료에 항생제가 사용되므로 옳습니다. ㄷ: 헌팅턴 무도병은 유전적 원인으로 발생하는 비감염성 질병이므로 옳습니다.',
  },
  {
    id: '179461-1',
    width: 2820,
    height: 2166,
    source: '2024학년도 7월 고3 교육청 · 생명과학Ⅰ · 6번 (제공 원고 기준)',
    title: '독감·무좀·말라리아 병원체의 특징 비교',
    status: '보충 학습 · 병원체 특징',
    connection:
      '말라리아를 다른 질병과 구분한다는 주제를 공유하지만, 핵심 과제는 병원체의 유전 물질·물질대사 특징을 세어 질병 A와 B를 판별하는 것입니다. 예시문항 ㄴ·ㄷ의 기준값 추론 및 새 자료에의 적용과는 직접 대응하지 않습니다.',
    answer: '② · ㄴ',
    solution:
      '독감의 병원체인 바이러스는 유전 물질을 가지지만 독립적으로 물질대사를 하지 않아 표의 특징이 1개입니다. 무좀의 병원체인 곰팡이는 유전 물질과 독립적 물질대사라는 2개 특징을 가지므로 B는 무좀, A는 독감입니다. 말라리아는 제시된 세 특징을 모두 가져 ㉠은 3입니다. 따라서 ㄱ과 ㄷ은 틀리고 ㄴ만 옳습니다.',
  },
];

export function ScienceQuestionNineRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <section className={card}>
        <h3 className={heading}>질병 개념을 보완하는 연계 기출 2개</h3>
        <p className="mt-3">
          두 자료는 말라리아와 병원체 개념에 연결됩니다. 이 예시문항의 중심인
          기온 기준값 도출과 채집 시기 예측에 직접 대응하는 기출은 이번 제공
          자료에 없습니다. 시험명·학년도는 제공 원고 기준이며 이미지에는
          표시되어 있지 않습니다.
        </p>
      </section>
      {related.map(item => {
        const src = `/problems/Integrated_science_Studies/SImilar_questions/9/${item.id}.png`;
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
                alt={`연계 기출 ${item.id}: ${item.title}`}
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
