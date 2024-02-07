import Hero from "../Hero";
import ImageSection from "../ImageSection";

import "../../index.css";
import RecipeContainer from "../../components/Recipe Container/RecipeContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";

const Homepage = () => {
  const { recipe, status } = useSelector((state: RootState) => state.recipe);

  useEffect(() => {
    // setting recipe to null
    if (status === "successed" && recipe !== null) {
      recipe.recipe = null;
    }
  }, []);

  console.log('INITIAL RECIPE: ',recipe);

  return (
    <div className="app">
      <Hero />
      <ImageSection />
      {
        recipe && <RecipeContainer />
      }
    </div>
  );
};

export default Homepage;
