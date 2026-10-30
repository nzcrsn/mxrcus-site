export type StoryCategory = "Documentary" | "Brand" | "Event" | "Portrait" | "Archivo";

export interface Story {
  slug: string;
  title: string;
  category: StoryCategory;
  year?: string;
  location?: string;
  excerpt: string;
  description: string;
  cover: string;
  coverAlt: string;
  gallery: Array<{ src: string; alt: string; orientation?: "portrait" | "landscape" }>;
  credits?: string[];
  featured?: boolean;
}
