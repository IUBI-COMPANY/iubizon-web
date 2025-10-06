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
      "Equipos nuevos y con garantía. Ofrecen la mejor calidad de proyección, alto brillo y tecnología de última generación, ideales para aulas, oficinas y presentaciones profesionales. La mejor inversión en rendimiento y durabilidad.",
  },
  reconditioned: {
    name: "Reacondicionados",
    description:
      "Equipos probados y en excelente estado de funcionamiento. Pueden presentar ligeros detalles estéticos, pero ofrecen gran calidad de proyección a un precio mucho más accesible que uno nuevo. Listos para usar en aulas, oficinas o presentaciones, funcionamiento garantizado y con garantía.",
  },
};
