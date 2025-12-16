"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import Image from "next/image"
import {
  GraduationCap,
  Heart,
  Briefcase,
  ArrowRight,
  Users,
  Globe,
  Award,
  BookOpen,
  Stethoscope,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Target,
  Calendar,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { urlFor } from "@/lib/sanity"

// Types
interface SanityImage {
  _type: "image"
  asset: { _ref: string }
  alt?: string
}

interface NewsItem {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  featuredImage?: SanityImage
  category: string
  publishedAt: string
}

interface EventItem {
  _id: string
  title: string
  slug: { current: string }
  description: string
  category: string
  date: string
  location: string
}

interface TeamMember {
  _id: string
  name: string
  role: string
  bio: string
  photo?: SanityImage
  category: string
}

interface GalleryImage {
  _id: string
  title: string
  image: SanityImage
  description: string
  category: string
}

// Animated counter with intersection observer
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref} aria-label={`${end}${suffix}`}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [news, setNews] = useState<NewsItem[]>([])
  const [events, setEvents] = useState<EventItem[]>([])
  const [team, setTeam] = useState<TeamMember[]>([])
  const [gallery, setGallery] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState({ news: true, events: true, team: true, gallery: true })

  useEffect(() => {
    setIsVisible(true)

    // Fetch all data in parallel
    Promise.all([
      fetch("/api/sanity/news?limit=3").then(r => r.ok ? r.json() : []),
      fetch("/api/sanity/events?limit=3").then(r => r.ok ? r.json() : []),
      fetch("/api/sanity/team?category=leadership").then(r => r.ok ? r.json() : []),
      fetch("/api/sanity/gallery?limit=6").then(r => r.ok ? r.json() : []),
    ]).then(([newsData, eventsData, teamData, galleryData]) => {
      setNews(newsData)
      setEvents(eventsData)
      setTeam(teamData)
      setGallery(galleryData)
      setLoading({ news: false, events: false, team: false, gallery: false })
    }).catch(console.error)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-primary-foreground overflow-hidden min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/hero-community.jpg"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          </div>

          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/60 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="inline-flex items-center gap-3 mb-8 bg-accent/20 backdrop-blur-sm px-6 py-3 border border-accent/30 shadow-lg">
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span className="text-sm font-bold text-primary-foreground tracking-wide">
                    Whole health, Whole person and Whole community,
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-balance leading-[1.1] tracking-tight">
                  Making <span className="text-accent">Wholeness</span>
                  <br />
                  A Reality
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto font-light">
                  A network of competent, character-driven leaders empowering individuals and families to achieve wholeness and become{" "}
                  <span className="font-semibold text-accent">agents of community transformation</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105">
                    <Link href="/about">
                      Discover Our Mission <ArrowRight className="ml-2 h-6 w-6" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 py-7 h-auto transition-all duration-300 hover:scale-105">
                    <Link href="/contact">Partner With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="vision-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" aria-hidden="true" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-5 py-2 rounded-full">
                  <Target className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Mission</span>
                </div>

                <h2 id="vision-heading" className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                  Our <span className="text-primary">Vision & Mission</span>
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Transformed communities through individuals and households who have been made whole.
                    </p>
                  </div>

                  <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
                    <h3 className="text-xl font-bold text-accent mb-3">Our Mission</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To help individuals live a boundless fulfilling life through interventions that promote whole health, whole persons, and whole communities.
                    </p>
                  </div>
                </div>

                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 h-auto text-lg">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/african-children-learning-classroom-education-comm.jpg"
                    alt="Children learning in a classroom, representing MedWHOLE's education initiatives"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" aria-hidden="true" />
                </div>

                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" aria-hidden="true" />
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" aria-hidden="true" />

                <div className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">2,000+</p>
                      <p className="text-sm text-muted-foreground">Lives Transformed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-primary-foreground relative overflow-hidden" aria-labelledby="impact-heading">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute top-10 left-10 w-64 h-64 bg-accent blur-3xl animate-float" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="impact-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Impact Across Nigeria</h2>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Measurable results that transform communities and save lives.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10" role="list" aria-label="Impact statistics">
              <div className="text-center group" role="listitem">
                <div className="inline-flex p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-6 group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-10 lg:h-14 w-10 lg:w-14 text-primary-foreground" aria-hidden="true" />
                </div>
                <p className="text-4xl lg:text-6xl font-bold mb-3">
                  <AnimatedCounter end={50} suffix="+" />
                </p>
                <p className="text-lg lg:text-xl font-semibold mb-2">Professionals Trained</p>
                <p className="text-sm text-primary-foreground/80">Across multiple health disciplines</p>
              </div>

              <div className="text-center group" role="listitem">
                <div className="inline-flex p-6 rounded-2xl bg-accent/20 backdrop-blur-sm mb-6 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <Globe className="h-10 lg:h-14 w-10 lg:w-14 text-accent-foreground" aria-hidden="true" />
                </div>
                <p className="text-4xl lg:text-6xl font-bold mb-3">
                  <AnimatedCounter end={15} suffix="+" />
                </p>
                <p className="text-lg lg:text-xl font-semibold mb-2">Nigerian States</p>
                <p className="text-sm text-primary-foreground/80">With active programs</p>
              </div>

              <div className="text-center group" role="listitem">
                <div className="inline-flex p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-6 group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-10 lg:h-14 w-10 lg:w-14 text-primary-foreground" aria-hidden="true" />
                </div>
                <p className="text-4xl lg:text-6xl font-bold mb-3">
                  <AnimatedCounter end={50} suffix="+" />
                </p>
                <p className="text-lg lg:text-xl font-semibold mb-2">Projects Completed</p>
                <p className="text-sm text-primary-foreground/80">With measurable outcomes</p>
              </div>

              <div className="text-center group" role="listitem">
                <div className="inline-flex p-6 rounded-2xl bg-accent/20 backdrop-blur-sm mb-6 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-10 lg:h-14 w-10 lg:w-14 text-accent-foreground" aria-hidden="true" />
                </div>
                <p className="text-4xl lg:text-6xl font-bold mb-3">
                  <AnimatedCounter end={2000} suffix="+" />
                </p>
                <p className="text-lg lg:text-xl font-semibold mb-2">Lives Impacted</p>
                <p className="text-sm text-primary-foreground/80">Through direct interventions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillars Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden" aria-labelledby="pillars-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" aria-hidden="true" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-5 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Integrated Approach</span>
              </div>

              <h2 id="pillars-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Three Pillars, <span className="text-primary">One Vision</span>
              </h2>

              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive solutions working in harmony to create lasting impact across Nigeria
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">

              {/* Academy Card */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary overflow-hidden bg-gradient-to-br from-card to-primary/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/african-students-in-medical-training-classroom.jpg"
                    alt="Students in medical training classroom"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" aria-hidden="true" />
                </div>

                <CardContent className="p-8 lg:p-10 relative">
                  <div className="mb-6 inline-flex p-5 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <GraduationCap className="h-12 w-12 text-primary group-hover:text-primary-foreground transition-colors" aria-hidden="true" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">MedWHOLE Academy</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    Raising godly, purpose-driven children to transform communities.
                  </p>

                  <ul className="space-y-3 mb-8" aria-label="Academy programs">
                    {["Back-to-School Scholarship Program", "Discipleship & Character Development", "Skill Development Workshops", "Health & Nutrition Support"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all">
                    <Link href="/academy" className="flex items-center justify-center">
                      Explore Academy <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Health Card */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-accent overflow-hidden bg-gradient-to-br from-card to-accent/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/african-healthcare-workers-providing-medical-care-.jpg"
                    alt="Healthcare workers providing medical care to community members"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" aria-hidden="true" />
                </div>

                <CardContent className="p-8 lg:p-10 relative">
                  <div className="mb-6 inline-flex p-5 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Heart className="h-12 w-12 text-accent group-hover:text-accent-foreground transition-colors" aria-hidden="true" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">MedWHOLE Health</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    Providing wholistic, accessible, and affordable healthcare rooted in faith-based values.
                  </p>

                  <ul className="space-y-3 mb-8" aria-label="Health services">
                    {["Direct Clinical Care Services", "Community Health Outreach", "Health Facility Partnerships", "Preventive Care Programs"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group-hover:shadow-lg transition-all">
                    <Link href="/health-services" className="flex items-center justify-center">
                      Explore Health <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Consult Card */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-chart-3 overflow-hidden bg-gradient-to-br from-card to-chart-3/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-chart-3/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" aria-hidden="true" />

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/african-health-professionals-in-strategic-meeting-.jpg"
                    alt="Health professionals in strategic planning meeting"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" aria-hidden="true" />
                </div>

                <CardContent className="p-8 lg:p-10 relative">
                  <div className="mb-6 inline-flex p-5 rounded-2xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Briefcase className="h-12 w-12 text-chart-3 group-hover:text-white transition-colors" aria-hidden="true" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-chart-3 transition-colors">MedWHOLE Consult</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    Strategic guidance and technical expertise to strengthen health systems.
                  </p>

                  <ul className="space-y-3 mb-8" aria-label="Consulting services">
                    {["Facility & Systems Assessment", "Public Health Research", "Policy Design & Support", "Monitoring & Evaluation"].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-chart-3 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full bg-chart-3 hover:bg-chart-3/90 text-white group-hover:shadow-lg transition-all">
                    <Link href="/consulting" className="flex items-center justify-center">
                      Explore Consult <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-muted/50 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-primary/20" aria-hidden="true">
                <BookOpen className="h-6 w-6 text-primary" />
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
                <Stethoscope className="h-6 w-6 text-accent" />
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
                <BarChart3 className="h-6 w-6 text-chart-3" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-medium">
                Integrated solutions for comprehensive impact
              </p>
            </div>
          </div>
        </section>

        {/* News & Events Section - Sanity Powered */}
        <section className="py-24 lg:py-32 bg-muted/30" aria-labelledby="news-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-5 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Latest Updates</span>
              </div>

              <h2 id="news-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                News & <span className="text-primary">Events</span>
              </h2>

              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Stay informed about our latest initiatives, research findings, and upcoming events
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
              {/* Latest News */}
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold">Latest News</h3>
                </div>

                <div className="space-y-6">
                  {loading.news ? (
                    Array.from({ length: 2 }).map((_, i) => (
                      <Card key={i} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex gap-4">
                            <Skeleton className="w-24 h-24 flex-shrink-0" />
                            <div className="py-4 pr-4 flex-1 space-y-2">
                              <Skeleton className="h-4 w-20" />
                              <Skeleton className="h-5 w-full" />
                              <Skeleton className="h-4 w-3/4" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : news.length > 0 ? (
                    news.map((item) => (
                      <Card key={item._id} className="group hover:shadow-lg transition-all hover:border-primary/50 overflow-hidden">
                        <CardContent className="p-0">
                          <Link href={`/news/${item.slug.current}`} className="flex gap-4">
                            <div className="relative w-24 h-24 flex-shrink-0">
                              {item.featuredImage ? (
                                <Image
                                  src={urlFor(item.featuredImage).width(200).height(200).url()}
                                  alt={item.featuredImage.alt || item.title}
                                  fill
                                  className="object-cover"
                                  sizes="96px"
                                />
                              ) : (
                                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                  <BookOpen className="h-8 w-8 text-primary/50" aria-hidden="true" />
                                </div>
                              )}
                            </div>
                            <div className="py-4 pr-4 flex-1">
                              {item.category && (
                                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                                  {item.category.replace("-", " ")}
                                </span>
                              )}
                              <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                {item.title}
                              </h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">{item.excerpt}</p>
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card className="border-2 border-dashed">
                      <CardContent className="p-8 text-center">
                        <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" aria-hidden="true" />
                        <p className="text-muted-foreground">No news articles yet. Check back soon!</p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="mt-8 text-center">
                  <Button asChild variant="outline" className="border-2 border-primary/20 hover:border-primary">
                    <Link href="/news" className="flex items-center gap-2">
                      View All News <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Upcoming Events */}
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold">Upcoming Events</h3>
                </div>

                <div className="space-y-6">
                  {loading.events ? (
                    Array.from({ length: 2 }).map((_, i) => (
                      <Card key={i}>
                        <CardContent className="p-6 space-y-3">
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-5 w-full" />
                          <Skeleton className="h-4 w-1/2" />
                        </CardContent>
                      </Card>
                    ))
                  ) : events.length > 0 ? (
                    events.map((event) => (
                      <Card key={event._id} className="group hover:shadow-lg transition-all hover:border-accent/50">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              {event.category && (
                                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                                  {event.category}
                                </span>
                              )}
                              <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                                {event.title}
                              </h4>
                              {event.description && (
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                              )}
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                                  <time dateTime={event.date}>
                                    {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                  </time>
                                </span>
                                {event.location && <span className="text-xs">{event.location}</span>}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card className="border-2 border-dashed">
                      <CardContent className="p-8 text-center">
                        <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" aria-hidden="true" />
                        <p className="text-muted-foreground">No upcoming events. Check back soon!</p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="mt-8 text-center">
                  <Button asChild variant="outline" className="border-2 border-accent/20 hover:border-accent">
                    <Link href="/news#events" className="flex items-center gap-2">
                      View All Events <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/30" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent blur-3xl animate-float" />
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-primary-foreground blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center text-primary-foreground">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance">
                Join us in making <span className="text-accent">lasting impact!</span>
              </h2>
              <p className="text-xl lg:text-2xl mb-12 text-primary-foreground/90 leading-relaxed">
                Join us in building whole persons, whole health, and whole communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/academy">
                    Enroll <ArrowRight className="ml-2 h-6 w-6" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 py-7 h-auto transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">Support Our Mission</Link>
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <GraduationCap className="h-10 w-10 mx-auto mb-4 text-accent" aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-2">For Students</h3>
                  <p className="text-sm text-primary-foreground/80">Access transformative learning and mentorship.</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <Briefcase className="h-10 w-10 mx-auto mb-4 text-accent" aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-2">For Organizations</h3>
                  <p className="text-sm text-primary-foreground/80">Partner with us for capacity development.</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <Heart className="h-10 w-10 mx-auto mb-4 text-accent" aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-2">For Donors</h3>
                  <p className="text-sm text-primary-foreground/80">Support sustainable health initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
