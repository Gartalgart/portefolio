import { services } from "@/lib/content";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-titre" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          id="services-titre"
          title="Ce que je fais pour votre activité"
          intro="Pas une liste de technologies : des solutions qui répondent à un besoin précis, avec un prix annoncé dès le départ."
        />
        <ul className="divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.title} className="grid gap-3 py-8 md:grid-cols-[1fr_1.4fr_auto] md:items-baseline md:gap-10">
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{s.title}</h3>
              <p className="max-w-[60ch] leading-relaxed text-muted">{s.text}</p>
              <p className="font-medium md:text-right">{s.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
