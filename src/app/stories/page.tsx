import type { Metadata } from "next";
import { StoryCard } from "@/components/stories/StoryCard";
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
      <header className="page-hero">
        <p className="eyebrow">Archivo / Fotografía</p>
        <h1>Archivo visual</h1>
        <p className="lede">Una secuencia de fotografías del archivo de Marcos Ullauri. Cada imagen forma parte de una mirada más amplia sobre las personas, los lugares y los momentos que merece la pena conservar.</p>
      </header>
      <section className="section">
        <div className="container story-grid">
          {stories.map((story, index) => <Reveal key={story.slug} delay={index * 70}><StoryCard story={story} /></Reveal>)}
        </div>
      </section>
    </main>
  );
}
