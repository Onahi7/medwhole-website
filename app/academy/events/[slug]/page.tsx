"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ArrowLeft, ExternalLink, Download } from "lucide-react"

interface EventPageProps {
  params: {
    slug: string
  }
}

const events: Record<string, any> = {
  "public-health-leadership-summit-2025": {
    title: "Public Health Leadership Summit 2025",
    category: "Workshop",
    date: "October 15-17, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Nairobi Convention Centre, Kenya",
    capacity: "300 participants",
    status: "upcoming",
    description: "Join us for the premier public health leadership event in Africa, bringing together health leaders, policymakers, and practitioners to discuss the future of public health leadership on the continent.",
    objectives: [
      "Develop strategic leadership skills for public health challenges",
      "Build networks among African health leaders",
      "Share innovative approaches to health system strengthening",
      "Create actionable plans for community health improvement"
    ],
    agenda: [
      { time: "9:00 - 10:30", session: "Opening Keynote: The Future of Public Health in Africa" },
      { time: "10:45 - 12:15", session: "Leadership in Crisis: Lessons from COVID-19" },
      { time: "14:00 - 15:30", session: "Community-Centered Health Leadership" },
      { time: "15:45 - 17:00", session: "Building Resilient Health Systems" }
    ],
    speakers: [
      { name: "Dr. Amina Hassan", title: "Director of Public Health, WHO Africa" },
      { name: "Prof. James Mwangi", title: "Dean of Public Health, University of Nairobi" },
      { name: "Dr. Sarah Ochieng", title: "Country Director, MedWHOLE Academy" }
    ],
    images: [
      "/events/leadership-summit-2025-1.jpg",
      "/events/leadership-summit-2025-2.jpg",
      "/events/leadership-summit-2025-3.jpg"
    ]
  },
  "epidemiology-masterclass-series": {
    title: "Epidemiology Masterclass Series",
    category: "Training",
    date: "September 22-25, 2025",
    time: "8:00 AM - 6:00 PM",
    location: "MedWHOLE Academy Campus, Kampala",
    capacity: "150 participants",
    status: "completed",
    description: "An intensive four-day masterclass covering advanced epidemiological methods, disease surveillance systems, and outbreak investigation techniques.",
    objectives: [
      "Master advanced epidemiological study designs",
      "Implement effective disease surveillance systems",
      "Conduct comprehensive outbreak investigations",
      "Apply statistical methods in epidemiological analysis"
    ],
    agenda: [
      { time: "Day 1", session: "Epidemiological Study Design and Methods" },
      { time: "Day 2", session: "Biostatistics and Data Analysis" },
      { time: "Day 3", session: "Disease Surveillance Systems" },
      { time: "Day 4", session: "Outbreak Investigation and Response" }
    ],
    speakers: [
      { name: "Dr. Mary Nakato", title: "Chief Epidemiologist, Uganda Ministry of Health" },
      { name: "Prof. David Okello", title: "Professor of Epidemiology, Makerere University" },
      { name: "Dr. Grace Wanjiku", title: "Senior Epidemiologist, MedWHOLE Academy" }
    ],
    images: [
      "/events/epidemiology-masterclass-1.jpg",
      "/events/epidemiology-masterclass-2.jpg",
      "/events/epidemiology-masterclass-3.jpg"
    ]
  },
  "research-methods-grant-writing-workshop": {
    title: "Research Methods & Grant Writing Workshop",
    category: "Conference",
    date: "August 10-12, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Accra International Conference Centre, Ghana",
    capacity: "200 participants",
    status: "completed",
    description: "Comprehensive workshop designed to enhance research capabilities and grant writing skills for public health professionals across Africa.",
    objectives: [
      "Design rigorous research studies",
      "Write competitive grant proposals",
      "Understand funding landscape in Africa",
      "Build collaborative research networks"
    ],
    agenda: [
      { time: "Day 1", session: "Research Design and Methodology" },
      { time: "Day 2", session: "Grant Proposal Writing and Budget Development" },
      { time: "Day 3", session: "Presentation Skills and Networking" }
    ],
    speakers: [
      { name: "Prof. Kwame Asante", title: "Research Director, University of Ghana" },
      { name: "Dr. Fatima Al-Zahra", title: "Program Officer, Bill & Melinda Gates Foundation" },
      { name: "Dr. Michael Osei", title: "Lead Researcher, MedWHOLE Academy" }
    ],
    images: [
      "/events/research-workshop-1.jpg",
      "/events/research-workshop-2.jpg",
      "/events/research-workshop-3.jpg"
    ]
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = events[params.slug]

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">The event you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/academy">Back to Academy</Link>
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Button asChild variant="outline" className="mb-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link href="/academy">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Academy
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-accent text-accent-foreground">{event.category}</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{event.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-primary-foreground/70">Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-primary-foreground/70">Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-primary-foreground/70">Location</p>
                    <p className="font-semibold">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-primary-foreground/70">Capacity</p>
                    <p className="font-semibold">{event.capacity}</p>
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
                  <h2 className="text-3xl font-bold mb-6">About This Event</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {event.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Learning Objectives</h3>
                    <ul className="space-y-3">
                      {event.objectives.map((objective: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-8" />

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Agenda</h3>
                    <div className="space-y-4">
                      {event.agenda.map((item: any, index: number) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <Badge variant="outline">{item.time}</Badge>
                              <span className="font-medium">{item.session}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Featured Speakers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.speakers.map((speaker: any, index: number) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-lg">{speaker.name}</h4>
                            <p className="text-muted-foreground">{speaker.title}</p>
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
                    <h3 className="font-semibold text-lg mb-4">Event Details</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'}>
                          {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {event.status === 'upcoming' ? (
                        <>
                          <Button className="w-full" asChild>
                            <Link href="/contact">
                              Register Now
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download Brochure
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Event Report
                          </Button>
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Photos
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" className="w-full" asChild>
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Events */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Related Academy Events</h2>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/academy">View All Academy Events</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}