import { bookingHref } from "@/lib/content";

// Sur téléphone, l'action reste à portée de pouce : une barre collée en bas de l'écran.
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] border-t-[3px] border-anthracite bg-carrosserie md:hidden">
      <a href={bookingHref} className="bg-vinyle px-5 py-4 text-center text-lg font-bold text-white">
        Réserver un appel
      </a>
      <a href="#contact" className="grid place-items-center px-5 font-bold text-anthracite underline decoration-vinyle">
        Écrire
      </a>
    </div>
  );
}
