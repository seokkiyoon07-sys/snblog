import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import fs from 'fs';
import path from 'path';

// 노션 클라이언트를 함수 내부에서 생성하도록 변경
function getNotionClient() {
  return new Client({
    auth: process.env.NOTION_TOKEN,
  });
}

function getNotionToMarkdown() {
  const notion = getNotionClient();
  return new NotionToMarkdown({ notionClient: notion });
}

// 제목에서 slug 생성 (한글 지원)
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-') // 공백을 하이픈으로
    .replace(/[^\w\u3131-\uD79D-]/g, '') // 영문, 숫자, 한글, 하이픈만 허용
    .replace(/-+/g, '-') // 연속된 하이픈을 하나로
    .replace(/^-|-$/g, '') // 앞뒤 하이픈 제거
    .substring(0, 100); // 최대 100자
}

// 노션 페이지 속성 추출
function extractPageProperties(page: PageObjectResponse): {
  title: string;
  category: string;
  tags: string[];
  excerpt: string;
  published: boolean;
  featured: boolean;
  date: string;
  slug: string;
} {
  const properties = page.properties;

  // 제목 추출 (영어 속성명 사용)
  let title = 'Untitled';
  if (properties.Title && properties.Title.type === 'title') {
    title =
      properties.Title.title
        .map(t => ('text' in t ? t.text.content : ''))
        .join('') || 'Untitled';
  }

  // URL(Slug) 추출 (사용자가 직접 설정한 경우)
  let slug = '';
  if (properties.URL && properties.URL.type === 'rich_text') {
    slug = properties.URL.rich_text
      .map(t => ('text' in t ? t.text.content : ''))
      .join('')
      .trim();
  }

  // URL이 없으면 제목에서 자동 생성
  if (!slug) {
    slug = generateSlug(title);
  }

  // 카테고리 추출 (영어 속성명 사용)
  let category = 'columns';
  if (properties.Category && properties.Category.type === 'select') {
    category = properties.Category.select?.name.toLowerCase() || 'columns';
  }

  // 태그 추출 (데이터베이스에 없으므로 빈 배열)
  const tags: string[] = [];
  // Tags 속성이 없으므로 기본값 사용

  // 요약 추출 (영어 속성명 사용)
  let excerpt = '';
  if (
    properties['Excerpt(요약)'] &&
    properties['Excerpt(요약)'].type === 'rich_text'
  ) {
    excerpt = properties['Excerpt(요약)'].rich_text
      .map(t => ('text' in t ? t.text.content : ''))
      .join('');
  }

  // 발행 여부 (영어 속성명 사용)
  let published = false;
  if (properties.Published && properties.Published.type === 'checkbox') {
    published = properties.Published.checkbox;
  }

  // 추천글 여부 (데이터베이스에 없으므로 기본값)
  const featured = false;
  // Featured 속성이 없으므로 기본값 사용

  // 날짜 (Created 자동 생성 날짜 사용)
  let date = new Date().toISOString().split('T')[0];
  if (properties.Created && properties.Created.type === 'created_time') {
    date = properties.Created.created_time.split('T')[0];
  }

  return { title, category, tags, excerpt, published, featured, date, slug };
}

// 이미지 다운로드 함수 (보안 및 성능 개선)
async function downloadImage(
  url: string,
  postId: string,
  filename: string
): Promise<string> {
  const dir = path.join(process.cwd(), 'public', 'images', 'notion', postId);

  // 디렉토리 생성
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filepath = path.join(dir, filename);

  // 이미 다운로드된 파일이 있으면 스킵
  if (fs.existsSync(filepath)) {
    return `/images/notion/${postId}/${filename}`;
  }

  // URL 유효성 검증
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      throw new Error(`Invalid protocol: ${parsedUrl.protocol}`);
    }
  } catch (error) {
    throw new Error(`Invalid image URL: ${url}`);
  }

  // 타임아웃 설정 (30초)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SNBlog/1.0)',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to download: ${response.status} ${response.statusText}`
      );
    }

    // 파일 크기 제한 체크 (10MB)
    const contentLength = response.headers.get('content-length');
    if (contentLength) {
      const size = parseInt(contentLength, 10);
      if (size > 10 * 1024 * 1024) {
        throw new Error(
          `Image too large: ${Math.round(size / 1024 / 1024)}MB (max 10MB)`
        );
      }
    }

    // 이미지 데이터 가져오기
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 파일 저장
    fs.writeFileSync(filepath, buffer);

    return `/images/notion/${postId}/${filename}`;
  } catch (error: any) {
    // 실패 시 파일 삭제
    if (fs.existsSync(filepath)) {
      try {
        fs.unlinkSync(filepath);
      } catch (unlinkError) {
        console.error(
          `Failed to delete incomplete file: ${filepath}`,
          unlinkError
        );
      }
    }

    // 에러 메시지 개선
    if (error.name === 'AbortError') {
      throw new Error(`Image download timeout (30s): ${url}`);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

// 이미지 확장자 추출 함수 (개선)
function getImageExtension(url: string): string {
  try {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;

    // pathname에서 확장자 추출
    const match = pathname.match(/\.([a-zA-Z0-9]+)(?:\?|$)/);
    if (match) {
      const ext = match[1].toLowerCase();
      const supportedExts = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'];
      if (supportedExts.includes(ext)) {
        return ext === 'jpeg' ? 'jpg' : ext;
      }
    }
  } catch (error) {
    // URL 파싱 실패 시 기본값
  }

  // 기본값: jpg
  return 'jpg';
}

// 노션 블록에서 이미지 URL 추출 및 다운로드
async function processImages(
  blocks: any[],
  postId: string
): Promise<Map<string, string>> {
  const imageMap = new Map<string, string>();
  let imageIndex = 0;

  console.log(`📸 이미지 처리 시작 (총 ${blocks.length}개 블록)`);

  for (const block of blocks) {
    if (block.type === 'image' && block.image) {
      const image = block.image;
      let imageUrl = '';

      if (image.type === 'external') {
        imageUrl = image.external.url;
      } else if (image.type === 'file') {
        imageUrl = image.file.url;
      }

      if (imageUrl) {
        try {
          console.log(`   다운로드 중: ${imageUrl.substring(0, 80)}...`);
          const ext = getImageExtension(imageUrl);
          const filename = `image-${imageIndex}.${ext}`;
          const localPath = await downloadImage(imageUrl, postId, filename);
          imageMap.set(imageUrl, localPath);
          console.log(`   ✅ 저장됨: ${localPath}`);
          imageIndex++;
        } catch (error: any) {
          console.error(`⚠️  Failed to download image: ${imageUrl}`);
          console.error(`   Error: ${error.message}`);
          // 이미지 다운로드 실패 시에도 계속 진행
        }
      }
    }
  }

  console.log(`📸 이미지 처리 완료: ${imageMap.size}개 다운로드됨`);
  return imageMap;
}

// 마크다운 변환 및 이미지 경로 교체
function replaceImageUrls(
  markdown: string,
  imageMap: Map<string, string>
): string {
  let result = markdown;
  let replacedCount = 0;

  imageMap.forEach((localPath, notionUrl) => {
    // URL의 쿼리 파라미터 제거 (S3 서명 URL 처리)
    const baseUrl = notionUrl.split('?')[0];

    // 1. 정확한 URL 매칭 (쿼리 파라미터 포함)
    const escapedFullUrl = notionUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const fullUrlPattern = new RegExp(
      `!\\[(.*?)\\]\\(${escapedFullUrl}[^)]*\\)`,
      'g'
    );
    const beforeReplace = result;
    result = result.replace(fullUrlPattern, `![$1](${localPath})`);
    if (result !== beforeReplace) replacedCount++;

    // 2. 기본 URL 매칭 (쿼리 파라미터 없이)
    const escapedBaseUrl = baseUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const baseUrlPattern = new RegExp(
      `!\\[(.*?)\\]\\(${escapedBaseUrl}[^)]*\\)`,
      'g'
    );
    const beforeReplace2 = result;
    result = result.replace(baseUrlPattern, `![$1](${localPath})`);
    if (result !== beforeReplace2) replacedCount++;

    // 3. HTML img 태그 패턴
    const imgTagPattern = new RegExp(
      `<img[^>]*src=["']${escapedBaseUrl}[^"']*["'][^>]*>`,
      'g'
    );
    result = result.replace(
      imgTagPattern,
      `<img src="${localPath}" alt="image" />`
    );
  });

  console.log(`✅ ${replacedCount}개의 이미지 URL을 로컬 경로로 교체했습니다.`);
  return result;
}

// 노션 Callout을 HTML로 변환 (Tailwind 클래스 사용 - 라이트모드 더 밝게)
function convertCallouts(markdown: string): string {
  // 노션의 > 💡 패턴을 HTML div로 변환
  return markdown.replace(
    /^>\s*([📝💡⚠️✅❌🔥📌])\s*(.+?)$/gm,
    (match, emoji, content) => {
      // 이모지에 따른 Tailwind 클래스 매핑 (라이트모드는 매우 밝게!)
      const typeMap: Record<
        string,
        {
          lightBg: string;
          darkBg: string;
          lightBorder: string;
          darkBorder: string;
          lightText: string;
          darkText: string;
        }
      > = {
        '💡': {
          lightBg: 'bg-blue-100/50',
          darkBg: 'dark:bg-blue-950/30',
          lightBorder: 'border-blue-300',
          darkBorder: 'dark:border-blue-700',
          lightText: 'text-blue-900',
          darkText: 'dark:text-blue-100',
        },
        '⚠️': {
          lightBg: 'bg-yellow-100/50',
          darkBg: 'dark:bg-yellow-950/30',
          lightBorder: 'border-yellow-300',
          darkBorder: 'dark:border-yellow-700',
          lightText: 'text-yellow-900',
          darkText: 'dark:text-yellow-100',
        },
        '✅': {
          lightBg: 'bg-green-100/50',
          darkBg: 'dark:bg-green-950/30',
          lightBorder: 'border-green-300',
          darkBorder: 'dark:border-green-700',
          lightText: 'text-green-900',
          darkText: 'dark:text-green-100',
        },
        '❌': {
          lightBg: 'bg-red-100/50',
          darkBg: 'dark:bg-red-950/30',
          lightBorder: 'border-red-300',
          darkBorder: 'dark:border-red-700',
          lightText: 'text-red-900',
          darkText: 'dark:text-red-100',
        },
        '📝': {
          lightBg: 'bg-slate-100/50',
          darkBg: 'dark:bg-gray-800/50',
          lightBorder: 'border-slate-300',
          darkBorder: 'dark:border-gray-600',
          lightText: 'text-slate-800',
          darkText: 'dark:text-gray-200',
        },
        '🔥': {
          lightBg: 'bg-orange-100/50',
          darkBg: 'dark:bg-orange-950/30',
          lightBorder: 'border-orange-300',
          darkBorder: 'dark:border-orange-700',
          lightText: 'text-orange-900',
          darkText: 'dark:text-orange-100',
        },
        '📌': {
          lightBg: 'bg-indigo-100/50',
          darkBg: 'dark:bg-indigo-950/30',
          lightBorder: 'border-indigo-300',
          darkBorder: 'dark:border-indigo-700',
          lightText: 'text-indigo-900',
          darkText: 'dark:text-indigo-100',
        },
      };

      const config = typeMap[emoji] || typeMap['💡'];

      return `<div class="notion-callout border-l-4 rounded-r-lg p-4 my-4 flex gap-3 ${config.lightBg} ${config.darkBg} ${config.lightBorder} ${config.darkBorder}">
  <span class="text-xl flex-shrink-0" role="img" aria-label="callout-icon">${emoji}</span>
  <div class="flex-1 text-sm lg:text-base ${config.lightText} ${config.darkText}">${content}</div>
</div>`;
    }
  );
}

// 노션 Toggle을 React 컴포넌트로 변환
function convertToggles(markdown: string): string {
  // 노션의 토글은 마크다운 변환 시 특별한 패턴으로 나오므로
  // 실제 변환 결과를 보고 패턴을 조정해야 할 수 있습니다
  return markdown;
}

// 한글/영어 혼합 콘텐츠의 읽기 시간 계산 (개선)
function calculateReadTime(markdown: string): string {
  // HTML 태그 제거
  const text = markdown.replace(/<[^>]*>/g, '');

  // 한글 문자 수 계산 (한글 유니코드 범위: AC00-D7A3)
  const koreanChars = (text.match(/[\uAC00-\uD7A3]/g) || []).length;

  // 영어 단어 수 계산
  const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;

  // 숫자 문자 수 계산
  const numbers = (text.match(/[0-9]+/g) || []).length;

  // 읽기 시간 계산
  // - 한글: 500자/분 (평균적인 한국인 독서 속도)
  // - 영어: 200단어/분 (평균적인 영어 독서 속도)
  // - 숫자: 100개/분
  const readTimeMinutes =
    koreanChars / 500 + englishWords / 200 + numbers / 100;

  // 최소 1분, 올림 처리
  return Math.max(1, Math.ceil(readTimeMinutes)).toString();
}

// 메인 변환 함수
export async function convertNotionPageToPost(pageId: string) {
  try {
    const notion = getNotionClient();
    const n2m = getNotionToMarkdown();

    // 1. 페이지 메타데이터 가져오기
    const page = (await notion.pages.retrieve({
      page_id: pageId,
    })) as PageObjectResponse;

    const metadata = extractPageProperties(page);

    // 2. 페이지 블록 가져오기
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    });

    // 3. 이미지 다운로드
    const imageMap = await processImages(blocks.results, pageId);

    // 4. 마크다운 변환
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    let markdown = n2m.toMarkdownString(mdBlocks).parent;

    // 5. 이미지 URL 교체
    console.log(`\n🔄 이미지 URL 교체 시작...`);
    console.log(`   교체할 이미지 개수: ${imageMap.size}`);

    // 교체 전 Notion URL 확인
    const notionUrlMatches = markdown.match(
      /https:\/\/prod-files-secure\.s3[^\)]+/g
    );
    if (notionUrlMatches) {
      console.log(`   교체 전 Notion URL 발견: ${notionUrlMatches.length}개`);
    }

    markdown = replaceImageUrls(markdown, imageMap);

    // 교체 후 확인 및 누락된 이미지 처리
    let remainingNotionUrls = markdown.match(
      /https:\/\/prod-files-secure\.s3[^\)]+/g
    );
    if (remainingNotionUrls && remainingNotionUrls.length > 0) {
      console.log(
        `\n🔍 누락된 이미지 ${remainingNotionUrls.length}개 발견, 재처리 중...`
      );

      // 중복 제거
      const uniqueUrls = [...new Set(remainingNotionUrls)];
      let imageIndex = imageMap.size;

      for (const url of uniqueUrls) {
        try {
          console.log(`   다운로드 중: ${url.substring(0, 80)}...`);
          const ext = getImageExtension(url);
          const filename = `image-${imageIndex}.${ext}`;
          const localPath = await downloadImage(url, pageId, filename);
          imageMap.set(url, localPath);
          imageIndex++;
        } catch (error: any) {
          console.error(`   ⚠️  다운로드 실패: ${error.message}`);
        }
      }

      // 재교체
      markdown = replaceImageUrls(markdown, imageMap);

      // 최종 확인
      remainingNotionUrls = markdown.match(
        /https:\/\/prod-files-secure\.s3[^\)]+/g
      );
      if (remainingNotionUrls) {
        console.warn(
          `⚠️  여전히 교체되지 않은 URL: ${remainingNotionUrls.length}개`
        );
      } else {
        console.log(`✅ 모든 이미지 URL 교체 완료!`);
      }
    } else {
      console.log(`✅ 모든 이미지 URL 교체 완료!`);
    }

    // 6. 노션 특수 블록 변환
    markdown = convertCallouts(markdown);
    markdown = convertToggles(markdown);

    // 7. Post 객체 생성
    return {
      id: pageId,
      title: metadata.title,
      excerpt: metadata.excerpt || markdown.substring(0, 150) + '...',
      content: markdown,
      category: metadata.category,
      tags: metadata.tags,
      author: 'SN Academy',
      date: metadata.date,
      readTime: calculateReadTime(markdown),
      featured: metadata.featured,
      published: metadata.published,
      url: `/${metadata.category}/${metadata.slug}`,
      thumbnail:
        imageMap.size > 0 ? Array.from(imageMap.values())[0] : undefined,
    };
  } catch (error) {
    console.error(`Failed to convert Notion page ${pageId}:`, error);
    throw error;
  }
}

// 페이지 내부의 데이터베이스 찾기
async function findDatabaseInPage(pageId: string) {
  const notion = getNotionClient();

  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
    });

    for (const block of blocks.results) {
      if ('type' in block && block.type === 'child_database') {
        return block.id;
      }
    }

    return null;
  } catch (error) {
    console.error('Failed to find database in page:', error);
    return null;
  }
}

// 데이터베이스의 모든 페이지 가져오기
export async function fetchNotionDatabase() {
  try {
    const notion = getNotionClient();
    let databaseId = process.env.NOTION_DATABASE_ID!;

    // 페이지 ID인 경우 내부의 데이터베이스 찾기
    try {
      await notion.databases.retrieve({ database_id: databaseId });
    } catch (error: any) {
      if (error.code === 'validation_error' && error.message.includes('is a page')) {
        console.log('📄 페이지 ID 감지됨. 내부의 데이터베이스를 찾는 중...');
        const foundDbId = await findDatabaseInPage(databaseId);

        if (foundDbId) {
          console.log(`✅ 데이터베이스 발견: ${foundDbId}\n`);
          databaseId = foundDbId;
        } else {
          throw new Error('페이지 내부에 데이터베이스를 찾을 수 없습니다. Notion에서 데이터베이스 ID를 직접 확인해주세요.');
        }
      } else {
        throw error;
      }
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Created',
          direction: 'descending',
        },
      ],
    });

    const posts = await Promise.all(
      response.results.map(page =>
        convertNotionPageToPost((page as PageObjectResponse).id)
      )
    );

    return posts;
  } catch (error) {
    console.error('Failed to fetch Notion database:', error);
    throw error;
  }
}
