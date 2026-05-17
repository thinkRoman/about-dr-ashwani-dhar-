import Link from "next/link"
import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

// Real YouTube video IDs for Dr. Ashwani Dhar content
const featuredVideos = [
  {
    id: "main",
    title: "Dr. Ashwani Dhar: Pharmacogenomics and Personalized Medicine",
    subtitle: "Genomics Gupshup Episode #24 - The future of genomics and personalized healthcare",
    youtubeId: "8sZDapqP03I",
    duration: "38:00",
    category: "INTERVIEW",
    views: "4.3K views"
  },
  {
    id: "vitamin-d",
    title: "Vitamin D: The Sunshine Campaign",
    subtitle: "Dr. Ashwani Dhar discusses Vitamin D importance for health",
    youtubeId: "9-GJB5dlyz4",
    duration: "45:00",
    category: "HEALTH",
    views: "27 views"
  },
  {
    id: "ceo-statement",
    title: "CEO Statement: ThinkRoman Ventures",
    subtitle: "Dr. Ashwani Dhar on the startup of his companies in India",
    youtubeId: "VFHsUNEfkYQ",
    duration: "22:00",
    category: "BUSINESS",
    views: "415 views"
  },
  {
    id: "sakshi-tv",
    title: "NRI Health Show: New Age Health Care",
    subtitle: "Ask Your Doctor with Dr. Ashwani Dhar on Sakshi TV",
    youtubeId: "9p8GiZ6UEyM",
    duration: "27:00",
    category: "TV INTERVIEW",
    views: "1.7K views"
  }
]

export function VideoSpotlight() {
  const mainVideo = featuredVideos[0]
  const sideVideos = featuredVideos.slice(1)

  return (
    <section id="featured-video" className="bg-[#111827] py-16">
      <div className="container mx-auto px-4">
        {/* Section Header - CNN Style */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-red-600" />
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              Featured Videos
            </h2>
          </div>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Video Grid - Large Main + Side Stack */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Featured Video - Large */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden group">
              <iframe
                src={`https://www.youtube.com/embed/${mainVideo.youtubeId}?rel=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={mainVideo.title}
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <span className="bg-red-600 text-white text-xs font-bold uppercase px-2 py-1">
                  {mainVideo.category}
                </span>
                <span className="text-gray-500 text-sm">{mainVideo.views}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-3 leading-tight">
                {mainVideo.title}
              </h3>
              <p className="text-gray-400 mt-2">{mainVideo.subtitle}</p>
            </div>
          </div>

          {/* Side Videos Stack */}
          <div className="space-y-4">
            {sideVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  />
                </div>
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 text-xs font-bold uppercase">
                      {video.category}
                    </span>
                    <span className="text-gray-600 text-xs">{video.views}</span>
                  </div>
                  <h4 className="text-white font-semibold mt-1 group-hover:text-[#f9a825] transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}

            {/* More Videos CTA */}
            <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 mt-4">
              <Link href="https://www.youtube.com/@ThinkRomanTV" target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" /> View All Videos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function InstagramFeed() {
  return (
    <section className="bg-gradient-to-b from-[#111827] to-[#0c1829] py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-[#E1306C]" />
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              @trpharma187
            </h2>
          </div>
          <div className="h-px flex-1 bg-white/10" />
          <Button asChild variant="outline" size="sm" className="border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C]/10">
            <Link href="https://www.instagram.com/trpharma187/" target="_blank" rel="noopener noreferrer">
              Follow <ExternalLink className="h-3 w-3 ml-1" />
            </Link>
          </Button>
        </div>

        {/* Instagram Embed */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Instagram Post Embeds - Use actual Instagram embed code */}
          <div className="bg-white rounded-lg overflow-hidden">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/trpharma187/"
              data-instgrm-version="14"
              style={{ 
                background: '#FFF', 
                border: 0, 
                borderRadius: '3px', 
                margin: '1px', 
                maxWidth: '540px', 
                minWidth: '326px', 
                padding: 0, 
                width: '100%' 
              }}
            >
              <div style={{ padding: '16px' }}>
                <a 
                  href="https://www.instagram.com/trpharma187/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center text-gray-600 hover:text-[#E1306C]"
                >
                  View @trpharma187 on Instagram
                </a>
              </div>
            </blockquote>
          </div>

          {/* Placeholder cards for visual balance */}
          <div className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-lg p-6 flex flex-col items-center justify-center text-white text-center min-h-[300px]">
            <div className="text-4xl mb-4">@trpharma187</div>
            <p className="text-white/80 mb-4">Doctor-led pharmaceutical innovation from Dr. Ashwani Dhar</p>
            <Button asChild className="bg-white text-[#E1306C] hover:bg-white/90">
              <Link href="https://www.instagram.com/trpharma187/" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </Link>
            </Button>
          </div>

          <div className="bg-[#1a1a2e] rounded-lg p-6 flex flex-col items-center justify-center text-white text-center min-h-[300px]">
            <div className="text-5xl font-black text-[#f9a825] mb-2">KashMOX</div>
            <div className="text-xl text-gray-400 mb-4">625</div>
            <p className="text-gray-400 mb-4">Featured Product: Amoxicillin + Clavulanic Acid</p>
            <Button asChild variant="outline" className="border-[#f9a825] text-[#f9a825] hover:bg-[#f9a825]/10">
              <Link href="/trpharma">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
