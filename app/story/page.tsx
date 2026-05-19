import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Quote,
  Stethoscope, 
  Building2,
  Lightbulb,
  Heart,
  Target,
  GraduationCap,
  Briefcase,
  MapPin
} from "lucide-react"

const BASE_URL = "https://www.about-dr-ashwani-dhar.com"

export const metadata: Metadata = {
  title: "Dr. Ashwani Dhar's Story | From Physician to Healthcare Entrepreneur | Founder of Kairos & TrPharma",
  description: "The journey of Dr. Ashwani Dhar MD DMI - From practicing physician to healthcare innovator. Learn about his vision for Kairos R&D Solutions, TrPharma, and ThinkRoman Ventures. First-person account of founding KashMOX 625 and One87 Plus.",
  keywords: [
    "Dr Ashwani Dhar story", "Dr Ashwani Dhar journey", "Ashwani Dhar biography",
    "Dr Ashwani Dhar founder", "Dr Ashwani Dhar entrepreneur", "Dr Ashwani Dhar vision",
    "Kairos founder story", "TrPharma founder story", "ThinkRoman Ventures founder",
    "KashMOX 625 creator", "healthcare entrepreneur India", "physician entrepreneur"
  ],
  openGraph: {
    title: "Dr. Ashwani Dhar's Story - From Physician to Healthcare Entrepreneur",
    description: "The journey of founding Kairos R&D Solutions, TrPharma (KashMOX 625), and ThinkRoman Ventures.",
    type: "profile",
    url: `${BASE_URL}/story`,
    siteName: "Dr. Ashwani Dhar"
  },
  alternates: {
    canonical: `${BASE_URL}/story`
  }
}

// Article Schema for the story
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Dr. Ashwani Dhar's Journey: From Physician to Healthcare Entrepreneur",
  "alternativeHeadline": "The Story Behind Kairos R&D Solutions, TrPharma, and ThinkRoman Ventures",
  "author": {
    "@type": "Person",
    "@id": `${BASE_URL}/#person-dr-ashwani-dhar`,
    "name": "Dr. Ashwani Dhar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Dr. Ashwani Dhar",
    "url": BASE_URL
  },
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "description": "First-person account of Dr. Ashwani Dhar's journey from practicing physician to founding Kairos R&D Solutions, TrPharma (KashMOX 625, One87 Plus), and ThinkRoman Ventures.",
  "mainEntityOfPage": `${BASE_URL}/story`,
  "about": [
    { "@id": `${BASE_URL}/#person-dr-ashwani-dhar` },
    { "@id": `${BASE_URL}/#org-kairos` },
    { "@id": `${BASE_URL}/#org-trpharma` }
  ]
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Dr. Ashwani Dhar", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "My Story", "item": `${BASE_URL}/story` }
  ]
}

export default function FounderStoryPage() {
  const milestones = [
    {
      year: "Medical Training",
      icon: GraduationCap,
      title: "Becoming a Physician",
      description: "Completed MD and DMI, developing a deep understanding of patient care and healthcare systems."
    },
    {
      year: "Corporate Healthcare",
      icon: Briefcase,
      title: "Cerner/Oracle Health",
      description: "Served as Senior Physician Executive and Chief Medical Informatics Officer, bridging clinical practice with health IT innovation."
    },
    {
      year: "ThinkRoman",
      icon: Lightbulb,
      title: "ThinkRoman Ventures",
      description: "Founded ThinkRoman Ventures as a healthcare innovation ecosystem to bring multiple healthcare solutions to life."
    },
    {
      year: "Kairos",
      icon: Target,
      title: "Kairos R&D Solutions",
      description: "Established Kairos as a specialized CRO to make clinical research more accessible and efficient."
    },
    {
      year: "TrPharma",
      icon: Heart,
      title: "TrPharma & KashMOX",
      description: "Launched TrPharma with KashMOX 625, bringing quality medications directly to patients."
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">AD</span>
              </div>
              <span className="font-semibold hidden sm:inline">Dr. Ashwani Dhar</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">Profile</Link>
              <Link href="/kairos" className="text-sm text-muted-foreground hover:text-foreground">Kairos R&D</Link>
              <Link href="/trpharma" className="text-sm text-muted-foreground hover:text-foreground">TrPharma</Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">Products</Link>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Dr. Ashwani Dhar</Link>
              <span>/</span>
              <span className="text-foreground font-medium">My Story</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="w-40 h-40 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                  <span className="text-5xl font-bold text-primary-foreground">AD</span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <Stethoscope className="h-4 w-4" />
                    In My Own Words
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                    My Journey: From <span className="text-primary">Physician</span> to Healthcare Entrepreneur
                  </h1>
                  <p className="text-xl text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Dr. Ashwani Dhar, MD, DMI | Fremont, California
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First-Person Narrative */}
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              
              {/* Opening Quote */}
              <Card className="bg-primary/5 border-primary/20 not-prose mb-12">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-primary mb-4" />
                  <blockquote className="text-2xl font-medium text-foreground leading-relaxed mb-4">
                    &ldquo;I became a physician to help patients. I became an entrepreneur to help millions more.&rdquo;
                  </blockquote>
                  <cite className="text-primary font-semibold">- Dr. Ashwani Dhar</cite>
                </CardContent>
              </Card>

              {/* The Why */}
              <section className="not-prose mb-12">
                <h2 className="text-3xl font-bold mb-6">Why I Started This Journey</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    As a practicing physician, I saw firsthand the gaps in our healthcare system. Patients struggled to access quality medications at affordable prices. Clinical trials were slow and inefficient. The disconnect between clinical care and healthcare innovation was striking.
                  </p>
                  <p>
                    My time at <strong className="text-foreground">Cerner/Oracle Health</strong> as Chief Medical Informatics Officer taught me how technology could transform healthcare delivery. But I wanted to do more than advise from the sidelines. I wanted to build solutions that would directly impact patient lives.
                  </p>
                  <p>
                    That&apos;s why I founded <strong className="text-foreground">ThinkRoman Ventures</strong> - to create a platform where my clinical experience could fuel healthcare innovation. It wasn&apos;t about starting one company; it was about building an ecosystem where multiple healthcare solutions could flourish.
                  </p>
                </div>
              </section>

              {/* Kairos Story */}
              <section className="not-prose mb-12">
                <Card className="bg-card border-accent/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Target className="h-6 w-6 text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold">The Birth of Kairos R&D Solutions</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Clinical research is the backbone of medical progress, yet the process was plagued by inefficiencies. Patient recruitment took forever. Documentation was a nightmare. Smaller sponsors struggled to compete.
                      </p>
                      <p>
                        <Link href="/kairos" className="text-accent hover:underline font-semibold">Kairos R&D Solutions</Link> was my answer. We built a Clinical Research Organization that leverages AI for patient matching, streamlined document management through <strong>Kairodox</strong>, and made research accessible to sponsors of all sizes.
                      </p>
                      <p>
                        The name &ldquo;Kairos&rdquo; comes from the Greek word for the opportune moment - the perfect time to act. In clinical research, timing is everything. We help our partners seize that moment.
                      </p>
                    </div>
                    <Button asChild className="mt-6 gap-2">
                      <Link href="/kairos">
                        Learn About Kairos <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </section>

              {/* TrPharma Story */}
              <section className="not-prose mb-12">
                <Card className="bg-card border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Creating TrPharma and KashMOX 625</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        In my years of practice, I prescribed antibiotics countless times. I knew which ones worked best and which ones patients struggled to afford. The gap between quality and accessibility troubled me.
                      </p>
                      <p>
                        <Link href="/trpharma" className="text-primary hover:underline font-semibold">TrPharma</Link> was born from this frustration. I wanted to create a pharmaceutical division that combined clinical knowledge with manufacturing excellence - medicines developed by someone who actually prescribed them.
                      </p>
                      <p>
                        <Link href="/products/kashmox" className="text-accent hover:underline font-semibold">KashMOX 625</Link> became our flagship product - a WHO-GMP certified Amoxicillin-Clavulanate antibiotic that offers the same efficacy as premium brands at an accessible price. When I developed its formulation, I drew on years of clinical experience to ensure it met the highest standards.
                      </p>
                      <p>
                        We followed with <Link href="/products/one87-plus" className="text-orange-500 hover:underline font-semibold">One87 Plus (880 PLUS)</Link> for pain management and <Link href="/products/kashcal-plus" className="text-green-500 hover:underline font-semibold">KashCAL PLUS</Link> for bone health - each developed with the same physician-first approach.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <Button asChild className="gap-2">
                        <Link href="/trpharma">
                          About TrPharma <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="gap-2">
                        <Link href="/products">
                          View Products <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Philosophy */}
              <section className="not-prose mb-12">
                <h2 className="text-3xl font-bold mb-6">My Philosophy: Doctor-Led Innovation</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I believe healthcare innovation should be led by people who understand patient care at its core. Not just from business cases or market research, but from years of sitting with patients, understanding their fears, and witnessing their recoveries.
                  </p>
                  <p>
                    Every decision at ThinkRoman Ventures - whether it&apos;s a clinical trial protocol at Kairos or a drug formulation at TrPharma - is filtered through a simple question: <strong className="text-foreground">&ldquo;Would I prescribe this to my own family?&rdquo;</strong>
                  </p>
                  <p>
                    This isn&apos;t just business philosophy; it&apos;s a commitment to the patients who trust us with their health.
                  </p>
                </div>
              </section>

              {/* Closing Quote */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 not-prose">
                <CardContent className="p-8 text-center">
                  <Quote className="h-10 w-10 text-primary mx-auto mb-4" />
                  <blockquote className="text-2xl font-medium text-foreground leading-relaxed mb-4">
                    &ldquo;The future of healthcare isn&apos;t just about new technologies - it&apos;s about new approaches that put patients first. That&apos;s what drives everything I build.&rdquo;
                  </blockquote>
                  <cite className="text-primary font-semibold">- Dr. Ashwani Dhar, MD, DMI</cite>
                  <p className="text-sm text-muted-foreground mt-2">Founder & CEO, ThinkRoman Ventures | Kairos R&D Solutions | TrPharma</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>

        {/* Timeline Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The <span className="text-primary">Journey</span> So Far
              </h2>
            </header>
            
            <div className="max-w-3xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <milestone.icon className="h-6 w-6 text-primary" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-sm font-semibold text-primary mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Whether you&apos;re interested in clinical research collaboration, pharmaceutical distribution, or healthcare innovation - I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                <Link href="https://www.linkedin.com/in/ashdhar" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Link href="/">
                  View Full Profile <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Dr. Ashwani Dhar MD DMI. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/" className="text-muted-foreground hover:text-foreground">Profile</Link>
                <Link href="/kairos" className="text-muted-foreground hover:text-foreground">Kairos R&D</Link>
                <Link href="/trpharma" className="text-muted-foreground hover:text-foreground">TrPharma</Link>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
