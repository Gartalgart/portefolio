"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookingHref, nav, site } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // La barre prend les couleurs de la nuit tant qu'elle passe au-dessus d'une section sombre.
  const [onNight, setOnNight] = useState(true);

  useEffect(() => {
    // Une bande de 1 px juste sous la barre (y = 72) : dès qu'une zone de nuit la traverse, la barre
    // prend ses couleurs. Observé par le navigateur, sans sonder le DOM à chaque défilement.
    let io: IntersectionObserver | undefined;
    const under = new Set<Element>();
    const observe = () => {
      io?.disconnect();
      under.clear();
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) e.isIntersecting ? under.add(e.target) : under.delete(e.target);
          setOnNight(under.size > 0);
        },
        { rootMargin: `-72px 0px -${Math.max(0, window.innerHeight - 73)}px 0px` },
      );
      document.querySelectorAll(".night:not(#barre)").forEach((el) => io?.observe(el));
    };
    observe();
    window.addEventListener("resize", observe);
    return () => {
      io?.disconnect();
      window.removeEventListener("resize", observe);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header id="barre" className={`fixed inset-x-0 top-0 z-50 ${onNight ? "night !bg-transparent" : ""}`}>
      <nav
        aria-label="Navigation principale"
        className="flex items-center justify-between border-b border-line bg-[var(--glass)] px-5 py-3 backdrop-blur-xl transition-colors duration-300 md:px-8"
      >
        <a href="#" className="display text-2xl text-fg">
          {site.brand}<span className="text-link">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-1.5 text-sm font-semibold text-muted transition hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={bookingHref}
            className="hidden rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-fg transition hover:brightness-110 sm:block"
          >
            Réserver un appel
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-b border-line bg-bg px-5 pb-5 pt-2 lg:hidden">
          <ul>
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="display block py-3 text-3xl text-fg">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={bookingHref} className="mt-3 block rounded-full bg-primary px-4 py-3 text-center font-semibold text-primary-fg">
                Réserver un appel
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted">{site.location}</p>
        </div>
      )}
    </header>
  );
}
