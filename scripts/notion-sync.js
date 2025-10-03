// 노션 API를 통한 블로그 동기화 스크립트
const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

// 노션 클라이언트 설정
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// 노션 데이터베이스 ID
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// 마크다운 변환 함수
function convertNotionToMarkdown(blocks) {
  let markdown = '';
  
  blocks.forEach(block => {
    switch (block.type) {
      case 'paragraph':
        if (block.paragraph.rich_text.length > 0) {
          markdown += block.paragraph.rich_text.map(text => text.plain_text).join('') + '\n\n';
        }
        break;
        
      case 'heading_1':
        markdown += '# ' + block.heading_1.rich_text.map(text => text.plain_text).join('') + '\n\n';
        break;
        
      case 'heading_2':
        markdown += '## ' + block.heading_2.rich_text.map(text => text.plain_text).join('') + '\n\n';
        break;
        
      case 'heading_3':
        markdown += '### ' + block.heading_3.rich_text.map(text => text.plain_text).join('') + '\n\n';
        break;
        
      case 'bulleted_list_item':
        markdown += '- ' + block.bulleted_list_item.rich_text.map(text => text.plain_text).join('') + '\n';
        break;
        
      case 'numbered_list_item':
        markdown += '1. ' + block.numbered_list_item.rich_text.map(text => text.plain_text).join('') + '\n';
        break;
        
      case 'code':
        markdown += '```' + (block.code.language || '') + '\n';
        markdown += block.code.rich_text.map(text => text.plain_text).join('') + '\n';
        markdown += '```\n\n';
        break;
        
      case 'quote':
        markdown += '> ' + block.quote.rich_text.map(text => text.plain_text).join('') + '\n\n';
        break;
        
      case 'image':
        if (block.image.type === 'external') {
          markdown += `![${block.image.caption?.[0]?.plain_text || ''}](${block.image.external.url})\n\n`;
        }
        break;
        
      case 'divider':
        markdown += '---\n\n';
        break;
    }
  });
  
  return markdown;
}

// 노션에서 포스트 가져오기
async function fetchNotionPosts() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'Created',
          direction: 'descending'
        }
      ]
    });

    const posts = [];
    
    for (const page of response.results) {
      const pageId = page.id;
      
      // 페이지 내용 가져오기
      const blocks = await notion.blocks.children.list({
        block_id: pageId,
      });
      
      const content = convertNotionToMarkdown(blocks.results);
      
      // 페이지 속성 가져오기
      const properties = page.properties;
      
      const post = {
        id: pageId.replace(/-/g, ''),
        title: properties.Title?.title?.[0]?.plain_text || '제목 없음',
        excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
        content: content,
        category: properties.Category?.select?.name?.toLowerCase() || 'originals',
        tags: properties.Tags?.multi_select?.map(tag => tag.name) || [],
        author: properties.Author?.rich_text?.[0]?.plain_text || 'SN Academy',
        date: properties.Created?.created_time?.split('T')[0] || new Date().toISOString().split('T')[0],
        readTime: properties.ReadTime?.number || Math.ceil(content.split(' ').length / 200),
        featured: properties.Featured?.checkbox || false,
        thumbnail: properties.Thumbnail?.url || '',
        url: `/${properties.Category?.select?.name?.toLowerCase() || 'originals'}/${pageId.replace(/-/g, '')}`
      };
      
      posts.push(post);
    }
    
    return posts;
  } catch (error) {
    console.error('노션에서 포스트를 가져오는 중 오류:', error);
    throw error;
  }
}

// posts.ts 파일 업데이트
function updatePostsFile(posts) {
  const postsPath = path.join(__dirname, '..', 'src', 'data', 'posts.ts');
  
  let content = `// 이 파일은 자동으로 생성됩니다. 직접 수정하지 마세요.
// 노션에서 동기화된 포스트 데이터

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  thumbnail?: string;
  url: string;
}

export const allPosts: Post[] = [
`;

  posts.forEach(post => {
    content += `  {
    id: '${post.id}',
    title: '${post.title.replace(/'/g, "\\'")}',
    excerpt: '${post.excerpt.replace(/'/g, "\\'")}',
    content: \`${post.content.replace(/`/g, '\\`')}\`,
    category: '${post.category}',
    tags: [${post.tags.map(tag => `'${tag}'`).join(', ')}],
    author: '${post.author}',
    date: '${post.date}',
    readTime: '${post.readTime}',
    featured: ${post.featured},
    thumbnail: '${post.thumbnail}',
    url: '${post.url}'
  },
`;
  });

  content += `];

// 헬퍼 함수들
export function getLatestPosts(limit: number = 5): Post[] {
  return allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getFeaturedPosts(): Post[] {
  return allPosts.filter(post => post.featured);
}

export function getPostById(id: string): Post | undefined {
  return allPosts.find(post => post.id === id);
}

export function searchPosts(query: string): Post[] {
  const lowercaseQuery = query.toLowerCase();
  return allPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}
`;

  fs.writeFileSync(postsPath, content, 'utf8');
  console.log('posts.ts 파일이 업데이트되었습니다.');
}

// 메인 실행 함수
async function main() {
  try {
    console.log('노션에서 포스트를 가져오는 중...');
    const posts = await fetchNotionPosts();
    console.log(`${posts.length}개의 포스트를 찾았습니다.`);
    
    console.log('posts.ts 파일을 업데이트하는 중...');
    updatePostsFile(posts);
    
    console.log('노션 동기화가 완료되었습니다!');
  } catch (error) {
    console.error('동기화 중 오류 발생:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fetchNotionPosts, updatePostsFile };
