import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import PageShell, { Breadcrumb } from "@/components/PageShell";
import ProjectGrid from "@/components/ProjectGrid";
import { quoteHref } from "@/lib/content";
import { getLanding, landingProjects, landings } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

/*
  Page dédiée à un métier ou à une prestation (liste et textes dans src/lib/pages.ts).
  Toutes les adresses sont connues à la compilation : une autre adresse répond « page introuvable ».
*/
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => landings.map((l) => ({ slug: l.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getLanding((await params).slug);
  if (!l) return {};
  return pageMetadata({ title: l.title, description: l.description, path: `/${l.slug}` });
}

export default async function LandingPage({ params }: Props) {
  const l = getLanding((await params).slug);
  if (!l) notFound();

  const crumbs = [
    { label: "Accueil", href: "/" },
    { label: l.label, href: `/${l.slug}` },
  ];
  const exemples = landingProjects(l);
  // « Voir aussi » : les autres pages de la même famille (métiers entre eux, prestations entre elles).
  const voisines = landings.filter((o) => o.kind === l.kind && o.slug !== l.slug);

  return (
    <PageShell crumbs={crumbs}>
      <section aria-labelledby="titre" className="mx-auto max-w-[1296px] px-5 pb-16 pt-6 text-center md:px-12 md:pb-24 md:pt-10">
        <Breadcrumb crumbs={crumbs} />
        <h1 id="titre" className="titre mx-auto mt-8 max-w-[20ch] text-[clamp(2.2rem,5.2vw,4.2rem)] md:mt-14">
          {l.h1}
        </h1>
        <p className="mx-auto mt-6 max-w-[58ch] text-pretty text-[clamp(1.1rem,1.6vw,1.3rem)] text-muted">{l.intro}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          <a href={quoteHref} className="bouton">
            Demander un devis gratuit
          </a>
          {exemples.length > 0 && (
            <a href="#exemples" className="lien">
              Voir des exemples
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </a>
          )}
        </div>
      </section>

      <section aria-labelledby="points-titre" className="mx-auto max-w-[1296px] px-5 md:px-12">
        <h2 id="points-titre" className="titre mx-auto max-w-[22ch] pb-8 text-center text-[clamp(1.8rem,3.8vw,3rem)] md:pb-12">
          {l.pointsTitle}
        </h2>
        <ul className="border-b border-filet">
          {l.points.map((p) => (
            <li key={p.title} className="grid gap-x-12 gap-y-2 border-t border-filet py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-baseline">
              <h3 className="titre text-[clamp(1.3rem,2.2vw,1.75rem)]">{p.title}</h3>
              <p className="max-w-[56ch] text-pretty text-muted">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="inclus-titre" className="px-3 pt-20 md:pt-32">
        <div className="rounded-tuile bg-brume px-5 py-14 md:px-12 md:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
            <div>
              <h2 id="inclus-titre" className="titre text-[clamp(1.8rem,3.8vw,3rem)]">
                Ce qui est inclus
              </h2>
              <p className="mt-4 max-w-[40ch] text-pretty text-lg text-muted">
                Le détail exact est écrit dans le devis, avec le prix, avant de commencer.
              </p>
            </div>
            <ul className="space-y-4 text-lg">
              {l.included.map((i) => (
                <li key={i} className="flex gap-3">
                  <Check size={21} strokeWidth={2.4} className="mt-1 shrink-0 text-marine" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {exemples.length > 0 && (
        <section id="exemples" aria-labelledby="exemples-titre">
          <div className="mx-auto max-w-[1296px] px-5 pb-8 pt-20 text-center md:px-12 md:pb-12 md:pt-32">
            <h2 id="exemples-titre" className="titre text-[clamp(1.8rem,3.8vw,3rem)]">
              {l.projectsTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-pretty text-lg text-muted">{l.projectsIntro}</p>
          </div>
          <ProjectGrid items={exemples} />
          <p className="mt-6 text-center">
            <Link href="/realisations" className="lien">
              Toutes les réalisations
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </p>
        </section>
      )}

      <div className="pt-20 md:pt-32">
        <Faq items={l.faq} lead="Les questions qui reviennent le plus souvent sur ce sujet." />
      </div>

      <nav aria-labelledby="voisines-titre" className="mx-auto max-w-[1296px] px-5 pb-20 md:px-12 md:pb-32">
        <h2 id="voisines-titre" className="titre text-2xl">
          {l.kind === "metier" ? "Pour d'autres activités" : "Les autres prestations"}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-8 border-t border-filet pt-3">
          {voisines.map((o) => (
            <li key={o.slug}>
              <Link href={`/${o.slug}`} className="lien">
                {o.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </PageShell>
  );
}
