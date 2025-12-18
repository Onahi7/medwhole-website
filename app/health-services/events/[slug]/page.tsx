"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ArrowLeft, ExternalLink, Download, Heart, Baby, Shield } from "lucide-react"

interface EventPageProps {
  params: {
    slug: string
  }
}

const events: Record<string, any> = {
  "world-heart-day-campaign": {
    title: "World Heart Day Campaign",
    category: "Campaign",
    date: "October 5-12, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "Multiple Communities, Kenya",
    capacity: "2,000+ residents",
    status: "upcoming",
    description: "A week-long cardiovascular health awareness and screening campaign reaching underserved communities across Kenya, providing free heart health checkups and education.",
    objectives: [
      "Provide free cardiovascular health screenings",
      "Educate communities about heart disease prevention",
      "Identify at-risk individuals for follow-up care",
      "Promote healthy lifestyle choices"
    ],
    activities: [
      { day: "Day 1-2", activity: "Community Mobilization and Education Sessions" },
      { day: "Day 3-5", activity: "Free Health Screenings (Blood Pressure, Cholesterol)" },
      { day: "Day 6-7", activity: "Follow-up Consultations and Referrals" }
    ],
    impact: [
      "Over 2,000 individuals screened",
      "500+ educational materials distributed",
      "150 high-risk individuals identified for follow-up",
      "25 local health workers trained"
    ],
    partners: [
      { name: "Kenya Ministry of Health", role: "Policy Support" },
      { name: "Local Community Health Units", role: "Implementation" },
      { name: "Cardiology Associates Kenya", role: "Technical Expertise" }
    ]
  },
  "maternal-child-health-week": {
    title: "Maternal & Child Health Week",
    category: "Maternal Health",
    date: "September 18-25, 2025",
    time: "7:00 AM - 6:00 PM",
    location: "Rural Communities, Uganda",
    capacity: "1,500+ mothers and children",
    status: "completed",
    description: "Comprehensive maternal and child health services delivered to rural communities, including prenatal care, immunizations, and health education for mothers and children.",
    objectives: [
      "Provide essential prenatal and postnatal care",
      "Deliver childhood immunizations",
      "Educate mothers on nutrition and child care",
      "Strengthen community health systems"
    ],
    activities: [
      { day: "Week 1", activity: "Prenatal Care and Maternal Health Education" },
      { day: "Week 1", activity: "Childhood Immunization Campaigns" },
      { day: "Week 2", activity: "Nutrition Education and Growth Monitoring" }
    ],
    impact: [
      "800 pregnant women received prenatal care",
      "1,200 children immunized",
      "500 mothers educated on nutrition",
      "50 community health workers trained"
    ],
    partners: [
      { name: "Uganda Ministry of Health", role: "Coordination" },
      { name: "UNICEF Uganda", role: "Vaccine Supply" },
      { name: "Village Health Teams", role: "Community Mobilization" }
    ]
  },
  "mobile-vaccination-drive": {
    title: "Mobile Vaccination Drive",
    category: "Vaccination",
    date: "August 15-22, 2025",
    time: "6:00 AM - 7:00 PM",
    location: "Remote Villages, Tanzania",
    capacity: "3,000+ individuals",
    status: "completed",
    description: "Door-to-door vaccination campaign using mobile health units to reach remote and underserved populations with essential immunizations.",
    objectives: [
      "Increase vaccination coverage in remote areas",
      "Provide door-to-door vaccination services",
      "Educate communities about vaccine importance",
      "Strengthen cold chain logistics"
    ],
    activities: [
      { day: "Week 1", activity: "Mobile Unit Deployment and Community Entry" },
      { day: "Week 1", activity: "Door-to-Door Vaccination Services" },
      { day: "Week 2", activity: "Follow-up Visits and Data Collection" }
    ],
    impact: [
      "3,200 individuals vaccinated",
      "85% increase in vaccination coverage",
      "15 villages reached",
      "100% cold chain maintenance"
    ],
    partners: [
      { name: "Tanzania Ministry of Health", role: "Permits and Coordination" },
      { name: "WHO Tanzania", role: "Technical Support" },
      { name: "Gavi Alliance", role: "Vaccine Funding" }
    ]
  }
}

export default function HealthEventPage({ params }: EventPageProps) {
  const event = events[params.slug]

  if (!event) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-8">The health event you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/health-services">Back to Health Services</Link>
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'campaign': return <Heart className="h-5 w-5" />
      case 'maternal health': return <Baby className="h-5 w-5" />
      case 'vaccination': return <Shield className="h-5 w-5" />
      default: return <Heart className="h-5 w-5" />
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-accent via-accent/90 to-accent/80 text-accent-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Button asChild variant="outline" className="mb-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link href="/health-services">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Health Services
              </Link>
            </Button>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                {getCategoryIcon(event.category)}
                <Badge className="bg-primary text-primary-foreground">{event.category}</Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">{event.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-accent-foreground/70">Date</p>
                    <p className="font-semibold">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-accent-foreground/70">Time</p>
                    <p className="font-semibold">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-accent-foreground/70">Location</p>
                    <p className="font-semibold">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-accent-foreground/70">Reached</p>
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
                  <h2 className="text-3xl font-bold mb-6">About This Health Event</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {event.description}
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Objectives</h3>
                    <ul className="space-y-3">
                      {event.objectives.map((objective: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-8" />

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Activities</h3>
                    <div className="space-y-4">
                      {event.activities.map((item: any, index: number) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <Badge variant="outline" className="border-accent text-accent">{item.day}</Badge>
                              <span className="font-medium">{item.activity}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Impact Achieved</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.impact.map((impact: string, index: number) => (
                        <Card key={index} className="border-l-4 border-l-accent">
                          <CardContent className="p-6">
                            <p className="font-medium text-accent">{impact}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator className="my-8" />

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Key Partners</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {event.partners.map((partner: any, index: number) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-lg">{partner.name}</h4>
                            <p className="text-muted-foreground">{partner.role}</p>
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
                    <h3 className="font-semibold text-lg mb-4">Event Status</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'} className="bg-accent text-accent-foreground">
                          {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {event.status === 'upcoming' ? (
                        <>
                          <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                            <Link href="/contact">
                              Get Involved
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            <Download className="mr-2 h-4 w-4" />
                            Event Details
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            <Download className="mr-2 h-4 w-4" />
                            Impact Report
                          </Button>
                          <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Photos
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" className="w-full" asChild>
                        <Link href="/contact">Contact Health Team</Link>
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
            <h2 className="text-3xl font-bold text-center mb-12">Related Health Events</h2>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/health-services">View All Health Events</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}