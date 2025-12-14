"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Calendar,
  FileText,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Clock,
} from "lucide-react"

interface Event {
  id: string
  slug: string
  title: string
  description: string | null
  date: string
  location: string | null
  category: string | null
  imageUrl: string | null
  registrationUrl: string | null
}

interface GalleryImage {
  id: string
  title: string
  description: string | null
  imageUrl: string
  category: string
  date: string | null
}

export default function AcademyPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [isLoadingEvents, setIsLoadingEvents] = useState(true)
  const [isLoadingGallery, setIsLoadingGallery] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch events
        const eventsResponse = await fetch("/api/events?category=Academy&limit=3")
        if (eventsResponse.ok) {
          const eventsData = await eventsResponse.json()
          setEvents(eventsData)
        }
      } catch (error) {
        console.error("Error fetching events:", error)
      } finally {
        setIsLoadingEvents(false)
      }

      try {
        // Fetch gallery images
        const galleryResponse = await fetch("/api/gallery?category=Academy&limit=6")
        if (galleryResponse.ok) {
          const galleryData = await galleryResponse.json()
          setGalleryImages(galleryData)
        }
      } catch (error) {
        console.error("Error fetching gallery:", error)
      } finally {
        setIsLoadingGallery(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-3xl animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
                <GraduationCap className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-primary-foreground">Education & Training</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">MedWHOLE Academy</h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed mb-8">
                Building the next generation of godly, purpose-driven children to transform communities through quality education, character development, and wholistic support.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Our Impact
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose MedWHOLE Academy?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our programs equip children to lead boundless lives and transform their communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Free Education
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Free summer and term-time schools for over 290 children aged 2-18, removing financial barriers to quality education.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <FileText className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    Scholarship Support
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Scholarships and educational support for indigent but deserving students, ensuring every child has opportunity.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <Users className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-chart-3 transition-colors">
                    Character Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Value-based and moral instruction through Good News Clubs every Saturday, building godly character.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Award className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Holistic Curriculum
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Curriculum enrichment integrating academics, arts, sports, and entrepreneurship for well-rounded development.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Calendar className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    Health & Nutrition
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Health checkups, nutrition support, and hygiene education ensuring children are healthy and ready to learn.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-chart-3 transition-colors">
                    Teacher Excellence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Recruitment and mentorship of quality teachers to ensure excellent learning outcomes for all students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Tracks */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Learning Paths
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Program Tracks</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Choose the learning path that aligns with your career goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Foundational Track
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    For those new to public health or seeking to strengthen core competencies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Introduction to Public Health</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Basic Epidemiology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Health Data Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Community Health Principles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Award className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">Advanced Track</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    For experienced professionals seeking specialized expertise and leadership skills.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Advanced Research Methods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Health Systems Leadership</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Policy Analysis & Advocacy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Strategic Program Management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                    Methodology
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Learning Approach</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Interactive Learning
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Engaging sessions combining theory with practical applications and real-world case studies.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-4xl font-bold text-accent-foreground group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    Hands-On Practice
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Field experiences, research projects, and practical assignments to build applied skills.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-chart-3 to-chart-3/60 flex items-center justify-center text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-chart-3 transition-colors">Ongoing Support</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Continuous mentorship, peer learning networks, and alumni connections for career growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academy Gallery Section */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Academy Gallery
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Transforming Lives Through Education</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                See our students thrive through quality education, character development, and wholistic support
              </p>
            </div>

            {isLoadingGallery ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-[4/3] bg-muted animate-pulse" />
                    <CardContent className="p-6">
                      <div className="h-5 bg-muted rounded mb-2 animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {galleryImages.map((image) => (
                  <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.imageUrl}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {image.description || "Transforming lives through education"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 mb-12">
                <p className="text-muted-foreground text-lg">No gallery images available at the moment.</p>
              </div>
            )}

            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary">
                <Link href="/gallery?category=Academy" className="flex items-center gap-2">
                  View Complete Academy Gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>



        {/* Recent Events */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary">Academy Events</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Academy Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stay updated with the latest training programs, workshops, and educational events from MedWHOLE Academy
              </p>
            </div>
            
            {isLoadingEvents ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video bg-muted animate-pulse" />
                    <CardContent className="p-6">
                      <div className="h-4 bg-muted rounded mb-3 animate-pulse" />
                      <div className="h-6 bg-muted rounded mb-3 animate-pulse" />
                      <div className="h-20 bg-muted rounded mb-4 animate-pulse" />
                      <div className="h-10 bg-muted rounded animate-pulse" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => {
                  const iconColors = [
                    { bg: "from-primary to-primary/80", icon: "primary-foreground", badge: "accent" },
                    { bg: "from-accent to-accent/80", icon: "accent-foreground", badge: "primary" },
                    { bg: "from-chart-3 to-chart-3/80", icon: "white", badge: "accent" },
                  ]
                  const colors = iconColors[index % 3]
                  
                  return (
                    <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className={`aspect-video bg-gradient-to-br ${colors.bg} relative overflow-hidden`}>
                        {event.imageUrl ? (
                          <img 
                            src={event.imageUrl} 
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <GraduationCap className={`h-16 w-16 text-${colors.icon}/80`} />
                          </div>
                        )}
                        {event.category && (
                          <Badge className={`absolute top-4 left-4 bg-${colors.badge} text-${colors.badge}-foreground`}>
                            {event.category}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          {event.description || "Join us for this exciting event."}
                        </p>
                        <Button asChild className="w-full">
                          <Link href={`/academy/events/${event.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No academy events available at the moment.</p>
              </div>
            )}

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/academy/events">
                  View All Academy Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container relative mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Give Your Child a Brighter Future</h2>
            <p className="text-xl mb-10 text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed">
              Enroll your child in MedWHOLE Academy and watch them thrive through quality education, character development, and wholistic support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Enroll Your Child <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
