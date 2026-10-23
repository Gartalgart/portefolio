"use client";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { heroSteps, site } from "@/lib/content";
import HeroScene from "./HeroScene";

/*
  Hero raconté au scroll : le visiteur fait défiler, le site fictif s'allume
  (Invisible → Trouvé → Choisi → Contacté). En mouvement réduit, l'état final est affiché d'emblée.
*/
export default function Hero() {
  const reduce = useReducedMotion();
  const track = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(0);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => setScrolled(Math.min(heroSteps.length - 1, Math.floor(v * heroSteps.length))));

  const step = reduce ? heroSteps.length - 1 : scrolled;
  const last = step === heroSteps.length - 1;

  return (
    <section aria-labelledby="hero-titre" className="night relative">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 lg:grid lg:h-[340svh] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12 motion-reduce:lg:h-auto">
        <div className="pb-6 pt-32 lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:pb-0 lg:pt-16">
          <p className="inline-flex items-center gap-3 self-start rounded-full border border-line py-1.5 pl-1.5 pr-4 text-sm text-muted">
            <Image src="/images/profile.jpg" alt="" width={72} height={72} className="h-7 w-7 rounded-full object-cover object-top" />
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponible pour de nouvelles missions
            </span>
          </p>

          <h2 id="hero-titre" className="display mt-7 text-[clamp(3rem,5.6vw,5.25rem)]">
            Votre activité existe.
            <span className="outline-text block text-fg">
              Sur internet, elle est éteinte.
            </span>
          </h2>

          <p className="mt-7 max-w-[46ch] text-pretty text-lg leading-relaxed text-muted">
            Je crée votre site, je le rends visible sur Google et je m&apos;en occupe ensuite. Le but : que ceux qui vous cherchent vous
            trouvent, puis qu&apos;ils vous appellent.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-fg transition hover:brightness-110"
            >
              Discuter de votre projet
              <ArrowRight size={18} className="transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#projets"
              className="inline-flex items-center justify-center rounded-full border border-line-strong px-7 py-3.5 font-semibold transition hover:bg-surface-2"
            >
              Voir mes réalisations
            </a>
          </div>

          <p className="mt-7 text-sm text-muted">
            {site.name} · développeur web freelance · {site.location}
          </p>
        </div>

        <div ref={track} className="h-[240svh] lg:h-auto motion-reduce:h-auto">
          <div className="sticky top-0 flex h-svh flex-col justify-center gap-10 pt-16 motion-reduce:static motion-reduce:h-auto motion-reduce:pb-24 motion-reduce:pt-6">
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <HeroScene step={step} />
              </div>
              {!reduce && (
                <ol className="hidden flex-col gap-2 pt-10 sm:flex" aria-hidden="true">
                  {heroSteps.map((w, i) => (
                    <li
                      key={w}
                      className="w-1 rounded-full bg-fg transition-all duration-500"
                      style={{ height: i === step ? 28 : 6, opacity: i === step ? 1 : 0.3 }}
                    />
                  ))}
                </ol>
              )}
            </div>

            <p className="sr-only">{heroSteps.join(" ")}</p>
            <div className="relative h-[clamp(4.5rem,11vw,8.5rem)] overflow-hidden" aria-hidden="true">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={heroSteps[step]}
                  className={`display absolute inset-x-0 top-0 whitespace-nowrap text-[clamp(4rem,10vw,8rem)] ${last ? "text-link" : "outline-text"}`}
                  style={last ? undefined : { ["--stroke" as string]: "var(--muted)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  {heroSteps[step]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="-mt-6 text-xs text-muted">
              {step === 0 && !reduce ? "Faites défiler pour allumer le site. " : ""}Exemple illustré : Atelier Morel est une entreprise fictive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
