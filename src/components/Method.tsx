import { quoteHref, steps } from "@/lib/content";

/*
  Méthode : sept étapes numérotées, de la demande au suivi, dans une tuile brume. Le numéro porte
  l'ordre des étapes, c'est une information. Le titre et l'action restent en vue pendant la lecture sur grand écran.
*/
export default function Method() {
  return (
    <section id="methode" aria-labelledby="methode-titre" className="mt-20 px-3 md:mt-32">
      <div className="rounded-tuile bg-brume px-5 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="methode-titre" className="titre text-[clamp(2rem,4.2vw,3.2rem)]">
              Comment ça se passe
            </h2>
            <p className="mt-5 max-w-[44ch] text-pretty text-lg text-muted">
              Sept étapes de votre demande à la mise en ligne, avec le même interlocuteur du début à la fin. Vous savez toujours où
              en est votre site.
            </p>
            <a href={quoteHref} className="bouton mt-8">
              Demander un devis gratuit
            </a>
          </div>

          <ol className="border-b border-filet">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-t border-filet py-6">
                <span className="tabular pt-0.5 font-semibold text-muted" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="titre text-xl">{s.title}</h3>
                  <p className="mt-1.5 max-w-[52ch] text-pretty text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
