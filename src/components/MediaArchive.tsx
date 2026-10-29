import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
const frames = [
  { src: "/media/photography/frames/frame-01.png", number: "01", orientation: "portrait" },
  { src: "/media/photography/frames/frame-02.jpg", number: "02", orientation: "landscape" },
  { src: "/media/photography/frames/frame-03.png", number: "03", orientation: "portrait" },
  { src: "/media/photography/frames/frame-04.jpg", number: "04", orientation: "landscape" }
] as const;
export function MediaArchive() {
  return <section className="section media-archive-section" aria-labelledby="media-archive-title">
    <div className="container media-archive-layout">
      <div className="media-archive-sticky">
        <p className="eyebrow">02 / Archivo visual</p>
        <h2 id="media-archive-title">La historia también vive en los <em>detalles.</em></h2>
        <p>Una selección de imágenes del archivo visual. Personas, lugares y momentos, organizados como una secuencia y no como una pared de miniaturas.</p>
        <div className="media-archive-stamp" aria-label="Archivo visual de Marcos Ullauri"><span>MU</span><span>FOTOGRAFÍA<br />EN MOVIMIENTO</span></div>
        <span className="media-archive-index">FOTOGRAFÍA / 001—004</span>
      </div>
      <div className="media-archive-grid">
        {frames.map((frame, index) => <Reveal key={frame.number} className={`media-archive-frame media-archive-frame-${frame.number}`} delay={index * 65}>
          <figure><div className={`media-archive-image ${frame.orientation}`}>
            <Image src={frame.src} alt={`Fotografía ${frame.number} del archivo visual de Marcos Ullauri`} fill sizes="(max-width: 719px) 100vw, (max-width: 1100px) 48vw, 38vw" priority={index === 0} />
            <span className="media-archive-crosshair" aria-hidden="true">+</span>
          </div><figcaption><span>FRAME / {frame.number}</span><span>ARCHIVO VISUAL</span></figcaption></figure>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
