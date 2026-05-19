"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pill, Zap, Bone, ArrowRight, Stethoscope, ExternalLink } from "lucide-react"

const products = [
  {
    name: "KashMOX 625",
    description: "Amoxicillin + Potassium Clavulanate antibiotic for respiratory infections, UTIs, and skin infections.",
    icon: Pill,
    color: "bg-accent",
    textColor: "text-accent",
    href: "/products/kashmox",
    externalHref: "https://pharma.thinkroman.com/products#kashmox",
    image: "/images/kashmox-625.webp",
    hasImage: true
  },
  {
    name: "One87 Plus",
    altName: "880 PLUS",
    description: "Aceclofenac + Paracetamol for effective pain relief - arthritis, musculoskeletal, and dental pain.",
    icon: Zap,
    color: "bg-orange-500",
    textColor: "text-orange-500",
    href: "/products/one87-plus",
    externalHref: "https://pharma.thinkroman.com/products#one87plus",
    hasImage: false
  },
  {
    name: "KashCAL PLUS",
    description: "Calcium + Vitamin D3 supplement for bone health and osteoporosis prevention.",
    icon: Bone,
    color: "bg-green-500",
    textColor: "text-green-500",
    href: "/products/kashcal-plus",
    externalHref: "https://pharma.thinkroman.com/products#kashcalplus",
    hasImage: false
  }
]

export function PharmaceuticalPortfolio() {
  return (
    <section id="pharmaceutical-portfolio" className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Stethoscope className="h-4 w-4" />
            Pharmaceutical Portfolio & Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            TrPharma Formulations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As Founder & CEO of{" "}
            <Link href="/trpharma" className="text-primary hover:underline font-semibold">TrPharma</Link>, 
            I oversee the development of WHO-GMP certified medications designed to provide affordable, quality healthcare.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {products.map((product, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow overflow-hidden group">
              <CardContent className="p-0">
                {/* Product Visual */}
                <div className={`${product.color}/10 p-6 flex items-center justify-center min-h-[140px]`}>
                  {product.hasImage ? (
                    <Image
                      src={product.image!}
                      alt={`${product.name} - TrPharma product developed by Dr. Ashwani Dhar`}
                      width={150}
                      height={127}
                      className="rounded-lg shadow group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className={`${product.color} text-white p-4 rounded-xl shadow group-hover:scale-105 transition-transform`}>
                      <product.icon className="h-10 w-10" />
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    <Link href={product.href} className="hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                    {product.altName && (
                      <span className="text-sm font-normal text-gray-500 ml-2">({product.altName})</span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <Link 
                    href={product.href}
                    className={`${product.textColor} text-sm font-medium inline-flex items-center gap-1 hover:underline`}
                  >
                    View Details <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Medical Director Statement */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 text-center max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-gray-900">&quot;Manufactured for TrPharma, a division of ThinkRoman Ventures LLP</span> | 
            Under the medical direction of{" "}
            <Link href="/" className="text-primary hover:underline font-semibold">Dr. Ashwani Dhar</Link>.&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="gap-2">
              <Link href="/products">
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="https://pharma.thinkroman.com" target="_blank" rel="noopener noreferrer">
                Shop at pharma.thinkroman.com <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
