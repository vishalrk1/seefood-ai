import { useEffect, useState } from "react";
import { IMG_GPT_TASK } from "../redux/constants";
import ServiceChip from "../components/serviceChip";
import { MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
import EnterButton from "../components/buttons/EnterButton";
import { useDispatch, useSelector } from "react-redux";
import RequiredCredits from "../components/RequiredCredits";
import { RootState } from "../redux/store/store";
import HistorySection from "../components/History/HistorySection";
import { getOpenaiResponse } from "../utils/utils";

const ImageSection = () => {
  const [foodName, setFoodName] = useState("");
  const [taskName, setTaskName] = useState(IMG_GPT_TASK);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch<any>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { recipe, status: recipeStatus } = useSelector(
    (state: RootState) => state.recipe
  );

  // console.log("Recipe Status: ", recipeStatus);

  useEffect(() => {
    if (recipeStatus === "success") {
      console.log("Recipe: ", recipe);
    }
  }, [recipe]);

  return (
    <section className="mt-8 w-full max-w-xl">
      <motion.div
        initial="initial"
        animate="animate"
        exit="initial"
        variants={{
          initial: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.4 },
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
          },
        }}
        className="flex flex-col w-full gap-2"
      >
        <ServiceChip taskName={taskName} setTaskName={setTaskName} />
        <motion.form
          className="relative flex flex-col justify-center items-center"
          autoCapitalize="off"
          autoComplete="off"
          onSubmit={
            taskName === IMG_GPT_TASK
              ? undefined
              : (e) =>
                  getOpenaiResponse(e, foodName, user, setIsFetching, dispatch)
            // : (e) => handelGetRecipe(e, foodName)
          }
          noValidate
        >
          {taskName === IMG_GPT_TASK ? (
            <input
              name="fieldField"
              type="file"
              placeholder="Paste the Article Link"
              title="Paste the Article Link"
              className="block w-full h-10 rounded-md border border-gray-200 bg-white px-3 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 relative m-0 min-w-0 flex-auto cursor-pointer border-solid bg-clip-padding leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:h-full file:-mx-3 file:cursor-pointer file:rounded-md file:overflow-hidden file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:my-0 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 peer"
              required
            />
          ) : (
            <>
              <MessageSquareText className="absolute left-0 my-2 ml-3 w-5 text-gray-700" />
              <input
                name="fieldField"
                type="text"
                placeholder="Enter Food Name"
                title="Paste the Image Link"
                className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                required
              />
            </>
          )}
          <EnterButton loading={isFetching} />
        </motion.form>
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0,
              y: 20,
              transition: { duration: 0.7 },
            },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
          className="flex items-start justify-between w-full"
        >
          <RequiredCredits taskName={taskName} />
          {user?.recipes && <HistorySection recipes={user?.recipes} />}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ImageSection;
