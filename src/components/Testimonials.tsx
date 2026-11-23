import { testimonials } from "@/lib/content";

// N'affiche rien tant qu'aucun vrai avis n'est renseigné dans content.ts.
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section aria-labelledby="avis-titre" className="mx-auto max-w-[1296px] px-5 pb-20 md:px-12 md:pb-32">
      <h2 id="avis-titre" className="titre text-center text-[clamp(2rem,4.6vw,3.6rem)]">
        Ils le disent
      </h2>
      <ul className="mt-10 grid gap-3 md:mt-14 md:grid-cols-2">
        {testimonials.map((t) => (
          <li key={t.author}>
            <figure className="flex h-full flex-col rounded-tuile bg-brume p-8 md:p-10">
              <blockquote className="text-pretty text-xl leading-relaxed">« {t.quote} »</blockquote>
              <figcaption className="mt-auto pt-8">
                <span className="block font-semibold">{t.author}</span>
                <span className="text-muted">{t.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
