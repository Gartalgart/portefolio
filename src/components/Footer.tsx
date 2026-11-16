import Link from "next/link";
import { legalPages, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="px-5 pb-28 pt-7 text-sm text-muted md:px-12 md:pb-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.brand} · {site.location}
        </p>
        <ul className="flex gap-6">
          {legalPages.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="inline-flex min-h-11 items-center hover:text-nuit hover:underline">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
