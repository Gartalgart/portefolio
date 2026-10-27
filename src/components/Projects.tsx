import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { bookingHref, projects, site } from "@/lib/content";

/*
  Réalisations : un panneau de chantier par site. Le statut se lit par la forme du cachet
  (plein = projet client, pointillé = démonstration), jamais par la couleur seule.
*/
function Cachet({ client }: { client: boolean }) {
  return client ? (
    <span className="lettrage-etroit inline-block bg-vinyle px-2.5 py-1.5 text-sm text-white">Projet client</span>
  ) : (
    <span className="lettrage-etroit inline-block border-2 border-dashed border-white px-2.5 py-1 text-sm text-white">Démonstration</span>
  );
}

export default function Projects() {
  return (
    <section id="projets" aria-labelledby="projets-titre" className="border-t-[3px] border-anthracite px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <h2 id="projets-titre" className="lettrage text-balance text-[clamp(2.4rem,6vw,5rem)]">
            Chantiers livrés
          </h2>
          <p className="max-w-[52ch] text-pretty text-lg leading-relaxed text-muted">
            Quatre sites en ligne, à ouvrir et à tester. Chaque panneau dit le besoin de départ, ce que j&apos;ai mis en place, et
            s&apos;il s&apos;agit d&apos;un vrai client ou d&apos;une démonstration.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 md:gap-10">
          {projects.map((p) => (
            <li key={p.name}>
              <article aria-labelledby={`chantier-${p.host}`} className="flex h-full flex-col border-[3px] border-anthracite bg-tole">
                <header className="flex items-center justify-between gap-4 bg-anthracite px-5 py-3 text-white">
                  <span className="lettrage-etroit text-lg tracking-[0.06em]">Chantier web</span>
                  <Cachet client={p.client} />
                </header>

                <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block border-b-[3px] border-anthracite" tabIndex={-1} aria-hidden="true">
                  <Image
                    src={p.image}
                    alt=""
                    width={1280}
                    height={800}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="aspect-[16/10] w-full object-cover object-top transition-[filter] duration-300 group-hover:brightness-95"
                  />
                </a>

                <dl className="grid flex-1 grid-cols-[auto_minmax(0,1fr)] content-start gap-x-5 gap-y-3 px-5 py-6 md:px-6">
                  <dt className="lettrage-etroit pt-0.5 text-sm text-muted">Pour</dt>
                  <dd>
                    <h3 id={`chantier-${p.host}`} className="text-xl font-extrabold">
                      {p.name}
                    </h3>
                    <span className="text-muted">{p.category}</span>
                  </dd>
                  <dt className="lettrage-etroit pt-0.5 text-sm text-muted">Besoin</dt>
                  <dd className="leading-relaxed">{p.problem}</dd>
                  <dt className="lettrage-etroit pt-0.5 text-sm text-muted">Travaux</dt>
                  <dd className="leading-relaxed">{p.solution}</dd>
                  <dt className="lettrage-etroit pt-0.5 text-sm text-muted">Par</dt>
                  <dd>{site.brand}</dd>
                </dl>

                <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-line-soft px-5 py-4 md:px-6">
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold text-muted" aria-label="Ce que contient le site">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 font-bold text-anthracite underline decoration-vinyle hover:text-vinyle"
                  >
                    Voir {p.host}
                    <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </footer>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-12 flex flex-wrap items-center justify-between gap-6 border-[3px] border-dashed border-anthracite px-6 py-6 md:px-8">
          <span className="lettrage text-[clamp(1.4rem,3vw,2.2rem)]">Le prochain panneau peut porter votre nom.</span>
          <a href={bookingHref} className="bg-vinyle px-6 py-3.5 font-bold text-white transition-colors hover:bg-vinyle-fonce">
            Réserver un appel
          </a>
        </p>
      </div>
    </section>
  );
}
