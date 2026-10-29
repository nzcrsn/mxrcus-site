"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/media/photography/frames/frame-01.png",
  "/media/photography/frames/frame-02.jpg",
  "/media/photography/frames/frame-03.png",
  "/media/photography/frames/frame-04.jpg"
];

export function ScrollDepthScene() {
  const stageRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let disposed = false;
    let renderer: import("three").WebGLRenderer | null = null;
    let disposeScene = () => {};

    import("three").then((THREE) => {
      if (disposed || !canvasRef.current || !stageRef.current) return;
      let activeRenderer: import("three").WebGLRenderer;
      try {
        activeRenderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
          powerPreference: "low-power"
        });
      } catch {
        return;
      }

      renderer = activeRenderer;
      activeRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      activeRenderer.setClearColor(0x000000, 0);
      activeRenderer.outputColorSpace = THREE.SRGBColorSpace;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.set(0, 0, 9);
      const gallery = new THREE.Group();
      scene.add(gallery);

      const ambient = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambient);

      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0xb76548,
        wireframe: true,
        transparent: true,
        opacity: 0.58
      });
      const orbit = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.012, 8, 120), orbitMaterial);
      orbit.rotation.set(0.9, 0.25, -0.35);
      orbit.position.set(0.15, 0, -1.8);
      gallery.add(orbit);

      const secondOrbit = new THREE.Mesh(
        new THREE.TorusGeometry(3.15, 0.008, 6, 120),
        new THREE.MeshBasicMaterial({ color: 0x747b60, transparent: true, opacity: 0.8 })
      );
      secondOrbit.rotation.set(0.35, 1.1, 0.2);
      secondOrbit.position.set(0, 0, -2.3);
      gallery.add(secondOrbit);

      const loader = new THREE.TextureLoader();
      const graphic = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.72, 0),
        new THREE.MeshBasicMaterial({ color: 0xffdf00, wireframe: true, transparent: true, opacity: 0.95 })
      );
      graphic.position.set(0, 0, 0.8);
      gallery.add(graphic);
      const graphicRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.92, 0.018, 6, 48),
        new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.9 })
      );
      graphicRing.position.set(0, 0, 0.55);
      gallery.add(graphicRing);
      const cards: import("three").Group[] = [];
      const positions = [
        [-2.45, 0.25, -0.9],
        [-0.85, -0.1, 0.25],
        [0.95, 0.25, -0.25],
        [2.5, -0.12, -1.1]
      ];

      images.forEach((src, index) => {
        const card = new THREE.Group();
        card.position.set(positions[index][0], positions[index][1], positions[index][2]);
        card.rotation.y = index % 2 === 0 ? -0.13 : 0.14;
        card.rotation.z = index % 2 === 0 ? -0.035 : 0.025;
        const placeholder = new THREE.Mesh(
          new THREE.PlaneGeometry(1.75, 2.3),
          new THREE.MeshBasicMaterial({ color: index % 2 === 0 ? 0x747b60 : 0xb76548 })
        );
        card.add(placeholder);
        gallery.add(card);
        cards.push(card);

        loader.load(src, (texture) => {
          if (disposed) {
            texture.dispose();
            return;
          }
          texture.colorSpace = THREE.SRGBColorSpace;
          const width = texture.image.width || 1;
          const height = texture.image.height || 1;
          const aspect = width / height;
          const planeWidth = aspect > 1 ? 2.0 : 1.78;
          const planeHeight = planeWidth / aspect;
          const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
          const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
          const photo = new THREE.Mesh(geometry, material);
          const edge = new THREE.LineSegments(
            new THREE.EdgesGeometry(geometry),
            new THREE.LineBasicMaterial({ color: 0xf4f0e7, transparent: true, opacity: 0.9 })
          );
          card.clear();
          card.add(photo, edge);
          activeRenderer.render(scene, camera);
        });
      });

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let pointerX = 0;
      let pointerY = 0;

      const resize = () => {
        const bounds = stageRef.current?.getBoundingClientRect();
        if (!bounds) return;
        activeRenderer.setSize(bounds.width, bounds.height, false);
        camera.aspect = bounds.width / Math.max(bounds.height, 1);
        camera.updateProjectionMatrix();
        render();
      };

      const render = () => {
        const stage = stageRef.current;
        if (!stage || disposed) return;
        const bounds = stage.getBoundingClientRect();
        const progress = reducedMotion.matches
          ? 0
          : Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (bounds.height + window.innerHeight)));
        gallery.rotation.y = progress * 1.05 + pointerX * 0.075;
        gallery.rotation.x = (progress - 0.5) * 0.18 + pointerY * 0.035;
        gallery.position.x = -progress * 0.75;
        camera.position.x = progress * 1.45;
        camera.position.y = Math.sin(progress * Math.PI) * 0.3;
        camera.position.z = 9 - progress * 1.05;
        camera.lookAt(progress * 0.55, 0, -0.2);
        orbit.rotation.z = -0.35 + progress * 0.75;
        graphic.rotation.x = progress * 1.9 + pointerY * 0.2;
        graphic.rotation.y = progress * 2.4 + pointerX * 0.2;
        graphicRing.rotation.z = -progress * 1.4;
        graphicRing.rotation.x = 0.6 + progress * 0.6;
        cards.forEach((card, index) => {
          card.position.y = positions[index][1] + Math.sin(progress * Math.PI + index * 0.7) * 0.12;
        });
        activeRenderer.render(scene, camera);
      };

      let frame = 0;
      const scheduleRender = () => {
        if (frame) window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          render();
        });
      };
      const pointerMove = (event: PointerEvent) => {
        const bounds = stageRef.current?.getBoundingClientRect();
        if (!bounds || reducedMotion.matches) return;
        pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
        scheduleRender();
      };

      window.addEventListener("scroll", scheduleRender, { passive: true });
      window.addEventListener("resize", resize);
      stageRef.current.addEventListener("pointermove", pointerMove);
      reducedMotion.addEventListener("change", scheduleRender);
      resize();
      setReady(true);

      disposeScene = () => {
        window.removeEventListener("scroll", scheduleRender);
        window.removeEventListener("resize", resize);
        stageRef.current?.removeEventListener("pointermove", pointerMove);
        reducedMotion.removeEventListener("change", scheduleRender);
        if (frame) window.cancelAnimationFrame(frame);
        gallery.traverse((object) => {
          if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
            object.geometry.dispose();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => {
              if ("map" in material && material.map) material.map.dispose();
              material.dispose();
            });
          }
        });
        activeRenderer.dispose();
      };
    }).catch(() => {
      /* The still-image fallback remains visible if WebGL or the module is unavailable. */
    });

    return () => {
      disposed = true;
      disposeScene();
      renderer?.dispose();
    };
  }, []);

  return (
    <section className="section depth-scene-section" aria-labelledby="depth-scene-title">
      <div className="container depth-scene-layout">
        <div className="depth-scene-copy">
          <p className="eyebrow">03 / Profundidad visual</p>
          <h2 id="depth-scene-title">Una historia.<br /><em>Muchas capas.</em></h2>
          <p>La fotografía no se queda quieta. Cada imagen abre otra perspectiva del lugar, las personas y la memoria.</p>
          <span className="depth-scene-note">DESPLÁZATE PARA EXPLORAR <span aria-hidden="true">↓</span></span>
        </div>
        <section ref={stageRef} className="three-scene-stage" data-ready={ready} aria-label="Escena tridimensional interactiva del archivo fotográfico">
          <div className="three-scene-fallback" aria-hidden="true">
            <Image src={images[1]} alt="" fill sizes="(max-width: 719px) 85vw, 48vw" />
            <Image src={images[0]} alt="" fill sizes="(max-width: 719px) 85vw, 48vw" />
            <Image src={images[3]} alt="" fill sizes="(max-width: 719px) 85vw, 48vw" />
          </div>
          <canvas ref={canvasRef} className="three-scene-canvas" aria-hidden="true" />
          <span className="depth-scene-index" aria-hidden="true">MU—3D / 001</span>
          <span className="three-scene-status" aria-hidden="true">{ready ? "ARCHIVO EN MOVIMIENTO" : "ARCHIVO FOTOGRÁFICO"}</span>
        </section>
      </div>
    </section>
  );
}
