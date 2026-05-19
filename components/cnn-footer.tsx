import Link from "next/link"
import { Linkedin, Instagram, Youtube, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ashdhar", color: "bg-[#0077b5]" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/trpharma187/", color: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@drashwanidhar", color: "bg-red-600" },
  { icon: Mail, label: "Email", href: "mailto:contact@thinkroman.com", color: "bg-gray-700" },
]

export function CNNFooter() {
  return (
    <footer id="contact" className="bg-[#0c1829] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black">Connect with Dr. Ashwani Dhar</h3>
              <p className="text-gray-400 mt-1">Healthcare innovation, clinical research, and more</p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-3 rounded-full hover:opacity-80 transition-opacity`}
                  title={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        {/* CEO & Medical Director's Guarantee */}
        <div className="bg-[#1a2a3d] border border-white/10 rounded-xl p-6 mb-12">
          <p className="text-gray-300 text-center leading-relaxed">
            The TrPharma therapeutic portfolio is developed under the strategic vision and medical leadership of our Founder and CEO,{" "}
            <Link 
              href="https://www.about-dr-ashwani-dhar.com" 
              className="text-[#f9a825] hover:underline font-semibold"
            >
              Dr. Ashwani Dhar
            </Link>
            . Every formulation reflects our commitment to clinical excellence and robust quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black">Dr. Ashwani Dhar</div>
            <div className="text-gray-400 mt-1">MD, DMI | Healthcare Innovator</div>
            <p className="text-gray-500 mt-4 max-w-md">
              Physician, entrepreneur, and healthcare technology visionary. 
              CEO of ThinkRoman Ventures, Founder of Kairos R&D Solutions and TrPharma.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#f9a825] mb-4">Ventures</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/kairos" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  Kairos R&D Solutions <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/trpharma" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  TrPharma <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  TrPharma Products <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/products/kashmox" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  KashMOX 625 <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="/products/one87-plus" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  One87 Plus (880 PLUS) <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="https://thinkroman.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1">
                  ThinkRoman Ventures <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="font-bold text-[#f9a825] mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.linkedin.com/in/ashdhar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/trpharma187/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Instagram @trpharma187
                </Link>
              </li>
              <li>
                <Link href="https://kairosrds.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  kairosrds.com
                </Link>
              </li>
              <li>
                <Link href="https://drashwanidhar.thinkroman.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Official Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Dr. Ashwani Dhar. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Fremont, California</span>
            <span className="text-[#f9a825]">|</span>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
