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
  const { productId } = params;
  const product: Product | undefined = products.find(
    (product) => product.id === productId,
  );

  if (!product) {
    return {
      title: "Producto no encontrado | iubizon",
      description: "Este producto no existe en nuestro catálogo.",
      keywords: ["producto no encontrado", "iubizon", "catálogo"],
      alternates: {
        canonical: `https://www.iubizon.com/${productId}`,
      },
      openGraph: {
        type: "website",
        title: "Producto no encontrado | iubizon",
        url: `https://www.iubizon.com/${productId}`,
        description: "Este producto no existe en nuestro catálogo.",
        images: [
          {
            url: "/images/product-not-found.png",
            width: 1200,
            height: 630,
            alt: "Producto no encontrado en iubizon",
          },
        ],
        siteName: "iubizon",
        locale: "es_PE",
      },
      twitter: {
        card: "summary_large_image",
        title: "Producto no encontrado | iubizon",
        description: "Este producto no existe en nuestro catálogo.",
        images: [
          {
            url: "/images/product-not-found.png",
            alt: "Producto no encontrado en iubizon",
          },
        ],
        site: "@iubizon",
      },
      authors: [{ name: "iubizon", url: "https://www.iubizon.com" }],
      publisher: "iubizon",
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      },
      category: "Productos",
      applicationName: "iubizon",
      generator: "Next.js",
      metadataBase: new URL("https://www.iubizon.com"),
    };
  }

  const title = `${product.name ?? "Producto"}${product.lumens ? ` | ${product.lumens}` : ""} | iubizon`;
  const description =
    product.note ??
    `Compra ${product.name ?? "producto"} original en Perú. Cotiza y recibe asesoría personalizada.`;

  const keywordsArray: string[] = [];
  if (product.name) keywordsArray.push(product.name);
  if (product.brand) keywordsArray.push(product.brand);
  if (product.type) keywordsArray.push(product.type);
  if (product.lumens) keywordsArray.push(product.lumens);
  keywordsArray.push("proyector", "accesorio", "repuesto", "iubizon", "Perú");

  const imageList = product.media?.length
    ? product.media.map((media_) => ({
        url: media_.src,
        width: 1200,
        height: 630,
        alt: `${product.name ?? "Producto"} en iubizon`,
      }))
    : [
        {
          url: "/images/product-not-found.png",
          width: 1200,
          height: 630,
          alt: `${product.name ?? "Producto"} en iubizon`,
        },
      ];

  return {
    title,
    description,
    keywords: keywordsArray,
    alternates: {
      canonical: `https://www.iubizon.com/${product.id ?? ""}`,
    },
    openGraph: {
      type: "website",
      title,
      url: `https://www.iubizon.com/${product.id ?? ""}`,
      description,
      images: imageList,
      siteName: "iubizon",
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageList,
      site: "@iubizon",
    },
    authors: [{ name: "iubizon", url: "https://www.iubizon.com" }],
    publisher: "iubizon",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    category: "Productos",
    applicationName: "iubizon",
    generator: "Next.js",
    metadataBase: new URL("https://www.iubizon.com"),
  };
}

// ==========================
// 🔹 Página principal (Server)
// ==========================
export default async function Page({ params }: Props) {
  const { productId } = params;
  const product = products.find((p) => p.id === productId);
  if (!product) return <NoFoundComponent />;
  return <ProductClientPage product={product} />;
}
