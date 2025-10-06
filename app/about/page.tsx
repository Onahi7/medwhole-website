import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Handshake, Lightbulb, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">About MedWHOLE Alliance</h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/95 leading-relaxed">
                A network of competent, character-driven leaders and organizations united by a single purpose: to serve humanity with compassion, accountability, and excellence—catalyzing people-centered transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-10">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Target className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To help individuals live a boundless, fulfilling life through interventions that promote whole health, whole persons, and whole communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-10">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Eye className="h-10 w-10 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transformed communities through individuals and households who have been made whole.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-10">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <Heart className="h-10 w-10 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-chart-3 transition-colors">Our Values</h3>
                  <ul className="text-muted-foreground space-y-2 leading-relaxed">
                    <li>• Prioritize People</li>
                    <li>• Challenge the Status Quo</li>
                    <li>• Catalyze Innovation</li>
                    <li>• Leverage Technology</li>
                    <li>• Optimize Partnerships</li>
                    <li>• Deliver Visions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-primary/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="text-center lg:text-left mb-12">
                  <div className="inline-block mb-4">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                      Our Journey
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-8">Our Story</h2>
                </div>
                <div className="prose prose-lg max-w-none space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    MedWHOLE Alliance for Health and Development was founded with a bold belief: that lasting transformation begins with people. We recognized that wholeness—in health, character, and purpose—is the foundation for thriving individuals, families, and communities.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    What started as a vision to catalyze change has grown into a dynamic network of competent, character-driven leaders and organizations. Together, we support and multiply models of people-centered services that empower individuals to achieve wholeness and become agents of community transformation.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, through our four core programs—Health Promotion & Healthcare, Youth Development, School Child Development, and Entrepreneurship Development—we create pathways to wholeness one person, one family, one community at a time.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/african-community-health-workers-team-collaboratio.jpg"
                    alt="MedWHOLE team working with communities"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Priorities */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Focus Areas
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">What We Do</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Four core programs designed to make wholeness a reality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    Health Promotion & Healthcare
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building resilient, healthy communities through prevention, access to care, and comprehensive health services.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/30">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                    Youth Development
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nurturing the next generation of leaders with skills, values, and purpose to drive community change.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-3/30">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-chart-3" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-chart-3 transition-colors">
                    School Child Development
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Empowering children to thrive academically, socially, and emotionally through holistic education.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    Entrepreneurship Development
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Equipping individuals with tools to create sustainable livelihoods and drive economic growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/30">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Handshake className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                    Strategic Partnerships
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Building collaborations that multiply impact and create sustainable models of transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-3/30">
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                    <Globe className="h-6 w-6 text-chart-3" />
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-chart-3 transition-colors">
                    Community Impact
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Creating measurable transformation one person, one family, one community at a time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Meet Our Team
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our experienced team brings together expertise in public health, clinical care, research, and
                development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: 1, query: "african+male+doctor+professional+portrait" },
                { id: 2, query: "african+female+public+health+professional+portrait" },
                { id: 3, query: "african+male+health+researcher+professional+portrait" },
              ].map((member) => (
                <Card
                  key={member.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="relative w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={`/.jpg?key=mtxs7&height=200&width=200&query=${member.query}`}
                        alt={`Leadership Member ${member.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Leadership Member {member.id}</h4>
                    <p className="text-sm text-accent font-semibold mb-3">Position Title</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Brief bio and expertise description to be added.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
                  Collaboration
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Partners</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We collaborate with leading organizations to amplify our impact
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="group flex items-center justify-center p-8 bg-muted/30 rounded-xl hover:bg-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Handshake className="h-16 w-16 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
