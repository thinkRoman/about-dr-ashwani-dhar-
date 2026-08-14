import type { Metadata } from "next"
import StoryRedesign from "@/components/story-redesign"

const BASE_URL = "https://www.about-dr-ashwani-dhar.com"

export const metadata: Metadata = {
  title: "Dr. Ashwani Dhar's Story | From Physician to Healthcare Entrepreneur | Founder of Kairos & TrPharma",
  description: "The journey of Dr. Ashwani Dhar MD DMI - From practicing physician to healthcare innovator. Learn about his vision for Kairos R&D Solutions, TrPharma, and ThinkRoman Ventures. First-person account of founding KashMOX 625 and One87 Plus.",
  keywords: [
    "Dr Ashwani Dhar story", "Dr Ashwani Dhar journey", "Ashwani Dhar biography",
    "Dr Ashwani Dhar founder", "Dr Ashwani Dhar entrepreneur", "Dr Ashwani Dhar vision",
    "Kairos founder story", "TrPharma founder story", "ThinkRoman Ventures founder",
    "KashMOX 625 creator", "healthcare entrepreneur India", "physician entrepreneur"
  ],
  openGraph: {
    title: "Dr. Ashwani Dhar's Story - From Physician to Healthcare Entrepreneur",
    description: "The journey of founding Kairos R&D Solutions, TrPharma (KashMOX 625), and ThinkRoman Ventures.",
    type: "profile",
    url: `${BASE_URL}/story`,
    siteName: "Dr. Ashwani Dhar"
  },
  alternates: {
    canonical: `${BASE_URL}/story`
  }
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Dr. Ashwani Dhar's Journey: From Physician to Healthcare Entrepreneur",
  "alternativeHeadline": "The Story Behind Kairos R&D Solutions, TrPharma, and ThinkRoman Ventures",
  "author": {
    "@type": "Person",
    "@id": `${BASE_URL}/#person-dr-ashwani-dhar`,
    "name": "Dr. Ashwani Dhar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Dr. Ashwani Dhar",
    "url": BASE_URL
  },
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split("T")[0],
  "description": "First-person account of Dr. Ashwani Dhar's journey from practicing physician to founding Kairos R&D Solutions, TrPharma (KashMOX 625, One87 Plus), and ThinkRoman Ventures.",
  "mainEntityOfPage": `${BASE_URL}/story`,
  "about": [
    { "@id": `${BASE_URL}/#person-dr-ashwani-dhar` },
    { "@id": `${BASE_URL}/#org-kairos` },
    { "@id": `${BASE_URL}/#org-trpharma` }
  ]
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Dr. Ashwani Dhar", "item": BASE_URL },
    { "@type": "ListItem", "position": 2, "name": "My Story", "item": `${BASE_URL}/story` }
  ]
}

export default function FounderStoryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <StoryRedesign />
    </>
  )
}
