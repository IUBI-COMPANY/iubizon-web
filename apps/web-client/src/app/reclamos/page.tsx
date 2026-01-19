import type { Metadata } from "next";
import ReclamoClientPage from "./ReclamoClientPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Libro de Reclamaciones - Iubizon",
    description:
      "Presenta tu reclamo formal aquí. Completa el formulario con información verídica para que podamos procesarlo.",
    alternates: {
      canonical: "https://www.iubizon.com/reclamos",
    },
    openGraph: {
      type: "website",
      title: "Libro de Reclamaciones - Iubizon",
      url: "https://www.iubizon.com/reclamos",
    },
    metadataBase: new URL("https://www.iubizon.com"),
  };
}

export default async function Page() {
  return <ReclamoClientPage />;
}
