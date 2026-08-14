import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { 
  ArrowRight, 
  Pill,
  Zap,
  Bone,
  ExternalLink,
  Stethoscope,
  Award,
  Shield
} from "lucide-react"

const BASE_URL = "https://www.about-dr-ashwani-dhar.com"

export const metadata: Metadata = {
  title: "TrPharma Products | KashMOX 625, One87 Plus, KashCAL PLUS | Dr. Ashwani Dhar",
  description: "TrPharma products by Dr. Ashwani Dhar MD DMI: KashMOX 625 antibiotic, One87 Plus (880 PLUS) pain relief, KashCAL PLUS bone health. WHO-GMP certified, doctor-developed medications.",
  keywords: [
    "TrPharma products", "TrPharma medicines", "TrPharma tablets",
    "KashMOX 625", "KashMOX antibiotic", "One87 Plus", "880 PLUS", "KashCAL PLUS",
    "Dr Ashwani Dhar products", "TrPharma Dr Ashwani Dhar", "TrPharma India",
    "pharma.thinkroman.com", "pharmacy.thinkroman.com"
  ],
  openGraph: {
    title: "TrPharma Products - KashMOX 625, One87 Plus, KashCAL PLUS | Dr. Ashwani Dhar",
    description: "Doctor-developed pharmaceutical products by TrPharma. Founded by Dr. Ashwani Dhar MD DMI.",
    type: "website",
    url: `${BASE_URL}/products`,
    siteName: "Dr. Ashwani Dhar - TrPharma Products"
  },
  alternates: {
    canonical: `${BASE_URL}/products`
  }
}

const productsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://pharma.thinkroman.com/#organization",
      "name": "TrPharma",
      "url": "https://pharma.thinkroman.com",
      "description": "Doctor-led pharmaceutical division of ThinkRoman Ventures, manufacturing WHO-GMP certified medications",
      "founder": {
        "@type": "Person",
        "name": "Dr. Ashwani Dhar",
        "url": "https://www.about-dr-ashwani-dhar.com/",
        "jobTitle": "Founder & CEO",
        "sameAs": [
          "https://www.linkedin.com/in/ashdhar",
          "https://www.about-dr-ashwani-dhar.com"
        ]
      }
    },
    {
      "@type": "Product",
      "name": "KashMOX 625",
      "description": "Amoxicillin and Potassium Clavulanate Tablets IP by TrPharma. Broad-spectrum antibiotic developed under the medical direction of Dr. Ashwani Dhar.",
      "brand": {
        "@type": "Brand",
        "name": "TrPharma"
      },
      "manufacturer": {
        "@id": "https://pharma.thinkroman.com/#organization"
      },
      "url": `${BASE_URL}/products/kashmox`
    },
    {
      "@type": "Product",
      "name": "One87 Plus",
      "alternateName": "880 PLUS",
      "description": "Aceclofenac and Paracetamol pain relief tablets by TrPharma. Developed under the medical direction of Dr. Ashwani Dhar.",
      "brand": {
        "@type": "Brand",
        "name": "TrPharma"
      },
      "manufacturer": {
        "@id": "https://pharma.thinkroman.com/#organization"
      },
      "url": `${BASE_URL}/products/one87-plus`
    },
    {
      "@type": "Product",
      "name": "KashCAL PLUS",
      "description": "Calcium and Vitamin D3 bone health supplement by TrPharma. Developed under the medical direction of Dr. Ashwani Dhar.",
      "brand": {
        "@type": "Brand",
        "name": "TrPharma"
      },
      "manufacturer": {
        "@id": "https://pharma.thinkroman.com/#organization"
      },
      "url": `${BASE_URL}/products/kashcal-plus`
    }
  ]
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Dr. Ashwani Dhar", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "TrPharma", "item": `${BASE_URL}/trpharma` },
    { "@type": "ListItem", "position": 3, "name": "Products", "item": `${BASE_URL}/products` }
  ]
}

const products = [
  {
    name: "KashMOX 625",
    tagline: "Guard Your Health",
    description: "Broad-spectrum antibiotic containing Amoxicillin 500mg + Potassium Clavulanate 125mg. Effective against respiratory infections, UTIs, skin infections, and more.",
    category: "Antibiotic",
    icon: Pill,
    color: "bg-accent",
    textColor: "text-accent",
    bgColor: "bg-accent/10",
    href: "/products/kashmox",
    image: "/images/kashmox-625.webp",
    hasImage: true
  },
  {
    name: "One87 Plus",
    altName: "880 PLUS",
    tagline: "Effective Pain Relief",
    description: "Dual-action pain relief tablet containing Aceclofenac 100mg + Paracetamol 325mg. For arthritis, musculoskeletal pain, dental pain, and post-operative pain.",
    category: "Pain Relief",
    icon: Zap,
    color: "bg-orange-500",
    textColor: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/products/one87-plus",
    hasImage: false
  },
  {
    name: "KashCAL PLUS",
    tagline: "Strong Bones, Strong Life",
    description: "Comprehensive bone health supplement containing Calcium and Vitamin D3. For osteoporosis prevention and overall bone strength.",
    category: "Supplement",
    icon: Bone,
    color: "bg-green-500",
    textColor: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/products/kashcal-plus",
    hasImage: false
  }
]

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
              <Link href="/" className="text-sm text-white/60 hover:text-signal-bright">Profile</Link>
              <Link href="/trpharma" className="text-sm text-white/60 hover:text-signal-bright">TrPharma</Link>
              <Link href="/kairos" className="text-sm text-white/60 hover:text-signal-bright">Kairos R&D</Link>
              <Button asChild size="sm" className="gap-2">
                <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                  Shop Now <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className="bg-[#03211b] text-white/60 border-b border-white/10">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="hover:text-signal-bright">Dr. Ashwani Dhar</Link>
              <span>/</span>
              <Link href="/trpharma" className="hover:text-signal-bright">TrPharma</Link>
              <span>/</span>
              <span className="text-white font-medium">Products</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="dark-hero py-16 md:py-24">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="relative container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-signal-bright border border-white/15 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Stethoscope className="h-4 w-4" />
              Doctor-Developed Medications
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-signal-bright">TrPharma</span> Products
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Quality pharmaceutical products developed under the medical leadership of{" "}
              <Link href="/" className="text-signal-bright hover:underline font-semibold">Dr. Ashwani Dhar MD DMI</Link>.
              WHO-GMP certified, affordable, and effective.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                  Visit TrPharma Store <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link href="/trpharma">
                  About TrPharma <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Product Visual */}
                    <div className={`${product.bgColor} p-8 flex items-center justify-center min-h-[200px]`}>
                      {product.hasImage ? (
                        <Image
                          src={product.image!}
                          alt={`${product.name} - TrPharma product by Dr. Ashwani Dhar`}
                          width={200}
                          height={170}
                          className="rounded-lg shadow-lg group-hover:scale-105 transition-transform"
                        />
                      ) : (
                        <div className={`${product.color} text-white p-8 rounded-2xl shadow-lg group-hover:scale-105 transition-transform`}>
                          <product.icon className="h-16 w-16 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-center">{product.name.split(" ")[0]}</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-6">
                      <div className={`inline-flex items-center gap-2 ${product.bgColor} ${product.textColor} px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                        <product.icon className="h-3 w-3" />
                        {product.category}
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-1">
                        {product.name}
                        {product.altName && (
                          <span className="text-base font-normal text-muted-foreground ml-2">({product.altName})</span>
                        )}
                      </h2>
                      <p className={`${product.textColor} font-medium text-sm mb-3`}>{product.tagline}</p>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{product.description}</p>
                      
                      <div className="flex gap-3">
                        <Button asChild className={`${product.color} hover:opacity-90 text-white flex-1 gap-2`}>
                          <Link href={product.href}>
                            Learn More <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why TrPharma */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-primary">TrPharma</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Doctor-led pharmaceutical innovation backed by clinical expertise
              </p>
            </header>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Stethoscope, title: "Doctor-Led", description: "Founded by Dr. Ashwani Dhar MD DMI with clinical expertise" },
                { icon: Award, title: "GMP Certified", description: "WHO-GMP certified manufacturing facilities" },
                { icon: Shield, title: "Quality Assured", description: "Rigorous quality control at every step" },
                { icon: Pill, title: "Affordable", description: "Making quality healthcare accessible to all" }
              ].map((item, index) => (
                <Card key={index} className="bg-background text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                      <span className="text-4xl font-bold text-primary-foreground">AD</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Dr. Ashwani Dhar, MD, DMI</h2>
                      <p className="text-primary font-medium mb-4">Founder & CEO, TrPharma | ThinkRoman Ventures</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        All TrPharma products are developed under the medical leadership of Dr. Ashwani Dhar, 
                        bringing clinical expertise and patient-centered approach to pharmaceutical development.
                      </p>
                      <Button asChild className="gap-2">
                        <Link href="/">
                          Learn About Dr. Dhar <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Visit pharma.thinkroman.com to order TrPharma products directly.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
              <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                Shop TrPharma <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

<SiteFooter />
      </main>
    </>
  )
}
