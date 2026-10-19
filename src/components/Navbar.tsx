"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-line bg-[var(--glass)] py-2 pl-5 pr-2 backdrop-blur-xl"
      >
        <a href="#" className="text-sm font-semibold tracking-tight">
          Rémy Denimal<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.calendly}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition hover:brightness-110 sm:block"
          >
            Réserver un appel
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="menu-mobile"
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-[var(--glass)] p-3 backdrop-blur-xl md:hidden"
        >
          <ul>
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-base hover:bg-accent-soft">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={site.calendly} className="mt-2 block rounded-2xl bg-accent px-4 py-3 text-center font-medium text-accent-fg">
                Réserver un appel
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
