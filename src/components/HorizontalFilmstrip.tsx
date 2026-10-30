"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const frames = [
  { src: "/media/photography/frames/frame-01.png", label: "Fotograma 01", slug: "archivo-visual-01", shape: "portrait" },
  { src: "/media/photography/frames/frame-02.jpg", label: "Fotograma 02", slug: "archivo-visual-02", shape: "landscape" },
  { src: "/media/photography/frames/frame-03.png", label: "Fotograma 03", slug: "archivo-visual-03", shape: "portrait" },
  { src: "/media/photography/frames/frame-04.jpg", label: "Fotograma 04", slug: "archivo-visual-04", shape: "landscape" },
  { src: "/media/placeholders/visual-05.svg", label: "Fotograma 05", slug: "archivo-visual-01", shape: "portrait" },
  { src: "/media/placeholders/visual-06.svg", label: "Fotograma 06", slug: "archivo-visual-02", shape: "landscape" }
] as const;

export function HorizontalFilmstrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const update = () => {
      const mobile = window.matchMedia("(max-width: 719px)").matches;
      if (mobile) {
        track.style.transform = "none";
        return;
      }
      const bounds = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / (bounds.height + window.innerHeight)));
      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      track.style.transform = "translate3d(" + (-distance * progress) + "px,0,0)";
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    observer.observe(track);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="horizontal-filmstrip-section" aria-labelledby="filmstrip-title">
      <div className="horizontal-filmstrip-sticky">
        <div className="horizontal-filmstrip-heading container">
          <div>
            <p className="eyebrow">Archivo / Secuencia</p>
            <h2 id="filmstrip-title">Mirar más<br /><em>despacio.</em></h2>
          </div>
          <p>Un recorrido por fragmentos del archivo visual.</p>
        </div>
        <div ref={viewportRef} className="horizontal-filmstrip-viewport">
          <div ref={trackRef} className="horizontal-filmstrip-track">
            {frames.map((frame, index) => (
              <article className={"filmstrip-frame filmstrip-frame-" + frame.shape} key={frame.label}>
                <Link href={"/stories/" + frame.slug + "/"} aria-label={"Abrir " + frame.label}>
                  <div className="filmstrip-image">
                    <Image src={frame.src} alt={"Imagen del archivo visual, " + frame.label} fill sizes="(max-width: 719px) 78vw, 42vw" />
                  </div>
                  <div className="filmstrip-caption"><span>FRAME / 0{index + 1}</span><span>{frame.label}</span></div>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div className="horizontal-filmstrip-footer container"><span>ARCHIVO VISUAL · NOROCCIDENTE</span><span>SCROLL / EXPLORE ↔</span></div>
      </div>
    </section>
  );
}
