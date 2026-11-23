import Image from "next/image";
import { method, site } from "@/lib/content";

/*
  À propos : le portrait à gauche, à droite qui conduit le projet. C'est le seul endroit de la page
  où le fondateur est nommé : la preuve concrète du « seul interlocuteur ».
*/
export default function About() {
  return (
    <section id="apropos" aria-labelledby="apropos-titre" className="mx-auto max-w-[1296px] px-5 py-20 md:px-12 md:py-32">
      <div className="grid items-center gap-x-20 gap-y-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        {site.photo ? (
          <figure className="max-w-[420px]">
            <Image
              src={site.photo}
              alt={`Portrait de ${site.name}`}
              width={800}
              height={1000}
              sizes="(min-width: 768px) 38vw, 100vw"
              className="aspect-[4/5] w-full rounded-tuile object-cover object-top"
            />
            <figcaption className="mt-3 text-sm text-muted">
              {site.name}, fondateur de {site.brand}
            </figcaption>
          </figure>
        ) : (
          // Sans portrait : une tuile brume porte le nom, le métier, la zone et le contact.
          <div className="flex aspect-[4/5] max-w-[420px] flex-col justify-end gap-3 rounded-tuile bg-brume p-8">
            <p className="titre text-3xl">{site.name}</p>
            <p className="text-muted">{site.role}</p>
            <p className="text-muted">{site.location}</p>
            <a href={`mailto:${site.email}`} className="lien">
              {site.email}
            </a>
          </div>
        )}

        <div>
          <h2 id="apropos-titre" className="titre text-[clamp(2rem,4.2vw,3.2rem)]">
            Un seul interlocuteur.
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty text-lg text-muted md:text-xl">
            {site.brand}, c&apos;est {site.name}, développeur indépendant. Chaque site est conçu, développé et maintenu par la même
            personne, du devis à la maintenance : pas de message qui se perd entre trois interlocuteurs.
          </p>
          <p className="mt-4 text-muted">{site.location}</p>
        </div>
      </div>

      <ul className="mt-14 grid gap-x-12 border-t border-filet md:mt-20 md:grid-cols-3">
        {method.map((m) => (
          <li key={m.title} className="border-b border-filet py-6 md:border-b-0">
            <h3 className="titre text-xl">{m.title}</h3>
            <p className="mt-2 max-w-[40ch] text-pretty text-muted">{m.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
