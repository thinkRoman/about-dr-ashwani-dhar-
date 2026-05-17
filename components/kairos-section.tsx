import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Microscope, FileCheck, Cpu, CheckCircle2 } from "lucide-react"

export function KairosSection() {
  const services = [
    {
      icon: Users,
      title: "Patient Recruitment",
      description: "Access to millions of diverse patients through our network of healthcare organizations, with advanced matching technology."
    },
    {
      icon: Microscope,
      title: "Patient Travel & Locator Services",
      description: "Ensure patient participation and data integrity with seamless travel and re-engagement solutions."
    },
    {
      icon: FileCheck,
      title: "Kairodox",
      description: "Sponsor-Centric Document Ordering & Management. A modern platform for seamless document management in clinical research."
    },
    {
      icon: Cpu,
      title: "Technology Solutions",
      description: "Proprietary technology platform that streamlines research workflows and enhances data collection and analysis."
    }
  ]

  const stats = [
    { value: "80%", label: "Global Trials" },
    { value: "Nationwide", label: "Healthcare Organizations" },
    { value: "17+", label: "Clinical Trials" },
    { value: "98%", label: "Client Satisfaction" }
  ]

  return (
    <section id="kairos" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Featured Organization
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-accent">Kairos</span> R&D Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            As <strong>Chairman of Kairos R&D Solutions</strong>, Dr. Ashwani Dhar leads a dedicated clinical research organization committed to connecting and empowering sites, sponsors, and patients through innovative solutions that accelerate clinical research.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer">
                Visit kairosrds.com <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://kairosrds.com/contact" target="_blank" rel="noopener noreferrer">
                Contact Kairos
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-xl border border-accent/20 hover:border-accent/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Kairos */}
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Kairos Healthcare Solutions</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We&apos;re transforming clinical research by connecting sponsors directly with healthcare-first sites and diverse patient populations, all powered by our innovative technology platform.
              </p>
              <ul className="space-y-4">
                {[
                  "Direct access to millions of diverse patients",
                  "Proprietary technology for streamlined workflows",
                  "End-to-end services from recruitment to data management",
                  "Decades of combined experience in clinical research"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-card p-8 rounded-2xl shadow-xl border border-accent/20 max-w-sm w-full">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent-foreground">K</span>
                </div>
                <h4 className="text-xl font-bold text-center mb-2">Kairos R&D Solutions</h4>
                <p className="text-center text-muted-foreground text-sm mb-6">
                  Your partner in Clinical Research - Making It Seamless
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer">
                    Explore Kairos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
