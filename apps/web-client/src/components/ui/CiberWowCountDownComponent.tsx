import React from "react";
import { CountdownComponent } from "@/components/ui/CountdownComponent";

export const CiberWowCountDownComponent = () => {
  // Check if Cyber WOW campaign is active (Nov 3-6, 2025)
  const isCyberWowActive = () => {
    const now = new Date();
    const campaignStart = new Date(2025, 10, 3); // Nov 3
    const campaignEnd = new Date(2025, 10, 6, 23, 59, 59); // Nov 6 end of day
    return now >= campaignStart && now <= campaignEnd;
  };

  const cyberWowActive = isCyberWowActive();

  if (!cyberWowActive) return null;

  return (
    <>
      <section className="mb-8 relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 p-4 md:p-5 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative z-10">
          {/* Mobile Layout */}
          <div className="block md:hidden text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-3 py-1.5 rounded-full font-bold text-xs mb-3">
              <span>⚡</span>
              <span>CYBER WOW</span>
              <span>⚡</span>
            </div>
            <h2 className="text-xl font-bold mb-1">15% de descuento</h2>
            <p className="text-xs opacity-90 mb-3">
              Válido del 3 al 6 de noviembre
            </p>
            <div className="mb-3">
              <p className="text-xs font-semibold mb-2">⏰ Termina en:</p>
              <CountdownComponent />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-6">
            {/* Left Section - Title & Info */}
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-3 py-1.5 rounded-full font-bold text-xs mb-2">
                <span>⚡</span>
                <span>CYBER WOW 2025</span>
                <span>⚡</span>
              </div>
              <h2 className="text-2xl font-bold mb-1">¡15% de descuento!</h2>
              <p className="text-sm opacity-90">
                En productos seleccionados • Stock limitado
              </p>
            </div>

            {/* Center Section - Countdown */}
            <div className="flex-grow flex flex-col items-center justify-center min-w-[300px]">
              <p className="text-xs font-semibold mb-2">
                ⏰ LA OFERTA TERMINA EN:
              </p>
              <CountdownComponent />
            </div>

            {/* Right Section - Benefits */}
            <div className="flex-shrink-0 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <span className="font-bold">✓</span> Proyectores en oferta
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <span className="font-bold">✓</span> Envío disponible
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <span className="font-bold">✓</span> Con garantía
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
