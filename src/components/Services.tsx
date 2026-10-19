import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-titre" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="services-titre" className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
            Ce que je fais pour votre activité.
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg text-muted">
            Des solutions à un besoin précis, avec un prix annoncé dès le départ.
          </p>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.title} className="py-9">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{s.title}</h3>
                <p className="font-medium text-link">{s.price}</p>
              </div>
              <p className="mt-3 max-w-[58ch] leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
