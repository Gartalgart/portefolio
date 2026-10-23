import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Schibsted_Grotesk } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const body = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
// Axe de largeur chargé pour obtenir la version condensée des titres.
const title = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-title", display: "swap", axes: ["wdth", "opsz"] });

const pageTitle = `${site.brand} — ${site.role}`;
const description =
  "Je conçois des sites et applications web rapides et clairs pour les artisans, commerçants, TPE, associations et mairies. Hauts-de-France, Île-de-France et télétravail.";

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
    images: [{ url: "/images/profile.jpg", width: 800, height: 993, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description, images: ["/images/profile.jpg"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#070d1c" },
    { media: "(prefers-color-scheme: dark)", color: "#070d1c" },
  ],
};

// Jour par défaut (le hero reste de nuit) ; le choix du visiteur est mémorisé.
const themeScript = `try{var t=localStorage.getItem('theme')||'light';document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}`;

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
    <html lang="fr" data-theme="light" suppressHydrationWarning className={`${body.variable} ${title.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
