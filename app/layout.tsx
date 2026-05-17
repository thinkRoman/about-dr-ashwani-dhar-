import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Base URL for canonical references
const BASE_URL = "https://about-dr-ashwani-dhar.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Dr. Ashwani Dhar MD DMI | Kairos R&D Solutions | KashMOX 625 | TrPharma',
    template: '%s | Dr. Ashwani Dhar'
  },
  description: 'Dr. Ashwani Dhar MD DMI - Founder & CEO of Kairos R&D Solutions (Clinical Research CRO) and TrPharma (KashMOX 625, One87 Plus). Healthcare innovator, ThinkRoman Ventures CEO. Fremont CA.',
  keywords: [
    // Dr. Ashwani Dhar variations
    'Dr. Ashwani Dhar', 'Dr Ashwani Dhar', 'Ashwani Dhar', 'Dr Ashwani Dhar MD', 'Dr Ashwani Dhar DMI',
    'Ashwani Dhar MD DMI', 'Ashwani Dhar ThinkRoman', 'Ashwani Dhar Kairos', 'Ashwani Dhar TrPharma',
    // Kairos variations
    'Kairos', 'Kairos R&D', 'Kairos R&D Solutions', 'Kairos RDS', 'Kairos CRO', 'Kairos Healthcare',
    'Kairos Clinical Research', 'Kairos India', 'Kairos Hyderabad', 'Kairos patient recruitment',
    'Kairos clinical trials', 'Kairos Kairodox', 'kairosrds', 'kairosrds.com', 'www.kairosrds.com',
    // KashMOX variations
    'KashMOX', 'KashMOX 625', 'KashMOX tablet', 'KashMOX antibiotic', 'KashMOX Amoxicillin',
    'KashMOX Clavulanate', 'KashMOX TrPharma', 'KashMOX medicine', 'KashMOX India', 'KashMOX price',
    // One87 Plus / 880 PLUS variations
    'One87 Plus', 'One87 Plus tablet', 'One87 Plus pain relief', 'One87 Plus TrPharma',
    '880 PLUS', '880PLUS', '880 PLUS tablet', '880 PLUS pain relief', '880 PLUS TrPharma',
    'Aceclofenac Paracetamol', 'One87 Plus medicine',
    // KashCAL PLUS variations
    'KashCAL PLUS', 'KashCAL', 'KashCAL tablet', 'KashCAL calcium', 'KashCAL vitamin D',
    'KashCAL TrPharma', 'KashCAL bone health',
    // TrPharma variations
    'TrPharma', 'TrPharma India', 'trpharma187', 'TrPharma pharmaceutical', 'TrPharma KashMOX',
    'TrPharma products', 'TrPharma medicine', 'TrPharma antibiotic', 'TrPharma tablets',
    'TrPharma Dr Ashwani Dhar', 'TrPharma ThinkRoman', 'TrPharma One87', 'TrPharma 880',
    'TrPharma KashCAL', 'TrPharma GMP', 'TrPharma India pharmaceutical', 'TrPharma healthcare',
    'pharma.thinkroman.com', 'pharmacy.thinkroman.com', 'ThinkRoman pharma', 'ThinkRoman pharmacy',
    // General
    'ThinkRoman CEO', 'Healthcare Innovation', 'AI Healthcare', 'Clinical Research Organization'
  ],
  authors: [{ name: 'Dr. Ashwani Dhar', url: 'https://drashwanidhar.thinkroman.com' }],
  creator: 'Dr. Ashwani Dhar',
  publisher: 'ThinkRoman Ventures',
  openGraph: {
    type: 'profile',
    firstName: 'Ashwani',
    lastName: 'Dhar',
    title: 'Dr. Ashwani Dhar MD DMI | Kairos R&D Solutions | KashMOX | TrPharma',
    description: 'Founder & CEO of Kairos R&D Solutions (CRO) and TrPharma (KashMOX 625). Healthcare innovator and ThinkRoman Ventures CEO.',
    siteName: 'Dr. Ashwani Dhar - Official Profile',
    locale: 'en_US',
    images: [
      {
        url: '/images/kashmox-625.webp',
        width: 1200,
        height: 1015,
        alt: 'KashMOX 625 - TrPharma Antibiotic by Dr. Ashwani Dhar'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Ashwani Dhar | Kairos R&D | KashMOX 625 | TrPharma',
    description: 'Founder of Kairos R&D Solutions & TrPharma. Creator of KashMOX 625 antibiotic.',
    creator: '@ash_dhar',
    images: ['/images/kashmox-625.webp']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'verification-code-here',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

// ============================================================================
// AI-ENHANCED ENTITY GRAPH SEO - 2026 Best Practices
// Uses @id for Knowledge Graph entity recognition and cross-referencing
// ============================================================================

// Master Entity Graph - Links all entities together for AI understanding
const entityGraph = {
  "@context": "https://schema.org",
  "@graph": [
    // ==================== DR. ASHWANI DHAR - PRIMARY ENTITY ====================
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person-dr-ashwani-dhar`,
      "name": "Dr. Ashwani Dhar",
      "alternateName": ["Ashwani Dhar", "Dr Ashwani Dhar", "Dr. Ashwani Dhar MD", "Dr. Ashwani Dhar MD DMI", "Ashwani Dhar MD DMI", "Dr Ashwani Dhar ThinkRoman", "Ashwani Dhar Kairos"],
      "honorificPrefix": "Dr.",
      "givenName": "Ashwani",
      "familyName": "Dhar",
      "jobTitle": ["Founder & CEO", "Chairman", "Physician"],
      "description": "Dr. Ashwani Dhar MD DMI is a physician, healthcare innovator, and entrepreneur. Founder & CEO of ThinkRoman Ventures, Kairos R&D Solutions (Clinical Research CRO), and TrPharma (KashMOX 625, One87 Plus). Former Senior Physician Executive and CMIO at Cerner/Oracle Health.",
      "image": `${BASE_URL}/images/dr-ashwani-dhar.jpg`,
      "url": "https://drashwanidhar.thinkroman.com",
      "sameAs": [
        "https://www.linkedin.com/in/ashdhar",
        "https://twitter.com/ash_dhar",
        "https://www.instagram.com/trpharma187",
        "https://medium.com/@ashdhar",
        "https://thinkroman.com",
        "https://drashwanidhar.thinkroman.com",
        "https://www.durandhar.com",
        "https://kairosrds.com",
        "https://www.kairosrds.com",
        "https://pharma.thinkroman.com",
        "https://pharmacy.thinkroman.com"
      ],
      "worksFor": [
        { "@id": `${BASE_URL}/#org-thinkroman` },
        { "@id": `${BASE_URL}/#org-kairos` },
        { "@id": `${BASE_URL}/#org-trpharma` }
      ],
      "founder": [
        { "@id": `${BASE_URL}/#org-kairos` },
        { "@id": `${BASE_URL}/#org-trpharma` }
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
      "knowsAbout": [
        "AI in Healthcare", "Clinical Research", "Pharmacogenomics", "Digital Health",
        "Medical Informatics", "Healthcare Technology", "Personalized Medicine",
        "Drug Development", "Telemedicine", "EHR Systems"
      ]
    },

    // ==================== KAIROS R&D SOLUTIONS - ORGANIZATION ====================
    {
      "@type": ["Organization", "MedicalBusiness"],
      "@id": `${BASE_URL}/#org-kairos`,
      "name": "Kairos R&D Solutions",
      "legalName": "Kairos R&D Solutions Pvt. Ltd.",
      "alternateName": ["Kairos", "Kairos RDS", "Kairos CRO", "Kairos Healthcare", "Kairos Clinical Research", "kairosrds", "Kairos India"],
      "url": "https://kairosrds.com",
      "logo": "https://kairosrds.com/logo.png",
      "image": "https://kairosrds.com/logo.png",
      "description": "Kairos R&D Solutions is a specialized Clinical Research Organization (CRO) founded by Dr. Ashwani Dhar. Providing patient recruitment, clinical trial management, Kairodox document management, AI-enabled research, and pharmacovigilance services.",
      "slogan": "Your partner in Clinical Research - Making It Seamless",
      "founder": { "@id": `${BASE_URL}/#person-dr-ashwani-dhar` },
      "foundingDate": "2020",
      "areaServed": ["Worldwide", "India", "United States", "Europe"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://kairosrds.com",
        "https://www.kairosrds.com",
        "https://www.linkedin.com/company/kairos-rds"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kairos Clinical Research Services",
        "itemListElement": [
          {
            "@type": "Service",
            "@id": `${BASE_URL}/#service-patient-recruitment`,
            "name": "Patient Recruitment",
            "description": "Access to millions of diverse patients through healthcare networks with AI-powered matching"
          },
          {
            "@type": "Service",
            "@id": `${BASE_URL}/#service-kairodox`,
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
            "description": "Technology-driven research solutions with AI-powered data analytics"
          }
        ]
      }
    },

    // ==================== TRPHARMA - ORGANIZATION ====================
    {
      "@type": ["Organization", "Pharmacy", "MedicalBusiness"],
      "@id": `${BASE_URL}/#org-trpharma`,
      "name": "TrPharma",
      "legalName": "TrPharma - A Division of ThinkRoman Ventures LLP",
      "alternateName": ["TrPharma India", "trpharma187", "ThinkRoman Pharma", "TrPharma Pharmaceutical", "TrPharma Healthcare", "TrPharma Medicine", "ThinkRoman Pharmacy"],
      "url": "https://pharma.thinkroman.com",
      "logo": "https://pharma.thinkroman.com/logo.png",
      "image": "https://pharma.thinkroman.com/logo.png",
      "description": "TrPharma is a doctor-led pharmaceutical division founded by Dr. Ashwani Dhar MD DMI. Manufacturer of KashMOX 625 antibiotic, One87 Plus (880 PLUS) pain relief, and KashCAL PLUS supplements. WHO-GMP certified, affordable healthcare solutions. Visit pharma.thinkroman.com or pharmacy.thinkroman.com.",
      "slogan": "Your Health and Wellness Partner",
      "founder": { "@id": `${BASE_URL}/#person-dr-ashwani-dhar` },
      "parentOrganization": { "@id": `${BASE_URL}/#org-thinkroman` },
      "foundingDate": "2021",
      "areaServed": ["India", "Worldwide"],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://pharma.thinkroman.com",
        "https://pharmacy.thinkroman.com",
        "https://www.instagram.com/trpharma187",
        "https://thinkroman.com"
      ],
      "makesOffer": [
        { "@id": `${BASE_URL}/#product-kashmox-625` },
        { "@id": `${BASE_URL}/#product-one87-plus` },
        { "@id": `${BASE_URL}/#product-kashcal-plus` }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "TrPharma Product Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@id": `${BASE_URL}/#product-kashmox-625` },
            "name": "KashMOX 625 Antibiotic",
            "description": "Amoxicillin Clavulanate broad-spectrum antibiotic"
          },
          {
            "@type": "Offer",
            "itemOffered": { "@id": `${BASE_URL}/#product-one87-plus` },
            "name": "One87 Plus / 880 PLUS Pain Relief",
            "description": "Aceclofenac Paracetamol pain relief tablet"
          },
          {
            "@type": "Offer",
            "itemOffered": { "@id": `${BASE_URL}/#product-kashcal-plus` },
            "name": "KashCAL PLUS Bone Health",
            "description": "Calcium Vitamin D3 bone health supplement"
          }
        ]
      }
    },

    // ==================== THINKROMAN VENTURES - PARENT ORG ====================
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org-thinkroman`,
      "name": "ThinkRoman Ventures",
      "legalName": "ThinkRoman Ventures LLP",
      "url": "https://thinkroman.com",
      "founder": { "@id": `${BASE_URL}/#person-dr-ashwani-dhar` },
      "subOrganization": [
        { "@id": `${BASE_URL}/#org-kairos` },
        { "@id": `${BASE_URL}/#org-trpharma` }
      ]
    },

    // ==================== KASHMOX 625 - PRODUCT/DRUG ====================
    {
      "@type": "Drug",
      "@id": `${BASE_URL}/#product-kashmox-625`,
      "name": "KashMOX 625",
      "alternateName": ["KashMOX", "KashMOX 625 Tablet", "KashMOX Antibiotic", "Amoxicillin Clavulanate TrPharma"],
      "description": "KashMOX 625 is a broad-spectrum antibiotic tablet containing Amoxicillin 500mg and Potassium Clavulanate 125mg. Manufactured by TrPharma, founded by Dr. Ashwani Dhar. WHO-GMP certified. Used for respiratory tract infections, UTI, skin infections, dental infections.",
      "drugClass": "Antibiotic",
      "activeIngredient": "Amoxicillin Trihydrate 500mg, Potassium Clavulanate 125mg",
      "dosageForm": "Tablet",
      "administrationRoute": "Oral",
      "isProprietary": true,
      "proprietaryName": "KashMOX 625",
      "nonProprietaryName": "Amoxicillin and Potassium Clavulanate Tablets I.P.",
      "manufacturer": { "@id": `${BASE_URL}/#org-trpharma` },
      "image": {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#image-kashmox`,
        "url": `${BASE_URL}/images/kashmox-625.webp`,
        "contentUrl": `${BASE_URL}/images/kashmox-625.webp`,
        "name": "KashMOX 625 Antibiotic Tablet - TrPharma",
        "description": "KashMOX 625 Amoxicillin Potassium Clavulanate Tablets packaging by TrPharma, Dr. Ashwani Dhar",
        "width": 1200,
        "height": 1015,
        "encodingFormat": "image/webp"
      },
      "url": "https://pharma.thinkroman.com/products#kashmox"
    },

    // ==================== ONE87 PLUS - PRODUCT/DRUG ====================
    {
      "@type": "Drug",
      "@id": `${BASE_URL}/#product-one87-plus`,
      "name": "One87 Plus",
      "alternateName": ["One87 Plus Tablet", "One87 Plus Pain Relief", "880 PLUS", "880PLUS", "Aceclofenac Paracetamol TrPharma"],
      "description": "One87 Plus (also known as 880 PLUS) is a pain relief tablet containing Aceclofenac 100mg and Paracetamol 325mg. Manufactured by TrPharma, founded by Dr. Ashwani Dhar. Used for arthritis, musculoskeletal pain, dental pain, post-operative pain.",
      "drugClass": "NSAID / Analgesic",
      "activeIngredient": "Aceclofenac 100mg, Paracetamol 325mg",
      "dosageForm": "Tablet",
      "administrationRoute": "Oral",
      "isProprietary": true,
      "proprietaryName": "One87 Plus",
      "manufacturer": { "@id": `${BASE_URL}/#org-trpharma` },
      "url": "https://pharma.thinkroman.com/products#one87plus"
    },

    // ==================== KASHCAL PLUS - PRODUCT ====================
    {
      "@type": "Drug",
      "@id": `${BASE_URL}/#product-kashcal-plus`,
      "name": "KashCAL PLUS",
      "alternateName": ["KashCAL", "KashCAL PLUS Tablet", "Calcium Vitamin D TrPharma"],
      "description": "KashCAL PLUS is a bone health supplement manufactured by TrPharma, a division of ThinkRoman Ventures founded by Dr. Ashwani Dhar. Contains Calcium and Vitamin D3 for bone strength and health.",
      "drugClass": "Dietary Supplement",
      "activeIngredient": "Calcium, Vitamin D3",
      "dosageForm": "Tablet",
      "administrationRoute": "Oral",
      "isProprietary": true,
      "proprietaryName": "KashCAL PLUS",
      "manufacturer": { "@id": `${BASE_URL}/#org-trpharma` },
      "url": "https://pharma.thinkroman.com/products#kashcalplus"
    },

    // ==================== WEBSITE ====================
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "Dr. Ashwani Dhar - Official Profile",
      "description": "Official profile of Dr. Ashwani Dhar MD DMI - Founder of Kairos R&D Solutions and TrPharma",
      "publisher": { "@id": `${BASE_URL}/#person-dr-ashwani-dhar` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },

    // ==================== BREADCRUMB ====================
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
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
          "name": "Kairos R&D Solutions",
          "item": `${BASE_URL}/kairos`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "TrPharma & KashMOX",
          "item": `${BASE_URL}/trpharma`
        }
      ]
    }
  ]
}

// ==================== FAQ SCHEMA - Featured Snippets ====================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Dr. Ashwani Dhar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dr. Ashwani Dhar MD DMI is a physician, healthcare innovator, and entrepreneur based in Fremont, California. He is the Founder & CEO of ThinkRoman Ventures, Kairos R&D Solutions (a Clinical Research Organization), and TrPharma (manufacturer of KashMOX 625 and One87 Plus). He previously served as Senior Physician Executive and CMIO at Cerner/Oracle Health."
      }
    },
    {
      "@type": "Question",
      "name": "Who is Ashwani Dhar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ashwani Dhar (Dr. Ashwani Dhar MD DMI) is a physician and healthcare entrepreneur. He founded ThinkRoman Ventures, Kairos R&D Solutions (kairosrds.com), and TrPharma. He is the creator of KashMOX 625 antibiotic and One87 Plus (880 PLUS) pain relief medications."
      }
    },
    {
      "@type": "Question",
      "name": "What is Kairos R&D Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kairos R&D Solutions (kairosrds.com) is a specialized Clinical Research Organization (CRO) founded by Dr. Ashwani Dhar. Kairos provides patient recruitment, clinical trial management, Kairodox document management, AI-enabled research, and pharmacovigilance services. Their tagline is 'Your partner in Clinical Research - Making It Seamless.'"
      }
    },
    {
      "@type": "Question",
      "name": "What is Kairos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kairos (Kairos R&D Solutions Pvt. Ltd.) is a Clinical Research Organization founded by Dr. Ashwani Dhar. Also known as Kairos RDS, Kairos CRO, or kairosrds. Visit kairosrds.com for patient recruitment, clinical trials, and Kairodox document management services."
      }
    },
    {
      "@type": "Question",
      "name": "What is KashMOX 625?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashMOX 625 is a broad-spectrum antibiotic manufactured by TrPharma, a division of ThinkRoman Ventures founded by Dr. Ashwani Dhar. It contains Amoxicillin 500mg and Potassium Clavulanate 125mg. KashMOX 625 is used to treat respiratory tract infections, urinary tract infections, skin infections, and dental infections. It is WHO-GMP certified."
      }
    },
    {
      "@type": "Question",
      "name": "What is KashMOX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashMOX (KashMOX 625) is an antibiotic tablet by TrPharma containing Amoxicillin and Potassium Clavulanate. Created under the healthcare ecosystem of Dr. Ashwani Dhar and ThinkRoman Ventures. Available at pharma.thinkroman.com."
      }
    },
    {
      "@type": "Question",
      "name": "What is One87 Plus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One87 Plus (also known as 880 PLUS) is a pain relief tablet manufactured by TrPharma, founded by Dr. Ashwani Dhar. It contains Aceclofenac 100mg and Paracetamol 325mg. One87 Plus is used for arthritis pain, musculoskeletal pain, dental pain, and post-operative pain relief."
      }
    },
    {
      "@type": "Question",
      "name": "What is 880 PLUS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "880 PLUS (One87 Plus) is a pain relief medication by TrPharma containing Aceclofenac and Paracetamol. Part of the ThinkRoman healthcare ecosystem founded by Dr. Ashwani Dhar MD DMI. Available at pharma.thinkroman.com."
      }
    },
    {
      "@type": "Question",
      "name": "What is TrPharma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TrPharma (pharma.thinkroman.com) is a doctor-led pharmaceutical division of ThinkRoman Ventures, founded by Dr. Ashwani Dhar MD DMI. TrPharma manufactures affordable, GMP-certified medications including KashMOX 625 antibiotic and One87 Plus (880 PLUS) pain relief tablets. Follow @trpharma187 on Instagram."
      }
    },
    {
      "@type": "Question",
      "name": "What products does TrPharma make?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TrPharma manufactures KashMOX 625 (Amoxicillin Clavulanate antibiotic), One87 Plus / 880 PLUS (Aceclofenac Paracetamol pain relief), and KashCAL PLUS (bone health supplement). All products are developed under the medical oversight of Dr. Ashwani Dhar MD DMI."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy TrPharma products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TrPharma products including KashMOX 625, One87 Plus (880 PLUS), and KashCAL PLUS are available at pharma.thinkroman.com and pharmacy.thinkroman.com. Follow @trpharma187 on Instagram for updates. TrPharma is a doctor-led pharmaceutical company founded by Dr. Ashwani Dhar."
      }
    },
    {
      "@type": "Question",
      "name": "Is TrPharma GMP certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, TrPharma products are WHO-GMP certified. TrPharma, founded by Dr. Ashwani Dhar MD DMI, follows strict quality control and manufacturing standards for all medications including KashMOX 625 and One87 Plus (880 PLUS)."
      }
    },
    {
      "@type": "Question",
      "name": "Who founded TrPharma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TrPharma was founded by Dr. Ashwani Dhar MD DMI as a division of ThinkRoman Ventures LLP. Dr. Dhar is a physician and healthcare entrepreneur who also founded Kairos R&D Solutions. TrPharma is a doctor-led pharmaceutical company focused on affordable, quality medications."
      }
    },
    {
      "@type": "Question",
      "name": "What is pharma.thinkroman.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "pharma.thinkroman.com is the official website of TrPharma, the pharmaceutical division of ThinkRoman Ventures founded by Dr. Ashwani Dhar. The site offers TrPharma products including KashMOX 625 antibiotic, One87 Plus (880 PLUS) pain relief, and KashCAL PLUS supplements."
      }
    },
    {
      "@type": "Question",
      "name": "What is KashCAL PLUS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KashCAL PLUS is a bone health supplement manufactured by TrPharma, founded by Dr. Ashwani Dhar MD DMI. It contains Calcium and Vitamin D3 for bone strength, osteoporosis prevention, and overall bone health. Available at pharma.thinkroman.com."
      }
    }
  ]
}

// ==================== SPEAKABLE SCHEMA - Voice Search ====================
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dr. Ashwani Dhar - Founder of Kairos R&D Solutions and TrPharma",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["#about", "#kairos", "#trpharma", "h1", "h2"]
  },
  "url": BASE_URL
}

// ==================== VIDEO SCHEMAS - YouTube Indexing ====================
const videoSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Dr. Ashwani Dhar: Pharmacogenomics and Personalized Medicine",
    "description": "Dr. Ashwani Dhar MD DMI, CEO of ThinkRoman Ventures and Founder of Kairos R&D Solutions, discusses pharmacogenomics and personalized medicine on Genomics Gupshup Episode 24.",
    "thumbnailUrl": "https://i.ytimg.com/vi/8sZDapqP03I/maxresdefault.jpg",
    "uploadDate": "2023-01-01",
    "duration": "PT38M",
    "contentUrl": "https://www.youtube.com/watch?v=8sZDapqP03I",
    "embedUrl": "https://www.youtube.com/embed/8sZDapqP03I",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 4300
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Dr. Ashwani Dhar - Vitamin D: The Sunshine Campaign",
    "description": "Dr. Ashwani Dhar discusses Vitamin D importance. Founder of TrPharma (KashMOX 625) and Kairos R&D Solutions.",
    "thumbnailUrl": "https://i.ytimg.com/vi/9-GJB5dlyz4/maxresdefault.jpg",
    "uploadDate": "2022-01-01",
    "duration": "PT45M",
    "contentUrl": "https://www.youtube.com/watch?v=9-GJB5dlyz4",
    "embedUrl": "https://www.youtube.com/embed/9-GJB5dlyz4"
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Statement by CEO of ThinkRoman Ventures - Dr. Ashwani Dhar",
    "description": "Dr. Ashwani Dhar MD DMI, CEO of ThinkRoman Ventures, discusses Kairos R&D Solutions and TrPharma startups in India.",
    "thumbnailUrl": "https://i.ytimg.com/vi/VFHsUNEfkYQ/maxresdefault.jpg",
    "uploadDate": "2022-01-01",
    "duration": "PT22M",
    "contentUrl": "https://www.youtube.com/watch?v=VFHsUNEfkYQ",
    "embedUrl": "https://www.youtube.com/embed/VFHsUNEfkYQ"
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        {/* AI-Enhanced Entity Graph - Primary SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph) }}
        />
        {/* FAQ Schema - Featured Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Speakable Schema - Voice Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
        />
        {/* Video Schemas - YouTube Indexing */}
        {videoSchemas.map((video, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(video) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
