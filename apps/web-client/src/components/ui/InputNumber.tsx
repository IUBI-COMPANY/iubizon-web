import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  hidden?: boolean;
  className?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
}

export const InputNumber = ({
  name,
  label,
  value,
  onChange,
  error = false,
  helperText,
  required = false,
  hidden = false,
  className,
  placeholder,
  min,
  max,
  step = 1,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Allow empty input (user is clearing the field)
    if (inputValue === "" || inputValue === "-") {
      onChange?.(min ?? 0);
      return;
    }

    const numValue = parseFloat(inputValue);
    onChange?.(isNaN(numValue) ? (min ?? 0) : numValue);
  };

  return (
    <div className={twMerge("", hidden && "hidden")}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm/6 font-semibold text-secondary mb-1.5"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type="number"
        value={value ?? ""}
        onChange={handleChange}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        className={twMerge(
          "block w-full rounded-md bg-white px-3.5 py-2 text-base placeholder:text-gray-400 transition-colors duration-200",
          "outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2",
          error
            ? "outline-red-500 border-red-500 focus:outline-red-500"
            : "focus:outline-secondary/70 hover:outline-gray-400",
          className,
        )}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={error}
      />
      {error && helperText && (
        <p
          id={`${name}-error`}
          className="mt-1 text-sm text-red-600 scroll-error-anchor"
          role="alert"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
