"use client";
import { ArrowUpRight, Play, Undo2 } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/content";
import BrowserWindow from "./BrowserWindow";
import SectionHead from "./SectionHead";

type Project = (typeof projects)[number];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [live, setLive] = useState(false);

  return (
    // Les cartes s'empilent au scroll sur grand écran (sticky, sans JS).
    <article
      className="rounded-3xl border border-line bg-surface p-5 shadow-[var(--shadow)] md:p-8 lg:sticky lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12"
      style={{ top: `calc(6rem + ${index * 1.25}rem)` }}
    >
      <div className="flex flex-col justify-between pb-2 pt-1 lg:order-1">
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            {p.category}
            <span
              className={`rounded-full border px-2.5 py-0.5 text-xs ${p.client ? "border-primary/60 text-link" : "border-line-strong"}`}
            >
              {p.client ? "Projet client" : "Projet de démonstration"}
            </span>
          </p>
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.035em] md:text-5xl">{p.name}</h3>
          <dl className="mt-6 space-y-4 leading-relaxed">
            <div>
              <dt className="text-sm font-medium">Le besoin</dt>
              <dd className="mt-1 text-muted">{p.problem}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium">Ce que j&apos;ai mis en place</dt>
              <dd className="mt-1 text-muted">{p.solution}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-8">
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {p.tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 font-medium text-link underline-offset-4 hover:underline"
          >
            Ouvrir le site<span className="sr-only"> {p.name} (nouvel onglet)</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-8 lg:order-2 lg:mt-0">
        <BrowserWindow host={p.host}>
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
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-fg shadow-lg transition hover:brightness-110"
            >
              {live ? <Undo2 size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
              {live ? "Revenir à l'image" : "Tester en direct"}
              <span className="sr-only"> le site {p.name}</span>
            </button>
          )}
        </BrowserWindow>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projets" aria-labelledby="projets-titre" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <SectionHead
          id="projets-titre"
          title="Des sites en ligne, à tester vous-même."
          intro="Le besoin de départ, ce que j'ai mis en place, et le vrai site à essayer. Chaque projet indique s'il s'agit d'un client ou d'une démonstration."
        />
        <div className="space-y-6 pb-8 lg:space-y-[18vh]">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
