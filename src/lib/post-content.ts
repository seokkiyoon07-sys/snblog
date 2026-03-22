import fs from 'fs';
import path from 'path';

const CONTENT_BASE = path.join(process.cwd(), 'content');

// 카테고리명 → 폴더명 매핑 (일치하지 않는 경우만)
const CATEGORY_FOLDER_MAP: Record<string, string> = {
  'SN Originals': 'originals',
  'korean-problem': 'problem-download',
};

/**
 * 포스트 ID와 카테고리로 HTML 콘텐츠 파일을 읽어 반환 (서버 사이드 전용)
 * 파일 경로: content/{category}/{id}.html
 */
export function loadPostContent(id: string, category: string): string {
  const folder = CATEGORY_FOLDER_MAP[category] || category;
  const filePath = path.join(CONTENT_BASE, folder, `${id}.html`);
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}
