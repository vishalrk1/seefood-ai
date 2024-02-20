import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React from "react";

export interface ErrorInfoProps {
  message?: string;
}

export const ErrorInfo: React.FC<ErrorInfoProps> = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mt-2">
      <ExclamationTriangleIcon className="w-5 h-5" />
      <p>{message}</p>
    </div>
  );
};
