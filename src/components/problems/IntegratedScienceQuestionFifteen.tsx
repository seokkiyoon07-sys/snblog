import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';
const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
export function ScienceQuestionFifteenSolution() {
  return (
    <details className={card}>
      <summary className="cursor-pointer font-bold">정답·해설 보기</summary>
      <div className={body + ' mt-5'}>
        <h3 className="text-lg font-bold">정답 ③ · ㄱ, ㄴ</h3>
        <p className="rounded-xl bg-amber-50 p-4 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100">
          방향 확인: ㉢은 생물권에서 C로 향합니다. C에서 생물권으로 향하는 반대
          화살표와 구분해야 합니다. 따라서 광합성을 예로 든 ㄷ은 틀립니다.
        </p>
        <section className={card}>
          <h4 className="font-bold">권역과 과정 판별</h4>
          <ul className="space-y-2">
            <li>
              ㉡ · 생물권 → B: 생물 유래 탄소가 석탄으로 저장되므로 B는
              지권입니다.
            </li>
            <li>
              ㉠ · A → 생물권: 산호가 해수에 녹은 무기 탄소를 이용해 골격을
              형성하므로 A는 수권입니다.
            </li>
            <li>
              남은 C는 기권입니다. ㉢은 생물권 → 기권으로, 육상 생물의 호흡 등을
              예로 들 수 있습니다.
            </li>
          </ul>
        </section>
        <section className={card}>
          <h4 className="font-bold">선지별 판단</h4>
          <p>
            <strong>ㄱ · 맞음.</strong> A는 수권입니다. 산호 골격 생성에서
            탄소가 출발하는 곳을 확인합니다.
          </p>
          <p>
            <strong>ㄴ · 맞음.</strong> 탄산염의 침전으로 석회암이 형성되면
            탄소가 수권에서 지권(B)으로 이동합니다. 이 과정은 B에 저장되는
            탄소량을 증가시킵니다.
          </p>
          <p>
            <strong>ㄷ · 틀림.</strong> 육상 식물의 광합성은 기권의 이산화
            탄소를 이용하므로 기권(C) → 생물권입니다. ㉢의 생물권 → 기권과
            반대이므로 ⓐ에 해당하지 않습니다.
          </p>
        </section>
        <p>
          산호가 골격을 만드는 과정과 골격 등이 퇴적되어 암석이 되는 과정은
          구분합니다. 또 한 권역에 들어오는 탄소 이동과 지구 전체 탄소량의
          증가는 서로 다른 개념입니다.
        </p>
      </div>
    </details>
  );
}
export function ScienceQuestionFifteenAnalysis() {
  return (
    <div className={body}>
      <h3 className="text-lg font-bold">
        SN 문항 역분해 · 권역 이름보다 화살표의 시작과 끝 확인
      </h3>
      <section className={card}>
        <h4 className="font-bold">1. 예시로 권역을 정한 뒤 방향 재확인</h4>
        <p>
          석탄 생성으로 B=지권, 산호 골격 생성으로 A=수권을 정합니다. C=기권을
          알아낸 뒤에도 각 화살표의 머리를 다시 확인해야 합니다. 권역을 모두
          맞혀도 ㉢의 방향을 거꾸로 읽으면 ㄷ을 잘못 판단합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">2. 같은 두 권역 사이의 반대 과정</h4>
        <p>
          기권 → 생물권은 육상 식물의 광합성, 생물권 → 기권은 호흡 등의
          과정입니다. 연결된 권역이 같다는 사실만으로 같은 과정이 되지는
          않습니다.
        </p>
      </section>
      <section className={card}>
        <h4 className="font-bold">3. 생성된 물질의 저장 위치 추적</h4>
        <p>
          산호의 골격은 이 모형에서 생물권, 석탄과 석회암은 지권에 속합니다.
          생물의 작용이나 물질 이름만 보는 대신 탄소가 어느 권역에서 어느
          권역으로 옮겨졌는지 문장으로 바꾸면 판단이 명확해집니다.
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
    id: '168432-1',
    width: 2886,
    height: 2897,
    source:
      '2018학년도 6월 고3 평가원 모의평가 · 지구과학Ⅰ · 2번 (제공 원고 기준)',
    title: '탄소 이동의 예로 미지의 권역 판별',
    status: '직접 유사 · 권역 추론과 방향 매칭',
    connection:
      '석탄 형성·탄산염 침전 등의 예시로 권역을 추론하는 구조가 매우 가깝습니다. 다만 기출의 c는 기권 → 생물권으로 광합성이 맞고, 예시문항 ㉢은 반대 방향입니다. 도형의 위치나 기호를 그대로 옮겨 적용하면 안 됩니다.',
    answer: '② · ㄴ',
    solution:
      'b의 석탄 형성으로 (나)는 지권, a의 화산 가스 분출로 (가)는 기권, 남은 (다)는 수권입니다. ㄱ은 틀립니다. c는 기권에서 생물권으로 이동하므로 광합성이 해당하여 ㄴ은 옳습니다. 화석 연료 사용은 탄소의 권역별 분포를 바꾸며 지구 전체 탄소를 새로 만드는 과정이 아니므로 ㄷ은 틀립니다.',
  },
  {
    id: '171586-1',
    width: 2803,
    height: 2479,
    source: '2020학년도 4월 고2 교육청 · 지구과학Ⅰ · 6번 (제공 원고 기준)',
    title: '광합성·석탄 생성·석회암 형성의 방향',
    status: '직접 유사 · 세 과정의 탄소 이동',
    connection:
      '석탄 생성과 수권에서 지권으로의 탄소 이동이 예시문항 ㉡·ㄴ에 직접 대응합니다. 광합성이 기권 탄소를 감소시킨다는 판단도 예시문항 ㄷ의 방향 구분과 연결됩니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      '광합성은 기권의 탄소를 생물권으로 이동시켜 기권 탄소를 감소시키므로 ㄱ은 틀립니다. 석탄 생성은 생물권 → 지권인 C의 예이므로 ㄴ은 옳습니다. 수권 → 지권인 B로 이동한 탄소는 석회암 등에 저장되므로 ㄷ도 옳습니다.',
  },
  {
    id: '153359-1',
    width: 2809,
    height: 2020,
    source:
      '2010년 11월 수능 · 지구과학Ⅰ · 4번 (제공 원고 기준·시행 연도 표기)',
    title: '광합성의 반대 방향과 석회암 생성',
    status: '직접 유사 · 원문 ㄴ·ㄷ의 판단',
    connection:
      '기출에도 탄소 순환 그림이 있습니다. A가 생물권 → 대기권인데 광합성이라고 제시한 오답은 예시문항 ㄷ과 매우 가깝고, B의 석회암 생성도 예시문항 ㄴ과 연결됩니다. 연도가 오래되었다는 이유로 풀이 유사도가 낮아지는 것은 아닙니다.',
    answer: '① · ㄴ',
    solution:
      'A는 생물권 → 대기권이므로 광합성의 방향과 반대여서 ㄱ은 틀립니다. B는 수권 → 암권으로 석회암 생성이 해당하여 ㄴ은 옳습니다. 화석 연료 사용은 권역 사이의 탄소 이동이지 지구 전체 탄소량의 감소가 아니므로 ㄷ은 틀립니다.',
  },
  {
    id: '154158-1',
    width: 2005,
    height: 1449,
    source:
      '2011년 6월 학력평가 · 지구과학Ⅰ · 3번 (제공 원고 기준·학년 미확인)',
    title: '호흡과 석회암 생성을 화살표에 연결',
    status: '직접 유사 · 방향에서 과정 선택',
    connection:
      'A는 생물권 → 기권으로 예시문항 ㉢에 들어갈 호흡을 직접 묻습니다. B의 수권 → 암권도 예시문항 ㄴ과 연결됩니다. 권역 이름은 주어져 있어 예시문항의 A·B·C 추론 단계는 없습니다.',
    answer: '① · 호흡, 석회암의 생성',
    solution:
      'A의 생물권 → 기권 이동은 호흡입니다. B의 수권 → 암권 이동은 석회암 생성입니다. 따라서 두 과정이 모두 맞는 선택지는 ①입니다.',
  },
];
export function ScienceQuestionFifteenRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <p>
        4개 모두 탄소 이동 방향과 과정 판단에 직접 연결됩니다. 특히 오래된 두
        기출도 호흡·광합성 방향과 석회암 생성을 직접 다루므로 함께 유지했습니다.
        시험 정보는 제공 원고 기준이며 PNG에는 시험명이 표시되어 있지 않습니다.
      </p>
      {related.map(item => {
        const src =
          '/problems/Integrated_science_Studies/SImilar_questions/15/' +
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
