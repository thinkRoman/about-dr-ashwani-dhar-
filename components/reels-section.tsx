import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export type Reel = {
  id: string
  tag: string
  title: string
}

const REELS: Reel[] = [
  {
    id: "DZNhad3v2Yn",
    tag: "From @ash.dhar",
    title: "Reel from Dr. Ashwani Dhar",
  },
  {
    id: "DGib384Jf3v",
    tag: "From @ash.dhar",
    title: "Reel from Dr. Ashwani Dhar",
  },
  {
    id: "DGD2t8Oy-ET",
    tag: "From @ash.dhar",
    title: "Reel from Dr. Ashwani Dhar",
  },
  {
    id: "C19iIq3rq3v",
    tag: "Speaking engagement",
    title: "Speaking engagement",
  },
  {
    id: "DEe6k_DSc41",
    tag: "Interview",
    title: "Interview snippet",
  },
]

export function ReelsSection() {
  return (
    <section id="reels" className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-hairline pb-6">
        <div>
          <p className="eyebrow text-signal">04 · On the move</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            Quick takes from @ash.dhar
          </h2>
        </div>
        <a
          href="https://www.instagram.com/ash.dhar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-signal transition-colors hover:text-signal-deep"
        >
          Follow on Instagram <ArrowUpRight size={15} />
        </a>
      </header>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REELS.map((reel) => (
          <a
            key={reel.id}
            href={`https://www.instagram.com/p/${reel.id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-hairline bg-white transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_30px_70px_-45px_rgba(15,164,120,0.5)]"
          >
            <div className="relative aspect-square overflow-hidden bg-ink/5">
              <Image
                src={`/images/reels/${reel.id}.jpg`}
                alt={`${reel.title} — video reel on Instagram (@ash.dhar)`}
                width={640}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="eyebrow absolute left-4 top-4 rounded-full bg-ink/60 px-3 py-1.5 text-white backdrop-blur-sm">
                {reel.tag}
              </span>
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-ink/50 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-signal">
                <span className="ml-0.5 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
              </span>
              <span className="absolute bottom-4 left-4 right-4 text-[15px] font-semibold text-white">
                {reel.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}