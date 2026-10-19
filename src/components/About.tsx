import Image from "next/image";
import { method, site, stack } from "@/lib/content";

const card = "rounded-3xl border border-line bg-surface p-7 md:p-9";

export default function About() {
  return (
    <section id="apropos" aria-labelledby="apropos-titre" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <h2 id="apropos-titre" className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
          Un seul interlocuteur, du devis à la maintenance.
        </h2>

        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          <div className={`${card} flex flex-col justify-between gap-8 lg:col-span-2 lg:row-span-2`}>
            <Image
              src="/images/profile.jpg"
              alt="Rémy Denimal, développeur full-stack freelance"
              width={800}
              height={993}
              sizes="(min-width: 1024px) 400px, 90vw"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
            <div>
              <p className="text-xl font-semibold tracking-[-0.02em]">{site.name}</p>
              <p className="mt-1 text-muted">{site.role}</p>
              <p className="mt-3 text-muted">{site.location}</p>
            </div>
          </div>

          <div className={`${card} lg:col-span-4`}>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">Les outils</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {stack.map((t) => (
                <li key={t} className="rounded-full border border-line bg-surface-2 px-4 py-2 text-sm font-medium">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-7 max-w-[52ch] text-muted">
              Une stack JavaScript de bout en bout : un seul langage du design à la base de données, donc moins de friction et une
              maintenance moins coûteuse.
            </p>
          </div>

          <div className={`${card} lg:col-span-4`}>
            <h3 className="text-xl font-semibold tracking-[-0.02em]">Ma façon de travailler</h3>
            <ul className="mt-7 grid gap-x-12 gap-y-7 sm:grid-cols-2">
              {method.map((m) => (
                <li key={m.title}>
                  <p className="font-semibold">{m.title}</p>
                  <p className="mt-1 max-w-[42ch] text-muted">{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
