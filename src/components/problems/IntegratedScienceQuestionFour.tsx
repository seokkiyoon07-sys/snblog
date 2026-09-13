import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';

const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';

export function ScienceQuestionFourSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ④ · ㄴ, ㄷ</h3>
        <p>
          지각의 광물과 반도체를 연결하는 원소는 규소(Si)입니다. 글에서 찾은
          규소를 그림의 중심 원자 ⓑ에 정확히 대응시키는 것이 핵심입니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className={card}>
            <h4 className="font-bold">규산염 사면체 · ㉠ 규산염</h4>
            <p className="mt-2">
              중심에 규소 원자 1개, 네 꼭짓점에 산소 원자 4개가 놓입니다. 따라서
              ⓐ는 산소(O), ⓑ는 규소(Si)입니다. 지각을 이루는 암석의 대부분은
              규산염 광물로 구성됩니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">전기적 성질의 조절 · ㉡ 반도체</h4>
            <p className="mt-2">
              제시문에서 X로만 이루어진 물질에 특정 불순물을 첨가해 전기적
              성질을 바꿀 수 있다고 했으므로 X는 규소입니다. 이를 이용한 반도체
              소자는 태양 전지와 전자 기기 등에 쓰입니다.
            </p>
          </div>
        </div>
        <section className={card}>
          <h4 className={heading}>선지별 판단</h4>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>ㄱ · 틀림.</strong> X는 규소입니다. 그림에서 중심의 ⓑ가
              규소이고 꼭짓점의 ⓐ는 산소이므로 X는 ⓐ가 아닌 ⓑ입니다.
            </li>
            <li>
              <strong>ㄴ · 맞음.</strong> 규소와 산소가 결합한 사면체를 기본
              단위체로 하는 것은 규산염 광물입니다. 따라서 ㉠은 ‘규산염’입니다.
            </li>
            <li>
              <strong>ㄷ · 맞음.</strong> 불순물 첨가로 전기적 성질을 조절하고
              태양 전지 등에 이용하는 소자는 반도체 소자입니다. 따라서 ㉡은
              ‘반도체’입니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          ⓐ = 산소 · ⓑ = 규소 = X<br />㉠ = 규산염 · ㉡ = 반도체
        </p>
      </div>
    </details>
  );
}

export function ScienceQuestionFourAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>지각의 광물과 반도체를 잇는 규소</h3>
        <p className="mt-3">
          규산염 광물의 구조와 반도체의 원료를 각각 파악한 뒤, 두 자료의 공통
          원소를 연결하는 문항입니다. 지구 구성 물질의 지식과 소재의 전기적
          성질을 함께 사용합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 두 설명에서 같은 원소 찾기</h4>
        <p className="mt-3">
          앞부분은 규소·산소로 이루어진 규산염 사면체를, 뒷부분은 규소에
          불순물을 첨가해 전기적 성질을 조절하는 반도체를 설명합니다. X가 기본
          단위체의 구성 원자 중 하나라는 문장이 두 설명을 잇습니다.
        </p>
        <p className="mt-3">
          같은 규소를 포함한다고 해서 규산염 광물과 규소 반도체가 같은
          물질이거나 같은 성질을 갖는다는 뜻은 아닙니다. 어떤 원소가 어떤 구조로
          결합해 있는지도 구분해야 합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>2. 원소의 이름을 그림의 기호로 바꾸기 · ㄱ</h4>
        <p className="mt-3">
          ‘반도체의 원료는 규소’라고 알아도 판단이 끝나지 않습니다. X → 규소 →
          사면체 중심 → ⓑ의 순서로 대응해야 합니다. 그림에서 선이 가리키는
          원자를 확인하지 않고 기호를 선택하면 ㄱ에 흔들릴 수 있습니다.
        </p>
        <p className="mt-3 rounded-xl bg-gray-50 p-4 font-semibold dark:bg-gray-900">
          문장 속 원소 파악 → 중심과 꼭짓점 구분 → 기호 대조 → 선지 판단
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>3. 빈칸을 결정하는 단서 · ㄴ, ㄷ</h4>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>㉠:</strong> 지각의 암석, 두 종류의 원자, 사면체 기본
            단위체라는 단서를 묶어 규산염을 찾습니다.
          </li>
          <li>
            <strong>㉡:</strong> 불순물 첨가에 따른 전기적 성질 변화와 태양
            전지·스마트 기기의 활용 사례를 묶어 반도체를 찾습니다.
          </li>
        </ul>
      </section>
      <section className={card}>
        <h4 className={heading}>4. 맞는 설명 뒤의 기호까지 확인하기</h4>
        <p className="mt-3">
          제공된 분석은 ‘원소의 성질을 옳게 설명한 뒤 그림의 기호를 잘못
          연결하는 방식’을 오답 설계의 확장 지점으로 제안합니다. 규소의 성질에
          대한 설명이 맞더라도 마지막 기호 대응이 맞는지는 별도로 확인해야
          합니다.
        </p>
        <p className="mt-3">
          배점만으로 실제 난도나 변별력을 단정할 수는 없습니다. 이 문항에서
          확인할 학습 과제는 개념 연결과 그림의 기호를 정확히 읽는 과정입니다.
        </p>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          위 역분해는 원문을 바탕으로 한 SN의 해석이며 평가원의 공식 출제 의도는
          아닙니다.
        </p>
      </section>
    </div>
  );
}

const related = [
  {
    id: '169720-1',
    width: 2799,
    height: 2593,
    source: '2019학년도 3월 고2 교육청 · 지구과학Ⅰ · 15번 (제공 원고 기준)',
    title: '규산염 사면체의 중심 원자와 결합 구조',
    status: '직접 유사 · 규산염 중심 원자',
    connection:
      '규산염 사면체의 중심 원자를 규소로 식별하는 과정이 예시문항 ⓑ의 판별에 직접 대응합니다. 휘석·각섬석에서 사면체가 산소를 공유하는 방식은 추가 개념이며, 반도체와의 연결은 없습니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      'ㄱ: 사면체 중심의 A는 규소입니다. ㄴ: 휘석과 각섬석에서는 이웃한 규산염 사면체가 산소를 공유합니다. ㄷ: 사면체가 연결되는 구조에 따라 여러 규산염 광물이 만들어집니다. 세 설명 모두 옳습니다.',
  },
  {
    id: '175261-1',
    width: 2841,
    height: 2886,
    source: '2022학년도 3월 고2 교육청 · 물리학Ⅰ · 6번 (제공 원고 기준)',
    title: '불순물 반도체와 태양 전지의 활용',
    status: '직접 유사 · 반도체와 불순물 첨가',
    connection:
      '규소에 불순물을 첨가해 전기적 성질을 조절한다는 단서가 예시문항의 X·㉡ 판별에 직접 대응합니다. 태양 전지의 에너지 전환은 추가로 점검하며 규산염 사면체의 원자 위치는 묻지 않습니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      'ㄱ: 규소로만 이루어진 물질은 제시된 순수 반도체의 예입니다. ㄴ: 미량의 다른 원소를 첨가하면 전기적 성질을 변화시킬 수 있습니다. ㄷ: 태양 전지는 빛에너지를 전기 에너지로 전환합니다. 세 설명 모두 옳습니다.',
  },
];

export function ScienceQuestionFourRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <section className={card}>
        <h3 className={heading}>
          규산염과 반도체를 각각 확인하는 유사 기출 2개
        </h3>
        <p className="mt-3">
          제공된 PNG의 내용을 대조해 연결했습니다. 시험명·시기는 제공 원고
          기준이며 이미지에는 표시되어 있지 않습니다. 아래 해설은 문항 내용을
          바탕으로 작성한 SN 풀이입니다.
        </p>
      </section>
      {related.map(item => {
        const src = `/problems/Integrated_science_Studies/SImilar_questions/4/${item.id}.png`;
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
