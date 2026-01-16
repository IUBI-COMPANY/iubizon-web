"use client";

import React from "react";
import { Product } from "@/data-list/products";

interface SummerBannerProps {
  product: Product;
}

export const SummerBanner = ({ product }: SummerBannerProps) => {
  // Calcular el descuento real del producto
  const discountPercentage =
    product?.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100,
        )
      : 0;
  return (
    <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-300/60">
      <div className="relative bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 px-6 py-5 md:px-8 md:py-6">
        {/* Elementos decorativos de verano */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soles flotantes */}
          <div className="absolute top-2 left-8 text-yellow-200/50 text-3xl md:text-4xl animate-[spin_8s_linear_infinite]">
            ☀️
          </div>
          <div className="absolute top-3 right-12 text-yellow-200/40 text-2xl md:text-3xl animate-[spin_10s_linear_infinite]">
            ☀️
          </div>
          <div className="absolute bottom-2 left-[20%] text-yellow-200/40 text-2xl animate-[spin_12s_linear_infinite]">
            ☀️
          </div>

          {/* Efectos de brillo */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-orange-300/30 rounded-full blur-3xl"></div>

          {/* Palmeras y elementos playeros */}
          <div className="absolute bottom-2 right-[15%] text-3xl opacity-40">
            🌴
          </div>
          <div className="absolute top-2 left-[35%] text-2xl opacity-35">
            🏖️
          </div>
          <div className="absolute bottom-3 left-[55%] text-2xl opacity-40">
            🌊
          </div>
          <div className="absolute top-3 right-[25%] text-xl opacity-30">
            🍹
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          {/* Iconos decorativos izquierda */}
          <div className="flex items-center gap-2 text-3xl md:text-4xl">
            <span className="animate-bounce drop-shadow-lg">🌞</span>
            <span className="hidden md:inline animate-pulse drop-shadow-lg">
              🏖️
            </span>
          </div>

          {/* Texto principal */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] tracking-wide leading-tight">
              <span className="inline-flex items-center gap-2">
                ✨ <span>Ofertas de</span>{" "}
                <span className="text-yellow-100">Verano</span> ✨
              </span>
            </h2>

            <div className="flex items-center gap-3">
              <div className="h-8 md:h-10 w-px bg-white/50 hidden md:block"></div>

              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <span className="text-base md:text-lg font-black text-white/95 uppercase tracking-widest drop-shadow-md">
                  VERANO 2025
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-white/90 hidden md:inline text-xl">
                    •
                  </span>
                  <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-base md:text-xl font-black shadow-[0_4px_12px_rgba(220,38,38,0.5)] border-3 border-white/40 animate-pulse">
                    {discountPercentage > 0
                      ? `-${discountPercentage}%`
                      : "20% DSCTO."}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Iconos decorativos derecha */}
          <div className="flex items-center gap-2 text-3xl md:text-4xl">
            <span className="hidden md:inline animate-pulse delay-100 drop-shadow-lg">
              🌴
            </span>
            <span className="animate-bounce delay-150 drop-shadow-lg">🌊</span>
          </div>
        </div>

        {/* Mensaje adicional */}
        <div className="relative z-10 text-center mt-2 md:mt-2">
          <p className="text-sm md:text-base text-white/95 font-bold drop-shadow-md">
            Válido hasta el 31 de Marzo • Aprovecha el sol y la diversión 🏄
          </p>
        </div>
      </div>
    </div>
  );
};
