import type { Metadata } from "next";
import TechnicalServicePage from "./TechnicalServicePage";

// ==========================
// 🔹 Dynamic Metada
// ==========================
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Servicio técnico en Lima y Perú | iubizon",
    description:
      "Servicio técnico de mantenimiento y reparación de proyectores en Lima y todo Perú. Soluciones rápidas, repuestos originales y atención personalizada. Cotiza gratis.",
    keywords: [
      "mantenimiento de proyectores",
      "reparación de proyectores",
      "servicio técnico de proyectores",
      "Lima",
      "Perú",
      "iubizon",
      "proyectores Epson",
      "proyectores BenQ",
      "proyectores Optoma",
      "soporte de proyectores",
      "repuestos de proyectores",
    ],
    alternates: {
      canonical: "https://www.iubizon.com/servicios/tecnico",
    },
    openGraph: {
      type: "website",
      title: "Servicio técnico en Lima y Perú | iubizon",
      url: "https://www.iubizon.com/servicios/tecnico",
      description:
        "Servicio profesional de mantenimiento y reparación de proyectores en Lima y todo Perú. Soluciones rápidas, repuestos originales y atención personalizada.",
      images: [
        {
          url: "https://www.iubizon.com/soporte-tecnico-y-mantenimiento.jpg",
          width: 1200,
          height: 630,
          alt: "Servicio de reparación de proyectores en Lima y Perú",
        },
      ],
      siteName: "iubizon",
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title: "Servicio técnico en Lima y Perú | iubizon",
      description:
        "Servicio profesional de mantenimiento y reparación de proyectores en Lima y todo Perú. Soluciones rápidas, repuestos originales y atención personalizada.",
      images: [
        {
          url: "https://www.iubizon.com/soporte-tecnico-y-mantenimiento.jpg",
          alt: "Servicio de reparación de proyectores en Lima y Perú",
        },
      ],
      site: "@iubizon",
    },
    authors: [{ name: "iubi", url: "https://www.iubi.pe" }],
    publisher: "iubizon",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    category: "Servicios",
    applicationName: "iubizon",
    generator: "Next.js",
    metadataBase: new URL("https://www.iubizon.com"),
  };
}

// ==========================
// 🔹 Página principal (Server)
// ==========================
export default async function Page() {
  return <TechnicalServicePage />;
}
