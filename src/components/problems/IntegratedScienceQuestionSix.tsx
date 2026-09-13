import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';

const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';

export function ScienceQuestionSixSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ⑤ · ㄱ, ㄴ, ㄷ</h3>
        <p>
          탐구 과정에서는 데이터 처리의 목적을, 그래프에서는 상대 습도의
          변화량과 기온·기압의 변화 방향을 읽습니다. 서로 다른 세로축과 선의
          종류를 먼저 구분하세요.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className={card}>
            <h4 className="font-bold">굵은 실선 · 기온</h4>
            <p className="mt-2">왼쪽 세로축의 ℃를 읽습니다.</p>
          </div>
          <div className={card}>
            <h4 className="font-bold">가는 실선 · 기압</h4>
            <p className="mt-2">오른쪽 안쪽 세로축의 hPa를 읽습니다.</p>
          </div>
          <div className={card}>
            <h4 className="font-bold">파선 · 상대 습도</h4>
            <p className="mt-2">오른쪽 바깥 세로축의 %를 읽습니다.</p>
          </div>
        </div>
        <section className={card}>
          <h4 className={heading}>선지별 판단</h4>
          <ul className="mt-3 space-y-4">
            <li>
              <strong>ㄱ · 맞음.</strong> ㉠은 수집한 자료의 측정 오차와 편향된
              값을 처리하는 과정입니다. 부정확한 값이 분석 결과를 왜곡하는
              영향을 줄여 신뢰성을 높일 수 있습니다.
            </li>
            <li>
              <strong>ㄴ · 맞음.</strong> 회색 영역 A와 B의 양 끝에서 상대 습도
              파선을 비교합니다. A는 약 40%대에서 70% 안팎으로, B는 약 50%대에서
              70% 안팎으로 상승합니다. 끝값은 비슷하지만 A의 시작값이 더
              낮으므로 증가량은 A가 더 큽니다. B도 상승하므로 ‘높은 값에서 거의
              일정하다’고 읽지는 않습니다.
            </li>
            <li>
              <strong>ㄷ · 맞음.</strong> 굵은 실선인 기온이 높은 지점에서
              낮아지는 구간을 따라가면, 가는 실선인 기압은 대체로 높아집니다. 이
              탐구 결과에서 두 요소가 반대 방향으로 변하는 경향을 확인할 수
              있습니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          선과 축 확인 → 구간의 시작·끝값 비교 → 같은 기간의 변화 방향 대조
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          습도 수치는 그래프에서 읽은 근삿값입니다. 선지 판단에는 정밀한 수치
          계산보다 A와 B의 상대적인 변화량 비교가 필요합니다.
        </p>
      </div>
    </details>
  );
}

export function ScienceQuestionSixAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>
          데이터의 신뢰성과 그래프 해석을 함께 점검하기
        </h3>
        <p className="mt-3">
          자료 수집 → 오차·편향 처리 → 월평균 변환 → 그래프 표현의 흐름을
          제시합니다. 분석할 자료를 준비하는 과정과 완성된 그래프에서 결론을
          읽는 과정을 함께 묻습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 자료가 많아도 검토는 필요 · ㄱ</h4>
        <p className="mt-3">
          관측값이 많다는 사실만으로 분석의 신뢰성이 보장되지는 않습니다. 측정
          오차나 편향을 적절한 기준으로 처리해야 결과의 왜곡을 줄일 수 있습니다.
          예상과 다른 값을 임의로 지워 원하는 결론에 맞추는 것과는 구분해야
          합니다.
        </p>
        <p className="mt-3">
          월평균으로 바꾸면 계절적인 변화 경향을 보기 쉬워지지만, 개별 날짜의
          급격한 변화는 평균에 가려질 수 있습니다. 분석 목적에 맞는 시간 단위를
          선택한다는 의미도 함께 읽을 수 있습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>2. 값의 크기와 변화량은 별개 · ㄴ</h4>
        <p className="mt-3">
          값은 한 시점의 높이이고, 변화량은 구간의 끝값에서 시작값을 뺀
          값입니다. A와 B에서는 상대 습도가 모두 증가하지만, 낮은 값에서 출발한
          A가 더 크게 증가합니다.
        </p>
        <p className="mt-3 rounded-xl bg-gray-50 p-4 font-semibold dark:bg-gray-900">
          변화량 = 끝값 − 시작값
          <br />
          변화량이 크다 ≠ 구간의 모든 값이 더 높다
        </p>
        <p className="mt-3">
          상대 습도 두 값의 차이를 수치로 표현할 때는 퍼센트포인트(%p)를
          사용합니다. 또한 그래프의 기울기는 단위 시간당 변화율이므로 변화량과
          구분해서 읽습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>3. 상관관계는 관측 범위에서 판단 · ㄷ</h4>
        <p className="mt-3">
          ‘이 탐구 결과에서’, ‘경향을 보인다’라는 표현이 판단의 범위를 정합니다.
          제시된 지역과 기간에서 기온 하강과 기압 상승이 대체로 함께 나타나는지
          확인하면 됩니다.
        </p>
        <p className="mt-3">
          이를 ‘기온이 내려가면 언제나 기압이 오른다’는 보편 법칙이나 기온이
          기압 변화를 직접 일으켰다는 인과 관계로 확대할 수는 없습니다. 기온과
          상대 습도도 일정한 비율로 움직인다는 뜻의 비례 관계로 단정하지
          않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>4. 서로 다른 축의 높이를 혼동하지 않기</h4>
        <p className="mt-3">
          기온·기압·상대 습도는 단위와 눈금 범위가 다릅니다. 두 곡선이
          교차한다고 두 물리량의 값이 같다는 뜻은 아닙니다. 각 선의 세로축을
          따로 읽고, 변화 방향을 비교할 때는 같은 시간 구간을 대조해야 합니다.
        </p>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          위 내용은 SN의 자료 해석과 문항 분석입니다. 배점만으로 실제
          난도·변별력이나 평가원의 공식 출제 의도를 단정하지 않습니다.
        </p>
      </section>
    </div>
  );
}

const related = [
  {
    id: '174290-1',
    width: 2788,
    height: 2259,
    source: '2021학년도 8월 고2 교육청 · 지구과학Ⅰ · 10번 (제공 원고 기준)',
    title: '온대 저기압 통과 전후의 기온·기압 변화',
    status: '보충 학습 · 기상 그래프 읽기',
    connection:
      '서로 다른 축의 기온·기압을 같은 시점에서 읽는 자료 해석을 공유합니다. 기출은 전선 통과에 따른 2일간의 변화이고 예시문항은 월평균 자료입니다. 데이터 전처리와 상대 습도 변화량 비교는 다루지 않습니다.',
    answer: '② · ㄴ',
    solution:
      'ㄱ: 둘째 날 6시 무렵 이후 기온이 급격히 낮아지고 기압이 상승하며 풍향도 바뀌므로 한랭 전선 통과에 해당합니다. 온난 전선이 아닙니다. ㄴ: 남동풍 계열에서 남서풍 계열을 거쳐 북서풍 계열로 바뀌는 흐름과 전선 통과 양상으로 보아 저기압 중심은 관측 지역 북쪽을 통과했습니다. ㄷ: 한랭 전선에 따른 소나기 가능성이 높은 때는 첫째 날 21시가 아니라 둘째 날 아침 무렵입니다.',
  },
  {
    id: '177543-1',
    width: 2792,
    height: 2680,
    source: '2023학년도 6월 고3 평가원 · 지구과학Ⅰ · 13번 (제공 원고 기준)',
    title: '태풍 통과에 따른 기압과 표층 수온의 변화',
    status: '심화 학습 · 태풍과 표층 수온',
    connection:
      '기압 최저점과 시간에 따른 값의 변화를 읽는 방법만 공유합니다. 기출의 실선은 기온이 아니라 표층 수온이고 위험 반원·용승 등 태풍 지식이 추가로 필요합니다. 전처리·습도 변화량을 연습하는 직접 유사문제는 아닙니다.',
    answer: '③ · ㄱ, ㄴ',
    solution:
      'ㄱ: 풍향이 남동풍 계열에서 남풍·남서풍을 거쳐 서풍 계열로 시계 방향으로 변하므로 북반구 태풍의 위험 반원에 해당합니다. ㄴ: t₂가 기압 최저점에 가까우므로 t₄보다 태풍 중심이 관측소에 더 가까웠다고 해석합니다. ㄷ: t₂에서 t₄로 갈수록 표층 수온이 낮아집니다. 태풍에 의한 용승과 혼합으로 차가운 아래쪽 물이 표층에 영향을 주는 것으로 설명하며, 해수 침강으로 설명한 선지는 틀립니다.',
  },
];

export function ScienceQuestionSixRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <section className={card}>
        <h3 className={heading}>시간에 따른 기상 자료를 읽는 유사 기출 2개</h3>
        <p className="mt-3">
          제공된 PNG의 곡선·축·선지를 직접 확인해 연결했습니다. 시험명·시기는
          제공 원고 기준이며 이미지에는 표시되어 있지 않습니다. 아래 해설은
          이미지 내용을 바탕으로 작성한 SN 풀이입니다.
        </p>
      </section>
      {related.map(item => {
        const src = `/problems/Integrated_science_Studies/SImilar_questions/6/${item.id}.png`;
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
      <p className="text-xs text-gray-500 dark:text-gray-400">
        한랭 전선 통과 시 기압 상승과 풍향 변화에 대한 참고:{' '}
        <a
          className="underline"
          href="https://www.weather.gov/key/glossary"
          target="_blank"
          rel="noreferrer"
        >
          미국 기상청 기상 용어 설명
        </a>
      </p>
    </div>
  );
}
