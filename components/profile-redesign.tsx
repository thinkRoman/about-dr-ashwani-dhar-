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
        <section className="mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-20 lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <div className="eyebrow flex items-center gap-3 text-signal reveal">
              <span className="h-px w-10 bg-signal/70" />
              {HERO.eyebrow}
            </div>

            <h1 className="font-display mt-8 text-5xl font-semibold leading-[0.98] tracking-tight text-ink reveal sm:text-6xl lg:text-[76px]">
              Medicine is a{" "}
              <span className="font-serif text-signal">systems</span> problem.
              <br />
              I build the{" "}
              <span className="font-serif text-signal">systems</span>.
            </h1>

            <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              {HERO.stand}
            </p>

            <div className="reveal mt-10 flex flex-wrap gap-3">
              <Link
                href="/story"
                className="group inline-flex items-center gap-2 rounded-full bg-signal px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-signal-deep"
              >
                Read the work{" "}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
              >
                See the ventures
              </Link>
            </div>
          </div>

          <div className="reveal lg:pl-2">
            <figure className="relative overflow-hidden rounded-3xl border border-hairline bg-white shadow-[0_40px_80px_-40px_rgba(23,22,15,0.4)]">
              <div className="relative aspect-[470/1024] max-h-[660px] w-full overflow-hidden">
                <Image
                  src={IMAGES.portrait}
                  alt={`${SITE.name} MD, DMI — CEO & Chairman, ThinkRoman Ventures · CEO, Kairos R&D Solutions`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-7">
                  <p className="display-tight text-3xl text-white">Dr. Ashwani Dhar</p>
                  <p className="mt-1.5 eyebrow text-white/70">
                    MD, DMI · Medical Informatics
                  </p>
                </figcaption>
              </div>
              <div className="grid grid-cols-2 divide-x divide-hairline border-t border-hairline">
                <div className="px-6 py-4">
                  <p className="eyebrow text-ink-faint">Role</p>
                  <p className="mt-1 text-sm font-medium text-ink">
                    CEO &amp; Chairman · ThinkRoman Ventures
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="eyebrow text-ink-faint">Active now</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-signal">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
                    17 clinical trials live
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* ================= AUTHORITY STRIP ================= */}
        <section className="border-y border-hairline bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="border-hairline px-5 py-9 lg:border-l lg:px-8 lg:py-12 lg:first:border-l-0"
              >
                <p className="display-tight text-4xl text-signal lg:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm leading-snug text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STORY ================= */}
        <section id="story" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="reveal flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
            <div>
              <p className="eyebrow text-signal">01 · In his own words</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink lg:text-[44px]">
                The story so far
              </h2>
            </div>
            <Link
              href="/story"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:text-signal-deep"
            >
              Read the full story{" "}
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </header>
          <div className="mt-2">
            {WRITING.map((p) => (
              <Link
                href="/story"
                key={p.n}
                className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-6 border-b border-hairline py-8 transition-colors hover:bg-white lg:grid-cols-[3.5rem_0.7fr_1.3fr_auto]"
              >
                <span className="display-tight pt-1 text-xl text-ink-faint group-hover:text-signal">
                  {p.n}
                </span>
                <div>
                  <span className="eyebrow text-signal">{p.tag}</span>
                  <h3 className="mt-2 text-2xl font-semibold text-ink lg:text-[28px]">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-1 max-w-2xl leading-relaxed text-ink-soft lg:mt-0">{p.dek}</p>
                <span className="hidden justify-self-end self-center text-ink-faint lg:block">
                  <ArrowUpRight
                    size={22}
                    className="text-signal opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= VENTURES ================= */}
        <section id="ventures" className="bg-ink text-porcelain">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <header className="reveal border-b border-white/15 pb-6">
              <p className="eyebrow text-signal-bright">02 · Ventures</p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
                <h2 className="text-3xl font-semibold lg:text-[44px]">What I&apos;m building</h2>
                <p className="max-w-sm text-[15px] leading-relaxed text-porcelain/60">
                  Three companies, one thesis. Each lives on its own — follow the link to go deeper.
                </p>
              </div>
            </header>
            <div className="mt-6 divide-y divide-white/10">
              {VENTURES.map((v, i) => (
                <Link
                  key={v.name}
                  href={v.href}
                  {...(v.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="reveal group grid items-center gap-3 py-9 transition-colors lg:grid-cols-[3.5rem_1fr_auto_auto] lg:gap-8"
                >
                  <span className="display-tight text-xl text-porcelain/40 transition-colors group-hover:text-signal-bright">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold transition-colors group-hover:text-signal-bright lg:text-[30px]">
                        {v.name}
                      </h3>
                      <span
                        className={`eyebrow rounded-full border px-3 py-1 ${
                          v.open
                            ? "border-signal-bright/40 bg-signal/20 text-signal-bright"
                            : "border-white/20 text-porcelain/50"
                        }`}
                      >
                        {v.stat}
                      </span>
                    </div>
                    <p className="mt-1 eyebrow text-porcelain/40">{v.role}</p>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-porcelain/65">
                      {v.body}
                    </p>
                  </div>
                  <span className="hidden text-[13px] font-medium text-porcelain/50 lg:block">
                    {v.link.replace("https://", "")}
                  </span>
                  <ArrowUpRight
                    size={26}
                    className="text-porcelain/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal-bright"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VIDEOS ================= */}
        <section id="videos" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <header className="reveal flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
            <div>
              <p className="eyebrow text-signal">03 · On camera</p>
              <h2 className="mt-4 text-3xl font-semibold lg:text-[44px]">
                Conversations &amp; talks
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Interviews, public-health talks, and statements — the longer conversations, gathered in
              one place.
            </p>
          </header>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {VIDEOS.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group overflow-hidden rounded-2xl border border-hairline bg-white transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(23,22,15,0.35)]"
              >
                <div className="relative aspect-video overflow-hidden bg-ink/5">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0"
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
                  <span className="eyebrow absolute left-4 top-4 rounded-md bg-ink/55 px-2.5 py-1.5 text-white backdrop-blur-sm">
                    {v.tag}
                  </span>
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-ink/40 backdrop-blur-sm transition-colors group-hover:bg-signal">
                    <span className="ml-0.5 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-signal">
                    {v.title}
                  </h3>
                  <p className="eyebrow mt-2 text-ink-faint">{v.meta}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="border-t border-hairline bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
            <div className="reveal">
              <h2 className="text-3xl font-semibold leading-[1.1] lg:text-[48px]">
                Working on something{" "}
                <span className="font-serif text-signal">at this seam?</span>
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">{CONTACT.body}</p>
            </div>
            <div className="reveal flex flex-wrap gap-3 lg:justify-end">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
              >
                <Youtube size={16} /> YouTube
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-signal-deep"
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
