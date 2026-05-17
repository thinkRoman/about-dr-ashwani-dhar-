import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Brain, Sun, Baby, Pill, MonitorSmartphone } from "lucide-react"

export function ThinkRomanSection() {
  const platforms = [
    {
      icon: Sun,
      name: "Sunshine",
      tagline: "Preventive Health",
      url: "https://sunshine.thinkroman.com",
      description: "Proactive health screening and wellness guidance powered by machine learning."
    },
    {
      icon: Baby,
      name: "Mother",
      tagline: "Maternal Health",
      url: "https://mother.thinkroman.com",
      description: "Comprehensive digital health services for maternal and child health."
    },
    {
      icon: Heart,
      name: "Heart",
      tagline: "Cardiovascular Care",
      url: "https://heart.thinkroman.com",
      description: "Advanced heart health monitoring and predictive analytics."
    },
    {
      icon: MonitorSmartphone,
      name: "Diabetes",
      tagline: "Digital Management",
      url: "https://diabetes.thinkroman.com",
      description: "Integrated platform for diabetes monitoring and management."
    },
    {
      icon: Brain,
      name: "OpenAccess",
      tagline: "Mental Health AI",
      url: "https://openaccess.thinkroman.com",
      description: "AI-enabled mental health therapy platform providing accessible support."
    },
    {
      icon: Pill,
      name: "TrPharma",
      tagline: "Pharmaceutical Division",
      url: "https://pharma.thinkroman.com",
      description: "Quality GMP-certified medicines for essential therapeutic needs."
    }
  ]

  const ecosystemLinks = [
    { name: "EMR", desc: "Electronic Medical Records", url: "https://emr.thinkroman.com" },
    { name: "Fusion EHR", desc: "Multi-provider EHR", url: "https://fusion.thinkroman.com" },
    { name: "Care Telehealth", desc: "Remote care portal", url: "https://care.thinkroman.com" },
    { name: "ThinkRoman AI", desc: "Applied AI operations", url: "https://thinkroman.ai" },
    { name: "Heartlink", desc: "ECG reporting portal", url: "https://heartlink.thinkroman.com" },
    { name: "TrCare AI", desc: "Symptom checker", url: "https://genesis-blush.vercel.app" },
    { name: "Academy", desc: "Health tech training", url: "https://academy.thinkroman.com" },
    { name: "Data Center", desc: "AI & modeling", url: "https://dc.thinkroman.com" }
  ]

  return (
    <section id="thinkroman" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Healthcare Innovation Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">ThinkRoman</span> Healthcare
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Under the leadership of Dr. Ashwani Dhar, ThinkRoman has developed a comprehensive suite of AI-driven healthcare platforms, each targeting specific therapeutic areas with enhanced solutions for improved patient outcomes.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <Link 
              key={index} 
              href={platform.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <platform.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">{platform.tagline}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{platform.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Visit Platform <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* TrPharma Highlight */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 mb-16 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">TrPharma - A Division of ThinkRoman</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TrPharma brings ThinkRoman&apos;s clinical expertise into essential pharmaceuticals. Guided by a doctor-led approach, it offers GMP-certified medicines for common therapeutic needs including antibiotics, multivitamins, cardiac care, diabetes management, and more.
              </p>
              <Button asChild>
                <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                  Explore TrPharma
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["KashMOX 625", "880 PLUS", "AcidBlock-D", "TC-A1C", "Sohar-D 60K", "zooviStat 20"].map((product, index) => (
                <div key={index} className="bg-card p-4 rounded-xl text-center border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Pill className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs font-medium truncate">{product}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Ecosystem */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-center">Complete Platform Ecosystem</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ecosystemLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-md group"
              >
                <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">{link.name}</h4>
                <p className="text-xs text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
