import Link from "next/link";
import { legalPages, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-anthracite px-5 pb-28 pt-10 text-white md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="lettrage text-2xl">{site.brand}</p>
          <p className="mt-2 text-[#c9ced3]">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>
        <ul className="flex gap-6">
          {legalPages.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className="inline-block py-2 font-semibold underline decoration-vinyle hover:text-[#ffd9cf]">
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
