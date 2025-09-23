import React from "react";
import { twMerge } from "tailwind-merge";
import { Projector, User, Wrench, Check } from "lucide-react";

type Item = {
  step: number;
  title: string;
};

interface Props {
  items: Item[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const StepsRepairsContactForm = ({
  items,
  currentStep,
  setCurrentStep,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl text-center text-secondary font-semibold">
        {items.map((item) => (currentStep === item.step ? item.title : ""))}
      </div>
      <div className="w-full mx-auto max-w-xl flex justify-center items-center mt-4">
        <ol className="flex justify-center items-center w-full mb-4 sm:mb-5">
          <li
            className={twMerge(
              "w-full flex items-center text-secondary  after:content-[''] after:flex-1 after:h-1 after:border-b  after:border-3",
              currentStep > 0
                ? "after:border-primary"
                : "after:border-gray-300",
            )}
          >
            <button
              onClick={() => setCurrentStep(0)}
              className={twMerge(
                "flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0",
                currentStep >= 0 ? "bg-primary" : "bg-gray-300",
              )}
            >
              {currentStep > 0 ? <Check /> : <User />}
            </button>
          </li>
          <li
            className={twMerge(
              "w-full flex items-center text-secondary after:content-[''] after:flex-1 after:h-1 after:border-b  after:border-3",
              currentStep > 1
                ? "after:border-primary"
                : "after:border-gray-300",
            )}
          >
            <button
              onClick={() => setCurrentStep(1)}
              className={twMerge(
                "flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0",
                currentStep >= 1 ? "bg-primary" : "bg-gray-300",
              )}
            >
              {currentStep > 1 ? <Check /> : <Projector />}
            </button>
          </li>
          <li className="flex items-center">
            <button
              onClick={() => setCurrentStep(2)}
              className={twMerge(
                "flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12  shrink-0",
                currentStep >= 2 ? "bg-primary" : "bg-gray-300",
              )}
            >
              {currentStep > 2 ? <Check /> : <Wrench />}
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};
