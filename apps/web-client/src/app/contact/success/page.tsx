import React from "react";
import Link from "next/link";
import { HomeIcon, CheckCircleIcon, MailIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";

export default function SuccessContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Animation Container */}
        <div className="relative mb-8">
          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-scalePulse"></div>
          
          {/* Main mascot image */}
          <div className="relative z-10 mb-6">
            <Image
              src="/images/pet-saludando.png"
              alt="iubizon mascot celebrating"
              width={180}
              height={180}
              className="mx-auto animate-scalePulse drop-shadow-2xl"
              priority
            />
          </div>
          
          {/* Success checkmark */}
          <div className="absolute -top-4 -right-4 z-20">
            <CheckCircleIcon className="w-16 h-16 text-green-500 bg-white rounded-full p-2 shadow-lg animate-scalePulse" />
          </div>
          
          {/* Sparkles decoration */}
          <SparklesIcon className="absolute top-4 left-8 w-8 h-8 text-primary animate-pulse" />
          <SparklesIcon className="absolute bottom-8 right-12 w-6 h-6 text-secondary animate-pulse" />
          <SparklesIcon className="absolute top-12 right-4 w-7 h-7 text-primary/70 animate-pulse" />
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 p-8 mb-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-secondary mb-4 flex items-center justify-center gap-3">
              <MailIcon className="w-10 h-10 text-primary" />
              ¡Mensaje Enviado!
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="space-y-4 text-font">
            <p className="text-xl font-medium text-secondary">
              🎉 ¡Felicitaciones! Has dado un gran paso
            </p>
            <p className="text-lg leading-relaxed">
              Tu mensaje ha sido <strong className="text-primary">enviado de manera exitosa</strong>. 
              Nuestro equipo de expertos en productos multimedia revisará tu consulta y te 
              <strong className="text-secondary"> responderá a la brevedad</strong>.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4 my-6">
              <p className="text-secondary font-medium flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary" />
                Te contactaremos en las próximas 24 horas
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-primary hover:bg-primary/90 transition-colors duration-300 py-4 px-8 rounded-2xl text-white font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <HomeIcon className="w-5 h-5" /> 
            Volver al Inicio
          </Link>
          
          <Link
            href="/contact"
            className="bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-300 py-4 px-8 rounded-2xl font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <MailIcon className="w-5 h-5" />
            Enviar Otro Mensaje
          </Link>
        </div>

        {/* Additional info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-font/70">
            ¿Necesitas respuesta inmediata? También puedes contactarnos vía WhatsApp
          </p>
        </div>
      </div>
    </div>
  );
}
