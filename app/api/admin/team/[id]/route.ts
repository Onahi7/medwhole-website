import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { teamMembers, insertTeamMemberSchema } from "@/db/schema"
import { eq } from "drizzle-orm"
import { auth } from "@/lib/auth"

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const validatedData = insertTeamMemberSchema.partial().parse(body)

    const [updated] = await db
      .update(teamMembers)
      .set({ ...validatedData, updatedAt: new Date() })
      .where(eq(teamMembers.id, params.id))
      .returning()

    if (!updated) {
      return NextResponse.json({ error: "Team member not found" }, { status: 404 })
    }

    return NextResponse.json(updated)
  } catch (error) {
    console.error("Error updating team member:", error)
    return NextResponse.json(
      { error: "Failed to update team member" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await db.delete(teamMembers).where(eq(teamMembers.id, params.id))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting team member:", error)
    return NextResponse.json(
      { error: "Failed to delete team member" },
      { status: 500 }
    )
  }
}
