// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { firestore } from "../../firebase";

// interface UserState {
//   profile: any | null;
//   status: string;
//   error: string | null;
// }

// const initialState: UserState = {
//   profile: null,
//   status: "idle",
//   error: null,
// };

// export const fetchUserProfile = createAsyncThunk(
//   "user/fetchUserProfile",
//   async (uid: string, thunkAPI) => {
//     try {
//       const doc = await firestore.collection("seefood-users").doc(uid).get();
//       if (doc.exists) {
//         return doc.data();
//       } else {
//         throw new Error("User profile not found");
//       }
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     clearError(state) {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserProfile.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchUserProfile.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.profile = action.payload;
//       })
//       .addCase(fetchUserProfile.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearError } = userSlice.actions;
// export default userSlice.reducer;
