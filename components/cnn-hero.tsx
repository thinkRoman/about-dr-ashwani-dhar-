import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CNNHero() {
  return (
    <section className="relative min-h-[90vh] bg-[#0c1829] text-white overflow-hidden">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1829] via-[#0c1829]/90 to-transparent z-10" />
      
      {/* Featured Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0"
          className="w-full h-full object-cover opacity-30"
          allow="autoplay; encrypted-media"
          title="Background video"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Breaking News Style Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
              Healthcare Innovator
            </span>
            <span className="text-gray-400 text-sm">San Francisco Bay Area</span>
          </div>

          {/* Main Headline - CNN Style Large Typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            <span className="block">Dr. Ashwani</span>
            <span className="block text-[#f9a825]">Dhar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mb-8 leading-relaxed">
            Physician. Entrepreneur. Healthcare Technology Visionary.
            <span className="block mt-2 text-white font-medium">
              CEO of ThinkRoman Ventures | Founder of Kairos R&D Solutions | TrPharma
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 gap-2">
              <Link href="#featured-video">
                <Play className="h-5 w-5" /> Watch Interview
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8">
              <Link href="/kairos">
                Explore Kairos R&D
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats - Breaking News Ticker Style */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0c1829]/95 border-t border-white/10 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-8 overflow-x-auto text-sm">
              <span className="bg-red-600 text-white px-2 py-0.5 font-bold shrink-0">LIVE</span>
              <span className="text-gray-400 whitespace-nowrap">Former CMIO at Cerner/Oracle Health</span>
              <span className="text-[#f9a825] whitespace-nowrap">Harvard T.H. Chan School of Public Health</span>
              <span className="text-gray-400 whitespace-nowrap">17+ Active Clinical Trials</span>
              <span className="text-[#f9a825] whitespace-nowrap">20+ Healthcare Ventures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
