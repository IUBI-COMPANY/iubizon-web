import React from "react";
import { BadgePercent } from "lucide-react";
import { products } from "@/data-list/products";
import { ProductCard } from "@/components/ui/ProductCard";
import Image from "next/image";
import { productsCondition } from "@/data-list/productsCondition";
import Link from "next/link";

export default function Home() {
  const productsByCondition = {
    new: {
      ...productsCondition.new,
      products: products.filter((products) => products.condition === "new"),
    },
    reconditioned: {
      ...productsCondition.reconditioned,
      products: products.filter(
        (products) => products.condition === "reconditioned",
      ),
    },
  };

  const quantityProjectors = products
    .filter((product) => product.type === "Proyector")
    .reduce((acc, product) => {
      return acc + product.stock;
    }, 0);

  return (
    <div className="min-h-screen h-auto w-full bg-slate-50">
      <div
        style={{
          background: `linear-gradient(135deg, #112237,#000 50%, #112237)`,
        }}
        className="h-auto relative"
      >
        <video
          autoPlay
          muted
          loop
          poster="/images/education-projectors.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        >
          <source src="/videos/education-projectors.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="w-full h-auto min-h-svh sm:min-h-[31em] m-auto flex justify-center flex-wrap items-center lg:items-stretch text-center text-white relative">
          <div className="items m-[2em] relative flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-20 lg:pt-0">
            <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur">
              <BadgePercent className="h-4 w-4" /> Descuentos por volumen
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Venta de proyectores
            </h1>
            <p className="mt-3 max-w-2xl md:text-lg opacity-95">
              Para trabajar, aprender y entretenerse • Proyectores que inspiran
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#lista"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white-900 shadow hover:shadow-md"
              >
                Ver modelos disponibles
              </Link>
              <a
                href="https://wa.me/51972300301"
                target="_blank"
                className="rounded-full border border-white/70 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
          <div className="pet pb-[3em] md:pb-[2em] flex items-end justify-center lg:justify-left">
            <Image
              src="/images/pet-saludando.png"
              alt="Mascota iubizon - Venta de proyectores Epson en Lima y Perú"
              width={500}
              height={500}
              className="relative top-[1em] lg:top-[1em] right-[1em] w-[80%] h-auto sm:w-[22em] mx-auto"
            />
          </div>
        </div>
      </div>
      <main id="lista" className="mx-auto max-w-[1370px] px-6 py-10">
        {productsByCondition.new.products.length > 0 && (
          <div className="!mt-10 !mb-[5em]">
            <div className="mt-6 mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold text-primary">
                  {productsByCondition.new.name}
                </h2>
                <p className="text-sm text-secondary/70 max-w-[60em]">
                  {productsByCondition.new.description}
                </p>
                <p className="text-primary text-[.8em] mt-2 font-medium">
                  Llévate tu proyector completamente nuevo y con garantía.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {productsByCondition.new.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        )}
        {productsByCondition.reconditioned.products.length > 0 && (
          <div className="!mt-10 !mb-[5em]">
            <div className="mt-6 mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold text-secondary">
                  {productsByCondition.reconditioned.name}
                </h2>
                <p className="text-sm text-secondary/70 max-w-[60em]">
                  {productsByCondition.reconditioned.description}
                </p>
                <p className="text-primary text-[.8em] mt-2 font-medium">
                  Equipos a precios más accesibles, totalmente funcionales y con
                  garantía
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {productsByCondition.reconditioned.products.map(
                (product, index) => (
                  <ProductCard key={index} product={product} />
                ),
              )}
            </div>
          </div>
        )}
        {quantityProjectors >= 3 && (
          <section className="mt-10 md:mt-[10em] rounded-2xl p-6 text-center shadow-sm text-white  bg-gradient-to-br from-secondary/90 via-secondary to-secondary/90 relative">
            <Image
              src="/images/pet-corriendo-izquierda.png"
              alt="iubizon - Descuentos especiales en proyectores Epson para empresas y educación"
              width={500}
              height={500}
              className="relative lg:absolute top-[1em] lg:top-[-8em] right-[1em] lg:right-[4em] w-[23em] mx-auto"
            />
            <h3 className="text-xl font-bold">
              🔥 Oferta por compra por lotes
            </h3>
            <p className="mt-1 opaproducty-90">
              Entre proyectores mixtos o del mismo modelo
            </p>
            <p className="mt-2 text-2xl font-extrabold text-primary">
              A UN PRECIO ESPECIAL
            </p>
            <p className="text-sm opacity-95">
              Entrega inmediata • Prueba de funcionamiento • Con garantía
            </p>
            <a
              href="https://wa.me/51972300301?text=Hola%20iubizon,%20quiero%20un%20lote%20de%20"
              target="_blank"
              className="mt-4 inline-flex rounded-full px-10 py-3 text-sm font-semibold shadow bg-primary"
            >
              Reservar ahora
            </a>
          </section>
        )}
        <section className="mt-12 mb-10 grid gap-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-md md:grid-cols-2 border border-slate-100">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary w-fit">
              Servicio Especializado
            </div>
            <h2 className="mt-4 text-3xl font-bold text-secondary">
              Servicio Técnico de Proyectores
            </h2>
            <p className="mt-3 text-base text-secondary/80 leading-relaxed">
              Servicio técnico especializado en reparación y mantenimiento de
              proyectores. Diagnóstico profesional, repuestos originales y
              garantía en todos nuestros trabajos.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <div>
                  <p className="font-semibold text-secondary">
                    Diagnóstico gratuito
                  </p>
                  <p className="text-sm text-secondary/70">
                    Evaluación completa sin costo en nuestro local
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <div>
                  <p className="font-semibold text-secondary">
                    Reparaciones especializadas
                  </p>
                  <p className="text-sm text-secondary/70">
                    Lámparas, fuentes de poder, placas y sistema de ventilación
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <div>
                  <p className="font-semibold text-secondary">
                    Reacondicionado profesional
                  </p>
                  <p className="text-sm text-secondary/70">
                    Limpieza profunda y pruebas exhaustivas de funcionamiento
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <div>
                  <p className="font-semibold text-secondary">
                    Repuestos originales
                  </p>
                  <p className="text-sm text-secondary/70">
                    Garantía en mano de obra y componentes utilizados
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/reparaciones"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:bg-primary/90 transition-all"
              >
                Ver servicio completo
              </Link>

              <a
                href="https://wa.me/51972300301?text=Hola%20iubizon,%20necesito%20reparar%20mi%20proyector"
                target="_blank"
                className="inline-flex items-center rounded-full border-2 border-secondary px-6 py-3 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white transition-all"
              >
                Solicitar reparación
              </a>
            </div>
            <p className="mt-5 text-xs text-secondary/60 border-l-2 border-primary pl-3">
              <strong>Servicio en Lima y provincias:</strong> Recogemos y
              entregamos equipos. Consulta zonas de cobertura y tiempos de
              reparación.
            </p>
          </div>

          <div className="flex items-center justify-center order-first md:order-last">
            <div className="relative">
              <Image
                src="/images/proyectores-reparaciones.webp"
                alt="Técnico especializado reparando proyector Epson - Servicio técnico profesional en Lima, Perú"
                width={800}
                height={600}
                className="w-full max-w-lg rounded-xl object-cover shadow-lg"
                priority={false}
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-lg p-4 shadow-xl hidden md:block">
                <p className="text-2xl font-bold">+500</p>
                <p className="text-xs">Proyectores reparados</p>
              </div>
            </div>
          </div>
        </section>
        <p className="mt-6 text-center text-sm text-secondary/70">
          Todos los equipos son funcionales • Si viene a nuestro local, se hace
          su respectiva prueba • Con garantía
        </p>
      </main>
    </div>
  );
}
