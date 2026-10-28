import type { CoverageProject } from "@/types/coverage";

export const coverageProjects: CoverageProject[] = [
  {
    slug: "live-event-coverage",
    title: "Noroccidente Festival 2025",
    client: "Comuna San Vicente de Andoas",
    year: "2025",
    location: "Pedro Vicente Maldonado - Ecuador",
    type: "Retransmisión en directo · Streaming",
    role: "Dirección · Cámara · Producción en directo",
    description:
      "Cobertura y transmisión en vivo del Noroccidente Fest 2025, llevando tres días de música, cultura y comunidad más allá del escenario.",
    video: "/videos/coverage-01.mp4",
    poster: "/images/story-01.png",
    featured: true
  },
  {
    slug: "institutional-transmission",
    title: "Exporferis Ganadera PVM",
    client: "Asociación de ganaderos de Pedro Vicente Maldonado",
    year: "2026",
    location: "Pedro Vicente Maldonado - Ecuador",
    type: "Retransmisión · Multi-cámara",
    role: "Cámara · Producción · Streaming",
    description:
      "Diseñado para transmisiones institucionales, culturales y de cara pública donde la cobertura necesita sentirse pulida sin perder la energía del evento.",
    video: "/videos/coverage-02.mp4",
    poster: "/images/story-02.jpg"
  },
  {
    slug: "field-coverage",
    title: "Gel Ego",
    client: "Ego",
    year: "2026",
    location: "Santo Domingo - Ecuador",
    type: "Iniciativa audiovisual · Contenido espontáneo",
    role: "Cámara  · Edición",
    description:
      "Contenido audiovisual espontáneo para marcas, capturando momentos reales, ideas frescas y situaciones que conectan de forma natural con la audiencia.",
    video: "/videos/coverage-03.mp4",
    poster: "/images/story-03.png"
  }
];
