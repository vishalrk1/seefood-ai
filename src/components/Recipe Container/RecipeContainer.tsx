import React, { useEffect } from "react";
import { Variants, motion } from "framer-motion";
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
  const [detailedRecipe, setDetailedRecipe] = React.useState<any>(null);

  useEffect(() => {
    if (recipe) {
      const simplifiedRecipe = separateParagraph(
        recipe.recipe ? recipe.recipe : ""
      );
      setDetailedRecipe(simplifiedRecipe);
    }
  }, [recipe]);

  return (
    <div className="flex flex-col gap-2 my-3 w-full">
      <div className="flex flex-col md:flex-row gap-2 w-full">
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
          className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4 flex flex-1 flex-col gap-2"
        >
          <p className="text-xl font-semibold font-satoshi">Ingredients</p>
          <motion.ul variants={ulVarient} className="px-4">
            {detailedRecipe?.ingredients?.map((item: any) => (
              <motion.li
                variants={itemVariants}
                className="text-sm list-disc font-satoshi"
              >
                {item}
              </motion.li>
            ))}
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
          className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4 flex flex-col flex-1 h-50 gap-2"
        >
          <p className="text-xl font-semibold font-satoshi">
            Protein Breakdown
          </p>
          <motion.ul variants={ulVarient} className="px-4 mb-4">
            {detailedRecipe?.calorieBreakdown?.map((item: any) => (
              <motion.li
                variants={itemVariants}
                className="text-sm list-disc font-satoshi"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-xl font-semibold font-satoshi">Servings</p>
          <motion.ul variants={ulVarient} className="px-4 mt-0">
            <motion.li
              variants={itemVariants}
              className="text-sm list-disc font-satoshi"
            >
              {detailedRecipe?.serving}
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 70 }}
        transition={{ stiffness: 100, duration: 0.7 }}
        className="rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4 flex flex-col flex-1 h-50"
      >
        <p className="text-sm font-normal mb-2 w-ma max-w-7xl font-satoshi">
          {detailedRecipe?.description}
        </p>
        <p className="text-xl font-semibold font-satoshi">Instructions</p>
        <motion.ul variants={ulVarient} className="px-4 mt-0">
          {detailedRecipe?.instructions?.map((item: any) => (
            <motion.li variants={itemVariants} className="text-sm list-disc">
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default RecipeContainer;
