"use client";

import MediaCarousel from "../../../components/ui/MediaCarousel";
import OtherProductsCarousel from "../../../components/ui/OtherProductsCarousel";
import { Product } from "@/data-list/products";
import { ChevronRight, Info } from "lucide-react";
import { NoFoundComponent } from "@/components/ui/NoFoundComponent";
import { InformationAndPriceCard } from "@/components/ui/InformationAndPriceCard";
import React, { useEffect, useState } from "react";
import { productsCondition } from "@/data-list/productsCondition";
import { MAGCUBICHY350 } from "./MAGCUBIC-HY350";

interface Props {
  product: Product;
}

const SPECIAL_PRODUCT_ID =
  "Proyector-Led-Portatil-Hy350-Magcubic-Full-Hd-1080p-Android";

export default function ProductDetailPage({ product }: Props) {
  const [showModal, setShowModal] = useState(false);

  const condition = productsCondition[product.condition];

  // Calcular porcentaje de descuento
  const discountPercentage = product.condition === "reconditioned" ? 42 : 17;
  const hasDiscount = product.oldPrice && product.oldPrice > product.price;

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  if (product.id.toUpperCase() === SPECIAL_PRODUCT_ID.toUpperCase()) {
    return <MAGCUBICHY350 product={product} />;
  }

  return (
    <>
      <div className="min-h-screen h-auto flex flex-col w-full bg-white">
        {!product ? (
          <NoFoundComponent />
        ) : (
          <div className="content-wrapper px-7 max-w-[1470px] m-auto w-full">
            <main className="grid grid-cols-12 py-5 w-full relative">
              {/* Banner de Oferta de Verano */}
              {hasDiscount && (
                <div className="col-span-12 mb-6">
                  <div className="relative rounded-2xl px-4 md:px-8 py-4 md:py-6 overflow-hidden shadow-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
                    {/* Patrón de fondo sutil */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(34,211,238,0.4) 0%, transparent 50%),
                                         radial-gradient(circle at 80% 80%, rgba(251,191,36,0.4) 0%, transparent 50%)`,
                      }}
                    />

                    {/* Destellos animados */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute top-2 left-[10%] w-2 h-2 bg-yellow-300 rounded-full blur-sm animate-pulse" />
                      <div
                        className="absolute top-4 right-[15%] w-1.5 h-1.5 bg-cyan-300 rounded-full blur-sm animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <div
                        className="absolute bottom-3 left-[30%] w-2 h-2 bg-white rounded-full blur-sm animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                      <div
                        className="absolute bottom-2 right-[25%] w-1.5 h-1.5 bg-orange-300 rounded-full blur-sm animate-pulse"
                        style={{ animationDelay: "1.5s" }}
                      />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
                      {/* Emojis decorativos izquierda */}
                      <div className="hidden md:flex items-center gap-2 text-2xl">
                        <span className="animate-bounce" style={{ animationDelay: "0s" }}>☀️</span>
                        <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>🌊</span>
                      </div>

                      {/* Contenido principal */}
                      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg md:text-xl lg:text-2xl">🌴</span>
                          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white">
                            Oferta de <span className="text-yellow-300">Verano</span>
                          </h2>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="hidden md:inline text-white/70 text-lg">•</span>
                          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-base md:text-lg font-black shadow-lg animate-pulse">
                            {discountPercentage}% DSCTO.
                          </span>
                          <span className="hidden md:inline text-white/70 text-lg">•</span>
                        </div>

                        <span className="text-xs md:text-sm text-cyan-100 font-medium">
                          Válido hasta el 31 de Marzo
                        </span>
                      </div>

                      {/* Emojis decorativos derecha */}
                      <div className="hidden md:flex items-center gap-2 text-2xl">
                        <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>🌺</span>
                        <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <section className="col-span-12 lg:col-span-8 w-full flex justify-center items-center">
                <div className="w-full">
                  {/*Product media*/}
                  <MediaCarousel product={product} />
                  <div className="block lg:hidden w-full my-10 mb-10 lg:mb-30">
                    <InformationAndPriceCard
                      product={product}
                      showModal={showModal}
                      setShowModal={setShowModal}
                      condition={condition}
                    />
                  </div>
                  {/*Product specifications*/}
                  <div className="w-full h-auto m-auto my-10 md:my-0 md:pt-20">
                    <div className="text-2xl mb-5 text-secondary font-bold">
                      Especificaciones del producto:
                    </div>
                    <div className="product-characteristics w-full grid grid-cols-1 lg:grid-cols-[1fr_40%] gap-x-10 gap-y-4">
                      <div className="w-full flex flex-col gap-2 text-foreground font-mediun text-[.9em] ">
                        {condition && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Condición:
                            </div>{" "}
                            <div className="text-secondary">
                              <strong
                                className="inline-flex items-center gap-1 cursor-pointer"
                                onClick={() => setShowModal(true)}
                              >
                                {condition.name} <Info className="w-4" />
                              </strong>
                            </div>
                          </div>
                        )}
                        {product?.displayTechnology && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Tecnología de visualización:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.displayTechnology}
                            </div>
                          </div>
                        )}
                        {product?.aspectRatio && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Relación de aspecto:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.aspectRatio}
                            </div>
                          </div>
                        )}
                        {product?.brand && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Marca:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.brand}
                            </div>
                          </div>
                        )}
                        {product?.type && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">Tipo:</div>{" "}
                            <div className="text-secondary">{product.type}</div>
                          </div>
                        )}
                        {product?.lumensANSI && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Lúmenes:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.lumensANSI}
                            </div>
                          </div>
                        )}
                        {product?.contrastRatio && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Relación de contraste:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.contrastRatio}
                            </div>
                          </div>
                        )}
                        {product?.connectivity && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Conectividad:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.connectivity}
                            </div>
                          </div>
                        )}
                        {product?.features && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Características:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.features}
                            </div>
                          </div>
                        )}
                        {product?.throwRatio && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Relación de proyección:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.throwRatio}
                            </div>
                          </div>
                        )}
                        {product?.category && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Categoría:
                            </div>
                            <div className="text-secondary flex flex-wrap">
                              {(product?.category || []).map(
                                (category, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-1 m-0"
                                  >
                                    {index !== 0 && (
                                      <ChevronRight className="h-[1em]" />
                                    )}
                                    <span>{category}</span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="w-full flex flex-col gap-2 text-foreground font-mediun text-[.9em]">
                        {product.type === "Proyector" && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5">
                              Advertencia:
                            </div>
                            <div className="text-secondary">
                              Las lámparas del proyector contienen mercurio.
                            </div>
                          </div>
                        )}
                        {product?.aspectRatio && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5 ">
                              Relación de aspecto:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.aspectRatio}
                            </div>
                          </div>
                        )}
                        {product?.model && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5 ">
                              Modelo:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.model}
                            </div>
                          </div>
                        )}
                        {product?.nativeResolution && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5 ">
                              Resolución nativa:
                            </div>{" "}
                            <div className="text-secondary">
                              {product.nativeResolution}
                            </div>
                          </div>
                        )}
                        {product?.technicalSheetUrl && (
                          <div className="flex flex-col md:flex-row flex-wrap items-start md:items-end">
                            <div className="pr-4 w-[11em] leading-5 ">
                              Ficha técnica:
                            </div>{" "}
                            <div className="text-secondary">
                              <a
                                href={product.technicalSheetUrl}
                                target="_blank"
                                className="text-blue-500 hover:underline"
                              >
                                ¡Click aquí!
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="hidden lg:block col-span-12 lg:col-span-4 w-full mx-auto mt-15 lg:mt-0 px-0 lg:px-10 md:sticky top-4 self-start">
                <InformationAndPriceCard
                  product={product}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  condition={condition}
                />
              </div>
            </main>
            {product?.note && (
              <div className="w-full h-auto m-auto py-10 md:py-5 mb-0 md:mb-10">
                <div className="text-2xl mb-3 text-secondary font-bold">
                  Descripción del artículo:
                </div>
                <p className="text-base text-black/90 whitespace-pre-line">
                  {product.note}
                </p>
              </div>
            )}
            <OtherProductsCarousel currentProduct={product} />
          </div>
        )}
      </div>
    </>
  );
}
