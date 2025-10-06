import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export default function NewsPage() {
  const featuredNews = {
    slug: "maternal-health-initiative-launch",
    title: "MedWHOLE Launches New Maternal Health Initiative Across 5 African Countries",
    excerpt:
      "In partnership with regional health ministries, we're implementing comprehensive maternal health programs aimed at reducing maternal mortality by 40% over the next three years.",
    date: "March 15, 2024",
    category: "Program Launch",
    author: "MedWHOLE Communications",
    readTime: "5 min read",
    image: "/african-mother-and-child-receiving-healthcare-mate.jpg",
  }

  const newsArticles = [
    {
      slug: "leadership-training-graduates",
      title: "500+ Health Workers Complete Leadership Training Program",
      excerpt:
        "Our flagship leadership program graduates its largest cohort, with participants from 12 African nations ready to lead health system transformation.",
      date: "March 10, 2024",
      category: "Academy",
      author: "Dr. Sarah Mensah",
      readTime: "4 min read",
    },
    {
      slug: "community-health-worker-research",
      title: "New Research Published on Community Health Worker Impact",
      excerpt:
        "MedWHOLE research team publishes groundbreaking study showing 35% improvement in health outcomes through community health worker programs.",
      date: "March 5, 2024",
      category: "Research",
      author: "Research Team",
      readTime: "6 min read",
    },
    {
      slug: "who-africa-partnership",
      title: "Partnership Announcement: Collaboration with WHO Africa",
      excerpt:
        "MedWHOLE Alliance signs MoU with WHO Africa Regional Office to strengthen health systems across the continent.",
      date: "February 28, 2024",
      category: "Partnership",
      author: "MedWHOLE Communications",
      readTime: "3 min read",
    },
    {
      slug: "mobile-clinics-milestone",
      title: "Mobile Health Clinics Reach 50,000 Patients Milestone",
      excerpt:
        "Our mobile health care has now provided care to over 50,000 patients in remote and underserved communities.",
      date: "February 20, 2024",
      category: "Health",
      author: "Dr. James Okonkwo",
      readTime: "5 min read",
    },
    {
      slug: "grant-writing-workshop-series",
      title: "Grant Writing Workshop Series Begins Next Month",
      excerpt:
        "Join our comprehensive grant writing workshop series designed to help organizations secure funding for health programs.",
      date: "February 15, 2024",
      category: "Events",
      author: "MedWHOLE Academy",
      readTime: "2 min read",
    },
    {
      slug: "annual-impact-report-2023",
      title: "Annual Impact Report 2023 Now Available",
      excerpt:
        "Download our comprehensive 2023 impact report showcasing achievements across all three arms of MedWHOLE Alliance.",
      date: "February 10, 2024",
      category: "Reports",
      author: "MedWHOLE Alliance",
      readTime: "8 min read",
    },
  ]

  const upcomingEvents = [
    {
      title: "African Public Health Conference 2024",
      date: "April 15-17, 2024",
      location: "Nairobi, Kenya",
      type: "Conference",
    },
    {
      title: "Webinar: Innovations in Maternal Health",
      date: "March 25, 2024",
      location: "Online",
      type: "Webinar",
    },
    {
      title: "Leadership Training Cohort 12 Begins",
      date: "April 1, 2024",
      location: "Accra, Ghana",
      type: "Training",
    },
  ]

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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4 bg-primary/10 text-primary">
                    {featuredNews.category}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">{featuredNews.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredNews.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredNews.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredNews.author}
                    </span>
                  </div>
                  <Button asChild>
                    <Link href={`/news/${featuredNews.slug}`}>
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Recent News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 flex flex-col"
                >
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={`/news/${article.slug}`}>
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{event.type}</Badge>
                            <span className="text-sm text-muted-foreground">{event.location}</span>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                        </div>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
