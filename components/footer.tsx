import Link from "next/link"
import { Linkedin, Instagram, Youtube, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Kairos R&D", href: "#kairos" },
    { label: "Expertise", href: "#expertise" },
    { label: "ThinkRoman", href: "#thinkroman" },
    { label: "Media", href: "#media" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" }
  ]

  const externalLinks = [
    { label: "ThinkRoman", url: "https://thinkroman.com" },
    { label: "Kairos R&D Solutions", url: "https://kairosrds.com" },
    { label: "TrPharma", url: "https://pharma.thinkroman.com" },
    { label: "Official Site", url: "https://www.durandhar.com" }
  ]

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/ashwanidhar", label: "LinkedIn" },
    { icon: Instagram, url: "https://www.instagram.com/trpharma187", label: "Instagram" },
    { icon: Youtube, url: "https://www.youtube.com/@drashwanidhar", label: "YouTube" }
  ]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Dr. Ashwani Dhar</h3>
            <p className="text-background/70 text-sm mb-4 leading-relaxed">
              MD, DMI | Physician, Healthcare Innovator, and Technology Visionary. CEO of ThinkRoman Ventures and Chairman of Kairos R&D Solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizations */}
          <div>
            <h4 className="font-bold mb-4">Organizations</h4>
            <ul className="space-y-2">
              {externalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background text-sm transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kairos Highlight */}
          <div>
            <div className="bg-background/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-accent-foreground">K</span>
              </div>
              <h4 className="font-bold mb-2">Kairos R&D Solutions</h4>
              <p className="text-background/70 text-sm mb-4">
                Your partner in Clinical Research - Making It Seamless
              </p>
              <Link
                href="https://kairosrds.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
              >
                Visit kairosrds.com
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Dr. Ashwani Dhar. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-background/60 text-sm">
              <span>Fremont, California</span>
              <span>•</span>
              <Link
                href="https://thinkroman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors"
              >
                ThinkRoman Ventures LLP
              </Link>
            </div>
          </div>
          
          {/* SEO Disambiguation */}
          <div className="mt-6 pt-6 border-t border-background/10">
            <p className="text-background/40 text-xs text-center max-w-4xl mx-auto">
              This is the official profile page for <strong>Dr. Ashwani Dhar MD DMI</strong>, physician, healthcare innovator, CEO of ThinkRoman Ventures, and Chairman of Kairos R&D Solutions, based in Fremont, California. This profile is distinct from other healthcare professionals with similar names.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
