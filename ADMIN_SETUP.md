# MedWhole Admin Setup Guide

Complete guide to set up the admin panel with Neon PostgreSQL and ImageKit.

## Prerequisites

- Node.js 18+ installed
- pnpm package manager
- A Neon account (free tier available)
- An ImageKit account (free tier available)

## Step 1: Set Up Neon Database

1. **Create Neon Account**
   - Go to https://console.neon.tech/
   - Sign up for a free account
   - Create a new project named "medwhole-website"

2. **Get Connection String**
   - After creating the project, copy the connection string
   - It looks like: `postgresql://user:password@ep-xxxxx.region.aws.neon.tech/dbname?sslmode=require`

## Step 2: Set Up ImageKit

1. **Create ImageKit Account**
   - Go to https://imagekit.io/
   - Sign up for a free account

2. **Get API Credentials**
   - Go to Developer Options > API Keys
   - Copy:
     - Public Key
     - Private Key
     - URL Endpoint (e.g., `https://ik.imagekit.io/your_id`)

## Step 3: Configure Environment Variables

1. **Create .env file**
   ```bash
   cp .env.example .env
   ```

2. **Fill in your credentials in .env:**
   ```env
   # Database
   DATABASE_URL="your-neon-connection-string"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="generate-random-secret-here"

   # ImageKit
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="your_public_key"
   IMAGEKIT_PRIVATE_KEY="your_private_key"
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_id"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"

   # Admin Credentials
   ADMIN_EMAIL="admin@medwhole.org"
   ADMIN_PASSWORD="your-secure-password"
   ```

3. **Generate NEXTAUTH_SECRET:**
   ```bash
   openssl rand -base64 32
   ```

## Step 4: Push Database Schema

```bash
# Install dependencies (if not already done)
pnpm install

# Push schema to Neon database
pnpm db:push
```

This creates all tables in your Neon database:
- adminUsers
- teamMembers
- programs
- impactStories
- statistics
- events
- partners
- jobPostings

## Step 5: Create Admin User

```bash
pnpm admin:create
```

This creates an admin user with the email and password from your `.env` file.

## Step 6: Run Development Server

```bash
pnpm dev
```

Visit: http://localhost:3000/admin/login

## Admin Panel Features

### Authentication
- ✅ NextAuth v5 with credentials provider
- ✅ Protected admin routes with middleware
- ✅ Secure password hashing with bcryptjs

### Image Management
- ✅ ImageKit integration for all image uploads
- ✅ Organized folders: team, programs, partners, events
- ✅ Automatic image optimization and CDN delivery

### Content Management

1. **Team Members** (`/admin/team`)
   - Add/edit/delete team members
   - Upload profile photos
   - Categorize as Team, Board, or Advisory
   - Manage LinkedIn profiles and bios

2. **Programs** (`/admin/programs`)
   - Create program pages
   - Upload program images
   - Set objectives and outcomes
   - Mark programs as featured

3. **Statistics** (`/admin/statistics`)
   - Manage impact numbers
   - Set display order
   - Categorize statistics

4. **Partners** (`/admin/partners`)
   - Add partner logos
   - Manage partnership types
   - Set display order

5. **Jobs** (`/admin/jobs`)
   - Post job openings
   - Set application deadlines
   - Manage employment types

## Database Management

```bash
# View database in Drizzle Studio
pnpm db:studio

# Generate new migration
pnpm db:generate

# Apply migrations
pnpm db:migrate
```

## Production Deployment

### Environment Variables for Production

Update these in your hosting platform (Vercel, Netlify, etc.):

```env
DATABASE_URL="your-neon-production-url"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="different-secret-for-production"
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="your_key"
IMAGEKIT_PRIVATE_KEY="your_key"
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="your_endpoint"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

### Deployment Steps

1. Push to GitHub
2. Connect to Vercel/Netlify
3. Add environment variables
4. Deploy
5. Run `pnpm admin:create` in production to create admin user

## Troubleshooting

### "Unauthorized" when accessing admin pages
- Make sure you're logged in at `/admin/login`
- Check that NEXTAUTH_SECRET is set
- Clear cookies and try again

### Database connection errors
- Verify DATABASE_URL is correct
- Check Neon project is active
- Ensure SSL mode is enabled in connection string

### Image upload fails
- Verify ImageKit credentials
- Check NEXT_PUBLIC_APP_URL is correct
- Ensure ImageKit authentication endpoint is accessible

### Cannot create admin user
- Make sure database schema is pushed (`pnpm db:push`)
- Verify DATABASE_URL is accessible
- Check ADMIN_EMAIL and ADMIN_PASSWORD are set

## Security Recommendations

1. **Change default admin password** immediately after first login
2. **Use strong NEXTAUTH_SECRET** (32+ random characters)
3. **Never commit .env** to version control
4. **Use different credentials** for production vs development
5. **Enable 2FA** on Neon and ImageKit accounts

## Next Steps

- [ ] Create initial team members
- [ ] Add your programs
- [ ] Upload partner logos
- [ ] Add impact statistics
- [ ] Post job openings (if any)
- [ ] Connect frontend pages to database (coming soon)

## Support

For issues or questions:
- Check Neon docs: https://neon.tech/docs
- Check ImageKit docs: https://docs.imagekit.io
- Check NextAuth docs: https://authjs.dev
