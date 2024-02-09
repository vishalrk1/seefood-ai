import { Variants, motion } from "framer-motion";
import React, { useState } from "react";
import { Recipe } from "../../redux/Types";
import { twMerge } from "tailwind-merge";

interface HistorySectionProps {
  recipes: Recipe[];
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const HistorySection: React.FC<HistorySectionProps> = ({ recipes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const emojies = ['🍟', '🍔', '🍕', '🌭', '🥪', '🥙',  '🌮', '🌯', '🥗', '🍿', '🍦', '🍙']

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="flex flex-col gap-2 w-full flex-1 items-end"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-1/2 font-satoshi text-sm text-violet-500 font-semibold bg-white shadow-md rounded-md p-1 px-4 gap-4"
      >
        History
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="12" height="12" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
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
        }}
        className={twMerge("flex flex-col gap-2 bg-white rounded-md shadow-md p-2 w-full mb-3", )}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {recipes.length === 0 && (
          <motion.li
            variants={itemVariants}
            className="text-sm text-gray-500 font-semibold text-center"
          >
            No history
          </motion.li>
        )}
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <motion.li
              key={recipe.id}
              variants={itemVariants}
              className="flex items-center bg-violet-50 rounded-md p-1 cursor-pointer mx-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <p className="text-center bg-white rounded-md w-6 h-6">{emojies[Math.floor(Math.random() * emojies.length)]}</p>
                <p className="text-base text-center text-gray-600 font-semibold mx-2">{recipe.foodName}</p>
            </motion.li>
          ))}
      </motion.ul>
    </motion.nav>
  );
};

export default HistorySection;
