import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Mxrcos Ullauri — Fotógrafo & Creador de Historias Visuales</p>
      <div className="footer-links">
        <Link href="/stories/">Historias</Link>
        <Link href="/memorias/">Memorias y Trayectorias</Link>
        <Link href="/contact/">Contacto</Link>
      </div>
      <p className="fine-print">© {new Date().getFullYear()} Marcos Ullauri</p>
    </footer>
  );
}
