export default function SectionHead({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 id={id} className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-[56ch] text-pretty text-lg text-muted">{intro}</p>}
    </div>
  );
}
