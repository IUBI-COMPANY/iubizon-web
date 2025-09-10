import { ProductCondition } from "@/data-list/products";

interface DetailProductCondition {
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
      "Productos completamente nuevos, en su empaque y con garantía.",
  },
  exhibition: {
    name: "De exhibición",
    description:
      "Artículos utilizados solo para demostraciones o exposición en tienda. Presentan leves signos estéticos pero están en excelente estado y funcionamiento garantizado.",
  },
  used: {
    name: "Segunda mano",
    description:
      "Productos con uso previo, revisados y probados para asegurar su correcto funcionamiento. Pueden mostrar algunas manchas y detalles estéticos menores.",
  },
};
