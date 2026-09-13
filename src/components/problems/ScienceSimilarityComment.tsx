const descriptions = {
  high: '높음 · 직접 유사',
  medium: '보통 · 부분 직접 연결',
  low: '낮음 · 보충 학습',
  advanced: '낮음 · 심화 학습',
};

export function ScienceSimilarityGuide() {
  return (
    <p className="rounded-xl bg-gray-50 p-4 text-xs leading-6 text-gray-600 dark:bg-gray-900 dark:text-gray-300">
      유사도는 소재나 그림의 모양보다 풀이에 필요한 판단 과정을 기준으로 한 SN의
      정성 평가입니다. 높음은 핵심 판단의 직접 대응, 보통은 일부 선지·개념의
      대응, 낮음은 배경 개념의 보충을 뜻합니다. 심화는 추가 지식이 필요하다는
      표시이며, 유사도가 높다는 뜻은 아닙니다. 출처·정답의 확인 상태는 유사도와
      별개입니다.
    </p>
  );
}

export function ScienceSimilarityComment({
  status,
  connection,
}: {
  status: string;
  connection: string;
}) {
  const level = status.startsWith('부분')
    ? 'medium'
    : status.startsWith('심화')
      ? 'advanced'
      : status.startsWith('보충')
        ? 'low'
        : 'high';
  const focus = status.split(' · ').slice(1).join(' · ');
  return (
    <div className="my-4 rounded-xl border border-gray-200 p-4 dark:border-gray-700">
      <p className="font-bold text-gray-950 dark:text-gray-100">
        유사도: {descriptions[level]}
      </p>
      {focus && <p className="mt-1 text-sm">연결 범위: {focus}</p>}
      <p className="mt-3 text-sm leading-7">
        <strong>유사한 이유와 차이: </strong>
        {connection}
      </p>
    </div>
  );
}
