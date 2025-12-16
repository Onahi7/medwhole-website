"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Stethoscope, Home, Activity, CheckCircle, ArrowRight, Shield } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function HealthServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      icon: Home,
      title: "Gosa Primary Health Centre Optimization",
      description:
        "Collaborating with the FCT Primary Health Care Board to improve governance, infrastructure, and community engagement.",
      features: ["Infrastructure improvement", "Governance strengthening", "Community mobilization", "Service delivery enhancement"],
    },
    {
      icon: Activity,
      title: "Rhema Foundation Hospital Transition (Kwali)",
      description:
        "Developing a structured handover and management model for rural hospital revitalization.",
      features: ["Handover framework", "Governance model", "Clinical service improvements", "Operational restructuring"],
    },
    {
      icon: Stethoscope,
      title: "Health Hub (Royal Estate)",
      description: "A flagship model combining digital health, clinical services, and outreach in surrounding communities.",
      features: ["Digital consultations", "Clinic services", "Outreach programs", "Telehealth integration"],
    },
    {
      icon: Shield,
      title: "Emergency Preparedness Training",
      description:
        "Partnering with the Nigerian Cardiac Society and National Assembly Health Services to provide CPR and BLS training for public servants, health workers, and NYSC members.",
      features: ["Comprehensive CPR training", "BLS certification", "Emergency response protocols", "Community first responders"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <PageHero
          title="MedWHOLE Health"
          description="Delivering wholistic, accessible, and compassionate healthcare to individuals and communities."
          badge={{
            icon: <Heart className="h-5 w-5 text-health-accent" />,
            text: "Delivering Quality Healthcare Across Africa",
          }}
          backgroundImage="/african-children-learning-classroom-education-comm.jpg"
          variant="health"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-health-accent text-health-accent-foreground hover:bg-health-accent/90">
              <Link href="/contact">Partner With Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </PageHero>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Approach to Health</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  MedWHOLE's health service arm provides accessible, affordable, and compassionate healthcare integrated with health systems innovation and faith-based values.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Accessibility</h4>
                      <p className="text-sm text-muted-foreground">
                        We make health services available to rural communities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Affordability</h4>
                      <p className="text-sm text-muted-foreground">
                        We offer optimum care at affordable rates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Compassionate care</h4>
                      <p className="text-sm text-muted-foreground">
                        We treat everyone with care and respect
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Faith-based values</h4>
                      <p className="text-sm text-muted-foreground">
                        We offer services as faithful stewards
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/african-healthcare-workers-providing-medical-care-.jpg"
                  alt="Community healthcare delivery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Health Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We provide a comprehensive range of clinical and community-based health services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border-2 hover:border-health-accent"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6">
                    <div
                      className={`mb-4 inline-flex p-4 rounded-xl transition-all duration-300 ${
                        hoveredCard === index 
                          ? "bg-health-accent scale-110 shadow-lg" 
                          : "bg-health-accent/10"
                      }`}
                    >
                      <service.icon
                        className={`h-7 w-7 transition-colors duration-300 ${
                          hoveredCard === index 
                            ? "text-health-accent-foreground" 
                            : "text-health-accent"
                        }`}
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div
                      className={`space-y-2 transition-all duration-300 ${
                        hoveredCard === index 
                          ? "opacity-100 max-h-40" 
                          : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-health-accent flex-shrink-0" strokeWidth={2.5} />
                          <span>{feature}</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image
                  src="/african-mother-and-child-receiving-healthcare-mate.jpg"
                  alt="Maternal and child health services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Patient-centered care that prioritizes accessibility, quality, and community engagement
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Home className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">Community-Based Care</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        We bring healthcare directly to communities, removing barriers to access and ensuring services
                        reach those who need them most.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                          Mobile health clinics
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                          Home-based care programs
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                          Community health worker networks
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                          Local health education initiatives
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-health-accent">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-health-accent/10 group-hover:bg-health-accent group-hover:scale-110 transition-all duration-300">
                        <Activity className="h-6 w-6 text-health-accent group-hover:text-health-accent-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-health-accent transition-colors">Integrated Services</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Our holistic approach addresses multiple health needs simultaneously, improving outcomes and
                        efficiency.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-health-accent flex-shrink-0" strokeWidth={2.5} />
                          Preventive and curative care
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-health-accent flex-shrink-0" strokeWidth={2.5} />
                          Health education and counseling
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-health-accent flex-shrink-0" strokeWidth={2.5} />
                          Referral and follow-up systems
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-health-accent flex-shrink-0" strokeWidth={2.5} />
                          Linkages to social services
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-health-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Support Our Health Programs</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Save a life with your support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group bg-health-accent text-health-accent-foreground hover:bg-health-accent/90">
                <Link href="/contact">
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
