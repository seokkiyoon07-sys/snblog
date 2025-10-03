# 📝 노션 데이터베이스 고급 설정 가이드

## 🎯 위치 제어를 위한 추가 속성

### 1. **기본 속성 (필수)**
```
- Title (제목): Title
- Excerpt (요약): Text  
- Category (카테고리): Select
- Status (상태): Select (Draft, Published)
- Created (생성일): Created time
```

### 2. **위치 제어 속성 (선택)**
```
- Slug (URL 슬러그): Text
  예: "my-awesome-post" → /originals/my-awesome-post
  
- Subcategory (서브카테고리): Select
  예: "tutorial", "review", "news"
  → /originals/tutorial/글ID
  
- PageId (페이지 ID): Text
  커스텀 페이지 ID 설정 가능
  
- CustomUrl (커스텀 URL): Text
  완전한 URL 경로 설정
  예: "/special/my-post"
```

### 3. **디자인 제어 속성**
```
- Layout (레이아웃): Select
  옵션: "notion-style", "blog-style"
  
- Theme (테마): Select  
  옵션: "light", "dark", "auto"
  
- Width (너비): Select
  옵션: "narrow", "normal", "wide", "full"
  
- ShowSidebar (사이드바 표시): Checkbox
- ShowComments (댓글 표시): Checkbox
```

### 4. **SEO 및 메타데이터**
```
- MetaTitle (메타 제목): Text
- MetaDescription (메타 설명): Text  
- Keywords (키워드): Multi-select
- Author (작성자): Text
- ReadTime (읽기시간): Number
- Featured (추천글): Checkbox
- Thumbnail (썸네일): URL
- Tags (태그): Multi-select
```

## 🔧 URL 생성 규칙

### 우선순위:
1. **CustomUrl**이 있으면 그대로 사용
2. **Slug**이 있으면 `/{category}/{slug}` 사용  
3. **Subcategory**가 있으면 `/{category}/{subcategory}/{pageId}` 사용
4. 기본적으로 `/{category}/{pageId}` 사용

### 예시:
```
CustomUrl: "/special/my-post"
→ https://blog.snacademy.co.kr/special/my-post

Slug: "notion-tutorial"  
Category: "originals"
→ https://blog.snacademy.co.kr/originals/notion-tutorial

Subcategory: "tutorial"
Category: "originals"  
PageId: "abc123"
→ https://blog.snacademy.co.kr/originals/tutorial/abc123
```

## 🎨 디자인 옵션

### 1. **노션 스타일 유지**
- Layout: "notion-style"
- 노션의 원본 디자인을 최대한 유지
- 블로그 테마와 조화롭게 조정

### 2. **블로그 스타일 적용**  
- Layout: "blog-style"
- 블로그의 기존 CSS 스타일 적용
- 일관된 디자인 유지


## 📋 설정 예시

### 노션 데이터베이스 템플릿:

```
📝 블로그 포스트

속성:
├── Title: "노션으로 블로그 관리하기"
├── Excerpt: "노션 API를 활용한 자동 블로그 동기화 방법"
├── Category: "originals"  
├── Subcategory: "tutorial"
├── Slug: "notion-blog-management"
├── Layout: "notion-style"
├── Theme: "light"
├── Width: "normal"
├── ShowSidebar: true
├── ShowComments: false
├── Author: "SN Academy"
├── ReadTime: 8
├── Featured: true
├── Thumbnail: "https://example.com/image.jpg"
├── Tags: ["노션", "블로그", "자동화"]
├── Status: "Published"
└── Created: 2025-10-03
```

### 결과 URL:
```
https://blog.snacademy.co.kr/originals/tutorial/notion-blog-management
```

## 🚀 고급 기능

### 1. **조건부 렌더링**
```javascript
// Layout에 따른 렌더링 방식 결정
if (post.layout === 'notion-style') {
  return <div className="notion-content">{markdown}</div>;
} else {
  return <div className="prose">{markdown}</div>;
}
```

### 2. **동적 스타일링**
```javascript
// Theme에 따른 CSS 클래스 적용
const themeClass = post.theme === 'dark' ? 'dark' : 'light';
const widthClass = `width-${post.width}`;

return (
  <div className={`notion-content ${themeClass} ${widthClass}`}>
    {content}
  </div>
);
```

### 3. **SEO 최적화**
```javascript
// 메타데이터 동적 생성
const metaTitle = post.metaTitle || post.title;
const metaDescription = post.metaDescription || post.excerpt;
const keywords = post.keywords.join(', ');
```

이렇게 설정하면 노션에서 매우 세밀하게 블로그 글의 위치와 디자인을 제어할 수 있습니다!
