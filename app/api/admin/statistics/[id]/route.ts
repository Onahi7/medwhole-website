import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { statistics, insertStatisticSchema } from "@/db/schema"
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
    const validatedData = insertStatisticSchema.partial().parse(body)

    const [updated] = await db
      .update(statistics)
      .set({ ...validatedData, updatedAt: new Date() })
      .where(eq(statistics.id, params.id))
      .returning()

    if (!updated) {
      return NextResponse.json({ error: "Statistic not found" }, { status: 404 })
    }

    return NextResponse.json(updated)
  } catch (error) {
    console.error("Error updating statistic:", error)
    return NextResponse.json(
      { error: "Failed to update statistic" },
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

    await db.delete(statistics).where(eq(statistics.id, params.id))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting statistic:", error)
    return NextResponse.json(
      { error: "Failed to delete statistic" },
      { status: 500 }
    )
  }
}
