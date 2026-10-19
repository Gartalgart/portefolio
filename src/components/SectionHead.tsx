export default function SectionHead({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-[-0.025em] md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-[60ch] text-pretty text-lg text-muted">{intro}</p>}
    </div>
  );
}
