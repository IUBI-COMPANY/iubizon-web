"use client";

import Image from "next/image";
import brandsData from "@/data-list/brands.json";

interface BrandsProps {
  title?: string;
  description?: string;
  columns?: 3 | 5;
  showTitle?: boolean;
  className?: string;
}

/**
 * Componente reutilizable para mostrar logos de marcas
 * Filtra y muestra las marcas con las que trabajamos
 */
export default function Brands({
  title = "Marcas con las que Trabajamos",
  description,
  columns = 5,
  showTitle = true,
  className = "",
}: BrandsProps) {
  const gridClass = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-5";

  return (
    <div className={className}>
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      )}

      <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
        <div
          className={`grid grid-cols-2 ${gridClass} gap-8 items-center justify-items-center`}
        >
          {brandsData.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 w-full"
            >
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={120}
                height={60}
                className="object-contain max-h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
