import Link from "next/link";
import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CoverageShowcase() {
  const [featured, ...secondary] = coverageProjects;

  return (
    <section className="section coverage-section" aria-labelledby="coverage-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Coberturas & Transmisiones"
            title="El evento, desde todos sus ángulos"
            intro="Historias que también cobran vida: producción en directo, cobertura de eventos, retransmisiones en streaming y resúmenes audiovisuales."
            id="coverage-heading"
          />
        </Reveal>

        <Reveal>
          <CoverageCard project={featured} featured />
        </Reveal>

        <div className="coverage-secondary-grid">
          {secondary.map((project, index) => (
            <Reveal key={project.slug} delay={index * 90}>
              <CoverageCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="coverage-footer-link">
            <Link className="text-link" href="/coverage/">Ver todo el trabajo audiovisual</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
