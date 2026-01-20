
import React from 'react';
import { ContentWrapper } from "@/components/ui/layout/ContentWrapper";
import { products } from "@/data-list/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata = {
    title: "Productos para Organizaciones | Iubizon Perú",
    description: "Soluciones audiovisuales y tecnológicas para empresas, instituciones y organizaciones. Proyectores, accesorios y más para tu organización en Perú.",
    keywords: [
        "productos para organizaciones",
        "proyectores para empresas",
        "soluciones audiovisuales",
        "accesorios para instituciones",
        "tecnología para organizaciones",
        "iubizon",
        "proyectores Lima",
        "equipos audiovisuales Perú"
    ],
    openGraph: {
        title: "Productos para Organizaciones | Iubizon Perú",
        description: "Soluciones audiovisuales y tecnológicas para empresas, instituciones y organizaciones. Proyectores, accesorios y más para tu organización en Perú.",
        url: "https://iubizon.com/productos/organizaciones",
        type: "website"
    }
};

function Page() {
    // Puedes filtrar productos por categoría, tipo, o mostrar todos los productos
    // Aquí un ejemplo mostrando todos los productos, puedes ajustar el filtro según tu lógica de negocio
    const organizationProducts = products.filter(
        (p) => p.category?.includes("Empresas") || p.category?.includes("Organizaciones") || p.category?.includes("Instituciones") || p.type === "Proyector" || p.type === "Accesorio"
    );

    return (
        <ContentWrapper>
            <div className="py-8">
                <h1 className="text-3xl font-bold mb-4 text-center">Productos para Organizaciones</h1>
                <p className="mb-8 text-center text-gray-700 max-w-2xl mx-auto">
                    Soluciones audiovisuales y tecnológicas para empresas, instituciones y organizaciones. Solicita una cotización personalizada para tu proyecto.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {organizationProducts.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500">No hay productos para organizaciones en este momento.</div>
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

export default Page;