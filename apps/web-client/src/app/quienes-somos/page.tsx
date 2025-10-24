import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Award, Heart } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Quiénes Somos - Expertos en Proyectores y Tecnología Educativa | iubizon",
    description:
      "Conoce la historia de iubizon, empresa especialista en proyectores y tecnología educativa en Lima. Equipo con 5 años de experiencia brindando soluciones innovadoras desde 2023.",
    keywords: [
      "quienes somos iubizon",
      "empresa proyectores Lima",
      "historia iubizon",
      "tecnología educativa Perú",
      "empresa proyectores Perú",
      "especialistas Epson Lima",
      "distribuidores proyectores",
      "servicio técnico proyectores",
      "empresa tecnología educativa",
      "proyectores empresariales Lima",
    ],
    alternates: {
      canonical: "https://www.iubizon.com/quienes-somos",
    },
    openGraph: {
      type: "website",
      title:
        "Quiénes Somos - Expertos en Proyectores y Tecnología Educativa | iubizon",
      url: "https://www.iubizon.com/quienes-somos",
      description:
        "Conoce la historia de iubizon, empresa especialista en proyectores y tecnología educativa en Lima. Equipo con 5 años de experiencia desde 2023.",
      images: [
        {
          url: "https://www.iubizon.com/tu-mundo-multimedia.jpg",
          width: 1200,
          height: 630,
          alt: "Equipo iubizon - Expertos en proyectores y tecnología educativa",
        },
      ],
      siteName: "iubizon",
      locale: "es_PE",
    },
    twitter: {
      card: "summary_large_image",
      title: "Quiénes Somos - Expertos en Proyectores | iubizon",
      description:
        "Conoce la historia de iubizon, empresa especialista en proyectores y tecnología educativa en Lima desde 2023.",
      images: [
        {
          url: "https://www.iubizon.com/tu-mundo-multimedia.jpg",
          alt: "Equipo iubizon - Expertos en proyectores y tecnología educativa",
        },
      ],
      site: "@iubizon",
    },
    authors: [{ name: "iubi", url: "https://www.iubi.pe" }],
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
    category: "Empresa",
    applicationName: "iubizon",
    generator: "Next.js",
    metadataBase: new URL("https://www.iubizon.com"),
  };
}

// Structured Data for Organization
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iubizon",
    description:
      "Empresa líder en proyectores y tecnología educativa en Lima, Perú. Especialistas en soluciones Epson para empresas y centros educativos.",
    url: "https://www.iubizon.com/quienes-somos",
    logo: "https://www.iubizon.com/images/logo.png",
    foundingDate: "2023",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pje. los Jazmines 181",
      addressLocality: "Chorrillos",
      addressRegion: "Lima",
      postalCode: "15067",
      addressCountry: "PE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+51-972-300-301",
      contactType: "customer service",
      areaServed: "PE",
      availableLanguage: "Spanish",
    },
    sameAs: [
      "https://www.facebook.com/iubizon",
      "https://www.instagram.com/iubizon",
      "https://www.tiktok.com/@iubizon",
    ],
    areaServed: {
      "@type": "Country",
      name: "Peru",
    },
    knowsAbout: [
      "Proyectores",
      "Tecnología Educativa",
      "Equipos Audiovisuales",
      "Servicio Técnico",
      "Epson",
    ],
  };
}

export default function AboutUsPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/education-projectors.jpg"
              alt="Oficinas de Iubizon - Especialistas en proyectores"
              fill
              sizes="100vw"
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-color-secondary/70" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Quiénes Somos
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
                Somos Iubizon, especialistas en proyectores y tecnología
                educativa en el Perú desde 2023, con un equipo de expertos
                comprometidos con brindar soluciones innovadoras.
              </p>
              <div className="flex justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo Iubizon"
                  width={120}
                  height={60}
                  className="brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Our Story & Values Combined Section */}
        <section
          className="py-20 bg-white"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-color-secondary mb-6"
                  itemProp="name"
                >
                  Nuestra Historia
                </h2>
                <div
                  className="space-y-4 text-gray-700 text-lg leading-relaxed"
                  itemProp="description"
                >
                  <p>
                    Desde <strong>2023</strong>, Iubizon nació con una visión
                    clara: reunir a los mejores{" "}
                    <strong>especialistas en proyectores</strong> para ofrecer
                    soluciones tecnológicas de vanguardia. Aunque somos una
                    empresa joven con <strong>1 año en el mercado</strong>,
                    nuestros especialistas cuentan con{" "}
                    <strong>5 años de experiencia individual</strong> en el
                    sector.
                  </p>
                  <p>
                    Nos hemos establecido rápidamente como{" "}
                    <strong>distribuidores de Epson</strong> y otras marcas
                    reconocidas. Somos{" "}
                    <strong>consultores especializados</strong> que entienden
                    las necesidades únicas de cada cliente y ofrecemos
                    soluciones personalizadas con{" "}
                    <strong>garantía extendida de hasta 6 meses</strong>.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/iubiz-with-land.png"
                  alt="Historia de Iubizon - Empresa de proyectores en Lima"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-color-secondary mb-4">
                ¿Por Qué Elegirnos?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-color-secondary mb-2">
                  Distribuidor Epson
                </h3>
                <p className="text-gray-600 text-sm">
                  Productos originales y soporte técnico especializado
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-color-secondary mb-2">
                  5 Años de Experiencia
                </h3>
                <p className="text-gray-600 text-sm">
                  Equipo especializado en proyectores y tecnología audiovisual
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-color-secondary mb-2">
                  Garantía Extendida
                </h3>
                <p className="text-gray-600 text-sm">
                  Hasta 3 meses en reparación y mantenimiento
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-color-secondary mb-2">
                  Servicio Personalizado
                </h3>
                <p className="text-gray-600 text-sm">
                  Atención adaptada a cada necesidad y presupuesto
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/education-projectors.jpg"
              alt="Proyectores y tecnología educativa - Iubizon"
              fill
              sizes="100vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/85 to-gray-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Espacio?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Descubre cómo nuestros especialistas pueden ayudarte a encontrar
              la solución perfecta en proyectores y tecnología audiovisual para
              tu negocio o institución.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-color-primary hover:bg-color-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-block shadow-lg"
              >
                Contáctanos Hoy
              </Link>
              <Link
                href="/servicios/tecnico"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
