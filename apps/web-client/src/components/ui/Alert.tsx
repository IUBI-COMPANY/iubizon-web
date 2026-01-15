import React from "react";
import { CircleAlert } from "lucide-react";
import { twMerge } from "tailwind-merge";
//Alert component to show different types of alerts
interface Props {
  type: "success" | "error" | "info" | "warning";
  message: string;
}

export const Alert = ({ type, message }: Props) => {
  let alertClass = "bg-blue-200 border-1 border-blue-400 text-blue-800";

  switch (type) {
    case "success":
      alertClass = "bg-green-200 border-1 border-green-400 text-green-800";
      break;
    case "error":
      alertClass = "bg-red-200 border-1 border-red-400 text-red-800";
      break;
    case "info":
      alertClass = "bg-blue-200 border-1 border-blue-400 text-blue-800";
      break;
    case "warning":
      alertClass = "bg-yellow-200 border-1 border-yellow-400 text-yellow-800";
      break;
  }

  return (
    <div className={twMerge("sm:col-span-2 my-3  p-3 rounded-md", alertClass)}>
      <p className="flex items-center gap-2 text-sm  font-medium">
        <CircleAlert /> {message}
      </p>
    </div>
  );
};
