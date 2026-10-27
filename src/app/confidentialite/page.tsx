import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { bookingReady, legal, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Confidentialité — ${site.brand}`,
  description: "Quelles données le formulaire de contact collecte, pourquoi, combien de temps, et vos droits.",
  alternates: { canonical: "/confidentialite" },
};

export default function Confidentialite() {
  return (
    <LegalPage title="Confidentialité" intro="Ce site collecte le strict nécessaire pour vous répondre, et rien d'autre.">
      <section aria-labelledby="responsable">
        <h2 id="responsable">Responsable du traitement</h2>
        <p>
          {legal.publisher}, joignable à <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>

      <section aria-labelledby="collecte">
        <h2 id="collecte">Ce qui est collecté, et pourquoi</h2>
        <p>
          Lorsque vous utilisez le formulaire de contact, vous transmettez votre nom, votre adresse email et le message que vous
          rédigez. Ces informations servent uniquement à comprendre votre demande et à y répondre. Elles ne sont ni revendues, ni
          utilisées pour vous envoyer des messages que vous n&apos;avez pas demandés.
        </p>
        <p>
          Base légale : les mesures prises à votre demande avant un éventuel contrat (article 6.1.b du RGPD).
        </p>
        <p>
          Le message est acheminé par email via le prestataire {legal.mailer.name} (
          <a href={legal.mailer.url}>politique de confidentialité</a>), puis reçu et lu par {legal.publisher} uniquement.
        </p>
      </section>

      <section aria-labelledby="duree">
        <h2 id="duree">Durée de conservation</h2>
        <p>
          Votre demande est conservée le temps de la traiter. Sans suite donnée, elle est supprimée au plus tard {legal.retention}.
          Si un projet démarre, les échanges sont conservés pendant la durée de la relation puis le temps des obligations légales.
        </p>
      </section>

      <section aria-labelledby="cookies">
        <h2 id="cookies">Cookies et mesure d&apos;audience</h2>
        <p>
          Ce site ne dépose aucun cookie et n&apos;utilise aucun outil de mesure d&apos;audience. Rien n&apos;est mémorisé dans votre
          navigateur.
        </p>
        <p>
          Les liens de la section Réalisations ouvrent les sites présentés dans un nouvel onglet : chacun applique alors sa propre
          politique de cookies.
          {bookingReady && " Le calendrier de réservation est fourni par Calendly, qui applique également la sienne."}
        </p>
      </section>

      <section aria-labelledby="hebergement">
        <h2 id="hebergement">Hébergement</h2>
        <p>
          Le site est hébergé par {legal.host.name} ({legal.host.address}). Les journaux techniques du serveur (adresse IP, pages
          consultées) sont gérés par l&apos;hébergeur pour la sécurité et le bon fonctionnement du service.
        </p>
      </section>

      <section aria-labelledby="droits">
        <h2 id="droits">Vos droits</h2>
        <p>
          Vous pouvez demander à accéder aux données qui vous concernent, les corriger, les faire supprimer, en limiter le
          traitement, vous y opposer ou en demander la portabilité. Il suffit d&apos;écrire à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. Si vous estimez que vos droits ne sont pas respectés, vous pouvez
          saisir la CNIL (<a href="https://www.cnil.fr">cnil.fr</a>).
        </p>
      </section>
    </LegalPage>
  );
}
