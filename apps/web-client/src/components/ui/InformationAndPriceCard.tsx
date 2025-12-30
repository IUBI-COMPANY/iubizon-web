import React from "react";
import { Info, XCircle } from "lucide-react";
import { Product } from "@/data-list/products";
import { GiftCardReaconditioned } from "./GiftCardReaconditioned";
import { GiftCardNews } from "./GiftCardNews";
import { DetailProductCondition } from "@/data-list/productsCondition";
import { getWhatsAppMessage } from "@/utils/whatsapp";

interface Props {
  product: Product;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  condition: DetailProductCondition;
}

export const InformationAndPriceCard = ({
  product,
  showModal,
  setShowModal,
  condition,
}: Props) => {
  return (
    <>
      <style jsx>{`
        @keyframes elegantShine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
      <section className="w-full">
        <div className="product-price-card bg-white/40 rounded-3xl p-0 md:p-5 border-0 md:border-1 md:border-secondary shadow-none md:shadow-md">
          {/* 1. TÍTULO DEL PRODUCTO */}
          <h1 className="text-2xl md:text-3xl font-bold text-left mb-3 text-secondary leading-tight">
            {product.name || product.model}
          </h1>

          <div className="tags flex flex-wrap gap-1">

            {product.classification === "clearance" && (
              <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold">
                <span>🤑</span>
                <span>Precio de remate</span>
              </div>
            )}
          </div>

          {/* 3. STOCK Y DISPONIBILIDAD (compacto) */}
          <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-700">
                Stock:
              </span>
              <span className="text-sm font-bold text-secondary">
                {product.stock} {product.stock === 1 ? "unidad" : "unidades"}
              </span>
            </div>
            {product.stock <= 0 ? (
              <p className="text-xs text-red-600 mt-2">
                ⚠️ Sin stock •{" "}
                <span className="font-semibold">Compra a pedido</span>
              </p>
            ) : (
              <p className="text-xs text-green-700 font-medium mt-2">
                ✓ Disponible para compra inmediata
              </p>
            )}
          </div>

          {/* 4. CONDICIÓN DEL PRODUCTO */}
          {product?.condition && (
            <div className="mb-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gray-600">Condición:</span>
                <button
                  className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-white text-xs font-semibold rounded-full hover:bg-secondary/90 transition-colors"
                  onClick={() => setShowModal(true)}
                >
                  {condition.name}
                  <Info className="w-3 h-3" />
                </button>
              </div>

              {/* Modal de información */}
              <div
                className={`fixed inset-0 z-40 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
                  showModal ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setShowModal(false)}
              >
                <div
                  className="relative z-40 bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 transform transition-transform duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <XCircle
                    className="absolute right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={() => setShowModal(false)}
                  />
                  <h2 className="text-xl font-bold mb-4 text-secondary">
                    {condition.name}
                  </h2>
                  <p className="text-base text-foreground leading-relaxed">
                    {condition.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 5. PRECIOS (sutil y elegante) */}
          {product?.price && (
            <div className="mb-4">
              {/* Comparación de precios sutil */}
              {product?.oldPrice ? (
                <div className="mb-3">
                  {/* Precio anterior y ahorro en una línea */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Antes:</span>
                      <span className="text-base text-gray-400 line-through">
                        S/ {product.oldPrice.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-green-600">
                      Ahorras S/ {(product.oldPrice - product.price).toFixed(2)}
                    </span>
                  </div>

                  {/* Precio actual destacado */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Ahora:</span>
                      {product?.badge && (
                        <span className="px-2 py-0.5 bg-amber-400 text-white text-xs font-bold rounded-full">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-3xl font-bold text-primary">
                      S/ {product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ) : (
                /* Precio sin descuento */
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Precio</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-secondary">
                      S/ {product.price.toFixed(2)}
                    </span>
                    {product?.badge && (
                      <span className="px-2 py-0.5 bg-amber-400 text-white text-xs font-bold rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Desglose de precios */}
              <div className="space-y-1.5 p-3 bg-gray-50 rounded-lg mb-3">
                {product?.discount && (
                  <div className="flex justify-between text-xs items-center">
                    <span className="text-gray-600">Descuento</span>
                    <span className="font-semibold text-green-600">
                      - S/ {product.discount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-xs items-center">
                  <span className="text-gray-600">SubTotal</span>
                  <span className="font-medium text-gray-800">
                    S/ {product.subTotal?.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs items-center pb-2 border-b border-gray-300">
                  <span className="text-gray-600">IGV (18%)</span>
                  <span className="font-medium text-gray-800">
                    S/ {product.IGV?.toFixed(2)}
                  </span>
                </div>

                {/* Total destacado */}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-bold text-gray-900">
                    Total a Pagar:
                  </span>
                  <span className="text-xl font-black text-primary">
                    S/ {product.totalPayment?.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 6. REGALOS Y BENEFICIOS */}
          {product?.type === "Proyector" && (
            <div className="mb-4">
              {product?.condition === "new" && <GiftCardNews />}
              {product?.condition === "reconditioned" && (
                <GiftCardReaconditioned />
              )}
            </div>
          )}

          {/* 7. BOTÓN DE ACCIÓN (CTA) */}
          <a
            href={`https://wa.me/51972300301?text=${getWhatsAppMessage(product)}`}
            target="_blank"
            className="block w-full rounded-full px-6 py-3 text-sm md:text-base font-bold text-center shadow-lg transition bg-primary text-white hover:bg-primary/90 hover:scale-105 duration-300"
          >
            {product.stock <= 0 ? "Comprar a pedido" : "Comprar ahora"}
          </a>
        </div>
      </section>
    </>
  );
};
