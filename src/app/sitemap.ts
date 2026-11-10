import type { MetadataRoute } from "next";
import { legalPages, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...legalPages.map((p) => ({ url: `${site.url}${p.href}`, changeFrequency: "yearly" as const, priority: 0.2 })),
  ];
}
