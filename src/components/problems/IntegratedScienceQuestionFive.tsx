import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';

const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';

export function ScienceQuestionFiveSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ② · ㄴ</h3>
        <p>
          개미가 곰팡이를 기르는 행동과 생태학적 의미의 생산을 구분해야 합니다.
          또 생물이 환경에 주는 영향인지, 같은 종의 개체 사이에서 일어나는
          일인지 판단합니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={card}>
            <h4 className="font-bold">㉠ 곰팡이 → 토양</h4>
            <p className="mt-2">
              곰팡이가 잎 조각을 분해하여 주변 토양이 비옥해집니다. 생물 요소가
              비생물 요소에 영향을 미치는 반작용입니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">㉡ 같은 개미 종 A의 역할 분담</h4>
            <p className="mt-2">
              몸의 크기가 다른 A가 운반과 보호를 나누어 맡습니다. 같은 종의
              개체들이 협력하는 사회생활이며 개체군 내 상호 작용입니다.
            </p>
          </div>
        </div>
        <section className={card}>
          <h4 className={heading}>선지별 판단</h4>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>ㄱ · 틀림.</strong> A는 동물인 개미이므로 소비자입니다.
              곰팡이를 기른다는 행동이 무기물로부터 유기물을 합성하는 생산자의
              역할을 뜻하지는 않습니다. 이 자료에서 곰팡이는 분해자이며, 잎을
              만든 식물은 생산자입니다.
            </li>
            <li>
              <strong>ㄴ · 맞음.</strong> 곰팡이는 생물 요소, 토양은 비생물
              요소입니다. 곰팡이의 분해 활동으로 토양이 변하므로 생물 → 비생물
              방향의 영향입니다.
            </li>
            <li>
              <strong>ㄷ · 틀림.</strong> 크기와 역할이 달라도 모두 같은 개미 종
              A입니다. ㉡은 개체군 ‘내’의 상호 작용이며, 서로 다른 개체군
              ‘사이’의 상호 작용이 아닙니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          먹이를 기르는 행동 ≠ 생산자의 유기물 합성
          <br />
          곰팡이 → 토양 = 반작용
          <br />
          같은 종의 분업 = 개체군 내 상호 작용
        </p>
      </div>
    </details>
  );
}

export function ScienceQuestionFiveAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>
          누가 누구에게 영향을 주는지, 같은 종인지부터 확인하기
        </h3>
        <p className="mt-3">
          곰팡이를 기르는 개미라는 낯선 소재를 생산자·소비자·분해자, 반작용,
          개체군 내 상호 작용이라는 익숙한 개념으로 바꾸어 읽는 문항입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 일상적인 생산과 생태학적 생산 · ㄱ</h4>
        <p className="mt-3">
          ‘먹이를 기른다’는 표현만 보고 생산자라고 판단하면 범주를 혼동하게
          됩니다. 생산자는 광합성 등으로 무기물에서 유기물을 합성하는
          생물입니다. 개미가 먹이를 확보하고 관리하는 행동은 그 정의에 해당하지
          않습니다.
        </p>
        <p className="mt-3">
          생태계에서의 역할을 구분할 때는 행동의 인상보다 영양을 얻는 방식을
          기준으로 삼아야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>2. 화살표의 방향으로 판단 · ㄴ</h4>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
            <p className="font-bold">작용 · 비생물 → 생물</p>
            <p className="mt-2">환경 요인이 생물에 미치는 영향입니다.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
            <p className="font-bold">반작용 · 생물 → 비생물</p>
            <p className="mt-2">
              ㉠에서는 곰팡이의 활동이 토양을 변화시킵니다.
            </p>
          </div>
        </div>
        <p className="mt-3">
          ‘토양’이라는 단어가 나왔다고 곧바로 작용을 고르면 안 됩니다. 이
          문장에서 변화의 원인은 곰팡이이고, 영향을 받는 대상은 토양입니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>3. 개체군 ‘내’와 개체군 ‘사이’ · ㄷ</h4>
        <p className="mt-3">
          큰 개미·중간 크기 개미·작은 개미라는 차이보다 모두 A라는 같은 종이라는
          정보가 우선합니다. 크기가 다르거나 역할이 나뉜다고 별개의 종이 되는
          것은 아닙니다.
        </p>
        <p className="mt-3">
          또한 전체 자료에 개미와 곰팡이가 함께 등장하더라도, 선지가 묻는 ㉡의
          범위는 A의 역할 분담입니다. 밑줄 밖의 생물을 끌어와 개체군 사이의
          관계로 해석하지 않아야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>4. 기출과 공유하는 판단 구조</h4>
        <p className="mt-3">
          기출 자료 178386-1의 6번 문항에도 같은 종의 개미가 일을 분담하는
          사례를 개체군 사이의 상호 작용에 잘못 대응시킨 선지가 있습니다. 문장
          전체가 동일한 것은 아니지만, 같은 종의 협력을 서로 다른 개체군의
          관계로 바꾸는 범주 오류는 공통입니다.
        </p>
        <p className="mt-3">
          기출 자료 161421-1의 16번 문항에 나온 지의류와 바위 사례는 곰팡이와
          토양 사례처럼 생물 → 비생물의 방향을 판단하게 합니다. 소재가 바뀌어도
          분류 기준은 유지됩니다.
        </p>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          위 내용은 원문과 제공된 기출 이미지의 비교를 바탕으로 한 SN의
          해석입니다. 문항 간 유사성만으로 출제자가 특정 기출을 재조립했다고
          단정할 수는 없습니다.
        </p>
      </section>
    </div>
  );
}

const related = [
  {
    id: '178386-1',
    width: 2752,
    height: 1785,
    source: '2023학년도 수능 · 생명과학Ⅰ · 6번 (제공 원고 기준)',
    title: '같은 종의 개미가 협력하면 어떤 상호 작용일까?',
    status: '직접 유사 · 개체군 내·사이 구분',
    connection:
      '기출 ㄴ은 같은 종의 개미 분업을 개체군 사이의 관계로 잘못 분류합니다. 예시문항 ㄷ과 같은 범주 오류를 판단합니다. 기출 그림의 ㉠과 예시문항 ㉠은 뜻이 다르므로 각 자료의 기호를 따로 읽어야 합니다.',
    answer: '④ · ㄱ, ㄷ',
    solution:
      'ㄱ: 곰팡이는 생물 요소이므로 생물 군집에 속합니다. ㄴ: 같은 종의 개미가 협력하는 것은 개체군 내 상호 작용으로, 개체군 사이의 관계인 ㉠에 해당하지 않습니다. ㄷ: 빛의 세기가 참나무의 생장에 영향을 주는 것은 비생물적 요인 → 생물 방향인 ㉡에 해당합니다.',
  },
  {
    id: '161421-1',
    width: 2848,
    height: 2025,
    source: '2014학년도 수능 · 생명과학Ⅰ · 16번 (제공 원고 기준)',
    title: '지의류가 바위를 토양으로 바꾸는 영향의 방향',
    status: '직접 유사 · 생물에서 환경으로의 영향',
    connection:
      '지의류가 바위의 토양화를 촉진하는 사례는 예시문항의 곰팡이 → 토양처럼 생물이 비생물적 환경에 영향을 주는 방향입니다. 작용·반작용 및 개체군 내·사이의 구분을 함께 연습하되 잎꾼개미의 소비자 분류와는 별개입니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      'ㄱ: 개체군 A는 같은 종의 개체들로 구성됩니다. ㄴ: 지의류가 바위의 토양화를 촉진하는 것은 생물 → 비생물 방향인 ㉡의 예입니다. ㄷ: 그림의 ㉢은 개체군 B 내부의 관계입니다. 분서는 서로 다른 종이 서식 공간이나 자원을 나누어 이용하는 관계이므로 ㉢에 해당하지 않습니다.',
  },
];

export function ScienceQuestionFiveRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <section className={card}>
        <h3 className={heading}>
          상호 작용의 범위와 방향을 묻는 유사 기출 2개
        </h3>
        <p className="mt-3">
          제공된 PNG에서 개미의 분업과 지의류의 토양화 선지를 직접 확인했습니다.
          시험명·학년도는 제공 원고 기준이며 이미지에는 표시되어 있지 않습니다.
          아래 해설은 이미지 내용을 바탕으로 작성한 SN 풀이입니다.
        </p>
      </section>
      {related.map(item => {
        const src = `/problems/Integrated_science_Studies/SImilar_questions/5/${item.id}.png`;
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
