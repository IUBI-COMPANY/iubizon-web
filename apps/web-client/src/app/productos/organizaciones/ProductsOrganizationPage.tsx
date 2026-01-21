"use client";

import React from "react";
import { products } from "@/data-list/products";
import { ContentWrapper } from "@/components/ui/layout/ContentWrapper";
import { ProductCard } from "@/components/ui/ProductCard";

export default function ProductsOrganizationPage() {
  const organizationProducts = products.filter(
    (p) =>
      p.category?.includes("Empresas") ||
      p.category?.includes("Organizaciones") ||
      p.category?.includes("Instituciones"),
  );

  return (
    <ContentWrapper>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Productos para Organizaciones
        </h1>
        <p className="mb-8 text-center text-gray-700 max-w-2xl mx-auto">
          Soluciones audiovisuales y tecnológicas para empresas, instituciones y
          organizaciones. Solicita una cotización personalizada para tu
          proyecto.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {organizationProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No hay productos para organizaciones en este momento.
            </div>
          ) : (
            organizationProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </ContentWrapper>
  );
}
