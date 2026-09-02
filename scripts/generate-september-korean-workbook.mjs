import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const sourceRoot =
  '/Users/seokkiyoon/Library/CloudStorage/SynologyDrive-seokkimac/06_ contents/26년도모의고사/9월/평가원/KOR';
const transcriptionPath = path.join(sourceRoot, '260902_KOR_M_G3_전사.md');
const analysisPath = path.join(
  sourceRoot,
  '260902_KOR_M_G3_상세해설_출제분석.md'
);
const articlePath = path.join(
  process.cwd(),
  'content/problem-download/2027-september-mock-korean-analysis.html'
);

const assetBase =
  '/images/problem-download/2027-september-mock-korean-analysis/source';
const startMarker = '<!-- GENERATED:KOREAN-WORKBOOK:START -->';
const endMarker = '<!-- GENERATED:KOREAN-WORKBOOK:END -->';

const transcription = fs.readFileSync(transcriptionPath, 'utf8');
const analysis = fs.readFileSync(analysisPath, 'utf8');

const assetOutput = path.join(
  process.cwd(),
  'public/images/problem-download/2027-september-mock-korean-analysis/source'
);
fs.mkdirSync(assetOutput, { recursive: true });
for (const match of transcription.matchAll(/!\[[^\]]*\]\((KOR_[^)]+\.png)\)/g)) {
  fs.copyFileSync(path.join(sourceRoot, match[1]), path.join(assetOutput, match[1]));
}

function renderMarkdown(markdown) {
  return renderToStaticMarkup(
    React.createElement(
      ReactMarkdown,
      {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeRaw],
        components: {
          img({ src = '', alt = '' }) {
            const imageSrc = src.startsWith('KOR_')
              ? `${assetBase}/${src}`
              : src;
            return React.createElement(
              'figure',
              { className: 'exam-figure' },
              React.createElement('img', {
                src: imageSrc,
                alt,
                loading: 'lazy',
              }),
              alt
                ? React.createElement('figcaption', null, alt)
                : null
            );
          },
        },
      },
      markdown.trim()
    )
  );
}

function normalizeStudyLines(lines) {
  const blocks = [];
  let current = '';

  function flush() {
    if (current) blocks.push(current);
    current = '';
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flush();
      continue;
    }
    if (/^[①②③④⑤]/.test(line) || /^!\[/.test(line)) {
      flush();
      current = line;
      continue;
    }
    current = current ? `${current} ${line}` : line;
  }
  flush();
  return blocks.join('\n\n');
}

function renderStudyQuestionBody(lines) {
  const viewStart = lines.findIndex(line => line.trim() === '〈보기〉');
  if (viewStart === -1) return renderMarkdown(normalizeStudyLines(lines));

  const choiceOffset = lines
    .slice(viewStart + 1)
    .findIndex(line => /^[①②③④⑤]/.test(line.trim()));
  const choiceStart =
    choiceOffset === -1 ? lines.length : viewStart + 1 + choiceOffset;

  return `${renderMarkdown(normalizeStudyLines(lines.slice(0, viewStart)))}
<div class="study-view-box">
  <span>〈보 기〉</span>
  ${renderMarkdown(normalizeStudyLines(lines.slice(viewStart + 1, choiceStart)))}
</div>
${renderMarkdown(normalizeStudyLines(lines.slice(choiceStart)))}`;
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function escapeQuestionTitle(value) {
  return escapeHtml(value)
    .replaceAll('&lt;u&gt;', '<u>')
    .replaceAll('&lt;/u&gt;', '</u>');
}

function normalizeSubject(label) {
  if (label.includes('화법과 작문')) return 'speech';
  if (label.includes('언어와 매체')) return 'media';
  return 'common';
}

function collectSolutions(source) {
  const solutions = new Map();
  let subject = 'common';
  let current = null;
  const lines = source.split(/\r?\n/);

  function save() {
    if (!current) return;
    const markdown = current.lines.join('\n').trim();
    solutions.set(`${current.subject}-${current.number}`, {
      answer: current.answer,
      markdown,
      html: renderMarkdown(markdown),
    });
  }

  for (const line of lines) {
    const section = line.match(/^###\s+(.+)$/);
    if (section) {
      save();
      current = null;
      subject = normalizeSubject(section[1]);
      continue;
    }

    const question = line.match(/^####\s+(\d+)번\s+([①②③④⑤])\s*$/);
    if (question) {
      save();
      current = {
        subject,
        number: Number(question[1]),
        answer: question[2],
        lines: [],
      };
      continue;
    }

    if (current) current.lines.push(line);
  }
  save();
  return solutions;
}

function collectExamUnits(source) {
  const units = [];
  let subject = 'common';
  let subjectLabel = '공통과목';
  let current = null;
  let currentQuestion = null;

  function saveQuestion() {
    if (!current || !currentQuestion) return;
    current.questions.push(currentQuestion);
    currentQuestion = null;
  }

  function saveUnit() {
    saveQuestion();
    if (current) units.push(current);
    current = null;
  }

  for (const line of source.split(/\r?\n/)) {
    const subjectHeading = line.match(/^## 선택과목:\s*(.+)$/);
    if (subjectHeading) {
      saveUnit();
      subjectLabel = subjectHeading[1].trim();
      subject = normalizeSubject(subjectLabel);
      continue;
    }

    if (line === '## 공통과목') {
      saveUnit();
      subject = 'common';
      subjectLabel = '공통과목';
      continue;
    }

    const unitHeading = line.match(/^## \[([^\]]+)\]\s*(.+)$/);
    if (unitHeading) {
      saveUnit();
      current = {
        subject,
        subjectLabel,
        range: unitHeading[1].replace('～', '~'),
        prompt: unitHeading[2].trim(),
        passageLines: [],
        questions: [],
      };
      continue;
    }

    if (!current) continue;

    const questionHeading = line.match(/^###\s+(\d+)\.\s*(.+)$/);
    if (questionHeading) {
      saveQuestion();
      currentQuestion = {
        number: Number(questionHeading[1]),
        title: questionHeading[2].trim(),
        lines: [],
      };
      continue;
    }

    if (currentQuestion) currentQuestion.lines.push(line);
    else current.passageLines.push(line);
  }
  saveUnit();
  return units;
}

const solutions = collectSolutions(analysis);
const units = collectExamUnits(transcription);

const examPageBase =
  '/images/problem-download/2027-september-mock-korean-analysis/exam-pages';
const examPageSets = [
  {
    id: 'common',
    label: '공통과목',
    pages: Array.from({ length: 12 }, (_, index) => ({
      number: index + 1,
      file: `common-${String(index + 1).padStart(2, '0')}.png`,
    })),
  },
  {
    id: 'speech',
    label: '화법과 작문',
    pages: Array.from({ length: 4 }, (_, index) => ({
      number: index + 13,
      file: `speech-${String(index + 13).padStart(2, '0')}.png`,
    })),
  },
  {
    id: 'media',
    label: '언어와 매체',
    pages: Array.from({ length: 4 }, (_, index) => ({
      number: index + 17,
      file: `media-${String(index + 17).padStart(2, '0')}.png`,
    })),
  },
];

const paperHtml = examPageSets
  .map(
    set => `<section class="kice-page-set" data-exam-set="${set.id}">
  <header class="kice-set-heading">
    <span>${set.id === 'common' ? '필수' : '선택'}</span>
    <h3>${set.label}</h3>
    <b>${set.pages.length}쪽</b>
    <div class="kice-carousel-controls" aria-label="${set.label} 페이지 이동">
      <button type="button" aria-label="이전 페이지" onclick="this.closest('.kice-page-set').querySelector('.kice-page-list').scrollBy({left:-this.closest('.kice-page-set').querySelector('.kice-page-list').clientWidth*.9,behavior:'smooth'})">←</button>
      <button type="button" aria-label="다음 페이지" onclick="this.closest('.kice-page-set').querySelector('.kice-page-list').scrollBy({left:this.closest('.kice-page-set').querySelector('.kice-page-list').clientWidth*.9,behavior:'smooth'})">→</button>
    </div>
  </header>
  <div class="kice-page-list">
    ${set.pages
      .map(
        (page, index) => `<figure class="kice-page" data-page-number="${page.number}">
      <button class="kice-page-open" type="button" data-src="${examPageBase}/${page.file}" data-alt="2027학년도 9월 모의평가 국어 ${set.label} ${page.number}쪽" data-label="${set.label} ${page.number}쪽" aria-label="${set.label} ${page.number}쪽 크게 보기" onclick="const d=document.getElementById('kice-page-modal');const i=d.querySelector('img');i.src=this.dataset.src;i.alt=this.dataset.alt;d.querySelector('[data-modal-label]').textContent=this.dataset.label;d.showModal()">
        <img src="${examPageBase}/${page.file}" alt="2027학년도 9월 모의평가 국어 ${set.label} ${page.number}쪽" ${set.id === 'common' && index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
      </button>
      <figcaption>${set.label} ${page.number}쪽 · 누르면 크게 볼 수 있습니다.</figcaption>
    </figure>`
      )
      .join('\n')}
  </div>
</section>`
  )
  .join('\n');

const studyUnit = units.find(
  unit => unit.subject === 'common' && unit.range === '1~3'
);
if (!studyUnit) throw new Error('Could not find the common 1~3 study unit.');

const studyParagraphMarkers = [
  '진로 독서에 활용할 수 있는 글의 유형',
  '전기류를 활용한 진로 독서는',
  '진로 탐색을 위해 전기류를 읽을 때',
  '독자는 전기류를 읽으며',
];
const studyPassage = studyUnit.passageLines.join(' ').replace(/\s+/g, ' ').trim();
const studyParagraphs = studyParagraphMarkers.map((marker, index) => {
  const start = studyPassage.indexOf(marker);
  const nextMarker = studyParagraphMarkers[index + 1];
  const end = nextMarker ? studyPassage.indexOf(nextMarker) : studyPassage.length;
  if (start === -1 || end === -1) {
    throw new Error(`Could not split study paragraph ${index + 1}.`);
  }
  return studyPassage.slice(start, end).trim();
});

const studyParagraphMeta = [
  {
    role: '개념 정의',
    summary: '전기류의 정의와 일반적인 구성 요소를 제시한다.',
  },
  {
    role: '핵심 과정',
    summary: '전기류를 활용한 진로 독서의 네 단계를 순서대로 설명한다.',
  },
  {
    role: '독서 전략',
    summary: '참고 자료, 순서도, 인물망, 대립 척도표의 쓰임을 구분한다.',
  },
  {
    role: '의의 정리',
    summary: '전기류 독서가 진로관과 긍정적 자아 개념 형성에 미치는 효과를 정리한다.',
  },
];

const studyQuestionMeta = {
  1: {
    type: '내용 일치',
    difficulty: '하',
    answer: '④',
    intent: '첫 문단에 제시된 전기류의 정의와 특징을 정확히 확인하는 문항이다.',
    evidence: [{ ids: ['P1-S3'], label: 'P1 · 3문장' }],
    quote: '전기류는 인물의 생애 전부를 다루거나 인물의 가치관을 파악할 수 있는 특정 일화를 집중적으로 다룬다.',
    steps: [
      '선지의 핵심 서술어를 먼저 확인한다.',
      'P1에서 전기류의 소재와 구성 방식을 대조한다.',
      '“생애 전부”와 “특정 일화” 중 하나를 배제한 선지를 찾는다.',
    ],
    choices: [
      ['①', '적절', 'P1의 “주요 사건이 주로 시간순으로 제시”와 일치한다.'],
      ['②', '적절', '성장 과정과 업적이 주요 사건으로 제시된다는 설명과 일치한다.'],
      ['③', '적절', '주변 인물과의 관계가 드러난다는 설명과 일치한다.'],
      ['④', '정답', '전기류는 생애 전부뿐 아니라 특정 일화를 집중적으로 다룰 수도 있다.'],
      ['⑤', '적절', '전기문에는 작가의 인물 평가가 추가되기도 한다.'],
    ],
    trap: 'A 또는 B를 모두 허용한 지문을 A만 가능하다고 축소한 선지다.',
    takeaway: '정의 문항에서는 “또는”, “일부”, “전부”처럼 범위를 결정하는 표현을 먼저 표시한다.',
  },
  2: {
    type: '핵심 내용 이해',
    difficulty: '중',
    answer: '①',
    intent: '진로 독서의 단계와 최종 효과 사이의 관계를 이해했는지 확인한다.',
    evidence: [
      { ids: ['P2-S10', 'P2-S11'], label: 'P2 · 10～11문장' },
    ],
    quote: '인물의 삶을 이해한 후 자기를 성찰하고, 이를 바탕으로 인물을 더 깊게 파악해 볼 수 있다.',
    steps: [
      '각 선지가 네 단계 중 어느 단계와 연결되는지 분류한다.',
      '지문에 있는 인과 관계와 선지의 방향을 비교한다.',
      '부정 표현으로 지문을 뒤집은 선지를 제거한다.',
    ],
    choices: [
      ['①', '정답', '자기 성찰을 바탕으로 인물을 더 깊게 파악할 수 있다는 P2와 일치한다.'],
      ['②', '오답', '지문은 책을 다 읽기 전까지 최종 판단을 유보하라고 설명한다.'],
      ['③', '오답', '성공과 실패 경험 모두에서 인물의 변화를 파악해야 한다.'],
      ['④', '오답', '전기류는 허구적 인물이 아니라 실제 인물의 생애를 다룬다.'],
      ['⑤', '오답', '인물의 삶을 맹목적으로 긍정하지 말고 자신의 관점에서 평가해야 한다.'],
    ],
    trap: '“유보할 필요가 있다”를 “미룰 수 없다”로 바꾸는 전형적인 반대 진술이 포함되어 있다.',
    takeaway: '과정 설명 지문은 단계별 행동과 그 효과를 화살표로 연결해 읽는다.',
  },
  3: {
    type: '사례 적용',
    difficulty: '상 · 3점',
    answer: '④',
    intent: '독서 단계와 각 보조 전략의 기능을 구체적인 독서록 사례에 대응시키는 문항이다.',
    evidence: [
      { ids: ['P2-S5'], label: 'P2 · 5문장' },
      { ids: ['P3-S4', 'P3-S5'], label: 'P3 · 4～5문장' },
    ],
    quote: '도해 조직자는 사건을 시간순으로 나타낸 순서도나 인물 간 관계를 나타낸 인물망 등이 그 예이다.',
    steps: [
      '〈보기〉의 행동을 책 선정·삶 파악·배경지식 보강·평가·자기 이해로 나눈다.',
      '각 행동에 사용된 도구가 참고 자료인지 도해 조직자인지 구분한다.',
      '행동의 목적과 도구의 기능을 서로 바꾸어 연결한 선지를 찾는다.',
    ],
    choices: [
      ['①', '적절', '칼럼을 참고하되 동의 여부를 점검했으므로 주체적 평가에 해당한다.'],
      ['②', '적절', '다른 독자의 서평을 참고해 진로 탐색에 도움이 될 책인지 판단했다.'],
      ['③', '적절', '대립 척도표로 A와 자신의 끈기를 비교했으므로 자기 이해 과정이다.'],
      ['④', '정답', '시대 상황은 주방 사진으로 보강했다. 순서도는 인물의 사건을 정리하는 데 사용했다.'],
      ['⑤', '적절', '요리사가 되기로 한 일과 시행착오를 순서도로 정리한 것은 삶 파악에 해당한다.'],
    ],
    trap: '사진 자료와 순서도의 기능을 서로 바꾸어 연결한 “도구–목적 오연결” 선지다.',
    takeaway: '사례 적용 문항은 행동, 도구, 목적을 세 칸으로 나누어 대응시키면 빠르게 풀린다.',
  },
};

function splitStudySentences(text) {
  return text
    .split(/(?<=[.!?])\s+(?=\S)/)
    .map(sentence => sentence.trim())
    .filter(Boolean);
}

const studyParagraphHtml = studyParagraphs
  .map((paragraph, index) => {
    const id = `P${index + 1}`;
    const meta = studyParagraphMeta[index];
    const sentences = splitStudySentences(paragraph);
    return `<article class="study-paragraph" data-paragraph="${id}">
  <header><b>${id}</b><span>${meta.role}</span></header>
  <p>${sentences
    .map(
      (sentence, sentenceIndex) => `<span class="study-sentence" data-sentence="${id}-S${sentenceIndex + 1}"><em aria-label="${id} ${sentenceIndex + 1}문장">${sentenceIndex + 1}</em>${escapeHtml(sentence)}</span>`
    )
    .join(' ')}</p>
  <footer>${meta.summary}</footer>
</article>`;
  })
  .join('\n');

const studyQuestionHtml = studyUnit.questions
  .map(question => {
    const meta = studyQuestionMeta[question.number];
    if (!meta) return '';
    const bodyLines = [...question.lines];
    const titleContinuation = [];
    while (
      bodyLines.length &&
      bodyLines[0].trim() &&
      !/^(?:〈보기〉|[①②③④⑤]|!\[|>|[-◦∙]|[가-힣A-Za-z0-9　 ]+[:：])/.test(bodyLines[0].trim())
    ) {
      titleContinuation.push(bodyLines.shift().trim());
    }
    while (bodyLines[0]?.trim() === '') bodyLines.shift();
    const fullTitle = [question.title, ...titleContinuation].join(' ');
    return `<article class="study-question-panel" data-study-question="${question.number}"${question.number === 1 ? '' : ' hidden'}>
  <header class="study-question-heading">
    <div><b>${question.number}번</b><span>${meta.type}</span><span>${meta.difficulty}</span></div>
    <button type="button" aria-expanded="false" onclick="const p=this.closest('.study-question-panel');const open=p.classList.toggle('is-revealed');this.setAttribute('aria-expanded',open);this.textContent=open?'해설 접기':'정답·해설 보기'">정답·해설 보기</button>
  </header>
  <section class="study-question-original">
    <h4>${question.number}. ${escapeQuestionTitle(fullTitle)}</h4>
    ${renderStudyQuestionBody(bodyLines).trim()}
  </section>
  <section class="study-answer-reveal">
    <div class="study-answer-line"><span>정답</span><strong>${meta.answer}</strong></div>
    <div class="study-explain-block"><h4>출제 의도</h4><p>${meta.intent}</p></div>
    <div class="study-explain-block">
      <h4>결정적 근거</h4>
      <div class="study-evidence-links">${meta.evidence
        .map(
          evidence => `<button type="button" data-sentences="${evidence.ids.join(',')}" onclick="const lab=this.closest('.study-lab');const ids=this.dataset.sentences.split(',');lab.querySelectorAll('.study-sentence').forEach(s=>s.classList.toggle('is-highlighted',ids.includes(s.dataset.sentence)));if(matchMedia('(max-width: 820px)').matches){lab.dataset.mobilePane='passage';lab.querySelectorAll('.study-mobile-tabs button').forEach((b,i)=>b.setAttribute('aria-pressed',i===0))}lab.querySelector('[data-sentence='+ids[0]+']').scrollIntoView({behavior:'smooth',block:'center'})">${evidence.label} 근거 보기</button>`
        )
        .join('')}</div>
      <blockquote>${meta.quote}</blockquote>
    </div>
    <div class="study-explain-block"><h4>풀이 순서</h4><ol>${meta.steps.map(step => `<li>${step}</li>`).join('')}</ol></div>
    <div class="study-explain-block"><h4>선택지별 판단</h4><div class="study-choice-analysis">${meta.choices
      .map(
        ([number, verdict, reason]) => `<div class="${verdict === '정답' ? 'is-answer' : ''}"><b>${number}</b><span>${verdict}</span><p>${reason}</p></div>`
      )
      .join('')}</div></div>
    <div class="study-trap"><b>오답 함정</b><p>${meta.trap}</p></div>
    <div class="study-takeaway"><b>수능 판단 기준</b><p>${meta.takeaway}</p></div>
  </section>
</article>`;
  })
  .join('\n');

const studyLabHtml = `<section class="study-lab" data-study-unit="common-1-3" data-active-question="1" data-mobile-pane="passage" aria-label="지문과 문항 분석">
  <header class="study-lab-heading">
    <div><span>공통 · 독서</span><h2>[1～3] 전기류를 활용한 진로 독서</h2></div>
    <small>문장 단위 근거 연동</small>
  </header>
  <nav class="study-mobile-tabs" aria-label="모바일 분석 화면 선택">
    <button type="button" aria-pressed="true" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='passage';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">지문 분석</button>
    <button type="button" aria-pressed="false" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='questions';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">문항 해설</button>
  </nav>
  <div class="study-workspace">
    <aside class="study-passage-pane">
      <section class="study-overview">
        <span>한 문장 요약</span>
        <p>전기류를 활용한 진로 독서의 단계와 단계별 보조 전략, 그리고 자기 이해에 미치는 효과를 설명한 글이다.</p>
        <ol><li>전기류의 특징</li><li>진로 독서 4단계</li><li>단계별 독서 도구</li><li>진로 독서의 효과</li></ol>
      </section>
      <div class="study-passage-text">${studyParagraphHtml}</div>
      <button class="study-go-questions" type="button" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='questions';const bs=l.querySelectorAll('.study-mobile-tabs button');bs.forEach((b,i)=>b.setAttribute('aria-pressed',i===1));l.querySelector('.study-question-pane').scrollIntoView({behavior:'smooth',block:'start'})">문항 해설 보기 →</button>
    </aside>
    <section class="study-question-pane">
      <button class="study-back-passage" type="button" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='passage';const bs=l.querySelectorAll('.study-mobile-tabs button');bs.forEach((b,i)=>b.setAttribute('aria-pressed',i===0))">← 지문 분석으로</button>
      <nav class="study-question-tabs" aria-label="문항 선택">${studyUnit.questions
        .map(
          question => `<button type="button" aria-pressed="${question.number === 1}" onclick="const l=this.closest('.study-lab');l.dataset.activeQuestion='${question.number}';l.querySelectorAll('[data-study-question]').forEach(p=>p.hidden=p.dataset.studyQuestion!=='${question.number}');l.querySelectorAll('[data-question-material]').forEach(m=>m.hidden=m.dataset.questionMaterial!=='${question.number}');this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">${question.number}번</button>`
        )
        .join('')}</nav>
      ${studyQuestionHtml}
    </section>
  </div>
</section>`;

const genericUnitMeta = {
  'common-4-9': ['공통 · 독서', '종 차별주의와 도덕적 지위', '종 차별주의의 논거를 검토하고 인공 행위자의 도덕적 지위에 관한 여러 입장을 비교한다.', ['종 차별주의의 근거', '유대감 논변 비판', '윤리적 행동주의', '존슨·스미즈의 반론']],
  'common-10-13': ['공통 · 독서', '어댑터의 두 방식', '선형 방식과 스위칭 방식 어댑터의 전압 변환 과정과 장단점을 비교한다.', ['선형 방식의 회로', '스위칭 방식의 회로', '출력 전압 제어', '두 방식의 장단점']],
  'common-14-17': ['공통 · 독서', '오피니언 리더와 정보 유통', '미디어 정보가 오피니언 리더를 거쳐 유통되는 과정과 다단계 유통 모형을 설명한다.', ['초기 미디어 효과 연구', '2단계 유통 모형', '오피니언 리더의 역할', '다단계 유통']],
  'common-18-21': ['공통 · 문학', '「금환기봉」', '남장한 장 소저의 정체와 선택을 중심으로 인물 관계와 사건 전개를 읽는다.', ['장 소저의 남장', '인물의 정체 인식', '부친 신원 과정', '남복의 서사적 의미']],
  'common-22-27': ['공통 · 문학', '현대시와 고전 수필 복합', '두 현대시의 상상적 이미지와 박지원 수필의 창작·감상 관점을 함께 읽는다.', ['달밤의 환상적 변형', '고향 마을의 감각적 이미지', '이명과 코골이의 비유', '창작자와 독자의 관계']],
  'common-28-31': ['공통 · 문학', '「고향 없는 사람들」', '이주민 가족이 마주한 현실과 고향에 대한 인식 변화를 사건의 계기와 함께 파악한다.', ['이주 조건과 현실', '인물 간 정보 차이', '편지가 만든 결정 변화', '고향과 유랑의 의미']],
  'common-32-34': ['공통 · 문학', '「속사미인곡」', '임과 떨어진 화자의 충정과 자책, 꿈속 만남에 담긴 소망을 중심으로 감상한다.', ['임을 향한 그리움', '자책과 충정', '꿈속의 만남', '현실 복귀와 소망']],
  'speech-35-37': ['화법과 작문 · 화법', '해양 유물 강연', '해양 유물의 탐사·발굴·보존 과정을 설명하는 강연의 내용과 말하기 방식을 분석한다.', ['강연의 화제 안내', '탐사와 발굴', '재질별 보존 처리', '청중 반응']],
  'speech-38-42': ['화법과 작문 · 통합', '수리 배움터 협의와 소개 글', '동아리 협의 내용이 소개 글의 계획과 표현에 어떻게 반영되었는지 대응한다.', ['회의 쟁점', '운영 방식 결정', '조사 자료 활용', '초고 수정']],
  'speech-43-45': ['화법과 작문 · 작문', '지역신문 활성화 글', '지역신문의 역할과 위기를 진단하고 실행 주체별 활성화 방안과 자료 활용을 판단한다.', ['지역신문의 기능', '위기의 원인', '주체별 활성화 방안', '추가 자료 활용']],
  'media-35-39': ['언어와 매체 · 언어', '색채어·담화·음운·문장', '색채어 형성부터 대용 표현, 경음화, 문장 성분까지 언어 규칙을 자료에 적용한다.', ['색채어의 체계', '불규칙 활용', '언어적 맥락과 대용', '음운·문장 규칙']],
  'media-40-43': ['언어와 매체 · 매체', '인터넷 방송과 카드 뉴스', '실시간 방송의 정보 전달 방식과 이를 재구성한 카드 뉴스의 제작 계획을 비교한다.', ['방송 도입과 화제', '실시간 상호 작용', '카드 뉴스 재구성', '표현 효과']],
  'media-44-45': ['언어와 매체 · 매체', '앱과 누리 소통망', '둘레길 앱 정보와 단체 대화방 기능이 실제 의사 결정에 사용되는 방식을 분석한다.', ['앱 정보 탐색', '경로 협의', '기능별 정보 공유', '예약 메시지의 목적']],
};

function unitStudyId(unit) {
  const numbers = unit.questions.map(question => question.number);
  return `${unit.subject}-${Math.min(...numbers)}-${Math.max(...numbers)}`;
}

function stripStudyMarkdown(value) {
  return value
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/<\/?u>/g, '')
    .replace(/\*\*|__|`|^>\s?/gm, '')
    .replace(/^[-◦∙]\s*/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanStudySentence(value) {
  return value
    .replace(/\*\*/g, '')
    .replace(/^```(?:text)?|```$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildGenericPassage(unit) {
  const id = unitStudyId(unit);
  const lineBased = id === 'common-22-27' || id === 'common-32-34';
  const imageLines = unit.passageLines.filter(line => /^!\[/.test(line.trim()));
  const sourceLines = unit.passageLines
    .map(line => line.trim())
    .filter(line => line && !/^!\[/.test(line) && !/^```/.test(line))
    .filter(line => !/^◦이어서/.test(line) && line !== '하시오.');
  const sentences = lineBased
    ? sourceLines
        .filter(line => !/^\*\*\[\/?[A-Z]\]\*\*$/.test(line))
        .map(stripStudyMarkdown)
        .filter(Boolean)
    : splitStudySentences(stripStudyMarkdown(sourceLines.join(' ')));
  const chunkSize = lineBased ? 7 : 5;
  const paragraphs = [];
  for (let index = 0; index < sentences.length; index += chunkSize) {
    const group = sentences.slice(index, index + chunkSize);
    const paragraphId = `P${paragraphs.length + 1}`;
    paragraphs.push({
      id: paragraphId,
      role: lineBased ? '작품 대목' : paragraphs.length === 0 ? '도입·핵심 개념' : '내용 전개',
      summary: stripStudyMarkdown(group.join(' ')).slice(0, 88) + (stripStudyMarkdown(group.join(' ')).length > 88 ? '…' : ''),
      sentences: group.map((text, sentenceIndex) => ({
        id: `${paragraphId}-S${sentenceIndex + 1}`,
        paragraphId,
        number: sentenceIndex + 1,
        text,
        plain: stripStudyMarkdown(text),
      })),
    });
  }
  const supplementalParagraphs = [];
  for (const question of unit.questions) {
    const { bodyLines } = getQuestionParts(question);
    const choiceStart = bodyLines.findIndex(line => /^[①②③④⑤]/.test(line.trim()));
    if (choiceStart <= 0) continue;
    const stimulusLines = bodyLines.slice(0, choiceStart)
      .map(line => line.trim())
      .filter(line => line && line !== '〈보기〉' && !/^!\[/.test(line) && !/^```/.test(line));
    const stimulusText = stripStudyMarkdown(stimulusLines.join(' '));
    if (stripStudyMarkdown(stimulusText).length < 40) continue;
    const stimulusSentences = splitStudySentences(stimulusText);
    for (let index = 0; index < stimulusSentences.length; index += 5) {
      const group = stimulusSentences.slice(index, index + 5);
      const paragraphId = `Q${question.number}-P${Math.floor(index / 5) + 1}`;
      supplementalParagraphs.push({
        id: paragraphId,
        role: `${question.number}번 문항 자료`,
        questionNumber: question.number,
        summary: `${question.number}번의 〈보기〉·대화·자료에서 판단에 필요한 부분이다.`,
        sentences: group.map((text, sentenceIndex) => ({
          id: `${paragraphId}-S${sentenceIndex + 1}`,
          paragraphId,
          questionNumber: question.number,
          number: sentenceIndex + 1,
          text,
          plain: stripStudyMarkdown(text),
        })),
      });
    }
  }
  const renderParagraph = paragraph => `<article class="study-paragraph" data-paragraph="${paragraph.id}"${paragraph.questionNumber ? ` data-question-material="${paragraph.questionNumber}"${paragraph.questionNumber === unit.questions[0].number ? '' : ' hidden'}` : ''}>
  <header><b>${paragraph.id}</b><span>${paragraph.role}</span></header>
  <p>${paragraph.sentences.map(sentence => `<span class="study-sentence" data-sentence="${sentence.id}"><em aria-label="${paragraph.id} ${sentence.number}문장">${sentence.number}</em>${escapeQuestionTitle(sentence.text)}</span>`).join(' ')}</p>
  <footer>${escapeHtml(paragraph.summary)}</footer>
</article>`;
  const html = paragraphs
    .map(renderParagraph)
    .join('\n');
  const supplementalHtml = supplementalParagraphs.length
    ? `<div class="study-material-divider"><b>문항별 추가 자료</b><span>근거 버튼을 누르면 해당 문항 자료로 바로 이동합니다.</span></div>${supplementalParagraphs.map(renderParagraph).join('\n')}`
    : '';
  const assets = imageLines.length
    ? `<div class="study-passage-assets"><b>원문 자료</b>${renderMarkdown(imageLines.join('\n\n'))}</div>`
    : '';
  const allParagraphs = [...paragraphs, ...supplementalParagraphs];
  return { paragraphs: allParagraphs, sentences: allParagraphs.flatMap(paragraph => paragraph.sentences), html: `${assets}${html}${supplementalHtml}` };
}

const evidenceStopWords = new Set(['그리고', '그러나', '따라서', '내용', '지문', '선지', '경우', '것이다', '있다', '없다', '한다', '대한', '에서', '으로', '이다']);

function studyTokens(value) {
  return (stripStudyMarkdown(value).match(/[가-힣A-Za-z0-9]{2,}/g) || [])
    .filter(token => !evidenceStopWords.has(token));
}

function findEvidence(solution, passage, questionNumber) {
  const tokens = new Set(studyTokens(solution.markdown));
  const ranked = passage.sentences
    .filter(sentence => !sentence.questionNumber || sentence.questionNumber === questionNumber)
    .map(sentence => {
      const words = studyTokens(sentence.plain);
      const overlap = words.reduce((score, word) => score + (tokens.has(word) ? Math.min(word.length, 5) : 0), 0);
      return { ...sentence, score: overlap / Math.max(5, Math.sqrt(words.length || 1)) };
    })
    .sort((a, b) => b.score - a.score);
  const selected = ranked.slice(0, ranked[1]?.score >= ranked[0]?.score * .78 ? 2 : 1);
  const grouped = new Map();
  for (const sentence of selected) {
    if (!grouped.has(sentence.paragraphId)) grouped.set(sentence.paragraphId, []);
    grouped.get(sentence.paragraphId).push(sentence);
  }
  return [...grouped.values()].map(group => group.sort((a, b) => a.number - b.number)).map(group => ({
    ids: group.map(sentence => sentence.id),
    label: `${group[0].questionNumber ? `Q${group[0].questionNumber} 자료` : group[0].paragraphId} · ${group.map(sentence => sentence.number).join('·')}문장`,
    quote: group.map(sentence => sentence.plain).join(' '),
  }));
}

function getQuestionParts(question) {
  const bodyLines = [...question.lines];
  const continuation = [];
  while (bodyLines.length && bodyLines[0].trim() && !/^(?:〈보기〉|[①②③④⑤]|!\[|\[|>|[-◦∙]|[가-힣A-Za-z0-9　 ]+[:：])/.test(bodyLines[0].trim())) {
    continuation.push(bodyLines.shift().trim());
  }
  while (bodyLines[0]?.trim() === '') bodyLines.shift();
  return { title: [question.title, ...continuation].join(' '), bodyLines };
}

function classifyStudyQuestion(title) {
  if (/바꿔 쓰기|가까운 의미/.test(title)) return '어휘·문맥';
  if (/말하기 방식|정보 전달 방식|글쓰기 방식|표현/.test(title)) return '표현 방식';
  if (/보기|자료|활동|\[A\]|감상/.test(title)) return '자료 적용';
  if (/추론/.test(title)) return '추론';
  return '내용 판단';
}

const studyTypeGuides = {
  '어휘·문맥': ['표현이 쓰인 앞뒤 문맥을 확인한다.', '사전적 의미보다 문맥 속 의미를 한 문장으로 바꾼다.', '같은 의미 관계가 유지되는 선택지를 고른다.'],
  '표현 방식': ['발화·표현이 수행하는 기능을 먼저 확인한다.', '해당 기능이 실제 자료에 구현되었는지 대조한다.', '표현의 존재와 효과를 과장한 선택지를 제거한다.'],
  '자료 적용': ['지문의 핵심 기준을 짧게 정리한다.', '〈보기〉의 대상·행동·결과를 기준에 대응시킨다.', '주체·시점·목적이 바뀐 선택지를 찾는다.'],
  '추론': ['지문에 직접 제시된 전제와 관계를 찾는다.', '선택지의 결론이 그 전제에서 가능한지 확인한다.', '범위를 확대하거나 방향을 뒤집은 판단을 제거한다.'],
  '내용 판단': ['선택지의 주체와 핵심 서술어를 표시한다.', '지문의 대응 문장과 범위·방향을 대조한다.', '부정 표현을 다시 확인한 뒤 답을 결정한다.'],
};

function extractChoiceBlocks(lines) {
  const normalized = normalizeStudyLines(lines);
  return [...normalized.matchAll(/([①②③④⑤])\s*([\s\S]*?)(?=[①②③④⑤]|$)/g)]
    .map(match => `${match[1]}${match[2].trim()}`);
}

function choiceReason(symbol, answer, solutionText) {
  const sentences = splitStudySentences(solutionText);
  const direct = sentences.filter(sentence => sentence.includes(symbol));
  if (direct.length) return direct.join(' ');
  if (symbol === answer) return sentences.slice(0, 2).join(' ');
  return '지문·자료의 조건과 대조하면 핵심 관계나 적용 범위가 정확히 일치하지 않는다.';
}

function renderGenericQuestion(unit, question, passage) {
  const solution = solutions.get(`${unit.subject}-${question.number}`);
  if (!solution) return '';
  const { title, bodyLines } = getQuestionParts(question);
  const type = classifyStudyQuestion(title);
  const evidence = findEvidence(solution, passage, question.number);
  const solutionText = stripStudyMarkdown(solution.markdown);
  const choices = extractChoiceBlocks(bodyLines);
  const hasThreePoints = /\[3점\]/.test([title, ...bodyLines].join(' '));
  return `<article class="study-question-panel" data-study-question="${question.number}"${question.number === unit.questions[0].number ? '' : ' hidden'}>
  <header class="study-question-heading">
    <div><b>${question.number}번</b><span>${type}</span><span>${hasThreePoints ? '상 · 3점' : '2점'}</span></div>
    <button type="button" aria-expanded="false" onclick="const p=this.closest('.study-question-panel');const open=p.classList.toggle('is-revealed');this.setAttribute('aria-expanded',open);this.textContent=open?'해설 접기':'정답·해설 보기'">정답·해설 보기</button>
  </header>
  <section class="study-question-original">
    <h4>${question.number}. ${escapeQuestionTitle(title)}</h4>
    ${renderStudyQuestionBody(bodyLines).trim()}
  </section>
  <section class="study-answer-reveal">
    <div class="study-answer-line"><span>정답</span><strong>${solution.answer}</strong></div>
    <div class="study-explain-block"><h4>출제 의도</h4><p>${type}에 필요한 핵심 기준을 지문과 자료에 정확히 적용할 수 있는지 확인하는 문항이다.</p></div>
    <div class="study-explain-block">
      <h4>결정적 근거</h4>
      <div class="study-evidence-links">${evidence.map(item => `<button type="button" data-sentences="${item.ids.join(',')}" onclick="const lab=this.closest('.study-lab');const ids=this.dataset.sentences.split(',');lab.querySelectorAll('.study-sentence').forEach(s=>s.classList.toggle('is-highlighted',ids.includes(s.dataset.sentence)));if(matchMedia('(max-width: 820px)').matches){lab.dataset.mobilePane='passage';lab.querySelectorAll('.study-mobile-tabs button').forEach((b,i)=>b.setAttribute('aria-pressed',i===0))}lab.querySelector('[data-sentence='+ids[0]+']').scrollIntoView({behavior:'smooth',block:'center'})">${item.label} 근거 보기</button>`).join('')}</div>
      <blockquote>${escapeHtml(evidence.map(item => item.quote).join(' '))}</blockquote>
    </div>
    <div class="study-explain-block study-core-solution"><h4>핵심 해설</h4>${solution.html}</div>
    <div class="study-explain-block"><h4>풀이 순서</h4><ol>${studyTypeGuides[type].map(step => `<li>${step}</li>`).join('')}</ol></div>
    <div class="study-explain-block"><h4>선택지별 판단</h4><div class="study-choice-analysis">${choices.map(choice => {
      const symbol = choice[0];
      const verdict = symbol === solution.answer ? '정답' : '오답';
      return `<div class="${verdict === '정답' ? 'is-answer' : ''}"><b>${symbol}</b><span>${verdict}</span><p>${escapeHtml(choiceReason(symbol, solution.answer, solutionText))}</p></div>`;
    }).join('')}</div></div>
    <div class="study-trap"><b>오답 함정</b><p>선택지의 주체·시점·범위·인과 방향 중 하나를 지문과 다르게 연결하지 않았는지 확인한다.</p></div>
    <div class="study-takeaway"><b>수능 판단 기준</b><p>${studyTypeGuides[type][1]}</p></div>
  </section>
</article>`;
}

function renderGenericStudyLab(unit) {
  const id = unitStudyId(unit);
  const passage = buildGenericPassage(unit);
  const meta = genericUnitMeta[id] || [unit.subjectLabel, unit.prompt, '지문의 핵심 정보와 문항의 판단 기준을 연결해 읽는다.', ['핵심 개념', '내용 전개', '자료 적용', '선택지 판단']];
  const firstQuestion = unit.questions[0].number;
  return `<section class="study-lab" data-study-unit="${id}" data-active-question="${firstQuestion}" data-mobile-pane="passage" aria-label="${meta[1]} 지문과 문항 분석" hidden>
  <header class="study-lab-heading"><div><span>${meta[0]}</span><h2>[${unit.questions[0].number}～${unit.questions.at(-1).number}] ${meta[1]}</h2></div><small>문장 단위 근거 연동</small></header>
  <nav class="study-mobile-tabs" aria-label="모바일 분석 화면 선택"><button type="button" aria-pressed="true" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='passage';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">지문 분석</button><button type="button" aria-pressed="false" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='questions';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">문항 해설</button></nav>
  <div class="study-workspace">
    <aside class="study-passage-pane"><section class="study-overview"><span>한 문장 요약</span><p>${meta[2]}</p><ol>${meta[3].map(item => `<li>${item}</li>`).join('')}</ol></section><div class="study-passage-text">${passage.html}</div><button class="study-go-questions" type="button" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='questions';const bs=l.querySelectorAll('.study-mobile-tabs button');bs.forEach((b,i)=>b.setAttribute('aria-pressed',i===1));l.querySelector('.study-question-pane').scrollIntoView({behavior:'smooth',block:'start'})">문항 해설 보기 →</button></aside>
    <section class="study-question-pane"><button class="study-back-passage" type="button" onclick="const l=this.closest('.study-lab');l.dataset.mobilePane='passage';const bs=l.querySelectorAll('.study-mobile-tabs button');bs.forEach((b,i)=>b.setAttribute('aria-pressed',i===0))">← 지문 분석으로</button>
      <nav class="study-question-tabs" aria-label="문항 선택">${unit.questions.map(question => `<button type="button" aria-pressed="${question.number === firstQuestion}" onclick="const l=this.closest('.study-lab');l.dataset.activeQuestion='${question.number}';l.querySelectorAll('[data-study-question]').forEach(p=>p.hidden=p.dataset.studyQuestion!=='${question.number}');l.querySelectorAll('[data-question-material]').forEach(m=>m.hidden=m.dataset.questionMaterial!=='${question.number}');this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">${question.number}번</button>`).join('')}</nav>
      ${unit.questions.map(question => renderGenericQuestion(unit, question, passage)).join('\n')}
    </section>
  </div>
</section>`;
}

const remainingStudyLabs = units.filter(unit => unit !== studyUnit).map(renderGenericStudyLab).join('\n');
const studyUnitTabs = units.map((unit, index) => {
  const id = unitStudyId(unit);
  const meta = genericUnitMeta[id];
  const label = index === 0 ? '1～3 전기류 독서' : `${unit.questions[0].number}～${unit.questions.at(-1).number} ${meta?.[1] || unit.subjectLabel}`;
  return `<button type="button" data-unit-target="${id}" aria-pressed="${index === 0}" onclick="const a=this.closest('.study-analysis');a.querySelectorAll('.study-lab').forEach(l=>l.hidden=l.dataset.studyUnit!==this.dataset.unitTarget);this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))"><span>${escapeHtml(unit.subjectLabel)}</span>${escapeHtml(label)}</button>`;
}).join('');

const studyAnalysisHtml = `<section class="study-analysis" aria-label="전 지문 문항 분석">
  <header class="study-analysis-heading"><div><span>전체 56문항</span><h2>지문 묶음을 선택해 분석하세요</h2></div><p>공통 34문항과 화법과 작문·언어와 매체 각 11문항을 모두 제공합니다.</p></header>
  <nav class="study-unit-tabs" aria-label="지문 묶음 선택">${studyUnitTabs}</nav>
  ${studyLabHtml}
  ${remainingStudyLabs}
</section>`;

const solutionHtml = units
  .map(unit => {
    const explanations = unit.questions
      .map(question => {
        const solution = solutions.get(`${unit.subject}-${question.number}`);
        if (!solution) return '';
        return `<article class="exam-solution" id="solution-${unit.subject}-${question.number}">
  <header><span>${question.number}번</span><strong>정답 ${solution.answer}</strong></header>
  ${solution.html}
</article>`;
      })
      .join('\n');

    return `<section class="solution-group" data-solution-set="${unit.subject}">
  <header class="solution-group-heading">
    <span>${escapeHtml(unit.subjectLabel)}</span>
    <h3>[${escapeHtml(unit.range.replace('~', '～'))}] ${escapeHtml(unit.prompt)}</h3>
  </header>
  <div class="exam-solution-grid">${explanations}</div>
</section>`;
  })
  .join('\n');

const workbook = `${startMarker}
<style>
  .exam-workbook { width: 100%; margin: 3.5rem 0; color: #111; color-scheme: light; font-family: "KoPub Batang", "Noto Serif KR", "AppleMyungjo", "Batang", serif; font-variant-numeric: tabular-nums; }
  .exam-workbook * { box-sizing: border-box; }
  .exam-workbook-intro { margin-bottom: 2rem; padding: 1.3rem 0; border-top: 3px double #111; border-bottom: 1px solid #111; background: #fff; }
  .exam-workbook-intro h2 { margin: 0 0 .65rem; padding: 0; border: 0; color: #111; font-size: 1.55rem; font-weight: 700; }
  .exam-workbook-intro p { margin: 0; color: #333; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: .9rem; line-height: 1.7; }
  .exam-print-toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem; margin-top: 1rem; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
  .exam-print-toolbar button { appearance: none; min-height: 2.35rem; padding: .45rem .8rem; border: 1px solid #333; border-radius: 0; color: #111; background: #fff; font: inherit; font-size: .82rem; font-weight: 700; cursor: pointer; }
  .exam-print-toolbar button:hover, .exam-print-toolbar button:focus-visible { color: #fff; background: #111; outline: none; }
  .exam-print-toolbar small { color: #555; font-size: .76rem; }
  .study-mode-tabs { display: flex; gap: 0; margin: 0 0 1.25rem; border: 2px solid #111; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
  .study-mode-tabs button { flex: 1; appearance: none; padding: .85rem .5rem; border: 0; border-right: 1px solid #111; color: #111; background: #fff; font: inherit; font-size: .9rem; font-weight: 800; cursor: pointer; }
  .study-mode-tabs button:last-child { border-right: 0; }
  .study-mode-tabs button[aria-pressed="true"] { color: #fff; background: #111; }
  .exam-workbook[data-learning-mode="paper"] .study-analysis,
  .exam-workbook[data-learning-mode="paper"] .legacy-solution-wrap { display: none; }
  .exam-workbook[data-learning-mode="analysis"] .kice-paper { display: none; }
  .kice-paper { margin: 0 auto; }
  .kice-view-tabs { display: flex; gap: 0; margin-bottom: 1rem; border: 1px solid #111; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
  .kice-view-tabs button { flex: 1; appearance: none; padding: .7rem .45rem; border: 0; border-right: 1px solid #111; color: #111; background: #fff; font: inherit; font-size: .82rem; font-weight: 800; cursor: pointer; }
  .kice-view-tabs button:last-child { border-right: 0; }
  .kice-view-tabs button[aria-pressed="true"] { color: #fff; background: #111; }
  .kice-paper[data-view-set="common"] .kice-page-set:not([data-exam-set="common"]),
  .kice-paper[data-view-set="speech"] .kice-page-set:not([data-exam-set="speech"]),
  .kice-paper[data-view-set="media"] .kice-page-set:not([data-exam-set="media"]) { display: none; }
  .kice-set-heading { display: flex; align-items: center; gap: .65rem; margin: 0 0 1rem; padding: .7rem 0; border-top: 2px solid #111; border-bottom: 1px solid #111; }
  .kice-set-heading span { padding: .2rem .45rem; border: 1px solid #111; color: #111; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: .72rem; font-weight: 800; }
  .kice-set-heading h3 { flex: 1; margin: 0; color: #111; font-size: 1.1rem; font-weight: 800; }
  .kice-set-heading b { color: #555; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: .76rem; }
  .kice-carousel-controls { display: flex; gap: .3rem; }
  .kice-carousel-controls button { appearance: none; width: 2rem; height: 2rem; padding: 0; border: 1px solid #555; border-radius: 0; color: #111; background: #fff; font: inherit; line-height: 1; cursor: pointer; }
  .kice-carousel-controls button:hover, .kice-carousel-controls button:focus-visible { color: #fff; background: #111; outline: none; }
  .kice-page-list { display: flex; gap: 1rem; padding: .25rem .15rem 1rem; overflow-x: auto; overscroll-behavior-x: contain; scroll-behavior: smooth; scroll-snap-type: x mandatory; scrollbar-color: #555 #eee; scrollbar-width: thin; }
  .kice-page { flex: 0 0 min(88%, 760px); margin: 0; background: #fff; box-shadow: 0 4px 18px rgb(0 0 0 / 13%); scroll-snap-align: start; scroll-snap-stop: always; }
  .kice-page-open { display: block; width: 100%; padding: 0; border: 0; color: inherit; background: #fff; line-height: 0; cursor: zoom-in; }
  .kice-page img { display: block; width: 100%; height: auto; margin: 0; border: 0; background: #fff; filter: none; }
  .kice-page figcaption { margin: 0; padding: .55rem .7rem; border-top: 1px solid #ddd; color: #555; background: #fafafa; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: .72rem; line-height: 1.5; text-align: right; }
  .kice-page-modal { width: min(96vw, 1180px); max-width: none; height: 94vh; max-height: none; padding: 0; border: 1px solid #333; color: #111; background: #e9e9e9; }
  .kice-page-modal::backdrop { background: rgb(0 0 0 / 78%); }
  .kice-modal-bar { position: sticky; top: 0; z-index: 2; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: .65rem .8rem; border-bottom: 1px solid #555; background: #fff; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
  .kice-modal-bar strong { font-size: .86rem; }
  .kice-modal-bar span { color: #666; font-size: .74rem; }
  .kice-modal-bar button { appearance: none; width: 2rem; height: 2rem; padding: 0; border: 1px solid #333; color: #111; background: #fff; font-size: 1.2rem; line-height: 1; cursor: pointer; }
  .kice-modal-canvas { height: calc(94vh - 3.4rem); overflow: auto; text-align: center; }
  .kice-modal-canvas img { display: block; width: 1100px; max-width: none; height: auto; margin: 0 auto; background: #fff; }
  .study-analysis { color: #111; background: #fff; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
  .study-analysis-heading { display: flex; align-items: end; justify-content: space-between; gap: 1rem; margin-bottom: .75rem; padding: .85rem 0; border-top: 3px double #111; border-bottom: 1px solid #111; }
  .study-analysis-heading span { color: #555; font-size: .72rem; font-weight: 800; }
  .study-analysis-heading h2 { margin: .15rem 0 0; color: #111; font-size: 1.18rem; }
  .study-analysis-heading p { max-width: 28rem; margin: 0; color: #555; font-size: .74rem; line-height: 1.55; text-align: right; }
  .study-unit-tabs { display: flex; gap: .4rem; margin-bottom: 1rem; padding: .15rem 0 .65rem; overflow-x: auto; scrollbar-width: thin; }
  .study-unit-tabs button { flex: 0 0 auto; appearance: none; min-width: 9.5rem; padding: .52rem .65rem; border: 1px solid #777; color: #111; background: #fff; font: inherit; font-size: .72rem; font-weight: 800; line-height: 1.35; text-align: left; cursor: pointer; }
  .study-unit-tabs button span { display: block; margin-bottom: .12rem; color: #666; font-size: .6rem; }
  .study-unit-tabs button[aria-pressed="true"] { color: #fff; background: #111; }
  .study-unit-tabs button[aria-pressed="true"] span { color: #ddd; }
  .study-lab { color: #111; background: #fff; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
  .study-lab[hidden], .study-question-panel[hidden] { display: none !important; }
  .study-lab-heading { display: flex; align-items: end; justify-content: space-between; gap: 1rem; margin-bottom: 1rem; padding: .85rem 0; border-top: 2px solid #111; border-bottom: 1px solid #111; }
  .study-lab-heading span { display: block; margin-bottom: .2rem; color: #555; font-size: .74rem; font-weight: 800; }
  .study-lab-heading h2 { margin: 0; color: #111; font-size: 1.15rem; line-height: 1.45; }
  .study-lab-heading small { flex: 0 0 auto; color: #666; font-size: .72rem; }
  .study-mobile-tabs { display: none; }
  .study-workspace { display: grid; grid-template-columns: minmax(0, 1.03fr) minmax(0, .97fr); gap: 1rem; align-items: start; }
  .study-passage-pane { position: sticky; top: 1rem; max-height: calc(100vh - 2rem); padding: .9rem; overflow: auto; border: 1px solid #777; background: #f5f5f3; scrollbar-width: thin; }
  .study-overview { margin-bottom: .9rem; padding: .85rem; border: 1px solid #777; background: #fff; }
  .study-overview > span { display: block; margin-bottom: .35rem; color: #555; font-size: .7rem; font-weight: 800; }
  .study-overview > p { margin: 0 0 .7rem; color: #111; font-size: .84rem; font-weight: 700; line-height: 1.65; }
  .study-overview ol { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .35rem; margin: 0; padding: 0; list-style: none; counter-reset: study-flow; }
  .study-overview li { position: relative; padding: .4rem .35rem .4rem 1.65rem; border: 1px solid #bbb; color: #333; background: #fafafa; font-size: .7rem; line-height: 1.35; counter-increment: study-flow; }
  .study-overview li::before { content: counter(study-flow); position: absolute; left: .42rem; top: .38rem; width: .85rem; height: .85rem; border-radius: 50%; color: #fff; background: #333; font-size: .6rem; line-height: .85rem; text-align: center; }
  .study-paragraph { margin-bottom: .65rem; padding: .75rem; border-left: 3px solid #555; background: #fff; transition: background-color .2s, box-shadow .2s; }
  .study-paragraph header { display: flex; align-items: center; gap: .4rem; margin-bottom: .45rem; }
  .study-paragraph header b { padding: .16rem .35rem; color: #fff; background: #111; font-size: .65rem; }
  .study-paragraph header span { color: #555; font-size: .7rem; font-weight: 800; }
  .study-paragraph > p { margin: 0; color: #111; font-family: "KoPub Batang", "Noto Serif KR", "AppleMyungjo", "Batang", serif; font-size: .82rem; line-height: 1.82; letter-spacing: -.01em; text-align: justify; text-indent: .7em; }
  .study-sentence { border-radius: 2px; box-decoration-break: clone; -webkit-box-decoration-break: clone; transition: background-color .2s, box-shadow .2s; }
  .study-sentence.is-highlighted { padding: .08em .14em; background: #fff0a6; box-shadow: 0 0 0 1px #8a7300; }
  .study-sentence em { display: inline-block; min-width: 1.05rem; margin: 0 .18rem 0 .08rem; border: 1px solid #aaa; border-radius: 999px; color: #555; background: #fafafa; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; font-size: .52rem; font-style: normal; font-weight: 800; line-height: .9rem; text-align: center; text-indent: 0; vertical-align: .14rem; }
  .study-paragraph footer { margin-top: .55rem; padding-top: .45rem; border-top: 1px dashed #aaa; color: #444; font-size: .7rem; font-weight: 700; line-height: 1.5; }
  .study-go-questions, .study-back-passage { display: none; }
  .study-question-pane { min-width: 0; }
  .study-question-tabs { position: sticky; top: 0; z-index: 2; display: flex; margin-bottom: .75rem; overflow-x: auto; border: 1px solid #111; background: #fff; scrollbar-width: thin; }
  .study-question-tabs button { flex: 1 0 3.8rem; appearance: none; padding: .62rem .4rem; border: 0; border-right: 1px solid #111; color: #111; background: #fff; font: inherit; font-size: .8rem; font-weight: 800; cursor: pointer; }
  .study-question-tabs button:last-child { border-right: 0; }
  .study-question-tabs button[aria-pressed="true"] { color: #fff; background: #111; }
  .study-question-panel { display: block; border: 1px solid #777; background: #fff; }
  .study-question-heading { display: flex; align-items: center; justify-content: space-between; gap: .7rem; padding: .7rem; border-bottom: 1px solid #777; background: #f5f5f3; }
  .study-question-heading > div { display: flex; flex-wrap: wrap; align-items: center; gap: .35rem; }
  .study-question-heading b { font-size: .88rem; }
  .study-question-heading span { padding: .15rem .35rem; border: 1px solid #999; color: #444; background: #fff; font-size: .66rem; font-weight: 700; }
  .study-question-heading button { appearance: none; padding: .38rem .55rem; border: 1px solid #111; color: #fff; background: #111; font: inherit; font-size: .7rem; font-weight: 800; cursor: pointer; }
  .study-question-original { padding: .9rem; font-family: "KoPub Batang", "Noto Serif KR", "AppleMyungjo", "Batang", serif; }
  .study-question-original h4 { margin: 0 0 .65rem; color: #111; font-size: .88rem; line-height: 1.6; }
  .study-question-original p { margin: 0 0 .55rem; color: #111; font-size: .78rem; line-height: 1.72; }
  .study-question-original > p { padding-left: 1.25em; text-indent: -1.25em; }
  .study-view-box { position: relative; margin: 1rem 0 .8rem; padding: 1.05rem .7rem .6rem; border: 1px solid #555; }
  .study-view-box > span { position: absolute; top: 0; left: 50%; padding: 0 .35rem; background: #fff; font-size: .78rem; font-weight: 700; transform: translate(-50%, -50%); }
  .study-view-box > p { text-align: justify; text-indent: .7em; }
  .study-answer-reveal { display: none; padding: .9rem; border-top: 3px double #111; background: #f7f7f7; }
  .study-question-panel.is-revealed .study-answer-reveal { display: block; }
  .study-core-solution > p, .study-core-solution > ul { margin: 0; }
  .study-passage-assets { margin-bottom: .7rem; padding: .7rem; border: 1px solid #777; background: #fff; }
  .study-passage-assets > b { display: block; margin-bottom: .45rem; font-size: .7rem; }
  .study-passage-assets .exam-figure { margin: .5rem 0; }
  .study-passage-assets img { display: block; max-width: 100%; height: auto; margin: 0 auto; }
  .study-material-divider { display: none; align-items: baseline; justify-content: space-between; gap: .5rem; margin: 1rem 0 .65rem; padding: .55rem .1rem; border-top: 2px solid #111; border-bottom: 1px solid #999; }
  .study-material-divider:has(~ [data-question-material]:not([hidden])) { display: flex; }
  .study-material-divider b { font-size: .72rem; }
  .study-material-divider span { color: #666; font-size: .64rem; }
  .study-answer-line { display: flex; align-items: center; justify-content: space-between; margin-bottom: .8rem; padding: .6rem .7rem; color: #fff; background: #111; }
  .study-answer-line span { font-size: .75rem; font-weight: 800; }
  .study-answer-line strong { font-size: 1.2rem; }
  .study-explain-block { margin-top: .8rem; padding: .75rem; border: 1px solid #aaa; background: #fff; }
  .study-explain-block h4 { margin: 0 0 .45rem; color: #111; font-size: .78rem; }
  .study-explain-block p, .study-explain-block li { color: #222; font-size: .75rem; line-height: 1.65; }
  .study-explain-block p { margin: 0; }
  .study-explain-block ol { margin: 0; padding-left: 1.2rem; }
  .study-evidence-links { display: flex; gap: .35rem; margin-bottom: .5rem; }
  .study-evidence-links button { appearance: none; padding: .28rem .45rem; border: 1px solid #111; color: #111; background: #fff; font: inherit; font-size: .66rem; font-weight: 800; cursor: pointer; }
  .study-explain-block blockquote { margin: 0; padding: .55rem .65rem; border-left: 3px solid #111; color: #222; background: #f2f2f2; font-family: "KoPub Batang", "Noto Serif KR", "AppleMyungjo", "Batang", serif; font-size: .74rem; line-height: 1.65; }
  .study-choice-analysis { display: grid; gap: .38rem; }
  .study-choice-analysis > div { display: grid; grid-template-columns: 1.3rem 2.5rem 1fr; gap: .35rem; align-items: start; padding: .45rem; border: 1px solid #ccc; }
  .study-choice-analysis > div.is-answer { border-color: #111; background: #fff4bd; }
  .study-choice-analysis b, .study-choice-analysis span { font-size: .7rem; line-height: 1.55; }
  .study-choice-analysis span { font-weight: 800; }
  .study-choice-analysis p { font-size: .7rem; line-height: 1.55; }
  .study-trap, .study-takeaway { margin-top: .7rem; padding: .7rem; }
  .study-trap { border: 1px solid #777; background: #eee; }
  .study-takeaway { border: 2px solid #111; background: #fff; }
  .study-trap b, .study-takeaway b { display: block; margin-bottom: .25rem; font-size: .72rem; }
  .study-trap p, .study-takeaway p { margin: 0; color: #222; font-size: .72rem; line-height: 1.6; }
  .legacy-solution-wrap { margin-top: 1.4rem; }
  .legacy-solution-toggle { width: 100%; appearance: none; padding: .75rem; border: 1px solid #777; color: #111; background: #fff; font: inherit; font-size: .78rem; font-weight: 800; cursor: pointer; }
  .legacy-solution-wrap:not([data-open="true"]) .exam-solutions { display: none; }
  .exam-solutions { margin-top: 4rem; padding-top: 1.1rem; border-top: 3px double #111; font-family: Pretendard, "Apple SD Gothic Neo", sans-serif; }
  .exam-solutions > header { margin-bottom: 1.4rem; }
  .exam-solutions > header h2 { margin: 0 0 .4rem; color: #111; font-size: 1.4rem; }
  .exam-solutions > header p { margin: 0; color: #555; font-size: .86rem; line-height: 1.65; }
  .solution-group { padding: 1rem; border: 1px solid #777; background: #f7f7f7; }
  .solution-group + .solution-group { margin-top: 1.4rem; }
  .solution-group-heading { display: flex; align-items: baseline; gap: .55rem; margin-bottom: .85rem; padding-bottom: .65rem; border-bottom: 1px solid #777; }
  .solution-group-heading span { flex: 0 0 auto; color: #111; font-size: .75rem; font-weight: 800; }
  .solution-group-heading h3 { margin: 0; color: #111; font-size: .92rem; line-height: 1.5; }
  .exam-solution-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .8rem; }
  .exam-solution { padding: .9rem; border: 1px solid #999; background: #fff; }
  .exam-solution header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .5rem; padding-bottom: .45rem; border-bottom: 1px solid #aaa; }
  .exam-solution header span, .exam-solution header strong { color: #111; font-weight: 800; }
  .exam-solution p { margin: 0; color: #222; font-size: .86rem; line-height: 1.7; }
  html.dark .exam-workbook, html.dark .exam-workbook-intro, html.dark .kice-set-heading, html.dark .exam-solution { color: #111; background: #fff; }
  html.dark .exam-workbook-intro h2, html.dark .exam-workbook-intro p, html.dark .kice-set-heading h3, html.dark .exam-solutions h2, html.dark .exam-solutions p, html.dark .solution-group-heading h3, html.dark .exam-solution header span, html.dark .exam-solution header strong, html.dark .exam-solution p { color: #111; }
  @media (max-width: 820px) {
    .exam-workbook { width: 100%; margin-top: 2.5rem; }
    .study-analysis-heading { display: block; }
    .study-analysis-heading p { margin-top: .35rem; text-align: left; }
    .study-unit-tabs button { min-width: 8.7rem; }
    .study-mode-tabs button { padding: .72rem .35rem; font-size: .8rem; }
    .kice-view-tabs button { padding: .62rem .25rem; font-size: .76rem; }
    .kice-page-list { gap: .75rem; }
    .kice-page { flex-basis: 88%; }
    .kice-page { box-shadow: 0 2px 10px rgb(0 0 0 / 14%); }
    .kice-set-heading { gap: .4rem; }
    .kice-set-heading h3 { font-size: 1rem; }
    .kice-page-modal { width: 96vw; height: 94vh; }
    .kice-modal-bar span { display: none; }
    .study-lab-heading { align-items: start; }
    .study-lab-heading small { display: none; }
    .study-mobile-tabs { position: sticky; top: 0; z-index: 4; display: flex; margin-bottom: .75rem; border: 1px solid #111; background: #fff; }
    .study-mobile-tabs button { flex: 1; appearance: none; padding: .62rem .35rem; border: 0; border-right: 1px solid #111; color: #111; background: #fff; font: inherit; font-size: .76rem; font-weight: 800; }
    .study-mobile-tabs button:last-child { border-right: 0; }
    .study-mobile-tabs button[aria-pressed="true"] { color: #fff; background: #111; }
    .study-workspace { display: block; }
    .study-passage-pane { position: static; max-height: none; }
    .study-lab[data-mobile-pane="passage"] .study-question-pane,
    .study-lab[data-mobile-pane="questions"] .study-passage-pane { display: none; }
    .study-go-questions, .study-back-passage { display: block; width: 100%; appearance: none; margin-top: .75rem; padding: .65rem; border: 1px solid #111; color: #fff; background: #111; font: inherit; font-size: .76rem; font-weight: 800; }
    .study-back-passage { margin: 0 0 .6rem; color: #111; background: #fff; }
    .study-question-tabs { top: 2.7rem; }
    .study-question-heading { align-items: start; }
    .study-question-original, .study-answer-reveal { padding: .75rem; }
    .exam-solution-grid { grid-template-columns: 1fr; }
  }
  @media print {
    body * { visibility: hidden !important; }
    .exam-workbook, .exam-workbook * { visibility: visible !important; }
    .exam-workbook { position: absolute; inset: 0 auto auto 0; width: 100%; margin: 0; transform: none; }
    .exam-workbook-intro, .exam-print-toolbar, .study-mode-tabs, .study-analysis, .legacy-solution-toggle, .kice-view-tabs, .kice-set-heading, .kice-page figcaption, .kice-page-modal { display: none !important; }
    .kice-paper[data-view-set] .kice-page-set { display: contents !important; }
    .kice-page-set, .kice-page-list { display: contents; }
    .kice-page { width: 100%; height: 100vh; margin: 0; break-after: page; background: #fff; box-shadow: none; }
    .kice-page-open { width: 100%; height: 100%; }
    .kice-page img { width: 100%; height: 100%; object-fit: contain; }
    html[data-exam-elective="speech"] .kice-paper [data-exam-set="media"],
    html[data-exam-elective="media"] .kice-paper [data-exam-set="speech"] { display: none !important; }
    html[data-exam-print="paper"] .kice-paper { display: block !important; }
    html[data-exam-print="paper"] .legacy-solution-wrap { display: none !important; }
    html[data-exam-print="paper"] .exam-solutions { display: none !important; }
    html[data-exam-print="solutions"] .kice-paper { display: none !important; }
    html[data-exam-print="solutions"] .legacy-solution-wrap { display: block !important; }
    html[data-exam-print="solutions"] .exam-solutions { display: block !important; }
    .exam-solutions { margin: 0; padding: 10mm; border: 0; background: #fff; }
    .exam-solutions > header { break-after: avoid-page; }
    .solution-group { margin: 0 0 6mm; padding: 4mm; break-before: page; border: 1px solid #777; background: #fff; }
    .exam-solution { break-inside: avoid-page; }
  }
</style>
<style id="exam-page-size">@page { size: B4 portrait; margin: 0; }</style>

<section id="detailed-solutions" class="exam-workbook not-prose" data-learning-mode="paper">
  <header class="exam-workbook-intro">
    <h2>9. 평가원 원본 시험지 · 전 문항 해설</h2>
    <p>업로드된 문제지 스캔본의 실제 조판을 그대로 제공합니다. 문제지는 공통과목 12쪽과 선택과목 각 4쪽으로 구성되며, 페이지를 누르면 고해상도 원본으로 확대할 수 있습니다.</p>
    <div class="exam-print-toolbar" aria-label="시험지 인쇄">
      <button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='speech';document.getElementById('exam-page-size').textContent='@page { size: B4 portrait; margin: 0; }';window.print()">화작 B4 인쇄</button>
      <button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='media';document.getElementById('exam-page-size').textContent='@page { size: B4 portrait; margin: 0; }';window.print()">언매 B4 인쇄</button>
      <button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='speech';document.getElementById('exam-page-size').textContent='@page { size: A4 portrait; margin: 0; }';window.print()">화작 A4 인쇄</button>
      <button type="button" onclick="document.documentElement.dataset.examPrint='paper';document.documentElement.dataset.examElective='media';document.getElementById('exam-page-size').textContent='@page { size: A4 portrait; margin: 0; }';window.print()">언매 A4 인쇄</button>
      <button type="button" onclick="document.documentElement.dataset.examPrint='solutions';document.getElementById('exam-page-size').textContent='@page { size: A4 portrait; margin: 0; }';window.print()">해설 인쇄</button>
      <small>시험지는 공통 12쪽과 선택한 과목 4쪽만 출력됩니다.</small>
    </div>
  </header>
  <nav class="study-mode-tabs" aria-label="학습 화면 선택">
    <button type="button" aria-pressed="true" onclick="const w=this.closest('.exam-workbook');w.dataset.learningMode='paper';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">시험지 보기</button>
    <button type="button" aria-pressed="false" onclick="const w=this.closest('.exam-workbook');w.dataset.learningMode='analysis';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">지문·문항 분석</button>
  </nav>
  <div class="kice-paper" data-view-set="common" aria-label="2027학년도 9월 모의평가 국어 문제지">
    <nav class="kice-view-tabs" aria-label="시험지 과목 선택">
      <button type="button" aria-pressed="true" onclick="const p=this.closest('.kice-paper');p.dataset.viewSet='common';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">공통과목 1～12쪽</button>
      <button type="button" aria-pressed="false" onclick="const p=this.closest('.kice-paper');p.dataset.viewSet='speech';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">화법과 작문</button>
      <button type="button" aria-pressed="false" onclick="const p=this.closest('.kice-paper');p.dataset.viewSet='media';this.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===this))">언어와 매체</button>
    </nav>
    ${paperHtml}
  </div>
  ${studyAnalysisHtml}
  <div class="legacy-solution-wrap" data-open="false">
    <button class="legacy-solution-toggle" type="button" aria-expanded="false" onclick="const w=this.closest('.legacy-solution-wrap');const open=w.dataset.open!=='true';w.dataset.open=String(open);this.setAttribute('aria-expanded',open);this.textContent=open?'기존 전체 해설 접기':'기존 전체 56문항 해설 펼치기'">기존 전체 56문항 해설 펼치기</button>
    <section class="exam-solutions" aria-label="전 문항 해설">
      <header>
        <h2>전 문항 해설</h2>
        <p>공식 정답과 대조한 풀이입니다. 문제지는 위 원본 면을 기준으로 확인하세요.</p>
      </header>
      ${solutionHtml}
    </section>
  </div>
  <dialog id="kice-page-modal" class="kice-page-modal" onclick="if(event.target===this)this.close()">
    <div class="kice-modal-bar">
      <strong data-modal-label>시험지 크게 보기</strong>
      <span>확대된 면은 안쪽에서 좌우·상하로 이동할 수 있습니다.</span>
      <button type="button" aria-label="닫기" onclick="this.closest('dialog').close()">×</button>
    </div>
    <div class="kice-modal-canvas"><img alt=""></div>
  </dialog>
</section>
${endMarker}`;

let article = fs.readFileSync(articlePath, 'utf8');
const existing = new RegExp(
  `${startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${endMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`
);

if (existing.test(article)) {
  article = article.replace(existing, workbook);
} else {
  const insertionPoint = '<h2 id="study-plan"';
  if (!article.includes(insertionPoint)) {
    throw new Error('Could not find the study-plan insertion point.');
  }
  article = article.replace(insertionPoint, `${workbook}\n\n${insertionPoint}`);
}

article = article.replace(
  '<li><a class="hover:underline" href="#study-plan">9. 수능까지의 학습 방향</a></li>',
  '<li><a class="hover:underline" href="#detailed-solutions">9. 수능 시험지형 전 문항 해설</a></li>\n    <li><a class="hover:underline" href="#study-plan">10. 수능까지의 학습 방향</a></li>'
);
article = article.replace(
  '9. 9월 모의평가 이후 수능 국어 공부 방향',
  '10. 9월 모의평가 이후 수능 국어 공부 방향'
);

fs.writeFileSync(articlePath, article);
console.log(`Generated ${units.length} exam units with ${solutions.size} verified solutions.`);
