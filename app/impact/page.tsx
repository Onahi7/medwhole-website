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
      name: "Dr. Amina Hassan",
      role: "District Health Officer",
      location: "Kenya",
      quote:
        "The leadership training from MedWHOLE Academy transformed how I manage my team. We've seen a 40% improvement in service delivery metrics since implementing what I learned.",
      program: "Public Health Leadership Certificate",
    },
    {
      name: "James Osei",
      role: "Community Health Worker",
      location: "Ghana",
      quote:
        "Through MedWHOLE's community health program, I've been able to reach over 500 families with essential health care. The training and support have been invaluable.",
      program: "Community Health Training",
    },
    {
      name: "Dr. Fatima Diallo",
      role: "Research Coordinator",
      location: "Senegal",
      quote:
        "MedWHOLE Consult helped us secure our first major research grant. Their expertise in grant writing and proposal development was exceptional.",
      program: "Grant Writing Support",
    },
  ]

  const successStories = [
    {
      title: "Reducing Maternal Mortality in Rural Uganda",
      location: "Gulu District, Uganda",
      date: "2023",
      image: "/african-mother-and-child-receiving-healthcare-mate.jpg",
      description:
        "Through our maternal health program, we trained 50 midwives and established 10 birthing centers, resulting in a 45% reduction in maternal mortality over 18 months.",
      impact: [
        "50 midwives trained",
        "10 birthing centers established",
        "45% reduction in maternal mortality",
        "2,000+ safe deliveries",
      ],
    },
    {
      title: "Strengthening Disease Surveillance Systems",
      location: "Lagos State, Nigeria",
      date: "2023",
      image: "/african-healthcare-workers-providing-medical-care-.jpg",
      description:
        "Our consult team worked with the state health ministry to implement a comprehensive disease surveillance system, improving outbreak detection and response times.",
      impact: [
        "Real-time disease monitoring",
        "50% faster outbreak response",
        "200+ health workers trained",
        "5 million population covered",
      ],
    },
    {
      title: "Building Public Health Leadership Capacity",
      location: "Multi-country Program",
      date: "2022-2024",
      image: "/african-children-learning-classroom-education-comm.jpg",
      description:
        "Over 500 public health professionals from 12 African countries completed our leadership program, now leading health initiatives in their communities.",
      impact: ["500+ graduates", "12 countries", "85% promotion rate", "30+ new health programs launched"],
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
              <Badge className="mb-4 bg-accent text-accent-foreground">Our Impact</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Transforming Lives Across Africa</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                Real stories of impact from communities, health workers, and organizations we've partnered with
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Professionals Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">100K+</div>
                <div className="text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Partner Organizations</div>
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
              {successStories.map((story, index) => (
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
                        {story.impact.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
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
