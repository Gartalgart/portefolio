"use client";
import { useEffect, useRef, useState } from "react";

/*
  Gyroscope modélisé dans Blender, exporté en GLB (public/models/artefact.glb).
  Three.js n'est chargé que lorsque la section approche de l'écran. En mouvement réduit
  ou sans WebGL, l'image de repli reste affichée.
*/
export default function Artefact3D() {
  const box = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let stop = () => {};
    let started = false;

    const start = async () => {
      if (started) return;
      started = true;
      const [THREE, { GLTFLoader }, { RoomEnvironment }] = await Promise.all([
        import("three"),
        import("three/examples/jsm/loaders/GLTFLoader.js"),
        import("three/examples/jsm/environments/RoomEnvironment.js"),
      ]);

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      } catch {
        return; // pas de WebGL : on garde l'image de repli
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.NeutralToneMapping;
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.className = "absolute inset-0 h-full w-full touch-pan-y";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environmentIntensity = 0.55;
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
      camera.position.set(0, 0.4, 7.6);

      const rig = new THREE.Group();
      scene.add(rig);

      const gltf = await new GLTFLoader().loadAsync("/models/artefact.glb");
      rig.add(gltf.scene);
      // Noyau et perles : le bleu doit rester saturé malgré l'éclairage d'environnement.
      gltf.scene.traverse((o) => {
        const m = o as import("three").Mesh;
        if (m.isMesh && /Noyau|Perle/.test(m.name)) (m.material as import("three").MeshStandardMaterial).envMapIntensity = 0.35;
      });
      const rings = ["Anneau_A", "Anneau_B", "Anneau_C"].map((n) => gltf.scene.getObjectByName(n));
      const speeds = [0.7, -0.5, 0.35];

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      // Le pointeur incline l'objet ; le glisser le fait tourner.
      let tx = 0, ty = 0, vx = 0, vy = 0, drag = false, lx = 0, ly = 0;
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        if (drag) {
          vy += (e.clientX - lx) * 0.01;
          vx += (e.clientY - ly) * 0.01;
          lx = e.clientX;
          ly = e.clientY;
        } else {
          ty = ((e.clientX - r.left) / r.width - 0.5) * 0.9;
          tx = ((e.clientY - r.top) / r.height - 0.5) * 0.6;
        }
      };
      const onDown = (e: PointerEvent) => {
        drag = true;
        lx = e.clientX;
        ly = e.clientY;
        el.setPointerCapture(e.pointerId);
      };
      const onUp = () => (drag = false);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerdown", onDown);
      el.addEventListener("pointerup", onUp);
      el.addEventListener("pointercancel", onUp);

      let raf = 0, visible = true, last = performance.now();
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(tick);
      });
      io.observe(el);

      const tick = (now: number) => {
        raf = 0;
        if (!visible) return;
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        rings.forEach((r, i) => r && (r.rotation.y += speeds[i] * dt));
        rig.rotation.y += (ty + vy - rig.rotation.y) * 0.06 + dt * 0.15;
        rig.rotation.x += (tx + vx - rig.rotation.x) * 0.06;
        vx *= 0.94;
        vy *= 0.94;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      setReady(true);

      stop = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerdown", onDown);
        el.removeEventListener("pointerup", onUp);
        el.removeEventListener("pointercancel", onUp);
        gltf.scene.traverse((o) => {
          const m = o as import("three").Mesh;
          if (m.isMesh) {
            m.geometry.dispose();
            (Array.isArray(m.material) ? m.material : [m.material]).forEach((x) => x.dispose());
          }
        });
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          start();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  return (
    <div ref={box} className="relative mx-auto aspect-square w-full max-w-[560px] cursor-grab select-none active:cursor-grabbing">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/artefact-poster.webp"
        alt="Gyroscope 3D : un noyau bleu entouré de trois anneaux chromés noirs"
        width={800}
        height={800}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
}
