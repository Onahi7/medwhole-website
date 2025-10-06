import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp, Award, Globe, ArrowRight } from "lucide-react"

export default function CareersPage() {
  const openPositions = [
    {
      slug: "senior-public-health-advisor",
      title: "Senior Public Health Advisor",
      department: "Consulting",
      location: "Nairobi, Kenya",
      type: "Full-time",
      level: "Senior",
      description: "Lead technical assistance projects for health systems strengthening across East Africa.",
    },
    {
      slug: "training-coordinator",
      title: "Training Coordinator",
      department: "Academy",
      location: "Accra, Ghana",
      type: "Full-time",
      level: "Mid-level",
      description: "Coordinate training programs, manage logistics, and support curriculum development.",
    },
    {
      slug: "community-health-officer",
      title: "Community Health Officer",
      department: "Health Services",
      location: "Lagos, Nigeria",
      type: "Full-time",
      level: "Entry-level",
      description: "Implement community health programs and coordinate outreach activities.",
    },
    {
      slug: "monitoring-evaluation-specialist",
      title: "Monitoring & Evaluation Specialist",
      department: "Consulting",
      location: "Remote",
      type: "Contract",
      level: "Senior",
      description: "Design and implement M&E frameworks for health programs across multiple countries.",
    },
    {
      slug: "research-assistant",
      title: "Research Assistant",
      department: "Academy",
      location: "Kampala, Uganda",
      type: "Full-time",
      level: "Entry-level",
      description: "Support research projects, data collection, and analysis for public health studies.",
    },
    {
      slug: "clinical-nurse-maternal-health",
      title: "Clinical Nurse - Maternal Health",
      department: "Health Services",
      location: "Dar es Salaam, Tanzania",
      type: "Full-time",
      level: "Mid-level",
      description: "Provide maternal and child health services in community clinics and mobile units.",
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs for you and your family",
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship, and career advancement paths",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Work on meaningful projects that transform health outcomes across Africa",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a diverse, inclusive team of passionate public health professionals",
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Attractive salary, performance bonuses, and recognition programs",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and generous leave policies",
    },
  ]

  const values = [
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
    {
      title: "Equity",
      description: "We are committed to health equity and social justice",
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
              {openPositions.map((position, index) => (
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
              ))}
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
