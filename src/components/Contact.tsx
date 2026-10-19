"use client";
import { CalendarCheck, Mail, Send } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/content";
import SectionHead from "./SectionHead";

const Github = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);
const Linkedin = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-base outline-none transition placeholder:text-muted focus:border-accent";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Site statique : le formulaire ouvre le client mail du visiteur.
  // Pour un envoi direct, brancher un service (Formspree, Resend...) ici.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Projet web — ${d.get("name")}`);
    const body = encodeURIComponent(`${d.get("message")}\n\n${d.get("name")}\n${d.get("email")}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-titre" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl rounded-2xl border border-line bg-surface p-6 sm:p-10 md:p-14">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead
              id="contact-titre"
              title="Parlons de votre projet"
              intro={`Décrivez votre besoin en quelques lignes : je vous réponds avec une première idée et un ordre de prix. Les sites vitrine démarrent à ${site.startingPrice}.`}
            />
            <a
              href={site.calendly}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition hover:brightness-110"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              Réserver un appel de 15 min
            </a>
            <ul className="mt-8 space-y-3 text-muted">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:text-fg">
                  <Mail size={18} aria-hidden="true" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-fg">
                  <Github size={18} /> GitHub
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-fg">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Nom</label>
              <input id="name" name="name" required autoComplete="name" className={field} placeholder="Votre nom" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="vous@exemple.fr" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium">Votre projet</label>
              <textarea id="message" name="message" required rows={5} className={field} placeholder="Votre activité, ce que vous attendez du site, vos délais…" />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-medium transition hover:border-accent hover:text-accent"
            >
              <Send size={16} aria-hidden="true" /> Envoyer le message
            </button>
            <p role="status" className="min-h-5 text-sm text-muted">
              {sent && "Votre messagerie s'ouvre pour finaliser l'envoi."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
