"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import BrowserWindow from "./BrowserWindow";

/*
  Le « site d'avant » est volontairement daté : polices système, bandeau criard, compteur de visites.
  C'est une illustration fictive ; ses couleurs ne font pas partie des tokens.
*/
function OldSite() {
  return (
    <div
      className="absolute inset-0 overflow-hidden [container-type:inline-size]"
      style={{ background: "repeating-linear-gradient(45deg,#fffbd1 0 14px,#f4efb0 14px 28px)", fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div
        className="px-[2cqw] py-[1.5cqw] text-center text-[3.4cqw] font-bold italic text-[#ffff66]"
        style={{ background: "linear-gradient(90deg,#c000c0,#0040ff,#00b050,#ffa000)", fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive' }}
      >
        ★ Bienvenue sur notre site internet ★
      </div>
      <p className="bg-[#d8d8d8] py-[0.8cqw] text-center text-[1.7cqw] text-[#0000ee] underline">
        Accueil | Qui sommes-nous | Nos tarifs | Livre d&apos;or | Contact
      </p>
      <div className="grid grid-cols-[1.2fr_1fr] gap-[3cqw] p-[3cqw] text-[#222]">
        <div>
          <span className="inline-block -rotate-3 border-2 border-black bg-[#ffd400] px-[1.5cqw] text-[2cqw] font-bold">
            En construction
          </span>
          <p className="mt-[2cqw] text-[1.9cqw] leading-snug">
            Bienvenue ! Le salon vous accueille du mardi au samedi. Pour les horaires et les tarifs, merci de téléphoner.
          </p>
          <p className="mt-[1.5cqw] text-[1.9cqw] text-[#0000ee] underline">» Télécharger nos tarifs (PDF 12 Mo)</p>
          <p className="mt-[1.5cqw] text-[1.6cqw] italic text-[#666]">Site optimisé pour un écran 800 × 600.</p>
        </div>
        <div className="flex flex-col gap-[1.5cqw]">
          <div className="grid aspect-[4/3] place-items-center border border-[#999] bg-[#e5e5e5] text-[1.8cqw] italic text-[#888]">
            photo à venir
          </div>
          <p className="text-[1.6cqw]">
            Vous êtes le visiteur n°{" "}
            <span className="bg-black px-[0.8cqw] font-mono text-[#39ff14]">000347</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function NewSite() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/projects/maison-lea.webp"
      alt="Le site moderne de Maison Léa Coiffure"
      width={1200}
      height={750}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover object-top"
    />
  );
}

export default function BeforeAfter() {
  const reduce = useReducedMotion();
  const track = useRef<HTMLDivElement>(null);
  const [manual, setManual] = useState(50);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  // Le nouveau site se dévoile de droite à gauche pendant le défilement.
  const reveal = useTransform(scrollYProgress, [0.12, 0.85], [100, 0]);
  const clip = useTransform(reveal, (v) => `inset(0 0 0 ${v}%)`);
  const handle = useTransform(reveal, (v) => `${v}%`);

  return (
    <section aria-labelledby="avant-apres-titre">
      <div ref={track} className="h-[260svh] motion-reduce:h-auto">
        <div className="sticky top-0 flex h-svh items-center motion-reduce:static motion-reduce:h-auto motion-reduce:py-24">
          <div className="mx-auto grid w-full max-w-[1320px] items-center gap-8 px-5 md:px-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
            <div>
              <h2 id="avant-apres-titre" className="display text-balance text-[clamp(2.5rem,5vw,4.5rem)]">
                Entre ces deux sites, vos clients ont déjà choisi.
              </h2>
              <p className="mt-5 max-w-[42ch] text-pretty text-lg text-muted">
                D&apos;abord, le genre de site qu&apos;on croise encore partout. {reduce ? "Glissez le curseur" : "Faites défiler"} : un
                site pensé pour vendre le remplace.
              </p>
            </div>

            <figure className="relative">
              <span className="tag absolute -top-3 left-5 z-10 -rotate-2 shadow-[var(--shadow)]">{reduce ? "Avant / après" : "Défilez : avant → après"}</span>
              <BrowserWindow host="maison-lea-coiffure.vercel.app">
                <OldSite />
                <motion.div className="absolute inset-0" style={{ clipPath: reduce ? `inset(0 0 0 ${manual}%)` : clip }}>
                  <NewSite />
                </motion.div>
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-primary"
                  style={{ left: reduce ? `${manual}%` : handle }}
                />
              </BrowserWindow>
              {reduce && (
                <label className="mt-4 flex items-center gap-4 text-sm font-medium">
                  Avant
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={100 - manual}
                    onChange={(e) => setManual(100 - Number(e.target.value))}
                    className="flex-1"
                    aria-label="Comparer l'ancien et le nouveau site"
                  />
                  Après
                </label>
              )}
              <figcaption className="mt-4 text-sm text-muted">
                Avant : exemple fictif d&apos;un site daté. Après : Maison Léa Coiffure, projet de démonstration.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
