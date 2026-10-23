"use server";
import { Resend } from "resend";
import { site } from "@/lib/content";

export type ContactState = { status: "idle" | "ok" | "error"; message?: string };

const resend = new Resend(process.env.RESEND_API_KEY);
// L'expéditeur doit appartenir au domaine vérifié dans Resend (rd-solutions.fr).
const from = process.env.CONTACT_FROM ?? `${site.brand} <${site.email}>`;

const text = (v: FormDataEntryValue | null, max: number) => String(v ?? "").trim().slice(0, max);

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Champ piège invisible : les robots le remplissent, pas les visiteurs.
  if (text(formData.get("website"), 200)) return { status: "ok" };

  const name = text(formData.get("name"), 120);
  const email = text(formData.get("email"), 200);
  const message = text(formData.get("message"), 5000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Merci de renseigner votre nom, un email valide et votre message." };
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
    return { status: "error", message: `L'envoi a échoué. Écrivez-moi directement à ${site.email}.` };
  }
  return { status: "ok" };
}
