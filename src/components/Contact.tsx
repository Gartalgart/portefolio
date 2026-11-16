"use client";
import { ArrowRight, Check, Mail } from "lucide-react";
import { useActionState, useEffect, useRef } from "react";
import { site, socials } from "@/lib/content";
import { sendContact, type ContactState } from "@/app/actions";

// Uniquement des engagements déjà confirmés (voir PRODUCT.md).
const included = [
  "Un seul interlocuteur, du devis à la maintenance",
  "Un devis gratuit, avec le prix annoncé avant de commencer",
  "Pensé pour le mobile et pour Google",
  "Hauts-de-France, Île-de-France ou à distance",
];

// Champ du formulaire : libellé au-dessus, saisie sur fond brume, le filet marine apparaît à la saisie.
const cell = "block rounded-xl bg-brume px-4 pb-3 pt-2.5 ring-1 ring-transparent transition-shadow focus-within:ring-2 focus-within:ring-marine";
const label = "block text-sm font-semibold text-muted";
const input = "mt-1 w-full bg-transparent text-lg text-nuit outline-none placeholder:text-muted";

export default function Contact() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });

  // Anti-spam : le temps passé devant le formulaire est joint à l'envoi (durée, pas heure : l'horloge du visiteur n'importe pas).
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);
  const send = (data: FormData) => {
    // Tant que l'heure d'affichage n'est pas posée (envoi rejoué avant la fin du chargement), la durée vaut zéro.
    data.set("elapsed", String(shownAt.current ? Date.now() - shownAt.current : 0));
    action(data);
  };

  return (
    <section id="contact" aria-labelledby="contact-titre" className="px-3 pb-3">
      <div className="sur-nuit rounded-tuile bg-nuit px-5 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1fr)] gap-x-20 gap-y-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <h2 id="contact-titre" className="titre text-[clamp(2.2rem,5vw,4rem)]">
              Parlons de votre site.
            </h2>
            <p className="mt-5 max-w-[44ch] text-pretty text-lg text-muted">
              Décrivez votre besoin en quelques lignes, par le formulaire ou par email : vous recevez en retour un devis gratuit, sans
              engagement.
            </p>

            <ul className="mt-10 space-y-3 border-t border-filet pt-6">
              {included.map((i) => (
                <li key={i} className="flex gap-3">
                  <Check size={20} strokeWidth={2.4} className="mt-1 shrink-0 text-muted" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-2">
              <li>
                <a href={`mailto:${site.email}`} className="lien gap-2.5 py-1 text-lg">
                  <Mail size={19} strokeWidth={2.2} aria-hidden="true" /> {site.email}
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="lien py-1">
                    {s.label}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Le formulaire : une tuile blanche posée sur le bleu nuit. Ses couleurs ne suivent pas la zone sombre. */}
          <form
            action={send}
            aria-label="Demande de devis"
            className="self-start rounded-tuile bg-white p-5 text-nuit [--line:var(--filet)] [--muted:var(--ardoise-texte)] md:p-8"
          >
            <div className="grid grid-cols-[minmax(0,1fr)] gap-3">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
              <div className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2">
                <label className={cell}>
                  <span className={label}>Nom</span>
                  <input name="name" defaultValue={state.values?.name} required autoComplete="name" className={input} placeholder="Votre nom" />
                </label>
                <label className={cell}>
                  <span className={label}>Email</span>
                  <input name="email" type="email" defaultValue={state.values?.email} required autoComplete="email" className={input} placeholder="vous@exemple.fr" />
                </label>
              </div>
              <label className={cell}>
                <span className={label}>Votre projet</span>
                <textarea
                  name="message"
                  defaultValue={state.values?.message}
                  required
                  rows={6}
                  className={`${input} resize-y`}
                  placeholder="Votre activité, ce que vous attendez du site, vos délais…"
                />
              </label>
              <button type="submit" disabled={pending} className="bouton mt-2 w-full py-4 text-lg disabled:cursor-wait disabled:opacity-70">
                {pending ? "Envoi en cours…" : "Demander mon devis gratuit"}
                {!pending && <ArrowRight size={19} strokeWidth={2.2} aria-hidden="true" />}
              </button>
              <p className="text-sm text-muted">
                Les trois champs sont nécessaires. Votre nom, votre email et votre message servent uniquement à vous répondre.{" "}
                <a href="/confidentialite" className="font-semibold text-marine underline">
                  Confidentialité
                </a>
              </p>
              {/* Une erreur est annoncée tout de suite (alert), la confirmation sans interrompre (status). */}
              <p role={state.status === "error" ? "alert" : "status"} className="min-h-6 font-semibold">
                {state.status === "ok" && "Merci, votre demande est bien partie. Une réponse vous est envoyée rapidement."}
                {state.status === "error" && state.message}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
