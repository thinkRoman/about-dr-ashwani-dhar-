import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"

export function PublicationsSection() {
  const publications = [
    {
      date: "February 2025",
      readTime: "8 min read",
      title: "The Silent Threat: Why Men of South Asian Descent Must Prioritize CT Coronary Angiogram + Calcium Scoring",
      description: "In this comprehensive analysis, Dr. Ashwani Dhar examines genetic and lifestyle risk factors affecting South Asian populations, providing evidence-based recommendations for preventive cardiovascular care and early detection strategies.",
      url: "https://blog.thinkroman.com/ct-coronary-angiogram-south-asian-men",
      featured: true
    },
    {
      date: "2024",
      readTime: "6 min read",
      title: "Oracle's AI-Driven EHR: Could It Redefine Medicine's Digital Future?",
      description: "An in-depth exploration of how AI-driven electronic health records could transform healthcare delivery and patient outcomes.",
      url: "https://medium.com/@ashdhar/oracles-ai-driven-ehr-could-it-redefine-medicine-s-digital-future-19a2399cd369",
      featured: false
    },
    {
      date: "2024",
      readTime: "7 min read",
      title: "Why Big Tech Keeps Failing in Healthcare",
      description: "Analyzing why large technology companies face challenges in the healthcare sector, emphasizing cultural barriers over technical ones.",
      url: "https://medium.com/@ashdhar/why-big-tech-keeps-failing-in-healthcare-93fe98535f52",
      featured: false
    }
  ]

  const topics = [
    "AI in Healthcare",
    "Digital Health Transformation",
    "Healthcare Equity",
    "Personalized Medicine",
    "Pharmacogenomics",
    "Clinical Research",
    "Medical Informatics",
    "Preventive Care"
  ]

  return (
    <section id="publications" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Publications & <span className="text-primary">Thought Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dr. Ashwani Dhar regularly contributes to healthcare innovation discourse through publications on AI in medicine, digital health transformation, and healthcare equity initiatives.
          </p>
        </div>

        {/* Featured Publication */}
        {publications.filter(p => p.featured).map((pub, index) => (
          <Link
            key={index}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-12 group"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" /> {pub.date}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {pub.readTime}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors text-pretty">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {pub.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Read Full Article <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}

        {/* Other Publications */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {publications.filter(p => !p.featured).map((pub, index) => (
            <Link
              key={index}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {pub.date}
                    </span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {pub.readTime}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {pub.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                    {pub.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Topics */}
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
          <Button asChild variant="outline">
            <Link href="https://medium.com/@ashdhar" target="_blank" rel="noopener noreferrer" className="gap-2">
              <BookOpen className="h-4 w-4" />
              View All Articles on Medium
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
