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

// Largeur affichée de l'aperçu selon la tuile, pour que le navigateur ne charge pas une image plus grande que nécessaire.
const tailles = {
  large: "(min-width: 928px) 880px, 100vw",
  moitie: "(min-width: 768px) 50vw, 100vw",
  petite: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
};

function Tuile({ p, fond, taille }: { p: (typeof projects)[number]; fond: keyof typeof fondClasse; taille: keyof typeof tailles }) {
  const petite = taille === "petite";
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
      <p className={`mt-2 text-muted ${petite ? "text-sm" : ""}`}>
        {p.category} · {p.client ? "projet client" : "démonstration"}
      </p>
      <p className={`mt-3.5 max-w-[44ch] text-pretty ${petite ? "text-sm" : ""}`}>{p.solution}</p>
      <a href={p.url} target="_blank" rel="noopener noreferrer" className="lien mt-1.5">
        Voir le site
        <span className="sr-only"> {p.name} (nouvel onglet)</span>
        <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
      </a>
      {/* L'aperçu reste collé au bas de la tuile, quelle que soit la longueur du texte au-dessus. */}
      <div className={`mt-auto flex w-full justify-center ${petite ? "pt-5" : "pt-6 md:pt-10"}`}>
        <Image
          src={p.image}
          alt=""
          width={1280}
          height={800}
          sizes={tailles[taille]}
          className={`aspect-[16/10] w-full rounded-t-xl object-cover object-top shadow-apercu ${
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
            <Tuile p={p} fond={fonds[i]} taille={i === 0 ? "large" : "moitie"} />
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
                <Tuile p={p} fond="brume" taille="petite" />
              </li>
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
