"use client";

import { RepairsContactForm } from "@/components/ui/RepairsContactForm";

export default function RepairsClientPage() {
  const addLocalStorageData = (data: object) => {
    const currentLocalData = JSON.parse(
      localStorage.getItem("formData") || "{}",
    );
    const newData = { ...currentLocalData, ...data };
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  return (
    <div className="min-h-screen h-auto flex flex-col w-full bg-gray-300">
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-6 text-balance">
            Reparación de proyectores
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 text-pretty">
            Servicio de reparación de proyectores de alta calidad con técnicos
            especializados.
          </p>
          <button className="bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-3 rounded-full">
            Solicita tu reparación
          </button>
        </div>
      </section>
      <RepairsContactForm addLocalStorageForm={addLocalStorageData} />
    </div>
  );
}
