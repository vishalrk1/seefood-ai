import React from "react";
import { GPT_TASK, IMG_GPT_TASK } from "../redux/constants";
import { twMerge } from "tailwind-merge";
import { Camera, MessageSquareText } from "lucide-react";

interface ServiceChipProps {
  taskName: string;
  setTaskName: React.Dispatch<React.SetStateAction<string>>;
}

const ServiceChip: React.FC<ServiceChipProps> = ({ taskName, setTaskName }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-50 shadow-md rounded-lg w-3/4 md:w-1/2 bg-white">
        <div
          className={twMerge(
            "flex flex-1 justify-center items-center rounded-lg px-2 py-1 gap-2",
            taskName === IMG_GPT_TASK
              ? "text-white bg-violet-500"
              : "text-bloac font-normal"
          )}
          onClick={() => setTaskName(IMG_GPT_TASK)}
        >
          {taskName === IMG_GPT_TASK && (
            <Camera className="w-4" color="white" />
          )}
          <p
            className={twMerge(
              "font-satoshi text-sm text-center cursor-pointer",
              taskName === IMG_GPT_TASK
                ? "font-semibold text-white"
                : "font-normal text-black"
            )}
          >
            Click Image
          </p>
        </div>
        <div
          className={twMerge(
            "flex flex-1 justify-center items-center rounded-lg px-2 py-1 gap-2",
            taskName === GPT_TASK
            ? "text-white bg-violet-500"
            : "text-black font-normal"
          )}
          onClick={() => setTaskName(GPT_TASK)}
        >
          {taskName === GPT_TASK && (
            <MessageSquareText className="w-4" color="white" />
          )}
          <p
            className={twMerge(
              "font-satoshi text-sm text-center cursor-pointer",
              taskName === GPT_TASK
                ? "font-semibold text-white"
                : "font-normal text-black"
            )}
          >
            Ask Recipe
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceChip;
