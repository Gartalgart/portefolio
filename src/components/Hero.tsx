import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { audiences, facts, site } from "@/lib/content";
import HeroStage from "./HeroStage";

export default function Hero() {
  return (
    <section className="overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-6">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-3 rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-4 text-sm text-muted">
            <Image src="/images/profile.jpg" alt="" width={72} height={72} className="h-7 w-7 rounded-full object-cover object-top" />
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="ping absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponible pour de nouvelles missions
            </span>
          </p>

          <h1 className="mt-7 max-w-[13ch] text-balance text-[clamp(2.75rem,6.4vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Un site web qui vous amène de vrais clients.
          </h1>

          <p className="mt-7 max-w-[50ch] text-pretty text-lg leading-relaxed text-muted md:text-xl">
            {site.name}, développeur full-stack freelance. Je crée des sites et applications rapides, clairs et faciles à gérer, avec un
            seul interlocuteur du devis à la maintenance.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-fg transition hover:brightness-110"
            >
              Discuter de votre projet
              <ArrowRight size={18} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#projets"
              className="inline-flex items-center justify-center rounded-full border border-line-strong px-7 py-3.5 text-base font-medium transition hover:bg-surface-2"
            >
              Voir mes réalisations
            </a>
          </div>

          <p className="mt-8 max-w-[52ch] text-sm text-muted">
            Pour les {audiences.slice(0, -1).join(", ")} et les {audiences[audiences.length - 1]}.
          </p>
        </div>

        <HeroStage />
      </div>

      <dl className="mx-auto mt-16 grid max-w-[1320px] divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {facts.map((f) => (
          <div key={f.label} className="py-5 sm:px-8 sm:first:pl-0">
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="mt-1 font-medium">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
