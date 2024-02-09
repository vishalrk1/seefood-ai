import Hero from "../Hero";
import ImageSection from "../ImageSection";

import "../../index.css";
import RecipeContainer from "../../components/Recipe Container/RecipeContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";

const Homepage = () => {
  const { recipe, status } = useSelector((state: RootState) => state.recipe);
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // setting recipe to null
    if (status === "successed" && recipe !== null) {
      recipe.recipe = user.recipes[0];
    }
  }, []);

  console.log("INITIAL RECIPE: ", recipe);

  return (
    <div className="app">
      <Hero />
      <ImageSection />
      <RecipeContainer />
    </div>
  );
};

export default Homepage;
