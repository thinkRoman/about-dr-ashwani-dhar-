import { SITE, SOCIAL, LINKS } from "@/lib/seo"

export const VENTURES = [
  {
    stat: "Operating",
    open: true,
    name: "Kairos R&D Solutions",
    role: "CEO · Founder",
    href: "/kairos",
    body: "A specialized clinical research organization (CRO) — AI-enabled trials, patient recruitment, real-world evidence, and the Kairodox document platform.",
    link: LINKS.kairos,
  },
  {
    stat: "Shipping",
    open: true,
    name: "TrPharma",
    role: "Founder",
    href: "/trpharma",
    body: "A doctor-led pharmaceutical division. WHO-GMP formulations — KashMOX 625, One87 Plus, KashCAL PLUS — priced for the people who take them.",
    link: LINKS.trPharma,
  },
  {
    stat: "Parent",
    open: false,
    name: "ThinkRoman Ventures",
    role: "CEO & Chairman",
    href: LINKS.thinkRoman,
    external: true,
    body: "The studio behind it all — 20+ products across care, clinical data, and access, each solving a specific place where healthcare delivery breaks.",
    link: LINKS.thinkRoman,
  },
]

export const VIDEOS = [
  { id: "8sZDapqP03I", tag: "Interview", title: "Pharmacogenomics & personalized medicine", meta: "Genomics Gupshup · Ep #24" },
  { id: "9p8GiZ6UEyM", tag: "TV Interview", title: "New-age health care", meta: "NRI Health Show" },
  { id: "9-GJB5dlyz4", tag: "Health", title: "Vitamin D: the sunshine campaign", meta: "Public health talk" },
  { id: "VFHsUNEfkYQ", tag: "Business", title: "CEO statement", meta: "ThinkRoman Ventures" },
]

export const WRITING = [
  {
    n: "01",
    tag: "Origin",
    title: "The opportunity beyond the bedside",
    dek: "A decade-plus in clinical care made the gaps impossible to unsee — so I set out to close them with systems, building the solutions one product at a time.",
  },
  {
    n: "02",
    tag: "Kairos",
    title: "The opportune moment",
    dek: "Research was slow and closed to smaller sponsors. Kairos — Greek for the right time to act — is the answer.",
  },
  {
    n: "03",
    tag: "TrPharma",
    title: "Medicine by someone who prescribes it",
    dek: "A quality antibiotic a family can't afford isn't quality. KashMOX 625, built backwards from the price.",
  },
]

export const STATS = [
  { value: "15+", label: "Years leading clinical care & digital health" },
  { value: "20+", label: "Healthcare initiatives across the ecosystem" },
  { value: "17", label: "Clinical trials running under Kairos" },
  { value: "2", label: "Continents — US & India, serving the world" },
]

export const HERO = {
  eyebrow: "Physician · Healthcare Executive · Builder",
  headline: "Medicine is a systems problem. I build the systems.",
  stand: "Dr. Ashwani Dhar MD, DMI — physician by training, builder by trade. CEO & Chairman of ThinkRoman Ventures, CEO of Kairos R&D Solutions, founder of TrPharma. I work at the seam where clinical care, research, and software meet.",
}

export const CONTACT = {
  heading: "Building at this seam?",
  body: "Sponsors, sites, clinicians, and builders — if it touches clinical research, health data, or getting medicine to more people, I'd like to hear about it.",
  cta: "contact@thinkroman.com",
  name: SITE.name,
  socials: SOCIAL,
}