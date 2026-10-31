import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ScrollTextReveal } from "@/components/ui/ScrollTextReveal";
import { MediaArchive } from "@/components/MediaArchive";
import { HorizontalFilmstrip } from "@/components/HorizontalFilmstrip";
import { ScrollDepthScene } from "@/components/ScrollDepthScene";
import { CoverageShowcase } from "@/components/coverage/CoverageShowcase";
import { SocialStatsShowcase } from "@/components/social/SocialStatsShowcase";
import { PinnedReveal } from "@/components/PinnedReveal";

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
        <div className="hero-media"><Image src="/media/photography/hero.jpg" alt="Marcos Ullauri" fill priority sizes="100vw" /></div>
        <div className="hero-content">

          <h1 id="hero-title">Marcos<br />Ullauri<span className="hero-period">.</span></h1>
          <div className="hero-bottom">
            <p className="kicker">Creador de historias visuales</p>
            {/* <p className="hero-role">Historias reales. Miradas que permanecen.</p> */}
            {/* <Link className="text-link" href="/memorias/">Entrar al archivo</Link> */}
          </div>
        </div>
        {/* <span className="hero-index" aria-hidden="true">NOROCCIDENTE · ECUADOR</span> */}
        {/* <span className="hero-index" aria-hidden="true">Creador de historias visuales</span> */}
      </section>

      {/* <section className="section identity-section" aria-labelledby="identity-title">
        <div className="container identity-layout">

          <Reveal delay={90} className="identity-copy">
            <h2 id="identity-title">Cada imagen tiene algo que<em> contar.</em></h2>
            <p>Me gusta observar, descubrir historias y encontrar nuevas formas de contarlas. A través de la fotografía y el contenido audiovisual, transformo momentos, ideas y experiencias en imágenes que conectan con las personas.</p>
          </Reveal>
        </div>
      </section> */}

      <MediaArchive />
      <HorizontalFilmstrip />
      {/* <ScrollDepthScene /> */}

      <section className="section archive-home-section" aria-labelledby="archive-home-title">
        <div className="container archive-feature">
          <Reveal className="archive-copy">
            <p className="eyebrow">Archivo documental</p>
            <h2 id="archive-home-title">Memorias y Trayectorias</h2>
            <p>Un proyecto audiovisual que recoge las experiencias, la cultura y la memoria de la gente. Historias de personas que dejaron huella en su comunidad.</p>
            <Link className="text-link" href="/memorias/">Descubrir el proyecto</Link>
          </Reveal>
          <Reveal className="archive-media" delay={140}>
            <Image src="/media/branding/memorias-banner.webp" alt="Memorias y Trayectorias: entrevistas, documentales, transmisiones, fotografías, vídeos y noticias del noroccidente" fill unoptimized sizes="(max-width: 719px) 100vw, 50vw" />
            <span className="media-index" aria-hidden="true">01 — MEMORIAS Y TRAYECTORIAS</span>
          </Reveal>
        </div>
        <CoverageShowcase />
      </section>
      <SocialStatsShowcase />

      <PinnedReveal>
        <section className="section about-home-section">
          <div className="container about-home-layout">
            <Reveal><p className="eyebrow">Detrás de la cámara</p></Reveal>
            <Reveal className="about-preview">
              <ScrollTextReveal text="Observar con atención. Acercarse con respeto. Contar lo que merece permanecer." />
              <Link className="text-link" href="/about/">Conocer a Marcos</Link>
            </Reveal>
          </div>
        </section>

        <section className="section contact-home-section">
          <div className="container contact-cta">
            <Reveal className="contact-cta-copy"><ScrollTextReveal as="h2" revealMode="curtain" text="¿Qué merece ser contado?" /></Reveal>
            <Reveal delay={100}><Link className="text-link" href="/contact/">Hablemos</Link></Reveal>
          </div>
        </section>
      </PinnedReveal>
    </main>
  );
}
