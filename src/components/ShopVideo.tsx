"use client";
import { type MotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SRC = "/videos/boutique.mp4";
// La boutique reste éteinte un instant avant que la vidéo démarre, et pleine à la fin.
const HOLD_START = 0.06;
const HOLD_END = 0.94;

/*
  Boutique filmée en plan fixe : `progress` (0 → 1) fait avancer la vidéo image par image
  (rue sombre → vitrine allumée → boutique bondée). La vidéo est chargée en entier (blob)
  à l'approche, sinon chaque saut de lecture attend le réseau.
  En mouvement réduit : image finale fixe.
*/
export default function ShopVideo({ progress, className = "" }: { progress: MotionValue<number>; className?: string }) {
  const reduce = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>();

  // Téléchargement anticipé, une seule fois, quand la vidéo approche de l'écran.
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
      { rootMargin: "150% 0px" },
    );
    io.observe(frame.current);
    return () => {
      cancelled = true;
      io.disconnect();
      if (url) URL.revokeObjectURL(url);
    };
  }, [reduce]);

  // Lissage : la vidéo rattrape la position du scroll au lieu de sauter d'une image à l'autre.
  useEffect(() => {
    const v = video.current;
    if (!src || !v) return;
    // iOS n'autorise le déplacement dans la vidéo qu'après un premier play().
    v.play().then(() => v.pause()).catch(() => {});
    let raf = 0;
    let current = 0;
    const tick = () => {
      if (v.duration) {
        const p = Math.min(1, Math.max(0, (progress.get() - HOLD_START) / (HOLD_END - HOLD_START)));
        current += (p * (v.duration - 0.05) - current) * 0.18;
        if (!v.seeking && Math.abs(v.currentTime - current) > 1 / 24) v.currentTime = current;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [src, progress]);

  return (
    <div ref={frame} className={`relative overflow-hidden rounded-2xl border border-line bg-night shadow-[var(--shadow)] ${className}`}>
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
    </div>
  );
}
