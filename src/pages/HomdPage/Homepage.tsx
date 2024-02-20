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
      recipe.recipe = null;
    }
  }, []);

  return (
    <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
      <Hero />
      <ImageSection />
      {recipe !== null && <RecipeContainer />}
    </div>
  );
};

export default Homepage;
