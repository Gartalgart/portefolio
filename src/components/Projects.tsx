import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/content";

/*
  Réalisations : de grandes tuiles pleines, une couleur de fond chacune, l'aperçu du site coupé par le bas
  de la tuile. Le premier projet est déjà montré dans le premier écran : la liste reprend au deuxième.
  Cinq tuiles sont affichées, les autres se déplient en plus petit : la page reste courte sur téléphone.
  Le statut (projet client ou démonstration) est toujours écrit en toutes lettres, jamais porté par la couleur.
*/
const FEATURED = 5;
// Fond des cinq tuiles en vedette : une grande tuile nuit, puis un damier brume / marine.
const fonds = ["nuit", "brume", "marine", "marine", "brume"] as const;
const fondClasse = { nuit: "sur-nuit bg-nuit", marine: "sur-nuit bg-marine", brume: "bg-brume" };

function Tuile({ p, fond, petite = false }: { p: (typeof projects)[number]; fond: keyof typeof fondClasse; petite?: boolean }) {
  return (
    <article
      aria-labelledby={`projet-${p.host}`}
      className={`flex h-full flex-col items-center overflow-hidden rounded-tuile text-center ${fondClasse[fond]} ${
        petite ? "px-6 pt-9" : "px-5 pt-10 md:px-12 md:pt-16"
      }`}
    >
      <h3 id={`projet-${p.host}`} className={`titre ${petite ? "text-2xl" : "text-[clamp(1.8rem,3.4vw,2.9rem)]"}`}>
        {p.name}
      </h3>
      <p className={`mt-2 text-muted ${petite ? "text-[0.95rem]" : "text-[1.05rem]"}`}>
        {p.category} · {p.client ? "projet client" : "démonstration"}
      </p>
      <p className={`mt-3.5 max-w-[44ch] text-pretty ${petite ? "text-[0.95rem]" : ""}`}>{p.solution}</p>
      <a href={p.url} target="_blank" rel="noopener noreferrer" className="lien mt-4">
        Voir le site
        <span className="sr-only"> {p.name} (nouvel onglet)</span>
        <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
      </a>
      {/* L'aperçu reste collé au bas de la tuile, quelle que soit la longueur du texte au-dessus. */}
      <div className={`mt-auto flex w-full justify-center ${petite ? "pt-7" : "pt-8 md:pt-12"}`}>
        <Image
          src={p.image}
          alt=""
          width={1280}
          height={800}
          sizes={petite ? "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" : "(min-width: 880px) 880px, 100vw"}
          className={`aspect-[16/10] w-full rounded-t-xl object-cover object-top shadow-[0_24px_60px_-18px_rgb(0_0_0/0.4)] ${
            petite ? "" : "max-w-[880px]"
          }`}
        />
      </div>
    </article>
  );
}

export default function Projects() {
  const clients = projects.filter((p) => p.client).length;
  const demos = projects.length - clients;
  const suite = projects.slice(1);
  const first = suite.slice(0, FEATURED);
  const rest = suite.slice(FEATURED);

  return (
    <section id="projets" aria-labelledby="projets-titre">
      <div className="mx-auto max-w-[1296px] px-5 pb-8 pt-20 text-center md:px-12 md:pb-12 md:pt-32">
        <h2 id="projets-titre" className="titre text-[clamp(2rem,4.6vw,3.6rem)]">
          Réalisations
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-pretty text-lg text-muted">
          {projects.length} sites et applications, à ouvrir et à tester : {clients} projets clients et {demos} démonstrations. Une
          démonstration est un site complet, construit autour d&apos;un client fictif ; chaque tuile le signale.
        </p>
      </div>

      <ul className="grid gap-3 px-3 md:grid-cols-2">
        {first.map((p, i) => (
          <li key={p.name} className={i === 0 ? "md:col-span-2" : ""}>
            <Tuile p={p} fond={fonds[i]} />
          </li>
        ))}
      </ul>

      {rest.length > 0 && (
        <details className="group px-3">
          <summary className="mx-auto mt-8 flex w-fit cursor-pointer items-center gap-2 rounded-full bg-brume px-6 py-3 font-semibold transition-colors hover:bg-filet">
            <span className="group-open:hidden">Voir les {rest.length} autres réalisations</span>
            <span className="hidden group-open:inline">Replier les {rest.length} autres réalisations</span>
            <ChevronDown size={18} strokeWidth={2.2} className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.name}>
                <Tuile p={p} fond="brume" petite />
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
