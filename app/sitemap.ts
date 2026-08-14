import type { MetadataRoute } from "next"
import { BASE_URL } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    "",
    "/ashwani-dhar",
    "/story",
    "/kairos",
    "/trpharma",
    "/products",
    "/products/kashmox",
    "/products/one87-plus",
    "/products/kashcal-plus",
  ]
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/ashwani-dhar" ? "weekly" : "monthly",
    priority: route === "" || route === "/ashwani-dhar" ? 1 : 0.8,
  }))
}