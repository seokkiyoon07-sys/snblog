import type { ProblemSet } from '@/types/problems';

const problemSet: ProblemSet = {
  meta: {
    id: 'sntk-math1-level3',
    title: '2027 수능특강 Level.3 실력완성',
    subject: '수학',
    subcategory: 'math1',
    totalTriplets: 3,
  },
  triplets: [
    // ============ 1번 트리플렛 ============
    {
      number: 1,
      source: '[26008-0029] 수능특강 Level.3 실력완성 1번',
      topic: '지수와 로그',
      original: {
        variant: 'original',
        questionHtml:
          '다음 조건을 만족시키는 두 양수 \\(a, b\\)에 대하여 \\(3^{a} \\times 3^{b}\\)의 최댓값을 \\(p\\), 최솟값을 \\(q\\)라 할 때, \\(p-q\\)의 값은?',
        viewbox: [
          { html: '(가) \\(3^{a}=27^{b}\\)이고 그 값은 자연수이다.' },
          { html: '(나) \\(\\dfrac{1}{a}+\\dfrac{1}{b}\\)는 자연수이다.' },
        ],
        choices: [
          { label: '①', text: '\\(220\\sqrt[3]{3}\\)' },
          { label: '②', text: '\\(225\\sqrt[3]{3}\\)' },
          { label: '③', text: '\\(230\\sqrt[3]{3}\\)' },
          { label: '④', text: '\\(235\\sqrt[3]{3}\\)' },
          { label: '⑤', text: '\\(240\\sqrt[3]{3}\\)' },
        ],
        solution: {
          answerDisplay: '⑤ \\(240\\sqrt[3]{3}\\)',
          correctIndex: 4,
          steps: [
            { html: '(가) \\(3^a=27^b=(3^3)^b=3^{3b}\\)이므로 \\(a=3b\\).' },
            {
              html: '(나) \\(\\dfrac{1}{a}+\\dfrac{1}{b}=\\dfrac{1}{3b}+\\dfrac{1}{b}=\\dfrac{4}{3b}=\\dfrac{4}{a}\\). 이를 자연수 \\(n\\)이라 두면 \\(\\dfrac{4}{a}=n\\), \\(a=\\dfrac{4}{n}\\).',
            },
            {
              html: '\\(3^a=3^{4/n}\\)이 자연수이려면 \\(\\dfrac{4}{n}\\)이 정수 → \\(n\\mid 4\\), 따라서 \\(n\\in\\{1,2,4\\}\\).',
            },
            {
              html: '\\(b=\\dfrac{a}{3}\\)이므로 \\(3^a\\cdot 3^b=3^{a+b}=3^{4a/3}=3^{16/(3n)}\\).',
            },
            {
              html: '최대 \\(n=1\\): \\(3^{16/3}=3^5\\cdot 3^{1/3}=243\\sqrt[3]{3}\\).<br/>최소 \\(n=4\\): \\(3^{4/3}=3\\sqrt[3]{3}\\).',
            },
            { html: '\\(p-q=(243-3)\\sqrt[3]{3}=240\\sqrt[3]{3}\\).' },
          ],
        },
      },
      variant: {
        variant: 'variant',
        questionHtml:
          '다음 조건을 만족시키는 두 양수 \\(a, b\\)에 대하여 \\(2^{a} \\times 2^{b}\\)의 최댓값을 \\(p\\), 최솟값을 \\(q\\)라 할 때, \\(p-q\\)의 값은?',
        viewbox: [
          { html: '(가) \\(2^{a}=8^{b}\\)이고 그 값은 자연수이다.' },
          { html: '(나) \\(\\dfrac{1}{a}+\\dfrac{1}{b}\\)는 자연수이다.' },
        ],
        choices: [
          { label: '①', text: '\\(24\\sqrt[3]{2}\\)' },
          { label: '②', text: '\\(26\\sqrt[3]{2}\\)' },
          { label: '③', text: '\\(30\\sqrt[3]{2}\\)' },
          { label: '④', text: '\\(32\\sqrt[3]{2}\\)' },
          { label: '⑤', text: '\\(36\\sqrt[3]{2}\\)' },
        ],
        solution: {
          answerDisplay: '③ \\(30\\sqrt[3]{2}\\)',
          correctIndex: 2,
          steps: [
            { html: '(가) \\(2^a=8^b=(2^3)^b=2^{3b}\\)이므로 \\(a=3b\\).' },
            {
              html: '(나) \\(\\dfrac{1}{a}+\\dfrac{1}{b}=\\dfrac{4}{3b}=\\dfrac{4}{a}\\). 자연수 \\(n\\)이라 두면 \\(a=\\dfrac{4}{n}\\).',
            },
            {
              html: '\\(2^{4/n}\\)이 자연수 → \\(n\\mid 4\\), \\(n\\in\\{1,2,4\\}\\).',
            },
            { html: '\\(2^a\\cdot 2^b=2^{4a/3}=2^{16/(3n)}\\).' },
            {
              html: '최대 \\(n=1\\): \\(2^{16/3}=32\\sqrt[3]{2}\\). 최소 \\(n=4\\): \\(2^{4/3}=2\\sqrt[3]{2}\\).',
            },
            { html: '\\(p-q=(32-2)\\sqrt[3]{2}=30\\sqrt[3]{2}\\).' },
          ],
        },
      },
      creative: {
        variant: 'creative',
        questionHtml:
          '다음 조건을 만족시키는 두 양수 \\(a, b\\)에 대하여 \\(5^{a} \\times 5^{b}\\)의 최댓값을 \\(M\\), 최솟값을 \\(m\\)이라 하자. 이때 \\(\\log_{5}\\!\\left(\\dfrac{M}{m}\\right)\\)의 값은?',
        viewbox: [
          { html: '(가) \\(5^{a}=25^{b}\\)이고 그 값은 자연수이다.' },
          { html: '(나) \\(\\dfrac{4}{a}+\\dfrac{2}{b}\\)는 자연수이다.' },
        ],
        choices: [
          { label: '①', text: '\\(\\dfrac{9}{2}\\)' },
          { label: '②', text: '\\(7\\)' },
          { label: '③', text: '\\(8\\)' },
          { label: '④', text: '\\(\\dfrac{21}{2}\\)' },
          { label: '⑤', text: '\\(9\\)' },
        ],
        solution: {
          answerDisplay: '④ \\(\\dfrac{21}{2}\\)',
          correctIndex: 3,
          steps: [
            { html: '(가) \\(5^a=25^b=(5^2)^b=5^{2b}\\)이므로 \\(a=2b\\).' },
            {
              html: '(나) \\(\\dfrac{4}{a}+\\dfrac{2}{b}=\\dfrac{4}{a}+\\dfrac{4}{a}=\\dfrac{8}{a}\\). 자연수 \\(n\\)이라 두면 \\(a=\\dfrac{8}{n}\\).',
            },
            {
              html: '\\(5^{8/n}\\)이 자연수 → \\(n\\mid 8\\), \\(n\\in\\{1,2,4,8\\}\\).',
            },
            { html: '\\(5^a\\cdot 5^b=5^{3a/2}=5^{12/n}\\).' },
            {
              html: '최대 \\(M=5^{12}\\) (\\(n=1\\)), 최소 \\(m=5^{3/2}\\) (\\(n=8\\)).',
            },
            {
              html: '\\(\\log_5\\!\\left(\\dfrac{M}{m}\\right)=12-\\dfrac{3}{2}=\\dfrac{21}{2}\\).',
            },
          ],
        },
      },
    },

    // ============ 2번 트리플렛 ============
    {
      number: 2,
      source: '[26008-0030] 수능특강 Level.3 실력완성 2번',
      topic: '지수와 로그',
      original: {
        variant: 'original',
        questionHtml:
          '그림과 같이 \\(\\overline{BC}=\\log_{\\sqrt{6}} 8\\)인 삼각형 \\(ABC\\)의 두 변 \\(AB, AC\\) 위에 두 선분 \\(BC, DE\\)가 평행하도록 각각 두 점 \\(D, E\\)를 잡는다. \\(\\overline{DE}=\\log_{3} 6\\)이고 삼각형 \\(ADE\\)의 넓이가 \\(\\dfrac{1}{2} \\log_{3} 2\\)일 때, 삼각형 \\(ABE\\)의 넓이는?',
        diagramHtml:
          '<div style="width:90mm; position:relative; margin:3mm auto;"><svg viewBox="0 0 100 100" width="100%" style="display:block;"><line x1="10" y1="10" x2="50" y2="90" stroke="#111" stroke-width="0.8"/><line x1="10" y1="10" x2="90" y2="90" stroke="#111" stroke-width="0.8"/><line x1="50" y1="90" x2="90" y2="90" stroke="#111" stroke-width="0.8"/><line x1="20" y1="30" x2="30" y2="30" stroke="#111" stroke-width="0.7"/><line x1="50" y1="90" x2="30" y2="30" stroke="#111" stroke-width="0.7"/></svg><div style="position:absolute; left:10%; top:3%; transform:translate(-50%,-50%); font-size:10pt;">\\(A\\)</div><div style="position:absolute; left:50%; top:97%; transform:translate(-50%,-50%); font-size:10pt;">\\(B\\)</div><div style="position:absolute; left:90%; top:97%; transform:translate(-50%,-50%); font-size:10pt;">\\(C\\)</div><div style="position:absolute; left:16%; top:30%; transform:translate(-50%,-50%); font-size:10pt;">\\(D\\)</div><div style="position:absolute; left:34%; top:26%; transform:translate(-50%,-50%); font-size:10pt;">\\(E\\)</div></div>',
        choices: [
          { label: '①', text: '\\((\\log_{6}2)^2\\)' },
          { label: '②', text: '\\(2(\\log_{6}2)^2\\)' },
          { label: '③', text: '\\(3(\\log_{6}2)^2\\)' },
          { label: '④', text: '\\(4(\\log_{6}2)^2\\)' },
          { label: '⑤', text: '\\(5(\\log_{6}2)^2\\)' },
        ],
        choiceColumns: 3,
        solution: {
          answerDisplay: '③ \\(3(\\log_{6}2)^2\\)',
          correctIndex: 2,
          steps: [
            {
              html: '\\(DE \\parallel BC\\)이므로 \\(\\triangle ADE \\sim \\triangle ABC\\). 닮음비 \\(r=\\dfrac{DE}{BC}=\\dfrac{AE}{AC}\\)로 두면 \\([ABE]=r[ABC]\\), \\([ADE]=r^2[ABC]\\). 따라서 \\([ABE]=\\dfrac{[ADE]}{r}=[ADE]\\cdot\\dfrac{BC}{DE}\\).',
            },
            {
              html: '\\(BC=\\log_{\\sqrt{6}}8=\\dfrac{\\log 8}{\\log\\sqrt{6}}=\\dfrac{3\\log 2}{\\frac{1}{2}\\log 6}=6\\cdot\\dfrac{\\log 2}{\\log 6}\\).',
            },
            {
              html: '\\(DE=\\log_{3}6=\\dfrac{\\log 6}{\\log 3}\\), \\([ADE]=\\dfrac{1}{2}\\log_{3}2=\\dfrac{1}{2}\\cdot\\dfrac{\\log 2}{\\log 3}\\).',
            },
            {
              html: '\\([ABE]=\\left(\\dfrac{1}{2}\\cdot\\dfrac{\\log 2}{\\log 3}\\right)\\cdot\\dfrac{6\\cdot\\frac{\\log 2}{\\log 6}}{\\frac{\\log 6}{\\log 3}}=3\\left(\\dfrac{\\log 2}{\\log 6}\\right)^2=3(\\log_{6}2)^2\\).',
            },
          ],
        },
      },
      variant: {
        variant: 'variant',
        questionHtml:
          '그림과 같이 \\(\\overline{BC}=\\log_{\\sqrt{10}} 16\\)인 삼각형 \\(ABC\\)의 두 변 \\(AB, AC\\) 위에 두 선분 \\(BC, DE\\)가 평행하도록 각각 두 점 \\(D, E\\)를 잡는다. \\(\\overline{DE}=\\log_{5} 10\\)이고 삼각형 \\(ADE\\)의 넓이가 \\(\\dfrac{1}{2} \\log_{5} 2\\)일 때, 삼각형 \\(ABE\\)의 넓이는?',
        diagramHtml:
          '<div style="width:70mm; position:relative; margin:2mm auto;"><svg viewBox="0 0 100 100" width="100%" style="display:block;"><line x1="10" y1="10" x2="50" y2="90" stroke="#111" stroke-width="0.8"/><line x1="10" y1="10" x2="90" y2="90" stroke="#111" stroke-width="0.8"/><line x1="50" y1="90" x2="90" y2="90" stroke="#111" stroke-width="0.8"/><line x1="20" y1="30" x2="30" y2="30" stroke="#111" stroke-width="0.7"/><line x1="50" y1="90" x2="30" y2="30" stroke="#111" stroke-width="0.7"/></svg><div style="position:absolute; left:10%; top:3%; transform:translate(-50%,-50%); font-size:9pt;">\\(A\\)</div><div style="position:absolute; left:50%; top:97%; transform:translate(-50%,-50%); font-size:9pt;">\\(B\\)</div><div style="position:absolute; left:90%; top:97%; transform:translate(-50%,-50%); font-size:9pt;">\\(C\\)</div><div style="position:absolute; left:16%; top:30%; transform:translate(-50%,-50%); font-size:9pt;">\\(D\\)</div><div style="position:absolute; left:34%; top:26%; transform:translate(-50%,-50%); font-size:9pt;">\\(E\\)</div></div>',
        choices: [
          { label: '①', text: '\\((\\log_{10}2)^2\\)' },
          { label: '②', text: '\\(2(\\log_{10}2)^2\\)' },
          { label: '③', text: '\\(3(\\log_{10}2)^2\\)' },
          { label: '④', text: '\\(4(\\log_{10}2)^2\\)' },
          { label: '⑤', text: '\\(5(\\log_{10}2)^2\\)' },
        ],
        choiceColumns: 3,
        solution: {
          answerDisplay: '④ \\(4(\\log_{10}2)^2\\)',
          correctIndex: 3,
          steps: [
            {
              html: '\\([ABE]=[ADE]\\cdot\\dfrac{BC}{DE}\\) (닮음으로부터 동일).',
            },
            {
              html: '\\(BC=\\log_{\\sqrt{10}}16=\\dfrac{\\log 16}{\\log\\sqrt{10}}=\\dfrac{4\\log 2}{\\frac{1}{2}\\log 10}\\). \\(\\log 10=1\\)이므로 \\(BC=8\\log 2\\).',
            },
            {
              html: '\\(DE=\\log_{5}10=\\dfrac{\\log 10}{\\log 5}=\\dfrac{1}{\\log 5}\\), \\([ADE]=\\dfrac{1}{2}\\log_{5}2=\\dfrac{1}{2}\\cdot\\dfrac{\\log 2}{\\log 5}\\).',
            },
            {
              html: '\\([ABE]=\\left(\\dfrac{1}{2}\\cdot\\dfrac{\\log 2}{\\log 5}\\right)\\cdot\\dfrac{8\\log 2}{1/\\log 5}=4(\\log 2)^2=4(\\log_{10}2)^2\\).',
            },
          ],
        },
      },
      creative: {
        variant: 'creative',
        questionHtml:
          '그림과 같이 \\(\\overline{BC}=\\log_{\\sqrt{14}} 243\\)인 삼각형 \\(ABC\\)의 두 변 \\(AB, AC\\) 위에 두 선분 \\(BC, DE\\)가 평행하도록 각각 두 점 \\(D, E\\)를 잡는다. \\(\\overline{DE}=\\log_{2} 14\\)이고 삼각형 \\(ADE\\)의 넓이가 \\(\\dfrac{1}{2} \\log_{2} 3\\)일 때, 삼각형 \\(ABE\\)의 넓이는?',
        diagramHtml:
          '<div style="width:70mm; position:relative; margin:2mm auto;"><svg viewBox="0 0 100 100" width="100%" style="display:block;"><line x1="10" y1="10" x2="50" y2="90" stroke="#111" stroke-width="0.8"/><line x1="10" y1="10" x2="90" y2="90" stroke="#111" stroke-width="0.8"/><line x1="50" y1="90" x2="90" y2="90" stroke="#111" stroke-width="0.8"/><line x1="20" y1="30" x2="30" y2="30" stroke="#111" stroke-width="0.7"/><line x1="50" y1="90" x2="30" y2="30" stroke="#111" stroke-width="0.7"/></svg><div style="position:absolute; left:10%; top:3%; transform:translate(-50%,-50%); font-size:9pt;">\\(A\\)</div><div style="position:absolute; left:50%; top:97%; transform:translate(-50%,-50%); font-size:9pt;">\\(B\\)</div><div style="position:absolute; left:90%; top:97%; transform:translate(-50%,-50%); font-size:9pt;">\\(C\\)</div><div style="position:absolute; left:16%; top:30%; transform:translate(-50%,-50%); font-size:9pt;">\\(D\\)</div><div style="position:absolute; left:34%; top:26%; transform:translate(-50%,-50%); font-size:9pt;">\\(E\\)</div></div>',
        choices: [
          { label: '①', text: '\\((\\log_{14}3)^2\\)' },
          { label: '②', text: '\\(2(\\log_{14}3)^2\\)' },
          { label: '③', text: '\\(3(\\log_{14}3)^2\\)' },
          { label: '④', text: '\\(4(\\log_{14}3)^2\\)' },
          { label: '⑤', text: '\\(5(\\log_{14}3)^2\\)' },
        ],
        choiceColumns: 3,
        solution: {
          answerDisplay: '⑤ \\(5(\\log_{14}3)^2\\)',
          correctIndex: 4,
          steps: [
            {
              html: '\\([ABE]=[ADE]\\cdot\\dfrac{BC}{DE}\\) (닮음으로부터 동일).',
            },
            {
              html: '\\(BC=\\log_{\\sqrt{14}}243=\\dfrac{\\log 243}{\\log\\sqrt{14}}=\\dfrac{5\\log 3}{\\frac{1}{2}\\log 14}=10\\cdot\\dfrac{\\log 3}{\\log 14}\\).',
            },
            {
              html: '\\(DE=\\log_{2}14=\\dfrac{\\log 14}{\\log 2}\\), \\([ADE]=\\dfrac{1}{2}\\log_{2}3=\\dfrac{1}{2}\\cdot\\dfrac{\\log 3}{\\log 2}\\).',
            },
            {
              html: '\\([ABE]=\\left(\\dfrac{1}{2}\\cdot\\dfrac{\\log 3}{\\log 2}\\right)\\cdot\\dfrac{10\\cdot\\frac{\\log 3}{\\log 14}}{\\frac{\\log 14}{\\log 2}}=5\\left(\\dfrac{\\log 3}{\\log 14}\\right)^2=5(\\log_{14}3)^2\\).',
            },
          ],
        },
      },
    },

    // ============ 3번 트리플렛 ============
    {
      number: 3,
      source: '[26008-0031] 수능특강 Level.3 실력완성 3번',
      topic: '지수와 로그',
      original: {
        variant: 'original',
        questionHtml:
          '2 이상의 자연수 \\(m\\)에 대하여 집합 \\(A_{m}\\)을 \\[A_{m}=\\{x \\mid 0 < x \\le 100 \\text{ 이고 } \\log_{m} x \\text{ 는 자연수}\\}\\] 라 할 때, 보기에서 옳은 것만을 있는 대로 고른 것은?',
        bogi: [
          { label: 'ㄱ', html: '\\(n(A_{2})=6\\)' },
          {
            label: 'ㄴ',
            html: '2 이상 100 이하의 두 자연수 \\(p, q\\)에 대하여 \\(\\dfrac{p}{q}\\)가 자연수이면 \\(\\dfrac{n(A_{q})}{n(A_{p})}\\)도 자연수이다.',
          },
          {
            label: 'ㄷ',
            html: '\\(n(A_{m})=2\\)를 만족시키는 모든 자연수 \\(m\\)의 값의 합은 45이다.',
          },
        ],
        choices: [
          { label: '①', text: 'ㄱ' },
          { label: '②', text: 'ㄱ, ㄴ' },
          { label: '③', text: 'ㄱ, ㄷ' },
          { label: '④', text: 'ㄴ, ㄷ' },
          { label: '⑤', text: 'ㄱ, ㄴ, ㄷ' },
        ],
        solution: {
          answerDisplay: '③ ㄱ, ㄷ',
          correctIndex: 2,
          steps: [
            {
              html: '\\(\\log_m x\\)가 자연수이면 \\(x = m^k\\) (\\(k\\)는 자연수). 즉, \\(A_m = \\{m, m^2, m^3, \\dots\\}\\) 중 100 이하인 것들의 집합.',
            },
            {
              html: '<strong>ㄱ. (참)</strong> \\(2^1, 2^2, \\dots, 2^6\\)은 모두 100 이하이고, \\(2^7 = 128 > 100\\)이므로 \\(n(A_2) = 6\\).',
            },
            {
              html: '<strong>ㄴ. (거짓)</strong> 반례: \\(p=8, q=4\\)이면 \\(\\frac{p}{q}=2\\). \\(A_4 = \\{4, 16, 64\\}\\)이므로 \\(n(A_4)=3\\), \\(A_8 = \\{8, 64\\}\\)이므로 \\(n(A_8)=2\\). \\(\\frac{3}{2}\\)는 자연수가 아님.',
            },
            {
              html: '<strong>ㄷ. (참)</strong> \\(n(A_m)=2\\)이려면 \\(m^2 \\le 100 < m^3\\). \\(m \\le 10\\)이고 \\(m \\ge 5\\)이므로 \\(m = 5, 6, 7, 8, 9, 10\\). 합: \\(5+6+\\cdots+10 = 45\\).',
            },
          ],
        },
      },
      variant: {
        variant: 'variant',
        questionHtml:
          '\\(2\\) 이상의 자연수 \\(m\\)에 대하여 집합 \\(A_m\\)을 \\[A_m=\\left\\{x \\mid 0 < x \\le 256 \\text{ 이고 } \\log_m x \\text{ 가 양의 정수이다}\\right\\}\\] 라 하자. 보기에서 옳은 것만을 있는 대로 고른 것은?',
        bogi: [
          { label: 'ㄱ', html: '\\(n(A_2)=8\\)' },
          {
            label: 'ㄴ',
            html: '\\(2\\) 이상 \\(256\\) 이하의 두 자연수 \\(p,q\\)에 대하여 \\(\\dfrac{p}{q}\\)가 자연수이면 \\(\\dfrac{n(A_q)}{n(A_p)}\\)도 자연수이다.',
          },
          {
            label: 'ㄷ',
            html: '\\(n(A_m)=3\\)을 만족시키는 모든 자연수 \\(m\\)의 값의 합은 \\(11\\)이다.',
          },
        ],
        choices: [
          { label: '①', text: 'ㄱ' },
          { label: '②', text: 'ㄱ, ㄴ' },
          { label: '③', text: 'ㄱ, ㄷ' },
          { label: '④', text: 'ㄴ, ㄷ' },
          { label: '⑤', text: 'ㄱ, ㄴ, ㄷ' },
        ],
        solution: {
          answerDisplay: '③ ㄱ, ㄷ',
          correctIndex: 2,
          steps: [
            {
              html: '\\(\\log_m x\\)가 양의 정수이면 \\(x=m^k\\ (k\\in\\mathbb{Z}_{>0})\\)이다. 따라서 \\[A_m=\\{m, m^2, \\dots, m^t\\}\\quad (m^t\\le 256 < m^{t+1})\\] 이고 \\(n(A_m)=t\\)이다.',
            },
            {
              html: '<strong>ㄱ. (참)</strong> \\(2^8=256\\le256\\), \\(2^9=512>256\\)이므로 \\(A_2=\\{2,4,8,16,32,64,128,256\\}\\), 따라서 \\(n(A_2)=8\\).',
            },
            {
              html: '<strong>ㄴ. (거짓)</strong> 반례로 \\(p=10,\\ q=5\\)를 택하면 \\(\\dfrac{p}{q}=2\\)는 자연수이다. 그런데 \\(A_5=\\{5,25,125\\}\\Rightarrow n(A_5)=3\\), \\(A_{10}=\\{10,100\\}\\Rightarrow n(A_{10})=2\\) 이므로 \\(\\dfrac{n(A_q)}{n(A_p)}=\\dfrac{3}{2}\\)는 자연수가 아니다.',
            },
            {
              html: '<strong>ㄷ. (참)</strong> \\(n(A_m)=3 \\iff m^3\\le 256 < m^4\\). \\(4^4=256\\)이므로 \\(m=4\\)는 불가. \\(7^3=343>256\\)이므로 \\(m\\le 6\\). \\(5^3=125\\le256\\), \\(5^4=625>256\\), \\(6^3=216\\le256\\), \\(6^4=1296>256\\). 따라서 \\(m=5,6\\)이고 합은 \\(11\\).',
            },
          ],
        },
      },
      creative: {
        variant: 'creative',
        questionHtml:
          '\\(2\\) 이상의 자연수 \\(m\\)에 대하여 집합 \\(A_m\\)을 \\[A_m=\\left\\{x \\mid 0 < x \\le 500 \\text{ 이고 } \\log_m x \\text{ 가 양의 정수이다}\\right\\}\\] 라 하자. 보기에서 옳은 것만을 있는 대로 고른 것은?',
        bogi: [
          { label: 'ㄱ', html: '\\(n(A_2)=8\\)' },
          {
            label: 'ㄴ',
            html: '\\(2\\) 이상 \\(500\\) 이하의 두 자연수 \\(p,q\\)에 대하여 \\(\\dfrac{p}{q}\\)가 자연수이면 \\(n(A_p) \\le n(A_q)\\)이다.',
          },
          {
            label: 'ㄷ',
            html: '\\(n(A_m)=3\\)을 만족시키는 모든 자연수 \\(m\\)의 값의 합은 \\(18\\)이다.',
          },
        ],
        choices: [
          { label: '①', text: 'ㄱ' },
          { label: '②', text: 'ㄱ, ㄴ' },
          { label: '③', text: 'ㄱ, ㄷ' },
          { label: '④', text: 'ㄴ, ㄷ' },
          { label: '⑤', text: 'ㄱ, ㄴ, ㄷ' },
        ],
        solution: {
          answerDisplay: '⑤ ㄱ, ㄴ, ㄷ',
          correctIndex: 4,
          steps: [
            {
              html: '\\(\\log_m x\\)가 양의 정수이면 \\(x=m^k\\ (k\\in\\mathbb{Z}_{>0})\\)이다. 따라서 \\[A_m=\\{m, m^2, \\dots, m^t\\}\\quad (m^t\\le 500 < m^{t+1})\\] 이고 \\(n(A_m)=t\\)이다.',
            },
            {
              html: '<strong>ㄱ. (참)</strong> \\(2^8=256\\le500\\), \\(2^9=512>500\\)이므로 \\(n(A_2)=8\\).',
            },
            {
              html: '<strong>ㄴ. (참)</strong> \\(\\dfrac{p}{q}\\)가 자연수이면 \\(p\\ge q\\)이다. 이때 모든 양의 정수 \\(k\\)에 대하여 \\(p^k\\ge q^k\\)이므로, \\(p^k\\le500\\)이면 \\(q^k\\le500\\)이다. 따라서 \\(A_p\\subseteq A_q\\)이고 \\(n(A_p)\\le n(A_q)\\).',
            },
            {
              html: '<strong>ㄷ. (참)</strong> \\(n(A_m)=3 \\iff m^3\\le 500 < m^4\\). \\(7^3=343\\le500\\), \\(8^3=512>500\\)이므로 \\(m\\le7\\). 또 \\(5^4=625>500\\)이므로 \\(m\\ge5\\). 따라서 \\(m=5,6,7\\)이고 합은 \\(18\\).',
            },
          ],
        },
      },
    },
  ],
};

export default problemSet;
