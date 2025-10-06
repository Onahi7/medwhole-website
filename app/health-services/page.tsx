"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Stethoscope, Users, Home, Activity, Pill, CheckCircle, ArrowRight, Calendar, Baby, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HealthServicesPage() {
  const [stats, setStats] = useState({ patients: 0, communities: 0, programs: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setStats({
        patients: Math.floor(50000 * progress),
        communities: Math.floor(200 * progress),
        programs: Math.floor(15 * progress),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: Stethoscope,
      title: "Clinical Care",
      description:
        "Primary healthcare services including diagnosis, treatment, and management of acute and chronic conditions.",
      features: ["General consultations", "Diagnostic services", "Treatment plans", "Follow-up care"],
    },
    {
      icon: Users,
      title: "Community Outreach",
      description:
        "Mobile clinics, health education campaigns, and preventive care programs reaching underserved populations.",
      features: ["Mobile clinics", "Health screenings", "Education programs", "Vaccination drives"],
    },
    {
      icon: Heart,
      title: "Maternal & Child Health",
      description: "Prenatal care, safe delivery services, postnatal support, immunization, and pediatric healthcare.",
      features: ["Prenatal care", "Safe delivery", "Immunization", "Child nutrition"],
    },
    {
      icon: Activity,
      title: "Disease Prevention",
      description: "Screening programs, vaccination campaigns, health promotion, and disease surveillance activities.",
      features: ["Health screenings", "Vaccination", "Disease surveillance", "Health promotion"],
    },
    {
      icon: Pill,
      title: "Chronic Disease Management",
      description:
        "Ongoing care for diabetes, hypertension, HIV/AIDS, and other chronic conditions with patient education.",
      features: ["Diabetes care", "Hypertension management", "HIV/AIDS support", "Patient education"],
    },
    {
      icon: Home,
      title: "Facility Partnerships",
      description: "Collaborations with health centers and hospitals to strengthen service delivery and expand reach.",
      features: ["Capacity building", "Equipment support", "Staff training", "Quality improvement"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/african-children-learning-classroom-education-comm.jpg"
              alt="Healthcare in Africa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
          </div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full text-sm font-medium animate-fade-in">
                Delivering Quality Healthcare Across Africa
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">MedWHOLE Health</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in-up delay-200">
                Delivering quality, accessible healthcare to communities across Africa through direct services, outreach
                programs, and strategic partnerships with health facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Healthcare That Reaches Communities</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe quality healthcare should be accessible to everyone, regardless of location or economic
                  status. Our mobile clinics and community health programs bring essential services directly to
                  underserved populations across Africa.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Community-Centered Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        Working with local leaders and health workers to ensure culturally appropriate care
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Evidence-Based Care</h4>
                      <p className="text-sm text-muted-foreground">
                        Following international best practices and WHO guidelines for all interventions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Sustainable Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Building local capacity to ensure long-term health improvements
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

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stats.patients.toLocaleString()}+</div>
                <div className="text-muted-foreground">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stats.communities}+</div>
                <div className="text-muted-foreground">Communities Reached</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stats.programs}+</div>
                <div className="text-muted-foreground">Active Programs</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive healthcare solutions designed to meet the diverse needs of communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border-2 hover:border-primary"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6">
                    <div
                      className={`mb-4 inline-flex p-4 rounded-xl transition-all duration-300 ${hoveredCard === index ? "bg-primary scale-110 shadow-lg" : "bg-primary/10"}`}
                    >
                      <service.icon
                        className={`h-7 w-7 transition-colors duration-300 ${hoveredCard === index ? "text-primary-foreground" : "text-primary"}`}
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div
                      className={`space-y-2 transition-all duration-300 ${hoveredCard === index ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}
                    >
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" strokeWidth={2.5} />
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

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <Activity className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">Integrated Services</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Our holistic approach addresses multiple health needs simultaneously, improving outcomes and
                        efficiency.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={2.5} />
                          Preventive and curative care
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={2.5} />
                          Health education and counseling
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={2.5} />
                          Referral and follow-up systems
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" strokeWidth={2.5} />
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

        {/* Recent Events */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent">Health Events</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Recent Health Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stay informed about our latest health service campaigns, community outreach, and medical initiatives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Event 1 - CPR Training */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video relative overflow-hidden bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/Vdk1NbA-aqE"
                    title="CPR Training - National Assembly"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">Partnership</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>Recent</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    CPR Training for National Assembly & Policymakers
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    In partnership with the National Assembly and Nigerian Cardiac Society, MedWHOLE organized life-saving CPR training for staff and policymakers, equipping them with Basic Life Support (BLS) skills for emergency response.
                  </p>
                  <Button asChild className="w-full">
                    <a href="https://www.youtube.com/watch?v=Vdk1NbA-aqE" target="_blank" rel="noopener noreferrer">
                      Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Event 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent to-accent/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-accent-foreground/80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Campaign</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>October 5-12, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    World Heart Day Campaign
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Community-wide cardiovascular health screening and education program reaching over 2,000 residents.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/health-services/events/world-heart-day-campaign">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Event 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Baby className="h-16 w-16 text-primary-foreground/80" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Maternal Health</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>September 18-25, 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    Maternal & Child Health Week
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Free prenatal checkups, immunizations, and maternal health education across rural communities.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/health-services/events/maternal-child-health-week">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/health-services/events">
                  View All Health Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Health Gallery Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                  Health Gallery
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">MedWHOLE Health in Action</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                See our healthcare teams delivering quality services directly to communities across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/mobile-health-clinic-africa-rural-community.jpg"
                    alt="Mobile health clinic"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Mobile Clinic</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Mobile Health Care</h3>
                  <p className="text-sm text-muted-foreground">Bringing healthcare directly to remote and underserved communities</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-mother-and-child-receiving-healthcare-mate.jpg"
                    alt="Maternal health care"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Maternal Health</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Maternal & Child Health</h3>
                  <p className="text-sm text-muted-foreground">Quality prenatal care and child health care for mothers</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-community-health-workers-in-field.jpg"
                    alt="Community health workers"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-chart-3 text-white">Community Care</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Community Health Workers</h3>
                  <p className="text-sm text-muted-foreground">Dedicated health workers serving rural and remote communities</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-healthcare-workers-providing-medical-care-.jpg"
                    alt="Clinical care delivery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Clinical Care</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Direct Clinical Care</h3>
                  <p className="text-sm text-muted-foreground">Professional healthcare workers providing direct patient care</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-health-workers-vaccination-campaign.jpg"
                    alt="Vaccination campaign"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Prevention</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Vaccination Programs</h3>
                  <p className="text-sm text-muted-foreground">Community-wide vaccination campaigns and preventive care</p>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/african-community-health-education-session.jpg"
                    alt="Health education"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-chart-3 text-white">Education</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">Health Education</h3>
                  <p className="text-sm text-muted-foreground">Community health education and awareness programs</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="border-2 border-accent/20 hover:border-accent">
                <Link href="/gallery?category=Health" className="flex items-center gap-2">
                  View Complete Health Gallery <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Priority Health Areas</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Targeting the most pressing health challenges facing African communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Infectious Diseases</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    HIV/AIDS, TB, malaria, and emerging infectious disease prevention and treatment.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Non-Communicable Diseases</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Diabetes, hypertension, cancer screening, and cardiovascular disease management.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Reproductive Health</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Family planning, maternal health, safe delivery, and adolescent health care.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Nutrition & Wellness</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Malnutrition screening, dietary counseling, and health promotion programs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Health Programs Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
                  Health Programs
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">MedWHOLE Health Programs</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Comprehensive health programs delivering quality care and building healthier communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Heart className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    Maternal & Child Health Program
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprehensive maternal and child health services from prenatal care through pediatric healthcare, focusing on reducing mortality rates.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Activity className="h-4 w-4" />
                    <span>Ongoing</span>
                    <Badge variant="outline" className="ml-2">Clinical</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                    <Link href="/programs/maternal-child-health">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Home className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Community Health Outreach
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mobile clinics and community health worker programs bringing essential healthcare services to underserved populations.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Users className="h-4 w-4" />
                    <span>Multi-site</span>
                    <Badge variant="outline" className="ml-2">Community</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <Link href="/programs/community-health-outreach">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <Pill className="h-8 w-8 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-chart-3 transition-colors">
                    Chronic Disease Management
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprehensive programs for managing diabetes, hypertension, HIV/AIDS and other chronic conditions with patient education.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Stethoscope className="h-4 w-4" />
                    <span>Long-term</span>
                    <Badge variant="outline" className="ml-2">Clinical</Badge>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-chart-3 group-hover:text-white group-hover:border-chart-3 transition-colors">
                    <Link href="/programs/chronic-disease-management">
                      View Program <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/programs">
                  View All Health Programs <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Partner With MedWHOLE Health</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Whether you're a health facility, community organization, or funder, we welcome partnerships to expand
              access to quality healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact#donate">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
