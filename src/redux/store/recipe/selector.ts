import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectRecipe = (state: RootState) => state.recipe;

export const recipeSelector = createSelector(selectRecipe, (state) => state);
