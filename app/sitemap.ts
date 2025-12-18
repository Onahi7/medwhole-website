import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://medwhole.org"

  // Static pages
  const routes = [
    "",
    "/about",
    "/academy",
    "/health-services",
    "/consulting",
    "/programs",
    "/impact",
    "/news",
    "/resources",
    "/careers",
    "/contact",
    "/gallery",
    "/faq",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // TODO: Add dynamic routes from Sanity
  // You can fetch news articles, programs, etc. and add them here
  // Example:
  // const news = await getNewsArticles()
  // const newsUrls = news.map(article => ({
  //   url: `${baseUrl}/news/${article.slug}`,
  //   lastModified: new Date(article.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))

  return [...routes]
}
