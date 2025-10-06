import { Metadata } from "next";
import { RepairsContactForm } from "@/components/ui/RepairsContactForm";
import {
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Servicio Técnico de Proyectores | Mantenimiento y Reparación Especializada | iubizon",
  description:
    "Servicio técnico profesional de proyectores en Lima. Mantenimiento preventivo, reparaciones especializadas y soporte técnico con garantía. Técnicos expertos en todas las marcas.",
  keywords: [
    "servicio técnico proyectores",
    "reparación proyectores Lima",
    "mantenimiento proyectores",
    "servicio técnico Epson",
    "reparación proyectores empresas",
    "mantenimiento preventivo proyectores",
    "técnico proyectores domicilio",
    "servicio proyectores educación",
    "reparación lámparas proyector",
    "calibración proyectores",
    "limpieza filtros proyector",
    "proyectores corporativos",
  ],
  authors: [{ name: "iubizon" }],
  creator: "iubizon",
  publisher: "iubizon",
  metadataBase: new URL("https://iubizon.com/repairs"),
  alternates: {
    canonical: "/repairs",
  },
  openGraph: {
    title:
      "Servicio Técnico de Proyectores | Mantenimiento y Reparación Especializada",
    description:
      "Servicio técnico profesional de proyectores en Lima. Mantenimiento preventivo, reparaciones especializadas y soporte técnico con garantía.",
    url: "/repairs",
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

export default function RepairsPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Banner Section */}
        <div className="relative h-[60vh] bg-gradient-to-br from-secondary/10 via-secondary to-secondary/0 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/proyectores-reparaciones.webp"
              alt="Servicio técnico de proyectores"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-blue-900/50"></div>
          </div>
          {/* Hero Content */}
          <div className="relative z-10 h-auto p-[2em] flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl mx-auto mb-8">
              <h1 className="text-3xl md:text-[2.5em] font-bold text-white mb-4 leading-tight">
                Mantenimiento y Reparación
                <span className="block text-primary font-bold">
                  Especializada de Proyectores
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Servicio técnico profesional con garantía • Mantenimiento
                preventivo especializado • Reparaciones con los mejores
                repuestos
              </p>
            </div>
          </div>
        </div>

        {/* Form Section - Overlapping */}
        <div className="relative -mt-60 sm:-mt-70 z-20 px-4">
          <div className="max-w-4xl mx-auto">
            <RepairsContactForm />
          </div>
        </div>

        {/* How It Works Section */}
        <section
          className="mt-10 pt-0 pb-16 bg-white"
          itemScope
          itemType="https://schema.org/HowTo"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                ¿Cómo Funciona Nuestro Servicio de Reparación de Proyectores?
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                itemProp="description"
              >
                Un proceso simple y eficiente para que tu proyector vuelva a
                funcionar como nuevo con nuestro servicio técnico especializado
                en Lima
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Step 1 */}
              <div
                className="text-center"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-blue-600" />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  itemProp="name"
                >
                  1. Solicita Tu Servicio Técnico de Proyectores
                </h3>
                <p className="text-gray-600" itemProp="text">
                  Completa el formulario con los datos de contacto, información
                  de tu proyector y programa tu visita técnica. Nuestro equipo
                  especializado en mantenimiento de proyectores revisará tu
                  solicitud inmediatamente.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className="text-center"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-10 h-10 text-orange-600" />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  itemProp="name"
                >
                  2. Diagnóstico Técnico Especializado
                </h3>
                <p className="text-gray-600" itemProp="text">
                  Especifica la marca, modelo y describe el problema de tu
                  proyector. Esto nos permite preparar las herramientas
                  específicas y repuestos originales necesarios para la
                  reparación.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className="text-center"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-green-600" />
                </div>
                <h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  itemProp="name"
                >
                  3. Servicio a Domicilio en Lima
                </h3>
                <p className="text-gray-600" itemProp="text">
                  Selecciona fecha, horario y proporciona tu dirección completa
                  en Lima. Nuestro técnico especializado llegará puntualmente
                  para realizar la reparación o mantenimiento de tu proyector.
                </p>
              </div>
            </div>

            {/* Services Section with Schema */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article
                className="bg-blue-50 p-6 rounded-xl"
                itemScope
                itemType="https://schema.org/Service"
              >
                <h4
                  className="text-lg font-bold text-blue-900 mb-4 flex items-center"
                  itemProp="name"
                >
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Mantenimiento Preventivo de Proyectores
                </h4>
                <p className="text-blue-800" itemProp="description">
                  Programamos revisiones periódicas para prolongar la vida útil
                  de tu proyector en Lima. Incluye limpieza de filtros,
                  calibración de imagen, verificación de componentes críticos y
                  optimización del rendimiento.
                </p>
                <meta itemProp="serviceType" content="Mantenimiento" />
                <meta itemProp="areaServed" content="Lima, Perú" />
              </article>
              <article
                className="bg-orange-50 p-6 rounded-xl"
                itemScope
                itemType="https://schema.org/Service"
              >
                <h4
                  className="text-lg font-bold text-orange-900 mb-4 flex items-center"
                  itemProp="name"
                >
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Reparación Especializada de Proyectores
                </h4>
                <p className="text-orange-800" itemProp="description">
                  Solucionamos problemas de imagen, sonido, conectividad,
                  reemplazo de lámparas, reparación de ventiladores y cualquier
                  falla técnica con repuestos originales y garantía de 6 meses.
                </p>
                <meta itemProp="serviceType" content="Reparación" />
                <meta itemProp="areaServed" content="Lima, Perú" />
              </article>
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section
          className="py-16 bg-gray-50"
          aria-labelledby="benefits-heading"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="benefits-heading"
                className="text-3xl md:text-4xl font-bold text-color-secondary mb-4"
              >
                ¿Por Qué Elegir Nuestro Servicio Técnico?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Garantía, rapidez y experiencia que respaldan nuestro compromiso
                con la excelencia
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-color-secondary mb-4">
                  Garantía de Servicio
                </h3>
                <p className="text-gray-600">
                  6 meses de garantía en todas nuestras reparaciones de
                  proyectores
                </p>
              </article>
              <article className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-color-secondary mb-4">
                  Atención Rápida
                </h3>
                <p className="text-gray-600">
                  Respondemos en menos de 24 horas y servicio a domicilio
                </p>
              </article>
              <article className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-color-secondary mb-4">
                  Técnicos Especializados
                </h3>
                <p className="text-gray-600">
                  Especialistas con años de experiencia en todas las marcas
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* FAQ Section for SEO */}
        <section
          className="py-16 bg-gray-50"
          itemScope
          itemType="https://schema.org/FAQPage"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold text-color-secondary mb-4"
              >
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-gray-600">
                Resolvemos las dudas más comunes sobre nuestro servicio técnico
              </p>
            </div>
            <div className="space-y-8">
              <article
                itemScope
                itemType="https://schema.org/Question"
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3
                  itemProp="name"
                  className="text-lg font-bold text-color-secondary mb-3"
                >
                  ¿Qué marcas de proyectores reparan?
                </h3>
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p itemProp="text" className="text-gray-700">
                    Trabajamos principalmente con proyectores Epson como nuestra
                    especialidad principal. También reparamos otras marcas
                    reconocidas como Aldo, BenQ, Sony y ViewSonic. Nuestros
                    técnicos están especializados en proyectores para educación,
                    empresas y uso doméstico.
                  </p>
                </div>
              </article>

              <article
                itemScope
                itemType="https://schema.org/Question"
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3
                  itemProp="name"
                  className="text-lg font-bold text-color-secondary mb-3"
                >
                  ¿Cuánto tiempo toma la reparación?
                </h3>
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p itemProp="text" className="text-gray-700">
                    Primero realizamos un diagnóstico técnico completo para
                    identificar el problema exacto. Posterior al diagnóstico,
                    las reparaciones toman mínimo 2 días hábiles. Para casos más
                    complejos que requieren repuestos especiales, el tiempo
                    puede extenderse de 3 a 7 días hábiles. Siempre informamos
                    el tiempo estimado después del diagnóstico.
                  </p>
                </div>
              </article>

              <article
                itemScope
                itemType="https://schema.org/Question"
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3
                  itemProp="name"
                  className="text-lg font-bold text-color-secondary mb-3"
                >
                  ¿Tienen servicio a domicilio en Lima?
                </h3>
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p itemProp="text" className="text-gray-700">
                    Sí, brindamos servicio técnico a domicilio en toda Lima y
                    distritos aledaños. Nuestros técnicos especializados llegan
                    con todas las herramientas necesarias para diagnosticar y
                    reparar tu proyector en el lugar.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
