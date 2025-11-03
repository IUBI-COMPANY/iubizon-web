import React from "react";
import { products } from "@/data-list/products";
import Image from "next/image";
import Link from "next/link";

export const PromotionSection = () => {
  const hy350Product = products.find((p) => p.name?.includes("HY350"));

  if (!hy350Product) return null;

  const hy350Discount =
    hy350Product.oldPrice && hy350Product.oldPrice > hy350Product.price
      ? Math.round(
          ((hy350Product.oldPrice - hy350Product.price) /
            hy350Product.oldPrice) *
            100,
        )
      : 0;

  return (
    <section className="relative mt-12 mb-12 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#fb0c6b]/40 min-h-[600px] md:min-h-[500px]">
      {/* Video de fondo a toda altura */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-auto min-w-full object-cover"
        >
          <source src="/productos/HY350/outboxing.mp4" type="video/mp4" />
        </video>
        {/* Overlay con gradiente Cyber Wow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0700fe]/95 via-[#0030ff]/95 to-[#0700fe]/95"></div>
      </div>

      {/* Elementos decorativos Cyber Wow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Borde brillante superior */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fb0c6b]/70 to-transparent"></div>
        {/* Borde brillante inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fb0c6b]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-8 py-8">
        {/* Contenido centrado */}
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
            {/* Columna izquierda - Imagen del producto */}
            <div className="flex flex-col items-center justify-center">
              {/* Imagen del producto con efecto elegante */}
              <div className="relative group w-full max-w-md">
                {/* Badge de Cyber Wow en la parte superior */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 bg-white backdrop-blur-sm px-5 py-2 rounded-full shadow-lg">
                    <span className="text-lg">⚡</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0700fe]">
                      Cyber Wow 2025
                    </span>
                  </div>
                </div>

                {/* Resplandor neón */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0700fe]/30 to-[#fb0c6b]/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative transform group-hover:scale-[1.03] transition-transform duration-300">
                  <Image
                    src="/productos/HY350/HY350-sin-fondo.png"
                    alt="Proyector HY350 Magcubic - Oferta Cyber Wow 2025"
                    width={500}
                    height={500}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />

                  {/* Badge de descuento flotante Cyber Wow */}
                  {hy350Discount > 0 && (
                    <div className="absolute -top-4 -right-4 bg-[#fb0c6b] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-2xl shadow-[#fb0c6b]/60 border-4 border-white animate-pulse">
                      <span className="text-2xl font-black">
                        {hy350Discount}%
                      </span>
                      <span className="text-xs font-semibold">OFF</span>
                    </div>
                  )}
                </div>

                {/* Título y características en móvil */}
                <div className="mt-4 md:hidden text-white">
                  <h2 className="text-2xl font-bold text-center mb-3">
                    Proyector HY350 MagCubic
                  </h2>
                  <p className="text-white/90 text-center mb-4">
                    ¡Hasta 45% descuento en la mejor tecnología!
                  </p>

                  {/* Características para móvil */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-[#fb0c6b] text-lg">✓</span>
                      <span className="font-medium">Full HD 1080p / 4K</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#fb0c6b] text-lg">✓</span>
                      <span className="font-medium">580 Lúmenes ANSI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#fb0c6b] text-lg">✓</span>
                      <span className="font-medium">Android 11.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#fb0c6b] text-lg">✓</span>
                      <span className="font-medium">Pantalla 150&quot;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Información, Precio y CTA */}
            <div className="flex flex-col justify-center text-white space-y-5">
              {/* Título y características en desktop */}
              <div className="hidden md:block space-y-4">
                <h2 className="text-3xl lg:text-5xl font-black text-white drop-shadow-lg">
                  Proyector HY350 MagCubic
                </h2>
                <p className="text-white/90 text-lg font-medium">
                  ¡Hasta 45% descuento en la mejor tecnología!
                </p>

                {/* Características compactas */}
                <div className="grid grid-cols-2 gap-3 text-sm mt-6">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[#fb0c6b] text-lg">✓</span>
                    <span className="font-medium">Full HD 1080p / 4K</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[#fb0c6b] text-lg">✓</span>
                    <span className="font-medium">580 Lúmenes ANSI</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[#fb0c6b] text-lg">✓</span>
                    <span className="font-medium">Android 11.0</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[#fb0c6b] text-lg">✓</span>
                    <span className="font-medium">Pantalla 150&quot;</span>
                  </div>
                </div>
              </div>

              {/* Precios elegantes */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20">
                {hy350Product.oldPrice && (
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/70 line-through text-xl">
                      S/ {hy350Product.oldPrice.toFixed(2)}
                    </span>
                    {hy350Discount > 0 && (
                      <span className="bg-[#fb0c6b] text-white px-3 py-1.5 rounded-full text-sm font-bold">
                        -{hy350Discount}%
                      </span>
                    )}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-7xl font-black text-white drop-shadow-lg">
                    S/ {hy350Product.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Mensaje de urgencia */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/20 text-center">
                <div className="text-white font-bold text-base">
                  ⚡ Solo quedan {hy350Product.stock} unidades disponibles
                </div>
                <div className="text-sm text-white/80 mt-1">
                  Oferta por tiempo limitado
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/51972300301?text=Hola%20iubizon,%20quiero%20aprovechar%20la%20oferta%20Cyber%20Wow%20del%20Proyector%20HY350%20MagCubic%20a%20S/%20${hy350Product.price.toFixed(2)}`}
                  target="_blank"
                  className="flex-1 bg-white hover:bg-white/90 text-[#0700fe] font-bold py-4 px-8 rounded-full text-center text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Comprar ahora
                </a>
                <Link
                  href="/productos/Proyector-Led-Portatil-HY350-Magcubic-Full-Hd-1080p-Android"
                  className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold py-4 px-8 rounded-full border-2 border-white/40 hover:border-white/60 transition-all duration-300 text-center text-base"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
