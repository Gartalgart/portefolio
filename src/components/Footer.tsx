import Link from "next/link";
import { legalPages, site } from "@/lib/content";
import { metiers, prestations } from "@/lib/pages";

// Liens du pied de page : présents sur toutes les pages, ils relient chaque page dédiée à toutes les autres.
const colonnes = [
  { titre: "Selon votre activité", liens: metiers.map((l) => ({ href: `/${l.slug}`, label: l.label })) },
  { titre: "Prestations", liens: prestations.map((l) => ({ href: `/${l.slug}`, label: l.label })) },
  {
    titre: site.brand,
    liens: [
      { href: "/", label: "Accueil" },
      { href: "/realisations", label: "Réalisations" },
      ...legalPages,
    ],
  },
];

export default function Footer() {
  return (
    <footer className="px-5 pb-28 pt-12 text-sm text-muted md:px-12 md:pb-8 md:pt-16">
      <div className="mx-auto max-w-[1200px]">
        <nav aria-label="Pages du site" className="grid gap-x-12 gap-y-8 border-b border-filet pb-8 sm:grid-cols-3">
          {colonnes.map((c) => (
            <div key={c.titre}>
              <h2 className="font-semibold text-nuit">{c.titre}</h2>
              <ul className="mt-1">
                {c.liens.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex min-h-11 items-center hover:text-nuit hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <p className="pt-6">
          © {new Date().getFullYear()} {site.brand} · {site.location}
        </p>
      </div>
    </footer>
  );
}
