import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-titre" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="services-titre" className="display text-balance text-[clamp(2.5rem,5vw,4.5rem)]">
            Ce que je fais pour votre activité.
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg text-muted">Des solutions à un besoin précis, avec un prix annoncé dès le départ.</p>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.title} className="py-9">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                <h3 className="display max-w-[18ch] text-[clamp(1.75rem,3vw,2.5rem)]">{s.title}</h3>
                <p className="tag mt-1">{s.price}</p>
              </div>
              <p className="mt-4 max-w-[58ch] leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
