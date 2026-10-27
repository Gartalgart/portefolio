import { bookingHref, steps } from "@/lib/content";

/*
  Méthode : une tournée en sept arrêts numérotés, du premier appel au suivi. Le numéro porte
  l'ordre des étapes, c'est une information. Sur grand écran la route est horizontale, sinon verticale.
*/
export default function Method() {
  return (
    <section id="methode" aria-labelledby="methode-titre" className="border-t-[3px] border-anthracite bg-tole px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <h2 id="methode-titre" className="lettrage text-balance text-[clamp(2.4rem,6vw,5rem)]">
          La tournée
        </h2>
        <p className="mt-5 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted">
          Sept arrêts du premier appel à la mise en ligne, et le même conducteur du début à la fin. Vous savez toujours où en est
          votre site.
        </p>

        <ol className="relative mt-14 grid gap-9 xl:mt-20 xl:grid-cols-7 xl:gap-6">
          {/* La route : verticale sur petit écran, horizontale sur grand. */}
          <span aria-hidden="true" className="absolute bottom-6 left-[22px] top-6 w-[6px] bg-anthracite xl:bottom-auto xl:left-6 xl:right-6 xl:top-[21px] xl:h-[6px] xl:w-auto" />
          {steps.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[50px_minmax(0,1fr)] gap-5 xl:block">
              <span className="lettrage tabular relative grid h-[50px] w-[50px] place-items-center rounded-full border-[3px] border-anthracite bg-vinyle text-xl text-white">
                {i + 1}
              </span>
              <div className="pt-3.5 xl:mt-6 xl:pt-0">
                <h3 className="lettrage-etroit text-xl">{s.title}</h3>
                <p className="mt-2 max-w-[44ch] leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-14 xl:mt-16">
          <a href={bookingHref} className="inline-block bg-vinyle px-6 py-3.5 font-bold text-white transition-colors hover:bg-vinyle-fonce">
            Premier arrêt&nbsp;: réserver l&apos;appel
          </a>
        </p>
      </div>
    </section>
  );
}
