import { Mail, MapPin, Phone, Search } from "lucide-react";

/*
  Petit site fictif (« Atelier Morel ») dessiné en HTML pour raconter l'histoire du hero.
  Il s'adapte à la largeur de sa fenêtre grâce aux unités cqw. C'est une illustration :
  ses couleurs lui sont propres et ne font pas partie des tokens du portfolio.
*/
const wood = { bg: "#f6efe3", ink: "#2a1c12", accent: "#c4501b", soft: "#e7dccb" };

function MiniSite() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: wood.bg, color: wood.ink }}>
      <div className="flex items-center justify-between px-[4cqw] py-[2.2cqw]" style={{ borderBottom: `1px solid ${wood.soft}` }}>
        <span className="font-display text-[3cqw] font-extrabold tracking-tight">Atelier Morel</span>
        <span className="hidden gap-[2.5cqw] text-[1.6cqw] sm:flex">
          <span>Réalisations</span>
          <span>Savoir-faire</span>
          <span>Contact</span>
        </span>
        <span className="rounded-[0.8cqw] px-[1.8cqw] py-[0.9cqw] text-[1.6cqw] font-semibold text-white" style={{ background: wood.accent }}>
          Demander un devis
        </span>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr] gap-[3cqw] px-[4cqw] pt-[5cqw]">
        <div>
          <p className="text-[1.6cqw] font-semibold uppercase tracking-[0.12em]" style={{ color: wood.accent }}>
            Menuisier à Compiègne
          </p>
          <p className="display mt-[1.5cqw] text-[6.4cqw]">Des meubles faits pour durer.</p>
          <p className="mt-[2cqw] max-w-[36ch] text-[1.7cqw] leading-snug opacity-75">
            Cuisines, escaliers, dressings sur mesure. Devis gratuit, atelier ouvert du mardi au samedi.
          </p>
          <div className="mt-[3cqw] flex gap-[1.5cqw] text-[1.6cqw] font-semibold">
            <span className="flex items-center gap-[0.8cqw] rounded-[0.8cqw] px-[2cqw] py-[1.1cqw] text-white" style={{ background: wood.accent }}>
              <Phone className="h-[1.8cqw] w-[1.8cqw]" aria-hidden="true" /> Appeler
            </span>
            <span className="flex items-center gap-[0.8cqw] rounded-[0.8cqw] border px-[2cqw] py-[1.1cqw]" style={{ borderColor: wood.ink }}>
              <MapPin className="h-[1.8cqw] w-[1.8cqw]" aria-hidden="true" /> Itinéraire
            </span>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2cqw]" style={{ background: wood.soft }}>
          {/* Planches de bois stylisées : géométrie pure. */}
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="absolute inset-x-0"
              style={{ top: `${i * 20}%`, height: "19%", background: i % 2 ? "#b9784a" : "#a8673b", opacity: 0.85 - i * 0.08 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroScene({ step }: { step: number }) {
  const lit = step >= 2;
  return (
    <div className="relative [container-type:inline-size]">
      <div
        className="overflow-hidden rounded-xl border transition-[border-color,box-shadow] duration-700"
        style={{
          borderColor: lit ? "rgba(127,166,255,0.55)" : "rgba(238,241,248,0.14)",
          boxShadow: lit ? "0 30px 80px -30px rgba(31,79,214,0.65)" : "0 30px 60px -30px rgba(0,0,0,0.9)",
        }}
      >
        <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3.5 py-2.5" aria-hidden="true">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </span>
          <span className="min-w-0 flex-1 truncate rounded-md bg-bg px-3 py-1 text-center text-[11px] text-muted">atelier-morel.fr</span>
        </div>
        <div className="relative aspect-[16/10] bg-night">
          <div
            className="absolute inset-0 transition-[filter,opacity] duration-700 ease-out"
            style={{
              filter: step === 0 ? "grayscale(1) brightness(0.18)" : step === 1 ? "grayscale(0.6) brightness(0.42)" : "none",
            }}
          >
            <MiniSite />
          </div>
        </div>
      </div>

      {/* Étape « Trouvé » : le site apparaît dans une recherche locale. */}
      <div
        aria-hidden="true"
        className="absolute -left-3 top-[18%] w-[min(62%,300px)] rounded-xl bg-white p-3 text-[#0c1a3a] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out sm:-left-8"
        style={{ opacity: step === 1 ? 1 : 0, transform: `translateY(${step === 1 ? 0 : 16}px) rotate(-2deg)` }}
      >
        <p className="flex items-center gap-2 rounded-full bg-[#eef1f8] px-3 py-1.5 text-xs">
          <Search size={12} aria-hidden="true" /> menuisier près de moi
        </p>
        <div className="mt-2 rounded-lg border-2 border-[#1f4fd6] p-2">
          <p className="text-sm font-bold">Atelier Morel</p>
          <p className="text-xs text-[#4a5672]">Menuisier · Ouvert</p>
          <p className="mt-1.5 flex gap-1.5 text-[11px] font-semibold text-[#1f4fd6]">
            <span className="rounded-full bg-[#eef1f8] px-2 py-0.5">Appeler</span>
            <span className="rounded-full bg-[#eef1f8] px-2 py-0.5">Site web</span>
          </p>
        </div>
        <span className="mt-2 block h-2 w-3/4 rounded-full bg-[#eef1f8]" />
        <span className="mt-1.5 block h-2 w-1/2 rounded-full bg-[#eef1f8]" />
      </div>

      {/* Étape « Contacté » : une demande arrive. */}
      <div
        aria-hidden="true"
        className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-xl bg-white py-3 pl-3 pr-5 text-[#0c1a3a] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 ease-out sm:-right-6"
        style={{ opacity: step === 3 ? 1 : 0, transform: `translateY(${step === 3 ? 0 : 16}px)` }}
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1f4fd6] text-white">
          <Mail size={16} aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-bold">Nouvelle demande de devis</span>
          <span className="block text-xs text-[#4a5672]">via atelier-morel.fr · à l&apos;instant</span>
        </span>
      </div>
    </div>
  );
}
