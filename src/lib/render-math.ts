import katex from 'katex';

// 본문 HTML 속 $...$ · $$...$$ 수식을 서버에서 미리 KaTeX HTML로 바꾼다.
// 브라우저에서 CDN 스크립트를 기다렸다 렌더링하면 접속 경로·속도에 따라 수식이 날것으로 남을 수 있어서다.
// 수식 안에는 태그가 없어야 한다 (`<`는 &lt; 로 쓴다). 태그를 넘는 $ 짝은 건드리지 않는다.
const ENTITIES: Record<string, string> = {
  '&lt;': '<',
  '&gt;': '>',
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' ',
};

function decode(tex: string): string {
  return tex.replace(
    /&(lt|gt|amp|quot|#39|nbsp);/g,
    entity => ENTITIES[entity]
  );
}

function render(tex: string, displayMode: boolean, source: string): string {
  try {
    return katex.renderToString(decode(tex), {
      displayMode,
      throwOnError: true,
      output: 'html',
    });
  } catch {
    // 렌더링에 실패한 수식은 원문 그대로 둔다 (브라우저 auto-render 가 한 번 더 시도한다)
    return source;
  }
}

export function renderMathInHtml(html: string): string {
  return html
    .replace(/\$\$([^<$]+?)\$\$/g, (source, tex: string) =>
      render(tex, true, source)
    )
    .replace(/(?<![\\$])\$([^<$\n]+?)\$/g, (source, tex: string) =>
      render(tex, false, source)
    );
}
