import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Microscope, FileCheck, Cpu, CheckCircle2, Globe, FlaskConical } from "lucide-react"

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

  const focusAreas = [
    "End-to-end clinical trial management",
    "Real-world evidence & patient-centric studies",
    "AI-enabled clinical research & data analytics",
    "Regulatory compliance & pharmacovigilance",
    "Strategic partnerships (e.g., Novo Nordisk)"
  ]

  return (
    <section id="kairos" className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background" aria-labelledby="kairos-heading">
      <div className="container mx-auto px-4">
        {/* Two-Column Header Layout */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Left: Logo + Title */}
            <div className="md:w-1/3">
              <div className="mb-6 bg-accent rounded-2xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent-foreground">K</span>
                  <span className="text-4xl font-bold text-accent-foreground/80">airos</span>
                  <p className="text-xs text-accent-foreground/70 mt-1">R&D Solutions</p>
                </div>
              </div>
              
              <h2 id="kairos-heading" className="text-3xl font-bold text-foreground mb-3">
                <span className="text-accent">Kairos</span> R&D Solutions
              </h2>
              
              <p className="text-lg font-semibold text-accent mb-4">
                Founder & CEO: Dr. Ashwani Dhar, MD, DMI
              </p>

              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                <Link href="https://www.kairosrds.com" target="_blank" rel="noopener noreferrer" title="Visit Kairos R&D Solutions Official Website">
                  Visit Kairos R&D Solutions <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right: Content */}
            <div className="md:w-2/3">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <Link 
                  href="https://www.kairosrds.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-accent transition-colors"
                >
                  Kairos R&D Solutions Pvt. Ltd.
                </Link>{" "}
                is a specialized <strong className="text-foreground">Clinical Research Organization (CRO)</strong> founded and led by Dr. Ashwani Dhar. 
                The company delivers end-to-end clinical research services with a focus on quality, innovation, and patient-centric trials.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-accent" />
                Key Focus Areas
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground mb-8">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-foreground">{area}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                As Founder and CEO, Dr. Dhar integrates his expertise in clinical medicine, medical informatics, and AI to drive ethical, 
                technology-forward clinical research that accelerates drug development and improves global healthcare access.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  <Link href="https://www.kairosrds.com" target="_blank" rel="noopener noreferrer">
                    Visit kairosrds.com <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://www.kairosrds.com/contact" target="_blank" rel="noopener noreferrer">
                    Contact Kairos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" aria-label="Kairos R&D Solutions Statistics">
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
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">Kairos Clinical Research Services</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-accent/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Kairos */}
        <article className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Kairos R&D Solutions</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                <strong className="text-foreground">Kairos</strong> is transforming clinical research by connecting sponsors directly with healthcare-first sites and diverse patient populations, all powered by innovative technology. As a leading <strong className="text-foreground">Clinical Research Organization (CRO)</strong>, Kairos provides comprehensive services from patient recruitment to data management.
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
                  <Globe className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-bold text-center mb-2">Kairos R&D Solutions</h4>
                <p className="text-sm text-muted-foreground text-center mb-2">
                  Kairos R&D Solutions Pvt. Ltd.
                </p>
                <p className="text-center text-muted-foreground text-sm mb-6">
                  Your partner in Clinical Research - Making It Seamless
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="https://www.kairosrds.com" target="_blank" rel="noopener noreferrer" title="Explore Kairos R&D Solutions">
                    Explore Kairos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
