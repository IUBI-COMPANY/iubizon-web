import type { Metadata } from "next";
import { NoFoundComponent } from "@/components/ui/NoFoundComponent";
import ProductClientPage from "./ProductClientPage";
import { products, Product } from "@/data-list/products";

type Props = {
  params: { productId: string };
};

// ==========================
// 🔹 Dynamic Metada
// ==========================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: Product | undefined = products.find(
    (product) => product.id === params.productId,
  );

  if (!product) {
    return {
      title: "Producto no encontrado | iubizon",
      description: "Este producto no existe en nuestro catálogo.",
    };
  }

  return {
    title: `${product.name ?? "Producto"} | ${product.lumens ?? ""} | iubizon`,
    description: product.note ?? "Detalles del producto en iubizon",
    openGraph: {
      title: `${product.name ?? "Producto"} ${product.lumens ?? ""}`,
      url: `https://www.iubizon.com/${product.id ?? ""}`,
      description: product.note ?? "Detalles del producto en iubizon",
      images: product.media?.length
        ? product.media.map((media_) => media_.src)
        : ["/images/product-not-found.png"],
    },
  };
}

// ==========================
// 🔹 Página principal (Server)
// ==========================
export default function Page({ params }: Props) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) return <NoFoundComponent />;

  return <ProductClientPage product={product} />;
}
