"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
const links = [["Audiovisual", "/coverage/"], ["Memorias", "/memorias/"], ["Sobre Marcos", "/about/"], ["Contacto", "/contact/"]] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 28);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); menuButtonRef.current?.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    if (open) window.requestAnimationFrame(() => firstLinkRef.current?.focus());
    return () => { delete document.body.dataset.menuOpen; };
  }, [open]);
  return <>
    <header className="site-header" data-open={open} data-home={isHome} data-scrolled={scrolled}>
      <div className="header-bar">
        <Link href="/" className="wordmark" aria-label="Marcos Ullauri — inicio" onClick={() => setOpen(false)}>
          <Image src="/media/branding/memorias-logo.svg" alt="" width={46} height={46} className="site-logo-mark" priority /><span className="wordmark-caption">Historias visuales</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, href]) => <Link href={href} key={href} aria-current={pathname === href || pathname === href.slice(0, -1) ? "page" : undefined}>{label}</Link>)}
        </nav>
        <button ref={menuButtonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"} onClick={() => setOpen(value => !value)}>
          <span className="menu-button-label">{open ? "Cerrar" : "Menú"}</span><span className={`menu-icon${open ? " is-open" : ""}`} aria-hidden="true"><span /><span /></span>
        </button>
      </div>
    </header>
    <div id="mobile-navigation" className="mobile-nav-shell" data-open={open} aria-hidden={!open} inert={!open}>
      <button className="mobile-nav-backdrop" type="button" aria-label="Cerrar menú" tabIndex={-1} onClick={() => setOpen(false)} />
      <nav className="mobile-nav" aria-label="Navegación móvil">
        <p className="mobile-nav-kicker">ÍNDICE / EXPLORAR</p>
        {links.map(([label, href], index) => <Link href={href} key={href} ref={index === 0 ? firstLinkRef : undefined} style={{ "--nav-index": index } as CSSProperties} onClick={() => setOpen(false)} aria-current={pathname === href || pathname === href.slice(0, -1) ? "page" : undefined}><span className="mobile-nav-number">0{index + 1}</span><span>{label}</span><span className="mobile-nav-arrow" aria-hidden="true">↗</span></Link>)}
        <p className="mobile-nav-footer">MARCOS ULLAURI · NOROCCIDENTE, ECUADOR</p>
      </nav>
    </div>
  </>;
}
