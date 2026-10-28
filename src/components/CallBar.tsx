"use client";
import { useEffect, useState } from "react";
import { bookingHref } from "@/lib/content";

/*
  Sur téléphone, l'action reste à portée de pouce : une barre collée en bas de l'écran.
  Elle n'apparaît qu'une fois le premier écran passé (il a déjà son bouton et l'email lettré,
  qu'elle cacherait) et s'efface sur la section contact, où le formulaire prend le relais.
*/
export default function CallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('section[aria-labelledby="titre"]');
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;
    const visible = new Map<Element, boolean>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) visible.set(e.target, e.isIntersecting);
      setShow(!visible.get(hero) && !visible.get(contact));
    });
    io.observe(hero);
    io.observe(contact);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] border-t-[3px] border-anthracite bg-carrosserie transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <a href={bookingHref} tabIndex={show ? 0 : -1} className="bg-vinyle px-5 py-4 text-center text-lg font-bold text-white">
        Réserver un appel
      </a>
      <a href="#contact" tabIndex={show ? 0 : -1} className="grid place-items-center px-5 font-bold text-anthracite underline decoration-vinyle">
        Écrire
      </a>
    </div>
  );
}
