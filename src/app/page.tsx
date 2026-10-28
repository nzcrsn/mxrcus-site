import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoryCard } from "@/components/stories/StoryCard";
import { stories } from "@/data/stories";
import { CoverageShowcase } from "@/components/coverage/CoverageShowcase";

export default function HomePage() {
  const featured = stories.filter((story) => story.featured);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marcos Ullauri",
    jobTitle: "Fotógrafo y Creador de Historias Visuales",
    sameAs: [
      "https://www.instagram.com/mxrcusvlog/",
      "https://www.facebook.com/memoriasytrayectorias"
    ]
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <Image src="/images/hero.jpg" alt="Marcos Ullauri" fill priority sizes="100vw" />
        </div>
        <div className="hero-content">
          <p className="kicker">Fotógrafo · Creador de Historias Visuales</p>
          <h1 id="hero-title">Marcos Ullauri</h1>
          <div className="hero-bottom">
            <p className="hero-role">Capturando memorias para recordar.</p>
            {/* <Link className="text-link" href="/stories/">Explorar historias</Link> */}
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="01 / Trabajos" title="Historias" intro="Una selección de historias." /></Reveal>
          <div className="story-grid">
            {featured.map((story, index) => (
              <Reveal key={story.slug} delay={index * 80}><StoryCard story={story} priority={index < 2} /></Reveal>
            ))}
          </div>
        </div>
      </section> */}

      <CoverageShowcase />

      <section className="section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="03 / Colaboraciones" title="Conectamos marcas con nuevas audiencias" intro="Impulsando marcas y trayectorias." /></Reveal>
          <Reveal>
            <div className="brands" aria-label="Selected collaborators">
              {["ASOGAN PVM", "Neos Gastrobar", "Ego", "Estación 33"].map((brand) => <div className="brand" key={brand}>{brand}</div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container archive-feature">
          <Reveal className="archive-copy">
            <p className="eyebrow">04 / Comunidad</p>
            <h2>Memorias y Trayectorias</h2>
            <p>Un espacio para historias que van más allá de una simple imagen: personas, comunidades, cultura y memoria.</p>
            <Link className="text-link" href="/memorias/">Ver historias</Link>
          </Reveal>
          <Reveal className="archive-media" delay={120}>
            <Image src="/images/story-04.jpg" alt="Abstract placeholder for Memorias y Trayectorias documentary imagery" fill sizes="(max-width: 719px) 100vw, 50vw" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container about-preview">
          <Reveal>
            <p>Documento lo que permanece después del momento: gestos, lugares, trabajo, celebraciones y las personas detrás de cada historia.
            </p>
            <p style={{ marginTop: "2rem" }}><Link className="text-link" href="/about/">Acerca de Mxrcos</Link></p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-cta">
          <Reveal><h2>¿Tienes una historia que contar?
          </h2></Reveal>
          <Reveal delay={100}><Link className="text-link" href="/contact/">Hablemos de tu historia</Link></Reveal>
        </div>
      </section>
    </main>
  );
}
