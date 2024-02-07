import { createAsyncThunk } from "@reduxjs/toolkit";
import OpenAI from "openai";
import { Recipe, User } from "../../Types";
import { firestore } from "../../firebase";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generateRecipe = createAsyncThunk(
  "gpt/generateRecipe",
  async ({ foodName, uid }: { foodName: string; uid: string }, thunkAPI) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "your a professional chef. generate detailed step wise recipies for all type of food considering following instructions. use numbering for steps. \n1. Add detailed Ingredients and Instructions\n2. Tell how many people can be served with this dish\n3. Add short calories and protein breakdown\n4. Add a short description of the dish\n5. Use titles Ingridients, Instructions, Serving, Protein Breakdown and Description",
          },
          {
            role: "user",
            content: foodName,
          },
        ],
        temperature: 1,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      const generatedRecipe = {
        id: Math.random().toString(),
        foodName: foodName,
        recipe: response.choices[0].message.content,
      } as Recipe;

      return generatedRecipe;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addRecipe = createAsyncThunk(
  "gpt/addRecipe",
  async ({ recipe, uid }: { recipe: Recipe; uid: string }, thunkAPI) => {
    try {
      const userRef = firestore.collection("seefood-users").doc(uid);
      const userData = (await userRef.get()).data() as User;

      await userRef.update({
        recipes: [...userData.recipes, recipe],
      });
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
