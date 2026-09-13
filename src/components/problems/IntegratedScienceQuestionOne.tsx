import Image from 'next/image';
import {
  ScienceSimilarityComment,
  ScienceSimilarityGuide,
} from './ScienceSimilarityComment';

const body = 'space-y-6 text-sm leading-7 text-gray-700 dark:text-gray-300';
const card = 'rounded-2xl border border-gray-200 p-5 dark:border-gray-700';
const heading = 'text-lg font-bold text-gray-950 dark:text-white';

export function ScienceQuestionOneSolution() {
  return (
    <details className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
      <summary className="cursor-pointer font-bold text-emerald-900 dark:text-emerald-200">
        정답·해설 보기
      </summary>
      <div className={`mt-6 ${body}`}>
        <h3 className={heading}>정답 ③ · ㄱ, ㄷ</h3>
        <p>
          핵심은 생태계에 피해가 나타났다는 공통점보다{' '}
          <strong>피해를 일으킨 원인</strong>을 구분하는 것입니다. (가)는 환경
          오염, (나)는 외래생물 유입입니다.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className={card}>
            <h4 className="font-bold">(가) 환경 오염</h4>
            <p className="mt-2">
              폐그물과 폐플라스틱 등 해양쓰레기가 해양 포유류와 바닷새의 생존을
              위협합니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">(나) 외래생물 유입</h4>
            <p className="mt-2">
              해외에서 유입된 뉴트리아가 주변 식물을 먹어 생태계를 파괴한다는
              단서로 판단합니다.
            </p>
          </div>
          <div className={card}>
            <h4 className="font-bold">㉠ 지구 온난화</h4>
            <p className="mt-2">
              기온 상승으로 생물의 서식 환경이 달라지고 서식지를 잃는 사례가
              들어갑니다.
            </p>
          </div>
        </div>
        <section className={card}>
          <h4 className="font-bold">선지별 판단</h4>
          <ul className="mt-3 space-y-3">
            <li>
              <strong>ㄱ · 맞음.</strong> 해양쓰레기로 인한 피해는 환경 오염의
              사례입니다.
            </li>
            <li>
              <strong>ㄴ · 틀림.</strong> 제시된 문제는 뉴트리아가 주변 생태계에
              주는 피해입니다. 이를 보호 대상으로 지정하는 것은 피해를 줄이는
              해결 방향과 맞지 않습니다. 생태계에 미치는 영향을 살피면서 개체
              수와 확산을 관리하는 방향으로 접근해야 합니다.
            </li>
            <li>
              <strong>ㄷ · 맞음.</strong> 제시된 북극이끼 사례는 기온 상승 →
              서식 환경 변화 → 서식지 감소의 인과 관계를 나타내므로 지구
              온난화의 예에 해당합니다.
            </li>
          </ul>
        </section>
        <p className="rounded-xl bg-emerald-50 p-4 font-semibold dark:bg-emerald-950/40">
          사례의 원인 분류 → 대책의 방향 판단 → 새로운 사례 적용. 이 순서로
          읽으면 ㄱ과 ㄷ만 남습니다.
        </p>
      </div>
    </details>
  );
}

export function ScienceQuestionOneAnalysis() {
  return (
    <div className={body}>
      <section className={card}>
        <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
          SN 문항 역분해
        </p>
        <h3 className={`mt-2 ${heading}`}>
          생태계 변화의 원인과 해결 방향을 구분하기
        </h3>
        <p className="mt-3">
          환경 오염·외래생물 유입·지구 온난화라는 기본 개념을 사례에 대응시키는
          문항입니다. 복잡한 계산보다 분류의 정확성과 원인에 맞는 대책을
          판단하는 능력을 확인합니다.
        </p>
      </section>
      <section className={card}>
        <h4 className={heading}>1. 자료와 선지가 맡은 역할</h4>
        <ol className="mt-3 list-decimal space-y-3 pl-5">
          <li>
            <strong>표의 (가)·(나):</strong> 해양쓰레기와 해외 유입이라는
            단서에서 환경 변화의 종류를 찾습니다.
          </li>
          <li>
            <strong>ㄱ:</strong> 자료의 사례를 개념으로 바꾸는 기본 분류입니다.
          </li>
          <li>
            <strong>ㄴ:</strong> 생물 보호라는 긍정적인 표현이 주어진 생태계
            피해를 해결하는 방향인지 따집니다.
          </li>
          <li>
            <strong>ㄷ:</strong> 기온 상승이 서식지 감소로 이어지는 새 사례를
            빈칸에 적용합니다.
          </li>
        </ol>
      </section>
      <section className={card}>
        <h4 className={heading}>2. 오답을 만드는 사고의 지점</h4>
        <p className="mt-3">
          ㄴ은 ‘생물을 보호하면 생태계에도 도움이 된다’는 일반적인 생각을 피해를
          일으키는 개체군에 그대로 적용한 선지입니다. 보호라는 말의 인상보다,
          조치가 문제의 원인을 줄이는지 확인해야 합니다.
        </p>
        <p className="mt-3">
          SN의 해석으로는 ㄴ의 대책이 제시된 피해와 뚜렷하게 어긋나 오답을
          비교적 쉽게 가려낼 수 있습니다. 다만 실제 정답률이나 선지 선택률 자료
          없이 문항의 변별력을 단정할 수는 없습니다.
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
    id: '162025-1',
    source: '기출 문항 20번 · 시험명·연도 미확인',
    width: 2806,
    height: 3092,
    title: '생물 다양성의 세 수준과 서식지 파괴',
    status: '보충 학습 · 서식지 파괴와 다양성',
    connection:
      '서식지 감소가 생물 다양성에 미치는 영향을 확인합니다. 예시문항 1번의 환경 오염·외래종·온난화 사례 분류나 외래종 관리 방법은 묻지 않으므로 배경 개념 복습용입니다.',
    answer: '⑤ · ㄱ, ㄴ, ㄷ',
    solution:
      '동일 종 내 개체의 유전적 차이에 따른 형질의 다양성이 유전적 다양성입니다. 종 다양성과 생태계 안정성의 관계, 서식지 파괴에 따른 생물 다양성 감소도 옳은 설명입니다.',
  },
  {
    id: '167783-1',
    source: '기출 문항 3번 · 시험명·연도 미확인',
    width: 2002,
    height: 1521,
    title: '생물 다양성 보전과 대책의 방향',
    status: '보충 학습 · 연결이 약한 보전 방법',
    connection:
      '생물 다양성 보전이라는 넓은 주제만 공유합니다. 종자 은행과 유전자 자원 보전은 생태계 교란 외래종의 개체 수 관리와 목적·방법이 다르므로 예시문항 ㄴ의 직접 유사문제로 보기 어렵습니다.',
    answer: '③ · A, B',
    solution:
      '유전자 자원 확보를 위해 생물 다양성을 보전하는 것은 중요하며, 종자 은행도 보전 방법입니다. C는 생물 다양성과 안정성의 일반적인 관계를 반대로 설명했습니다.',
  },
  {
    id: '177135-1',
    source: '기출 문항 5번 · 시험명·연도 미확인',
    width: 2795,
    height: 1491,
    title: '다양성의 개념 구분과 생태 통로',
    status: '보충 학습 · 위협 요인과 대책',
    connection:
      '위협 요인에 맞는 대책인지 판단하는 사고를 연습합니다. 다만 생태 통로는 서식지 단편화에 대한 대책으로, 예시문항의 외래종 유입 대책과 구분해야 합니다. 다양성의 범주 구분도 추가됩니다.',
    answer: '④ · ㄴ, ㄷ',
    solution:
      'ㄱ은 종 다양성에 대한 설명을 생태계 다양성으로 잘못 이름 붙였습니다. 남획은 생물 다양성을 감소시키며, 생태 통로는 서식지 단편화의 피해를 줄이는 방법입니다.',
  },
];

export function ScienceQuestionOneRelated() {
  return (
    <div className={body}>
      <ScienceSimilarityGuide />
      <section className={card}>
        <h3 className={heading}>
          생물 다양성과 보전으로 이어지는 유사문제 3개
        </h3>
        <p className="mt-3">
          1번의 환경 변화·서식지 감소·대책 판단과 연결되는 개념 연계 문항입니다.
          제공된 이미지에는 시험명과 시행 연도가 없어 파일 식별자와 기출 문항
          번호로 구분했습니다. 아래 해설은 이미지 내용을 바탕으로 작성한 SN
          풀이입니다.
        </p>
      </section>
      {related.map(item => {
        const src = `/problems/Integrated_science_Studies/SImilar_questions/1/${item.id}.png`;
        return (
          <section key={item.id} className={card}>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              자료 {item.id} · {item.source}
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
