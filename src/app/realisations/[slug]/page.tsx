import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell, { Breadcrumb } from "@/components/PageShell";
import ProjectGrid from "@/components/ProjectGrid";
import { projects, quoteHref } from "@/lib/content";
import { getProject, projectHref, projectLandings } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

/*
  Page de détail d'une réalisation : le métier en titre, le besoin, la réponse, ce que contient le site.
  Le statut (projet client ou démonstration autour d'un client fictif) est écrit en toutes lettres, comme sur l'accueil.
  Rien n'est ajouté à ce que dit src/lib/content.ts : aucun résultat chiffré, aucun avis.
*/
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));

const statut = (client: boolean) => (client ? "projet client" : "démonstration");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.headline} : ${p.name}`,
    description: `${p.solution} ${p.client ? "Projet client réalisé" : "Démonstration réalisée"} par RD-Solutions, à ouvrir et à tester.`,
    path: projectHref(p.slug),
  });
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();

  const crumbs = [
    { label: "Accueil", href: "/" },
    { label: "Réalisations", href: "/realisations" },
    { label: p.name, href: projectHref(p.slug) },
  ];
  const pages = projectLandings(p.slug);
  // Trois autres réalisations : les suivantes dans la liste, en reprenant au début une fois la fin atteinte.
  const index = projects.indexOf(p);
  const autres = [1, 2, 3].map((n) => projects[(index + n) % projects.length]);

  return (
    <PageShell crumbs={crumbs}>
      <section aria-labelledby="titre" className="mx-auto max-w-[1296px] px-5 pt-6 text-center md:px-12 md:pt-10">
        <Breadcrumb crumbs={crumbs} />
        <p className="mt-8 text-muted md:mt-14">
          {p.name} · {p.category.toLowerCase()} · {statut(p.client)}
        </p>
        <h1 id="titre" className="titre mx-auto mt-3 max-w-[20ch] text-[clamp(2.2rem,5.2vw,4.2rem)]">
          {p.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-[54ch] text-pretty text-[clamp(1.1rem,1.6vw,1.3rem)] text-muted">{p.solution}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="bouton">
            Voir le site
            <span className="sr-only"> {p.name} (nouvel onglet)</span>
            <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </a>
          <a href={quoteHref} className="lien">
            Demander un devis gratuit
            <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>

        {/* Même fenêtre de navigateur que sur l'accueil : on voit tout de suite que c'est un autre site, montré en exemple. */}
        <figure className="mx-auto mt-12 max-w-[1040px] md:mt-16">
          <div className="overflow-hidden rounded-tuile shadow-apercu">
            <span className="flex h-9 items-center gap-1.5 bg-brume px-4 md:h-10">
              <span className="h-2.5 w-2.5 rounded-full bg-ardoise/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ardoise/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-ardoise/40" />
              <span className="mx-auto -translate-x-5 truncate rounded-full bg-blanc px-5 py-0.5 text-xs text-muted md:px-10">{p.host}</span>
            </span>
            <Image
              src={p.image}
              alt={`Page d'accueil du site ${p.name}`}
              width={1280}
              height={800}
              priority
              sizes="(min-width: 1088px) 1040px, 100vw"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>
          <figcaption className="py-4 text-sm text-muted">
            {p.name}, {statut(p.client)} ·{" "}
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-marine hover:underline">
              {p.host}
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="projet-titre" className="mx-auto max-w-[1296px] px-5 pt-16 md:px-12 md:pt-24">
        <h2 id="projet-titre" className="sr-only">
          Le projet
        </h2>
        <dl className="border-b border-filet">
          {[
            { terme: "Le besoin", texte: p.problem },
            { terme: "La réponse", texte: p.solution },
          ].map((l) => (
            <div key={l.terme} className="grid gap-x-12 gap-y-2 border-t border-filet py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-baseline">
              <dt className="titre text-[clamp(1.3rem,2.2vw,1.75rem)]">{l.terme}</dt>
              <dd className="max-w-[56ch] text-pretty text-lg text-muted">{l.texte}</dd>
            </div>
          ))}
          <div className="grid gap-x-12 gap-y-2 border-t border-filet py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-baseline">
            <dt className="titre text-[clamp(1.3rem,2.2vw,1.75rem)]">Ce que le site contient</dt>
            <dd>
              <ul className="space-y-2 text-lg">
                {p.tags.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check size={20} strokeWidth={2.4} className="mt-1 shrink-0 text-marine" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
        {!p.client && (
          <p className="mt-6 max-w-[70ch] text-pretty text-muted">
            {p.name} est une démonstration : un site complet et utilisable, construit autour d&apos;un client fictif pour montrer ce
            qui peut être fait pour une activité de ce type.
          </p>
        )}
      </section>

      {pages.length > 0 && (
        <nav aria-labelledby="proche-titre" className="mx-auto max-w-[1296px] px-5 pt-16 md:px-12 md:pt-24">
          <h2 id="proche-titre" className="titre text-2xl">
            Un projet du même genre ?
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 border-t border-filet pt-3">
            {pages.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}`} className="lien">
                  {l.title}
                  <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <section aria-labelledby="autres-titre" className="pb-20 md:pb-32">
        <div className="mx-auto max-w-[1296px] px-5 pb-8 pt-20 text-center md:px-12 md:pb-12 md:pt-32">
          <h2 id="autres-titre" className="titre text-[clamp(1.8rem,3.8vw,3rem)]">
            D&apos;autres réalisations
          </h2>
        </div>
        <ProjectGrid items={autres} />
        <p className="mt-6 text-center">
          <Link href="/realisations" className="lien">
            Toutes les réalisations
            <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
