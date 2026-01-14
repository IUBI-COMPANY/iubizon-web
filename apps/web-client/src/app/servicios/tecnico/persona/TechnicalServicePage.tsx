"use client";

import { Metadata } from "next";
import { TechnicalServiceForm } from "@/components/ui/TechnicalServiceForm";
import FAQAccordion from "@/components/ui/layout/FAQAccordion";
import {
  CheckCircle,
  Phone,
  Search,
  Wrench,
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldAlt, FaRegClock } from 'react-icons/fa';
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-7xl mx-auto items-center">
            {/* Columna izquierda - Imagen */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-auto rounded-3xl overflow-hidden shadow-xl">
                <div className="relative w-full" style={{ aspectRatio: '3/4', minHeight: '600px' }}>
                  <Image
                    src="/images/foto-proyectores.jpeg"
                    alt="Servicio técnico de proyectores profesional"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Columna derecha - Grid 2x2 de cuadros */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Paso 1 - Arriba Izquierda */}
              <motion.article
                className="group"
                itemScope
                itemType="https://schema.org/HowToStep"
                aria-label="Paso 1: Contacto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden border-b-4 border-orange-500 min-h-[340px]">
                  <div className="p-8 flex flex-col items-start text-left relative h-full">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Icono */}
                    <motion.div
                      className="relative z-10 bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Phone className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-orange-600 transition-colors"
                      itemProp="name"
                    >
                      Contacto
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed relative z-10 flex-grow" itemProp="text">
                      Completa el formulario o llámanos. Respuesta garantizada en menos de 24 horas.
                    </p>

                    {/* Indicador */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-orange-100 w-full relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs font-semibold text-orange-600 inline-flex items-center gap-2">
                        ✓ Rápido y confiable
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.article>

              {/* Paso 2 - Arriba Derecha */}
              <motion.article
                className="group"
                itemScope
                itemType="https://schema.org/HowToStep"
                aria-label="Paso 2: Diagnóstico"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden border-b-4 border-orange-500 min-h-[340px]">
                  <div className="p-8 flex flex-col items-start text-left relative h-full">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Icono */}
                    <motion.div
                      className="relative z-10 bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Search className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-orange-600 transition-colors"
                      itemProp="name"
                    >
                      Diagnóstico
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed relative z-10 flex-grow" itemProp="text">
                      Revisión técnica completa de tu proyector por especialistas certificados.
                    </p>

                    {/* Indicador */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-orange-100 w-full relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs font-semibold text-orange-600 inline-flex items-center gap-2">
                        ✓ Análisis profesional
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.article>

              {/* Paso 3 - Abajo Izquierda */}
              <motion.article
                className="group"
                itemScope
                itemType="https://schema.org/HowToStep"
                aria-label="Paso 3: Reparación"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden border-b-4 border-orange-500 min-h-[340px]">
                  <div className="p-8 flex flex-col items-start text-left relative h-full">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Icono */}
                    <motion.div
                      className="relative z-10 bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Wrench className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-orange-600 transition-colors"
                      itemProp="name"
                    >
                      Reparación
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed relative z-10 flex-grow" itemProp="text">
                      Reparación con repuestos originales certificados y 3 meses de garantía incluida.
                    </p>

                    {/* Indicador */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-orange-100 w-full relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs font-semibold text-orange-600 inline-flex items-center gap-2">
                        ✓ Garantizado
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.article>

              {/* Paso 4 - Abajo Derecha */}
              <motion.article
                className="group"
                itemScope
                itemType="https://schema.org/HowToStep"
                aria-label="Paso 4: Entrega"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden border-b-4 border-orange-500 min-h-[340px]">
                  <div className="p-8 flex flex-col items-start text-left relative h-full">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Icono */}
                    <motion.div
                      className="relative z-10 bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-orange-600 transition-colors"
                      itemProp="name"
                    >
                      Entrega
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed relative z-10 flex-grow" itemProp="text">
                      Recibe tu proyector funcionando perfectamente a domicilio en Lima con garantía completa.
                    </p>

                    {/* Indicador */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-orange-100 w-full relative z-10"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs font-semibold text-orange-600 inline-flex items-center gap-2">
                        ✓ A domicilio
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            </div>
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
        className="py-20 bg-gradient-to-b from-white via-gray-50 to-white"
        aria-labelledby="benefits-heading"
        aria-label="Beneficios del servicio de reparación de proyectores"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2
              id="benefits-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              ¿Por Qué Elegir Nuestro Servicio Técnico?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Descubre los beneficios de trabajar con expertos certificados en reparación de proyectores
            </motion.p>
          </div>

          {/* Grid con 3 tarjetas que se voltean */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Tarjeta 1 - Garantía */}
            <motion.div
              className="h-[450px] cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Frente - Imagen */}
                <motion.div
                  className="absolute w-full h-full bg-white rounded-3xl border-3 border-orange-500 shadow-2xl overflow-hidden group-hover:shadow-orange-300/80"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src="/images/education-projectors.jpg"
                    alt="Garantía de Servicio"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-sm text-white/80 mb-2">Protección garantizada en cada reparación realizada</div>
                    <div className="text-lg font-bold">→ Ver más</div>
                  </div>
                </motion.div>

                {/* Atrás - Contenido */}
                <motion.div
                  className="absolute w-full h-full rounded-3xl border-2 border-orange-500 shadow-2xl p-8 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
                >
                  <motion.div
                    className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaShieldAlt className="w-10 h-10 text-blue-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Garantía
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    3 meses de garantía en todas nuestras reparaciones. Tu inversión protegida.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Tarjeta 2 - Atención Rápida */}
            <motion.div
              className="h-[450px] cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Frente - Imagen */}
                <motion.div
                  className="absolute w-full h-full bg-white rounded-3xl border-3 border-orange-500 shadow-2xl overflow-hidden group-hover:shadow-orange-300/80"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src="/images/epson-banner.jpg"
                    alt="Atención Rápida"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm text-white/80 mb-2">Nos aseguramos que recibas atención lo antes posible</div>
                    <div className="text-lg font-bold">→ Ver más</div>
                  </div>
                </motion.div>

                {/* Atrás - Contenido */}
                <motion.div
                  className="absolute w-full h-full rounded-3xl border-2 border-orange-500 shadow-2xl p-8 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
                >
                  <motion.div
                    className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaRegClock className="w-10 h-10 text-orange-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Atención Rápida
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    Respondemos en 24 horas con servicio a domicilio en Lima.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Tarjeta 3 - Técnicos Especializados */}
            <motion.div
              className="h-[450px] cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Frente - Imagen */}
                <motion.div
                  className="absolute w-full h-full bg-white rounded-3xl border-3 border-orange-500 shadow-2xl overflow-hidden group-hover:shadow-orange-300/80"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Image
                    src="/images/seo-banner.jpg"
                    alt="Técnicos Especializados"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm text-white/80 mb-2">Nuestros técnicos se encargaran de brindarte un buen resultado</div>
                    <div className="text-lg font-bold">→ Ver más</div>
                  </div>
                </motion.div>

                {/* Atrás - Contenido */}
                <motion.div
                  className="absolute w-full h-full rounded-3xl border-2 border-orange-500 shadow-2xl p-8 flex flex-col items-center justify-center text-center"
                  style={{ backfaceVisibility: 'hidden', rotateY: 180 }}
                >
                  <motion.div
                    className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Técnicos Expertos
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    Especialistas certificados con años de experiencia garantizada.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Texto informativo debajo */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Nuestro compromiso es brindarte el mejor servicio técnico con garantía, rapidez y profesionalismo.
            </p>
          </motion.div>

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
                <span className="absolute bottom-2 left-1 text-xs bg-black/50 text-white px-2 py-1 rounded w-64">{img.caption}</span>
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
        <FAQAccordion/>
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
