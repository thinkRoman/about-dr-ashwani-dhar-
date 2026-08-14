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
    <footer className="border-t border-hairline bg-porcelain">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-semibold tracking-tight text-ink">
              Dr. Ashwani Dhar
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              {SITE.shortDescription}. {SITE.location} · {SITE.overseas}.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline-strong text-ink transition-colors hover:border-signal hover:text-signal"
                >
                  <s.icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="md:col-span-3">
              <p className="eyebrow text-ink-faint">{col.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.external ?? link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-signal"
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

        <div className="mt-12 border-t border-hairline pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-ink-faint">
              © {new Date().getFullYear()} Dr. Ashwani Dhar. All rights reserved.
            </p>
            <p className="eyebrow text-ink-faint">
              Fremont, California · Hyderabad, India · Global
            </p>
          </div>
          <p className="mt-6 max-w-4xl border-t border-hairline pt-6 text-xs leading-relaxed text-ink-faint">
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