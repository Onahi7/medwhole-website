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
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Join Our Team</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Build Your Career in Public Health</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Join a dynamic team dedicated to transforming health outcomes across Africa through innovation,
                collaboration, and excellence
              </p>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#positions">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Work With Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At MedWHOLE Alliance, you'll be part of a mission-driven organization making real impact in communities
                across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                  >
                    <CardHeader>
                      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" strokeWidth={2.5} />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These core values guide our work and shape our organizational culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-primary">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore current opportunities across our three arms
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {openPositions.length > 0 ? (
                openPositions.map((position, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                  >
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              {position.department}
                            </Badge>
                            <Badge variant="outline">{position.type}</Badge>
                            <Badge variant="outline">{position.level}</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {position.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{position.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {position.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {position.type}
                            </span>
                          </div>
                        </div>
                        <Button asChild className="lg:flex-shrink-0 group-hover:bg-primary transition-colors">
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
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're always looking for talented individuals. Send us your CV and we'll keep you in mind for future
                opportunities.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
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
