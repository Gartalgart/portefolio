import { testimonials } from "@/lib/content";
import SectionHead from "./SectionHead";

// N'affiche rien tant qu'aucun vrai avis n'est renseigné dans content.ts.
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section aria-labelledby="avis-titre" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHead id="avis-titre" title="Ils m'ont fait confiance" />
        <ul className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.author}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7">
                <blockquote className="flex-1 leading-relaxed">« {t.quote} »</blockquote>
                <figcaption className="mt-6 border-t border-line pt-4 text-sm">
                  <span className="block font-medium">{t.author}</span>
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
