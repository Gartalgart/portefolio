export default function SectionHead({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 id={id} className="text-balance display text-[clamp(2.5rem,5vw,4.5rem)]">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-[56ch] text-pretty text-lg text-muted">{intro}</p>}
    </div>
  );
}
