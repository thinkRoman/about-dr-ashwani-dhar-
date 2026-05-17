import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { KairosSection } from "@/components/kairos-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ThinkRomanSection } from "@/components/thinkroman-section"
import { MediaSection } from "@/components/media-section"
import { PublicationsSection } from "@/components/publications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function AboutDrAshwaniDhar() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <KairosSection />
      <ExpertiseSection />
      <ThinkRomanSection />
      <MediaSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
