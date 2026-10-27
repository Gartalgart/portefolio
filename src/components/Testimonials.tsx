import { testimonials } from "@/lib/content";

// N'affiche rien tant qu'aucun vrai avis n'est renseigné dans content.ts.
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section aria-labelledby="avis-titre" className="border-t-[3px] border-anthracite px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <h2 id="avis-titre" className="lettrage text-balance text-[clamp(2.4rem,6vw,5rem)]">
          Ils le disent
        </h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.author}>
              <figure className="h-full border-[3px] border-anthracite bg-tole p-7">
                <blockquote className="text-pretty text-xl leading-relaxed">« {t.quote} »</blockquote>
                <figcaption className="mt-6 border-t-[3px] border-vinyle pt-4">
                  <span className="block font-extrabold">{t.author}</span>
                  <span className="text-muted">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
