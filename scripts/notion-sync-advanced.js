// 고급 노션 동기화 스크립트 (URL 커스터마이징)
const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// URL 생성 함수 (커스터마이징 가능)
function generateUrl(properties) {
  const category = properties.Category?.select?.name?.toLowerCase() || 'originals';
  const subcategory = properties.Subcategory?.select?.name?.toLowerCase();
  const slug = properties.Slug?.rich_text?.[0]?.plain_text;
  const pageId = properties.PageId?.rich_text?.[0]?.plain_text;
  
  // 1. 커스텀 슬러그가 있으면 사용
  if (slug) {
    return `/${category}/${slug}`;
  }
  
  // 2. 서브카테고리가 있으면 포함
  if (subcategory) {
    return `/${category}/${subcategory}/${pageId || 'untitled'}`;
  }
  
  // 3. 기본 카테고리 + 페이지 ID
  return `/${category}/${pageId || 'untitled'}`;
}

// 제목을 URL 친화적 슬러그로 변환
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, '') // 특수문자 제거
    .replace(/\s+/g, '-') // 공백을 하이픈으로
    .replace(/-+/g, '-') // 연속 하이픈 제거
    .trim();
}

// 노션에서 포스트 가져오기 (고급 버전)
async function fetchNotionPostsAdvanced() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Status',
        select: { equals: 'Published' }
      },
      sorts: [{ property: 'Created', direction: 'descending' }]
    });

    const posts = [];
    
    for (const page of response.results) {
      const pageId = page.id;
      const properties = page.properties;
      
      // 페이지 내용 가져오기
      const blocks = await notion.blocks.children.list({
        block_id: pageId,
      });
      
      const content = convertNotionToMarkdown(blocks.results);
      const title = properties.Title?.title?.[0]?.plain_text || '제목 없음';
      
      const post = {
        id: pageId.replace(/-/g, ''),
        title: title,
        excerpt: properties.Excerpt?.rich_text?.[0]?.plain_text || '',
        content: content,
        category: properties.Category?.select?.name?.toLowerCase() || 'originals',
        subcategory: properties.Subcategory?.select?.name?.toLowerCase(),
        tags: properties.Tags?.multi_select?.map(tag => tag.name) || [],
        author: properties.Author?.rich_text?.[0]?.plain_text || 'SN Academy',
        date: properties.Created?.created_time?.split('T')[0] || new Date().toISOString().split('T')[0],
        readTime: properties.ReadTime?.number || Math.ceil(content.split(' ').length / 200),
        featured: properties.Featured?.checkbox || false,
        thumbnail: properties.Thumbnail?.url || '',
        slug: properties.Slug?.rich_text?.[0]?.plain_text || createSlug(title),
        url: generateUrl(properties)
      };
      
      posts.push(post);
    }
    
    return posts;
  } catch (error) {
    console.error('노션에서 포스트를 가져오는 중 오류:', error);
    throw error;
  }
}

// 마크다운 변환 함수 (기존과 동일)
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

module.exports = { fetchNotionPostsAdvanced, generateUrl, createSlug };
