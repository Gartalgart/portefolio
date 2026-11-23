import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { legal, site } from "@/lib/content";
import Footer from "./Footer";

/*
  Page de lecture (mentions légales, confidentialité) : une colonne de texte sur fond blanc,
  sans la navigation à ancres de l'accueil. Les sections sont des <section> titrées en h2.
*/
export default function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-filet">
        <nav aria-label="Retour" className="mx-auto flex h-14 max-w-[1296px] items-center justify-between px-5 md:px-12">
          <Link href="/" className="inline-flex min-h-11 items-center text-lg font-bold tracking-tight">
            {site.brand}
          </Link>
          <Link href="/" className="lien text-sm">
            <ArrowLeft size={17} strokeWidth={2.2} aria-hidden="true" /> Retour au site
          </Link>
        </nav>
      </header>

      <main id="main" className="px-5 py-16 md:px-12 md:py-24">
        <article className="mx-auto max-w-[68ch]">
          <h1 className="titre text-[clamp(2.2rem,6vw,4rem)]">{title}</h1>
          <p className="mt-6 text-pretty text-lg">{intro}</p>
          <p className="mt-3 text-muted">Dernière mise à jour : {legal.updated}.</p>
          <div className="mt-12 space-y-12 border-t border-filet pt-10 [&_a]:font-semibold [&_a]:text-marine [&_a]:underline [&_h2]:titre [&_h2]:text-2xl [&_section>*+*]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-ardoise">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
