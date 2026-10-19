"use client";
import { ArrowUpRight, Play, Undo2 } from "lucide-react";
import { useState } from "react";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

/* Une vitrine : store de toile, fenêtre de navigateur, et le site en direct sur demande. */
export default function Vitrine({ p, className = "" }: { p: Project; className?: string }) {
  const [live, setLive] = useState(false);

  return (
    <article className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-surface ${className}`}>
      <div className="awning" aria-hidden="true" />
      <div className="p-5 md:p-6">
        <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="h-2 w-2 rounded-full bg-line" />
            <span className="ml-2 truncate font-mono text-[11px] text-muted">{p.host}</span>
          </div>
          <div className="relative aspect-[16/10] bg-surface-2">
            {live ? (
              <iframe
                src={p.url}
                title={`Site ${p.name} en direct`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                className="absolute inset-0 h-full w-full bg-white"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.image}
                alt={`Aperçu du site ${p.name}`}
                loading="lazy"
                width={1200}
                height={750}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            )}
            {p.live && (
              <button
                type="button"
                onClick={() => setLive((v) => !v)}
                className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg shadow-lg transition hover:brightness-110"
              >
                {live ? <Undo2 size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
                {live ? "Revenir à l'image" : "Tester en direct"}
                <span className="sr-only"> le site {p.name}</span>
              </button>
            )}
          </div>
        </div>

        <div className="pt-6">
          <p className="text-sm text-muted">
            {p.category} · <span className={p.client ? "font-medium text-fg" : ""}>{p.client ? "Projet client" : "Projet de démonstration"}</span>
          </p>
          <h3 className="mt-1 font-display text-3xl font-bold tracking-[-0.03em]">{p.name}</h3>
          <dl className="mt-4 space-y-2 text-[15px] leading-relaxed">
            <div>
              <dt className="inline font-medium">Besoin : </dt>
              <dd className="inline text-muted">{p.problem}</dd>
            </div>
            <div>
              <dt className="inline font-medium">Réponse : </dt>
              <dd className="inline text-muted">{p.solution}</dd>
            </div>
          </dl>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-2" aria-label="Technologies">
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
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Ouvrir le site<span className="sr-only"> {p.name} (nouvel onglet)</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
