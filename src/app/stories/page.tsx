import type { Metadata } from "next";
import Image from "next/image";
import { StoryCard } from "@/components/stories/StoryCard";
import { HorizontalFilmstrip } from "@/components/HorizontalFilmstrip";
import { Reveal } from "@/components/ui/Reveal";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Archivo visual",
  description: "Archivo visual y fotografía de Marcos Ullauri.",
  alternates: { canonical: "/stories/" }
};

export default function StoriesPage() {
  return (
    <main id="main">
      <header className="page-hero page-hero-image page-hero-stories">\n        <Image className="page-hero-backdrop" src="/media/photography/frames/frame-01.png" alt="" fill priority sizes="100vw" />
        <p className="eyebrow">Archivo / Fotografía</p>
        <h1>Archivo visual</h1>
        <p className="lede">Una secuencia de fotografías del archivo de Marcos Ullauri. Cada imagen forma parte de una mirada más amplia sobre las personas, los lugares y los momentos que merece la pena conservar.</p>
      </header>
      <HorizontalFilmstrip />
      <section className="section">
        <div className="container story-grid">
          {stories.map((story, index) => <Reveal key={story.slug} delay={index * 70}><StoryCard story={story} /></Reveal>)}
        </div>
      </section>
    </main>
  );
}
