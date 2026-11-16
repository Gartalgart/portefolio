"use server";
import { headers } from "next/headers";
import { Resend } from "resend";
import { site } from "@/lib/content";

// values : la saisie renvoyée avec une erreur, pour que le visiteur ne retape pas son message (le formulaire se vide après chaque envoi).
export type ContactState = { status: "idle" | "ok" | "error"; message?: string; values?: { name: string; email: string; message: string } };

const resend = new Resend(process.env.RESEND_API_KEY);
// L'expéditeur doit appartenir au domaine vérifié dans Resend (rd-solutions.fr).
const from = process.env.CONTACT_FROM ?? `${site.brand} <${site.email}>`;

const MIN_FILL_MS = 3000;
const LINK = /https?:\/\/|www\./i;

const text = (v: FormDataEntryValue | null, max: number) => String(v ?? "").trim().slice(0, max);

/*
  Limite d'envois : trois demandes par adresse IP toutes les dix minutes. Le compteur vit dans la mémoire
  de l'instance du serveur : il freine une rafale, mais il repart de zéro à chaque nouvelle instance.
  Une limite stricte demanderait un stockage partagé.
*/
const MAX_SENDS = 3;
const WINDOW_MS = 10 * 60 * 1000;
const sends = new Map<string, number[]>();

function tooMany(ip: string) {
  const now = Date.now();
  const recent = (sends.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_SENDS) {
    sends.set(ip, recent);
    return true;
  }
  sends.set(ip, [...recent, now]);
  // La table ne grossit pas sans fin : les adresses sans envoi récent sont oubliées.
  if (sends.size > 500) for (const [k, v] of sends) if (v.every((t) => now - t >= WINDOW_MS)) sends.delete(k);
  return false;
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Champ piège invisible : les robots le remplissent, pas les visiteurs.
  if (text(formData.get("website"), 200)) return { status: "ok" };

  const name = text(formData.get("name"), 120);
  const email = text(formData.get("email"), 200);
  const message = text(formData.get("message"), 5000);
  const values = { name, email, message };

  // Durée de saisie mesurée par le navigateur (voir Contact.tsx) : un robot envoie en moins de trois secondes,
  // ou sans exécuter le script qui la mesure. Personne n'écrit son projet aussi vite.
  const elapsed = Number(formData.get("elapsed"));
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return { status: "error", values, message: `L'envoi a été trop rapide. Patientez quelques secondes et renvoyez, ou écrivez à ${site.email}.` };
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", values, message: "Merci de renseigner votre nom, un email valide et votre message." };
  }

  // Les messages automatisés portent presque toujours un lien (spam du 10/11/2026) ; une vraie demande, rarement.
  if (LINK.test(name) || LINK.test(message)) {
    return {
      status: "error",
      values,
      message: "Merci de retirer les adresses web (https://…, www.…) de votre message : le nom du site suffit.",
    };
  }

  // Vérifiée en dernier : seules les demandes valides, prêtes à partir, sont comptées.
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0].trim() || "inconnue";
  if (tooMany(ip)) {
    return { status: "error", values, message: `Plusieurs demandes viennent d'être envoyées. Réessayez dans quelques minutes, ou écrivez à ${site.email}.` };
  }

  const { error } = await resend.emails.send({
    from,
    to: site.email,
    replyTo: email,
    subject: `Projet web — ${name}`,
    text: `${message}\n\n${name}\n${email}`,
  });

  if (error) {
    console.error("Resend:", error);
    return { status: "error", values, message: `L'envoi a échoué. Écrivez directement à ${site.email}.` };
  }
  return { status: "ok" };
}
