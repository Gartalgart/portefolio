import { services } from "@/lib/content";

/*
  Services : les deux portes arrière du véhicule, séparées par la jointure centrale et sa poignée.
  Les deux portes partagent les mêmes rangées, pour que leurs filets s'alignent. Sur téléphone,
  la porte de gauche puis celle de droite, séparées par un filet épais.
*/
// Ordre de lecture sur grand écran : rangée 1 (0, 2), rangée 2 (1, 3).
const mdOrder = ["md:order-1", "md:order-3", "md:order-2", "md:order-4"];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-titre" className="border-t-[3px] border-anthracite px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <h2 id="services-titre" className="lettrage text-balance text-[clamp(2.4rem,6vw,5rem)]">
          Ce que je fais
        </h2>
        <p className="mt-5 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted">
          Quatre prestations, un prix annoncé avant de commencer, et la même personne pour chacune.
        </p>

        <ul className="relative mt-12 grid border-[3px] border-anthracite bg-tole md:mt-16 md:grid-cols-2">
          {services.map((s, i) => {
            const left = i < 2;
            const secondRow = i === 1 || i === 3;
            // Entre les deux portes, la jointure épaisse ; à l'intérieur d'une porte, l'espacement suffit.
            const mobileTop = i === 2 ? "border-t-[3px] border-t-anthracite" : "";
            const mdTop = "md:border-t-0";
            return (
              <li
                key={s.title}
                className={`px-6 py-8 md:px-10 ${secondRow ? "md:pb-10 md:pt-4" : "md:pb-4 md:pt-10"} ${mobileTop} ${mdTop} ${left ? "md:border-r-[3px] md:border-r-anthracite" : ""} ${mdOrder[i]}`}
              >
                <h3 className="lettrage-etroit text-[clamp(1.6rem,2.6vw,2.2rem)]">{s.title}</h3>
                <p className="mt-4 max-w-[48ch] leading-relaxed text-muted">{s.text}</p>
                <p className="tabular mt-5 inline-block border-t-[3px] border-vinyle pt-2 text-lg font-extrabold text-vinyle">{s.price}</p>
              </li>
            );
          })}
          {/* Poignée de porte, posée sur la jointure centrale. */}
          <li
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 hidden h-16 w-[15px] -translate-x-1/2 -translate-y-1/2 border-[3px] border-anthracite bg-carrosserie md:block"
          />
        </ul>
      </div>
    </section>
  );
}
