"use client";

import { motion } from "framer-motion";
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
      "Reparación con repuestos originales certificados y 3 meses de garantía incluida.",
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
        <motion.article
          key={step.title}
          className="group"
          itemScope
          itemType="https://schema.org/HowToStep"
          aria-label={`Paso ${index + 1}: ${step.title}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: step.delay }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden border-b-4 border-orange-500 min-h-[340px]">
            <div className="p-8 flex flex-col items-start text-left relative h-full">
              {/* Decoración de fondo al hacer hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Icono */}
              <motion.div
                className="relative z-10 bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md"
                whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <step.icon className="w-8 h-8 text-white" />
              </motion.div>

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
              <motion.div
                className="mt-4 pt-4 border-t border-orange-100 w-full relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-semibold text-orange-600 inline-flex items-center gap-2">
                  {step.indicator}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
