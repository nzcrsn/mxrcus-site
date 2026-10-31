import Link from "next/link";
import { coverageProjects } from "@/data/coverage";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { CoverageAudioPlayer } from "@/components/coverage/CoverageAudioPlayer";
import { Reveal } from "@/components/ui/Reveal";

export function CoverageShowcase({ showArchiveLink = true }: { showArchiveLink?: boolean }) {
  return (
    <div className="coverage-section" aria-labelledby="coverage-heading">
      <div className="coverage-transition">
        <Reveal>
          <p className="eyebrow">El archivo continúa</p>
          <h3 id="coverage-heading">Hay historias que también se cuentan en movimiento.</h3>
        </Reveal>
        <Reveal delay={100}>
          <p className="coverage-intro">Además de las fotografías, este archivo reúne coberturas, encuentros y transmisiones que documentan la vida cultural y comunitaria del noroccidente. Cada registro conserva algo de lo que vivimos y compartimos.</p>
        </Reveal>
      </div>
      <Reveal><CoverageAudioPlayer /></Reveal>
      <div className="coverage-list">
        {coverageProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 70}>
            <CoverageCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
      {showArchiveLink ? <div className="coverage-footer-link"><Link className="text-link" href="/memorias/">Explorar el archivo completo</Link></div> : null}
    </div>
  );
}
