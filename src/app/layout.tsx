import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "@/styles/globals.css";

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marcos Ullauri — Visual Stories & Memories",
    template: "%s — Marcos Ullauri"
  },
  description: "Photography, visual storytelling and documentary work by Marcos Ullauri.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Marcos Ullauri — Visual Stories & Memories",
    description: "Photography, visual storytelling and documentary work by Marcos Ullauri.",
    url: siteUrl,
    siteName: "Marcos Ullauri"
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcos Ullauri — Visual Stories & Memories",
    description: "Photography, visual storytelling and documentary work by Marcos Ullauri."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="scroll-progress" aria-hidden="true" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
