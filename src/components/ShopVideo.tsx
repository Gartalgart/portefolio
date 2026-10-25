"use client";
import { type MotionValue, motion, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SRC = "/videos/boutique.mp4";
// La boutique reste éteinte un instant avant que la vidéo démarre, et pleine à la fin.
const HOLD_START = 0.06;
const HOLD_END = 0.94;
// Le brouillard est dissipé à cette part du défilement.
const FOG_END = 0.55;

/*
  Boutique filmée en plan fixe : `progress` (0 → 1) fait avancer la vidéo image par image
  (rue sombre → vitrine allumée → boutique bondée). La vidéo est chargée en entier (blob)
  à l'approche, sinon chaque saut de lecture attend le réseau.
  Un brouillard la recouvre au départ : la souris y perce une lampe torche, le scroll le dissipe.
  En mouvement réduit : image finale fixe, sans brouillard.
*/
export default function ShopVideo({ progress, className = "" }: { progress: MotionValue<number>; className?: string }) {
  const reduce = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const torch = useRef({ x: 0, y: 0, on: false });
  const [src, setSrc] = useState<string>();
  const fogOpacity = useTransform(progress, [0, FOG_END], [1, 0]);

  // Lampe torche : le halo suit la souris avec un léger retard et s'ouvre ou se referme en douceur.
  // La boucle ne tourne que pendant que le halo bouge : relancée au mouvement, arrêtée une fois refermé.
  const wake = useRef<() => void>(() => {});
  useEffect(() => {
    const el = frame.current;
    if (reduce || !el) return;
    let raf = 0;
    const p = { x: 0, y: 0, r: 0 };
    const tick = () => {
      raf = 0;
      const t = torch.current;
      const goal = t.on ? Math.max(120, el.offsetWidth * 0.24) : 0;
      // Halo fermé : il se rouvre directement sous la souris au lieu de glisser depuis l'ancienne position.
      const k = p.r < 2 ? 1 : 0.2;
      p.x += (t.x - p.x) * k;
      p.y += (t.y - p.y) * k;
      p.r += (goal - p.r) * 0.12;
      if (!t.on && p.r < 0.5) p.r = 0;
      el.style.setProperty("--x", `${p.x}px`);
      el.style.setProperty("--y", `${p.y}px`);
      el.style.setProperty("--r", `${p.r}px`);
      if (t.on || p.r > 0) raf = requestAnimationFrame(tick);
    };
    wake.current = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    return () => {
      cancelAnimationFrame(raf);
      wake.current = () => {};
    };
  }, [reduce]);

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const box = e.currentTarget.getBoundingClientRect();
    torch.current = { x: e.clientX - box.left, y: e.clientY - box.top, on: true };
    wake.current();
  };

  // Téléchargement une seule fois, quand le visiteur a commencé à descendre dans l'intro (le hero
  // est à moins d'un demi-écran) : rien n'est demandé tant que le nom 3D se charge.
  useEffect(() => {
    if (reduce || !frame.current) return;
    let url: string | undefined;
    let cancelled = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        fetch(SRC)
          .then((r) => r.blob())
          .then((b) => {
            if (cancelled) return;
            url = URL.createObjectURL(b);
            setSrc(url);
          })
          .catch(() => !cancelled && setSrc(SRC));
      },
      { rootMargin: "50% 0px" },
    );
    io.observe(frame.current);
    return () => {
      cancelled = true;
      io.disconnect();
      if (url) URL.revokeObjectURL(url);
    };
  }, [reduce]);

  // Lissage : la vidéo rattrape la position du scroll au lieu de sauter d'une image à l'autre.
  // La boucle est suspendue dès que le cadre sort de l'écran.
  useEffect(() => {
    const v = video.current;
    const el = frame.current;
    if (!src || !v || !el) return;
    // iOS n'autorise le déplacement dans la vidéo qu'après un premier play().
    v.play().then(() => v.pause()).catch(() => {});
    let raf = 0;
    let current = 0;
    let visible = false;
    const tick = () => {
      raf = 0;
      if (!visible) return;
      if (v.duration) {
        const p = Math.min(1, Math.max(0, (progress.get() - HOLD_START) / (HOLD_END - HOLD_START)));
        current += (p * (v.duration - 0.05) - current) * 0.18;
        if (!v.seeking && Math.abs(v.currentTime - current) > 1 / 24) v.currentTime = current;
      }
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [src, progress]);

  return (
    <div
      ref={frame}
      onPointerMove={move}
      onPointerLeave={() => {
        torch.current.on = false;
        wake.current();
      }}
      className={`relative overflow-hidden rounded-2xl border border-line bg-night shadow-[var(--shadow)] ${className}`}
    >
      {reduce ? (
        <img src="/images/boutique-fin.webp" alt="" className="absolute inset-0 size-full object-cover" />
      ) : (
        <video
          ref={video}
          src={src}
          poster="/images/boutique-debut.webp"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 size-full object-cover"
        />
      )}
      {!reduce && (
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ opacity: fogOpacity }}>
          <div className="torch absolute inset-0" />
          <div className="fog absolute inset-0 overflow-hidden" />
        </motion.div>
      )}
    </div>
  );
}
