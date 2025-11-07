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

  // Check if Christmas campaign is active (Nov 1 - Dec 31, 2025)
  const isChristmasCampaignActive = () => {
    const now = new Date();
    const campaignStart = new Date(2025, 10, 1); // Nov 1, 2025
    const campaignEnd = new Date(2025, 11, 31, 23, 59, 59); // Dec 31, 2025 end of day
    return now >= campaignStart && now <= campaignEnd;
  };

  const showChristmasCampaign = Boolean(
    product?.campaign && isChristmasCampaignActive(),
  );

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
      <style>
        {`
      @keyframes sparkle {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.5;
          transform: scale(1.2);
        }
      }

      @keyframes elegantShine {
        0% {
          left: -150%;
        }
        100% {
          left: 150%;
        }
      }

      @keyframes subtleGlow {
        0%, 100% {
          filter: brightness(1);
        }
        50% {
          filter: brightness(1.1);
        }
      }

      .christmas-badge {
        background: linear-gradient(90deg, #1a4d2e 0%, #2d5f3f 50%, #1a4d2e 100%);
        position: relative;
        overflow: hidden;
        animation: subtleGlow 3s ease-in-out infinite;
      }

      .christmas-badge::before {
        content: '';
        position: absolute;
        top: 0;
        left: -150%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        animation: elegantShine 4s ease-in-out infinite;
        pointer-events: none;
      }

      .gold-star {
        color: #d4af37;
        animation: sparkle 2s ease-in-out infinite;
      }

      .gold-decoration {
        color: #d4af37;
        opacity: 0.8;
      }

      .discount-badge {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%);
        border: 2px solid rgba(255, 255, 255, 0.95);
        box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4), 0 0 20px rgba(220, 38, 38, 0.2);
        position: relative;
        overflow: hidden;
      }

      .discount-badge::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: elegantShine 3s ease-in-out infinite;
        pointer-events: none;
      }

      .wavy-line {
        display: inline-block;
        color: #d4af37;
        opacity: 0.6;
      }
    `}
      </style>
      <div className="min-h-screen h-auto flex flex-col w-full bg-white">
        {!product ? (
          <NoFoundComponent />
        ) : (
          <div className="content-wrapper px-7 max-w-[1470px] m-auto w-full">
            <main className="grid grid-cols-12 py-5 w-full relative">
              {showChristmasCampaign && (
                <div className="col-span-12 mb-4">
                  <div className="christmas-badge rounded-lg px-3 md:px-6 py-3 md:py-4 text-white shadow-xl">
                    <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap">
                      {/* Left decorative elements */}
                      <div className="hidden md:flex items-center gap-1.5">
                        <span className="gold-star text-lg">✦</span>
                        <span
                          className="gold-star text-sm"
                          style={{ animationDelay: "0.5s" }}
                        >
                          ✦
                        </span>
                        <span className="gold-decoration text-xs">•</span>
                      </div>

                      {/* Wavy line left */}
                      <span className="wavy-line hidden lg:inline text-base">
                        〰
                      </span>

                      {/* Main content */}
                      <div className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl">🎁</span>
                        <h2
                          className="text-lg md:text-2xl font-bold tracking-wide"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          Ideas{" "}
                          <span className="gold-decoration text-base md:text-xl">
                            para
                          </span>{" "}
                          Regalar
                        </h2>
                      </div>

                      {/* Wavy line right */}
                      <span className="wavy-line hidden lg:inline text-base">
                        〰
                      </span>

                      {/* Right decorative elements */}
                      <div className="hidden md:flex items-center gap-1.5">
                        <span className="gold-decoration text-xs">•</span>
                        <span
                          className="gold-star text-sm"
                          style={{ animationDelay: "1s" }}
                        >
                          ✦
                        </span>
                        <span
                          className="gold-star text-lg"
                          style={{ animationDelay: "1.5s" }}
                        >
                          ✦
                        </span>
                      </div>
                    </div>

                    {/* Subtitle with discount */}
                    <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
                      <span className="text-xs md:text-sm font-bold tracking-wide opacity-90">
                        NAVIDAD 2025
                      </span>
                      <span className="text-sm md:text-base font-bold opacity-80">
                        •
                      </span>
                      <span className="discount-badge px-3 py-1 rounded-md text-xs md:text-sm font-extrabold shadow-lg tracking-wide">
                        15% DSCTO.
                      </span>
                      <span className="text-sm md:text-base font-bold opacity-80 hidden md:inline">
                        •
                      </span>
                      <span className="text-[10px] md:text-xs opacity-75 font-medium">
                        Válido hasta el 31 de Diciembre
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <section className="col-span-12 lg:col-span-8 w-full flex justify-center items-center">
                <div
                  className={`w-full ${showChristmasCampaign ? "christmas-container" : ""}`}
                >
                  {/*Product media*/}
                  <MediaCarousel product={product} />
                  <div className="block lg:hidden w-full my-10 mb-10 lg:mb-30">
                    <InformationAndPriceCard
                      product={product}
                      showModal={showModal}
                      setShowModal={setShowModal}
                      condition={condition}
                      showChristmasCampaign={showChristmasCampaign}
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
                  showChristmasCampaign={showChristmasCampaign}
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
