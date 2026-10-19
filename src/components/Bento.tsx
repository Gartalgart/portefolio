import { method, site, stack } from "@/lib/content";
import SectionHead from "./SectionHead";

const card = "rounded-2xl border border-line bg-surface p-7 md:p-9";

export default function Bento() {
  return (
    <section id="apropos" aria-labelledby="apropos-titre" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <SectionHead
          id="apropos-titre"
          title="L'arrière-boutique"
          intro="Les outils et la façon de travailler derrière la vitrine. Basé dans les Hauts-de-France, je me déplace aussi en Île-de-France."
        />
        <div className="grid gap-4 md:grid-cols-6">
          <div className={`${card} md:col-span-4`}>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">Les outils</h3>
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

          <div className={`${card} md:col-span-2`}>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">Où je travaille</h3>
            <p className="mt-6 text-muted">{site.location}.</p>
            <p className="mt-3 text-muted">Rendez-vous sur place ou en visio, comme vous préférez.</p>
          </div>

          <div className={`${card} md:col-span-6`}>
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">Ma façon de travailler</h3>
            <ul className="mt-7 grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {method.map((m) => (
                <li key={m.title}>
                  <p className="text-lg font-semibold">{m.title}</p>
                  <p className="mt-1 max-w-[46ch] text-muted">{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
