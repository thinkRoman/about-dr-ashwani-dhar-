import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Linkedin, ExternalLink, Play } from "lucide-react"

export function MediaSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "@ashdhar",
      url: "https://www.linkedin.com/in/ashwanidhar",
      description: "Professional updates, healthcare insights, and industry thought leadership.",
      color: "bg-[#0077B5]"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@trpharma187",
      url: "https://www.instagram.com/trpharma187",
      description: "Behind-the-scenes at TrPharma, healthcare initiatives, and wellness content.",
      color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]"
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "Dr. Ashwani Dhar",
      url: "https://www.youtube.com/@drashwanidhar",
      description: "Healthcare innovation talks, AI in medicine discussions, and expert interviews.",
      color: "bg-[#FF0000]"
    }
  ]

  const featuredContent = [
    {
      type: "Interview",
      title: "Unveiling The Future of Genomics: Personalized Medicine and Pharmacogenomics",
      source: "Mapmygenome",
      description: "A deep conversation exploring how genomics is reshaping healthcare and enabling targeted therapies.",
      url: "https://learn.mapmygenome.in/blog/unveiling-the-future-of-genomics-a-conversation-with-dr-ashwani-dhar-on-personalized-medicine-and-pharmacogenomics"
    },
    {
      type: "Article",
      title: "Oracle's AI-Driven EHR: Could It Redefine Medicine's Digital Future?",
      source: "Medium",
      description: "Exploring how AI-driven electronic health records could transform the future of healthcare.",
      url: "https://medium.com/@ashdhar/oracles-ai-driven-ehr-could-it-redefine-medicine-s-digital-future-19a2399cd369"
    },
    {
      type: "Article",
      title: "Why Big Tech Keeps Failing in Healthcare",
      source: "Medium",
      description: "An analysis of cultural barriers over technical ones in healthcare technology adoption.",
      url: "https://medium.com/@ashdhar/why-big-tech-keeps-failing-in-healthcare-93fe98535f52"
    }
  ]

  return (
    <section id="media" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Media & <span className="text-primary">Social Presence</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect with Dr. Ashwani Dhar across platforms for healthcare insights, innovation updates, and thought leadership in digital health transformation.
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${social.color} p-6 flex items-center justify-center`}>
                    <social.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">{social.handle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{social.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Featured Interviews & Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <Link
                key={index}
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-4">
                      {content.type === "Interview" && <Play className="h-3 w-3" />}
                      {content.type}
                    </div>
                    <h4 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {content.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">Source: {content.source}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {content.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4">
                      Read More <ExternalLink className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Video Embed Placeholder */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-bold mb-6 text-center">Video Content</h3>
          <div className="aspect-video max-w-3xl mx-auto bg-secondary rounded-xl flex items-center justify-center border border-border">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="h-8 w-8 text-primary" />
              </div>
              <p className="text-muted-foreground mb-4">Watch Dr. Ashwani Dhar&apos;s interviews and talks</p>
              <Button asChild variant="outline">
                <Link href="https://www.youtube.com/@drashwanidhar" target="_blank" rel="noopener noreferrer">
                  Visit YouTube Channel
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
