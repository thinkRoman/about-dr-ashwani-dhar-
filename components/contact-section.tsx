import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, ExternalLink, Building } from "lucide-react"

export function ContactSection() {
  const contactLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ashdhar",
      url: "https://www.linkedin.com/in/ashdhar",
      primary: true
    },
    {
      icon: Building,
      label: "ThinkRoman",
      value: "thinkroman.com",
      url: "https://thinkroman.com",
      primary: false
    },
    {
      icon: Building,
      label: "Kairos R&D",
      value: "kairosrds.com",
      url: "https://kairosrds.com",
      primary: false
    },
    {
      icon: ExternalLink,
      label: "Official Site",
      value: "durandhar.com",
      url: "https://www.durandhar.com",
      primary: false
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect & <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Interested in healthcare innovation, AI-driven solutions, or collaboration opportunities? Connect with Dr. Ashwani Dhar to discuss how we can transform healthcare together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">Fremont, California, USA</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Professional Contact</h4>
                      <p className="text-muted-foreground">Connect via LinkedIn for business inquiries</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">Professional Links</h4>
                  <div className="space-y-3">
                    {contactLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          link.primary 
                            ? 'bg-[#0077B5] text-white hover:bg-[#006097]' 
                            : 'bg-secondary hover:bg-secondary/80'
                        }`}
                      >
                        <link.icon className="h-5 w-5" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">{link.label}</div>
                          <div className={`text-xs ${link.primary ? 'text-white/80' : 'text-muted-foreground'}`}>
                            {link.value}
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 opacity-50" />
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Areas of Interest */}
          <div>
            <Card className="bg-card border-border h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Areas of Interest</h3>
                
                <div className="space-y-4">
                  {[
                    "Healthcare Technology Innovation",
                    "AI in Medicine & Mental Health",
                    "Digital Health Transformation",
                    "Healthcare Accessibility & Equity",
                    "Clinical Research & Development",
                    "Healthcare Entrepreneurship",
                    "Personalized Medicine & Pharmacogenomics",
                    "Strategic Healthcare Investment"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl border border-accent/20">
                  <h4 className="font-bold mb-2 text-accent">Kairos R&D Solutions</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    For clinical research partnerships and collaboration inquiries
                  </p>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="https://kairosrds.com/contact" target="_blank" rel="noopener noreferrer">
                      Contact Kairos R&D
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Building the Future of Healthcare</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dr. Ashwani Dhar is committed to transforming healthcare through intelligence, equity, and innovation. Join the mission to make quality healthcare accessible to all.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="https://www.linkedin.com/in/ashdhar" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://www.durandhar.com" target="_blank" rel="noopener noreferrer">
                  Visit Official Site
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
