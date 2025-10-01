"use client";

import { useState } from "react";
import { ClientInformation } from "@/app/repairs/ClientInformation";
import { DeviceInformation } from "@/app/repairs/DeviceInformation";
import { SupportInformation } from "@/app/repairs/SupportInformation";
import { StepsRepairsContactForm } from "@/components/ui/StepsRepairsContactForm";
import { Projector, User, Wrench } from "lucide-react";

interface Props {
  addLocalStorageForm: (data: object) => void;
}

export const RepairsContactForm = ({ addLocalStorageForm }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [repairsFormData, setRepairsFormData] = useState({});
  const [stepsCompleted, setStepsCompleted] = useState<number[]>([]);

  const stepItems = [
    {
      step: 0,
      label: "Contacto",
      classButton: "flex items-center justify-center rounded-l-full",
      icon: <User />,
    },
    {
      step: 1,
      label: "Equipo",
      classButton: "flex items-center rounded-none justify-center",
      icon: <Projector />,
    },
    {
      step: 2,
      label: "Visita",
      classButton: "flex items-center justify-center rounded-r-full",
      icon: <Wrench />,
    },
  ];

  return (
    <div className="grid gap-5 py-10 w-full max-w-2xl mx-auto ">
      <StepsRepairsContactForm
        items={stepItems}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        stepsCompleted={stepsCompleted}
      />
      <div className="w-full max-w-2xl mx-auto shadow-lg  py-10 px-6 rounded-2xl bg-white">
        {currentStep === 0 && (
          <ClientInformation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            repairsFormData={repairsFormData}
            setRepairsFormData={setRepairsFormData}
            stepsCompleted={stepsCompleted}
            setStepsCompleted={setStepsCompleted}
            addLocalStorageForm={addLocalStorageForm}
          />
        )}
        {currentStep === 1 && (
          <DeviceInformation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            repairsFormData={repairsFormData}
            setRepairsFormData={setRepairsFormData}
            stepsCompleted={stepsCompleted}
            setStepsCompleted={setStepsCompleted}
            addLocalStorageForm={addLocalStorageForm}
          />
        )}
        {currentStep === 2 && (
          <SupportInformation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            repairsFormData={repairsFormData}
            setRepairsFormData={setRepairsFormData}
            stepsCompleted={stepsCompleted}
            setStepsCompleted={setStepsCompleted}
            addLocalStorageForm={addLocalStorageForm}
          />
        )}
      </div>
    </div>
  );
};
