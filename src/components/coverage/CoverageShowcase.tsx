import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { Reveal } from "@/components/ui/Reveal";

export function CoverageShowcase() {
  return (
    <div className="coverage-section coverage-mosaic-section" aria-label="Coberturas audiovisuales">
      <div className="coverage-mosaic-grid">
        {coverageProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 90}>
            <CoverageCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
