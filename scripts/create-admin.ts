// Load environment variables FIRST - try .env.local then .env
import { config } from "dotenv"
import { resolve } from "path"

// Try loading .env.local first, then fall back to .env
config({ path: resolve(process.cwd(), ".env.local") })
config({ path: resolve(process.cwd(), ".env") })

import { db } from "../db"
import { adminUsers } from "../db/schema"
import { hash } from "bcryptjs"
import { eq } from "drizzle-orm"

async function createAdminUser() {
  const email = process.env.ADMIN_EMAIL || "admin@medwhole.org"
  const password = process.env.ADMIN_PASSWORD || "admin123"

  try {
    // Check if admin already exists
    const existing = await db.query.adminUsers.findFirst({
      where: eq(adminUsers.email, email),
    })

    if (existing) {
      console.log("Admin user already exists:", email)
      return
    }

    // Hash password
    const passwordHash = await hash(password, 12)

    // Create admin user
    const [admin] = await db
      .insert(adminUsers)
      .values({
        email,
        name: "Admin",
        passwordHash,
        isActive: true,
      })
      .returning()

    console.log("✅ Admin user created successfully!")
    console.log("Email:", admin.email)
    console.log("Password:", password)
    console.log("\n⚠️  Please change the password after first login!")
  } catch (error) {
    console.error("Error creating admin user:", error)
    process.exit(1)
  }

  process.exit(0)
}

createAdminUser()
