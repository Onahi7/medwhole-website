# 🔑 JWT Setup - Quick Reference

## 1️⃣ Generate Your Secret (30 seconds)

```bash
pnpm generate:secrets
```

You'll see output like this:
```
🔐 Generating secure secrets for your .env file

NEXTAUTH_SECRET (copy this to your .env):
Jiu89IaQmNcDJKSJbIt1buj7JkB88G1e4oKTzn8Ykno=
```

## 2️⃣ Add to .env File

Copy the secret and paste it in your `.env`:

```env
NEXTAUTH_SECRET="Jiu89IaQmNcDJKSJbIt1buj7JkB88G1e4oKTzn8Ykno="
```

## 3️⃣ That's It! ✅

NextAuth will automatically:
- Generate JWT tokens on login
- Sign tokens with your secret
- Store in HTTP-only cookies
- Validate on every request
- Handle expiration (30 days)

## What's Been Set Up

### ✅ JWT Configuration
- **Strategy**: JWT (not database sessions)
- **Duration**: 30 days
- **Storage**: HTTP-only secure cookies
- **Signing**: HMAC with your NEXTAUTH_SECRET

### ✅ Token Payload
```json
{
  "id": "user-uuid",
  "email": "admin@medwhole.org",
  "name": "Admin",
  "iat": 1765581108,
  "exp": 1765667508
}
```

### ✅ Files Created
- `lib/auth.ts` - NextAuth config with JWT callbacks
- `lib/get-session.ts` - Helper functions for auth
- `types/next-auth.d.ts` - TypeScript types
- `scripts/generate-secrets.ts` - Secret generator
- `JWT_GUIDE.md` - Complete documentation

## Using Auth in Your Code

### Server Components
```typescript
import { auth } from "@/lib/auth"

const session = await auth()
console.log(session.user.id)
```

### API Routes
```typescript
import { auth } from "@/lib/auth"

export async function POST(request: Request) {
  const session = await auth()
  if (!session) return new Response("Unauthorized", { status: 401 })
  // ... your code
}
```

### Helper Functions
```typescript
import { getSession } from "@/lib/get-session"

const session = await getSession() // throws if not authenticated
const userId = await getCurrentUserId()
const isAuth = await isAuthenticated()
```

## Quick Test

1. **Start dev server**
   ```bash
   pnpm dev
   ```

2. **Login**
   - Go to: http://localhost:3000/admin/login
   - Email: admin@medwhole.org
   - Password: admin123

3. **Check cookie**
   - Open DevTools (F12)
   - Application > Cookies
   - Look for: `authjs.session-token`

4. **Decode token** (optional)
   - Go to: https://jwt.io
   - Paste the cookie value
   - See your payload!

## Commands

```bash
# Generate new secret
pnpm generate:secrets

# Create admin user
pnpm admin:create

# Start dev
pnpm dev
```

## Security Checklist

- [x] JWT tokens signed with NEXTAUTH_SECRET
- [x] Tokens stored in HTTP-only cookies
- [x] 30-day auto expiration
- [x] Password hashing (bcrypt)
- [x] Route protection middleware
- [x] Session validation on API routes

## Need More Details?

See [JWT_GUIDE.md](./JWT_GUIDE.md) for:
- How JWT authentication works
- Advanced configuration
- Security best practices
- Troubleshooting guide
- Custom claims setup

---

**You're all set!** NextAuth handles all JWT token generation and validation automatically. Just add your secret to `.env` and you're ready to go! 🚀
