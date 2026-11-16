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
    <section aria-labelledby="titre" className="mx-auto max-w-[1296px] px-5 pt-14 text-center md:px-12 md:pt-24">
      <h1 id="titre" className="titre mx-auto max-w-[14ch] text-[clamp(2.5rem,6.6vw,5.4rem)]">
        Un site qui fait venir vos clients.
      </h1>
      <p className="mx-auto mt-6 max-w-[46ch] text-pretty text-[clamp(1.1rem,1.6vw,1.35rem)] text-muted">
        {site.brand} crée votre site, le rend visible sur Google et en assure le suivi. Un seul interlocuteur, du devis à la
        maintenance.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3.5">
        <a href={quoteHref} className="bouton">
          Demander un devis gratuit
        </a>
        <a href="#projets" className="lien">
          Voir les réalisations
          <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>

      <figure className="mt-12 md:mt-20">
        <a href={vedette.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
          <Image
            src={vedette.image}
            alt=""
            width={1280}
            height={800}
            priority
            sizes="(min-width: 1296px) 1200px, 100vw"
            className="aspect-[16/10] w-full rounded-t-tuile object-cover object-top shadow-[0_30px_80px_-20px_rgb(26_37_47/0.35)] md:aspect-[16/8.5]"
          />
        </a>
        <figcaption className="border-t border-filet py-3.5 text-sm text-muted">
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
