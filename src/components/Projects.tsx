import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function Preview({ name, host, image }: { name: string; host: string; image: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-2 truncate font-mono text-[11px] text-muted">{host}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={`Aperçu du site ${name}`}
        loading="lazy"
        width={1200}
        height={750}
        className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projets" aria-labelledby="projets-titre" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          id="projets-titre"
          title="Des sites en ligne, pensés pour leur activité"
          intro="Le besoin de départ, et ce que j'ai mis en place. Chaque projet indique s'il s'agit d'un client ou d'une démonstration."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition hover:border-fg/25">
                <Preview name={p.name} host={p.host} image={p.image} />
                <div className="flex flex-1 flex-col pt-6">
                  <p className="flex items-center gap-2 text-sm text-muted">
                    {p.category}
                    <span aria-hidden="true">·</span>
                    <span className={p.client ? "font-medium text-fg" : ""}>{p.client ? "Projet client" : "Projet de démonstration"}</span>
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-[-0.02em]">{p.name}</h3>
                  <dl className="mt-4 space-y-2.5 text-[15px] leading-relaxed">
                    <div>
                      <dt className="inline font-medium">Besoin : </dt>
                      <dd className="inline text-muted">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium">Réponse : </dt>
                      <dd className="inline text-muted">{p.solution}</dd>
                    </div>
                  </dl>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Voir le site<span className="sr-only"> {p.name} (nouvel onglet)</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
