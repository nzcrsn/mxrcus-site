import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { getStory, stories } from "@/data/stories";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical: `/stories/${story.slug}/` }
  };
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <main id="main">
      <header className="story-detail-hero">
        <div className="hero-media">
          <Image src={story.cover} alt={story.coverAlt} fill priority sizes="100vw" />
        </div>
        <div className="story-detail-copy">
          <h1>{story.title}</h1>
          <p className="story-meta">{story.category} · {story.year}{story.location ? ` · ${story.location}` : ""}</p>
        </div>
      </header>

      <section className="section">
        <div className="container story-body">
          <Reveal className="story-intro"><p>{story.description}</p></Reveal>
        </div>
        <div className="container story-gallery">
          {story.gallery.map((image, index) => (
            <Reveal key={`${image.src}-${index}`} delay={Math.min(index * 70, 210)}>
              <figure className={`gallery-item ${image.orientation ?? "landscape"}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 719px) 100vw, 90vw" />
              </figure>
            </Reveal>
          ))}
          {story.credits?.length ? (
            <div className="credits">
              <p className="eyebrow">Credits</p>
              {story.credits.map((credit) => <p key={credit}>{credit}</p>)}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
