import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowRight, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

const articles = [
  {
    slug: "maternal-health-initiative-launch",
    title: "MedWHOLE Launches New Maternal Health Initiative Across 5 African Countries",
    excerpt:
      "In partnership with regional health ministries, we're implementing comprehensive maternal health programs aimed at reducing maternal mortality by 40% over the next three years.",
    date: "March 15, 2024",
    category: "Program Launch",
    author: "MedWHOLE Communications",
    readTime: "5 min read",
    image: "/african-mother-and-child-receiving-healthcare-mate.jpg",
    content: `
      <p>MedWHOLE Alliance is proud to announce the launch of our most ambitious maternal health initiative to date, spanning five African countries: Kenya, Ghana, Nigeria, Tanzania, and Senegal. This comprehensive program represents a $15 million investment in maternal health infrastructure, training, and service delivery over the next three years.</p>

      <h2>Program Overview</h2>
      <p>The initiative focuses on three key pillars: strengthening health facility capacity, training healthcare workers in emergency obstetric care, and establishing community-based maternal health support systems. Our goal is to reduce maternal mortality by 40% in target regions through evidence-based interventions and sustainable health system improvements.</p>

      <h2>Key Components</h2>
      <p>The program includes upgrading 50 health facilities with essential maternal health equipment, training 2,000 healthcare workers in safe delivery practices and emergency obstetric care, establishing 100 community health worker networks for prenatal and postnatal care, and implementing mobile health technology for remote monitoring and consultation.</p>

      <h2>Partnership Approach</h2>
      <p>This initiative is being implemented in close partnership with national health ministries, local health departments, and community organizations. We believe that sustainable change requires local ownership and leadership, which is why we're working hand-in-hand with government partners to integrate these improvements into existing health systems.</p>

      <h2>Expected Impact</h2>
      <p>Over the three-year period, we expect to directly serve 500,000 pregnant women, reduce maternal mortality by 40% in target areas, train 2,000 healthcare workers in advanced maternal care, and establish sustainable maternal health systems that will continue to benefit communities long after the program concludes.</p>

      <h2>Looking Ahead</h2>
      <p>This initiative builds on MedWHOLE's 15 years of experience in maternal and child health across Africa. We're committed to not just implementing programs, but to building local capacity and creating lasting change. We'll be sharing regular updates on our progress and lessons learned throughout the implementation period.</p>
    `,
    tags: ["Maternal Health", "Program Launch", "Partnership", "Health Systems"],
  },
  {
    slug: "leadership-training-graduates",
    title: "500+ Health Workers Complete Leadership Training Program",
    excerpt:
      "Our flagship leadership program graduates its largest cohort, with participants from 12 African nations ready to lead health system transformation.",
    date: "March 10, 2024",
    category: "Academy",
    author: "Dr. Sarah Mensah",
    readTime: "4 min read",
    image: "/african-health-professionals-graduation-ceremony.jpg",
    content: `
      <p>In a momentous celebration of achievement and potential, MedWHOLE Academy graduated over 500 health professionals from our flagship Public Health Leadership Certificate program. This represents our largest cohort to date, with participants from 12 African countries bringing diverse perspectives and experiences to the program.</p>

      <h2>Program Highlights</h2>
      <p>The six-month intensive program combined online learning with in-person workshops, covering strategic leadership, health systems management, policy development, and team building. Participants engaged in real-world case studies, developed strategic plans for their organizations, and built lasting professional networks across the continent.</p>

      <h2>Graduate Success Stories</h2>
      <p>Among this year's graduates is Dr. Amina Hassan from Tanzania, who used her capstone project to redesign her district's health service delivery model, resulting in a 30% increase in service utilization. Another graduate, John Kamau from Kenya, secured funding to implement a community health worker program based on his leadership training experience.</p>

      <h2>Impact on Health Systems</h2>
      <p>Our research shows that 85% of program graduates report implementing significant changes in their organizations within six months of completion. These leaders are now managing larger teams, influencing policy decisions, and driving innovation in their health systems.</p>

      <h2>Looking Forward</h2>
      <p>With demand for leadership training continuing to grow, we're expanding our program capacity for 2024. Applications are now open for our next cohort, which begins in April. We're particularly encouraging applications from women in health leadership and professionals working in rural and underserved areas.</p>
    `,
    tags: ["Leadership", "Training", "Graduation", "Capacity Building"],
  },
  {
    slug: "community-health-worker-research",
    title: "New Research Published on Community Health Worker Impact",
    excerpt:
      "MedWHOLE research team publishes groundbreaking study showing 35% improvement in health outcomes through community health worker programs.",
    date: "March 5, 2024",
    category: "Research",
    author: "Research Team",
    readTime: "6 min read",
    image: "/african-community-health-workers-in-field.jpg",
    content: `
      <p>MedWHOLE's research team has published a comprehensive study in the Journal of Global Health demonstrating the significant impact of well-trained and supported community health workers (CHWs) on health outcomes in rural African communities. The three-year study, conducted across 150 communities in five countries, provides robust evidence for scaling CHW programs.</p>

      <h2>Study Methodology</h2>
      <p>The randomized controlled trial compared communities with trained and supported CHWs to control communities receiving standard care. We tracked health outcomes across maternal health, child health, infectious disease management, and chronic disease care. The study included over 75,000 participants and was conducted in partnership with national health ministries.</p>

      <h2>Key Findings</h2>
      <p>Communities with CHW programs showed a 35% improvement in overall health outcomes, 45% increase in prenatal care attendance, 40% reduction in childhood malnutrition, 30% improvement in chronic disease management, and 50% increase in health-seeking behavior for acute illnesses.</p>

      <h2>Success Factors</h2>
      <p>Our analysis identified several critical factors for CHW program success: comprehensive initial training (minimum 6 weeks), ongoing supervision and mentorship, integration with formal health system, community selection and support of CHWs, and adequate compensation and recognition.</p>

      <h2>Policy Implications</h2>
      <p>These findings have significant implications for health policy across Africa. We're working with governments to use this evidence to strengthen and expand CHW programs. The study demonstrates that investing in community health workers is not just effective, but cost-effective, with an estimated return of $4 for every $1 invested.</p>

      <h2>Next Steps</h2>
      <p>Building on these findings, MedWHOLE is launching a CHW training and support program in 10 additional countries. We're also developing a CHW training curriculum that can be adapted to different contexts while maintaining the core elements that drive success.</p>
    `,
    tags: ["Research", "Community Health", "Evidence", "Publication"],
  },
  {
    slug: "who-africa-partnership",
    title: "Partnership Announcement: Collaboration with WHO Africa",
    excerpt:
      "MedWHOLE Alliance signs MoU with WHO Africa Regional Office to strengthen health systems across the continent.",
    date: "February 28, 2024",
    category: "Partnership",
    author: "MedWHOLE Communications",
    readTime: "3 min read",
    image: "/partnership-signing-ceremony-african-health-offici.jpg",
    content: `
      <p>MedWHOLE Alliance is honored to announce a strategic partnership with the World Health Organization Regional Office for Africa (WHO AFRO). This collaboration will leverage our combined expertise and resources to strengthen health systems across the African continent.</p>

      <h2>Partnership Scope</h2>
      <p>The Memorandum of Understanding (MoU) establishes a framework for collaboration in several key areas: health workforce development and training, health systems strengthening initiatives, disease surveillance and outbreak response, and research and knowledge sharing.</p>

      <h2>Joint Initiatives</h2>
      <p>Under this partnership, we'll be launching several joint initiatives including a pan-African health leadership program, technical assistance for health system strengthening in 15 countries, collaborative research on effective health interventions, and knowledge exchange platforms for health professionals.</p>

      <h2>Statements from Leadership</h2>
      <p>Dr. Matshidiso Moeti, WHO Regional Director for Africa, stated: "This partnership brings together WHO's normative guidance and technical expertise with MedWHOLE's proven track record in implementation and capacity building. Together, we can accelerate progress toward universal health coverage in Africa."</p>

      <p>MedWHOLE's Executive Director added: "We're thrilled to formalize this partnership with WHO Africa. For years, we've been working toward the same goals – healthier communities and stronger health systems. This collaboration will allow us to scale our impact and reach more communities across the continent."</p>

      <h2>Expected Impact</h2>
      <p>Through this partnership, we aim to train 10,000 health professionals over the next five years, support health system strengthening in 15 countries, contribute to regional disease surveillance capacity, and generate evidence to inform health policy across Africa.</p>
    `,
    tags: ["Partnership", "WHO", "Collaboration", "Health Systems"],
  },
  {
    slug: "mobile-clinics-milestone",
    title: "Mobile Health Clinics Reach 50,000 Patients Milestone",
    excerpt:
        "Our mobile health care has now provided care to over 50,000 patients in remote and underserved communities.",
    date: "February 20, 2024",
    category: "Health",
    author: "Dr. James Okonkwo",
    readTime: "5 min read",
    image: "/mobile-health-clinic-africa-rural-community.jpg",
    content: `
      <p>MedWHOLE Health is proud to announce that our mobile health clinic program has reached a significant milestone: providing care to over 50,000 patients in remote and underserved communities across Africa. This achievement represents three years of dedicated service delivery and continuous program improvement.</p>

      <h2>Program Overview</h2>
      <p>Our mobile clinic program operates 15 fully-equipped vehicles across six countries, bringing essential health care directly to communities that lack access to health facilities. Each clinic is staffed by qualified healthcare professionals and equipped to provide primary care, maternal and child health care, chronic disease management, and health education.</p>

      <h2>Services Provided</h2>
      <p>Over the past three years, we've provided comprehensive primary care consultations, prenatal and postnatal care for over 8,000 mothers, childhood vaccinations for 12,000 children, chronic disease management for 5,000 patients, and health education reaching 30,000 community members.</p>

      <h2>Patient Impact Stories</h2>
      <p>Mama Grace, a 65-year-old grandmother from rural Kenya, shares: "Before the mobile clinic started coming to our village, I had to travel 50 kilometers to get my blood pressure medication. Now, the clinic comes every month, and I can manage my condition properly. They've saved my life."</p>

      <h2>Challenges and Solutions</h2>
      <p>Operating mobile clinics in remote areas comes with unique challenges including difficult terrain and road conditions, limited communication infrastructure, supply chain management for medications and equipment, and ensuring continuity of care. We've addressed these through strategic partnerships with local communities, investment in robust vehicles and equipment, development of offline-capable health records systems, and integration with nearby health facilities for referrals.</p>

      <h2>Expansion Plans</h2>
      <p>Building on this success, we're planning to expand the program to reach an additional 30,000 patients annually. We're adding five new mobile clinics in 2024 and introducing specialized services including dental care and mental health support.</p>
    `,
    tags: ["Health", "Mobile Clinics", "Access to Care", "Rural Health"],
  },
  {
    slug: "grant-writing-workshop-series",
    title: "Grant Writing Workshop Series Begins Next Month",
    excerpt:
      "Join our comprehensive grant writing workshop series designed to help organizations secure funding for health programs.",
    date: "February 15, 2024",
    category: "Events",
    author: "MedWHOLE Academy",
    readTime: "2 min read",
    image: "/workshop-training-session-african-professionals.jpg",
    content: `
      <p>MedWHOLE Academy is excited to announce our upcoming Grant Writing Workshop Series, designed to equip health professionals and organizations with the skills needed to secure funding for their programs. The series begins in March 2024 and will run for eight weeks.</p>

      <h2>Workshop Structure</h2>
      <p>The series consists of eight interactive sessions covering understanding the grant landscape, developing compelling project proposals, budget development and justification, writing persuasive narratives, building partnerships and collaborations, proposal review and revision, and grant management and reporting.</p>

      <h2>Who Should Attend</h2>
      <p>This workshop series is ideal for health program managers seeking funding, NGO staff responsible for fundraising, researchers applying for research grants, and health professionals starting new initiatives.</p>

      <h2>Learning Approach</h2>
      <p>Participants will engage in hands-on exercises, review real grant proposals, receive feedback from experienced grant reviewers, and develop their own grant proposal throughout the series. By the end, each participant will have a draft proposal ready for submission.</p>

      <h2>Expert Facilitators</h2>
      <p>The workshops will be led by Dr. Ngozi Adebayo, who has secured over $5 million in research funding, and Prof. Samuel Osei, who has trained 500+ researchers in successful grant writing. Both bring decades of experience in grant writing and review.</p>

      <h2>Registration Information</h2>
      <p>The workshop series begins March 20, 2024, and runs every Wednesday for eight weeks. Sessions are held online from 2:00-4:00 PM EAT. Early bird registration is available until March 1st. Limited spaces available – register now to secure your spot!</p>
    `,
    tags: ["Events", "Training", "Grant Writing", "Capacity Building"],
  },
]

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Back to News
              </Link>
              <Badge className="mb-4 bg-accent text-accent-foreground">{article.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{article.title}</h1>
              <div className="flex flex-wrap gap-4 text-primary-foreground/90">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Featured Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-xl">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Body */}
                <div
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">TAGS</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-muted hover:bg-muted/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">SHARE THIS ARTICLE</h3>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                      <Share2 className="h-4 w-4" />
                      Copy Link
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Author Card */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">About the Author</h3>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <User className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">{article.author}</p>
                          <p className="text-sm text-muted-foreground">
                            Contributing writer for MedWHOLE Alliance communications
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-3">Stay Updated</h3>
                      <p className="text-sm mb-4 text-primary-foreground/90">
                        Subscribe to our newsletter for the latest news and updates.
                      </p>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="/contact">Subscribe Now</Link>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Related Articles */}
                  {relatedArticles.length > 0 && (
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold mb-4">Related Articles</h3>
                        <div className="space-y-4">
                          {relatedArticles.map((related) => (
                            <Link
                              key={related.slug}
                              href={`/news/${related.slug}`}
                              className="block group hover:bg-muted/50 p-3 rounded-lg transition-colors -mx-3"
                            >
                              <Badge variant="secondary" className="mb-2 text-xs">
                                {related.category}
                              </Badge>
                              <h4 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {related.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">{related.date}</p>
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More News CTA */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Explore More News</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Stay informed about our latest programs, research, and impact across Africa.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <Link href="/news">
                  View All News
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
