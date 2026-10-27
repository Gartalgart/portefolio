"use client";
import { ArrowRight, Check, Mail } from "lucide-react";
import { useActionState } from "react";
import { bookingHref, bookingReady, site, socials } from "@/lib/content";
import { sendContact, type ContactState } from "@/app/actions";

// Uniquement des engagements déjà confirmés (voir PRODUCT.md).
const included = [
  "Un seul interlocuteur, du devis à la maintenance",
  "Un prix annoncé avant de commencer",
  `Sites vitrines à partir de ${site.startingPrice}`,
  "Pensé pour le mobile et pour Google",
  "Hauts-de-France, Île-de-France ou à distance",
];

// Case d'un bon de demande : libellé lettré en haut, saisie dessous, le tout dans une même cellule.
const cell = "block border-[3px] border-anthracite bg-tole px-4 pb-3 pt-2.5 text-anthracite transition-colors focus-within:border-vinyle";
const label = "lettrage-etroit block text-sm text-jante";
const input = "mt-1.5 w-full bg-transparent text-lg text-anthracite outline-none placeholder:text-[#6b7178]";

export default function Contact() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });

  return (
    <section id="contact" aria-labelledby="contact-titre" className="vinyle border-t-[3px] border-anthracite px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1360px]">
        <h2 id="contact-titre" className="lettrage text-balance text-[clamp(2rem,5.6vw,5rem)]">
          Demande d&apos;intervention
        </h2>
        <div className="mt-10 grid gap-14 lg:mt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <p className=" max-w-[46ch] text-pretty text-lg leading-relaxed">
              Décrivez votre besoin en quelques lignes ou réservez un appel de 15 minutes : je vous réponds avec une première idée et un
              ordre de prix.
            </p>

            {!bookingReady && (
              <a
                href={bookingHref}
                className="mt-8 inline-flex items-center gap-3 bg-anthracite px-7 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-anthracite"
              >
                Réserver un appel de 15 min
                <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />
              </a>
            )}

            <h3 className="lettrage-etroit mt-12 text-xl">Ce qui est compris</h3>
            <ul className="mt-4 space-y-3 border-t-[3px] border-white pt-5">
              {included.map((i) => (
                <li key={i} className="flex gap-3 text-lg">
                  <Check size={22} strokeWidth={3} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>

            <ul className="mt-10 space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 py-1 text-lg font-bold underline hover:no-underline"
                >
                  <Mail size={20} strokeWidth={2.5} aria-hidden="true" /> {site.email}
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1 font-bold underline hover:no-underline"
                  >
                    {s.label}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            {bookingReady && (
              <div className="border-[3px] border-anthracite bg-white">
                <iframe src={site.calendly} title="Réserver un appel de 15 minutes" loading="lazy" className="h-[640px] w-full" />
              </div>
            )}

            {/* Bon de demande : des cases comme sur un carnet de bons, sur la tôle blanche. */}
            <form action={action} aria-label="Écrire un message" className="border-[3px] border-anthracite bg-carrosserie text-anthracite">
              <p className="lettrage-etroit flex items-center justify-between gap-4 bg-anthracite px-5 py-3 text-lg tracking-[0.06em] text-white">
                Bon de demande
                <span className="text-sm font-semibold normal-case tracking-normal">Les trois cases sont nécessaires</span>
              </p>
              <div className="grid gap-4 p-5 md:p-7">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className={cell}>
                    <span className={label}>Nom</span>
                    <input name="name" required autoComplete="name" className={input} placeholder="Votre nom" />
                  </label>
                  <label className={cell}>
                    <span className={label}>Email</span>
                    <input name="email" type="email" required autoComplete="email" className={input} placeholder="vous@exemple.fr" />
                  </label>
                </div>
                <label className={cell}>
                  <span className={label}>Votre projet</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className={`${input} resize-y`}
                    placeholder="Votre activité, ce que vous attendez du site, vos délais…"
                  />
                </label>
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex w-full items-center justify-center gap-3 bg-vinyle px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-vinyle-fonce disabled:cursor-wait disabled:opacity-70"
                >
                  {pending ? "Envoi en cours…" : "Envoyer la demande"}
                  {!pending && <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />}
                </button>
                {/* Une erreur est annoncée tout de suite (alert), la confirmation sans interrompre (status). */}
                <p
                  role={state.status === "error" ? "alert" : "status"}
                  className={`min-h-6 font-semibold ${state.status === "error" ? "text-vinyle-fonce" : "text-anthracite"}`}
                >
                  {state.status === "ok" && "Merci, votre demande est bien partie. Je vous réponds rapidement."}
                  {state.status === "error" && state.message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
