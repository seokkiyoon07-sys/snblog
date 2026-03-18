import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'posts');

/**
 * 포스트 ID로 HTML 콘텐츠 파일을 읽어 반환 (서버 사이드 전용)
 */
export function loadPostContent(id: string): string {
  const filePath = path.join(CONTENT_DIR, `${id}.html`);
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}
