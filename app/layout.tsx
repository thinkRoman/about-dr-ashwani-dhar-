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
    'Kairos patient recruitment',
    'Kairos clinical trials',
    'Kairos Hyderabad',
    'Kairos pharmaceutical',
    'kairosrds',
    'kairosrds.com',
    'www.kairosrds.com',
    'Kairos Patient Recruitment',
    'Kairos Clinical Trials',
    'KashMOX',
    'KashMOX 625',
    'KashMOX antibiotic',
    'KashMOX Amoxicillin',
    'KashMOX Clavulanate',
    'KashMOX TrPharma',
    'KashMOX tablet',
    'KashMOX medicine',
    'KashMOX India',
    'Amoxicillin Potassium Clavulanate',
    'TrPharma',
    'TrPharma India',
    'trpharma187',
    'TrPharma KashMOX',
    'TrPharma antibiotic',
    'TrPharma ThinkRoman',
    'pharma.thinkroman.com',
    'pharmacy.thinkroman.com',
    'Healthcare Innovation',
    'AI Healthcare',
    'Digital Health',
    'Medical Informatics',
    'Fremont California Physician',
    'Oracle Health',
    'Cerner CMIO',
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

// Deep SEO Schema for KashMOX 625 Product
const kashmoxProductSchema = {
  "@context": "https://schema.org",
  "@type": "Drug",
  "name": "KashMOX 625",
  "alternateName": ["KashMOX", "KashMOX 625 Tablet", "KashMOX Antibiotic", "Amoxicillin Clavulanate TrPharma"],
  "description": "KashMOX 625 is a broad-spectrum antibiotic containing Amoxicillin 500mg and Potassium Clavulanate 125mg. Manufactured by TrPharma, a division of ThinkRoman Ventures founded by Dr. Ashwani Dhar. Used for respiratory tract infections, urinary tract infections, skin infections, and dental infections.",
  "activeIngredient": [
    {
      "@type": "DrugStrength",
      "activeIngredient": "Amoxicillin Trihydrate",
      "strengthValue": "500",
      "strengthUnit": "mg"
    },
    {
      "@type": "DrugStrength", 
      "activeIngredient": "Potassium Clavulanate",
      "strengthValue": "125",
      "strengthUnit": "mg"
    }
  ],
  "drugClass": "Antibiotic",
  "dosageForm": "Tablet",
  "isProprietary": true,
  "proprietaryName": "KashMOX 625",
  "nonProprietaryName": "Amoxicillin and Potassium Clavulanate Tablets I.P.",
  "manufacturer": {
    "@type": "Organization",
    "name": "TrPharma",
    "url": "https://pharma.thinkroman.com"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://about-dr-ashwani-dhar.vercel.app/images/kashmox-625.webp",
    "name": "KashMOX 625 Antibiotic Tablet Box - TrPharma",
    "description": "KashMOX 625 Amoxicillin Potassium Clavulanate Tablets packaging by TrPharma, a division of ThinkRoman Ventures",
    "width": 1200,
    "height": 1015
  },
  "url": "https://pharma.thinkroman.com/products#kashmox",
  "sameAs": [
    "https://pharma.thinkroman.com/products",
    "https://pharmacy.thinkroman.com"
  ]
}

// Deep SEO Schema for KashMOX Image
const kashmoxImageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://about-dr-ashwani-dhar.vercel.app/images/kashmox-625.webp",
  "url": "https://about-dr-ashwani-dhar.vercel.app/images/kashmox-625.webp",
  "name": "KashMOX 625 - Amoxicillin Potassium Clavulanate Antibiotic Tablet",
  "description": "KashMOX 625 tablet box packaging showing Amoxicillin 500mg and Potassium Clavulanate 125mg. Manufactured by TrPharma, a doctor-led pharmaceutical division of ThinkRoman Ventures founded by Dr. Ashwani Dhar MD DMI. WHO-GMP certified antibiotic for respiratory infections, UTI, skin infections.",
  "caption": "KashMOX 625 - TrPharma's flagship antibiotic product",
  "creditText": "TrPharma - A Division of ThinkRoman Ventures LLP",
  "creator": {
    "@type": "Organization",
    "name": "TrPharma",
    "url": "https://pharma.thinkroman.com"
  },
  "copyrightHolder": {
    "@type": "Organization",
    "name": "ThinkRoman Ventures LLP"
  },
  "acquireLicensePage": "https://pharma.thinkroman.com",
  "width": 1200,
  "height": 1015,
  "encodingFormat": "image/webp"
}

// Deep SEO Schema for Kairos Logo/Brand Image
const kairosImageSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://kairosrds.com/logo.png",
  "url": "https://kairosrds.com/logo.png",
  "name": "Kairos R&D Solutions Logo - Clinical Research Organization",
  "description": "Official logo of Kairos R&D Solutions Pvt. Ltd., a specialized Clinical Research Organization (CRO) founded by Dr. Ashwani Dhar MD DMI. Kairos provides patient recruitment, clinical trial management, Kairodox document management, and AI-enabled research solutions.",
  "caption": "Kairos R&D Solutions - Your partner in Clinical Research",
  "creditText": "Kairos R&D Solutions Pvt. Ltd.",
  "creator": {
    "@type": "Organization",
    "name": "Kairos R&D Solutions",
    "url": "https://kairosrds.com"
  }
}

// Video Schema for Dr. Ashwani Dhar YouTube Videos
const videoSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Dr. Ashwani Dhar: Pharmacogenomics and Personalized Medicine - Genomics Gupshup Episode 24",
    "description": "Dr. Ashwani Dhar MD DMI, CEO of ThinkRoman Ventures and Founder of Kairos R&D Solutions, discusses the future of pharmacogenomics and personalized medicine with MapMyGenome. Topics include AI in healthcare, precision medicine, and the future of genomics.",
    "thumbnailUrl": "https://i.ytimg.com/vi/8sZDapqP03I/maxresdefault.jpg",
    "uploadDate": "2023-01-01",
    "duration": "PT38M",
    "contentUrl": "https://www.youtube.com/watch?v=8sZDapqP03I",
    "embedUrl": "https://www.youtube.com/embed/8sZDapqP03I",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 4300
    },
    "publisher": {
      "@type": "Organization",
      "name": "MapMyGenome",
      "url": "https://mapmygenome.in"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Dr. Ashwani Dhar - Vitamin D: The Sunshine Campaign - ThinkRoman TV",
    "description": "Dr. Ashwani Dhar MD DMI discusses the importance of Vitamin D for health and wellness. As CEO of ThinkRoman Ventures and Founder of TrPharma, Dr. Dhar explains the benefits of Vitamin D supplementation.",
    "thumbnailUrl": "https://i.ytimg.com/vi/9-GJB5dlyz4/maxresdefault.jpg",
    "uploadDate": "2022-01-01",
    "duration": "PT45M",
    "contentUrl": "https://www.youtube.com/watch?v=9-GJB5dlyz4",
    "embedUrl": "https://www.youtube.com/embed/9-GJB5dlyz4",
    "publisher": {
      "@type": "Organization",
      "name": "ThinkRoman TV"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Statement by CEO of ThinkRoman Ventures - Dr. Ashwani Dhar",
    "description": "Dr. Ashwani Dhar MD DMI, CEO of ThinkRoman Ventures, discusses the startup journey of his companies in India including Kairos R&D Solutions and TrPharma pharmaceutical division.",
    "thumbnailUrl": "https://i.ytimg.com/vi/VFHsUNEfkYQ/maxresdefault.jpg",
    "uploadDate": "2022-01-01",
    "duration": "PT22M",
    "contentUrl": "https://www.youtube.com/watch?v=VFHsUNEfkYQ",
    "embedUrl": "https://www.youtube.com/embed/VFHsUNEfkYQ",
    "publisher": {
      "@type": "Organization",
      "name": "Karnataka Current News"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "NRI Health Show: New Age Health Care - Dr. Ashwani Dhar on Sakshi TV",
    "description": "Ask Your Doctor with Dr. Ashwani Dhar MD DMI on Sakshi TV. Dr. Dhar discusses new age healthcare, AI in medicine, and personalized healthcare solutions.",
    "thumbnailUrl": "https://i.ytimg.com/vi/9p8GiZ6UEyM/maxresdefault.jpg",
    "uploadDate": "2022-01-01",
    "duration": "PT27M",
    "contentUrl": "https://www.youtube.com/watch?v=9p8GiZ6UEyM",
    "embedUrl": "https://www.youtube.com/embed/9p8GiZ6UEyM",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 1700
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sakshi TV"
    }
  }
]

// Breadcrumb Schema for better navigation indexing
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Dr. Ashwani Dhar",
      "item": "https://about-dr-ashwani-dhar.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Kairos R&D Solutions",
      "item": "https://about-dr-ashwani-dhar.vercel.app/kairos"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "TrPharma",
      "item": "https://about-dr-ashwani-dhar.vercel.app/trpharma"
    }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kashmoxProductSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kashmoxImageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(kairosImageSchema) }}
        />
        {videoSchemas.map((video, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(video) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
