import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
        <ul className="flex gap-5">
          {/* [À COMPLÉTER] créer les pages légales (SIRET, hébergeur, RGPD) */}
          <li><a href="#" className="hover:text-fg">Mentions légales</a></li>
          <li><a href="#" className="hover:text-fg">Confidentialité</a></li>
        </ul>
      </div>
    </footer>
  );
}
