import React from "react";
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
  currentStep: number;
  setCurrentStep: (step: number) => void;
  stepsCompleted: number[];
}

export const StepsRepairsContactForm = ({
  items,
  currentStep,
  setCurrentStep,
  stepsCompleted,
}: Props) => {
  return (
    <div className="flex justify-center rounded-full">
      <ol className="w-full flex justify-center gap-1 rounded-l-full rounded-r-full  object-cover">
        {items.map((item, key) => {
          const isComplete = stepsCompleted.includes(item.step);
          const isActive = currentStep === item.step;
          const isFinishedForm = currentStep === 3;

          return (
            <li key={key} className="w-full flex items-center">
              <Button
                styleVariant="solid"
                className={twMerge(
                  `w-full bg-white hover:bg-primary/15 ${isActive ? "text-primary" : "text-gray-400"} ${isComplete && "text-white bg-secondary hover:bg-secondary/80"}`,
                  item.classButton,
                )}
                onClick={() => setCurrentStep(item.step)}
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
