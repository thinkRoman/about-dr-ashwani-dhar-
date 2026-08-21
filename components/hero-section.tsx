import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Building2, Stethoscope } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="h-4 w-4" />
              Healthcare Innovation Leader
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Dr. Ashwani Dhar
              <span className="block text-primary">MD, DMI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed text-pretty">
              Physician, entrepreneur, and healthcare technology visionary. CEO of{" "}
              <Link href="https://thinkroman.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                ThinkRoman Ventures
              </Link>{" "}
              and Chairman of{" "}
              <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">
                Kairos R&D Solutions
              </Link>
              . Pioneering AI-driven healthcare solutions that transform patient care globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button asChild size="lg" className="gap-2">
                <Link href="#about">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer">
                  Visit Kairos R&D
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Digital Health Initiatives</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent">AI-Driven</div>
                <div className="text-sm text-muted-foreground">Healthcare Solutions</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">Global</div>
                <div className="text-sm text-muted-foreground">Healthcare Impact</div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card border border-border rounded-2xl shadow-xl p-8 max-w-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground">
                    AD
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Dr. Ashwani Dhar</h2>
                    <p className="text-muted-foreground">MD, DMI</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Building2 className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-sm">CEO & Chairman</div>
                      <div className="text-xs text-muted-foreground">ThinkRoman Ventures</div>
                    </div>
                  </div>
                  
                  <Link 
                    href="https://kairosrds.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-accent/10 border-2 border-accent/30 rounded-lg hover:border-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <span className="text-accent-foreground font-bold text-sm">K</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm group-hover:text-accent transition-colors">Chairman, Kairos R&D Solutions</div>
                      <div className="text-xs text-muted-foreground">Clinical Research Excellence</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>

                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-sm">Former CMIO</div>
                      <div className="text-xs text-muted-foreground">Cerner/Oracle Health</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex gap-3">
                    <Link
                      href="https://www.linkedin.com/in/ashwanidhar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 bg-[#0077B5] text-white text-sm font-medium rounded-lg text-center hover:bg-[#006097] transition-colors"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href="https://www.durandhar.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 bg-primary text-primary-foreground text-sm font-medium rounded-lg text-center hover:bg-primary/90 transition-colors"
                    >
                      Official Site
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                20+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
