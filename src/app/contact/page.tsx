import type { Metadata } from "next";
import { MediaMosaic } from "@/components/MediaMosaic";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Marcos Ullauri for photography, visual storytelling and documentary collaborations.",
  alternates: { canonical: "/contact/" }
};

export default function ContactPage() {
  return (
    <main id="main">
      <header className="page-hero page-hero-contact">
        <h1>Hablemos de lo que quieres contar.</h1>
        <p className="lede">Una conversación puede ser el comienzo de una historia. Cuéntame qué quieres documentar y exploremos juntos cómo contarla.</p>
      </header>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-primary">
            <p className="eyebrow">Hablemos</p>
            <div className="contact-list">
              <li><a href="mailto:ullauri203@gmail.com"><span>Email</span><span>ullauri203@gmail.com</span></a></li>
              <li><a href="https://www.instagram.com/mxrcusvlog/"><span>Instagram</span><span>@mxrcusvlog</span></a></li>
              <li><a href="https://www.facebook.com/memoriasytrayectorias"><span>Facebook</span><span>Memorias y Trayectorias</span></a></li>
              <li><a href="https://www.tiktok.com/@mxrcusvlog"><span>TikTok</span><span>@mxrcusvlog</span></a></li>
            </div>
          </div>
          <aside className="contact-aside">
            <p className="eyebrow">Proyectos y colaboraciones</p>
            <p>Fotografía, creación de contenidos, coberturas y proyectos audiovisuales para contar historias, registrar momentos y preservar memorias.</p>
          </aside>
        </div>
      </section>
      <MediaMosaic eyebrow="En el territorio" title="Cada lugar tiene una historia." />
    </main>
  );
}
