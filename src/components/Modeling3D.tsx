import Boutique3D from "./Boutique3D";

export default function Modeling3D() {
  return (
    <section aria-labelledby="modelisation-titre" className="px-5 py-12 md:px-8">
      <div className="night mx-auto grid max-w-[1320px] items-center gap-12 rounded-2xl p-8 md:p-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <h2 id="modelisation-titre" className="display text-balance text-[clamp(2.5rem,5vw,4.5rem)]">
            Je modélise aussi en 3D.
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
            Cette boutique a été construite pièce par pièce dans Blender : façade, store rayé, vitrine garnie, vélo, terrasse. Plus de
            700 éléments, éclairés en temps réel dans votre navigateur. Glissez dessus pour en faire le tour.
          </p>
          <p className="mt-4 max-w-[46ch] text-muted">
            Produits, packagings, scènes d&apos;ambiance : la 3D peut donner du relief à votre site vitrine.
          </p>
        </div>
        <Boutique3D />
      </div>
    </section>
  );
}
