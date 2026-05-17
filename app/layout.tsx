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
    'Kairos R&D Solutions',
    'Healthcare Innovation',
    'AI Healthcare',
    'Digital Health',
    'Medical Informatics',
    'Fremont California Physician',
    'Oracle Health',
    'Cerner CMIO',
    'TrPharma',
    'Healthcare Technology'
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
  "url": "https://kairosrds.com",
  "description": "Clinical research organization connecting and empowering sites, sponsors, and patients through innovative solutions that accelerate clinical research.",
  "founder": {
    "@type": "Person",
    "name": "Dr. Ashwani Dhar"
  },
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    }
  }
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
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
