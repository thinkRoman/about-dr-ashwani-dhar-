import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const ventures = [
  {
    name: "Kairos R&D Solutions",
    role: "Founder & CEO",
    description: "Clinical Research Organization specializing in AI-enabled trials",
    color: "bg-emerald-600",
    link: "/kairos",
    external: false
  },
  {
    name: "TrPharma",
    role: "Founder & CEO", 
    description: "Doctor-led pharmaceutical innovation",
    color: "bg-[#f9a825]",
    link: "/trpharma",
    external: false
  },
  {
    name: "ThinkRoman Ventures",
    role: "CEO",
    description: "20+ healthcare technology initiatives",
    color: "bg-blue-600",
    link: "https://thinkroman.com",
    external: true
  }
]

export function VenturesGrid() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-[#0c1829]" />
            <h2 className="text-2xl md:text-3xl font-black text-[#0c1829] uppercase tracking-tight">
              Ventures & Leadership
            </h2>
          </div>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Large Visual Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ventures.map((venture) => (
            <Link 
              key={venture.name}
              href={venture.link}
              target={venture.external ? "_blank" : undefined}
              rel={venture.external ? "noopener noreferrer" : undefined}
              className="group"
            >
              <div className={`${venture.color} rounded-xl p-8 h-full min-h-[280px] flex flex-col justify-between transition-transform group-hover:scale-[1.02]`}>
                <div>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
                    {venture.role}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white mt-2 leading-tight">
                    {venture.name}
                  </h3>
                </div>
                <div>
                  <p className="text-white/80 mb-4">{venture.description}</p>
                  <span className="inline-flex items-center text-white font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function QuickBio() {
  return (
    <section id="about" className="bg-[#f8f9fa] py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Large Photo */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#0c1829] to-[#1e3a5f] rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-8xl font-black mb-4">AD</div>
                <div className="text-xl">Dr. Ashwani Dhar</div>
                <div className="text-gray-400">MD, DMI</div>
              </div>
            </div>
            {/* Credential Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white shadow-xl rounded-lg p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wider">Education</div>
              <div className="font-bold text-[#0c1829]">Harvard T.H. Chan</div>
              <div className="text-sm text-gray-600">School of Public Health</div>
            </div>
          </div>

          {/* Bio Content - Punchy, Not Boring */}
          <div>
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">About</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0c1829] mt-2 leading-tight">
              Physician Turned<br />
              <span className="text-[#f9a825]">Healthcare Disruptor</span>
            </h2>
            
            <div className="mt-6 space-y-4 text-lg text-gray-600">
              <p>
                <strong className="text-[#0c1829]">Dr. Ashwani Dhar, MD, DMI</strong> isn&apos;t your typical physician. 
                As former <strong>Senior Physician Executive and CMIO at Cerner/Oracle Health</strong>, 
                he led digital transformation for healthcare systems worldwide.
              </p>
              <p>
                Now, as <strong>CEO of ThinkRoman Ventures</strong>, he&apos;s building the future of healthcare 
                through AI, clinical research, and accessible medicine.
              </p>
            </div>

            {/* Key Stats - Visual */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#0c1829]">20+</div>
                <div className="text-sm text-gray-500">Ventures</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0c1829]">17+</div>
                <div className="text-sm text-gray-500">Clinical Trials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-emerald-600]">3</div>
                <div className="text-sm text-gray-500">Companies</div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button asChild className="bg-[#0c1829] hover:bg-[#1e3a5f] text-white">
                <Link href="https://www.linkedin.com/in/ashwanidhar" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#featured-video">
                  Watch Videos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
