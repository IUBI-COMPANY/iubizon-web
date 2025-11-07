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
  showChristmasCampaign?: boolean;
}

export const InformationAndPriceCard = ({
  product,
  showModal,
  setShowModal,
  condition,
  showChristmasCampaign = false,
}: Props) => {
  const options = [
    product?.brand,
    product?.model,
    product?.lumensANSI,
    product?.contrastRatio,
    product?.nativeResolution,
    product?.aspectRatio,
    product?.throwRatio,
  ].filter(Boolean);

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
          <h1 className="text-4xl font-bold text-left mb-8 text-secondary">
            {product.name || product.model}
          </h1>
          {options.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {options.map((opt, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-[.3em] rounded-full font-semibold text-[.8em] shadow-sm focus:outline-none ${
                    idx === 0
                      ? "bg-secondary text-white"
                      : "bg-white/90 text-secondary border border-secondary/40"
                  }`}
                >
                  {opt}
                </span>
              ))}
            </div>
          )}
          {product?.price && (
            <div className="w-full h-auto my-7">
              {showChristmasCampaign && product?.oldPrice && (
                <div
                  className="mb-3 px-3 py-2.5 rounded-lg text-white text-center shadow-lg relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(90deg, #1a4d2e 0%, #2d5f3f 50%, #1a4d2e 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                      animation: "elegantShine 4s ease-in-out infinite",
                    }}
                  ></div>
                  <div className="relative z-10 flex flex-col gap-1.5">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-xs" style={{ color: "#d4af37" }}>
                        ✦
                      </span>
                      <span className="text-base">🎁</span>
                      <span
                        className="text-xs font-bold tracking-wide"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        NAVIDAD <span style={{ color: "#d4af37" }}>2025</span>
                      </span>
                      <span className="text-base">🎄</span>
                      <span className="text-xs" style={{ color: "#d4af37" }}>
                        ✦
                      </span>
                    </div>
                    <div className="inline-flex items-center justify-center">
                      <span
                        className="px-3 py-1 rounded-md font-extrabold text-sm shadow-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)",
                          border: "2px solid rgba(255, 255, 255, 0.95)",
                          boxShadow: "0 3px 10px rgba(220, 38, 38, 0.4)",
                        }}
                      >
                        {Math.round(
                          ((product.oldPrice - product.price) /
                            product.oldPrice) *
                            100,
                        )}
                        % DSCTO.
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {product?.oldPrice && (
                <div className="mb-2">
                  <p className="text-sm text-secondary/70">Precio antes:</p>
                  <p className="text-xl text-secondary/60 line-through flex items-center gap-1">
                    <span className="text-sm">S/</span>
                    <span>{product.oldPrice}</span>
                  </p>
                </div>
              )}
              <div className="flex flex-wrap gap-7 mb-3">
                <div className="flex items-center justify-start gap-1">
                  <p className="text-base font-bold text-primary flex justify-center items-start gap-1">
                    <span className="text-[1em]">S/</span>
                    <span className="text-3xl">{product.price}</span>
                  </p>
                  <span className="text-secondary text-lg font-light ml-1">
                    c/u
                  </span>
                </div>
                {product?.badge && (
                  <div
                    className="w-auto py-1 px-3 bg-amber-400/60 text-secondary text-[.8em] font-bold rounded-2xl my-3 text-center"
                    style={{
                      animation: "scalePulse 1.5s ease-in-out infinite",
                    }}
                  >
                    <span>{product.badge}</span>
                  </div>
                )}
              </div>
              {product?.oldPrice && (
                <div className="mb-4">
                  <span className="text-sm font-bold text-green-600">
                    ¡Ahorrás S/ {(product.oldPrice - product.price).toFixed(2)}!
                  </span>
                </div>
              )}
              {product?.sub && (
                <div className="mb-7">
                  <span className="text-sm font-semibold text-secondary">
                    {product.sub}
                  </span>
                </div>
              )}
            </div>
          )}
          <ul className="mb-7 space-y-4 list-style-none">
            <li className="my-3">
              <span className="text-sm text-secondary/90">
                <p className="mt-1 text-sm text-secondary/70">
                  Cantidad: {product.stock}{" "}
                  {product?.oldStock && (
                    <>
                      /{" "}
                      <span className="line-through text-gray-400 mr-2">
                        {product?.oldStock}
                      </span>
                    </>
                  )}
                </p>
              </span>
            </li>
            {product.stock <= 0 ? (
              <p className="mt-1 text-sm text-red-600">
                Lo sentimos ya no queda stock, pero{" "}
                <span className="font-semibold">puede comprarlo a pedido</span>
              </p>
            ) : (
              <p className="mt-1 text-sm text-green-600 font-medium">
                Disponible puedes comprarlo ahora mismo
              </p>
            )}
            {product?.condition && (
              <li className="flex items-start">
                <span className="mt-1 text-xl text-primary"></span>
                <span className="text-sm inline-flex items-center gap-4 text-foreground">
                  Condición:
                  <strong
                    className="inline-flex items-center gap-1 cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    {condition.name} <Info className="w-4" />
                  </strong>
                </span>
                <div
                  className={`fixed inset-0 z-40 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
                    showModal ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  onClick={() => setShowModal(false)}
                >
                  <div
                    className="relative z-40 bg-white rounded-lg shadow-lg p-8 max-w-md w-full transform transition-transform duration-300 scale-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <XCircle
                      className="absolute bg-gray right-3 top-3 cursor-pointer text-gray-500 hover:text-gray-700"
                      onClick={() => setShowModal(false)}
                    />
                    <h2 className="text-xl font-bold mb-4 text-secondary">
                      {condition.name}
                    </h2>
                    <p className="text-base mb-6 text-foreground">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </li>
            )}
            {product?.type === "Proyector" && (
              <li className="items-start">
                <span className="mt-1 text-xl text-primary bg-ambar-500"></span>
                <span className="flex flex-col items-center">
                  {product?.condition === "new" && <GiftCardNews />}
                  {product?.condition === "reconditioned" && (
                    <GiftCardReaconditioned />
                  )}
                </span>
              </li>
            )}
          </ul>
          <a
            href={`https://wa.me/51972300301?text=${getWhatsAppMessage(product)}`}
            target="_blank"
            className="rounded-full mt-10 px-8 py-3 text-base text-center md:text-lg font-medium w-full md:w-auto shadow-lg transition bg-primary text-white hover:bg-primary/90 hover:scale-105 duration-300 flex items-center justify-center gap-2"
          >
            {product.stock <= 0 ? "Comprar a pedido" : "Comprar ahora"}
          </a>
        </div>
      </section>
    </>
  );
};
