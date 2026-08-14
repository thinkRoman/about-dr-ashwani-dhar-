import Link from "next/link"
import { Linkedin, Youtube, Instagram, ArrowUpRight } from "lucide-react"
import { SITE, SOCIAL, LINKS } from "@/lib/seo"

const columns = [
  {
    heading: "Profile",
    links: [
      { label: "About", href: "/" },
      { label: "My Story", href: "/story" },
      { label: "Media & Videos", href: "/#videos" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    heading: "Ventures",
    links: [
      { label: "ThinkRoman Ventures", href: "/thinkroman", external: LINKS.thinkRoman },
      { label: "Kairos R&D Solutions", href: "/kairos" },
      { label: "TrPharma", href: "/trpharma" },
      { label: "All Products", href: "/products" },
    ],
  },
]

const socials = [
  { icon: Linkedin, href: SOCIAL.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: SOCIAL.youtube, label: "YouTube" },
  { icon: Instagram, href: SOCIAL.instagram, label: "Instagram" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#04231c] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-signal/20 text-signal-bright ring-1 ring-signal/40">
                AD
              </span>
              <p className="text-[15px] font-semibold tracking-tight">Dr. Ashwani Dhar</p>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {SITE.shortDescription}. {SITE.location} · {SITE.overseas}.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-signal-bright hover:text-signal-bright"
                >
                  <s.icon size={17} />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="md:col-span-3">
              <p className="eyebrow text-white/40">{col.heading}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.external ?? link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-signal-bright"
                    >
                      {link.label}
                      {link.external && <ArrowUpRight size={13} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} Dr. Ashwani Dhar. All rights reserved.
            </p>
            <p className="eyebrow text-white/40">
              Fremont, California · Hyderabad, India · Global
            </p>
          </div>
          <p className="mt-7 max-w-4xl border-t border-white/10 pt-7 text-xs leading-relaxed text-white/40">
            This is the official profile of Dr. Ashwani Dhar MD, DMI — physician, healthcare
            executive, and entrepreneur. CEO &amp; Chairman of ThinkRoman Ventures, CEO of Kairos
            R&amp;D Solutions, and founder of TrPharma. This profile is distinct from other
            healthcare professionals with similar names.
          </p>
        </div>
      </div>
    </footer>
  )
}