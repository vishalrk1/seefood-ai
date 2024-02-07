import { createReducer } from "@reduxjs/toolkit";
import { Recipe } from "../../Types";
import { generateRecipe } from "./action";

interface Recipetate {
  recipe: Recipe | null;
  status: string;
  error: string | null;
}

const initialState: Recipetate = {
  recipe: null,
  status: "idle",
  error: null,
};

const recipeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(generateRecipe.pending, (state) => {
      state.status = "loading";
      state.recipe = null;
    })
    .addCase(generateRecipe.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.recipe = action.payload;
    })
    .addCase(generateRecipe.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error as string;
    });
});

export default recipeReducer;
