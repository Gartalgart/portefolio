import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbJsonLd, jsonLdHtml, type Crumb } from "@/lib/seo";
import CallBar from "./CallBar";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

/*
  Cadre des pages intérieures (métiers, prestations, réalisations) : la même barre du haut que l'accueil,
  le contenu de la page, puis le formulaire de devis. « Devis gratuit » y mène donc sans quitter la page.
  Le premier bloc de chaque page porte aria-labelledby="titre" : la barre mobile (CallBar) s'en sert pour s'effacer.
*/
export default function PageShell({ crumbs, children }: { crumbs: Crumb[]; children: ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdHtml(breadcrumbJsonLd(crumbs))} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-nuit focus:px-5 focus:py-3 focus:font-semibold focus:text-blanc"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main">
        {children}
        <Contact />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}

// Fil d'Ariane visible, au-dessus du titre : le dernier élément est la page en cours, sans lien.
export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane">
      <ol className="flex flex-wrap items-center justify-center gap-x-1 text-sm text-muted">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="inline-flex items-center gap-x-1">
              {last ? (
                <span aria-current="page" className="inline-flex min-h-11 items-center">
                  {c.label}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="inline-flex min-h-11 items-center hover:text-nuit hover:underline">
                    {c.label}
                  </Link>
                  <ChevronRight size={15} strokeWidth={2} aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
