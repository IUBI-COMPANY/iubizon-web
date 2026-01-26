"use client";

interface StatCard {
  number: string;
  label: string;
  description?: string;
  icon?: string;
}

interface StatsGridProps {
  title?: string;
  description?: string;
  stats: StatCard[];
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Componente reutilizable para mostrar estadísticas/métricas
 * Grid de cards con números destacados
 */
export default function StatsGrid({
  title = "Nuestros Números Hablan por Nosotros",
  description,
  stats,
  columns = 4,
  className = "",
}: StatsGridProps) {
  const gridClass =
    columns === 2
      ? "lg:grid-cols-2"
      : columns === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-4";

  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridClass} gap-6`}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {stat.icon && <div className="text-5xl mb-3">{stat.icon}</div>}
            <div className="text-4xl font-bold text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-lg font-semibold text-secondary mb-1">
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-sm text-gray-600">{stat.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
