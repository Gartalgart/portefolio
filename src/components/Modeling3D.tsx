import Artefact3D from "./Artefact3D";

export default function Modeling3D() {
  return (
    <section aria-labelledby="modelisation-titre" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 rounded-3xl border border-line bg-surface p-8 md:p-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <h2 id="modelisation-titre" className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
            Je modélise aussi en 3D.
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
            Cet objet a été modélisé dans Blender, exporté en 425 Ko et s&apos;affiche en temps réel dans votre navigateur. Glissez
            dessus pour le faire tourner.
          </p>
          <p className="mt-4 max-w-[46ch] text-muted">
            Produits, packagings, scènes d&apos;ambiance : la 3D peut donner du relief à votre site vitrine.
          </p>
        </div>
        <Artefact3D />
      </div>
    </section>
  );
}
