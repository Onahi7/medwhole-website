import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp, Award, Globe, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const openPositions: any[] = []
  // Job postings should be fetched from the database via admin panel
  // Example structure:
  // {
  //   slug: string,
  //   title: string,
  //   department: string,
  //   location: string,
  //   type: string,
  //   level: string,
  //   description: string
  // }

  const benefits = [
    {
      icon: Heart,
      title: "Meaningful impact",
      description: "Contribute directly to programs that improve health, education, and community well-being.",
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship, and career advancement paths across public health, policy, and technical programs.",
    },
    {
      icon: Globe,
      title: "Collaborative Environment",
      description: "Join a dynamic, mission-driven team that values innovation, excellence, and faith-based principles.",
    },
    {
      icon: Users,
      title: "Competitive Package",
      description: "Attractive salary, performance bonuses, and recognition programs.",
    },
    {
      icon: Award,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and supportive environment.",
    },
  ]

  const values = [
    {
      title: "Faith-based",
      description: "Our purpose and actions are founded in biblical principles",
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
    },
    {
      title: "Innovation",
      description: "We embrace creative solutions to complex health challenges",
    },
    {
      title: "Collaboration",
      description: "We work together across disciplines and borders",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-12 sm:py-16 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-3 sm:mb-4 bg-accent text-accent-foreground text-xs sm:text-sm">Join Our Team</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance px-4">Build Your Career in Public Health</h1>
              <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-6 sm:mb-8 px-4">
                Join a dynamic team dedicated to transforming health outcomes across Africa through innovation,
                collaboration, and excellence
              </p>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                <Link href="#positions">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">Why Work With Us</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                At MedWHOLE Alliance, you'll be part of a mission-driven organization making real impact in communities
                across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/10 w-fit mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" strokeWidth={2.5} />
                      </div>
                      <CardTitle className="text-lg sm:text-xl">{benefit.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">Our Values</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                These core values guide our work and shape our organizational culture
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-primary">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">Open Positions</h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
                Explore current opportunities across our three arms
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
              {openPositions.length > 0 ? (
                openPositions.map((position, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                  >
                    <CardContent className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                            <Badge variant="secondary" className="bg-primary/10 text-primary text-xs sm:text-sm">
                              {position.department}
                            </Badge>
                            <Badge variant="outline" className="text-xs sm:text-sm">{position.type}</Badge>
                            <Badge variant="outline" className="text-xs sm:text-sm">{position.level}</Badge>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {position.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{position.description}</p>
                          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{position.location}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{position.type}</span>
                            </span>
                          </div>
                        </div>
                        <Button asChild className="lg:flex-shrink-0 group-hover:bg-primary transition-colors w-full lg:w-auto">
                          <Link href={`/careers/${position.slug}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="border-2 border-dashed">
                  <CardContent className="p-12 text-center">
                    <div className="max-w-md mx-auto">
                      <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                        <Briefcase className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">No Open Positions</h3>
                      <p className="text-muted-foreground">
                        We don't have any open positions at the moment. Check back soon or submit your CV below.
                        <br />
                        <span className="text-sm">Job postings are managed from the admin panel.</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-4">Don't See the Right Role?</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4">
                We're always looking for talented individuals. Send us your CV and we'll keep you in mind for future
                opportunities.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                <Link href="/contact">Submit Your CV</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
