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
    name: "Nuevo",
    description:
      "Productos completamente nuevos, en su empaque y con garantía.",
  },
  reconditioned: {
    name: "Reacondicionado",
    description:
      "Artículos utilizados solo para demostraciones o exposición en tienda. Presentan leves signos estéticos, pero están en excelente estado, funcionamiento garantizado y con garantía.",
  },
};
