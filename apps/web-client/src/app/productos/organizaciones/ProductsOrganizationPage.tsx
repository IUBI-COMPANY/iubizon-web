"use client";

import { CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { OrganizationsProductRequestForm } from "@/components/ui/OrganizationsProductRequestForm";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsOrganizationPage() {
  return (
    <main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "iubizon",
              image: "https://www.iubizon.com/images/logo.png",
              "@id": "https://www.iubizon.com/productos/organizaciones",
              url: "https://www.iubizon.com/productos/organizaciones",
              telephone: "+51 972 300 301",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pje. los Jazmines 181",
                addressLocality: "Chorrillos",
                addressRegion: "Lima",
                addressCountry: "PE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.186,
                longitude: -77.014,
              },
              openingHours: "Mo-Fr 09:00-18:00, Sa 09:00-13:00",
              sameAs: [
                "https://www.facebook.com/iubizon/",
                "https://www.instagram.com/iubizon",
                "https://www.tiktok.com/@iubizon",
              ],
              description:
                "Solicita proyectores y equipos audiovisuales para tu empresa, institución u organización en Lima, Perú.",
            }),
          }}
        />
      </Head>
      <header
        className="relative h-[33rem] bg-gradient-to-br from-secondary/10 via-secondary to-secondary/0 overflow-hidden"
        role="banner"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/education-projectors.jpg"
            alt="Productos para organizaciones, empresas e instituciones"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>
      </header>
      <section
        className="relative -mt-[33rem] sm:-mt-[32rem] z-20 px-4"
        id="contact-form"
        aria-label="Formulario de solicitud de productos para organizaciones"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative z-10 h-auto px-[2em] pt-[3em] 2xl:pt-[5em] flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl mx-auto mb-8">
              <h1 className="text-3xl md:text-[2.5em] font-bold text-white mb-4 leading-tight">
                Solicita Productos para tu Organización
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Cotiza proyectores, accesorios y equipos audiovisuales para tu
                empresa, institución u organización. Soluciones personalizadas
                según tus necesidades.
              </p>
            </div>
          </div>
          <OrganizationsProductRequestForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Atención Personalizada
              </h3>
              <p className="text-gray-600">
                Asesoría especializada para encontrar la solución perfecta para
                tu organización
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Mejores Marcas</h3>
              <p className="text-gray-600">
                Trabajamos con Epson, BenQ, Optoma, Sony y más marcas líderes
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Entrega y Soporte</h3>
              <p className="text-gray-600">
                Opciones de entrega flexibles y soporte técnico post-venta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            <FAQItem
              question="¿Qué tipos de organizaciones pueden solicitar productos?"
              answer="Atendemos a todo tipo de organizaciones: empresas, colegios, universidades, instituciones públicas, ONG's, centros de capacitación, iglesias y más."
            />
            <FAQItem
              question="¿Cómo funciona el proceso de cotización?"
              answer="Completa el formulario con los productos que necesitas. Nuestro equipo revisará tu solicitud y te enviará una cotización personalizada en un plazo máximo de 24 horas hábiles."
            />
            <FAQItem
              question="¿Ofrecen descuentos por volumen?"
              answer="Sí, ofrecemos precios especiales para compras por volumen. La cotización que recibirás incluirá los mejores precios según la cantidad solicitada."
            />
            <FAQItem
              question="¿Qué opciones de entrega tienen?"
              answer="Ofrecemos entrega a nivel nacional. Puedes coordinar recojo en tienda, envío a tu domicilio o instalación completa según tus necesidades."
            />
            <FAQItem
              question="¿Incluyen garantía los productos?"
              answer="Todos nuestros productos cuentan con garantía del fabricante. Además, ofrecemos soporte técnico y servicio post-venta."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas asesoría personalizada?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte a encontrar la mejor
            solución para tu organización
          </p>
          <Link
            href="https://wa.me/51972300301?text=Hola, necesito asesoría sobre productos para mi organización"
            target="_blank"
            className="inline-block px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contactar por WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
