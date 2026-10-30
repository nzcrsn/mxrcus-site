import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { MediaMosaic } from "@/components/MediaMosaic";

export const metadata: Metadata = {
  title: "Memorias y Trayectorias",
  description: "Historias documentales, personas, cultura y memoria a través de Memorias y Trayectorias.",
  alternates: { canonical: "/memorias/" }
};

export default function MemoriasPage() {
  return (
    <main id="main">
      <header className="page-hero page-hero-memorias">
        <p className="eyebrow">Archivo documental · Noroccidente de Pichincha</p>
        <h1>Memorias y Trayectorias</h1>
        <p className="lede">Un proyecto audiovisual dedicado a contar las historias, experiencias y trayectorias de las personas que forman parte de nuestra comunidad, nuestra cultura y nuestra memoria.</p>
      </header>
      <section className="section">
        <div className="container archive-feature">
          <Reveal className="archive-copy">
            <p className="eyebrow">Historia destacada</p><h2>San Miguel de Arcángel</h2>
            <p>La historia de la fe y de quienes, desde San Miguel de los Bancos, contribuyeron a construir la identidad de un pueblo y del noroccidente de Pichincha. Un recorrido por sus personajes, sus recuerdos y la huella que dejaron en una comunidad marcada por la fe, el trabajo y la humildad.</p>
            <p className="caption">Una historia alrededor del Padre Bernabé de Larraul.</p>
            <Link className="text-link" href="https://www.youtube.com/watch?v=B9bjsZKAHSM&t=42s" target="_blank" rel="noreferrer">Ver documental</Link>
          </Reveal>
          <Reveal className="archive-media" delay={100}><div className="archive-media-placeholder" aria-hidden="true"><span>ARCHIVO DOCUMENTAL / 001</span></div></Reveal>
        </div>
      </section>
      <MediaMosaic eyebrow="Memorias y Trayectorias" title="La memoria vive en sus imágenes." />
    </main>
  );
}
