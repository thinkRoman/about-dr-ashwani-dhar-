import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dr. Ashwani Dhar MD DMI | Healthcare Innovation Leader | ThinkRoman CEO',
  description: 'Dr. Ashwani Dhar MD DMI is a physician, healthcare innovator, and CEO of ThinkRoman Ventures. Former Senior Physician Executive and CMIO at Cerner/Oracle Health, AI healthcare innovator based in Fremont, California. Chairman of Kairos R&D Solutions.',
  keywords: [
    'Dr. Ashwani Dhar',
    'Dr Ashwani Dhar MD',
    'Dr Ashwani Dhar DMI',
    'Ashwani Dhar ThinkRoman',
    'ThinkRoman CEO',
    'Kairos',
    'Kairos R&D',
    'Kairos R&D Solutions',
    'Kairos RDS',
    'Kairos Healthcare',
    'Kairos Clinical Research',
    'Kairos CRO',
    'Kairos India',
    'Kairos Kairodox',
    'kairosrds',
    'kairosrds.com',
    'Kairos Patient Recruitment',
    'Kairos Clinical Trials',
    'Healthcare Innovation',
    'AI Healthcare',
    'Digital Health',
    'Medical Informatics',
    'Fremont California Physician',
    'Oracle Health',
    'Cerner CMIO',
    'TrPharma',
    'Healthcare Technology',
    'Clinical Research Organization',
    'CRO India',
    'Clinical Trial Management'
  ],
  authors: [{ name: 'Dr. Ashwani Dhar', url: 'https://drashwanidhar.thinkroman.com' }],
  creator: 'Dr. Ashwani Dhar',
  openGraph: {
    type: 'profile',
    firstName: 'Ashwani',
    lastName: 'Dhar',
    title: 'Dr. Ashwani Dhar MD DMI | Healthcare Innovation Leader',
    description: 'Physician, entrepreneur, and healthcare technology visionary. CEO of ThinkRoman Ventures and Chairman of Kairos R&D Solutions.',
    siteName: 'Dr. Ashwani Dhar - Official Profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Ashwani Dhar MD DMI | Healthcare Innovation Leader',
    description: 'CEO of ThinkRoman Ventures, Chairman of Kairos R&D Solutions. Pioneering AI-driven healthcare solutions.',
    creator: '@ash_dhar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://about-dr-ashwani-dhar.vercel.app',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

// JSON-LD Schema for Google Knowledge Panel
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Ashwani Dhar",
  "honorificPrefix": "Dr.",
  "givenName": "Ashwani",
  "familyName": "Dhar",
  "alternateName": ["Dr. Ashwani Dhar MD", "Dr. Ashwani Dhar MD DMI", "Ashwani Dhar MD", "Dr Ashwani Dhar ThinkRoman"],
  "jobTitle": "Chairman & CEO",
  "worksFor": [
    {
      "@type": "Organization",
      "name": "ThinkRoman Ventures",
      "url": "https://thinkroman.com"
    },
    {
      "@type": "Organization",
      "name": "Kairos R&D Solutions",
      "url": "https://kairosrds.com"
    },
    {
      "@type": "Organization",
      "name": "TrPharma",
      "url": "https://pharma.thinkroman.com"
    }
  ],
  "description": "Physician (MD, DMI), healthcare innovator, and CEO of ThinkRoman Ventures. Former Senior Physician Executive and CMIO at Cerner/Oracle Health. Chairman of Kairos R&D Solutions. AI healthcare innovator based in Fremont, California.",
  "url": "https://drashwanidhar.thinkroman.com",
  "sameAs": [
    "https://www.linkedin.com/in/ashdhar",
    "https://twitter.com/ash_dhar",
    "https://thinkroman.com",
    "https://drashwanidhar.thinkroman.com",
    "https://www.durandhar.com",
    "https://kairosrds.com",
    "https://www.kairosrds.com",
    "https://pharma.thinkroman.com",
    "https://pharmacy.thinkroman.com",
    "https://www.instagram.com/trpharma187",
    "https://medium.com/@ashdhar"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Harvard T.H. Chan School of Public Health"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Fremont",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "knowsAbout": ["AI in healthcare", "Digital health", "Medical informatics", "Telemedicine", "Cerner EHR", "Clinical Research", "Healthcare Technology", "Pharmacogenomics", "Personalized Medicine"]
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kairos R&D Solutions",
  "legalName": "Kairos R&D Solutions Pvt. Ltd.",
  "alternateName": ["Kairos", "Kairos RDS", "Kairos Healthcare", "Kairos CRO", "Kairos Clinical Research", "kairosrds"],
  "url": "https://kairosrds.com",
  "logo": "https://kairosrds.com/logo.png",
  "description": "Kairos R&D Solutions is a specialized Clinical Research Organization (CRO) providing end-to-end clinical trial management, patient recruitment, AI-enabled clinical research, regulatory compliance, and pharmacovigilance services. Founded by Dr. Ashwani Dhar MD DMI.",
  "slogan": "Connecting and empowering sites, sponsors, and patients through innovative solutions that accelerate clinical research",
  "founder": {
    "@type": "Person",
    "name": "Dr. Ashwani Dhar",
    "jobTitle": "Founder & CEO",
    "url": "https://drashwanidhar.thinkroman.com"
  },
  "foundingDate": "2020",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    }
  },
  "areaServed": ["Worldwide", "India", "United States", "Europe"],
  "knowsAbout": [
    "Clinical Research",
    "Clinical Trials",
    "Patient Recruitment",
    "CRO Services",
    "Pharmacovigilance",
    "Regulatory Compliance",
    "AI Clinical Research",
    "Real-world Evidence",
    "Drug Development",
    "Medical Device Trials"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kairos Clinical Research Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Patient Recruitment",
          "description": "Access to millions of diverse patients through healthcare organization networks with advanced matching technology"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kairodox",
          "description": "Sponsor-Centric Document Ordering & Management platform for seamless document management in clinical research"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Clinical Trial Management",
          "description": "End-to-end clinical trial management services from protocol design to study closeout"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI-Enabled Clinical Research",
          "description": "Technology-driven clinical research solutions with AI-powered data analytics"
        }
      }
    ]
  },
  "sameAs": [
    "https://kairosrds.com",
    "https://www.kairosrds.com",
    "https://www.linkedin.com/company/kairos-rds",
    "https://drashwanidhar.thinkroman.com"
  ]
}

const kairosWebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kairos R&D Solutions",
  "alternateName": ["Kairos", "Kairos RDS", "Kairos Healthcare"],
  "url": "https://kairosrds.com",
  "description": "Kairos R&D Solutions - Clinical Research Organization specializing in patient recruitment, clinical trial management, and AI-enabled research solutions.",
  "publisher": {
    "@type": "Organization",
    "name": "Kairos R&D Solutions"
  }
}

const kairosServiceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Kairos R&D Solutions",
  "alternateName": ["Kairos", "Kairos CRO", "Kairos Clinical Research"],
  "description": "Specialized Clinical Research Organization (CRO) offering patient recruitment, clinical trial management, Kairodox document management, and AI-enabled research services.",
  "url": "https://kairosrds.com",
  "priceRange": "$$",
  "medicalSpecialty": "Clinical Research",
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Clinical Trial Management",
      "description": "End-to-end management of clinical trials including patient recruitment, site management, and data collection"
    }
  ]
}

const trpharmaSchema = {
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
    "url": "https://drashwanidhar.thinkroman.com"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "ThinkRoman Ventures LLP",
    "url": "https://thinkroman.com"
  },
  "sameAs": [
    "https://pharma.thinkroman.com",
    "https://pharmacy.thinkroman.com",
    "https://www.instagram.com/trpharma187",
    "https://thinkroman.com"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kairosWebsiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kairosServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(trpharmaSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
