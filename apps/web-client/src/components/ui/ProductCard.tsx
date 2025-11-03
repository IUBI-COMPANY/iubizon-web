import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data-list/products";
import { twMerge } from "tailwind-merge";
import { getWhatsAppMessage } from "@/utils/whatsapp";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const isNew = product?.condition === "new";
  const isSpecial = product?.special === true;

  // Check if Cyber WOW campaign is active (Nov 3-6, 2025)
  const isCyberWowActive = () => {
    const now = new Date();
    const campaignStart = new Date(2025, 10, 3); // Nov 3
    const campaignEnd = new Date(2025, 10, 6, 23, 59, 59); // Nov 6 end of day
    return now >= campaignStart && now <= campaignEnd;
  };

  const isCyberWow = product?.ciberWow === true && isCyberWowActive();

  // Generate descriptive alt text for product card image
  const getProductImageAlt = () => {
    const productName = product?.name || "Proyector";
    const brand = product?.brand || "";
    const lumensANSI = product?.lumensANSI || "";
    const condition = isNew ? "Nuevo" : "Reacondicionado";

    return `${productName} ${brand} ${lumensANSI} - Proyector ${condition} en Lima, Perú`;
  };

  return (
    <article
      key={product.model}
      className={twMerge(
        "keen-slider__slide flex flex-col h-full group rounded-3xl p-5 shadow-sm hover:shadow-md border-solid border-1 border-gray-400/40 bg-white relative overflow-hidden transition-all duration-500",
        `${product?.condition === "new" && "border-primary"}`,
        (isSpecial || isCyberWow) &&
          "border-2 border-[#0700fe]/40 shadow-lg shadow-[#0700fe]/10 hover:shadow-xl hover:shadow-[#0700fe]/15 hover:-translate-y-1",
      )}
    >
      {(isSpecial || isCyberWow) && (
        <>
          {/* Efecto de brillo Cyber Wow */}
          <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#0700fe]/8 to-[#fb0c6b]/6 rounded-full blur-2xl pointer-events-none animate-pulse" />
          <div
            className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-tr from-[#fb0c6b]/6 to-[#0700fe]/8 rounded-full blur-2xl pointer-events-none animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Borde brillante Cyber Wow */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#0700fe]/20 pointer-events-none" />

          {/* Línea de brillo Cyber Wow */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0700fe]/40 to-transparent pointer-events-none animate-shimmer"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          />
        </>
      )}
      <div className="mb-3 relative z-10">
        <div className="relative w-full h-48 rounded-xl overflow-hidden bg-white group-hover:scale-[1.02] transition-transform duration-300">
          {product?.condition && (
            <span
              className={twMerge(
                "rounded-full px-2.5 py-1 text-xs font-semibold bg-primary text-white absolute top-1 left-1 transition-transform duration-300",
                !isNew && "bg-secondary/70",
                isSpecial && "group-hover:scale-105",
              )}
            >
              {isNew ? "Nuevo" : "Reacondicionado"}
            </span>
          )}
          {(isSpecial || isCyberWow) && (
            <span className="rounded-full px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-[#0700fe] to-[#fb0c6b] text-white absolute top-1 right-1 shadow-md shadow-[#0700fe]/30 flex items-center gap-1 animate-float">
              <span className="animate-pulse">⚡</span>
              <span>Cyber Wow</span>
            </span>
          )}
          <Image
            src={product?.mainImage || "product-not-found.png"}
            width={300}
            height={300}
            alt={getProductImageAlt()}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 item-center relative z-10">
        <Link href={`/productos/${product.id}`}>
          <h2
            className={twMerge(
              "text-xl font-semibold text-gray-800 transition-colors duration-300",
              (isSpecial || isCyberWow) && "group-hover:text-[#0700fe]",
            )}
          >
            {product?.name}
          </h2>
        </Link>
      </div>
      <div className="my-2 flex flex-wrap gap-2 justify-start items-center relative z-10">
        {product?.brand && (
          <span className="px-3 py-[.4em] rounded-full font-semibold text-[.6em] shadow-sm focus:outline-none bg-white/90 text-secondary border border-secondary/40">
            {product.brand}
          </span>
        )}
        {product?.lumensANSI && (
          <span className="px-3 py-[.4em] rounded-full font-semibold text-[.6em] shadow-sm focus:outline-none bg-white/90 text-secondary border border-secondary/40">
            {product.lumensANSI} Lúmenes ANSI
          </span>
        )}
        {product?.throwRatio && (
          <span className="px-3 py-[.4em] rounded-full font-semibold text-[.6em] shadow-sm focus:outline-none bg-white/90 text-secondary border border-secondary/40">
            {product.throwRatio}
          </span>
        )}
      </div>
      {/* Stock */}
      <p className="mt-1 text-sm text-secondary/70 relative z-10">
        Cantidad: {product.stock} {product.stock === 1 ? "unidad" : "unidades"}
        {product?.oldStock && (
          <>
            {" "}
            /{" "}
            <span className="line-through text-gray-400 mr-2">
              {product?.oldStock}
            </span>
          </>
        )}
      </p>
      {product.stock <= 0 ? (
        <p className="mt-1 text-xs text-red-600 relative z-10">
          Lo sentimos ya no queda stock, pero{" "}
          <span className="font-semibold cursor-pointer">
            puede comprarlo a pedido
          </span>
        </p>
      ) : (
        <p
          className={twMerge(
            "mt-1 text-xs font-medium relative z-10 transition-all duration-300",
            (isSpecial || isCyberWow) &&
              "text-green-600 group-hover:text-[#0700fe] group-hover:font-semibold",
          )}
        >
          Disponible puedes comprarlo ahora mismo
        </p>
      )}
      <div
        className={twMerge(
          "rounded-lg py-2 px-4 my-3 text-center relative z-10 transition-all duration-300",
          isSpecial || isCyberWow
            ? "bg-gradient-to-br from-blue-50 to-fuchsia-50/50 border border-[#0700fe]/20 group-hover:from-blue-100 group-hover:to-fuchsia-100/50 group-hover:border-[#0700fe]/30"
            : "bg-orange-50",
        )}
      >
        <div className="flex items-end justify-center gap-1">
          <p
            className={twMerge(
              "text-base font-bold text-primary flex justify-center items-start gap-1 transition-transform duration-300",
              (isSpecial || isCyberWow) && "group-hover:scale-110",
            )}
          >
            <span className="text-[.7em]">S/</span>
            <span className="text-2xl">{product.price}</span>
          </p>
          <span className="text-secondary text-sm font-light ml-1">c/u</span>
        </div>
        {product?.sub && (
          <p className="text-xs text-secondary/80">{product.sub}</p>
        )}
      </div>
      <div className="flex items-center mt-3 text-sm text-gray-600 mb-1 relative z-10">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Descuento por volumen
      </div>
      {!isNew && (
        <div className="flex items-center text-sm text-gray-600 mb-1 relative z-10">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Prueba de funcionamiento verificada
        </div>
      )}
      <div className="flex items-center text-sm text-gray-600 mb-1 relative z-10">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Garantía de {product?.condition === "new" ? "12 meses" : "6 meses"}
      </div>
      <div className="mt-3 grid gap-2 grid-cols-[1fr_auto] row-span-1 items-end relative z-10">
        <a
          href={`https://wa.me/51972300301?text=${getWhatsAppMessage(product)}`}
          target="_blank"
          className={twMerge(
            "w-full rounded-xl px-4 py-2 text-center text-sm font-semibold shadow-sm transition-all duration-300 text-white",
            isSpecial || isCyberWow
              ? "bg-gradient-to-r from-[#0700fe] to-[#fb0c6b] hover:from-[#0700fe]/90 hover:to-[#fb0c6b]/90 shadow-md hover:shadow-lg hover:scale-105"
              : "bg-secondary",
          )}
        >
          {product.stock <= 0 ? "Comprar a pedido" : "Comprar ahora"}
        </a>
        <Link
          href={`/productos/${product.id}`}
          className={twMerge(
            "rounded-xl px-4 py-2 text-sm font-semibold text-secondary border-solid border-1 border-tertiary transition-all duration-300",
            (isSpecial || isCyberWow) &&
              "hover:bg-blue-50 hover:border-[#0700fe]",
          )}
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};
