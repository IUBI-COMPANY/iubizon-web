"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export type StepItem = {
  key?: string;
  title?: string;
  icon?: React.ReactNode;
  description?: string;
  content: React.ReactNode;
  optional?: boolean;
};

interface Props {
  items: StepItem[];
  className?: string;
  current?: number;
  showHeader?: boolean;
  hideControls?: boolean;
}

export const Steps = ({
  items,
  className,
  current,
  showHeader = true,
  hideControls = false,
}: Props) => {
  const isControlled = typeof current === "number";
  const [numberStep, setNumberStep] = useState(0);
  const active = isControlled ? (current as number) : numberStep;

  const total = items.length;

  const go = (idx: number) => {
    if (idx < 0 || idx >= total) return;
    setNumberStep(idx);
  };

  const next = () => {
    go(active + 1);
    console.log("Step:", active);
  };

  const back = () => go(active - 1);

  console.log(numberStep);

  return (
    <div className={twMerge("w-full", className)}>
      {showHeader && (
        <div className="flex flex-col items-center">
          <div className="text-center text-secondary font-semibold">
            {items[active]?.title ?? ""}
          </div>
          <div className="flex justify-center items-center mt-4">
            <ol className="flex items-center justify-center">
              {items.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                const isLast = i === items.length - 1;

                return (
                  <li key={step.key ?? `${i}`} className="flex items-center">
                    <button
                      type="button"
                      onClick={() => go(i)}
                      aria-current={isActive}
                      aria-label={step.title ?? `Paso ${i + 1}`}
                      className={twMerge(
                        "flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : isDone
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-500",
                      )}
                    >
                      {isDone ? (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 16 12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                          />
                        </svg>
                      ) : (
                        step.icon
                      )}
                    </button>

                    {!isLast && (
                      <div
                        className={twMerge(
                          "h-1 w-12 mx-2 rounded",
                          isDone ? "bg-green-500" : "bg-gray-200",
                        )}
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>

          {items[active]?.description && (
            <p className="mt-3 text-sm text-muted-foreground max-w-xl text-center">
              {items[active]?.description}
            </p>
          )}
        </div>
      )}

      <div className="mt-8">{items[active]?.content}</div>

      {!hideControls && (
        <div className="mt-10 flex gap-x-6">
          <button
            type="button"
            onClick={back}
            disabled={active === 0}
            className={twMerge(
              "block w-full rounded-md bg-secondary/10 px-3.5 py-2.5 text-center text-sm font-semibold text-secondary shadow-xs",
              active === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-secondary/20",
            )}
          >
            Atrás
          </button>
          <button
            type="button"
            onClick={next}
            //disabled={disableNext}
            className={twMerge(
              "block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-xs",
              //disableNext ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90",
            )}
          >
            {active === total - 1 ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      )}
    </div>
  );
};
