"use client";

import React from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import Image from "next/image";
import { productsCondition } from "@/data-list/productsCondition";
import { products } from "@/data-list/products";
import { Filter, Package, ShoppingCart, Star } from "lucide-react";

export default function ProductsClientPage() {
  const productsByCondition = {
    new: {
      ...productsCondition.new,
      products: products.filter((product) => product.condition === "new"),
    },
    reconditioned: {
      ...productsCondition.reconditioned,
      products: products.filter(
        (product) => product.condition === "reconditioned",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/education-projectors.jpg"
            alt="Proyectores Iubizon"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-color-secondary/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nuestros Productos
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Descubre nuestra amplia gama de proyectores Epson nuevos y
              reacondicionados con garantía y soporte técnico especializado
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Package className="w-6 h-6 text-color-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {stats.total}
                </div>
                <div className="text-sm text-gray-200">Productos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stats.new}</div>
                <div className="text-sm text-gray-200">Nuevos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <ShoppingCart className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {stats.reconditioned}
                </div>
                <div className="text-sm text-gray-200">Reacondicionados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Filter className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {stats.brands}
                </div>
                <div className="text-sm text-gray-200">Marcas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* New Products */}
        {productsByCondition.new.products.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-color-secondary flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-500" />
                  {productsByCondition.new.name}
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  {productsByCondition.new.description}
                </p>
                <p className="text-color-primary text-sm mt-2 font-medium">
                  Llévate tu proyector completamente nuevo y con garantía.
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-color-primary">
                  {productsByCondition.new.products.length}
                </div>
                <div className="text-sm text-gray-500">
                  productos disponibles
                </div>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {productsByCondition.new.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Reconditioned Products */}
        {productsByCondition.reconditioned.products.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-color-secondary flex items-center gap-3">
                  <ShoppingCart className="w-8 h-8 text-green-500" />
                  {productsByCondition.reconditioned.name}
                </h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  {productsByCondition.reconditioned.description}
                </p>
                <p className="text-color-primary text-sm mt-2 font-medium">
                  Equipos a precios más accesibles, totalmente funcionales y con
                  garantía
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-color-primary">
                  {productsByCondition.reconditioned.products.length}
                </div>
                <div className="text-sm text-gray-500">
                  productos disponibles
                </div>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {productsByCondition.reconditioned.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
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
              href="https://wa.me/51972300301?text=Hola%20iubizon,%20quiero%20el%20lote%20completo"
              target="_blank"
              className="mt-4 inline-flex rounded-full px-5 py-3 text-sm font-semibold shadow bg-primary"
            >
              Reservar ahora
            </a>
          </section>
        )}

        {/* Guarantee Information */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
          <h3 className="text-lg font-semibold text-color-secondary mb-3">
            🛡️ Garantía y Calidad Asegurada
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Todos los equipos son funcionales
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Prueba de funcionamiento en local
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              Garantía incluida
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Soporte técnico especializado
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
