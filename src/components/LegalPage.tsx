import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { legal, site } from "@/lib/content";
import Footer from "./Footer";

/*
  Page de lecture (mentions légales, confidentialité) : une colonne de texte sur le papier du jour,
  sans la barre de navigation à ancres de l'accueil. Les sections sont des <section> titrées en h2.
*/
export default function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <header className="border-b border-line px-5 py-3 md:px-8">
        <nav aria-label="Retour" className="mx-auto flex max-w-[1320px] items-center justify-between">
          <Link href="/" className="display text-2xl text-fg">
            {site.brand}<span className="text-link">.</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-muted transition hover:text-fg">
            <ArrowLeft size={16} aria-hidden="true" /> Retour au site
          </Link>
        </nav>
      </header>

      <main id="main" className="px-5 py-20 md:px-8 md:py-28">
        <article className="mx-auto max-w-[68ch]">
          <h1 className="display text-balance text-[clamp(2.5rem,6vw,4.5rem)]">{title}</h1>
          <p className="mt-5 text-pretty text-lg text-muted">{intro}</p>
          <p className="mt-3 text-sm text-muted">Dernière mise à jour : {legal.updated}.</p>
          <div className="mt-14 space-y-12 [&_a]:font-medium [&_a]:text-link [&_a]:underline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.02em] [&_li]:leading-relaxed [&_p]:leading-relaxed [&_section>*+*]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
