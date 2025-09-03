"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BadgePercent } from "lucide-react";
import Link from "next/link";

export const HeaderLayout = () => {
  const path = usePathname();
  return (
    <>
      {path === "/" ? (
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
            poster="./images/education-projectors.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
          >
            <source src="./videos/education-projectors.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <header className="top-header absolute top-2 left-0 w-full p-4">
            <div className="item-logo">
              <Image
                width={300}
                height={100}
                src="/images/logo.png"
                alt="iubizon logo"
                className="w-[9em] h-auto object-contain m-auto"
              />
            </div>
          </header>
          <div className="w-full h-auto min-h-svh sm:min-h-[31em] m-auto flex justify-center flex-wrap items-center lg:items-stretch text-center text-white relative">
            <div className="items m-[2em] relative flex flex-col items-center lg:items-start justify-center text-center lg:text-left pt-20 lg:pt-0">
              <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur">
                <BadgePercent className="h-4 w-4" /> Descuentos por volumen
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Venta de proyectores
              </h1>
              <p className="mt-3 max-w-2xl md:text-lg opacity-95">
                De exhibición verificada • Totalmente funcionales • Precios
                bajos
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#lista"
                  className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white-900 shadow hover:shadow-md"
                >
                  Ver modelos disponibles
                </a>
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
                alt="pet iubizon"
                width={500}
                height={500}
                className="relative top-[1em] lg:top-[1em] right-[1em] w-[80%] h-auto sm:w-[22em] mx-auto"
              />
            </div>
          </div>
        </div>
      ) : (
        <header className="relative overflow-hidden bg-gradient-to-r from-secondary/90 via-secondary/100 to-secondary/90">
          <div className="top-header w-full p-4">
            <div className="item-logo flex justify-center">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={144}
                  height={40}
                  alt="iubizon logo"
                  className="w-[9em] min-h-[3em] h-auto object-contain m-auto"
                />
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
