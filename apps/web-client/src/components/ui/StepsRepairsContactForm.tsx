import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Item = {
  step: number;
  title: string;
  classList: string;
  classButton: string;
  icon: React.ReactNode;
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
        <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
          <li className="flex items-center text-blue-600 dark:text-blue-500">
            <Check />
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
            Review
          </li>
        </ol>
      </div>
    </div>
  );
};
