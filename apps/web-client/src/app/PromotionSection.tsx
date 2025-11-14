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
    <section className="relative mt-12 mb-12 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-[6px] border-white/10 min-h-[600px] md:min-h-[500px] bg-gradient-to-br from-[#0a0f1a] via-[#0d1520] to-[#050a12]">
      {/* Video de fondo a toda altura */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-auto min-w-full object-cover opacity-10"
        >
          <source src="/productos/HY350/outboxing.mp4" type="video/mp4" />
        </video>
        {/* Overlay con gradiente oscuro mejorado */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a]/98 via-[#0d1520]/96 to-[#050a12]/98"></div>

        {/* Efecto de luz ambiental navideño suave */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d90429]/5 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0f3d1f]/8 rounded-full blur-[140px] animate-pulse delay-700"></div>
      </div>

      {/* Elementos decorativos navideños mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Copos de nieve flotantes con animación más suave */}
        <div className="absolute top-[8%] left-[8%] text-white/25 text-3xl animate-[float_3s_ease-in-out_infinite]">
          ❄️
        </div>
        <div className="absolute top-[15%] right-[12%] text-white/20 text-2xl animate-[float_4s_ease-in-out_infinite_0.5s]">
          ❄️
        </div>
        <div className="absolute top-[35%] left-[3%] text-white/25 text-4xl animate-[float_3.5s_ease-in-out_infinite_1s]">
          ❄️
        </div>
        <div className="absolute top-[55%] right-[8%] text-white/25 text-3xl animate-[float_4s_ease-in-out_infinite_1.5s]">
          ❄️
        </div>
        <div className="absolute bottom-[15%] left-[15%] text-white/20 text-2xl animate-[float_3s_ease-in-out_infinite_0.8s]">
          ❄️
        </div>
        <div className="absolute bottom-[25%] right-[20%] text-white/25 text-3xl animate-[float_3.5s_ease-in-out_infinite_1.2s]">
          ❄️
        </div>
        <div className="absolute top-[25%] left-[40%] text-white/20 text-xl animate-[float_4s_ease-in-out_infinite_0.3s]">
          ⭐
        </div>
        <div className="absolute bottom-[40%] right-[35%] text-white/20 text-xl animate-[float_3.5s_ease-in-out_infinite_1.8s]">
          ✨
        </div>

        {/* Luces decorativas navideñas en los bordes con verde oscuro */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0f3d1f]/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0f3d1f]/40 to-transparent animate-pulse delay-500"></div>

        {/* Estrellas brillantes en las esquinas */}
        <div className="absolute top-4 left-4 text-emerald-400/50 text-2xl animate-[spin_4s_linear_infinite]">
          ⭐
        </div>
        <div className="absolute top-4 right-4 text-emerald-400/50 text-2xl animate-[spin_4s_linear_infinite_reverse]">
          ⭐
        </div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-8 py-8">
        {/* Contenido centrado */}
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
            {/* Columna izquierda - Imagen del producto */}
            <div className="flex flex-col items-center justify-center">
              {/* Imagen del producto con efecto elegante */}
              <div className="relative group w-full max-w-md">
                {/* Badge de Navidad mejorado */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Resplandor del badge */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d1f] via-[#14532d] to-[#0f3d1f] blur-xl opacity-40 animate-pulse"></div>

                    {/* Badge principal con verde oscuro y solo acento rojo */}
                    <div className="relative inline-flex items-center gap-2.5 bg-gradient-to-r from-[#14532d] via-[#0f3d1f] to-[#14532d] backdrop-blur-sm px-6 py-3 rounded-full shadow-2xl border-[3px] border-[#d90429]/15 hover:scale-105 transition-transform duration-300">
                      <span className="text-xl animate-bounce">🎄</span>
                      <span className="text-sm font-black uppercase tracking-wider text-white drop-shadow-md">
                        Oferta Navidad 2025
                      </span>
                      <span className="text-xl animate-bounce delay-100">
                        🎁
                      </span>
                    </div>
                  </div>
                </div>

                {/* Resplandor neón navideño mejorado */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#0f3d1f]/25 via-[#14532d]/25 to-[#0f3d1f]/25 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-500"></div>

                <div className="relative transform group-hover:scale-[1.05] transition-all duration-500 group-hover:rotate-1">
                  {/* Círculo decorativo detrás del producto */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-2xl"></div>

                  <Image
                    src="/productos/HY350/HY350-sin-fondo.png"
                    alt="Proyector HY350 Magcubic - Oferta Navidad 2025"
                    width={500}
                    height={500}
                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(15,61,31,0.4)] relative z-10"
                    priority
                  />

                  {/* Badge de descuento mejorado */}
                  {hy350Discount > 0 && (
                    <div className="absolute -top-6 -right-6 z-20">
                      {/* Resplandor del badge de descuento */}
                      <div className="absolute inset-0 bg-[#d90429] rounded-full blur-2xl opacity-60 animate-pulse"></div>

                      {/* Badge principal */}
                      <div className="relative bg-gradient-to-br from-[#d90429] to-[#b5001f] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-2xl shadow-[#d90429]/60 border-[5px] border-white animate-[bounce_2s_ease-in-out_infinite] hover:rotate-12 transition-transform duration-300">
                        <span className="text-3xl font-black drop-shadow-md">
                          {hy350Discount}%
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider">
                          OFF
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Partículas decorativas alrededor del producto */}
                  <div className="absolute top-1/4 -left-8 text-yellow-300/60 text-2xl animate-[float_3s_ease-in-out_infinite]">
                    ✨
                  </div>
                  <div className="absolute top-1/3 -right-8 text-yellow-300/60 text-2xl animate-[float_3.5s_ease-in-out_infinite_0.5s]">
                    ✨
                  </div>
                </div>

                {/* Título y características en móvil */}
                <div className="mt-6 md:hidden text-white">
                  <h2 className="text-2xl font-black text-center mb-3 text-white drop-shadow-lg">
                    Proyector HY350 MagCubic
                  </h2>
                  <p className="text-white/90 text-center mb-5 font-medium">
                    ¡La mejor tecnología para estas fiestas!
                  </p>

                  {/* Características para móvil con mejor diseño */}
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <span className="text-[#d90429] text-xl">✓</span>
                      <span className="font-semibold text-white">
                        Full HD 1080p / 4K
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <span className="text-[#14532d] text-xl">✓</span>
                      <span className="font-semibold text-white">
                        580 Lúmenes ANSI
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <span className="text-[#d90429] text-xl">✓</span>
                      <span className="font-semibold text-white">
                        Android 11.0
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <span className="text-[#14532d] text-xl">✓</span>
                      <span className="font-semibold text-white">
                        Pantalla hasta 150&quot;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Información, Precio y CTA */}
            <div className="flex flex-col justify-center text-white space-y-5">
              {/* Título y características en desktop */}
              <div className="hidden md:block space-y-5">
                <div className="space-y-3">
                  <h2 className="text-4xl lg:text-6xl font-black text-white drop-shadow-2xl leading-tight">
                    Proyector HY350 MagCubic
                  </h2>
                  <p className="text-white/95 text-xl font-semibold drop-shadow-lg">
                    ¡La mejor tecnología para estas fiestas! 🎄
                  </p>
                </div>

                {/* Características con diseño de tarjetas */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-[#d90429]/50 transition-all duration-300 hover:scale-105">
                    <span className="text-[#d90429] text-2xl">✓</span>
                    <span className="font-bold text-white">
                      Full HD 1080p / 4K
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-[#14532d]/50 transition-all duration-300 hover:scale-105">
                    <span className="text-[#14532d] text-2xl">✓</span>
                    <span className="font-bold text-white">
                      580 Lúmenes ANSI
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-[#d90429]/50 transition-all duration-300 hover:scale-105">
                    <span className="text-[#d90429] text-2xl">✓</span>
                    <span className="font-bold text-white">Android 11.0</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-[#14532d]/50 transition-all duration-300 hover:scale-105">
                    <span className="text-[#14532d] text-2xl">✓</span>
                    <span className="font-bold text-white">
                      Pantalla 150&quot;
                    </span>
                  </div>
                </div>
              </div>

              {/* Precios elegantes */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 hover:border-white/50 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(217,4,41,0.3)]">
                {hy350Product.oldPrice && (
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/70 line-through text-xl">
                      S/ {hy350Product.oldPrice.toFixed(2)}
                    </span>
                    {hy350Discount > 0 && (
                      <span className="bg-[#d90429] text-white px-3 py-1.5 rounded-full text-sm font-bold border-2 border-white animate-pulse">
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
                <div className="mt-2 text-white/80 text-sm font-semibold">
                  🎁 Precio especial de Navidad
                </div>
              </div>

              {/* Mensaje de urgencia navideño */}
              <div className="bg-gradient-to-r from-[#14532d] to-[#0f3d1f] backdrop-blur-md rounded-xl px-5 py-3 border-2 border-[#d90429]/15 text-center hover:scale-105 transition-transform duration-300 shadow-lg">
                <div className="text-white font-bold text-base">
                  🎁 Solo quedan {hy350Product.stock} unidades para Navidad
                </div>
                <div className="text-sm text-white/90 mt-1">
                  Oferta especial navideña por tiempo limitado
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/productos/Proyector-Led-Portatil-HY350-Magcubic-Full-Hd-1080p-Android"
                  className="flex-1 bg-gradient-to-r from-[#14532d] to-[#0f3d1f] hover:from-[#1a5a37] hover:to-[#14532d] text-white font-bold py-4 px-8 rounded-full text-center text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-emerald-600/30"
                >
                  🎄 Comprar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
