import React from "react";

const RecipeContainer: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 mt-6 w-full">
      <div className="flex gap-2 w-full">
        <div className="summary_box flex flex-1 h-50 shadow-xl">
            text-1
        </div>
        <div className="summary_box flex flex-1 h-50">
            text-2
        </div>
      </div>
      <div className="summary_box flex flex-1 h-50">
            text-3
        </div>
    </div>
  );
};

export default RecipeContainer;
