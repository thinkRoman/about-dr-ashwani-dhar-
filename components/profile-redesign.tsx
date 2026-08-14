"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, Linkedin, Youtube, Mail } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useReveal } from "@/hooks/use-reveal"
import { IMAGES, SITE, SOCIAL } from "@/lib/seo"
import { HERO, WRITING, VENTURES, VIDEOS, STATS, CONTACT } from "@/lib/home"

export default function ProfileRedesign() {
  const ref = useReveal()

  return (
    <div ref={ref} className="bg-porcelain text-ink">
      <SiteHeader />

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <div className="eyebrow flex items-center gap-3 text-signal reveal">
              <span className="h-px w-8 bg-signal/60" />
              {HERO.eyebrow}
            </div>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.02] tracking-tight text-ink reveal sm:text-5xl lg:text-[64px]">
              Medicine is a{" "}
              <span className="text-signal">systems</span> problem.
              <br />
              I build the systems.
            </h1>
            <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              {HERO.stand}
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-3">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal-deep"
              >
                Read the work <ArrowRight size={16} />
              </Link>
              <Link
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-lg border border-hairline-strong px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
              >
                See the ventures
              </Link>
            </div>
          </div>

          <div className="reveal lg:pl-4">
            <figure className="relative overflow-hidden rounded-2xl border border-hairline bg-porcelain-strong shadow-[0_30px_60px_-30px_rgba(17,23,19,0.35)]">
              <div className="relative aspect-[470/1024] max-h-[680px] w-full overflow-hidden">
                <Image
                  src={IMAGES.portrait}
                  alt={`${SITE.name} MD, DMI — CEO & Chairman, ThinkRoman Ventures · CEO, Kairos R&D Solutions`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-2xl font-semibold tracking-tight text-white">
                    Dr. Ashwani Dhar
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/70">
                    MD, DMI · MedicaL Informatics
                  </p>
                </figcaption>
              </div>
              <div className="flex items-center justify-between border-t border-hairline px-6 py-4">
                <div>
                  <p className="eyebrow text-ink-faint">Role</p>
                  <p className="mt-1 text-sm font-medium text-ink">
                    CEO &amp; Chairman · ThinkRoman Ventures
                  </p>
                </div>
                <div className="text-right">
                  <p className="eyebrow text-ink-faint">Active now</p>
                  <p className="mt-1 flex items-center justify-end gap-2 text-sm font-medium text-signal">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
                    17 clinical trials live
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* ================= AUTHORITY STRIP ================= */}
        <section className="grid grid-cols-2 gap-px border-y border-hairline bg-hairline lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-porcelain-strong p-6 lg:p-8">
              <p className="font-display text-3xl font-semibold tracking-tight text-signal lg:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-ink-soft">{s.label}</p>
            </div>
          ))}
        </section>

        {/* ================= STORY ================= */}
        <section id="story" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="reveal border-b border-hairline pb-6">
            <p className="eyebrow text-signal">01 · In his own words</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink lg:text-4xl">
                The story so far
              </h2>
              <Link
                href="/story"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:text-signal-deep"
              >
                Read the full story <ArrowUpRight size={15} />
              </Link>
            </div>
          </header>
          <div className="mt-2">
            {WRITING.map((p) => (
              <Link
                href="/story"
                key={p.n}
                className="group grid grid-cols-[3rem_1fr] items-start gap-6 border-b border-hairline py-7 transition-colors hover:bg-porcelain-strong/60 lg:grid-cols-[3rem_1fr_auto]"
              >
                <span className="eyebrow pt-2 text-ink-faint">{p.n}</span>
                <div>
                  <span className="eyebrow text-signal">{p.tag}</span>
                  <h3 className="font-display mt-2 inline-flex items-center gap-2.5 text-xl font-semibold tracking-tight text-ink lg:text-2xl">
                    {p.title}
                    <ArrowUpRight
                      size={20}
                      className="text-signal opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">{p.dek}</p>
                </div>
                <span className="hidden justify-self-end pt-2 text-sm text-ink-faint lg:block">
                  Read
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= VENTURES ================= */}
        <section id="ventures" className="bg-porcelain-strong">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <header className="reveal border-b border-hairline pb-6">
              <p className="eyebrow text-signal">02 · Ventures</p>
              <div className="mt-4">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-ink lg:text-4xl">
                  What I&apos;m building
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                  Three companies, one thesis. Each lives on its own — follow the link to go deeper.
                </p>
              </div>
            </header>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {VENTURES.map((v) => (
                <Link
                  key={v.name}
                  href={v.href}
                  {...(v.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="reveal group flex flex-col rounded-2xl border border-hairline bg-porcelain p-7 transition-all hover:-translate-y-1 hover:border-signal hover:shadow-[0_28px_50px_-34px_rgba(12,148,129,0.55)]"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`eyebrow rounded-full border px-3 py-1 ${
                        v.open
                          ? "border-signal/35 bg-signal/10 text-signal"
                          : "border-hairline-strong text-ink-soft"
                      }`}
                    >
                      {v.stat}
                    </span>
                    <ArrowUpRight size={16} className="text-ink-faint transition-colors group-hover:text-signal" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight text-ink">
                    {v.name}
                  </h3>
                  <p className="eyebrow mt-1.5 text-ink-faint">{v.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-signal">
                    {v.link.replace("https://", "")} <ArrowUpRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VIDEOS ================= */}
        <section id="videos" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="reveal border-b border-hairline pb-6">
            <p className="eyebrow text-signal">03 · On camera</p>
            <div className="mt-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink lg:text-4xl">
                Conversations &amp; talks
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                Interviews, public-health talks, and statements — the longer conversations, gathered
                in one place.
              </p>
            </div>
          </header>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {VIDEOS.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group block overflow-hidden rounded-2xl border border-hairline bg-porcelain-strong transition-all hover:-translate-y-1 hover:border-signal"
              >
                <div className="relative aspect-video overflow-hidden bg-ink/5">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0"
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                  <span className="eyebrow absolute left-4 top-4 rounded-md bg-ink/50 px-2.5 py-1.5 text-white backdrop-blur-sm">
                    {v.tag}
                  </span>
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-ink/40 backdrop-blur-sm transition-colors group-hover:bg-signal">
                    <span className="ml-0.5 border-y-8 border-l-[13px] border-y-transparent border-l-white" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="eyebrow mt-2 text-ink-faint">{v.meta}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="border-t border-hairline bg-porcelain-strong">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
            <div className="reveal">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink lg:text-4xl">
                Working on something at this seam?
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">{CONTACT.body}</p>
            </div>
            <div className="reveal flex flex-wrap gap-3 lg:justify-end">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-hairline-strong px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-hairline-strong px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                <Youtube size={16} /> YouTube
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal-deep"
              >
                <Mail size={16} /> {SITE.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}