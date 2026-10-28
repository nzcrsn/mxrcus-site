"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  // ["Historias", "/stories/"],
  ["Coberturas", "/coverage/"],
  ["Memorias", "/memorias/"],
  ["Sobre Mxrcus", "/about/"],
  ["Contacto", "/contact/"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header className="site-header" data-open={open}>
      <Link href="/" className="wordmark" aria-label="Marcos Ullauri home" onClick={() => setOpen(false)}>
        MU
      </Link>


      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      <div id="mobile-navigation" className="mobile-nav-shell" aria-hidden={!open}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <Link href={href} key={href} style={{ "--nav-index": index } as React.CSSProperties} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
