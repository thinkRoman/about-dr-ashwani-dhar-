import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Heart, 
  Stethoscope, 
  Building2,
  Instagram,
  ExternalLink,
  Pill,
  Activity,
  Award,
  Users
} from "lucide-react"

// SEO-optimized metadata for TrPharma and KashMOX 625
export const metadata: Metadata = {
  title: "TrPharma | KashMOX 625 Antibiotic | Dr. Ashwani Dhar - Doctor-Led Pharmaceutical Division",
  description: "TrPharma, founded by Dr. Ashwani Dhar MD DMI, is a doctor-led pharmaceutical division of ThinkRoman Ventures. KashMOX 625 (Amoxicillin + Clavulanic Acid) is our flagship antibiotic for respiratory infections, UTIs, and skin infections. GMP-certified, affordable healthcare.",
  keywords: [
    "TrPharma",
    "TrPharma India",
    "trpharma187",
    "@trpharma187",
    "KashMOX",
    "KashMOX 625",
    "KashMOX 625 antibiotic",
    "KashMOX Amoxicillin",
    "Amoxicillin Clavulanic Acid",
    "Amoxicillin Potassium Clavulanate",
    "Dr. Ashwani Dhar TrPharma",
    "Dr. Ashwani Dhar pharmaceutical",
    "Doctor-led pharma",
    "ThinkRoman Pharma",
    "ThinkRoman Ventures pharmaceutical",
    "GMP certified pharma India",
    "Affordable antibiotics India",
    "Respiratory infection antibiotic",
    "UTI antibiotic India",
    "Skin infection antibiotic",
    "pharma.thinkroman.com",
    "TrPharma KashMOX",
    "KashMOX tablets",
    "Augmentin alternative India"
  ],
  openGraph: {
    title: "TrPharma | KashMOX 625 - Doctor-Led Pharmaceutical by Dr. Ashwani Dhar",
    description: "KashMOX 625 by TrPharma - Amoxicillin + Clavulanic Acid antibiotic. Founded by Dr. Ashwani Dhar MD DMI. GMP-certified, affordable healthcare.",
    type: "website",
    siteName: "Dr. Ashwani Dhar - TrPharma",
    images: [
      {
        url: "https://cdn.sanity.io/images/twif9jmg/production/af4a16f88c3a8995752e0cf2dfc49bf82260b07c-1600x1352.jpg",
        width: 1600,
        height: 1352,
        alt: "KashMOX 625 - Amoxicillin Potassium Clavulanate Tablets by TrPharma"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TrPharma | KashMOX 625 Antibiotic by Dr. Ashwani Dhar",
    description: "KashMOX 625 - Amoxicillin + Clavulanic Acid. Doctor-led pharmaceutical division of ThinkRoman Ventures.",
    images: ["https://cdn.sanity.io/images/twif9jmg/production/af4a16f88c3a8995752e0cf2dfc49bf82260b07c-1600x1352.jpg"]
  },
  alternates: {
    canonical: "/trpharma"
  }
}

// JSON-LD Schema for TrPharma Organization
const trpharmaOrgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TrPharma",
  "legalName": "TrPharma - A Division of ThinkRoman Ventures LLP",
  "alternateName": ["TrPharma India", "trpharma187", "ThinkRoman Pharma", "TrPharma Pharmaceutical"],
  "url": "https://pharma.thinkroman.com",
  "description": "TrPharma is a doctor-led pharmaceutical division of ThinkRoman Ventures, founded by Dr. Ashwani Dhar MD DMI. Specializing in affordable, GMP-certified medications including the flagship KashMOX 625 antibiotic.",
  "founder": {
    "@type": "Person",
    "name": "Dr. Ashwani Dhar",
    "jobTitle": "Founder & CEO",
    "description": "Physician (MD, DMI), healthcare innovator, and CEO of ThinkRoman Ventures"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "ThinkRoman Ventures LLP"
  },
  "sameAs": [
    "https://pharma.thinkroman.com",
    "https://pharmacy.thinkroman.com",
    "https://www.instagram.com/trpharma187",
    "https://thinkroman.com"
  ]
}

// JSON-LD Schema for KashMOX 625 Product
const kashmoxProductSchema = {
  "@context": "https://schema.org",
  "@type": "Drug",
  "name": "KashMOX 625",
  "alternateName": ["KashMOX", "KashMOX 625 Tablets", "Amoxicillin Clavulanate TrPharma"],
  "description": "KashMOX 625 is a broad-spectrum antibiotic containing Amoxicillin and Potassium Clavulanate. Effective against respiratory tract infections, urinary tract infections, skin and soft tissue infections. Manufactured by TrPharma, a division of ThinkRoman Ventures founded by Dr. Ashwani Dhar.",
  "activeIngredient": "Amoxicillin 500mg + Potassium Clavulanate 125mg",
  "drugClass": "Antibiotic",
  "administrationRoute": "Oral",
  "dosageForm": "Tablet",
  "manufacturer": {
    "@type": "Organization",
    "name": "TrPharma - A Division of ThinkRoman Ventures LLP"
  },
  "image": "https://cdn.sanity.io/images/twif9jmg/production/af4a16f88c3a8995752e0cf2dfc49bf82260b07c-1600x1352.jpg",
  "url": "https://pharma.thinkroman.com/products#prod_3JW3LRTaXkzCbParcZSbHJ5zeR52"
}

// JSON-LD Schema for WebPage
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "TrPharma | KashMOX 625 Antibiotic | Dr. Ashwani Dhar",
  "description": "TrPharma pharmaceutical division founded by Dr. Ashwani Dhar. KashMOX 625 - Amoxicillin + Clavulanic Acid antibiotic.",
  "url": "/trpharma",
  "mainEntity": {
    "@type": "Organization",
    "name": "TrPharma"
  },
  "about": [
    {
      "@type": "Drug",
      "name": "KashMOX 625"
    },
    {
      "@type": "Person",
      "name": "Dr. Ashwani Dhar"
    }
  ]
}

export default function TrPharmaPage() {
  const kashmoxIndications = [
    "Respiratory Tract Infections (RTI)",
    "Urinary Tract Infections (UTI)",
    "Skin & Soft Tissue Infections",
    "Dental Infections",
    "Bone & Joint Infections",
    "Intra-abdominal Infections"
  ]

  const kashmoxBenefits = [
    {
      icon: Shield,
      title: "Broad-Spectrum Coverage",
      description: "Effective against gram-positive and gram-negative bacteria including beta-lactamase producers"
    },
    {
      icon: Activity,
      title: "Fast Acting",
      description: "Quick absorption and rapid onset of action for faster symptom relief"
    },
    {
      icon: Award,
      title: "GMP Certified",
      description: "Manufactured in WHO-GMP certified facilities ensuring highest quality standards"
    },
    {
      icon: Heart,
      title: "Well Tolerated",
      description: "Clavulanic acid enhances efficacy while maintaining excellent safety profile"
    }
  ]

  const trpharmaAdvantages = [
    {
      icon: Stethoscope,
      title: "Doctor-Led Innovation",
      description: "Founded by Dr. Ashwani Dhar MD DMI, former CMIO at Cerner/Oracle Health, bringing clinical expertise to pharmaceutical development."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "All products manufactured in WHO-GMP certified facilities with rigorous quality control protocols."
    },
    {
      icon: Heart,
      title: "Patient-First Approach",
      description: "Committed to making quality healthcare accessible and affordable for all patients."
    },
    {
      icon: Building2,
      title: "Part of ThinkRoman",
      description: "Backed by ThinkRoman Ventures LLP, a healthcare innovation ecosystem with 20+ initiatives."
    }
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trpharmaOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kashmoxProductSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main className="min-h-screen bg-background">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-[#04231c]/85 text-white backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">AD</span>
              </div>
              <span className="font-semibold hidden sm:inline">Dr. Ashwani Dhar</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-white/60 hover:text-signal-bright transition-colors">
                Profile
              </Link>
              <Link href="/kairos" className="text-sm text-white/60 hover:text-signal-bright transition-colors">
                Kairos R&D
              </Link>
              <Button asChild size="sm" variant="outline" className="gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                  All Products <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="dark-hero py-16 md:py-24">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="relative container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 text-signal-bright border border-white/15 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Pill className="h-4 w-4" />
                  Doctor-Led Pharmaceutical Division
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                  <span className="text-signal-bright">TrPharma</span> by Dr. Ashwani Dhar
                </h1>
                <p className="text-xl text-white/70 mb-4 leading-relaxed">
                  <strong className="text-white">TrPharma</strong> is a doctor-led pharmaceutical division of <strong className="text-white">ThinkRoman Ventures LLP</strong>, founded by <strong className="text-white">Dr. Ashwani Dhar, MD, DMI</strong>.
                </p>
                <p className="text-white/65 mb-8 leading-relaxed">
                  Combining clinical expertise with pharmaceutical innovation, TrPharma delivers high-quality, affordable medications. Our flagship product <strong className="text-white">KashMOX 625</strong> exemplifies our commitment to accessible healthcare.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                      Visit pharma.thinkroman.com <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                    <Link href="https://instagram.com/trpharma187" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" /> @trpharma187
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right: TrPharma Logo Card */}
              <div className="flex justify-center">
                <Card className="bg-card border-primary/20 shadow-xl max-w-md w-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-primary-foreground">Tr</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">TrPharma</h2>
                    <p className="text-sm text-muted-foreground mb-4">A Division of ThinkRoman Ventures LLP</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-primary">
                      <Stethoscope className="h-4 w-4" />
                      <span className="font-medium">Doctor-Led | GMP Certified | Patient-First</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* KashMOX 625 - Featured Product Section */}
        <section id="kashmox" className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="h-4 w-4" />
                Flagship Product
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-accent">KashMOX 625</span> - Guard Your Health
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                <strong>KashMOX 625</strong> (Amoxicillin 500mg + Potassium Clavulanate 125mg) is TrPharma&apos;s flagship broad-spectrum antibiotic, designed for effective treatment of bacterial infections.
              </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Product Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
                  <Image
                    src="/images/kashmox-625.webp"
                    alt="KashMOX 625 - Amoxicillin Potassium Clavulanate Tablets I.P. by TrPharma - Antibiotic for respiratory infections, UTI, skin infections"
                    width={500}
                    height={423}
                    className="relative rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Amoxicillin &amp; Potassium Clavulanate Tablets I.P.</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>KashMOX 625</strong> combines the power of Amoxicillin with Clavulanic Acid to tackle infections head-on. The Clavulanic Acid component overcomes bacterial resistance by inhibiting beta-lactamase enzymes, making <strong>KashMOX</strong> effective against a wider range of bacteria.
                </p>
                
                <div className="bg-card border border-accent/20 rounded-xl p-6 mb-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Pill className="h-5 w-5 text-accent" />
                    Composition
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>Amoxicillin Trihydrate I.P. eq. to Amoxicillin - <strong>500 mg</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>Potassium Clavulanate Diluted I.P. eq. to Clavulanic Acid - <strong>125 mg</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-4">Indications</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {kashmoxIndications.map((indication, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{indication}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  <Link 
                    href="https://pharma.thinkroman.com/products#prod_3JW3LRTaXkzCbParcZSbHJ5zeR52" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Learn more about KashMOX 625 on TrPharma website"
                  >
                    Learn More About KashMOX 625 <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* KashMOX Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kashmoxBenefits.map((benefit, index) => (
                <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-bold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why TrPharma / Doctor-Led Advantage */}
        <section className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The <span className="text-primary">Doctor-Led</span> Advantage
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                TrPharma is uniquely positioned at the intersection of clinical medicine and pharmaceutical innovation, led by a physician who understands both patient needs and healthcare delivery.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {trpharmaAdvantages.map((advantage, index) => (
                <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <advantage.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Founder Card */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 bg-primary rounded-2xl flex items-center justify-center shrink-0">
                      <span className="text-4xl font-bold text-primary-foreground">AD</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Dr. Ashwani Dhar, MD, DMI</h3>
                      <p className="text-primary font-medium mb-4">Founder & CEO, TrPharma | CEO, ThinkRoman Ventures</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Dr. Ashwani Dhar brings decades of clinical and healthcare technology experience to TrPharma. As a former Senior Physician Executive and CMIO at Cerner/Oracle Health, and with an MD and Doctor of Medical Informatics (DMI), he leads TrPharma with a unique blend of medical expertise and innovation.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link 
                          href="/" 
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          View Full Profile <ArrowRight className="h-3 w-3" />
                        </Link>
                        <Link 
                          href="/kairos" 
                          className="text-sm text-accent hover:underline flex items-center gap-1"
                        >
                          Kairos R&D Solutions <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* All Products CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              Explore Our Full Range
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Discover All <span className="text-primary">TrPharma</span> Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Beyond KashMOX 625, TrPharma offers a comprehensive range of high-quality, affordable medications including antibiotics, pain relief, and specialty drugs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/products">
                  View All Products <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="https://instagram.com/trpharma187" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" /> Follow @trpharma187
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  )
}
