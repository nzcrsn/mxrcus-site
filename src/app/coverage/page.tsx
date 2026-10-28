import type { Metadata } from "next";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { Reveal } from "@/components/ui/Reveal";
import { coverageProjects } from "@/data/coverage";

export const metadata: Metadata = {
  title: "Coberturas & Transmisiones | Marcos Ullauri",
  description: "Audiovisual coverage, live transmissions, streaming and event production by Marcos Ullauri."
};

export default function CoveragePage() {
  return (
    <main id="main">
      <header className="page-hero">
        <h1>Coberturas & Transmisiones</h1>
        <p className="lede">Estar donde sucede. Contarlo mientras sucede. Registrar la energía, los momentos y las historias que toman forma frente a la cámara</p>
      </header>

      <section className="section">
        <div className="container coverage-archive">
          {coverageProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <CoverageCard project={project} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
