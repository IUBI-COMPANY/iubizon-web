"use client";

import { Metadata } from "next";
import { TechnicalServiceForm } from "@/components/ui/TechnicalServiceForm";
import {
  CheckCircle,

  MapPin,
  Phone,

  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaRegClock, FaWrench } from 'react-icons/fa';
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  metadataBase: new URL("https://www.iubizon.com/servicios/tecnico"),
  alternates: {
    canonical: "https://www.iubizon.com/servicios/tecnico",
  },
  openGraph: {
    title:
      "Servicio Técnico de Proyectores | Mantenimiento y Reparación Especializada",
    description:
      "Servicio técnico profesional de proyectores en Lima. Mantenimiento preventivo, reparaciones especializadas y soporte técnico con garantía.",
    url: "https://www.iubizon.com/servicios/tecnico",
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

export default function TechnicalServicePage() {
  const gallery = [
    {
      src: "/images/proyectores-reparaciones.webp",
      alt: "Reparación de proyectores en taller",
      caption: "Reparación y pruebas en nuestro taller especializado",
    },
    {
      src: "/images/foto-proyectores.jpeg",
      alt: "Técnico revisando proyector",
      caption: "Diagnóstico técnico a domicilio o en taller",
    },
    {
      src: "/images/education-projectors.jpg",
      alt: "Proyectores para educación",
      caption: "Soluciones para aulas y centros educativos",
    },
    {
      src: "/images/seo-banner.jpg",
      alt: "Servicio técnico profesional",
      caption: "Atención rápida y garantía en todas nuestras reparaciones",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight' && selectedIndex !== null) {
        setSelectedIndex((selectedIndex + 1) % gallery.length);
      }
      if (e.key === 'ArrowLeft' && selectedIndex !== null) {
        setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
      }
    }

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selectedIndex, gallery.length]);

  useEffect(() => {
    if (selectedIndex !== null) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [selectedIndex]);

  return (
    <main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "iubizon",
              image: "https://www.iubizon.com/images/logo.png",
              "@id": "https://www.iubizon.com/servicios/tecnico",
              url: "https://www.iubizon.com/servicios/tecnico",
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
      <header
        className="relative h-[33rem] bg-gradient-to-br from-secondary/10 via-secondary to-secondary/0 overflow-hidden"
        role="banner"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/foto-proyectores.jpeg"
            alt="Servicio técnico de proyectores Epson, BenQ, Sony en Lima"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/50"></div>
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
                Servicio Técnico de Proyectores
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Soluciones profesionales en mantenimiento, diagnóstico y
                reparación de proyectores en Lima. Garantía, repuestos
                originales y atención a domicilio para todas las marcas.
              </p>
            </div>
          </div>
          <TechnicalServiceForm />
        </div>
      </section>
      <section
        className="mt-10 pt-0 pb-16 bg-white"
        itemScope
        itemType="https://schema.org/HowTo"
        aria-label="Cómo funciona el servicio de reparación de proyectores"
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
              Recibimos tu proyector Epson, BenQ, Sony u otra marca en Lima,
              realizamos diagnóstico profesional y usamos repuestos originales
              para que funcione como nuevo. Atención rápida y resultados
              garantizados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <article
              className="text-center"
              itemScope
              itemType="https://schema.org/HowToStep"
              aria-label="Solicita tu servicio técnico de proyectores"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone
                  className="w-10 h-10 text-blue-600"
                  aria-label="Teléfono"
                />
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                1. Solicita Tu Servicio Técnico
              </h3>
              <p className="text-gray-600" itemProp="text">
                Completa el formulario y agenda tu visita técnica en Lima.
              </p>
            </article>
            <article
              className="text-center"
              itemScope
              itemType="https://schema.org/HowToStep"
              aria-label="Diagnóstico técnico especializado"
            >
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench
                  className="w-10 h-10 text-orange-600"
                  aria-label="Herramienta"
                />
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                2. Diagnóstico Técnico
              </h3>
              <p className="text-gray-600" itemProp="text">
                Evaluamos tu proyector y te informamos la solución recomendada.
              </p>
            </article>
            <article
              className="text-center"
              itemScope
              itemType="https://schema.org/HowToStep"
              aria-label="Servicio a domicilio en Lima"
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin
                  className="w-10 h-10 text-green-600"
                  aria-label="Ubicación"
                />
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                itemProp="name"
              >
                3. Servicio a Domicilio en Lima
              </h3>
              <p className="text-gray-600" itemProp="text">
                El servicio a domicilio es solo para diagnóstico. La reparación
                se realiza en nuestro taller especializado.
              </p>
            </article>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
              className="bg-blue-50 p-6 rounded-xl"
              itemScope
              itemType="https://schema.org/Service"
              aria-label="Mantenimiento preventivo de proyectores"
            >
              <h4
                className="text-lg font-bold text-blue-900 mb-4 flex items-center"
                itemProp="name"
              >
                <CheckCircle className="w-6 h-6 mr-2" aria-label="Check" />
                Mantenimiento Preventivo de Proyectores
              </h4>
              <p className="text-blue-800" itemProp="description">
                Revisiones periódicas para prolongar la vida útil de tu
                proyector Epson, BenQ, Sony y más. Limpieza de filtros,
                calibración de imagen, verificación de componentes y
                optimización del rendimiento.
              </p>
              <meta itemProp="serviceType" content="Mantenimiento" />
              <meta itemProp="areaServed" content="Lima, Perú" />
            </article>
            <article
              className="bg-orange-50 p-6 rounded-xl"
              itemScope
              itemType="https://schema.org/Service"
              aria-label="Reparación especializada de proyectores"
            >
              <h4
                className="text-lg font-bold text-orange-900 mb-4 flex items-center"
                itemProp="name"
              >
                <CheckCircle className="w-6 h-6 mr-2" aria-label="Check" />
                Reparación Especializada de Proyectores
              </h4>
              <p className="text-orange-800" itemProp="description">
                Solucionamos problemas de imagen, sonido, conectividad,
                reemplazo de lámparas, reparación de ventiladores y cualquier
                falla técnica con repuestos originales y garantía de 3 meses.
              </p>
              <meta itemProp="serviceType" content="Reparación" />
              <meta itemProp="areaServed" content="Lima, Perú" />
            </article>
          </div>
        </div>
      </section>
      <section
        className="py-16 bg-gray-50"
        aria-labelledby="benefits-heading"
        aria-label="Beneficios del servicio de reparación de proyectores"
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
              Garantía, rapidez y experiencia en mantenimiento y reparación de
              proyectores Epson, BenQ, Sony y más en Lima. Técnicos expertos y
              repuestos originales.
            </p>
              <div className="py-12" aria-labelledby="why-us-title">
                  <div className="max-w-6xl mx-auto px-4">


                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <article className="text-center" aria-label="Garantía de servicio">
                              <motion.div
                                  className="relative bg-white rounded-lg p-6 shadow-md cursor-pointer focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-100"
                                  role="button"
                                  tabIndex={0}
                                  initial={{ y: 0 }}
                                  whileHover={{ y: -6, scale: 1.02 }}
                                  whileTap={{ scale: 0.995 }}
                                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                              >
                                  <motion.div
                                      className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                      initial={{ scale: 1 }}
                                      whileHover={{ scale: 1.08 }}
                                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                      aria-hidden="true"
                                  >
                                      <motion.span
                                          className="text-blue-600 w-10 h-10"
                                          initial={{ rotate: 0 }}
                                          whileHover={{ rotate: 18 }}
                                          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                      >
                                          <FaShieldAlt className="w-10 h-10" aria-label="Escudo" />
                                      </motion.span>
                                  </motion.div>

                                  <h3 className="text-xl font-bold text-color-secondary mb-4">
                                          Garantía de Servicio
                                  </h3>
                                  <p className="text-gray-600">
                                      3 meses de garantía en todas nuestras reparaciones de proyectores Epson, BenQ, Sony y más.
                                  </p>

                                  <motion.button
                                      className="mt-4 text-sm text-indigo-600 font-medium hover:underline focus:outline-none"
                                      whileTap={{ scale: 0.98 }}
                                      aria-label="Ver más sobre Garantía de Servicio"
                                  >

                                  </motion.button>
                              </motion.div>
                          </article>

                          <article className="text-center" aria-label="Atención rápida">
                              <motion.div
                                  className="relative bg-white rounded-lg p-6 shadow-md cursor-pointer focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-orange-100"
                                  role="button"
                                  tabIndex={0}
                                  initial={{ y: 0 }}
                                  whileHover={{ y: -6, scale: 1.02 }}
                                  whileTap={{ scale: 0.995 }}
                                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                              >
                                  <motion.div
                                      className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                      initial={{ scale: 1 }}
                                      whileHover={{ scale: 1.08 }}
                                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                      aria-hidden="true"
                                  >
                                      <motion.span
                                          className="text-orange-600 w-10 h-10"
                                          initial={{ rotate: 0 }}
                                          whileHover={{ rotate: 18 }}
                                          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                      >
                                          <FaRegClock className="w-10 h-10" aria-label="Reloj" />
                                      </motion.span>
                                  </motion.div>

                                  <h3 className="text-xl font-bold text-color-secondary mb-4">
                                      Atención Rápida
                                  </h3>
                                  <p className="text-gray-600">
                                      Respondemos en menos de 24 horas y servicio a domicilio en Lima.
                                  </p>

                                  <motion.button
                                      className="mt-4 text-sm text-indigo-600 font-medium hover:underline focus:outline-none"
                                      whileTap={{ scale: 0.98 }}
                                      aria-label="Ver más sobre Atención Rápida"
                                  >

                                  </motion.button>
                              </motion.div>
                          </article>

                          <article className="text-center" aria-label="Técnicos especializados">
                              <motion.div
                                  className="relative bg-white rounded-lg p-6 shadow-md cursor-pointer focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-green-100"
                                  role="button"
                                  tabIndex={0}
                                  initial={{ y: 0 }}
                                  whileHover={{ y: -6, scale: 1.02 }}
                                  whileTap={{ scale: 0.995 }}
                                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                              >
                                  <motion.div
                                      className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                                      initial={{ scale: 1 }}
                                      whileHover={{ scale: 1.08 }}
                                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                      aria-hidden="true"
                                  >
                                      <motion.span
                                          className="text-green-600 w-10 h-10"
                                          initial={{ rotate: 0 }}
                                          whileHover={{ rotate: 18 }}
                                          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                                      >
                                          <FaWrench className="w-10 h-10" aria-label="Herramienta" />
                                      </motion.span>
                                  </motion.div>

                                  <h3 className="text-xl font-bold text-color-secondary mb-4">
                                      Técnicos Especializados
                                  </h3>
                                  <p className="text-gray-600">
                                      Especialistas con años de experiencia en reparación y mantenimiento de proyectores Epson, BenQ, Sony y más.
                                  </p>

                                  <motion.button
                                      className="mt-4 text-sm text-indigo-600 font-medium hover:underline focus:outline-none"
                                      whileTap={{ scale: 0.98 }}
                                      aria-label="Ver más sobre Técnicos Especializados"
                                  >

                                  </motion.button>
                              </motion.div>
                          </article>
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </section>

      {/* Sección de Galería Interactiva */}
      <section className="py-16 bg-white" aria-labelledby="gallery-heading">
        <div className="max-w-6xl mx-auto px-4">
          <h3 id="gallery-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Galería de Trabajos y Servicios
          </h3>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-center text-lg">
            Algunas imágenes de nuestro taller, técnicos y proyectos realizados. Haz click en cualquier imagen para agrandar.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setSelectedIndex(i)}
                className="group relative overflow-hidden rounded-lg focus:outline-none focus:ring-4 focus:ring-primary"
                aria-label={`Abrir imagen: ${img.alt}`}
              >
                <div className="relative w-full h-40 md:h-32 lg:h-36">
                  <Image src={img.src} alt={img.alt} fill className="object-cover transform group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="absolute bottom-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded">{img.caption}</span>
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedIndex !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                aria-modal="true"
                role="dialog"
              >
                <motion.div
                  className="absolute inset-0 bg-black/70"
                  onClick={() => setSelectedIndex(null)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />

                <motion.div className="relative max-w-5xl w-full mx-auto rounded-lg overflow-hidden" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}>
                  <div className="bg-gray-900/90 p-4 flex items-center justify-between">
                    <div className="text-sm text-white">{gallery[selectedIndex].caption}</div>
                    <div className="flex items-center gap-2">
                      <button aria-label="Cerrar" onClick={() => setSelectedIndex(null)} className="text-white hover:text-gray-200">Cerrar ✕</button>
                    </div>
                  </div>
                  <div className="relative bg-black">
                    <div className="w-full h-[60vh] relative">
                      <Image src={gallery[selectedIndex].src} alt={gallery[selectedIndex].alt} fill className="object-contain" />
                    </div>
                  </div>
                  <div className="p-4 bg-white flex justify-between">
                    <button
                      onClick={() => setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length)}
                      className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
                      aria-label="Imagen anterior"
                    >
                      ← Anterior
                    </button>
                    <button
                      onClick={() => setSelectedIndex((selectedIndex + 1) % gallery.length)}
                      className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
                      aria-label="Siguiente imagen"
                    >
                      Siguiente →
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section
        className="py-16 bg-gray-50"
        itemScope
        itemType="https://schema.org/FAQPage"
        aria-labelledby="faq-heading"
        aria-label="Preguntas frecuentes sobre reparación de proyectores"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl font-bold text-color-secondary mb-6"
            >
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">
              Resolvemos las dudas más comunes sobre nuestro servicio técnico de
              proyectores Epson, BenQ, Sony y más en Lima.
            </p>
          </div>
          <div className="space-y-8">
            <article
              itemScope
              itemType="https://schema.org/Question"
              className="bg-white p-6 rounded-xl shadow-sm"
              aria-label="¿Qué marcas de proyectores reparan?"
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
              aria-label="¿Cuánto tiempo toma la reparación?"
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
                  identificar el problema exacto. Posterior al diagnóstico, las
                  reparaciones toman mínimo 2 días hábiles. Para casos más
                  complejos que requieren repuestos especiales, el tiempo puede
                  extenderse. Siempre informamos el tiempo estimado después del
                  diagnóstico.
                </p>
              </div>
            </article>
            <article
              itemScope
              itemType="https://schema.org/Question"
              className="bg-white p-6 rounded-xl shadow-sm"
              aria-label="¿Tienen servicio a domicilio en Lima?"
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
                  distritos aledaños. El servicio a domicilio es solo para
                  diagnóstico; la reparación se realiza en nuestro taller
                  especializado.
                </p>
              </div>
            </article>
            <article
              itemScope
              itemType="https://schema.org/Question"
              className="bg-white p-6 rounded-xl shadow-sm"
              aria-label="¿Atienden proyectores de provincia?"
            >
              <h3
                itemProp="name"
                className="text-lg font-bold text-color-secondary mb-3"
              >
                ¿Atienden proyectores de provincia?
              </h3>
              <div
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <p itemProp="text" className="text-gray-700">
                  Sí, ofrecemos atención especializada para clientes de
                  provincia a través de nuestro servicio de envío. El cliente
                  envía su proyector a nuestro local ubicado en{" "}
                  <strong>Pje. los Jazmines 181, Chorrillos, Lima</strong>,{" "}
                  realizamos el servicio técnico completo con diagnóstico,
                  reparación y pruebas de calidad, y una vez culminado el
                  servicio, lo reenviamos a su dirección. Este es un servicio
                  especial que garantiza la misma calidad técnica para todo el
                  Perú.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
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
                <span className="text-sm font-medium">3 meses garantía</span>
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
              <button
                onClick={() =>
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer"
                aria-label="Solicitar reparación de proyector"
              >
                Solicitar Reparación Ahora
              </button>
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
  );
}
