import { Plus } from "lucide-react";
import { faq } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-titre" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-titre" className="display text-balance text-[clamp(2.5rem,5vw,4.5rem)]">
            Questions fréquentes
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg text-muted">Les réponses aux questions qu&apos;on me pose le plus.</p>
        </div>
        <div className="space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="paper group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 rounded-[4px] px-6 py-5 text-lg font-bold tracking-[-0.01em]">
                {f.q}
                <Plus size={20} className="shrink-0 text-link transition group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-[62ch] px-6 pb-6 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
