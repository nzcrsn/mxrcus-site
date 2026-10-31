import Link from "next/link";
import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { CoverageAudioPlayer } from "@/components/coverage/CoverageAudioPlayer";
import { Reveal } from "@/components/ui/Reveal";

export function CoverageShowcase({ showArchiveLink = true }: { showArchiveLink?: boolean }) {
  const [featured, ...secondary] = coverageProjects;

  return (
    <div className="coverage-section" aria-labelledby="coverage-heading">
      <div className="coverage-transition">
        <Reveal>
          <p className="eyebrow">El archivo continúa</p>
          <h3 id="coverage-heading">También hay historias que merecen ser vistas en movimiento.</h3>
        </Reveal>
        <Reveal delay={100}>
          <p className="coverage-intro">Coberturas, encuentros y transmisiones que documentan la vida cultural y comunitaria del noroccidente. Registros para volver a esos momentos y compartirlos más allá del lugar y el instante en que sucedieron.</p>
        </Reveal>
      </div>
      <Reveal><CoverageAudioPlayer /></Reveal>
      {featured ? <Reveal><CoverageCard project={featured} featured /></Reveal> : null}
      {secondary.length > 0 ? (
        <div className="coverage-secondary-grid">
          {secondary.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <CoverageCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : null}
      {showArchiveLink ? <div className="coverage-footer-link"><Link className="text-link" href="/memorias/">Explorar el archivo completo</Link></div> : null}
    </div>
  );
}
