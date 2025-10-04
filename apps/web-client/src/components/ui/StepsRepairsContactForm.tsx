import React, { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { twMerge } from "tailwind-merge";

type Item = {
  step: number;
  label: string;
  classButton: string;
  icon: React.ReactNode;
};

interface Props {
  items: Item[];
  globalStep: number;
  setGlobalStep: (step: number) => void;
}

export const StepsRepairsContactForm = ({
  items,
  globalStep,
  setGlobalStep,
}: Props) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const savedStep = Number(localStorage.getItem("currentStep"));
    setStep(savedStep);
  }, [globalStep]);

  return (
    <div className="flex justify-center rounded-full">
      <ol className="w-full flex justify-center gap-1 rounded-l-full rounded-r-full  object-cover">
        {items.map((item, key) => {
          const isComplete = step > item.step;
          const isActive = step === item.step;
          const isFinishedForm = step === 3;

          return (
            <li key={key} className="w-full flex items-center">
              <Button
                styleVariant="solid"
                className={twMerge(
                  `w-full bg-white hover:bg-primary/15 ${isActive ? "text-primary" : "text-gray-400"} ${isComplete && "text-white bg-secondary hover:bg-secondary/80"}`,
                  item.classButton,
                )}
                onClick={() => setGlobalStep(item.step)}
                disabled={(!(isComplete || isActive) || isFinishedForm) && true}
              >
                <span className="flex items-end gap-2">
                  {isComplete ? <CircleCheck /> : item.icon}
                  {item.label}
                </span>
              </Button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
