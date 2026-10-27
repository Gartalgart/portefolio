"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookingHref, nav, site } from "@/lib/content";

/*
  Barre du haut : la plaque du véhicule, blanche, filet anthracite épais. Sur mobile, le menu
  s'ouvre en dessous et une barre d'appel reste collée en bas de l'écran (voir CallBar).
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
    <header className="sticky top-0 z-50 border-b-[3px] border-anthracite bg-carrosserie">
      <nav aria-label="Navigation principale" className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-6 px-5 md:px-8">
        <a href="#" className="lettrage text-xl text-anthracite md:text-2xl">
          {site.brand}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="py-2 font-semibold text-anthracite decoration-vinyle hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={bookingHref}
            className="hidden bg-vinyle px-5 py-3 font-bold text-white transition-colors hover:bg-vinyle-fonce sm:block"
          >
            Réserver un appel
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border-[3px] border-anthracite text-anthracite lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} strokeWidth={2.5} aria-hidden="true" /> : <Menu size={20} strokeWidth={2.5} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t-[3px] border-anthracite bg-carrosserie px-5 pb-6 pt-2 lg:hidden">
          <ul>
            {nav.map((l) => (
              <li key={l.href} className="border-b border-line-soft">
                <a href={l.href} onClick={() => setOpen(false)} className="lettrage block py-4 text-2xl text-anthracite">
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
