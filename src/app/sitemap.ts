import type { MetadataRoute } from "next";
import { legalPages, projects, site } from "@/lib/content";
import { landings, projectHref } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    // Pages dédiées (métiers et prestations) : celles qui doivent ressortir sur les recherches hors marque.
    ...landings.map((l) => ({ url: `${site.url}/${l.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${site.url}/realisations`, changeFrequency: "monthly", priority: 0.6 },
    ...projects.map((p) => ({ url: `${site.url}${projectHref(p.slug)}`, changeFrequency: "yearly" as const, priority: 0.5 })),
    ...legalPages.map((p) => ({ url: `${site.url}${p.href}`, changeFrequency: "yearly" as const, priority: 0.2 })),
  ];
}
