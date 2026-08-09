import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  const statisch = ["", "/diensten", "/gemeenten", "/kennis", "/prijzen", "/offerte", "/over-ons"];

  return [
    ...statisch.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: nu,
      changeFrequency: (p === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: p === "" ? 1 : 0.8,
    })),
    ...cities.map((c) => ({
      url: `${site.url}/${c.slug}`,
      lastModified: nu,
      changeFrequency: "monthly" as const,
      priority: c.prioriteit === 1 ? 0.9 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${site.url}/diensten/${s.slug}`,
      lastModified: nu,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/kennis/${a.slug}`,
      lastModified: nu,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
