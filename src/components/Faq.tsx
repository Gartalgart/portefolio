import { Plus } from "lucide-react";
import { faq } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-titre" className="border-t-[3px] border-anthracite bg-tole px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-titre" className="lettrage text-balance text-[clamp(2.1rem,3.2vw,3rem)]">
            Questions fréquentes
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg leading-relaxed text-muted">Les réponses aux questions qu&apos;on me pose le plus.</p>
        </div>
        <div className="border-t-[3px] border-anthracite">
          {faq.map((f) => (
            <details key={f.q} className="group border-b-[3px] border-anthracite">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-extrabold md:text-xl">
                {f.q}
                <Plus size={24} strokeWidth={2.5} className="shrink-0 text-vinyle transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-[62ch] pb-7 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
