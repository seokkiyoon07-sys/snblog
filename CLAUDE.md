# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

```bash
npm run dev           # Start development server at http://localhost:3000
npm run build         # Build for production
npm run start         # Start production server
npm run type-check    # TypeScript type checking
```

### Content Management

```bash
npm run sync:notion       # Sync posts from Notion database to notion-posts.ts
npm run backup:posts      # Create backup of posts.ts in backups/ directory
npm run restore:posts     # Restore posts.ts from latest backup
```

### Deployment

```bash
npm run deploy            # Interactive deployment script
npm run deploy:vercel     # Deploy to Vercel
npm run deploy:docker     # Deploy to Docker server
npm run deploy:github     # GitHub Actions deployment
```

### Docker

```bash
npm run docker:build      # Build Docker image
npm run docker:run        # Run Docker container on port 3000
npm run docker:compose    # Start with Docker Compose
npm run docker:down       # Stop Docker containers
npm run docker:logs       # View Docker logs
```

### Testing & Utilities

```bash
npm run test:jandi        # Test Jandi webhook notification
npm run lint              # Run ESLint
npm run lint:fix          # Auto-fix ESLint issues
npm run format            # Format code with Prettier
```

## Architecture

### Dual Content Management System

This blog has a unique dual content system:

1. **Manual Posts (`src/data/posts.ts`)**
   - Hand-crafted posts managed directly in code
   - Full control over content, metadata, and URL structure
   - Protected from Notion sync (file header warning)
   - Primary source for published content

2. **Notion-Generated Posts (`src/data/notion-posts.ts`)**
   - Auto-generated from Notion database via `npm run sync:notion`
   - Used ONLY in development environment (`NODE_ENV=development`)
   - Never used in production builds
   - Allows content preview before manually adding to posts.ts

**Critical Rule**: Never run Notion sync in production. The `posts.ts` file must be manually managed. Notion sync is for preview/drafting only.

### Notion Integration Architecture

**Sync Flow**:

```
Notion Database → sync-notion.ts → notion-converter.ts → notion-posts.ts
                                 ↓
                            Download images to /public/images/notion/
```

**Key Files**:

- `scripts/sync-notion.ts`: Main sync script, validates env vars
- `src/lib/notion-converter.ts`: Converts Notion pages to Post objects
- `src/lib/notion-to-md.ts`: Transforms Notion blocks to markdown
- `src/data/notion-posts.ts`: Auto-generated output file

**Notion Database Properties** (current setup):

- `Title` (title): Post title
- `Category` (select): originals, startup, columns, problems, reviews, admissions
- `Excerpt(요약)` (rich_text): Post summary
- `Published` (checkbox): Must be checked for sync
- `Created` (created_time): Publication date
- `URL` (rich_text, optional): Custom slug (auto-generated from title if empty)

**Image Handling**:

- Images downloaded to `/public/images/notion/{postId}/`
- 30-second timeout, 10MB size limit
- URL validation for security

### Blog Component System

**Layout Components**:

- `BlogLayout.tsx`: Main layout wrapper with sidebar
- `Header.tsx`: Navigation with theme toggle
- `Sidebar.tsx`: Recent posts, search, tags
- `Footer.tsx`: Site footer

**Content Components**:

- `PostCard.tsx`: Post preview card for list views
- `FeaturedPost.tsx`: Hero-style featured post
- `BlogImage.tsx`: Responsive image with lazy loading
- `YouTubeEmbed.tsx`: Embedded YouTube player

**Notion-Style Components** (in `src/components/notion/`):

- `Callout.tsx`: Info/warning/success/error callout boxes
- `CodeBlock.tsx`: Syntax-highlighted code with copy button
- `Quote.tsx`: Blockquotes with author attribution
- `Toggle.tsx`: Collapsible accordion sections

**Utility Components**:

- `TOC.tsx`: Table of contents generator
- `Pagination.tsx`: Page navigation
- `StructuredData.tsx`: JSON-LD for SEO
- `ThemeDebugger.tsx`: Theme state debugging tool

### Markdown Rendering System

**Centralized Renderer** (`src/lib/markdown-renderer.ts`):

- Single source of truth for markdown-to-HTML conversion
- Used by all category pages to ensure consistency
- Regex-based transformations for images, links, headings, lists, etc.
- Dark mode support baked into all transformed HTML

**Supported Syntax**:

- Headings: `# H1`, `## H2`, `### H3`, `#### H4`
- Bold: `**text**`, Italic: `*text*`
- Links: `[text](url)`
- Images: `![alt](src)`
- Lists: `- item`, `1. item`
- Code blocks: Triple backticks
- Blockquotes: `> quote`
- HTML passthrough: `<div>`, `<callout>`, etc.

**Important**: Uses `dangerouslySetInnerHTML` but sanitizes content. For complex content, consider migrating to react-markdown (see IMPROVEMENT_PLAN.md).

### Category Structure

**Categories and URLs**:

```
originals  → /originals/[id]  → SN Originals (classic literature)
startup    → /startup/[id]    → AI Startup
columns    → /columns/[id]    → Columns
problems   → /problems/[id]   → Problem Solving
reviews    → /reviews/[id]    → Reviews
admissions → /admissions/[id] → Admissions Info
```

**Category Pages**: Currently separate files per category, but IMPROVEMENT_PLAN.md recommends consolidating to `/[category]/[id]/page.tsx` for DRY.

## Important Workflows

### Adding a New Post (Manual Method - Primary)

1. **Edit `src/data/posts.ts`**:

```typescript
{
  id: 'unique-post-id',
  title: 'Post Title',
  excerpt: 'Post summary for SEO and social sharing',
  content: `# Markdown content here...`,
  category: 'originals', // or startup, columns, etc.
  tags: ['tag1', 'tag2'],
  author: 'SN Academy',
  date: '2025-10-07', // YYYY-MM-DD
  readTime: '5', // minutes as string
  featured: false, // true for hero display
  published: true, // false to hide
  url: '/originals/unique-post-id',
  thumbnail: 'https://example.com/image.jpg', // optional
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID', // optional
}
```

2. **Test locally**: `npm run dev`

3. **Commit and push**: Changes trigger GitHub Actions for deployment

**Auto-handled**:

- Homepage latest posts
- Sidebar recent posts
- Tag system updates
- Search indexing
- Sitemap generation
- SEO metadata
- Social sharing metadata

### Adding a Post via Notion (Preview/Draft Only)

1. **Create entry in Notion database**:
   - Title: Post title
   - Category: Select from dropdown
   - Excerpt: Brief summary
   - Published: Check the box
   - Content: Write in page body

2. **Sync to local**:

```bash
cd ~/code/snblog
npm run sync:notion
```

3. **Preview in dev mode**:

```bash
npm run dev  # Notion posts only show in development
```

4. **Manually add to posts.ts**: Once satisfied, copy content to `posts.ts` for production use.

**Never** use Notion posts directly in production. They are drafts only.

### Notion Sync Process

**Setup** (one-time):

1. Create Notion Integration at notion.so/my-integrations
2. Connect integration to your blog database
3. Add to `.env.local`:

```env
NOTION_TOKEN=secret_xxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Sync**:

```bash
npm run sync:notion
```

**What happens**:

1. Fetches all published posts from Notion
2. Downloads images to `/public/images/notion/`
3. Converts blocks to markdown
4. Calculates readTime (500 Korean chars/min, 200 English words/min)
5. Generates `src/data/notion-posts.ts`

**Callout Conversion**: Notion callouts are converted to HTML divs with Tailwind classes for proper rendering.

### Deployment Process

**Automatic Deployment** (via GitHub Actions):

1. Push to `main` branch
2. GitHub Actions triggers
3. Vercel auto-deploys from Git
4. Jandi notification sent

**Manual Deployment**:

```bash
npm run deploy  # Interactive menu
# or
npm run deploy:vercel  # Direct to Vercel
```

**Environment Variables** (set in Vercel dashboard):

- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://blog.snacademy.co.kr`

**Deployment Targets**:

- **Vercel** (primary): Automatic via Git integration
- **Docker**: `npm run docker:compose` for self-hosted
- **GitHub Actions**: `.github/workflows/deploy.yml`

### Jandi Notification System

**Triggers**:

- `src/data/posts.ts` modified
- New page in `/app/originals/**/page.tsx`
- New page in `/app/startup/**/page.tsx`
- New page in `/app/columns/**/page.tsx`
- New page in `/app/problems/**/page.tsx`
- New page in `/app/reviews/**/page.tsx`
- New page in `/app/admissions/**/page.tsx`

**Workflow**: `.github/workflows/smart-blog-notification.yml`

**Features**:

- Auto-detects post additions/changes
- Sends rich message to Jandi (Korean Slack alternative)
- Includes commit info, author, links
- Category-based color coding

**Security**: Never commit `JANDI_WEBHOOK_URL` to code. Use GitHub Secrets.

**Test webhook**:

```bash
npm run test:jandi
```

## Design System

### Design Philosophy

1. **Minimalism**: Remove unnecessary elements, focus on content
2. **Consistency**: Same design language across entire site
3. **Readability**: Typography and whitespace optimized for reading
4. **Professionalism**: Educational institution-appropriate design

**Inspired by**: Stripe Blog, Notion, Medium

### Color Palette

**Primary Colors**:

- Navy `#0f2942`: Professionalism, trust
- Slate `#1e293b`: Body text
- Sage Green `#5f7a61`: Brand accent (SN legacy)

**Backgrounds**:

- Pure white `#ffffff`: Base
- Subtle gray `#f8fafc`: Section dividers
- Muted gray `#f1f5f9`: Cards, panels

**Semantic Colors** (minimal use):

- Success: `#10b981` (green)
- Info: `#3b82f6` (blue)
- Warning: `#f59e0b` (amber)
- Error: `#ef4444` (red)

### Typography

**Font Stack**: System fonts for performance

```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
```

**Scale** (1.25 ratio):

- H1: 36px (text-4xl)
- H2: 30px (text-3xl)
- H3: 24px (text-2xl)
- H4: 20px (text-xl)
- Body: 16px (text-base)

**Reading**: Max width 65ch (~800px) for optimal line length, line-height 1.75

### Spacing

8pt grid system (`--space-4: 1rem`, `--space-8: 2rem`, etc.)

**Section spacing**: Minimum 4rem (64px)
**Element spacing**: Default 1.5rem (24px)

### Component Patterns

**Callout Box**:

- Light background (50 shade)
- 4px left border for emphasis
- Right-rounded corners
- Dark text (900 shade)

**Card**:

- White background + thin border
- 12px rounded corners
- Hover shadow effect
- 24px padding

**Code Block**:

- Neutral gray background
- Monospace font at 14px
- Horizontal scroll support

## Environment Setup

### Required Environment Variables

**For Local Development** (`.env.local`):

```env
# Notion Integration (optional, only for sync)
NOTION_TOKEN=secret_xxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Jandi Webhook (optional, only for notifications)
JANDI_WEBHOOK_URL=https://wh.jandi.com/connect-api/webhook/...

# Development
NODE_ENV=development
```

**For Production** (Vercel dashboard):

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://blog.snacademy.co.kr
```

### Security Rules

1. **Never commit** `.env.local` or `.env` files
2. **Never hardcode** webhook URLs or tokens in code
3. **Always use** environment variables via `process.env`
4. **Rotate secrets** if accidentally exposed

## Known Issues & Important Notes

### Theme System (WHITEMODE_FIX.md)

**Issue**: Tailwind v4 requires explicit dark variant definition.

**Solution**: Added to `globals.css`:

```css
@variant dark (&:where(.dark, .dark *));
```

**Theme Config**:

- `defaultTheme="light"`
- `enableSystem={false}` (ignore OS preference)
- `storageKey="sn-blog-theme"` (localStorage key)

**Testing**: Use `ThemeDebugger.tsx` component (shows theme state in bottom-right corner)

### Notion Sync Limitations

**Current Limitations** (NOTION_IMPROVEMENTS.md):

- Images: 30s timeout, 10MB max
- ReadTime: Calculated (500 Korean chars/min, 200 English words/min)
- Callouts: Converted to HTML (not React components)
- No support for: Notion databases, synced blocks, advanced embeds

**Improvements Applied**:

- Image download with security validation
- Callout HTML rendering (not React components)
- Accurate Korean readTime calculation

### Architecture Issues (IMPROVEMENT_PLAN.md)

**Critical Issue**: Code duplication across category pages.

**Current State**:

- `/columns/[id]/page.tsx` (242 lines)
- `/startup/[id]/page.tsx` (242 lines) - 95% identical
- `/originals/[id]/page.tsx` (242 lines) - 95% identical

**Recommended Fix**: Consolidate to `/[category]/[id]/page.tsx` (see IMPROVEMENT_PLAN.md Phase 2)

**Risk**: Modifying one category page without updating others causes inconsistency.

### Post Management Safety (POST_MANAGEMENT.md)

**Critical Safety Rules**:

1. **Always backup** before bulk changes: `npm run backup:posts`
2. **Never run** Notion sync in production
3. **Test locally** before pushing: `npm run dev`
4. **Commit frequently** for Git history

**Emergency Recovery**:

```bash
# Option 1: Restore from backup
npm run restore:posts

# Option 2: Restore from Git
git log --oneline -10  # Find commit hash
git checkout HASH -- src/data/posts.ts
```

### Security Notes (SECURITY.md)

**Webhook Security**:

- Store in GitHub Secrets: `JANDI_WEBHOOK_URL`
- Never in code or README
- Rotate if exposed

**Notion Token**:

- Integration token, not personal token
- Read-only permissions sufficient
- Store in `.env.local` (gitignored)

### Category Name Inconsistency

**Issue**: `posts.ts` uses `category: 'SN Originals'` but URLs use `/originals/`.

**Current Workaround**: Manual handling in code.

**Future Fix**: Standardize to `category: 'originals'` and map display names in UI (see IMPROVEMENT_PLAN.md Phase 5).

### Markdown Rendering Limitations

**Current System**: Regex-based parsing in `markdown-renderer.ts`

**Limitations**:

- Order-dependent transformations
- Complex nesting not supported well
- Security risk with `dangerouslySetInnerHTML`

**Future Recommendation**: Migrate to `react-markdown` for stability and React component support (see IMPROVEMENT_PLAN.md Phase 3).

## Project Structure Overview

```
snblog/
├── src/
│   ├── app/                 # Next.js 15 App Router pages
│   │   ├── [category]/[id]/   # Dynamic category pages
│   │   ├── page.tsx           # Homepage
│   │   └── layout.tsx         # Root layout with ThemeProvider
│   ├── components/          # React components
│   │   ├── notion/            # Notion-style components
│   │   └── providers/         # Context providers
│   ├── data/
│   │   ├── posts.ts           # MANUAL posts (primary)
│   │   └── notion-posts.ts    # AUTO-GENERATED (dev only)
│   └── lib/
│       ├── notion-converter.ts  # Notion → Post conversion
│       ├── markdown-renderer.ts # Markdown → HTML
│       └── utils.ts             # Utility functions
├── scripts/
│   ├── sync-notion.ts       # Notion sync script
│   ├── backup-posts.js      # Backup utility
│   └── deploy.sh            # Deployment script
├── public/
│   └── images/
│       └── notion/          # Auto-downloaded Notion images
├── .github/workflows/       # GitHub Actions
├── backups/                 # posts.ts backups
└── [config files]

```

## Tips for Claude

1. **Content Changes**: Always edit `src/data/posts.ts` directly. Never suggest automatic Notion sync in production.

2. **Consistent Rendering**: Use `renderMarkdown()` from `src/lib/markdown-renderer.ts` for all markdown conversions. Don't duplicate rendering logic.

3. **Dark Mode**: All styles must include `dark:` variants. Test with `ThemeDebugger.tsx`.

4. **Before Major Changes**: Suggest `npm run backup:posts` first.

5. **Category Pages**: Be aware of duplication issue. If modifying one, remind to update all three (or implement consolidation plan).

6. **New Components**: Follow design guide (DESIGN_GUIDE.md) for colors, spacing, typography.

7. **Images**: Local images in `/public/images/`, external images via URL. Always include alt text.

8. **Deployment**: Production uses Vercel. Docker is for self-hosted alternative.

9. **Testing**: `npm run dev` for local, `npm run build` to verify production build.

10. **Documentation**: Keep CLAUDE.md updated when architecture changes.

---

**Last Updated**: 2025-10-07
**Repository**: C:/code/snblog
**Framework**: Next.js 15.5.4 with App Router
**Styling**: Tailwind CSS v4
**Node**: 22.x
