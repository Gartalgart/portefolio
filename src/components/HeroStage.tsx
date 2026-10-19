"use client";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { projects } from "@/lib/content";
import BrowserWindow from "./BrowserWindow";

// Trois vrais sites en perspective, qui suivent la souris. Cliquer mène à la section Réalisations.
const layout = [
  { i: 0, left: "0%", top: "16%", z: 0 },
  { i: 1, left: "17%", top: "0%", z: 90 },
  { i: 2, left: "34%", top: "30%", z: 180 },
];

export default function HeroStage() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-30, -8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [16, 2]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative h-[360px] sm:h-[480px] lg:h-[620px]"
      style={{ perspective: 1800 }}
    >
      <motion.div className="absolute inset-0" style={{ transformStyle: "preserve-3d", rotateY: reduce ? -18 : rotateY, rotateX: reduce ? 8 : rotateX }}>
        {layout.map(({ i, left, top, z }, n) => {
          const p = projects[i];
          return (
            <motion.a
              key={p.name}
              href="#projets"
              aria-label={`Voir le projet ${p.name}`}
              className="absolute block w-[64%] shadow-[var(--shadow)]"
              style={{ left, top, z }}
              initial={reduce ? false : { opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + n * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { z: z + 50 }}
            >
              <BrowserWindow host={p.host}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" width={1200} height={750} loading="eager" className="absolute inset-0 h-full w-full object-cover object-top" />
              </BrowserWindow>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
