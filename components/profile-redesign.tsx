"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowUpRight,
  ArrowRight,
  Linkedin,
  Youtube,
  Mail,
  Stethoscope,
  Microscope,
  Pill,
  Activity,
  Sparkles,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ReelsSection } from "@/components/reels-section"
import { useReveal } from "@/hooks/use-reveal"
import { IMAGES, SITE, SOCIAL } from "@/lib/seo"
import { HERO, WRITING, VENTURES, VIDEOS, STATS, CONTACT } from "@/lib/home"

const TICKER = [
  "Clinical Research",
  "AI-Enabled Trials",
  "Real-World Evidence",
  "Patient Recruitment",
  "Medical Informatics",
  "KashMOX 625",
  "Pharmacovigilance",
  "Digital Health",
  "Kairodox",
  "Doctor-Led Pharma",
]

const VENTURE_ICONS = [Microscope, Pill, Sparkles]

export default function ProfileRedesign() {
  const ref = useReveal()

  return (
    <div ref={ref} className="bg-porcelain text-ink">
      <SiteHeader />

      <main id="top">
        {/* ================= HERO (dark) ================= */}
        <section
          className="relative overflow-hidden bg-eave text-white"
          style={{
            background:
              "radial-gradient(58% 48% at 12% 0%, rgba(16,185,129,0.22), transparent 62%), radial-gradient(50% 44% at 92% 18%, rgba(45,212,191,0.16), transparent 56%), linear-gradient(165deg, #063128, #03211b)",
          }}
        >
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-28 lg:pt-20">
            <div>
              <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-bright" />
                <span className="eyebrow text-white/80">{HERO.eyebrow}</span>
              </div>

              <h1 className="mt-8 text-[44px] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[78px]">
                Medicine is a
                <br />
                <span className="text-gradient">systems problem.</span>
                <br />
                I build the systems.
              </h1>

              <p className="reveal mt-7 max-w-xl text-[17px] leading-relaxed text-white/70">
                {HERO.stand}
              </p>

              <div className="reveal mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/story"
                  className="group inline-flex items-center gap-2 rounded-full bg-signal-bright px-7 py-4 text-[15px] font-semibold text-eave transition-all hover:bg-white"
                >
                  Read the work{" "}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#ventures"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:border-signal-bright/60 hover:text-signal-bright"
                >
                  See the ventures
                </Link>
              </div>

              <div className="reveal mt-10 flex items-center gap-6 border-t border-white/10 pt-6">
                <div>
                  <p className="display-tight text-2xl text-white">15+</p>
                  <p className="eyebrow text-white/50">Years leading</p>
                </div>
                <div>
                  <p className="display-tight text-2xl text-white">20+</p>
                  <p className="eyebrow text-white/50">Initiatives built</p>
                </div>
                <div>
                  <p className="display-tight text-2xl text-white">17</p>
                  <p className="eyebrow text-white/50">Trials live</p>
                </div>
              </div>
            </div>

            {/* Portrait lockup */}
            <div className="reveal relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.7)]">
                <div className="relative aspect-[470/1024] max-h-[600px] w-full">
                  <Image
                    src={IMAGES.portrait}
                    alt={`${SITE.name} MD, DMI — CEO & Chairman, ThinkRoman Ventures · CEO, Kairos R&D Solutions`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03211b] via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-3xl font-semibold tracking-tight text-white">
                      Dr. Ashwani Dhar
                    </p>
                    <p className="eyebrow mt-2 text-white/60">MD, DMI · Medical Informatics</p>
                  </figcaption>
                </div>
              </div>

              <div className="glass absolute -left-4 top-8 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg lg:-left-9">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal-bright/20 text-signal-bright">
                  <Activity size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">17 trials live</p>
                  <p className="text-[11px] text-white/60">Under Kairos R&D</p>
                </div>
              </div>

              <div className="glass absolute -right-3 bottom-24 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg lg:-right-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                  <Stethoscope size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Physician-led</p>
                  <p className="text-[11px] text-white/60">CEO &amp; Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TICKER ================= */}
        <div className="border-y border-white/10 bg-eave py-5">
          <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee flex w-max items-center gap-10 whitespace-nowrap pr-10">
              {[...TICKER, ...TICKER].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.18em] text-white/55"
                >
                  {item}
                  <span className="text-signal-bright">✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= STATS (light) ================= */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="border-b border-hairline py-10 lg:border-b-0 lg:border-l lg:px-10 lg:py-16 lg:first:pl-0 lg:first:border-l-0"
              >
                <p className="text-5xl font-semibold tracking-tight text-ink [background:linear-gradient(120deg,var(--ink),#3a5649);-webkit-background-clip:text;background-clip:text;color:transparent] lg:text-6xl">
                  {s.value}
                </p>
                <p className="mt-3 max-w-[24ch] text-[15px] leading-snug text-ink-soft">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STORY ================= */}
        <section id="story" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
          <header className="reveal flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-signal">01 · In his own words</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
                The story so far
              </h2>
            </div>
            <Link
              href="/story"
              className="group inline-flex items-center gap-1.5 rounded-full border border-hairline-strong px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Read the full story{" "}
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </header>

          <div className="mt-4">
            {WRITING.map((p) => (
              <Link
                href="/story"
                key={p.n}
                className="group grid grid-cols-[3rem_1fr] items-start gap-6 border-t border-hairline py-9 last:border-b transition-colors hover:bg-white lg:grid-cols-[4rem_0.8fr_1.2fr_auto] lg:gap-10"
              >
                <span className="text-gradient pt-1 text-2xl font-semibold tracking-tight">
                  {p.n}
                </span>
                <div>
                  <span className="eyebrow text-signal">{p.tag}</span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight lg:text-3xl">
                    {p.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-[16px] leading-relaxed text-ink-soft">{p.dek}</p>
                <span className="hidden justify-self-end self-center text-ink-faint lg:block">
                  <ArrowUpRight
                    size={24}
                    className="text-signal opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= VENTURES (cards) ================= */}
        <section id="ventures" className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
            <header className="reveal flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-signal">02 · Ventures</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
                  What I&apos;m building
                </h2>
              </div>
              <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
                Three companies, one thesis. Each lives on its own — follow the link to go deeper.
              </p>
            </header>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {VENTURES.map((v, i) => {
                const Icon = VENTURE_ICONS[i] ?? Sparkles
                return (
                  <Link
                    key={v.name}
                    href={v.href}
                    {...(v.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="reveal group flex flex-col rounded-3xl border border-hairline bg-porcelain p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/40 hover:shadow-[0_35px_70px_-40px_rgba(15,164,120,0.45)]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-signal/10 p-3 text-signal transition-colors group-hover:bg-signal group-hover:text-white">
                        <Icon size={24} strokeWidth={1.75} />
                      </span>
                      <span
                        className={`eyebrow rounded-full border px-3 py-1.5 ${
                          v.open
                            ? "border-signal/30 bg-signal/10 text-signal"
                            : "border-hairline-strong text-ink-faint"
                        }`}
                      >
                        {v.stat}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold tracking-tight">{v.name}</h3>
                    <p className="eyebrow mt-1.5 text-ink-faint">{v.role}</p>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">
                      {v.body}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-1.5 text-[13px] font-semibold text-signal">
                      {v.link.replace("https://", "")}{" "}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= VIDEOS ================= */}
        <section id="videos" className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
          <header className="reveal flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
            <div>
              <p className="eyebrow text-signal">03 · On camera</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
                Conversations &amp; talks
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Interviews, public-health talks, and statements — gathered in one place.
            </p>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {VIDEOS.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group grid overflow-hidden rounded-3xl border border-hairline bg-white transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_30px_70px_-45px_rgba(15,164,120,0.5)] md:grid-cols-[1.15fr_1fr]"
              >
                <div className="relative aspect-video overflow-hidden bg-ink/5 md:aspect-auto md:min-h-[200px]">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0"
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="eyebrow absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1.5 text-white backdrop-blur-sm">
                    {v.tag}
                  </span>
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-ink/50 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-signal">
                    <span className="ml-0.5 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7">
                  <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-signal">
                    {v.title}
                  </h3>
                  <p className="eyebrow mt-3 text-ink-faint">{v.meta}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-signal">
                    Watch on YouTube{" "}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ================= REELS ================= */}
        <ReelsSection />

        {/* ================= CONTACT (dark CTA) ================= */}
        <section id="contact" className="bg-eave text-white">
          <div
            className="relative overflow-hidden py-24 lg:py-32"
            style={{
              background:
                "radial-gradient(55% 60% at 50% 0%, rgba(16,185,129,0.18), transparent 60%), #03211b",
            }}
          >
            <div className="hero-grid absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
              <div className="reveal">
                <p className="eyebrow text-signal-bright">04 · Contact</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Working on something{" "}
                  <span className="text-gradient">at this seam?</span>
                </h2>
                <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/65">
                  {CONTACT.body}
                </p>
              </div>
              <div className="reveal flex flex-col items-start gap-4 lg:items-end">
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-signal-bright px-8 py-4 text-[15px] font-semibold text-eave transition-all hover:bg-white"
                >
                  <Mail size={17} /> {SITE.email}
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <div className="mt-3 flex gap-3">
                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-signal-bright hover:text-signal-bright"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={SOCIAL.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-signal-bright hover:text-signal-bright"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    href={SOCIAL.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-signal-bright hover:text-signal-bright"
                  >
                    <span className="text-sm font-semibold">𝕏</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}