import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CoverageShowcase } from "@/components/coverage/CoverageShowcase";
import { SocialStatsShowcase } from "@/components/social/SocialStatsShowcase";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marcos Ullauri",
    jobTitle: "Fotógrafo y creador de historias visuales",
    sameAs: [
      "https://www.instagram.com/mxrcusvlog/",
      "https://www.facebook.com/memoriasytrayectorias"
    ]
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media"><Image src="/images/hero.jpg" alt="Marcos Ullauri" fill priority sizes="100vw" /></div>
        <div className="hero-content">
          <p className="kicker">Fotografía · Audiovisual · Memoria</p>
          <h1 id="hero-title">Marcos<br />Ullauri<span className="hero-period">.</span></h1>
          <div className="hero-bottom">
            <p className="hero-role">Historias reales. Miradas que permanecen.</p>
            <Link className="text-link" href="/memorias/">Entrar al archivo</Link>
          </div>
        </div>
        <span className="hero-index" aria-hidden="true">ECUADOR · 00°</span>
      </section>

      <section className="section identity-section" aria-labelledby="identity-title">
        <div className="container identity-layout">
          <Reveal><p className="eyebrow">01 / La mirada</p></Reveal>
          <Reveal delay={90} className="identity-copy">
            <h2 id="identity-title">No se trata solo de mirar. Se trata de <em>recordar.</em></h2>
            <p>Fotografía y narración audiovisual para acercarnos a las personas, entender los lugares y conservar las historias que construyen una comunidad.</p>
          </Reveal>
        </div>
      </section>

      <section className="section archive-home-section" aria-labelledby="archive-home-title">
        <div className="container archive-feature">
          <Reveal className="archive-copy">
            <p className="eyebrow">02 / Archivo vivo</p>
            <h2 id="archive-home-title">Memorias y Trayectorias</h2>
            <p>Un proyecto audiovisual que recoge las experiencias, la cultura y la memoria del noroccidente de Pichincha. Historias de personas que dejaron huella en su comunidad.</p>
            <Link className="text-link" href="/memorias/">Descubrir el proyecto</Link>
          </Reveal>
          <Reveal className="archive-media" delay={140}>
            <Image src="/images/memoria.jpg" alt="Imagen del proyecto documental Memorias y Trayectorias" fill sizes="(max-width: 719px) 100vw, 50vw" />
            <span className="media-index" aria-hidden="true">01 — MEMORIA</span>
          </Reveal>
        </div>
      </section>

      <CoverageShowcase />
      <SocialStatsShowcase />

      <section className="section about-home-section">
        <div className="container about-home-layout">
          <Reveal><p className="eyebrow">05 / Detrás de la cámara</p></Reveal>
          <Reveal className="about-preview">
            <p>Observar con atención. Acercarse con respeto. Contar lo que merece permanecer.</p>
            <Link className="text-link" href="/about/">Conocer a Marcos</Link>
          </Reveal>
        </div>
      </section>

      <section className="section contact-home-section">
        <div className="container contact-cta">
          <Reveal><p className="eyebrow">06 / Tu historia</p><h2>¿Qué merece ser contado?</h2></Reveal>
          <Reveal delay={100}><Link className="text-link" href="/contact/">Hablemos</Link></Reveal>
        </div>
      </section>
    </main>
  );
}
