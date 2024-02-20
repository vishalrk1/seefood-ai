import { cn } from "@/lib/utils";
import { IMG_GPT_TASK } from "@/redux/constants";
import React from "react";

interface EnterButtonProps {
  loading: boolean;
  taskName: string;
}

const EnterButton: React.FC<EnterButtonProps> = ({ loading, taskName }) => {
  return (
    <button
      type="submit"
      className={cn([
        "hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700",
        // "border-gray-200",
        taskName === IMG_GPT_TASK ? "border-gray-700 bg-white" : "border-gray-200",
      ])}
      title="Generate recipe"
    >
      {loading ? (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="M19.3 0a.7.7 0 0 1 .7.7v8.278a6.7 6.7 0 0 1-6.699 6.698l-10.996-.001l3.131 3.13a.7.7 0 0 1-.99.99l-4.24-4.241a.7.7 0 0 1 0-.99l4.241-4.241a.7.7 0 1 1 .99.99l-2.965 2.963h10.83A5.299 5.299 0 0 0 18.6 8.978V.7a.7.7 0 0 1 .7-.7Z"
          />
        </svg>
      )}
    </button>
  );
};

export default EnterButton;
