import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Handshake, Lightbulb, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <PageHero
          title="We are MedWHOLE Alliance"
          description="A registered non-profit organization, a faith-driven organization dedicated to helping individuals live boundless and fulfilling lives through interventions that promote whole health, whole persons, and whole communities."
          badge={{
            icon: <Users className="h-5 w-5 text-accent" />,
            text: "About Us",
          }}
          backgroundImage="/african-community-health-workers-team-collaboratio.jpg"
        />

        {/* Mission, Vision, Values */}
        <section className="py-12 sm:py-16 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Target className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Helping individuals live a boundless, fulfilling life through interventions that promote whole health, whole persons, and whole communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-accent transition-colors">Our Vision</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Transformed communities through individuals and households who have been made whole.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-chart-3/50">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-chart-3/10 group-hover:bg-chart-3 group-hover:scale-110 transition-all duration-300">
                    <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-chart-3 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-chart-3 transition-colors">Our Core Values</h3>
                  <ul className="text-sm sm:text-base text-muted-foreground space-y-1.5 sm:space-y-2 leading-relaxed">
                    <li>• Integrity: Upholding the highest ethical standards in all our actions.</li>
                    <li>• Collaboration: partnering with individuals and organizations to achieve shared goals.</li>
                    <li>• Excellence: Striving for quality and measurable impact in everything we do.</li>
                    <li>• Innovation: Developing and teaching creative ways of solving health problems.</li>
                    <li>• Compassion: Serving with empathy and mutual respect.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-br from-muted/30 via-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
              <div>
                <div className="text-center lg:text-left mb-8 sm:mb-12">
                  <div className="inline-block mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      Our Journey
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Our Story: From Vision to Impact</h2>
                </div>
                <div className="prose prose-lg max-w-none space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Founded in 2021, MedWHOLE began as a response to poor child literacy level. We operate across Nigeria with a growing footprint in the Federal Capital Territory (FCT). Its integrated model unites healthcare delivery, education, nutrition, capacity building, and public health consulting, all aimed at transforming individuals and communities toward wholeness.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/african-community-health-workers-team-collaboratio.jpg"
                    alt="MedWHOLE team working with communities"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-64 sm:h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-8 -left-8 w-48 h-48 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Priorities */}
        <section className="py-12 sm:py-16 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  Focus Areas
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Our Integrated Approach</h2>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                We believe that sustainable change is built on four interconnected pillars— health, education, nutrition, and leadership. Our integrated approach transforms individuals and communities toward wholeness. We cater for medical needs, educate the young, boost nutrition, and raise competent leaders all for community impact.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    Health Promotion & Healthcare
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Building resilient, healthy communities through prevention, access to care, and comprehensive health services.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                    Youth Development
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Nurturing the next generation of leaders with skills, values, and purpose to drive community change.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-3/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                    <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-chart-3" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-chart-3 transition-colors">
                    School Child Development
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Empowering children to thrive academically, socially, and emotionally through holistic education.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    Entrepreneurship Development
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Equipping individuals with tools to create sustainable livelihoods and drive economic growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Handshake className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                    Strategic Partnerships
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Building collaborations that multiply impact and create sustainable models of transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-chart-3/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-3 sm:mb-4 inline-flex p-2.5 sm:p-3 rounded-lg bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-chart-3" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-chart-3 transition-colors">
                    Community Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Creating measurable transformation one person, one family, one community at a time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  Meet Our Team
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Meet Our Leadership</h2>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                Our team is composed of passionate and experienced professionals from diverse backgrounds, united by a common commitment to our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6 inline-flex p-4 sm:p-6 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Users className="h-12 w-12 sm:h-16 sm:w-16 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-primary transition-colors">Prof. Chima Onoka</h3>
                  <p className="text-base sm:text-lg text-accent font-semibold mb-3 sm:mb-4">Founder & CEO</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Leading MedWHOLE Alliance's vision of transforming communities through whole health, whole persons, and whole communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6 inline-flex p-4 sm:p-6 rounded-full bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Users className="h-12 w-12 sm:h-16 sm:w-16 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-accent transition-colors">Dr. Ferdinand Ogbaji</h3>
                  <p className="text-base sm:text-lg text-primary font-semibold mb-3 sm:mb-4">Director of Programmes</p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Overseeing program implementation and ensuring measurable impact across all MedWHOLE initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 sm:py-16 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                  Collaboration
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">Our Valued Partners</h2>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                We collaborate with a local organizations, international NGOs, and government agencies. You are part of our success story, thank you for sharing our vision!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="group flex items-center justify-center p-6 sm:p-8 bg-muted/30 rounded-xl hover:bg-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Handshake className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
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
