import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User, Newspaper } from "lucide-react"
import { getNews, getEvents } from "@/lib/sanity-queries"
import { urlFor } from "@/lib/sanity"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function NewsPage() {
  // Fetch news and events from Sanity
  const newsArticles = await getNews(undefined, 12)
  const events = await getEvents(undefined, 10)
  
  // Get featured news (first one marked as featured)
  const featuredNews = newsArticles.find((article: any) => article.featured) || newsArticles[0]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <PageHero
          title="News & Events"
          description="Stay updated with the latest news, announcements, and events from MedWHOLE Alliance"
          badge={{
            icon: <Newspaper className="h-5 w-5 text-accent" />,
            text: "Latest Updates",
          }}
        />

        {/* Featured News */}
        {featuredNews ? (
          <section className="py-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-56 sm:h-64 lg:h-auto lg:min-h-[400px]">
                    {featuredNews.featuredImage ? (
                      <img
                        src={urlFor(featuredNews.featuredImage).width(800).height(600).url()}
                        alt={featuredNews.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
                    )}
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
                  </div>
                  <CardContent className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    {featuredNews.category && (
                      <Badge variant="secondary" className="w-fit mb-3 sm:mb-4 bg-primary/10 text-primary">
                        {featuredNews.category}
                      </Badge>
                    )}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance">{featuredNews.title}</h2>
                    <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none">{featuredNews.excerpt}</p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-muted-foreground mb-4 sm:mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{new Date(featuredNews.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}</span>
                      </span>
                      {featuredNews.author && (
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{featuredNews.author}</span>
                        </span>
                      )}
                    </div>
                    <Button asChild className="w-full sm:w-auto">
                      <Link href={`/news/${featuredNews.slug.current}`}>
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        ) : null}

        {/* News Grid */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Recent News</h2>
            {newsArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {newsArticles.slice(0, 9).map((article: any) => (
                  <Card
                    key={article._id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 flex flex-col overflow-hidden"
                  >
                    {article.featuredImage && (
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                          src={urlFor(article.featuredImage).width(600).height(400).url()}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <CardHeader className="p-4 sm:p-6">
                      {article.category && (
                        <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary text-xs sm:text-sm">
                          {article.category}
                        </Badge>
                      )}
                      <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-sm sm:text-base">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto space-y-4 p-4 sm:p-6 pt-0">
                      <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                          <span className="truncate">{new Date(article.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}</span>
                        </span>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-sm"
                      >
                        <Link href={`/news/${article.slug.current}`}>
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-2 border-dashed">
                <CardContent className="p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                      <Calendar className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">No News Articles Yet</h3>
                    <p className="text-muted-foreground">
                      News articles will appear here soon.
                      <br />
                      <span className="text-sm">Add content via Sanity Studio at /studio</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Upcoming Events</h2>
              {events.length > 0 ? (
                <div className="space-y-4">
                  {events.map((event: any) => (
                    <Card key={event._id} className="hover:shadow-lg transition-all hover:border-primary/50">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                          <div className="flex-1 w-full">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                              {event.category && (
                                <Badge variant="outline" className="text-xs sm:text-sm">{event.category}</Badge>
                              )}
                              {event.location && (
                                <span className="text-xs sm:text-sm text-muted-foreground truncate">{event.location}</span>
                              )}
                            </div>
                            <h3 className="font-semibold text-base sm:text-lg mb-2">{event.title}</h3>
                            {event.description && (
                              <p className="text-sm sm:text-base text-muted-foreground mb-3 line-clamp-2 sm:line-clamp-none">{event.description}</p>
                            )}
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 flex-shrink-0" />
                              <span className="break-words">
                                {new Date(event.date).toLocaleDateString('en-US', { 
                                  weekday: 'long',
                                  month: 'long', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-2 border-dashed">
                  <CardContent className="p-12 text-center">
                    <div className="max-w-md mx-auto">
                      <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                        <Calendar className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">No Upcoming Events</h3>
                      <p className="text-muted-foreground">
                        Events will be posted here soon.
                        <br />
                        <span className="text-sm">Add content via Sanity Studio at /studio</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Stay Informed</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
                Subscribe to our newsletter to receive the latest news, updates, and insights from MedWHOLE Alliance.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                <Link href="/contact">Subscribe Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
