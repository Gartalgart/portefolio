import { Tuile, type Project } from "./Projects";

/*
  Grille de réalisations des pages intérieures. La mise en page suit le nombre de tuiles :
  une seule prend toute la largeur, deux se partagent la ligne, au-delà elles passent en petit format.
*/
export default function ProjectGrid({ items }: { items: Project[] }) {
  if (items.length === 1) {
    return (
      <div className="px-3">
        <Tuile p={items[0]} fond="nuit" taille="large" />
      </div>
    );
  }
  const deux = items.length === 2;
  return (
    <ul className={`grid gap-3 px-3 ${deux ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {items.map((p) => (
        <li key={p.slug}>
          <Tuile p={p} fond="brume" taille={deux ? "moitie" : "petite"} />
        </li>
      ))}
    </ul>
  );
}
