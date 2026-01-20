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
  globalStep: number;
  setGlobalStep: (step: number) => void;
}

export const StepsRepairsContactForm = ({
  items,
  globalStep,
  setGlobalStep,
}: Props) => {
  return (
    <div className="flex justify-center rounded-full">
      <ol className="w-full flex justify-center gap-1 rounded-l-full rounded-r-full object-cover">
        {items.map((item, key) => {
          const isComplete = globalStep > item.step;
          const isActive = globalStep === item.step;
          const isFinishedForm = globalStep === 3;
          const isFutureStep = item.step > globalStep;

          return (
            <li key={key} className="w-full flex items-center">
              <Button
                styleVariant="solid"
                className={twMerge(
                  `w-full bg-white hover:bg-primary/15 ${isActive ? "text-primary" : "text-gray-400"} ${isComplete && "text-white bg-secondary hover:bg-secondary/80"}`,
                  item.classButton,
                )}
                onClick={() => setGlobalStep(item.step)}
                disabled={isFutureStep || isFinishedForm}
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
