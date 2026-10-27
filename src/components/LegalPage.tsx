import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { legal, site } from "@/lib/content";
import Footer from "./Footer";

/*
  Page de lecture (mentions légales, confidentialité) : une colonne de texte sur la carrosserie,
  sans la navigation à ancres de l'accueil. Les sections sont des <section> titrées en h2.
*/
export default function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b-[3px] border-anthracite bg-carrosserie">
        <nav aria-label="Retour" className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-5 md:px-8">
          <Link href="/" className="lettrage text-xl text-anthracite md:text-2xl">
            {site.brand}
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 py-2 font-semibold text-anthracite underline decoration-vinyle">
            <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" /> Retour au site
          </Link>
        </nav>
      </header>

      <main id="main" className="px-5 py-16 md:px-8 md:py-24">
        <article className="mx-auto max-w-[68ch]">
          <h1 className="lettrage text-balance text-[clamp(2.2rem,6vw,4rem)] text-vinyle">{title}</h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed">{intro}</p>
          <p className="mt-3 text-muted">Dernière mise à jour : {legal.updated}.</p>
          <div className="mt-12 space-y-12 border-t-[3px] border-anthracite pt-10 [&_a]:font-semibold [&_a]:underline [&_a]:decoration-vinyle [&_h2]:lettrage-etroit [&_h2]:text-2xl [&_li]:leading-relaxed [&_p]:leading-relaxed [&_section>*+*]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-vinyle">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
