"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Quote, MapPin, Calendar } from "lucide-react"

export default function ImpactPage() {
  const testimonials = [
    {
      name: "Hephzibah",
      role: "JAMB Candidate",
      location: "Nigeria",
      quote:
        "I was a senior secondary student who struggled academically with no resources for JAMB preparation. After joining MedWHOLE's WAEC/JAMB tutorial, I scored 298 in JAMB and I'm currently pursuing a career in medicine.",
      program: "Exam Coaching (WAEC & JAMB)",
    },
    {
      name: "Three Fatherless Children",
      role: "Scholarship Recipients",
      location: "Nigeria",
      quote:
        "Before MedWHOLE, we were living in classrooms with no home or hope for education. MedWHOLE rented secured, safe housing and placed all three of us on full scholarship. Now all 3 of us are safe, enrolled in school, and thriving under mentorship and discipleship.",
      program: "Back-to-School Scholarship Program",
    },
    {
      name: "Alice",
      role: "Nutrition Support Recipient",
      location: "Nigeria",
      quote:
        "I was severely malnourished and lethargic, barely able to move around. MedWHOLE enrolled me in the nutrition support program where I received daily meals and supplements. Now I'm healthy, active, and thriving in school.",
      program: "Health & Nutrition Support",
    },
  ]

  const successStories: any[] = []
  // Success stories should be fetched from the database via admin panel
  // Example structure:
  // {
  //   title: string,
  //   location: string,
  //   date: string,
  //   image: string,
  //   description: string,
  //   impact: string[]
  // }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Our Impact</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Transforming Lives Across Nigeria</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                Real stories of impact from communities, children, families, and organizations we've partnered with.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Professionals Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Nigerian States</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">2,000+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how our programs are making a difference in communities across Africa
              </p>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {successStories.length > 0 ? (
                successStories.map((story, index) => (
                  <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                    >
                      <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <img
                          src={story.image || "/placeholder.svg"}
                          alt={story.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {story.location}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {story.date}
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{story.title}</h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{story.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {story.impact.map((item: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="border-2 border-dashed">
                  <CardContent className="p-12 text-center">
                    <div className="max-w-md mx-auto">
                      <div className="mb-4 inline-flex p-4 rounded-full bg-muted">
                        <MapPin className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Impact Stories Coming Soon</h3>
                      <p className="text-muted-foreground">
                        Success stories and impact reports will be added here.
                        <br />
                        <span className="text-sm">Manage impact stories from the admin panel.</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">What People Say</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hear from the health professionals and organizations we've worked with
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </div>
                      <Badge variant="secondary" className="mt-3 bg-primary/10 text-primary text-xs">
                        {testimonial.program}
                      </Badge>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Be Part of Our Impact Story</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether through partnership, training, or support, join us in transforming health outcomes across Africa
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Partner With Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact#donate">Support Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
