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
      "Registro audiovisual de tres días de música, expresiones culturales y encuentros comunitarios. Una cobertura que prolonga la experiencia del festival y la comparte con quienes no pudieron estar allí.",
    video: "/media/video/coberturas/noroccidente-fest-2025.mp4",
    poster: "/media/photography/frames/frame-01.png",
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
      "Registro multicámara de la actividad ganadera local, sus protagonistas y los encuentros que dan forma a este espacio productivo y comunitario.",
    video: "/media/video/coberturas/exporferis-ganadera-2026.mp4",
    poster: "/media/photography/frames/frame-02.jpg"
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
      "Una pieza de contenido para Ego que observa el producto en situaciones cotidianas y construye una historia breve desde gestos y momentos espontáneos.",
    video: "/media/video/coberturas/ego-gel-2026.mp4",
    poster: "/media/photography/frames/frame-03.png"
  }
];
