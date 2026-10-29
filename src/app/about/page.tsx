import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sobre Marcos",
  description: "Conoce a Marcos Ullauri, fotógrafo y creador de historias visuales.",
  alternates: { canonical: "/about/" }
};

export default function AboutPage() {
  return (
    <main id="main">
      <header className="page-hero">
        <p className="eyebrow">Detrás de la cámara</p>
        <h1>Primero las personas. Después, la imagen.</h1>
        <p className="lede">Fotografía, creación de contenidos y narración documental. Mi trabajo parte de una idea sencilla: acercarme a las personas, observar lo que sucede y encontrar la historia que existe detrás de cada momento.</p>
      </header>
      <section className="section">
        <div className="container archive-feature">
          <Reveal className="archive-media"><Image src="/images/profile.jpg" alt="Retrato de Marcos Ullauri" fill sizes="(max-width: 719px) 100vw, 50vw" /></Reveal>
          <Reveal className="archive-copy" delay={100}>
            <p className="eyebrow">Mi forma de mirar</p><h2>Contar con atención y respeto.</h2>
            <p>No busco solamente registrar un instante. Busco entenderlo, darle contexto y conservar aquello que hace que una imagen tenga algo que contar.</p>
            <Link className="text-link" href="/contact/">Trabajemos juntos</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
