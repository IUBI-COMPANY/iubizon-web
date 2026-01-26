"use client";

import { Phone, Shield, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Contacto",
    description:
      "Completa el formulario o llámanos. Respuesta garantizada en menos de 24 horas.",
    icon: Phone,
    indicator: "✓ Rápido y confiable",
    delay: 0,
  },
  {
    title: "Diagnóstico",
    description:
      "Revisión técnica completa de tu proyector por especialistas certificados.",
    icon: Shield,
    indicator: "✓ Análisis profesional",
    delay: 0.1,
  },
  {
    title: "Reparación",
    description:
      "Reparación con repuestos originales certificados y 6 meses de garantía incluida.",
    icon: Wrench,
    indicator: "✓ Garantizado",
    delay: 0.2,
  },
  {
    title: "Entrega",
    description:
      "Recibe tu proyector funcionando perfectamente a domicilio en Lima con garantía completa.",
    icon: CheckCircle,
    indicator: "✓ A domicilio",
    delay: 0.3,
  },
];

export default function CardSteps() {
  return (
    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="group opacity-0 animate-fade-in-up"
          style={{
            animationDelay: `${step.delay}s`,
            animationFillMode: "forwards",
          }}
          itemScope
          itemType="https://schema.org/HowToStep"
          aria-label={`Paso ${index + 1}: ${step.title}`}
        >
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden border-b-4 border-orange-500 min-h-[340px]">
            <div className="p-8 flex flex-col items-start text-left relative h-full">
              {/* Decoración de fondo al hacer hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Icono */}
              <div
                className="relative z-10 bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md transition-transform duration-300 hover:scale-110"
                style={{
                  transform: index % 2 === 0 ? "rotate(0deg)" : "rotate(0deg)",
                }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </div>

              <h3
                className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-orange-600 transition-colors"
                itemProp="name"
              >
                {step.title}
              </h3>

              <p
                className="text-gray-700 text-base leading-relaxed relative z-10 flex-grow"
                itemProp="text"
              >
                {step.description}
              </p>

              {/* Indicador inferior */}
              <div
                className="mt-4 pt-4 border-t border-orange-100 w-full relative z-10 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "0.2s",
                  animationFillMode: "forwards",
                }}
              >
                <span className="text-xs font-semibold text-orange-600 inline-flex items-center gap-2">
                  {step.indicator}
                </span>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
