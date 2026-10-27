import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { legal, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Mentions légales — ${site.brand}`,
  description: `Éditeur, hébergeur et crédits du site ${site.url.replace("https://", "")}.`,
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" intro="Qui édite ce site, qui l'héberge, et d'où viennent ses contenus.">
      <section aria-labelledby="editeur">
        <h2 id="editeur">Éditeur du site</h2>
        <ul>
          <li>{legal.publisher}, {site.role.toLowerCase()}</li>
          <li>{legal.status}</li>
          <li>SIRET : {legal.siret}</li>
          <li>Adresse : {legal.address}</li>
          <li>
            Contact : <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>Directeur de la publication : {legal.publisher}</li>
        </ul>
      </section>

      <section aria-labelledby="hebergeur">
        <h2 id="hebergeur">Hébergement</h2>
        <p>
          Le site est hébergé par {legal.host.name}, {legal.host.address} (<a href={legal.host.url}>{legal.host.url.replace("https://", "")}</a>).
        </p>
      </section>

      <section aria-labelledby="propriete">
        <h2 id="propriete">Propriété intellectuelle</h2>
        <p>
          Les textes, la mise en page et le code de ce site sont la propriété de {site.name}, sauf mention contraire.
          Toute reproduction sans accord écrit est interdite.
        </p>
        <p>
          Les sites présentés dans la section Réalisations appartiennent à leurs propriétaires respectifs. Les projets signalés
          « Démonstration » (Maison Léa Coiffure, Braise) sont des exemples fictifs créés pour illustrer le travail.
        </p>
      </section>

      <section aria-labelledby="credits">
        <h2 id="credits">Crédits</h2>
        <ul>
          <li>Police : Archivo, sous licence SIL Open Font License.</li>
          <li>Icônes : Lucide, sous licence ISC.</li>
          <li>Site conçu et développé par {site.name} avec Next.js.</li>
        </ul>
      </section>

      <section aria-labelledby="donnees">
        <h2 id="donnees">Données personnelles</h2>
        <p>
          Le traitement des données transmises par le formulaire de contact est décrit dans la{" "}
          <Link href="/confidentialite">politique de confidentialité</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
