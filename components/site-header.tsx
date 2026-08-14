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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#04231c]/85 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-signal/20 text-signal-bright ring-1 ring-signal/40 transition-colors group-hover:bg-signal group-hover:text-white">
            AD
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Ashwani Dhar
            </span>
            <span className="eyebrow mt-1 text-white/45">MD · DMI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-white/65 transition-colors hover:text-signal-bright"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/story"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:border-signal-bright hover:text-signal-bright"
          >
            My Story <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#04231c] px-5 pb-5 pt-2 md:hidden">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-[15px] font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/story"
              onClick={() => setOpen(false)}
              className="py-4 text-[15px] font-semibold text-signal-bright"
            >
              My Story
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}