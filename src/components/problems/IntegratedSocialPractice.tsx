const choices = [
  '갑은 A가 시장에서 막대한 부를 획득한 것 자체를 인간 고유의 기능을 탁월하게 실현한 것으로 볼 것이다.',
  '을은 청소년들이 또래 집단의 소외감을 피하기 위해 빚을 지는 것을, 더 큰 고통을 피하기 위해 작은 고통을 감수한 사려 깊은 선택으로 볼 것이다.',
  '갑은 지역 청소년 센터의 공동 수리·나눔 활동을 인간의 본성 실현과 무관한 사적 취미 활동으로 볼 것이다.',
  '갑과 을은 모두 청소년들이 또래에게 뒤처지지 않으려는 마음만으로 고가 상품을 구매하기보다, 그러한 소비가 좋은 삶에 기여하는지 이성적 성찰이나 사려 깊은 분별을 거쳐야 한다고 볼 것이다.',
  '을은 지역 청소년 센터의 공동 활동이 소박한 삶을 지향하더라도, 타인과 관계를 맺는 활동이라는 이유만으로 평정에 방해가 된다고 볼 것이다.',
];

const markers = ['①', '②', '③', '④', '⑤'];
const explanations = [
  '부의 획득 자체가 인간 고유의 이성적 기능을 탁월하게 실현했다는 뜻은 아니다. 갑은 올바른 성품을 바탕으로 덕에 따라 활동하는 삶을 중시한다.',
  '을은 더 큰 고통을 피하기 위해 작은 고통을 감수하는 선택을 인정할 수 있다. 그러나 사례에서는 구매 후에도 소외 불안이 해소되지 않고 상환 부담까지 더해져 고통이 커졌다. 따라서 이를 더 큰 고통을 피한 사려 깊은 선택으로 평가하는 것은 적절하지 않다.',
  '갑은 인간의 이성적 능력과 공동체적 삶을 중시한다. 센터의 활동은 소비 욕구에 관한 비판적 토론과 공동의 실천을 포함하므로, 이를 인간의 본성 실현과 무관한 사적 취미 활동으로 보는 것은 적절하지 않다.',
  '갑은 이성에 따라 덕을 실현하는 활동을, 을은 쾌락과 고통을 사려 깊게 헤아리는 분별을 중시한다. 따라서 두 입장 모두 또래에게 뒤처지지 않으려는 마음만으로 소비하기보다, 그 소비가 좋은 삶에 기여하는지 숙고해야 한다고 볼 것이다.',
  '을은 인간관계 자체를 평정의 장애로 보지 않는다. 우정과 상호 도움은 평온한 삶에 기여할 수 있으므로, 타인과 관계를 맺는다는 이유만으로 공동 활동을 부정하는 것은 적절하지 않다.',
];

export function QuestionOnePractice() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        예시문항 1번 연계 · 행복에 관한 관점의 현대 사회 적용
      </p>
      <article
        aria-labelledby="practice-question-heading"
        className="sn-exam-paper border border-gray-300 bg-white px-4 py-6 text-gray-950 shadow-sm sm:px-8 sm:py-8"
      >
        <div className="mb-6 flex items-center justify-between border-b-2 border-gray-900 pb-3 text-sm">
          <span className="font-bold">SNargen 생성 변형문제</span>
          <span>연습 문항</span>
        </div>
        <h3
          id="practice-question-heading"
          className="mb-5 break-keep text-base font-bold leading-8 sm:text-lg"
        >
          <span className="mr-2">[문항]</span>
          다음은 좋은 삶(행복)에 관한 갑, 을의 견해와 현대 사회의 사례이다. 이에
          대한 설명으로 가장 적절한 것은?
        </h3>
        <div className="space-y-4 border border-gray-800 p-4 text-[15px] leading-8 sm:p-5 sm:text-base">
          <p className="grid grid-cols-[1.5em_minmax(0,1fr)] gap-2">
            <strong>갑:</strong>
            <span>
              인간의 궁극적 목적은 단지 감각적인 즐거움을 지속적으로 누리는 데
              있지 않다. 인간 고유의 기능인 이성적 능력을 탁월하게 발휘하고,
              올바른 성품을 길러 덕에 따라 활동할 때 비로소 온전한 행복을 실현할
              수 있다.
            </span>
          </p>
          <p className="grid grid-cols-[1.5em_minmax(0,1fr)] gap-2">
            <strong>을:</strong>
            <span>
              마음의 동요나 두려움이 끊임없이 되풀이되는 삶에서는 참된 평온을
              얻기 어렵다. 욕망을 충족했을 때 뒤따르는 쾌락과 고통을 사려 깊게
              헤아리고, 헛된 욕망에 휘둘리지 않으며 적은 것으로도 만족할 줄 아는
              지혜가 필요하다.
            </span>
          </p>
        </div>
        <section
          aria-labelledby="practice-case-heading"
          className="relative mt-6 border border-gray-800 px-4 pb-4 pt-5 sm:px-5"
        >
          <h4
            id="practice-case-heading"
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-4 text-base font-bold"
          >
            &lt;사례&gt;
          </h4>
          <div className="space-y-4 text-[15px] leading-8 sm:text-base">
            <p>
              플랫폼 기업가 A는 이용자의 심리를 자극하는 맞춤형 광고 알고리즘을
              개발하여 막대한 수익을 올렸다. A는 이 수익으로 호화로운 소비
              생활을 누리는 일상을 SNS에 지속적으로 공개하며 “더 많이 소유하고
              소비할수록 더 자유로워진다”고 주장한다.
            </p>
            <p>
              이 영상이 유행하자 일부 청소년들은 또래 집단에서 뒤처지지 않기
              위해 무리하게 빚을 내어 고가 유행 상품을 구매한다. 그러나 구매
              후에도 비교와 소외에 대한 불안은 해소되지 않고, 상환 부담까지
              더해져 이전보다 큰 심리적 고통을 겪고 있다.
            </p>
            <p>
              한편, 지역 청소년 센터는 상업적 알고리즘이 소비 욕구에 미치는
              영향을 비판적으로 토론하고, 필요한 물건을 함께 수리하고 나누어
              쓰는 프로그램을 운영하고 있다.
            </p>
          </div>
        </section>
        <ol
          aria-label="선택지"
          className="mt-6 list-none space-y-3 text-[15px] leading-8 sm:text-base"
        >
          {choices.map((choice, index) => (
            <li
              key={choice}
              className="grid grid-cols-[1.5em_minmax(0,1fr)] gap-1"
            >
              <span>{markers[index]}</span>
              <span>{choice}</span>
            </li>
          ))}
        </ol>
      </article>
      <details className="rounded-xl border border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-gray-900">
        <summary className="cursor-pointer rounded-xl px-5 py-4 font-semibold text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600 dark:text-emerald-200">
          정답·해설 보기
        </summary>
        <div className="space-y-5 border-t border-emerald-200 px-5 py-5 text-sm leading-7 text-gray-700 dark:border-emerald-900 dark:text-gray-300">
          <p className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
            정답 ④
          </p>
          <p>
            갑은 아리스토텔레스, 을은 에피쿠로스의 관점에 해당한다. 두 사상가가
            행복을 설명하는 방식은 다르지만, 이성적 성찰 없이 욕망을 추종하는
            삶을 비판한다는 점에서 공통점을 찾을 수 있다.
          </p>
          <ol aria-label="선지별 해설" className="space-y-3">
            {explanations.map((explanation, index) => (
              <li key={explanation}>
                <strong className="mr-2">
                  {markers[index]} {index === 3 ? '적절함' : '부적절함'}
                </strong>
                {explanation}
              </li>
            ))}
          </ol>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            제공된 연습 문항에 대한 SN 해설입니다.
          </p>
        </div>
      </details>
    </div>
  );
}
