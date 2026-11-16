"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { quoteHref, nav, site } from "@/lib/content";

/*
  Barre du haut : fine, blanche et translucide, elle laisse la page passer dessous. Sur mobile, le menu
  s'ouvre en dessous et une barre « Devis gratuit » reste collée en bas de l'écran (voir CallBar).
*/
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-filet bg-white/80 backdrop-blur-lg backdrop-saturate-150">
      <nav aria-label="Navigation principale" className="mx-auto flex h-14 max-w-[1296px] items-center justify-between gap-6 px-5 md:px-12">
        <a href="#" className="text-lg font-bold tracking-tight">
          {site.brand}
        </a>

        <ul className="hidden items-center gap-7 text-[0.9rem] lg:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="py-2 text-muted transition-colors hover:text-nuit">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={quoteHref} className="bouton hidden px-[1.1em] py-[0.5em] text-[0.9rem] sm:inline-flex">
            Devis gratuit
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full text-nuit transition-colors hover:bg-brume lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} strokeWidth={2} aria-hidden="true" /> : <Menu size={20} strokeWidth={2} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-filet px-5 pb-6 pt-2 md:px-12 lg:hidden">
          <ul>
            {nav.map((l) => (
              <li key={l.href} className="border-b border-filet">
                <a href={l.href} onClick={() => setOpen(false)} className="titre block py-4 text-2xl">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-muted">{site.location}</p>
        </div>
      )}
    </header>
  );
}
