import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  children: React.ReactNode;
  numberGrids?: number;
}

export const Form = ({ children, numberGrids = 4, ...props }: Props) => {
  return (
    <form noValidate autoComplete="off" {...props} className="space-y-6">
      <div
        className={twMerge(
          "grid grid-cols-1 gap-3 md:gap-4",
          `md:grid-cols-${numberGrids}`,
        )}
      >
        {children}
      </div>
    </form>
  );
};
