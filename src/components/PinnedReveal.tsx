"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PinnedReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const about = root?.querySelector<HTMLElement>(".about-home-section");
    if (!root || !about) return;

    const context = gsap.context(() => {
      gsap.to(about, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=100%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    const frame = window.requestAnimationFrame(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.cancelAnimationFrame(frame);
      context.revert();
    };
  }, []);

  return <div ref={rootRef} className="closing-sequence">{children}</div>;
}
