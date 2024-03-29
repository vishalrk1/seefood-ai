import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { IMG_GPT_TASK } from "@/redux/constants";
import { cn } from "@/lib/utils";
import { ErrorInfo } from "../ErrorInfo";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

interface ImageDialogButtonProps {
  loading: boolean;
  taskName: string;
}

const ImageDialogButton: React.FC<ImageDialogButtonProps> = ({
  loading,
  taskName,
}) => {
  const { recipe } = useSelector((state: RootState) => state.recipe);

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader className="text-lg font-bold font-satoshi">
          Can not Classify Image
        </DialogHeader>
        <DialogDescription className="text-base font-satoshi">
          Please visit the classification portal to classify the image. we are
          not able to provide that service here at the moment.
          <ErrorInfo message="If portal not available click on restart space" />
        </DialogDescription>
        <DialogFooter>
          <Button
            onClick={() =>
              openInNewTab("https://huggingface.co/spaces/Vrk/SeeFood")
            }
          >
            Visit Classification Portal
          </Button>
        </DialogFooter>
      </DialogContent>
      <DialogTrigger>
        <button
          type="submit"
          className={cn([
            "hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700",
            taskName === IMG_GPT_TASK
              ? "border-gray-700 bg-white"
              : "border-gray-200",
          ])}
          title="Generate recipe"
          onClick={() => {
            if (recipe !== null) {
              recipe.recipe = null;
            }
          }}
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
      </DialogTrigger>
    </Dialog>
  );
};

export default ImageDialogButton;
