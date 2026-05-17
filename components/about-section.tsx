import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Brain, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            About <span className="text-primary">Dr. Ashwani Dhar</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong>Dr. Ashwani Dhar</strong> is a physician, healthcare innovator, and investor with deep expertise in leveraging technology to enhance patient care. With credentials in clinical medicine (<strong>MD</strong>) and medical informatics (<strong>DMI</strong>), Dr. Ashwani Dhar combines clinical acumen with strategic vision to address global healthcare challenges through AI-driven diagnostics, preventive health solutions, and digital health transformation.
          </p>
        </div>

        {/* Key Facts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                MD, DMI (Medical Informatics)
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Harvard T.H. Chan School of Public Health
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Clinical Experience</h3>
              <p className="text-sm text-muted-foreground">
                20+ Years in Healthcare
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Physician & Healthcare Executive
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">AI Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                Former CMIO at Cerner/Oracle
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                AI-Driven Healthcare Solutions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Fremont, California
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Global Healthcare Impact
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto">
          <blockquote className="relative bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary p-8 rounded-r-2xl">
            <p className="text-xl md:text-2xl text-foreground italic mb-4 text-pretty">
              {'"'}Healthcare transformation requires more than just technology—it demands aligning intelligence with equity to create solutions that are both effective and inclusive.{'"'}
            </p>
            <footer className="text-muted-foreground">
              — <cite className="font-semibold not-italic">Dr. Ashwani Dhar</cite>, CEO of ThinkRoman Ventures
            </footer>
          </blockquote>
        </div>

        {/* Disambiguation Notice */}
        <div className="mt-16 p-6 bg-secondary/50 rounded-2xl border border-border max-w-4xl mx-auto">
          <h3 className="font-bold text-lg mb-3 text-primary">Important Note</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            <strong>Dr. Ashwani Dhar MD DMI</strong> is the physician, healthcare innovator, and entrepreneur profiled on this page—CEO of ThinkRoman Ventures and Chairman of Kairos R&D Solutions. Please note this is a distinct individual from other healthcare professionals who may share a similar name. Dr. Ashwani Dhar is based in <strong>Fremont, California</strong> and specializes in AI-driven healthcare solutions, digital health transformation, and clinical research innovation.
          </p>
        </div>
      </div>
    </section>
  )
}
