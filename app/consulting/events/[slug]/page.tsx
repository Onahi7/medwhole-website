"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ArrowLeft, ExternalLink, Download, Target, TrendingUp, LineChart, Settings } from "lucide-react"

interface EventPageProps {
  params: {
    slug: string
  }
}

const events: Record<string, any> = {
  "health-ministry-strategic-planning": {
    title: "Health Ministry Strategic Planning",
    category: "Strategic Planning",
    date: "September 2025",
    duration: "6 months",
    location: "Ministry of Health, Rwanda",
    scope: "National Level",
    status: "ongoing",
    description: "Comprehensive strategic planning engagement with the Rwanda Ministry of Health to develop a robust 2025-2030 health sector strategic plan, focusing on universal health coverage and health system strengthening.",
    objectives: [
      "Develop comprehensive 2025-2030 health sector strategic plan",
      "Align health priorities with national development goals",
      "Strengthen health system governance structures",
      "Establish monitoring and evaluation frameworks"
    ],
    phases: [
      { phase: "Phase 1", activity: "Situation Analysis and Stakeholder Mapping", timeline: "Month 1-2" },
      { phase: "Phase 2", activity: "Strategic Framework Development", timeline: "Month 3-4" },
      { phase: "Phase 3", activity: "Implementation Planning and M&E Design", timeline: "Month 5-6" }
    ],
    deliverables: [
      "Comprehensive Health Sector Strategic Plan 2025-2030",
      "Implementation roadmap with timeline and milestones",
      "Monitoring & evaluation framework and indicators",
      "Capacity building plan for ministry staff"
    ],
    team: [
      { name: "Dr. Patricia Uwimana", role: "Lead Strategic Planning Consultant" },
      { name: "Prof. Emmanuel Hakizimana", role: "Health Systems Specialist" },
      { name: "Ms. Grace Mukamana", role: "M&E Framework Designer" }
    ]
  },
  "ngo-capacity-building-program": {
    title: "NGO Capacity Building Program",
    category: "Capacity Building",
    date: "August 2025",
    duration: "12 months",
    location: "East Africa Region",
    scope: "15 Health NGOs",
    status: "completed",
    description: "Comprehensive organizational strengthening program targeting 15 health-focused NGOs across East Africa, focusing on governance, financial management, program design, and sustainability.",
    objectives: [
      "Strengthen organizational governance and leadership",
      "Improve financial management and sustainability",
      "Enhance program design and implementation capacity",
      "Build monitoring, evaluation, and learning systems"
    ],
    phases: [
      { phase: "Phase 1", activity: "Organizational Assessments", timeline: "Month 1-3" },
      { phase: "Phase 2", activity: "Capacity Building Workshops", timeline: "Month 4-9" },
      { phase: "Phase 3", activity: "Mentorship and Follow-up Support", timeline: "Month 10-12" }
    ],
    deliverables: [
      "Individual organizational capacity assessments",
      "Customized capacity building plans for each NGO",
      "Training modules on governance, finance, and M&E",
      "Peer learning network and sustainability plan"
    ],
    team: [
      { name: "Ms. Fatima Abdullahi", role: "Lead Capacity Building Specialist" },
      { name: "Mr. John Kiprotich", role: "Financial Management Expert" },
      { name: "Dr. Esther Mwangi", role: "Organizational Development Consultant" }
    ]
  },
  "regional-me-system-development": {
    title: "Regional M&E System Development",
    category: "M&E Framework",
    date: "July 2025",
    duration: "9 months",
    location: "West Africa Region",
    scope: "Regional Health Programs",
    status: "completed",
    description: "Design and implementation of a unified monitoring and evaluation system for regional health programs across West Africa, enabling data-driven decision making and improved program effectiveness.",
    objectives: [
      "Design comprehensive M&E framework for regional programs",
      "Establish data collection and management systems",
      "Build M&E capacity among implementing partners",
      "Create performance dashboards and reporting systems"
    ],
    phases: [
      { phase: "Phase 1", activity: "M&E Framework Design and Indicator Development", timeline: "Month 1-3" },
      { phase: "Phase 2", activity: "System Development and Testing", timeline: "Month 4-6" },
      { phase: "Phase 3", activity: "Implementation and Capacity Building", timeline: "Month 7-9" }
    ],
    deliverables: [
      "Comprehensive M&E framework with indicators",
      "Data collection tools and protocols",
      "Performance dashboards and reporting templates",
      "M&E capacity building materials and training"
    ],
    team: [
      { name: "Dr. Amadou Diallo", role: "Lead M&E Systems Designer" },
      { name: "Ms. Aïssata Traoré", role: "Data Systems Specialist" },
      { name: "Mr. Kwaku Asante", role: "Capacity Building Coordinator" }
    ]
  }
}

export default function ConsultingEventPage({ params }: EventPageProps) {
  const event = events[params.slug]

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The consulting project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/consulting">Back to Consulting</Link>
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'strategic planning': return <Target className="h-5 w-5" />
      case 'capacity building': return <TrendingUp className="h-5 w-5" />
      case 'm&e framework': return <LineChart className="h-5 w-5" />
      default: return <Settings className="h-5 w-5" />
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-chart-3 via-chart-3/90 to-chart-3/80 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Button asChild variant="outline" className="mb-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link href="/consulting">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Consulting
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                {getCategoryIcon(event.category)}
                <Badge className="bg-accent text-accent-foreground">{event.category}</Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{event.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-white/70">Start Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-white/70">Duration</p>
                    <p className="font-semibold">{event.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-white/70">Location</p>
                    <p className="font-semibold">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-white/70">Scope</p>
                    <p className="font-semibold">{event.scope}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {event.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Project Objectives</h3>
                    <ul className="space-y-3">
                      {event.objectives.map((objective: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-8" />

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Implementation Phases</h3>
                    <div className="space-y-4">
                      {event.phases.map((item: any, index: number) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                              <Badge variant="outline" className="border-chart-3 text-chart-3 w-fit">{item.phase}</Badge>
                              <div className="flex-1">
                                <p className="font-medium">{item.activity}</p>
                                <p className="text-sm text-muted-foreground mt-1">{item.timeline}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Key Deliverables</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {event.deliverables.map((deliverable: string, index: number) => (
                        <Card key={index} className="border-l-4 border-l-chart-3">
                          <CardContent className="p-6">
                            <p className="font-medium text-chart-3">{deliverable}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Project Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.team.map((member: any, index: number) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-lg">{member.name}</h4>
                            <p className="text-muted-foreground">{member.role}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <Card className="sticky top-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Project Status</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge variant={event.status === 'ongoing' ? 'default' : 'secondary'} className="bg-chart-3 text-white">
                          {event.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {event.status === 'ongoing' ? (
                        <>
                          <Button className="w-full bg-chart-3 hover:bg-chart-3/90" asChild>
                            <Link href="/contact">
                              Discuss Similar Projects
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full border-chart-3 text-chart-3 hover:bg-chart-3 hover:text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Project Brief
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" className="w-full border-chart-3 text-chart-3 hover:bg-chart-3 hover:text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Case Study
                          </Button>
                          <Button variant="outline" className="w-full border-chart-3 text-chart-3 hover:bg-chart-3 hover:text-white">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Results & Impact
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" className="w-full" asChild>
                        <Link href="/contact">Contact Consulting Team</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Related Consulting Projects</h2>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-chart-3 hover:bg-chart-3/90 text-white">
                <Link href="/consulting">View All Consulting Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}