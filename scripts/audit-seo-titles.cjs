const fs = require('node:fs');

const POSTS_PATH = 'src/data/post-records.ts';
const REPORT_PATH = 'docs/seo-title-audit.md';
const ORIGINALS_CATEGORY = 'SN Originals';
const SEO_ACTION_WORDS = ['해설', '해석', '총정리', '몰아보기', '소개'];

function extractStringField(block, field) {
  const pattern = new RegExp(`${field}:\\s*(?:\\n\\s*)?(['\\\`"])([\\s\\S]*?)\\1`);
  const match = block.match(pattern);
  return match ? match[2].replace(/\\n/g, '\n').trim() : '';
}

function parsePosts(source) {
  return (source.match(/\n  \{[\s\S]*?\n  \},/g) || []).map(block => {
    return {
      id: extractStringField(block, 'id'),
      title: extractStringField(block, 'title'),
      category: extractStringField(block, 'category'),
    };
  });
}

function hasWorkTitle(title) {
  return /「[^」]+」/.test(title);
}

function startsWithSearchIntent(title) {
  if (/^SN\s/.test(title) || title.startsWith('SN Originals')) {
    return true;
  }

  return /^(?:[^|「]+\s+)?「[^」]+」\s+(?:해설|해석)\s+\|/.test(title);
}

function hasSeoActionWord(title) {
  return SEO_ACTION_WORDS.some(word => title.includes(word));
}

function getOriginalsFindings(post) {
  const findings = [];
  const title = post.title.trim();

  if (!hasWorkTitle(title) && !title.startsWith('SN ')) {
    findings.push({
      id: post.id,
      title,
      issue: '작품명 표기(「작품명」)가 없고 SN 브랜드형 제목도 아닙니다.',
    });
  }

  if (!startsWithSearchIntent(title)) {
    findings.push({
      id: post.id,
      title,
      issue: '제목 앞부분이 작품명/작가명 중심 검색 의도와 맞지 않습니다.',
    });
  }

  if (!hasSeoActionWord(title)) {
    findings.push({
      id: post.id,
      title,
      issue: '해설/해석/총정리/몰아보기/소개 같은 검색 행동어가 없습니다.',
    });
  }

  if (title.includes('EBS 2027') && !title.includes('국어 문학')) {
    findings.push({
      id: post.id,
      title,
      issue: 'EBS 2027 제목에는 “국어 문학” 키워드를 함께 넣는 규칙이 필요합니다.',
    });
  }

  return findings;
}

const posts = parsePosts(fs.readFileSync(POSTS_PATH, 'utf8'));
const originals = posts.filter(post => post.category === ORIGINALS_CATEGORY);
const findings = originals.flatMap(getOriginalsFindings);

const report = [
  '# SEO Title Audit',
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  '## Rules',
  '',
  '- SN Originals titles should start with the author/work search intent, such as `김규동 「나비와 광장」 해설 | ...`.',
  '- Keep hook-style YouTube language in the body/excerpt, not at the front of the title.',
  '- EBS 2027 titles should include `EBS 2027` and `국어 문학` together.',
  '',
  '## Summary',
  '',
  `- SN Originals checked: ${originals.length}`,
  `- Findings: ${findings.length}`,
  '',
  '## Findings',
  '',
  findings.length === 0
    ? 'No SEO title issues found.'
    : '| Post | Issue | Title |\n| --- | --- | --- |\n' +
      findings
        .map(
          finding =>
            `| \`${finding.id}\` | ${finding.issue} | ${finding.title} |`
        )
        .join('\n'),
  '',
].join('\n');

fs.writeFileSync(REPORT_PATH, report);

console.log(
  JSON.stringify(
    {
      originals: originals.length,
      findings: findings.length,
      report: REPORT_PATH,
    },
    null,
    2
  )
);

if (findings.length > 0) {
  process.exitCode = 1;
}
