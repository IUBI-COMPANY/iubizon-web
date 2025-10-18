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
        {/* Sección de Confianza y Garantía */}
        <section className="mb-6 grid gap-3 md:grid-cols-4 text-center max-w-[70%] m-auto">
          <div className="rounded-lg bg-white p-3 shadow-sm border border-slate-100">
            <div className="mx-auto w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-secondary text-sm">
              Garantía Extendida
            </h3>
            <p className="text-[0.65rem] text-secondary/70 mt-0.5">
              Hasta 12 meses en equipos nuevos
            </p>
          </div>

          <div className="rounded-lg bg-white p-3 shadow-sm border border-slate-100">
            <div className="mx-auto w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-bold text-secondary text-sm">
              Prueba en Local
            </h3>
            <p className="text-[0.65rem] text-secondary/70 mt-0.5">
              Verifica tu equipo antes de llevarlo
            </p>
          </div>

          <div className="rounded-lg bg-white p-3 shadow-sm border border-slate-100">
            <div className="mx-auto w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-secondary text-sm">
              Descuentos x Lote
            </h3>
            <p className="text-[0.65rem] text-secondary/70 mt-0.5">
              Precios especiales desde 3 unidades
            </p>
          </div>

          <div className="rounded-lg bg-white p-3 shadow-sm border border-slate-100">
            <div className="mx-auto w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-secondary text-sm">
              Entrega en Lima
            </h3>
            <p className="text-[0.65rem] text-secondary/70 mt-0.5">
              Envío disponible • Retiro en tienda
            </p>
          </div>
        </section>

        {/* Sección de Proceso de Compra */}
        <section className="mt-8 mb-6 rounded-xl bg-white p-6 shadow-sm border border-slate-100">
          <div className="text-center mb-5">
            <h2 className="text-2xl font-bold text-secondary">
              ¿Cómo Comprar tu Proyector?
            </h2>
            <p className="text-sm text-secondary/70 mt-2">
              Proceso simple y seguro en 4 pasos
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-3">
                1
              </div>
              <h3 className="font-bold text-secondary text-sm mb-1.5">
                Elige tu Modelo
              </h3>
              <p className="text-xs text-secondary/70">
                Revisa las especificaciones, stock y precio de cada proyector
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-3">
                2
              </div>
              <h3 className="font-bold text-secondary text-sm mb-1.5">
                Solicitud de compra
              </h3>
              <p className="text-xs text-secondary/70">
                Envíanos su solicitud de compra por WhatsApp o visita nuestro
                local
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-3">
                3
              </div>
              <h3 className="font-bold text-secondary text-sm mb-1.5">
                Verificación
              </h3>
              <p className="text-xs text-secondary/70">
                Prueba el equipo en nuestro local o coordina entrega
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-3">
                4
              </div>
              <h3 className="font-bold text-secondary text-sm mb-1.5">
                Recibe tu Equipo
              </h3>
              <p className="text-xs text-secondary/70">
                Con garantía, accesorios y soporte técnico incluido
              </p>
            </div>
          </div>

          <div className="mt-5 p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-center text-secondary/80">
              <strong>💳 Formas de pago:</strong> Efectivo, transferencia
              bancaria
            </p>
          </div>
        </section>

        {productsByCondition.new.products.length > 0 && (
          <div className="!mt-6 !mb-[3em]">
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-primary">
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
        {quantityProjectors >= 3 && (
          <section className="mt-10 mb-[5em] md:mt-[10em] rounded-2xl p-6 text-center shadow-sm text-white  bg-gradient-to-br from-secondary/90 via-secondary to-secondary/90 relative">
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
        {productsByCondition.reconditioned.products.length > 0 && (
          <div className="!mt-6 !mb-[3em]">
            <div className="mb-4">
              <div>
                <h2 className="text-2xl font-bold text-secondary">
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
        {/* Sección de Preguntas Frecuentes */}
        <section className="mt-8 mb-6 rounded-xl bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm border border-slate-100">
          <div className="text-center mb-5">
            <h2 className="text-2xl font-bold text-secondary">
              Preguntas Frecuentes
            </h2>
            <p className="text-sm text-secondary/70 mt-2">
              Resuelve tus dudas antes de comprar
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <h3 className="font-bold text-secondary mb-2 flex items-start gap-2">
                <span className="text-primary">❓</span>
                ¿Los equipos reacondicionados son confiables?
              </h3>
              <p className="text-sm text-secondary/70 pl-6">
                Sí, todos pasan por limpieza profunda, reemplazo de componentes
                dañados y pruebas exhaustivas. Incluyen 6 meses de garantía.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <h3 className="font-bold text-secondary mb-2 flex items-start gap-2">
                <span className="text-primary">❓</span>
                ¿Hacen envíos a provincia?
              </h3>
              <p className="text-sm text-secondary/70 pl-6">
                Sí, coordinamos envíos a todo el Perú. El costo y tiempo depende
                de tu ubicación. Contáctanos para más detalles.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <h3 className="font-bold text-secondary mb-2 flex items-start gap-2">
                <span className="text-primary">❓</span>
                ¿Incluyen accesorios?
              </h3>
              <p className="text-sm text-secondary/70 pl-6">
                Todos los proyectores incluyen cable de poder y control remoto.
                Cables HDMI y soportes se venden por separado.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <h3 className="font-bold text-secondary mb-2 flex items-start gap-2">
                <span className="text-primary">❓</span>
                ¿Ofrecen soporte post-venta?
              </h3>
              <p className="text-sm text-secondary/70 pl-6">
                Sí, brindamos asesoría técnica, instalación y servicio de
                mantenimiento. Nuestro equipo te ayuda con cualquier consulta.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <h3 className="font-bold text-secondary mb-2 flex items-start gap-2">
                <span className="text-primary">❓</span>
                ¿Puedo apartar un proyector?
              </h3>
              <p className="text-sm text-secondary/70 pl-6">
                Sí, con el 50% puedes reservar tu equipo. El stock se actualiza
                en tiempo real.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <h3 className="font-bold text-secondary mb-2 flex items-start gap-2">
                <span className="text-primary">❓</span>
                ¿Qué cubre la garantía?
              </h3>
              <p className="text-sm text-secondary/70 pl-6">
                Cubre defectos de fábrica y componentes internos. No cubre daños
                por mal uso, golpes o líquidos derramados.
              </p>
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm text-secondary/70 mb-3">
              ¿Tienes más preguntas?
            </p>
            <a
              href="https://wa.me/51972300301?text=Hola%20iubizon,%20tengo%20algunas%20consultas"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-700 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>

        <p className="mt-6 text-center text-sm text-secondary/70">
          Todos los equipos son funcionales • Si viene a nuestro local, se hace
          su respectiva prueba • Con garantía
        </p>

        <section className="mt-8 mb-6 grid gap-6 rounded-xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-md md:grid-cols-2 border border-slate-100">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary w-fit">
              Servicio Especializado
            </div>
            <h2 className="mt-4 text-2xl font-bold text-secondary">
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
                    Diagnóstico profesional
                  </p>
                  <p className="text-sm text-secondary/70">
                    Evaluación completa en nuestro local
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
                <p className="text-2xl font-bold text-center">+200</p>
                <p className="text-xs">Proyectores reparados</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
