import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Microscope, Pill, Sparkles, Stethoscope, Activity, BrainCircuit, GraduationCap, Briefcase, MapPin } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { BASE_URL, IMAGES, SITE, SOCIAL, LINKS } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Ashwani Dhar | Physician-Entrepreneur, Founder of ThinkRoman Ventures, Kairos & TrPharma",
  description: "Ashwani Dhar (Dr. Ashwani Dhar MD, DMI) is a physician-entrepreneur and founder & CEO of ThinkRoman Ventures, Kairos R&D Solutions, and TrPharma. Based in Fremont, California.",
  alternates: {
    canonical: `${BASE_URL}/ashwani-dhar`,
  },
  openGraph: {
    type: "profile",
    firstName: "Ashwani",
    lastName: "Dhar",
    url: `${BASE_URL}/ashwani-dhar`,
    title: "Ashwani Dhar | Physician-Entrepreneur",
    description: "Founder & CEO of ThinkRoman Ventures, Kairos R&D Solutions, and TrPharma. Also known as Dr. Ashwani Dhar MD, DMI.",
    images: [
      {
        url: `${IMAGES.card}?v=2`,
        width: 1200,
        height: 630,
        alt: "Ashwani Dhar — Physician-Entrepreneur, ThinkRoman Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwani Dhar | Physician-Entrepreneur",
    description: "Founder & CEO of ThinkRoman Ventures, Kairos R&D Solutions, and TrPharma. Also known as Dr. Ashwani Dhar MD, DMI.",
    images: [
      {
        url: `${IMAGES.card}?v=2`,
        width: 1200,
        height: 630,
        alt: "Ashwani Dhar — Physician-Entrepreneur, ThinkRoman Ventures",
      },
    ],
  },
}

const portfolio = [
  {
    icon: Stethoscope,
    name: "ThinkRoman Ventures",
    role: "Founder & CEO",
    desc: "Health-tech venture studio building tools at the intersection of clinical care and patient access.",
    href: LINKS.thinkRoman,
    external: true,
  },
  {
    icon: Microscope,
    name: "Kairos R&D Solutions",
    role: "CEO",
    desc: "Clinical research organization (CRO) in Hyderabad — patient recruitment, trials management, pharmacovigilance.",
    href: "/kairos",
    external: false,
  },
  {
    icon: Pill,
    name: "TrPharma",
    role: "Founder",
    desc: "Doctor-led pharmaceutical company behind KashMOX 625, One87 Plus (880 PLUS), and KashCAL PLUS.",
    href: "/trpharma",
    external: false,
  },
  {
    icon: Activity,
    name: "OpenAccess Navigator",
    role: "ThinkRoman portfolio",
    desc: "Free mental health platform — understand your mental health in 5 minutes at navigator.thinkroman.com.",
    href: LINKS.openaccess,
    external: true,
  },
  {
    icon: Sparkles,
    name: "Plenty",
    role: "ThinkRoman portfolio",
    desc: "Peptide buddy & GLP-1 companion app supporting patients on weight-management journeys.",
    href: LINKS.plenty,
    external: true,
  },
  {
    icon: BrainCircuit,
    name: "Kairodox",
    role: "Kairos platform",
    desc: "Sponsor-centric document ordering & management for clinical research.",
    href: "/kairos",
    external: false,
  },
]

const credentials = [
  { name: "MD", detail: "Doctor of Medicine" },
  { name: "DMI", detail: "Postgraduate, Medical Informatics — Royal College of Surgeons of Edinburgh" },
  { name: "Executive Education", detail: "Harvard T.H. Chan School of Public Health" },
]

const career = [
  { title: "Founder & CEO", org: "ThinkRoman Ventures", period: "Present" },
  { title: "CEO", org: "Kairos R&D Solutions", period: "Present" },
  { title: "Founder", org: "TrPharma", period: "Present" },
  { title: "Director & Senior Physician Executive", org: "Cerner", period: "10+ years" },
  { title: "Chief Medical Informatics Officer (CMIO)", org: "ITWorks (Cerner) / Oracle Health", period: "" },
]

export default function AshwaniDharHub() {
  return (
    <>
      <main className="min-h-screen bg-porcelain text-ink">
        {/* ============ HERO ============ */}
        <section
          className="relative overflow-hidden bg-eave text-white"
          style={{
            background:
              "radial-gradient(58% 48% at 12% 0%, rgba(16,185,129,0.22), transparent 62%), radial-gradient(50% 44% at 92% 18%, rgba(45,212,191,0.16), transparent 56%), linear-gradient(165deg, #063128, #03211b)",
          }}
        >
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-bright" />
                <span className="eyebrow text-white/80">Official Profile — Also known as Dr. Ashwani Dhar MD, DMI</span>
              </div>

              <h1 className="mt-8 text-[44px] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[78px]">
                Ashwani Dhar
              </h1>

              <p className="mt-4 max-w-2xl text-xl text-signal-bright">{SITE.title}</p>

              <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                Physician-entrepreneur and founder &amp; CEO of ThinkRoman Ventures. CEO of Kairos R&amp;D
                Solutions, a clinical research organization based in Hyderabad. Founder of TrPharma.
                Based in the San Francisco Bay Area.
              </p>

              <div className="reveal mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full bg-signal-bright px-7 py-4 text-[15px] font-semibold text-eave transition-all hover:bg-white"
                >
                  Full profile <ArrowRight size={16} />
                </Link>
                <Link
                  href="/kairos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright"
                >
                  Kairos R&amp;D Solutions
                </Link>
                <Link
                  href="/trpharma"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright"
                >
                  TrPharma
                </Link>
              </div>
            </div>

            {/* Headshot */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-signal/40 to-signal-bright/20 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <Image
                  src={IMAGES.portrait}
                  alt="Dr. Ashwani Dhar MD, DMI — Founder & CEO of ThinkRoman Ventures, Kairos R&D Solutions, and TrPharma"
                  width={768}
                  height={768}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ CANONICAL BIO ============ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
              <div>
                <p className="eyebrow text-signal-deep">Who is Ashwani Dhar?</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  One name. One clear identity.
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                  <p>
                    <strong className="text-ink">Ashwani Dhar</strong> (Dr. Ashwani Dhar MD, DMI) is a
                    physician-entrepreneur and the founder and CEO of{" "}
                    <Link href={LINKS.thinkRoman} target="_blank" rel="noopener noreferrer" className="font-medium text-signal-deep hover:underline">
                      ThinkRoman Ventures
                    </Link>
                    , a health-tech venture studio. He also serves as CEO of{" "}
                    <Link href="/kairos" className="font-medium text-signal-deep hover:underline">
                      Kairos R&amp;D Solutions
                    </Link>
                    , a clinical research organization (CRO) based in Hyderabad, and founded{" "}
                    <Link href="/trpharma" className="font-medium text-signal-deep hover:underline">
                      TrPharma
                    </Link>
                    , a doctor-led pharmaceutical company.
                  </p>
                  <p>
                    Under the ThinkRoman umbrella, his current portfolio spans Kairos R&amp;D Solutions,
                    TrPharma (maker of KashMOX&nbsp;625, One87&nbsp;Plus / 880&nbsp;PLUS, and KashCAL&nbsp;PLUS),
                    OpenAccess Navigator (a free mental wellness screening tool), and Plenty (a GLP-1
                    companion app).
                  </p>
                  <p>
                    He holds an MD and a postgraduate degree in Medical Informatics (DMI) from the Royal
                    College of Surgeons of Edinburgh, with executive training at the Harvard T.H. Chan
                    School of Public Health. Before founding ThinkRoman, he spent over a decade at Cerner
                    in senior physician executive roles, including Chief Medical Informatics Officer.
                  </p>
                  <p>
                    He is based in Fremont, California (San Francisco Bay Area), with operations in
                    Hyderabad, India.
                  </p>
                  <blockquote className="mt-8 rounded-2xl border-l-4 border-signal bg-porcelain-strong p-6 text-lg font-medium leading-relaxed text-ink">
                    &ldquo;As a clinician, and then spending more than a decade inside healthcare&rsquo;s
                    biggest systems, I learned exactly where the opportunity is — where we can make a
                    difference. So I&rsquo;ve spent the years since building the tools that close those
                    gaps, one product at a time.&rdquo;
                    <span className="mt-3 block text-sm font-semibold text-signal-deep">— Ashwani Dhar</span>
                  </blockquote>
                </div>
              </div>

              {/* Sidebar: credentials + location */}
              <aside className="h-fit rounded-2xl border border-hairline-strong bg-porcelain-strong p-6">
                <p className="eyebrow text-ink-faint">Credentials</p>
                <ul className="mt-4 space-y-3">
                  {credentials.map((c) => (
                    <li key={c.name} className="flex items-start gap-3">
                      <GraduationCap size={18} className="mt-0.5 shrink-0 text-signal-deep" />
                      <div>
                        <p className="font-semibold text-ink">{c.name}</p>
                        <p className="text-sm text-ink-faint">{c.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-start gap-3 border-t border-hairline pt-6">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-signal-deep" />
                  <p className="text-sm text-ink-soft">
                    Fremont, California, USA
                    <span className="block text-ink-faint">Hyderabad, India · Global</span>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ============ PORTFOLIO ============ */}
        <section className="bg-porcelain-strong py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <p className="eyebrow text-signal-deep">Portfolio</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Companies &amp; products</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {portfolio.map((v) => {
                const Icon = v.icon
                const inner = (
                  <>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/15 text-signal-deep ring-1 ring-signal/25">
                      <Icon size={20} />
                    </div>
                    <div className="mt-5">
                      <p className="eyebrow text-ink-faint">{v.role}</p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-ink">{v.name}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{v.desc}</p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-signal-deep">
                      {v.external || v.href ? `Learn more` : "Part of ThinkRoman"}
                      {v.external && <ArrowUpRight size={14} />}
                      {!v.external && v.href && <ArrowRight size={14} />}
                    </span>
                  </>
                )
                if (v.href) {
                  return (
                    <Link
                      key={v.name}
                      href={v.href}
                      {...(v.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex h-full flex-col rounded-2xl border border-hairline-strong p-6 transition-colors hover:border-signal/50"
                    >
                      {inner}
                    </Link>
                  )
                }
                return (
                  <div key={v.name} className="flex h-full flex-col rounded-2xl border border-hairline p-6">
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ============ CAREER ============ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
              <div>
                <p className="eyebrow text-signal-deep">Career</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  Physician first, builder now.
                </h2>
              </div>
              <ol className="space-y-0 border-l border-hairline-strong">
                {career.map((c, i) => (
                  <li key={i} className="relative border-b border-hairline pb-6 pl-8 pt-6 first:pt-0 last:border-0">
                    <span className="absolute left-[-5px] top-7 h-2.5 w-2.5 rounded-full bg-signal" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold tracking-tight text-ink">{c.title}</h3>
                      <span className="eyebrow text-ink-faint">{c.period}</span>
                    </div>
                    <p className="mt-1 text-ink-soft">{c.org}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ============ CONNECT / CROSS-LINK ============ */}
        <section className="border-t border-hairline-strong bg-eave text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="eyebrow text-white/50">Direct from the source</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                  This is the canonical Ashwani Dhar profile.
                </h2>
                <p className="mt-3 max-w-2xl text-white/60">
                  The one page that connects every venture, credential, and profile to a single identity.
                  Other individuals with a similar name are different people.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright">
                  LinkedIn <ArrowUpRight size={14} />
                </Link>
                <Link href={SOCIAL.medium} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright">
                  Medium <ArrowUpRight size={14} />
                </Link>
                <Link href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright">
                  Instagram <ArrowUpRight size={14} />
                </Link>
                <Link href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright">
                  YouTube <ArrowUpRight size={14} />
                </Link>
                <Link href={SOCIAL.personalInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright">
                  Video Interviews <ArrowUpRight size={14} />
                </Link>
                <Link href={SOCIAL.crunchbase} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright">
                  Crunchbase <ArrowUpRight size={14} />
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/50">
                <span className="eyebrow text-white/40">ThinkRoman ecosystem &amp; media</span>
                <Link href={LINKS.ecosystem} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal-bright">Ecosystem</Link>
                <span className="text-white/25">·</span>
                <Link href={LINKS.thinkRomanNews} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal-bright">ThinkRoman News</Link>
                <span className="text-white/25">·</span>
                <Link href={LINKS.trpharma880PlusRelease} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal-bright">TrPharma 880 PLUS launch</Link>
                <span className="text-white/25">·</span>
                <Link href={LINKS.orzuvMagazine} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal-bright">Orzuv Magazine</Link>
                <span className="text-white/25">·</span>
                <Link href={LINKS.townMagazine} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal-bright">Town Magazine</Link>
                <span className="text-white/25">·</span>
                <Link href={LINKS.plenty} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal-bright">Plenty</Link>
                <span className="text-white/25">·</span>
                <Link href={LINKS.navigator} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-signal-bright">Navigator</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}