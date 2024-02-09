import { createReducer } from "@reduxjs/toolkit";
import { Recipe } from "../../Types";
import { generateRecipe } from "./action";

interface Recipetate {
  recipe: Recipe;
  status: string;
  loading: boolean;
  error: string | null;
}

const initialState: Recipetate = {
  recipe: {
    id: "",
    foodName: "",
    recipe: "",
  } as Recipe,
  status: "idle",
  loading: false,
  error: null,
};

const recipeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(generateRecipe.pending, (state) => {
      state.status = "loading";
      state.loading = true;
      state.recipe = {} as Recipe;
    })
    .addCase(generateRecipe.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.loading = false;
      state.recipe = action.payload;
    })
    .addCase(generateRecipe.rejected, (state, action) => {
      state.status = "failed";
      state.loading = false;
      state.error = action.error as string;
    });
});

export default recipeReducer;
