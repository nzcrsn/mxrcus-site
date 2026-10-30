"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type ScrollTextRevealProps = { text: string; as?: "p" | "h2"; className?: string; id?: string };

export function ScrollTextReveal({ text, as = "p", className = "", id }: ScrollTextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref as never} id={id} className={"scroll-text-reveal " + (visible ? "is-revealed " : "") + className} aria-label={text}>
      {text.split(/\\s+/).map((word, index) => (
        <span className="scroll-text-word" key={word + "-" + index} aria-hidden="true" style={{ "--word-index": index } as CSSProperties}><span>{word}</span></span>
      ))}
    </Tag>
  );
}
