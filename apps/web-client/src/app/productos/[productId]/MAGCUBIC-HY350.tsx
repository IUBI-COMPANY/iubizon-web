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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MagCubic HY350
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 leading-none"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Proyección
            </span>
            <span className="block mt-2">Multimedia</span>
            <span className="block mt-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Inteligente
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-gray-300 max-w-3xl mx-auto">
            Android 11.0 • Full HD 1080p • WiFi 6 • Bluetooth 5.0
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#comprar"
              className="group relative bg-white text-black px-10 py-5 rounded-full text-lg font-semibold overflow-hidden transition-all transform hover:scale-105"
            >
              <span className="relative z-10">
                Comprar ahora · S/ {product.price.toFixed(2)}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="#galeria"
              className="border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all"
            >
              Descubrir más
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section
        id="galeria"
        className="py-32 px-4 bg-gradient-to-b from-black via-gray-950 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            Características
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovadoras
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image 1 - Funcionalidad Táctil */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6">
                <Image
                  src="/productos/HY350/1.webp"
                  alt="Control Táctil Intuitivo - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
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
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6">
                <Image
                  src="/productos/HY350/2.webp"
                  alt="580 Lúmenes ANSI y 30,000 horas de vida útil - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
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
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6">
                <Image
                  src="/productos/HY350/3.webp"
                  alt="Soporte 4K y resolución nativa 1920x1080P - Proyector MagCubic HY350"
                  width={1600}
                  height={900}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
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
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6">
                <Image
                  src="/productos/HY350/4.webp"
                  alt="Pantalla 4K con Enfoque Electrónico automático - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
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
              <div className="relative w-full h-auto rounded-3xl overflow-hidden group bg-gray-900 mb-6">
                <Image
                  src="/productos/HY350/5.webp"
                  alt="Corrección Trapezoidal Automática 4D - Proyector MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
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
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            Conectividad y
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Versatilidad
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 - Conectividad WiFi */}
            <article className="flex flex-col">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-gray-900 mb-6 group">
                <Image
                  src="/productos/HY350/6.webp"
                  alt="Conectividad WiFi 6 para iPhone y Android - Proyector MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
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
              <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-gray-900 mb-6 group">
                <Image
                  src="/productos/HY350/7.webp"
                  alt="Pantalla de proyección gigante hasta 150 pulgadas - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
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
              <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-gray-900 mb-6 group">
                <Image
                  src="/productos/HY350/8.webp"
                  alt="Múltiples puertos: USB, HDMI, Audio Jack, Power - MagCubic HY350"
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
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
        className="py-32 px-4 bg-gradient-to-b from-black to-gray-950"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            Especificaciones
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Técnicas
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
            <div className="group">
              <div className="flex justify-between items-baseline py-6 border-b border-gray-800 hover:border-gray-600 transition-colors">
                <span className="text-gray-400 text-lg">Brillo</span>
                <span className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {product.lumensANSI} lúmenes ANSI
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-6 border-b border-gray-800 hover:border-gray-600 transition-colors">
                <span className="text-gray-400 text-lg">Resolución</span>
                <span className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {product.nativeResolution}
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-6 border-b border-gray-800 hover:border-gray-600 transition-colors">
                <span className="text-gray-400 text-lg">Sistema Operativo</span>
                <span className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  Android 11.0
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-6 border-b border-gray-800 hover:border-gray-600 transition-colors">
                <span className="text-gray-400 text-lg">Procesador</span>
                <span className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  Allwinner H713 Quad-Core
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-6 border-b border-gray-800 hover:border-gray-600 transition-colors">
                <span className="text-gray-400 text-lg">Memoria</span>
                <span className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  2GB RAM + 32GB ROM
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-6 border-b border-gray-800 hover:border-gray-600 transition-colors">
                <span className="text-gray-400 text-lg">Conectividad</span>
                <span className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  WiFi 6 • Bluetooth 5.0
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-6 border-b border-gray-800 hover:border-gray-600 transition-colors">
                <span className="text-gray-400 text-lg">
                  Tamaño de proyección
                </span>
                <span className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  Hasta 150&quot;
                </span>
              </div>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline py-6 border-b border-gray-800 hover:border-gray-600 transition-colors">
                <span className="text-gray-400 text-lg">Nivel de ruido</span>
                <span className="text-white text-xl font-semibold group-hover:text-blue-400 transition-colors">
                  {"< 35 dB"}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-20 p-10 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Características Adicionales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                <span>Enfoque eléctrico con control remoto</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                <span>Corrección trapezoidal automática</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                <span>Zoom ajustable 50% - 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                <span>Control por voz vía Bluetooth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/productos/HY350/banner.webp"
          alt="MagCubic - Proyector Multimedia HY350"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* CTA Section */}
      <section id="comprar" className="relative py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/productos/HY350/3.webp"
            alt="Resolución Full HD 1080P con Soporte 4K"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20" />
        <div className="absolute inset-0 backdrop-blur-xs" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Llévalo Hoy</h2>
          <p className="text-2xl md:text-3xl font-light mb-4 text-gray-300">
            S/ {product.price.toFixed(2)}
          </p>
          <p className="text-lg text-gray-400 mb-12">
            {product.stock > 0
              ? `Solo ${product.stock} unidades disponibles`
              : "Consultar disponibilidad"}
          </p>

          <Link
            href={`https://wa.me/51972300301?text=${getWhatsAppMessage(product)}`}
            className="inline-flex items-center gap-3 bg-white text-black px-14 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105"
          >
            <span>Comprar Ahora</span>
            <svg
              className="w-6 h-6"
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

          <p className="text-sm text-gray-500 mt-8">
            Envío gratis en Lima • Garantía incluida • Soporte técnico
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>MagCubic HY350 • Proyector LED Portátil Android</p>
          <p className="mt-2">
            © 2025 iubizon. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
