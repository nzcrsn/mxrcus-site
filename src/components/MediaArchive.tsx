import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
const frames = [
  { src: "/media/photography/frames/frame-01.webp", number: "01 - Expo Cebú 2026", orientation: "portrait", label: "ARCHIVO VISUAL", placeholder: false },
  { src: "/media/photography/frames/frame-02.jpg", number: "02 - Expogan Pedro Vicente 2026", orientation: "landscape", label: "ARCHIVO VISUAL", placeholder: false },
  { src: "/media/photography/frames/frame-03.webp", number: "03 - El Cortijo", orientation: "portrait", label: "ARCHIVO VISUAL", placeholder: false },
  { src: "/media/photography/frames/frame-06.webp", number: "04 - Pregón de fiestas en honor a la Virgen del Cisne", orientation: "landscape", label: "ARCHIVO VISUAL", placeholder: false },
  { src: "/media/photography/frames/frame-04.webp", number: "05 - Preparación del ceviche más grande en Pedro Vicente", orientation: "portrait", label: "COMPOSICIÓN", placeholder: false },
  { src: "/media/photography/frames/frame-07.webp", number: "06 - Expogan Pedro Vicente Maldonado ", orientation: "landscape", label: "COMPOSICIÓN", placeholder: false },
  { src: "/media/photography/frames/frame-05.webp", number: "07 - Expo Cebú 2026", orientation: "portrait", label: "COMPOSICIÓN", placeholder: false },
  { src: "/media/photography/frames/frame-08.webp", number: "08 - Brand ", orientation: "landscape", label: "COMPOSICIÓN", placeholder: false }
] as const;
export function MediaArchive() {
  return <section className="section media-archive-section" aria-labelledby="media-archive-title">
    <div className="container media-archive-layout">
      <div className="media-archive-sticky">
        <p className="eyebrow">Archivo visual</p>
        <h2 id="media-archive-title">Porque cada imagen tiene algo que<em> contar</em>.</h2>
        {/* <p>Observar y descubrir nuevas formas de contarlas.</p> */}
        <div className="media-archive-stamp" aria-label="Archivo visual de Marcos Ullauri"><span>MU</span><span>FOTOGRAFÍA<br />EN MOVIMIENTO</span></div>
      </div>

      <div className="media-archive-grid">
        {frames.map((frame, index) => <Reveal key={frame.number} className={`media-archive-frame media-archive-frame-${frame.number}`} delay={(index % 4) * 65}>
          <figure className={frame.placeholder ? "is-placeholder" : undefined}><div className={`media-archive-image ${frame.orientation}`}>
            <Image src={frame.src} alt={frame.placeholder ? `Composición abstracta ${frame.number}` : `Fotografía ${frame.number} del archivo visual de Marcos Ullauri`} fill sizes="(max-width: 719px) 100vw, (max-width: 1100px) 48vw, 38vw" priority={index === 0} />
            {frame.placeholder && <span className="media-placeholder-label">ARCHIVO<br />GRÁFICO</span>}
            <span className="media-archive-crosshair" aria-hidden="true">+</span>
          </div><figcaption><span>{frame.number}</span><span>{frame.label}</span></figcaption></figure>
        </Reveal>)}
      </div>
    </div>
  </section >;
}
