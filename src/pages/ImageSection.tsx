import { useEffect, useState } from "react";
import { GPT_TASK_CREDIT, IMG_GPT_TASK } from "../redux/constants";
import ServiceChip from "../components/serviceChip";
import { MessageSquareText } from "lucide-react";
import { Variants, motion } from "framer-motion";
import EnterButton from "../components/buttons/EnterButton";
import { useDispatch, useSelector } from "react-redux";
import RequiredCredits from "../components/RequiredCredits";
import { RootState } from "../redux/store/store";
import { generateRecipe } from "../redux/store/recipe/action";
import { Recipe, User } from "../redux/Types";
import {
  fetchUserProfile,
  updateUserProfile,
} from "../redux/store/auth/action";
import toast from "react-hot-toast";
import RecipeContainer from "../components/Recipe Container/RecipeContainer";
import HistorySection from "../components/History/HistorySection";
import { getOpenaiResponse } from "../utils/utils";

const ImageSection = () => {
  const [foodName, setFoodName] = useState("");
  const [taskName, setTaskName] = useState(IMG_GPT_TASK);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch<any>();
  const { user } = useSelector((state: RootState) => state.auth);
  const {
    recipe,
    status: recipeStatus,
    error,
  } = useSelector((state: RootState) => state.recipe);

  // console.log("Recipe Status: ", recipeStatus);

  useEffect(() => {
    if (recipeStatus === "success") {
      console.log("Recipe: ", recipe);
    }
  }, [recipe]);

  const handelGetRecipe = (
    event: React.FormEvent<HTMLFormElement>,
    foodName: string
  ) => {
    event?.preventDefault();
    // check user authentication state
    setIsFetching(true);

    if (!user) {
      setIsFetching(false);
      toast.error("Please login to continue!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    try {
      // check if user has enough credits
      if (user.credit < GPT_TASK_CREDIT) {
        toast.error("You don't have enough credits", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setIsFetching(false);
        return;
      }

      // dispatch generate recipe action
      dispatch(generateRecipe({ foodName, uid: user.uid })).then((res: any) => {
        if (res.payload) {
          const recipe = res.payload as Recipe;

          toast.success("Found some great stuff for you!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });

          // update user profile
          dispatch(
            updateUserProfile({
              uid: user.uid,
              userProfile: {
                ...user,
                credit: user.credit - GPT_TASK_CREDIT,
                recipes: [...user.recipes, recipe as Recipe],
              } as User,
            })
          ).then(() => {
            dispatch(fetchUserProfile(user.uid));
            setIsFetching(false);
            toast.success(`You have used ${GPT_TASK_CREDIT} credits`, {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          });
        } else {
          toast.error("Something Went Wrong", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
      setIsFetching(false);
    }
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
              className="file_input peer"
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
                className="url_input peer"
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
