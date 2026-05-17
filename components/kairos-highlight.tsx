import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Microscope, FileCheck, Cpu, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function KairosHighlight() {
  const services = [
    {
      icon: Users,
      title: "Patient Recruitment",
      description: "Access to millions of diverse patients through our network of healthcare organizations"
    },
    {
      icon: Microscope,
      title: "Patient Travel & Locator",
      description: "Seamless travel and re-engagement solutions for patient participation"
    },
    {
      icon: FileCheck,
      title: "Kairodox",
      description: "Sponsor-Centric Document Ordering & Management platform"
    },
    {
      icon: Cpu,
      title: "Technology Solutions",
      description: "Proprietary platform for streamlined research workflows"
    }
  ]

  const stats = [
    { value: "80%", label: "Global Trials" },
    { value: "Nationwide", label: "Healthcare Network" },
    { value: "17+", label: "Clinical Trials" },
    { value: "98%", label: "Client Satisfaction" }
  ]

  return (
    <section id="kairos" className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header with Kairos Branding */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-white" />
              <div>
                <span className="text-emerald-300 text-sm font-bold uppercase tracking-wider">Featured Venture</span>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Kairos R&D Solutions
                </h2>
              </div>
            </div>
            <p className="text-emerald-100 text-xl leading-relaxed mb-6">
              <strong className="text-white">Your partner in Clinical Research - Making It Seamless.</strong> Connecting and empowering sites, sponsors, and patients through innovative solutions that accelerate clinical research.
            </p>
            <p className="text-emerald-200 leading-relaxed mb-8">
              Led by <strong className="text-white">Dr. Ashwani Dhar, MD, DMI</strong> as Founder & CEO, Kairos R&D Solutions is a specialized Clinical Research Organization (CRO) headquartered in Hyderabad, India with operations supporting global clinical trials.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100">
                <Link href="/kairos">
                  Full Kairos Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer">
                  Visit kairosrds.com
                </Link>
              </Button>
            </div>
          </div>

          {/* Kairos Logo & Stats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-white rounded-xl px-6 py-4 mb-4">
                <span className="text-3xl font-black text-emerald-900">Kairos</span>
                <span className="text-sm text-emerald-700 ml-2">R&D Solutions</span>
              </div>
              <p className="text-emerald-200 text-sm">Kairos R&D Solutions Pvt. Ltd.</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-emerald-300 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
              <service.icon className="h-10 w-10 text-emerald-300 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-emerald-200 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Kairos - Bullet Points */}
        <div className="bg-white/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Why Choose Kairos Healthcare Solutions</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Direct access to millions of diverse patients",
              "Proprietary technology for streamlined workflows",
              "End-to-end services from recruitment to data management",
              "Decades of combined experience in clinical research",
              "AI-enabled clinical research & data analytics",
              "Strategic partnerships including Novo Nordisk"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-emerald-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
