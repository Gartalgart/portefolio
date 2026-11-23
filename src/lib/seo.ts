import type { Metadata } from "next";
import { site } from "./content";

// Métadonnées d'une page intérieure : titre suivi de la marque, adresse canonique et partage à sa propre adresse
// (sans cela, la page hériterait de l'adresse canonique et du titre de partage de l'accueil).
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const full = `${title} — ${site.brand}`;
  // Redéfinir `openGraph` dans une page efface l'image de partage héritée de l'accueil : elle est donc redonnée ici
  // (c'est celle de src/app/opengraph-image.tsx, 1200 × 630).
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.brand }];
  return {
    title: full,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, siteName: site.brand, locale: "fr_FR", type: "website", images },
    twitter: { card: "summary_large_image", title: full, description, images },
  };
}

export type Crumb = { label: string; href: string };

// Fil d'Ariane lisible par Google (BreadcrumbList) : il affiche le chemin de la page à la place de son adresse brute.
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
}

// Sérialisation sûre pour une balise <script> : un « < » dans un texte ne peut pas refermer la balise.
export const jsonLdHtml = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
