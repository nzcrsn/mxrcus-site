import Link from "next/link";
import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoverageShowcase({ showArchiveLink = true }: { showArchiveLink?: boolean }) {
  const [featured, ...secondary] = coverageProjects;
  return (
    <div className="section coverage-section" aria-labelledby="coverage-heading">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Memorias y Trayectorias · Archivo audiovisual" title="Historias que suceden en directo." intro="Coberturas, transmisiones y registros audiovisuales realizados como parte de Memorias y Trayectorias, para conservar los encuentros, las voces y la cultura de nuestra comunidad." id="coverage-heading" />
        </Reveal>
        <Reveal><CoverageCard project={featured} featured /></Reveal>
        <div className="coverage-secondary-grid">
          {secondary.map((project, index) => <Reveal key={project.slug} delay={index * 90}><CoverageCard project={project} /></Reveal>)}
        </div>
        {showArchiveLink ? <Reveal><div className="coverage-footer-link"><Link className="text-link" href="/memorias/">Ver el archivo de Memorias y Trayectorias</Link></div></Reveal> : null}

      </div>
    </div>
  );
}
