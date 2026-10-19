import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { audiences, facts } from "@/lib/content";

/*
  La devanture : enseigne néon en haut, vitrine dessous.
  Le rideau métallique se lève en CSS pur au chargement (aucun JS requis).
*/
export default function Hero() {
  return (
    <section className="px-4 pb-10 pt-24 md:px-6 md:pt-24">
      <div className="mx-auto max-w-[1320px]">
        {/* Enseigne */}
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 px-2 pb-5 md:px-6">
          <p
            className="font-display text-[clamp(2.75rem,8.5vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.03em] neon"
            aria-label="Rémy Denimal, développeur web freelance"
          >
            Rémy <span className="flicker inline-block">D</span>enimal
          </p>
          <div className="flex items-center gap-3 pb-2">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="ping absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <span className="rounded-md border-2 border-[var(--tube)] px-3 py-1 font-display text-lg font-bold uppercase tracking-[0.18em] neon-fill">
              Ouvert
            </span>
            <span className="hidden text-sm text-muted sm:block">Disponible pour de nouvelles missions</span>
          </div>
        </div>

        {/* Vitrine */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow)]">
          <div className="awning" aria-hidden="true" />
          <div className="grid items-center gap-10 px-6 pb-10 pt-8 md:grid-cols-[1.4fr_1fr] md:gap-14 md:px-14 md:pb-10 md:pt-8">
            <div>
              <h1 className="max-w-[14ch] text-balance font-display text-[clamp(2.5rem,6.2vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
                Un site web qui vous amène de vrais clients.
              </h1>
              <p className="mt-7 max-w-[54ch] text-pretty text-lg leading-relaxed text-muted md:text-xl">
                Développeur full-stack freelance, je crée des sites et applications rapides, clairs et faciles à gérer, avec un seul
                interlocuteur du devis à la maintenance.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-fg transition hover:brightness-110"
                >
                  Discuter de votre projet
                  <ArrowRight size={18} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
                <a
                  href="#projets"
                  className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-base font-semibold transition hover:bg-surface-2"
                >
                  Entrer dans les vitrines
                </a>
              </div>
              <p className="mt-8 max-w-[56ch] text-sm text-muted">
                Pour les {audiences.slice(0, -1).join(", ")} et les {audiences[audiences.length - 1]}.
              </p>
            </div>

            <Image
              src="/images/profile.jpg"
              alt="Portrait de Rémy Denimal, développeur freelance"
              width={800}
              height={993}
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-xl object-cover md:max-h-[440px] md:max-w-none"
            />
          </div>

          <dl className="grid border-t border-line sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="border-line px-6 py-5 sm:border-r sm:last:border-r-0 md:px-14">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>

          {/* Rideau métallique */}
          <div className="shutter pointer-events-none absolute inset-0 z-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
