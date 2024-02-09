import React from "react";
import { motion } from "framer-motion";

const RecipeContainer: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 my-3 w-full">
      <div className="flex gap-2 w-full">
        <motion.div
          animate={{
            x: 0,
          }}
          initial={{
            x: -70,
          }}
          transition={{
            stiffness: 100,
            duration: 0.7,
          }}
          className="summary_box flex flex-1 h-50 shadow-xl"
        >
          text-1
        </motion.div>
        <motion.div
          animate={{
            x: 0,
          }}
          initial={{
            x: 70,
          }}
          transition={{
            stiffness: 100,
            duration: 0.7,
          }}
          className="summary_box flex flex-1 h-50"
        >
          text-2
        </motion.div>
      </div>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -70 }}
        transition={{ stiffness: 100, duration: 0.7 }}
        className="summary_box flex flex-1 h-50"
      >
        text-3
      </motion.div>
    </div>
  );
};

export default RecipeContainer;
