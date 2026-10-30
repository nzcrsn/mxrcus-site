import type { Metadata } from "next";
import Image from "next/image";
import { CoverageCard } from "@/components/coverage/CoverageCard";
import { Reveal } from "@/components/ui/Reveal";
import { coverageProjects } from "@/data/coverage";
import { MediaMosaic } from "@/components/MediaMosaic";

export const metadata: Metadata = {
  title: "Coberturas & Transmisiones | Marcos Ullauri",
  description: "Audiovisual coverage, live transmissions, streaming and event production by Marcos Ullauri."
};

export default function CoveragePage() {
  return (
    <main id="main">
      <header className="page-hero page-hero-image page-hero-coverage">\n        <Image className="page-hero-backdrop" src="/media/photography/frames/frame-04.jpg" alt="" fill priority sizes="100vw" />
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
      <MediaMosaic eyebrow="Fuera de cámara" title="La historia continúa entre escenas." />
    </main>
  );
}
