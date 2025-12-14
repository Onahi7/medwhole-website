# Sanity CMS Setup Guide

## Hybrid Architecture

This project uses a **hybrid approach**:
- **Sanity CMS**: Content management (news, events, gallery, team, programs)
- **PostgreSQL**: User authentication and admin data (NextAuth sessions, users)

## Setup Steps

### 1. Create Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create an account
2. Create a new project
3. Note your **Project ID**
4. Create a dataset named `production`

### 2. Get API Token

1. Go to your Sanity project dashboard
2. Navigate to **API** → **Tokens**
3. Click **Add API token**
4. Name it "Production Token"
5. Set permissions to **Editor**
6. Copy the token (you won't see it again!)

### 3. Configure Environment Variables

Update your `.env` file with Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your-project-id-here"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-api-token-here"
```

### 4. Deploy Sanity Studio

The Sanity Studio is accessible at `/studio` in your Next.js app.

1. Start your dev server: `pnpm dev`
2. Navigate to `http://localhost:3000/studio`
3. Login with your Sanity account
4. Start adding content!

### 5. CORS Configuration

Add your domains to Sanity CORS origins:

1. Go to **API** → **CORS origins** in Sanity dashboard
2. Add:
   - `http://localhost:3000` (for development)
   - Your production domain (e.g., `https://medwhole.org`)

## Content Types

### Events
- Title, description, rich content
- Category: Academy, Health, Consulting, General
- Date, location
- Featured flag
- Active status

### News Articles
- Title, slug, excerpt, rich content
- Featured image
- Category: Announcement, Research, Impact Story, etc.
- Author, publish date
- Featured flag

### Gallery
- Title, image, description
- Category: Academy, Health, Consulting, Events, Community
- Display order
- Active status

### Team Members
- Name, role, bio, photo
- Category: Leadership, Board, Staff, Advisors
- Email, LinkedIn
- Display order

### Programs
- Title, slug, description, rich content
- Featured image
- Category: Health, Education, Nutrition, etc.
- Objectives list
- Impact metrics

## API Routes

### Sanity CMS Routes (New)
- `/api/sanity/events` - Fetch events from Sanity
- `/api/sanity/news` - Fetch news articles from Sanity
- `/api/sanity/gallery` - Fetch gallery images from Sanity
- `/api/sanity/team` - Fetch team members from Sanity
- `/api/sanity/programs` - Fetch programs from Sanity

### PostgreSQL Routes (Existing - for admin)
- `/api/events` - Admin-managed events (keep for backward compatibility)
- `/api/gallery` - Admin-managed gallery (keep for backward compatibility)
- `/api/admin/*` - All admin routes still use PostgreSQL

## Migration Strategy

### Option A: Gradual Migration (Recommended)
1. Start adding new content to Sanity
2. Keep existing PostgreSQL admin for jobs, partners, statistics
3. Slowly migrate existing content from PostgreSQL to Sanity
4. Update frontend to fetch from `/api/sanity/*` instead of `/api/*`

### Option B: Dual System
1. Use Sanity for public-facing content
2. Keep PostgreSQL admin for internal workflows
3. Maintain both systems side-by-side

### Option C: Full Migration
1. Export all content from PostgreSQL
2. Import into Sanity using migration scripts
3. Remove old PostgreSQL content tables
4. Keep PostgreSQL only for authentication

## Updating Frontend

To switch pages to use Sanity:

```typescript
// Old (PostgreSQL)
const response = await fetch("/api/events?category=Academy&limit=3")

// New (Sanity)
const response = await fetch("/api/sanity/events?category=Academy&limit=3")
```

Or use direct queries:

```typescript
import { getEvents } from "@/lib/sanity-queries"

const events = await getEvents("Academy", 3)
```

## Rich Text Rendering

For rendering Sanity's rich text (Portable Text):

```bash
pnpm add @portabletext/react
```

```typescript
import { PortableText } from '@portabletext/react'

<PortableText value={content} />
```

## Image Optimization

Sanity handles images differently:

```typescript
import { urlFor } from "@/lib/sanity"

<img src={urlFor(image).width(800).height(600).url()} alt={alt} />
```

## Production Deployment

1. Add production domain to Sanity CORS settings
2. Update `NEXT_PUBLIC_SANITY_PROJECT_ID` in production environment
3. Deploy Sanity Studio alongside your Next.js app
4. Studio will be accessible at `yourdomain.com/studio`

## Benefits of This Setup

✅ **Rich Content Editing**: Visual editor for content creators
✅ **Image Management**: Built-in image CDN and optimization
✅ **Version Control**: Content versioning and draft/publish workflow
✅ **Real-time Collaboration**: Multiple editors can work simultaneously
✅ **Structured Content**: Type-safe content with validation
✅ **Keep Auth Separate**: PostgreSQL handles sensitive user data
✅ **Flexible**: Can keep PostgreSQL admin for internal workflows

## Next Steps

1. Set up Sanity account and get credentials
2. Update `.env` with Sanity credentials
3. Run `pnpm dev` and visit `/studio`
4. Start adding content in Sanity Studio
5. Test Sanity API routes
6. Gradually migrate frontend pages to use Sanity
