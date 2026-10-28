import type { MetadataRoute } from "next";
import { stories } from "@/data/stories";

export const dynamic = "force-static";

const baseUrl = "https://mxrcos.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/coverage/", "/memorias/", "/about/", "/contact/"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7
  }));

  return [
    ...routes,
    ...stories.map((story) => ({
      url: `${baseUrl}/stories/${story.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}