import { NextRequest, NextResponse } from "next/server"
import { getNews } from "@/lib/sanity-queries"

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category") || undefined
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : 10

    const news = await getNews(category, limit)

    return NextResponse.json(news, { status: 200 })
  } catch (error) {
    console.error("Error fetching news from Sanity:", error)
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    )
  }
}
