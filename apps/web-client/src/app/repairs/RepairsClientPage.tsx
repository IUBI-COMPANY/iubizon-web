"use client";

import { RepairsContactForm } from "@/components/ui/RepairsContactForm";
import {
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export default function RepairsClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative h-[60vh] bg-gradient-to-br from-secondary via-secondary/90 to-secondary overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/education-projectors.jpg"
            alt="Servicio técnico de proyectores"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-blue-900/50"></div>
        </div>
        {/* Hero Content */}
        <div className="relative z-10 h-auto p-[2em] flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl md:text-[2.5em] font-bold text-white mb-4 leading-tight">
              Mantenimiento y Reparación
              <span className="block text-primary font-bold">
                Especializada de Proyectores
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Servicio técnico profesional con garantía • Mantenimiento
              preventivo especializado • Reparaciones con los mejores repuestos
            </p>
          </div>
        </div>
      </div>

      {/* Form Section - Overlapping */}
      <div className="relative -mt-60 sm:-mt-70 z-20 px-4">
        <div className="max-w-4xl mx-auto">
          <RepairsContactForm />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-10 pt-0 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo Funciona Nuestro Servicio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y eficiente para que tu proyector vuelva a
              funcionar como nuevo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                1. Completa el Formulario
              </h3>
              <p className="text-gray-600">
                Llena los datos de contacto, información de tu proyector y
                programa tu visita técnica. Nuestro equipo revisará tu solicitud
                inmediatamente.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. Diagnóstico del Equipo
              </h3>
              <p className="text-gray-600">
                Especifica la marca, modelo y describe el problema de tu
                proyector. Esto nos permite preparar las herramientas y
                repuestos necesarios.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                3. Visita Técnica Programada
              </h3>
              <p className="text-gray-600">
                Selecciona fecha, horario y proporciona tu dirección completa.
                Nuestro técnico llegará puntualmente para la reparación o
                mantenimiento.
              </p>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Mantenimiento Preventivo
              </h4>
              <p className="text-blue-800">
                Programamos revisiones periódicas para prolongar la vida útil de
                tu proyector, limpiar filtros, calibrar imagen y verificar
                componentes críticos.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-orange-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Reparación Especializada
              </h4>
              <p className="text-orange-800">
                Solucionamos problemas de imagen, sonido, conectividad,
                lámparas, ventiladores y cualquier falla técnica con repuestos
                originales.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Nuestro Servicio Técnico?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Garantía de Servicio
              </h3>
              <p className="text-gray-600">
                3 meses de garantía en todas nuestras reparaciones
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Atención Rápida
              </h3>
              <p className="text-gray-600">Respondemos en menos de 24 horas</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Técnicos Especializados
              </h3>
              <p className="text-gray-600">
                Especialistas con años de experiencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
