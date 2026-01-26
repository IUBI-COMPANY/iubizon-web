"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CTASectionProps {
  title: string | ReactNode;
  description: string | ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  className?: string;
}

/**
 * Componente reutilizable para Call to Action final
 * Incluye fondo con gradiente oscuro y botones
 */
export default function CTASection({
  title,
  description,
  backgroundImage = "/images/education-projectors.jpg",
  backgroundAlt = "Call to action",
  primaryButton = {
    text: "Contáctanos Hoy",
    href: "/contacto",
  },
  secondaryButton,
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/85 to-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {typeof title === "string" ? (
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
        ) : (
          title
        )}

        {typeof description === "string" ? (
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        ) : (
          description
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryButton && (
            <Link
              href={primaryButton.href}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-block shadow-lg"
            >
              {primaryButton.text}
            </Link>
          )}

          {secondaryButton && (
            <Link
              href={secondaryButton.href}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              {secondaryButton.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
