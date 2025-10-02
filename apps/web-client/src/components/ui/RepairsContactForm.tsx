"use client";

import { useState, useEffect } from "react";
import { ClientInformation } from "@/app/repairs/ClientInformation";
import { DeviceInformation } from "@/app/repairs/DeviceInformation";
import { SupportInformation } from "@/app/repairs/SupportInformation";
import { StepsRepairsContactForm } from "@/components/ui/StepsRepairsContactForm";
import { CircleCheck, Loader2, Projector, User, Wrench } from "lucide-react";
import Image from "next/image";

export const RepairsContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [repairsFormData, setRepairsFormData] = useState({});
  const [stepsCompleted, setStepsCompleted] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData") || "{}");
    const stepsData = JSON.parse(localStorage.getItem("steps") || "{}");
    if (stepsData.currentStep !== undefined)
      setCurrentStep(stepsData.currentStep);
    if (stepsData.stepsCompleted) setStepsCompleted(stepsData.stepsCompleted);
    setRepairsFormData(data);
    setLoading(false);
  }, []);

  const addLocalStorageData = (data: object) => {
    const currentLocalData = getLocalStorageData();
    const newData = { ...currentLocalData, ...data };
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const addStepToLocalStorage = (step: number, stepsCompleted: number[]) => {
    const newData = {
      currentStep: step,
      stepsCompleted: [...stepsCompleted],
    };
    localStorage.setItem("steps", JSON.stringify(newData));
  };

  const getLocalStorageData = () => {
    return JSON.parse(localStorage.getItem("formData") || "{}");
  };

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

  return loading ? (
    <div className="w-full h-full grid place-items-center ">
      <Loader2 className="w-20 h-20 text-primary animate-spin" />
    </div>
  ) : (
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
            addLocalStorageData={addLocalStorageData}
            addStepToLocalStorage={addStepToLocalStorage}
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
            addLocalStorageData={addLocalStorageData}
            addStepToLocalStorage={addStepToLocalStorage}
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
            addLocalStorageData={addLocalStorageData}
            addStepToLocalStorage={addStepToLocalStorage}
          />
        )}
        {currentStep === 3 && (
          <div className="w-full h-full grid sm:grid-cols-2 place-items-center ">
            <Image
              width={1000}
              height={1000}
              src="/images/iubizon-pet.png"
              alt="iubizonpet"
              className="w-full h-auto"
            />
            <div className="grid place-items-center gap-5">
              <CircleCheck className="w-25 h-25 text-green-700 " />
              <span className="text-xl font-bold text-center text-secondary">
                Listo, te contactaremos lo más antes posible
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
