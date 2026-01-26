import type { Metadata } from "next";
import Image from "next/image";
import { Shield, MonitorSmartphone, Headphones, Handshake } from "lucide-react";
import Brands from "@/components/ui/Brands";
import CTASection from "@/components/ui/CTASection";
import Timeline from "@/components/ui/Timeline";
import StatsGrid from "@/components/ui/StatsGrid";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Quiénes Somos - Expertos en Proyectores y Tecnología Educativa | iubizon",
    description:
      "Conoce la historia de iubizon, empresa especialista en proyectores y tecnología educativa en Lima. Equipo con 5 años de experiencia brindando soluciones innovadoras desde 2020.",
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
        "Conoce la historia de iubizon, empresa especialista en proyectores y tecnología educativa en Lima. Equipo con 5 años de experiencia desde 2020.",
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
        "Conoce la historia de iubizon, empresa especialista en proyectores y tecnología educativa en Lima desde 2020.",
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
    foundingDate: "2020",
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

  // Estadísticas de la empresa
  const stats = [
    {
      number: "5+",
      label: "Años de Experiencia",
      icon: "📅",
      description: "En el mercado peruano",
    },
    {
      number: "20+",
      label: "Proyectos Realizados",
      icon: "🎯",
      description: "Para empresas e instituciones",
    },
    {
      number: "12",
      label: "Meses de Garantía",
      icon: "🛡️",
      description: "En equipos nuevos",
    },
    {
      number: "100%",
      label: "Productos Originales",
      icon: "✓",
      description: "Distribuidores autorizados",
    },
  ];

  // Servicios principales
  const services = [
    {
      title: "Venta de Proyectores",
      description: "Nuevos y reacondicionados con garantía extendida",
      icon: "🏬",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Servicio Técnico",
      description: "Reparación y mantenimiento especializado",
      icon: "🔧",
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Instalación",
      description: "Montaje profesional para empresas e instituciones",
      icon: "⚙️",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Asesoría",
      description: "Consultoría en soluciones audiovisuales",
      icon: "💡",
      color: "from-purple-500 to-purple-700",
    },
  ];

  // Timeline de la empresa
  const timelineItems = [
    {
      year: "2020",
      title: "Fundación de Iubizon",
      description:
        "Inicio de operaciones como especialistas en proyectores en Lima, Perú",
    },
    {
      year: "2021",
      title: "Distribuidores Epson",
      description:
        "Nos convertimos en distribuidores autorizados de proyectores Epson",
    },
    {
      year: "2023",
      title: "Expansión de Servicios",
      description:
        "Ampliamos nuestro catálogo y servicio técnico especializado a nivel nacional",
    },
    {
      year: "2026",
      title: "Líderes en el Mercado",
      description:
        "Más de 1000 proyectos completados y presencia consolidada en todo Perú",
    },
  ];

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
                ¿Quiénes Somos?
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
                Somos Iubizon, especialistas en proyectores y tecnología
                educativa en el Perú desde 2020, con un equipo de expertos
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
                    Desde <strong>2020</strong>, Iubizon nació con una visión
                    clara: reunir a los mejores{" "}
                    <strong>especialistas en proyectores</strong> para ofrecer
                    soluciones tecnológicas de alto nivel. Contamos con un
                    equipo que suma más de{" "}
                    <strong>5 años de experiencia en el mercado</strong>,
                    brindando asesoría, implementación y soporte especializado
                    en cada proyecto.
                  </p>
                  <p>
                    Nos hemos consolidado como{" "}
                    <strong>distribuidores de Epson</strong> y otras marcas
                    reconocidas del sector. Actuamos como{" "}
                    <strong>consultores especializados</strong>, entendiendo las
                    necesidades reales de cada cliente para ofrecer soluciones
                    personalizadas, con <strong>garantía</strong> y
                    acompañamiento técnico continuo.
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

            {/* Estadísticas de la Empresa */}
            <StatsGrid stats={stats} className="my-16" />

            {/* Nuestros Servicios */}
            <div className="my-16">
              <h2 className="text-2xl md:text-3xl font-bold text-color-secondary mb-8 text-center">
                Lo Que Hacemos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div
                      className={`bg-gradient-to-br ${service.color} p-6 h-full flex flex-col items-center text-center text-white`}
                    >
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/90">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marcas Asociadas */}
            <Brands className="my-16" />

            {/* Timeline/Hitos */}
            <Timeline items={timelineItems} className="my-16" />

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-color-secondary mb-4">
                ¿Por Qué Elegirnos?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#1a237e]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#1a237e]" />
                </div>
                <h3 className="text-lg font-bold text-color-secondary mb-2">
                  Garantía y Confianza
                </h3>
                <p className="text-gray-600 text-sm">
                  Productos originales, garantía real y soporte técnico
                  confiable.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#009688]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MonitorSmartphone className="w-8 h-8 text-[#009688]" />
                </div>
                <h3 className="text-lg font-bold text-color-secondary mb-2">
                  Tecnología de Punta
                </h3>
                <p className="text-gray-600 text-sm">
                  Soluciones audiovisuales modernas y eficientes para tu
                  organización.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#ff9800]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-[#ff9800]" />
                </div>
                <h3 className="text-lg font-bold text-color-secondary mb-2">
                  Soporte Especializado
                </h3>
                <p className="text-gray-600 text-sm">
                  Atención personalizada y asesoría técnica por expertos.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#374151]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-[#374151]" />
                </div>
                <h3 className="text-lg font-bold text-color-secondary mb-2">
                  Compromiso y Cercanía
                </h3>
                <p className="text-gray-600 text-sm">
                  Nos adaptamos a tus necesidades y acompañamos tu proyecto de
                  inicio a fin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas Section */}
        <div className="max-w-6xl mx-auto px-4 my-16">
          <Brands />
        </div>

        {/* Call to Action */}
        <CTASection
          title="¿Listo para Transformar tu Espacio?"
          description="Descubre cómo nuestros especialistas pueden ayudarte a encontrar la solución perfecta en proyectores y tecnología audiovisual para tu negocio o institución."
          primaryButton={{
            text: "Contáctanos Hoy",
            href: "/contacto",
          }}
          secondaryButton={{
            text: "Nuestros Servicios",
            href: "/servicios/tecnico/persona",
          }}
        />
      </main>
    </>
  );
}
