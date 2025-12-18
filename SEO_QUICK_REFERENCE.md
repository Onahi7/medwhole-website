# SEO Quick Reference

## 📋 Common Tasks

### Add SEO to a New Page

```tsx
// 1. Import the SEO utility
import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"

// 2. Export metadata
export const metadata: Metadata = generateSEO({
  title: "Page Title",
  description: "Page description (155 chars max)",
  url: "/page-url",
})

// 3. Build your page
export default function YourPage() {
  return <div>Content</div>
}
```

### Add Breadcrumbs

```tsx
import { BreadcrumbSchema } from "@/components/structured-data"

<BreadcrumbSchema
  items={[
    { name: "Home", url: "https://medwhole.org" },
    { name: "Programs", url: "https://medwhole.org/programs" },
    { name: "Current Page", url: "https://medwhole.org/programs/page" },
  ]}
/>
```

### Add Article Schema (News/Blog)

```tsx
import { ArticleSchema } from "@/components/structured-data"

<ArticleSchema
  title="Article Title"
  description="Article summary"
  image="/path/to/image.jpg"
  datePublished="2025-01-15T10:00:00Z"
  author="Author Name"
  url="/news/article-slug"
/>
```

### Add Event Schema

```tsx
import { EventSchema } from "@/components/structured-data"

<EventSchema
  name="Event Name"
  description="Event description"
  startDate="2025-06-15T09:00:00+01:00"
  endDate="2025-06-17T17:00:00+01:00"
  location="Location Name"
  url="/events/event-slug"
/>
```

## 🔍 Testing Checklist

After adding SEO to a page:

1. **Build & Run:**
   ```bash
   pnpm build && pnpm start
   ```

2. **View Source:**
   - Right-click → View Page Source
   - Check for `<meta>` tags and JSON-LD

3. **Test Tools:**
   - Rich Results: https://search.google.com/test/rich-results
   - Mobile-Friendly: https://search.google.com/test/mobile-friendly
   - Open Graph: https://www.opengraph.xyz/

## 📊 SEO Best Practices

### Title Tags
- **Length:** 50-60 characters
- **Format:** "Page Title | MedWHOLE"
- **Include:** Primary keyword near the start

### Meta Descriptions
- **Length:** 150-160 characters
- **Include:** Call to action
- **Be:** Specific and compelling

### URLs
- **Use:** Lowercase, hyphens (not underscores)
- **Avoid:** Special characters, dates
- **Example:** `/programs/health-training` ✅

### Images
- **Alt Text:** Descriptive, include keywords
- **Size:** Optimize for web (< 200KB)
- **Format:** WebP or JPG
- **Dimensions:** Consistent aspect ratios

### Keywords
- **Density:** 1-2% of content
- **Placement:** Title, H1, first paragraph, URL
- **Variations:** Use synonyms and related terms

## 🚀 Deployment Checklist

Before going live:

- [ ] Set `NEXT_PUBLIC_SITE_URL=https://medwhole.org`
- [ ] Run `pnpm build` (no errors)
- [ ] Verify all pages load
- [ ] Check favicon appears in browser tab
- [ ] Test social media sharing
- [ ] Submit sitemap to Google Search Console

## 📈 Monitoring

### Weekly
- Check Google Search Console for errors
- Review search performance
- Monitor page speed

### Monthly
- Update outdated content
- Add new blog posts/news
- Check broken links
- Review analytics

## 🛠️ Maintenance Commands

```bash
# Regenerate favicons (after logo change)
.\scripts\generate-favicons.ps1

# Build for production
pnpm build

# Start production server
pnpm start

# Development server
pnpm dev
```

## 📞 Quick Links

- **Search Console:** https://search.google.com/search-console
- **Rich Results Test:** https://search.google.com/test/rich-results
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Schema Validator:** https://validator.schema.org/

---
**Last Updated:** December 18, 2025
