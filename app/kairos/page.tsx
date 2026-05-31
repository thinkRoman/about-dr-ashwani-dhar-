import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  ArrowLeft,
  Users, 
  Microscope, 
  FileCheck, 
  Cpu, 
  CheckCircle2, 
  Globe, 
  FlaskConical,
  Building2,
  Beaker,
  Shield,
  Handshake,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Award,
  Target,
  Lightbulb,
  GraduationCap
} from "lucide-react"

// SEO-Optimized Metadata for Kairos Page
const BASE_URL = "https://www.about-dr-ashwani-dhar.com"

export const metadata: Metadata = {
  title: "Kairos | Kairos R&D Solutions | Dr. Ashwani Dhar - Founder & CEO | Clinical Research CRO",
  description: "Kairos R&D Solutions (kairosrds.com) - Clinical Research Organization founded by Dr. Ashwani Dhar MD DMI. Kairos provides AI-enabled clinical trials, patient recruitment, Kairodox document management, and global pharmaceutical partnerships. Also known as Kairos RDS, Kairos CRO.",
  keywords: [
    "Kairos",
    "Kairos R&D",
    "Kairos R&D Solutions",
    "Kairos RDS",
    "Kairos CRO",
    "Kairos clinical research",
    "Kairos clinical trials",
    "Kairos patient recruitment",
    "Kairos Kairodox",
    "kairosrds",
    "kairosrds.com",
    "www.kairosrds.com",
    "Dr. Ashwani Dhar Kairos",
    "Dr Ashwani Dhar Kairos",
    "Ashwani Dhar Kairos",
    "Kairos Founder",
    "Kairos CEO",
    "Kairos owner",
    "who founded Kairos",
    "who owns Kairos",
    "what is Kairos",
    "Kairos India",
    "Kairos Hyderabad",
    "Kairos San Francisco",
    "Kairos USA",
    "Kairos company",
    "Kairos organization",
    "Kairos healthcare",
    "Kairos pharma",
    "Kairos pharmaceutical",
    "Kairos research",
    "Clinical Research Organization",
    "CRO India",
    "AI clinical trials",
    "real-world evidence",
    "pharmacovigilance",
    "drug development",
    "Novo Nordisk partner",
    "clinical trial management",
    "Kairos services",
    "Kairos AI",
    "Kairos technology"
  ],
  authors: [{ name: "Dr. Ashwani Dhar", url: "https://drashwanidhar.thinkroman.com" }],
  creator: "Dr. Ashwani Dhar",
  openGraph: {
    type: "website",
    title: "Kairos | Kairos R&D Solutions - Founded by Dr. Ashwani Dhar",
    description: "Kairos R&D Solutions (kairosrds.com) is a Clinical Research Organization founded by Dr. Ashwani Dhar MD DMI. AI-enabled clinical trials, patient recruitment, Kairodox platform.",
    siteName: "Kairos R&D Solutions - Dr. Ashwani Dhar",
    locale: "en_US",
    url: `${BASE_URL}/kairos`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairos | Kairos R&D Solutions - Dr. Ashwani Dhar, Founder & CEO",
    description: "Kairos R&D Solutions: AI-enabled clinical research, patient recruitment, Kairodox. Founded by Dr. Ashwani Dhar MD DMI.",
    creator: "@ash_dhar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${BASE_URL}/kairos`,
  },
}

// Enhanced JSON-LD Schema specifically for this page - Kairos Entity Graph
const kairosPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/kairos#webpage`,
      "name": "Kairos | Kairos R&D Solutions - Dr. Ashwani Dhar, Founder & CEO",
      "description": "Official page about Kairos R&D Solutions (kairosrds.com) and its founder Dr. Ashwani Dhar MD, DMI",
      "url": `${BASE_URL}/kairos`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${BASE_URL}/kairos#organization` },
      "mainEntity": { "@id": `${BASE_URL}/kairos#organization` }
    },
    {
      "@type": ["Organization", "MedicalBusiness", "ResearchOrganization"],
      "@id": `${BASE_URL}/kairos#organization`,
      "name": "Kairos R&D Solutions",
      "legalName": "Kairos R&D Solutions Pvt. Ltd.",
      "alternateName": ["Kairos", "Kairos RDS", "Kairos CRO", "Kairos Healthcare", "Kairos Clinical Research", "kairosrds", "Kairos India", "Kairos company", "Kairos organization"],
      "url": "https://kairosrds.com",
      "logo": "https://kairosrds.com/logo.png",
      "image": "https://kairosrds.com/logo.png",
      "description": "Kairos R&D Solutions is a specialized Clinical Research Organization (CRO) founded by Dr. Ashwani Dhar MD DMI. Kairos provides AI-enabled clinical trials, patient recruitment, Kairodox document management, real-world evidence studies, pharmacovigilance, and global pharmaceutical partnerships.",
      "slogan": "Your partner in Clinical Research - Making It Seamless",
      "sameAs": [
        "https://kairosrds.com",
        "https://www.kairosrds.com",
        `${BASE_URL}/kairos`,
        "https://www.linkedin.com/company/kairos-rds"
      ],
      "founder": {
        "@type": "Person",
        "@id": `${BASE_URL}/#person-dr-ashwani-dhar`,
        "name": "Dr. Ashwani Dhar",
        "alternateName": ["Ashwani Dhar", "Dr Ashwani Dhar", "Dr. Ashwani Dhar MD DMI"],
        "jobTitle": "Founder & CEO",
        "description": "Physician (MD, DMI) with expertise in clinical medicine, medical informatics, and AI healthcare innovation. Founder of Kairos R&D Solutions and TrPharma.",
        "url": "https://drashwanidhar.thinkroman.com",
        "sameAs": [
          "https://www.linkedin.com/in/ashdhar",
          "https://twitter.com/ash_dhar",
          `${BASE_URL}`
        ]
      },
      "foundingDate": "2020",
      "areaServed": ["Worldwide", "India", "United States", "Europe", "Asia"],
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "San Francisco Bay Area",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kairos Clinical Research Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Patient Recruitment",
            "description": "AI-powered patient matching and recruitment for clinical trials with access to millions of diverse patients"
          },
          {
            "@type": "Service",
            "name": "Kairodox",
            "description": "Sponsor-Centric Document Ordering & Management platform for clinical research"
          },
          {
            "@type": "Service",
            "name": "Clinical Trial Management",
            "description": "End-to-end clinical trial services from protocol design to study closeout"
          },
          {
            "@type": "Service",
            "name": "AI-Enabled Clinical Research",
            "description": "Technology-driven research solutions with AI-powered data analytics and insights"
          },
          {
            "@type": "Service",
            "name": "Pharmacovigilance",
            "description": "Drug safety monitoring and adverse event reporting services"
          },
          {
            "@type": "Service",
            "name": "Real-World Evidence",
            "description": "Real-world data collection and evidence generation studies"
          }
        ]
      },
      "knowsAbout": [
        "Clinical Trials", "Patient Recruitment", "AI in Healthcare", "Drug Development",
        "Pharmacovigilance", "Real-World Evidence", "Clinical Research", "Medical Research",
        "Pharmaceutical Research", "Regulatory Affairs"
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/kairos#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Kairos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kairos (Kairos R&D Solutions Pvt. Ltd.) is a Clinical Research Organization (CRO) founded by Dr. Ashwani Dhar MD DMI. Kairos provides AI-enabled clinical trials, patient recruitment, Kairodox document management, and pharmacovigilance services. Also known as Kairos RDS, Kairos CRO, or kairosrds. Visit kairosrds.com for more information."
          }
        },
        {
          "@type": "Question",
          "name": "Who founded Kairos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kairos R&D Solutions was founded by Dr. Ashwani Dhar MD DMI, a physician and healthcare entrepreneur based in Fremont, California. Dr. Dhar is the Founder and CEO of Kairos and also founded TrPharma and ThinkRoman Ventures."
          }
        },
        {
          "@type": "Question",
          "name": "Who owns Kairos R&D Solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kairos R&D Solutions is owned and led by Dr. Ashwani Dhar MD DMI as Founder and CEO. The company is headquartered in Hyderabad, India with operations in San Francisco, USA."
          }
        },
        {
          "@type": "Question",
          "name": "What services does Kairos offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kairos R&D Solutions offers: Patient Recruitment with AI-powered matching, Kairodox document management platform, Clinical Trial Management, AI-Enabled Research Analytics, Real-World Evidence Studies, Pharmacovigilance, Patient Travel & Locator Services, and Technology Solutions for clinical research."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Kairos located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kairos R&D Solutions has offices in Hyderabad, India (headquarters) and San Francisco Bay Area, California, USA. Kairos serves pharmaceutical clients worldwide across India, United States, and Europe."
          }
        }
      ]
    }
  ]
}

export default function KairosPage() {
  const services = [
    {
      icon: Users,
      title: "Patient Recruitment",
      description: "Access to millions of diverse patients through our extensive network of healthcare organizations, powered by advanced AI matching technology for optimal trial enrollment."
    },
    {
      icon: Microscope,
      title: "Clinical Trial Management",
      description: "End-to-end clinical trial management from protocol design to study closeout, ensuring regulatory compliance and data integrity at every stage."
    },
    {
      icon: FileCheck,
      title: "Kairodox Platform",
      description: "Our proprietary Sponsor-Centric Document Ordering & Management system streamlines regulatory documentation and clinical research workflows."
    },
    {
      icon: Cpu,
      title: "AI-Enabled Research",
      description: "Leveraging artificial intelligence and machine learning to accelerate drug development, improve patient matching, and enhance data analytics."
    },
    {
      icon: Shield,
      title: "Regulatory & Pharmacovigilance",
      description: "Comprehensive regulatory compliance services and pharmacovigilance solutions ensuring patient safety and adherence to global standards."
    },
    {
      icon: Beaker,
      title: "Real-World Evidence",
      description: "Generating real-world evidence through observational studies, patient registries, and post-market surveillance to support drug development decisions."
    }
  ]

  const stats = [
    { value: "80%", label: "Global Trial Coverage", description: "Of global clinical trials supported" },
    { value: "Nationwide", label: "Healthcare Network", description: "Partner organizations across India & US" },
    { value: "17+", label: "Active Clinical Trials", description: "Ongoing research studies" },
    { value: "98%", label: "Client Satisfaction", description: "Industry-leading satisfaction rate" }
  ]

  const focusAreas = [
    "End-to-end clinical trial management",
    "Real-world evidence & patient-centric studies",
    "AI-enabled clinical research & data analytics",
    "Regulatory compliance & pharmacovigilance",
    "Strategic pharmaceutical partnerships",
    "Global clinical trial operations"
  ]

  const partnerships = [
    { name: "Novo Nordisk", type: "Strategic Partner" },
    { name: "Global Pharma Companies", type: "Research Collaborations" },
    { name: "Healthcare Organizations", type: "Site Network" }
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kairosPageSchema) }}
      />

      <main className="min-h-screen bg-background">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium">Back to Profile</span>
              </Link>
              <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer">
                  Visit kairosrds.com <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-muted-foreground">
                  <li><Link href="/" className="hover:text-foreground transition-colors">Dr. Ashwani Dhar</Link></li>
                  <li>/</li>
                  <li className="text-foreground font-medium">Kairos R&D Solutions</li>
                </ol>
              </nav>

              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Left: Logo & Quick Info */}
                <div className="lg:w-1/3">
                  <div className="bg-accent rounded-2xl p-8 mb-6 text-center">
                    <span className="text-5xl font-bold text-accent-foreground">K</span>
                    <span className="text-5xl font-bold text-accent-foreground/80">airos</span>
                    <p className="text-sm text-accent-foreground/70 mt-2">R&D Solutions Pvt. Ltd.</p>
                  </div>

                  <div className="space-y-4 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">San Francisco Bay Area & Hyderabad, India</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <Globe className="h-4 w-4 text-accent" />
                      <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                        www.kairosrds.com
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: Main Content */}
                <div className="lg:w-2/3">
                  {/* SEO-Optimized H1 */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                    Dr. Ashwani Dhar – Founder & CEO of <span className="text-accent">Kairos R&D Solutions</span>
                  </h1>

                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    <strong className="text-foreground">Dr. Ashwani Dhar, MD, DMI</strong>, is the Founder and CEO of{" "}
                    <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                      Kairos R&D Solutions Pvt. Ltd.
                    </Link>
                    , a specialized <strong className="text-foreground">Clinical Research Organization (CRO)</strong> with operations in the San Francisco Bay Area and Hyderabad, India.
                  </p>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Under Dr. Dhar&apos;s leadership, <strong className="text-foreground">Kairos</strong> has established itself as a leader in AI-enabled clinical trials, patient recruitment, real-world evidence studies, and strategic pharmaceutical partnerships including collaborations with <strong className="text-foreground">Novo Nordisk</strong>.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                      <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer">
                        Visit Kairos R&D Solutions <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="https://kairosrds.com/contact" target="_blank" rel="noopener noreferrer">
                        Partner with Kairos
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="h-6 w-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Company Overview & Mission</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    <strong className="text-foreground">Kairos R&D Solutions</strong> is a specialized Clinical Research Organization (CRO) committed to connecting and empowering sites, sponsors, and patients through innovative solutions that accelerate clinical research.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    The company integrates cutting-edge technology, including artificial intelligence and machine learning, with deep clinical expertise to deliver end-to-end research services. From patient recruitment to regulatory compliance, Kairos ensures quality, efficiency, and patient-centricity at every stage.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With operations spanning the United States and India, Kairos serves pharmaceutical companies, biotech firms, and medical device manufacturers seeking to accelerate their drug development programs while maintaining the highest standards of scientific integrity.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Target className="h-8 w-8 text-accent shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                          <p className="text-muted-foreground text-sm">
                            To accelerate drug development and improve global healthcare access through ethical, technology-forward clinical research that puts patients first.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Lightbulb className="h-8 w-8 text-accent shrink-0" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                          <p className="text-muted-foreground text-sm">
                            To be the most trusted partner in clinical research, known for innovation, integrity, and impact on global health outcomes.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Leadership: Dr. Ashwani Dhar&apos;s Role</h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Photo/Profile Card */}
                <div className="lg:col-span-1">
                  <Card className="border-accent/20 overflow-hidden">
                    <div className="bg-accent p-8 text-center">
                      <div className="w-24 h-24 bg-accent-foreground/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-bold text-accent-foreground">AD</span>
                      </div>
                      <h3 className="text-xl font-bold text-accent-foreground">Dr. Ashwani Dhar</h3>
                      <p className="text-accent-foreground/80">MD, DMI</p>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-lg font-semibold text-center mb-4">Founder & CEO</p>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-accent" />
                          <span>Harvard T.H. Chan School of Public Health</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-accent" />
                          <span>Former CMIO, Cerner/Oracle Health</span>
                        </div>
                      </div>
                      <div className="mt-6 flex gap-2">
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link href="https://www.linkedin.com/in/ashdhar" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link href="/">
                            Full Profile
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Bio Content */}
                <div className="lg:col-span-2">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    As <strong className="text-foreground">Founder and CEO of Kairos R&D Solutions</strong>, Dr. Ashwani Dhar brings a unique combination of clinical medicine expertise, medical informatics knowledge, and entrepreneurial vision to the clinical research industry.
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    With a background that includes serving as <strong className="text-foreground">Senior Physician Executive and Chief Medical Informatics Officer (CMIO)</strong> at Cerner/Oracle Health, Dr. Dhar has deep expertise in healthcare technology, AI applications, and clinical workflows that directly inform Kairos&apos;s innovative approach to clinical trials.
                  </p>

                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Dr. Dhar&apos;s physician background (MD, DMI) combined with his training at <strong className="text-foreground">Harvard T.H. Chan School of Public Health</strong> enables him to bridge the gap between clinical practice, technology innovation, and pharmaceutical research - ensuring Kairos delivers solutions that truly serve patients and advance medical science.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FlaskConical className="h-5 w-5 text-accent" />
                    Key Focus Areas Under Dr. Dhar&apos;s Leadership
                  </h3>
                  
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {focusAreas.map((area, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-1 shrink-0" />
                        <span className="text-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <Beaker className="h-6 w-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Kairos Services & Expertise</h2>
              </div>
              <p className="text-muted-foreground mb-12 max-w-2xl">
                Comprehensive clinical research services powered by AI, delivered with the expertise of Dr. Ashwani Dhar&apos;s physician and informatics background.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="border-border hover:border-accent/50 transition-colors group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Kairos Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-accent/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Why Choose Kairos R&D Solutions</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    <strong className="text-foreground">Kairos</strong> stands apart in the clinical research industry through its unique combination of physician-led expertise, AI-powered technology, and patient-centric approach. Dr. Ashwani Dhar&apos;s background ensures that every solution is designed with deep clinical understanding.
                  </p>

                  <ul className="space-y-4">
                    {[
                      "Physician-led organization with deep clinical expertise",
                      "AI-powered patient matching and recruitment",
                      "Proprietary Kairodox document management platform",
                      "End-to-end services from protocol to closeout",
                      "Global operations (US & India) for diverse patient populations",
                      "Strategic partnerships with leading pharmaceutical companies"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-accent" />
                    Strategic Partnerships
                  </h3>
                  
                  {partnerships.map((partner, index) => (
                    <Card key={index} className="border-accent/20">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                          <Building2 className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{partner.name}</p>
                          <p className="text-sm text-muted-foreground">{partner.type}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="h-6 w-6 text-accent" />
                <h2 className="text-2xl md:text-3xl font-bold">Get in Touch with Kairos</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Interested in partnering with Kairos R&D Solutions or learning more about our clinical research services? Contact us today.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  <Link href="https://kairosrds.com/contact" target="_blank" rel="noopener noreferrer">
                    Contact Kairos <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer">
                    Visit kairosrds.com
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-accent" />
                  <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    kairosrds.com
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>San Francisco Bay Area & Hyderabad, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Profile CTA */}
        <section className="py-12 border-t border-border bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-foreground font-medium">Learn more about Dr. Ashwani Dhar</p>
                  <p className="text-sm text-muted-foreground">Explore his full profile, other ventures, and products</p>
                </div>
                <Button asChild variant="outline">
                  <Link href="/" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Full Profile
                  </Link>
                </Button>
              </div>
              {/* Internal Link Architecture */}
              <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-border text-sm">
                <Link href="/story" className="text-muted-foreground hover:text-primary transition-colors">
                  Dr. Dhar&apos;s Story
                </Link>
                <Link href="/trpharma" className="text-muted-foreground hover:text-primary transition-colors">
                  TrPharma
                </Link>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
                <Link href="/products/kashmox" className="text-muted-foreground hover:text-primary transition-colors">
                  KashMOX 625
                </Link>
                <Link href="/products/one87-plus" className="text-muted-foreground hover:text-primary transition-colors">
                  One87 Plus
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
