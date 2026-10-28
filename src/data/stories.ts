import type { Story } from "@/types/story";

export const stories: Story[] = [
  {
    slug: "las-mercedes",
    title: "Las Mercedes",
    category: "Documentary",
    year: "2026",
    location: "Santo Domingo, Ecuador",
    excerpt: "A visual record of people, livestock and agricultural identity.",
    description:
      "A placeholder case study for the first implementation. Final copy and photography should document the atmosphere, people and context of the project rather than read like a conventional gallery caption.",
    cover: "/images/story-01.svg",
    coverAlt: "Abstract placeholder for the Las Mercedes documentary story",
    gallery: [
      { src: "/images/story-01.svg", alt: "Placeholder image for Las Mercedes", orientation: "landscape" },
      { src: "/images/story-02.svg", alt: "Second placeholder image for Las Mercedes", orientation: "portrait" }
    ],
    credits: ["Photography — Marcos Ullauri"],
    featured: true
  },
  {
    slug: "brand-stories",
    title: "Brand Stories",
    category: "Brand",
    year: "2026",
    location: "Ecuador",
    excerpt: "Commercial imagery shaped with the same attention given to documentary work.",
    description:
      "A placeholder commercial project demonstrating how brand work can live inside the same editorial system without becoming a separate agency-style experience.",
    cover: "/images/story-02.svg",
    coverAlt: "Abstract placeholder for a commercial brand story",
    gallery: [
      { src: "/images/story-02.svg", alt: "Placeholder brand project image", orientation: "portrait" },
      { src: "/images/story-03.svg", alt: "Second placeholder brand project image", orientation: "landscape" }
    ],
    credits: ["Creative / Photography — Marcos Ullauri"],
    featured: true
  },
  {
    slug: "people-and-place",
    title: "People & Place",
    category: "Portrait",
    year: "2026",
    location: "Ecuador",
    excerpt: "Portraiture that keeps the person and their environment in the same story.",
    description:
      "A placeholder portrait series showing the intended rhythm of close human detail and environmental context.",
    cover: "/images/story-03.svg",
    coverAlt: "Abstract placeholder for a portrait story",
    gallery: [
      { src: "/images/story-03.svg", alt: "Placeholder portrait image", orientation: "landscape" },
      { src: "/images/story-04.svg", alt: "Second placeholder portrait image", orientation: "portrait" }
    ],
    credits: ["Photography — Marcos Ullauri"],
    featured: true
  }
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}
