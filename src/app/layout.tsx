import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AmbientSoundToggle } from "@/components/AmbientSoundToggle";
import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "Marcos Ullauri — Historias visuales", template: "%s — Marcos Ullauri" },
  description: "Fotografía, narración visual y trabajo documental de Marcos Ullauri, en el noroccidente de Pichincha, Ecuador.",
  ...(siteUrl ? { alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    type: "website", title: "Marcos Ullauri — Historias visuales",
    description: "Fotografía, narración visual y trabajo documental de Marcos Ullauri.",
    ...(siteUrl ? { url: siteUrl } : {}), siteName: "Marcos Ullauri", locale: "es_EC"
  },
  twitter: { card: "summary_large_image", title: "Marcos Ullauri — Historias visuales", description: "Fotografía, narración visual y trabajo documental de Marcos Ullauri." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><a className="skip-link" href="#main">Saltar al contenido</a><div className="scroll-progress" aria-hidden="true" /><Header /><AmbientSoundToggle />{children}<Footer /></body></html>;
}
