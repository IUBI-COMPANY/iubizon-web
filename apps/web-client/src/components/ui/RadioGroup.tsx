import React from "react";
import { twMerge } from "tailwind-merge";
import { Radio } from "@/components/ui/Radio";

interface Option {
  value: string;
  label: React.ReactNode;
  message?: string;
  disabled?: boolean;
}

interface Props {
  name: string;
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  hidden?: boolean;
  className?: string;
  direction?: "vertical" | "horizontal";
  columns?: number;
  disabled?: boolean;
}

export const RadioGroup = ({
  name,
  label,
  options,
  value = "",
  onChange,
  error = false,
  helperText,
  required = false,
  hidden = false,
  className,
  direction = "vertical",
  columns = 1,
  disabled = false,
}: Props) => {
  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    if (!onChange) return;

    if (checked) {
      // Add value if not already present
      if (!value.includes(optionValue)) {
        onChange(optionValue);
      }
    } else {
      // Remove value
      onChange("");
    }
  };

  const getGridClasses = () => {
    if (direction === "horizontal") {
      return "flex flex-wrap gap-4";
    }

    if (columns > 1) {
      const colsClass =
        {
          2: "grid-cols-2",
          3: "grid-cols-3",
          4: "grid-cols-4",
        }[columns] || "grid-cols-2";

      return `grid ${colsClass} gap-2`;
    }

    return "space-y-2";
  };

  return (
    <div className={twMerge("", hidden && "hidden", className)}>
      {label && (
        <div className="mb-3">
          <label className="block text-sm/6 font-semibold text-secondary">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        </div>
      )}

      <div
        className={getGridClasses()}
        role="group"
        aria-labelledby={label ? `${name}-label` : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={error}
      >
        {options.map((option, index) => (
          <Radio
            key={`${name}-${option.value}-${index}`}
            name={`${name}-${option.value}`}
            checked={value.includes(option.value)}
            onChange={(checked) => handleCheckboxChange(option.value, checked)}
            error={false} // Individual checkboxes don't show errors, only the group
            disabled={disabled || option.disabled}
            message={option?.message}
          >
            {option.label}
          </Radio>
        ))}
      </div>

      {error && helperText && (
        <p
          id={`${name}-error`}
          className="mt-2 text-sm text-red-600 scroll-error-anchor"
          role="alert"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
