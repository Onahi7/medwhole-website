# Sanity CMS Content Seeding

## 🎉 Successfully Seeded Content

Your Sanity CMS has been populated with content from `1-MedWHOLE Alliance Website Content.txt`. Here's what was added:

### 📰 News Articles (5 total)

1. **MedWHOLE Launches New Maternal Health Initiative Across 5 African Countries**
   - Category: Program Launch
   - Published: March 15, 2024
   - Featured: Yes
   - Tags: Maternal Health, Program Launch, Partnership, Health Systems

2. **500+ Health Workers Complete Leadership Training Program**
   - Category: Academy
   - Published: March 10, 2024
   - Featured: Yes
   - Tags: Leadership, Training, Graduation, Capacity Building

3. **New Research Published on Community Health Worker Impact**
   - Category: Research
   - Published: March 5, 2024
   - Tags: Research, Community Health, Evidence, Publication

4. **Partnership Announcement: Collaboration with WHO Africa**
   - Category: Partnership
   - Published: February 28, 2024
   - Featured: Yes
   - Tags: Partnership, WHO, Collaboration, Health Systems

5. **Mobile Health Clinics Reach 50,000 Patients Milestone**
   - Category: Health
   - Published: February 20, 2024
   - Tags: Health, Mobile Clinics, Access to Care, Rural Health

### 📅 Events (5 total)

#### Academy Events
1. **Public Health Leadership Summit 2025**
   - Date: October 15-17, 2025
   - Location: Abuja, Nigeria
   - Category: Summit
   - Capacity: 500 participants
   - Registration: Open

2. **Epidemiology Masterclass Series**
   - Date: September 22-25, 2025
   - Location: Kampala, Uganda
   - Category: Masterclass
   - Capacity: 100 participants
   - Registration: Open

3. **Research Methods & Grant Writing Workshop**
   - Date: August 10-12, 2025
   - Location: Accra, Ghana
   - Category: Workshop
   - Capacity: 75 participants
   - Registration: Open

#### Health Events
4. **World Heart Day Campaign**
   - Date: September 29, 2025
   - Location: Community Centers, Lagos
   - Category: Community Outreach
   - Featured: Yes

5. **Maternal Health Outreach Program**
   - Date: October 1-31, 2025
   - Location: Rural Communities, Gulu District
   - Category: Mobile Clinic

### 🎓 Programs (5 total)

#### Academy Programs
1. **Back-to-School Scholarship Program**
   - Type: Academy
   - Featured: Yes
   - Focus: Educational support for vulnerable children

2. **Discipleship & Character Development**
   - Type: Academy
   - Featured: Yes
   - Focus: Faith-based character building

#### Health Programs
3. **Gosa Primary Health Centre Optimization**
   - Type: Health
   - Featured: Yes
   - Focus: PHC improvement and community engagement
   - Impact Metrics: 40% service utilization increase, 85% satisfaction

#### Consulting Programs
4. **Facility and Systems Assessment**
   - Type: Consulting
   - Featured: Yes
   - Focus: Hospital and facility audits

5. **Monitoring, Evaluation, and Learning (MEL)**
   - Type: Consulting
   - Featured: Yes
   - Focus: Data systems and performance tracking

### 👥 Team Members (2 total)

1. **Prof. Chima Onoka**
   - Role: Founder & CEO
   - Department: Executive
   - Featured: Yes
   - Order: 1

2. **Dr. Ferdinand Ogbaji**
   - Role: Director of Programmes
   - Department: Programs
   - Featured: Yes
   - Order: 2

### 🖼️ Gallery Images (5 total)

1. **Summer School Program** (Academy)
2. **Scholarship Awards Ceremony** (Academy)
3. **Gosa PHC Optimization Project** (Health)
4. **Emergency Preparedness Training** (Health)
5. **WHO Partnership Signing** (Events)

## 📝 Managing Your Content

### Access Sanity Studio

You can manage all this content visually through Sanity Studio:

1. **Local Studio**: Visit `http://localhost:3000/studio` (after fixing SSR issue)
2. **Sanity.io Dashboard**: Visit `https://medwhole.sanity.studio/desk`

### Add Images to Content

The seed script created the content structure, but **images need to be added manually**:

1. Go to your Sanity Studio
2. Navigate to each content type (News, Events, Programs, Team, Gallery)
3. Click on an item to edit
4. Upload images using the image upload field
5. Save your changes

### Edit Content

All content fields are editable in Sanity Studio:

- **News**: Edit articles, add images, update content blocks
- **Events**: Update dates, add agendas, modify descriptions
- **Programs**: Edit objectives, components, outcomes
- **Team**: Add photos, update bios, add social links
- **Gallery**: Upload images, update descriptions

## 🔄 Re-seeding the Database

If you need to re-seed (this will create duplicates unless you delete existing content first):

```bash
pnpm sanity:seed
```

### Clearing Content Before Re-seeding

To start fresh, you can delete all content from Sanity Studio or use GROQ queries in the Vision tool:

```groq
// Delete all news articles
*[_type == 'news']

// Delete all events  
*[_type == 'event']

// Delete all programs
*[_type == 'program']

// Delete all team members
*[_type == 'team']

// Delete all gallery images
*[_type == 'gallery']
```

## 🚀 Next Steps

1. **Fix Studio SSR Issue**: 
   - Update `app/studio/[[...index]]/page.tsx` to prevent server-side rendering

2. **Add Images**:
   - Upload actual images for all content items in Sanity Studio

3. **Update Frontend**:
   - Modify pages to fetch from `/api/sanity/*` endpoints instead of static content

4. **CORS Configuration**:
   - Add your domain to Sanity's CORS settings in the dashboard

5. **Customize Content**:
   - Edit seeded content to match your actual data
   - Add more news articles, events, programs as needed

## 📚 Additional Content to Seed

The source file contains additional content that can be seeded:

- Additional programs (Skill Development, Summer Lessons, Health & Nutrition, etc.)
- Job postings (Senior Public Health Advisor, Training Coordinator, etc.)
- More gallery images
- Additional team members
- FAQ content
- Testimonials

To add more content, edit `scripts/seed-sanity.ts` and run `pnpm sanity:seed` again.

## 🛠️ Troubleshooting

### Authentication Errors
- Verify `SANITY_API_TOKEN` in `.env` is correct
- Check token has write permissions in Sanity dashboard

### Content Not Appearing
- Clear Next.js cache: `pnpm dev` (restart dev server)
- Check Sanity Studio to verify content was created
- Verify API routes are using correct dataset

### Duplicate Content
- Content is created each time you run seed script
- Delete duplicates manually or clear all content before re-seeding

## 📧 Support

For issues with seeding or content management, contact your development team or refer to:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
