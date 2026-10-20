import Image from "next/image";
import { method, site, stack } from "@/lib/content";

export default function About() {
  return (
    <section id="apropos" aria-labelledby="apropos-titre" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1320px] items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <figure className="paper -rotate-1 p-3 pb-5 lg:sticky lg:top-28">
          <Image
            src="/images/profile.jpg"
            alt="Rémy Denimal, développeur web freelance"
            width={800}
            height={993}
            sizes="(min-width: 1024px) 480px, 90vw"
            className="aspect-[4/5] w-full rounded-[2px] object-cover"
          />
          <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2 px-2">
            <span className="text-lg font-bold">{site.name}</span>
            <span className="text-sm text-muted">{site.location}</span>
          </figcaption>
        </figure>

        <div>
          <h2 id="apropos-titre" className="display text-balance text-[clamp(2.5rem,5vw,4.5rem)]">
            Qui travaille sur votre site ? Moi.
          </h2>
          <p className="mt-6 max-w-[54ch] text-pretty text-lg leading-relaxed text-muted">
            Développeur full-stack freelance, je conçois, développe et maintiens moi-même chaque site. Un seul interlocuteur, du devis
            à la maintenance : pas de message qui se perd entre trois personnes.
          </p>

          <ul className="mt-12 space-y-8">
            {method.map((m) => (
              <li key={m.title} className="grid gap-1 border-t border-line pt-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <h3 className="font-bold">{m.title}</h3>
                <p className="max-w-[48ch] text-muted">{m.text}</p>
              </li>
            ))}
            <li className="grid gap-1 border-t border-line pt-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <h3 className="font-bold">Les outils</h3>
              <ul className="flex flex-wrap gap-2" aria-label="Technologies utilisées">
                {stack.map((t) => (
                  <li key={t} className="rounded-full border border-line-strong px-3 py-1 text-sm font-medium">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
