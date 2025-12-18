import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground">Legal</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Terms of Service</h1>
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
                  <h2>Agreement to Terms</h2>
                  <p>
                    By accessing or using the MedWHOLE Alliance website and services, you agree to be bound by these
                    Terms of Service and all applicable laws and regulations. If you do not agree with any of these
                    terms, you are prohibited from using or accessing our services.
                  </p>

                  <h2>Use of Services</h2>
                  <h3>Eligibility</h3>
                  <p>
                    You must be at least 18 years old to use our services. By using our services, you represent and
                    warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                  </p>

                  <h3>Account Registration</h3>
                  <p>To access certain services, you may need to create an account. You agree to:</p>
                  <ul>
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your information as necessary</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>

                  <h3>Acceptable Use</h3>
                  <p>You agree not to:</p>
                  <ul>
                    <li>Use our services for any unlawful purpose</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful code or malware</li>
                    <li>Interfere with or disrupt our services</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Impersonate any person or entity</li>
                  </ul>

                  <h2>Training Programs and Services</h2>
                  <h3>Enrollment and Fees</h3>
                  <p>
                    Enrollment in training programs requires payment of applicable fees. All fees are stated in US
                    Dollars and must be paid in full before program commencement unless alternative arrangements have
                    been made. Fees are non-refundable except as specified in our refund policy.
                  </p>

                  <h3>Refund Policy</h3>
                  <ul>
                    <li>Full refund if cancellation occurs more than 30 days before program start</li>
                    <li>50% refund if cancellation occurs 15-30 days before program start</li>
                    <li>No refund for cancellations less than 15 days before program start</li>
                    <li>No refund after program commencement</li>
                  </ul>
                  <p>
                    We reserve the right to cancel programs due to insufficient enrollment or other circumstances. In
                    such cases, participants will receive a full refund or the option to transfer to another program.
                  </p>

                  <h3>Program Completion and Certification</h3>
                  <p>
                    Certificates are awarded upon successful completion of program requirements, including attendance,
                    assignments, and assessments. We reserve the right to withhold certificates if requirements are not
                    met or if there are violations of our code of conduct.
                  </p>

                  <h2>Intellectual Property</h2>
                  <h3>Our Content</h3>
                  <p>
                    All content on our website and in our programs, including text, graphics, logos, images, videos, and
                    software, is the property of MedWHOLE Alliance or our licensors and is protected by copyright,
                    trademark, and other intellectual property laws.
                  </p>

                  <h3>Limited License</h3>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to access and use our services for
                    personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative
                    works without our express written permission.
                  </p>

                  <h3>User Content</h3>
                  <p>
                    By submitting content to our services (such as assignments, forum posts, or feedback), you grant us
                    a worldwide, royalty-free license to use, reproduce, and display such content for the purposes of
                    providing and improving our services.
                  </p>

                  <h2>Consult Services</h2>
                  <p>
                    Consult services are provided under separate agreements that specify scope of work, deliverables,
                    timelines, and fees. These Terms of Service apply to all consult engagements unless explicitly
                    superseded by a written consult agreement.
                  </p>

                  <h2>Disclaimers and Limitations of Liability</h2>
                  <h3>Service Availability</h3>
                  <p>
                    We strive to maintain continuous availability of our services but do not guarantee uninterrupted
                    access. We may suspend or terminate services for maintenance, updates, or other reasons without
                    liability.
                  </p>

                  <h3>Disclaimer of Warranties</h3>
                  <p>
                    Our services are provided "as is" and "as available" without warranties of any kind, either express
                    or implied, including but not limited to warranties of merchantability, fitness for a particular
                    purpose, or non-infringement.
                  </p>

                  <h3>Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by law, MedWHOLE Alliance shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages arising from your use of our services, even
                    if we have been advised of the possibility of such damages.
                  </p>

                  <h2>Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless MedWHOLE Alliance, its officers, directors, employees, and
                    agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising
                    from your use of our services or violation of these Terms.
                  </p>

                  <h2>Governing Law and Dispute Resolution</h2>
                  <p>
                    These Terms are governed by the laws of Kenya. Any disputes arising from these Terms or your use of
                    our services shall be resolved through good faith negotiations. If negotiations fail, disputes shall
                    be submitted to binding arbitration in Nairobi, Kenya.
                  </p>

                  <h2>Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of significant changes
                    by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use
                    of our services after changes constitutes acceptance of the modified Terms.
                  </p>

                  <h2>Termination</h2>
                  <p>
                    We may terminate or suspend your access to our services immediately, without prior notice, for any
                    reason, including breach of these Terms. Upon termination, your right to use our services will
                    immediately cease.
                  </p>

                  <h2>Severability</h2>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be
                    limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in
                    full force and effect.
                  </p>

                  <h2>Contact Information</h2>
                  <p>For questions about these Terms of Service, please contact us at:</p>
                  <p>
                    <strong>MedWHOLE Alliance</strong>
                    <br />
                    Email: legal@medwholealliance.org
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
