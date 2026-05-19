import type { Metadata } from "next"
import Image from "next/image"
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
  Activity,
  Pill,
  ExternalLink,
  AlertCircle,
  Clock,
  Beaker
} from "lucide-react"

const BASE_URL = "https://www.about-dr-ashwani-dhar.com"

// Deep SEO-optimized metadata for KashMOX 625
export const metadata: Metadata = {
  title: "KashMOX 625 | Amoxicillin Clavulanate Antibiotic | TrPharma by Dr. Ashwani Dhar",
  description: "KashMOX 625 - Broad-spectrum antibiotic (Amoxicillin 500mg + Potassium Clavulanate 125mg) by TrPharma, founded by Dr. Ashwani Dhar MD DMI. WHO-GMP certified. For respiratory infections, UTI, skin infections.",
  keywords: [
    "KashMOX", "KashMOX 625", "KashMOX tablet", "KashMOX antibiotic", "KashMOX price",
    "KashMOX 625 tablet", "KashMOX Amoxicillin", "KashMOX Clavulanate", "KashMOX medicine",
    "KashMOX TrPharma", "KashMOX India", "KashMOX uses", "KashMOX dosage", "KashMOX side effects",
    "Amoxicillin Potassium Clavulanate", "Amoxicillin Clavulanic Acid", "Augmentin alternative",
    "TrPharma KashMOX", "Dr Ashwani Dhar KashMOX", "broad spectrum antibiotic India",
    "respiratory infection antibiotic", "UTI antibiotic India", "skin infection antibiotic"
  ],
  openGraph: {
    title: "KashMOX 625 - Amoxicillin Clavulanate Antibiotic by Dr. Ashwani Dhar | TrPharma",
    description: "KashMOX 625 (Amoxicillin 500mg + Clavulanate 125mg) - WHO-GMP certified antibiotic by TrPharma. Founded by Dr. Ashwani Dhar MD DMI.",
    type: "website",
    url: `${BASE_URL}/products/kashmox`,
    siteName: "Dr. Ashwani Dhar - KashMOX 625",
    images: [
      {
        url: `${BASE_URL}/images/kashmox-625.webp`,
        width: 1200,
        height: 1015,
        alt: "KashMOX 625 - Amoxicillin Potassium Clavulanate Tablets by TrPharma, Dr. Ashwani Dhar"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KashMOX 625 Antibiotic | TrPharma by Dr. Ashwani Dhar",
    description: "KashMOX 625 - Broad-spectrum antibiotic (Amoxicillin + Clavulanate) by TrPharma",
    images: [`${BASE_URL}/images/kashmox-625.webp`]
  },
  alternates: {
    canonical: `${BASE_URL}/products/kashmox`
  }
}

// Comprehensive JSON-LD Schema for KashMOX 625 Product Page
const kashmoxProductSchema = {
  "@context": "https://schema.org",
  "@type": "Drug",
  "@id": `${BASE_URL}/#product-kashmox-625`,
  "name": "KashMOX 625",
  "alternateName": ["KashMOX", "KashMOX 625 Tablet", "KashMOX Antibiotic", "Amoxicillin Clavulanate TrPharma", "KashMOX medicine"],
  "description": "KashMOX 625 is a broad-spectrum antibiotic tablet containing Amoxicillin 500mg and Potassium Clavulanate 125mg. Developed under the medical leadership of Dr. Ashwani Dhar MD DMI. Manufactured by TrPharma in WHO-GMP certified facilities. Effective against respiratory tract infections, urinary tract infections, skin and soft tissue infections, dental infections, and more.",
  "drugClass": "Antibiotic (Beta-lactam + Beta-lactamase inhibitor)",
  "activeIngredient": "Amoxicillin Trihydrate I.P. eq. to Amoxicillin 500mg + Potassium Clavulanate Diluted I.P. eq. to Clavulanic Acid 125mg",
  "dosageForm": "Film-coated Tablet",
  "administrationRoute": "Oral",
  "isProprietary": true,
  "proprietaryName": "KashMOX 625",
  "nonProprietaryName": "Amoxicillin and Potassium Clavulanate Tablets I.P.",
  "mechanismOfAction": "Amoxicillin inhibits bacterial cell wall synthesis. Clavulanic acid inhibits beta-lactamase enzymes, protecting amoxicillin from degradation and extending its spectrum of activity.",
  "clinicalPharmacology": "Broad-spectrum bactericidal activity against gram-positive and gram-negative bacteria including beta-lactamase producing strains",
  "prescribingInfo": "Adult dosage: One tablet (625mg) twice or three times daily depending on severity of infection. Take with or after food to reduce gastrointestinal effects.",
  "manufacturer": {
    "@type": "Organization",
    "@id": `${BASE_URL}/#org-trpharma`,
    "name": "TrPharma - A Division of ThinkRoman Ventures LLP",
    "url": "https://pharma.thinkroman.com"
  },
  "image": {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#image-kashmox`,
    "url": `${BASE_URL}/images/kashmox-625.webp`,
    "contentUrl": `${BASE_URL}/images/kashmox-625.webp`,
    "name": "KashMOX 625 Antibiotic Tablet Box - TrPharma by Dr. Ashwani Dhar",
    "description": "KashMOX 625 Amoxicillin Potassium Clavulanate Tablets packaging manufactured by TrPharma, a pharmaceutical division founded by Dr. Ashwani Dhar MD DMI",
    "width": 1200,
    "height": 1015,
    "encodingFormat": "image/webp"
  },
  "url": `${BASE_URL}/products/kashmox`,
  "sameAs": [
    "https://pharma.thinkroman.com/products#kashmox",
    "https://pharmacy.thinkroman.com"
  ]
}

// Founder Attribution Schema
const founderAttributionSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "KashMOX 625 - Therapeutic Development",
  "creator": {
    "@type": "Person",
    "@id": `${BASE_URL}/#person-dr-ashwani-dhar`,
    "name": "Dr. Ashwani Dhar",
    "jobTitle": "Founder & CEO",
    "description": "Physician (MD, DMI) and healthcare entrepreneur who developed KashMOX 625 under his medical leadership at TrPharma"
  },
  "about": {
    "@type": "Drug",
    "@id": `${BASE_URL}/#product-kashmox-625`
  }
}

// Brand Schema linking TrPharma to Dr. Dhar
const brandSchema = {
  "@context": "https://schema.org",
  "@type": "Brand",
  "name": "KashMOX",
  "alternateName": ["KashMOX 625", "KashMOX Antibiotic"],
  "logo": `${BASE_URL}/images/kashmox-625.webp`,
  "slogan": "Guard Your Health",
  "description": "KashMOX is TrPharma's flagship antibiotic brand, developed under the medical leadership of Dr. Ashwani Dhar MD DMI",
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
      "name": "KashMOX 625",
      "item": `${BASE_URL}/products/kashmox`
    }
  ]
}

// FAQ Schema for KashMOX
const kashmoxFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is KashMOX 625?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashMOX 625 is a broad-spectrum antibiotic tablet containing Amoxicillin 500mg and Potassium Clavulanate 125mg. It is manufactured by TrPharma, a pharmaceutical division founded by Dr. Ashwani Dhar MD DMI. KashMOX 625 is used to treat respiratory tract infections, urinary tract infections, skin infections, and dental infections."
      }
    },
    {
      "@type": "Question",
      "name": "Who makes KashMOX 625?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashMOX 625 is manufactured by TrPharma, a doctor-led pharmaceutical division of ThinkRoman Ventures LLP. TrPharma was founded by Dr. Ashwani Dhar MD DMI, a physician and healthcare entrepreneur. The product is manufactured in WHO-GMP certified facilities."
      }
    },
    {
      "@type": "Question",
      "name": "What is KashMOX 625 used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashMOX 625 is indicated for: Respiratory tract infections (RTI), Urinary tract infections (UTI), Skin and soft tissue infections, Dental infections, Bone and joint infections, and Intra-abdominal infections. It is effective against gram-positive and gram-negative bacteria including beta-lactamase producing strains."
      }
    },
    {
      "@type": "Question",
      "name": "What is the composition of KashMOX 625?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashMOX 625 contains Amoxicillin Trihydrate I.P. equivalent to Amoxicillin 500mg and Potassium Clavulanate Diluted I.P. equivalent to Clavulanic Acid 125mg. The total strength is 625mg per tablet."
      }
    },
    {
      "@type": "Question",
      "name": "Is KashMOX 625 the same as Augmentin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashMOX 625 contains the same active ingredients as Augmentin 625 (Amoxicillin + Clavulanic Acid). It is TrPharma's quality, affordable alternative manufactured in WHO-GMP certified facilities under the medical leadership of Dr. Ashwani Dhar."
      }
    }
  ]
}

export default function KashMOXProductPage() {
  const indications = [
    { name: "Respiratory Tract Infections (RTI)", description: "Sinusitis, bronchitis, pneumonia, tonsillitis" },
    { name: "Urinary Tract Infections (UTI)", description: "Cystitis, pyelonephritis" },
    { name: "Skin & Soft Tissue Infections", description: "Cellulitis, wound infections, abscesses" },
    { name: "Dental Infections", description: "Dental abscess, periodontal infections" },
    { name: "Bone & Joint Infections", description: "Osteomyelitis, septic arthritis" },
    { name: "Intra-abdominal Infections", description: "Peritonitis, biliary tract infections" }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Broad-Spectrum Coverage",
      description: "Effective against gram-positive and gram-negative bacteria including beta-lactamase producing strains that resist ordinary amoxicillin"
    },
    {
      icon: Beaker,
      title: "Synergistic Action",
      description: "Clavulanic acid inhibits beta-lactamase enzymes, protecting amoxicillin and extending its antibacterial spectrum"
    },
    {
      icon: Activity,
      title: "Fast Absorption",
      description: "Rapid oral absorption with peak plasma concentration reached within 1-2 hours for quick therapeutic action"
    },
    {
      icon: Award,
      title: "WHO-GMP Certified",
      description: "Manufactured in World Health Organization Good Manufacturing Practice certified facilities ensuring highest quality"
    },
    {
      icon: Heart,
      title: "Well Tolerated",
      description: "Excellent safety profile when taken as directed. Take with food to minimize gastrointestinal effects"
    },
    {
      icon: Stethoscope,
      title: "Doctor-Developed",
      description: "Developed under the medical leadership of Dr. Ashwani Dhar MD DMI, ensuring clinical efficacy standards"
    }
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kashmoxProductSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderAttributionSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kashmoxFaqSchema) }}
      />

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
              <Link href="/trpharma" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                TrPharma
              </Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
        <div className="bg-muted/50 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Dr. Ashwani Dhar</Link>
              <span>/</span>
              <Link href="/trpharma" className="hover:text-foreground transition-colors">TrPharma</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
              <span>/</span>
              <span className="text-foreground font-medium">KashMOX 625</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl blur-3xl" />
                  <Image
                    src="/images/kashmox-625.webp"
                    alt="KashMOX 625 - Amoxicillin Potassium Clavulanate Tablets I.P. by TrPharma - Antibiotic manufactured under Dr. Ashwani Dhar's medical leadership"
                    width={550}
                    height={465}
                    className="relative rounded-2xl shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    WHO-GMP Certified
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2">
                <Link 
                  href="/trpharma" 
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm mb-4"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to TrPharma
                </Link>
                
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Pill className="h-4 w-4" />
                  TrPharma Flagship Product
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-accent">KashMOX</span> 625
                </h1>
                
                <p className="text-xl text-muted-foreground mb-2">
                  Amoxicillin &amp; Potassium Clavulanate Tablets I.P.
                </p>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  <strong>KashMOX 625</strong> is TrPharma&apos;s flagship broad-spectrum antibiotic, developed under the medical leadership of <Link href="/" className="text-primary hover:underline font-semibold">Dr. Ashwani Dhar MD DMI</Link>. Combining Amoxicillin with Clavulanic Acid for enhanced efficacy against resistant bacteria.
                </p>

                {/* Composition Card */}
                <Card className="bg-card border-accent/20 mb-6">
                  <CardContent className="p-6">
                    <h2 className="font-bold mb-4 flex items-center gap-2">
                      <Beaker className="h-5 w-5 text-accent" />
                      Composition (Per Tablet)
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Amoxicillin Trihydrate I.P.</span>
                          <span className="text-muted-foreground"> eq. to Amoxicillin - </span>
                          <strong className="text-accent">500 mg</strong>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">Potassium Clavulanate Diluted I.P.</span>
                          <span className="text-muted-foreground"> eq. to Clavulanic Acid - </span>
                          <strong className="text-accent">125 mg</strong>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                    <Link href="https://pharma.thinkroman.com/products#kashmox" target="_blank" rel="noopener noreferrer">
                      Order KashMOX 625 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
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
                <span className="text-accent">Therapeutic</span> Indications
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                KashMOX 625 is indicated for the treatment of bacterial infections caused by susceptible organisms
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {indications.map((indication, index) => (
                <Card key={index} className="bg-background border-border hover:border-accent/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
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
                Why Choose <span className="text-accent">KashMOX 625</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Developed under the medical leadership of Dr. Ashwani Dhar for optimal therapeutic outcomes
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dosage & Administration */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Dosage &amp; <span className="text-primary">Administration</span>
                </h2>
              </header>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">Adult Dosage</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      One tablet (625mg) two to three times daily, depending on severity of infection.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Mild to moderate infections: Twice daily
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Severe infections: Three times daily
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Duration: 5-14 days as prescribed
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <AlertCircle className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-bold text-lg">Important Notes</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        Take with or immediately after food to reduce GI effects
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        Complete the full course even if symptoms improve
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        Store below 25°C in a dry place
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        Consult physician before use if pregnant or nursing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Attribution Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3">
                    <div className="bg-gradient-to-br from-primary to-primary/80 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold text-white">AD</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">Dr. Ashwani Dhar</h3>
                      <p className="text-sm text-white/80">MD, DMI</p>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <h2 className="text-2xl font-bold mb-4">Developed Under Medical Leadership</h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        KashMOX 625 was developed under the medical leadership of <strong>Dr. Ashwani Dhar MD DMI</strong>, Founder &amp; CEO of TrPharma. Drawing from his extensive clinical experience and understanding of antibiotic resistance patterns, Dr. Dhar ensured KashMOX 625 meets the highest standards of therapeutic efficacy.
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        As a physician who has treated thousands of patients, Dr. Dhar understands the importance of effective, affordable antibiotics. KashMOX 625 represents his commitment to making quality healthcare accessible to all.
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
        <section className="py-16 md:py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get KashMOX 625 Today
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              WHO-GMP certified quality. Doctor-developed. Affordable pricing. Order now from TrPharma.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90 gap-2">
                <Link href="https://pharma.thinkroman.com/products#kashmox" target="_blank" rel="noopener noreferrer">
                  Order Now <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Link href="/products/one87-plus">
                  View One87 Plus <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

{/* Footer Navigation */}
<footer className="py-8 bg-muted/50 border-t border-border">
  <div className="container mx-auto px-4">
  {/* Manufacturing Statement for Co-Citation SEO */}
  <div className="text-center mb-6 pb-6 border-b border-border">
    <p className="text-sm text-muted-foreground">
      Manufactured for TrPharma, a division of ThinkRoman Ventures LLP | Under the medical direction of{" "}
      <Link href="https://www.about-dr-ashwani-dhar.com" className="text-primary hover:underline font-medium">
        Dr. Ashwani Dhar
      </Link>
    </p>
  </div>
  <div className="flex flex-wrap items-center justify-between gap-4">
  <p className="text-sm text-muted-foreground">
  &copy; {new Date().getFullYear()} TrPharma - A Division of ThinkRoman Ventures LLP. Founded by Dr. Ashwani Dhar.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dr. Ashwani Dhar
                </Link>
                <Link href="/trpharma" className="text-muted-foreground hover:text-foreground transition-colors">
                  TrPharma
                </Link>
                <Link href="/kairos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kairos R&D
                </Link>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Products
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
