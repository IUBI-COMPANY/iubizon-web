"use client";

import { useEffect, useState } from "react";
import { ClientInformation } from "@/app/repairs/ClientInformation";
import { DeviceInformation } from "@/app/repairs/DeviceInformation";
import { SupportInformation } from "@/app/repairs/SupportInformation";
import { StepsRepairsContactForm } from "@/components/ui/StepsRepairsContactForm";
import { CircleCheck, Loader2, Projector, User, Wrench } from "lucide-react";
import Image from "next/image";

export type RepairStep1 = Pick<
  Repair,
  "first_name" | "last_name" | "email" | "phone_prefix" | "phone_number"
>;

export type RepairStep2 = Pick<
  Repair,
  "product_name" | "description_device_fault" | "description_other_fault"
>;

export type RepairStep3 = Pick<
  Repair,
  | "service_type"
  | "visit_date"
  | "visit_time"
  | "department"
  | "province"
  | "district"
  | "address"
  | "terms_and_conditions"
>;

export const RepairsContactForm = () => {
  const [globalStep, setGlobalStep] = useState(0);
  const [repairsFormData, setRepairsFormData] = useState<Partial<Repair>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stepsData = Number(localStorage.getItem("currentStep") || 0);
    if (stepsData !== null) {
      setCurrentStepToLocalStorage(stepsData);
    }
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData") || "{}");
    setRepairsFormData(data);
    setLoading(false);
  }, [globalStep]);

  const addLocalStorageData = (data: object) => {
    const currentLocalData = getLocalStorageData();
    const newData = { ...currentLocalData, ...data };
    localStorage.setItem("formData", JSON.stringify(newData));
  };

  const setCurrentStepToLocalStorage = (step: number) => {
    localStorage.setItem("currentStep", JSON.stringify(step));
    setGlobalStep(step);
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
    <div className="grid gap-5 py-10 w-full max-w-2xl mx-auto">
      <StepsRepairsContactForm
        items={stepItems}
        globalStep={globalStep}
        setGlobalStep={setGlobalStep}
      />
      <div className="w-full max-w-2xl mx-auto shadow-lg  py-10 px-6 rounded-2xl bg-white border-2 border-solid border-primary">
        {globalStep === 0 && (
          <ClientInformation
            globalStep={globalStep}
            repairsFormData={repairsFormData}
            setRepairsFormData={setRepairsFormData}
            addLocalStorageData={addLocalStorageData}
            setCurrentStepToLocalStorage={setCurrentStepToLocalStorage}
          />
        )}
        {globalStep === 1 && (
          <DeviceInformation
            globalStep={globalStep}
            repairsFormData={repairsFormData}
            setRepairsFormData={setRepairsFormData}
            addLocalStorageData={addLocalStorageData}
            setCurrentStepToLocalStorage={setCurrentStepToLocalStorage}
          />
        )}
        {globalStep === 2 && (
          <SupportInformation
            loading={loading}
            setLoading={setLoading}
            globalStep={globalStep}
            repairsFormData={repairsFormData}
            setRepairsFormData={setRepairsFormData}
            addLocalStorageData={addLocalStorageData}
            setCurrentStepToLocalStorage={setCurrentStepToLocalStorage}
          />
        )}
        {globalStep === 3 && (
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
