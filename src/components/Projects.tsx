"use client";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, Undo2 } from "lucide-react";
import { useRef, useState } from "react";
import { bookingHref, projects } from "@/lib/content";
import BrowserWindow from "./BrowserWindow";

type Project = (typeof projects)[number];

const card = "flex w-[min(86vw,620px)] shrink-0 snap-start flex-col rounded-2xl p-5 text-white md:p-7";

function Vitrine({ p }: { p: Project }) {
  const [live, setLive] = useState(false);

  return (
    <article className={card} style={{ background: p.color }} aria-labelledby={`projet-${p.host}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 id={`projet-${p.host}`} className="display text-[clamp(2.25rem,4vw,3.25rem)]">
          {p.name}
        </h3>
        <span className={p.client ? "tag mt-1 shrink-0" : "mt-1 shrink-0 rounded-[3px] border border-white/60 px-2 py-0.5 text-xs font-bold"}>
          {p.client ? "Projet client" : "Démonstration"}
        </span>
      </div>

      <div className="mt-5">
        <BrowserWindow host={p.host} className="night">
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
              className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0c1a3a] shadow-lg transition hover:bg-tag"
            >
              {live ? <Undo2 size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
              {live ? "Revenir à l'image" : "Tester en direct"}
              <span className="sr-only"> le site {p.name}</span>
            </button>
          )}
        </BrowserWindow>
      </div>

      <dl className="mt-6 grid gap-4 leading-snug sm:grid-cols-2">
        <div>
          <dt className="text-sm font-bold">Le besoin</dt>
          <dd className="mt-1">{p.problem}</dd>
        </div>
        <div>
          <dt className="text-sm font-bold">Ce que j&apos;ai mis en place</dt>
          <dd className="mt-1">{p.solution}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
        <p className="text-sm font-semibold">
          {p.category} · {p.tags.join(" · ")}
        </p>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/70 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-[#0c1a3a]"
        >
          {p.host}
          <span className="sr-only"> (nouvel onglet)</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const rail = useRef<HTMLUListElement>(null);
  const move = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const first = el.querySelector("li");
    el.scrollBy({ left: dir * ((first?.clientWidth ?? 600) + 20), behavior: "smooth" });
  };

  return (
    <section id="projets" aria-labelledby="projets-titre" className="py-24 md:py-32">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-end justify-between gap-6 px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 id="projets-titre" className="display text-balance text-[clamp(2.5rem,5vw,4.5rem)]">
            Quatre vitrines que j&apos;ai montées.
          </h2>
          <p className="mt-5 max-w-[56ch] text-pretty text-lg text-muted">
            Le besoin de départ, ce que j&apos;ai mis en place, et le vrai site à essayer. Chaque vitrine indique s&apos;il s&apos;agit
            d&apos;un client ou d&apos;une démonstration.
          </p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => move(-1)} aria-label="Vitrine précédente" className="grid h-12 w-12 place-items-center rounded-full border border-line-strong transition hover:bg-fg hover:text-bg">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Vitrine suivante" className="grid h-12 w-12 place-items-center rounded-full border border-line-strong transition hover:bg-fg hover:text-bg">
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <ul
        ref={rail}
        className="rail mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw_-_1320px)/2_+_2rem))] pb-4 [scroll-padding-inline:max(1.25rem,calc((100vw_-_1320px)/2_+_2rem))]"
      >
        {projects.map((p) => (
          <li key={p.name} className="flex">
            <Vitrine p={p} />
          </li>
        ))}
        <li className="flex">
          <article className={`${card} night items-center justify-center gap-8 text-center`} aria-labelledby="projet-suivant">
            <div className="paper -rotate-2 px-8 py-7 text-fg [--surface:#fbf8f1] [--fg:#0c1a3a] [--muted:#4a5672]">
              <p id="projet-suivant" className="display text-4xl">Emplacement disponible</p>
              <p className="mt-2 text-sm font-semibold text-primary">La prochaine vitrine, c&apos;est la vôtre.</p>
            </div>
            <a
              href={bookingHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-fg transition hover:brightness-110"
            >
              Réserver un appel <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>
        </li>
      </ul>
    </section>
  );
}
