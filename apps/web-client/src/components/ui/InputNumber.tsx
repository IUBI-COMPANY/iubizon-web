import React, { useState, useEffect } from "react";
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
  // Internal state to allow free typing before validation
  const [internalValue, setInternalValue] = useState<string>("");

  // Sync internal value with external value prop
  useEffect(() => {
    if (value !== undefined && value !== null) {
      setInternalValue(String(value));
    } else {
      setInternalValue("");
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Allow user to clear the field
    if (inputValue === "") {
      setInternalValue("");
      if (onChange) {
        onChange(min ?? 0);
      }
      return;
    }

    // Allow user to type minus sign (for negative numbers)
    if (inputValue === "-") {
      setInternalValue("-");
      return;
    }

    // Determine if we should use integer or decimal parsing based on step
    const isIntegerStep = step === undefined || step % 1 === 0;
    const numValue = isIntegerStep
      ? parseInt(inputValue, 10)
      : parseFloat(inputValue);

    // Only update if it's a valid number
    if (!isNaN(numValue)) {
      // For integer steps, store the parsed integer value to avoid display mismatch
      const displayValue = isIntegerStep ? String(numValue) : inputValue;
      setInternalValue(displayValue);
      onChange?.(numValue);
    }
  };

  const handleBlur = () => {
    // On blur, enforce min/max constraints and clean up the value
    if (internalValue === "" || internalValue === "-") {
      const fallbackValue = min ?? 0;
      setInternalValue(String(fallbackValue));
      onChange?.(fallbackValue);
      return;
    }

    const isIntegerStep = step === undefined || step % 1 === 0;
    let numValue = isIntegerStep
      ? parseInt(internalValue, 10)
      : parseFloat(internalValue);

    // Enforce min constraint
    if (min !== undefined && numValue < min) {
      numValue = min;
    }

    // Enforce max constraint
    if (max !== undefined && numValue > max) {
      numValue = max;
    }

    setInternalValue(String(numValue));
    onChange?.(numValue);
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
        value={internalValue}
        onChange={handleChange}
        onBlur={handleBlur}
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
