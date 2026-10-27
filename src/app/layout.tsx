import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

// Une seule famille, trois largeurs : large pour le lettrage, normale pour le texte, étroite pour les panneaux.
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap", axes: ["wdth"] });

const pageTitle = `${site.brand} — Création de sites internet pour artisans, commerces et collectivités`;
const description =
  "Rémy Denimal crée, référence et suit les sites internet des artisans, commerçants, TPE, associations et mairies. Hauts-de-France, Île-de-France et à distance. Sites vitrines dès 1 000 €.";

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
  themeColor: "#f4f3ee",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  image: `${site.url}/images/profile.jpg`,
  areaServed: ["Hauts-de-France", "Île-de-France"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={archivo.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
