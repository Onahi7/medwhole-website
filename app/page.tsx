"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
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
  Lightbulb,
  TrendingUp,
  Calendar,
} from "lucide-react"
import { useEffect, useState } from "react"

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-primary-foreground overflow-hidden min-h-[90vh] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          </div>

          {/* Gold Accent Glows */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent blur-3xl animate-float" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-accent/60 blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/40 blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <div
                className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="inline-flex items-center gap-3 mb-8 bg-accent/20 backdrop-blur-sm px-6 py-3 border border-accent/30 shadow-lg">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm font-bold text-primary-foreground tracking-wide">
                    CATALYZING COMMUNITY TRANSFORMATION
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-balance leading-[1.1] tracking-tight">
                  Making <span className="text-accent">Wholeness</span>
                  <br />
                  A Reality
                </h1>

                <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto font-light">
                  A network of competent, character-driven leaders empowering individuals and families to achieve wholeness and become{" "}
                  <span className="font-semibold text-accent">agents of community transformation</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/about">
                      Discover Our Mission <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 py-7 h-auto transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/contact">Partner With Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-5 py-2 rounded-full">
                  <Target className="h-4 w-4 text-primary" />
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Mission</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
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
                      To help individuals live a boundless, fulfilling life through interventions that promote whole health, whole persons, and whole communities.
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 h-auto text-lg"
                  >
                    <Link href="/about">
                      Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/african-children-learning-classroom-education-comm.jpg"
                    alt="Community education and empowerment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />

                <div className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">10,000+</p>
                      <p className="text-sm text-muted-foreground">Lives Transformed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-5 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">What We Do</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our <span className="text-primary">Core Programs</span>
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Four integrated programs designed to promote whole health, whole persons, and whole communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Heart className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Health Promotion & Healthcare</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building resilient, healthy communities through prevention, access, and care
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Users className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Youth Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nurturing the next generation of leaders with skills, values, and purpose
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-chart-3/10 flex items-center justify-center mb-6 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">School Child Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Empowering children to thrive academically, socially, and emotionally
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Entrepreneurship Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Equipping individuals with tools to create sustainable livelihoods and drive economic growth
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-5 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Integrated Approach</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Three Pillars, <span className="text-primary">One Vision</span>
              </h2>

              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive solutions working in harmony to create lasting impact across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
              {/* Academy Card */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary overflow-hidden bg-gradient-to-br from-card to-primary/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/african-students-in-medical-training-classroom.jpg"
                    alt="Medical training and education"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <CardContent className="p-8 lg:p-10 relative">
                  <div className="mb-6 inline-flex p-5 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <GraduationCap className="h-12 w-12 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    MedWHOLE Academy
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    Building the next generation of public health leaders through comprehensive training and mentorship
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Research Training & Capacity Building</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Professional Development Programs</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Mentorship & Leadership Training</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all"
                  >
                    <Link href="/academy" className="flex items-center justify-center">
                      Explore Academy
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Health Card */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-accent overflow-hidden bg-gradient-to-br from-card to-accent/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/african-healthcare-workers-providing-medical-care-.jpg"
                    alt="Healthcare workers providing medical care"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <CardContent className="p-8 lg:p-10 relative">
                  <div className="mb-6 inline-flex p-5 rounded-2xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Heart className="h-12 w-12 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                    MedWHOLE Health
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    Delivering quality healthcare and community interventions where they're needed most
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Direct Clinical Care Services</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Community Health Outreach</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Health Facility Partnerships</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group-hover:shadow-lg transition-all"
                  >
                    <Link href="/health-services" className="flex items-center justify-center">
                      Explore MedWHOLE Health
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Consult Card */}
              <Card className="group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-chart-3 overflow-hidden bg-gradient-to-br from-card to-chart-3/5">
                <div className="absolute top-0 right-0 w-40 h-40 bg-chart-3/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/african-health-professionals-in-strategic-meeting-.jpg"
                    alt="Health professionals in strategic consult"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <CardContent className="p-8 lg:p-10 relative">
                  <div className="mb-6 inline-flex p-5 rounded-2xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Briefcase className="h-12 w-12 text-chart-3 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-chart-3 transition-colors">
                    MedWHOLE Consult
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    Strategic guidance and technical expertise to strengthen health systems
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-chart-3 flex-shrink-0" />
                      <span>Health Systems Strengthening</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-chart-3 flex-shrink-0" />
                      <span>M&E and Research Consult</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-chart-3 flex-shrink-0" />
                      <span>Grant Writing & Strategic Advisory</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-chart-3 hover:bg-chart-3/90 text-white group-hover:shadow-lg transition-all"
                  >
                    <Link href="/consulting" className="flex items-center justify-center">
                      Explore MedWHOLE Consult
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-muted/50 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-primary/20">
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

        {/* News & Events Section */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-5 py-2 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Latest Updates</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                News & <span className="text-primary">Events</span>
              </h2>

              <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Stay informed about our latest initiatives, research findings, and upcoming events
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
              {/* Featured News */}
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Latest News</h3>
                </div>

                <div className="space-y-6">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                              Program Launch
                            </Badge>
                            <span className="text-xs text-muted-foreground">March 15, 2024</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            MedWHOLE Launches New Maternal Health Initiative Across 5 African Countries
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            Comprehensive maternal health programs aimed at reducing maternal mortality by 40% over the next three years.
                          </p>
                          <Button variant="ghost" size="sm" asChild className="text-primary hover:bg-primary/10 p-0 h-auto">
                            <Link href="/news/maternal-health-initiative-launch" className="flex items-center gap-1">
                              Read more <ArrowRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                              Academy
                            </Badge>
                            <span className="text-xs text-muted-foreground">March 10, 2024</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2">
                            500+ Health Workers Complete Leadership Training Program
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            Our flagship leadership program graduates its largest cohort from 12 African nations.
                          </p>
                          <Button variant="ghost" size="sm" asChild className="text-accent hover:bg-accent/10 p-0 h-auto">
                            <Link href="/news/leadership-training-graduates" className="flex items-center gap-1">
                              Read more <ArrowRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-3/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-chart-3 rounded-full mt-3 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="bg-chart-3/10 text-chart-3 text-xs">
                              Research
                            </Badge>
                            <span className="text-xs text-muted-foreground">March 5, 2024</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2 group-hover:text-chart-3 transition-colors line-clamp-2">
                            New Research Published on Community Health Worker Impact
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            Study shows 35% improvement in health outcomes through community health worker programs.
                          </p>
                          <Button variant="ghost" size="sm" asChild className="text-chart-3 hover:bg-chart-3/10 p-0 h-auto">
                            <Link href="/news/community-health-worker-research" className="flex items-center gap-1">
                              Read more <ArrowRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild variant="outline" className="border-2 border-primary/20 hover:border-primary">
                    <Link href="/news" className="flex items-center gap-2">
                      View All News <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Upcoming Events */}
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Upcoming Events</h3>
                </div>

                <div className="space-y-6">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                              Conference
                            </Badge>
                          </div>
                          <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                            African Public Health Conference 2024
                          </h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>April 15-17, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="h-3.5 w-3.5" />
                              <span>Nairobi, Kenya</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground">
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/30">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-accent/10 text-accent border-accent/20 text-xs">
                              Webinar
                            </Badge>
                          </div>
                          <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                            Innovations in Maternal Health
                          </h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>March 25, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="h-3.5 w-3.5" />
                              <span>Online</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-accent border-accent/20 hover:bg-accent hover:text-accent-foreground">
                          Join
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-3/30">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-chart-3/10 text-chart-3 border-chart-3/20 text-xs">
                              Training
                            </Badge>
                          </div>
                          <h4 className="font-bold text-lg mb-2 group-hover:text-chart-3 transition-colors">
                            Leadership Training Cohort 12 Begins
                          </h4>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>April 1, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="h-3.5 w-3.5" />
                              <span>Accra, Ghana</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-chart-3 border-chart-3/20 hover:bg-chart-3 hover:text-white">
                          Apply
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild variant="outline" className="border-2 border-accent/20 hover:border-accent">
                    <Link href="/news" className="flex items-center gap-2">
                      View All Events <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-chart-3/5 rounded-3xl p-8 lg:p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our newsletter to receive the latest news, research findings, and event announcements from MedWHOLE Alliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Subscribe to Newsletter</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary">
                  <Link href="/news">Browse All Updates</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

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
                Ready to Make a <span className="text-accent">Lasting Impact?</span>
              </h2>
              <p className="text-xl lg:text-2xl mb-12 text-primary-foreground/90 leading-relaxed">
                Join us in advancing health, leadership, and development across Africa. Whether you're looking to learn,
                partner, or contribute, we'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/academy">
                    Enroll in Academy <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 py-7 h-auto transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">Partner With Us</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-10 py-7 h-auto transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact#donate">Support Our Mission</Link>
                </Button>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <GraduationCap className="h-10 w-10 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold text-lg mb-2">For Students</h3>
                  <p className="text-sm text-primary-foreground/80">Access world-class training and mentorship</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <Briefcase className="h-10 w-10 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold text-lg mb-2">For Organizations</h3>
                  <p className="text-sm text-primary-foreground/80">Partner with us for technical expertise</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <Heart className="h-10 w-10 mx-auto mb-4 text-accent" />
                  <h3 className="font-bold text-lg mb-2">For Donors</h3>
                  <p className="text-sm text-primary-foreground/80">Support sustainable health initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-accent blur-3xl animate-float" />
            <div
              className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground blur-3xl animate-float"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Impact Across Africa</h2>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Measurable results that transform communities and save lives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              <div className="text-center group">
                <div className="inline-flex p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-6 group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300">
                  <Users className="h-14 w-14 text-primary-foreground" />
                </div>
                <h3 className="text-5xl lg:text-6xl font-bold mb-3">
                  <AnimatedCounter end={10000} suffix="+" />
                </h3>
                <p className="text-xl font-semibold mb-2">Professionals Trained</p>
                <p className="text-sm text-primary-foreground/80">Across multiple health disciplines</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex p-6 rounded-2xl bg-accent/20 backdrop-blur-sm mb-6 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <Globe className="h-14 w-14 text-accent-foreground" />
                </div>
                <h3 className="text-5xl lg:text-6xl font-bold mb-3">
                  <AnimatedCounter end={15} suffix="+" />
                </h3>
                <p className="text-xl font-semibold mb-2">African Countries</p>
                <p className="text-sm text-primary-foreground/80">With active programs and partnerships</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-6 group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-14 w-14 text-primary-foreground" />
                </div>
                <h3 className="text-5xl lg:text-6xl font-bold mb-3">
                  <AnimatedCounter end={50} suffix="+" />
                </h3>
                <p className="text-xl font-semibold mb-2">Projects Completed</p>
                <p className="text-sm text-primary-foreground/80">With measurable health outcomes</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex p-6 rounded-2xl bg-accent/20 backdrop-blur-sm mb-6 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-14 w-14 text-accent-foreground" />
                </div>
                <h3 className="text-5xl lg:text-6xl font-bold mb-3">
                  <AnimatedCounter end={100000} suffix="+" />
                </h3>
                <p className="text-xl font-semibold mb-2">Lives Impacted</p>
                <p className="text-sm text-primary-foreground/80">Through direct health interventions</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
