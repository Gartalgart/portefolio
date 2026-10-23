"use client";
import { useEffect, useRef, useState } from "react";

/*
  Boutique miniature modélisée dans Blender, exportée en GLB (public/models/boutique.glb).
  La scène est dans la nuit ; à l'arrivée à l'écran, les lumières s'allument une à une
  (lampadaire qui grésille, lampes d'enseigne, boutique, étage, lucarne). L'interrupteur
  les éteint et les rallume. Three.js n'est chargé que lorsque la section approche de
  l'écran. En mouvement réduit ou sans WebGL, l'image de repli reste affichée.
*/

const NIGHT = "#070d1c";

// Matériau émissif (nom Blender) → délai d'allumage (s) et lumière associée.
const SEQUENCE = [
  { mat: "Ampoule_Rue", light: "Lumiere_Rue", delay: 0.2, flicker: true },
  { mat: "Ampoule_Enseigne", light: "Lumiere_Enseigne", delay: 1.1 },
  { mat: "Ampoule_Interieur", light: "Lumiere_Boutique", delay: 1.6 },
  { mat: "Lumiere_Etage", light: null, delay: 2.2 },
  { mat: "Lumiere_Lucarne", light: null, delay: 2.8 },
] as const;

// Grésillement du lampadaire : un pas toutes les 70 ms avant de rester allumé.
const FLICKER = [1, 0, 0.7, 0, 0, 1, 0.2, 1, 0, 1];

export default function Boutique3D() {
  const box = useRef<HTMLDivElement>(null);
  const toggle = useRef<() => void>(() => {});
  const [ready, setReady] = useState(false);
  const [lit, setLit] = useState(true);

  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let stop = () => {};
    let started = false;

    const start = async () => {
      if (started) return;
      started = true;
      const [THREE, { GLTFLoader }, { RoomEnvironment }, { EffectComposer }, { RenderPass }, { UnrealBloomPass }, { OutputPass }] =
        await Promise.all([
          import("three"),
          import("three/examples/jsm/loaders/GLTFLoader.js"),
          import("three/examples/jsm/environments/RoomEnvironment.js"),
          import("three/examples/jsm/postprocessing/EffectComposer.js"),
          import("three/examples/jsm/postprocessing/RenderPass.js"),
          import("three/examples/jsm/postprocessing/UnrealBloomPass.js"),
          import("three/examples/jsm/postprocessing/OutputPass.js"),
        ]);

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "low-power" });
      } catch {
        return; // pas de WebGL : on garde l'image de repli
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.toneMapping = THREE.NeutralToneMapping;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.className = "absolute inset-0 h-full w-full touch-pan-y";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(NIGHT);
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environmentIntensity = 0.08;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 80);

      // Nuit : ciel bleu, lune froide qui porte les ombres, contre-jour pour détacher la silhouette.
      scene.add(new THREE.HemisphereLight("#5a74c0", "#0b1022", 0.5));
      const moon = new THREE.DirectionalLight("#9fb4ff", 0.9);
      moon.position.set(-6, 9, 7);
      moon.castShadow = true;
      moon.shadow.mapSize.set(2048, 2048);
      Object.assign(moon.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 1, far: 30 });
      moon.shadow.bias = -0.0004;
      moon.shadow.normalBias = 0.02;
      const rim = new THREE.DirectionalLight("#4d6bff", 1.4);
      rim.position.set(-4, 5, -8);

      const rig = new THREE.Group();
      rig.add(moon, moon.target, rim);
      scene.add(rig);

      const gltf = await new GLTFLoader().loadAsync("/models/boutique.glb");
      const model = gltf.scene;
      rig.add(model);

      // Centre le diorama sur l'origine et cadre la caméra sur sa sphère englobante.
      const bounds = new THREE.Box3().setFromObject(model);
      const sphere = bounds.getBoundingSphere(new THREE.Sphere());
      model.position.sub(sphere.center);
      model.updateMatrixWorld(true);

      const mats = new Map<string, import("three").MeshStandardMaterial>();
      model.traverse((o) => {
        const m = o as import("three").Mesh;
        if (!m.isMesh) return;
        const mat = m.material as import("three").MeshStandardMaterial;
        mats.set(mat.name, mat);
        if (mat.transparent) {
          mat.depthWrite = false;
          return;
        }
        m.castShadow = !/Ampoule|Lumiere/.test(mat.name);
        m.receiveShadow = true;
      });

      // Vitres éteintes : couleur de nuit ; allumées : couleur et émission d'origine.
      const dark = new THREE.Color("#141c33");
      const steps = SEQUENCE.map((s) => {
        const mat = mats.get(s.mat);
        const anchor = s.light ? model.getObjectByName(s.light) : null;
        let light: import("three").PointLight | null = null;
        if (anchor) {
          light = new THREE.PointLight("#ffc27a", 0, s.light === "Lumiere_Rue" ? 7 : 4.5, 1.6);
          anchor.add(light);
          // Les lumières sans ombre traversent les murs : celle de la boutique éclaire depuis le trottoir, sous le store.
          if (s.light === "Lumiere_Boutique") light.position.set(0, -0.2, 1.3);
          if (s.light === "Lumiere_Rue") {
            light.castShadow = true;
            light.shadow.mapSize.set(512, 512);
            light.shadow.bias = -0.002;
          }
        }
        return {
          ...s,
          mat,
          light,
          color: mat?.color.clone() ?? new THREE.Color(),
          emissive: mat ? Math.max(mat.emissiveIntensity, 1) * (s.light === "Lumiere_Rue" ? 0.5 : s.mat === "Lumiere_Lucarne" ? 0.7 : 1.2) : 0,
          power: s.light === "Lumiere_Rue" ? 11 : s.light === "Lumiere_Boutique" ? 14 : 5,
          from: 0,
          to: 0,
          at: 0,
          v: 0,
        };
      });
      const apply = (s: (typeof steps)[number]) => {
        if (s.mat) {
          s.mat.emissiveIntensity = s.emissive * s.v;
          s.mat.color.copy(dark).lerp(s.color, Math.min(1, s.v * 1.4));
        }
        if (s.light) s.light.intensity = s.power * s.v;
      };
      steps.forEach(apply);

      const sign = model.getObjectByName("Enseigne_Drapeau");
      const signRest = sign?.rotation.z ?? 0;

      const composer = new EffectComposer(renderer);
      const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.3, 0.15, 2.2);
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(bloom);
      composer.addPass(new OutputPass());

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        renderer.setSize(w, h, false);
        composer.setSize(w, h);
        camera.aspect = w / h;
        const half = THREE.MathUtils.degToRad(camera.fov / 2);
        const fit = Math.min(Math.tan(half), Math.tan(half) * camera.aspect);
        const dist = (sphere.radius * 0.8) / fit;
        camera.position.set(0, dist * 0.32, dist);
        camera.lookAt(0, -sphere.radius * 0.06, 0);
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      // Le pointeur incline la scène ; le glisser fait tourner autour de la boutique.
      const YAW = -0.5;
      let tx = 0, ty = 0, spin = 0, vy = 0, drag = false, lx = 0;
      let swing = 0, swingV = 0;
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        if (drag) {
          vy += (e.clientX - lx) * 0.006;
          lx = e.clientX;
        } else {
          ty = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
          tx = ((e.clientY - r.top) / r.height - 0.5) * 0.16;
        }
      };
      const onDown = (e: PointerEvent) => {
        drag = true;
        lx = e.clientX;
        el.setPointerCapture(e.pointerId);
      };
      const onUp = () => (drag = false);
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerdown", onDown);
      el.addEventListener("pointerup", onUp);
      el.addEventListener("pointercancel", onUp);

      let clock = 0;
      const switchTo = (on: boolean) => {
        const n = steps.length;
        steps.forEach((s, i) => {
          s.from = s.v;
          s.to = on ? 1 : 0;
          // On allume dans l'ordre, on éteint en sens inverse et plus vite.
          s.at = clock + (on ? s.delay : (n - 1 - i) * 0.12);
        });
      };
      let isLit = false;
      toggle.current = () => {
        isLit = !isLit;
        switchTo(isLit);
        setLit(isLit);
      };

      let raf = 0, visible = true, first = true, last = performance.now();
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && first) {
          first = false;
          isLit = true;
          switchTo(true);
        }
        if (visible && !raf) {
          last = performance.now();
          raf = requestAnimationFrame(tick);
        }
      }, { threshold: 0.35 });
      io.observe(el);

      const tick = (now: number) => {
        raf = 0;
        if (!visible) return;
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        clock += dt;

        for (const s of steps) {
          const t = (clock - s.at) / (s.to > s.from ? 0.45 : 0.25);
          if (t < 0) continue;
          const k = Math.min(1, t);
          let v = s.from + (s.to - s.from) * (1 - (1 - k) ** 3);
          if ("flicker" in s && s.to === 1) {
            const f = Math.floor((clock - s.at) / 0.07);
            if (f < FLICKER.length) v = FLICKER[f];
          }
          if (v !== s.v) {
            s.v = v;
            apply(s);
          }
        }

        // L'enseigne se balance : un ressort amorti, relancé par la rotation.
        const prev = rig.rotation.y;
        spin += vy * dt * 60 * 0.06;
        vy *= 0.92;
        const sway = Math.sin(clock * 0.25) * 0.3; // va-et-vient lent devant la façade
        rig.rotation.y += (YAW + ty + spin + sway - rig.rotation.y) * 0.06;
        rig.rotation.x += (tx - rig.rotation.x) * 0.06;
        swingV += (-swing * 18 - swingV * 1.6) * dt - (rig.rotation.y - prev) * 2.2;
        swing += swingV * dt;
        if (sign) sign.rotation.z = signRest + swing + Math.sin(clock * 1.4) * 0.025;

        composer.render();
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
        model.traverse((o) => {
          const m = o as import("three").Mesh;
          if (m.isMesh) {
            m.geometry.dispose();
            (Array.isArray(m.material) ? m.material : [m.material]).forEach((x) => x.dispose());
          }
        });
        composer.dispose();
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
    <div className="relative mx-auto w-full max-w-[600px]">
      <div
        ref={box}
        className="relative aspect-square w-full cursor-grab select-none overflow-hidden rounded-xl active:cursor-grabbing [mask-image:radial-gradient(closest-side,#000_90%,transparent)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/boutique-poster.webp"
          alt="Boutique miniature en 3D, la nuit : façade bleue, store rayé, lampadaire allumé, vélo et terrasse sur le trottoir"
          width={800}
          height={800}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
        />
      </div>
      {ready && (
        <button
          type="button"
          onClick={() => toggle.current()}
          aria-pressed={lit}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-muted backdrop-blur transition-colors hover:border-white/40 hover:text-white"
        >
          {lit ? "Éteindre les lumières" : "Allumer les lumières"}
        </button>
      )}
    </div>
  );
}
