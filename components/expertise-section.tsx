import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Brain, Building, Laptop, TrendingUp, Globe } from "lucide-react"

export function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: Stethoscope,
      title: "Clinical Medicine",
      credential: "MD, DMI",
      description: "Extensive clinical experience combined with medical informatics expertise for comprehensive patient care."
    },
    {
      icon: Building,
      title: "Healthcare Strategy",
      credential: "CEO Leadership",
      description: "Leading healthcare organizations and driving strategic initiatives for digital transformation."
    },
    {
      icon: Brain,
      title: "AI & Medical Informatics",
      credential: "Former CMIO",
      description: "Pioneering AI applications in healthcare at Cerner/Oracle Health with proven track record."
    },
    {
      icon: Laptop,
      title: "Digital Health",
      credential: "Platform Developer",
      description: "Building comprehensive digital health platforms including EMR, telehealth, and AI diagnostics."
    },
    {
      icon: TrendingUp,
      title: "Healthcare Investment",
      credential: "Venture Capitalist",
      description: "Strategic investments in healthcare startups and emerging medical technologies."
    },
    {
      icon: Globe,
      title: "Global Health",
      credential: "Thought Leader",
      description: "Championing healthcare equity and accessibility through digital solutions worldwide."
    }
  ]

  const achievements = [
    { label: "Digital Health Initiatives Launched", value: "20+" },
    { label: "AI-Powered Healthcare Platforms", value: "15+" },
    { label: "Healthcare Publications", value: "Multiple" },
    { label: "Years of Healthcare Experience", value: "20+" }
  ]

  return (
    <section id="expertise" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Expertise & <span className="text-primary">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dr. Ashwani Dhar brings a unique combination of clinical expertise, technology leadership, and entrepreneurial vision to healthcare innovation.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{area.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{area.credential}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">Leadership & Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold mb-4 text-primary">ThinkRoman CEO & Founder</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded and leads ThinkRoman Ventures, a healthcare technology company developing AI platforms for medicine, mental health, and digital health services across multiple therapeutic areas including cardiovascular, diabetes, maternal health, and mental wellness.
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold mb-4 text-accent">Kairos R&D Chairman</h3>
            <p className="text-muted-foreground leading-relaxed">
              As Chairman of Kairos R&D Solutions, Dr. Ashwani Dhar advances clinical research methodologies and AI-driven medical coding technologies that enhance diagnostic precision and treatment outcomes, connecting sponsors with healthcare sites globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
