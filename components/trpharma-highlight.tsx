import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Pill, Heart, Sun, Shield, Award, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrPharmaHighlight() {
  const categories = [
    {
      icon: Pill,
      title: "Antibiotic",
      description: "Fighting bacterial infections with efficacy"
    },
    {
      icon: Heart,
      title: "Pain Management",
      description: "Improving quality of life for chronic pain"
    },
    {
      icon: Sun,
      title: "Vitamin D Supplement",
      description: "Essential for calcium absorption and health"
    }
  ]

  return (
    <section id="trpharma" className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-[#8B1A1A]" />
              <div>
                <span className="text-amber-700 text-sm font-bold uppercase tracking-wider">Featured Venture</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#8B1A1A] leading-tight">
                  TrPharma
                </h2>
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#8B1A1A]">Your Health and Wellness Partner.</strong> A doctor-led pharmaceutical division of ThinkRoman Ventures LLP.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by <strong className="text-gray-900">Dr. Ashwani Dhar, MD, DMI</strong>, TrPharma stands at the unique crossroads of clinical expertise and pharmaceutical innovation. With deep understanding of patient needs and focus on cutting-edge advancements.
            </p>

            {/* Mission & Vision */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#8B1A1A] mb-2">Mission</h4>
                  <p className="text-sm text-gray-600">To be your partner in health and wellness, offering unparalleled products and services to enhance your life.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#8B1A1A] mb-2">Vision</h4>
                  <p className="text-sm text-gray-600">A world where every individual has access to personalized, innovative healthcare solutions.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[#8B1A1A] hover:bg-[#6B1414] text-white">
                <Link href="/trpharma">
                  Full TrPharma Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#8B1A1A]/5">
                <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                  Visit pharma.thinkroman.com
                </Link>
              </Button>
            </div>
          </div>

          {/* KashMOX Featured Product */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#8B1A1A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Flagship Product</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">KashMOX 625</h3>
            <p className="text-gray-500 text-sm mb-6">Amoxicillin & Potassium Clavulanate Tablets I.P.</p>
            
            <div className="relative aspect-[4/3] mb-6">
              <Image
                src="/images/kashmox-625.webp"
                alt="KashMOX 625 - Amoxicillin Potassium Clavulanate Antibiotic by TrPharma"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { icon: Shield, label: "GMP Certified" },
                { icon: Award, label: "WHO-GMP" },
                { icon: Stethoscope, label: "Doctor-Led" },
                { icon: Heart, label: "Patient-First" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-2">
                  <item.icon className="h-4 w-4 text-[#8B1A1A]" />
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            <Button asChild className="w-full bg-[#8B1A1A] hover:bg-[#6B1414]">
              <Link href="https://pharma.thinkroman.com/products" target="_blank" rel="noopener noreferrer">
                View All Products
              </Link>
            </Button>
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
              <category.icon className="h-10 w-10 text-[#8B1A1A] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#8B1A1A] to-[#B91C1C] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Follow @trpharma187</h3>
          <p className="text-white/80 mb-6">Stay updated on health tips, product launches, and wellness insights</p>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="https://www.instagram.com/trpharma187" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
