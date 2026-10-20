import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { bookingHref, site, steps } from "@/lib/content";

// Chaque note est posée un peu de travers, comme sur un tableau de liège.
const tilt = ["-rotate-1", "rotate-1", "-rotate-[0.6deg]", "rotate-[0.8deg]"];

export default function Method() {
  return (
    <section id="methode" aria-labelledby="methode-titre" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-3xl">
          <h2 id="methode-titre" className="display text-balance text-[clamp(2.5rem,5vw,4.5rem)]">
            Du premier appel à la mise en ligne.
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty text-lg text-muted">
            Sept étapes, et à chacune la même personne en face de vous. Vous savez toujours où en est votre site, et à qui écrire.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className={`paper flex flex-col p-6 ${tilt[i % tilt.length]}`}>
              <span className="tag self-start">Étape {i + 1}</span>
              <h3 className="mt-4 text-xl font-bold tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{s.text}</p>
              <p className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-sm font-semibold">
                <Image src="/images/profile.jpg" alt="" width={56} height={56} className="h-6 w-6 rounded-full object-cover object-top" />
                {site.name.split(" ")[0]}
              </p>
            </li>
          ))}
          <li className="night flex flex-col justify-between gap-6 rounded-[4px] border border-line p-6 shadow-[var(--shadow)] lg:rotate-1">
            <p className="display text-3xl">On commence par l&apos;étape 1 ?</p>
            <a
              href={bookingHref}
              className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-5 py-3 font-semibold text-primary-fg transition hover:brightness-110"
            >
              Réserver un appel <ArrowRight size={16} aria-hidden="true" />
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
