"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

/*
  Premier écran : « rd-solutions » en chrome, modélisé dans Blender puis découpé en fragments
  (public/models/rd-desktop.glb, rd-mobile.glb sur deux lignes). Les fragments arrivent de la
  nuit et s'assemblent, s'écartent autour du curseur, puis se dispersent vers le visiteur au
  défilement. Tout le mouvement est calculé dans le shader : un seul appel de rendu.
  Mouvement réduit ou pas de WebGL : image fixe du nom assemblé.
*/

const vertexHead = /* glsl */ `
  uniform float uTime;
  uniform float uAssemble;
  uniform float uScatter;
  uniform vec3 uMouse;
  uniform float uMouseForce;
  attribute vec3 aOffset;
  attribute vec3 aFrom;
  attribute vec3 aTo;
  attribute vec3 aAxis;
  attribute vec4 aRand;

  vec3 rotAxis(vec3 v, vec3 a, float ang) {
    float s = sin(ang), c = cos(ang);
    return v * c + cross(a, v) * s + a * dot(a, v) * (1.0 - c);
  }
`;

// Calcule la position du fragment (center) et son angle (ang), puis tourne la normale.
const normalChunk = /* glsl */ `
  #include <beginnormal_vertex>
  float delayIn = aRand.x;
  float pIn = clamp(uAssemble * 1.7 - delayIn, 0.0, 1.0);
  float eIn = 1.0 - pow(1.0 - pIn, 4.0);
  float pOut = smoothstep(aRand.y * 0.45, aRand.y * 0.45 + 0.55, uScatter);
  float eOut = pOut * pOut;

  vec2 d = aOffset.xy - uMouse.xy;
  float near = exp(-dot(d, d) / 0.09) * uMouseForce * (1.0 - eOut);
  vec3 push = normalize(vec3(d, 0.18)) * near * 0.22 + vec3(0.0, 0.0, near * 0.1);

  float idle = sin(uTime * 1.3 + aRand.z * 6.2831) * 0.006 * eIn;
  vec3 center = mix(aFrom, aOffset, eIn) + (aTo - aOffset) * eOut + push + vec3(0.0, 0.0, idle);
  float ang = (1.0 - eIn) * (4.0 + aRand.w * 6.0) + eOut * (3.0 + aRand.w * 5.0) + near * 1.6;
  objectNormal = rotAxis(objectNormal, aAxis, ang);
`;

const positionChunk = /* glsl */ `
  vec3 transformed = rotAxis(position, aAxis, ang) + center;
`;

export default function BrandIntro() {
  const track = useRef<HTMLElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const cue = useRef<HTMLDivElement>(null);
  // "poster" : image fixe (mouvement réduit, pas de WebGL) ; "live" : la scène tourne.
  const [mode, setMode] = useState<"wait" | "live" | "poster">("wait");
  // Réseau lent : si la scène n'est pas prête après quelques secondes, l'image fixe prend la place
  // du nom éteint, puis s'efface quand la scène démarre.
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    if (mode !== "wait") return;
    const id = window.setTimeout(() => setSlow(true), 2500);
    return () => window.clearTimeout(id);
  }, [mode]);

  useEffect(() => {
    const el = box.current;
    const section = track.current;
    if (!el || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMode("poster");
      return;
    }

    let stop = () => {};
    let cancelled = false;
    // Rend la main au navigateur entre deux étapes lourdes : le travail est découpé en tâches courtes
    // au lieu d'une seule qui bloque le défilement et les clics.
    const breathe = () => new Promise<void>((r) => setTimeout(r, 0));

    (async () => {
      const [THREE, { GLTFLoader }, { EffectComposer }, { RenderPass }, { UnrealBloomPass }, { OutputPass }] = await Promise.all([
        import("three"),
        import("three/examples/jsm/loaders/GLTFLoader.js"),
        import("three/examples/jsm/postprocessing/EffectComposer.js"),
        import("three/examples/jsm/postprocessing/RenderPass.js"),
        import("three/examples/jsm/postprocessing/UnrealBloomPass.js"),
        import("three/examples/jsm/postprocessing/OutputPass.js"),
      ]);
      if (cancelled) return;

      // Écran étroit ou portrait : modèle sur deux lignes, moins de fragments, sans halo ni verni.
      const compact = window.innerWidth < 768 || window.innerHeight > window.innerWidth * 1.1;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
      } catch {
        setMode("poster");
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1.5 : 1.75));
      // Sans courbe de tons : le fond reste exactement le bleu nuit de la section suivante.
      renderer.toneMapping = THREE.NoToneMapping;
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.className = "absolute inset-0 h-full w-full";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#070d1c");
      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 60);

      // Studio de reflets : le chrome n'a de couleur que ce qu'il reflète.
      const studio = new THREE.Scene();
      studio.background = new THREE.Color("#03060f");
      const panel = (w: number, h: number, color: string, power: number, pos: [number, number, number]) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, h),
          new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(power), side: THREE.DoubleSide }),
        );
        m.position.set(...pos);
        m.lookAt(0, 0, 0);
        studio.add(m);
      };
      panel(14, 3, "#ffffff", 1.4, [0, 7, 2]); // boîte à lumière au-dessus
      panel(16, 10, "#2c4fae", 0.55, [0, 0.5, 8]); // grand fond bleu derrière le visiteur : la teinte des faces
      panel(1.1, 10, "#ffffff", 1.6, [3.2, 0, 7]); // fine bande blanche : le reflet qui balaie
      panel(8, 8, "#1f4fd6", 1.6, [-7, -1, 2]); // mur bleu d'action
      panel(6, 6, "#7fa6ff", 1.1, [7, -2, -3]); // bleu clair en contre
      panel(16, 6, "#0d1a3d", 1, [0, -6, 6]); // sol bleu nuit devant
      await breathe();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envMap = pmrem.fromScene(studio, 0.03).texture;
      scene.environment = envMap;
      await breathe();

      // Halo bleu derrière le nom (grain léger pour éviter les bandes).
      const glow = new THREE.Mesh(
        new THREE.PlaneGeometry(40, 24),
        new THREE.ShaderMaterial({
          depthWrite: false,
          uniforms: { uFade: { value: 0 }, uNight: { value: new THREE.Color("#070d1c") }, uGlow: { value: new THREE.Color("#1f4fd6") } },
          vertexShader: `varying vec2 vPos; void main(){ vPos = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
          fragmentShader: `
            uniform float uFade; uniform vec3 uNight; uniform vec3 uGlow; varying vec2 vPos;
            float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
            void main(){
              vec2 p = vPos / vec2(7.0, 2.6);
              float g = exp(-dot(p, p) * 2.2);
              vec3 col = uNight + uGlow * g * 0.06 * uFade;
              col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
              gl_FragColor = vec4(col, 1.0);
              #include <colorspace_fragment>
            }`,
        }),
      );
      glow.position.z = -6;
      scene.add(glow);

      // Poussière lumineuse, pour la profondeur.
      const dustCount = compact ? 90 : 260;
      const dustPos = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount; i++) {
        dustPos[i * 3] = (Math.random() - 0.5) * 16;
        dustPos[i * 3 + 1] = (Math.random() - 0.5) * 9;
        dustPos[i * 3 + 2] = -5 + Math.random() * 7;
      }
      const dustGeo = new THREE.BufferGeometry();
      dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
      const dust = new THREE.Points(
        dustGeo,
        new THREE.PointsMaterial({ color: "#9fb8ff", size: 0.018, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }),
      );
      scene.add(dust);

      let gltf: import("three/examples/jsm/loaders/GLTFLoader.js").GLTF;
      try {
        gltf = await new GLTFLoader().loadAsync(compact ? "/models/rd-mobile.glb" : "/models/rd-desktop.glb");
      } catch {
        renderer.dispose();
        renderer.domElement.remove();
        setMode("poster");
        return;
      }
      if (cancelled) {
        renderer.dispose();
        renderer.domElement.remove();
        return;
      }

      // Tous les fragments dans une seule géométrie, avec leurs données de trajectoire.
      const meshes: import("three").Mesh[] = [];
      gltf.scene.updateMatrixWorld(true);
      gltf.scene.traverse((o) => (o as import("three").Mesh).isMesh && meshes.push(o as import("three").Mesh));
      const bounds = new THREE.Box3().setFromObject(gltf.scene);
      const size = bounds.getSize(new THREE.Vector3());
      let vCount = 0, iCount = 0;
      meshes.forEach((m) => {
        vCount += m.geometry.attributes.position.count;
        iCount += m.geometry.index ? m.geometry.index.count : m.geometry.attributes.position.count;
      });
      const pos = new Float32Array(vCount * 3), nor = new Float32Array(vCount * 3);
      const off = new Float32Array(vCount * 3), from = new Float32Array(vCount * 3), to = new Float32Array(vCount * 3);
      const axis = new Float32Array(vCount * 3), rnd = new Float32Array(vCount * 4);
      const index = new Uint32Array(iCount);
      const c = new THREE.Vector3(), a = new THREE.Vector3(), dir = new THREE.Vector3();
      let v = 0, ii = 0;
      for (const m of meshes) {
        const g = m.geometry;
        c.setFromMatrixPosition(m.matrixWorld);
        a.randomDirection();
        // Arrivée : de loin derrière, en nuée ; départ : vers le visiteur, en s'écartant du centre.
        const fx = c.x * 1.8 + (Math.random() - 0.5) * size.x * 1.4;
        const fy = c.y * 3 + (Math.random() - 0.5) * 5;
        const fz = -4 - Math.random() * 9;
        dir.set(c.x + (Math.random() - 0.5) * 0.6, c.y + (Math.random() - 0.5) * 0.6, 0).normalize();
        const tx = c.x + dir.x * (1.5 + Math.random() * 3.5);
        const ty = c.y + dir.y * (1.2 + Math.random() * 2.5);
        const tz = 2 + Math.random() * 9;
        const delay = ((c.x - bounds.min.x) / size.x) * 0.45 + Math.random() * 0.25;
        const r = [delay, Math.random(), Math.random(), Math.random()];
        const p = g.attributes.position, n = g.attributes.normal;
        // Écritures directes (pas de tableau alloué par sommet) : la fusion reste courte sur mobile.
        for (let k = 0; k < p.count; k++, v++) {
          const o = v * 3, q = v * 4;
          pos[o] = p.getX(k); pos[o + 1] = p.getY(k); pos[o + 2] = p.getZ(k);
          nor[o] = n.getX(k); nor[o + 1] = n.getY(k); nor[o + 2] = n.getZ(k);
          off[o] = c.x; off[o + 1] = c.y; off[o + 2] = c.z;
          from[o] = fx; from[o + 1] = fy; from[o + 2] = fz;
          to[o] = tx; to[o + 1] = ty; to[o + 2] = tz;
          axis[o] = a.x; axis[o + 1] = a.y; axis[o + 2] = a.z;
          rnd[q] = r[0]; rnd[q + 1] = r[1]; rnd[q + 2] = r[2]; rnd[q + 3] = r[3];
        }
        const base = v - p.count;
        if (g.index) for (let k = 0; k < g.index.count; k++) index[ii++] = base + g.index.getX(k);
        else for (let k = 0; k < p.count; k++) index[ii++] = base + k;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("normal", new THREE.BufferAttribute(nor, 3));
      geo.setAttribute("aOffset", new THREE.BufferAttribute(off, 3));
      geo.setAttribute("aFrom", new THREE.BufferAttribute(from, 3));
      geo.setAttribute("aTo", new THREE.BufferAttribute(to, 3));
      geo.setAttribute("aAxis", new THREE.BufferAttribute(axis, 3));
      geo.setAttribute("aRand", new THREE.BufferAttribute(rnd, 4));
      geo.setIndex(new THREE.BufferAttribute(index, 1));
      meshes.forEach((m) => m.geometry.dispose());

      const uniforms = {
        uTime: { value: 0 },
        uAssemble: { value: 0 },
        uScatter: { value: 0 },
        uMouse: { value: new THREE.Vector3(99, 99, 0) },
        uMouseForce: { value: 0 },
      };
      const material = compact
        ? new THREE.MeshStandardMaterial({ color: "#dfe6f5", metalness: 1, roughness: 0.2 })
        : new THREE.MeshPhysicalMaterial({ color: "#dfe6f5", metalness: 1, roughness: 0.16, clearcoat: 0.7, clearcoatRoughness: 0.06 });
      material.onBeforeCompile = (shader) => {
        Object.assign(shader.uniforms, uniforms);
        shader.vertexShader = shader.vertexShader
          .replace("#include <common>", `#include <common>\n${vertexHead}`)
          .replace("#include <beginnormal_vertex>", normalChunk)
          .replace("#include <begin_vertex>", positionChunk);
      };
      const word = new THREE.Mesh(geo, material);
      word.frustumCulled = false;
      scene.add(word);
      // Compilation des shaders en parallèle quand le pilote le permet, au lieu de figer la première image.
      await breathe();
      await renderer.compileAsync(scene, camera);
      if (cancelled) {
        renderer.dispose();
        renderer.domElement.remove();
        return;
      }

      const composer = compact ? null : new EffectComposer(renderer);
      const bloom = compact ? null : new UnrealBloomPass(new THREE.Vector2(1, 1), 0.18, 0.4, 0.95);
      if (composer && bloom) {
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(bloom);
        composer.addPass(new OutputPass());
      }

      // Cadrage : le nom occupe ~80 % de la largeur, sans déborder en hauteur.
      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        renderer.setSize(w, h, false);
        composer?.setSize(w, h);
        camera.aspect = w / h;
        const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const byWidth = (size.x / (compact ? 0.86 : 0.78)) / camera.aspect / (2 * t);
        const byHeight = (size.y / 0.5) / (2 * t);
        camera.userData.dist = Math.max(byWidth, byHeight);
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      // Pointeur projeté sur le plan du nom ; sa vitesse renforce la poussée.
      const ndc = new THREE.Vector2(), ray = new THREE.Raycaster(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3(), target = new THREE.Vector3(99, 99, 0);
      let pointerIn = false, speed = 0, lastX = 0, lastY = 0, look = { x: 0, y: 0 };
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
        look = { x: ndc.x, y: ndc.y };
        speed = Math.min(1, speed + Math.hypot(e.clientX - lastX, e.clientY - lastY) / 140);
        lastX = e.clientX;
        lastY = e.clientY;
        pointerIn = e.clientY >= r.top && e.clientY <= r.bottom;
        ray.setFromCamera(ndc, camera);
        if (ray.ray.intersectPlane(plane, hit)) target.copy(hit);
      };
      const onLeave = () => (pointerIn = false);      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);

      let raf = 0, visible = true, start = 0, last = performance.now();
      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !raf) {
          last = performance.now();
          raf = requestAnimationFrame(tick);
        }
      });
      io.observe(section);

      const INTRO = compact ? 2.4 : 2.8;
      const tick = (now: number) => {
        raf = 0;
        if (!visible) return;
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        if (!start) start = now;
        const t = (now - start) / 1000;

        const rect = section.getBoundingClientRect();
        const scroll = THREE.MathUtils.clamp(-rect.top / Math.max(1, rect.height - window.innerHeight), 0, 1);

        uniforms.uTime.value = t;
        uniforms.uAssemble.value = Math.min(1, t / INTRO);
        uniforms.uScatter.value = scroll;
        if (cue.current) cue.current.dataset.away = String(scroll > 0.02);
        uniforms.uMouse.value.lerp(target, 1 - Math.exp(-dt * 10));
        speed *= Math.exp(-dt * 2.5);
        const force = pointerIn && t > INTRO * 0.8 ? 0.55 + speed * 0.9 : 0;
        uniforms.uMouseForce.value += (force - uniforms.uMouseForce.value) * (1 - Math.exp(-dt * 6));

        // Le reflet blanc balaie les lettres pendant l'assemblage, puis suit doucement le pointeur.
        const sweep = THREE.MathUtils.smoothstep(t, 0.6, INTRO + 1.4);
        scene.environmentRotation.y = -1.9 + sweep * 1.9 + look.x * 0.35;
        scene.environmentRotation.x = -look.y * 0.12;

        const fade = Math.min(1, t / 1.2);
        (glow.material as import("three").ShaderMaterial).uniforms.uFade.value = fade * (1 - scroll * 0.7);
        (dust.material as import("three").PointsMaterial).opacity = fade * 0.35;
        dust.rotation.y = t * 0.012;
        dust.position.y = Math.sin(t * 0.2) * 0.08;

        const dist = camera.userData.dist as number;
        camera.position.set(look.x * 0.12, look.y * 0.08, dist * (1 - scroll * 0.25));
        camera.lookAt(0, 0, 0);

        if (composer) composer.render(dt);
        else renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      setMode("live");

      stop = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
        geo.dispose();
        material.dispose();
        dustGeo.dispose();
        (dust.material as import("three").Material).dispose();
        glow.geometry.dispose();
        (glow.material as import("three").Material).dispose();
        studio.traverse((o) => {
          const m = o as import("three").Mesh;
          if (m.isMesh) {
            m.geometry.dispose();
            (m.material as import("three").Material).dispose();
          }
        });
        envMap.dispose();
        pmrem.dispose();
        bloom?.dispose();
        composer?.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      cancelled = true;
      stop();
    };
  }, []);

  return (
    <section ref={track} aria-labelledby="intro-titre" className="night relative h-[200svh] motion-reduce:h-svh">
      <div className="sticky top-0 h-svh overflow-hidden">
        <h1 id="intro-titre" className="sr-only">
          rd-solutions : {site.name}, développeur web freelance
        </h1>

        {/* Nom « éteint » (contour seul, comme le mot du hero) : visible dès le HTML, avant que la
            scène 3D soit chargée, puis il s'efface quand les fragments arrivent. */}
        <p
          aria-hidden="true"
          className={`display outline-text pointer-events-none absolute inset-0 grid place-items-center whitespace-nowrap text-[clamp(2.75rem,14vw,15rem)] transition-opacity duration-700 [--stroke:var(--line-strong)] ${mode === "wait" && !slow ? "opacity-100" : "opacity-0"}`}
        >
          rd-solutions
        </p>

        <div ref={box} className="absolute inset-0" />

        {(mode === "poster" || slow) && (
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/rd-solutions-mobile.webp" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rd-solutions.webp"
              alt=""
              className={`pointer-events-none absolute inset-0 m-auto w-[86%] max-w-[1400px] transition-opacity duration-1000 md:w-[78%] ${mode === "live" ? "opacity-0" : "opacity-100"}`}
            />
          </picture>
        )}

        <div ref={cue} className="absolute inset-x-0 bottom-8 transition-opacity duration-300 data-[away=true]:pointer-events-none data-[away=true]:opacity-0">
          <a
            href="#hero-titre"
            className={`mx-auto flex w-max flex-col items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted transition-opacity delay-[2.4s] duration-1000 hover:text-fg ${mode === "wait" ? "opacity-0" : "opacity-100"}`}
          >
            Défiler
            <span className="relative block h-10 w-px overflow-hidden bg-line" aria-hidden="true">
              <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-fg" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
