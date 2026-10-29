import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function ScrollDepthScene() {
  return <section className="section depth-scene-section" aria-labelledby="depth-scene-title">
    <div className="container depth-scene-layout">
      <Reveal className="depth-scene-copy">
        <p className="eyebrow">03 / Profundidad visual</p>
        <h2 id="depth-scene-title">Una historia.<br /><em>Muchas capas.</em></h2>
        <p>Fotografía, lugar y memoria se cruzan en una composición con profundidad que cambia al avanzar por la página.</p>
        <span className="depth-scene-note">SCROLL PARA EXPLORAR <span aria-hidden="true">↓</span></span>
      </Reveal>
      <div className="depth-scene-stage" aria-label="Composición fotográfica en capas con movimiento tridimensional al desplazarse">
        <div className="depth-scene-orbit depth-scene-orbit-one" aria-hidden="true" />
        <div className="depth-scene-orbit depth-scene-orbit-two" aria-hidden="true" />
        <figure className="depth-scene-card depth-scene-card-back">
          <Image src="/media/photography/frames/frame-02.jpg" alt="" fill sizes="(max-width: 719px) 65vw, 30vw" />
          <figcaption>02 / EL LUGAR</figcaption>
        </figure>
        <figure className="depth-scene-card depth-scene-card-front">
          <Image src="/media/photography/frames/frame-01.png" alt="" fill sizes="(max-width: 719px) 65vw, 30vw" />
          <figcaption>01 / LA MIRADA</figcaption>
        </figure>
        <span className="depth-scene-index" aria-hidden="true">MU—3D / 001</span>
      </div>
    </div>
  </section>;
}
