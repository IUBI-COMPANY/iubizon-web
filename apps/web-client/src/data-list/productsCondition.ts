import { ProductCondition } from "@/data-list/products";

export interface DetailProductCondition {
  name: string;
  description: string;
}

export const productsCondition: Record<
  ProductCondition,
  DetailProductCondition
> = {
  new: {
    name: "Nuevos",
    description:
      "Equipos nuevos de fábrica con garantía completa. Ofrecen el máximo rendimiento, tecnología de última generación y durabilidad garantizada. Ideales para quienes buscan la mejor calidad y tranquilidad de una inversión a largo plazo.",
  },
  reconditioned: {
    name: "Reacondicionados",
    description:
      "Equipos probados y verificados en excelente estado de funcionamiento. Pueden presentar ligeros detalles estéticos, pero ofrecen un rendimiento excepcional a un precio mucho más accesible. Listos para usar con funcionamiento garantizado.",
  },
};
