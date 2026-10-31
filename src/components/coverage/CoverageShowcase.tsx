import Link from "next/link";
import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { CoverageAudioPlayer } from "@/components/coverage/CoverageAudioPlayer";
import { Reveal } from "@/components/ui/Reveal";

export function CoverageShowcase({ showArchiveLink = true }: { showArchiveLink?: boolean }) {
  return (
    <div className="coverage-section" aria-labelledby="coverage-heading">
      <div className="coverage-heading media-mosaic-heading">
        <div>
          <p className="eyebrow">Memorias y Trayectorias · Archivo audiovisual</p>
          <h2 id="coverage-heading">Historias que suceden en directo.</h2>
        </div>
        <p className="coverage-intro">Coberturas, transmisiones y registros audiovisuales realizados como parte de Memorias y Trayectorias, para conservar los encuentros, las voces y la cultura de nuestra comunidad.</p>
      </div>
      <Reveal><CoverageAudioPlayer /></Reveal>
      <div className="media-mosaic-grid coverage-mosaic-grid">
        {coverageProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 70}>
            <CoverageCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
      {showArchiveLink ? <div className="coverage-footer-link"><Link className="text-link" href="/memorias/">Ver el archivo de Memorias y Trayectorias</Link></div> : null}
    </div>
  );
}
