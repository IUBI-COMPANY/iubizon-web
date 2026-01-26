"use client";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  title?: string;
  description?: string;
  items: TimelineItem[];
  className?: string;
}

/**
 * Componente reutilizable para Timeline/Hitos de la empresa
 * Muestra eventos cronológicos con badges de años
 */
export default function Timeline({
  title = "Nuestro Crecimiento",
  description,
  items,
  className = "",
}: TimelineProps) {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 text-center">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.year}
                </span>
              </div>
              <div className="flex-1 bg-white border-l-4 border-primary pl-6 py-4 rounded-r-lg shadow-md">
                <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
