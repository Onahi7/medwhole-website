"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Briefcase,
  LineChart,
  FileText,
  Target,
  Settings,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Quote,
  Users,
} from "lucide-react"
import { useState } from "react"

export default function ConsultPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [activeStep, setActiveStep] = useState<number>(0)

  const services = [
    {
      icon: Settings,
      title: "Health Systems Strengthening",
      description:
        "Assessment, design, and implementation support for improving health system performance, governance, and service delivery.",
      deliverables: ["System assessments", "Strategic frameworks", "Implementation plans", "Capacity building"],
    },
    {
      icon: FileText,
      title: "Research Consult",
      description:
        "Study design, data collection and analysis, manuscript development, and support for publishing research findings.",
      deliverables: ["Study protocols", "Data analysis", "Manuscript writing", "Publication support"],
    },
    {
      icon: LineChart,
      title: "Monitoring & Evaluation",
      description:
        "M&E framework development, indicator selection, data systems design, and performance measurement for programs and projects.",
      deliverables: ["M&E frameworks", "Data systems", "Performance dashboards", "Impact reports"],
    },
    {
      icon: Briefcase,
      title: "Grant Writing & Fundraising",
      description:
        "Proposal development, budget preparation, donor identification, and support for securing funding for health initiatives.",
      deliverables: ["Grant proposals", "Budget templates", "Donor mapping", "Pitch decks"],
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description:
        "Organizational assessments, strategic plan development, implementation roadmaps, and change management support.",
      deliverables: ["Strategic plans", "Implementation roadmaps", "Change management", "Performance metrics"],
    },
    {
      icon: TrendingUp,
      title: "Program Management",
      description:
        "Project design, implementation support, quality assurance, and technical assistance for health programs.",
      deliverables: ["Project plans", "Quality frameworks", "Technical guidance", "Progress reports"],
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "Comprehensive analysis of current state, challenges, and opportunities.",
    },
    { number: 2, title: "Strategy", description: "Co-creation of evidence-based solutions aligned with your goals." },
    {
      number: 3,
      title: "Implementation",
      description: "Hands-on support to execute plans and build internal capacity.",
    },
    { number: 4, title: "Evaluation", description: "Measuring impact, learning, and continuous improvement." },
  ]

  const testimonials = [
    {
      quote:
        "MedWHOLE's strategic guidance transformed our health program. Their M&E framework helped us demonstrate impact and secure additional funding.",
      author: "Dr. Amina Okonkwo",
      role: "Program Director, Regional Health Initiative",
      organization: "East Africa Health Network",
    },
    {
      quote:
        "The research consult support was exceptional. They guided us through study design, analysis, and publication in a top-tier journal.",
      author: "Prof. Kwame Mensah",
      role: "Principal Investigator",
      organization: "University of Ghana Medical School",
    },
    {
      quote:
        "Their grant writing expertise helped us secure $2M in funding. The proposal was comprehensive, evidence-based, and compelling.",
      author: "Sarah Mwangi",
      role: "Executive Director",
      organization: "Community Health Foundation",
    },
  ]

  const clientSegments = [
    {
      title: "NGOs & CBOs",
      description: "Community organizations seeking to strengthen programs and demonstrate impact",
    },
    {
      title: "Government Agencies",
      description: "Ministries of Health and public health departments implementing national strategies",
    },
    {
      title: "International Organizations",
      description: "UN agencies, bilateral donors, and global health initiatives",
    },
    {
      title: "Research Institutions",
      description: "Universities and research centers conducting health studies",
    },
    {
      title: "Healthcare Facilities",
      description: "Hospitals and clinics improving quality and operational efficiency",
    },
    {
      title: "Private Sector",
      description: "Corporations implementing workplace health and CSR programs",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-accent via-accent to-accent/80 text-accent-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/50 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium animate-fade-in">
                Strategic Technical Assistance
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">MedWHOLE Consult</h1>
              <p className="text-lg lg:text-xl text-accent-foreground/90 leading-relaxed mb-8 animate-fade-in-up delay-200">
                Strategic technical assistance to strengthen health systems, advance research, and drive sustainable
                development across Africa through evidence-based solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
                >
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Consult Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive technical support to help organizations achieve their health and development goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border-2 hover:border-accent"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <CardContent className="p-6">
                    <div
                      className={`mb-4 inline-flex p-4 rounded-xl transition-all duration-300 ${hoveredService === index ? "bg-accent scale-110 shadow-lg" : "bg-accent/10"}`}
                    >
                      <service.icon
                        className={`h-7 w-7 transition-colors duration-300 ${hoveredService === index ? "text-accent-foreground" : "text-accent"}`}
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div
                      className={`space-y-2 transition-all duration-300 ${hoveredService === index ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}
                    >
                      <div className="text-sm font-semibold text-accent mb-2">Key Deliverables:</div>
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={2.5} />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Consult Approach</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Evidence-based, collaborative solutions tailored to your organization's unique context and needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer transition-all duration-300 hover:scale-105"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div
                    className={`text-5xl font-bold mb-3 transition-colors duration-300 ${activeStep === index ? "text-accent" : "text-muted-foreground"}`}
                  >
                    {step.number}
                  </div>
                  <h4
                    className={`font-semibold mb-2 transition-colors duration-300 ${activeStep === index ? "text-accent" : ""}`}
                  >
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Hear from organizations we've partnered with to achieve their health and development goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-accent mb-4" strokeWidth={2} />
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">{testimonial.quote}</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-accent font-medium mt-1">{testimonial.organization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who We Serve</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Partnering with diverse organizations across the health and development sector
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientSegments.map((segment, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent border-2"
                >
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-lg mb-2">{segment.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{segment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Consult Gallery Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                  Consult Gallery
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">MedWHOLE Consult in Action</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                See our consult team working with organizations to strengthen health systems and drive impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-health-professionals-in-strategic-meeting-.jpg"
                    alt="Strategic planning session"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Strategic Planning</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Strategic Planning Sessions</h3>
                  <p className="text-sm text-muted-foreground">Collaborative strategic planning and health system strengthening</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-medical-team-consultation.jpg"
                    alt="Technical consultation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Technical Assistance</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Technical Consultations</h3>
                  <p className="text-sm text-muted-foreground">Multidisciplinary team providing specialized technical expertise</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-health-conference-presentation.jpg"
                    alt="Conference presentation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-chart-3 text-white">Knowledge Sharing</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Research Presentations</h3>
                  <p className="text-sm text-muted-foreground">Sharing research findings and expertise at international conferences</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-professionals-reviewing-health-data.jpg"
                    alt="Data analysis session"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">M&E Support</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">M&E Data Analysis</h3>
                  <p className="text-sm text-muted-foreground">Monitoring and evaluation support with data-driven insights</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-health-policy-meeting.jpg"
                    alt="Policy workshop"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Policy Development</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Policy Development</h3>
                  <p className="text-sm text-muted-foreground">Supporting evidence-based health policy development and implementation</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/workshop-training-session-african-professionals.jpg"
                    alt="Capacity building workshop"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-chart-3 text-white">Capacity Building</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Capacity Building</h3>
                  <p className="text-sm text-muted-foreground">Building organizational capacity through targeted training and support</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-2 border-accent/20 hover:border-accent">
                <Link href="/gallery?category=Consult" className="flex items-center gap-2">
                  View Complete Consult Gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Impact Highlights</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Measurable results from our consult engagements across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-accent mb-2">$15M+</div>
                  <p className="text-sm text-muted-foreground">Funding Secured for Clients</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-accent mb-2">120+</div>
                  <p className="text-sm text-muted-foreground">Organizations Supported</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-accent mb-2">85+</div>
                  <p className="text-sm text-muted-foreground">Research Publications</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-accent mb-2">25+</div>
                  <p className="text-muted-foreground">Countries Served</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Consult Programs Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                  Consult Programs
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">MedWHOLE Consult Programs</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Strategic consulting programs designed to strengthen health systems and drive organizational impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Settings className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    Health Systems Strengthening Program
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprehensive assessment and strengthening of health systems including governance, financing, and service delivery improvements.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Target className="h-4 w-4" />
                    <span>12-24 months</span>
                    <Badge variant="outline" className="ml-2">Strategic</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                    <Link href="/programs/health-systems-strengthening">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <LineChart className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    M&E Framework Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Design and implementation of robust monitoring and evaluation frameworks with data systems and performance dashboards.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <TrendingUp className="h-4 w-4" />
                    <span>6-12 months</span>
                    <Badge variant="outline" className="ml-2">Technical</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <Link href="/programs/me-framework-development">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <Briefcase className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-chart-3 transition-colors">
                    Organizational Capacity Building
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Strategic planning, change management, and institutional strengthening programs for health organizations.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Users className="h-4 w-4" />
                    <span>9-18 months</span>
                    <Badge variant="outline" className="ml-2">Organizational</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-chart-3 group-hover:text-white group-hover:border-chart-3 transition-colors">
                    <Link href="/programs/organizational-capacity-building">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/programs">
                  View All Consult Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Recent Events */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-chart-3/10 text-chart-3">Consulting Events</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Consulting Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover our latest strategic consulting engagements, capacity building initiatives, and organizational transformations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Event 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-chart-3 to-chart-3/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="h-16 w-16 text-white/80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Strategic Planning</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Settings className="h-4 w-4" />
                    <span>September 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-chart-3 transition-colors">
                    Health Ministry Strategic Planning
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Six-month strategic planning engagement with National Health Ministry to develop 2025-2030 roadmap.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/consulting/events/health-ministry-strategic-planning">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Event 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-primary-foreground/80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Capacity Building</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Settings className="h-4 w-4" />
                    <span>August 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-chart-3 transition-colors">
                    NGO Capacity Building Program
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Comprehensive organizational strengthening program for 15 health-focused NGOs across East Africa.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/consulting/events/ngo-capacity-building-program">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Event 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent to-accent/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <LineChart className="h-16 w-16 text-accent-foreground/80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">M&E Framework</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Settings className="h-4 w-4" />
                    <span>July 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-chart-3 transition-colors">
                    Regional M&E System Development
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Design and implementation of unified monitoring system for regional health programs.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/consulting/events/regional-me-system-development">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/consulting/events">
                  View All Consulting Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners & Clients Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                  Our Partners
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Trusted by Leading Organizations</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Collaborating with governments, NGOs, research institutions, and international organizations across Africa
              </p>
            </div>

            {/* Partner Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div
                  key={i}
                  className="group flex items-center justify-center p-6 bg-muted/30 rounded-xl hover:bg-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
                >
                  <Briefcase className="h-12 w-12 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
              ))}
            </div>

            {/* Client Types with Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Users className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <div className="text-4xl font-bold text-accent mb-2">45+</div>
                  <h3 className="text-xl font-bold mb-3">Government Agencies</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ministries of Health and public sector organizations strengthening national health systems
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Target className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">60+</div>
                  <h3 className="text-xl font-bold mb-3">NGOs & CBOs</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Non-profit organizations implementing community health and development programs
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-3">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl font-bold text-chart-3 mb-2">15+</div>
                  <h3 className="text-xl font-bold mb-3">International Organizations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    UN agencies, bilateral donors, and global health initiatives across multiple countries
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-accent to-accent/80 text-accent-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Organization?</h2>
            <p className="text-lg mb-8 text-accent-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how MedWHOLE Consult can help you achieve your health and development objectives with
              strategic, evidence-based solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              >
                <Link href="/contact">Request Proposal</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
