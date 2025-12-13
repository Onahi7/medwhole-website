import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

/**
 * Get the current authenticated session
 * Throws error if not authenticated
 */
export async function getSession() {
  const session = await auth()
  
  if (!session || !session.user) {
    throw new Error("Unauthorized")
  }

  return session
}

/**
 * Get the current authenticated session or redirect to login
 * Use in Server Components
 */
export async function getSessionOrRedirect() {
  const session = await auth()
  
  if (!session || !session.user) {
    redirect("/admin/login")
  }

  return session
}

/**
 * Get the current user ID from session
 */
export async function getCurrentUserId() {
  const session = await getSession()
  return session.user.id
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated() {
  const session = await auth()
  return !!session?.user
}
