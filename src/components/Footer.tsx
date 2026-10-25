import Link from "next/link";
import { legalPages, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="night border-t border-line px-5 py-8">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
        <ul className="flex gap-5">
          {legalPages.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="inline-block py-2 hover:text-fg">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
