import { method, site, stack } from "@/lib/content";
import SectionHead from "./SectionHead";

const card = "rounded-2xl border border-line bg-surface p-7 md:p-8";

export default function Bento() {
  return (
    <section id="apropos" aria-labelledby="apropos-titre" className="px-5 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHead
          id="apropos-titre"
          title="Des outils modernes, une façon de travailler simple"
          intro="Basé dans les Hauts-de-France, je me déplace aussi en Île-de-France et travaille à distance."
        />
        <div className="grid gap-4 md:grid-cols-6">
          <div className={`${card} md:col-span-4`}>
            <h3 className="font-semibold tracking-[-0.02em]">Les outils</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {stack.map((t) => (
                <li key={t} className="rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-sm">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[52ch] text-muted">
              Une stack JavaScript de bout en bout : un seul langage du design à la base de données, donc moins de friction et une
              maintenance moins coûteuse.
            </p>
          </div>

          <div className={`${card} md:col-span-2`}>
            <h3 className="font-semibold tracking-[-0.02em]">Où je travaille</h3>
            <p className="mt-5 text-muted">{site.location}.</p>
            <p className="mt-3 text-muted">Rendez-vous sur place ou en visio, comme vous préférez.</p>
          </div>

          <div className={`${card} md:col-span-6`}>
            <h3 className="font-semibold tracking-[-0.02em]">Ma façon de travailler</h3>
            <ul className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {method.map((m) => (
                <li key={m.title}>
                  <p className="font-medium">{m.title}</p>
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
