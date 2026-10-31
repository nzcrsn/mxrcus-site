import Link from "next/link";
import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { CoverageAudioPlayer } from "@/components/coverage/CoverageAudioPlayer";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoverageShowcase({ showArchiveLink = true }: { showArchiveLink?: boolean }) {
  return (
    <section className="section coverage-section" aria-labelledby="coverage-heading">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Memorias y Trayectorias · Archivo audiovisual" title="Historias que suceden en directo." intro="Coberturas, transmisiones y registros audiovisuales realizados como parte de Memorias y Trayectorias, para conservar los encuentros, las voces y la cultura de nuestra comunidad." id="coverage-heading" />
        </Reveal>
        <Reveal><CoverageAudioPlayer /></Reveal>
        <div className="coverage-filmstrip">
          {coverageProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <CoverageCard project={project} featured={index === 0} index={index} />
            </Reveal>
          ))}
        </div>
        {showArchiveLink ? <Reveal><div className="coverage-footer-link"><Link className="text-link" href="/memorias/">Ver el archivo de Memorias y Trayectorias</Link></div></Reveal> : null}
      </div>
    </section>
  );
}
