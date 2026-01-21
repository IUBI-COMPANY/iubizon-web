import React from "react";
import type { Metadata } from "next";

import ProductsOrganizationPage from "@/app/productos/organizaciones/ProductsOrganizationPage";

export const metadata: Metadata = {
  title: "Productos para Organizaciones | Iubizon Perú",
  description:
    "Soluciones audiovisuales y tecnológicas para empresas, instituciones y organizaciones. Proyectores, accesorios y más para tu organización en Perú.",
  keywords: [
    "productos para organizaciones",
    "proyectores para empresas",
    "soluciones audiovisuales",
    "accesorios para instituciones",
    "tecnología para organizaciones",
    "iubizon",
    "proyectores Lima",
    "equipos audiovisuales Perú",
  ],
  openGraph: {
    title: "Productos para Organizaciones | Iubizon Perú",
    description:
      "Soluciones audiovisuales y tecnológicas para empresas, instituciones y organizaciones. Proyectores, accesorios y más para tu organización en Perú.",
    url: "https://iubizon.com/productos/organizaciones",
    type: "website",
  },
};

// ==========================
// 🔹 Página principal (Server)
// ==========================
export default async function Page() {
  return <ProductsOrganizationPage />;
}
