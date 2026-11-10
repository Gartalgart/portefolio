import Image from "next/image";
import { method, site } from "@/lib/content";

/*
  À propos : la portière conducteur. Le portrait cadré grand dans la vitre (coin supérieur arrondi,
  comme une fenêtre de portière), et à côté qui conduit le projet.
*/
export default function About() {
  return (
    <section id="apropos" aria-labelledby="apropos-titre" className="border-t-[3px] border-anthracite px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {site.photo ? (
          <figure className="self-start border-[3px] border-anthracite bg-tole p-4 md:p-5">
            <Image
              src={site.photo}
              alt={`Portrait de ${site.name}`}
              width={800}
              height={1000}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[4/5] w-full rounded-tl-[72px] border-[3px] border-anthracite object-cover object-top"
            />
            <figcaption className="lettrage-etroit mt-4 text-xl">{site.name}</figcaption>
          </figure>
        ) : (
          // Sans portrait : la portière porte le lettrage de l'artisan (nom, métier, zone, contact).
          <div className="self-start border-[3px] border-anthracite bg-tole p-4 md:p-5">
            <div className="flex flex-col gap-6 rounded-tl-[72px] border-[3px] border-anthracite bg-carrosserie px-6 pb-7 pt-16 md:px-8 md:pt-20">
              <p className="lettrage text-balance text-[clamp(2.2rem,4.6vw,4rem)] leading-[0.95]">{site.name}</p>
              <p className="lettrage-etroit text-xl text-vinyle md:text-2xl">{site.role}</p>
              <p className="border-t-[3px] border-anthracite pt-5 font-semibold leading-relaxed">
                {site.location}
                <br />
                <a href={`mailto:${site.email}`} className="underline decoration-vinyle hover:text-vinyle">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        )}

        <div className="lg:pt-6">
          <h2 id="apropos-titre" className="lettrage text-balance text-[clamp(2.4rem,5.4vw,4.6rem)]">
            Au volant : moi
          </h2>
          <p className="mt-6 max-w-[56ch] text-pretty text-lg leading-relaxed md:text-xl">
            Je conçois, développe et maintiens moi-même chaque site. Un seul interlocuteur, du devis à la maintenance : pas de
            message qui se perd entre trois personnes.
          </p>

          <ul className="mt-10 space-y-1 border-y-[3px] border-anthracite py-3">
            {method.map((m) => (
              <li key={m.title} className="grid gap-1 py-5 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-6">
                <h3 className="lettrage-etroit text-lg">{m.title}</h3>
                <p className="leading-relaxed text-muted">{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
