import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, BookOpen, Users, Briefcase, Mail } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "General",
      icon: HelpCircle,
      questions: [
        {
          question: "What is MedWHOLE Alliance?",
          answer:
            "MedWHOLE Alliance is a comprehensive public health organization operating across Africa through three integrated arms: MedWHOLE Consult (technical assistance and advisory services), MedWHOLE Academy (capacity building and training), and MedWHOLE Health (direct health service delivery). We work to strengthen health systems, build capacity, and improve health outcomes across the continent.",
        },
        {
          question: "Where does MedWHOLE Alliance operate?",
          answer:
            "We operate across multiple African countries with offices in Kenya, Ghana, Nigeria, Tanzania, Uganda, and Senegal. Our programs reach communities in over 20 African nations through partnerships with governments, NGOs, and local organizations.",
        },
        {
          question: "How is MedWHOLE Alliance funded?",
          answer:
            "MedWHOLE Alliance is funded through a combination of sources including grants from international donors and foundations, contracts with governments and international organizations, program fees for consult and training services, and partnerships with private sector organizations. We maintain financial transparency and publish annual reports detailing our funding and expenditures.",
        },
        {
          question: "How can my organization partner with MedWHOLE Alliance?",
          answer:
            "We welcome partnerships with organizations that share our commitment to improving health outcomes in Africa. Partnership opportunities include collaborative program implementation, technical assistance arrangements, training and capacity building partnerships, and research collaborations. Please contact us through our website to discuss potential partnership opportunities.",
        },
      ],
    },
    {
      category: "Training Programs",
      icon: BookOpen,
      questions: [
        {
          question: "Who can enroll in MedWHOLE Academy programs?",
          answer:
            "Our programs are designed for public health professionals, healthcare workers, program managers, researchers, and anyone working in health-related fields. Specific prerequisites vary by program and are listed in each program description. We welcome participants from all African countries and beyond.",
        },
        {
          question: "Are the training programs accredited?",
          answer:
            "Yes, MedWHOLE Academy programs are accredited by relevant professional bodies and educational authorities. Participants receive certificates upon successful completion that are recognized across Africa and internationally. Some programs also offer continuing education credits for licensed professionals.",
        },
        {
          question: "What is the format of the training programs?",
          answer:
            "We offer programs in three formats: fully online (accessible from anywhere with internet), hybrid (combination of online learning and in-person workshops), and in-person (intensive workshops at our training centers). The format for each program is clearly indicated in the program description.",
        },
        {
          question: "How much do training programs cost?",
          answer:
            "Program fees vary depending on the duration, format, and content. Fees range from $750 to $1,500 for most programs. We offer scholarships and payment plans to make our programs accessible. Contact us to discuss financial assistance options.",
        },
        {
          question: "Do you offer scholarships or financial assistance?",
          answer:
            "Yes, we offer partial and full scholarships based on financial need and merit. We also provide payment plans and group discounts for organizations enrolling multiple participants. Scholarship applications are reviewed on a rolling basis.",
        },
      ],
    },
    {
      category: "Consulting Services",
      icon: Users,
      questions: [
        {
          question: "What consulting services does MedWHOLE offer?",
          answer:
            "MedWHOLE Consulting provides comprehensive technical assistance including health systems assessments and strengthening, program design and implementation support, monitoring and evaluation services, policy development and analysis, research and evidence generation, and organizational capacity building. We tailor our services to meet specific client needs.",
        },
        {
          question: "How do I request consulting services?",
          answer:
            "To request consulting services, please contact us through our website with details about your organization and the technical assistance you need. Our team will schedule a consultation to discuss your needs, scope of work, timeline, and budget. We then develop a customized proposal for your review.",
        },
        {
          question: "What is the typical timeline for consulting projects?",
          answer:
            "Project timelines vary based on scope and complexity. Short-term technical assistance may be completed in 1-3 months, while comprehensive health systems strengthening projects typically span 1-3 years. We work with clients to develop realistic timelines that meet their needs and constraints.",
        },
        {
          question: "Can MedWHOLE help with grant proposal development?",
          answer:
            "Yes, we provide grant proposal development support including concept note development, full proposal writing, budget development, and proposal review and strengthening. We have a strong track record of helping organizations secure funding from major donors.",
        },
      ],
    },
    {
      category: "Careers",
      icon: Briefcase,
      questions: [
        {
          question: "How do I apply for jobs at MedWHOLE Alliance?",
          answer:
            "Current job openings are posted on our Careers page. To apply, click on the position you're interested in and follow the application instructions. You'll typically need to submit your CV, cover letter, and references through our online application portal.",
        },
        {
          question: "What is the recruitment process like?",
          answer:
            "Our recruitment process typically includes: application review (1-2 weeks), initial screening interview (phone or video), technical interview or assessment, reference checks, and final interview with hiring manager. The entire process usually takes 4-6 weeks from application to offer.",
        },
        {
          question: "Do you offer internships or volunteer opportunities?",
          answer:
            "Yes, we offer internship opportunities for students and recent graduates in public health and related fields. Internships are typically 3-6 months and may be paid or unpaid depending on the position and location. We also have limited volunteer opportunities for specific projects. Check our Careers page for current opportunities.",
        },
        {
          question: "What benefits do MedWHOLE employees receive?",
          answer:
            "We offer competitive compensation packages including health insurance for employees and dependents, professional development opportunities and training, performance bonuses, generous leave policies, flexible working arrangements where possible, and a supportive, mission-driven work environment.",
        },
      ],
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
              <Badge className="mb-4 bg-accent text-accent-foreground">Help Center</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
                Find answers to common questions about our programs, services, and organization
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => {
                const Icon = category.icon
                return (
                  <div key={categoryIndex}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">{category.category}</h2>
                    </div>
                    <Card>
                      <CardContent className="p-6">
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((faq, faqIndex) => (
                            <AccordionItem
                              key={faqIndex}
                              value={`${categoryIndex}-${faqIndex}`}
                              className="border-b last:border-b-0"
                            >
                              <AccordionTrigger className="text-left hover:no-underline py-4">
                                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Can't find the answer you're looking for? Our team is here to help. Reach out to us and we'll get
                    back to you as soon as possible.
                  </p>
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
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
