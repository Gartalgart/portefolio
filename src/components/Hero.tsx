import { ArrowRight } from "lucide-react";
import { bookingHref, offers, site } from "@/lib/content";

/*
  Premier écran : le flanc du véhicule. Le nom en lettrage rouge sur toute la largeur (film de pose
  qui se décolle une fois), le métier et la zone, les prestations comme sur la porte arrière, le
  macaron « un seul interlocuteur ». La bande de livrée, puis l'action et l'email lettrés à l'échelle d'un panneau.
  Sur téléphone : nom, métier, zone, bouton et macaron, puis prestations. Tout est lisible sans script.
*/
function Macaron({ className }: { className: string }) {
  return (
    <p className={`shrink-0 place-content-center rounded-full border-[5px] border-anthracite text-center ${className}`}>
      <span className="lettrage-etroit block text-[1.6rem] leading-none text-vinyle lg:text-[2.05rem]">Un seul</span>
      <span className="mt-1 text-sm font-bold leading-tight lg:text-base">
        interlocuteur,
        <br />
        du devis au suivi
      </span>
    </p>
  );
}

// Sans propriété display : chaque bouton choisit la sienne (inline-flex ou hidden md:inline-flex).
const cta = "items-center gap-3 whitespace-nowrap bg-vinyle py-4 font-bold text-white transition-colors hover:bg-vinyle-fonce";

export default function Hero() {
  const [first, last] = site.name.split(" ");
  return (
    <section aria-labelledby="titre">
      <div className="mx-auto w-full max-w-[1360px] px-5 pb-8 pt-8 md:px-8 md:pb-9 md:pt-10">
        <div className="flex items-start justify-between gap-10">
          <h1 id="titre" className="lettrage text-[clamp(3.4rem,11.2vw,9.6rem)]">
            <span className="relative inline-block">
              <span className="block text-vinyle">
                {first}
                <br />
                {last}
              </span>
              <span className="film" aria-hidden="true" />
            </span>
            <span className="lettrage mt-5 block text-[clamp(1.5rem,3vw,2.6rem)] text-anthracite md:mt-7">Création de sites internet</span>
          </h1>
          <Macaron className="mt-4 hidden h-44 w-44 lg:grid" />
        </div>

        <div className="mt-4 grid gap-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10">
          <p className="text-base font-semibold uppercase tracking-[0.02em] text-muted sm:text-lg sm:tracking-[0.04em] md:text-xl">{site.location}</p>

          {/* Téléphone : l'action avant les prestations, avec le macaron à côté. */}
          <div className="flex items-center justify-between gap-4 md:hidden">
            <a href={bookingHref} className={`${cta} inline-flex px-5 text-base`}>
              Réserver un appel
              <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <Macaron className="grid h-[8.5rem] w-[8.5rem] px-3" />
          </div>

          {/* Porte arrière : la liste des prestations, lettrée. */}
          <div className="flex gap-4">
            <span className="w-2 shrink-0 bg-vinyle" aria-hidden="true" />
            <ul
              aria-label="Prestations"
              className="lettrage-etroit grid grid-cols-2 gap-x-6 gap-y-1 text-[clamp(1.35rem,2.2vw,1.9rem)] text-anthracite"
            >
              {offers.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bande de livrée. */}
      <div aria-hidden="true">
        <div className="h-9 bg-vinyle md:h-12" />
        <div className="mt-1.5 h-2 bg-anthracite" />
      </div>

      <div className="mx-auto grid w-full max-w-[1360px] items-center gap-6 px-5 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10 md:px-8 md:py-9">
        <p className="max-w-[52ch] text-pretty text-lg leading-relaxed md:text-xl">
          Je crée votre site, je le rends visible sur Google et je m&apos;en occupe ensuite. Un seul interlocuteur, du devis à la
          maintenance.
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <a href={bookingHref} className={`${cta} hidden px-7 text-lg md:inline-flex`}>
            Réserver un appel de 15 min
            <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />
          </a>
          {/* L'email lettré comme sur un utilitaire : la deuxième inscription après le nom. */}
          <a
            href={`mailto:${site.email}`}
            className="lettrage-etroit py-1 text-[clamp(1.5rem,2.3vw,2.1rem)] normal-case text-anthracite underline decoration-vinyle decoration-[3px] underline-offset-[0.18em] hover:text-vinyle"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
