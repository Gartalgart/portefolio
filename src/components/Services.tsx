import { services } from "@/lib/content";

/*
  Prestations : quatre lignes séparées par un filet, le nom à gauche, ce que le client y gagne à droite.
  Pas de cartes : la liste se lit d'un trait.
*/
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-titre" className="mx-auto max-w-[1296px] px-5 md:px-12">
      <div className="pb-8 pt-20 text-center md:pb-12 md:pt-32">
        <h2 id="services-titre" className="titre text-[clamp(2rem,4.6vw,3.6rem)]">
          Prestations
        </h2>
        <p className="mx-auto mt-4 max-w-[50ch] text-pretty text-lg text-muted">
          Quatre prestations, un prix annoncé avant de commencer, et la même personne pour chacune.
        </p>
      </div>

      <ul className="border-b border-filet">
        {services.map((s) => (
          <li key={s.title} className="grid gap-x-12 gap-y-2 border-t border-filet py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-baseline">
            <h3 className="titre text-[clamp(1.3rem,2.2vw,1.75rem)]">{s.title}</h3>
            <p className="max-w-[56ch] text-pretty text-muted">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
