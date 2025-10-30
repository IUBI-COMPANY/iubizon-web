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
        isSpecial &&
          "border-2 border-orange-400/60 shadow-xl shadow-orange-400/20 hover:shadow-2xl hover:shadow-orange-400/30 hover:-translate-y-1",
      )}
    >
      {isSpecial && (
        <>
          {/* Efecto de brillo animado sutil */}
          <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-yellow-400/10 rounded-full blur-2xl pointer-events-none animate-pulse" />
          <div
            className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-yellow-400/15 rounded-full blur-2xl pointer-events-none animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Borde brillante animado */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-orange-400/30 pointer-events-none" />

          {/* Línea de brillo que se desplaza */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent pointer-events-none animate-shimmer"
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
          {isSpecial && (
            <span className="rounded-full px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white absolute top-1 right-1 shadow-md flex items-center gap-1 animate-float">
              <span className="animate-pulse">⭐</span>
              <span>Best seller</span>
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
              isSpecial && "group-hover:text-orange-600",
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
            isSpecial &&
              "text-green-600 group-hover:text-orange-600 group-hover:font-semibold",
          )}
        >
          Disponible puedes comprarlo ahora mismo
        </p>
      )}
      <div
        className={twMerge(
          "rounded-lg py-2 px-4 my-3 text-center relative z-10 transition-all duration-300",
          isSpecial
            ? "bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/50 group-hover:from-orange-100 group-hover:to-orange-150 group-hover:border-orange-300"
            : "bg-orange-50",
        )}
      >
        <div className="flex items-end justify-center gap-1">
          <p
            className={twMerge(
              "text-base font-bold text-primary flex justify-center items-start gap-1 transition-transform duration-300",
              isSpecial && "group-hover:scale-110",
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
            isSpecial
              ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg hover:scale-105"
              : "bg-secondary",
          )}
        >
          {product.stock <= 0 ? "Comprar a pedido" : "Comprar ahora"}
        </a>
        <Link
          href={`/productos/${product.id}`}
          className={twMerge(
            "rounded-xl px-4 py-2 text-sm font-semibold text-secondary border-solid border-1 border-tertiary transition-all duration-300",
            isSpecial && "hover:bg-orange-50 hover:border-orange-400",
          )}
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};
