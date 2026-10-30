import Image from "next/image";

const items = [
  { src: "/media/photography/frames/frame-02.jpg", alt: "Fotografía del archivo visual", label: "FRAME / 01", shape: "wide" },
  { src: "/media/photography/frames/frame-03.png", alt: "Fotografía vertical del archivo visual", label: "FRAME / 02", shape: "tall" },
  { src: "/media/placeholders/visual-07.svg", alt: "Composición gráfica abstracta del archivo", label: "FRAME / 03", shape: "square" },
  { src: "/media/photography/frames/frame-04.jpg", alt: "Fotografía del archivo visual", label: "FRAME / 04", shape: "wide" }
] as const;

export function MediaMosaic({ title, eyebrow = "Archivo visual" }: { title: string; eyebrow?: string }) {
  return (
    <section className="section media-mosaic-section" aria-label={title}>
      <div className="container">
        <div className="media-mosaic-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <div className="media-mosaic-grid">
          {items.map((item, index) => (
            <figure className={"media-mosaic-item media-mosaic-" + item.shape} key={item.label}>
              <div className="media-mosaic-image">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 719px) 88vw, (max-width: 1100px) 44vw, 30vw" />
                <span className="media-mosaic-index" aria-hidden="true">0{index + 1}</span>
              </div>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
