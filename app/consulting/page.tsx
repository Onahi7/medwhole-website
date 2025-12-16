"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
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
      title: "Facility and Systems Assessment",
      description:
        "Comprehensive audits of hospitals and health facilities (e.g., Rhema Foundation Hospital assessment, Gosa PHC optimization).",
      deliverables: ["Facility audits", "Governance evaluation", "Service delivery assessment", "Improvement planning"],
    },
    {
      icon: FileText,
      title: "Public Health Research",
      description:
        "Systematic reviews, health impact evaluations, and operational studies (e.g., Post-operative outcomes and Asthma prevalence in Nigeria).",
      deliverables: ["Research design", "Data collection", "Data analysis", "Report development", "Policy briefs"],
    },
    {
      icon: LineChart,
      title: "Monitoring, Evaluation, and Learning (MEL)",
      description:
        "Establishing data systems for performance tracking and evidence generation.",
      deliverables: ["MEL frameworks", "Data collection tools", "Reporting templates"],
    },
    {
      icon: Briefcase,
      title: "Policy Design and Technical Support",
      description:
        "Developing frameworks for hospital transition, NGO partnerships, and PHC reforms.",
      deliverables: ["Stakeholder consultations", "Governance models", "Policy frameworks"],
    },
    {
      icon: Target,
      title: "Training and Advisory",
      description:
        "Providing technical assistance to government agencies, NGOs, and private organizations on health systems strengthening and workforce planning.",
      deliverables: ["Health Systems Framework", "Healthcare Financing", "Quality Improvement", "Health Information Systems"],
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "Comprehensive analysis of your organization’s current state, challenges, and opportunities.",
    },
    { number: 2, title: "Strategy", description: "Co-creation of evidence-based solutions aligned with your goals." },
    {
      number: 3,
      title: "Implementation",
      description: "Hands-on support to execute plans and build internal capacity.",
    },
    { number: 4, title: "Evaluation", description: "Measuring impact, learning, and sustainability." },
  ]

  const testimonials: any[] = []
  // Client testimonials should be fetched from the database via admin panel
  // Example structure:
  // {
  //   quote: string,
  //   author: string,
  //   role: string,
  //   organization: string
  // }

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
      <main id="main-content" className="flex-1">
        <PageHero
          title="MedWHOLE Consult"
          description="Strategic technical assistance to strengthen health systems, advance research, and drive sustainable development through evidence-based solutions."
          badge={{
            icon: <Briefcase className="h-5 w-5 text-primary" />,
            text: "Strategic Technical Assistance",
          }}
          variant="accent"
          backgroundImage="/african-health-professionals-in-strategic-meeting-.jpg"
        >
          <div className="flex flex-col sm:flex-row gap-4">
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
        </PageHero>

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
              {testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
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
                ))
              ) : (
                <div className="col-span-full">
                  <Card className="border-2 border-dashed">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                          <Quote className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Client Success Stories Coming Soon</h3>
                        <p className="text-muted-foreground">
                          Testimonials from our consulting partners will be featured here.
                          <br />
                          <span className="text-sm">Testimonials are managed from the admin panel.</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
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

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Impact Highlights</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Measurable results from our consult engagements
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
                  <p className="text-sm text-muted-foreground">Countries Served</p>
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