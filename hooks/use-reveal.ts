import { useEffect, useRef } from "react"

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = Array.from(ref.current?.querySelectorAll<HTMLElement>(".reveal") ?? [])
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in")
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    els.forEach((el, i) => {
      if (el instanceof HTMLElement) {
        el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`
      }
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return ref
}