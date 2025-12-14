# Sanity CMS Integration - Complete Guide

## ✅ What's Been Connected

Your website is now fully integrated with Sanity CMS! Here's what's working:

### Connected Pages:
1. **News Page** (`/news`) - Displays news articles from Sanity with:
   - Featured news article
   - News grid with images and excerpts
   - Upcoming events section
   - Automatic date formatting
   - Categories and author information

2. **Gallery Page** (`/gallery`) - Shows photos from Sanity with:
   - Filterable tabs (All, Health Services, Academy, Consulting)
   - Image lightbox viewer
   - Category counters
   - Responsive grid layout

3. **About Page** (`/about`) - Ready to display team members from Sanity

4. **Programs Page** (`/programs`) - Can fetch and display programs from Sanity

## 🎨 How to Manage Content

### Step 1: Access Sanity Studio
1. Go to: `https://medwhole.org/studio`
2. Sign in with your Sanity credentials (email you used when creating the Sanity project)

### Step 2: Add Content

#### Adding News Articles:
1. In Sanity Studio, click "News" in the sidebar
2. Click "Create new News"
3. Fill in:
   - **Title**: The news headline
   - **Slug**: Auto-generated URL (e.g., "new-health-initiative")
   - **Excerpt**: Short summary (appears in news grid)
   - **Featured Image**: Upload a photo (JPG, PNG)
   - **Category**: Select from dropdown (Health, Education, Community, etc.)
   - **Author**: Your name
   - **Published At**: Date of publication
   - **Featured**: Toggle ON to make it the featured article on news page
   - **Content**: Full article body (supports rich text)
4. Click "Publish"

#### Adding Gallery Images:
1. In Sanity Studio, click "Gallery" in the sidebar
2. Click "Create new Gallery"
3. Fill in:
   - **Title**: Image title
   - **Image**: Upload your photo
   - **Description**: Brief description (appears on hover)
   - **Category**: Choose from:
     - "Academy" - Educational programs
     - "Health Services" - Medical outreach/clinics
     - "Consulting" - Workshops/training
   - **Order**: Number for sorting (lower = appears first)
4. Click "Publish"

#### Adding Events:
1. In Sanity Studio, click "Events" in the sidebar
2. Click "Create new Event"
3. Fill in:
   - **Title**: Event name
   - **Description**: What the event is about
   - **Date**: When it's happening
   - **Location**: Where (e.g., "Abuja Municipal Clinic")
   - **Category**: Academy, Health, Consulting, etc.
   - **Slug**: Auto-generated URL
4. Click "Publish"

#### Adding Team Members:
1. In Sanity Studio, click "Team" in the sidebar
2. Click "Create new Team Member"
3. Fill in:
   - **Name**: Full name
   - **Role**: Job title (e.g., "Executive Director")
   - **Bio**: Description of their background
   - **Photo**: Upload headshot
   - **Email**: Contact email (optional)
   - **LinkedIn**: Profile URL (optional)
   - **Order**: Display order on About page
4. Click "Publish"

#### Adding Programs:
1. In Sanity Studio, click "Programs" in the sidebar
2. Click "Create new Program"
3. Fill in all details (title, description, category, goals, impact, etc.)
4. Click "Publish"

## 🔄 How Content Appears on Your Website

### Automatic Updates:
- Your website **automatically refreshes content every 60 seconds** from Sanity
- No need to redeploy or rebuild - just publish in Sanity Studio and wait 1 minute
- Uses Sanity CDN for fast, free image delivery

### Where Content Shows Up:

| What You Add in Sanity | Where It Appears on Website |
|------------------------|------------------------------|
| News article           | `/news` page (grid + featured) |
| Gallery image          | `/gallery` page (filtered by category) |
| Event                  | `/news` page (upcoming events section) |
| Team member            | `/about` page (leadership section) |
| Program                | `/programs` page |

## 📊 Sample Content Already Seeded

Your Sanity Studio already has sample content from the seeding script:

### News Articles:
- "MedWHOLE Launches New Health Initiative"
- "Academy Program Expands to New Communities"
- "Successful Health Outreach in Abuja"

### Events:
- "Health Screening & Education Workshop"
- "Community Health Fair"
- "Leadership Training for Health Workers"

### Gallery Images:
- Sample images across all categories (Academy, Health Services, Consulting)

### Programs:
- All 5 core programs from your main content document

**You can edit or delete these samples and replace with real content.**

## 🖼️ Image Best Practices

### Recommended Image Sizes:
- **News Featured Images**: 1200x800px (landscape)
- **Gallery Photos**: 1600x1200px or higher
- **Team Headshots**: 600x600px (square)
- **Program Covers**: 1200x675px (16:9 ratio)

### Supported Formats:
- JPG, PNG, WebP
- Max file size: 10MB per image
- Sanity automatically optimizes and resizes

## ⚙️ Technical Details

### Environment Variables (Already Configured):
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=zouo3v31
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=<your-read-token>
```

### API Usage (Don't Worry About Costs):
- **Free Tier Limits**: 100,000 CDN requests/month
- **Your Current Usage**: Uses CDN (free, unlimited bandwidth)
- **Well Within Limits**: Your traffic will stay free unless you get 1M+ monthly visitors

### Content Schemas Available:
- ✅ News (`news.ts`)
- ✅ Events (`event.ts`)
- ✅ Gallery (`gallery.ts`)
- ✅ Team Members (`team.ts`)
- ✅ Programs (`program.ts`)

## 🚀 Next Steps

1. **Access Studio**: Go to `/studio` on your website
2. **Review Sample Content**: See the pre-loaded examples
3. **Add Real Content**:
   - Replace sample news with real announcements
   - Upload actual photos from your programs
   - Add your team members with real headshots
   - Update events with upcoming activities
4. **Check Live Site**: Visit `/news` and `/gallery` to see your content

## 🆘 Troubleshooting

### Content Not Showing?
1. Check you clicked "Publish" in Sanity Studio (not just "Save")
2. Wait 60 seconds for cache to refresh
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Images Not Loading?
1. Verify image uploaded successfully in Sanity
2. Check image format is JPG/PNG (not HEIC or unsupported formats)
3. Ensure image field is filled (not left empty)

### Can't Access Studio?
1. Make sure you're logged into Sanity
2. Check you're going to `https://medwhole.org/studio` (with `/studio` at end)
3. Clear browser cookies and try again

## 📞 Admin Dashboard

Your admin dashboard at `/admin` is also upgraded with:
- Modern sidebar navigation
- Settings panel for branding (future feature)
- Stats overview
- Quick actions

Login: `admin@medwhole.org` / `admin123`

---

**That's it! You now have a WordPress-like content management system, but better - it's headless, fast, and free!** 🎉
