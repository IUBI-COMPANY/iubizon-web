import React from "react";
import type { Metadata } from "next";

import ProductsOrganizationPage from "@/app/productos/organizaciones/ProductsOrganizationPage";

export const metadata: Metadata = {
  title: "Productos para Organizaciones | Iubizon Perú",
  description:
    "Soluciones en proyectores y equipos multimedia para empresas, instituciones y organizaciones. Proyectores, accesorios y más para tu organización en Perú.",
  keywords: [
    "productos para organizaciones",
    "proyectores para empresas",
    "soluciones en proyectores",
    "accesorios para instituciones",
    "tecnología para organizaciones",
    "equipos multimedia empresas",
    "proyectores empresariales",
    "iubizon",
    "proyectores Lima",
    "equipos presentación Perú",
  ],
  openGraph: {
    title: "Productos para Organizaciones | Iubizon Perú",
    description:
      "Soluciones en proyectores y equipos multimedia para empresas, instituciones y organizaciones. Proyectores, accesorios y más para tu organización en Perú.",
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
