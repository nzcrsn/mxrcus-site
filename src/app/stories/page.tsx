import type { Metadata } from "next";
import { StoryCard } from "@/components/stories/StoryCard";
import { Reveal } from "@/components/ui/Reveal";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Stories",
  description: "Selected photography and visual storytelling projects by Marcos Ullauri.",
  alternates: { canonical: "/stories/" }
};

export default function StoriesPage() {
  return (
    <main id="main">
      <header className="page-hero">
        <p className="eyebrow">Archive / Selected work</p>
        <h1>Stories</h1>
        <p className="lede">Photography is organized as narrative projects rather than a flat gallery. Final launch categories will be confirmed with the approved content set.</p>
      </header>
      <section className="section">
        <div className="container story-grid">
          {stories.map((story, index) => <Reveal key={story.slug} delay={index * 70}><StoryCard story={story} /></Reveal>)}
        </div>
      </section>
    </main>
  );
}
