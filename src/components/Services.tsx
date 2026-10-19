import { services } from "@/lib/content";
import SectionHead from "./SectionHead";

// La carte : titre, pointillés, prix, comme un menu ou une ardoise de commerçant.
export default function Services() {
  return (
    <section id="services" aria-labelledby="services-titre" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <SectionHead
          id="services-titre"
          title="La carte"
          intro="Pas une liste de technologies : des solutions à un besoin précis, avec un prix annoncé dès le départ."
        />
        <ul className="rounded-2xl border border-line bg-surface p-6 md:p-12">
          {services.map((s) => (
            <li key={s.title} className="border-b border-line py-8 first:pt-0 last:border-0 last:pb-0">
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] md:text-4xl">{s.title}</h3>
                <span className="mb-1.5 hidden flex-1 border-b-2 border-dotted border-muted/50 sm:block" aria-hidden="true" />
                <p className="ml-auto whitespace-nowrap font-display text-lg font-bold text-accent md:text-2xl sm:ml-0">{s.price}</p>
              </div>
              <p className="mt-3 max-w-[64ch] leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
