import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Shield, 
  Heart, 
  Stethoscope, 
  Award,
  Activity,
  Pill,
  ExternalLink,
  AlertCircle,
  Clock,
  Zap
} from "lucide-react"

const BASE_URL = "https://www.about-dr-ashwani-dhar.com"

// Deep SEO-optimized metadata for One87 Plus / 880 PLUS
export const metadata: Metadata = {
  title: "One87 Plus (880 PLUS) | Aceclofenac Paracetamol Pain Relief | TrPharma by Dr. Ashwani Dhar",
  description: "One87 Plus (880 PLUS) - Pain relief tablet (Aceclofenac 100mg + Paracetamol 325mg) by TrPharma, founded by Dr. Ashwani Dhar MD DMI. For arthritis, musculoskeletal pain, dental pain, post-operative pain.",
  keywords: [
    "One87 Plus", "One87 Plus tablet", "One87 Plus pain relief", "One87 Plus TrPharma",
    "880 PLUS", "880PLUS", "880 PLUS tablet", "880 PLUS pain relief", "880 PLUS TrPharma",
    "Aceclofenac Paracetamol", "Aceclofenac 100mg", "Paracetamol 325mg", "NSAID India",
    "arthritis pain relief", "musculoskeletal pain", "dental pain medicine", "post operative pain",
    "TrPharma One87", "Dr Ashwani Dhar One87", "TrPharma 880 PLUS", "pain relief tablet India"
  ],
  openGraph: {
    title: "One87 Plus (880 PLUS) - Pain Relief Tablet by Dr. Ashwani Dhar | TrPharma",
    description: "One87 Plus (Aceclofenac 100mg + Paracetamol 325mg) - Effective pain relief by TrPharma. Founded by Dr. Ashwani Dhar MD DMI.",
    type: "website",
    url: `${BASE_URL}/products/one87-plus`,
    siteName: "Dr. Ashwani Dhar - One87 Plus",
    images: [
      {
        url: `${BASE_URL}/images/kashmox-625.webp`,
        width: 1200,
        height: 1015,
        alt: "One87 Plus (880 PLUS) Pain Relief by TrPharma, Dr. Ashwani Dhar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "One87 Plus (880 PLUS) Pain Relief | TrPharma by Dr. Ashwani Dhar",
    description: "One87 Plus - Aceclofenac + Paracetamol pain relief tablet by TrPharma"
  },
  alternates: {
    canonical: `${BASE_URL}/products/one87-plus`
  }
}

// Comprehensive JSON-LD Schema for One87 Plus Product Page
const one87ProductSchema = {
  "@context": "https://schema.org",
  "@type": "Drug",
  "@id": `${BASE_URL}/#product-one87-plus`,
  "name": "One87 Plus",
  "alternateName": ["One87 Plus Tablet", "One87 Plus Pain Relief", "880 PLUS", "880PLUS", "Aceclofenac Paracetamol TrPharma", "One87 medicine"],
  "description": "One87 Plus (also known as 880 PLUS) is a pain relief tablet containing Aceclofenac 100mg and Paracetamol 325mg. Developed under the medical leadership of Dr. Ashwani Dhar MD DMI. Manufactured by TrPharma for effective relief from arthritis, musculoskeletal pain, dental pain, and post-operative pain.",
  "drugClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug) + Analgesic",
  "activeIngredient": "Aceclofenac 100mg + Paracetamol 325mg",
  "dosageForm": "Film-coated Tablet",
  "administrationRoute": "Oral",
  "isProprietary": true,
  "proprietaryName": "One87 Plus",
  "mechanismOfAction": "Aceclofenac inhibits cyclooxygenase enzymes (COX-1/COX-2) reducing prostaglandin synthesis. Paracetamol provides additional analgesic and antipyretic effects through central mechanisms.",
  "prescribingInfo": "Adult dosage: One tablet twice daily or as directed by physician. Take with or after food.",
  "manufacturer": {
    "@type": "Organization",
    "@id": `${BASE_URL}/#org-trpharma`,
    "name": "TrPharma - A Division of ThinkRoman Ventures LLP",
    "url": "https://pharma.thinkroman.com"
  },
  "url": `${BASE_URL}/products/one87-plus`,
  "sameAs": [
    "https://pharma.thinkroman.com/products#one87plus",
    "https://pharmacy.thinkroman.com"
  ]
}

// Brand Schema
const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "name": "One87 Plus",
  "alternateName": ["880 PLUS", "One87"],
  "description": "One87 Plus is TrPharma's pain relief brand, developed under the medical leadership of Dr. Ashwani Dhar MD DMI",
  "manufacturer": {
    "@type": "Organization",
    "name": "TrPharma",
    "founder": {
      "@type": "Person",
      "name": "Dr. Ashwani Dhar"
    }
  }
}

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Dr. Ashwani Dhar",
      "item": BASE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "TrPharma",
      "item": `${BASE_URL}/trpharma`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Products",
      "item": `${BASE_URL}/products`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "One87 Plus (880 PLUS)",
      "item": `${BASE_URL}/products/one87-plus`
    }
  ]
}

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is One87 Plus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One87 Plus is a pain relief tablet containing Aceclofenac 100mg and Paracetamol 325mg. It is manufactured by TrPharma, a pharmaceutical division founded by Dr. Ashwani Dhar MD DMI. One87 Plus is used for arthritis pain, musculoskeletal pain, dental pain, and post-operative pain relief."
      }
    },
    {
      "@type": "Question",
      "name": "What is 880 PLUS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "880 PLUS is another name for One87 Plus, the pain relief medication by TrPharma. It contains Aceclofenac 100mg and Paracetamol 325mg. Both names refer to the same product manufactured under Dr. Ashwani Dhar's medical leadership."
      }
    },
    {
      "@type": "Question",
      "name": "What is One87 Plus used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One87 Plus (880 PLUS) is indicated for: Rheumatoid arthritis, Osteoarthritis, Ankylosing spondylitis, Musculoskeletal pain, Dental pain, Post-operative pain, and general pain and inflammation management."
      }
    },
    {
      "@type": "Question",
      "name": "Who makes One87 Plus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One87 Plus is manufactured by TrPharma, a doctor-led pharmaceutical division of ThinkRoman Ventures LLP. TrPharma was founded by Dr. Ashwani Dhar MD DMI, a physician and healthcare entrepreneur."
      }
    }
  ]
}

export default function One87PlusProductPage() {
  const indications = [
    { name: "Rheumatoid Arthritis", description: "Joint pain and inflammation" },
    { name: "Osteoarthritis", description: "Degenerative joint disease" },
    { name: "Ankylosing Spondylitis", description: "Spinal arthritis and stiffness" },
    { name: "Musculoskeletal Pain", description: "Muscle and bone pain, sprains" },
    { name: "Dental Pain", description: "Toothache and dental procedures" },
    { name: "Post-Operative Pain", description: "Surgical recovery pain management" }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Dual Action Formula",
      description: "Combines NSAID anti-inflammatory action of Aceclofenac with the analgesic power of Paracetamol for comprehensive pain relief"
    },
    {
      icon: Activity,
      title: "Fast Pain Relief",
      description: "Rapid onset of action provides quick relief from acute and chronic pain conditions"
    },
    {
      icon: Shield,
      title: "Better Tolerability",
      description: "Aceclofenac has favorable gastrointestinal profile compared to other NSAIDs"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Manufactured in certified facilities following strict quality control protocols"
    },
    {
      icon: Heart,
      title: "Reduces Inflammation",
      description: "Effective anti-inflammatory action helps reduce swelling and joint stiffness"
    },
    {
      icon: Stethoscope,
      title: "Doctor-Developed",
      description: "Formulated under the medical guidance of Dr. Ashwani Dhar MD DMI for optimal efficacy"
    }
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(one87ProductSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-[#04231c]/85 text-white backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">AD</span>
              </div>
              <span className="font-semibold hidden sm:inline">Dr. Ashwani Dhar</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/trpharma" className="text-sm text-white/60 hover:text-signal-bright transition-colors">
                TrPharma
              </Link>
              <Link href="/products" className="text-sm text-white/60 hover:text-signal-bright transition-colors">
                All Products
              </Link>
              <Button asChild size="sm" className="gap-2">
                <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                  Buy Now <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-[#03211b] text-white/60 border-b border-white/10">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="hover:text-signal-bright transition-colors">Dr. Ashwani Dhar</Link>
              <span>/</span>
              <Link href="/trpharma" className="hover:text-signal-bright transition-colors">TrPharma</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-signal-bright transition-colors">Products</Link>
              <span>/</span>
              <span className="text-white font-medium">One87 Plus</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="dark-hero py-12 md:py-20">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Visual */}
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-3xl blur-3xl" />
                  <Card className="relative bg-gradient-to-br from-orange-500 to-red-600 p-12 rounded-2xl shadow-2xl">
                    <CardContent className="p-0 text-center text-white">
                      <div className="text-6xl font-black mb-4">One87</div>
                      <div className="text-3xl font-bold mb-2">PLUS</div>
                      <div className="text-sm opacity-80 mb-6">Also known as 880 PLUS</div>
                      <div className="bg-white/20 rounded-lg p-4 text-sm">
                        <div>Aceclofenac 100mg</div>
                        <div>Paracetamol 325mg</div>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Pain Relief
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2">
                <Link 
                  href="/trpharma" 
                  className="inline-flex items-center gap-2 text-signal-bright hover:underline text-sm mb-4"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to TrPharma
                </Link>
                
                <div className="inline-flex items-center gap-2 bg-white/10 text-orange-300 border border-white/15 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Zap className="h-4 w-4" />
                  Pain Relief Specialist
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                  <span className="text-orange-400">One87</span> Plus
                </h1>
                
                <p className="text-xl text-white/75 mb-2">
                  Also known as <strong className="text-orange-400">880 PLUS</strong>
                </p>
                
                <p className="text-lg text-white/65 mb-6 leading-relaxed">
                  <strong className="text-white">One87 Plus</strong> is TrPharma&apos;s powerful pain relief solution, developed under the medical leadership of <Link href="/" className="text-signal-bright hover:underline font-semibold">Dr. Ashwani Dhar MD DMI</Link>. Combining Aceclofenac with Paracetamol for effective dual-action pain management.
                </p>

                {/* Composition Card */}
                <Card className="bg-card border-orange-500/20 mb-6">
                  <CardContent className="p-6">
                    <h2 className="font-bold mb-4 flex items-center gap-2">
                      <Pill className="h-5 w-5 text-orange-500" />
                      Composition (Per Tablet)
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Aceclofenac</span>
                          <span className="text-muted-foreground"> - </span>
                          <strong className="text-orange-500">100 mg</strong>
                          <span className="text-sm text-muted-foreground block">NSAID for inflammation and pain</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Paracetamol (Acetaminophen)</span>
                          <span className="text-muted-foreground"> - </span>
                          <strong className="text-orange-500">325 mg</strong>
                          <span className="text-sm text-muted-foreground block">Analgesic and antipyretic</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white gap-2">
                    <Link href="https://pharma.thinkroman.com/products#one87plus" target="_blank" rel="noopener noreferrer">
                      Order One87 Plus <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/products">
                      View All Products
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Indications Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-orange-500">Therapeutic</span> Indications
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                One87 Plus (880 PLUS) is indicated for pain and inflammation management in various conditions
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {indications.map((indication, index) => (
                <Card key={index} className="bg-background border-border hover:border-orange-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{indication.name}</h3>
                        <p className="text-sm text-muted-foreground">{indication.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-orange-500">One87 Plus</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Developed under the medical leadership of Dr. Ashwani Dhar for effective pain management
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dosage Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Dosage &amp; <span className="text-orange-500">Administration</span>
                </h2>
              </header>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-orange-500" />
                      </div>
                      <h3 className="font-bold text-lg">Recommended Dosage</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      One tablet twice daily or as directed by physician.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-500" />
                        Take with or after food
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-500" />
                        Do not exceed recommended dose
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-orange-500" />
                        Use for shortest duration needed
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                      <h3 className="font-bold text-lg">Precautions</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        Consult physician if you have GI, cardiac, or renal conditions
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        Avoid during pregnancy unless advised by doctor
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        Do not combine with other NSAIDs or paracetamol products
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Attribution Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-orange-500/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card border-orange-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold text-white">AD</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">Dr. Ashwani Dhar</h3>
                      <p className="text-sm text-white/80">MD, DMI</p>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <h2 className="text-2xl font-bold mb-4">Formulated for Effective Relief</h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        One87 Plus was developed under the medical leadership of <strong>Dr. Ashwani Dhar MD DMI</strong>, Founder &amp; CEO of TrPharma. Understanding that pain affects quality of life, Dr. Dhar formulated One87 Plus to provide effective, reliable pain relief.
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        The dual-action combination of Aceclofenac and Paracetamol was chosen for its proven efficacy and tolerability profile, ensuring patients get the relief they need.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild variant="outline" className="gap-2">
                          <Link href="/">
                            About Dr. Ashwani Dhar <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="gap-2">
                          <Link href="/trpharma">
                            About TrPharma <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get One87 Plus Today
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Effective dual-action pain relief. Doctor-developed. Affordable pricing. Order now from TrPharma.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-white/90 gap-2">
                <Link href="https://pharma.thinkroman.com/products#one87plus" target="_blank" rel="noopener noreferrer">
                  Order Now <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Link href="/products/kashmox">
                  View KashMOX 625 <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

{/* Footer */}
        <SiteFooter />
      </main>
    </>
  )
}
