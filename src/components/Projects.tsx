"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/content";
import Vitrine from "./Vitrine";

/*
  Les vitrines. Sur grand écran, la page se fige et le scroll vertical fait défiler
  les vitrines horizontalement. Sur mobile et en mouvement réduit : simple pile verticale.
*/
function Heading() {
  return (
    <div className="max-w-md shrink-0">
      <h2 id="projets-titre" className="text-balance font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.035em] md:text-6xl">
        Quatre vitrines. Testez-les en direct.
      </h2>
      <p className="mt-6 max-w-[42ch] text-lg text-muted">
        Le besoin de départ, ce que j&apos;ai mis en place, et le vrai site à essayer. Chaque projet indique s&apos;il s&apos;agit d&apos;un
        client ou d&apos;une démonstration.
      </p>
    </div>
  );
}

function Pinned() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => trackRef.current && setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  // Le clavier amène le focus sur une vitrine hors champ : on fait défiler la page jusqu'à elle.
  const onFocusCard = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (i / (projects.length - 1)) * scrollable, behavior: "auto" });
  };

  return (
    <section id="projets" aria-labelledby="projets-titre" ref={sectionRef} style={{ height: `${projects.length * 85}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen items-center overflow-x-clip">
        <motion.div ref={trackRef} style={{ x }} className="flex items-center gap-8 pl-[max(2rem,calc((100vw-1320px)/2+1.5rem))] pr-[12vw]">
          <Heading />
          {projects.map((p, i) => (
            <div key={p.name} onFocusCapture={() => onFocusCard(i)} className="w-[min(46vw,640px)] shrink-0">
              <Vitrine p={p} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Projects() {
  const reduce = useReducedMotion();
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const measure = () => setWide(window.innerWidth >= 1024);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (wide && !reduce) return <Pinned />;

  return (
    <section id="projets" aria-labelledby="projets-titre" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14">
          <Heading />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <Vitrine key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
