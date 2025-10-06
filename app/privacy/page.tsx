import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Legal</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Privacy Policy</h1>
              <p className="text-lg text-primary-foreground/90">Last updated: March 15, 2024</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8 lg:p-12 prose prose-lg max-w-none">
                  <h2>Introduction</h2>
                  <p>
                    MedWHOLE Alliance ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                    website, use our services, or participate in our programs.
                  </p>

                  <h2>Information We Collect</h2>
                  <h3>Personal Information</h3>
                  <p>We may collect personal information that you voluntarily provide to us, including:</p>
                  <ul>
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Professional information (job title, organization, credentials)</li>
                    <li>Educational background and qualifications</li>
                    <li>Payment information for program fees</li>
                    <li>Application materials (CV, cover letters, references)</li>
                    <li>Program participation data and assessment results</li>
                  </ul>

                  <h3>Automatically Collected Information</h3>
                  <p>When you visit our website, we may automatically collect:</p>
                  <ul>
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>

                  <h2>How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide and manage our training programs and services</li>
                    <li>Process applications and registrations</li>
                    <li>Communicate with you about programs, services, and opportunities</li>
                    <li>Process payments and maintain financial records</li>
                    <li>Improve our website, programs, and services</li>
                    <li>Conduct research and evaluation</li>
                    <li>Comply with legal obligations</li>
                    <li>Send newsletters and marketing communications (with your consent)</li>
                  </ul>

                  <h2>Information Sharing and Disclosure</h2>
                  <p>We may share your information with:</p>
                  <ul>
                    <li>
                      <strong>Service Providers:</strong> Third-party vendors who assist with website hosting, payment
                      processing, email delivery, and other services
                    </li>
                    <li>
                      <strong>Partners:</strong> Organizations we collaborate with for program delivery, with your
                      consent
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                    </li>
                    <li>
                      <strong>Aggregated Data:</strong> De-identified, aggregated data for research and reporting
                      purposes
                    </li>
                  </ul>
                  <p>We do not sell your personal information to third parties.</p>

                  <h2>Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul>
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Staff training on data protection</li>
                  </ul>
                  <p>
                    However, no method of transmission over the internet is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>

                  <h2>Your Rights and Choices</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Object to or restrict certain processing of your information</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Request a copy of your information in a portable format</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us at privacy@medwholealliance.org. We will respond to your
                    request within 30 days.
                  </p>

                  <h2>Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar technologies to enhance your experience on our website. You can control
                    cookies through your browser settings. However, disabling cookies may limit your ability to use
                    certain features of our website.
                  </p>

                  <h2>International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of
                    residence. We ensure appropriate safeguards are in place to protect your information in accordance
                    with this Privacy Policy.
                  </p>

                  <h2>Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                    personal information from children. If you believe we have collected information from a child,
                    please contact us immediately.
                  </p>

                  <h2>Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of significant changes by
                    posting the new policy on our website and updating the "Last Updated" date. Your continued use of
                    our services after changes constitutes acceptance of the updated policy.
                  </p>

                  <h2>Contact Us</h2>
                  <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
                  <p>
                    <strong>MedWHOLE Alliance</strong>
                    <br />
                    Email: privacy@medwholealliance.org
                    <br />
                    Phone: +254 20 1234567
                    <br />
                    Address: Nairobi, Kenya
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
