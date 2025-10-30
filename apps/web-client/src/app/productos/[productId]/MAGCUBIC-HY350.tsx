"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/data-list/products";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppMessage } from "@/utils/whatsapp";

interface SpecialProductProps {
  product: Product;
}

export const MAGCUBICHY350 = ({ product }: SpecialProductProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const originalPrice = product.oldPrice || 687.5;
  const discountedPrice = product.price || 549.99;
  const discountPercentage = Math.round(
    ((originalPrice - discountedPrice) / originalPrice) * 100,
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-0 md:p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="relative w-full max-w-6xl mx-0 md:mx-4">
            {/* Halloween decoration on modal */}
            <div className="absolute -top-8 left-4 text-4xl animate-pulse hidden md:block">
              🎃
            </div>
            <div
              className="absolute -top-8 right-4 text-4xl animate-pulse hidden md:block"
              style={{ animationDelay: "0.5s" }}
            >
              👻
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-2 right-2 md:-top-12 md:right-0 z-10 text-white hover:text-orange-400 transition-colors bg-black/50 md:bg-transparent rounded-full p-2 md:p-0"
              aria-label="Cerrar video"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Video Container */}
            <div
              className="relative w-full aspect-video rounded-none md:rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <video autoPlay controls className="w-full h-full object-contain">
                <source src="/productos/HY350/outboxing.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/productos/HY350/outboxing.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-orange-950/10 to-black" />

        {/* Halloween floating bats */}
        <div className="absolute top-20 left-1/4 text-4xl animate-pulse opacity-30">
          🦇
        </div>
        <div
          className="absolute top-32 right-1/3 text-3xl animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        >
          🦇
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              🎃 MagCubic HY350 - Especial Halloween 🎃
            </span>
          </div>

          {/* Urgency Banner */}
          <div className="mb-4 inline-flex items-center gap-2 bg-red-600/90 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            <span>⚠️ OFERTA TERMINA EN 48 HORAS</span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 leading-none"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 1 - scrollY / 300),
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <span className="block bg-gradient-to-r from-orange-400 via-purple-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,146,60,0.3)]">
              Proyección
            </span>
            <span className="block mt-2">Multimedia</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-orange-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,146,60,0.3)]">
              Inteligente
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-300 max-w-3xl mx-auto"
            style={{
              opacity: Math.max(0, 1 - scrollY / 400),
              transition: "opacity 0.1s ease-out",
            }}
          >
            Android 11.0 • Full HD 1080p • WiFi 6 • Bluetooth 5.0
          </p>

          {/* Price Display with Discount */}
          <div
            className="mb-8 flex items-center justify-center gap-4 flex-wrap"
            style={{
              opacity: Math.max(0, 1 - scrollY / 400),
              transition: "opacity 0.1s ease-out",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-400 line-through text-xl md:text-2xl">
                s/ {originalPrice.toFixed(2)}
              </span>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                -{discountPercentage}%
              </span>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-orange-400">
              s/ {discountedPrice.toFixed(2)}
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{
              opacity: Math.max(0, 1 - scrollY / 450),
              transition: "opacity 0.1s ease-out",
            }}
          >
            <a
              href={`https://wa.me/51972300301?text=${getWhatsAppMessage(product)}`}
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full text-lg font-semibold overflow-hidden transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 animate-pulse"
            >
              <span className="relative z-10">
                🎃 SÍ, LO QUIERO AHORA · s/ {discountedPrice.toFixed(2)}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="border-2 border-orange-500/30 backdrop-blur-sm text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-orange-500/10 hover:border-orange-400 transition-all shadow-lg shadow-orange-500/10"
            >
              👻 Ver Video
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400"
            style={{
              opacity: Math.max(0, 1 - scrollY / 450),
              transition: "opacity 0.1s ease-out",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Envío GRATIS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Garantía 1 año</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Pago seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400">⭐</span>
              <span>+16 clientes satisfechos</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section
        id="galeria"
        className="py-32 px-4 bg-gradient-to-b from-black via-orange-950/5 to-black relative"
      >
        {/* Halloween decorations */}
        <div className="absolute top-10 right-10 text-6xl opacity-20 animate-pulse">
          🕷️
        </div>
        <div
          className="absolute bottom-20 left-10 text-5xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          🕸️
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Características
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,146,60,0.3)]">
              Innovadoras 🎃
            </span>
          </h2>
          <p className="text-center text-orange-400/60 mb-20 text-sm">
            ✨ Especial de Halloween ✨
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image 1 - Funcionalidad Táctil */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6 ring-2 ring-orange-500/20">
                <Image
                  src="/productos/HY350/1.webp"
                  alt="Control Táctil Intuitivo - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 text-3xl animate-pulse">
                  👻
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Control Táctil Intuitivo
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                El proyector MagCubic HY350 cuenta con funcionalidad táctil
                intuitiva que permite un control total y fácil del dispositivo.
                Navega por el menú, ajusta configuraciones y reproduce contenido
                con solo tocar la pantalla, brindando una experiencia de usuario
                moderna y cómoda.
              </p>
            </article>

            {/* Image 2 - 580 Lúmenes y 30K horas */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6 ring-2 ring-orange-500/20">
                <Image
                  src="/productos/HY350/2.webp"
                  alt="580 Lúmenes ANSI y 30,000 horas de vida útil - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 text-3xl animate-pulse">
                  🎃
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Durabilidad Excepcional
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Con 580 lúmenes ANSI de brillo, este proyector LED ofrece
                imágenes claras incluso en ambientes con luz. Su fuente de luz
                LED tiene una vida útil de hasta 30,000 horas, garantizando años
                de entretenimiento sin necesidad de reemplazar lámparas
                costosas.
              </p>
            </article>

            {/* Image 3 - Soporte 4K Full Width */}
            <article className="md:col-span-2 flex flex-col">
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6 ring-2 ring-orange-500/20">
                <Image
                  src="/productos/HY350/3.webp"
                  alt="Soporte 4K y resolución nativa 1920x1080P - Proyector MagCubic HY350"
                  width={1600}
                  height={900}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-4xl animate-pulse">
                  🦇
                </div>
                <div
                  className="absolute top-4 right-4 text-4xl animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  🦇
                </div>
              </div>
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Resolución Full HD 1080P con Soporte 4K
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  Resolución nativa de 1920x1080P Full HD que reproduce cada
                  detalle con nitidez excepcional. Compatible con contenido 4K,
                  el proyector HY350 escala videos de ultra alta definición para
                  brindarte una experiencia cinematográfica profesional en la
                  comodidad de tu hogar. Ideal para películas, series, gaming y
                  presentaciones de negocios.
                </p>
              </div>
            </article>

            {/* Image 4 - Enfoque Electrónico */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6 ring-2 ring-orange-500/20">
                <Image
                  src="/productos/HY350/4.webp"
                  alt="Pantalla 4K con Enfoque Electrónico automático - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 text-3xl animate-pulse">
                  🕸️
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Enfoque Electrónico Preciso
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Sistema de enfoque electrónico que se ajusta con precisión
                mediante el control remoto. Olvídate de girar ruedas manualmente
                - con solo presionar un botón obtienes una imagen perfectamente
                nítida. La tecnología 4K enhancing procesa la imagen para máxima
                claridad y detalle.
              </p>
            </article>

            {/* Image 5 - Corrección Automática */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6 ring-2 ring-orange-500/20">
                <Image
                  src="/productos/HY350/5.webp"
                  alt="Corrección Trapezoidal Automática 4D - Proyector MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 text-3xl animate-pulse">
                  🕷️
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Corrección Trapezoidal Automática
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Tecnología de corrección automática 4D que detecta y ajusta
                instantáneamente la distorsión de la imagen. No importa el
                ángulo de proyección, el HY350 corrige automáticamente para
                entregar una imagen perfectamente rectangular y cuadrada en cada
                uso. Instalación rápida y sin complicaciones.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 bg-black relative">
        {/* Halloween cobwebs */}
        <div className="absolute top-0 left-0 text-8xl opacity-10">🕸️</div>
        <div className="absolute top-0 right-0 text-8xl opacity-10 transform scale-x-[-1]">
          🕸️
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Conectividad y
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,146,60,0.3)]">
              Versatilidad 👻
            </span>
          </h2>
          <p className="text-center text-orange-400/60 mb-20 text-sm">
            🦇 Especial de Halloween 🦇
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 - Conectividad WiFi */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-gray-900 mb-6 group ring-2 ring-orange-500/20">
                <Image
                  src="/productos/HY350/6.webp"
                  alt="Conectividad WiFi 6 para iPhone y Android - Proyector MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 text-2xl animate-bounce">
                  🎃
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                WiFi 6 y Bluetooth 5.0
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Conectividad inalámbrica de última generación. Compatible con
                iPhone, iPad, teléfonos Android y tablets. Transmite contenido
                vía WiFi 6 de doble banda (2.4G/5.8G) para streaming fluido sin
                interrupciones. Bluetooth 5.0 para audio inalámbrico y control
                por voz.
              </p>
            </article>

            {/* Feature 2 - Pantalla de 150" */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-gray-900 mb-6 group ring-2 ring-orange-500/20">
                <Image
                  src="/productos/HY350/7.webp"
                  alt="Pantalla de proyección gigante hasta 150 pulgadas - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute bottom-4 right-4 text-2xl animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                >
                  👻
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Proyección hasta 150 Pulgadas
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Disfruta de una pantalla gigante de hasta 150 pulgadas (3.8
                metros) con solo 1.68 metros de distancia óptima de proyección.
                Perfecto para salas pequeñas y medianas. Relación de proyección
                de corto alcance que maximiza el espacio disponible en tu hogar
                u oficina.
              </p>
            </article>

            {/* Feature 3 - Conectores */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-gray-900 mb-6 group ring-2 ring-orange-500/20">
                <Image
                  src="/productos/HY350/8.webp"
                  alt="Múltiples puertos: USB, HDMI, Audio Jack, Power - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute bottom-4 right-4 text-2xl animate-bounce"
                  style={{ animationDelay: "0.6s" }}
                >
                  🦇
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                Conectividad Completa
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Puertos USB para reproducir contenido desde memorias, HDMI para
                consolas y laptops, entrada de audio de 3.5mm para altavoces
                externos y puerto de alimentación. Conecta todos tus
                dispositivos: PC, Mac, PS5, Xbox, Nintendo Switch, Chromecast,
                Fire TV Stick y más.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section
        id="especificaciones"
        className="py-20 md:py-32 px-4 bg-gradient-to-b from-black via-orange-950/5 to-gray-950 relative"
      >
        {/* Halloween pumpkins */}
        <div className="absolute top-20 left-10 text-5xl opacity-20 animate-pulse">
          🎃
        </div>
        <div
          className="absolute bottom-20 right-10 text-5xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          🎃
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-3 md:mb-4">
            Especificaciones
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,146,60,0.3)]">
              Técnicas 🕷️
            </span>
          </h2>
          <p className="text-center text-orange-400/60 mb-12 md:mb-20 text-xs md:text-sm">
            🕸️ Especial de Halloween 🕸️
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-4 md:gap-y-8">
            <div className="group">
              <div className="flex justify-between items-baseline py-4 md:py-6 border-b border-gray-800 hover:border-orange-600 transition-colors">
                <span className="text-gray-400 text-sm md:text-lg">Brillo</span>
                <span className="text-white text-base md:text-xl font-semibold group-hover:text-orange-400 transition-colors text-right">
                  {product.lumensANSI} lúmenes ANSI
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-4 md:py-6 border-b border-gray-800 hover:border-orange-600 transition-colors">
                <span className="text-gray-400 text-sm md:text-lg">
                  Resolución
                </span>
                <span className="text-white text-base md:text-xl font-semibold group-hover:text-orange-400 transition-colors text-right">
                  {product.nativeResolution}
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-4 md:py-6 border-b border-gray-800 hover:border-orange-600 transition-colors">
                <span className="text-gray-400 text-sm md:text-lg">
                  Sistema Operativo
                </span>
                <span className="text-white text-base md:text-xl font-semibold group-hover:text-orange-400 transition-colors text-right">
                  Android 11.0
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-4 md:py-6 border-b border-gray-800 hover:border-orange-600 transition-colors">
                <span className="text-gray-400 text-sm md:text-lg">
                  Procesador
                </span>
                <span className="text-white text-base md:text-xl font-semibold group-hover:text-orange-400 transition-colors text-right">
                  Allwinner H713 Quad-Core
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-4 md:py-6 border-b border-gray-800 hover:border-orange-600 transition-colors">
                <span className="text-gray-400 text-sm md:text-lg">
                  Memoria
                </span>
                <span className="text-white text-base md:text-xl font-semibold group-hover:text-orange-400 transition-colors text-right">
                  2GB RAM + 32GB ROM
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-4 md:py-6 border-b border-gray-800 hover:border-orange-600 transition-colors">
                <span className="text-gray-400 text-sm md:text-lg">
                  Conectividad
                </span>
                <span className="text-white text-base md:text-xl font-semibold group-hover:text-orange-400 transition-colors text-right">
                  WiFi 6 • Bluetooth 5.0
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-4 md:py-6 border-b border-gray-800 hover:border-orange-600 transition-colors">
                <span className="text-gray-400 text-sm md:text-lg">
                  Tamaño de proyección
                </span>
                <span className="text-white text-base md:text-xl font-semibold group-hover:text-orange-400 transition-colors text-right">
                  Hasta 150&quot;
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-4 md:py-6 border-b border-gray-800 hover:border-orange-600 transition-colors">
                <span className="text-gray-400 text-sm md:text-lg">
                  Nivel de ruido
                </span>
                <span className="text-white text-base md:text-xl font-semibold group-hover:text-orange-400 transition-colors text-right">
                  {"< 35 dB"}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-12 md:mt-20 p-6 md:p-10 bg-gradient-to-br from-orange-950/20 to-purple-950/20 backdrop-blur-sm rounded-3xl border border-orange-500/20 shadow-lg shadow-orange-500/10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center flex items-center justify-center gap-2 md:gap-3 flex-wrap">
              <span>🎃</span>
              <span>Características Adicionales</span>
              <span>👻</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-purple-400 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  Enfoque eléctrico con control remoto
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-purple-400 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  Corrección trapezoidal automática
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-purple-400 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  Zoom ajustable 50% - 100%
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-purple-400 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  Control por voz vía Bluetooth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        id="comprar"
        className="relative py-20 md:py-32 px-4 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/halloween/halloween-banner.jpg"
            alt="Resolución Full HD 1080P con Soporte 4K"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-purple-600/20 opacity-50" />
        <div className="absolute inset-0 backdrop-blur-xs" />

        {/* Halloween decorations */}
        <div className="absolute top-10 left-10 text-6xl opacity-30 animate-pulse">
          🎃
        </div>
        <div
          className="absolute top-10 right-10 text-6xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        >
          👻
        </div>
        <div className="absolute bottom-10 left-1/4 text-5xl opacity-20 animate-bounce">
          🦇
        </div>
        <div
          className="absolute bottom-10 right-1/4 text-5xl opacity-20 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          🦇
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Urgency Indicator */}
          <div className="mb-4 md:mb-6 inline-flex items-center gap-2 bg-red-600/90 px-3 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-base font-bold animate-pulse">
            <span className="relative flex h-2 w-2 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-red-500"></span>
            </span>
            <span className="leading-tight">
              ⏰ ÚLTIMAS UNIDADES - OFERTA LIMITADA
            </span>
          </div>

          <div className="mb-3 md:mb-4 text-3xl md:text-4xl animate-bounce">
            🎃
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-orange-400 via-white to-orange-400 bg-clip-text text-transparent px-2">
            No Dejes Pasar Esta Oferta
          </h2>
          <p className="text-orange-400 mb-4 md:mb-6 text-base md:text-xl font-semibold">
            ✨ Descuento Especial de Halloween ✨
          </p>

          {/* Price Section */}
          <div className="mb-5 md:mb-6">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-3 flex-wrap">
              <span className="text-gray-400 line-through text-lg md:text-2xl lg:text-3xl">
                s/ {originalPrice.toFixed(2)}
              </span>
              <span className="bg-red-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-lg font-bold animate-pulse">
                AHORRA {discountPercentage}%
              </span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-2">
              s/ {discountedPrice.toFixed(2)}
            </div>
            <p className="text-green-400 text-base md:text-lg font-semibold">
              💰 ¡Ahorra s/ {(originalPrice - discountedPrice).toFixed(2)} HOY!
            </p>
          </div>

          {/* Stock Indicator */}
          <div className="mb-6 md:mb-8 bg-orange-900/30 border border-orange-500/30 rounded-2xl p-4 md:p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-3 gap-2">
              <span className="text-gray-300 text-sm md:text-base">
                Stock disponible:
              </span>
              <span className="text-orange-400 font-bold text-sm md:text-base">
                {product.stock > 0 ? `${product.stock} unidades` : "Consultar"}
              </span>
            </div>
            {product.stock > 0 && product.stock <= 10 && (
              <>
                <div className="w-full bg-gray-700 rounded-full h-2 md:h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-red-600 to-orange-500 h-2 md:h-3 rounded-full animate-pulse"
                    style={{ width: `${(product.stock / 10) * 100}%` }}
                  ></div>
                </div>
                <p className="text-red-400 text-xs md:text-sm font-semibold animate-pulse leading-tight">
                  ⚠️ ¡Solo quedan {product.stock} unidades! Se están agotando
                  rápido 🔥
                </p>
              </>
            )}
          </div>

          {/* CTA Button */}
          <Link
            href={`https://wa.me/51972300301?text=${getWhatsAppMessage(product)}`}
            className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 md:px-16 py-5 md:py-7 rounded-full text-base md:text-xl lg:text-2xl font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 mb-6 animate-pulse w-full sm:w-auto max-w-full"
          >
            <span className="text-center leading-tight">
              🎃 SÍ, LO QUIERO CON DESCUENTO
            </span>
            <svg
              className="w-5 h-5 md:w-7 md:h-7 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* Risk Reversal - Garantías */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-3 md:p-4">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">🚚</div>
              <h4 className="font-bold text-white mb-1 text-sm md:text-base">
                Envío GRATIS
              </h4>
              <p className="text-xs md:text-sm text-gray-400">
                En Lima Metropolitana
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-3 md:p-4">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">🛡️</div>
              <h4 className="font-bold text-white mb-1 text-sm md:text-base">
                Garantía 1 Año
              </h4>
              <p className="text-xs md:text-sm text-gray-400">
                Cubierta por fabricante
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-xl p-3 md:p-4">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">💳</div>
              <h4 className="font-bold text-white mb-1 text-sm md:text-base">
                Pago Seguro
              </h4>
              <p className="text-xs md:text-sm text-gray-400">
                Múltiples métodos
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-xs md:text-sm flex-wrap">
            <div className="flex -space-x-2">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-500 border-2 border-black flex items-center justify-center text-xs">
                👤
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-500 border-2 border-black flex items-center justify-center text-xs">
                👤
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-pink-500 border-2 border-black flex items-center justify-center text-xs">
                👤
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-500 border-2 border-black flex items-center justify-center text-xs">
                👤
              </div>
            </div>
            <p className="text-gray-300 text-center leading-tight">
              <span className="text-orange-400 font-bold">+16 clientes</span>{" "}
              compraron esta semana
            </p>
          </div>

          <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6 px-4 leading-relaxed">
            🦇 Soporte técnico especializado • Instalación guiada • Asesoría
            personalizada 👻
          </p>
        </div>
      </section>
    </div>
  );
};
