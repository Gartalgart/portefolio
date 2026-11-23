import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Une seule famille pour les titres et le texte : la hiérarchie vient de la taille et de la graisse.
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

const pageTitle = `${site.brand} — Création de sites internet pour artisans, commerces et collectivités`;
const description =
  "RD-Solutions crée, référence et suit les sites internet des artisans, commerçants, TPE, associations et mairies. Hauts-de-France, Île-de-France et à distance.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle,
    description,
    url: site.url,
    siteName: site.brand,
    locale: "fr_FR",
    type: "website",
    // L'image de partage vient de src/app/opengraph-image.tsx (1200 × 630).
  },
  twitter: { card: "summary_large_image", title: pageTitle, description },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  // Une activité de service locale plutôt qu'une simple personne : c'est ce que Google lit pour la recherche locale.
  "@type": "ProfessionalService",
  name: site.brand,
  description,
  url: site.url,
  email: site.email,
  ...(site.photo ? { image: `${site.url}${site.photo}` } : {}),
  areaServed: ["Hauts-de-France", "Île-de-France"],
  founder: { "@type": "Person", name: site.name, jobTitle: site.role },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={hanken.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
