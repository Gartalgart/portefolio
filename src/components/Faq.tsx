import { Plus } from "lucide-react";
import { faq } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-titre" className="mx-auto max-w-[1296px] px-5 pb-20 md:px-12 md:pb-32">
      <div className="grid gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="faq-titre" className="titre text-[clamp(2rem,4.2vw,3.2rem)]">
            Questions fréquentes
          </h2>
          <p className="mt-4 max-w-[40ch] text-lg text-muted">Ce que les clients demandent avant de se lancer.</p>
        </div>
        <div className="border-t border-filet">
          {faq.map((f) => (
            <details key={f.q} className="group border-b border-filet">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-semibold md:text-xl">
                {f.q}
                <Plus size={22} strokeWidth={2} className="shrink-0 text-ardoise transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-[62ch] text-pretty pb-6 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
