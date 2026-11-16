import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { quoteHref, projects, site } from "@/lib/content";

/*
  Premier écran : une phrase, une action, et un vrai site livré montré en grand. L'aperçu est le premier
  projet client de la liste ; les réalisations qui suivent reprennent à partir du deuxième.
*/
export default function Hero() {
  const vedette = projects[0];
  return (
    <section aria-labelledby="titre" className="mx-auto max-w-[1296px] px-5 text-center md:px-12">
      {/*
        Le premier écran ne contient que la phrase et l'action, centrées dans la hauteur de la fenêtre (moins la barre
        du haut) : l'aperçu du site client commence juste après, jamais coupé par le bas de l'écran à l'arrivée.
      */}
      <div className="flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center py-14">
        <h1 id="titre" className="titre mx-auto max-w-[14ch] text-[clamp(2.5rem,6.6vw,5.4rem)]">
          Un site qui fait venir vos clients.
        </h1>
        <p className="mx-auto mt-6 max-w-[46ch] text-pretty text-[clamp(1.1rem,1.6vw,1.35rem)] text-muted">
          {site.brand} crée votre site, le rend visible sur Google et en assure le suivi. Un seul interlocuteur, du devis à la
          maintenance.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          <a href={quoteHref} className="bouton">
            Demander un devis gratuit
          </a>
          <a href="#projets" className="lien">
            Voir les réalisations
            <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/*
        L'aperçu est présenté dans une fenêtre de navigateur, entière et plus étroite que la page : sa barre
        d'adresse le sépare de la navigation du site, et on voit tout de suite que c'est un autre site, montré en exemple.
      */}
      <figure className="mx-auto mt-8 max-w-[1040px]">
        <a
          href={vedette.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="block overflow-hidden rounded-tuile shadow-apercu"
        >
          <span className="flex h-9 items-center gap-1.5 bg-brume px-4 md:h-10">
            <span className="h-2.5 w-2.5 rounded-full bg-ardoise/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ardoise/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-ardoise/40" />
            <span className="mx-auto -translate-x-5 rounded-full bg-blanc px-5 py-0.5 text-xs text-muted md:px-10">{vedette.host}</span>
          </span>
          <Image
            src={vedette.image}
            alt=""
            width={1280}
            height={800}
            priority
            sizes="(min-width: 1088px) 1040px, 100vw"
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </a>
        <figcaption className="py-4 text-sm text-muted">
          {vedette.name}, {vedette.category.toLowerCase()} · projet client ·{" "}
          <a href={vedette.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-marine hover:underline">
            {vedette.host}
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
