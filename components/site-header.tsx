"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

const NAV = [
  { href: "/#story", label: "Story" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/#videos", label: "Media" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-porcelain/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Ashwani Dhar
          </span>
          <span className="eyebrow text-ink-faint">MD · DMI</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-ink-soft transition-colors hover:text-signal"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/story"
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline-strong px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:border-signal hover:text-signal"
          >
            My Story <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline-strong text-ink md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-porcelain px-5 pb-5 pt-2 md:hidden">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-3.5 text-[15px] font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/story"
              onClick={() => setOpen(false)}
              className="py-3.5 text-[15px] font-semibold text-signal"
            >
              My Story
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}