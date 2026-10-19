"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { audiences, facts } from "@/lib/content";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (d: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="px-5 pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="ping absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible pour de nouvelles missions
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 max-w-[16ch] text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl"
          >
            Un site web qui vous amène de vrais clients.
          </motion.h1>

          <motion.p {...fade(0.16)} className="mt-6 max-w-[56ch] text-pretty text-lg leading-relaxed text-muted">
            Je suis Rémy, développeur full-stack freelance. Je crée des sites et applications rapides, clairs et faciles à gérer,
            avec un seul interlocuteur du devis à la maintenance.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition hover:brightness-110"
            >
              Discuter de votre projet
              <ArrowRight size={16} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#projets"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 font-medium transition hover:bg-surface"
            >
              Voir mes réalisations
            </a>
          </motion.div>

          <motion.p {...fade(0.32)} className="mt-10 max-w-[56ch] text-sm text-muted">
            Pour les {audiences.slice(0, -1).join(", ")} et les {audiences[audiences.length - 1]}.
          </motion.p>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <Image
            src="/images/profile.jpg"
            alt="Portrait de Rémy Denimal, développeur freelance"
            width={900}
            height={1117}
            priority
            sizes="(min-width: 768px) 380px, 90vw"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow)]"
          />
        </div>
      </div>

      <motion.dl
        {...fade(0.4)}
        className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
      >
        {facts.map((f) => (
          <div key={f.label} className="bg-surface px-6 py-5">
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="mt-1 font-medium">{f.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
