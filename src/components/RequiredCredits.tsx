import React from "react";
import { IMG_GPT_TASK } from "../redux/constants";

interface Props {
  taskName: string;
}

const RequiredCredits: React.FC<Props> = ({ taskName }) => {
  return (
    <p className="flex-1 text-xs md:text-sm text-gray-500 ml-2 font-satoshi">
      {"This will require"}{" "}
      <span className="text-sm text-green-500 font-satoshi">{`${
        taskName === IMG_GPT_TASK ? 3 : 2
      } credits.`}</span>
    </p>
  );
};

export default RequiredCredits;
