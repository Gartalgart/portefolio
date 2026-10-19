import { ticker } from "@/lib/content";

// Bandeau lumineux défilant, comme sur une devanture. Décoratif : le contenu est déjà dans la page.
export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="ticker overflow-hidden border-y border-line bg-surface-2 py-4" aria-hidden="true">
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap font-display text-xl font-bold uppercase tracking-[0.14em] md:text-2xl">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="neon-fill">{t}</span>
            <span className="h-2 w-2 rounded-full bg-muted" />
          </span>
        ))}
      </div>
    </div>
  );
}
