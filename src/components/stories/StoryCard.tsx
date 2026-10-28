import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/types/story";

export function StoryCard({ story, priority = false }: { story: Story; priority?: boolean }) {
  return (
    <article className="story-card">
      <Link href={`/stories/${story.slug}/`} className="story-card-link">
        <div className="story-media">
          <Image
            src={story.cover}
            alt={story.coverAlt}
            fill
            sizes="(max-width: 719px) 100vw, (max-width: 1199px) 50vw, 42vw"
            priority={priority}
          />
        </div>
        <div className="story-card-copy">
          <p className="story-meta">{story.category} · {story.year}</p>
          <h3>{story.title}</h3>
          <p>{story.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
