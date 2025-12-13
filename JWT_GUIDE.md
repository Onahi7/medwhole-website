# JWT Tokens & Authentication Guide

## 🔐 What Was Set Up

Your admin panel now has **complete JWT-based authentication** powered by NextAuth v5.

## Quick Setup: Generate Your Secrets

### Option 1: Use Our Script (Recommended)

```bash
pnpm generate:secrets
```

This will output:
- **NEXTAUTH_SECRET** - Copy this to your `.env` file
- **API_SECRET** - Optional, for custom API authentication

### Option 2: Manual Generation

**On Windows (PowerShell):**
```powershell
# Generate NEXTAUTH_SECRET
$bytes = New-Object byte[] 32
[Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
[Convert]::ToBase64String($bytes)
```

**On Mac/Linux:**
```bash
openssl rand -base64 32
```

## 📋 Add to Your .env File

Copy the generated secret and add it to your `.env`:

```env
NEXTAUTH_SECRET="Jiu89IaQmNcDJKSJbIt1buj7JkB88G1e4oKTzn8Ykno="
```

⚠️ **Important:** Use a different secret for production!

## How JWT Authentication Works

### 1. Login Flow

```mermaid
User → Login Page → Submit Credentials → NextAuth
NextAuth → Validate Password → Query Database
Database → Return User → NextAuth
NextAuth → Generate JWT Token → Set HTTP-Only Cookie
Cookie → Store in Browser → Redirect to Dashboard
```

### 2. JWT Token Structure

When you log in, NextAuth creates a JWT token with this payload:

```json
{
  "id": "user-uuid-here",
  "email": "admin@medwhole.org",
  "name": "Admin",
  "iat": 1765581108,      // Issued at (timestamp)
  "exp": 1765667508       // Expires (30 days later)
}
```

### 3. How It's Secured

- ✅ **Signed with NEXTAUTH_SECRET** - Prevents tampering
- ✅ **HTTP-Only Cookie** - Can't be accessed by JavaScript (XSS protection)
- ✅ **Secure flag in production** - Only sent over HTTPS
- ✅ **30-day expiration** - Automatic logout after inactivity
- ✅ **Server-side validation** - Every request checks the token

## Using Authentication in Your Code

### In Server Components

```typescript
import { auth } from "@/lib/auth"

export default async function AdminPage() {
  const session = await auth()
  
  if (!session) {
    redirect("/admin/login")
  }

  return <div>Welcome {session.user.name}</div>
}
```

### In API Routes

```typescript
import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const session = await auth()
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Your authenticated logic here
  const userId = session.user.id
}
```

### Using Helper Functions

I've created helper functions for you in `lib/get-session.ts`:

```typescript
import { getSession, getCurrentUserId, isAuthenticated } from "@/lib/get-session"

// Get session or throw error
const session = await getSession()

// Get session or redirect to login
const session = await getSessionOrRedirect()

// Just get the user ID
const userId = await getCurrentUserId()

// Check if authenticated
const authenticated = await isAuthenticated()
```

### In Client Components

```typescript
"use client"

import { useSession } from "next-auth/react"

export default function ClientComponent() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div>Not logged in</div>
  }

  return <div>Hello {session?.user.name}</div>
}
```

## Configuration Details

### Session Strategy

Your auth is configured with:

```typescript
session: {
  strategy: "jwt",           // Use JWT tokens (not database sessions)
  maxAge: 30 * 24 * 60 * 60, // 30 days
}
```

### JWT Callbacks

```typescript
callbacks: {
  async jwt({ token, user }) {
    // Called when token is created/updated
    // Adds user data to token
    if (user) {
      token.id = user.id
      token.email = user.email
      token.name = user.name
    }
    return token
  },
  
  async session({ session, token }) {
    // Called when session is accessed
    // Adds token data to session
    if (token && session.user) {
      session.user.id = token.id
      session.user.email = token.email
      session.user.name = token.name
    }
    return session
  },
}
```

### Route Protection

The middleware automatically protects admin routes:

```typescript
export { auth as middleware } from "@/lib/auth"

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
```

## TypeScript Support

I've added type definitions in `types/next-auth.d.ts`:

```typescript
interface Session {
  user: {
    id: string
    email: string
    name: string
  }
}
```

Now TypeScript knows your session structure!

## Testing Your Authentication

### 1. Start the server
```bash
pnpm dev
```

### 2. Go to login page
```
http://localhost:3000/admin/login
```

### 3. Login with your credentials
```
Email: admin@medwhole.org
Password: admin123 (or what you set in .env)
```

### 4. Check the cookie in DevTools

**Chrome/Edge:**
1. Open DevTools (F12)
2. Go to Application tab
3. Cookies → http://localhost:3000
4. You should see: `authjs.session-token`

### 5. Test protected routes

Try accessing:
- `/admin/dashboard` - Should work after login
- Logout, try again - Should redirect to login

## Advanced: Custom JWT Claims

Want to add custom data to your JWT? Update the callbacks:

```typescript
callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id
      token.email = user.email
      token.name = user.name
      token.role = "admin"           // Add custom claim
      token.permissions = ["write"]  // Add permissions
    }
    return token
  },
  
  async session({ session, token }) {
    session.user.id = token.id
    session.user.role = token.role as string
    session.user.permissions = token.permissions as string[]
    return session
  },
}
```

## Security Best Practices

### ✅ Do's

- ✅ **Use a strong NEXTAUTH_SECRET** (32+ random characters)
- ✅ **Different secrets** for dev/staging/production
- ✅ **Never commit** .env files to git
- ✅ **Rotate secrets** periodically (every 90 days)
- ✅ **Use HTTPS** in production (automatic with Vercel)
- ✅ **Validate user input** in all API routes
- ✅ **Check session** on every sensitive operation

### ❌ Don'ts

- ❌ **Don't store secrets** in code
- ❌ **Don't share** NEXTAUTH_SECRET publicly
- ❌ **Don't use weak passwords** for admin users
- ❌ **Don't trust** client-side session data
- ❌ **Don't store sensitive data** in JWT (it's not encrypted, just signed)

## Troubleshooting

### "Invalid session token"
- **Cause**: NEXTAUTH_SECRET changed or not set
- **Fix**: Make sure NEXTAUTH_SECRET in .env matches production
- **Clear cookies** and login again

### "Unauthorized" on API routes
- **Cause**: Session not being passed correctly
- **Fix**: Check `await auth()` is called in API route
- **Verify**: Cookie is being sent (check Network tab)

### "Too many redirects"
- **Cause**: Middleware redirect loop
- **Fix**: Check `/admin/login` is excluded from protection
- **Verify**: middleware.ts matcher configuration

### Can't login
- **Cause**: Database connection or wrong credentials
- **Fix**: Check DATABASE_URL is correct
- **Verify**: Run `pnpm admin:create` to create user
- **Test**: Try connecting to database with `pnpm db:studio`

### Session expires too quickly
- **Cause**: maxAge is too short
- **Fix**: Increase maxAge in auth.ts configuration
- **Default**: 30 days

## Environment Variables Summary

```env
# Required for JWT to work
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-generated-secret-here"

# For production
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="different-secret-for-production"
```

## Commands Reference

```bash
# Generate new secrets
pnpm generate:secrets

# Create admin user
pnpm admin:create

# Start development
pnpm dev

# View database
pnpm db:studio
```

## What's Next?

You're all set! NextAuth handles:
- ✅ JWT token generation
- ✅ Token signing and verification
- ✅ Cookie management
- ✅ Session refresh
- ✅ Automatic expiration

Just make sure to:
1. Add NEXTAUTH_SECRET to your .env
2. Create your admin user
3. Start building your admin features!

## Additional Resources

- [NextAuth Docs](https://authjs.dev)
- [JWT.io](https://jwt.io) - Decode and inspect JWT tokens
- [OWASP Auth Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
