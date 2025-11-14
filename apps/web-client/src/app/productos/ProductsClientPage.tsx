"use client";

import React from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import Image from "next/image";
import { productsCondition } from "@/data-list/productsCondition";
import { products } from "@/data-list/products";
import { Filter, Package, ShoppingCart, Star } from "lucide-react";
import { CiberWowCountDownComponent } from "@/components/ui/CiberWowCountDownComponent";

export default function ProductsClientPage() {
  // Check if Christmas campaign is active (Nov 1 - Dec 31, 2025)
  const isChristmasCampaignActive = () => {
    const now = new Date();
    const campaignStart = new Date(2025, 10, 1); // Nov 1, 2025 (month is 0-indexed)
    const campaignEnd = new Date(2025, 12, 31, 23, 59, 59); // Dec 31, 2025 end of day
    return now >= campaignStart && now <= campaignEnd;
  };

  const christmasCampaignActive = isChristmasCampaignActive();

  const sortProductsBySpecial = (productsList: typeof products) => {
    return [...productsList].sort((a, b) => {
      if (a.campaign === b.campaign) return 0;
      return a.campaign ? -1 : 1;
    });
  };

  const productsByCondition = {
    new: {
      ...productsCondition.new,
      products: sortProductsBySpecial(
        products.filter((product) => product.condition === "new"),
      ),
    },
    reconditioned: {
      ...productsCondition.reconditioned,
      products: sortProductsBySpecial(
        products.filter((product) => product.condition === "reconditioned"),
      ),
    },
  };

  const stats = {
    total: products.length,
    new: products.filter((p) => p.condition === "new").length,
    reconditioned: products.filter((p) => p.condition === "reconditioned")
      .length,
    totalStock: products.reduce((acc, p) => acc + p.stock, 0),
    brands: [...new Set(products.map((p) => p.brand).filter(Boolean))].length,
  };

  const quantityProjectors = products
    .filter((product) => product.type === "Proyector")
    .reduce((acc, product) => acc + product.stock, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section - Temática Navideña */}
      <section className="relative bg-gradient-to-br from-[#0a0f1a] via-[#0d1520] to-[#050a12] overflow-hidden">
        {/* Imagen de fondo con overlay oscuro */}
        <div className="absolute inset-0">
          <Image
            src="/images/education-projectors.jpg"
            alt="Catálogo de proyectores Epson nuevos y reacondicionados en Lima - iubizon"
            fill
            sizes="100vw"
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a]/98 via-[#0d1520]/96 to-[#050a12]/98" />
        </div>

        {/* Efectos de luz navideños */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Resplandor verde navideño */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0f3d1f]/10 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#14532d]/10 rounded-full blur-[140px] animate-pulse delay-700"></div>

          {/* Copos de nieve decorativos */}
          <div className="absolute top-[5%] left-[10%] text-white/20 text-2xl animate-[float_3s_ease-in-out_infinite]">
            ❄️
          </div>
          <div className="absolute top-[15%] right-[15%] text-white/15 text-3xl animate-[float_4s_ease-in-out_infinite_0.5s]">
            ❄️
          </div>
          <div className="absolute top-[8%] left-[60%] text-white/20 text-xl animate-[float_3.5s_ease-in-out_infinite_1s]">
            ✨
          </div>
          <div className="absolute top-[20%] right-[40%] text-white/15 text-2xl animate-[float_4s_ease-in-out_infinite_1.5s]">
            ⭐
          </div>
          <div className="absolute top-[12%] left-[80%] text-white/20 text-xl animate-[float_3s_ease-in-out_infinite_0.8s]">
            ❄️
          </div>

          {/* Luces decorativas en el borde superior */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0f3d1f]/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            {/* Badge de Navidad */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d1f] via-[#14532d] to-[#0f3d1f] blur-xl opacity-40 animate-pulse"></div>
                <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#14532d] via-[#0f3d1f] to-[#14532d] backdrop-blur-sm px-5 py-2 rounded-full shadow-2xl border-2 border-[#d90429]/15">
                  <span className="text-lg">🎄</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Ofertas Navideñas 2025
                  </span>
                  <span className="text-lg">🎁</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              🎄 Nuestros Productos Navideños
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              Descubre nuestra amplia gama de proyectores con ofertas especiales
              de Navidad.
              <span className="block mt-2 text-emerald-300 font-semibold">
                Garantía extendida y soporte técnico especializado 🎁
              </span>
            </p>

            {/* Stats Cards con temática navideña */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Package className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white drop-shadow-lg">
                  {stats.total}
                </div>
                <div className="text-sm text-gray-200">Productos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-yellow-400/30 transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2 animate-pulse" />
                <div className="text-2xl font-bold text-white drop-shadow-lg">
                  {stats.new}
                </div>
                <div className="text-sm text-gray-200">Nuevos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-green-400/30 transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <ShoppingCart className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white drop-shadow-lg">
                  {stats.reconditioned}
                </div>
                <div className="text-sm text-gray-200">Reacondicionados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-white/20 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:bg-white/15">
                <Filter className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white drop-shadow-lg">
                  {stats.brands}
                </div>
                <div className="text-sm text-gray-200">Marcas</div>
              </div>
            </div>

            {/* Mensaje especial de Navidad */}
            <div className="mt-8 inline-block">
              <div className="bg-gradient-to-r from-[#14532d] to-[#0f3d1f] backdrop-blur-md rounded-full px-6 py-3 border-2 border-[#d90429]/15 shadow-lg">
                <p className="text-white font-semibold text-sm flex items-center gap-2">
                  <span className="text-lg">🎅</span>
                  Envío gratis en Lima • Garantía extendida • Regalos especiales
                  <span className="text-lg">🎁</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Borde decorativo inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0f3d1f]/30 to-transparent"></div>
      </section>

      {/* Cyber WOW Banner */}
      <div className="m-5">
        <CiberWowCountDownComponent />
      </div>

      {/* Products Section */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* New Products - Temática Navideña */}
        {productsByCondition.new.products.length > 0 && (
          <section className="mb-16 relative">
            {/* Decoración navideña sutil */}
            <div className="absolute top-0 right-0 text-6xl opacity-5 pointer-events-none">
              🎄
            </div>

            <div className="bg-gradient-to-br from-white to-green-50/30 rounded-2xl p-8 shadow-sm border-2 border-emerald-100/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Star className="w-8 h-8 text-yellow-500 animate-pulse" />
                        <div className="absolute inset-0 w-8 h-8 text-yellow-500 blur-sm animate-pulse"></div>
                      </div>
                      <h2 className="text-3xl font-bold text-color-secondary">
                        {productsByCondition.new.name}
                      </h2>
                      <span className="text-2xl">🎁</span>
                    </div>
                    {christmasCampaignActive && (
                      <div className="flex-shrink-0 text-right">
                        <div className="flex flex-col items-end gap-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-lg">🎄</span>
                            <span className="text-[0.65rem] font-semibold text-secondary/50 uppercase tracking-wide">
                              Oferta Navidad
                            </span>
                          </div>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-3xl font-black text-[#d90429] leading-none">
                              20
                            </span>
                            <span className="text-xl font-bold text-[#d90429]/70">
                              %
                            </span>
                          </div>
                          <span className="text-[0.65rem] font-medium text-secondary/40 uppercase tracking-wide">
                            Descuento
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2 max-w-2xl">
                    {productsByCondition.new.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-[#14532d] to-[#0f3d1f] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    <span>🎄</span>
                    <span>
                      Llévate tu proyector completamente nuevo con garantía
                      navideña extendida
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {productsByCondition.new.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Reconditioned Products - Temática Navideña */}
        {productsByCondition.reconditioned.products.length > 0 && (
          <section className="mb-16 relative">
            {/* Decoración navideña sutil */}
            <div className="absolute top-0 left-0 text-6xl opacity-5 pointer-events-none">
              ⭐
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-sm border-2 border-blue-100/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <ShoppingCart className="w-8 h-8 text-green-500" />
                        <div className="absolute inset-0 w-8 h-8 text-green-500 blur-sm"></div>
                      </div>
                      <h2 className="text-3xl font-bold text-color-secondary">
                        {productsByCondition.reconditioned.name}
                      </h2>
                      <span className="text-2xl">♻️</span>
                    </div>
                    {christmasCampaignActive && (
                      <div className="flex-shrink-0 text-right">
                        <div className="flex flex-col items-end gap-0.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-lg">🎁</span>
                            <span className="text-[0.65rem] font-semibold text-secondary/50 uppercase tracking-wide">
                              Oferta Navidad
                            </span>
                          </div>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-3xl font-black text-[#14532d] leading-none">
                              42
                            </span>
                            <span className="text-xl font-bold text-[#14532d]/70">
                              %
                            </span>
                          </div>
                          <span className="text-[0.65rem] font-medium text-secondary/40 uppercase tracking-wide">
                            Descuento
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 mt-2 max-w-2xl">
                    {productsByCondition.reconditioned.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    <span>❄️</span>
                    <span>
                      Equipos a precios navideños, totalmente funcionales y con
                      garantía
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {productsByCondition.reconditioned.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {quantityProjectors >= 3 && (
          <section className="mt-20 lg:mt-50 rounded-2xl p-6 text-center shadow-sm text-white  bg-gradient-to-br from-secondary/90 via-secondary to-secondary/90 relative">
            <Image
              src="/images/pet-corriendo-izquierda.png"
              alt="pet iubizon"
              width={500}
              height={500}
              className="relative lg:absolute top-[1em] lg:top-[-8em] right-[1em] lg:right-[4em] w-[23em] mx-auto"
            />
            <h3 className="text-xl font-bold">
              🔥 Oferta por compra por lotes
            </h3>
            <p className="mt-1 opaproducty-90">
              Entre proyectores mixtos o del mismo modelo
            </p>
            <p className="mt-2 text-2xl font-extrabold text-primary">
              A UN PRECIO ESPECIAL
            </p>
            <p className="text-sm opacity-95">
              Entrega inmediata • Prueba de funcionamiento • Con garantía
            </p>
            <a
              href="https://wa.me/51972300301?text=Hola%20iubizon,%20quiero%20un%20lote%20de%20"
              target="_blank"
              className="mt-4 inline-flex rounded-full px-10 py-3 text-sm font-semibold shadow bg-primary"
            >
              Reservar ahora
            </a>
          </section>
        )}

        {/* Guarantee Information - Temática Navideña */}
        <div className="mt-12 relative overflow-hidden">
          {/* Fondo decorativo navideño */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50 rounded-2xl"></div>
          <div className="absolute top-0 right-0 text-8xl opacity-5">🎄</div>
          <div className="absolute bottom-0 left-0 text-6xl opacity-5">⭐</div>

          <div className="relative p-8 rounded-2xl text-center border-2 border-emerald-200/50 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl">🎁</span>
              <h3 className="text-2xl font-bold text-color-secondary">
                Garantía y Calidad Asegurada esta Navidad
              </h3>
              <span className="text-2xl">🎄</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Todos nuestros productos vienen con garantía extendida navideña y
              soporte técnico especializado
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white rounded-xl px-5 py-3 shadow-md border-2 border-green-200/50 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Todos los equipos son funcionales</span>
                </div>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-md border-2 border-blue-200/50 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Prueba de funcionamiento en local</span>
                </div>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-md border-2 border-yellow-200/50 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 text-yellow-600 font-semibold">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span>Garantía incluida</span>
                </div>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-md border-2 border-purple-200/50 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Soporte técnico especializado</span>
                </div>
              </div>
            </div>

            {/* Mensaje especial de Navidad */}
            <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#14532d] to-[#0f3d1f] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              <span>🎅</span>
              <span>Compra ahora y recibe tu regalo navideño especial</span>
              <span>🎁</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
