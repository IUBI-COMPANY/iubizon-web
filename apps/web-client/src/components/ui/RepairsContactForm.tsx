"use client";

import { useState } from "react";
import { ClientInformation } from "@/app/repairs/ClientInformation";
import { DeviceInformation } from "@/app/repairs/DeviceInformation";
import { SupportInformation } from "@/app/repairs/SupportInformation";
import { StepsRepairsContactForm } from "@/components/ui/StepsRepairsContactForm";
import { Projector, User, Wrench } from "lucide-react";

export const RepairsContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [repairFormData, setRepairFormData] = useState({});
  console.log("formulario: ", repairFormData);

  const stepItems = [
    {
      step: 0,
      title: "Datos de contacto",
      classList: "flex-1 flex flex-col items-center",
      classButton:
        "absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900",
      icon: <User />,
    },
    {
      step: 1,
      title: "Datos del equipo",
      classList: "flex-1 flex flex-col items-center",
      classButton:
        "absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700",
      icon: <Projector />,
    },
    {
      step: 2,
      title: "Tipo de visita",
      classList: "flex-1 flex flex-col items-center",
      classButton:
        "absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700",
      icon: <Wrench />,
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto shadow-lg my-10 py-10 px-6 rounded-2xl bg-white">
      <StepsRepairsContactForm
        items={stepItems}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      {currentStep === 0 && (
        <ClientInformation
          repairFormData={repairFormData}
          setRepairFormData={setRepairFormData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 1 && (
        <DeviceInformation
          repairFormData={repairFormData}
          setRepairFormData={setRepairFormData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 2 && (
        <SupportInformation
          repairFormData={repairFormData}
          setRepairFormData={setRepairFormData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      )}
    </div>
  );
};
