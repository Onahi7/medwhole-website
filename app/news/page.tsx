import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Latest Updates</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">News & Events</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                Stay updated with the latest news, announcements, and events from MedWHOLE Alliance
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews ? (
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
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
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    {featuredNews.category && (
                      <Badge variant="secondary" className="w-fit mb-4 bg-primary/10 text-primary">
                        {featuredNews.category}
                      </Badge>
                    )}
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{featuredNews.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredNews.publishedAt).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      {featuredNews.author && (
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredNews.author}
                        </span>
                      )}
                    </div>
                    <Button asChild>
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Recent News</h2>
            {newsArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.slice(0, 9).map((article: any) => (
                  <Card
                    key={article._id}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 flex flex-col overflow-hidden"
                  >
                    {article.featuredImage && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={urlFor(article.featuredImage).width(600).height(400).url()}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <CardHeader>
                      {article.category && (
                        <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary">
                          {article.category}
                        </Badge>
                      )}
                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(article.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
              {events.length > 0 ? (
                <div className="space-y-4">
                  {events.map((event: any) => (
                    <Card key={event._id} className="hover:shadow-lg transition-all hover:border-primary/50">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {event.category && (
                                <Badge variant="outline">{event.category}</Badge>
                              )}
                              {event.location && (
                                <span className="text-sm text-muted-foreground">{event.location}</span>
                              )}
                            </div>
                            <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                            {event.description && (
                              <p className="text-muted-foreground mb-3">{event.description}</p>
                            )}
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Informed</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Subscribe to our newsletter to receive the latest news, updates, and insights from MedWHOLE Alliance.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
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
