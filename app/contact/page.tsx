import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact-form"
import { PartnershipForm } from "@/components/partnership-form"
import { DonationSection } from "@/components/donation-section"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <PageHero
          title="Get in Touch"
          description="Whether you're interested in our programs, seeking partnership opportunities, or want to support our work, we'd love to hear from you."
          badge={{
            icon: <Mail className="h-5 w-5 text-accent" />,
            text: "Contact Us",
          }}
        />

        {/* Contact Information */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">info@medwhole.org</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">+XXX XXX XXX XXX</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-muted-foreground">Africa</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section id="partner" className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Partner With Us</h2>
              <p className="text-center text-muted-foreground mb-8 leading-relaxed">
                Interested in collaborating with MedWHOLE Alliance? Fill out the form below and we'll get back to you
                soon.
              </p>
              <PartnershipForm />
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section id="donate" className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <DonationSection />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
