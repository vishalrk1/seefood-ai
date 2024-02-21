import toast from "react-hot-toast";
import { Recipe, User } from "../redux/Types";
import { GPT_TASK_CREDIT } from "../redux/constants";
import { AppDispatch } from "../redux/store/store";
import {
  fetchUserProfile,
  updateUserProfile,
} from "../redux/store/auth/action";
import { generateRecipe, setRecipe } from "../redux/store/recipe/action";

export function separateParagraph(paragraph: string) {
  const sections = paragraph.split("\n\n");
  const ingredientHeaders = ["Ingredients", "Ingridients"];

  const ingredientIndex = sections.findIndex(
    (section) =>
      ingredientHeaders.some((header) =>
        section.trim().toLowerCase().startsWith(header.toLowerCase())
      )
  );

  const instructionIndex = sections.findIndex((section) =>
    section.startsWith("Instructions")
  );
  const servingIndex = sections.findIndex((section) =>
    section.startsWith("Serving")
  );
  const calorieIndex = sections.findIndex((section) =>
    section.startsWith("Protein Breakdown")
  );
  const descriptionIndex = sections.findIndex((section) =>
    section.startsWith("Description")
  );

  const extractPoints = (section: string) => {
    console.log(section);
    return section
      ?.split("\n")
      ?.slice(1)
      ?.map((point) => point?.trim()?.replace(/^(?:- |\d+\.\s*)/, ""));
  };

  console.log(sections);
  const ingredients = extractPoints(sections[ingredientIndex]);
  const instructions = extractPoints(sections[instructionIndex]);
  const serving = sections[servingIndex]
    ?.split(": ")
    ?.slice(1)
    ?.join("\n")
    .trim();
  const calorieBreakdown = extractPoints(sections[calorieIndex])?.map((point) =>
    point.replace(/^\s*[-\w]+:\s*/, "")
  );

  const description = sections[descriptionIndex]
    ?.split("\n")
    ?.slice(1)
    ?.join("\n")
    ?.trim();

  return { ingredients, instructions, serving, calorieBreakdown, description };
}

export const getOpenaiResponse = (
  event: React.FormEvent<HTMLFormElement>,
  foodName: string,
  user: User | null,
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: AppDispatch
) => {
  event?.preventDefault();
  // check user authentication state
  setIsFetching(true);
  dispatch(setRecipe(null));

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

  if (foodName.length === 0) {
    setIsFetching(false);
    toast("Please enter a food name", {
      icon: "❗",
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
    dispatch(generateRecipe({ foodName, uid: user.uid.toString() })).then(
      (res: any) => {
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
              uid: user.uid.toString(),
              userProfile: {
                ...user,
                credit: user.credit - GPT_TASK_CREDIT,
                recipes: [...user.recipes, recipe] as Recipe[],
              } as User,
            })
          ).then(() => {
            dispatch(fetchUserProfile(user.uid.toString()));
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
      }
    );
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
    setIsFetching(false);
  }
};
