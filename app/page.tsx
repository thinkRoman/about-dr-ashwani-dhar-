import { CNNHero } from "@/components/cnn-hero"
import { VideoSpotlight, InstagramFeed } from "@/components/video-spotlight"
import { VenturesGrid, QuickBio } from "@/components/ventures-grid"
import { KairosHighlight } from "@/components/kairos-highlight"
import { TrPharmaHighlight } from "@/components/trpharma-highlight"
import { CNNFooter } from "@/components/cnn-footer"
import { Navigation } from "@/components/navigation"

export default function AboutDrAshwaniDhar() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CNNHero />
      <VideoSpotlight />
      <QuickBio />
      <KairosHighlight />
      <TrPharmaHighlight />
      <VenturesGrid />
      <InstagramFeed />
      <CNNFooter />
    </main>
  )
}
