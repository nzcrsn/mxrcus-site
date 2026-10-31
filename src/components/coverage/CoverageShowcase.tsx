import Link from "next/link";
import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoverageShowcase() {
  const [featured, ...secondary] = coverageProjects;
  return (
    <div className="coverage-section coverage-showcase" aria-labelledby="coverage-heading">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Archivo audiovisual" title="Historias que suceden en directo." intro="Producción en directo, cobertura de eventos y piezas audiovisuales hechas para conservar la energía de cada encuentro." id="coverage-heading" />
        </Reveal>
        <Reveal><CoverageCard project={featured} featured /></Reveal>
        <div className="coverage-secondary-grid">
          {secondary.map((project, index) => <Reveal key={project.slug} delay={index * 90}><CoverageCard project={project} /></Reveal>)}
        </div>
        <Reveal><div className="coverage-footer-link"><Link className="text-link" href="/memorias/">Explorar Memorias y Trayectorias</Link></div></Reveal>
      </div>
    </div>
  );
}
