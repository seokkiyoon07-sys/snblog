# 논술 시험지 HTML 을 public/nonsul/papers 로 복사하며 상단 막대·저작권 표기·의예 2문항 배치를 넣는다.
# 사용: python scripts/build-nonsul-papers.py "<SynologyDrive>/07_ SN_work/SN_출제/논술/조판/회차별" public/nonsul/papers
# 그 뒤 dev 서버를 켠 채 Edge --headless --print-to-pdf 로 public/nonsul/pdf/*.pdf 를 다시 만든다.
import os, re, sys

src, dst = sys.argv[1], sys.argv[2]
os.makedirs(dst, exist_ok=True)
U = {'가천대': 'gachon', '국민대': 'kookmin'}
K = {'기출': 'gichul', '모의': 'mock'}
T = {'인문': 'inmun', '자연': 'jayeon', '의예': 'uiye', '공통': 'common', 'A형': 'a', 'B형': 'b'}
UN = {'gachon': '가천대', 'kookmin': '국민대'}
UF = {'gachon': '가천대학교', 'kookmin': '국민대학교'}


def post_url(u, y, k):
    if y == '2026':
        return f'/nonsul/{u}-2026-nonsul-{k}'
    return f'/nonsul/{u}-nonsul'


CSS = (
    '.sn-bar{position:sticky;top:0;z-index:10;align-self:stretch;display:flex;justify-content:center;flex-wrap:wrap;gap:10px;'
    'margin:-20px 0 0;padding:10px;background:#18181b;font:600 14px/1.4 "Malgun Gothic","Apple SD Gothic Neo",sans-serif}'
    '.sn-bar a,.sn-bar button{color:#fff;background:#27272a;border:1px solid #52525b;border-radius:999px;padding:6px 14px;'
    'text-decoration:none;cursor:pointer;font:inherit}'
    '.sn-bar a:hover,.sn-bar button:hover{background:#3f3f46}'
    '@media print{.sn-bar{display:none!important}}'
    '@media screen{.flow{display:flex;flex-direction:column;align-items:center;gap:30px}}'
    '.paper::after{content:"%s";position:absolute;left:var(--pad-x,15mm);bottom:12mm;'
    'font:7.5pt/1.4 "Malgun Gothic","Apple SD Gothic Neo",sans-serif;color:#777;letter-spacing:0;white-space:pre}'
)



def find_div_end(s, start):
    """s[start] 가 '<div' 일 때 짝이 맞는 '</div>' 의 끝 위치."""
    depth = 0
    for m in re.compile(r'<div\b|</div>').finditer(s, start):
        depth += 1 if m.group(0) == '<div' else -1
        if depth == 0:
            return m.end()
    raise ValueError('unbalanced div')


def two_per_page(s):
    """의예 문제지: 한 쪽에 두 문항(왼쪽 단 1문항·오른쪽 단 1문항)으로 다시 배치해 풀이 공간을 만든다."""
    out, pos = [], 0
    for sec in re.finditer(r'<section class="flow"[^>]*data-kind="q"[^>]*>', s):
        body_start = sec.end()
        body_end = s.index('</section>', body_start)
        inner = s[body_start:body_end]
        papers, i = [], 0
        while True:
            j = inner.find('<div class="paper', i)
            if j < 0:
                break
            e = find_div_end(inner, j)
            papers.append(inner[j:e])
            i = e
        if not papers:
            continue
        first = papers[0]
        header = first[:first.index('<hr class="header-rule">') + len('<hr class="header-rule">')]
        rh = re.search(r'<div class="rh-title">(.*?)</div>.*?<div class="rh-sub[^"]*">(.*?)</div>', inner, re.S)
        title, sub = (rh.group(1), rh.group(2)) if rh else ('', '')
        units = []
        for paper in papers:
            k = 0
            while True:
                j = paper.find('<div class="u ', k)
                if j < 0:
                    break
                e = find_div_end(paper, j)
                # 원본 책자의 표지 문구(u-pass)는 머리말과 겹쳐서 빼고 문항만 배치한다
                if paper.startswith('<div class="u u-pass', j):
                    k = e
                    continue
                units.append(re.sub(r' style="min-height:[^"]*"', '', paper[j:e], count=1))
                k = e
        total = (len(units) + 1) // 2
        pages = []
        for n in range(total):
            left = units[2 * n]
            right = units[2 * n + 1] if 2 * n + 1 < len(units) else ''
            if n == 0:
                top = header
            elif (n + 1) % 2 == 0:
                top = (f'<div class="paper"><div class="running-head"><div class="rh-num left">{n + 1}</div>'
                       f'<div class="rh-title">{title}</div><div class="rh-sub right">{sub}</div></div><hr class="header-rule">')
            else:
                top = (f'<div class="paper"><div class="running-head"><div class="rh-num right">{n + 1}</div>'
                       f'<div class="rh-title">{title}</div><div class="rh-sub left">{sub}</div></div><hr class="header-rule">')
            pages.append(
                f'{top}<div class="body"><div class="col left">{left}</div><div class="divider"></div>'
                f'<div class="col right">{right}</div></div>'
                f'<div class="footer-box"><span class="a">{n + 1}</span><span class="b">{total}</span></div></div>'
            )
        out.append(s[pos:body_start])
        out.append(''.join(pages))
        pos = body_end
    out.append(s[pos:])
    return ''.join(out)

for f in sorted(os.listdir(src)):
    m = re.match(r'(가천대|국민대)_(\d{4})_(기출|모의)_(.+)\.html$', f)
    if not m:
        continue
    u, y, k, t = U[m[1]], m[2], K[m[3]], T[m[4]]
    base = f'{u}-{y}-{k}-{t}'
    s = open(os.path.join(src, f), encoding='utf8').read()
    url = post_url(u, y, k)
    credit = f'문제 저작권: {UF[u]} · 조판: SN독학기숙학원 (학습용)\\A정답 및 해설은 SNarGPT(snarGPT.ai)에서도 확인할 수 있습니다.'
    head = (
        '<meta name="robots" content="noindex, follow">\n'
        f'<link rel="canonical" href="https://blog.snacademy.co.kr{url}">\n'
        f'<style>{CSS % credit}</style>\n'
    )
    bar = (
        f'<nav class="sn-bar" aria-label="SN 논술"><a href="{url}">← {UN[u]} 논술 정답·SN 해설 보기</a>'
        f'<a href="/nonsul/pdf/{base}.pdf" download>PDF 다운로드</a>'
        '<button type="button" onclick="window.print()">인쇄</button></nav>\n'
    )
    assert '</head>' in s and re.search(r'<body[^>]*>', s), f
    if t == 'uiye':
        s = two_per_page(s)
    s = s.replace('</head>', head + '</head>', 1)
    s = re.sub(r'(<body[^>]*>)', lambda mm: mm.group(1) + '\n' + bar, s, count=1)
    open(os.path.join(dst, base + '.html'), 'w', encoding='utf8').write(s)
    print(base)
