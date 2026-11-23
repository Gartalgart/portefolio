import type { Metadata } from "next";
import PageShell, { Breadcrumb } from "@/components/PageShell";
import ProjectGrid from "@/components/ProjectGrid";
import { projects, quoteHref } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const clients = projects.filter((p) => p.client).length;
const demos = projects.length - clients;

export const metadata: Metadata = pageMetadata({
  title: "Réalisations : sites internet et applications",
  description: `${projects.length} sites internet et applications à ouvrir et à tester : sites vitrines, boutiques en ligne, outils sur-mesure. ${clients} projets clients et ${demos} démonstrations.`,
  path: "/realisations",
});

const crumbs = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
];

// Toutes les réalisations sur une page, chacune avec son lien vers le site et vers sa page de détail.
export default function Realisations() {
  return (
    <PageShell crumbs={crumbs}>
      <section aria-labelledby="titre" className="mx-auto max-w-[1296px] px-5 pb-10 pt-6 text-center md:px-12 md:pb-16 md:pt-10">
        <Breadcrumb crumbs={crumbs} />
        <h1 id="titre" className="titre mx-auto mt-8 max-w-[20ch] text-[clamp(2.2rem,5.2vw,4.2rem)] md:mt-14">
          Réalisations
        </h1>
        <p className="mx-auto mt-6 max-w-[58ch] text-pretty text-[clamp(1.1rem,1.6vw,1.3rem)] text-muted">
          {projects.length} sites et applications, à ouvrir et à tester : {clients} projets clients et {demos} démonstrations. Une
          démonstration est un site complet, construit autour d&apos;un client fictif ; chaque tuile le signale.
        </p>
        <div className="mt-8">
          <a href={quoteHref} className="bouton">
            Demander un devis gratuit
          </a>
        </div>
      </section>

      <section aria-label="Liste des réalisations" className="pb-20 md:pb-32">
        <ProjectGrid items={projects} />
      </section>
    </PageShell>
  );
}
