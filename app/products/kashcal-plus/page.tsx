import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  Shield, 
  Heart, 
  Stethoscope, 
  Award,
  Bone,
  Sun,
  ExternalLink,
  AlertCircle,
  Clock
} from "lucide-react"

const BASE_URL = "https://www.about-dr-ashwani-dhar.com"

export const metadata: Metadata = {
  title: "KashCAL PLUS | Calcium Vitamin D3 Supplement | TrPharma by Dr. Ashwani Dhar",
  description: "KashCAL PLUS - Bone health supplement (Calcium + Vitamin D3) by TrPharma, founded by Dr. Ashwani Dhar MD DMI. For osteoporosis prevention, bone strength, and overall bone health.",
  keywords: [
    "KashCAL PLUS", "KashCAL", "KashCAL tablet", "KashCAL calcium", "KashCAL vitamin D",
    "KashCAL TrPharma", "KashCAL bone health", "calcium supplement India",
    "vitamin D3 supplement", "osteoporosis prevention", "bone strength supplement",
    "TrPharma KashCAL", "Dr Ashwani Dhar KashCAL", "calcium vitamin D tablet"
  ],
  openGraph: {
    title: "KashCAL PLUS - Calcium Vitamin D3 Supplement by Dr. Ashwani Dhar | TrPharma",
    description: "KashCAL PLUS (Calcium + Vitamin D3) - Bone health supplement by TrPharma. Founded by Dr. Ashwani Dhar MD DMI.",
    type: "website",
    url: `${BASE_URL}/products/kashcal-plus`,
    siteName: "Dr. Ashwani Dhar - KashCAL PLUS"
  },
  alternates: {
    canonical: `${BASE_URL}/products/kashcal-plus`
  }
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Drug",
  "@id": `${BASE_URL}/#product-kashcal-plus`,
  "name": "KashCAL PLUS",
  "alternateName": ["KashCAL", "KashCAL PLUS Tablet", "Calcium Vitamin D TrPharma"],
  "description": "KashCAL PLUS is a bone health supplement containing Calcium and Vitamin D3. Manufactured by TrPharma under the leadership of Dr. Ashwani Dhar MD DMI. For osteoporosis prevention and bone strength.",
  "drugClass": "Dietary Supplement",
  "activeIngredient": "Calcium, Vitamin D3",
  "dosageForm": "Tablet",
  "administrationRoute": "Oral",
  "manufacturer": {
    "@type": "Organization",
    "@id": `${BASE_URL}/#org-trpharma`,
    "name": "TrPharma"
  },
  "url": `${BASE_URL}/products/kashcal-plus`
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Dr. Ashwani Dhar", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "TrPharma", "item": `${BASE_URL}/trpharma` },
    { "@type": "ListItem", "position": 3, "name": "Products", "item": `${BASE_URL}/products` },
    { "@type": "ListItem", "position": 4, "name": "KashCAL PLUS", "item": `${BASE_URL}/products/kashcal-plus` }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is KashCAL PLUS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashCAL PLUS is a bone health supplement containing Calcium and Vitamin D3. It is manufactured by TrPharma, founded by Dr. Ashwani Dhar MD DMI. Used for osteoporosis prevention, bone strength, and overall bone health."
      }
    },
    {
      "@type": "Question",
      "name": "Who should take KashCAL PLUS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashCAL PLUS is recommended for adults at risk of calcium deficiency, postmenopausal women, elderly individuals, and those with low vitamin D levels. Always consult your physician before starting any supplement."
      }
    }
  ]
}

export default function KashCALPlusPage() {
  const benefits = [
    { icon: Bone, title: "Strong Bones", description: "Calcium is essential for maintaining bone density and strength" },
    { icon: Sun, title: "Vitamin D3", description: "Enhances calcium absorption and supports immune function" },
    { icon: Shield, title: "Osteoporosis Prevention", description: "Helps prevent bone loss and reduces fracture risk" },
    { icon: Heart, title: "Overall Health", description: "Supports muscle function, nerve transmission, and heart health" },
    { icon: Award, title: "Quality Assured", description: "Manufactured in certified facilities by TrPharma" },
    { icon: Stethoscope, title: "Doctor-Developed", description: "Formulated under Dr. Ashwani Dhar's medical guidance" }
  ]

  const indications = [
    "Calcium deficiency", "Osteoporosis prevention", "Postmenopausal bone health",
    "Vitamin D deficiency", "Bone fracture recovery", "General bone health maintenance"
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              <Link href="/trpharma" className="text-sm text-muted-foreground hover:text-foreground">TrPharma</Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">All Products</Link>
              <Button asChild size="sm" className="gap-2">
                <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                  Buy Now <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Dr. Ashwani Dhar</Link>
              <span>/</span>
              <Link href="/trpharma" className="hover:text-foreground">TrPharma</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-foreground">Products</Link>
              <span>/</span>
              <span className="text-foreground font-medium">KashCAL PLUS</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-green-500/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Visual */}
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-teal-500/20 rounded-3xl blur-3xl" />
                  <Card className="relative bg-gradient-to-br from-green-500 to-teal-600 p-12 rounded-2xl shadow-2xl">
                    <CardContent className="p-0 text-center text-white">
                      <Bone className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <div className="text-5xl font-black mb-2">KashCAL</div>
                      <div className="text-2xl font-bold mb-4">PLUS</div>
                      <div className="bg-white/20 rounded-lg p-4 text-sm">
                        <div>Calcium + Vitamin D3</div>
                        <div className="text-xs opacity-80 mt-1">Bone Health Supplement</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2">
                <Link href="/trpharma" className="inline-flex items-center gap-2 text-primary hover:underline text-sm mb-4">
                  <ArrowLeft className="h-4 w-4" /> Back to TrPharma
                </Link>
                
                <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Bone className="h-4 w-4" />
                  Bone Health Specialist
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-green-500">KashCAL</span> PLUS
                </h1>
                
                <p className="text-xl text-muted-foreground mb-2">
                  Calcium &amp; Vitamin D3 Supplement
                </p>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  <strong>KashCAL PLUS</strong> is TrPharma&apos;s comprehensive bone health solution, developed under the medical leadership of <Link href="/" className="text-primary hover:underline font-semibold">Dr. Ashwani Dhar MD DMI</Link>. Essential nutrients for strong bones and overall health.
                </p>

                <Card className="bg-card border-green-500/20 mb-6">
                  <CardContent className="p-6">
                    <h2 className="font-bold mb-4 flex items-center gap-2">
                      <Sun className="h-5 w-5 text-green-500" />
                      Key Ingredients
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Calcium</span>
                          <span className="text-sm text-muted-foreground block">Essential mineral for bone strength</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Vitamin D3 (Cholecalciferol)</span>
                          <span className="text-sm text-muted-foreground block">Enhances calcium absorption</span>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2">
                    <Link href="https://pharma.thinkroman.com/products#kashcalplus" target="_blank" rel="noopener noreferrer">
                      Order KashCAL PLUS <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link href="/products">View All Products</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-green-500">KashCAL PLUS</span>
              </h2>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card border-border hover:border-green-500/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Indications */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-green-500">Recommended</span> For
              </h2>
            </header>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {indications.map((indication, index) => (
                <div key={index} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{indication}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Attribution */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-green-500/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card border-green-500/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold text-white">AD</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">Dr. Ashwani Dhar</h3>
                      <p className="text-sm text-white/80">MD, DMI</p>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <h2 className="text-2xl font-bold mb-4">Developed for Bone Health</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        KashCAL PLUS was developed under the medical leadership of <strong>Dr. Ashwani Dhar MD DMI</strong>, Founder &amp; CEO of TrPharma. Understanding the critical importance of bone health, especially for aging populations, Dr. Dhar formulated KashCAL PLUS with the optimal combination of Calcium and Vitamin D3.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button asChild variant="outline" className="gap-2">
                          <Link href="/">About Dr. Ashwani Dhar <ArrowRight className="h-4 w-4" /></Link>
                        </Button>
                        <Button asChild variant="outline" className="gap-2">
                          <Link href="/trpharma">About TrPharma <ArrowRight className="h-4 w-4" /></Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-green-500 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get KashCAL PLUS Today</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Support your bone health with doctor-developed, quality-assured supplements from TrPharma.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-white/90 gap-2">
                <Link href="https://pharma.thinkroman.com/products#kashcalplus" target="_blank" rel="noopener noreferrer">
                  Order Now <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Link href="/products/kashmox">View KashMOX 625 <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} TrPharma - A Division of ThinkRoman Ventures LLP. Founded by Dr. Ashwani Dhar.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/" className="text-muted-foreground hover:text-foreground">Dr. Ashwani Dhar</Link>
                <Link href="/trpharma" className="text-muted-foreground hover:text-foreground">TrPharma</Link>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">All Products</Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
