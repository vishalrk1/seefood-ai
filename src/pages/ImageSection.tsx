import { useEffect, useState } from "react";
import { IMG_GPT_TASK } from "../redux/constants";
import ServiceChip from "../components/serviceChip";
import { CheckCircle2, MessageSquareText, UploadCloud } from "lucide-react";
import { motion } from "framer-motion";
import EnterButton from "../components/buttons/EnterButton";
import { useDispatch, useSelector } from "react-redux";
import RequiredCredits from "../components/RequiredCredits";
import { RootState } from "../redux/store/store";
import HistorySection from "../components/History/HistorySection";
import { getOpenaiResponse } from "../utils/utils";
import ImageDialogButton from "@/components/buttons/ImageDialogButton";

const ImageSection = () => {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState<any>(null);
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

  const handelImageInput = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFoodImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handelImageSubmit = (e: any) => {
    e.preventDefault();
  };

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
              ? (e) => handelImageSubmit(e)
              : (e) =>
                  getOpenaiResponse(e, foodName, user, setIsFetching, dispatch)
            // : (e) => handelGetRecipe(e, foodName)
          }
          noValidate
        >
          {taskName === IMG_GPT_TASK ? (
            <div className="w-full mx-auto">
              <div className="items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex items-center gap-2 p-1 w-full h-24 border-2 border-gray-300 border-dashed rounded-lg text-center cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  {foodImage === null ? (
                    <div className="flex flex-col items-center justify-center w-full text-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-1 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="h-full w-1/4 rounded-lg shadow-md">
                        <img
                          src={foodImage}
                          alt="food"
                          className="h-full w-full rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center w-full text-center pt-5 pb-6">
                        <CheckCircle2 className="w-6 h-6 mb-1 text-green-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          Image Uploaded Successfully 🙃
                        </p>
                      </div>
                    </>
                  )}
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handelImageInput}
                    required
                  />
                </label>
              </div>
            </div>
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
          {taskName === IMG_GPT_TASK ? (
            <ImageDialogButton loading={isFetching} taskName={taskName} />
          ) : (
            <EnterButton loading={isFetching} taskName={taskName} />
          )}
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
