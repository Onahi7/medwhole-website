# 🚀 Quick Start Guide

Get your MedWhole admin panel running in 5 minutes!

## Step 1: Install Dependencies (2 min)

```bash
pnpm install
```

## Step 2: Set Up Neon Database (1 min)

1. Visit https://console.neon.tech/
2. Create account (free)
3. Create new project: "medwhole-website"
4. Copy connection string

## Step 3: Set Up ImageKit (1 min)

1. Visit https://imagekit.io/
2. Create account (free)
3. Go to Developer > API Keys
4. Copy Public Key, Private Key, and URL Endpoint

## Step 4: Configure Environment (1 min)

```bash
cp .env.example .env
```

**Generate your JWT secret:**
```bash
pnpm generate:secrets
```

Copy the output and edit `.env` with your credentials:

```env
# Paste Neon connection string
DATABASE_URL="postgresql://..."

# Generate this: openssl rand -base64 32
NEXTAUTH_SECRET="paste-generated-secret"

# Paste ImageKit credentials
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="your_key"
IMAGEKIT_PRIVATE_KEY="your_private_key"
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="https://ik.imagekit.io/your_id"

# Leave these as default for development
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
ADMIN_EMAIL="admin@medwhole.org"
ADMIN_PASSWORD="admin123"
```

## Step 5: Initialize Database & Admin (30 sec)

```bash
# Create database tables
pnpm db:push

# Create admin user
pnpm admin:create
```

You should see: `✅ Admin user created successfully!`

## Step 6: Start Development Server (10 sec)

```bash
pnpm dev
```

## 🎉 You're Ready!

Open in browser:
- **Website**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login

### Login Credentials:
- **Email**: admin@medwhole.org
- **Password**: admin123

⚠️ **Change password after first login!**

## What's Next?

1. Login to admin panel
2. Add your first team member
3. Create a program
4. Add statistics
5. Upload partner logos

## Need Help?

See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for detailed documentation.

## Troubleshooting

### "Can't connect to database"
- Check DATABASE_URL is correct
- Ensure Neon project is active
- Connection string must include `?sslmode=require`

### "Unauthorized" in admin
- Clear browser cookies
- Try incognito/private mode
- Verify NEXTAUTH_SECRET is set

### "Image upload fails"
- Check all ImageKit variables are set
- Verify NEXT_PUBLIC_APP_URL is correct
- Make sure ImageKit auth endpoint is accessible

### "Admin user already exists"
- This is normal if you ran `pnpm admin:create` twice
- Use existing credentials to login
- Or update password in database

## Useful Commands

```bash
# View database in browser UI
pnpm db:studio

# Reset database (caution!)
pnpm db:push --force

# Build for production
pnpm build
```

Happy building! 🎊
