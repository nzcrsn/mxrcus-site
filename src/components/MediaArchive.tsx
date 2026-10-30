import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
const frames = [
  { src: "/media/photography/frames/frame-01.png", number: "01", orientation: "portrait", label: "ARCHIVO VISUAL", placeholder: false },
  { src: "/media/photography/frames/frame-02.jpg", number: "02", orientation: "landscape", label: "ARCHIVO VISUAL", placeholder: false },
  { src: "/media/photography/frames/frame-03.png", number: "03", orientation: "portrait", label: "ARCHIVO VISUAL", placeholder: false },
  { src: "/media/photography/frames/frame-04.jpg", number: "04", orientation: "landscape", label: "ARCHIVO VISUAL", placeholder: false },
  { src: "/media/placeholders/visual-05.svg", number: "05", orientation: "portrait", label: "COMPOSICIÓN", placeholder: true },
  { src: "/media/placeholders/visual-06.svg", number: "06", orientation: "landscape", label: "COMPOSICIÓN", placeholder: true },
  { src: "/media/placeholders/visual-07.svg", number: "07", orientation: "portrait", label: "COMPOSICIÓN", placeholder: true },
  { src: "/media/placeholders/visual-08.svg", number: "08", orientation: "landscape", label: "COMPOSICIÓN", placeholder: true }
] as const;
export function MediaArchive() {
  return <section className="section media-archive-section" aria-labelledby="media-archive-title">
    <div className="container media-archive-layout">
      <div className="media-archive-sticky">
        <p className="eyebrow">Archivo visual</p>
        <h2 id="media-archive-title">La historia también vive en los <em>detalles.</em></h2>
        <p>Una selección abierta de imágenes, lugares y momentos que construyen una memoria compartida.</p>
        <div className="media-archive-stamp" aria-label="Archivo visual de Marcos Ullauri"><span>MU</span><span>FOTOGRAFÍA<br />EN MOVIMIENTO</span></div>
        
      </div>
      <div className="media-archive-grid">
        {frames.map((frame, index) => <Reveal key={frame.number} className={`media-archive-frame media-archive-frame-${frame.number}`} delay={(index % 4) * 65}>
          <figure className={frame.placeholder ? "is-placeholder" : undefined}><div className={`media-archive-image ${frame.orientation}`}>
            <Image src={frame.src} alt={frame.placeholder ? `Composición abstracta ${frame.number}` : `Fotografía ${frame.number} del archivo visual de Marcos Ullauri`} fill sizes="(max-width: 719px) 100vw, (max-width: 1100px) 48vw, 38vw" priority={index === 0} />
            {frame.placeholder && <span className="media-placeholder-label">ARCHIVO<br />GRÁFICO</span>}
            <span className="media-archive-crosshair" aria-hidden="true">+</span>
          </div><figcaption><span>FRAME / {frame.number}</span><span>{frame.label}</span></figcaption></figure>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
