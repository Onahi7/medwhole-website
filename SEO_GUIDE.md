# SEO Implementation Guide

This document outlines the SEO setup and best practices for the MedWHOLE Alliance website.

## 🎯 SEO Features Implemented

### 1. **Metadata & Tags**
- ✅ Dynamic page titles with site branding
- ✅ Comprehensive meta descriptions
- ✅ Keywords optimization
- ✅ Canonical URLs
- ✅ Language alternates (en-US, en-NG)
- ✅ Author and publisher information
- ✅ Robots meta tags

### 2. **Open Graph (Facebook, LinkedIn)**
- ✅ OG Title, Description, Image
- ✅ Site name and URL
- ✅ Content type (website, article, profile)
- ✅ Article-specific tags (publish/modified dates, authors)
- ✅ High-quality images (1200x630px)

### 3. **Twitter Cards**
- ✅ Summary large image cards
- ✅ Twitter handle integration
- ✅ Optimized images (1200x600px)

### 4. **Favicons & Icons**
- ✅ Multi-resolution favicon.ico
- ✅ Apple Touch Icons (180x180, 152x152, 167x167, 120x120)
- ✅ Android Chrome icons (192x192, 512x512)
- ✅ Microsoft Tile icons (150x150, 310x310)
- ✅ Web App Manifest

### 5. **Structured Data (JSON-LD)**
- ✅ Organization schema
- ✅ Website schema with search action
- ✅ WebPage schema
- ✅ NGO schema with mission/vision
- ✅ Breadcrumb schema (reusable)
- ✅ Article schema (for news/blog posts)
- ✅ Event schema (for events)

### 6. **Technical SEO**
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Mobile-friendly viewport
- ✅ Theme color specification
- ✅ Semantic HTML structure
- ✅ ARIA labels for accessibility

## 📁 File Structure

```
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── sitemap.ts              # Dynamic sitemap generator
│   └── [pages]/page.tsx        # Page-specific SEO using generateSEO()
├── components/
│   └── structured-data.tsx     # JSON-LD schema components
├── lib/
│   └── seo.ts                  # SEO utility functions
├── public/
│   ├── favicon.ico             # Multi-resolution favicon
│   ├── favicon.png             # 32x32 PNG favicon
│   ├── apple-touch-icon*.png   # iOS icons
│   ├── android-chrome-*.png    # Android icons
│   ├── mstile-*.png           # Microsoft icons
│   ├── og-image.png           # Open Graph image
│   ├── twitter-card.png       # Twitter card image
│   ├── logo*.png              # Logo variations
│   ├── robots.txt             # Search engine crawler rules
│   ├── site.webmanifest       # PWA manifest
│   └── browserconfig.xml      # Microsoft browser config
└── scripts/
    └── generate-favicons.ps1  # ImageMagick favicon generator
```

## 🚀 Quick Start

### Step 1: Generate Favicons

First, ensure you have ImageMagick installed, then run:

```powershell
# Windows PowerShell
.\scripts\generate-favicons.ps1

# Or manually:
cd scripts
powershell -ExecutionPolicy Bypass -File .\generate-favicons.ps1
```

This will create all favicon sizes from your logo.

### Step 2: Configure Environment Variables

Update your `.env.local` file:

```bash
# Required for SEO
NEXT_PUBLIC_SITE_URL=https://medwhole.org

# Optional but recommended
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-code
```

### Step 3: Verify SEO Setup

1. **Local Testing:**
   ```bash
   pnpm dev
   ```
   Visit: http://localhost:3000

2. **Check Meta Tags:**
   - Right-click → View Page Source
   - Look for `<meta>` tags in `<head>`

3. **Test Structured Data:**
   - Visit: https://search.google.com/test/rich-results
   - Enter your URL

4. **Test Open Graph:**
   - Visit: https://www.opengraph.xyz/
   - Enter your URL

5. **Check Mobile Friendliness:**
   - Visit: https://search.google.com/test/mobile-friendly
   - Enter your URL

## 📄 Using SEO in Pages

### Basic Page SEO

```tsx
import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "About Us",
  description: "Learn about MedWHOLE Alliance mission and impact...",
  url: "/about",
})

export default function AboutPage() {
  return <div>About content</div>
}
```

### Article/News Page SEO

```tsx
import { Metadata } from "next"
import { generateSEO } from "@/lib/seo"
import { ArticleSchema } from "@/components/structured-data"

export const metadata: Metadata = generateSEO({
  title: "Health Initiative Launched in Lagos",
  description: "MedWHOLE launches new health program...",
  url: "/news/health-initiative-lagos",
  type: "article",
  publishedTime: "2025-01-15T10:00:00Z",
  author: "Dr. Jane Doe",
  tags: ["health", "Lagos", "initiative"],
  image: "/news/health-initiative-lagos.jpg",
})

export default function NewsArticlePage() {
  return (
    <>
      <ArticleSchema
        title="Health Initiative Launched in Lagos"
        description="MedWHOLE launches new health program..."
        image="/news/health-initiative-lagos.jpg"
        datePublished="2025-01-15T10:00:00Z"
        author="Dr. Jane Doe"
        url="/news/health-initiative-lagos"
      />
      <article>Article content</article>
    </>
  )
}
```

### With Breadcrumbs

```tsx
import { BreadcrumbSchema } from "@/components/structured-data"

export default function ProgramDetailPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://medwhole.org" },
          { name: "Programs", url: "https://medwhole.org/programs" },
          { name: "Health Training", url: "https://medwhole.org/programs/health-training" },
        ]}
      />
      <div>Program content</div>
    </>
  )
}
```

### Event Page

```tsx
import { EventSchema } from "@/components/structured-data"

export default function EventPage() {
  return (
    <>
      <EventSchema
        name="Annual Health Conference 2025"
        description="Join us for our annual health conference..."
        startDate="2025-06-15T09:00:00+01:00"
        endDate="2025-06-17T17:00:00+01:00"
        location="Lagos, Nigeria"
        url="/events/annual-conference-2025"
        image="/events/conference-2025.jpg"
      />
      <div>Event content</div>
    </>
  )
}
```

## 🔍 SEO Checklist

### Before Launch

- [ ] Generate all favicons and icons
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Verify all social media links are correct
- [ ] Test all meta tags on staging
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Test structured data with Rich Results Test
- [ ] Verify Open Graph images render correctly
- [ ] Check robots.txt allows crawling
- [ ] Ensure all images have alt text
- [ ] Verify mobile responsiveness
- [ ] Check page load speed (Lighthouse)
- [ ] Implement SSL certificate (HTTPS)
- [ ] Set up 301 redirects for old URLs (if applicable)

### Post-Launch

- [ ] Submit sitemap: `https://medwhole.org/sitemap.xml`
- [ ] Verify Google Search Console ownership
- [ ] Monitor search performance
- [ ] Check for crawl errors
- [ ] Update content regularly
- [ ] Build quality backlinks
- [ ] Monitor page speed
- [ ] Keep structured data updated
- [ ] Update Open Graph images as needed

## 🎨 Image Specifications

### Social Media Images
- **Open Graph (Facebook, LinkedIn):** 1200x630px, PNG or JPG
- **Twitter Card:** 1200x600px, PNG or JPG
- **Max file size:** 8MB
- **Recommended:** High-quality, branded images with clear text

### Favicons
- **favicon.ico:** 16x16, 32x32, 48x48 (multi-resolution)
- **favicon.png:** 32x32px
- **Apple Touch Icon:** 180x180px
- **Android Chrome:** 192x192px, 512x512px
- **Microsoft Tile:** 150x150px, 310x310px

### Content Images
- **Featured images:** 1200x800px minimum
- **Thumbnails:** 400x300px
- **Always include:** Descriptive alt text
- **Format:** WebP preferred, JPG fallback

## 🛠️ Maintenance

### Update Structured Data
When organizational information changes:
1. Edit `lib/seo.ts` (siteConfig)
2. Edit `components/structured-data.tsx` (OrganizationSchema)
3. Test with Google Rich Results Test
4. Deploy changes

### Add New Pages to Sitemap
1. Edit `app/sitemap.ts`
2. Add new route to the routes array
3. Set appropriate priority and changeFrequency
4. Rebuild and redeploy

### Update Social Links
1. Edit `components/site-footer.tsx`
2. Update social media URLs
3. Verify links work correctly

## 📊 Monitoring & Analytics

### Google Search Console
- URL: https://search.google.com/search-console
- Monitor: Impressions, clicks, CTR, position
- Check: Coverage, crawl errors, mobile usability
- Submit: Sitemap, request indexing for new pages

### Google Analytics (Optional)
Add to `.env.local`:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Performance Monitoring
- **Lighthouse:** Run audits regularly (SEO score 90+)
- **PageSpeed Insights:** Monitor Core Web Vitals
- **GTmetrix:** Check loading times
- **Mobile-Friendly Test:** Ensure mobile optimization

## 🔗 Useful Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 🎯 SEO Best Practices

1. **Content Quality:** Create valuable, original, well-researched content
2. **Keywords:** Use relevant keywords naturally in titles, headings, and body
3. **Mobile-First:** Ensure excellent mobile experience
4. **Page Speed:** Optimize images, minimize JavaScript, use CDN
5. **Internal Linking:** Link related pages together
6. **External Links:** Link to authoritative sources
7. **Regular Updates:** Keep content fresh and up-to-date
8. **User Experience:** Clear navigation, fast loading, accessible design
9. **Social Sharing:** Make it easy to share content
10. **Backlinks:** Build quality backlinks from relevant sites

## 📝 Notes

- All structured data is client-side rendered to avoid hydration issues
- Sitemap is automatically generated at build time
- Robots.txt allows all pages except /admin, /api, /studio, /maintenance
- Default theme color is teal (#0f766e) - update in multiple files if changing
- Images should be optimized before upload (use ImageKit for dynamic optimization)

---

**Last Updated:** December 18, 2025
**Maintained By:** MedWHOLE Development Team
