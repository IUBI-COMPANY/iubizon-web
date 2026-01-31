"use client";

import { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { OrganizationsTechnicalServiceStepsGroup } from "@/app/servicios/tecnico/organizacion/OrganizationsTechnicalServiceStepsGroup";
import FAQAccordion from "@/components/ui/layout/FAQAccordion";
import AnimateCards from "@/components/ui/AnimateCards";
import Brands from "@/components/ui/Brands";
import { OrganizationGallery } from "@/components/ui/OrganizationGallery";
import { Button } from "@/components/ui/Button";
import WorksGallery from "@/components/ui/WorksGallery";

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.iubizon.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Servicios",
      item: "https://www.iubizon.com/servicios",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Servicio Técnico",
      item: "https://www.iubizon.com/servicios/tecnico",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Organización",
      item: "https://www.iubizon.com/servicios/tecnico/organizacion",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Servicio técnico de Proyectores para instituciones y empresas en Lima, Perú | iubizon",
  description:
    "Servicio técnico de mantenimiento y reparación de proyectores en Lima y todo Perú a instituciones y/o empresas. Soluciones rápidas, repuestos originales y atención personalizada. Cotiza gratis. Trabajamos con escuelas, universidades, oficinas y más.",
  keywords: [
    "mantenimiento de proyectores para empresas",
    "mantenimiento de proyectores para colegios",
    "reparación de proyectores para escuelas",
    "reparación de proyectores para universidades",
    "reparación de proyectores para oficinas",
    "servicio técnico de proyectores",
    "arreglo de proyectores en Lima",
    "arreglo y mantenimiento preventivo de proyectores Perú",
    "iubizon",
    "proyectores Epson",
    "proyectores BenQ",
    "proyectores Optoma",
    "soporte de proyectores",
    "repuestos de proyectores",
  ],
  authors: [{ name: "iubizon" }],
  creator: "iubizon",
  publisher: "iubizon",
  metadataBase: new URL(
    "https://www.iubizon.com/servicios/tecnico/organizacion",
  ),
  alternates: {
    canonical: "https://www.iubizon.com/servicios/tecnico/organizacion",
  },
  openGraph: {
    title:
      "Servicio Técnico de Proyectores | Mantenimiento y Reparación Especializada",
    description:
      "Servicio técnico profesional de proyectores en Lima. Mantenimiento preventivo, reparaciones especializadas y soporte técnico con garantía.",
    url: "https://www.iubizon.com/servicios/tecnico/organizacion",
    siteName: "iubizon",
    images: [
      {
        url: "/images/proyectores-reparaciones.webp",
        width: 1200,
        height: 630,
        alt: "Servicio técnico especializado de proyectores",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicio Técnico de Proyectores | Mantenimiento y Reparación",
    description:
      "Servicio técnico profesional de proyectores en Lima. Mantenimiento preventivo y reparaciones especializadas con garantía.",
    images: ["/images/proyectores-reparaciones.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function OrganizationsTechnicalServicePage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "iubizon",
              image: "https://www.iubizon.com/images/logo.png",
              "@id": "https://www.iubizon.com/servicios/tecnico/organizacion",
              url: "https://www.iubizon.com/servicios/tecnico/organizacion",
              telephone: "+51 972 300 301",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pje. los Jazmines 181",
                addressLocality: "Chorrillos",
                addressRegion: "Lima",
                addressCountry: "PE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.186,
                longitude: -77.014,
              },
              openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
              sameAs: [
                "https://www.facebook.com/iubizon/",
                "https://www.instagram.com/iubizon",
                "https://www.tiktok.com/@iubizon",
              ],
              description:
                "Servicio técnico de mantenimiento y reparación de proyectores Epson, BenQ, Sony y más en Lima. Diagnóstico, repuestos originales y atención a domicilio.",
            }),
          }}
        />
      </Head>
      <main>
        <header
          className="relative h-[33rem] bg-gradient-to-br from-secondary/10 via-secondary to-secondary/0 overflow-hidden"
          role="banner"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/organizacion-reparacion.jpg"
              alt="Servicio técnico de proyectores Epson, BenQ, Sony en Lima"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-blue-500/20"></div>
          </div>
        </header>
        <section
          className="relative -mt-[33rem] sm:-mt-[32rem] z-20 px-4"
          id="contact-form"
          aria-label="Formulario de contacto para reparación de proyectores"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative z-10 h-auto px-[2em] pt-[3em] 2xl:pt-[5em] flex flex-col justify-center items-center text-center">
              <div className="max-w-4xl mx-auto mb-8">
                <h1 className="text-3xl md:text-[2.5em] font-bold text-white mb-4 leading-tight">
                  Mantenimiento y reparación de Proyectores para Instituciones y
                  Empresas
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                  Soluciones profesionales en mantenimiento, diagnóstico y
                  reparación de proyectores en Lima para instituciones y/o
                  empresas. Ofrecemos garantía, repuestos para todas las marcas
                  originales y atención 24/7.
                </p>
              </div>
            </div>
            <OrganizationsTechnicalServiceStepsGroup />
          </div>
        </section>
        <WorksGallery type="organization" />
        <AnimateCards />
        <OrganizationGallery />

        <section
          className="py-12 sm:py-16 lg:py-20 bg-white"
          aria-label="Marcas con las que trabajamos"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Brands
              title="Marcas con las que trabajamos"
              description="Reparación, mantenimiento y repuestos originales para las principales marcas profesionales de proyectores del mercado"
            />

            {/* Línea decorativa opcional + texto de confianza */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="inline-block w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mb-4" />
              <p className="text-sm text-gray-500">
                Repuestos originales • Diagnóstico avanzado • Garantía en todos
                los servicios
              </p>
            </div>
          </div>
        </section>

        <FAQAccordion />
        <section
          className="py-16 relative bg-gradient-to-br from-secondary/10 via-secondary to-secondary/0 overflow-hidden"
          aria-label="Solicita reparación de proyector"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/proyectores-reparaciones.webp"
              alt="Servicio técnico de proyectores Epson, BenQ, Sony en Lima"
              fill
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-blue-900/50"></div>
          </div>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/30 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Tu Proyector Necesita Reparación?
              </h2>
              <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
                Técnicos especializados listos para devolver tu proyector Epson,
                BenQ, Sony y más a su máximo rendimiento.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/95">
                <div className="flex items-center gap-2">
                  <CheckCircle
                    className="w-5 h-5 text-primary"
                    aria-label="Check"
                  />
                  <span className="text-sm font-medium">Respuesta en 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle
                    className="w-5 h-5 text-primary"
                    aria-label="Check"
                  />
                  <span className="text-sm font-medium">6 meses garantía</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle
                    className="w-5 h-5 text-primary"
                    aria-label="Check"
                  />
                  <span className="text-sm font-medium">Técnicos expertos</span>
                </div>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() =>
                    document.getElementById("contact-form")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  variant="primary"
                  size="lg"
                  className="text-lg"
                  aria-label="Solicitar reparación de proyector"
                >
                  Solicitar Reparación Ahora
                </Button>
                <p className="text-sm text-white/80">
                  ⚡ Proceso rápido • 📧 Confirmación por email
                </p>
                <Link
                  href="/contacto"
                  className="underline text-white/90 hover:text-primary"
                >
                  ¿Tienes dudas? Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
