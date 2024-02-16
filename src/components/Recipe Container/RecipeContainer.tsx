import React from "react";
import { Variant, Variants, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { separateParagraph } from "../../utils/utils";

const ulVarient: Variants = {
  open: {
    overflow: "visible",
    height: "auto",
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
    transitionEnd: {
      overflow: "hidden",
      height: 0,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const RecipeContainer: React.FC = () => {
  const { recipe } = useSelector((state: RootState) => state.recipe);
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
          <motion.ul variants={ulVarient}>
            <motion.li variants={itemVariants}>{'ingredients[0'}</motion.li>
          </motion.ul>
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
        initial={{ y: 70 }}
        transition={{ stiffness: 100, duration: 0.7 }}
        className="summary_box flex flex-1 h-50"
      >
        text-3
      </motion.div>
    </div>
  );
};

export default RecipeContainer;
