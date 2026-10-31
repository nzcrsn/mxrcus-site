import Link from "next/link";
import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { CoverageAudioPlayer } from "@/components/coverage/CoverageAudioPlayer";
import { Reveal } from "@/components/ui/Reveal";

export function CoverageShowcase({ showArchiveLink = true }: { showArchiveLink?: boolean }) {
  const [featured, ...secondary] = coverageProjects;

  return (
    <div className="coverage-section editorial-coverage" aria-labelledby="coverage-heading">
      <div className="coverage-transition">
        <Reveal className="coverage-transition-main">
          <p className="coverage-kicker"><span>02</span> Archivo audiovisual</p>
          <h3 id="coverage-heading">La memoria también se mueve.</h3>
        </Reveal>
        <Reveal delay={100} className="coverage-transition-aside">
          <p>Hay encuentros que merecen volver a vivirse. Estas coberturas guardan voces, gestos y momentos de nuestra comunidad para que sigan circulando, incluso después de que todo termina.</p>
        </Reveal>
      </div>

      <Reveal><CoverageAudioPlayer /></Reveal>

      {featured ? (
        <Reveal className="coverage-featured-reveal">
          <CoverageCard project={featured} featured />
        </Reveal>
      ) : null}

      {secondary.length > 0 ? (
        <div className="coverage-secondary-grid">
          {secondary.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <CoverageCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : null}

      {showArchiveLink ? (
        <div className="coverage-footer-link">
          <Link className="text-link" href="/memorias/">Seguir explorando el archivo <span aria-hidden="true">↗</span></Link>
        </div>
      ) : null}
    </div>
  );
}
